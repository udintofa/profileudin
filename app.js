const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Gunakan PORT dari environment

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
  res.sendFile('./pages/contact.html', { root: __dirname });
});
app.get('/profiles', (req, res) => {
  res.sendFile('./pages/profiles.html', { root: __dirname });
});
app.get('/skills', (req, res) => {
  res.sendFile('./pages/skills.html', { root: __dirname });
});
app.get('/experience', (req, res) => {
  res.sendFile('./pages/experience.html', { root: __dirname });
});

// Middleware 404 harus di akhir
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
