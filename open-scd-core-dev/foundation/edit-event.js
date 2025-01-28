import { isEditV2 } from '../node_modules/@openenergytools/xml-lib/dist/editv2.js';
import { convertEdit } from '../node_modules/@openenergytools/xml-lib/dist/convertEdit.js';
import '../node_modules/@openenergytools/xml-lib/dist/testHelpers.js';
import { newEditEventV1 } from './edit-event-v1.js';
import { newEditEventV2 } from './edit-event-v2.js';

function newEditEvent(edit, options) {
    if (isEditV2(edit))
        return newEditEventV2(edit, options);
    if (options)
        return newEditEventV2(convertEdit(edit), options);
    return newEditEventV1(edit);
}

export { newEditEvent };
//# sourceMappingURL=edit-event.js.map
