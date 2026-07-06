## Git and gh operations

- Do not use `git add -A` or `git add .` — they can sweep in unrelated or
  unintended files. Stage explicitly by path instead.
- Do not use `gh pr merge --auto` — it merges without you having read the
  actual CI result. Run `gh pr checks`, read the output, then merge.
- Do not pipe `gh pr checks --watch` into another command — piping can
  swallow the real exit status. Run it directly and read the output.
- `gh` `--body`/`--comment` arguments containing backticks: pass them via a
  quoted heredoc (`"$(cat <<'EOF' ... EOF)"`) instead of an inline string.
- Repos with a `.github/workflows/` directory: use an SSH remote
  (`git@github.com:...`) instead of HTTPS.
