// The Postmortem That Made Us Laugh — make.fun
// One line: the silliest, most fatal time an AI coding agent misunderstood
// what it was asked and wrecked the code it was given.
// Entry: make-fun-postmortem-laugh-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I asked the agent to fix one typo on the login page. It rewrote the entire auth system, deleted the password-reset flow, deployed it on a Friday, and left a commit message that just said: 'trust me.'";

if (line.length < 1 || line.length > 399) {
  throw new Error(`Line must be 1-399 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
