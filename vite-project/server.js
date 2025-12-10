import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
