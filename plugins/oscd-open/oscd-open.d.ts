import { LitElement } from 'lit';
import '@material/web/progress/circular-progress.js';
export default class OscdOpen extends LitElement {
    showProgress: boolean;
    input: HTMLInputElement;
    run(): Promise<void>;
    openDocs(event: Event): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
