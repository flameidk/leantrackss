// Only verified, explicit image matches. Unknown custom exercises get no guessed photo.
const WORKOUT_REFERENCES={
  "chest press machine": {
    "key": "chest",
    "variant": "Machine chest press"
  },
  "chest press": {
    "key": "chest",
    "variant": "Machine chest press"
  },
  "incline dumbbell press": {
    "key": "incline",
    "variant": "Incline dumbbell press"
  },
  "triceps pushdown": {
    "key": "triceps",
    "variant": "Rope triceps pushdown"
  },
  "lat pulldown": {
    "key": "pull",
    "variant": "Front wide-grip lat pulldown"
  },
  "seated cable row": {
    "key": "row",
    "variant": "Seated cable row"
  },
  "dumbbell curls": {
    "key": "curl",
    "variant": "Standing dumbbell curl"
  },
  "leg press": {
    "key": "legpress",
    "variant": "Sled leg press"
  },
  "leg curl": {
    "key": "legcurl",
    "variant": "Lying leg curl"
  },
  "calf raises": {
    "key": "calf",
    "variant": "Standing calf raise machine"
  },
  "cable crunch": {
    "key": "cable",
    "variant": "Kneeling cable crunch"
  },
  "cable crunches": {
    "key": "cable",
    "variant": "Kneeling cable crunch"
  },
  "treadmill": {
    "key": "walk",
    "variant": "Treadmill walking example"
  },
  "easy treadmill": {
    "key": "walk",
    "variant": "Treadmill walking"
  },
  "rest / easy walk": {
    "key": "walk",
    "variant": "Optional walking example; rest is also an option"
  },
  "gentle mobility": {
    "key": "mobility",
    "variant": "Mobility examples: cat stretch and child’s pose"
  },
  "shoulder press (only if pain-free)": {
    "key": "shoulder",
    "variant": "Seated dumbbell shoulder press"
  },
  "goblet squat": {
    "key": "squat",
    "variant": "Dumbbell goblet squat"
  },
  "romanian deadlift": {
    "key": "deadlift",
    "variant": "Barbell Romanian deadlift"
  },
  "hanging knee raises": {
    "key": "knee",
    "variant": "Hanging knee raise — pull-up bar"
  }
};
const MEAL_PHOTOS={"breakfast":["eggs","oats","strawberries"],"yogurt":["yogurt","oats","strawberries"],"potatoegg":["eggs","potatoes"],"chickenrice":["chicken","rice","broccoli"],"chickenpotato":["chicken","potatoes"],"wrap":["chicken","potatoes","lettuce"],"turkeytaco":["rice","beans","lettuce"],"pasta":["pasta","spinach"],"chili":["beans","rice"],"shake":["banana"],"shakenuts":["banana","almonds"],"shakeapple":["apple"],"yogurtnut":["yogurt","peanutbutter"],"cottage":["cottage","strawberries","almonds"],"cottagebread":["cottage","bread","peanutbutter"]};
const INGREDIENT_PHOTO_LABELS={"lettuce":"Lettuce","eggs":"Eggs","oats":"Dry oats","strawberries":"Strawberries","yogurt":"Plain yogurt","chicken":"Raw chicken breast","rice":"Cooked white rice","broccoli":"Broccoli","potatoes":"Raw potatoes","beans":"Black beans (dry reference)","spinach":"Spinach","pasta":"Dry pasta","banana":"Banana","apple":"Apple","almonds":"Almonds","cottage":"Cottage cheese","bread":"Whole-wheat bread","peanutbutter":"Peanut butter"};
function photoImage(key,alt,kind){return '<button class="photo-button" onclick="openPhoto(this)" aria-label="View '+esc(alt)+'"><img class="'+kind+'-photo" src="./photos/'+key+'.jpg" alt="'+esc(alt)+'" width="850" height="567" loading="lazy" decoding="async"><span class="photo-expand" aria-hidden="true">↗</span></button>'}
function mealPhotoKey(k){return 'ingredient-'+MEAL_PHOTOS[k][0]}
function mealVisual(k){return '<div class="ingredient-board"><div class="ingredient-board-title">RECIPE INGREDIENTS · PHOTOS</div><div class="ingredient-photos">'+MEAL_PHOTOS[k].map(key=>'<figure>'+photoImage('ingredient-'+key,INGREDIENT_PHOTO_LABELS[key]+' — ingredient reference photo','meal')+'<figcaption>'+esc(INGREDIENT_PHOTO_LABELS[key])+'</figcaption></figure>').join('')+'</div><small>Ingredient types pictured. See recipe for all ingredients and portions.</small></div>'}
function workoutReference(name){return WORKOUT_REFERENCES[name.toLowerCase().trim().replace(/\s+/g,' ')]||null}
function workoutPreviewKey(name){let ref=workoutReference(name);if(!ref||ref.key==='knee')return null;return ref.key==='cable'?'cable-crunch-0':'verified-'+ref.key+'-0'}
function workoutVisual(name){let ref=workoutReference(name);if(!ref)return '<div class="unverified-exercise"><b>Custom exercise</b><p>No verified photo for this exercise. Your saved name and sets are unchanged.</p></div>';if(ref.key==='knee')return '<div class="unverified-exercise"><b>Hanging knee raise</b><p>Hang from a pull-up bar. Raise bent knees under control; avoid swinging.</p><a href="https://www.muscleandstrength.com/exercises/hanging-knee-raise.html" target="_blank" rel="noopener">View exercise demonstration ↗</a><small>Verified guide linked; a matching photo is not available here.</small></div>';let keys=ref.key==='cable'?['cable-crunch-0','cable-crunch-1']:ref.key==='mobility'?['verified-mobility-1','verified-child-0']:['verified-'+ref.key+'-0','verified-'+ref.key+'-1'];let captions=ref.key==='cable'?['Start','Crunch']:ref.key==='mobility'?['Cat stretch','Child’s pose']:ref.key==='deadlift'?['Hips back','Standing']:ref.key==='walk'?['Walking example','Walking example']:['Position 1','Position 2'];return '<div class="audited-demo"><div class="verified-variant">'+esc(ref.variant)+'</div><div class="cable-demo">'+keys.map((key,i)=>'<figure>'+photoImage(key,ref.variant+' — '+captions[i],'workout')+'<figcaption>'+esc(captions[i])+'</figcaption></figure>').join('')+'</div></div>'}
