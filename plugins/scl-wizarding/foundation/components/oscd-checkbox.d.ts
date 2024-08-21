import '@material/mwc-formfield';
import '@material/mwc-switch';
import '@material/mwc-checkbox';
import type { Checkbox } from '@material/mwc-checkbox';
import type { Switch } from '@material/mwc-switch';
import { LitElement } from 'lit';
/** A potentially `nullable` labelled checkbox. */
export declare class OscdCheckbox extends LitElement {
    label: string;
    /** Parenthetical information rendered after the label: `label (helper)` */
    helper: string;
    /** Whether [[`maybeValue`]] may be `null` */
    nullable: boolean;
    /** The default `checked` state while [[`maybeValue`]] is `null`. */
    defaultChecked: boolean;
    /** Is `"true"` when checked, `"false"` un-checked, `null` if [[`nullable`]]. */
    get maybeValue(): string | null;
    set maybeValue(check: string | null);
    /** Disables component including null switch */
    disabled: boolean;
    private isNull;
    private get null();
    private set null(value);
    private initChecked;
    get checked(): boolean;
    set checked(value: boolean);
    private deactivateCheckbox;
    get formfieldLabel(): string;
    nullSwitch?: Switch;
    checkbox?: Checkbox;
    checkValidity(): boolean;
    private nulled;
    private enable;
    private disable;
    firstUpdated(): void;
    renderSwitch(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
