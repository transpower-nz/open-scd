export type fcdaDesc = {
    LDevice?: string | null;
    LN?: string | null;
    DOI?: string | null;
    SDI?: string[];
    DAI?: string | null;
};
export declare function getFcdaInstDesc(fcda: Element): fcdaDesc;
