import { Remove } from '@openscd/open-scd-core';
/**
 * Removes existing `Private` address elements in preparation for
 * rewriting.
 * @returns Remove edit array.
 */
export declare function removeExistingSubscribedAddresses(doc: XMLDocument): Remove[];
