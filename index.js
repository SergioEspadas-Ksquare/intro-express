import express from "express";

const app = express();
const PORT = 5000;
const HOST_NAME = "localhost";

const v1 = express.Router();

const userRouter = express.Router();
const orgRouter = express.Router();

// LIST
userRouter.get("/", (req, res) => {
  res.send("GET /v1/users");
});

orgRouter.get("/", (req, res) => {
  res.send("GET /v1/orgs");
});

// CREATE
userRouter.post("/", (req, res) => {
  res.send("POST v1/users");
});

orgRouter.post("/", (req, res) => {
  res.send("POST v1/orgs");
});

// READ
userRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  res.send(`GET /v1/users/${id}`);
});

orgRouter.get("/:orgId", (req, res) => {
  const { id } = req.params;

  res.send(`GET /v1/orgs/${orgId}`);
});

// UPDATE
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;

  res.send(`PUT /v1/users/${id}`);
});

orgRouter.put("/:orgId", (req, res) => {
  const { id } = req.params;

  res.send(`PUT /v1/orgs/${orgId}`);
});

// DELETE
userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.send(`DELETE /v1/users/${id}`);
});

orgRouter.delete("/:orgId", (req, res) => {
  const { orgId } = req.params;

  res.send(`DELETE /v1/orgs/${orgId}`);
});

v1.use("/users", userRouter);
app.use("/v1", v1);
app.get("/", (req, res) => {
  res.send("Hello World");
});

v1.use("/orgs", orgRouter);
app.use("/v1", v1);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

// app.method(PATH, HANDLER) <--- Secret sauce

/* Interface User
    Id
    Name
    Age
    OrgId
*/

/* Interface Organization
    Id
    Name
*/

// (L)CRUD Users
// [GET] /users
// [POST] /users
// [GET] /users/{userId}
// [PUT] /users/{userId}
// [DELETE] /users/{userId}

// (L)CRUD Orgs

// [GET] /orgs
// [POST] /orgs
// [GET] /orgs/{orgId}
// [PUT] /orgs/{orgId}
// [DELETE] /orgs/{orgId}
