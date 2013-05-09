#!/bin/bash

rm -rf compiled/
../bin/lime.py update
../bin/lime.py build dr -o compiled/dr.js -p dr.start
mkdir -p compiled/assets/answers
cp -R assets/* compiled/assets/
cp dr.manifest compiled/
# rm -rf compiled/*.manifest
