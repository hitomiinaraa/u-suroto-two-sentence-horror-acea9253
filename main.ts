import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The lighthouse keeper's log ended mid-sentence on the night the light went out. I finished reading it at dawn, and the handwriting for the last page was mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
console.log(story);
