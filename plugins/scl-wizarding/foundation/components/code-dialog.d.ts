import { LitElement, TemplateResult } from 'lit';
import 'ace-custom-element';
import '@material/mwc-dialog';
import type AceEditor from 'ace-custom-element';
/**  */
export default class CodeDialog extends LitElement {
    element: Element;
    editor: AceEditor;
    save(element: Element): void;
    onClosed(ae: CustomEvent<{
        action: string;
    }>): void;
    updated(): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
