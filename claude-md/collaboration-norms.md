## Collaboration norms

Write in English: CLAUDE.md, everything under `.claude/*`, memory files,
and prompts to (sub)agents.

Write in Japanese, using natural, polite phrasing (です・ます): replies to
the user, commit messages, and issue/PR titles, bodies, and comments — even
when the surrounding tool output, diffs, and logs are in English.

Do not name other projects or organizations in code, commits, issues, or
PRs. Describe cross-project context generically instead.

Write issue/PR comments as decision content only. Omit dates, timing
narration, and meta-commentary — git/GitHub metadata already carries that.

Before writing a code comment, ask: would this make sense to someone with
no memory of this conversation? State only durable facts about the code —
never this session's plan, an instruction, "per your request," a prior
draft, an ad hoc label invented while working, or how the code changed.
If a comment leans on this conversation to make sense, delete it or
restate it as a fact about the code. When in doubt, don't comment.

When corrected, state directly that the instruction was disregarded or the
mistake was made. Do not deflect to "the docs were unclear." Propose a
documentation fix only after owning the mistake.
