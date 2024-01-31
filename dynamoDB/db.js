const AWS=require("aws-sdk")
// configure the region
AWS.config.update({region:'ap-south-1'})



const dynamoDB= new AWS.DynamoDB();


//  list dynamodb tables
dynamoDB.listTables({},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
});




// list down/describe the table data

dynamoDB.describeTable({
	TableName:"testDB"
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(JSON.stringify(data,null,2))
	}
})
 





 // create a new table



 dynamoDB.createTable({
 	TableName:"test_db_sdk",
 	AttributeDefinitions:[
 	{
 		AttributeName:"User_id",
 		AttributeType:"S"
 	},
 	{
 		AttributeName:"timestamp",
 		AttributeType:"N"
 	}

 	],
 	KeySchema:[
 	{
 		AttributeName:"User_id",
 		KeyType:"HASH"
 	},
 	{
 		AttributeName:"timestamp",
 		KeyType:"RANGE"
 	}
 	],
 	ProvisionedThroughput:{
 		ReadCapacityUnits:1,
 		WriteCapacityUnits:1
 	}
 },(err,data)=>{
 	if(err){
 		console.log(err)
 	}
 else{
 	console.log(JSON.stringify(data,null,2))
 }

 })





 // update table


 dynamoDB.updateTable({
 	TableName:"test_db_sdk",
 	ProvisionedThroughput:{
 		ReadCapacityUnits:2,
 		WriteCapacityUnits:1
 	}
 },(err,data)=>{
 	if(err){
 		console.log(err)
 	}
 	else{
 		console.log(JSON.stringify(data,null,2))
 	}
 })





 // delete the table


 dynamoDB.deleteTable({
 	TableName:"test_db_sdk"
 },(err,data)=>{
 	if(err){
 		console.log(err)
 	}
 	else{
 		console.log(JSON.stringify(data,null,2))
 	}
 })