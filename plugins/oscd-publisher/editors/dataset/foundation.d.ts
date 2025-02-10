import { Insert } from '@openenergytools/open-scd-core';
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
export declare function addFCDAs(dataSet: Element, paths: Element[][]): Insert[];
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
export declare function addFCDOs(dataSet: Element, fcPaths: {
    path: Element[];
    fc: string;
}[]): Insert[];
export type fcdaDesc = {
    LDevice?: string | null;
    LN?: string | null;
    DOI?: string | null;
    SDI?: string[];
    DAI?: string | null;
};
export declare function getFcdaInstDesc(fcda: Element): fcdaDesc;
