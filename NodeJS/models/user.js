const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    pwd: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Thing', userSchema);
