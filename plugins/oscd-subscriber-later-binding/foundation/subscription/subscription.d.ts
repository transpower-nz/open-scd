import { fcdaDesc } from '../tDataSet/getFcdaInstDesc.js';
export type fcdaData = {
    spec: {
        cdc: string;
        bType?: string;
    } | undefined;
    desc: fcdaDesc;
};
export declare function getFcdaOrExtRefTitle(fcdaElement: Element): string;
export declare function getExtRefElements(rootElement: Element, fcdaElement: Element | undefined, includeLaterBinding: boolean): Element[];
export declare function getSubscribedExtRefElements(rootElement: Element, fcdaElement: Element | undefined, controlElement: Element | undefined, includeLaterBinding: boolean): Element[];
export declare function getCbReference(extRef: Element): string;
/** Returns the subscriber's supervision LN for a given control block and extRef element
 *
 * @param extRef - The extRef SCL element in the subscribing IED.
 * @returns The supervision LN instance or null if not found
 */
export declare function getExistingSupervision(extRef: Element | null): Element | null;
/**
 * Check if the ExtRef is already subscribed to a FCDA Element.
 *
 * @param extRefElement - The Ext Ref Element to check.
 */
export declare function isSubscribed(extRefElement: Element): boolean;
/**
 * Check if the ExtRef is already partially subscribed to a FCDA Element.
 *
 * @param extRefElement - The Ext Ref Element to check.
 */
export declare function isPartiallyConfigured(extRefElement: Element): boolean;
export declare function getOrderedIeds(doc: XMLDocument): Element[];
/**
 * Returns the used supervision LN instances for a given service type.
 *
 * @param doc - SCL document.
 * @param serviceType - either GOOSE or SMV.
 * @returns - array of Elements of supervision LN instances.
 */
export declare function getUsedSupervisionInstances(doc: Document, serviceType: string): Element[];
export declare function getExtRefControlBlockPath(extRefElement: Element): string;
export declare function getFcdaElements(controlElement: Element): Element[];
/**
 * Given an ExtRef SCL element, will locate the FCDA within the correct dataset the subscription comes from.
 * @param extRef - SCL ExtRef Element.
 * @param controlBlock - SCL GSEControl or SampledValueControl associated with the ExtRef.
 * @returns - SCL FCDA element
 */
export declare function findFCDA(extRef: Element, controlBlock: Element): Element | null;
