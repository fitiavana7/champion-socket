
export const listsQuestions: QuestionType[] = [
    {
        id: 1,
        question: "Qui était le premier président des États-Unis ?",
        reponse: 1,
        lists: [
            { id: 1, text: "George Washington" },
            { id: 2, text: "Abraham Lincoln" },
            { id: 3, text: "Thomas Jefferson" },
            { id: 4, text: "John F. Kennedy" },
        ]
    },
    {
        id: 2,
        question: "Qu'est-ce que \"Python\" en informatique ?",
        reponse: 3,
        lists: [
            { id: 1, text: "serpent" },
            { id: 2, text: "réseau social" },
            { id: 3, text: "langage de programmation" },
            { id: 4, text: "instrument de musique" },
        ]
    },
    {
        id: 3,
        question: "Quel est le symbole chimique de l'eau ?",
        reponse: 4,
        lists: [
            { id: 1, text: "CO2" },
            { id: 2, text: "C6H12O6" },
            { id: 3, text: "He" },
            { id: 4, text: "H2O" },
        ]
    },
    {
        id: 4,
        question: "Quelle est la capitale de la France ?",
        reponse: 2,
        lists: [
            { id: 1, text: "Londres" },
            { id: 2, text: "Paris" },
            { id: 3, text: "Berlin" },
            { id: 4, text: "Antananarivo" },
        ]
    },
    {
        id: 5,
        question: "Qui a peint la Joconde ?",
        reponse: 1,
        lists: [
            { id: 1, text: "Leonardo da Vinci" },
            { id: 2, text: "Pablo Picasso" },
            { id: 3, text: "Emmanuel Macron" },
            { id: 4, text: "Claude Monet" },
        ]
    },
    {
        id: 6,
        question: "Quel est le plus grand océan du monde ?",
        reponse: 4,
        lists: [
            { id: 1, text: "Océan Atlantique" },
            { id: 2, text: "Océan Indien" },
            { id: 3, text: "Océan Arctique" },
            { id: 4, text: "Océan Pacifique" },
        ]
    },
    {
        id: 7,
        question: "Quel est le plus haut sommet du monde ?",
        reponse: 2,
        lists: [
            { id: 1, text: "K2" },
            { id: 2, text: "Mont Everest" },
            { id: 3, text: "Mont Kilimandjaro" },
            { id: 4, text: "Mont McKinley" },
        ]
    },
    {
        id: 8,
        question: "Quelle est la monnaie officielle du Japon ?",
        reponse: 1,
        lists: [
            { id: 1, text: "Yen" },
            { id: 2, text: "Euro" },
            { id: 3, text: "Dollar" },
            { id: 4, text: "Rouble" },
        ]
    },
    {
        id: 9,
        question: "Quel est le plus grand désert du monde ?",
        reponse: 4,
        lists: [
            { id: 1, text: "Désert de Gobi" },
            { id: 2, text: "Désert de Kalahari" },
            { id: 3, text: "Désert d'Arabie" },
            { id: 4, text: "Désert du Sahara" },
        ]
    },
    {
        id: 10,
        question: "Qui a découvert la gravité ?",
        reponse: 3,
        lists: [
            { id: 1, text: "Albert Einstein" },
            { id: 2, text: "Galilée" },
            { id: 3, text: "Isaac Newton" },
            { id: 4, text: "Stephen Hawking" },
        ]
    },
    {
        id: 11,
        question: "Quelle est la langue la plus parlée dans le monde ?",
        reponse: 1,
        lists: [
            { id: 1, text: "Mandarin" },
            { id: 2, text: "Anglais" },
            { id: 3, text: "Espagnol" },
            { id: 4, text: "Malgache" },
        ]
    },
    {
        id: 12,
        question: "Quel est l'animal emblème des Jeux olympiques d'hiver ?",
        reponse: 4,
        lists: [
            { id: 1, text: "Lion" },
            { id: 2, text: "Aigle" },
            { id: 3, text: "Tortue" },
            { id: 4, text: "Ours" },
        ]
    },
    {
        id: 13,
        question: "Quel est le plus grand mammifère terrestre ?",
        reponse: 1,
        lists: [
            { id: 1, text: "Girafe" },
            { id: 2, text: "Éléphant" },
            { id: 3, text: "Rhinocéros" },
            { id: 4, text: "Hippopotame" },
        ]
    },
    {
        id: 14,
        question: "Quelle est la planète la plus proche du soleil ?",
        reponse: 2,
        lists: [
            { id: 1, text: "Vénus" },
            { id: 2, text: "Mercure" },
            { id: 3, text: "Terre" },
            { id: 4, text: "Mars" },
        ]
    },
    {
        id: 15,
        question: "Qui a fondé Microsoft ?",
        reponse: 3,
        lists: [
            { id: 1, text: "Steve Jobs" },
            { id: 2, text: "Jeff Bezos" },
            { id: 3, text: "Bill Gates" },
            { id: 4, text: "Mark Zuckerberg" },
        ]
    },
    {
        id: 16,
        question: "Quel est l'élément le plus abondant dans l'univers ?",
        reponse: 2,
        lists: [
            { id: 1, text: "Oxygène" },
            { id: 2, text: "Hydrogène" },
            { id: 3, text: "Hélium" },
            { id: 4, text: "Carbone" },
        ]
    },
];


export interface UserType{
    id : number ,
    username : string ,
    score : number ,
    type : string
}
export interface QuestionType {
    id : number ,
    question : string ,
    lists : {id :number , text : string}[],
    reponse : number
}