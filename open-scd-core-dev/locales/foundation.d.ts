import { LitElement } from 'lit';
/** Constructor type for defining `LitElement` mixins. */
export declare type LitElementConstructor = new (...args: any[]) => LitElement;
export { newOpenEvent } from './foundation/open-event.js';
export type { OpenEvent, OpenDetail } from './foundation/open-event.js';
export { isNamespaced, isUpdate, newEditEventV1, } from './foundation/edit-event-v1.js';
export type { Edit, EditEvent, Update, AttributeValue, NamespacedAttributeValue, } from './foundation/edit-event-v1.js';
export type { EditEventV2, EditEventOptions, EditDetailV2, } from './foundation/edit-event-v2.js';
export { isRemove, isInsert } from '@openenergytools/xml-lib';
export type { Insert, Remove, SetAttributes, SetTextContent, EditV2, } from '@openenergytools/xml-lib';
export { newEditEvent } from './foundation/edit-event.js';
export { cyrb64 } from './foundation/cyrb64.js';
