// get notes function

const AWS = require("aws-sdk");
AWS.config.update({
    region: "ap-aouth-1"
})


const utils = require("./utils.js");


// create a dynamodb client
const db = new AWS.DynamoDB.DocumentClient();
const table_name = process.env.NOTES_TABLE;



exports.handler = async (event, _context) => {
    try {
        const query = event.queryStringParameters;
        const limit = query && query.limit ? parseInt(query.limit) : 5;
        const user_id = utils.getUserId(event.headers);

        const params = {
            TableName: table_name,
            keyconditionExpression: '#k = :k',
            ExpressionAttributeValue: {
                ":k": user_id
            },
            Limit: limit,
            ScanIndexForward: false
        }

        const startTimeStamp = query && query.start ? parseInt(query.start) : 0

        if (startTimeStamp > 0) {
            params.ExclusiveStartKey = {
                user_id,
                timestamp: startTimeStamp
            }
        }


        const getNotes = await db.query(params).promise();




        return {
            statusCode: 200,
            headers: utils.getHeaders(),
            body: JSON.stringify(getNotes)

        }

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