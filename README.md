# CoinGecko Tokens

Aggregated list of [Token Lists](https://github.com/Uniswap/token-lists) from [CoinGecko](https://coingecko.com)

Hosted on Github and updated daily by Github Actions

### CDN links

https://cdn.jsdelivr.net/gh/cpuchain/coingecko-tokens@main/tokenlist.json

https://cdn.jsdelivr.net/gh/cpuchain/coingecko-tokens@main/tokenlist.top.json

### Notice

It is recommended to fetch from CDN or Github as npm repo would only contain outdated token list (from ./lib/tokenlist.js).

### TO-DO

- [] Support multichain extension https://github.com/Uniswap/token-lists/issues/51

- [] Fetch Uniswap's token list first and merge them with CoinGecko's (Should be complete after multichain support)

### QuickStart

```ts
import { getTokenList } from 'coingecko-tokens';

export const cdn = 'https://cdn.jsdelivr.net/gh/cpuchain/coingecko-tokens@main/tokenlist.top.json';

async function main() {
    // Auto-validated Token List
    const list = await getTokenList(cdn);

    console.log(list);
}
main();
```
