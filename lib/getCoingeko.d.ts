import { TokenInfo, TokenList as impTokenList } from '@uniswap/token-lists';
export declare const COINGECKO_TOKEN_API = "https://tokens.coingecko.com";
export declare const COINGECKO_CHAINS: string[];
export interface TokenList extends Omit<impTokenList, 'tokens'> {
    tokens: TokenInfo[];
}
export declare function getCoingekoLists(): Promise<TokenList[]>;
