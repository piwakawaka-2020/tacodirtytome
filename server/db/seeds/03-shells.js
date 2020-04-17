
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("shells").del()
    .then(function () {
      // Inserts seed entries
      return knex("shells").insert([
        {
          id: 1,
          shell_name: "bad-ass tortillas",
          shell_url: "https://raw.github.com/sinker/tacofancy/master/shells/homemade_tortillas.md",
          shell_recipe: "bad-ass tortillas\n=====================\n\nIf you are making tacos, don't settle for corporate store bought tortillas. Make your own like a real person!\n\nFirst get a cast iron pan:\n\n![](./pan.jpg)\n\nand then one of these bad-ass tortilla presses:\n\n![](./tortillador.jpg)\n\nBuy your lard from a place like this:\n\n![](./store.jpg)\n\n* 2 cups all purpose flour\n* 1/4 cup lard (cut into lil' pieces)\n* 1 teaspoon kosher salt\n* 2/3 tablespoon oil\n* 1/2 cup water (luke warm)\n\nMix all ingredients together except oil and water. Drizzle oil over mixture and mix with hands. Add water and mix and knead again until doughy. Let chill for about an hour in plastic wrappers.\n\nHeat large cast iron skillet (or something more authentic if you've got it) over medium heat. Cut dough into about 12 pieces that are round. Use a proper tortilla press (or something more authentic if you've got it) to make 'em flat and then put on the skillet. Wait until the transparent parts turn opaque and flip em. Put cooked tortillas in a *dirty* cloth napkin to keep 'em warm. End recipe. Paz, amor, y dinero.\n"
        }, {
          id: 2,
          shell_name: "Hard Corn Shells (Traditional; US)",
          shell_url: "https://raw.github.com/sinker/tacofancy/master/shells/hard_corn_traditional_us.md",
          shell_recipe: "Hard Corn Shells (Traditional; US)\n======================\n\nMistakenly thought by many to be traditionally Mexican, hard shells were actually popularized in the US in the mid-20th century.\n\nWhile they can certainly be made at home (if you have access to a deep-fryer), the best method of obtaining hard taco shells is to head to the grocery store.\n\nIf you line them with a lettuce leaf rather than using chopped lettuce, when the shell cracks you won't lose the contents into your lap.\n\ntags: vegetarian\n"
        }, {
          id: 3,
          shell_name: "naan",
          shell_url: "https://raw.github.com/sinker/tacofancy/master/shells/naan.md",
          shell_recipe: "naan\n=====================\n\nNaan bread can be purchased or made. It is easier to buy it at a store. \n\nNaan bread is a flatbread that tends to be fluffy and easy to tear apart. \n"
        }
      ]);
    });
};
