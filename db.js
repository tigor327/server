const req = require("mongoose");

const mongoose = req

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTechnology: true
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database.")
    }catch(error){
        console.log("Could not connect to database.", error)
    }
}