const { VerifyTokenAndAuth,VerifyTokenAndAdmin } = require("../middlewares/JWT");
const User = require("../models/User");
const router = require("express").Router();

//get all Users
router.get("/", VerifyTokenAndAdmin, async (req, res) => {
  const query= req.query.new ? true:false;
  try {
    
    const users = query ? await User.find().sort({ _id: -1 }).limit(5): await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * GET specific user
 */
router.get("/:id", VerifyTokenAndAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});



//UPDATE
router.put("/:id", VerifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SaltKey
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete specific user by id
// DELETE
router.delete("/:id", VerifyTokenAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted...." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
