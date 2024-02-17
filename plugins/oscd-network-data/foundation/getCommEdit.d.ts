import { Insert } from '@openscd/open-scd-core';
/** @returns the cartesian product of `arrays` */
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export declare function getCommEdit(address: Element, privateSCL: Element, iedName: string): Insert | undefined;
