# fail on any error
set -e

git pull
npm install --legacy-peer-deps
npm run start
