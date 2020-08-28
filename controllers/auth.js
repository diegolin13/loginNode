const {response} = require('express');
const { googleVerify } = require('../helpers/google-verify');
const { getUserByEmail } = require('../helpers/findUser');

const login = async(req, res = response) => {
    const googleToken = req.body.token;

    try {

        const { email } = await googleVerify(googleToken);

        getUserByEmail(email, (err, user) => {
            if (err) {
                return console.log(err);
            } 
            else {
                res.json({
                    ok: true,
                    msg: 'login works!',
                    user
                });
            }
        });

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto'
        });
    }

}


module.exports = {
    login
}