const mongoose = require("mongoose");
const moment = require("moment");

//Reaction Schema
const reactionSchema = new mongoose.Schema(
	{
		reactionId: { type: mongoose.Schema.Types.ObjectId, default: () => new Types.ObjectId() },
		reactionBody: { type: String, required: true, maxlength: 280 },
		username: { type: String, required: true },
		createdAt: { type: Date, default: Date.now, get: (createdAtDate) => moment(createdAtDate).format("MMMM Do YYYY, h:mm:ss a") }, //add getter method to format the timestamp on query
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

//Thought Schema
const thoughtSchema = new mongoose.Schema(
	{
		thoughtText: { type: String, required: true, trim: true, minlength: 1, maxlength: 280 },
		createdAt: { type: Date, default: Date.now, get: (createdAtDate) => moment(createdAtDate).format("MMMM Do YYYY, h:mm:ss a") }, //add getter method to format the timestamp on query
		username: [{ type: String, required: true }],
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

thoughtSchema.virtual("friendCount").get(function () {
	return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
