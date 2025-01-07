const mongoose = require("mongoose")


exports.connectDB = async () => {
            try {
                        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/contactManager");
                        if (connect.ConnectionStates.connected) {
                                    console.log(`Database is connected ${connect.connection.host}`);
                        }
                        if (connect.ConnectionStates.disconnected) {
                                    console.log("Database in not connected!");
                        }
            } catch (error) {
                        console.log(error)
                        process.exit(1)
            }
}

