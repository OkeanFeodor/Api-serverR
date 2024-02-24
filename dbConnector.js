import mysql from 'mysql2'
/*
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'users_app'
}).promise()
*/

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()
//--------------------------------------------------------

export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
    //console.log(rows)

}

export async function getUser(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM users
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createUser(user, passwordd) {
   const [result] = await pool.query(`
    INSERT INTO users (user, passwordd)
    VALUES (?, ?)
    `, [user, passwordd])
    //return result.insertId
    const id = result.insertId
    return getUser(id) 
}

//##############################################

const result = await createUser('admin6', 'admin')
console.log(result)

/*

const user = await getUser(2)
console.log(user)
*/


/*
const users = await getUsers()
console.log(users)

*/