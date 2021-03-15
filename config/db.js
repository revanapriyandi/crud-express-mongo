const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const url = "mongodb://localhost:27017/db_mahasiswa";

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;