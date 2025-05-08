import impAjv from 'ajv';
import addFormats from 'ajv-formats';
import { schema, TokenList } from '@uniswap/token-lists';

const Ajv = (globalThis as { Ajv?: typeof impAjv })?.Ajv || impAjv;

const ajv = new Ajv({ allErrors: true, verbose: true });

addFormats(ajv);

const tokenListValidator = ajv.compile(schema);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getTokenList(url: string, fetchParams?: any): Promise<TokenList> {
    const resp = await fetch(url, {
        ...(fetchParams || {}),
        method: 'GET',
        signal: fetchParams?.signal || AbortSignal.timeout(60 * 1000),
    });

    if (!resp.ok) {
        throw new Error(resp.statusText);
    }

    const list = (await resp.json()) as TokenList;

    if (!tokenListValidator(list)) {
        throw new Error(`${url} validation failed`);
    }

    return list;
}
