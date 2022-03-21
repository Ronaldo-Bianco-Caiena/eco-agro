
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import UploadContainer from './components/Upload'
import GlobalStyle from './styles/global'
import { Container } from 'react-bootstrap';
import { Separator } from './styles/styles'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Container className='align-baseline my-5'>
          <h1>Upload de Arquivo</h1>
          <Separator></Separator>
          <UploadContainer />
        </Container>
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
