import express from 'express'
import { getUser, getUsers, createUser } from './dbConnector.js'

# A new line
Another line of code

const app = express()

app.use(express.json()) // Парсинг json из тела запроса POST

app.get('/', (req, res) => { // эндпоинт для показа главной страницы
    res.send('Dobro Pozalovat v nash Super Servis!!!'); 
})

app.get('/api/users', async (req, res) => { // Эндпоинт для вызова всех пользователей
    const users = await getUsers()
    res.send(users)
   // res.send("tut spisok userov")
})    

app.get('/api/users/:id', async (req, res) => { // Эндпоинт для вызова конкретного пользователя
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
   // res.send("tut spisok userov")
})  

app.post("/api/createUser" , async(req, res) => {
    const { user, passwordd} = req.body
    const userR = await createUser(user, passwordd )
    res.status(201).send(userR)
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Chto-to polomalos!')
  })

app.listen(3000, () => {
    console.log('Server rabotaet na portu 3000')
})
