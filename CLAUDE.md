# CLAUDE.md

Shared cross-repo CLAUDE.md convention source. `claude-md/` holds
each convention as a small, independently named file; `scripts/build-bundles.mjs`
composes them into the generated bundles under `dist/`. Downstream repos vendor
a `dist/*.md` file into their own tree and `@`-import it — see this repo's
`README.md` for the exact mechanism and bundle membership.

@dist/universal.md

## Shared CLAUDE.md conventions

`claude-md/` holds cross-repo CLAUDE.md conventions as small, independently
named files (see this repo's `README.md`). `scripts/build-bundles.mjs` composes
them into `dist/universal.md` and `dist/product-repo.md`. `dist/` is
generated — never edit it by hand, and CI (`ci.yml`) fails the
build if it drifts from `claude-md/*.md`. This file imports `dist/universal.md`
above, since this repo follows the same conventions it publishes for others.

## Working norms

- **Do not create artifacts the user did not ask for.** Research first,
  propose, wait for go-ahead.
- **A convention lives in exactly one `claude-md/*.md` file.** Do not
  duplicate the same rule across files or inline it into a downstream repo's
  own CLAUDE.md — fix it at the source and re-run `scripts/build-bundles.mjs`.
