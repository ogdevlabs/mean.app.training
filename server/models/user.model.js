const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    _id:{type:schema.Types.ObjectId, auto: true},
    name:{type: String},
    contact:{type: String},
    address:{type: String},
}, {
    versionKey: false
});

const user = mongoose.model('users', userSchema);
module.exports = user;
