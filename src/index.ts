import { getDisciplines, getThemes } from "./service/getData";

let result = [];

//! buscando os dados dos temas
const themesData = getThemes();

//! tratando os dados para serem trabalhados
const themes = themesData.map(t => t._source);


//! FAZER
//! buscando os dados das turmas
const disciplinesData = getDisciplines();

//! FAZER
//! tratando os dados das turmas
const disciplines = disciplinesData.map(t => t._source);

//! função para busca de temas por nome de dsciplina
getTemasPorDisciplina("Inglês")

//! FAZER
//! função que busca os dados da disciplina pelo nome e 
//! busca os temas dessa disciplina agregando as informações
function getTemasPorDisciplina (disName) {
    // busca disciplina por nome no array de disciplinas
    const disciplina = [];
    function disciNome(){
        for(let i = 0; i < disciplines.length; i++){
            if(disName == disciplines[i].name){
                disciplina.push(disciplines[i])
                
            } 
        }
    }
    disciNome()


    
    // filtra temas pelo id da disciplina encontrada
    const themesFiltrados = [];

    function filtratema (){
        for(let i = 0; i < themes.length; i++){
            if(disciplina[0].id == themes[i].idDiscipline){
                themesFiltrados.push(themes[i])
            }
        }
    }
    filtratema()
    


    //! incluir em cada tema duas novas propriedades que serão 
    //! informações da disciplina encontrada
    //! {
    //!     disciplineName : nome da disciplina,
    //!     series : séries da disciplina
    //! }
    for(let i = 0; i < themesFiltrados.length; i++){
        themesFiltrados[i].disciplineName = disciplina[0].name
        themesFiltrados[i].series = disciplina[0].series.map(t => t.idSerie)
    }

    //! colocando o resultado na variavel result
    result = themesFiltrados;
    console.log(themesFiltrados);
    
}

//! exportando o resultado
export {
    result
}


