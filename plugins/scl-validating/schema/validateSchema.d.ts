import { Issue } from '@openenergytools/xml-schema-validator';
export declare function validateSchema(doc: XMLDocument, docName: string): Promise<Issue[] | null>;
