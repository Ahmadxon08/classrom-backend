import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// app.put("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   try {
//     const updatedUser = await db
//       .update(demoUsersTable)
//       .set({ name, email })
//       .where(demoUsersTable.id.equals(id));
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update user" });
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await db.delete(demoUsersTable).where(demoUsersTable.id.equals(id));
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
