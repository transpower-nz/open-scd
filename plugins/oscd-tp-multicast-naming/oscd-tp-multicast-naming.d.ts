import { LitElement, PropertyValueMap, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-menu';
import '@material/mwc-snackbar';
import '@openscd/oscd-filtered-list';
import '@openenergytools/scl-text-field';
import '@vaadin/grid';
import '@vaadin/checkbox';
import '@vaadin/grid/theme/material/vaadin-grid.js';
import '@vaadin/grid/theme/material/vaadin-grid-filter-column.js';
import '@vaadin/grid/theme/material/vaadin-grid-selection-column.js';
import type { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import type { List } from '@material/mwc-list';
import type { Menu } from '@material/mwc-menu';
import type { Grid } from '@vaadin/grid';
import type { Snackbar } from '@material/mwc-snackbar';
type VlanPair = {
    prot1Id: string;
    prot2Id: string;
};
type AddressItem = {
    iedName: string;
    iedType: string;
    busRef: string;
    type: string;
    cbName: string;
    appOrSmvId: string;
    mac: string;
    appId: string;
    vlanPriority: string;
    vlanId: string;
    confRev: string;
    minTime: string;
    maxTime: string;
    controlIdentity: string;
    addressIdentity: string;
};
type Vlan = {
    serviceName: string;
    serviceType: string;
    useCase: string;
    prot1Id: string;
    prot2Id: string;
    busName?: string;
};
/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @param type - whether the GOOSE is a Trip GOOSE resulting in different APPID range - default false
 * @returns a function generating increasing unused `APPID` within `doc` on subsequent invocations
 */
export declare function appIdGenerator(doc: XMLDocument, serviceType: 'SMV' | 'GSE', protectionType: '1' | '2' | 'N', ignoreAppIds: string[]): () => string;
/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @param type - whether the GOOSE is a Trip GOOSE resulting in different APPID range - default false
 * @returns a function generating increasing unused `APPID` within `doc` on subsequent invocations
 */
export declare function vlanIdRangeGenerator(doc: XMLDocument, serviceType: 'SMV' | 'GSE' | 'InterProt', useCase: 'Station' | 'Bus', ignoreValues: string[]): () => VlanPair | null;
/** @returns the cartesian product of `arrays` */
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export default class TPMulticastNaming extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    editCount: number;
    gridItems: AddressItem[];
    selectedItems: AddressItem[];
    publisherGOOSE: boolean;
    publisherSMV: boolean;
    protection1: boolean;
    protection2: boolean;
    resultMessageText: string;
    showMissingAddresses: boolean;
    selectedBus: string;
    selectedVlansForRemoval: number;
    gridUI: Grid;
    vlanListUI: Dialog;
    updateVlanListUI: Dialog;
    busConnections: Map<string, string>;
    commElements: Element[] | [];
    updateVlanValue: number | null;
    updateVlanValueValidity: boolean;
    cbList: List | undefined;
    busConnectionMenuButtonUI?: Button;
    busConnectionMenuUI?: Menu;
    fileInputUI: HTMLInputElement;
    resultMessageUI: Snackbar;
    removableVlanListUI: List;
    renderFilterButtons(): TemplateResult;
    protected updateContent(): void;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected firstUpdated(): void;
    renderSelectionList(): TemplateResult;
    updateCommElements(selectedCommElements: Element[], selectedControlElements: Element[]): void;
    downloadItems(): void;
    getUsedVlansCount(): number;
    transferVlanAllocation(): void;
    updateVlanAllocationInFile(event: Event): Promise<void>;
    removeVlans(): void;
    renderButtons(): TemplateResult;
    renderDownloadButton(): TemplateResult;
    renderVlan(vlan: Vlan, type: string): TemplateResult;
    deselectVlanItems(): void;
    renderVlanList(): TemplateResult;
    renderFileInput(): TemplateResult;
    renderResultMessage(): TemplateResult;
    onVlanUpdate(): void;
    renderVlanDialog(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
