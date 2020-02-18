/**
 * Implements everything log related
 *
 * @module lib/logger
 */

import { format, createLogger, transports } from 'winston';
import { isProd, defaultMeta, logLevel } from './service';

/**
 * Creates a derived logger using winston.createLogger.
 *
 * By default, in production, logs are limited to info.
 * This can be overwriten through process.env['LOG_LEVEL'].
 *
 * Locally all logs should appear in your console, and
 * are also persisted to debug.log and error.log.
 *
 * @type {Logger}
 * @static
 * @constant
 */
let opts = {
  level: logLevel,
  exitOnError: false,
};

if (isProd) {
  opts = { ...opts, defaultMeta };
}

const logger = createLogger(opts);

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (isProd) {
  logger.add(
    new transports.Console({
      format: format.json(),
    }),
  );
} else {
  const formatter = format.printf(msg => {
    const { timeElapsed, error, timestamp, level, message } = msg;

    let out = `${timestamp} (${level}) - ${message}`;

    if (timeElapsed) out += ` (+${timeElapsed}ms)`;
    if (error && error.stack) out += `\n\n${error.stack}\n`;
    if (error && error.code) out += ` (${error.code})`;

    return out;
  });

  // Error logs
  logger.add(
    new transports.File({
      silent: false,
      filename: 'error.log',
      level: 'error',
      format: format.combine(
        format.uncolorize({ all: true }),
        format.timestamp(),
        formatter,
      ),
    }),
  );

  // Debug logs
  logger.add(
    new transports.File({
      silent: false,
      filename: 'debug.log',
      format: format.combine(
        format.uncolorize({ all: true }),
        format.timestamp(),
        formatter,
      ),
    }),
  );

  // Console logs
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
        formatter,
      ),
    }),
  );
}

export { logger };
export default logger;
