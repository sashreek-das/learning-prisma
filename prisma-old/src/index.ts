import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import express from 'express'
const app = express()

const port = 4000

app.post('/post', async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    const post = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        },
    })
    res.json(post)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
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


// async function delUser(username: string){
//     const res = await prisma.user.delete({
//         where:{
//             email: username
//         },
//     })
//     // console.log(res);
// }

// delUser("admin 1")