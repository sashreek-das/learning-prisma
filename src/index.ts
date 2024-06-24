import { PrismaClient } from '@prisma/client'
import { get } from 'http';
const prisma = new PrismaClient()

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


async function delUser(username: string){
    const res = await prisma.user.delete({
        where:{
            email: username
        },
    })
    // console.log(res);
}

delUser("admin 1")