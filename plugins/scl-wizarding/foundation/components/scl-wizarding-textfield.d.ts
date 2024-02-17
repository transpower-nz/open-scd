import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-switch';
import type { IconButton } from '@material/mwc-icon-button';
import type { Menu } from '@material/mwc-menu';
import type { Switch } from '@material/mwc-switch';
import { TextField } from '@material/mwc-textfield';
/** A potentially `nullable` `TextField` that allows for selection of an SI
 * `multiplier` if an SI `unit` is given.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`! */
export declare class SclWizardingTextfield extends TextField {
    /** Whether [[`maybeValue`]] may be `null` */
    nullable: boolean;
    /** Selectable SI multipliers for a non-empty [[`unit`]]. */
    multipliers: (string | null)[];
    private multiplierIndex;
    get multiplier(): string | null;
    set multiplier(value: string | null);
    /** SI Unit, must be non-empty to allow for selecting a [[`multiplier`]].
     * Overrides `suffix`. */
    unit: string;
    private isNull;
    private get null();
    private set null(value);
    /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
    get maybeValue(): string | null;
    set maybeValue(value: string | null);
    /** The default `value` displayed if [[`maybeValue`]] is `null`. */
    defaultValue: string;
    /** Additional values that cause validation to fail. */
    reservedValues: string[];
    private disabledSwitch;
    nullSwitch?: Switch;
    multiplierMenu?: Menu;
    multiplierButton?: IconButton;
    private nulled;
    private selectMultiplier;
    private enable;
    private disable;
    firstUpdated(): Promise<void>;
    checkValidity(): boolean;
    constructor();
    renderUnitSelector(): import("lit-html").TemplateResult<1>;
    renderMulplierList(): import("lit-html").TemplateResult<1>;
    renderSwitch(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
