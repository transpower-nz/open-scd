type Mapping = {
    FCDA: string;
    ExtRef: string;
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
};
export declare function getMappingInfo(doc: XMLDocument, fromName: string, toName: string): ControlBlockInfo[];
export {};
