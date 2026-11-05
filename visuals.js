const svg=(body,label,kind)=>`<svg class="${kind}-art" viewBox="0 0 320 180" role="img" aria-label="${esc(label)} illustration" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="180" rx="16" fill="#10382d"/><ellipse cx="166" cy="157" rx="113" ry="12" fill="#06251e" opacity=".6"/>${body}</svg>`

function mealVisual(k){
 const leaf=(x,y,r=0)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="15" ry="8" fill="#64af5a" transform="rotate('+r+' '+x+' '+y+')"/><path d="M'+(x-9)+' '+y+'h18" stroke="#a7d484" stroke-width="1.5"/>';
 const berry=(x,y)=>'<circle cx="'+x+'" cy="'+y+'" r="7" fill="#dd6873"/><path d="M'+(x-4)+' '+(y-4)+'l4 3 4-3" fill="none" stroke="#7ca769" stroke-width="2"/>';
 const egg=(x,y)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="22" ry="17" fill="#fff1d1"/><circle cx="'+x+'" cy="'+y+'" r="9" fill="#f6bb4e"/>';
 const plate='<ellipse cx="160" cy="99" rx="104" ry="59" fill="#a4c7b5"/><ellipse cx="160" cy="94" rx="96" ry="53" fill="#e2e9ce"/><ellipse cx="160" cy="94" rx="80" ry="43" fill="#d1ddbd"/>';
 const bowl='<ellipse cx="160" cy="100" rx="87" ry="49" fill="#0c241e"/><path d="M73 93q7 65 87 65t87-65" fill="#819f8c"/><ellipse cx="160" cy="91" rx="87" ry="43" fill="#dde4cb"/>';
 let body='';
 if(['shake','shakenuts','shakeapple'].includes(k)){
 body='<path d="M102 49h72l-9 104h-54z" fill="#e29b9e"/><ellipse cx="138" cy="49" rx="36" ry="9" fill="#f5c0bc"/><path d="M150 23l-10 66" stroke="#8ef0cd" stroke-width="6"/><path d="M113 64l5 74" stroke="#ffe2d1" stroke-width="5" opacity=".5"/>'+berry(122,88)+'<path d="M190 114q22 26 48-4-1 41-34 34-16-4-14-30" fill="#f0cc65"/>';
 if(k==='shakeapple')body+='<path d="M203 82c-27-18-36 23-14 36 15 10 33-4 31-22-1-8-10-19-17-14" fill="#d87966"/><path d="M202 83l3-12" stroke="#91b278" stroke-width="4"/>';
 if(k==='shakenuts')body+=[0,1,2,3].map(i=>'<ellipse cx="'+(222+i*7)+'" cy="'+(148-i%2*9)+'" rx="5" ry="9" fill="#c49b6a" transform="rotate(30 230 144)"/>').join('');
 }else if(['yogurt','yogurtnut','cottage','cottagebread'].includes(k)){
 body=bowl+'<ellipse cx="160" cy="90" rx="70" ry="30" fill="#fff2d9"/>';
 body+=[0,1,2,3,4].map(i=>berry(125+i*13,80+(i%2)*14)).join('');
 body+=k==='yogurtnut'?'<path d="M166 99q35-25 41 3t-42 4" fill="#c39961"/>':[0,1,2,3,4,5,6,7].map(i=>'<ellipse cx="'+(178+i%3*10)+'" cy="'+(77+Math.floor(i/3)*11)+'" rx="5" ry="3" fill="#c7a475"/>').join('');
 if(k==='yogurt')body+=egg(238,126);if(k==='cottagebread')body+='<path d="M217 106q-6-17 21-17t20 17l-2 38h-38z" fill="#c69b64"/><path d="M224 108h26v29h-26z" fill="#e2bf85"/>';
 }else if(k==='breakfast'||k==='potatoegg'){
 body=plate+egg(121,84)+egg(151,106);
 body+=k==='breakfast'?'<ellipse cx="201" cy="82" rx="31" ry="22" fill="#c3a370"/>'+berry(195,78)+berry(207,87):[0,1,2,3,4].map(i=>'<rect x="'+(178+i%3*16)+'" y="'+(75+Math.floor(i/3)*19)+'" width="14" height="15" rx="3" fill="#deb46d" transform="rotate(15 200 90)"/>').join('');body+=leaf(128,122,-15);
 }else if(k==='wrap'){
 body=plate+'<path d="M114 54l72 33-26 57-72-34z" fill="#e6c791"/><path d="M119 61l57 27-11 21-57-26z" fill="#84ae68"/><path d="M126 66l35 17-8 14-35-17z" fill="#c38957"/><path d="M98 94l64 28" stroke="#bd965f" stroke-width="3"/>'+leaf(218,91,20)+'<path d="M199 113l31 9m-34-1l27 11" stroke="#e7bb6e" stroke-width="8"/>';
 }else{
 body=plate;
 const pasta=k==='pasta';
 body+='<ellipse cx="133" cy="95" rx="44" ry="33" fill="'+(pasta?'#d39758':k==='chili'?'#b7714b':'#f1dfb2')+'"/>';
 body+=[0,1,2,3,4,5,6,7,8].map(i=>'<path d="M'+(108+i%3*18)+' '+(77+Math.floor(i/3)*16)+'l10 5" stroke="'+(pasta?'#f0cc77':'#fff0ca')+'" stroke-width="4" stroke-linecap="round"/>').join('');
 if(k.startsWith('chicken')){body+='<path d="M170 66q44-17 52 18t-48 37q-22-18-4-55" fill="#dba16b"/><path d="M179 72l32 9m-37 4l38 11m-36 4l27 10" stroke="#a7754d" stroke-width="4" stroke-linecap="round"/>';body+=leaf(207,128,20)+leaf(223,117,-30)+leaf(189,129,-20);}
 else{body+=[0,1,2,3,4,5,6,7].map(i=>'<ellipse cx="'+(175+i%3*15)+'" cy="'+(77+Math.floor(i/3)*16)+'" rx="9" ry="6" fill="'+(k==='turkeytaco'?'#9c6655':'#be7957')+'"/>').join('');body+=leaf(207,121,20)+leaf(219,109,-30);}
 if(k==='chickenpotato')body+='<rect x="100" y="75" width="25" height="19" rx="5" fill="#dfb169"/><rect x="127" y="98" width="22" height="20" rx="5" fill="#dfb169"/>';
 }
 return svg(body,meals[k].name,'meal');
}

