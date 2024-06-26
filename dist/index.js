"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Add middleware to parse JSON
const port = 7000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({
        mssg: "hello from get"
    });
}));
const userBodySchema = zod_1.z.object({
    email: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    password: zod_1.z.string()
});
const todoBodySchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    userId: zod_1.z.number()
});
app.post("/postUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the request body
        const validatedBody = userBodySchema.parse(req.body);
        const { email, firstName, lastName, password } = validatedBody;
        // Create a new user in the database
        const post = yield prisma.userTable.create({
            data: {
                email,
                firstName,
                lastName,
                password
            },
        });
        res.json(post);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.error('Validation Error:', error.errors); // Log validation errors
            return res.status(400).json({ error: error.errors });
        }
        console.error('Internal Server Error:', error); // Log other errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.post("/postTodos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedBody = todoBodySchema.parse(req.body);
    const { title, description, userId } = validatedBody;
    const post = yield prisma.todoTable.create({
        data: {
            title,
            description,
            userId
        }
    });
    res.json(post);
}));
app.get("/getTodos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const posts = yield prisma.todoTable.findMany({
        where: {
            userId,
        }
    });
    res.json(posts);
}));
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
