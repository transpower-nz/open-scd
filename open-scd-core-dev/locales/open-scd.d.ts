import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-drawer';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-list';
import '@material/mwc-menu';
import '@material/mwc-select';
import '@material/mwc-tab-bar';
import '@material/mwc-textfield';
import '@material/mwc-top-app-bar-fixed';
import type { Dialog } from '@material/mwc-dialog';
import type { Drawer } from '@material/mwc-drawer';
import type { IconButton } from '@material/mwc-icon-button';
import type { Menu } from '@material/mwc-menu';
import type { Select } from '@material/mwc-select';
import type { TextField } from '@material/mwc-textfield';
import './components/code-wizard.js';
import './components/oscd-card.js';
import { EditV2 } from '@openenergytools/xml-lib';
import type { CodeWizard } from './components/code-wizard.js';
import { allLocales } from './locales.js';
import { EditEvent, OpenEvent } from './foundation.js';
import { WizardRequest } from './foundation/wizard-event.js';
import { EditEventV2 } from './foundation/edit-event-v2.js';
import { Plugin } from './foundation/plugin-event.js';
export declare type LogEntry = {
    undo: EditV2;
    redo: EditV2;
    title?: string;
};
export declare type PluginSet = {
    menu: Plugin[];
    editor: Plugin[];
};
declare type Control = {
    icon: string;
    getName: () => string;
    isDisabled: () => boolean;
    action?: () => unknown;
};
declare type RenderedPlugin = Control & {
    tagName: string;
};
declare type LocaleTag = typeof allLocales[number];
export declare class OpenSCD extends LitElement {
    #private;
    get doc(): XMLDocument;
    history: LogEntry[];
    docVersion: number;
    editCount: number;
    get last(): number;
    get canUndo(): boolean;
    get canRedo(): boolean;
    /** The set of `XMLDocument`s currently loaded */
    docs: Record<string, XMLDocument>;
    /** The name of the [[`doc`]] currently being edited */
    docName: string;
    /** The file endings of editable files */
    editable: string[];
    isEditable(docName: string): boolean;
    get editableDocs(): string[];
    get loadedPlugins(): Map<string, Plugin>;
    get plugins(): PluginSet;
    set plugins(plugins: Partial<PluginSet>);
    loadPlugin(plugin: Plugin): void;
    unloadPlugin(name: string, kind: 'menu' | 'editor'): void;
    private onConfigurePlugin;
    handleOpenDoc({ detail: { docName, doc } }: OpenEvent): void;
    updateVersion(): void;
    handleEditEvent(event: EditEvent): void;
    squashUndo(undoEdits: EditV2): EditV2;
    squashRedo(edits: EditV2): EditV2;
    handleEditEventV2(event: EditEventV2): void;
    /** Undo the last `n` [[Edit]]s committed */
    undo(n?: number): void;
    /** Redo the last `n` [[Edit]]s that have been undone */
    redo(n?: number): void;
    logUI: Dialog;
    editFileUI: Dialog;
    menuUI: Drawer;
    fileNameUI: TextField;
    fileExtensionUI: Select;
    fileMenuUI: Menu;
    fileMenuButtonUI?: IconButton;
    get locale(): LocaleTag;
    set locale(tag: LocaleTag);
    private editorIndex;
    get editor(): string;
    private controls;
    get menu(): Required<Control>[];
    get editors(): RenderedPlugin[];
    /** FIFO queue of [[`Wizard`]]s to display. */
    workflow: WizardRequest[];
    codeWizard?: CodeWizard;
    private closeWizard;
    private onWizard;
    private hotkeys;
    private handleKeyPress;
    constructor();
    private renderWizard;
    private renderLogEntry;
    private renderHistory;
    render(): TemplateResult<1>;
    firstUpdated(): void;
    updated(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'open-scd': OpenSCD;
    }
}
export {};
