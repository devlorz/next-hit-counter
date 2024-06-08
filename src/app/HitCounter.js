import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function HitCounter() {
  const database = readFile(DATABASE_PATH);
  let { hits } = JSON.parse(database);
  hits += 1;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return hits;
}

export default HitCounter;
