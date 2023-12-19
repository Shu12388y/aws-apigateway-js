let data=[
{
	"id":1,
	"joke":`"Dad, I'm hungry." Hello, Hungry. I'm Dad."`
},
{
	"id":2,
	"joke":"Where was the Declaration of Independence signed? At the bottom!"
}
,
{
	"id":3,
	"joke":"Why can't eggs have love? They will break up too soon."
}
]




exports  const handler=async(event)=>{
	
let randomNumber=Math.floor(Math.random()*data.length);

let response{
	message:JSON.stringify(data[randomNumber]);
}


return {
	statusCode:200,
	response:response
}


}


handler()