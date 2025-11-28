# fail on any error
set -e

git pull
npm install
npm run start
