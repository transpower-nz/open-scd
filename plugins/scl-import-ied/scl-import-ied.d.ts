import { LitElement } from 'lit';
/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
export default class ImportIEDPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    input: HTMLInputElement;
    run(): Promise<void>;
    /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
    importIED(event: Event): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
