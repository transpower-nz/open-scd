/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function isComplex$1(edit) {
    return edit instanceof Array;
}
function isSetTextContent(edit) {
    return (edit.element !== undefined &&
        edit.textContent !== undefined);
}
function isRemove$1(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
function isSetAttributes(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined &&
        edit.attributesNS !== undefined);
}
function isInsert$1(edit) {
    return (edit.parent !== undefined &&
        edit.node !== undefined &&
        edit.reference !== undefined);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEditV2(edit) {
    if (isComplex$1(edit))
        return !edit.some((e) => !isEditV2(e));
    return (isSetAttributes(edit) ||
        isSetTextContent(edit) ||
        isInsert$1(edit) ||
        isRemove$1(edit));
}

function isComplex(edit) {
    return edit instanceof Array;
}
function isInsert(edit) {
    return edit.parent !== undefined;
}
function isNamespaced(value) {
    return value !== null && typeof value !== "string";
}
function isUpdate(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined);
}
function isRemove(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}

function convertUpdate(edit) {
    const attributes = {};
    const attributesNS = {};
    Object.entries(edit.attributes).forEach(([key, value]) => {
        if (isNamespaced(value)) {
            const ns = value.namespaceURI;
            if (!ns)
                return;
            if (!attributesNS[ns]) {
                attributesNS[ns] = {};
            }
            attributesNS[ns][key] = value.value;
        }
        else
            attributes[key] = value;
    });
    return { element: edit.element, attributes, attributesNS };
}
function convertEdit(edit) {
    if (isRemove(edit))
        return edit;
    if (isInsert(edit))
        return edit;
    if (isUpdate(edit))
        return convertUpdate(edit);
    if (isComplex(edit))
        return edit.map(convertEdit);
    return [];
}

class PreconditionFailure extends Error {
    constructor(interruptExecution = false) {
        super();
        this.interruptExecution = interruptExecution;
        this.footprint = PreconditionFailure.SharedFootPrint;
    }
    static isFailure(err) {
        return err != null && err.footprint === PreconditionFailure.SharedFootPrint;
    }
}
PreconditionFailure.SharedFootPrint = Symbol.for('fast-check/PreconditionFailure');

class Nil {
    [Symbol.iterator]() {
        return this;
    }
    next(value) {
        return { value, done: true };
    }
}
Nil.nil = new Nil();
function nilHelper() {
    return Nil.nil;
}
function* mapHelper(g, f) {
    for (const v of g) {
        yield f(v);
    }
}
function* flatMapHelper(g, f) {
    for (const v of g) {
        yield* f(v);
    }
}
function* filterHelper(g, f) {
    for (const v of g) {
        if (f(v)) {
            yield v;
        }
    }
}
function* takeNHelper(g, n) {
    for (let i = 0; i < n; ++i) {
        const cur = g.next();
        if (cur.done) {
            break;
        }
        yield cur.value;
    }
}
function* takeWhileHelper(g, f) {
    let cur = g.next();
    while (!cur.done && f(cur.value)) {
        yield cur.value;
        cur = g.next();
    }
}
function* joinHelper(g, others) {
    for (let cur = g.next(); !cur.done; cur = g.next()) {
        yield cur.value;
    }
    for (const s of others) {
        for (let cur = s.next(); !cur.done; cur = s.next()) {
            yield cur.value;
        }
    }
}

