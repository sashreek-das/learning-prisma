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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function delUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                email: username
            },
        });
        // console.log(res);
    });
}
delUser("admin 1");
