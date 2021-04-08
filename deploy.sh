#!/bin/bash

echo "whoami:"
whoami

sudo -i

pm2 stop zxuuu.tech

cd /var/www/
rm -rf zxuuu.tech
git clone git@github.com:z0gSh1u/zxuuu.tech.git

cd zxuuu.tech
npm i
npm run build

cd embedded-server
pm2 start ./embedded-server.js --name zxuuu.tech
