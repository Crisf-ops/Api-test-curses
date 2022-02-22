const endpoint = require('../endpoint/endpoints')
const util = require('../util/util')
const host = require('../util/hots.json')

exports.getCurses = async (url) => {
    console.log(host.CURSES_URL,endpoint.get);
    return await util.get(host.CURSES_URL,endpoint.get);
}