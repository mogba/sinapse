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

async function insertSinapse(sinapse) {
    const conn = await connect();
    const sql =
        'INSERT INTO SINAPSES (NOME_SINAPSE, NOME_USUARIO) ' +
        'VALUES (?, ?);';
    const values = [sinapse.nome_sinapse, sinapse.nome_usuario]
    return await conn.query(sql, values);
}

async function insertPost(post) {
    const conn = await connect();
    const sql =
        'INSERT INTO POSTS (ID_SINAPSE,TITULO,DESCRICAO,PUBLICO,TOKEN_ACESSO,CARD,VOTOS) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?);';
    const values = [post.id_sinapse, post.titulo, post.descricao, post.publico, post.token_acesso, post.card, post.votos]
    return await conn.query(sql, values);
}

async function deletetPost(post) {
    const conn = await connect();
    const sql =
        `DELETE FROM TB_POST WHERE ID_POST = ?;`
    return await conn.query(sql, [post]);
}


module.exports = { selectAcessos, connect, insertPost, deletetPost, insertSinapse }