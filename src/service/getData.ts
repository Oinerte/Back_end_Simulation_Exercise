import themes from '../data/themes.json';
import disciplines from '../data/disciplines.json';

export function getThemes() {
    return themes.flat();
}

export function getDisciplines() {
    return disciplines.flat();
}