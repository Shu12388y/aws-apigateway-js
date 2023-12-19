const AWS=require("aws-sdk")
AWS.config.update({region:"ap-south-1"})

const async=require("async")
const _ =require("underscore")

// creating a new instance of dynamodb document client
const dynamodbMethod=new AWS.DynamoDB.DocumentClient();






// put method
dynamodbMethod.put({
	TableName:"test_db_sdk",
	Item:{
		user_id:"shubham",
		timestamp:12345,
		title:"test title",
		content:"test content"

	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(JOSN.stringify(data,null,2))
	}
})





// update item


// #t is a varaible
// :t is the varaiable value 
// in this function we are updating the title value
dynamodbMethod.update({
	TableName:"test_db_sdk",
	Key:{
		user_id:"shubham",
		timestamp:1
	},
	UpdateExpression:'set #t = :t',
	ExpressionAtributeNames:{
		"#t":'title'
	},
	ExpressionAtributeValues:{
		':t':"updated title"
	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})







// delete the item
dynamodbMethod.delete({
	TableName:"test_db_sdk",
	Key:{
		user_id:"shubham",
		timestamp:1
	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})






// put or delete multiple item

dynamodbMethod.batchWrite({
	RequestItems:{
		'test_db_sdk':[
		{
			DeleteRequest:{
				Key:{
					user_id:"shubham",
					timestamp:1
				}
			}
		},
		{
			PutRequest:{
				Key:{
					user_id:"Kunal",
					timestamp:2,
					content:"New content",
					title:"New title"
				}
			}
		}
		]
	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})






// write the data for particular condition
dynamodbMethod.write({
	TableName:"test_db_sdk",
	Item:{
		user_id:"shubham",
		timestamp:1,
		content:"New content",
		title:"New title"
	},
	ConditionExpression:"#t <> :t",
	ExpressionAtributeNames:{
		"#t":"timestamp"
	},
	ExpressionAtributeValues:{
		":t":1
	}

},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})




// get data from the table

dynamodbMethod.get({
	TableName:"test_db_sdk",
	Key:{
		user_id:"shubham",
		timestamp:1
	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})




// query operation data from the table

dynamodbMethod.query({
	TableName:"test_db_sdk",
	KeyConditionExpression:"user_id=:uid",
	ExpressionAtributeValues:{
		":uid":"shubham"
	}
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})



// scan opertion in the table

dynamodbMethod.scan({
	TableName:"test_db_sdk"
},(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})




// filter operation in the table
dynamodbMethod.scan({
	TableName:"test_db_sdk",
	FilterExpression:"cat = :cat",
	ExpressionAtributeValues={
			":cat":"general"
	}
},(err,data)=>{
if(err){
	console.log(err)
}
else{
	console.log(data)
}
})




// get data from multiple table
dynamodbMethod.batchGet({
	RequestItems:{
		"test_db_sdk":{
			Keys:[
			{
				user_id:"shubham",
				timestamp:1
			},
			{
				user_id:"Kunal",
				timestamp:2
			}

			]
		},
		"test_db_sdk_2":{
			Keys:[
			{
				user_id:"jack",
				timestamp:3
			},
			{
				user_id:"hacker",
				timestamp:2
			}
			]
		}
	}
},(err,data)=>{

	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
})



// pagination in dynamodb

