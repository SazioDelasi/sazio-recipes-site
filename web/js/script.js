async function getFoods() {
    const response = await fetch("http://localhost:3000/food/")
    const data = await response.json()
    return data
}

async function getFood(id) {
    const response = await fetch(`http://localhost:3000/food/${id}/`)
    const data = await response.json()
    return data
}

async function createCards() {
    const data = await getFoods()
    const container = document.getElementById('cards')
    container.innerHTML = ""
    data.map((food, index) => {
        container.innerHTML += `
        <div class="card">
            <img src=${food?.banner} alt=${food?.name}>
            <div class="card-content">
                <h3>${food?.name}</h3>
                <p>${food?.description}</p>
                <a href="recipe.html?id=${index}" class="see-more-btn">See More</a>
            </div>
        </div>
        `
    })
}

async function showRecipe() {
    const query = document.location.search
    const params = new URLSearchParams(query)
    const id = params.get("id")

    const food = await getFood(id)

    document.getElementById('food-name').innerHTML = food.name
    document.getElementById('food-banner').style.backgroundImage = `url(${food.banner})`

    document.getElementById('ingredient-list').innerHTML = ""
    food.ingredients.map((ingredient) => {
        document.getElementById('ingredient-list').innerHTML += `
            <li>${ingredient}</li>
        `
    })
    document.getElementById('steps-list').innerHTML = ""
    food.steps.map((step) => {
        document.getElementById('steps-list').innerHTML += `
            <li>${step}</li>
        `
    })
}
