import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import type { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';
import './oscd-filtered-list.js';
export type Selection = {
    [name: string]: Selection;
};
export type Path = string[];
export interface Directory {
    path: Path;
    header?: TemplateResult;
    entries: string[];
}
export declare class OscdFinderList extends LitElement {
    selection: Selection;
    multi: boolean;
    get depth(): number;
    get paths(): Path[];
    set paths(paths: Path[]);
    get path(): Path;
    set path(path: Path);
    read: (path: Path) => Promise<Directory>;
    loaded: Promise<void>;
    getTitle(path: string[]): string;
    getDisplayString(entry: string, path: string[]): string;
    container: Element;
    private getPaths;
    multiSelect(event: SingleSelectedEvent, path: Path, clicked: string): void;
    singleSelect(event: SingleSelectedEvent, path: Path, clicked: string): void;
    select(event: SingleSelectedEvent, path: Path): Promise<void>;
    renderDirectory(path: Path, entries: string[]): TemplateResult;
    renderColumn(column: number): Promise<TemplateResult>;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
