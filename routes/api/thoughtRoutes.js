const router = require("express").Router();
const { createThought, getOneThought, getThoughts, updateThought, deleteThought, createReaction, deleteReaction } = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reaction").post(createReaction).delete(deleteReaction);

module.exports = router;
