import styled from 'styled-components'
import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import Head from 'next/head';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>AI QUIZ</title>
      <meta property="og:title" content="AI QUIZ" key="title" />
      <meta property="og:image" content={db.bg} />
    </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Inteligência Artificial</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem Ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DenysMenfredy" />
    </QuizBackground>
  ) 
}
