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
      const note_id = decodeURIComponent(event.pathParameter.note_id);
      
      const params={
        TableName:table_name,
        IndexName:"note_id-index",
        KeyConditionExpression:"note_id = :note_id",
        ExpressionAttributeValue:{
            ":note_id":note_id
        },
        Limit:1
      };


      const getNote = await db.query(params).promise();

    if (!_.isEmpty(getNote.Items)) {
        return {
                statusCode: 200,
                headers: utils.getHeaders(),
                body: JSON.stringify(getNote.Items[0])

        };

    }
    else{
        return{
            statusCode:404,
            headers:utils.getHeaders(),
            body:JSON.stringify("No Element")
        }

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