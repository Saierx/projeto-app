// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════
const ENCARNA = [
  {letter:"E",title:"Escuta",icon:"👂",desc:"Ouça mais do que fala. Cada pessoa carrega uma história que pode transformar sua liderança. Escuta ativa não é esperar sua vez de falar — é presença total.",practice:"Faça uma conversa hoje sem interromper nenhuma vez. Anote o que aprendeu sobre a pessoa."},
  {letter:"N",title:"Nomeia",icon:"🏷️",desc:"Dar nome às emoções e situações cria clareza e conexão. Líderes que nomeiam têm coragem real — não fogem do que é difícil, encaram com palavras.",practice:"Identifique 3 emoções que sentiu hoje e nomeie cada uma delas em voz alta ou no diário."},
  {letter:"C",title:"Clareza",icon:"🎯",desc:"Expectativas claras geram resultados claros. Ambiguidade é a inimiga silenciosa da performance. Líderes claros libertam suas equipes para agir com segurança.",practice:"Comunique uma expectativa de forma clara, específica e mensurável para alguém hoje."},
  {letter:"A",title:"Ação",icon:"⚡",desc:"Conhecimento sem ação é ilusão. O líder que age inspira não pelo discurso, mas pelo exemplo. No campo, é a execução que separa os que sabem dos que transformam.",practice:"Execute uma tarefa que você vem adiando. Os primeiros 2 minutos bastam para começar."},
  {letter:"R",title:"Repete",icon:"🔄",desc:"Consistência cria cultura. O que você faz repetidamente define quem você se torna como líder. Excelência não é um evento — é um hábito.",practice:"Repita uma boa prática de liderança que funcionou nos últimos dias. Consistência é caráter."},
  {letter:"N",title:"Não lidera sozinho",icon:"🤝",desc:"Liderança é multiplicação, não acumulação. Desenvolva líderes ao seu redor — não dependentes. Seu maior legado são as pessoas que você formou.",practice:"Delegue uma responsabilidade hoje com contexto claro, confiança genuína e espaço para errar."},
  {letter:"A",title:"Ancora",icon:"⚓",desc:"Sua âncora é sua fé, seus valores e sua família. Lidere a partir de quem você é, não do que você faz. Sem âncora, qualquer vento te move.",practice:"Reserve 10 minutos para oração e reflexão antes de qualquer decisão importante hoje."}
];

const FGV=[
  {author:"Daniel Kahneman",title:"Sistema 1 e Sistema 2",emoji:"🧠",color:"#4F8BF9",summary:"Sistema 1: rápido, intuitivo, automático — reage sem pensar. Sistema 2: lento, racional, deliberado — analisa antes de decidir. Líderes conscientes ativam o Sistema 2 antes de decisões importantes, especialmente sob pressão emocional."},
  {author:"Viktor Frankl",title:"Pausa Estímulo-Resposta",emoji:"⏸️",color:"#E67E22",summary:"Entre o estímulo e a resposta existe um espaço. Nesse espaço está nossa liberdade de escolha. O líder que aprende a pausar antes de reagir tem poder sobre si mesmo — e isso é a base de toda liderança real."},
  {author:"Daniel Goleman",title:"3 Pilares da Empatia",emoji:"💚",color:"#27AE60",summary:"1) Empatia cognitiva: entender a perspectiva do outro. 2) Empatia emocional: sentir genuinamente o que o outro sente. 3) Preocupação empática: querer ajudar de verdade. Líderes empáticos constroem times psicologicamente seguros e de alta performance."},
  {author:"Amy Edmondson",title:"Segurança Psicológica",emoji:"🛡️",color:"#9B59B6",summary:"Ambientes onde as pessoas podem falar, errar e discordar sem medo geram inovação, performance e retenção de talentos. O líder cria ou destrói essa segurança com cada reação. Sua resposta ao erro do liderado define tudo."},
  {author:"Frederick Herzberg",title:"Dois Fatores da Motivação",emoji:"🔥",color:"#E74C3C",summary:"Fatores higiênicos (salário, ambiente) evitam insatisfação mas não motivam por si só. Os verdadeiros motivadores são: reconhecimento, conquista, crescimento, propósito e responsabilidade. Lidere além do salário."},
  {author:"Brené Brown",title:"Vulnerabilidade como Força",emoji:"🌿",color:"#1ABC9C",summary:"Vulnerabilidade não é fraqueza — é a origem de toda coragem. Líderes que mostram humanidade, admitem erros e pedem ajuda criam conexões reais e times que confiam. Perfeição afasta; autenticidade conecta."},
  {author:"Adam Grant",title:"Perguntas Poderosas",emoji:"❓",color:"#F39C12",summary:"Substituir afirmações por perguntas poderosas ativa a autonomia e o pensamento crítico das pessoas. 'O que você acha?' e 'Como você resolveria?' são mais poderosas que 'Faça assim.' Questionar com intenção é liderar com sabedoria."},
  {author:"Appreciative Inquiry",title:"Modelo 4D",emoji:"🔭",color:"#3498DB",summary:"Discovery (descubra o que funciona), Dream (sonhe com o que poderia ser), Design (planeje como chegar lá), Destiny (execute com compromisso). Liderança que começa pelo que é possível, não pelo que está errado."}
];

const IMERSAO=[
  {speaker:"Eduardo Marcelino",role:"Superintendente Nacional de Captação",icon:"👔",color:"#D4A843",insight:"Alta performance em captação começa na mentalidade antes da técnica. O concierge que acredita no produto que vende transmite isso sem precisar de script — o hóspede sente autenticidade."},
  {speaker:"Alexandre",role:"Diretor de Hospitalidade",icon:"🏨",color:"#4F8BF9",insight:"Hospitalidade não é um serviço — é uma experiência emocional. O hóspede não lembra o que você disse; lembra como você o fez sentir. Cada interação é uma oportunidade de criar memória."},
  {speaker:"Átila",role:"Fundador e Diretor GAV",icon:"👑",color:"#27AE60",insight:"Cultura de excelência não acontece por acaso. É construída diariamente, nas pequenas atitudes, por líderes que vivem os valores antes de exigi-los. Você não pede o que não pratica."},
  {speaker:"Geraldo Rufino",role:"Palestrante Convidado",icon:"💥",color:"#E74C3C",insight:"Dificuldade não é punição — é preparação. Todo grande líder foi formado na pressão, não na confortabilidade. Abrace o processo. Cada obstáculo é uma aula que você pediu."},
  {speaker:"Welison",role:"Coordenador Regional Sul",icon:"🌐",color:"#9B59B6",insight:"Times de alta performance não são formados por talentos individuais, mas por pessoas comprometidas com um propósito coletivo. Multiplique a cultura antes de cobrar a meta."}
];

