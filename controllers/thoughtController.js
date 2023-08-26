const Thought = require("../models/thought");

module.exports = {
	//Get All Thoughts
	async getThoughts(req, res) {
		try {
			const thoughts = await Thought.find({});
			res.status(200).json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//Get One Thought by ID
	async getOneThought(req, res) {
		try {
			const thought = await Thought.findOne({ _id: req.params.thoughtId });
			if (!thought) {
				return res.status(404).json({ message: "No Thought Found" });
			}
			res.status(200).json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//Create New Thought
	async createThought(req, res) {
		try {
			const newThought = await Thought.create(req.body);
			res.status(200).json(newThought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//Update Thought by ID
	async updateThought(req, res) {
		try {
			const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, { new: true });
			res.status(200).json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	//Delete Thought by ID
	async deleteThought(req, res) {
		try {
			const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
			res.status(200).json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	//----- REACTION ROUTES -----
	//Create Reaction
	async createReaction(req, res) {
		try {
			const newReaction = await Thought.updateOne({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { new: true });
			res.status(200).json(newReaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteReaction(req, res) {
		try {
			const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.body._id } } }, { new: true });
			res.status(200).json(reaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
