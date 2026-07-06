## Engineering conventions

Use Conventional Commits.

Write a test that reproduces a bug before fixing it. For concurrency/
race-condition fixes, use a real concurrency-forcing test harness — a
sequential test that passes on both the old and new code is not a valid
regression pin.

Propose updating the handoff doc and switching to a fresh session when
either: context is getting full and you've reached a clean stopping point,
or the next task is large, complex, or largely unrelated to the current
context and would go better starting from a clear context. Include: the
absolute worktree path, branch name and last commit, completed/skipped
tasks (with reasons for any skipped), and the next task quoted from the
original spec rather than summarized.
