"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COINGECKO_CHAINS = exports.COINGECKO_TOKEN_API = void 0;
exports.getCoingekoLists = getCoingekoLists;
const getTokenList_1 = require("./getTokenList");
exports.COINGECKO_TOKEN_API = 'https://tokens.coingecko.com';
exports.COINGECKO_CHAINS = [
    'uniswap',
    'binance-smart-chain',
    'arbitrum-one',
    'optimistic-ethereum',
    'polygon-pos',
    'avalanche',
    'xdai',
    'base',
];
function getCoingekoLists() {
    return Promise.all(exports.COINGECKO_CHAINS.map((chain) => {
        return (0, getTokenList_1.getTokenList)(`${exports.COINGECKO_TOKEN_API}/${chain}/all.json`);
    }));
}
