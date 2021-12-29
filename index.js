const prompt = require('prompt-sync')();
const crypto = require('crypto');
var colors = require('colors');
const Blooket = require('blooket')
const client = new Blooket();
var suffix = 1
var times = 20
var r = colors.green
//Logo-------------------------------------------------------------------->
console.log(r('█████▒██▓     ▒█████   ▒█████  ▓█████▄ ▓█████  ██▀███  '))
console.log(r('▓██   ▒▓██▒    ▒██▒  ██▒▒██▒  ██▒▒██▀ ██▌▓█   ▀ ▓██ ▒ ██▒'))
console.log(r('▒████ ░▒██░    ▒██░  ██▒▒██░  ██▒░██   █▌▒███   ▓██ ░▄█ ▒'))
console.log(r('░▓█▒  ░▒██░    ▒██   ██░▒██   ██░░▓█▄   ▌▒▓█  ▄ ▒██▀▀█▄  '))
console.log(r('░▒█░   ░██████▒░ ████▓▒░░ ████▓▒░░▒████▓ ░▒████▒░██▓ ▒██▒'))
console.log(r(' ▒ ░   ░ ▒░▓  ░░ ▒░▒░▒░ ░ ▒░▒░▒░  ▒▒▓  ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░'))
console.log(r(' ░     ░ ░ ▒  ░  ░ ▒ ▒░   ░ ▒ ▒░  ░ ▒  ▒  ░ ░  ░  ░▒ ░ ▒░'))
console.log(r(' ░ ░     ░ ░   ░ ░ ░ ▒  ░ ░ ░ ▒   ░ ░  ░    ░     ░░   ░'))
console.log(r('           ░  ░    ░ ░      ░ ░     ░       ░  ░   ░    '))
console.log(r('                                  ░                     '))
console.log(r('Made by InsulatorGMan'))
console.log(r('Make sure to like the app!'))
//Questions-------------------------------------------------------------->
var id = prompt(r('Game Pin>'))
var blook = prompt(r("Bots's Blook Use null for no blook>"))
//Generate random name--------------------------------------------------->
var RandomPrefix= crypto.randomBytes(10).toString('hex');
//Joining---------------------------------------------------------------->
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
RandomJoin()
//Join log-------------------------------------------------------------------------------------->
client.on('Joined', data => {
    console.log(`Joined game with name: ${data.name} \nJoined game with blook: ${data.blook}`)
});
//Join Function--------------------------------------------------------------------------------->
function RandomJoin() {
client.joinGame(id,RandomPrefix+suffix,blook)
suffix++;
}
