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

router.post('/:id', async (req, res) => {
	const actionInfo = { ...req.body, project_id: req.params.id };
	try {
		const action = await Actions.insert(actionInfo);
		res.status(201).json(action);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving actions.' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const count = await Actions.remove(id);
		if (count > 0) {
			res.status(200).json(action);
		} else {
			res.status(404).json({ message: 'The action could not be found.' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving actions.' });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const action = await Actions.update(req.params.id, req.body);
		if (action) {
			res.status(200).json(action);
		} else {
			res.status(404).json({ message: 'Action could not be found' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving actions.' });
	}
});

module.exports = router;
