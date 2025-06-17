https://ja.vite.dev/guide/static-deploy.html#github-pages

こちらのGithub Pagesを確認してください

> https://<USERNAME>.github.io/<REPO>/ にデプロイする場合...

とある部分から、`vite.config.ts`に`base`という項目を追加し、Githubのリポジトリ名を設定する必要があります。

Githubのリポジトリ名が`c-skills-todo-list`であれば

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/c-skills-todo-list/",
  build: {
    outDir: "docs"
  },
  plugins: [
    tailwindcss(),
  ],
})
```

このように`base`を追加します。

リポジトリ名が異なる場合は、そのリポジトリ名を`/`で囲うように設定してください
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/リポジトリ名/",
  build: {
    outDir: "docs"
  },
  plugins: [
    tailwindcss(),
  ],
})
```


その後、`yarn build`を実行し`docs`を更新します。

`vite.config.ts`の設定が正しければ、`docs/index.html`の`<head>`タグ内部のJavascriptとCSSを読み込んでいる部分が
```html
<script type="module" crossorigin src="/c-skills-todo-list/assets/index-CV0Ktl2M.js"></script>
<link rel="stylesheet" crossorigin href="/c-skills-todo-list/assets/index-C7ZyISLT.css">
  ```

このように指定したリポジトリ名を含むように変わっています。

その後、Github Desktopで変更を更新し、再度Github Pagesを確認してみてください。