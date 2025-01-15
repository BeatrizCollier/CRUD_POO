// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()


alunos.adicionarAluno('Fernanda', 'fernanda@email.com', '84998984545', '123412', 'enfermagem');
alunos.listarAluno();