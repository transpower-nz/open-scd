export type fcdaDesc = {
    LDevice?: string | null;
    LN?: string | null;
    DOI?: string | null;
    SDI?: string[];
    DAI?: string | null;
};
export declare function getFcdaInstDesc(fcda: Element): fcdaDesc;
/**
 * Check if the ExtRef is already subscribed to a FCDA Element.
 *
 * @param extRefElement - The Ext Ref Element to check.
 */
export declare function isSubscribed(extRefElement: Element): boolean;
export declare function inputReference(input: Element): {
    fcdaRef: string;
    desc?: string;
};
export declare function inputSupportingText(input: Element): {
    extRefRef: string;
    desc?: string;
};
/** Returns the subscriber's supervision LN for a given control block and subscriber ied.
 *
 * @param cb - The control block being supervised
 * @param ied - The subscriber IED
 * @returns The supervision LN instance or null if not found
 */
export declare function getExistingSupervision(cb: Element, ied: Element): Element | null;
