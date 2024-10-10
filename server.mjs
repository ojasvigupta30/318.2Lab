import express from 'express';
import adventureRoutes from './routes/adventureRoutes.mjs';
import challengeRoutes from './routes/challengeRoutes.mjs';
import fs from 'fs'; // Built-in Node.js module for file handling

// Initialize express
const app = express();
const PORT = 3000;



// Middleware to serve static files (CSS and images)
app.use(express.static('public'));
// app.use(express.static('./styles'));


// Custom template engine
app.engine('temp', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Replace placeholders in the file with actual dynamic content
    let rendered = content.toString()
      .replace('#title#', options.title)
      .replace('#message#', options.message);

    return callback(null, rendered);
  });
});

app.set('views', './views'); // Set the views directory
app.set('view engine', 'temp'); // Register the custom template engine

// Use routers for adventure and challenge routes
app.use('/', adventureRoutes);
app.use('/dragon', challengeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
