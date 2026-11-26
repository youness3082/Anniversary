(() => {
const el=id=>document.getElementById(id);
const categories=[
['missing','You’re missing me',[
'I wish I could teleport to wherever you are right now. Until someone figures that out, just know I’m probably missing you too. I can’t wait for the next time I get to see you.',
'I miss the random little moments with you the most. Sitting on the train, taking stupid pictures, or just talking about absolutely nothing. I’d happily do any of that with you right now.',
'If I were there right now I’d give you a hug, and then probably annoy you within five minutes. Consider this letter the hug part.',
'Go look at one of our pictures. It makes me happy knowing that we have all those memories, and that there are still so many more to make.',
'Being apart for a little while doesn’t change how much you mean to me. I’m looking forward to our next date, even if we haven’t figured out what we’re doing yet.']],
['bad','You’ve had a bad day',[
'You don’t have to pretend your day was fine around me. You can complain, talk it through, or just sit quietly. I want to be there for all of it.',
'I wish I could bring you a ridiculously sweet coffee and a butter croissant right now. You deserve a little something nice after today.',
'One bad day doesn’t take away any of the good things about you. I hope you give yourself some time to rest tonight.',
'You don’t owe anyone a perfect mood. If all you want to do is get comfortable and watch something, that sounds like a perfectly good plan to me.',
'I might not know exactly what happened today, but I want to hear about it if you feel like telling me. You matter to me on the difficult days just as much.']],
['laugh','You need a laugh',[
'Out of every possible movie we could’ve watched, somehow Scary Movie became part of our love story. Imagine explaining that to someone who expects a cute romantic story.',
'I was going to make you coffee, but I’m concerned the entire sugar industry might not be able to keep up with your order.',
'I would like to formally apologize for my ragebaiting. Unfortunately, this apology does not include a retirement announcement.',
'Fluffy and I have a very serious announcement: he is the main character of this relationship. We’re just supporting cast.',
'I made you an entire website because apparently being annoying in person wasn’t enough. Now I can annoy you digitally too. You’re welcome.']],
['thinking','You’re overthinking',[
'You can ask me what I mean instead of having to guess. I’d rather talk things through with you than have you worrying about something alone.',
'You don’t have to have every answer tonight. Some things make more sense after a little rest and some time.',
'I love you for who you are, not for how perfectly you handle everything. You can tell me when something is bothering you.',
'If your thoughts are going in circles, you can write them down or tell me about them. We don’t have to solve everything at once.',
'I want us to be able to ask each other difficult questions and actually listen to the answers. You don’t have to figure out what I’m thinking by yourself.']],
['sleep','You can’t sleep',[
'If I were there, I’d probably be annoying you until we both fell asleep. For now, imagine a hug and me telling you goodnight.',
'I hope tomorrow brings you something to smile about. For tonight, you deserve to get comfortable and let the day be over.',
'Think of a date you’d like us to go on. We have so many little adventures left, and I can’t wait to hear your ideas.',
'I hope you’re warm, comfortable, and not thinking about everything you have to do tomorrow. I love you. Goodnight, my love.',
'Here’s a very small bedtime reminder: I’m glad I met you, I’m glad we’re together, and I hope you get some good rest.']],
['argument','We’ve had an argument',[
'Even when we disagree, I still love you. I want to understand you, not just prove that I’m right.',
'I know I can be annoying, but I never want that to be an excuse for not listening. If I hurt you, I want to understand what happened and do better.',
'We can take some time to cool down and talk when we’re ready. I care more about how we treat each other than winning an argument.',
'I don’t expect either of us to be perfect. I do want us to be honest with each other and take responsibility when we get things wrong.',
'This letter isn’t a substitute for talking about what happened. I love you, and I want to hear your side properly.']],
['doubt','You’re doubting yourself',[
'I admire how much you care about animals. I hope you get to become a vet one day, and I’m rooting for you through all the work it takes.',
'You don’t have to accomplish something impressive every day for me to be proud of you. I appreciate the person you are.',
'I hope you get to see some of the things I see in you: your humor, your kindness, and the way you care about the things you love.',
'Learning something difficult takes time. I hope you give yourself the same patience you’d give someone you care about.',
'I’m glad I get to watch you figure out what you want from life. You don’t need to have it all figured out already.']],
['stress','You’re stressed',[
'I wish I could take a few things off your plate. If there’s something I can actually help with, tell me. I’d love to make your day a little easier.',
'You don’t have to finish everything in one sitting. I hope you get a chance to eat something good and rest for a bit.',
'Imagine us going out for strawberries, lemon desserts and your favorite coffee after everything is done. We can make that happen.',
'I know there are things that matter a lot to you. I’m proud of you for trying, and I hope you remember to take care of yourself too.',
'If you need to vent, I’m here to listen. If you need a distraction, I’m also very qualified at being annoying. Your choice.']],
['proud','You’re proud of yourself',[
'I want to hear what happened! I love getting to see you excited about something you worked for.',
'Whatever you accomplished today, I hope you actually give yourself credit for it. I’m cheering for you.',
'I hope one day I get to hear all about your work as a vet. Until then, I’m happy to celebrate every little step with you.',
'We should celebrate your win with something good to eat. I’m thinking Tru Fru or a lemon dessert, but you get to pick.',
'I love that there’s so much more for me to learn about you and what you can do. I’m excited to see where life takes you.']],
['lonely','You’re feeling lonely',[
'I wish I could sit next to you right now. We wouldn’t even have to do anything. Being together is enough for me.',
'You can reach out to me whenever you want to talk. I might not always be able to answer immediately, but I do want to hear from you.',
'You deserve company that makes you feel comfortable being yourself. I hope I can be part of that for you.',
'Here’s a little reminder from your boyfriend that you’re loved. I hope you also get to spend time with the other people who care about you.',
'Pick one of our pictures and remember the day it came from. I’m grateful for those moments and looking forward to making more with you.']],
['motivation','You need motivation',[
'You don’t need to do everything today. Pick one thing you want to get done and give it a try. I’m rooting for you.',
'I can’t wait to see you do the things you’ve been working toward. I hope you keep making room for the things you genuinely love.',
'Even a little progress counts. Our garden started with a tiny sprout too, and look how much it can grow with time.',
'Imagine how good it’ll feel to finish something you’ve been putting off. And afterward, you deserve a very sweet coffee.',
'I believe in your ability to learn and improve. I hope you keep going at a pace that lets you enjoy your life too.']],
['love','You need to feel loved',[
'I love the little things about you just as much as the big ones. Your coffee order, your love for musicals, and the random things we laugh about together.',
'I’m really glad that out of all the people I could’ve met, I got to meet you. I still think our first movie is the funniest possible beginning.',
'I love spending time with you, even when we don’t have a big plan. Some of my favorite memories are just us being us.',
'I want to keep learning how to love you better, listen to you properly, and show you that you matter to me through what I do.',
'Five months is only a little part of all the memories I hope we get to make. I love you, Stephany. Thank you for being you.']]];
let state={};const key='our-anniversary-letters-v1';try{state=JSON.parse(localStorage.getItem(key)||'{}')||{}}catch{el('storage-note').hidden=false}function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{el('storage-note').hidden=false}}
let active,index;function record(c){return state[c[0]] ||= {remaining:[0,1,2,3,4],seen:[],favorites:[],last:-1}}
function draw(){const r=record(active);if(!r.remaining.length)r.remaining=[0,1,2,3,4];const pool=r.remaining.length>1?r.remaining.filter(i=>i!==r.last):r.remaining;index=pool[Math.floor(Math.random()*pool.length)];r.remaining=r.remaining.filter(i=>i!==index);r.last=index;if(!r.seen.includes(index))r.seen.push(index);save();render()}
function render(){const r=record(active);el('note-title').textContent='Open when '+active[1].toLowerCase()+'.';el('note-text').textContent=active[2][index];el('note-progress').textContent=`${r.seen.length} of 5 letters discovered`;el('note-favorite').textContent=r.favorites.includes(index)?'♥ Saved favorite':'♡ Save favorite';el('note-favorite').setAttribute('aria-pressed',r.favorites.includes(index));el('note-history').replaceChildren();r.seen.forEach(i=>{const b=document.createElement('button');b.className='plain';b.textContent=`Letter ${i+1}${r.favorites.includes(i)?' ♥':''}`;b.onclick=()=>{index=i;render()};el('note-history').append(b)});const paper=el('note-paper');paper.classList.remove('unfold');void paper.offsetWidth;paper.classList.add('unfold')}
categories.forEach(c=>{const b=document.createElement('button');b.className='envelope';b.innerHTML='<span class="envelope-art" aria-hidden="true"><i>♡</i></span>';const label=document.createElement('span');label.textContent=c[1];b.append(label);b.onclick=()=>{active=c;draw();el('note-dialog').showModal()};el('envelopes').append(b)});el('note-close').onclick=()=>el('note-dialog').close();el('note-next').onclick=draw;el('note-favorite').onclick=()=>{const r=record(active);r.favorites=r.favorites.includes(index)?r.favorites.filter(i=>i!==index):[...r.favorites,index];save();render()};
const dayMs=86400000;const start=Date.UTC(2026,5,19);const fmt=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'numeric',day:'numeric'});const monthFmt=new Intl.DateTimeFormat('en-US',{timeZone:'UTC',month:'long',year:'numeric'});function today(){const p=Object.fromEntries(fmt.formatToParts(new Date()).map(x=>[x.type,x.value]));return Date.UTC(+p.year,+p.month-1,+p.day)}function planted(i){return Date.UTC(2026,5+i,19)}const clamp=x=>Math.max(0,Math.min(1,x));function plant(age){const leaf=clamp((age-6)/54),second=clamp((age-30)/35),stem=clamp((age-60)/30);let s='<svg viewBox="0 0 150 205" aria-hidden="true"><path d="M0 165H150V205H0Z" fill="transparent"/><path d="M0 165H150" stroke="#b8aa89"/><path d="M61 169q16 -8 31 0v6q-16 5 -31 0z" fill="#987b55"/>';for(let i=0;i<4;i++)s+=`<path d="M${65+i*7} 174q-5 9 ${i*3-13} ${8+clamp(age/30)*13}" stroke="#987b55" fill="none"/>`;if(age>=7)s+=`<g transform="translate(75 165) scale(${Math.max(.08,leaf)} ${Math.max(.05,leaf)})"><path d="M0 0Q-43 -42 -35 -132Q20 -102 0 0Z" fill="#638b56"/><path d="M0 0Q-10 -68 -35 -132" stroke="#a9bd90" fill="none"/></g>`;if(second>0)s+=`<g transform="translate(75 165) scale(${second})"><path d="M0 0Q-8 -70 38 -106Q49 -48 0 0Z" fill="#83a66b"/><path d="M0 0Q20 -60 38 -106" stroke="#b5c79b" fill="none"/></g>`;if(stem>0){s+=`<g transform="translate(75 165) scale(${stem})"><path d="M0 0Q-17 -143 27 -147Q43 -148 48 -135" fill="none" stroke="#537d49" stroke-width="2"/>`;for(let j=0;j<6;j++){const a=clamp((age-90-j*4)/12),b=clamp((age-120-j*8)/20);if(a>0){const t=.92-j*.13,x=-34*t*(1-t)+27*t*t+15,y=-286*t*(1-t)-147*t*t+12;s+=`<g transform="translate(${x} ${y}) scale(${a})"><path d="M-15 -12Q0 -20 0 0" fill="none" stroke="#537d49"/><ellipse cy="5" rx="4" ry="5" fill="#a8c18d" opacity="${1-b}"/><path d="M0 0Q-5 0 -5 7L-7 10Q-3 13 0 10Q3 13 7 10L5 7Q5 0 0 0Z" fill="#fffdf4" stroke="#b6c5a7" opacity="${b}"/></g>`}}s+='</g>'}return s+'</svg>'}
function stage(a){return a<7?'Newly planted':a<15?'Sprouting':a<31?'First leaf':a<61?'Growing leaves':a<91?'Growing a flower stem':a<121?'Developing buds':a<180?'Beginning to bloom':'In full bloom'}let lastDay;function garden(){const now=today();if(now===lastDay)return;lastDay=now;const days=Math.max(0,Math.floor((now-start)/dayMs));el('garden-days').textContent=`${days} days of us.`;let count=0;while(planted(count)<=now)count++;el('next-plant').textContent=`${Math.ceil((planted(count)-now)/dayMs)} days until our next lily is planted.`;const bed=el('garden-bed');bed.replaceChildren();for(let i=0;i<count;i++){const age=(now-planted(i))/dayMs;const b=document.createElement('button');b.className='garden-plant';b.innerHTML=plant(age);const label=document.createElement('span');label.textContent=i===0?'Our first day':`${i} month${i===1?'':'s'}`;b.append(label);b.setAttribute('aria-label',`${label.textContent}, ${stage(age)}`);if(i>0&&i%12===0)b.classList.add('year-bloom');b.onclick=()=>{el('plant-detail').textContent=`${monthFmt.format(planted(i))} · ${label.textContent} · ${stage(age)} · ${age} days growing.`};bed.append(b)}}garden();setInterval(garden,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)garden()});
})();
