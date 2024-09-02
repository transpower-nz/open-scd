import { LitElement, TemplateResult } from 'lit';
import type { MdDialog } from '@material/web/dialog/dialog.js';
import type { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';
import type { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
import '@material/web/button/outlined-button.js';
import '@material/web/dialog/dialog.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field';
import '@material/web/icon/icon.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/icon-button.js';
export default class RenameIEDsPlugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    searchIedsRegex: RegExp;
    allIedNamesValid: boolean;
    iedsToRename: string[];
    dialogUI: MdDialog;
    iedListUI: HTMLUListElement;
    searchIedsUI?: MdOutlinedTextField;
    iedListItems?: NodeList[];
    run(): Promise<void>;
    docUpdate(): Promise<void>;
    duplicatedIedName(iedName: string): boolean;
    customCheckValidity(iedElement: MdFilledTextField): boolean;
    protected renderIedItem(ied: Element): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
