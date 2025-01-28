import { fixture, expect, html } from '@open-wc/testing';
import { restore, spy } from 'sinon';
import TemplateGenerator from './oscd-template-generator.js';
customElements.define('template-generator', TemplateGenerator);
export const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL">
  <DataTypeTemplates></DataTypeTemplates>
</SCL>`;
describe('TemplateGenerator', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<template-generator></template-generator>`);
    });
    it('displays no action button', () => { var _a; return expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).to.not.exist; });
    it('starts with LPHD selected', () => {
        expect(element).to.have.property('lNodeType', 'LPHD');
        expect(element).shadowDom.to.equalSnapshot();
    });
    describe('given a loaded document', () => {
        let listener;
        afterEach(restore);
        beforeEach(async () => {
            listener = spy();
            element.addEventListener('oscd-edit-v2', listener);
            element.doc = new DOMParser().parseFromString(sclDocString, 'application/xml');
            await element.updateComplete;
        });
        it('displays an action button', () => { var _a; return expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).to.exist; });
        it('adds Templates on action button click', () => {
            var _a;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            /* expect five calls for
               - LPHD and its mandatory DOTypes
                 - PhyHealth and its mandatory EnumType
                   - stVal
                 - PhyNam
                 - Proxy
             */
            expect(listener).property('args').to.have.lengthOf(5);
            listener.args.forEach(args => {
                var _a;
                const { edit } = args[0].detail;
                expect(edit).to.have.property('parent', (_a = element.doc) === null || _a === void 0 ? void 0 : _a.querySelector('DataTypeTemplates'));
                expect(edit).to.have.property('node');
            });
        });
        it('adds missing DataTypeTemplates section on action button click', () => {
            var _a, _b, _c, _d;
            (_b = (_a = element.doc) === null || _a === void 0 ? void 0 : _a.querySelector('DataTypeTemplates')) === null || _b === void 0 ? void 0 : _b.remove();
            ((_c = element.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('md-fab')).click();
            // expect one more call for the DTT section
            expect(listener).property('args').to.have.lengthOf(6);
            expect(listener.args[0][0])
                .property('detail')
                .property('edit')
                .to.have.property('parent', (_d = element.doc) === null || _d === void 0 ? void 0 : _d.documentElement);
            expect(listener.args[0][0])
                .property('detail')
                .property('edit')
                .property('node')
                .to.have.property('tagName', 'DataTypeTemplates');
        });
        it('adds LNodeTypes, DOTypes, DATypes, and EnumTypes as requested', async () => {
            var _a, _b;
            element.lNodeType = 'LLN0';
            element.reset();
            await ((_a = element.lNodeTypeUI) === null || _a === void 0 ? void 0 : _a.updateComplete);
            await element.updateComplete;
            async function selectAll(column) {
                var _a;
                const item = (_a = element.treeUI.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`md-list:nth-of-type(${column + 1}) > md-list-item:first-of-type`);
                item === null || item === void 0 ? void 0 : item.click();
                await element.treeUI.updateComplete;
                await element.updateComplete;
            }
            await selectAll(1);
            await selectAll(2);
            await selectAll(3);
            await selectAll(4);
            await selectAll(5);
            ((_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('md-fab')).click();
            /* expect 30 calls for
              LNodeType LLN0
              DOType    Beh
                        Diag
                        GrRef
                        Health
                        InRef
                        LEDRs
                        Loc
                        LocKey
                        LocSta
                        MltLev
                        Mod
                        NamPlt
                        SwModKey
              DAType    origin
                        pulseConfig
                        SBOw
                        Oper
                        Cancel
                        SBOw
                        Oper
                        Cancel
              EnumType  stVal
                        subVal
                        orCat
                        cmdQual
                        ctlModel
                        sboClass
                        stVal
                        subVal
             */
            expect(listener).property('args').to.have.lengthOf(30);
            const elms = listener.args.map(args => args[0].detail.edit.node);
            expect(elms.filter(e => e.tagName === 'LNodeType')).to.have.lengthOf(1);
            expect(elms.filter(e => e.tagName === 'DOType')).to.have.lengthOf(13);
            expect(elms.filter(e => e.tagName === 'DAType')).to.have.lengthOf(8);
            expect(elms.filter(e => e.tagName === 'EnumType')).to.have.lengthOf(8);
        }).timeout(10000); // selecting 550 paths for a full LLN0 is rather slow.
    });
});
//# sourceMappingURL=oscd-template-generator.spec.js.map