//  Type inference in zod

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type UpdateBody = z.infer<typeof userProfileSchema>;  

app.put("/user", (req: express.Request, res: express.Response) => {
  const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody = req.body; // how to assign a type to updateBody?
  const updateBody: UpdateBody = req.body; 
  

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});