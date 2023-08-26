const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, trim: true },
	email: { type: String, unique: true, required: true, trim: true }, //add validator
	thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thought" }],
	friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

userSchema.methods.friendCount = function () {
	return this.friends.length;
};
const handleError = (err) => console.error(err);
User.find({})
	.exec()
	.then(async (collection) => {
		if (collection.length === 0) {
			const results = await User.insertMany([
				{ name: "john", username: "johnthethird", email: "hello@gmail.com" },
				{ name: "jane", username: "janethethird", email: "jane@gmail.com" },
			]);
			return console.log("Users inserted", results);
		}
		return console.log("Already populated");
	})
	.catch((err) => handleError(err));

module.exports = User;
