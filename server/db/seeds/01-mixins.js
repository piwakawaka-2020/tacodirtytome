exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("mixins").del()
    .then(function () {
      // Inserts seed entries
      return knex("mixins").insert([{
          id: 1,
          mix_name: "Potato Hash",
          mix_url: "https://raw.github.com/sinker/tacofancy/master/mixins/Potato_hash.md",
          mix_recipe: "Potato Hash\n===================\n\n* 6 or so small yukon gold poatoes\n* 4 green onion, chopped\n* 1/2 small can of green chiles\n* olive oil\n* coarse salt\n* 1/4t chili powder\n* dash cumin\n* 1/4t garlic powder\n* Nutrional yeast (optional)\n\n\nPeel and dice potatoes, throw in a pan with a 1/4 or so of water, cover and cook on medium-high until potatoes are soft.\nOnce potatoes are soft, lower to medium heat add green onions, chiles, spices and olive oil. Cook until hash-like. BOOM.\n\ntags: vegetarian, vegan\n"
        },
        {
          id: 2,
          mix_name: "Shredded Brussels Sprouts",
          mix_url: "https://raw.github.com/sinker/tacofancy/master/mixins/brussels.md",
          mix_recipe: "Shredded Brussels Sprouts\n=========================\n\nA surprising, unexpected *and delicious* green addition to your taco!\n\n* brussels sprouts\n* butter\n\n1. Shred up your brussels sprouts so that they're flaked up. You're really going for almost a slaw-level shredding here.\n\n2. Put a healthy amount of butter in a pan, melt it down with a little salt too.\n\n3. Toss the shredded sprouts in, and fry 'em up until parts of them are browned up, and other parts have turned into a bright green. You're going for partial caramelization, but not all the way.\n\nYou're not going to LOAD UP your taco with these, but they bring an amazing, mellow flavor to the mix. Especially good with fish tacos.\n\ntags: vegetarian\n"
        },
        {
          id: 3,
          mix_name: "Mushroom Wasabi Salad",
          mix_url: "https://raw.github.com/sinker/tacofancy/master/mixins/mushroom_wasabi_salad.md",
          mix_recipe: "#Sauted Shitake Mushroom and Wasabi Salad\n\n\n- 1 cup dried shitake mushrooms \n- Splash of soy sauce\n- Splash of red wine vinegar\n- Splash of olive oil\n- Wasabi-covered sesame seeds (available at the local Asian mart. If you can't find it, sub just a smidge of wasabi)\n- Pinch of salt\n\nPlace shitakes in a bowl and cover with warm water. Soak for about 20 minutes or until shitakes are completely rehydrated. Remove mushrooms and squeeze excess water from them. They don't need to be completely dry, but shouldn't be sopping wet.\n\nHeat olive oil over medium-high heat in a small frying pan. Throw in soy sauce and red wine vinegar. How much depends on your taste. I would start with a tablespoon of each and adjust from there. I like the salad to be a bit more acidic so I tend to add a splash more of the red wine vinegar. Sauté mushrooms for a couple of minutes until they are heated through. Season to taste with salt. Adjust soy sauce and red wine vinegar as needed. Before serving, sprinkle a little bit of the wasabi-covered sesame seeds over the mushrooms to impart a little color, crunchiness, and heat. If you are unable to find wasabi-covered sesame seeds, a dab of wasabi and sprinkle of plain sesame seeds should do the trick. \n\nNote: I keep dried shitakes as a staple in my pantry. I love the fact that the water left over after you rehydrate the mushrooms is called mushroom liquor. Mushroom liquor can be used as a substitute for broth or water in many recipes to impart an lovely mushroomy flavor."
        }
      ]);
    });
};