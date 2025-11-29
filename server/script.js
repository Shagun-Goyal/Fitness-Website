import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5100;

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  console.log('GET /api/message', req.ip);
  res.json({ images :[{
    id : 1,
    imageUrl : "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
  },
{
    id : 2,
    imageUrl : "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg"
  },
{
    id : 3,
    imageUrl : "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg"
  },
{
    id : 4,
    imageUrl : "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
  }]});
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
