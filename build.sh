#!/bin/bash

rm -rf compiled/
../bin/lime.py update
../bin/lime.py build dr -o compiled/dr.js -p dr.start
mkdir -p compiled/assets/answers
cp assets/ndollar.js compiled/assets/
cp assets/board.jpg compiled/assets/
cp assets/answers/answer1.js compiled/assets/answers/
rm -rf compiled/*.manifest
