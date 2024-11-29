function isNamespaced(value) {
    return value !== null && typeof value !== 'string';
}
function isUpdate(edit) {
    return edit.element !== undefined;
}
/**
 * @deprecated
 * @param edit
 * @returns a custom event `oscd-edit`
 */
function newEditEventV1(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

export { isNamespaced, isUpdate, newEditEventV1 };
//# sourceMappingURL=edit-event-v1.js.map
