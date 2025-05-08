import { TokenInfo, TokenList as impTokenList } from '@uniswap/token-lists';
import { getTokenList } from './getTokenList';

export const COINGECKO_TOKEN_API = 'https://tokens.coingecko.com';

export const COINGECKO_CHAINS = [
    'uniswap',
    'binance-smart-chain',
    'arbitrum-one',
    'optimistic-ethereum',
    'polygon-pos',
    'avalanche',
    'xdai',
    'base',
];

export interface TokenList extends Omit<impTokenList, 'tokens'> {
    tokens: TokenInfo[];
}

export function getCoingekoLists(): Promise<TokenList[]> {
    return Promise.all(
        COINGECKO_CHAINS.map((chain) => {
            return getTokenList(`${COINGECKO_TOKEN_API}/${chain}/all.json`);
        }),
    );
}
