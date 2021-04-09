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
sudo mv seucg ..

sudo cp -r /var/www/zxuuu.tech/dist/* /var/www/html

cd /var/www/
sudo mv seucg ./html
