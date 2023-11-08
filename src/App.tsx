import style from './App.module.css'
import Analyze from './components/Analyze/Analyze'
import Facts from './components/Facts/Facts'
import FoodTypes from './components/FoodTypes/FoodTypes'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <>
      <div className={style.default}>
        <Header></Header>
        <main className={style.main}>
          <div className={style.container}>
            <Menu></Menu>
            <div className={style.food}>
              <FoodTypes></FoodTypes>
              <Analyze></Analyze>
            </div>
            <Facts></Facts>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
