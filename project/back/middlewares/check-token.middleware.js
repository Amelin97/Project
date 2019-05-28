const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const checkToken = async (req, res, next) => {
    try {
        if (!req.headers.token) {
            return res.status(401).send({ error: 'No token' })
        }
       // console.log('middleware', req.headers.token)
        jwt.verify(req.headers.token, 'shhhhh', async (err, decoded) => {
            if (err) {
                res.status(401).send({ error: err })
                console.log("ERROR:::", err)
            } else {

                const users = await UserService.getUsers({_id: decoded.id})
                const currentUser = users[0];
                
                req.user = currentUser;
                console.log(req.user.id)
                // get user by id
                // put user to req.user
                //  console.log("decoded:::", decoded)
                next()
            }
        })


    } catch (err) {
        console.log(err)
    }
}

module.exports = checkToken;