#!/bin/bash

set -e

npm run build

cd dist

git init

git add -A

git commit -m "deploy"

git push -f git@github.com:zori7/reactive-query-demo.git master:gh-pages

cd -
