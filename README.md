## まえがき

このリポジトリでは、VSCodeの開発コンテナーでの実装を前提としている。
そのため他環境での開発は予期せぬ動作不良の恐れがある。

## セットアップ

```
$ cp .env.example .env

// 必要に応じて設定を編集
$ vi .env

$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs

$ vendor/bin/sail up -d
$ vendor/bin/sail npm install
$ vendor/bin/sail artisan key:generate
```
