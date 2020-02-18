import { logger } from '../lib/logger';

/**
 * This is an example module
 *
 * @module example
 */

/**
 * Returns an object with the permitted route params
 *
 * @param {*} event
 */
function permittedParams(event) {
  let { id } = { id: null, ...event.pathParameters };
  let { ok } = { ok: null, ...event.queryStringParameters };

  id = JSON.parse(id);
  ok = JSON.parse(ok);

  return { id, ok };
}

/**
 * Returns if the endpoint is ok or not
 *
 * @param {Object<any, any>} event - The incoming event
 * @param {boolean} event[ok] - The event is ok or not
 *
 */
export async function hello(event) {
  const { id, ok } = permittedParams(event);

  logger.info(`Received request with id=${id} and ok=${ok}`);

  return {
    statusCode: ok ? 200 : 400,
    body: `The endpoint is ${ok ? 'ok' : 'not ok'}`,
    headers: {
      'content-type': 'plain/text; charset=utf-8;',
    },
  };
}

// Export the handler as the default function for this module
export default hello;
