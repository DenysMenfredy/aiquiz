/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import Input from '../components/Input';
import Button from '../components/Button';
import QuizContainer from '../components/QuizContainer';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

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
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Inteligência Artificial</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleUser}>
              <Input
                name="nomeDoUsuario"
                placeholder="Informe seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>Jogar</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DenysMenfredy" />
    </QuizBackground>
  );
}
