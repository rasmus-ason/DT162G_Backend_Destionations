//OBJ ANVÄNDS EJ

const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
    const token = req.token;

    if(token){
        jwt.verify(token, 'token verify', (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.send({error: "error 1"})
            }else {
                console.log(decodedToken)
                next();
            }
        })
    }else {
        console.log("error2")
        res.send({error: "error 2"})
    }
}

module.exports = {
    requireAuth
}