const safeSymbolIterator = Symbol.iterator;
class Stream {
    static nil() {
        return new Stream(nilHelper());
    }
    static of(...elements) {
        return new Stream(elements[safeSymbolIterator]());
    }
    constructor(g) {
        this.g = g;
    }
    next() {
        return this.g.next();
    }
    [Symbol.iterator]() {
        return this.g;
    }
    map(f) {
        return new Stream(mapHelper(this.g, f));
    }
    flatMap(f) {
        return new Stream(flatMapHelper(this.g, f));
    }
    dropWhile(f) {
        let foundEligible = false;
        function* helper(v) {
            if (foundEligible || !f(v)) {
                foundEligible = true;
                yield v;
            }
        }
        return this.flatMap(helper);
    }
    drop(n) {
        if (n <= 0) {
            return this;
        }
        let idx = 0;
        function helper() {
            return idx++ < n;
        }
        return this.dropWhile(helper);
    }
    takeWhile(f) {
        return new Stream(takeWhileHelper(this.g, f));
    }
    take(n) {
        return new Stream(takeNHelper(this.g, n));
    }
    filter(f) {
        return new Stream(filterHelper(this.g, f));
    }
    every(f) {
        for (const v of this.g) {
            if (!f(v)) {
                return false;
            }
        }
        return true;
    }
    has(f) {
        for (const v of this.g) {
            if (f(v)) {
                return [true, v];
            }
        }
        return [false, null];
    }
    join(...others) {
        return new Stream(joinHelper(this.g, others));
    }
    getNthOrLast(nth) {
        let remaining = nth;
        let last = null;
        for (const v of this.g) {
            if (remaining-- === 0)
                return v;
            last = v;
        }
        return last;
    }
}
function stream(g) {
    return new Stream(g);
}

const cloneMethod = Symbol.for('fast-check/cloneMethod');
function hasCloneMethod(instance) {
    return (instance !== null &&
        (typeof instance === 'object' || typeof instance === 'function') &&
        cloneMethod in instance &&
        typeof instance[cloneMethod] === 'function');
}
function cloneIfNeeded(instance) {
    return hasCloneMethod(instance) ? instance[cloneMethod]() : instance;
}

const safeObjectDefineProperty$1 = Object.defineProperty;
class Value {
    constructor(value_, context, customGetValue = undefined) {
        this.value_ = value_;
        this.context = context;
        this.hasToBeCloned = customGetValue !== undefined || hasCloneMethod(value_);
        this.readOnce = false;
        if (this.hasToBeCloned) {
            safeObjectDefineProperty$1(this, 'value', { get: customGetValue !== undefined ? customGetValue : this.getValue });
        }
        else {
            this.value = value_;
        }
    }
    getValue() {
        if (this.hasToBeCloned) {
            if (!this.readOnce) {
                this.readOnce = true;
                return this.value_;
            }
            return this.value_[cloneMethod]();
        }
        return this.value_;
    }
}

