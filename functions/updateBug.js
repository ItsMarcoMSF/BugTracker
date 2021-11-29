const axios = require('axios');
require('dotenv').config();
const { UPDATE_BUG } = require('./utils/bugQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { description, dev, priority, _id:id, resolved } = JSON.parse(event.body);
    const variables = {description, dev, priority, resolved, id};
    try {
        const {updateBug: updatedBug} = await sendQuery(UPDATE_BUG, variables);
        // const data = res.allBugs.data;
        return formattedResponse(200, updatedBug);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};