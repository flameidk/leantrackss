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
const FINISHED_MEALS={
  "breakfast": {
    "key": "oats",
    "description": "Oatmeal and fruit breakfast"
  },
  "yogurt": {
    "key": "yogurt",
    "description": "Yogurt breakfast bowl"
  },
  "potatoegg": {
    "key": "eggs",
    "description": "Egg breakfast with potatoes"
  },
  "chickenrice": {
    "key": "chickenrice",
    "description": "Chicken rice bowl"
  },
  "chickenpotato": {
    "key": "chickenpotato",
    "description": "Roasted chicken with potatoes"
  },
  "wrap": {
    "key": "wrap",
    "description": "Chicken wrap with a potato side"
  },
  "turkeytaco": {
    "key": "meal-taco-bowl",
    "description": "Taco rice bowl"
  },
  "pasta": {
    "key": "pasta",
    "description": "Pasta with tomato meat sauce"
  },
  "chili": {
    "key": "chili",
    "description": "Chili bowl"
  },
  "shake": {
    "key": "shake",
    "description": "Strawberry shake"
  },
  "shakenuts": {
    "key": "shake",
    "description": "Strawberry shake"
  },
  "shakeapple": {
    "key": "shake",
    "description": "Strawberry shake"
  },
  "yogurtnut": {
    "key": "meal-yogurt-nutbutter",
    "description": "Yogurt bowl with fruit and nut butter"
  },
  "cottage": {
    "key": "cottage",
    "description": "Cottage cheese with strawberries"
  },
  "cottagebread": {
    "key": "meal-toast",
    "description": "Peanut-butter toast"
  }
};
function photoImage(key,alt,kind){return '<button class="photo-button" onclick="openPhoto(this)" aria-label="View '+esc(alt)+'"><img class="'+kind+'-photo" src="./photos/'+key+'.jpg" alt="'+esc(alt)+'" width="850" height="567" loading="lazy" decoding="async"><span class="photo-expand" aria-hidden="true">↗</span></button>'}
function mealPhotoKey(k){return FINISHED_MEALS[k].key}
function mealVisual(k){let photo=FINISHED_MEALS[k];return '<figure class="finished-meal">'+photoImage(photo.key,photo.description+' — serving example','meal')+'<figcaption>Serving example</figcaption></figure>'}
function workoutReference(name){return WORKOUT_REFERENCES[name.toLowerCase().trim().replace(/\s+/g,' ')]||null}
function workoutPreviewKey(name){let ref=workoutReference(name);if(!ref||ref.key==='knee')return null;return ref.key==='cable'?'cable-crunch-0':'verified-'+ref.key+'-0'}
function workoutVisual(name){let ref=workoutReference(name);if(!ref)return '<div class="unverified-exercise"><b>Custom exercise</b><p>No verified photo for this exercise. Your saved name and sets are unchanged.</p></div>';if(ref.key==='knee')return '<div class="unverified-exercise"><b>Hanging knee raise</b><p>Hang from a pull-up bar. Raise bent knees under control; avoid swinging.</p><a href="https://www.muscleandstrength.com/exercises/hanging-knee-raise.html" target="_blank" rel="noopener">View exercise demonstration ↗</a><small>Verified guide linked; a matching photo is not available here.</small></div>';let keys=ref.key==='cable'?['cable-crunch-0','cable-crunch-1']:ref.key==='mobility'?['verified-mobility-1','verified-child-0']:['verified-'+ref.key+'-0','verified-'+ref.key+'-1'];let captions=ref.key==='cable'?['Start','Crunch']:ref.key==='mobility'?['Cat stretch','Child’s pose']:ref.key==='deadlift'?['Hips back','Standing']:ref.key==='walk'?['Walking example','Walking example']:['Position 1','Position 2'];return '<div class="audited-demo"><div class="verified-variant">'+esc(ref.variant)+'</div><div class="cable-demo">'+keys.map((key,i)=>'<figure>'+photoImage(key,ref.variant+' — '+captions[i],'workout')+'<figcaption>'+esc(captions[i])+'</figcaption></figure>').join('')+'</div></div>'}
