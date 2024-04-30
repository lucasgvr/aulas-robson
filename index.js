(async () => {
    const database = require('./db');
    const user = require('./user');

    await database.sync();


    await user.create(
        {
            Nome: "Primeiro Teste",
            Email: "lucas.voriarocha@gmail.com",
            Senha: "123"
        }
    )
    await user.create(
        {
            Nome: "Segundo Teste",
            Email: "lucasgvr@edu.unifil.br",
            Senha: "1234"
        }
    )
    await user.create(
        {
            Nome: "Teceiro Teste",
            Email: "lucas@gmail.com",
            Senha: "1235"
        }
    )

    const alterProd = await user.findByPk(2);
    alterProd.Nome = "Arquivo 2 Alterado";
    await alterProd.save();

    user.destroy({ where: { id: 1 } });

    const findProd = await user.findByPk(3);
    console.log(findProd);

    const findAllProd = await user.findAll();
    console.log(findAllProd);

})();

const addUser = async (nome, email, senha) => {
    const database = require('./db');
    const user = require('./user');

    await database.sync();

    await user.create(
        {
            Nome: nome,
            Email: email,
            Senha: senha
        }
    )
}



$("#signup").on("click", function() {
const nome = $('#name').val();
const email = $('#email').val();
const senha = $('#password').val();

addUser(nome, email ,senha)
})

module.exports = addUser