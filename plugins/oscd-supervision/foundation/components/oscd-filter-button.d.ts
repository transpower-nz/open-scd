import { CSSResultGroup, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-dialog';
import { OscdFilteredListOld } from './oscd-filtered-list-old.js';
export interface SelectedItemsChangedDetail {
    selectedItems: string[];
}
export type SelectedItemsChangedEvent = CustomEvent<SelectedItemsChangedDetail>;
declare global {
    interface ElementEventMap {
        ['selected-items-changed']: SelectedItemsChangedEvent;
    }
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
export declare class FilterButton extends OscdFilteredListOld {
    header: TemplateResult | string;
    icon: string;
    disabled: boolean;
    private filterDialog;
    private toggleList;
    private onClosing;
    render(): TemplateResult<1>;
    static styles: CSSResultGroup;
}
