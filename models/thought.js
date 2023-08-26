const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
	reactionId: { type: mongoose.Schema.Types.ObjectId, default: () => new Types.ObjectId() },
	reactionBody: { type: String, required: true, maxlength: 280 },
	username: { type: String, required: true },
	createdAt: { type: Date, default: Date.now }, //add getter method to format the timestamp on query
});

const thoughtSchema = new mongoose.Schema({
	thoughtText: { type: String, required: true, trim: true, minlength: 1, maxlength: 280 },
	createdAt: { type: Date, default: Date.now }, //add getter method to format the timestamp on query
	username: [{ type: String, required: true }],
	reactions: [reactionSchema],
});

thoughtSchema.methods.reactionCount = function () {
	return this.friends.length;
};

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
