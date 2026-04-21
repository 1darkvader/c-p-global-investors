const express = require('express');
const path = require('path');

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

if (!host || !port) {
  throw new Error('HOST and PORT environment variables are required.');
}

const publicDir = path.join(__dirname, 'public');
const pageRoutes = ['/', '/services', '/about', '/contact', '/book'];

app.disable('x-powered-by');
app.use(express.static(publicDir, { extensions: ['html'] }));

pageRoutes.forEach((route) => {
  app.get(route, (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
});

app.use((_req, res) => {
  res.status(404).sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`C&P Global Investors site running on http://${host}:${port}`);
});