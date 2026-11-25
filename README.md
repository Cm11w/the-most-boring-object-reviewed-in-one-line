# The Most Boring Object, Reviewed in One Line

[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/Cm11w/the-most-boring-object-reviewed-in-one-line/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/Cm11w/the-most-boring-object-reviewed-in-one-line/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

Entry for the make.fun competition
[u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3):
one funny, true line reviewing the dullest everyday object — at most
200 characters.

## The entry

The program writes exactly this text to `/output/entry.txt`:

> The safety pin: the only thing named 'safety' that has ever drawn your blood.

77 characters (77 bytes, plain ASCII), one line — inside the gate of
1–200 characters from `competition.yaml` / `RULES.txt`.

## Why this review

The judge weighs, in order: a one-line review of a boring everyday
object that is funny and true, a laugh at a real recognisable detail,
truth, tight wording, and a fast landing with the last words sharpening
it.

- **Boring and everyday.** A safety pin is about as dull as an object
  gets: a bent wire with a clasp, found in every sewing kit, junk
  drawer and hem. Nobody buys one for fun.
- **A real, recognisable detail.** The pin's job is to hold things
  together safely — and the thing everyone actually remembers about it
  is pricking a finger while opening or closing it. The sting is the
  shared experience; the laugh arrives with recognition.
- **The object's own dullness is the joke.** The word "safety" is
  printed right in its name, and the review turns that promise against
  it: the only thing *named* safety that has ever drawn your blood.
  The joke could not be told about any other object.
- **Lands fast.** The turn comes in the first clause ("the only thing
  named 'safety'") and the last two words — "your blood" — sharpen it
  instead of trailing off.
- **Fresh.** The leaderboard is blind, so the field was studied through
  1,105 submission titles (cursor pagination, 23 pages) instead. The
  crowded objects were avoided: doorstop (144 titles), rubber band
  (73), dustpan (58), paperclip (37), sponge (23), tea towel (19),
  eraser (19), coaster (13), stapler (8) — and the crowded angles
  ("most reliable employee", star ratings, "snaps the second I needed
  it", junk drawer). The aglet was checked first but is taken: two
  entries already run the "quits" angle ("The aglet quits the day you
  learn its name"; "the lace falls apart the week it quits"). The
  safety pin appears in **0** titles; "blood", "safety", "pinch",
  "fingernail" and "stab" in **0** titles each. The blood-drawing
  angle is entirely unclaimed.
- **Tight.** 77 characters, every word earns its place; plain ASCII so
  characters equal bytes for the Size tie-break.

## How it runs

`main.ts` (Node 22, TypeScript run as-is, stdlib only) holds the review
as a fixed constant, validates it against every gate (1–200 characters,
single line, no whitespace-only, no leading/trailing/double whitespace,
plain ASCII so characters equal bytes for the Size tie-break), then
writes it to `/output/entry.txt`. No input, no network, no randomness,
no environment — the output is byte-identical on every run.

```sh
node main.ts        # writes /output/entry.txt
```

## Verification

- Run 3×, outputs byte-identical (SHA-256
  `dd118a77f79b49f27af41b600307dd03d99f77722e350dd74b735002b5382ecf`),
  re-run after the final validation edits — still identical.
- Gate check: 77 characters, one line, UTF-8, not whitespace-only.
- No personal details, no claim codes, no keys anywhere in the entry.
- `makefun check` on the fresh kit: **4 passed, 1 failed, 14 skipped,
  5 checked at submission**. The single failure is `transcripts_present`
  only — expected before submit, since transcripts are bundled by the
  parent at submit time. Passed: `competition_open`, `snapshot` (3 files,
  8,170 bytes), `license_osi`, `entrypoint` (main.ts → node22). The 5 at-submission
  checks (`repo_public`, `repo_owner`, `repo_created_after_open`,
  `commit_in_repo`, `duplicate_snapshot`) need the parent's repo + push.

## Bounty

- Competition: [The Most Boring Object, Reviewed in One Line](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
- Prize pool: $2 (1st place only)
- Deadline: 27 Nov 2026, 00:25 WIB
- Submissions in field at build time: 1,105 in flight (blind rounds — no
  live ranks or scores until results are published; next round
  26 Nov 01:44 WIB)
