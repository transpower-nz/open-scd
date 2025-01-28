import { Arbitrary } from 'fast-check';
import { Edit, Insert, Remove, Update } from './foundation.js';
import './open-scd.js';
export declare namespace util {
    const xmlAttributeName: RegExp;
    function descendants(parent: Element | XMLDocument): Node[];
    const sclDocString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SCL version=\"2007\" revision=\"B\" xmlns=\"http://www.iec.ch/61850/2003/SCL\">\n  <Substation name=\"A1\" desc=\"test substation\"></Substation>\n</SCL>";
    const testDocStrings: string[];
    type TestDoc = {
        doc: XMLDocument;
        nodes: Node[];
    };
    const testDocs: Arbitrary<[TestDoc, TestDoc]>;
    function remove(nodes: Node[]): Arbitrary<Remove>;
    function insert(nodes: Node[]): Arbitrary<Insert>;
    function update(nodes: Node[]): Arbitrary<Update>;
    function simpleEdit(nodes: Node[]): Arbitrary<Insert | Update | Remove>;
    function complexEdit(nodes: Node[]): Arbitrary<Edit[]>;
    function edit(nodes: Node[]): Arbitrary<Edit>;
    /** A series of arbitrary edits that allow us to test undo and redo */
    type UndoRedoTestCase = {
        doc1: XMLDocument;
        doc2: XMLDocument;
        edits: Edit[];
    };
    function undoRedoTestCases(testDoc1: TestDoc, testDoc2: TestDoc): Arbitrary<UndoRedoTestCase>;
    function isParentNode(node: Node): node is ParentNode;
    function isParentOf(parent: Node, node: Node | null): boolean;
    function isValidInsert({ parent, node, reference }: Insert): boolean;
}