const safeObjectAssign = Object.assign;
class Arbitrary {
    filter(refinement) {
        return new FilterArbitrary(this, refinement);
    }
    map(mapper, unmapper) {
        return new MapArbitrary(this, mapper, unmapper);
    }
    chain(chainer) {
        return new ChainArbitrary(this, chainer);
    }
    noShrink() {
        return new NoShrinkArbitrary(this);
    }
    noBias() {
        return new NoBiasArbitrary(this);
    }
}
class ChainArbitrary extends Arbitrary {
    constructor(arb, chainer) {
        super();
        this.arb = arb;
        this.chainer = chainer;
    }
    generate(mrng, biasFactor) {
        const clonedMrng = mrng.clone();
        const src = this.arb.generate(mrng, biasFactor);
        return this.valueChainer(src, mrng, clonedMrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return (!context.stoppedForOriginal
                ? this.arb
                    .shrink(context.originalValue, context.originalContext)
                    .map((v) => this.valueChainer(v, context.clonedMrng.clone(), context.clonedMrng, context.originalBias))
                : Stream.nil()).join(context.chainedArbitrary.shrink(value, context.chainedContext).map((dst) => {
                const newContext = safeObjectAssign(safeObjectAssign({}, context), {
                    chainedContext: dst.context,
                    stoppedForOriginal: true,
                });
                return new Value(dst.value_, newContext);
            }));
        }
        return Stream.nil();
    }
    valueChainer(v, generateMrng, clonedMrng, biasFactor) {
        const chainedArbitrary = this.chainer(v.value_);
        const dst = chainedArbitrary.generate(generateMrng, biasFactor);
        const context = {
            originalBias: biasFactor,
            originalValue: v.value_,
            originalContext: v.context,
            stoppedForOriginal: false,
            chainedArbitrary,
            chainedContext: dst.context,
            clonedMrng,
        };
        return new Value(dst.value_, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalBias' in context &&
            'originalValue' in context &&
            'originalContext' in context &&
            'stoppedForOriginal' in context &&
            'chainedArbitrary' in context &&
            'chainedContext' in context &&
            'clonedMrng' in context);
    }
}
class MapArbitrary extends Arbitrary {
    constructor(arb, mapper, unmapper) {
        super();
        this.arb = arb;
        this.mapper = mapper;
        this.unmapper = unmapper;
        this.bindValueMapper = (v) => this.valueMapper(v);
    }
    generate(mrng, biasFactor) {
        const g = this.arb.generate(mrng, biasFactor);
        return this.valueMapper(g);
    }
    canShrinkWithoutContext(value) {
        if (this.unmapper !== undefined) {
            try {
                const unmapped = this.unmapper(value);
                return this.arb.canShrinkWithoutContext(unmapped);
            }
            catch (_err) {
                return false;
            }
        }
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return this.arb.shrink(context.originalValue, context.originalContext).map(this.bindValueMapper);
        }
        if (this.unmapper !== undefined) {
            const unmapped = this.unmapper(value);
            return this.arb.shrink(unmapped, undefined).map(this.bindValueMapper);
        }
        return Stream.nil();
    }
    mapperWithCloneIfNeeded(v) {
        const sourceValue = v.value;
        const mappedValue = this.mapper(sourceValue);
        if (v.hasToBeCloned &&
            ((typeof mappedValue === 'object' && mappedValue !== null) || typeof mappedValue === 'function') &&
            Object.isExtensible(mappedValue) &&
            !hasCloneMethod(mappedValue)) {
            Object.defineProperty(mappedValue, cloneMethod, { get: () => () => this.mapperWithCloneIfNeeded(v)[0] });
        }
        return [mappedValue, sourceValue];
    }
    valueMapper(v) {
        const [mappedValue, sourceValue] = this.mapperWithCloneIfNeeded(v);
        const context = { originalValue: sourceValue, originalContext: v.context };
        return new Value(mappedValue, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalValue' in context &&
            'originalContext' in context);
    }
}
class FilterArbitrary extends Arbitrary {
    constructor(arb, refinement) {
        super();
        this.arb = arb;
        this.refinement = refinement;
        this.bindRefinementOnValue = (v) => this.refinementOnValue(v);
    }
    generate(mrng, biasFactor) {
        while (true) {
            const g = this.arb.generate(mrng, biasFactor);
            if (this.refinementOnValue(g)) {
                return g;
            }
        }
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value) && this.refinement(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context).filter(this.bindRefinementOnValue);
    }
    refinementOnValue(v) {
        return this.refinement(v.value);
    }
}
class NoShrinkArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        return this.arb.generate(mrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(_value, _context) {
        return Stream.nil();
    }
    noShrink() {
        return this;
    }
}
class NoBiasArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, _biasFactor) {
        return this.arb.generate(mrng, undefined);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context);
    }
    noBias() {
        return this;
    }
}

const untouchedApply = Function.prototype.apply;
const ApplySymbol = Symbol('apply');
function safeExtractApply(f) {
    try {
        return f.apply;
    }
    catch (err) {
        return undefined;
    }
}
function safeApplyHacky(f, instance, args) {
    const ff = f;
    ff[ApplySymbol] = untouchedApply;
    const out = ff[ApplySymbol](instance, args);
    delete ff[ApplySymbol];
    return out;
}
function safeApply(f, instance, args) {
    if (safeExtractApply(f) === untouchedApply) {
        return f.apply(instance, args);
    }
    return safeApplyHacky(f, instance, args);
}

