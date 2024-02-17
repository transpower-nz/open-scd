import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-switch';
import type { Dialog } from '@material/mwc-dialog';
import type { Switch } from '@material/mwc-switch';
import { EditEvent } from '@openscd/open-scd-core';
export default class SubscriberLaterBindingSEL extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    preEventExtRef: (Element | null)[];
    ignoreSupervision: boolean;
    dialogUI?: Dialog;
    enabledUI?: Switch;
    enabled: boolean;
    constructor();
    run(): Promise<void>;
    /**
     * This method records the ExtRefs prior to the EditEvent and
     * also records whether supervisions can be changed for later
     * processing.
     * @param event - An EditEvent.
     */
    protected captureMetadata(event: EditEvent): void;
    /**
     * Assess ExtRef for being associate with GOOSE value/quality and
     * dispatch subscribe or unsubscribe events.
     *
     * @param firstExtRef - an ExtRef subject to subscribe/unsubscribe.
     * @param preEventExtRef - an ExtRef subject to subscribe/unsubscribe.
     * but prior to the evnet.
     * @param firstFcda - the matching FCDA to the first ExtRef.
     * @returns
     */
    protected modifyValueDPCSEL(firstExtRef: Element, preEventExtRef: Element | null, firstFcda: Element): void;
    /**
     * Assess ExtRef for being associate with SV traffic and dispatch
     * subscribe or unsubscribe events.
     *
     * @param firstExtRef - an ExtRef subject to subscribe/unsubscribe
     * @param preEventExtRef - an ExtRef subject to subscribe/unsubscribe
     * but prior to the evnet.
     * @param firstFcda - the matching FCDA to the first ExtRef.
     * @returns
     */
    protected modifySampledValueExtRefsSEL(firstExtRef: Element, preEventExtRef: Element | null, firstFcda: Element): void;
    /**
     * Will generate and dispatch further EditEvents based on matching an
     * ExtRef with subsequent ExtRefs and the first FCDA with subsequent
     * FCDAs. Uses both `extRef` and `preEventExtRef` to ensure subscription
     * information is available for unsubscribe edits.
     * @param extRef - an SCL ExtRef element
     * @param preEventExtRef - an SCL ExtRef element cloned before changes
     * @returns
     */
    protected processSELExtRef(extRef: Element, preEventExtRef: Element | null): void;
    /**
     * Either subscribe or unsubscribe from additional ExtRefs adjacent
     * to any ExtRefs found within an event if conditions are met for
     * manufacturer and event type.
     *
     * Assumes that all adding and removing of subscriptions is done
     * through Update edits of ExtRef elements.
     *
     * Only looks at IEDs whose manufacturer is "SEL"
     *
     * @param event - An open-scd-core EditEvent
     * @returns nothing.
     */
    protected modifyAdditionalExtRefs(event: EditEvent): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
