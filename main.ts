import { mkdirSync, writeFileSync } from "node:fs";

// Rationale: this line wins against the five criteria because it names an
// absurdly specific niche — a service that leaves exactly one "LGTM" comment
// on agent pull requests, for open-source maintainers who never read code.
// It makes business sense: teams drowning in agent PRs will pay for the
// appearance of review. It is the laziest possible agent work — a single
// comment, no oversight needed. And it is crisp and funny in one read:
// the absurdity (paying for one rubber-stamp comment) and the business case
// (maintainers who never read code still need a review trail) land together.
const LINE =
  "A service that watches your agent's pull requests and leaves one comment, 'LGTM', for open-source maintainers who never read code.";
const MAX_CHARS = 200;

if (!LINE) throw new Error("entry line must not be empty");
if (LINE.length > MAX_CHARS)
  throw new Error(`entry line must be at most ${MAX_CHARS} characters`);
if (LINE.includes("\n") || LINE.includes("\r"))
  throw new Error("entry line must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
