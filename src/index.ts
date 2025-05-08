import { writeFile } from 'fs/promises';

async function test() {
    await writeFile('./date.txt', Math.floor(Date.now() / 1000).toString());
}

test();