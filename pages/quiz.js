/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import QuestionWidget from '../components/QuestionWidget';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>Você acertou
        {' '}
         {/* {results.reduce((somatoriaAtual, resultAtual) => {
          const isAcerto = resultAtual === true;
          if (isAcerto) {
            somatoriaAtual += 1;
          }
          return somatoriaAtual;
        }, 0)} */}
        {results.filter((x)=> x).length}
        {' '} 
        perguntas</p>
        <ul>
          {results.map( (result, index) => {
            return (
            <li>
              #{index + 1} Resultado: {result === true ? 'acertou' : 'errou'}
            </li>
          )})}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do loading]
      </Widget.Content>
    </Widget>
  );
}

function Quiz() {
  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };
  // console.log('Questions', db.questions);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const numQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
       result
      ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < numQuestions) {
        setQuestionIndex(questionIndex + 1);
    } else {
        setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          numQuestions={numQuestions}
          onSubmit={handleSubmitQuiz}
          addResult={addResult}
        />
        )}

        { screenState === screenStates.LOADING && <LoadingWidget /> }

        { screenState === screenStates.RESULT && <ResultWidget  results={results}/> }
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DenysMenfredy" />
    </QuizBackground>
  );
}

export default Quiz;
