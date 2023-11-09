import axios from 'axios'

interface Ingredient {
  label: string
  quantity: number
  unit: string
}

interface TotalNutrients {
  CA: Ingredient
  CHOCDF: Ingredient
  CHOLE: Ingredient
  ENERC_KCAL: Ingredient
  FASAT: Ingredient
  FAT: Ingredient
  FE: Ingredient
  FIBTG: Ingredient
  FOLDFE: Ingredient
  K: Ingredient
  MG: Ingredient
  NA: Ingredient
  NIA: Ingredient
  P: Ingredient
  PRONCT: Ingredient
  RIBF: Ingredient
  THIA: Ingredient
  TOCPHA: Ingredient
  VITA_RAE: Ingredient
  VITB6A: Ingredient
  VITB12: Ingredient
  VITC: Ingredient
  VITD: Ingredient
  VITK1: Ingredient
  ZN: Ingredient
}

export interface FoodElement {
  calories: number
  cautions: any[]
  co2EmissionsClass: string
  dietLabels: string[]
  healthLabels: string[]
  ingredients: []
  totalCO2Emissions: number
  totalDaily: TotalNutrients
  totalNutrients: TotalNutrients
  totalNutrientsKCal: any
  totalWeight: number
  uri: string
}

export const AnalysApi = {
  async AnalyzeFood(food: string[]) {
    const responseData: FoodElement[] = []
    food.forEach(async foodEL => {
      const response = await axios.get<FoodElement>(
        'https://api.edamam.com/api/nutrition-data',
        {
          params: {
            app_id: '',
            app_key: '',
            ingr: foodEL
          }
        }
      )
      responseData.push(response.data)
    })

    return responseData
  }
}
