const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];
//  console.log(questions[0]);
      let index = 0;
      let score = 0;
function affiche(){
   let questiontext= document.getElementById('question').innerHTML=questions[index].question;
//    console.log(questiontext);
    
let btnf= document.getElements.ByClassName("btn");
    console.log(answerT);
   
}
function claculscoreV(index,score){
    if(questions[index].answer==true){
        score++;
        index++;
    }else{
        index++;
}}
function claculscoreF(index,score){
    if(questions[index].answer==false){
        score++;
        index++;
    }else{
        index++;
}
return score,index;
affiche();
};
affiche();
claculscoreV();
claculscoreF();