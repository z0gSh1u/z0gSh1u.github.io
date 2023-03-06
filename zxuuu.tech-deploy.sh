#!/bin/bash

cd /var/www
sudo rm -rf zxuuu.tech
sudo git clone git@github.com:z0gSh1u/zxuuu.tech.git
cd zxuuu.tech
sudo npm install
sudo npm run docs:build

cd /var/www/html
sudo rm -rf css
sudo rm -rf js
sudo rm -rf assets
sudo rm -rf projects
sudo rm index.html
sudo rm favicon.ico

sudo cp -r /var/www/zxuuu.tech/docs/dist/* /var/www/html

echo "zxuuu.tech deploy done."
