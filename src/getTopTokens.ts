export const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets';

// https://docs.coingecko.com/reference/coins-markets
export interface CoinGeckoMarket {
    id?: string;
    symbol?: string;
    name?: string;
    current_price?: number;
    market_cap?: number;
    market_cap_rank?: number;
    total_volume?: number;
    high_24h?: number;
    low_24h?: number;
}

// Get list of top 1000 market cap tokens symbol from CoinGecko
export async function getTopTokens(): Promise<Set<string>> {
    const params: string[] = [];

    for (let i = 1; i < 5; ++i) {
        params.push(
            new URLSearchParams({
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: String(250),
                page: String(i),
            }).toString(),
        );
    }

    const lists = (
        await Promise.all(
            params.map(async (param) => {
                const resp = await fetch(`${COINGECKO_API}?${param}`, {
                    method: 'GET',
                    signal: AbortSignal.timeout(60 * 1000),
                });

                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }

                return resp.json() as Promise<CoinGeckoMarket[]>;
            }),
        )
    ).flat();

    return new Set(lists.map((l) => l.symbol?.toLowerCase() || '').flat());
}
