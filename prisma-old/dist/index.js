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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
// app.post('/post', async (req, res) => {
//     const { email, password, firstName, lastName } = req.body
//     const post = await prisma.user.create({
//         data: {
//             email,
//             password,
//             firstName,
//             lastName
//         },
//     })
//     res.json(post)
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
// async function insertUser(username: string, password: string, firstName: string, lastName: string){
//     const res = await prisma.user.create({
//         data:{
//             email: username,
//             password,
//             firstName,
//             lastName
//         }
//     })
// }
// insertUser("admin 1", "password", "rookie", "singh");
function insertTodo(title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                description,
                userId: 1
            }
        });
        console.log(res);
    });
}
insertTodo("go gym", "gym at 5pm");
// interface updateParams{
//     firstName: string,
//     lastName: string
// }
// async function updateUser(username: string,{ firstName, lastName }: updateParams){
//     const res = await prisma.user.update({
//         where:{
//             email: username,
//         },
//         data:{
//             firstName: firstName,
//             lastName: lastName
//         },
//     })
//     console.log(res)
// }
// updateUser("harkirat@dev.com", {
//     firstName: "new name",
//     lastName: "new LastName"
// })
// async function getUser(username: string){
//     const res = await prisma.user.findUnique({
//         where:{
//             email: username
//         },
//     })
//     console.log(res);
// }
// getUser("admin 1");
// async function delUser(username: string){
//     const res = await prisma.user.delete({
//         where:{
//             email: username
//         },
//     })
//     // console.log(res);
// }
// delUser("admin 1")
