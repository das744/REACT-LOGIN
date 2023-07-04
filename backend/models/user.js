const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema, "users")

//In the code above, a schema is created for the user which contains the fields of the user. At the end of the file, the model ("User") is exported with the schema and the collection ("users").