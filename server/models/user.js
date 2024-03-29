var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        photo: {type: String},
        name: {type: String},
        email: {
            type: String,
            required: 'At least 1 character before @ symbol',
        },
        ad1: {type: String},
        ad2: {type: String},
    }
);

module.exports = mongoose.model('User', UserSchema);

