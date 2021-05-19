# recluse
Bot to respond to key phrases spoken by key people on twitter. Not much right now.
The core code was taken from https://gitghub.com/broketech/okrobot, which itself
needs a refactor.

## initial setup
npm install? npm load? i dont remember. make a copy of `conf.js.example` as `conf.js`,
then update with your twitter key settings. dot gitignore has `conf.js` added by default
so the file is not published (hopefully).

this bot was made for a twitter joke, and as such the account being screened,
and the responses, are all hard coded. take care and edit the code before initial run.

then run by:

`node recluse.js`

output will be added to the console. you can use a util like pm2 or forever to
keep the script running as well.

## TODO
no, absolutely not. this repo adds a scratch pad for me or anyone to start from.
