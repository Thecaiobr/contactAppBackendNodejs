const mongoose = require("mongoose");

 // Função assíncrona para conectar ao banco de dados
const connectDb = async () => {
    try {
        // Tenta conectar ao banco de dados usando a string de conexão armazenada nas variáveis de ambiente
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        // Se a conexão for bem-sucedida, exibe uma mensagem no console com o host e o nome do banco de dados
        console.log("Database connected", connect.connection.host, connect.connection.name)
    } catch (error) {
        // Se ocorrer um erro durante a conexão, exibe o erro no console
        console.log(error);
        // Encerra o processo com um código de saída 1, indicando que houve uma falha
        process.exit(1);
    }
};

module.exports = connectDb;