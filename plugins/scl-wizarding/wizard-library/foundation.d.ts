import { TemplateResult } from 'lit';
import { List } from '@material/mwc-list';
import { Select } from '@material/mwc-select';
import { TextArea } from '@material/mwc-textarea';
import { TextField } from '@material/mwc-textfield';
import { Edit } from '@openenergytools/open-scd-core';
import { SclWizardingTextfield } from '../foundation/components/scl-wizarding-textfield.js';
import { SclWizardingSelect } from '../foundation/components/scl-wizarding-select.js';
import { SclWizardingCheckbox } from '../foundation/components/scl-wizarding-checkbox.js';
/** Throws an error bearing `message`, never returning. */
export declare function unreachable(message: string): never;
/** @returns the cartesian product of `arrays` */
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export declare const wizardInputSelector = "scl-wizarding-textfield, mwc-textfield, mwc-textarea, ace-editor, mwc-select, scl-wizarding-select, scl-wizarding-checkbox";
export type WizardInputElement = SclWizardingTextfield | TextField | TextArea | Select | SclWizardingSelect;
/** @returns [[`EditorAction`]]s to dispatch on [[`WizardDialog`]] commit. */
export type WizardActor = (inputs: WizardInputElement[], wizard: Element, list?: List | null) => Edit[];
export declare function canCheckValidity(type: any): type is SclWizardingTextfield | SclWizardingSelect | TextField | Select;
/** @returns the validity of `input` depending on type. */
export declare function checkValidity(input: WizardInputElement): boolean;
export declare function canReportValidity(type: any): type is SclWizardingTextfield | SclWizardingSelect | TextField | Select;
/** reports the validity of `input` depending on type. */
export declare function reportValidity(input: WizardInputElement): boolean;
export declare function isInputWithMaybeValue(type: any): type is SclWizardingTextfield | SclWizardingCheckbox | SclWizardingSelect;
/** @returns the `value` or `maybeValue` of `input` depending on type. */
export declare function getValue(input: WizardInputElement): string | null;
export declare function isSclTextfield(type: any): type is SclWizardingTextfield;
/** @returns the `multiplier` of `input` if available. */
export declare function getMultiplier(input: WizardInputElement): string | null;
/** @returns [[`WizardAction`]]s to dispatch on [[`WizardDialog`]] menu action. */
export type WizardMenuActor = (wizard: Element) => void;
/** User interactions rendered in the wizard-dialog menu */
export interface MenuAction {
    label: string;
    icon?: string;
    action: WizardMenuActor;
}
/** Represents a page of a wizard dialog */
export interface WizardPage {
    title: string;
    content?: TemplateResult[];
    primary?: {
        icon: string;
        label: string;
        action: WizardActor;
        auto?: boolean;
    };
    secondary?: {
        icon: string;
        label: string;
        action: WizardActor;
    };
    initial?: boolean;
    menuActions?: MenuAction[];
}
export type Wizard = WizardPage[];
export type WizardFactory = () => Wizard;
/** If `wizard === null`, close the current wizard, else queue `wizard`. */
export interface WizardDetail {
    wizard: WizardFactory | null;
    subWizard?: boolean;
}
/** @returns a clone of `element` with attributes set to values from `attrs`. */
export declare function cloneElement(element: Element, attrs: Record<string, string | null>): Element;
/**
 * Extract the 'name' attribute from the given XML element.
 * @param element - The element to extract name from.
 * @returns the name, or undefined if there is no name.
 */
export declare function getNameAttribute(element: Element): string | undefined;
export declare function isPublic(element: Element): boolean;
/** @returns a new [[`tag`]] element owned by [[`doc`]]. */
export declare function createElement(doc: Document, tag: string, attrs: Record<string, string | null>): Element;
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
export declare function getTypes(element: Element): string[];
/** Patterns from IEC 61850-6 for all `P` elements */
export declare const typePattern: Partial<Record<string, string>>;
/** Whether `P` element is required within `Address` */
export declare const typeNullable: Partial<Record<string, boolean>>;
/** Max length definition for all `P` element */
export declare const typeMaxLength: Partial<Record<string, number>>;
/** Sorts selected `ListItem`s to the top and disabled ones to the bottom. */
export declare function compareNames(a: Element | string, b: Element | string): number;
/** @returns reserved siblings names attributes */
export declare function reservedNames(element: Element, tagName?: string): string[];
