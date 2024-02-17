import { Update } from '@openscd/open-scd-core';
/**
 * Updates namespaces to include the XML schema instance and the
 * Transpower `etpc` namespaces for writing address elements.
 * @returns
 */
export declare function updateNamespaces(doc: XMLDocument): Update | undefined;
