export class Theme {

  id: string;
  name: string;
  tags: string[];
  idDiscipline: string;
  deletionDate: string;

  constructor(idDiscipline: string, name: string, tags: string[]) {
    this.idDiscipline = idDiscipline;
    this.name = name;
    this.tags = tags;
  }

}
