const express = require("express");
const router = express.Router({
  mergeParams: true,
});
const tagMod = require("./tags_model");

router.get(
  "/", 
  async (req, res, next) => {
  try {
    const tags = await tagMod.findTags();
    res.status(200).json(tags);
  } catch (err) {
    next(err);
  }
});

router.post("/addTag/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newTag = await tagMod.addTag(req.body, id);
    if (newTag) {
      res.status(201).json({
        message: "New tag created"
      });
    } else {
      send.status(500).json({
        message: "Error saving new tag, please try again later"
      });
    }
  } catch (err) {
    next(err)
  }
});

router.delete(
  "/removeTag/:id", 
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTag = await tagMod.removeTag(id);

    if (!deletedTag) {
      return res
        .status(400)
        .json({ message: "The tag you are trying to delete does not exist" });
    }

    if (deletedTag > 0) {
      res.status(200).json({ message: "Tag successfully deleted" });
    }
  } catch (err) {
    next(err);
  }
});

router.put(
  "/updateTag/:id", 
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTag = await tagMod.updateTag(id, req.body);
    if (updatedTag) {
      res.status(200).json({
        message: "Tag updated"
      });
    } else {
      send.status(500).json({
        message: "Error updating tag, please try again later"
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
