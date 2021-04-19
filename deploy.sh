#!/bin/bash

echo "whoami:"
whoami

cd /var/www
sudo rm -rf zxuuu.tech
sudo git clone git@github.com:z0gSh1u/zxuuu.tech.git
cd zxuuu.tech
sudo npm i
sudo npm run build

cd /var/www/html
sudo rm -rf css
sudo rm -rf js
sudo rm index.html
sudo rm favicon.ico

sudo cp -r /var/www/zxuuu.tech/dist/* /var/www/html

echo "zxuuu.tech deploy done."