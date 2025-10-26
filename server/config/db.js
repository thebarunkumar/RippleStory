import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ripplestory", // specify database explicitly
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Optional: safe write concern
      writeConcern: { w: "majority", j: true },
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
