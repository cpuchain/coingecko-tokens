"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COINGECKO_API = void 0;
exports.getTopTokens = getTopTokens;
exports.COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets';
// Get list of top 1000 market cap tokens symbol from CoinGecko
async function getTopTokens() {
    const params = [];
    for (let i = 1; i < 5; ++i) {
        params.push(new URLSearchParams({
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: String(250),
            page: String(i),
        }).toString());
    }
    const lists = (await Promise.all(params.map(async (param) => {
        const resp = await fetch(`${exports.COINGECKO_API}?${param}`, {
            method: 'GET',
            signal: AbortSignal.timeout(60 * 1000),
        });
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    }))).flat();
    return new Set(lists.map((l) => l.symbol?.toLowerCase() || '').flat());
}
