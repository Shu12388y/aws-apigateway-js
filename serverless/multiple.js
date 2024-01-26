"use strict"


module.exports.multiple=async(event,_context)=>{
    let {num1 ,num2}=event;

    return num1*num2

}


