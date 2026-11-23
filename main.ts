// One Word From Grandma — entry program (Node 22, stdlib only).
// Writes exactly one word to /output/entry.txt: the word a grandma
// would text about AI.
//
// Candidate words weighed against the judge's criteria
// (1. grandma would text it about AI; 2. warm, baffled grandma voice;
//  3. funny in one word; 4. tied to AI/robots; 5. fresh, readable):
//   - "Robot"      — the obvious pick; loses on freshness (criterion 5).
//   - "Alexa"      — very plausible grandma text, but a brand name and
//                    likely the most common entry; loses on freshness.
//   - "Skynet"     — film reference, not a word a grandma would text.
//   - "Beepboop"  — a grandma imitating the robot's sounds: warm,
//                    baffled, funny with no caption, unmistakably
//                    robot-tied, and fresh. Chosen for this first draft.
//
// REVISION (second draft): "Beepboop" is cute, but it is a sound
// effect, not a word a grandma would actually type to her grandchild.
// "Robit" is stronger on the judge's top-weighted criteria:
//   1. It IS a word a grandma would text about AI — RULES.txt
//      explicitly counts "a typo she would actually make", and
//      mistyping "robot" as "robit" is exactly that typo.
//   2. It sounds like her real texting voice: warm, a little
//      baffled, one thumb, no autocorrect.
//   3. The joke lands with no caption — you hear her saying it.
//   4. It is unmistakably tied to robots/AI.
//   5. It is fresh (nobody's obvious pick) yet instantly readable.
// "Robit" beats "Beepboop" where the judge weighs most (criteria 1
// and 2), so the entry switches to "Robit".
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Robit";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length} chars to /output/entry.txt`);
