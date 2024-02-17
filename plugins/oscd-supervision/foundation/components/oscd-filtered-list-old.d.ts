import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import type { TextField } from '@material/mwc-textfield';
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms.
 * This is based on a legacy code base which is no longer compatible with the @open-scd/oscd-filtered-list
 * component.
 */
export declare class OscdFilteredListOld extends ListBase {
    /** search mwc-textfield label property */
    searchFieldLabel?: string;
    /** Whether the check all option (checkbox next to search text field) is activated */
    disableCheckAll: boolean;
    private get existCheckListItem();
    private get isAllSelected();
    private get isSomeSelected();
    searchField: TextField;
    private onCheckAll;
    onFilterInput(): void;
    protected onListItemConnected(e: CustomEvent): void;
    constructor();
    private renderCheckAll;
    render(): import("lit").TemplateResult<1>;
    static styles: any;
}
