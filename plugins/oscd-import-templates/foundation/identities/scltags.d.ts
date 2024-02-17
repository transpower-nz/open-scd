import { SCLTag } from '../utils/scldata.js';
declare type IdentityFunction = (e: Element) => string | number;
declare type SelectorFunction = (tagName: SCLTag, identity: string) => string;
export declare const tags: Record<SCLTag, {
    identity: IdentityFunction;
    selector: SelectorFunction;
}>;
export {};