const SArray = typeof Array !== 'undefined' ? Array : undefined;
const SSet = typeof Set !== 'undefined' ? Set : undefined;
const SencodeURIComponent = typeof encodeURIComponent !== 'undefined' ? encodeURIComponent : undefined;
const untouchedMap = Array.prototype.map;
const untouchedPush = Array.prototype.push;
const untouchedSlice = Array.prototype.slice;
function extractMap(instance) {
    try {
        return instance.map;
    }
    catch (err) {
        return undefined;
    }
}
function extractPush(instance) {
    try {
        return instance.push;
    }
    catch (err) {
        return undefined;
    }
}
function extractSlice(instance) {
    try {
        return instance.slice;
    }
    catch (err) {
        return undefined;
    }
}
function safeMap(instance, fn) {
    if (extractMap(instance) === untouchedMap) {
        return instance.map(fn);
    }
    return safeApply(untouchedMap, instance, [fn]);
}
function safePush(instance, ...args) {
    if (extractPush(instance) === untouchedPush) {
        return instance.push(...args);
    }
    return safeApply(untouchedPush, instance, args);
}
function safeSlice(instance, ...args) {
    if (extractSlice(instance) === untouchedSlice) {
        return instance.slice(...args);
    }
    return safeApply(untouchedSlice, instance, args);
}
const untouchedHas = Set.prototype.has;
function extractHas(instance) {
    try {
        return instance.has;
    }
    catch (err) {
        return undefined;
    }
}
function safeHas(instance, value) {
    if (extractHas(instance) === untouchedHas) {
        return instance.has(value);
    }
    return safeApply(untouchedHas, instance, [value]);
}
const untouchedCharCodeAt = String.prototype.charCodeAt;
function extractCharCodeAt(instance) {
    try {
        return instance.charCodeAt;
    }
    catch (err) {
        return undefined;
    }
}
function safeCharCodeAt(instance, index) {
    if (extractCharCodeAt(instance) === untouchedCharCodeAt) {
        return instance.charCodeAt(index);
    }
    return safeApply(untouchedCharCodeAt, instance, [index]);
}
const untouchedNumberToString = Number.prototype.toString;
function extractNumberToString(instance) {
    try {
        return instance.toString;
    }
    catch (err) {
        return undefined;
    }
}
function safeNumberToString(instance, ...args) {
    if (extractNumberToString(instance) === untouchedNumberToString) {
        return instance.toString(...args);
    }
    return safeApply(untouchedNumberToString, instance, args);
}

class LazyIterableIterator {
    constructor(producer) {
        this.producer = producer;
    }
    [Symbol.iterator]() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it;
    }
    next() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it.next();
    }
}
function makeLazy(producer) {
    return new LazyIterableIterator(producer);
}

const safeArrayIsArray = Array.isArray;
const safeObjectDefineProperty = Object.defineProperty;
function tupleMakeItCloneable(vs, values) {
    return safeObjectDefineProperty(vs, cloneMethod, {
        value: () => {
            const cloned = [];
            for (let idx = 0; idx !== values.length; ++idx) {
                safePush(cloned, values[idx].value);
            }
            tupleMakeItCloneable(cloned, values);
            return cloned;
        },
    });
}
function tupleWrapper(values) {
    let cloneable = false;
    const vs = [];
    const ctxs = [];
    for (let idx = 0; idx !== values.length; ++idx) {
        const v = values[idx];
        cloneable = cloneable || v.hasToBeCloned;
        safePush(vs, v.value);
        safePush(ctxs, v.context);
    }
    if (cloneable) {
        tupleMakeItCloneable(vs, values);
    }
    return new Value(vs, ctxs);
}
function tupleShrink(arbs, value, context) {
    const shrinks = [];
    const safeContext = safeArrayIsArray(context) ? context : [];
    for (let idx = 0; idx !== arbs.length; ++idx) {
        safePush(shrinks, makeLazy(() => arbs[idx]
            .shrink(value[idx], safeContext[idx])
            .map((v) => {
            const nextValues = safeMap(value, (v, idx) => new Value(cloneIfNeeded(v), safeContext[idx]));
            return [...safeSlice(nextValues, 0, idx), v, ...safeSlice(nextValues, idx + 1)];
        })
            .map(tupleWrapper)));
    }
    return Stream.nil().join(...shrinks);
}
class TupleArbitrary extends Arbitrary {
    constructor(arbs) {
        super();
        this.arbs = arbs;
        for (let idx = 0; idx !== arbs.length; ++idx) {
            const arb = arbs[idx];
            if (arb == null || arb.generate == null)
                throw new Error(`Invalid parameter encountered at index ${idx}: expecting an Arbitrary`);
        }
    }
    generate(mrng, biasFactor) {
        const mapped = [];
        for (let idx = 0; idx !== this.arbs.length; ++idx) {
            safePush(mapped, this.arbs[idx].generate(mrng, biasFactor));
        }
        return tupleWrapper(mapped);
    }
    canShrinkWithoutContext(value) {
        if (!safeArrayIsArray(value) || value.length !== this.arbs.length) {
            return false;
        }
        for (let index = 0; index !== this.arbs.length; ++index) {
            if (!this.arbs[index].canShrinkWithoutContext(value[index])) {
                return false;
            }
        }
        return true;
    }
    shrink(value, context) {
        return tupleShrink(this.arbs, value, context);
    }
}

