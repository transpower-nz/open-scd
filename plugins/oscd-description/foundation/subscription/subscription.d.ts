import { Insert, Remove } from '@openscd/open-scd-core';
export declare const SCL_NAMESPACE = "http://www.iec.ch/61850/2003/SCL";
/**
 * Simple function to check if the attribute of the Left Side has the same value as the attribute of the Right Element.
 *
 * @param leftElement   - The Left Element to check against.
 * @param rightElement  - The Right Element to check.
 * @param attributeName - The name of the attribute to check.
 */
export declare function sameAttributeValue(leftElement: Element | undefined, rightElement: Element | undefined, attributeName: string): boolean;
/**
 * Simple function to check if the attribute of the Left Side has the same value as the attribute of the Right Element.
 *
 * @param leftElement        - The Left Element to check against.
 * @param leftAttributeName  - The name of the attribute (left) to check against.
 * @param rightElement       - The Right Element to check.
 * @param rightAttributeName - The name of the attribute (right) to check.
 */
export declare function sameAttributeValueDiffName(leftElement: Element | undefined, leftAttributeName: string, rightElement: Element | undefined, rightAttributeName: string): boolean;
export declare type SclEdition = '2003' | '2007B' | '2007B4';
export declare function getSclSchemaVersion(doc: Document): SclEdition;
export declare const serviceTypes: Partial<Record<string, string>>;
/**
 * Check if the ExtRef is already subscribed to a FCDA Element.
 *
 * @param extRefElement - The Ext Ref Element to check.
 */
export declare function isSubscribed(extRefElement: Element): boolean;
/**
 * Check if specific attributes from the ExtRef Element are the same as the ones from the FCDA Element
 * and also if the IED Name is the same. If that is the case this ExtRef subscribes to the selected FCDA
 * Element.
 *
 * @param controlTagName - Indicates which type of control element.
 * @param controlElement - The Control Element to check against.
 * @param fcdaElement    - The FCDA Element to check against.
 * @param extRefElement  - The Ext Ref Element to check.
 */
export declare function isSubscribedTo(controlTagName: 'SampledValueControl' | 'GSEControl', controlElement: Element | undefined, fcdaElement: Element | undefined, extRefElement: Element): boolean;
/**
 * Creates a string pointer to the control block element.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @returns null if the control block is undefined or a string pointer to the control block element
 */
export declare function controlBlockReference(controlBlock: Element | undefined): string | null;
export declare function findFCDAs(extRef: Element): Element[];
/**
 * Searches for first instantiated LGOS/LSVS LN for presence of DOI>DAI[valKind=Conf/RO][valImport=true]
 * given a supervision type and if necessary then searches DataTypeTemplates for
 * DOType>DA[valKind=Conf/RO][valImport=true] to determine if modifications to supervision are allowed.
 * @param ied - SCL IED element.
 * @param supervisionType - either 'LGOS' or 'LSVS' supervision LN classes.
 * @returns boolean indicating if subscriptions are allowed.
 */
export declare function isSupervisionModificationAllowed(ied: Element, supervisionType: string): boolean;
/**
 * Return an array with a single Remove action to delete the supervision element
 * for the given GOOSE/SMV message and subscriber IED.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns an empty array if removing the supervision is not possible or an array
 * with a single Delete action that removes the LN if it was created in OpenSCD
 * or only the supervision structure DOI/DAI/Val if it was created by the user.
 */
export declare function removeSubscriptionSupervision(controlBlock: Element | undefined, subscriberIED: Element | undefined): Remove[];
/**
 * Counts the max number of LN instances with supervision allowed for
 * the given control block's type of message.
 *
 * @param subscriberIED The subscriber IED
 * @param controlBlockType The GOOSE or SMV message element
 * @returns The max number of LN instances with supervision allowed
 */
export declare function maxSupervisions(subscriberIED: Element, controlBlockType: string): number;
/** Returns an new LN instance available for supervision instantiation
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns The LN instance or null if no LN instance could be found or created
 */
export declare function createNewSupervisionLnInst(controlBlock: Element, subscriberIED: Element, supervisionType: string): Element | null;
/** Returns an new or existing LN instance available for supervision instantiation
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns The LN instance or null if no LN instance could be found or created
 */
export declare function findOrCreateAvailableLNInst(controlBlock: Element, subscriberIED: Element, supervisionType: string): Element | null;
/**
 * Returns an array with a single Insert Edit to create a new
 * supervision element for the given GOOSE/SMV message and subscriber IED.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @param subscriberIED The subscriber IED
 * @returns an empty array if instantiation is not possible or an array with a single Create action
 */
export declare function instantiateSubscriptionSupervision(controlBlock: Element | undefined, subscriberIED: Element | undefined, existingSupervision?: Element | undefined): (Insert | Remove)[];
