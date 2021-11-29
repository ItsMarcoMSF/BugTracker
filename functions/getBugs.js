const axios = require('axios');
require('dotenv').config();
const { GET_BUGS } = require('./utils/bugQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_BUGS);
        const data = res.allBugs.data;
        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};