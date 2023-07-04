

const mongoose = require('mongoose');
const connection = "mongodb+srv://userData:hdv2TdX9p3fMRHm9@cluster0.hl4cye6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));