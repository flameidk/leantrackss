# LeanTracks

Static, offline-capable meal and workout tracker. Open `index.html` through a local HTTP server or deploy the repository root to an HTTPS static host. No build or API key is required.

## Data

Browser data stays under the existing `leantrack-v1` localStorage key. The Coach screen can export a JSON backup, validate and import a backup, and undo the last import. Nothing syncs to a server.

Logged meals now store the chosen recipe and its calorie/protein estimate so selecting another menu day or editing a plan does not change an already logged meal. Legacy boolean meal entries remain supported. Dates already stored by older versions are retained.

## Accuracy and sources

- All 15 recipe estimates are calculated from explicit gram weights in `nutrition.js`; the source values and serving assumptions are recorded in `nutrition-reference.json`.
- Generic foods use USDA SR28 data. Meat and potatoes are weighed raw, rice and black beans cooked. Dairy, bread, tortillas, sauces and supplements vary by brand; whey assumes 110 kcal and 25 g protein per 30 g. Values are estimates, not analysis of the actual plate.
- Food photos show finished dishes as labelled serving examples. Toppings, ingredients and portions can vary; the recipe and nutrient breakdown determine the logged values.
- Workout photos are mapped to explicit exercise variants and preserve the whole setup. Mobility and optional walking are labelled as examples. Custom exercises get no guessed image.
- Hanging knee raises link to a matching demonstration guide because an exact locally reusable photo was not verified.
- Photo provenance and licenses are recorded in `photos/sources.json`. Unused older images may remain in the repository but are not displayed or precached.

## Checks

Run the dependency-free regression checks with:

```sh
node tests/content.test.cjs
```

The app has also been browser-checked at 320, 390, 768 and 1440 pixels for its six screens, meal snapshots, workout logging, backups, image viewing and offline use.

## Publishing updates

Increment the service-worker cache version and the query version on CSS/JavaScript URLs together. The precache must contain those same versioned URLs. Keep cached HTML paired with its complete installed asset version; do not overwrite only the cached HTML during navigation. Never clear user localStorage as part of an app update.
