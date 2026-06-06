const express = require('express');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const connectDB = require('./config/ConnectDb');

const app = express();


connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
    fileUpload({
        useTempFiles: true,
    })
);


app.get('/', (req, res) => {
    res.json({ msg: 'This is Example' });
});

// Routes
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/categoryRouter'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/productRouter'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
