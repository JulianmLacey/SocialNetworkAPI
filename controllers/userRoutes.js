const router = require("express").Router();
const { User } = require("../models");

//GET all users
router.get("/", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.find({});
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});

//GET a single user by its _id and populated thought and friend data
router.get("/:id", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.findOne({ _id: req.params.id });
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});

//POST a new user
router.post("/", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.create(req.body);
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});

//PUT to update a user by its _id
router.put("/:id", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.updateOne({ _id: req.params.id }, req.body);
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});
//DELETE to remove user by its _id

// /api/users/:userId/friends/:friendId
//POST to add a new friend to a user's friend list
//DELETE to remove a friend from a user's friend list

router.post("/:userId/friends/:friendId", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.updateOne({ _id: req.params.userId }, { $push: { friends: req.params.friendId } });
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});
router.delete("/:userId/friends/:friendId", async (req, res) => {
	try {
		// Using model in route to find all documents that are instances of that model
		const result = await User.updateOne({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } });
		res.status(200).json(result);
	} catch (err) {
		console.log("ERROR GET USERS");
		res.status(500).json({ error: "Something went wrong" });
	}
});
//BONUS Remove a user's associated thoughts when deleted.
module.exports = router;
