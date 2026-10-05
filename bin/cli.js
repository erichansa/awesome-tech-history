#!/usr/bin/env node

import { getTodayInTech } from '../index.js';

async function main() {
  try {
    const milestone = await getTodayInTech();
    console.log('\n\x1b[1m\x1b[36m=== TODAY IN TECH HISTORY ===\x1b[0m');
    console.log(`\x1b[33mDate:\x1b[0m ${milestone.date}`);
    console.log(`\x1b[1m\x1b[37m${milestone.title}\x1b[0m\n`);
    console.log(milestone.summary);
    console.log(`\n\x1b[34mRead the full verified engineering story:\x1b[0m`);
    console.log(`\x1b[4m${milestone.url}\x1b[0m\n`);
  } catch (err) {
    console.error('Error fetching technology history:', err.message);
    process.exit(1);
  }
}

main();
