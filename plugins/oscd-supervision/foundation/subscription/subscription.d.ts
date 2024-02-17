import type { Edit } from '@openscd/open-scd-core';
/**
 * Creates a string pointer to the control block element.
 *
 * @param controlBlock The GOOSE or SMV message element
 * @returns null if the control block is undefined or a string pointer to the control block element
 */
export declare function controlBlockReference(controlBlock: Element | undefined): string | null;
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
export declare function createNewSupervisionLnEvent(ied: Element, supervisionType: 'LGOS' | 'LSVS'): Edit | null;