const TREINOS=[
  {day:"Segunda",theme:"💪 Força + Visão",physical:["Flexão 3×15","Agachamento 3×20","Prancha 3×45s","Afundo 3×12 cada perna","Polichinelo 3×30"],leadership:["Leia 1 princípio ENCARNA em voz alta","Escreva sua meta principal do dia","Check-in com 1 liderado"]},
  {day:"Terça",theme:"🏃 Cardio + Comunicação",physical:["Caminhada ou corrida 30min","Jumping Jack 3×30","Agachamento sumô 3×15","Abdominais 3×20"],leadership:["Escuta ativa em 2 conversas (sem interromper)","Feedback positivo para 1 pessoa","Revisão das metas semanais"]},
  {day:"Quarta",theme:"🧘 Flexibilidade + Reflexão",physical:["Alongamento completo 20min","Respiração 4-7-8 (3 ciclos)","Yoga básico 15min","Caminhada leve 20min"],leadership:["Journaling: 3 aprendizados da semana","Revisão do ENCARNA completo","Oração e meditação 15min"]},
  {day:"Quinta",theme:"💪 Força + Delegação",physical:["Flexão 4×12","Burpee 3×10","Prancha lateral 3×30s cada lado","Polichinelo 3×30","Elevação de quadril 3×15"],leadership:["Delegue 1 tarefa com expectativa clara","Reunião de desenvolvimento com liderado","Estude 1 framework FGV"]},
  {day:"Sexta",theme:"🎯 HIIT + Conquistas",physical:["Treino HIIT 20min","Abdominais 3×20","Agachamento com salto 3×12","Corrida estacionária 3×1min"],leadership:["Liste 5 conquistas desta semana","Planejamento da próxima semana (30min)","Mensagem de reconhecimento ao time"]},
  {day:"Sábado",theme:"🌿 Recuperação + Família",physical:["Caminhada leve 45min ao ar livre","Alongamento completo 20min","Respiração consciente 10min"],leadership:["Tempo com família sem celular (2h mínimo)","Leitura de crescimento pessoal 30min","Gratidão: escreva 5 coisas pelo qual é grato"]},
  {day:"Domingo",theme:"⚓ Âncora + Renovação",physical:["Descanso ativo — corpo precisa recuperar","Respiração e meditação 20min","Caminhada contemplativa 30min"],leadership:["Culto e devocional — recarregue espiritualmente","Revisão das metas mensais","Defina 1 intenção para a semana que vem"]}
];

const CHECKLIST=[
  {text:"☀️ Check-in emocional da equipe",tip:"Como seu time está hoje? Pergunte antes de cobrar."},
  {text:"📋 Revisão das metas do dia",tip:"O que precisa ser feito hoje para a semana fechar bem?"},
  {text:"🗣️ Briefing de 10min com o time",tip:"Alinha, motiva e direciona. 10 minutos que valem o dia."},
  {text:"🏨 Rapport com hóspedes (3 interações)",tip:"Pelo menos 3 interações de qualidade. Escuta ativa."},
  {text:"📊 Acompanhamento de indicadores",tip:"O que os números estão dizendo? Leia antes de reagir."},
  {text:"🌟 Reconheça 1 pessoa da equipe",tip:"Específico, verdadeiro e no momento certo."},
  {text:"📝 Registre o aprendizado do dia",tip:"O que o dia te ensinou que você vai repetir ou evitar?"}
];

const CAPTACAO=[
  {step:1,title:"Rapport Genuíno",icon:"😊",desc:"Sorria, use o nome do hóspede, mostre interesse real. Pessoas compram de quem gostam e confiam."},
  {step:2,title:"Qualificação Inteligente",icon:"🔍",desc:"Pergunte sobre família, planos de férias, destinos preferidos. Descubra o que ele valoriza antes de falar de produto."},
  {step:3,title:"Identificação do Desejo",icon:"🎯",desc:"Encontre o que ele mais quer: família, economia, experiência, status, legado. O desejo é a chave da decisão."},
  {step:4,title:"Apresentação de Valor",icon:"💎",desc:"Conecte os benefícios GAV com o que ELE valoriza. Não venda produto — resolva o problema emocional dele."},
  {step:5,title:"Prova Social",icon:"⭐",desc:"Compartilhe histórias reais de famílias que transformaram suas férias com GAV. Narrativa é mais persuasiva que dados."},
  {step:6,title:"Urgência com Ética",icon:"⏰",desc:"Apresente condições reais de forma honesta. Urgência verdadeira vende; pressão artificial repele e quebra confiança."},
  {step:7,title:"Convite com Entusiasmo",icon:"🎉",desc:"Convide para a visita ao resort com energia genuína. É uma experiência de vida — você está convidando para algo especial."}
];

const BIBLICOS=[
  {name:"Jesus",ref:"João 13:14-15",icon:"✝️",lesson:"Serviu primeiro. Lavou os pés dos discípulos antes de qualquer ensinamento. Liderança que serve transforma e permanece — não pela posição, mas pelo exemplo.",verse:"Se eu, o Senhor e o Mestre, lavei os vossos pés, vós também deveis lavar os pés uns dos outros."},
  {name:"Davi",ref:"1 Samuel 17",icon:"👑",lesson:"Coragem antes da capacidade. Davi não enfrentou Golias por ser mais forte — mas por confiar no Senhor acima de qualquer gigante. Fé que age é liderança.",verse:"Você vem a mim com espada e lança; mas eu venho em nome do SENHOR dos Exércitos."},
  {name:"Neemias",ref:"Neemias 2",icon:"🏛️",lesson:"Visão + Plano + Ação. Neemias não apenas orou — ele planejou, pediu recursos específicos e liderou com estratégia e fé. Oração sem plano é desejo. Plano sem oração é presunção.",verse:"Venha, construamos o muro de Jerusalém, e não seremos mais motivo de vergonha."},
  {name:"Paulo",ref:"Filipenses 4:13",icon:"⚓",lesson:"Contentamento não é conformismo — é força interior inabalável. Paulo liderou com excelência tanto na abundância quanto na escassez. Liderança de dentro para fora.",verse:"Aprendi a estar contente em qualquer estado. Posso fazer tudo por meio de Cristo que me fortalece."}
];

