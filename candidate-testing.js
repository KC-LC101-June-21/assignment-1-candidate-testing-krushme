const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
const correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];
let numberArray = ["1) ", "2) ", "3) ", "4) ", "5) "]



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name:");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question); //
 //for (let i = 0; i < questions.length; i++) {
  //  input.question(questions[i])
 // } 

for (let i = 0; i < questions.length; i++){
  candidateAnswers[i] = input.question(numberArray[i]+questions[i]);
       console.log(`Your Answer: ${candidateAnswers.join(',').toLowerCase().split(',')[i]}\nCorrect Answer: ${correctAnswers[i]}.\n`);
   }


  // let i = 0;
  // while (i < questions.length) {
  //   candidateAnswers[i] = input.question(questions[i]);
  //   i++;
  // }


  }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //  if (candidateAnswer === correctAnswer) {
  //   console.log("you have answered the question correctly");
  // } else {
  //   console.log("you have answered the question incorrectly");
  // }


  // for (let i = 0; i < questions.length; i++) { 
  //   console.log(`Your Answer: ${candidateAnswers.join(',').toLowerCase().split(',')[i]}\nCorrect Answer: ${correctAnswers.join(',').toLowerCase().split(',')[i]}.`);
  // }
    let compareGrade = ''
    let candidateScore = 0
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers.join(',').toLowerCase().split(',')[i] === candidateAnswers.join(',').toLowerCase().split(',')[i]) {
        candidateScore++ 
        let compareGrade = 'CORRECT';
        } else {
        let compareGrade = 'INCORRECT';
        }

      
    }

  let grade = (candidateScore/questions.length * 100)

  let candidateStatus = ''
    if (grade < 80) {
      candidateStatus = 'FAILED';
    } else {
      candidateStatus = 'PASSED';
    }
 
   console.log(`>>> Overall Grade: ${grade}% (${candidateScore} of 5 responses correct) <<<\n>>> Status: ${candidateStatus} <<<`);
  return grade;
    }
  

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
 
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};