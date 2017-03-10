# component-architecture-sample

## Required

* Node v7.6.0
* Yarn v0.20.3

## Getting Started

```
$ git clone git@github.com:nabeliwo/component-architecture-sample.git
$ cd component-architecture-sample
$ yarn install
$ yarn run dev
```

## Tasks

### storybook

```
yarn run storybook
```

[react-storybook](https://github.com/storybooks/react-storybook)を起動します。  
コンポーネントの見た目や振る舞いの確認をしながら開発することができます。

### watch:css

```
yarn run watch:css
```

実際にはこのコンポーネント集のスタイルは、呼び出し側でsassファイルを読み込んで反映させます。  
しかし、このリポジトリ内でもスタイルを反映させて開発したいので、テスト用に読み込み用のファイルを用意して開発します。  
そのsassファイルの監視とコンパイルをするタスクです。  

確認したいコンポーネントのスタイルを `/static/story.scss` 内でimportする必要があります。

### dev

```
yarn run dev
```

storybookとwatch:cssを並列で実行します。  
実際の開発時にはこのタスクを使用します。このタスクを実行すると、ローカルホストでサーバーが起動するので、画面を見ながら開発することができます。

jsを修正した場合はブラウザがHot Module Replacementにより更新されます。cssを修正した場合は、ブラウザを手動でリロードして反映させる必要があります。

### lint

```
yarn run lint
```

[ESLint](http://eslint.org/)によるlintを実行します。  
airbnbの設定を基本的には反映しています。あまりに厳しいルールは若干変更しています。

push前に必ずこのタスクを動かして、lintが通った状態でpushします。

### test

```
yarn test
```

テストを実行します。  
テストはmocha + power-assert + enzyme + jsdom + sinonを使って作成します。

必ずtestがパスする状態でpushします。

### test:cover

```
yarn run test:cover
```

テストのカバレッジを確認します。  
できるだけカバレッジをあげたいですが、カバレッジ100%を目指すわけではないです。

### esdoc

```
yarn run esdoc
```

[ESDoc](https://esdoc.org/)を使ってドキュメントを生成します。  
`./doc/index.html` をブラウザで表示すると確認できます。
