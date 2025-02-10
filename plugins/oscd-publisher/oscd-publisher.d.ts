import { LitElement } from 'lit';
import { MdRadio } from '@scopedelement/material-web/radio/radio.js';
import { DataSetEditor } from './editors/dataset/data-set-editor.js';
import { GseControlEditor } from './editors/gsecontrol/gse-control-editor.js';
import { ReportControlEditor } from './editors/report/report-control-editor.js';
import { SampledValueControlEditor } from './editors/sampledvalue/sampled-value-control-editor.js';
declare const PublisherPlugin_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
export default class PublisherPlugin extends PublisherPlugin_base {
    static scopedElements: {
        'md-radio': typeof MdRadio;
        'report-control-editor': typeof ReportControlEditor;
        'gse-control-editor': typeof GseControlEditor;
        'sampled-value-control-editor': typeof SampledValueControlEditor;
        'data-set-editor': typeof DataSetEditor;
    };
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    private publisherType;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
export {};
