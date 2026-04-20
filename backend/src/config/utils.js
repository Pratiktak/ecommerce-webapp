const jwt = require('jsonwebtoken');

//              payrole--v
const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });

    res.cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // this token not accessable by js
        // it is http only this prevents an attack called xss(cross-site scripting attacks)
        sameSite: "strict", // this prevents this attack
    });

    return token;
};

module.exports = generateToken;