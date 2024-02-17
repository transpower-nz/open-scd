import { TemplateResult } from 'lit';
import { Edit } from '@openscd/open-scd-core';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '../../foundation/components/scl-wizarding-textfield.js';
interface AddressContentOptions {
    element: Element;
    types: string[];
}
export declare function existDiff(oldAddr: Element, newAddr: Element): boolean;
export declare function createAddressElement(parent: Element, inputs: Record<string, string | null>, instType: boolean): Element;
export declare function updateAddress(parent: Element, inputs: Record<string, string | null>, instType: boolean): Edit[];
export declare function hasTypeRestriction(element: Element): boolean;
export declare function contentAddress(content: AddressContentOptions): TemplateResult[];
export {};
