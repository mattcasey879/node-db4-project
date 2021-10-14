const db = require("../../data/db-config")

 const getRecipeById = async (recipe_id) => {
    const rows = await db('recipes as r')
    .leftJoin("steps as st", "r.recipe_id", "st.recipe_id")
    .leftJoin("step_ingredients as si", "st.step_id", "si.step_id")
    .leftJoin("ingredients as ing", "si.ing_id", "ing.ingredient_id")
    .select("r.*", "st.step_id", "st.step_instructions", "st.step_number", "quanity", "ing.*")
    .where("r.recipe_id", recipe_id)
    .orderBy("r.recipe_id")
    


    // {
    //     "recipe_id" : 1,
    //     "recipe_name": "Spaghetti Bolognese",
    //     "created_at": "2021-01-01 08:23:19.120",
    //     "steps": [
    //       {
    //         "step_id": 11,
    //         "step_number": 1,
    //         "step_instructions": "Put a large saucepan on a medium heat",
    //         "ingredients": []
    //       },
    //       {
    //         "step_id": 12,
    //         "step_number": 2,
    //         "step_instructions": "Add 1 tbsp olive oil",
    //         "ingredients": [
    //           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
    //         ]
    //       },
    //     ]
    //   }




    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: rows.map(row => 
            ({ step_id: row.step_id, step_number: row.step_number, 
               step_instructions: row.step_instructions,
               ingredients: !row.ingredient_id ? [] : { ingredient_id: row.ingredient_id, ingredient_name: row.ingredient_name, quanity: row.quanity}
            }))
    }
    
    
    console.log(result)
    return result

}


module.exports = { getRecipeById }