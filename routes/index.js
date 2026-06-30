const router = require("express").Router();
const { BAD_REQUEST, NOT_FOUND, SERVER_ERROR } = require("../utils/error");

const userRouter = require("./users");
const clothingItem = require("./clothingItem");

router.use("/users", userRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
