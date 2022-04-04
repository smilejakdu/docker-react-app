import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          소스코드 고치면 바뀌는지 테스트해본다.
        </a>
      </header>
    </div>
  )
}

export default App
