import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon-button';
import type { IconButton } from '@material/mwc-icon-button';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { Menu } from '@material/mwc-menu';
/** base class hosting global properties and the remove method */
export default class BaseSubstationElementEditor extends LitElement {
    /** The edited `Function` element */
    element: Element;
    /** indicator for changes element */
    editCount: number;
    /** Whether function type element shall be shown */
    showfunctions: boolean;
    /** Whether text/private type element shall be shown */
    showuserdef: boolean;
    addMenu?: Menu;
    addButton: IconButton;
    removeActionable?: HTMLElement;
    editActionable?: HTMLElement;
    addMenuActionable?: HTMLElement;
    addActionable?: ListItem[];
    private openCreateWizard;
    openEditWizard(): void;
    removeElement(): void;
    updated(): void;
    private renderAddButtons;
    renderAddButton(): TemplateResult;
}
