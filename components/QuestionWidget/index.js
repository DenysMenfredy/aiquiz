/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';

function QuestionWidget({
  question, 
  questionIndex, 
  numQuestions, 
  onSubmit, 
  addResult,
}) {
  const questionId = `question_${questionIndex}`;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer ;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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

        <AlternativesForm 
          onSubmit={(e) => {
          e.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
            onSubmit();
          }, 3 * 1000)
        }}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const AlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && AlternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  type="radio"
                  value={alternative}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* {JSON.stringify(question, null, 4)} */}

          <Button type="submit" disabled={!hasAlternativeSelected}> Confirmar </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>

  );
}

QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuestionWidget;
