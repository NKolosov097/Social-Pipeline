const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT ?? 4000;

app.use(express.json());
app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/api/main', async (req, res) => {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 4000);
  });

  res.json({
    fullName: 'Kolosov Nikita',
    age: '19',
    nickName: 'shadow123',
    birthDate: '04.09.2000',
  });
});

app.listen(PORT, () => {
  console.log(`Mock server run on port ${PORT}`);
});
