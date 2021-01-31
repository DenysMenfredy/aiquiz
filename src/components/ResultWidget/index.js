import React from 'react';
import Widget from '../Widget';
import { useRouter } from 'next/router';

export default function ResultWidget({ results }) {
    const router = useRouter();
    const { nome } = router.query;
    const acertos = results.filter((x) => x).length;
    return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              somatoriaAtual += 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {acertos}
          {' '}
          perguntas
        </p>
        <p>{acertos > 2 ? `Parábens, ${nome}!!` : `Tente novamente, ${nome}...`}</p>
        <ul>
          {results.map((result, index) => (
            <li>
              # Pergunta
              {' '}
              {index + 1}
              {' '}
              ->
              {' '}
              {result === true ? 'acertou' : 'errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
