const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    const rows = await db("recipes as r")
        .leftJoin("steps as st", "st.recipe_id","r.recipe_id")
        .leftJoin("step_ingredients as st_ing", "st.step_number", "st_ing.step_id")
        .where("r.recipe_id", recipe_id)
        .orderBy("st.step_number")
    
    // const stepRow = await db("steps")

    const recipe = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        steps: []
    }

    rows.forEach(row => {
        if(recipe.steps.length !== row.step_number) {

            recipe.steps.push({
                step_instructions: row.instructions,
                step_id: row.step_id,
                step_number: row.step_number,
                ingredients: []
            })       
        }

    })
    
    

    return recipe
}

module.exports = {
    getRecipeById
}