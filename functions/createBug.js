const axios = require('axios');
require('dotenv').config();
const { CREATE_BUG } = require('./utils/bugQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const {description, dev, priority} = JSON.parse(event.body);
    const variables = {description, dev, priority, resolved: false};
    try {
        const {createBug: createdBug} = await sendQuery(CREATE_BUG, variables);
        // const data = res.allBugs.data;
        return formattedResponse(200, createdBug);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};