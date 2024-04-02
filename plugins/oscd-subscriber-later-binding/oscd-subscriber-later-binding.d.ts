import { LitElement, PropertyValues, TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-list/mwc-radio-list-item';
import '@material/mwc-menu';
import '@material/mwc-textfield';
import { EditEvent } from '@openscd/open-scd-core';
import type { Icon } from '@material/mwc-icon';
import type { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import type { List } from '@material/mwc-list';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { Menu } from '@material/mwc-menu';
import type { TextField } from '@material/mwc-textfield';
type controlTagType = 'SampledValueControl' | 'GSEControl';
declare enum FcdaSortOrder {
    DataModel = 0,
    Path = 1,
    FullDescription = 2,
    DODescription = 3,
    DADescription = 4
}
declare enum ExtRefSortOrder {
    DataModel = 0,
    InternalAddress = 1,
    Description = 2,
    MappedReference = 3
}
type DoesFcdaMeetExtRefRestrictionsOptions = {
    /** The control block type to check against `pServT` */
    controlBlockType?: 'GOOSE' | 'Report' | 'SMV' | 'Poll';
    /** Whether to only check against basic type. Skips check against pDO and pLN */
    checkOnlyBType?: boolean;
};
/**
 * A plugin to allow subscriptions of GOOSE and SV using the
 * later binding method as described in IEC 61850-6 Ed 2.1 providing
 * both a publisher and subscriber-oriented view.
 */
export default class SubscriberLaterBinding extends LitElement {
    doc: XMLDocument;
    docName: string;
    editCount: number;
    identity: string;
    allowExternalPlugins: boolean;
    checkOnlyPreferredBasicType: boolean;
    readOnlyView: boolean;
    controlTag: controlTagType;
    subscriberView: boolean;
    filterOutSubscribed: boolean;
    filterOutNotSubscribed: boolean;
    filterOutDataObjects: boolean;
    filterOutQuality: boolean;
    filterOutPreconfiguredUnmatched: boolean;
    autoIncrement: boolean;
    ignoreSupervision: boolean;
    filterOutBound: boolean;
    filterOutNotBound: boolean;
    strictServiceTypes: boolean;
    filterOutpDAq: boolean;
    filterOutpDAt: boolean;
    sortExtRefPublisher: ExtRefSortOrder;
    sortExtRefSubscriber: ExtRefSortOrder;
    sortFcda: FcdaSortOrder;
    searchFcdaRegex: RegExp;
    searchExtRefPublisherRegex: RegExp;
    searchExtRefSubscriberRegex: RegExp;
    selectedControl: Element | undefined;
    selectedFCDA: Element | undefined;
    selectedIED: Element | undefined;
    selectedExtRef: Element | undefined;
    private controlBlockFcdaInfo;
    private fcdaInfo;
    private extRefInfo;
    private supervisionData;
    switchViewUI?: IconButtonToggle;
    switchControlTypeUI?: IconButtonToggle;
    filterMenuFcdaUI: Menu;
    filterMenuFcdaButtonUI: Icon;
    filterFcdaInputUI?: TextField;
    filterExtRefPublisherInputUI?: TextField;
    filterExtRefSubscriberInputUI?: TextField;
    filterMenuExtRefSubscriberUI: Menu;
    filterMenuExtRefPublisherUI: Menu;
    filterMenuExtRefSubscriberButtonUI: Icon;
    filterMenuExtrefPublisherButtonUI: Icon;
    listContainerUI: HTMLDivElement;
    settingsMenuExtRefSubscriberUI: Menu;
    settingsMenuExtRefPublisherUI: Menu;
    settingsMenuExtRefSubscriberButtonUI: Icon;
    settingsMenuExtRefPublisherButtonUI: Icon;
    sortMenuExtRefPublisherButtonUI: Icon;
    sortMenuExtRefPublisherUI: Menu;
    sortMenuExtRefSubscriberButtonUI: Icon;
    sortMenuExtRefSubscriberUI: Menu;
    sortMenuFcdaButtonUI: Menu;
    sortMenuFcdaUI: Menu;
    fcdaListUI?: List;
    extRefListPublisherUI?: List;
    publisherExtRefSectionUI?: HTMLElement;
    extRefListSubscriberUI?: List;
    extRefListSubscriberSelectedUI?: ListItem;
    fcdaListSelectedUI?: ListItem;
    subscriberExtRefMarkdownSaveButton?: Icon;
    constructor();
    /**
     * Updates caching of control blocks, used FCDAs and supervision LNs.
     * Done through even listening to all menu plugins to use events and be able
     * to expect caching to be updated.
     * @param event - `oscd-edit` event.
     * @param when - 'before' or 'after' the event occurs.
     */
    protected updateCaching(event: EditEvent, when: 'before' | 'after'): void;
    /**
     * Settings are stored in a single JSON value tagged against this plugin
     * for simplicity.
     */
    protected storeSettings(): void;
    /**
     * Restore settings from local storage, applying appropriate defaults
     * if not set.
     */
    protected restoreSettings(): void;
    /**
     * Retrieve matching control blocks in the SCL document to allow UI display
     * In the subscriber view show all control blocks, in the publisher view
     * only for "other IEDs".
     * @param controlTag - The SCL control block element tagName string.
     * @returns An array of control block elements for processing.
     */
    private getControlElements;
    /**
     * Count the number of times an FCDA is used in an ExtRef to report
     * subscription count in the UI.
     * @param fcda - SCL FCDA element.
     * @param control - SCL control block, `GSEControl` or `SampledValueControl`.
     * @returns
     */
    private getExtRefCount;
    /**
     * Build an initial count of how often each FCDA is used in an ExtRef.
     * This is much more efficient than building the count and regenerating it
     * piecemeal and is an optimisation for large SCL files.
     * @returns nothing - cached on the class variable `controlBlockFcdaInfo`.
     */
    private buildExtRefCount;
    /**
     * Store information about each FCDA, its specification (CDC and basic type)
     * and also how many times it is used in an ExtRef.
     * @param fcda - SCL FCDA element.
     * @returns nothing - cached on the class variable `fcdaInfo`.
     */
    private getFcdaInfo;
    /**
     * Store information about each ExtRef, CDC and basic type.
     * @param extRef - SCL ExtREf element.
     * @returns nothing - stored against class variable `extRefInfo`.
     */
    private getExtRefInfo;
    /**
     * Generates a searchable string for the list search for a given ExtRef element
     * Intended to allow an "if you can see it, you can search it" approach.
     *
     * @param extRef - SCL ExtRef element.
     * @returns a string concatenating key searchable field values.
     */
    private getExtRefSubscriberSearchString;
    /**
     * Generates a searchable string for the list search for a given FCDA with
     * a control block.
     * Intended to allow an "if you can see it, you can search it" approach.
     *
     * @param control - SCL control block element.
     * @param fcda - SCL FCDA element.
     * @returns a string concatenating key searchable field values.
     */
    private getFcdaSearchString;
    /**
     * Reset all caching for a UI change or a new document
     */
    protected resetCaching(): void;
    /**
     * Reset search fields for a UI change
     */
    resetSearchFields(): void;
    protected updated(changedProperties: PropertyValues): void;
    /**
     * Unsubscribing means removing a list of attributes from the ExtRef Element.
     * Supervisions are handled independently as this is a setting option.
     *
     * @param extRef - The Ext Ref Element to clean from attributes.
     */
    private unsubscribeExtRef;
    /**
     * Subscribing means copying a list of attributes from the FCDA Element (and others) to the ExtRef Element.
     *
     * @param extRef - The ExtRef Element to add the attributes to.
     */
    private subscribe;
    getSubscribedExtRefElements(): Element[];
    /**
     * Retrieve ExtRefs which match current control block type settings in
     * UI for display purposes.
     * @param extRef - SCL ExtRef element
     * @returns whether or not an ExtRef is viewable in the UI
     */
    private isExtRefViewable;
    /**
     * Get document ExtRef elements available for subscription.
     *
     * @returns An Array of ExtRef SCL elements.
     */
    getAvailableExtRefElements(): Element[];
    /**
     * For a given supervision node, updates cache information.
     * @param supLn - an SCL LN used for supervision, LGOS or LSVS.
     * @param remove - whether a supervision is being removed.
     * @returns - nothing. Updates cache values.
     */
    private updateSupervisionCache;
    private reCreateSupervisionCache;
    /**
     * Returns viewable ExtRefs for UI functions.
     * @param ied - an SCL IED element.
     * @returns - an Array of SCL ExtRefs.
     */
    private getExtRefElementsByIED;
    private getCachedSupervision;
    private updateView;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    /**
     * This function checks if restrictions of an `ExtRef` element given by
     * `pDO` and optionally by `pDA`, `pLN` and `pServT` are met by the FCDA/FCD
     * @param extRef - The `ExtRef` element to be checked against
     * @param data - The `FCDA` element to be checked
     * @param controlBlockType - The control block type to check back with `pServT`
     * @returns Whether the FCDA basic types meet the restrictions of the
     * ExtRef element
     *
     * IMPORTANT: This function  is an _almost_ exact copy of the same function in
     * scl-lib and is different only in that it uses cached values for performance,
     * uses the UI option for the control block type and short circuits at the top
     * for missing elements
     *
     */
    doesFcdaMeetExtRefRestrictions(extRef: Element, fcda: Element, options?: DoesFcdaMeetExtRefRestrictionsOptions): boolean;
    /**
     * Check whether an FCDA should be shown as disabled in the UI. FCDAs are
     * disabled if they are DO references, if they don't match preconfigured
     * attributes.
     *
     * @param fcda - an SCL FCDA element.
     * @param control - an SCL control block element.
     * @param withFilter - whether to include current filter settings in assessment.
     * @returns whether an FCDA should be shown as disabled.
     */
    private isFcdaDisabled;
    /**
     * Render a subscribed ExtRef element for the publisher view.
     * @param extRef - an SCL ExtRef element.
     * @returns - A Lit template result for rendering.
     */
    private renderSubscribedExtRefElement;
    /**
     * Render an FCDA element associated with a control block.
     * @param control - an SCL control block GSEControl or SampledValueControl.
     * @param fcda - an SCL FCDA element within a dataset.
     * @returns A Lit template result for rendering.
     */
    renderFCDA(control: Element, fcda: Element): TemplateResult;
    renderReadOnlyIcon(forceIcon: boolean): TemplateResult;
    renderFCDAListTitle(): TemplateResult;
    private sortFcdaSubscriberItems;
    /**
     * Render control blocks and their FCDAs.
     * @param controls - an array of GSEControl or SampledValueControl elements.
     * @returns - a Lit TemplateResult.
     */
    renderControlList(controls: Element[]): TemplateResult;
    /**
     * Render ExtRefs for publisher view which already have subscriptions.
     * @returns - a Lit TemplateResult.
     */
    private renderPublisherViewSubscribedExtRefs;
    /**
     * Render ExtRefs for publisher view which already have subscriptions.
     * @returns - a Lit TemplateResult.
     */
    private renderPublisherViewAvailableExtRefs;
    /**
     * In the publisher view renders the title and filter/settings icons
     * for ExtRefs
     * @returns - a Lit TemplateResult.
     */
    private renderPublisherViewExtRefListTitle;
    /**
     * In the subscriber view renders the title and filter/settings icons
     * for ExtRefs
     * @returns - a Lit TemplateResult.
     */
    private renderSubscriberViewExtRefListTitle;
    copySubscriberExtRefInfoToMarkdown(): void;
    /**
     * Render an ExtRef element in the subscriber view.
     * @param extRef - an SCL ExtREf element for later binding.
     * @returns - a Lit TemplateResult.
     */
    private renderSubscriberViewExtRef;
    /**
     * Render ExtRef elements in the subscriber view to a Markdown text string.
     * @returns - a Markdown string.
     */
    private renderSubscriberViewExtRefsMarkdown;
    /**
     * Render an ExtRef element in Markdown
     * @param extRef - an SCL ExtRef element for later binding.
     * @returns - a string
     */
    private renderSubscriberViewExtRefMarkdown;
    /**
     * Render ExtRef elements in the subscriber view.
     * @returns - a Lit TemplateResult.
     */
    private renderSubscriberViewExtRefs;
    /**
     * Render ExtRef elements in either the publisher or subscriber view.
     * @returns - a Lit TemplateResult.
     */
    renderExtRefs(): TemplateResult;
    /**
     * Render UI button for switching between GSEControls and
     * SampledValueControls.
     * @returns - a Lit TemplateResult.
     */
    renderControlTypeSelector(): TemplateResult;
    /**
     * Render FCDAs for publisher view.
     * @returns - a Lit TemplateResult.
     */
    renderPublisherFCDAs(): TemplateResult;
    /**
     * Render UI button for switching between publisher/subscriber.
     * @returns - a Lit TemplateResult.
     */
    renderSwitchView(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
