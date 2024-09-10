const mysql = require('mysql2/promise')
const config = require('../config/config')

async function connection() {
    try{
        const pool = await mysql.createPool(config.db)
        const conn = await pool.getConnection()
        return conn
    }catch{(err) => {
        console.log(err)
        pool.releaseConnection(conn);
        return
    }
    }
}

module.exports = {
    connection
}