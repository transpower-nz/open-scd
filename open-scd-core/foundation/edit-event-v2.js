function newEditEventV2(edit, options) {
    return new CustomEvent('oscd-edit-v2', {
        composed: true,
        bubbles: true,
        detail: { ...options, edit },
    });
}

export { newEditEventV2 };
//# sourceMappingURL=edit-event-v2.js.map
