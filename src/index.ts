import { getDisciplines, getThemes } from "./service/getData";

let result = [];
// buscando os dados dos temas
const themesData = getThemes();
// tratando os dados para serem trabalhados
const themes = themesData.map(t => t._source);

// FAZER
// buscando os dados das turmas
const disciplinesData = getDisciplines();
// FAZER
// tratando os dados das turmas
const disciplines = disciplinesData.map(t => t._source);

// função para busca de temas por nome de dsciplina
getTemasPorDisciplina("Inglês")

// FAZER
// função que busca os dados da disciplina pelo nome e 
// busca os temas dessa disciplina agregando as informações
function getTemasPorDisciplina () {
    // busca disciplina por nome no array de disciplinas
    const disciplina = [];

    // filtra temas pelo id da disciplina encontrada
    const themesFiltrados = [];

    // incluir em cada tema duas novas propriedades que serão 
    // informações da disciplina encontrada
    // {
    //     disciplineName : nome da disciplina,
    //     series : séries da disciplina
    // }


    // colocando o resultado na variavel result
    result = themesFiltrados;
}

// exportando o resultado
export {
    result
}