require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://pupil363:${process.env.MONGOOSE_PASS}@cluster0.u7sdy.mongodb.net/hostel-management-api?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    // useCreateIndex: true
})