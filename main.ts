// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// Pun: sage, the herb — plant it, and the kids call dad a "wise guy".
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I planted sage in the garden. Now my kids think I'm a real wise guy.";
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, JOKE, "utf8");
