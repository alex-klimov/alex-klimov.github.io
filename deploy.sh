# fail on any error
set -e

npm install --legacy-peer-deps
npm run build
npm run deploy
