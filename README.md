# template_hp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

HPのTemplate

https://tomo1227.github.io/template_hp/

## Usage

Dev-Containerを立ち上げて、コンテナ内で以下のコマンドを叩く。

```sh
make run
```

OR

```sh
bun run dev
```

OR

```sh
bunx --bun vite
```

http://localhost:3001/ (もしくは、自分で指定したポート) を開く

## PORTの割り当て

[.env](.env)でホストIPを変更すれば、他プロジェクトとポートが被っても使用できる。
> [!IMPORTANT]
> .envのHOST_IPに127.0.0.1以外のホストIP(ループバックアドレス)を指定するとき
> 以下のコマンドをターミナルで事前に叩いておく必要がある。(127.0.0.2の箇所にHOST IPを指定)
>
> ```txt
> sudo ifconfig lo0 alias 127.0.0.2
> ```
>
## Commit Message ガイドライン

.commit template を参考に記述してください

## Pull Request ガイドライン

`[type][emoji] (title)`

- feat✨ ログイン機能を追加
- fix👓 ナビゲーションのアクセシビリティを改善

### Pull Request Type

- fix: 🐛 バグの修正 (SemVer パッチと関連)
- feat: ✨ 新機能を追加 (SemVer のマイナーに対応)
- feat!: 💥 破壊的な新機能 (SemVer のメジャーになります)
- fix!: 💥 破壊的なバグ修正 (SemVer のメジャーになります)
- refactor: ♻️ コードの再構築
- revert: ⏪ 変更を取り消す
- test: 🧪 テストに関連する変更
- docs: 📚 ドキュメンテーションの変更
- style: 🎨 スタイルや書式の変更
- perf: ⚡ パフォーマンス改善
- build: 👷‍♀️ ビルドシステムや外部依存関係の変更
- chore: 🔧 その他の変更
- ci: 🎡 CI/CD パイプラインに関連する変更
