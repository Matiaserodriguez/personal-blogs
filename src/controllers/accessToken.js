require('dotenv').config();
const axios = require('axios');
const qs = require('qs');

const jwt_decode = require('jwt-decode');

const db = require('../models');
const User = db.users;


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

        const userInfo = jwt_decode(response.data.id_token)

        const newUser = new User({
            firstName: userInfo.given_name,
            lastName: userInfo.family_name,
            email: userInfo.email
        });

        await newUser.save(newUser);

        res.status(200).json(response.data)

    } catch(e){
        console.log(e)
        res.status(400).json({msg: 'Something went wrong'})
    }
};
