import style from './App.module.css'
import FoodTypes from './components/FoodTyps/FoodTypes'
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
            <FoodTypes></FoodTypes>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
