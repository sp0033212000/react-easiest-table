rm -rf ./dist ./lib || true
echo Build CJS
sh ./build-cjs.sh
echo Build ESM
sh ./build-esm.sh
#mv ./dist/lib/ ./
cd dist/lib
echo "---------remove *.ts|tsx except *.d.ts---------"
ls
find ./ -type f \( -name '*[^.d].ts' -o -name '*.tsx' -o -name 'tsconfig.json' \) -delete
# find ./ -type f -name '*[^.d].ts' -o -name '*.tsx'
