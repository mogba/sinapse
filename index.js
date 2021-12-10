//index.js
(async() => {
    const db = require("./db");
    console.log('Começou!');

    console.log('Teste insert SINAPSE');
    const resultInsertSinapse =
        await db.insertSinapse({
            nome_sinapse: "TestePuehler",
            nome_usuario: "phlr"
        });
    console.log(resultInsertSinapse);

    console.log('Teste insert post');
    const resultInsert =
        await db.insertPost({
            id_sinapse: 1,
            titulo: "Post de teste",
            descricao: "Aqui temos uma descrição de teste",
            publico: 1,
            token_acesso: "",
            card: "",
            votos: 0
        });
    console.log(resultInsert);

    console.log('SELECT * FROM POSTS');
    const posts = await db.selectAcessos("POSTS");
    console.log(posts);

    console.log('SELECT * FROM SINAPSE');
    const sinpase = await db.selectAcessos("SINAPSES");
    console.log(sinpase);
})();