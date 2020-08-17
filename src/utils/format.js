const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    return subjects[+subjectNumber - 1];
}

function convertHoursToMinutes(time){
    const [ hour, minutes ] = time.split(':');
    const value = ((hour * 60) + (minutes * 1))
    return value;
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}