// Audited ingredient-based estimates. USDA SR28 values are per 100 g.
const NUTRITION_REFERENCE={
  "11090": {
    "id": "11090",
    "name": "Broccoli, raw",
    "p": 2.82,
    "cal": 34
  },
  "11253": {
    "id": "11253",
    "name": "Lettuce, green leaf, raw",
    "p": 1.36,
    "cal": 15
  },
  "11352": {
    "id": "11352",
    "name": "Potatoes, flesh and skin, raw",
    "p": 2.05,
    "cal": 77
  },
  "11457": {
    "id": "11457",
    "name": "Spinach, raw",
    "p": 2.86,
    "cal": 23
  },
  "11583": {
    "id": "11583",
    "name": "Vegetables, mixed, frozen, unprepared",
    "p": 3.33,
    "cal": 72
  },
  "11693": {
    "id": "11693",
    "name": "Tomatoes, crushed, canned",
    "p": 1.64,
    "cal": 32
  },
  "12061": {
    "id": "12061",
    "name": "Nuts, almonds",
    "p": 21.15,
    "cal": 579
  },
  "16015": {
    "id": "16015",
    "name": "Beans, black, mature seeds, cooked, boiled, without salt",
    "p": 8.86,
    "cal": 132
  },
  "16098": {
    "id": "16098",
    "name": "Peanut butter, smooth style, with salt",
    "p": 22.21,
    "cal": 598
  },
  "18075": {
    "id": "18075",
    "name": "Bread, whole-wheat, commercially prepared",
    "p": 12.45,
    "cal": 252
  },
  "20045": {
    "id": "20045",
    "name": "Rice, white, long-grain, regular, enriched, cooked",
    "p": 2.69,
    "cal": 130
  },
  "20120": {
    "id": "20120",
    "name": "Pasta, dry, enriched",
    "p": 13.04,
    "cal": 371
  },
  "28295": {
    "id": "28295",
    "name": "Tortillas, ready-to-bake or -fry, whole wheat",
    "p": 9.76,
    "cal": 310
  },
  "01015": {
    "id": "01015",
    "name": "Cheese, cottage, lowfat, 2% milkfat",
    "p": 10.45,
    "cal": 81
  },
  "01123": {
    "id": "01123",
    "name": "Egg, whole, raw, fresh",
    "p": 12.56,
    "cal": 143
  },
  "01124": {
    "id": "01124",
    "name": "Egg, white, raw, fresh",
    "p": 10.9,
    "cal": 52
  },
  "01129": {
    "id": "01129",
    "name": "Egg, whole, cooked, hard-boiled",
    "p": 12.58,
    "cal": 155
  },
  "01256": {
    "id": "01256",
    "name": "Yogurt, Greek, plain, nonfat",
    "p": 10.19,
    "cal": 59
  },
  "04053": {
    "id": "04053",
    "name": "Oil, olive, salad or cooking",
    "p": 0,
    "cal": 884
  },
  "05062": {
    "id": "05062",
    "name": "Chicken, broiler or fryers, breast, skinless, boneless, meat only, raw",
    "p": 22.5,
    "cal": 120
  },
  "05665": {
    "id": "05665",
    "name": "Ground turkey, 93% lean, 7% fat, raw",
    "p": 18.73,
    "cal": 150
  },
  "06143": {
    "id": "06143",
    "name": "USDA Commodity, spaghetti sauce, meatless, canned",
    "p": 1.2,
    "cal": 48
  },
  "06164": {
    "id": "06164",
    "name": "Sauce, salsa, ready-to-serve",
    "p": 1.52,
    "cal": 29
  },
  "08120": {
    "id": "08120",
    "name": "Cereals, oats, regular and quick, not fortified, dry",
    "p": 13.15,
    "cal": 379
  },
  "09003": {
    "id": "09003",
    "name": "Apples, raw, with skin",
    "p": 0.26,
    "cal": 52
  },
  "09040": {
    "id": "09040",
    "name": "Bananas, raw",
    "p": 1.09,
    "cal": 89
  },
  "09316": {
    "id": "09316",
    "name": "Strawberries, raw",
    "p": 0.67,
    "cal": 32
  },
  "whey": {
    "id": "whey",
    "name": "Whey isolate label assumption",
    "cal": 366.66666666666663,
    "p": 83.33333333333334,
    "source": "https://www.optimumnutrition.com/en-se/products/gold-standard-100-isolate-whey-protein-powder-eu"
  }
};
const RECIPE_PORTIONS={
  "breakfast": [
    [
      "01123",
      100,
      "2 large eggs (100 g edible weight)"
    ],
    [
      "01124",
      180,
      "180 g egg whites"
    ],
    [
      "08120",
      50,
      "50 g dry oats"
    ],
    [
      "09316",
      100,
      "100 g strawberries"
    ]
  ],
  "yogurt": [
    [
      "01256",
      250,
      "250 g nonfat plain Greek yogurt"
    ],
    [
      "08120",
      55,
      "55 g dry oats"
    ],
    [
      "09316",
      100,
      "100 g strawberries"
    ],
    [
      "01129",
      100,
      "2 large hard-boiled eggs (100 g edible weight)"
    ]
  ],
  "potatoegg": [
    [
      "01123",
      100,
      "2 large eggs (100 g edible weight)"
    ],
    [
      "01124",
      180,
      "180 g egg whites"
    ],
    [
      "11352",
      250,
      "250 g raw potatoes"
    ],
    [
      "04053",
      5,
      "5 g olive oil"
    ]
  ],
  "chickenrice": [
    [
      "05062",
      225,
      "225 g raw skinless chicken breast"
    ],
    [
      "20045",
      180,
      "180 g cooked white rice"
    ],
    [
      "11090",
      150,
      "150 g broccoli (weighed raw)"
    ],
    [
      "04053",
      10,
      "10 g olive oil"
    ]
  ],
  "chickenpotato": [
    [
      "05062",
      225,
      "225 g raw skinless chicken breast"
    ],
    [
      "11352",
      300,
      "300 g raw potatoes"
    ],
    [
      "11583",
      150,
      "150 g frozen mixed vegetables (weighed before cooking)"
    ],
    [
      "04053",
      10,
      "10 g olive oil"
    ]
  ],
  "wrap": [
    [
      "05062",
      200,
      "200 g raw skinless chicken breast"
    ],
    [
      "28295",
      60,
      "1 whole-wheat tortilla (60 g assumed)"
    ],
    [
      "11352",
      150,
      "150 g raw potatoes"
    ],
    [
      "11253",
      30,
      "30 g lettuce"
    ],
    [
      "01256",
      50,
      "50 g nonfat plain Greek yogurt as sauce"
    ]
  ],
  "turkeytaco": [
    [
      "05665",
      200,
      "200 g raw 93% lean ground turkey"
    ],
    [
      "20045",
      150,
      "150 g cooked white rice"
    ],
    [
      "16015",
      100,
      "100 g cooked, drained black beans"
    ],
    [
      "06164",
      60,
      "60 g salsa"
    ],
    [
      "11253",
      50,
      "50 g lettuce"
    ]
  ],
  "pasta": [
    [
      "05665",
      200,
      "200 g raw 93% lean ground turkey"
    ],
    [
      "20120",
      85,
      "85 g dry pasta"
    ],
    [
      "06143",
      125,
      "125 g meatless tomato pasta sauce"
    ],
    [
      "11457",
      60,
      "60 g raw spinach"
    ],
    [
      "04053",
      5,
      "5 g olive oil"
    ]
  ],
  "chili": [
    [
      "05665",
      200,
      "200 g raw 93% lean ground turkey"
    ],
    [
      "16015",
      120,
      "120 g cooked, drained black beans"
    ],
    [
      "11693",
      150,
      "150 g canned crushed tomatoes"
    ],
    [
      "20045",
      120,
      "120 g cooked white rice"
    ]
  ],
  "shake": [
    [
      "whey",
      30,
      "30 g strawberry whey isolate (label assumption)"
    ],
    [
      "09040",
      118,
      "1 medium banana (118 g peeled)"
    ]
  ],
  "shakenuts": [
    [
      "whey",
      30,
      "30 g strawberry whey isolate (label assumption)"
    ],
    [
      "09040",
      118,
      "1 medium banana (118 g peeled)"
    ],
    [
      "12061",
      20,
      "20 g almonds"
    ]
  ],
  "shakeapple": [
    [
      "whey",
      30,
      "30 g strawberry whey isolate (label assumption)"
    ],
    [
      "09003",
      182,
      "1 medium apple (182 g edible weight)"
    ]
  ],
  "yogurtnut": [
    [
      "01256",
      200,
      "200 g nonfat plain Greek yogurt"
    ],
    [
      "16098",
      15,
      "15 g peanut butter"
    ]
  ],
  "cottage": [
    [
      "01015",
      200,
      "200 g low-fat 2% cottage cheese"
    ],
    [
      "09316",
      100,
      "100 g strawberries"
    ],
    [
      "12061",
      15,
      "15 g almonds"
    ]
  ],
  "cottagebread": [
    [
      "01015",
      200,
      "200 g low-fat 2% cottage cheese"
    ],
    [
      "18075",
      28,
      "1 slice whole-wheat bread (28 g assumed, weighed before toasting)"
    ],
    [
      "16098",
      15,
      "15 g peanut butter"
    ]
  ]
};
function applyNutritionReference(recipes){for(const [key,parts] of Object.entries(RECIPE_PORTIONS)){const breakdown=parts.map(([id,grams,label])=>({id,grams,label,cal:NUTRITION_REFERENCE[id].cal*grams/100,p:NUTRITION_REFERENCE[id].p*grams/100}));Object.assign(recipes[key],{cal:Math.round(breakdown.reduce((sum,x)=>sum+x.cal,0)),p:Math.round(breakdown.reduce((sum,x)=>sum+x.p,0)),ingredients:parts.map(x=>x[2]).join(', '),breakdown})}}
function nutritionDetails(key){let rows=meals[key].breakdown;return '<details class="nutrition-method"><summary>Portions & nutrition estimate</summary><p>Estimated from the ingredient weights below. Meat and potatoes are weighed raw; rice and beans are weighed cooked. Photos are serving examples; follow the ingredient amounts below.</p><div class="nutrition-table"><table><caption>Ingredient estimate for one complete recipe</caption><thead><tr><th>Ingredient</th><th>kcal</th><th>Protein</th></tr></thead><tbody>'+rows.map(x=>'<tr><td>'+esc(x.label)+'</td><td>'+Math.round(x.cal)+'</td><td>'+x.p.toFixed(1)+' g</td></tr>').join('')+'</tbody></table></div><p>USDA SR28 reference estimates; brands, preparation and rounding vary. Seasonings, water and ice are not counted. Add any extra cooking oil. Tortilla: 60 g; bread: 28 g; whey: 30 g with 110 kcal and 25 g protein. Use your package labels for those products.</p><p><a href="https://www.ars.usda.gov/ARSUserFiles/80400535/Data/SR/SR28/sr28_doc.pdf" target="_blank" rel="noopener">USDA reference</a> · <a href="https://www.optimumnutrition.com/en-se/products/gold-standard-100-isolate-whey-protein-powder-eu" target="_blank" rel="noopener">Example whey label</a></p></details>'}
