const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const actions = await Actions.get(req.id);
		res.status(200).json(actions);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving actions.' });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const action = await Actions.get(id);
		res.status(200).json(action);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving actions.' });
	}
});

module.exports = router;
