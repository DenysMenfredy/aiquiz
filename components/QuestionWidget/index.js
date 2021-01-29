/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Button from '../Button';

function QuestionWidget({ question, questionIndex, numQuestions, onSubmit }) {
  const questionId = `question_${questionIndex}`;

  // function handleResposta(e) {
  //   e.preventDefault();
  // }

  return (

    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${numQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt={question.description}
        style={{
          width: '100%', height: '150px', objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative_${index}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
              >
                <label
                  htmlFor={alternativeId}
                >
                  {alternative}
                </label>
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  value={alternative}
                  name={questionId}
                />
              </Widget.Topic>
            );
          })}

          {/* {JSON.stringify(question, null, 4)} */}

          <Button type="submit"> Confirmar </Button>
        </form>
      </Widget.Content>
    </Widget>

  );
}

QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
};

export default QuestionWidget;
