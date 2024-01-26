"use strict"

module.exports.checksum = async(event,_context)=>{
    let{num1,num2}=JSON.parse(event.body);

    if(num1+num2===4){
        return{
            statusCode:200,
            body:JSON.stringify({
                message:{
                    num1,
                    num2,
                    result:"check sum"
                }
            })
        }
    }
    else{
        return {statusCode:200,
            body:JSON.stringify({
                message:{
                    num1,
                    num2,
                    result:" not a check sum"
                }
            })
    
        }

    }
    

}

