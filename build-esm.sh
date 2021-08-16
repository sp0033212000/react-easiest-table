mkdir -p dist/lib/esm
cp -R ./src/* ./dist/lib/esm
cp ./tsconfig.json ./dist/lib/esm
cd ./dist/lib/esm
echo -----------
pwd
echo -----------
ls
echo -----------
npx tsc --project ./