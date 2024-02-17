import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
export declare class ProcessEditor extends BaseSubstationElementEditor {
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderProcesses(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
