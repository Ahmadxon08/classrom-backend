import { Request, Response } from "express";
import { db } from "../db/client";
import { demoUsers } from "../db/schema";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = await db
      .insert(demoUsers)
      .values({ name, email })
      .returning();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.select().from(demoUsers);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await db
      .select()
      .from(demoUsers)
      .where(demoUsers.id.equals(id))
      .execute();
    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await db
      .update(demoUsers)
      .set({ name, email })
      .where(demoUsers.id.equals(id))
      .returning();
    if (updatedUser.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await db
      .delete(demoUsers)
      .where(demoUsers.id.equals(id))
      .returning();
    if (deletedUser.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
