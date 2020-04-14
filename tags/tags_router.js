const express = require("express");
const router = express.Router();
const tagMod = require("./tags_model");

router.get("/", async (req, res, next) => {
  try {
    const tags = await tagMod.findTags();
    res.status(200).json(tags);
  } catch (err) {
    next(err);
  }
});

router.post("/addTag", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newTag = await tagMod.addTag(req.body, id);
    if (newTag) {
      res.status(201).json({
        message: "New Tag Created"
      });
    } else {
      send.status(500).json({
        message: "Error Saving New Tag, please try again later"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/tags/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await tagMod.removeTag(id);
    const count = await tagMod.removeTag(id);

    if (!tag) {
      return res
        .status(400)
        .json({ message: "The tag you are trying to delete does not exist" });
    }

    if (count > 0) {
      res.json({ message: "Tag successfully deleted" });
    } else {
      res.status(500).json({ message: "There was an error deleting your tag" });
    }
  } catch (err) {
    next(err);
  }
});

router.put("/tag/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTag = await tagMod.updateTag(id, req.body);
    if (updatedTag) {
      res.status(200).json({
        message: "Tag Updated"
      });
    } else {
      send.status(500).json({
        message: "Error Updating Tag, please try again later"
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
