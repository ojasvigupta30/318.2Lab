import express from 'express';
const router = express.Router();

// Home route
router.get('/', (reqs, resp) => {
  resp.render('home', { title: 'Adventure Game', message: 'Welcome to the Adventure Game!' });
});

// About route
router.get('/about', (reqs, resp) => {
  resp.render('about', { title: 'About the Game', message: 'This is an exciting adventure game.' });
});

// Forest route
router.get('/forest', (reqs, resp) => {
  resp.render('forest', { title: 'The Forest', message: 'You are now in a dark, mysterious forest. What will you do next?' });
});

// Export the router
export default router;
