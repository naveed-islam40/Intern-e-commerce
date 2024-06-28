const mongoose = require('mongoose');

const userSchemma = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

const user = mongoose.model('User', userSchemma);
module.exports = user;