function workoutVisual(name){
 const n=name.toLowerCase();let pose='';
 const head=(x,y)=>'<circle cx="'+x+'" cy="'+y+'" r="10" fill="#b0efd6"/>';
 const limb=d=>'<path d="'+d+'" fill="none" stroke="#a1decb" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>';
 const torso=d=>'<path d="'+d+'" fill="none" stroke="#18d5ae" stroke-width="17" stroke-linecap="round"/>';
 const weight=(x,y)=>'<path d="M'+(x-17)+' '+y+'h34" stroke="#9a91c5" stroke-width="4"/><rect x="'+(x-18)+'" y="'+(y-9)+'" width="7" height="18" rx="2" fill="#c6b0ed"/><rect x="'+(x+11)+'" y="'+(y-9)+'" width="7" height="18" rx="2" fill="#c6b0ed"/>';
 const bench='<path d="M105 117h101m-89 0v29m76-29v29" stroke="#567c6b" stroke-width="7" stroke-linecap="round"/>';
 if(/treadmill|walk|rest/.test(n)){pose='<path d="M88 148h145l-17-9H94m117 0V70h-23" fill="none" stroke="#567c6b" stroke-width="7" stroke-linecap="round"/>'+head(160,47)+torso('M158 68l-5 30')+limb('M157 73l-22 14-19-10M158 74l22 18 17-15M152 103l-21 18-17 12M153 103l22 12 8 21');}
 else if(/mobility/.test(n)){pose='<rect x="76" y="146" width="169" height="8" rx="4" fill="#726497"/>'+head(163,48)+torso('M160 69l-9 35')+limb('M159 72l-27-19-16-14M160 73l27 8 23-11M151 107l-25 18-17 20M154 107l26 25h32');}
 else if(/pushdown/.test(n)){pose='<path d="M203 150V26h-33m12 0v63m-15 0h30" fill="none" stroke="#567c6b" stroke-width="6"/>'+head(142,47)+torso('M143 68v39')+limb('M150 74l16 18 15 25M140 74l15 18 17 25M140 112l-7 35M147 112l10 35')+'<path d="M167 119h27" stroke="#c6b0ed" stroke-width="5"/>';}
 else if(/incline/.test(n)){pose='<path d="M110 70l62 56h40m-45 0v22m-53-73v73" fill="none" stroke="#567c6b" stroke-width="7"/>'+head(121,63)+torso('M134 79l28 30')+limb('M138 82l9-24 12-17M146 90l24-25 12-15M166 114l23 9 11 24M162 114l-5 21 11 13')+weight(160,38)+weight(183,46);}
 else if(/chest/.test(n)){pose=bench+head(110,96)+torso('M131 103h38')+limb('M139 101l-5-24 1-25M155 101l12-24V52M173 106l21 17-1 25M169 111l-3 19 13 18')+weight(135,49)+weight(167,49);}
 else if(/leg press/.test(n)){pose='<path d="M100 87l26 44h52m-45 0v19m49-14 40-82m-6-16 23 10" fill="none" stroke="#567c6b" stroke-width="7"/>'+head(113,75)+torso('M124 94l17 26')+limb('M130 101l24 13M144 122l29-18 29-39M148 124l36-13 27-39');}
 else if(/press|pushdown/.test(n)&&!n.includes('leg')){pose=bench+head(151,60)+torso('M151 82v29')+limb('M144 86l-23-13V49M160 84l23-12V49M149 114l-22 8-9 26M156 114l25 8 9 26')+weight(121,46)+weight(183,46);}
 else if(/pulldown|row/.test(n)){pose='<path d="M102 148V30h113v118M103 31h112M122 39h71" stroke="#567c6b" stroke-width="6" fill="none"/>'+head(158,70)+torso('M158 91v27')+limb('M151 91l-25-18V44M164 91l26-18V44M155 121l-27 9-7 18M162 121l24 9 9 18')+'<path d="M122 42h72" stroke="#c6b0ed" stroke-width="5"/>';}
 else if(/curl/.test(n)&&!n.includes('leg')){pose=head(158,44)+torso('M158 65v42')+limb('M150 71l-20 23 10 14M165 71l21 23-9 14M153 112l-8 35M163 112l9 35')+weight(139,106)+weight(178,106);}
 else if(/calf|leg curl/.test(n)){pose=head(158,44)+torso('M158 65v42')+limb('M150 71l-20 23 10 14M165 71l21 23-9 14M153 112l-8 30 12 3M163 112l15 14-10 18')+'<path d="M130 151h60" stroke="#c6b0ed" stroke-width="5"/>';}else if(/squat|leg press/.test(n)){pose=head(151,52)+torso('M152 73l14 31')+limb('M155 76l-23 16 26 2M164 107l-29 14 6 26M169 107l27 14-7 26')+weight(159,92);}
 else if(/deadlift/.test(n)){pose=head(173,63)+torso('M162 81l-30 23')+limb('M158 84l18 34M133 109l12 17-7 23M139 107l22 19-4 23')+weight(177,123);}
 else if(/crunch|knee/.test(n)){pose='<rect x="82" y="146" width="158" height="8" rx="4" fill="#726497"/>'+head(111,107)+torso('M131 114l27 11')+limb('M136 110l26-14 15 5M161 127l18-28 24 21M160 129l22-13 22 20');}
 else{pose=head(158,44)+torso('M158 66v40')+limb('M149 73l-17 28 14 9M167 73l17 28-14 9M153 111l-9 36M164 111l10 36')+weight(144,111)+weight(172,111);}
 return svg('<path d="M72 151h176" stroke="#416650" stroke-width="2"/>'+pose,name,'workout');
}
