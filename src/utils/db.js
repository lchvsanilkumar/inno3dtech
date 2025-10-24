import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections.length > 0 && mongoose.connections[0].readyState) {
    console.log("MongoDB already connected.");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    console.log(`MongoDB URL: ${process.env.MONGO_URL}`);

    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      tls: true, // Enables TLS/SSL
      tlsInsecure: true, // Set to false in production; true for development to ignore invalid certificates
    });

    console.log("MongoDB connection successfully established.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
