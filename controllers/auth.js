const {response} = require('express');
const { googleVerify } = require('../helpers/google-verify');
const { getUserByEmail } = require('../helpers/findUser');
var jwt = require('jsonwebtoken');

const login = async(req, res = response) => {
    const googleToken = req.body.token;

    try {
        const { email } = await googleVerify(googleToken);

        await getUserByEmail(email, (err, user) => {
            if (err) {
                console.log(err)
                return res.status(404).json({ ok: false, msg: 'Usuario no encontrado en la base' });
            } 
            else {
                const id = user[0].id;
                const token = jwt.sign({id: id}, process.env.SEED,{ expiresIn: '12h' } );                
                res.json({
                    ok: true,
                    msg: 'login works!', 
                    token  ,
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