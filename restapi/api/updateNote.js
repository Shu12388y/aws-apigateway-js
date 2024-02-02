// update notes function

const AWS = require("aws-sdk");
AWS.config.update({
    region:"ap-aouth-1"
})


const utils = require("./utils.js");
const moment = require("moment");


// create a dynamodb client
const db = new AWS.DynamoDB.DocumentClient();
const table_name= process.env.NOTES_TABLE;



exports.handler = async(event,_context)=>{
    try {
        const item = JSON.parse(event.body).Item;
        item.user_id = utils.getUserId(event.headers);
        item.user_name = utils.getUserName(event.handler);
        item.expiry = moment().add(90,'days').unix(); 


        const updateNotes = await db.put({
            TableName:table_name,
            Item:item,
            ConditionalOperator: '#t : :t',
            ExpressionAttributeNames:{
                '#t':'timestamp'
            },
            ExpressionAttributeValues:{
                ':t':item.timestamp
            }
        }).promise()




        return{
            statusCode: 200,
            headers:utils.getHeaders(),
            body:JSON.stringify(updateNotes)

        }
        
    } catch (error) {
        return{
            statusCode:error.statusCode ? error.statusCode: 500,
            headers:utils.getHeaders(),
            body:JSON.stringify({
                error: error.message ? error.message: "server error"
            })

        }
        
    }
}