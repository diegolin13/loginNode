const {response} = require('express');
const { googleVerify } = require('../helpers/google-verify');

const login = async(req, res = response) => {
    const googleToken = req.body.token;

    try {

        const { name, email, picture } = await googleVerify(googleToken);
        
        res.json({
            ok: true,
            msg: 'login works!',
            name,
            picture,
            email
        });
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto'
        });
    }

}

const test = (req, res) => {
    try {
        res.json({
            ok: true,
            msg: 'test login works'
        });
    } catch (error) {
        console.log(error);
      return  res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
        
    }
}

module.exports = {
    login,
    test
}