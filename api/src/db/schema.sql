-- ========================
-- TABLES
-- ========================

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    banner VARCHAR(255),
    description TEXT,
    view_count INT DEFAULT 0,
    search_count INT DEFAULT 0
):

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient TEXT NOT NULL
)

CREATE TABLE steps (
    id SERIAL PRIMARY KEY,
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    step_number INT NOT NULL,
    instruction TEXT NOT NULL
);

-- ========================
-- RECIPES + INGREDIENTS + STEPS
-- ========================

-- 1. Rice Porridge
INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Rice Porridge', './../assets/rice-porridge.png', 'Breakfast...', 0, 0) RETURNING id;

-- Suppose returned id = 1
INSERT INTO ingredients (recipe_id, ingredient) VALUES
(1, '1 cup rice (preferably broken rice or jasmine rice)'),
(1, '4 cups water'),
(1, '1/2 teaspoon salt'),
(1, 'Sugar to taste'),
(1, 'Milk (condensed milk or evaporated milk, as preferred)'),
(1, 'Nutmeg or cinnamon (optional, for flavor)');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(1, 1, 'Rinse the rice under cold water until the water runs clear.'),
(1, 2, 'In a large pot, bring the water to a boil over medium-high heat.'),
(1, 3, 'Add the rinsed rice and stir to prevent sticking. Reduce the heat to low, cover the pot, and let it simmer gently.'),
(1, 4, 'Cook the rice for 30-45 minutes, stirring occasionally to prevent it from sticking to the pot and burning.'),
(1, 5, 'Add salt to taste and continue stirring until smooth. Add water if needed to adjust thickness.'),
(1, 6, 'Once ready, serve hot in bowls.'),
(1, 7, 'Add sugar and milk to taste. Optionally sprinkle nutmeg or cinnamon.'),
(1, 8, 'Enjoy your Ghanaian rice porridge!');

-- 2. Banku & Okro Stew
INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Banku & Okro Stew', './../assets/banku.png', 'Breakfast...', 0, 0) RETURNING id;

-- Suppose returned id = 2
INSERT INTO ingredients (recipe_id, ingredient) VALUES
(2, '2 cups corn dough'),
(2, '1 cup cassava dough'),
(2, 'Water'),
(2, '2 cups fresh okro (sliced)'),
(2, '1 cup tomato sauce or diced tomatoes'),
(2, '1 large onion (chopped)'),
(2, '1/2 cup palm oil'),
(2, '1-2 chili peppers (optional)'),
(2, '1/2 cup smoked fish or dried shrimp (optional)'),
(2, 'Salt to taste');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(2, 1, 'Mix corn dough and cassava dough with water to create a smooth paste.'),
(2, 2, 'Place pot on medium heat and stir continuously with a spatula.'),
(2, 3, 'Cook until thick and dough-like (15-20 mins). Shape into portions.'),
(2, 4, 'Separately, heat palm oil and sauté onions.'),
(2, 5, 'Add tomato sauce, cook 5-10 minutes until thick.'),
(2, 6, 'Add okro, stir depending on thickness preference.'),
(2, 7, 'Add chili peppers, smoked fish/shrimp if using. Cook 10-15 minutes.'),
(2, 8, 'Season with salt and serve hot with banku.');

-- 3. Hausa Koko
INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Hausa Koko', './../assets/koko.png', 'Breakfast...', 0, 0) RETURNING id;

-- Suppose returned id = 3
INSERT INTO ingredients (recipe_id, ingredient) VALUES
(3, '1 cup millet flour'),
(3, '4 cups water (divided)'),
(3, '1-2 teaspoons dried ginger powder'),
(3, '1/2 teaspoon grains of paradise (optional)'),
(3, 'Sugar to taste');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(3, 1, 'Mix millet flour with 1 cup water to form slurry.'),
(3, 2, 'Bring 3 cups water to boil.'),
(3, 3, 'Gradually add slurry while stirring.'),
(3, 4, 'Cook 10-15 minutes until smooth.'),
(3, 5, 'Add ginger and grains of paradise, stir well.'),
(3, 6, 'Serve hot, sweetened with sugar. Traditionally eaten with koose or bread.');

-- 4. Ga Kenkey & Pepper
INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Ga Kenkey & Pepper', './../assets/kenkey.png', 'Breakfast...', 0, 0) RETURNING id;

INSERT INTO ingredients (recipe_id, ingredient) VALUES
(4, '4 cups corn dough'),
(4, '1 cup cassava dough (optional)'),
(4, 'Corn husks or banana leaves'),
(4, 'Water'),
(4, '2-3 large tomatoes'),
(4, '2 large onions'),
(4, '3-4 chili peppers'),
(4, 'Salt to taste');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(4, 1, 'Mix dough with water to create a smooth paste.'),
(4, 2, 'Shape into balls and wrap in husks/leaves.'),
(4, 3, 'Boil 1.5-2 hours, adding water as needed.'),
(4, 4, 'Blend tomatoes, onions, chili for sauce.'),
(4, 5, 'Simmer sauce 10-15 minutes, add salt.'),
(4, 6, 'Serve sauce with hot kenkey.');

INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Jollof Rice', './../assets/jollof.png', 'Breakfast...', 0, 0) RETURNING id;

INSERT INTO ingredients (recipe_id, ingredient) VALUES
(5, '2 cups long-grain rice'),
(5, '1 onion (chopped)'),
(5, '2-3 garlic cloves (minced)'),
(5, '1-2 inches ginger (grated)'),
(5, '1-2 bell peppers (optional)'),
(5, '1 cup tomato paste'),
(5, '2-3 large tomatoes'),
(5, '1-2 teaspoons paprika or cayenne'),
(5, '2-3 cups broth'),
(5, '1/4 cup oil'),
(5, 'Salt to taste'),
(5, 'Protein of choice');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(5, 1, 'Heat oil, sauté onions until golden.'),
(5, 2, 'Add garlic, ginger, sauté 1 min.'),
(5, 3, 'Stir in tomato paste, cook 5-10 mins.'),
(5, 4, 'Add fresh tomatoes, cook 10 mins.'),
(5, 5, 'Add peppers and spices.'),
(5, 6, 'Stir in rice, coat well.'),
(5, 7, 'Add broth, simmer 30-40 mins.'),
(5, 8, 'Check occasionally, add liquid if needed.'),
(5, 9, 'Season, serve with protein.');

INSERT INTO recipes (name, banner, description, view_count, search_count)
VALUES ('Waakye', './../assets/waakye.png', 'Breakfast...', 0, 0) RETURNING id;

INSERT INTO ingredients (recipe_id, ingredient) VALUES
(6, '2 cups dried black-eyed beans'),
(6, '2 cups long-grain rice'),
(6, '3-4 waakye leaves'),
(6, '1 tsp baking soda (optional)'),
(6, '6-8 cups water'),
(6, 'Salt to taste');

INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(6, 1, 'Rinse beans, place in pot with water and waakye leaves.'),
(6, 2, 'Boil 30-45 minutes until tender.'),
(6, 3, 'Remove leaves, add rinsed rice.'),
(6, 4, 'Add more water to cover, season with salt.'),
(6, 5, 'Simmer 20-30 minutes until rice cooked.'),
(6, 6, 'Fluff and serve with accompaniments like plantain, spaghetti, eggs, stew.');
