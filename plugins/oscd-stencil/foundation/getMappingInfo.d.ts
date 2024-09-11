export type Mapping = {
    ExtRef: string;
    FCDA: string;
};
export type ControlBlockInfo = {
    id: string;
    name: string;
    from: string;
    to: string;
    baseFrom?: string;
    baseTo?: string;
    type: string;
    mappings: Mapping[];
    supervision: string;
    selSupervision?: {
        ExtRef: string;
        name: string;
    };
};
/**
 * A near copy of the same function in scl-lib.
 * Excludes the service type match.
 */
export declare function matchSrcAttributes(extRef: Element, control: Element): boolean;
export declare function getMappingInfo(doc: XMLDocument, fromName: string, toName: string, includeSELSupervision?: boolean): ControlBlockInfo[];
