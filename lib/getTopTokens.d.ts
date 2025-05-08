export declare const COINGECKO_API = "https://api.coingecko.com/api/v3/coins/markets";
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
export declare function getTopTokens(): Promise<Set<string>>;