function tuple(...arbs) {
    return new TupleArbitrary(arbs);
}

var VerbosityLevel;
(function (VerbosityLevel) {
    VerbosityLevel[VerbosityLevel["None"] = 0] = "None";
    VerbosityLevel[VerbosityLevel["Verbose"] = 1] = "Verbose";
    VerbosityLevel[VerbosityLevel["VeryVerbose"] = 2] = "VeryVerbose";
})(VerbosityLevel || (VerbosityLevel = {}));

typeof Buffer !== 'undefined' ? Buffer.isBuffer : undefined;

var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus[ExecutionStatus["Success"] = 0] = "Success";
    ExecutionStatus[ExecutionStatus["Skipped"] = -1] = "Skipped";
    ExecutionStatus[ExecutionStatus["Failure"] = 1] = "Failure";
})(ExecutionStatus || (ExecutionStatus = {}));

const safeMathFloor$1 = Math.floor;
const safeMathLog = Math.log;
function integerLogLike(v) {
    return safeMathFloor$1(safeMathLog(v) / safeMathLog(2));
}
function biasNumericRange(min, max, logLike) {
    if (min === max) {
        return [{ min: min, max: max }];
    }
    if (min < 0 && max > 0) {
        const logMin = logLike(-min);
        const logMax = logLike(max);
        return [
            { min: -logMin, max: logMax },
            { min: (max - logMax), max: max },
            { min: min, max: min + logMin },
        ];
    }
    const logGap = logLike((max - min));
    const arbCloseToMin = { min: min, max: min + logGap };
    const arbCloseToMax = { min: (max - logGap), max: max };
    return min < 0
        ? [arbCloseToMax, arbCloseToMin]
        : [arbCloseToMin, arbCloseToMax];
}

