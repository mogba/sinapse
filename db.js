async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://jmprob08_alunos:alunos2020@162.241.203.251:3306/jmprob08_alunos_iot");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}




async function selectAcessos(table) {
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM ${table};`);
    return rows;
}

module.exports = { selectAcessos, connect }