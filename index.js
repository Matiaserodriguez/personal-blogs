require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/models');

const app = express();
const PORT = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./src/routes'));

const connectDB = async () => {
    try {
        await db.mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
        process.exit();
    }
};


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    connectDB()
  });
