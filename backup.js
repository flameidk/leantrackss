// Backups stay on the user's device. Import validates before changing saved data.
function hasPreviousBackup(){try{return !!localStorage.getItem('leantrack-before-import')}catch(e){return false}}
function backupCard(){return '<div class="card backup-card"><small class="eyebrow">YOUR DATA, ON YOUR DEVICE</small><h3>Keep a copy of your progress</h3><p class="muted">Download your plans, logs, prices and weigh-ins as a backup. Import a LeanTracks backup to restore them on this device.</p><button onclick="downloadBackup()">Download backup ↓</button><label for="backupFile">Restore from a backup</label><input type="file" id="backupFile" accept=".json,application/json" onchange="importBackup(this)">'+(hasPreviousBackup()?'<p><button class="secondary small" onclick="restoreBeforeImport()">Undo last import</button></p>':'')+'</div>'}
function downloadBackup(){const data={app:'LeanTracks',version:1,exportedAt:new Date().toISOString(),state};const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));let a=document.createElement('a');a.href=url;a.download='LeanTracks-backup-'+dateKey()+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Backup downloaded')}
function validateBackup(payload){
 const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),num=(n,min,max)=>Number.isFinite(n)&&n>=min&&n<=max,date=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s))&&new Date(s+'T12:00:00Z').toISOString().slice(0,10)===s;
 let raw=payload;if(payload?.app){if(payload.app!=='LeanTracks'||payload.version!==1)throw Error('Unsupported backup');raw=payload.state}
 if(!obj(raw)||!Array.isArray(raw.weights)||!obj(raw.targets))throw Error('This is not a LeanTracks backup');
 const check=(ok)=>{if(!ok)throw Error('The backup contains invalid data')};
 check(raw.weights.every(x=>obj(x)&&date(x.date)&&num(x.weight,50,600)));
 check(num(raw.targets.cal,1200,5000)&&num(raw.targets.protein,40,350)&&num(raw.targets.budget,0,10000));
 for(const field of ['meals','workouts','grocery'])check(raw[field]===undefined||(obj(raw[field])&&Object.values(raw[field]).every(x=>typeof x==='boolean')));
 check(raw.prices===undefined||(obj(raw.prices)&&Object.values(raw.prices).every(x=>num(x,0,100000))));
 check(raw.swaps===undefined||(obj(raw.swaps)&&Object.entries(raw.swaps).every(([k,v])=>/^[0-6]:[0-4]$/.test(k)&&Object.hasOwn(meals,v))));
 check(raw.exerciseEdits===undefined||(obj(raw.exerciseEdits)&&Object.entries(raw.exerciseEdits).every(([k,v])=>/^[0-6]:[0-3]$/.test(k)&&Array.isArray(v)&&v.length===2&&typeof v[0]==='string'&&v[0].length>0&&v[0].length<=100&&typeof v[1]==='string'&&v[1].length>0&&v[1].length<=60)));
 check(raw.coachLog===undefined||(Array.isArray(raw.coachLog)&&raw.coachLog.every(x=>typeof x==='string')));
 check(raw.food===undefined||(obj(raw.food)&&Object.entries(raw.food).every(([d,rows])=>date(d)&&Array.isArray(rows)&&rows.every(x=>obj(x)&&typeof x.name==='string'&&x.name.length>0&&num(x.cal,0,100000)&&num(x.p,0,10000)))));
 check(raw.mealEntries===undefined||(obj(raw.mealEntries)&&Object.values(raw.mealEntries).every(x=>obj(x)&&Object.hasOwn(meals,x.recipeKey)&&num(x.cal,0,100000)&&num(x.p,0,10000))));
 const allowed=['meals','workouts','grocery','weights','food','prices','targets','swaps','exerciseEdits','coachLog','mealEntries'];
 const next=Object.fromEntries(allowed.filter(k=>Object.hasOwn(raw,k)).map(k=>[k,raw[k]]));
 return Object.assign({meals:{},workouts:{},grocery:{},food:{},prices:{},swaps:{},exerciseEdits:{},coachLog:[]},next);
}
async function importBackup(input){
 const file=input.files?.[0];if(!file)return;
 try{
  if(file.size>5*1024*1024)throw Error('Choose a backup smaller than 5 MB');
  const next=validateBackup(JSON.parse(await file.text()));
  if(!confirm('Replace saved data with this backup? It contains '+next.weights.length+' weigh-ins and '+Object.values(next.meals).filter(Boolean).length+' logged meals. You can undo this import.'))return;
  localStorage.setItem('leantrack-before-import',JSON.stringify(state));
  localStorage.setItem('leantrack-v1',JSON.stringify(next));state=next;render();toast('Backup restored');
 }catch(e){toast(e instanceof SyntaxError?'This file is not valid JSON':e.message||'Unable to restore backup')}
 finally{input.value=''}
}
function restoreBeforeImport(){
 try{const saved=localStorage.getItem('leantrack-before-import');if(!saved)return;const next=validateBackup(JSON.parse(saved));if(!confirm('Undo the last import and restore the data that was on this device before it?'))return;localStorage.setItem('leantrack-v1',JSON.stringify(next));state=next;localStorage.removeItem('leantrack-before-import');render();toast('Previous data restored')}catch(e){toast('Could not restore the previous data')}
}

function resetAppData(){if(!confirm('Erase all LeanTracks data and the on-device undo backup? Download a backup from Coach first if you want to keep a copy.'))return;try{localStorage.removeItem('leantrack-v1');localStorage.removeItem('leantrack-before-import');location.reload()}catch(e){toast('Could not clear saved data')}}
