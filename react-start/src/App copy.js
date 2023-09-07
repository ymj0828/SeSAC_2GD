import "./App.css";
import logo from "./logo.svg";
import './styles/style1.scss'
import styled, { keyframes } from "styled-components";
// import PracticeBasicCss from './components/practice/PracticeBasicCss'

function App() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
  }
  `;
  const RootDiv = styled.div`
    text-align: center;
  `;

  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
  `;

  const MyA = styled.a`
    color: #61dafb;
  `;

  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
      <h1>안녕</h1>
    </RootDiv>
  );
}
export default App;
