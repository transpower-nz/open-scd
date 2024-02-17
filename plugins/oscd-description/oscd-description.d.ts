import { LitElement, PropertyValues, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-formfield';
import '@material/mwc-textfield';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-radio-list-item';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-icon';
import type { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import './foundation/components/oscd-filter-button.js';
export declare function getFcdaSubtitleValue(fcdaElement: Element): string;
/**
 * Editor for GOOSE and SMV supervision LNs
 */
export default class Description extends LitElement {
    doc: XMLDocument;
    docName: string;
    editCount: number;
    controlType: 'GOOSE' | 'SMV';
    private get iedList();
    selectedIEDs: string[];
    private get selectedIed();
    dataSetSectionUI: HTMLElement;
    dataSetExpanderButtonUI: IconButtonToggle;
    extRefSectionUI: HTMLElement;
    extRefExpanderButtonUI: IconButtonToggle;
    anyDataSetExpanded: boolean;
    anyExtRefSectionExpanded: boolean;
    protected updated(_changedProperties: PropertyValues): void;
    private renderIedSelector;
    protected updateExtRefSectionExpanded(): void;
    protected updateDatasetSectionExpanded(): void;
    protected renderDataSetFcdas(ds: Element): TemplateResult;
    protected renderDataSetHeader(): TemplateResult;
    protected renderDataSets(): TemplateResult;
    protected renderInputExtRefs(inputs: Element): TemplateResult;
    protected renderExtRefsHeader(): TemplateResult;
    protected renderTextField(sclElement: Element, label?: string): TemplateResult;
    protected renderExtRefs(): TemplateResult;
    protected render(): TemplateResult;
    onFieldInput: (...args: any) => void;
    static styles: import("lit").CSSResult;
}
