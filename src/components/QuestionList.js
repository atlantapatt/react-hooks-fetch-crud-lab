import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, page}) {

 useEffect(() => {
  fetch('http://localhost:4000/questions')
     .then((resp) => resp.json())
     .then((questions) => setQuestions(questions))
     return function cleanup() {
       console.log("finished")
     }
 }, [page]) 

 function handleDeleteQuestion(deletedItem) {
  const updateQuestions = questions.filter((q) => q.id !== deletedItem.id)
  setQuestions(updateQuestions)
}

 const showQuestions = questions.map((question) => {
   return <QuestionItem key={question.id} question={question} onDeleteItem={handleDeleteQuestion} />
 })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{showQuestions}</ul>
    </section>
  );
}

export default QuestionList;
