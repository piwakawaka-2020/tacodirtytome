
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("condiments").del()
    .then(function () {
      // Inserts seed entries
      return knex("condiments").insert([
        {
          id: 1,
          con_name: "Roasted Tomatillo and Mushroom Sauce",
          con_url: "https://raw.github.com/sinker/tacofancy/master/condiments/roasted_tomatillo.md",
          con_recipe: "Roasted Tomatillo and Mushroom Sauce\n====================================\n\n* 2 pounds tomatillos\n* 4 dried chipotle chiles\n* 2 pounds shiitake mushrooms\n* 1/4 cup olive oil\n* 1 cup water\n\n1. Remove husks from tomatillos and rinse them. Place them whole on your oven's broiler rack. Broil and turn them until they're browned on all sides.\n2. Boil the water. Drop in the dried chiles and bring the water down to a simmer. Keep them in until they are soft.\n3. Slice the shiitakes and cook them in a pan with the olive oil until they're tender.\n4. Take the chiles and tomatillos (once they're cooled off) and blend them in a food processor until they make a nice puree.\n5. Put the blended tomatillo-chile mixture in a saucepan and bring it to a boil. Add the cooked mushrooms and bring it back to a boil. Then bring the heat down until the mixture is simmering. Cook for about 10 minutes. Add salt to taste.\n\n---\nA friend gave me this recipe a while back, but I can't remember who it was. Sorry, friend.\n\ntags: vegetarian, vegan\n"
        }, {
          id: 2,
          con_name: "Phoning it in Pico de Gallo",
          con_url: "https://raw.github.com/sinker/tacofancy/master/condiments/Pico_de_gallo.md",
          con_recipe: "Phoning it in Pico de Gallo\n===========================\n\n_Super Quick & Easy Pico_\n\n\n* 1 pint grape tomatoes, quartered (make your kids do this part)\n* 3 tablespoons finely chopped white onion\n* Coarse salt\n* Squeeze of lime\n* As many finely chopped red (or green) jalapeños as you want (optional)\n\nCombine the tomatoes, cilantro and onion together in a bowl. Season to taste with salt and lime.\n\nReserve some of this mixture for kids, and then add as much jalapeño as you like to the remaining mixture for the non wimps.\n\ntags: vegetarian, vegan\n"
        }, {
          id: 3,
          con_name: "Guacamole (Simple)",
          con_url: "https://raw.github.com/sinker/tacofancy/master/condiments/guacamole_simple.md",
          con_recipe: "Guacamole (Simple)\n=========\n\nIf you're not in the mood to be fussy, this could be considered a minimum-viable guacamole recipe.\n\n* 2 ripe avocados\n* 2-4 limes, depending on juiciness, delivering 2-4T of lime juice\n* 1 diced tomato (seeded if it's a big one)\n* salt (to taste)\n* hot sauce (to taste; Frank's Red Hot is a standard, but go with what you like)\n\n1. Scoop the avocado meat into a bowl and mash them with a fork. Leave it a bit lumpy as we will do more stirring in a bit and we don't want to over-work them.\n2. Add the chopped tomato.\n3. Add the lime juice; hold some back for later adjustment).\n4. Add ½t salt.\n5. Add 2T hot sauce.\n6. Stir with the fork again.\n7. Taste.\n8. Adjust salt/lime/hot sauce as desired.\n\nThis recipe will support one average-size bag of chips, so adjust quantities based on expectations.\n\ntags: vegetarian\n"
        }
      ]);
    });
};
