const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/api/v1/person', async (req, res) => {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 4000);
  });

  res.json({
    fullname: 'Kolosov Nikita',
    age: '19',
    post: 'Sudent',
    gender: 'Man',
    nickname: 'NKolosov097',
    birthDate: '31.01.2003',
  });
});

app.listen(PORT, () => {
  console.log(`Mock server run on port ${PORT}`);
});
