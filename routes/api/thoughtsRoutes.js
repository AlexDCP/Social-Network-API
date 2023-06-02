const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtsId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/Thoughts/:ThoughtId/Reactions
router.route('/:thoughtsId/reactions').post(createReaction);

// /api/Thoughts/:ThoughtId/Reactions/:ReactionId
router.route('/:thoughtsId/reactions/:reactionsId').delete(removeReaction);

module.exports = router;
