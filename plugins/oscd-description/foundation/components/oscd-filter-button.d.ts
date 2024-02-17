import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-dialog';
import { OscdFilteredList } from './oscd-filtered-list.js';
export interface SelectedItemsChangedDetail {
    selectedItems: string[];
}
export declare type SelectedItemsChangedEvent = CustomEvent<SelectedItemsChangedDetail>;
declare global {
    interface ElementEventMap {
        ['selected-items-changed']: SelectedItemsChangedEvent;
    }
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
export declare class FilterButton extends OscdFilteredList {
    header: TemplateResult | string;
    icon: string;
    disabled: boolean;
    private filterDialog;
    private toggleList;
    private onClosing;
    render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
