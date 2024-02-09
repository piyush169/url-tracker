const { use } = require('../routes/users');
const {getUserId} = require('../services/auth')

function authcheckF(req , res , next){
    const UID = req.cookies?.uid;

    if(!UID) return res.redirect('/login')
    user = getUserId(UID);
    if(!user) return res.redirect('/login');
    req.user = user;
    next()
}

function authcheck(req , res , next){
    const UID = req.cookies?.uid;
    const user = getUserId(UID)
    req.user = user;
    next()
}
module.exports = {
    authcheckF,
    authcheck
}