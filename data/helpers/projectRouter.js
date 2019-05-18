const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const projects = await Projects.get(req.query);
		res.status(200).json(projects);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error retrieving projects.' });
	}
});

module.exports = router;
