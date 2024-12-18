import { SVGTemplateResult } from 'lit';
import { Connection } from './types.js';
export declare const serviceColoring: Record<string, string>;
type Count = {
    n: {
        index: number;
        total: number;
    };
    e: {
        index: number;
        total: number;
    };
    s: {
        index: number;
        total: number;
    };
    w: {
        index: number;
        total: number;
    };
};
export declare function svgPath(conn: Connection, faceCount: Record<string, Count>): string[];
export declare function svgConnectionGenerator(substation: Element, conns: Connection[]): (conn: Connection) => SVGTemplateResult;
export {};
