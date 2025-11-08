import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

// Error Handling
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS error: This origin is not allowed.",
    });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File size too large. Max allowed is 5MB.",
    });
  }
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Only start listening when running locally or in non-serverless environments.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
  });
}

export default app;
