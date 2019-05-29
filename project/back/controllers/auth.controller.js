const UserService = require('../services/user.service');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const salt = 10;


const register = async (req, res) => {
    // console.log('register', req.body , req.query, req.headers);

    try {

        bcrypt.hash(req.body.password, salt, async function (err, hash) {

            const param = { ...req.body, password: hash };

            const newUser = await UserService.createUser(param);
            console.log('newUser', newUser);
            res.status(200).send(newUser);

        });


    } catch (err) {
        //    console.log('err', err)
        res.status(500).send(err);
    }
}

const login = async (req, res) => {

    const users = await UserService.getUsers({ name: req.body.name });
    const user = users[0];
    //console.log(user)

    try {
        if (!user) throw new Error('Username or password incorrect')
        //console.log('front password',req.body.password )
        //console.log('back password',user.password)

        bcrypt.compare(req.body.password, user.password, function (err, result) {
            //console.log(res)
            if (!result) {
                throw new Error('Username or password incorrect')

            } else {
                const token = jwt.sign({ id: user._id }, 'shhhhh')

                // console.log('this is token', token)
                res.status(200).send(token)

            }
        });
    } catch (err) {
        console.log('login err', err)
    }
}

const checkToken = async (req, res) => {
    //   console.log('check.token', req.user)
    res.status(200).send({ user: req.user });
}


module.exports = {
    register,
    login,
    checkToken
}