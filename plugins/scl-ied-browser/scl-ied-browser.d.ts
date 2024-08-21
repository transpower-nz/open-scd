import { LitElement } from 'lit';
import '@material/mwc-select';
import '@openscd/oscd-tree-grid';
import type { Tree, TreeGrid } from '@openscd/oscd-tree-grid';
/**  */
export default class SclIedBrwoserPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    get ieds(): Element[];
    get firstIed(): string;
    selectedIed: Element | null;
    tree: TreeGrid;
    selectIed(e: Event): Promise<void>;
    iedTree(): Tree;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
