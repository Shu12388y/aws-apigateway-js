const { head } = require("underscore")

const getHeaders=()=>{
    return{
        'Access_Control-Allow-Origin':"*"
    }
}

const getUserId=(headers)=>{
    return headers.app_user_id;

}
const getUserName=(headers)=>{
    return headers.app_user_name;

}


module.exports={
    getHeaders,
    getUserId,
    getUserName

}