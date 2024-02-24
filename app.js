import express from 'express'
import { getUser, getUsers, createUser } from './dbConnector'



const app = express()

app.get('/', (req, res) => { // эндпоинт для показа главной страницы
    res.send('Dobro Pozalovat v nash Super Servis!!!'); 
})

app.get('/api/users', async (req, res) => { // Эндпоинт для вызова всех пользователей
    const users = await getUsers()
    res.send(notes)
})    



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Chto-to polomalos!')
  })

app.listen(3000, () => {
    console.log('Server rabotaet na portu 3000')
})