const VERSES=[
  {ref:"Provérbios 16:3",text:"Entrega ao Senhor tudo o que você faz e seus planos serão bem-sucedidos."},
  {ref:"Josué 1:9",text:"Seja forte e corajoso! Não se apavore, pois o Senhor seu Deus está com você onde quer que vá."},
  {ref:"Filipenses 4:13",text:"Posso fazer tudo por meio de Cristo, que me fortalece."},
  {ref:"Jeremias 29:11",text:"Pois eu sei os planos que tenho para você — planos de prosperar, de dar esperança e um futuro."},
  {ref:"Salmos 37:4",text:"Deleita-te no Senhor, e ele te concederá os desejos do teu coração."},
  {ref:"Colossenses 3:23",text:"Tudo o que fizerem, façam de todo o coração, como se estivessem trabalhando para o Senhor."},
  {ref:"Isaías 41:10",text:"Não tema, pois estou com você; não se desanime, pois eu sou o seu Deus. Eu o fortalecerei e o ajudarei."}
];

const LEVELS=[
  {min:0,max:6,name:"Semente",icon:"🌱",desc:"Primeiros passos da jornada. O solo está sendo preparado."},
  {min:7,max:13,name:"Raízes",icon:"🌿",desc:"Fundações firmes se formam. Consistência é seu superpoder agora."},
  {min:14,max:20,name:"Tronco",icon:"🌳",desc:"Caráter sólido e crescente. Você está se tornando referência."},
  {min:21,max:29,name:"Ramos",icon:"🌲",desc:"Sua influência se expande. Outros crescem por causa de você."},
  {min:30,max:999,name:"Legado",icon:"👑",desc:"30+ dias de consistência. Você não segue um método — você É o método."}
];

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
const today = new Date();
const dateKey = today.toISOString().split('T')[0];
const dayIdx = today.getDay() === 0 ? 6 : today.getDay() - 1;
const todayWorkout = TREINOS[dayIdx];
const todayVerse = VERSES[today.getDate() % 7];
const todayEncarna = ENCARNA[today.getDate() % 7];

let state = {
  tab: 'home',
  subTab: 'encarna',
  users: [],
  currentUser: null,
  habits: {},
  workout: {},
  captacao: Array(7).fill(false),
  reflection: '',
  showAddUser: false,
  expandFGV: null,
  expandEncarna: null,
  expandImersao: null,
  expandBiblico: null,
  newUser: {name:'',weight:'',height:'',age:'',role:''},
  streakData: {},
  weekHistory: {}
};

// ═══════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════
function save(key, val) { try { localStorage.setItem('legado_'+key, JSON.stringify(val)); } catch(e){} }
function load(key, def) { try { const v = localStorage.getItem('legado_'+key); return v ? JSON.parse(v) : def; } catch(e){ return def; } }

function loadAll() {
  state.users = load('users', []);
  state.currentUser = load('current_user', null);
  state.habits = load('habits_'+dateKey, {});
  state.workout = load('workout_'+dateKey, {});
  state.captacao = load('captacao_'+dateKey, Array(7).fill(false));
  state.reflection = load('reflection_'+dateKey, '');
  state.streakData = load('streak_data', {});
  state.weekHistory = load('week_history', {});
}

function saveHabits() { save('habits_'+dateKey, state.habits); updateStreak(); }
function saveWorkout() { save('workout_'+dateKey, state.workout); }
function saveCaptacao() { save('captacao_'+dateKey, state.captacao); }
function saveReflection() { save('reflection_'+dateKey, state.reflection); }
function saveUsers() { save('users', state.users); }
function saveCurrentUser() { save('current_user', state.currentUser); }

function updateStreak() {
  const doneCount = CHECKLIST.filter((_,i) => state.habits[i]).length;
  const completed = doneCount >= 4; // 4+ tarefas = dia válido
  const sd = state.streakData;
  if (completed) {
    if (!sd[dateKey]) {
      sd[dateKey] = true;
      // update week history
      state.weekHistory[dateKey] = Math.round((doneCount/CHECKLIST.length)*100);
      save('week_history', state.weekHistory);
    }
  }
  save('streak_data', sd);
}

function getStreak() {
  let streak = 0;
  const d = new Date();
  while(true) {
    const k = d.toISOString().split('T')[0];
    if (state.streakData[k]) { streak++; d.setDate(d.getDate()-1); }
    else break;
    if (streak > 365) break;
  }
  return streak;
}

function getTotalDays() { return Object.keys(state.streakData).length; }

function getLevel() {
  const total = getTotalDays();
  return LEVELS.find(l => total >= l.min && total <= l.max) || LEVELS[0];
}

function calcBMI(w,h) { const hm=h/100; return (w/(hm*hm)).toFixed(1); }
function getBMIInfo(b) {
  const bv=parseFloat(b);
  if(bv<18.5) return {label:'Abaixo do peso',color:'#3498DB',tip:'Aumente ingestão calórica e proteínas. Considere avaliação nutricional.'};
  if(bv<25) return {label:'Peso ideal ✓',color:'#27AE60',tip:'Excelente! Mantenha com treinos regulares e alimentação equilibrada.'};
  if(bv<30) return {label:'Sobrepeso',color:'#F39C12',tip:'Ajustes graduais na alimentação e atividade física farão grande diferença.'};
  return {label:'Obesidade',color:'#E74C3C',tip:'Consulte um profissional de saúde para plano personalizado. Você pode mudar.'};
}

function habitsDone() { return CHECKLIST.filter((_,i)=>state.habits[i]).length; }
function workoutDoneCount() { return Object.values(state.workout).filter(Boolean).length; }
function workoutTotal() { return todayWorkout.physical.length + todayWorkout.leadership.length; }
function captacaoDone() { return state.captacao.filter(Boolean).length; }

function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

// ═══════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════
function render() {
  renderHeader();
  renderTabBar();
  const m = document.getElementById('main-content');
  switch(state.tab) {
    case 'home': m.innerHTML = renderHome(); break;
    case 'perfil': m.innerHTML = renderPerfil(); break;
    case 'treinos': m.innerHTML = renderTreinos(); break;
    case 'lideranca': m.innerHTML = renderLideranca(); break;
    case 'trabalho': m.innerHTML = renderTrabalho(); break;
    case 'ancora': m.innerHTML = renderAncora(); break;
  }
  bindEvents();
  m.scrollTop = 0;
}

