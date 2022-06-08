import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleQuestions() {
    setQuestions(questions)
  }



  function addNewQuestion(question) {
    setQuestions([...questions, question])
  }
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addNewQuestion} setPage={setPage} /> : <QuestionList questions={questions} getQuestions={handleQuestions} page={page} setQuestions={setQuestions} />}
    </main>
  );
}

export default App;
