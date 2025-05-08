"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenList = getTokenList;
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const token_lists_1 = require("@uniswap/token-lists");
const Ajv = globalThis?.Ajv || ajv_1.default;
const ajv = new Ajv({ allErrors: true, verbose: true });
(0, ajv_formats_1.default)(ajv);
const tokenListValidator = ajv.compile(token_lists_1.schema);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getTokenList(url, fetchParams) {
    const resp = await fetch(url, {
        ...(fetchParams || {}),
        method: 'GET',
        signal: fetchParams?.signal || AbortSignal.timeout(60 * 1000),
    });
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    const list = (await resp.json());
    if (!tokenListValidator(list)) {
        throw new Error(`${url} validation failed`);
    }
    return list;
}
