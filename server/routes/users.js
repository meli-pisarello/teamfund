const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    // Create new user
    let user = new User({
      name: req.body.name
    });
    // Save user
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);

    // Check if the user is found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Delete user from db
    await user.deleteOne();

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    // Check if the user is found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const data = {
      name: req.body.name || user.name
    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);

    // Check if the user is found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;