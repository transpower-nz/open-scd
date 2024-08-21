import '@material/mwc-switch';
import type { Switch } from '@material/mwc-switch';
import { Select } from '@material/mwc-select';
/** A potentially `nullable` `Select`.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`! */
export declare class SclSelect extends Select {
    /** Whether [[`maybeValue`]] may be `null` */
    nullable: boolean;
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
    private nulled;
    private enable;
    private disable;
    firstUpdated(): Promise<void>;
    checkValidity(): boolean;
    constructor();
    renderSwitch(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
