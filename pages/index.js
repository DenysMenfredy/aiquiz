import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import { useRouter } from 'next/router';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');


  function handleUser(e) {
    e.preventDefault();
    console.log(name);
    
    router.push(`/quiz?nome=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Inteligência Artificial</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleUser}>
              <input placeholder="Informe seu nome" onChange={e => setName(e.target.value)} />
              <button type="submit" disabled={name.length === 0}>Jogar</button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DenysMenfredy" />
    </QuizBackground>
  );
}
