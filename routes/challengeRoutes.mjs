import express from 'express';
const router = express.Router();

// Dragon route
router.get('/', (reqs, resp) => {
  resp.render('dragon', { title: 'Facing the Dragon', message: 'A mighty dragon stands before you. What will you do?' });
});

// Export the router
export default router;
