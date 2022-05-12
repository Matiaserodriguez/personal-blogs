require('dotenv').config();
const axios = require('axios');
const qs = require('qs');


exports.getAccessToken = async (req, res) => {
    const baseURL = 'https://oauth2.googleapis.com/token';

    const values = {
        code: req.query.code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT,
        grant_type: 'authorization_code',
    };

    try {
        const response = await axios.post(baseURL, qs.stringify(values), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        res.status(200).json(response.data)

    } catch(e){
        console.log(e)
        res.status(400).json({msg: 'Something went wrong'})
    }
};
