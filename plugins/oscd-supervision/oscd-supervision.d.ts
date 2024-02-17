import { LitElement, PropertyValues, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-radio-list-item';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@openscd/oscd-filtered-list';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { List } from '@material/mwc-list';
import type { TextField } from '@material/mwc-textfield';
import './foundation/components/oscd-filter-button.js';
/**
 * Editor to allow allocation of GOOSE and SMV supervision LNs
 * to control blocks
 */
export default class OscdSupervision extends LitElement {
    doc: XMLDocument;
    docName: string;
    editCount: number;
    controlType: 'GOOSE' | 'SMV';
    private get iedList();
    selectedIEDs: string[];
    /**
     * Control block references for non-selected IEDs
     */
    otherIedsCBRefs: Array<string>;
    /**
     * Control block references for which selected IED
     * has a subscription in an `ExtRef` element
     */
    selectedIedSubscribedCBRefs: Array<string>;
    /**
     * Control block references for which the selected IED
     * has an supervision LN referenced to
     */
    selectedIedSupervisedCBRefs: Array<string>;
    searchUnusedSupervisions: RegExp;
    private get selectedIed();
    selectedControl: Element | null;
    selectedSupervision: Element | null;
    newSupervision: boolean;
    instantiatedSupervisionLNs: number;
    availableSupervisionLNs: number;
    selectedUnusedControlsListUI: List;
    selectedUnusedSupervisionsListUI: List;
    deleteSupervisionsListsUI: NodeListOf<List>;
    removeUsedSupervisionsListUI: List;
    selectedUnusedControlUI?: ListItem;
    selectedUnusedSupervisionUI?: ListItem;
    selectedUsedSupervisionDeleteUI?: ListItem;
    selectedUsedSupervisionRemoveUI?: ListItem;
    selectedUnusedSupervisionDeleteUI?: ListItem;
    filterUnusedSupervisionInputUI?: TextField;
    filterUnusedControlBlocksList?: HTMLElement;
    /**
     * Update stores of control block references which have (from this IED)
     * supervisions or subscriptions or belong to other IEDs
     */
    protected updateCBRefInfo(ied: Element | undefined, controlType: 'GOOSE' | 'SMV'): void;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    renderUnusedSupervisionNode(lN: Element): TemplateResult;
    renderSupervisionListItem(lN: Element, interactive: boolean): TemplateResult;
    clearListSelections(): void;
    private getSelectedIedSupLNs;
    searchUnusedSupervisionLN(supLn: Element): boolean;
    protected renderUnusedSupervisionLNs(used?: boolean, unused?: boolean): TemplateResult;
    private renderDeleteIcons;
    private renderUsedSupervisionLNs;
    private renderUsedSupervisionRemovalIcons;
    private renderControl;
    private renderUsedControls;
    private renderInfo;
    private renderIedSelector;
    private resetSearchFilters;
    private renderUnusedControlList;
    private renderUnusedSupervisionList;
    renderUnusedControlBlocksAndSupervisions(): TemplateResult;
    renderControlSelector(): TemplateResult;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
