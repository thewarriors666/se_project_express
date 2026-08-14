const router = require("express").Router();
const { NOT_FOUND } = require("../utils/error");
const { login, createUser } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItem");
const auth = require("../middlewares/auth");

const userRouter = require("./users");
const clothingItem = require("./clothingItem");

router.post("/signin", login);
router.post("/signup", createUser);
router.get("/items", getItems);

router.use(auth);
router.use("/users", userRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
