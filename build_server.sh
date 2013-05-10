#!/bin/bash

rm -rf compiled/
../bin/lime.py update
../bin/lime.py build dr -o compiled/dr.js -p dr.start
mkdir -p compiled/assets/answers
cp -R assets/* compiled/assets/
rm -rf compiled/*.manifest
touch compiled/dr.manifest
echo "CACHE MANIFEST" > compiled/dr.manifest
echo >> compiled/dr.manifest
echo "# If you use more files you need to manually list them here." >> compiled/dr.manifest
echo "# Don't remove next line" >> compiled/dr.manifest
echo "# Updated on: $(date +'%Y-%m-%d %H-%M-%S')" >> compiled/dr.manifest
echo >> compiled/dr.manifest
echo "dr.js" >> compiled/dr.manifest
find assets -type f -name "*" >> compiled/dr.manifest
echo >> compiled/dr.manifest
echo >> compiled/dr.manifest
echo >> compiled/dr.manifest
echo "NETWORK:" >> compiled/dr.manifest
echo "*" >> compiled/dr.manifest

cd compiled/
php -S $1
