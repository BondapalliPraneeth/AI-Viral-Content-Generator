require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contentRoutes = require("./routes/content");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

app.get("/health", (req, res) =>
  res.json({ status: "ok", timestamp: new Date().toISOString() })
);

app.use("/api/content", contentRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 ViralAI Backend running on http://localhost:${PORT}`);
});
