
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("base_layers").del()
    .then(function () {
      // Inserts seed entries
      return knex("base_layers").insert([
        {
          id: 1,
          base_name: "Soyrizo",
          base_url: "https://raw.github.com/sinker/tacofancy/master/base_layers/soyrizo.md",
          base_recipe: "Soyrizo\n=======\n\n* Soyrizo (The El Burrito branded SoyRizo is by far the best vegan option out there)\n* chopped potatoes\n* green peppers\n\nThrow some Soyrizo in a sauce pan with chopped potatoes and green peppers and brown for added bonus.\n\ntags: vegetarian, vegan\n"
        }, {
          id: 2,
          base_name: "Garlic Black Beans",
          base_url: "https://raw.github.com/sinker/tacofancy/master/base_layers/garlic_black_beans.md",
          base_recipe: "Garlic Black Beans\n==================\n\nVegetarian/Vegan\n----------------\n\n* Can of plain black beans\n* 3 - 6 cloves of garlic chopped fine\n* Vegetable oil of your choice\n* Cumin\n* Cayenne or Chipotle pepper (optional)\n* Lemon juice (optional)\n\n1. Heat a tablespoon of olive oil in a saucepan over medium heat. \n2. When olive oil starts to shimmer, add the garlic and let it simmer for about 10 seconds.\n3. Add cumin and pepper (if wanted) and simmer for another 10 seconds.\n4. Pour in the entire can of beans, don't drain or rinse them.\n5. Simmer for about 15 minutes or until the bean broth has thickened to your liking. If the beans will be the main ingredient of your tacos, cook until the beans are just about totally dry. If you're using them in a mixture (like the [Black Bean, Potato, and Onion Tacos](/full_tacos/black_bean_potato_onion_tacos.md) ), let the broth stay a little bit runny.\n6. Add a squeeze or two of lemon juice if you like. \n\ntags: vegetarian, vegan\n"
        }, {
          id: 3,
          base_name: "Moroccan Lamb",
          base_url: "https://raw.github.com/sinker/tacofancy/master/base_layers/morrocoan_lamb.md",
          base_recipe: "Moroccan Lamb\n=============\n\nA Differently Spiced Meat Than Your Usual Taco\n----------------------------------------------\n\n* 500 g ground lamb\n* 20 g Ras al Hanout spice. My mix contains:\n    * Paprika\n    * Cinnamon\n    * Allspice\n    * Clove\n    * Toasted Mustard\n    * Cumin\n    * Caraway\n    * Black Pepper\n* 10 g fresh lemon zest or 10 g finely ground Black Lemon Omani (Moroccoan dried preserved lemon)\n\nMix together and brown.\n"
        }
      ]);
    });
};
