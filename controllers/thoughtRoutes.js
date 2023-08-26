const router = require("express").Router();
const { Thought, User } = require("../models");

//GET all thoughts
router.get("/", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const thought = await Thought.find({});
		res.status(200).json(thought);
	} catch (err) {
		console.log("ERROR GET Thoughts");
		res.status(500).json({ error: "Something went wrong" });
	}
});
//GET a single thought by its _id
router.get("/:id", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await Thought.findOne({ _id: req.params.id });
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET Thought");
		res.status(500).json({ error: "Something went wrong" });
	}
});

//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

router.post("/", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: await Thought.create({ thoughtText: req.body.thoughtText, username: req.body.username }) } });
		res.status(200).json(user);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});
/*
ex. data:
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

*/
//PUT to update a thought by its _id
//DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
//POST to create a reaction stored in a single thought's reactions array field
//DELETE to pull and remove a reaction by the reaction's reactionId value
module.exports = router;
