import * as k from 'file:///C:/Users/RCPC/.codex/skills/anatomy/kit/iso-kit.mjs';
import {writeFileSync,readFileSync} from 'node:fs';
// Figure: a countertop POS with receipt printer. A sale advances the receipt;
// the same model decrements demonstration stock and increments sales.
// Parts: base + 4 feet + drawer + handle + pedestal + monitor bezel + screen
// + 30 keys + printer enclosure + slot + receipt + 8 receipt marks = 51 solids.
const P=k.fitProjection([[-100,-65,0],[100,70,0],[-100,-65,105],[100,70,105]],600,390,{pad:30,azimuth:42,elevation:32});
const parts=[];
function slab(name,x,y,w,d,z,h,lit=false){const shape=k.slabOf({x,y,w,d,r:1},z,h,P,4,.4);const html=k.solidSvg(shape,{tone:'mid',lit});parts.push({name,depth:k.depthOf([x+w/2,y+d/2,z+h/2],P),html});}
for(const x of [-80,75])for(const y of [-45,50])slab('foot',x,y,10,10,0,6);
slab('base',-90,-55,180,120,6,9);slab('cash drawer',-84,22,168,37,15,10);slab('drawer handle',-25,57,50,4,18,4);
slab('screen pedestal',-65,-35,18,22,15,50);slab('monitor case',-84,-48,125,10,58,49);slab('screen',-79,-37,115,1,64,37,true);
slab('keyboard bed',-80,-5,118,56,15,4);
for(let r=0;r<5;r++)for(let c=0;c<6;c++)slab('key',-75+c*18,r*10,14,7,19,3,c===5&&r===4);
slab('printer',49,-31,35,48,15,27);slab('paper slot',53,-17,27,3,42,1);
slab('receipt',54,-16,25,32,43,1);
for(let i=0;i<8;i++)slab('receipt ink',57,-12+i*3,19-(i%3)*3,.6,44,.2);
// Draw by assembly: supports before their mounted surfaces, keys above the bed.
// Sorting the centre of a large bed against small keys would occlude the keys.
const body=parts.map(p=>`<g${p.name==='receipt'||p.name==='receipt ink'?' class="receipt-part"':''}>${p.html}</g>`).join('');
const svg=k.figureSvg({width:600,height:390,label:'Illustrative point of sale terminal with cash drawer, keyboard and receipt printer',body});
writeFileSync('assets/anatomy-pos.svg',svg);
writeFileSync('assets/anatomy.css',k.ISO_CSS);
writeFileSync('assets/anatomy-LICENSE.txt',readFileSync('C:/Users/RCPC/.codex/skills/anatomy/LICENSE','utf8'));
console.log(JSON.stringify({solids:parts.length,svgBytes:svg.length}));
