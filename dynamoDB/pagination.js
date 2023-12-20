const AWS=require("aws-sdk")
const async=require("async")
const _=require("underscore")



AWS.config.update({region:"ap-south-1"});


const dynamoDB=new AWS.DynamoDB.DocumentClient()

let startKey=[];
let result=[];
let pages=0;
async.doWhilst(
	//iterative
(callback)=>{
	let params={
		TableName:"test_db_sdk",
		Limit:3
	}
	if(!_.isEmpty(startKey)){
		params.ExclusiveStartKey=startKey
	}
	dynamoDB.scan(params,(err,data)=>{
		if(err){
			console.log(err)
			callback(err,{})
		}
		else{
			if(typeof data.LastEvaluatedKey !== 'undefined'){
				startKey=LastEvaluatedKey
			}
			else
			{
				startKey=[]
			}
			if(_.isEmpty(data.Items)){
				result=_.union(result,data.Items)

			}
			pages++;
			callback(null,result)
		}
	})

},
()=>{
	if(_.isEmpty(startKey)){
		return false
	}
	else{
		return true
	}

},
(err,data)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log(data)
	}
}



	);


