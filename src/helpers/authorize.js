const axios = require('axios');
const qs = require('qs');

exports.isAuthorized = async (req, res, next) => {
    const tokenURL = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
    
    try {
        const access_token = req.headers.authorization.replace("Bearer ", "");
        const response = await axios.post(tokenURL, qs.stringify({ access_token }), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        next()
    } catch(e) {
        console.log(e)

        res.status(400).json({msg: 'Not authorized'})
    }
}