const safeMathCeil = Math.ceil;
const safeMathFloor = Math.floor;
function halvePosInteger(n) {
    return safeMathFloor(n / 2);
}
function halveNegInteger(n) {
    return safeMathCeil(n / 2);
}
function shrinkInteger(current, target, tryTargetAsap) {
    const realGap = current - target;
    function* shrinkDecr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halvePosInteger(realGap);
        for (let toremove = gap; toremove > 0; toremove = halvePosInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    function* shrinkIncr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halveNegInteger(realGap);
        for (let toremove = gap; toremove < 0; toremove = halveNegInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    return realGap > 0 ? stream(shrinkDecr()) : stream(shrinkIncr());
}

const safeMathSign = Math.sign;
const safeNumberIsInteger$1 = Number.isInteger;
const safeObjectIs$1 = Object.is;
class IntegerArbitrary extends Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        return new Value(mrng.nextInt(range.min, range.max), undefined);
    }
    canShrinkWithoutContext(value) {
        return (typeof value === 'number' &&
            safeNumberIsInteger$1(value) &&
            !safeObjectIs$1(value, -0) &&
            this.min <= value &&
            value <= this.max);
    }
    shrink(current, context) {
        if (!IntegerArbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return shrinkInteger(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream.of(new Value(context, undefined));
        }
        return shrinkInteger(current, context, false);
    }
    defaultTarget() {
        if (this.min <= 0 && this.max >= 0) {
            return 0;
        }
        return this.min < 0 ? this.max : this.min;
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = biasNumericRange(this.min, this.max, integerLogLike);
        if (ranges.length === 1) {
            return ranges[0];
        }
        const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
        return id < 0 ? ranges[0] : ranges[id + 1];
    }
    isLastChanceTry(current, context) {
        if (current > 0)
            return current === context + 1 && current > this.min;
        if (current < 0)
            return current === context - 1 && current < this.max;
        return false;
    }
    static isValidContext(current, context) {
        if (context === undefined) {
            return false;
        }
        if (typeof context !== 'number') {
            throw new Error(`Invalid context type passed to IntegerArbitrary (#1)`);
        }
        if (context !== 0 && safeMathSign(current) !== safeMathSign(context)) {
            throw new Error(`Invalid context value passed to IntegerArbitrary (#2)`);
        }
        return true;
    }
}

const safeNumberIsInteger = Number.isInteger;
function buildCompleteIntegerConstraints(constraints) {
    const min = constraints.min !== undefined ? constraints.min : -0x80000000;
    const max = constraints.max !== undefined ? constraints.max : 0x7fffffff;
    return { min, max };
}
function integer(constraints = {}) {
    const fullConstraints = buildCompleteIntegerConstraints(constraints);
    if (fullConstraints.min > fullConstraints.max) {
        throw new Error('fc.integer maximum value should be equal or greater than the minimum one');
    }
    if (!safeNumberIsInteger(fullConstraints.min)) {
        throw new Error('fc.integer minimum value should be an integer');
    }
    if (!safeNumberIsInteger(fullConstraints.max)) {
        throw new Error('fc.integer maximum value should be an integer');
    }
    return new IntegerArbitrary(fullConstraints.min, fullConstraints.max);
}

const safeObjectIs = Object.is;
class ConstantArbitrary extends Arbitrary {
    constructor(values) {
        super();
        this.values = values;
    }
    generate(mrng, _biasFactor) {
        const idx = this.values.length === 1 ? 0 : mrng.nextInt(0, this.values.length - 1);
        const value = this.values[idx];
        if (!hasCloneMethod(value)) {
            return new Value(value, idx);
        }
        return new Value(value, idx, () => value[cloneMethod]());
    }
    canShrinkWithoutContext(value) {
        if (this.values.length === 1) {
            return safeObjectIs(this.values[0], value);
        }
        if (this.fastValues === undefined) {
            this.fastValues = new FastConstantValuesLookup(this.values);
        }
        return this.fastValues.has(value);
    }
    shrink(value, context) {
        if (context === 0 || safeObjectIs(value, this.values[0])) {
            return Stream.nil();
        }
        return Stream.of(new Value(this.values[0], 0));
    }
}
class FastConstantValuesLookup {
    constructor(values) {
        this.values = values;
        this.fastValues = new SSet(this.values);
        let hasMinusZero = false;
        let hasPlusZero = false;
        if (safeHas(this.fastValues, 0)) {
            for (let idx = 0; idx !== this.values.length; ++idx) {
                const value = this.values[idx];
                hasMinusZero = hasMinusZero || safeObjectIs(value, -0);
                hasPlusZero = hasPlusZero || safeObjectIs(value, 0);
            }
        }
        this.hasMinusZero = hasMinusZero;
        this.hasPlusZero = hasPlusZero;
    }
    has(value) {
        if (value === 0) {
            if (safeObjectIs(value, 0)) {
                return this.hasPlusZero;
            }
            return this.hasMinusZero;
        }
        return safeHas(this.fastValues, value);
    }
}

function constantFrom(...values) {
    if (values.length === 0) {
        throw new Error('fc.constantFrom expects at least one parameter');
    }
    return new ConstantArbitrary(values);
}

const indexToCharStringMapper = String.fromCodePoint;
function indexToCharStringUnmapper(c) {
    if (typeof c !== 'string') {
        throw new Error('Cannot unmap non-string');
    }
    if (c.length === 0 || c.length > 2) {
        throw new Error('Cannot unmap string with more or less than one character');
    }
    const c1 = safeCharCodeAt(c, 0);
    if (c.length === 1) {
        return c1;
    }
    const c2 = safeCharCodeAt(c, 1);
    if (c1 < 0xd800 || c1 > 0xdbff || c2 < 0xdc00 || c2 > 0xdfff) {
        throw new Error('Cannot unmap invalid surrogate pairs');
    }
    return c.codePointAt(0);
}

function buildCharacterArbitrary(min, max, mapToCode, unmapFromCode) {
    return integer({ min, max }).map((n) => indexToCharStringMapper(mapToCode(n)), (c) => unmapFromCode(indexToCharStringUnmapper(c)));
}

function indexToPrintableIndexMapper(v) {
    if (v < 95)
        return v + 0x20;
    if (v <= 0x7e)
        return v - 95;
    return v;
}
function indexToPrintableIndexUnmapper(v) {
    if (v >= 0x20 && v <= 0x7e)
        return v - 0x20;
    if (v >= 0 && v <= 0x1f)
        return v + 95;
    return v;
}

function identity(v) {
    return v;
}
function char() {
    return buildCharacterArbitrary(0x20, 0x7e, identity, identity);
}

const gapSize = 0xdfff + 1 - 0xd800;
function unicodeMapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexMapper(v);
    return v + gapSize;
}
function unicodeUnmapper(v) {
    if (v < 0xd800)
        return indexToPrintableIndexUnmapper(v);
    if (v <= 0xdfff)
        return -1;
    return v - gapSize;
}
function fullUnicode() {
    return buildCharacterArbitrary(0x0000, 0x10ffff - gapSize, unicodeMapper, unicodeUnmapper);
}

