const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

//route
app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', {root: __dirname});
});
app.get('/contact', (req, res) => {
  res.sendFile('./pages/contact.html', {root: __dirname});
});
app.get('/profiles', (req, res) => {
  res.sendFile('./pages/profiles.html', {root: __dirname});
})
app.get('/skills', (req, res) => {
  res.sendFile('./pages/skills.html', {root: __dirname});
})
app.get('/experience', (req, res) => {
  res.sendFile('./pages/experience.html', {root: __dirname});
})
app.use('/', (req, res) => {
    res.send('<h1>404</h1>');
}) //dijalankan terus, digunakan untuk link yg tidak ada saja


app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
})