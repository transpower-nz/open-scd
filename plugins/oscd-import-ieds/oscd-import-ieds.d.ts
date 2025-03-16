import { LitElement } from 'lit';
import '@material/web/button/text-button';
import '@material/web/dialog/dialog';
import { Dialog } from '@material/web/dialog/internal/dialog';
import '@openenergytools/filterable-lists/dist/selection-list.js';
import type { SelectionList, SelectItem } from '@openenergytools/filterable-lists/dist/selection-list.js';
/** An editor [[`plugin`]] to import IEDs from SCL files */
export default class ImportIEDsPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    items: SelectItem[];
    input: HTMLInputElement;
    dialogUI: Dialog;
    selectionList: SelectionList;
    run(): Promise<void>;
    clearSelection(): void;
    importIEDs(): Promise<void>;
    /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
    loadIEDs(event: Event): Promise<void>;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
