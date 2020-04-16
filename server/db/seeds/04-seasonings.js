
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("seasonings").del()
    .then(function () {
      // Inserts seed entries
      return knex("seasonings").insert([
        {
          id: 1,
          sea_name: "Packaged Seasonings",
          sea_url: "https://raw.github.com/sinker/tacofancy/master/seasonings/packaged_seasonings.md",
          sea_recipe: "Packaged Seasonings\n==============\n\nLest we be accused of snobbery, let's acknowledge that a taco is a taco, and taco night can be well-served by not having to think at all.\n\nFeel free to use the pre-packaged seasoning of your choice. When I'm in an old-school mood, I head straight for...\n\n* Old El Paso Taco Seasoning\n\ntags: vegetarian, vegan\n"
        }, {
          id: 2,
          sea_name: "Universal Taco Seasoning",
          sea_url: "https://raw.github.com/sinker/tacofancy/master/seasonings/universal_taco_seasoning.md",
          sea_recipe: "Universal Taco Seasoning\n========================\n\nI got tired of buying packets of store-bought taco seasoning, so I experimented with various spices and ratios until I landed on this recipe. I keep a jar of it in the cupboard at all times.\n\n* 6 tbsp chili powder\n* 4 tbsp cumin\n* 4 tbsp corn starch\n* 3 tbsp onion powder\n* 1 tbsp salt\n* 1 tbsp garlic powder\n* 4 tsp oregano (Mexican oregano, if you've got it)\n* 2 tsp crushed red pepper\n\nCombine in Mason jar and shake well to combine.\n\nThis mix works well for chicken, pork and beef, destined for the grill, oven, slow cooker or stovetop. You could tweak it a bit to target a specific meat, but I like to have a base, universal mix around. Makes it super easy to turn leftover anything into delicious taco filling: Just chop up whatever it is, toss it into a skillet, sprinkle generously with seasoning, then add a bit of water and simmer to impart flavor.\n\ntags: vegetarian, vegan\n"
        }, {
          id: 3,
          sea_name: "Homemade Sriracha",
          sea_url: "https://raw.github.com/sinker/tacofancy/master/seasonings/homemade_sriracha.md",
          sea_recipe: "## Homemade Sriracha\n\nSure, Huy Fong's “rooster” brand sriracha is great, but wouldn't be nice to make your own? Now you can.\n\nA few tips before starting:\n\n* Don't be a cowboy (or cowgirl)-use gloves. You are going to be handling a lot of peppers and the last thing you want to do is touch your eye or a more _sensitive_ body part.\n* Have good ventilation. Especially on the day you bring your chilis to a boil.\n\n\n### Ingredients\n\n* 1 pound red jalepeño pepper, stemmed, seeded and halved.\n* ½ pound red serrano  pepper, stemmed, seeded and halved.\n* ¼ pound red thai chiles, stemmed, and halved.\n* 6 cloves garlic, peeled.\n* 1 tablespoon kosher salt.\n* 4 tablespoons palm sugar (light brown sugar can be substituted, see notes).\n* ½ cup cane vinegar (or rice wine vinegar, [see notes](https://github.com/sinker/tacofancy/blob/master/seasonings/homemade_sriracha.md#notes)).\n\n### Directions\n\n1. Combine chilis, garlic, salt and sugar in food processor. Pulse to a coarse pureé.\n2. Transfer pureé to glass container. Store at room temperature for one week, stirring daily (see notes).\n3. After one week, transfer pureé to small saucepan, add vinegar and bring to boil.\n4. Reduce heat and simmer for five minutes. Allow to cool to room temperature.\n5. Transfer pureé to food processor and process for two to three minutes.\n6. Strain pureé through fine mesh strainer, using back of spoon or rubber spatula to press solids through strainer.\n7. Transfer finished sauce to glass jars and refrigerate. Can be stored for up to 6 months.\n\n### Notes\n\n* Any combination of red chile peppers will make a fine sriracha. Note thai chilis and serrano are hotter than jalepeños, so experiment with different combinations and find one that works for your taste.\n* If you can't find palm sugar (usually found in most Asian markets) light brown sugar can be substituted. Light brown sugar is slightly sweeter so you may want to start with three tablespoons and adjust after tasting before step 3.\n* Likewise, if you cannot find cane vinegar, rice wine vinegar can be substituted. Seasoned rice wine vinegar, commonly used in preparing sushi rice often has been sweetened, so keep that in mind if adjusting sweetener.\n* Some recipes have suggested the pureé can be thick after the seven day fermentation and water can be used to thin the mixture when processing after the boiling/simmering stage.\n* Finally, and **most importantly** be sure to santize the glass jars/containers you use to ferment and store your sriracha. Just ask your favorite homebrewer what can happen if you do not properly sanitize your glass container before storing foodstuffs in them.\n\ntags: vegetarian, vegan\n"
        }
      ]);
    });
};
