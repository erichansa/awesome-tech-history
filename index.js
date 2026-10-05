/**
 * tech-history-today
 * Official Node.js & Browser SDK for Useful Finds Daily Technology Archive
 * https://www.useful-finds-daily.com
 */

const API_BASE = 'https://www.useful-finds-daily.com/api/v1/today-in-tech';

/**
 * Fetch today's historical technology milestone
 * @param {Object} [options]
 * @param {string} [options.date] - Optional date string (YYYY-MM-DD or MM-DD)
 * @returns {Promise<{
 *   title: string,
 *   date: string,
 *   summary: string,
 *   url: string,
 *   image: string,
 *   source: string
 * }>}
 */
export async function getTodayInTech(options = {}) {
  const url = new URL(API_BASE);
  if (options.date) {
    url.searchParams.set('date', options.date);
  }

  const res = await fetch(url.toString(), {
    headers: {
      'User-Agent': 'tech-history-today-sdk/1.0.0 (+https://www.useful-finds-daily.com)'
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch technology history: HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.data;
}

export default getTodayInTech;
