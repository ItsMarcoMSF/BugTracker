const axios = require('axios');
require('dotenv').config();
const { DELETE_BUG } = require('./utils/bugQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    
    const { id } = JSON.parse(event.body);
    const variables = { id };
    try {
        const { deleteBug: deletedBug } = await sendQuery(
            DELETE_BUG, 
            variables
        );

        return formattedResponse(200, deletedBug);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};