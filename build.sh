#!/bin/bash

rm -rf compiled/
../bin/lime.py update
../bin/lime.py build dr -o compiled/dr.js -p dr.start
cp assets/ndollar.js compiled/assets/
cp assets/board.jpg compiled/assets/
rm -rf compiled/*.manifest
