import logger from "./utils/logger";
import createServer from "./utils/createServer";

async function main() {
  const app = createServer();

  try {
    const url = await app.listen({ port: 4000, host: "0.0.0.0" });

    logger.info(`Server is running on ${url}`);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}

main();
