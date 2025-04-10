const express = require('express');
const router = express.Router();
const Idea = require('../models/idea');

// Get all ideas
router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find().sort({ createdAt: -1 });
        res.json(ideas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new idea
router.post('/', async (req, res) => {
    const idea = new Idea({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const newIdea = await idea.save();
        res.status(201).json(newIdea);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Like an idea
router.patch('/:id/like', async (req, res) => {
    try {
        const idea = await Idea.findById(req.params.id);
        if (!idea) {
            return res.status(404).json({ message: 'Idea not found' });
        }
        
        idea.likes += 1;
        const updatedIdea = await idea.save();
        res.json(updatedIdea);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete an idea
router.delete('/:id', async (req, res) => {
    try {
        const idea = await Idea.findByIdAndDelete(req.params.id);
        if (!idea) {
            return res.status(404).json({ message: 'Idea not found' });
        }
        res.json({ message: 'Idea deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;