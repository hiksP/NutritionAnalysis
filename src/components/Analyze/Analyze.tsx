import { AnalysApi, FoodElement } from '../../api/AnalysApi'
import { MouseEvent, useEffect, useState } from 'react'
import styles from './Analyze.module.css'

const Analyze = () => {
  const [foodInput, setFoodInput] = useState<string>('')
  const [foodArray, setFoodArray] = useState<string[]>([])
  const [nutrients, setNutrients] = useState<FoodElement[]>([])

  const inputFunction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFoodInput(e.target.value)
    setFoodArray(foodInput.split('\n'))
  }

  const analyzeFood = async (
    e: React.FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const response = await AnalysApi.AnalyzeFood(foodArray)
    setNutrients(response)
  }

  useEffect(() => {
    console.log(nutrients)
  }, [nutrients])

  return (
    <form onSubmit={e => analyzeFood(e)} className={styles.container}>
      <p className={styles.text}>
        Enter an ingredient list list for what you are cooking, like "1 cup
        rice, 10 oz chickpeas", etc. Enter each ingredient on a new line.
      </p>
      <textarea
        className={styles.input}
        onChange={e => {
          inputFunction(e)
        }}
      ></textarea>
      <button onClick={e => analyzeFood(e)} className={styles.button}>
        Analyze
      </button>
    </form>
  )
}

export default Analyze
