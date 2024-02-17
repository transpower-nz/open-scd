import { SCLTag } from '../utils/scldata.js';
type IdentityFunction = (e: Element) => string | number;
type SelectorFunction = (tagName: SCLTag, identity: string) => string;
export declare const tags: Record<SCLTag, {
    identity: IdentityFunction;
    selector: SelectorFunction;
}>;
export {};
