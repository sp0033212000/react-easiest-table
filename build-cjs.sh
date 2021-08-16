mkdir -p dist/lib/cjs
cp -R ./src/* ./dist/lib/cjs
cp ./tsconfig.json ./dist/lib/cjs
cd ./dist/lib/cjs
echo -----------
pwd
echo -----------
ls
echo -----------
npx tsc --project ./ --module commonjs