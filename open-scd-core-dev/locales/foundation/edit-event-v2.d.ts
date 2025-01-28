import { EditV2 } from '@openenergytools/xml-lib';
export declare type EditDetailV2<E extends EditV2 = EditV2> = {
    edit: E;
    title?: string;
    squash?: boolean;
};
export declare type EditEventV2<E extends EditV2 = EditV2> = CustomEvent<EditDetailV2<E>>;
export declare type EditEventOptions = {
    title?: string;
    squash?: boolean;
};
export declare function newEditEventV2<E extends EditV2>(edit: E, options?: EditEventOptions): EditEventV2<E>;
declare global {
    interface ElementEventMap {
        ['oscd-edit-v2']: EditEventV2;
    }
}
