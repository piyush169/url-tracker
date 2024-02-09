const sessionIdMap = new Map();

function setUserId( id , user){
    return sessionIdMap.set(id , user);
}

//if i want to get user by calling getUserId 
function getUserId(id){
    return sessionIdMap.get(id);
}

module.exports = {
    setUserId,
    getUserId,
}