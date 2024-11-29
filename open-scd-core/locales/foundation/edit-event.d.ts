import { EditV2 } from '@openenergytools/xml-lib';
import { Edit, EditEvent } from './edit-event-v1.js';
import { EditEventOptions, EditEventV2 } from './edit-event-v2.js';
export declare function newEditEvent(edit: Edit | EditV2, options?: EditEventOptions): EditEvent | EditEventV2;
