/** Intent to `parent.insertBefore(node, reference)` */
import { Insert, Remove } from '@openenergytools/xml-lib';
/** @deprecated */
export declare type NamespacedAttributeValue = {
    value: string | null;
    namespaceURI: string | null;
};
/** @deprecated */
export declare type AttributeValue = string | null | NamespacedAttributeValue;
/** Intent to set or remove (if null) attributes on element @deprecated */
export declare type Update = {
    element: Element;
    attributes: Partial<Record<string, AttributeValue>>;
};
/** Represents the user's intent to change an XMLDocument @deprecated */
export declare type Edit = Insert | Update | Remove | Edit[];
export declare function isNamespaced(value: AttributeValue): value is NamespacedAttributeValue;
export declare function isUpdate(edit: Edit): edit is Update;
/** @deprecated */
export declare type EditEvent<E extends Edit = Edit> = CustomEvent<E>;
/**
 * @deprecated
 * @param edit
 * @returns a custom event `oscd-edit`
 */
export declare function newEditEventV1<E extends Edit>(edit: E): EditEvent<E>;
declare global {
    interface ElementEventMap {
        ['oscd-edit']: EditEvent;
    }
}
