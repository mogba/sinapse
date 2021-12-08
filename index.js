//index.js
(async() => {
    const db = require("./db");
    console.log('Começou!');

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectAcessos();
    console.log(clientes);
})();