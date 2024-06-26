import express from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'
import { todo } from 'node:test';
const prisma = new PrismaClient()


const app = express();
app.use(express.json()); // Add middleware to parse JSON

const port = 7000;

app.get("/", async (req, res) => {
    return res.json({
        mssg: "hello from get"
    });
});

const userBodySchema = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
});

const todoBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    userId: z.number()
})

app.post("/postUser", async (req, res) => {
    try {
        // Validate the request body
        const validatedBody = userBodySchema.parse(req.body);
        
        const { email, firstName, lastName, password } = validatedBody;
        
        // Create a new user in the database
        const post = await prisma.userTable.create({
            data: {
                email,
                firstName,
                lastName,
                password
            },
        });
        
        res.json(post);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Validation Error:', error.errors); // Log validation errors
            return res.status(400).json({ error: error.errors });
        }
        console.error('Internal Server Error:', error); // Log other errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post("/postTodos", async(req,res) => {
    const validatedBody = todoBodySchema.parse(req.body);
    const { title, description, userId } = validatedBody;
    const post = await prisma.todoTable.create({
        data:{
            title,
            description,
            userId
        }
    })
    res.json(post)
})

app.get("/getTodos", async(req,res) => {
    const { userId }= req.body;
    const posts = await prisma.todoTable.findMany({
        where:{
            userId,
        }
    })
    res.json(posts);
})
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
