# claude-md-conventions

リポジトリ横断のCLAUDE.md規約のソース。生成済みbundleに合成し、他リポジトリが
自分の`CLAUDE.md`にvendorする。

## 構成

- `claude-md/*.md` — 各規約を独立したファイルとして保持
- `dist/universal.md`・`dist/product-repo.md` — 生成済みbundle。手で編集しない
- `scripts/build-bundles.mjs` — `claude-md/*.md`を`dist/`に合成する

## ファイル一覧

| ファイル | bundle | 内容 |
|---|---|---|
| `git-and-gh-operations.md` | universal | git add / gh CLI / SSH remoteのルール |
| `collaboration-norms.md` | universal | 言語の使い分け、他プロジェクト名を出さない、コメント衛生、ミスを認める |
| `performance-discussion-norms.md` | universal | 「速くなるか」を先に言う、効果量でヘッジしない |
| `decision-making.md` | product-repo | 「ゼロから」/5-10年軸のランキング、確認質問のフォーマット |
| `autonomy-and-task-tracking.md` | product-repo | test→implement→review→commit→pushの標準権限、GitHub Issuesバックログ |
| `engineering-conventions.md` | product-repo | commitスタイル、test-first、handoffドキュメントの項目 |

## bundle

- **`universal`** — content-onlyリポジトリ(ブログなど)も含め、どのリポジトリでも安全
- **`product-repo`** — 実装面を持つリポジトリ向け。content-onlyリポジトリではスキップ

正確な構成は`scripts/build-bundles.mjs`を参照。

## ダウンストリームリポジトリへの配布

生成済みbundleをローカルファイルとしてvendorし、`@import`する — Claude Codeの
`@import`はローカルパスのみ解決しURLは解決しないため、ダウンストリーム側に
物理的にファイルが存在する必要がある。

取得方法はこのリポジトリの可視性に応じて選ぶ:

**privateな場合** — `gh`の認証情報でGitHub API経由で取得:

```sh
mkdir -p .claude/vendor
gh api repos/prata0x/claude-md-conventions/contents/dist/universal.md \
  -H "Accept: application/vnd.github.raw" > .claude/vendor/universal.md
```

**publicな場合** — 認証不要の`curl`で取得可能:

```sh
mkdir -p .claude/vendor
curl -fsSL https://raw.githubusercontent.com/prata0x/claude-md-conventions/main/dist/universal.md \
  -o .claude/vendor/universal.md
```

ダウンストリーム側の`CLAUDE.md`では:

```
@.claude/vendor/universal.md
```

`main`は常に最新を指す。再現性が必要ならrefをcommit SHA固定にする。取得コマンドは
手動で再実行する必要があり、自動同期はない。vendorしたコピーは通常通りコミット
するので、driftはダウンストリーム側の履歴に通常の差分として現れる。

## 関連

- [`claude-plugins`](https://github.com/prata0x/claude-plugins) — 本リポジトリ
  から`universal.md`・`product-repo.md`を`.claude/vendor/`にvendorしている。

## CI

`ci.yml` — `.github/workflows`配下のactionが40桁commit SHAでpinされているか、
`dist/`が`claude-md/*.md`から乖離していないかを検証する。

`codeql.yml` — JavaScriptに対するCodeQL解析(push/PR/週次)。`dependabot.yml`
— `github-actions`エコシステムのpin更新のみ(週次・グループ化)。
