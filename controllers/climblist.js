const { Router } = require('express');
const router = Router();
const auth = require('../auth');
const ClimbListItem = require('../models/climblist');

router.get('/', auth, async (req, res) => {
	try {
		const { username } = req.payload;
		const climbList = await ClimbListItem.find({ username: username });
		res.status(200).json(climbList);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.post('/', auth, async (req, res) => {
	try {
		const newItem = await ClimbListItem.create(req.body);
		res.status(200).json(newItem);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.get('/:id', auth, async (rea, res) => {
	try {
		const { id } = req.params;
		const climbList = await ClimbListItem.find({ _id: id });
		res.status(200).json(climbList);
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.put('/:id', auth, async (req, res) => {
	try {
		const { id } = req.params;
		const updates = req.body;
		const updatedItem = await ClimbListItem.findByIdAndUpdate(
			id,
			{ ...updates },
			{ new: true }
		);
		res.status(200).json(updatedItem);
		res.send();
	} catch (error) {
		res.status(400).json({ error });
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const deleted = await ClimbListItem.findByIdAndDelete(req.params.id);
		res.status(200).json(deleted);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
