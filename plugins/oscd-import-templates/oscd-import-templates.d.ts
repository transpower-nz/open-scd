import { LitElement, TemplateResult } from 'lit';
import type { Dialog } from '@material/mwc-dialog';
import type { Checkbox } from '@material/mwc-checkbox';
import '@material/dialog';
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import './foundation/components/oscd-textfield.js';
export default class ImportTemplateIedPlugin extends LitElement {
    doc: XMLDocument;
    importDocs?: XMLDocument[];
    editCount: number;
    pluginFileUI: HTMLInputElement;
    dialog: Dialog;
    icdList: HTMLUListElement;
    importCommsAddressesUI: Checkbox;
    inputSelected: boolean;
    importIedCount: number | null;
    failFast: boolean;
    errorString: string[];
    run(): Promise<void>;
    docUpdate(): Promise<void>;
    private importTemplateIED;
    private importTemplateIEDs;
    isImportValid(templateDoc: Document, filename: string): boolean;
    /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
    protected onLoadFiles(event: Event): Promise<void>;
    protected renderInput(): TemplateResult;
    protected renderIcdListItem(doc: Document): TemplateResult;
    protected getSumOfIedsToCreate(): void;
    protected renderIedSelection(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
