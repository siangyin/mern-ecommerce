import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connectingDb = await mongoose.connect(process.env.MONGO_URL);
		console.log("mongoDB connected");
	} catch (error) {
		console.log(`error ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
