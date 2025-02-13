import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'


function App() {

  return (
    <>
        <Home 
          titulo={'Seja Bem vindo'} 
          texto={'Aqui é a a página inicial'} 
        />
        <Login />
        <Tarefa />
        <Contador />

    </>
  )
}

export default App
