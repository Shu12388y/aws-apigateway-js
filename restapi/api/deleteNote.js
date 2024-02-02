// get notes function

const AWS = require("aws-sdk");
AWS.config.update({
    region: "ap-aouth-1"
})


const utils = require("./utils.js");
const _ = require("underscore")

// create a dynamodb client
const db = new AWS.DynamoDB.DocumentClient();
const table_name = process.env.NOTES_TABLE;



exports.handler = async (event, _context) => {
    try {
      
        const timeStamp = parseInt(event.pathParameters.timestamp)
        
        const params={
            TableName:table_name,
            Key:{
                user_id:utils.getUserId(event.headers),
                timestamp:timeStamp
            }

        }
       await db.delete(params).promise()

    } catch (error) {
        return {
            statusCode: error.statusCode ? error.statusCode : 500,
            headers: utils.getHeaders(),
            body: JSON.stringify({
                error: error.message ? error.message : "server error"
            })

        }

    }
}