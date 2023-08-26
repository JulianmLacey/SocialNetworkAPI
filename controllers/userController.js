const User = require("../models/user");

module.exports = {
	async getUsers(req, res) {
		try {
			const users = await User.find({});
			res.status(200).json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getSingleUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.userId });
			if (!user) {
				return res.status(404).json({ message: "No User Found" });
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// create a new user
	async createUser(req, res) {
		try {
			const newUser = await User.create(req.body);
			res.json(newUser);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async updateUser(req, res) {
		try {
			const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body);
			if (!user) {
				return res.status(404).json({ message: "No User Found" });
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async deleteUser(req, res) {
		try {
			const user = await User.deleteOne({ _id: req.params.userId });
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async addFriend(req, res) {
		try {
			const friend = await User.updateOne({ _id: req.params.userId }, { $push: { friends: req.params.friendId } });
			res.status(200).json(friend);
		} catch (err) {
			console.log("ERROR ADD FRIEND TO USERS");
			res.status(500).json({ error: "Something went wrong" });
		}
	},
	async deleteFriend(req, res) {
		try {
			// Using model in route to find all documents that are instances of that model
			const friend = await User.updateOne({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } });
			res.status(200).json(friend);
		} catch (err) {
			console.log("ERROR FRIEND FROM USER");
			res.status(500).json({ error: "Something went wrong" });
		}
	},
};
