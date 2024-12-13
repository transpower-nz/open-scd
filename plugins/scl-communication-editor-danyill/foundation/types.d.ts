export interface IED {
    element: Element;
    ied: Element;
    name: string;
}
export interface Connection {
    id: string;
    source: {
        iedName: Element;
        ied: Element;
        controlBlock: Element;
    };
    target: {
        iedName: Element;
        ied: Element;
        /** Could be `ClientLN` or `ExtRef` */
        inputs: Element[];
    };
}