function percentCharArbMapper(c) {
    const encoded = SencodeURIComponent(c);
    return c !== encoded ? encoded : `%${safeNumberToString(safeCharCodeAt(c, 0), 16)}`;
}
function percentCharArbUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    const decoded = decodeURIComponent(value);
    return decoded;
}
fullUnicode().map(percentCharArbMapper, percentCharArbUnmapper);

const f64 = new Float64Array(1);
new Uint32Array(f64.buffer, f64.byteOffset);

const f32 = new Float32Array(1);
new Uint32Array(f32.buffer, f32.byteOffset);

(undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

SArray.isArray;

var TokenizerBlockMode;
(function (TokenizerBlockMode) {
    TokenizerBlockMode[TokenizerBlockMode["Full"] = 0] = "Full";
    TokenizerBlockMode[TokenizerBlockMode["Character"] = 1] = "Character";
})(TokenizerBlockMode || (TokenizerBlockMode = {}));

char();

function descendants(parent) {
    return Array.from(parent.childNodes).concat(...Array.from(parent.children).map((child) => descendants(child)));
}
const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
    <SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
    <Substation name="A1" desc="test substation"></Substation>
  </SCL>`;
const testDocStrings = [
    sclDocString,
    `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc1>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc1>`,
    `<?xml version="1.0" encoding="UTF-8"?>
    <testDoc2>
  <element1 property1="value1" property2="value2">SomeText</element1>
  <element2 property2="value2" property3="value3"><!--AComment--></element2>
  <element3 property3="value3" property1="value1">
    <subelement1 property1="value1" property2="value2">SomeMoreText</subelement1>
    <subelement2 property2="value2" property3="value3"><!----></subelement2>
    <subelement3 property3="value3" property1="value1"></subelement3>
  </element3>
  </testDoc2>`,
];
tuple(constantFrom(...testDocStrings), constantFrom(...testDocStrings))
    .map((strs) => strs.map((str) => new DOMParser().parseFromString(str, "application/xml")))
    .map((docs) => docs.map((doc) => ({ doc, nodes: descendants(doc).concat([doc]) })));

export { __decorate as _, isInsert$1 as a, isRemove$1 as b, convertEdit as c, isSetAttributes as d, isSetTextContent as e, isComplex$1 as f, __extends as g, __assign as h, isEditV2 as i, __values as j, __read as k, __classPrivateFieldGet as l, __classPrivateFieldSet as m };
//# sourceMappingURL=testHelpers-053f956f.js.map
