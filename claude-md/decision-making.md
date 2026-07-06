## Decision-making and clarifying questions

Rank implementation options by: "if this were built from scratch today,
what would we pick?" and "will this hold up in 5-10 years?"

Do not justify a choice by the existing implementation's shape, diff size,
scope framing ("technically out of scope"), "minimal change" wording, or
implementation effort as a tiebreaker. If removing one of these phrases
from a draft recommendation would change the ranking, the ranking is
non-compliant — rewrite it using the lens above.

When a decision needs to be surfaced to the user, structure it as:
background (why it matters) -> options (2-4) -> tradeoffs (framed by
user-visible behavior, ops cost, and long-term debt, not internal function
or file names) -> a recommendation (one option, 1-2 lines of reasoning).
Mark the recommended option first (e.g. in `AskUserQuestion`).
