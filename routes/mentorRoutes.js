const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

// Define routes for Mentor endpoints
router.get('/', mentorController.getAllMentors);
router.post('/', mentorController.createMentor);
router.put('/:id', mentorController.updateMentor);
router.delete('/:id', mentorController.deleteMentor);

module.exports = router;
