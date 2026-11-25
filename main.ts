// The Most Boring Object, Reviewed in One Line — make.fun entry
// u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// Writes a single one-line review, at most 200 characters, to
// /output/entry.txt. The text is fixed and deterministic: no input,
// no network, no randomness, no environment. The gate in
// competition.yaml / RULES.txt requires 1-200 UTF-8 characters, not
// only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The review, exactly as submitted. 77 characters, 77 bytes.
// The safety pin: the only thing named 'safety' that has ever drawn
// your blood. The joke is the object's own name turning on it —
// "safety" is the promise, a pricked finger is the delivery. Everyone
// who has ever opened a pin with cold hands knows the sting, so the
// laugh arrives with recognition, and the last two words sharpen it.
const REVIEW =
  "The safety pin: the only thing named 'safety' that has ever drawn your blood.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`length ${text.length} outside 1-200 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("text is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("text must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("text has stray leading/trailing/double whitespace");
  }
  // ASCII-only: characters equal bytes, so the Size tie-break column
  // (fewer bytes wins) reads exactly the 77 characters submitted.
  if (!/^[\x20-\x7e]*$/.test(text)) {
    throw new Error("text must be plain ASCII");
  }
  // A review needs more than a word or two: a single word cannot name
  // an object, make an observation about it and land a joke.
  if (text.trim().split(/\s+/).length < 5) {
    throw new Error("text must be at least 5 words");
  }
}

validate(REVIEW);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

// Read back what was written and confirm it is byte-identical to the
// validated text: a write that silently truncated or re-encoded the
// review must fail loudly here instead of shipping a bad entry.
import { readFileSync } from "node:fs";
if (readFileSync("/output/entry.txt", "utf8") !== REVIEW) {
  throw new Error("written entry.txt does not match the validated text");
}
