# fail on any error
set -e

npm install
npm run build
npm run deploy
