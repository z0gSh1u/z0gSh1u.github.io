#!/bin/bash

cd /var/www
sudo rm -rf zxuuu.tech
sudo git clone git@github.com:z0gSh1u/zxuuu.tech.git
cd zxuuu.tech
sudo /home/ubuntu/.nvm/versions/node/v16.19.1/bin/yarn install
sudo /home/ubuntu/.nvm/versions/node/v16.19.1/bin/yarn docs:build

cd /var/www/html
sudo rm -rf css
sudo rm -rf js
sudo rm -rf assets
sudo rm -rf projects
sudo rm -f index.html
sudo rm -f favicon.ico

sudo cp -r /var/www/zxuuu.tech/docs/.vuepress/dist/* /var/www/html

echo "zxuuu.tech deploy done."
