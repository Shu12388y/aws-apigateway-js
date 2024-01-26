"use strict"

module.exports.add=async(event,_context)=>{

    let {num1,num2}=JSON.parse(event.body);

    return {
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