function renderHeader() {
  const d = document.getElementById('header-date');
  d.textContent = today.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});

  const r = document.getElementById('header-right');
  if (state.currentUser) {
    const bmi = calcBMI(state.currentUser.weight, state.currentUser.height);
    const bi = getBMIInfo(bmi);
    r.innerHTML = `<div class="user-chip" onclick="setTab('perfil')">
      <div class="user-chip-name">${state.currentUser.name.split(' ')[0]}</div>
      <div class="user-chip-imc" style="color:${bi.color}">IMC ${bmi} · ${bi.label}</div>
    </div>`;
  } else {
    r.innerHTML = `<button class="btn-sm" onclick="setTab('perfil');state.showAddUser=true;render()">+ Criar perfil</button>`;
  }

  const pb = document.getElementById('progress-bars');
  if (state.currentUser) {
    pb.style.display = 'flex';
    const bars = [
      {label:'Tarefas',done:habitsDone(),total:CHECKLIST.length,color:'#27AE60'},
      {label:'Treino',done:workoutDoneCount(),total:workoutTotal(),color:'#4F8BF9'},
      {label:'Captação',done:captacaoDone(),total:7,color:'#D4A843'}
    ];
    pb.innerHTML = bars.map(b=>`<div class="pb-wrap">
      <div class="pb-label"><span>${b.label}</span><span>${b.done}/${b.total}</span></div>
      <div class="pb-track"><div class="pb-fill" style="width:${Math.round((b.done/b.total)*100)}%;background:${b.color}"></div></div>
    </div>`).join('');
  } else { pb.style.display='none'; }
}

function renderTabBar() {
  const tabs = [
    {id:'home',icon:'🏠',label:'Início'},
    {id:'perfil',icon:'👤',label:'Perfil'},
    {id:'treinos',icon:'💪',label:'Treinos'},
    {id:'lideranca',icon:'🧠',label:'Estudos'},
    {id:'trabalho',icon:'🏨',label:'Trabalho'},
    {id:'ancora',icon:'⚓',label:'Âncora'}
  ];
  document.getElementById('tab-bar').innerHTML = tabs.map(t=>
    `<div class="tab-item ${state.tab===t.id?'active':''}" onclick="setTab('${t.id}')">
      <div class="tab-icon">${t.icon}</div>
      <div class="tab-label">${t.label}</div>
    </div>`
  ).join('');
}

