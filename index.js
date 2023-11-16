// index.js

const { createServer } = require('http');
const bun = require('./bun');
const elysiaApi = require('./elysia-api-server');

// Create a simple router using Bun
const app = bun();

// Serve static files (if needed)
app.use(bun.static('public'));

// Elysia API server setup
elysiaApi.setup(app);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Auth New Tool');
});

// Start server
const PORT = process.env.PORT || 3000;
createServer(app).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
