const express = require("express");
const router = express.Router();

// @route  GET api/posts
// @des    test route
// @access Public
router.get("/", (req, res) => {
  res.send("user posts");
});

module.exports = router;
