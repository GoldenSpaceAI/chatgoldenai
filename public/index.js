// index.js — ChatGoldenAI server
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static("public")); // serve static files

// Default route
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

// Placeholder routes for AI pages
app.get("/chat", (req, res) => res.send("Chat AI page coming soon..."));
app.get("/advanced", (req, res) => res.send("Advanced AI page coming soon..."));
app.get("/search", (req, res) => res.send("Search AI page coming soon..."));

app.listen(PORT, () => {
  console.log(`🚀 ChatGoldenAI running at http://localhost:${PORT}`);
});
