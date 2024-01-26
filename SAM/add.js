exports.handler=async(event,_context)=>{
    let {num1,num2}=event.body

    return{
        statusCode:200,
        body:JSON.stringify({
            message:{
                num1,
                num2,
                result:num1+num2
            }
        })
    }

}