import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5100;

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  console.log('GET /api/message', req.ip);
  res.json({ message: "Hello from express backend" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
