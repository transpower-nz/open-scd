import { LitElement, TemplateResult } from 'lit';
export default class TriggerWizard extends LitElement {
    doc: XMLDocument;
    input: HTMLInputElement;
    parentinput: HTMLInputElement;
    childinput: HTMLInputElement;
    triggerInspectWizard(): void;
    triggerCreateWizard(): void;
    render(): TemplateResult;
}