// ═══════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════
function renderHome() {
  const streak = getStreak();
  const level = getLevel();
  const total = getTotalDays();

  let userCard = '';
  if (state.currentUser) {
    const bmi = calcBMI(state.currentUser.weight, state.currentUser.height);
    const bi = getBMIInfo(bmi);
    userCard = `<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div>
          <div class="small">Bem-vindo ao seu dia,</div>
          <div style="font-family:'Playfair Display',serif;font-size:24px;color:var(--gold-lt);font-weight:700">${state.currentUser.name.split(' ')[0]}</div>
          ${state.currentUser.role?`<div style="font-size:12px;color:var(--muted);margin-top:2px">${state.currentUser.role}</div>`:''}
        </div>
        <div style="text-align:center;background:rgba(255,255,255,.04);border-radius:12px;padding:10px 14px">
          <div style="font-size:26px;font-weight:900;color:${bi.color};font-family:sans-serif;line-height:1">${bmi}</div>
          <div style="font-size:10px;color:${bi.color};font-family:sans-serif">IMC</div>
          <div style="font-size:10px;color:var(--dim);font-family:sans-serif">${bi.label}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <div class="streak-badge">🔥 ${streak} dia${streak!==1?'s':''} seguido${streak!==1?'s':''}</div>
        <div class="level-badge">${level.icon} ${level.name} · ${total} dias</div>
      </div>
    </div>`;

    // Level progress
    const nextLevel = LEVELS[LEVELS.indexOf(level)+1];
    if (nextLevel) {
      const pct = Math.round(((total - level.min)/(nextLevel.min - level.min))*100);
      userCard += `<div class="card" style="padding:12px 14px">
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:6px">
          <span>${level.icon} ${level.name}</span><span>${nextLevel.icon} ${nextLevel.name} em ${nextLevel.min - total} dias</span>
        </div>
        <div class="pb-track"><div class="pb-fill" style="width:${pct}%;background:linear-gradient(90deg,var(--gold),var(--gold-dk))"></div></div>
        <div style="font-size:11px;color:var(--dim);margin-top:5px">${level.desc}</div>
      </div>`;
    }
  } else {
    userCard = `<div class="card" style="text-align:center;padding:24px 16px">
      <div style="font-size:36px;margin-bottom:10px">👤</div>
      <div class="h3">Crie seu perfil primeiro</div>
      <p class="small" style="margin:8px 0 16px">Personalize sua jornada com seus dados.</p>
      <button class="btn" onclick="setTab('perfil');state.showAddUser=true;render()">Criar meu perfil →</button>
    </div>`;
  }

  return `<div class="section">
    <div class="card-gold">
      <span class="label">✦ Palavra do Dia · ${todayVerse.ref}</span>
      <p class="verse-quote">"${todayVerse.text}"</p>
    </div>
    ${userCard}
    <div class="card card-press" onclick="setTab('lideranca');state.subTab='encarna';render()">
      <span class="label">🎯 ENCARNA do Dia</span>
      <div style="display:flex;gap:14px;align-items:flex-start">
        <div class="encarna-letter">${todayEncarna.letter}</div>
        <div style="flex:1">
          <div style="font-family:'Playfair Display',serif;font-size:17px;color:var(--gold-lt);margin-bottom:4px">${todayEncarna.title} ${todayEncarna.icon}</div>
          <p class="small">${todayEncarna.desc}</p>
          <div style="margin-top:10px;background:rgba(212,168,67,.07);border-radius:8px;padding:8px 10px;border:1px solid rgba(212,168,67,.14)">
            <span style="font-size:11px;color:var(--gold);font-weight:700">Prática: </span>
            <span style="font-size:12px;color:#C8C0B0;font-family:sans-serif">${todayEncarna.practice}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-press" onclick="setTab('treinos');render()">
      <span class="label">💪 Treino de Hoje — ${todayWorkout.day}</span>
      <div style="font-size:13px;color:var(--gold);margin-bottom:8px">${todayWorkout.theme}</div>
      ${todayWorkout.physical.slice(0,3).map(ex=>`<div style="font-size:13px;color:#C8C0B0;font-family:sans-serif;padding:3px 0;border-bottom:1px solid rgba(255,255,255,.04)">· ${ex}</div>`).join('')}
      <div style="font-size:12px;color:var(--dim);font-family:sans-serif;margin-top:6px">+${todayWorkout.physical.length-3+todayWorkout.leadership.length} mais · Toque para ver →</div>
    </div>
    <div class="card">
      <span class="label">🏆 Valores GAV — Viva hoje</span>
      <div>${['Protagonismo','Impacto+','Otimismo','Empreendedorismo','Compromisso','Multiplicar Felicidade'].map(v=>`<span class="chip">${v}</span>`).join('')}</div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// PERFIL
// ═══════════════════════════════════════════════
function renderPerfil() {
  const usersHTML = state.users.map((u,ui)=>{
    const bmi = calcBMI(u.weight, u.height);
    const bi = getBMIInfo(bmi);
    const isActive = state.currentUser?.id === u.id;
    const bmiPct = Math.min(94, Math.max(2, ((parseFloat(bmi)-15)/25)*100));
    const uStreak = '—'; // Each user's streak is device-based
    return `<div class="card card-press ${isActive?'':''}` + `" style="border-color:${isActive?'rgba(212,168,67,.45)':'rgba(255,255,255,.07)'};cursor:pointer" onclick="selectUser(${ui})">
      <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
        <div style="width:46px;height:46px;border-radius:23px;background:${isActive?'rgba(212,168,67,.15)':'rgba(255,255,255,.05)'};border:2px solid ${isActive?'#D4A843':'rgba(255,255,255,.1)'};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${isActive?'⭐':'👤'}</div>
        <div style="flex:1">
          <div style="font-family:'Playfair Display',serif;font-size:17px;color:${isActive?'var(--gold-lt)':'var(--text)'}">${u.name}</div>
          <div style="font-size:12px;color:var(--muted);font-family:sans-serif">${u.age} anos · ${u.weight}kg · ${u.height}cm${u.role?` · ${u.role}`:''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:24px;font-weight:900;color:${bi.color};font-family:sans-serif;line-height:1">${bmi}</div>
          <div style="font-size:10px;color:${bi.color};font-family:sans-serif">IMC</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-size:12px;color:${bi.color};font-family:sans-serif;font-weight:600">${bi.label}</span>
        ${isActive?'<span style="font-size:11px;color:var(--gold);font-family:sans-serif">✓ Perfil ativo</span>':''}
      </div>
      <div class="bmi-scale">
        <div class="bmi-dot" style="left:${bmiPct}%;background:${bi.color};box-shadow:0 0 8px ${bi.color}88"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--dim);font-family:sans-serif;margin-bottom:8px">
        <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 10px;margin-bottom:10px">
        <span style="font-size:11px;color:${bi.color};font-family:sans-serif;font-weight:700">💡 </span>
        <span style="font-size:12px;color:#C8C0B0;font-family:sans-serif">${bi.tip}</span>
      </div>
      <div style="display:flex;justify-content:flex-end">
        <button class="btn-danger" onclick="event.stopPropagation();removeUser(${ui})">Remover</button>
      </div>
    </div>`;
  }).join('');

  let addForm = '';
  if (state.showAddUser) {
    const nw = state.newUser;
    const previewBMI = nw.weight && nw.height && parseFloat(nw.height)>0 ? calcBMI(parseFloat(nw.weight), parseFloat(nw.height)) : null;
    addForm = `<div class="card-gold">
      <div class="h3">✦ Novo Participante</div>
      <div style="margin-top:12px">
        ${[
          {k:'name',label:'Nome completo',type:'text',ph:'Ex: Maria Silva'},
          {k:'role',label:'Cargo / Função',type:'text',ph:'Ex: Family Concierge, Gerente...'},
          {k:'age',label:'Idade (anos)',type:'number',ph:'Ex: 35'},
          {k:'weight',label:'Peso (kg)',type:'number',ph:'Ex: 75.5'},
          {k:'height',label:'Altura (cm)',type:'number',ph:'Ex: 175'}
        ].map(f=>`<div class="field-wrap">
          <label class="field-label">${f.label}</label>
          <input type="${f.type}" placeholder="${f.ph}" value="${state.newUser[f.k]||''}" oninput="state.newUser['${f.k}']=this.value;renderAddPreview()">
        </div>`).join('')}
        <div id="add-preview"></div>
        <button class="btn" style="margin-top:4px" onclick="addUser()">Adicionar participante ✓</button>
        <button class="btn-cancel" onclick="state.showAddUser=false;render()">Cancelar</button>
      </div>
    </div>`;
  }

  return `<div class="section">
    <div class="h2">Participantes</div>
    <p class="small" style="margin-bottom:16px">Cada pessoa tem IMC, nível e histórico personalizado.</p>
    ${usersHTML}
    ${state.showAddUser ? addForm : `<button class="btn" onclick="state.showAddUser=true;render()">+ Adicionar novo participante</button>`}
  </div>`;
}

// ═══════════════════════════════════════════════
// TREINOS
// ═══════════════════════════════════════════════
function renderTreinos() {
  // Weekly mini-chart
  const last7 = [];
  for(let i=6;i>=0;i--) {
    const d=new Date(); d.setDate(d.getDate()-i);
    const k=d.toISOString().split('T')[0];
    last7.push({day:d.toLocaleDateString('pt-BR',{weekday:'short'}).slice(0,3),pct:state.weekHistory[k]||0,isToday:k===dateKey});
  }
  const chartHTML = `<div class="card-gold">
    <span class="label">📊 Histórico 7 Dias</span>
    <div style="display:flex;gap:4px;align-items:flex-end;height:70px">
      ${last7.map(d=>`<div class="week-bar">
        <div class="week-bar-pct">${d.pct?d.pct+'%':''}</div>
        <div class="week-bar-track">
          <div class="week-bar-fill" style="height:${d.pct}%;background:${d.isToday?'var(--gold)':'rgba(212,168,67,.4)'}"></div>
        </div>
        <div class="week-bar-label" style="color:${d.isToday?'var(--gold)':'var(--dim)'}">${d.day}</div>
      </div>`).join('')}
    </div>
  </div>`;

  const workoutsHTML = TREINOS.map((wk,wi)=>{
    const isToday = wi===dayIdx;
    const allItems = [...wk.physical.map((e,ei)=>({key:`p-${wi}-${ei}`,text:e,type:'physical'})), ...wk.leadership.map((e,ei)=>({key:`l-${wi}-${ei}`,text:e,type:'leadership'}))];
    const doneCnt = isToday ? allItems.filter(it=>state.workout[it.key]).length : 0;
    return `<div class="card" style="border-color:${isToday?'rgba(212,168,67,.4)':'rgba(255,255,255,.05)'}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:${isToday?14:6}px">
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:16px;color:${isToday?'var(--gold-lt)':'#C8C0B0'}">${wk.day}</div>
          <div style="font-size:12px;color:var(--muted);font-family:sans-serif">${wk.theme}</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          ${isToday?'<span style="background:rgba(212,168,67,.15);color:var(--gold);border:1px solid rgba(212,168,67,.3);border-radius:20px;padding:3px 10px;font-size:11px;font-family:sans-serif">HOJE</span>':''}
          ${isToday&&doneCnt>0?`<span style="font-size:12px;color:var(--green);font-family:sans-serif">${doneCnt}/${allItems.length}</span>`:''}
        </div>
      </div>
      ${isToday ? `
        <div style="font-size:11px;color:#4F8BF9;font-family:sans-serif;letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px">Físico</div>
        ${wk.physical.map((ex,ei)=>{const k=`p-${wi}-${ei}`;const done=!!state.workout[k];return `<div class="check-row${done?' done':''}" onclick="toggleWorkout('${k}')">
          <div class="check-box" style="border:${done?'none':'2px solid #4F8BF9'};background:${done?'#4F8BF9':'transparent'}">${done?'✓':''}</div>
          <span style="font-size:13px;color:${done?'#4F8BF9':'#C8C0B0'};font-family:sans-serif;text-decoration:${done?'line-through':'none'}">${ex}</span>
        </div>`;}).join('')}
        <div style="font-size:11px;color:var(--gold);font-family:sans-serif;letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px;margin-top:12px">Liderança</div>
        ${wk.leadership.map((ex,ei)=>{const k=`l-${wi}-${ei}`;const done=!!state.workout[k];return `<div class="check-row${done?' done-gold':''}" onclick="toggleWorkout('${k}')">
          <div class="check-box" style="border:${done?'none':'2px solid var(--gold)'};background:${done?'var(--gold)':'transparent'}">${done?'✓':''}</div>
          <span style="font-size:13px;color:${done?'var(--gold)':'#C8C0B0'};font-family:sans-serif;text-decoration:${done?'line-through':'none'}">${ex}</span>
        </div>`;}).join('')}
      ` : `<div style="display:flex;gap:6px;flex-wrap:wrap">
        ${wk.physical.slice(0,2).map(ex=>`<span style="font-size:11px;color:var(--dim);font-family:sans-serif;background:rgba(255,255,255,.03);padding:3px 8px;border-radius:4px">${ex}</span>`).join('')}
        <span style="font-size:11px;color:var(--dim);font-family:sans-serif">+${wk.physical.length-2+wk.leadership.length}</span>
      </div>`}
    </div>`;
  }).join('');

  return `<div class="section">
    <div class="h2">Plano Semanal</div>
    <p class="small" style="margin-bottom:16px">Corpo forte, mente clara, liderança consistente.</p>
    ${chartHTML}
    ${workoutsHTML}
  </div>`;
}

// ═══════════════════════════════════════════════
// LIDERANÇA
// ═══════════════════════════════════════════════
function renderLideranca() {
  const subBar = `<div class="subtab-bar">
    ${['encarna','fgv','imersao'].map((s,i)=>`<button class="subtab${state.subTab===s?' active':''}" onclick="state.subTab='${s}';render()">${['ENCARNA','FGV','Imersão GAV'][i]}</button>`).join('')}
  </div>`;

  let content = '';

  if (state.subTab==='encarna') {
    content = `<div class="card-gold">
      <p style="font-size:13px;color:#C8C0B0;font-family:sans-serif;line-height:1.6;font-style:italic">"O Método ENCARNA não é uma técnica — é uma forma de ser. 7 princípios para liderar a partir de quem você é, não apenas do que você sabe."</p>
    </div>
    ${ENCARNA.map((p,i)=>{
      const open = state.expandEncarna===i;
      return `<div class="card" style="border-color:${open?'rgba(212,168,67,.4)':'rgba(255,255,255,.06)'};cursor:pointer" onclick="state.expandEncarna=${open?null:i};render()">
        <div class="accordion-trigger">
          <div style="display:flex;align-items:center;gap:12px;flex:1">
            <div class="encarna-letter" style="color:${open?'var(--gold)':'#5A4A1C'}">${p.letter}</div>
            <div>
              <div style="font-family:'Playfair Display',serif;font-size:16px;color:${open?'var(--gold-lt)':'var(--text)'}">${p.title} ${p.icon}</div>
              ${!open?'<div class="caption">Toque para expandir</div>':''}
            </div>
          </div>
          <div style="color:var(--dim);font-size:12px;margin-left:8px;flex-shrink:0">${open?'▲':'▼'}</div>
        </div>
        ${open?`<div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(212,168,67,.15)">
          <p style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:12px">${p.desc}</p>
          <div style="background:rgba(212,168,67,.07);border-radius:10px;padding:12px 14px;border:1px solid rgba(212,168,67,.15)">
            <div style="font-size:11px;color:var(--gold);font-weight:700;margin-bottom:5px">⚡ Prática do dia:</div>
            <div style="font-size:13px;color:#C8C0B0;font-family:sans-serif;line-height:1.6">${p.practice}</div>
          </div>
        </div>`:''}
      </div>`;
    }).join('')}`;
  }

  if (state.subTab==='fgv') {
    content = `<div class="card-gold">
      <p style="font-size:13px;color:#C8C0B0;font-family:sans-serif;line-height:1.6;font-style:italic">"FGV In Company — Prof. Marcos Bidart. Conhecimento que transforma quando aplicado no campo, não apenas no papel."</p>
    </div>
    ${FGV.map((f,i)=>{
      const open = state.expandFGV===i;
      return `<div class="card" style="border-left:3px solid ${f.color};cursor:pointer" onclick="state.expandFGV=${open?null:i};render()">
        <div class="accordion-trigger">
          <div style="flex:1">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px"><span style="font-size:16px">${f.emoji}</span><span style="font-size:11px;color:${f.color};font-family:sans-serif">${f.author}</span></div>
            <div style="font-family:'Playfair Display',serif;font-size:15px;color:var(--text)">${f.title}</div>
          </div>
          <div style="color:var(--dim);font-size:12px;margin-left:8px;flex-shrink:0">${open?'▲':'▼'}</div>
        </div>
        ${open?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.05)">
          <p style="font-size:14px;color:var(--muted);line-height:1.7">${f.summary}</p>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
            <span style="background:${f.color}18;border:1px solid ${f.color}30;color:${f.color};border-radius:6px;padding:4px 10px;font-size:11px;font-family:sans-serif">No campo hoje →</span>
            <span style="background:rgba(255,255,255,.04);color:var(--muted);border-radius:6px;padding:4px 10px;font-size:11px;font-family:sans-serif;border:1px solid rgba(255,255,255,.06)">Aplique no ENCARNA</span>
          </div>
        </div>`:''}
      </div>`;
    }).join('')}`;
  }

  if (state.subTab==='imersao') {
    content = `<div class="card-gold">
      <p style="font-size:13px;color:#C8C0B0;font-family:sans-serif;line-height:1.6;font-style:italic">"Imersão de Liderança GAV — insights dos maiores líderes da empresa. O que eles viveram, você aplica."</p>
    </div>
    ${IMERSAO.map((ins,i)=>{
      const open = state.expandImersao===i;
      return `<div class="card" style="border-color:${open?ins.color+'44':'rgba(255,255,255,.07)'};cursor:pointer" onclick="state.expandImersao=${open?null:i};render()">
        <div class="accordion-trigger">
          <div style="display:flex;gap:12px;align-items:flex-start;flex:1">
            <div style="width:40px;height:40px;border-radius:20px;background:${ins.color}18;border:1.5px solid ${ins.color}44;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${ins.icon}</div>
            <div style="flex:1">
              <div style="font-family:'Playfair Display',serif;font-size:15px;color:${open?'var(--gold-lt)':'var(--text)'}">${ins.speaker}</div>
              <div style="font-size:11px;color:${ins.color};font-family:sans-serif">${ins.role}</div>
            </div>
          </div>
          <div style="color:var(--dim);font-size:12px;margin-left:8px;flex-shrink:0">${open?'▲':'▼'}</div>
        </div>
        ${open?`<div style="margin-top:14px;padding-top:14px;border-top:1px solid ${ins.color}22">
          <div style="border-left:3px solid ${ins.color};padding-left:12px;margin-bottom:12px">
            <p style="font-size:14px;color:var(--text);font-family:'Playfair Display',serif;font-style:italic;line-height:1.7">"${ins.insight}"</p>
          </div>
          <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 12px">
            <div style="font-size:11px;color:${ins.color};margin-bottom:4px;font-family:sans-serif">Como aplicar hoje:</div>
            <div class="caption">Conecte esse insight ao seu princípio ENCARNA do dia. O que ele te ensina sobre a sua liderança agora?</div>
          </div>
        </div>`:''}
      </div>`;
    }).join('')}`;
  }

  return `<div class="section"><div class="h2">Estudos de Liderança</div>${subBar}${content}</div>`;
}

// ═══════════════════════════════════════════════
// TRABALHO
// ═══════════════════════════════════════════════
function renderTrabalho() {
  const hd = habitsDone();
  const checkHTML = CHECKLIST.map((item,i)=>{
    const done = !!state.habits[i];
    return `<div class="check-row${done?' done':''}" onclick="toggleHabit(${i})">
      <div class="check-box" style="border:${done?'none':'2px solid #27AE60'};background:${done?'#27AE60':'transparent'}">${done?'✓':''}</div>
      <div style="flex:1">
        <div style="font-size:13px;color:${done?'#27AE60':'#C8C0B0'};font-family:sans-serif;text-decoration:${done?'line-through':'none'}">${item.text}</div>
        ${!done?`<div class="caption" style="margin-top:2px">${item.tip}</div>`:''}
      </div>
    </div>`;
  }).join('');

  const captHTML = CAPTACAO.map((step,i)=>{
    const done = state.captacao[i];
    return `<div style="display:flex;gap:10px;margin-bottom:10px;cursor:pointer" onclick="toggleCaptacao(${i})">
      <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
        <div class="timeline-dot" style="background:${done?'var(--gold)':'rgba(212,168,67,.1)'};border:${done?'none':'2px solid rgba(212,168,67,.3)'}">
          ${done?`<span style="color:#080d1a;font-size:11px">✓</span>`:`<span style="color:var(--gold)">${step.step}</span>`}
        </div>
        ${i<6?'<div class="timeline-line"></div>':''}
      </div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span style="font-size:14px">${step.icon}</span>
          <div style="font-family:'Playfair Display',serif;font-size:14px;color:${done?'var(--gold)':'var(--text)'}">${step.title}</div>
        </div>
        <div class="small" style="font-size:12px">${step.desc}</div>
      </div>
    </div>`;
  }).join('');

  const cd = captacaoDone();

  return `<div class="section">
    <div class="h2">Ferramentas GAV</div>
    <p class="small" style="margin-bottom:16px">Concierge de Alta Performance · Captação · Liderança</p>
    <div class="card-gold">
      <span class="label">✅ Checklist Diário do Líder</span>
      ${checkHTML}
      <div style="margin-top:8px;display:flex;gap:10px;align-items:center">
        <div class="pb-track" style="flex:1;height:6px"><div class="pb-fill" style="width:${Math.round((hd/CHECKLIST.length)*100)}%;background:var(--green)"></div></div>
        <span style="font-size:12px;color:var(--green);font-family:sans-serif">${hd}/${CHECKLIST.length}</span>
      </div>
    </div>
    <div class="card">
      <span class="label">🎯 Roteiro de Captação · 7 Passos</span>
      ${captHTML}
      <div style="margin-top:10px;display:flex;gap:10px;align-items:center">
        <div class="pb-track" style="flex:1;height:6px"><div class="pb-fill" style="width:${Math.round((cd/7)*100)}%;background:var(--gold)"></div></div>
        <span style="font-size:12px;color:var(--gold);font-family:sans-serif">${cd}/7</span>
      </div>
    </div>
    <div class="card">
      <span class="label">⚓ ENCARNA no Campo</span>
      ${[
        {moment:'Antes da reunião',action:'Ancora — 5min de intenção e oração',icon:'🙏'},
        {moment:'Com hóspedes',action:'Escuta — deixe a pessoa falar primeiro sempre',icon:'👂'},
        {moment:'Com a equipe',action:'Nomeia — reconheça e dê nome às conquistas',icon:'🏷️'},
        {moment:'Em objeções',action:'Clareza — reformule o valor sem pressão',icon:'🎯'},
        {moment:'Ao encerrar o dia',action:'Repete — registre 1 aprendizado para amanhã',icon:'📝'}
      ].map((m,i,a)=>`<div style="display:flex;gap:10px;margin-bottom:${i<a.length-1?10:0}px;padding-bottom:${i<a.length-1?10:0}px;border-bottom:${i<a.length-1?'1px solid rgba(255,255,255,.04)':'none'};align-items:flex-start">
        <span style="font-size:18px;flex-shrink:0">${m.icon}</span>
        <div>
          <div style="font-size:12px;color:var(--gold);font-weight:700;margin-bottom:2px">${m.moment}</div>
          <div style="font-size:13px;color:#C8C0B0;font-family:sans-serif">${m.action}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// ÂNCORA
// ═══════════════════════════════════════════════
function renderAncora() {
  const biblicosHTML = BIBLICOS.map((l,i)=>{
    const open = state.expandBiblico===i;
    return `<div class="card" style="cursor:pointer" onclick="state.expandBiblico=${open?null:i};render()">
      <div class="accordion-trigger">
        <div style="display:flex;align-items:center;gap:8px;flex:1">
          <span style="font-size:22px">${l.icon}</span>
          <div style="font-family:'Playfair Display',serif;font-size:18px;color:${open?'var(--gold-lt)':'var(--text)'}">${l.name}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:11px;color:var(--muted);font-family:sans-serif">${l.ref}</span>
          <span style="color:var(--dim);font-size:12px">${open?'▲':'▼'}</span>
        </div>
      </div>
      ${open?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(212,168,67,.12)">
        <p class="small" style="font-size:13px;line-height:1.7;margin-bottom:12px">${l.lesson}</p>
        <div style="border-left:3px solid var(--gold);padding:10px 12px 10px 14px;background:rgba(212,168,67,.04);border-radius:0 8px 8px 0">
          <p style="font-style:italic;font-size:13px;color:#C8C0B0;font-family:'Playfair Display',serif;line-height:1.6">"${l.verse}"</p>
        </div>
      </div>`:''}
    </div>`;
  }).join('');

  return `<div class="section">
    <div class="h2">Âncora</div>
    <p class="small" style="margin-bottom:16px">Fé · Família · Discipulado · Legado</p>
    <div class="card-gold">
      <span class="label">📖 ${todayVerse.ref}</span>
      <p class="verse-quote">"${todayVerse.text}"</p>
    </div>
    <span class="label">👑 Modelos de Liderança Bíblica</span>
    ${biblicosHTML}
    <div class="card" style="margin-top:12px">
      <span class="label">✍️ Reflexão do Dia</span>
      <textarea placeholder="O que Deus está me ensinando hoje através da minha liderança? O que vou levar para o discipulado?" oninput="saveReflectionLive(this.value)">${state.reflection}</textarea>
      ${state.reflection?'<div style="margin-top:6px;font-size:11px;color:var(--green);font-family:sans-serif">✓ Salvo automaticamente</div>':''}
    </div>
    <div class="card" style="border-color:rgba(212,168,67,.2)">
      <span class="label">🏛️ Os 5 Pilares do Legado</span>
      ${[
        {p:'Fé',icon:'✝️',desc:'Âncora de tudo. Antes de qualquer decisão, consulte. Antes de qualquer conquista, agradeça.'},
        {p:'Família',icon:'👨‍👩‍👧',desc:'O líder que perde a família no caminho, perde o legado. Presença vale mais que presentes.'},
        {p:'Saúde',icon:'💪',desc:'Corpo que sustenta o propósito. Líderes cansados tomam decisões ruins. Cuide-se.'},
        {p:'Trabalho',icon:'🏨',desc:'Excelência como forma de adoração. Cada atendimento é uma oportunidade de glorificar.'},
        {p:'Comunidade',icon:'🤝',desc:'Discipulado. Multiplique o que recebeu. O que não é passado adiante, se perde.'}
      ].map((item,i,a)=>`<div style="display:flex;gap:12px;margin-bottom:${i<a.length-1?14:0}px;padding-bottom:${i<a.length-1?14:0}px;border-bottom:${i<a.length-1?'1px solid rgba(255,255,255,.04)':'none'}">
        <span style="font-size:26px;flex-shrink:0">${item.icon}</span>
        <div>
          <div style="font-family:'Playfair Display',serif;font-size:15px;color:var(--gold-lt);margin-bottom:3px">${item.p}</div>
          <div class="small">${item.desc}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════
// BIND EVENTS
// ═══════════════════════════════════════════════
function bindEvents() {}

// ═══════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════
function setTab(t) { state.tab=t; render(); }

function selectUser(idx) {
  state.currentUser = state.users[idx];
  saveCurrentUser();
  render();
  showToast('✓ Perfil ativado: '+state.currentUser.name.split(' ')[0]);
}

function removeUser(idx) {
  state.users.splice(idx, 1);
  saveUsers();
  if (state.currentUser && !state.users.find(u=>u.id===state.currentUser.id)) {
    state.currentUser = state.users[0]||null;
    saveCurrentUser();
  }
  render();
  showToast('Participante removido');
}

function addUser() {
  const n = state.newUser;
  if (!n.name||!n.weight||!n.height||!n.age) { showToast('⚠️ Preencha todos os campos'); return; }
  const u = {...n, id: Date.now().toString(), weight:parseFloat(n.weight), height:parseFloat(n.height), age:parseInt(n.age)};
  state.users.push(u);
  state.currentUser = u;
  saveUsers(); saveCurrentUser();
  state.newUser = {name:'',weight:'',height:'',age:'',role:''};
  state.showAddUser = false;
  render();
  showToast('✓ Perfil criado: '+u.name.split(' ')[0]);
}

function renderAddPreview() {
  const nw = state.newUser;
  if (nw.weight && nw.height && parseFloat(nw.height)>0) {
    const bmi = calcBMI(parseFloat(nw.weight), parseFloat(nw.height));
    const bi = getBMIInfo(bmi);
    const el = document.getElementById('add-preview');
    if (el) el.innerHTML = `<div style="background:rgba(212,168,67,.08);border-radius:10px;padding:12px 14px;border:1px solid rgba(212,168,67,.2);display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span style="font-size:13px;color:var(--gold);font-family:sans-serif">IMC estimado:</span>
      <div style="text-align:right"><div style="font-size:22px;font-weight:700;color:var(--gold-lt);font-family:sans-serif">${bmi}</div><div style="font-size:11px;color:${bi.color};font-family:sans-serif">${bi.label}</div></div>
    </div>`;
  }
  // Keep input values in sync
  ['name','role','age','weight','height'].forEach(k=>{
    const inputs = document.querySelectorAll(`input[oninput*="'${k}'"]`);
    if (inputs.length) state.newUser[k] = inputs[0].value;
  });
}

function toggleHabit(i) {
  state.habits[i] = !state.habits[i];
  saveHabits();
  renderHeader();
  // Re-render only checklist portion
  const el = document.querySelector('.check-row:nth-child('+(i+2)+')');
  render(); // full re-render for simplicity
  if (state.habits[i]) showToast('✓ Tarefa concluída!');
}

function toggleWorkout(key) {
  state.workout[key] = !state.workout[key];
  saveWorkout();
  renderHeader();
  render();
  if (state.workout[key]) showToast('💪 Exercício marcado!');
}

function toggleCaptacao(i) {
  state.captacao[i] = !state.captacao[i];
  saveCaptacao();
  renderHeader();
  render();
  if (state.captacao[i]) showToast('🎯 Passo concluído!');
}

function saveReflectionLive(val) {
  state.reflection = val;
  saveReflection();
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', ()=>{
  loadAll();
  setTimeout(()=>{
    document.getElementById('loading').style.display = 'none';
    const app = document.getElementById('app');
    app.style.display = 'flex';
    app.style.flexDirection = 'column';
    render();
  }, 800);
});

// Expose to global
window.setTab=setTab; window.selectUser=selectUser; window.removeUser=removeUser;
window.addUser=addUser; window.renderAddPreview=renderAddPreview;
window.toggleHabit=toggleHabit; window.toggleWorkout=toggleWorkout;
window.toggleCaptacao=toggleCaptacao; window.saveReflectionLive=saveReflectionLive;
window.state=state;
