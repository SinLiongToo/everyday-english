// 法文對照（Français）：運動
// 格式見 fr-food.js。由 Claude 翻譯，未經法語母語者校對。
window.FRW = window.FRW || {};
window.FRP = window.FRP || {};
window.addFrench = window.addFrench || function (id, o) {
  const W = (window.FRW[id] = window.FRW[id] || {}), P = (window.FRP[id] = window.FRP[id] || {});
  const lines = (s) => (s || "").split("\n").map((l) => l.trim()).filter(Boolean).map((l) => l.split("|").map((x) => x.trim()));
  // French puts a space before ? ! : ; — make it non-breaking so the mark never wraps onto its own line.
  const nb = (s) => s.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
  lines(o.words).forEach(([en, w, ex]) => { W[en] = [nb(w), nb(ex)]; });
  lines(o.phrases).forEach(([en, f]) => { P[en] = nb(f); });
};


addFrench("sports", {
  words: `
soccer | le football | Tu joues au football ?
run | courir | Je cours au parc tous les matins.
swim | nager | Je nage très bien.
team | l'équipe | Notre équipe a gagné le match.
ball | le ballon | Lance-moi le ballon !
exercise | le sport | Faire du sport, c'est bon pour la santé.
basketball | le basket | Nous jouons au basket tous les vendredis.
baseball | le baseball | Le baseball est très populaire à Taïwan.
tennis | le tennis | Tu veux jouer au tennis ?
badminton | le badminton | Je joue au badminton avec mon père.
volleyball | le volley | Notre classe a une équipe de volley.
table tennis | le ping-pong | Le ping-pong est amusant et rapide.
jump | sauter | Tu sautes à quelle hauteur ?
throw | lancer | Lance-moi le ballon.
catch | attraper | Tu peux attraper ça ?
kick | taper | Tape fort dans le ballon !
hit | frapper | Il a frappé un coup de circuit.
win | gagner | Nous voulons gagner !
lose | perdre | Ne sois pas triste si tu perds.
player | le joueur | C'est le meilleur joueur de notre équipe.
strong | fort | Il faut des jambes fortes pour le football.
healthy | en bonne santé | Le sport te garde en bonne santé.
gym | la salle de sport | Je vais à la salle de sport après le travail.
pool | la piscine | La piscine ouvre à six heures.
yoga | le yoga | Ma mère fait du yoga tous les matins.
hike | randonner | Allons randonner sur la montagne de l'Éléphant.
climb | grimper | Nous avons grimpé le mont Jade l'année dernière.
practice | l'entraînement | Nous avons entraînement tous les mardis.
race | la course | Elle a gagné la course !
speed | la vitesse | La voiture a ralenti à une vitesse sûre.
match | le match | Le match commence à quelle heure ?
goal | le but | Il a marqué un but !
cheer | encourager | Encourageons notre équipe !
rule | la règle | Tu connais les règles du baseball ?
golf | le golf | Mon patron joue au golf le dimanche.
boxing | la boxe | La boxe est un sport dur.
skiing | le ski | Nous sommes allés faire du ski au Japon.
surfing | le surf | Le surf à Taitung, c'est génial.
skateboard | le skateboard | Il va à l'école en skateboard.
rugby | le rugby | Le rugby est populaire en Nouvelle-Zélande.
hockey | le hockey | Le hockey sur glace est rapide et passionnant.
dodgeball | la balle aux prisonniers | Nous avons joué à la balle aux prisonniers en sport.
bat | la batte | Tiens la batte à deux mains.
racket | la raquette | J'ai besoin d'une nouvelle raquette de tennis.
net | le filet | La balle a touché le filet.
court | le terrain | Retrouvons-nous au terrain de basket.
field | le terrain | Le terrain de football est mouillé.
point | le point | Il nous faut encore un point pour gagner.
fit | en forme | Je veux être en forme.
sport | le sport | Quel est ton sport préféré ?
fan | le supporter | Je suis un grand supporter de baseball.
watch | regarder | Regardons le match ce soir.
game | le match | Nous avons gagné le match !
pass | passer | Passe-moi le ballon !
shoot | tirer | Tire !
dive | plonger | Elle sait plonger du grand plongeoir.
ride | faire du vélo | Je fais du vélo le week-end.
skate | patiner | Tu sais patiner ?
lift | soulever | Il peut soulever cent kilos.
push-up | la pompe | Je fais vingt pompes tous les matins.
sit-up | l'abdo | Les abdos renforcent le ventre.
prize | le prix | Le gagnant reçoit un prix.
first place | la première place | Elle a pris la première place.
second place | la deuxième place | Nous avons fini à la deuxième place.
quick | rapide | Il est très rapide sur le terrain.
Olympics | les Jeux olympiques | Taïwan a gagné l'or aux Jeux olympiques.
jump rope | la corde à sauter | La corde à sauter est un excellent exercice.
whistle | le sifflet | L'entraîneur a donné un coup de sifflet.
walk | marcher | Je marche au parc tous les jours.
bike | le vélo | Je fais du vélo le week-end.
jog | faire un jogging | Allons faire un jogging au bord de la rivière.
sneakers | les baskets | Mets tes baskets.
helmet | le casque | Mets un casque quand tu fais du vélo.
uniform | la tenue | La tenue de notre équipe est bleue.
winner | le gagnant | Le gagnant reçoit une médaille.
loser | le perdant | Ne sois pas mauvais perdant.
tired | fatigué | Je suis fatigué après le match.
fast | rapide | C'est une coureuse rapide.
slow | lent | La tortue est lente.
tall | grand | Les joueurs de basket sont grands.
water bottle | la gourde | Apporte une gourde à l'entraînement.
towel | la serviette | J'ai besoin d'une serviette après la natation.
cap | la casquette | Il porte une casquette de baseball.
shorts | le short | Mets un short pour la salle de sport.
jersey | le maillot | J'ai acheté le maillot de mon joueur préféré.
ice rink | la patinoire | Nous sommes allés à la patinoire.
beach | la plage | Nous jouons au volley sur la plage.
mountain | la montagne | Nous avons gravi une montagne.
bicycle | la bicyclette | Il va à l'école à bicyclette.
karate | le karaté | Elle est ceinture noire de karaté.
judo | le judo | Il fait du judo après l'école.
taekwondo | le taekwondo | Je prends des cours de taekwondo.
kung fu | le kung-fu | Mon grand-père fait du kung-fu au parc.
dance | la danse | La danse est un bon exercice.
bowling | le bowling | Allons au bowling vendredi.
frisbee | le frisbee | Nous avons joué au frisbee au parc.
fishing | la pêche | Mon père adore la pêche.
sailing | la voile | La voile est populaire au bord de la mer.
horse riding | l'équitation | J'ai essayé l'équitation à la ferme.
archery | le tir à l'arc | Le tir à l'arc demande une main sûre.
`,
  phrases: `
Let's play basketball after school. | Jouons au basket après l'école.
Who won the game? | Qui a gagné le match ?
I'm tired. Let's take a break. | Je suis fatigué. Faisons une pause.
Do you like sports? | Tu aimes le sport ?
What sports do you play? | Quels sports pratiques-tu ?
I play basketball. | Je joue au basket.
I like soccer. | J'aime le football.
I can swim. | Je sais nager.
I can't swim. | Je ne sais pas nager.
I go running every morning. | Je cours tous les matins.
Let's play tennis. | Jouons au tennis.
Let's play badminton. | Jouons au badminton.
I play baseball with my friends. | Je joue au baseball avec mes amis.
Who's your favorite player? | Qui est ton joueur préféré ?
Which team do you like? | Quelle équipe tu aimes ?
Let's watch the game. | Regardons le match.
What's the score? | Quel est le score ?
It's two to one. | C'est deux à un.
We won! | On a gagné !
We lost. | On a perdu.
It's a tie. | C'est match nul.
Good game! | Bien joué !
Nice shot! | Joli tir !
Pass the ball! | Passe le ballon !
Throw the ball. | Lance le ballon.
Catch! | Attrape !
Kick the ball. | Tape dans le ballon.
Run faster! | Cours plus vite !
Go, go, go! | Allez, allez, allez !
Come on! | Allez !
You can do it! | Tu peux le faire !
I'm tired. | Je suis fatigué.
I need a break. | J'ai besoin d'une pause.
Drink some water. | Bois un peu d'eau.
I'm sweating. | Je transpire.
Let's warm up first. | Échauffons-nous d'abord.
Stretch your legs. | Étire tes jambes.
I go to the gym. | Je vais à la salle de sport.
I exercise three times a week. | Je fais du sport trois fois par semaine.
I want to get fit. | Je veux me mettre en forme.
I'm on the school team. | Je fais partie de l'équipe de l'école.
We have practice today. | Nous avons entraînement aujourd'hui.
The game starts at three. | Le match commence à trois heures.
Where is the stadium? | Où est le stade ?
I have two tickets. | J'ai deux billets.
Let's go to the baseball game. | Allons voir le match de baseball.
The crowd is loud. | La foule est bruyante.
I like to ride my bike. | J'aime faire du vélo.
Let's go swimming. | Allons nager.
The pool is cold. | La piscine est froide.
Can you play table tennis? | Tu sais jouer au ping-pong ?
I'm good at running. | Je suis bon en course.
I'm not good at sports. | Je ne suis pas doué pour le sport.
Let's go for a jog. | Allons faire un jogging.
I walk 10,000 steps a day. | Je fais 10 000 pas par jour.
I do yoga. | Je fais du yoga.
I like hiking. | J'aime la randonnée.
I hurt my leg. | Je me suis fait mal à la jambe.
My knee hurts. | J'ai mal au genou.
Be careful! | Fais attention !
Are you okay? | Ça va ?
Wear your helmet. | Mets ton casque.
Put on your sneakers. | Mets tes baskets.
That was close! | C'était moins une !
It's your turn. | C'est ton tour.
Who's winning? | Qui gagne ?
The game is over. | Le match est terminé.
What a great game! | Quel super match !
He scored a goal. | Il a marqué un but.
She is very fast. | Elle est très rapide.
He is very tall. | Il est très grand.
Let's play again tomorrow. | On rejoue demain.
I want to join the team. | Je veux rejoindre l'équipe.
Our team is the best! | Notre équipe est la meilleure !
I'm a big fan. | Je suis un grand fan.
I watch the games on TV. | Je regarde les matchs à la télé.
The Olympics are on TV. | Les Jeux olympiques passent à la télé.
I like watching the Olympics. | J'aime regarder les Jeux olympiques.
She won a gold medal. | Elle a gagné une médaille d'or.
Taiwan won the game! | Taïwan a gagné le match !
Let's cheer for our team. | Encourageons notre équipe.
Do you want to play with us? | Tu veux jouer avec nous ?
We need one more player. | Il nous faut encore un joueur.
I'll be the goalkeeper. | Je serai le gardien.
Hit the ball! | Frappe la balle !
Out! | Retiré !
That's a foul. | C'est une faute.
Jump higher! | Saute plus haut !
Let's race! | On fait la course !
Ready, set, go! | À vos marques, prêts, partez !
I'm first! | Je suis premier !
I'm out of breath. | Je suis essoufflé.
Sports are fun. | Le sport, c'est amusant.
Exercise is good for you. | Le sport, c'est bon pour toi.
I feel great after exercise. | Je me sens super bien après le sport.
Let's go to the park and play. | Allons jouer au parc.
I have a new ball. | J'ai un nouveau ballon.
The weather is good for running. | Il fait un temps idéal pour courir.
Bounce the ball. | Dribble.
Let's play volleyball on the beach. | Jouons au volley sur la plage.
`,
});

addFrench("sports", {
  words: `
work out | s'entraîner | Je m'entraîne à la salle trois fois par semaine.
tournament | le tournoi | Notre école a gagné le tournoi de baseball.
coach | l'entraîneur | Notre entraîneur est très strict.
injury | la blessure | Il a manqué la saison à cause d'une blessure.
score | le score | Quel est le score ?
stretch | s'étirer | Étire-toi toujours avant de courir.
athlete | l'athlète | C'est une athlète professionnelle.
referee | l'arbitre | L'arbitre a sifflé.
opponent | l'adversaire | Ne sous-estime jamais ton adversaire.
championship | le championnat | Ils ont gagné le championnat l'an dernier.
league | la ligue | Il joue dans la ligue professionnelle.
season | la saison | La saison de baseball commence en mars.
fitness | la forme physique | Je me suis inscrit à un cours de remise en forme.
muscle | le muscle | Soulever des poids développe les muscles.
warm up | s'échauffer | Échauffe-toi toujours avant un match.
sweat | transpirer | Je transpire beaucoup quand je cours.
cardio | le cardio | Je fais trente minutes de cardio par jour.
weightlifting | l'haltérophilie | L'haltérophilie rend plus fort.
marathon | le marathon | Je m'entraîne pour mon premier marathon.
cycling | le cyclisme | Faire le tour du lac du Soleil et de la Lune à vélo est très populaire.
jogging | le jogging | Je fais du jogging le long de la rivière.
personal trainer | le coach personnel | Mon coach personnel est dur mais juste.
spectator | le spectateur | Des milliers de spectateurs remplissaient le stade.
stadium | le stade | Le nouveau stade accueille 40 000 personnes.
medal | la médaille | Elle a gagné une médaille d'or.
record | le record | Il a battu le record national.
foul | la faute | C'était clairement une faute !
penalty | le penalty | Ils ont marqué sur penalty.
tie | le match nul | Le match s'est terminé par un match nul.
half-time | la mi-temps | Nous avons pris des snacks à la mi-temps.
defense | la défense | Notre défense était solide ce soir.
offense | l'attaque | Leur attaque a marqué quarante points.
sprain | l'entorse | Je me suis fait une entorse à la cheville au basket.
pitcher | le lanceur | Le lanceur a réussi un match parfait.
batter | le frappeur | Le frappeur a réussi un coup de circuit.
home run | le coup de circuit | Il a frappé deux coups de circuit.
inning | la manche | C'est la fin de la neuvième manche.
strikeout | le retrait sur trois prises | Le lanceur a réussi dix retraits sur trois prises.
goalkeeper | le gardien de but | Le gardien a fait un superbe arrêt.
striker | l'attaquant | Notre attaquant a marqué deux fois.
captain | le capitaine | C'est la capitaine de l'équipe.
substitute | le remplaçant | L'entraîneur a fait entrer un remplaçant.
bench | le banc | Il a passé tout le match sur le banc.
timeout | le temps mort | L'entraîneur a demandé un temps mort.
overtime | la prolongation | Le match est allé en prolongation.
final | la finale | On est en finale !
semifinal | la demi-finale | Ils ont perdu en demi-finale.
qualify | se qualifier | Ils espèrent se qualifier pour la Coupe du monde.
knockout | la phase à élimination directe | La phase à élimination directe commence la semaine prochaine.
trophy | le trophée | Le trophée est exposé à l'école.
podium | le podium | Trois athlètes taïwanais sont montés sur le podium.
lap | la longueur | Je nage quarante longueurs tous les matins.
treadmill | le tapis de course | Je cours sur un tapis de course quand il pleut.
dumbbell | l'haltère | Soulève les haltères lentement.
protein | la protéine | Je bois un shake protéiné après l'entraînement.
hydrate | s'hydrater | Pense à t'hydrater pendant la course.
cramp | la crampe | J'ai eu une crampe à la jambe.
fracture | la fracture | Il a une fracture au poignet.
physical therapy | la kinésithérapie | Je fais de la kinésithérapie pour mon genou.
workout routine | le programme d'entraînement | Mon programme d'entraînement dure une heure.
rest day | le jour de repos | Les jours de repos aident les muscles à récupérer.
rock climbing | l'escalade | L'escalade renforce la force de préhension.
triathlon | le triathlon | Elle a terminé son premier triathlon.
fan club | le fan-club | J'ai rejoint le fan-club de l'équipe.
cheerleader | la pom-pom girl | Les pom-pom girls du baseball taïwanais sont célèbres.
broadcast | retransmettre | Le match sera retransmis en direct à sept heures.
squash | le squash | Je joue au squash à midi.
handball | le handball | Le handball est populaire en Europe.
softball | le softball | Elle joue dans l'équipe de softball.
fencing | l'escrime | L'escrime, c'est comme une partie d'échecs rapide.
wrestling | la lutte | Il faisait de la lutte au lycée.
martial arts | les arts martiaux | Les arts martiaux enseignent la discipline.
gymnastics | la gymnastique | La gymnastique demande force et équilibre.
diving board | le plongeoir | Ne cours pas près du plongeoir.
high jump | le saut en hauteur | Elle a gagné le saut en hauteur.
long jump | le saut en longueur | Il a battu le record de l'école au saut en longueur.
relay | le relais | Notre classe a gagné le relais.
hurdles | les haies | Elle s'entraîne pour le 100 mètres haies.
javelin | le javelot | Taïwan a un excellent lanceur de javelot.
starting line | la ligne de départ | Coureurs, à la ligne de départ.
finish line | la ligne d'arrivée | Elle a franchi la ligne d'arrivée en premier.
personal best | le record personnel | J'ai battu mon record personnel aujourd'hui.
world record | le record du monde | Il a établi un nouveau record du monde.
Asian Games | les Jeux asiatiques | Taïwan a gagné l'or aux Jeux asiatiques.
World Cup | la Coupe du monde | Des millions de gens ont regardé la finale de la Coupe du monde.
World Baseball Classic | la Classique mondiale de baseball | Les supporters ont rempli le stade pour la Classique mondiale de baseball.
fixture | le calendrier des matchs | Le calendrier des matchs de la ligue a été publié aujourd'hui.
kickoff | le coup d'envoi | Le coup d'envoi est à huit heures.
extra time | les prolongations | Le match est allé aux prolongations.
penalty kick | le tir au but | Il a raté le tir au but.
red card | le carton rouge | Le défenseur a reçu un carton rouge.
yellow card | le carton jaune | Il a reçu un carton jaune pour une faute.
offside | le hors-jeu | Le but a été refusé pour hors-jeu.
free throw | le lancer franc | Elle a réussi ses deux lancers francs.
slam dunk | le smash | La foule s'est déchaînée après son smash.
three-pointer | le tir à trois points | Il a mis un tir à trois points au buzzer.
serve | le service | Elle a un service puissant.
rally | l'échange | C'était un long échange.
doubles | le double | Nous avons gagné la finale du double.
singles | le simple | Il joue en simple et en double.
the ball is in your court | la balle est dans ton camp | J'ai fait mon offre. La balle est dans ton camp.
level playing field | l'égalité des chances | Nous voulons l'égalité des chances.
team player | l'esprit d'équipe | Aie l'esprit d'équipe.
a good sport | beau joueur | Merci d'avoir été beau joueur.
sore loser | mauvais perdant | Ne sois pas mauvais perdant.
get the ball rolling | lancer les choses | Lançons les choses.
call the shots | prendre les décisions | C'est l'entraîneur qui prendra les décisions.
on the ball | vif | Elle est vraiment vive.
out of your league | hors de ta portée | Elle est hors de ta portée.
jump the gun | partir trop tôt | Ne pars pas trop tôt au départ.
throw in the towel | jeter l'éponge | Ne jette pas encore l'éponge.
keep your eye on the ball | rester concentré | Reste concentré.
a whole new ball game | une tout autre histoire | Enseigner aux enfants, c'est une tout autre histoire.
blow the whistle | dénoncer | Elle a décidé de dénoncer la tricherie.
first string | titulaire | Il est titulaire maintenant.
`,
  phrases: `
Who are you rooting for? | Tu soutiens quelle équipe ?
It was a close game. | C'était un match serré.
I pulled a muscle. | Je me suis froissé un muscle.
I've been trying to work out more regularly. | J'essaie de faire du sport plus régulièrement.
I'm training for a half marathon. | Je m'entraîne pour un semi-marathon.
I ran my first 10K last month. | J'ai couru mon premier 10 km le mois dernier.
I beat my personal best! | J'ai battu mon record personnel !
I'm not in great shape at the moment. | Je ne suis pas en grande forme en ce moment.
I'm trying to build up my stamina. | J'essaie d'améliorer mon endurance.
I do weight training twice a week. | Je fais de la musculation deux fois par semaine.
I've hired a personal trainer. | J'ai pris un coach personnel.
Don't forget to cool down after your workout. | N'oublie pas de récupérer en douceur après ta séance.
I pulled a muscle during training. | Je me suis froissé un muscle à l'entraînement.
I sprained my ankle playing basketball. | Je me suis tordu la cheville en jouant au basket.
I'm out for a few weeks with an injury. | Je suis blessé pour quelques semaines.
Listen to your body and don't overdo it. | Écoute ton corps et n'en fais pas trop.
I'm so sore from yesterday's workout. | J'ai des courbatures partout après la séance d'hier.
I joined a local football club. | Je me suis inscrit dans un club de foot du quartier.
We play every Sunday morning. | Nous jouons tous les dimanches matin.
We need to work on our defense. | Nous devons travailler notre défense.
Our coach is really strict. | Notre entraîneur est vraiment strict.
The coach benched me for the first half. | L'entraîneur m'a laissé sur le banc en première mi-temps.
He was sent off for a bad tackle. | Il a été expulsé pour un mauvais tacle.
The referee made a terrible call. | L'arbitre a pris une décision terrible.
That should have been a penalty. | Il aurait dû y avoir penalty.
They scored in the last minute. | Ils ont marqué à la dernière minute.
The game went into overtime. | Le match est allé en prolongation.
It was decided on penalties. | Ça s'est joué aux tirs au but.
They came back from two goals down. | Ils sont revenus alors qu'ils étaient menés de deux buts.
What a comeback! | Quelle remontée !
They're top of the league. | Ils sont en tête du championnat.
They've been on a winning streak. | Ils enchaînent les victoires.
They're in a slump right now. | Ils traversent une mauvaise passe.
They got knocked out in the semifinals. | Ils ont été éliminés en demi-finale.
They made it to the final! | Ils sont en finale !
Who do you think will win? | À ton avis, qui va gagner ?
My money's on the home team. | Je parie sur l'équipe à domicile.
They're the underdogs, but anything can happen. | Ils ne sont pas favoris, mais tout peut arriver.
The atmosphere in the stadium was electric. | L'ambiance dans le stade était électrique.
We got seats right behind home plate. | Nous avions des places juste derrière le marbre.
I'm watching the game at a sports bar. | Je regarde le match dans un bar sportif.
I can't believe they lost again. | Je n'arrive pas à croire qu'ils ont encore perdu.
He's in great form this season. | Il est en grande forme cette saison.
She's one of the best players in the world. | C'est l'une des meilleures joueuses du monde.
He's been signed by a major league team. | Il a signé avec une équipe de la Major League.
He's retiring at the end of the season. | Il prend sa retraite à la fin de la saison.
The Olympics are held every four years. | Les Jeux olympiques ont lieu tous les quatre ans.
She broke the world record. | Elle a battu le record du monde.
He's representing Taiwan at the Asian Games. | Il représente Taïwan aux Jeux asiatiques.
I go swimming to stay in shape. | Je nage pour rester en forme.
Swimming is easy on the joints. | La natation ménage les articulations.
I prefer team sports to individual sports. | Je préfère les sports collectifs aux sports individuels.
I'm more of a spectator than a player. | Je suis plutôt spectateur que joueur.
I've taken up badminton again. | J'ai repris le badminton.
Let's book a court for Saturday. | Réservons un terrain pour samedi.
Do you want to be on my team? | Tu veux être dans mon équipe ?
Let's play doubles. | Jouons en double.
I'm a bit rusty. | Je suis un peu rouillé.
I haven't played in years. | Je n'ai pas joué depuis des années.
You've got a great serve. | Tu as un super service.
You need to follow through on your swing. | Tu dois accompagner ton geste jusqu'au bout.
Keep your eye on the ball. | Garde les yeux sur la balle.
I go cycling along the river on weekends. | Je fais du vélo le long de la rivière le week-end.
Cycling around Taiwan is on my bucket list. | Faire le tour de Taïwan à vélo fait partie de mes rêves.
I'm learning to surf this summer. | J'apprends à surfer cet été.
Rock climbing is a great full-body workout. | L'escalade fait travailler tout le corps.
I do yoga to stay flexible. | Je fais du yoga pour rester souple.
Pilates has really helped my back. | Le Pilates m'a vraiment soulagé le dos.
I go to a spin class after work. | Je vais à un cours de vélo en salle après le travail.
The gym is packed after six. | La salle est bondée après six heures.
How much is the gym membership? | Combien coûte l'abonnement à la salle ?
I signed up for a year but hardly ever go. | J'ai pris un abonnement d'un an, mais je n'y vais presque jamais.
Exercise is the best way to relieve stress. | Le sport est le meilleur moyen d'évacuer le stress.
I feel more energetic since I started exercising. | Depuis que je fais du sport, j'ai plus d'énergie.
I'm trying to lose a few kilos. | J'essaie de perdre quelques kilos.
Diet is just as important as exercise. | L'alimentation est aussi importante que le sport.
Make sure you stay hydrated. | Pense à bien t'hydrater.
It's too hot to run in the middle of the day. | Il fait trop chaud pour courir en milieu de journée.
I prefer to exercise early in the morning. | Je préfère faire du sport tôt le matin.
Let's go for a hike this weekend. | Allons faire une randonnée ce week-end.
The trail was steeper than I expected. | Le sentier était plus raide que prévu.
Are you watching the World Cup? | Tu regardes la Coupe du monde ?
Baseball is really popular in Taiwan. | Le baseball est très populaire à Taïwan.
The cheerleaders keep the crowd going. | Les pom-pom girls font vibrer le public.
I can't believe the umpire called that a strike. | Je n'arrive pas à croire que l'arbitre a appelé une prise.
It's the bottom of the ninth. | C'est la fin de la neuvième manche.
He hit a home run! | Il a frappé un coup de circuit !
He's the team captain. | C'est le capitaine de l'équipe.
She's a natural athlete. | C'est une athlète née.
Practice is what makes the difference. | C'est l'entraînement qui fait la différence.
No pain, no gain. | On n'a rien sans rien.
It's not about winning; it's about having fun. | L'important n'est pas de gagner, c'est de s'amuser.
We'll get them next time. | On les aura la prochaine fois.
Well played! | Bien joué !
Let's shake hands. | Serrons-nous la main.
Good sportsmanship matters. | L'esprit sportif, c'est important.
What time is kickoff? | Le coup d'envoi est à quelle heure ?
Which channel is the game on? | Le match passe sur quelle chaîne ?
I'm going to the gym after work. | Je vais à la salle après le travail.
I try to get at least 30 minutes of exercise a day. | J'essaie de faire au moins 30 minutes de sport par jour.
`,
});

addFrench("sports", {
  words: `
endurance | l'endurance | Les marathons mettent ton endurance à l'épreuve.
underdog | l'outsider | Tout le monde aime encourager l'outsider.
doping | le dopage | L'athlète a été suspendu pour dopage.
comeback | la remontée | L'équipe a réussi une remontée incroyable à la neuvième manche.
sportsmanship | l'esprit sportif | L'esprit sportif compte plus que la victoire.
dominate | dominer | Ils dominent le championnat chaque année.
athleticism | les qualités athlétiques | Ses qualités athlétiques sont hors normes.
agility | l'agilité | Le badminton demande beaucoup d'agilité.
stamina | l'endurance | La natation développe l'endurance.
rehabilitation | la rééducation | Il est en rééducation après une opération du genou.
sports science | les sciences du sport | Les sciences du sport ont transformé l'entraînement.
analytics | l'analyse de données | Les équipes de baseball s'appuient beaucoup sur l'analyse de données.
scouting | le recrutement | Les rapports de recrutement les ont aidés à choisir le bon joueur.
draft | la draft | Il a été le premier choix de la draft.
free agent | l'agent libre | Le lanceur a signé en tant qu'agent libre.
endorsement | le contrat publicitaire | Elle gagne des millions grâce à ses contrats publicitaires.
salary cap | le plafond salarial | Le plafond salarial maintient l'équilibre du championnat.
rivalry | la rivalité | La rivalité entre les deux équipes est intense.
home advantage | l'avantage du terrain | L'avantage du terrain les a aidés à gagner.
momentum | la dynamique | Le but a fait basculer la dynamique du match.
clutch | décisif | Il a réussi un tir décisif à la dernière seconde.
MVP | le meilleur joueur | Elle a été élue meilleure joueuse du tournoi.
playoffs | les séries éliminatoires | Ils se sont qualifiés pour les séries éliminatoires pour la première fois.
esports | l'e-sport | L'e-sport attire aujourd'hui un public énorme.
governing body | la fédération | La fédération de ce sport a interdit le produit.
hall of fame | le temple de la renommée | Il a été intronisé au temple de la renommée.
tactics | la tactique | L'entraîneur a changé de tactique à la mi-temps.
physique | la morphologie | Les nageurs ont une morphologie caractéristique.
grueling | éprouvant | C'était un stage d'entraînement éprouvant.
veteran | le vétéran | Le vétéran a mené la jeune équipe.
rookie | la recrue | La recrue a marqué vingt points pour ses débuts.
hat trick | le triplé | Il a réussi un triplé en finale.
fair play | le fair-play | Le fair-play est l'esprit des Jeux olympiques.
performance-enhancing | dopant | Les produits dopants sont interdits.
anti-doping | antidopage | L'agence antidopage contrôle les athlètes au hasard.
match-fixing | les matchs truqués | Les scandales de matchs truqués nuisent au championnat.
biomechanics | la biomécanique | La biomécanique aide les lanceurs à éviter les blessures.
periodization | la périodisation | La périodisation organise l'entraînement en cycles.
overtraining | le surentraînement | Le surentraînement entraîne des blessures.
VO2 max | la VO2 max | Les coureurs d'élite ont une VO2 max élevée.
lactic acid | l'acide lactique | L'acide lactique s'accumule pendant les sprints.
recovery | la récupération | Le sommeil est essentiel à la récupération.
concussion | la commotion cérébrale | Il a manqué trois matchs à cause d'une commotion cérébrale.
ACL | le ligament croisé antérieur | Elle s'est rompu le ligament croisé antérieur en finale.
mental toughness | la force mentale | La force mentale distingue les champions des autres.
in the zone | dans sa bulle | Quand je suis dans ma bulle, plus rien d'autre ne compte.
choke | craquer | Il a craqué au dernier tour.
upset | la surprise | C'était la plus grosse surprise de l'histoire du tournoi.
dynasty | la dynastie | L'équipe a bâti une dynastie dans les années 1990.
juggernaut | le rouleau compresseur | Les champions en titre sont un rouleau compresseur.
long shot | le pari risqué | Leur victoire au titre était un pari risqué.
odds | la cote | La cote est contre nous.
sports betting | les paris sportifs | Les paris sportifs sont légaux à Taïwan.
broadcasting rights | les droits de retransmission | La ligue a vendu ses droits de retransmission pour des milliards.
sponsorship | le parrainage | Le contrat de parrainage vaut dix millions.
franchise | la franchise | La franchise a déménagé dans une nouvelle ville.
transfer fee | l'indemnité de transfert | L'indemnité de transfert a battu le record du monde.
trade deadline | la date limite des échanges | L'équipe a conclu un accord avant la date limite des échanges.
retirement | la retraite | Il a annoncé sa retraite à trente-cinq ans.
GOAT | le plus grand de tous les temps | Beaucoup de fans le considèrent comme le plus grand de tous les temps.
inclusivity | l'inclusion | Les ligues sportives progressent en matière d'inclusion.
Paralympics | les Jeux paralympiques | Elle a gagné deux médailles aux Jeux paralympiques.
youth development | la formation des jeunes | La formation des jeunes est la clé du succès à long terme.
spectator sport | le sport-spectacle | Le baseball est le premier sport-spectacle à Taïwan.
home crowd | le public local | Le public local était assourdissant.
photo finish | la photo-finish | La course s'est jouée à la photo-finish.
VAR | l'assistance vidéo à l'arbitrage | L'assistance vidéo à l'arbitrage a annulé la décision de l'arbitre.
instant replay | le ralenti | Le ralenti a montré que la balle était dehors.
umpire | l'arbitre | L'arbitre l'a déclaré retiré.
tiebreak | le jeu décisif | Le set s'est joué au jeu décisif.
sudden death | la mort subite | Le match s'est décidé en mort subite.
aggregate | le score cumulé | Ils ont gagné 4 à 3 au score cumulé.
relegation | la relégation | Le club lutte contre la relégation.
promotion | la montée | Ils ont obtenu la montée en première division.
transfer window | le mercato | Le mercato ferme vendredi.
loan deal | le prêt | Il est arrivé en prêt pour une saison.
agent | l'agent | Son agent a négocié un nouveau contrat.
contract extension | la prolongation de contrat | La star a signé une prolongation de contrat.
release clause | la clause libératoire | Sa clause libératoire est de 100 millions d'euros.
Financial Fair Play | le fair-play financier | Le club a enfreint les règles du fair-play financier.
sportswashing | le sportswashing | Les critiques ont accusé les propriétaires de sportswashing.
white elephant | l'éléphant blanc | Le stade est devenu un éléphant blanc.
host city | la ville hôte | La ville hôte a construit une nouvelle ligne de métro.
bid | la candidature | La ville a perdu sa candidature aux Jeux olympiques.
boycott | le boycott | Plusieurs pays se sont joints au boycott.
gender verification | les tests de féminité | Les règles sur les tests de féminité restent controversées.
transgender athlete | l'athlète transgenre | La politique concernant les athlètes transgenres a été révisée.
pay equity | l'égalité salariale | Les joueuses ont fait campagne pour l'égalité salariale.
grassroots sport | le sport amateur | Le sport amateur a besoin de plus de financement.
physical literacy | la littératie physique | La littératie physique devrait commencer dès l'enfance.
sedentary | sédentaire | Un mode de vie sédentaire nuit à la santé.
wearable tech | les objets connectés | Les objets connectés suivent chaque séance d'entraînement.
heat stress | le stress thermique | Le stress thermique est un risque lors des compétitions d'été.
altitude training | l'entraînement en altitude | Les coureurs s'entraînent en altitude au Kenya.
taper | réduire l'entraînement | Les marathoniens réduisent l'entraînement les dernières semaines.
carb-loading | la recharge en glucides | La recharge en glucides avant une course donne de l'énergie.
electrolytes | les électrolytes | Les boissons sportives remplacent les électrolytes.
sports psychologist | le psychologue du sport | L'équipe a engagé un psychologue du sport.
visualization | la visualisation | La visualisation aide les athlètes à se préparer mentalement.
ultramarathon | l'ultramarathon | Elle a couru un ultramarathon de 100 kilomètres.
move the goalposts | changer les règles du jeu | Le patron aime changer les règles du jeu.
below the belt | un coup bas | Cette remarque était un coup bas.
saved by the bell | sauvé par le gong | J'ai été sauvé par le gong.
down to the wire | jusqu'au bout | Le match a été serré jusqu'au bout.
neck and neck | au coude à coude | Les équipes sont au coude à coude.
the home stretch | la dernière ligne droite | Nous sommes dans la dernière ligne droite.
a level playing field | des règles équitables | Les règles créent des conditions équitables pour tous.
roll with the punches | encaisser les coups | Il faut savoir encaisser les coups.
take one for the team | se sacrifier pour l'équipe | Je vais me sacrifier pour l'équipe.
the gloves are off | les choses sérieuses commencent | Maintenant, les choses sérieuses commencent.
par for the course | normal | Les retards, c'est normal.
a curveball | une surprise | La vie m'a réservé une surprise.
throw your hat in the ring | se lancer dans la course | Pourquoi ne pas te lancer dans la course ?
no holds barred | sans retenue | C'était un débat sans retenue.
go the distance | tenir la distance | Est-ce qu'il peut tenir la distance ?
`,
  phrases: `
They pulled off a stunning upset. | Ils ont créé une énorme surprise.
It's anyone's game at this point. | À ce stade, tout reste possible.
She's at the top of her game. | Elle est au sommet de son art.
Elite sport has become a multibillion-dollar industry. | Le sport de haut niveau est devenu une industrie de plusieurs milliards de dollars.
Broadcasting rights are the main source of revenue for top leagues. | Les droits de retransmission sont la principale source de revenus des grands championnats.
Sportswashing uses big events to clean up a country's image. | Le sportswashing utilise les grands événements pour redorer l'image d'un pays.
Hosting the Olympics often leaves cities with huge debts. | Organiser les Jeux olympiques laisse souvent les villes lourdement endettées.
Many Olympic venues become white elephants after the games. | Beaucoup de sites olympiques deviennent des éléphants blancs après les Jeux.
The economic benefits of mega-events are often overstated. | Les retombées économiques des méga-événements sont souvent exagérées.
Doping scandals have tarnished the sport's reputation. | Les scandales de dopage ont terni la réputation de ce sport.
Anti-doping agencies are always a step behind the cheats. | Les agences antidopage ont toujours un temps de retard sur les tricheurs.
Match-fixing undermines the integrity of the game. | Les matchs truqués sapent l'intégrité du jeu.
Sports betting has exploded with online platforms. | Les paris sportifs ont explosé avec les plateformes en ligne.
Gambling sponsorship in sport is increasingly controversial. | Le parrainage du sport par les sociétés de jeux d'argent est de plus en plus controversé.
Video technology has reduced refereeing errors. | La vidéo a réduit les erreurs d'arbitrage.
VAR has slowed down the game and frustrated fans. | La VAR a ralenti le jeu et agacé les supporters.
Data analytics has transformed how teams scout talent. | L'analyse de données a transformé la façon dont les équipes repèrent les talents.
Wearable sensors track every movement in training. | Des capteurs portés sur le corps suivent chaque mouvement à l'entraînement.
Sports science has extended athletes' careers. | Les sciences du sport ont allongé la carrière des athlètes.
Recovery is now treated as seriously as training. | La récupération est désormais prise aussi au sérieux que l'entraînement.
Overtraining can lead to burnout and injury. | Le surentraînement peut mener à l'épuisement et aux blessures.
Concussions in contact sports have long-term consequences. | Les commotions dans les sports de contact ont des conséquences à long terme.
Youth sports have become overly competitive. | Le sport chez les jeunes est devenu trop compétitif.
Early specialization increases the risk of injury. | La spécialisation précoce augmente le risque de blessure.
Athletes are speaking out about mental health. | Les athlètes prennent la parole sur la santé mentale.
The pressure to perform can be crushing. | La pression de la performance peut être écrasante.
Social media abuse of athletes is rampant. | Le harcèlement des athlètes sur les réseaux sociaux est omniprésent.
Many athletes struggle with life after retirement. | Beaucoup d'athlètes ont du mal à vivre l'après-carrière.
Women's sport is finally getting the attention it deserves. | Le sport féminin reçoit enfin l'attention qu'il mérite.
The pay gap in professional sport remains vast. | L'écart salarial dans le sport professionnel reste énorme.
Media coverage of women's sport has lagged far behind. | La couverture médiatique du sport féminin est très en retard.
Transgender inclusion in sport is a deeply divisive issue. | L'inclusion des personnes transgenres dans le sport est un sujet qui divise profondément.
Governing bodies are struggling to balance fairness and inclusion. | Les fédérations peinent à concilier équité et inclusion.
Athletes increasingly use their platform for activism. | Les athlètes utilisent de plus en plus leur notoriété pour militer.
Should sport and politics be kept separate? | Faut-il séparer le sport et la politique ?
Boycotts have a long and contested history in sport. | Les boycotts ont une histoire longue et controversée dans le sport.
Taiwan competes as "Chinese Taipei" at the Olympics. | Taïwan participe aux Jeux olympiques sous le nom de « Taipei chinois ».
The name issue is a constant reminder of Taiwan's diplomatic situation. | La question du nom rappelle sans cesse la situation diplomatique de Taïwan.
National pride runs high during international competitions. | La fierté nationale est à son comble pendant les compétitions internationales.
Sport has the power to unite a divided nation. | Le sport a le pouvoir d'unir une nation divisée.
The victory sparked celebrations across the country. | La victoire a déclenché des célébrations dans tout le pays.
Grassroots sport is chronically underfunded. | Le sport amateur est chroniquement sous-financé.
Investment in facilities has a lasting impact on participation. | Investir dans les équipements a un effet durable sur la pratique sportive.
Physical education is being squeezed out of the curriculum. | L'éducation physique est peu à peu évincée des programmes scolaires.
Physical inactivity is a major public health problem. | L'inactivité physique est un problème majeur de santé publique.
Sedentary lifestyles are linked to a range of chronic diseases. | La sédentarité est liée à toute une série de maladies chroniques.
Even moderate exercise has significant health benefits. | Même une activité modérée a des bienfaits importants pour la santé.
Consistency matters far more than intensity. | La régularité compte bien plus que l'intensité.
Strength training becomes more important as we age. | Le renforcement musculaire devient plus important avec l'âge.
Fitness culture can promote unhealthy body image. | La culture du fitness peut encourager une image du corps malsaine.
Supplements are a largely unregulated industry. | Les compléments alimentaires sont une industrie largement non réglementée.
Fitness trackers can motivate, but they can also become an obsession. | Les bracelets connectés peuvent motiver, mais aussi devenir une obsession.
Esports are now recognized at major multi-sport events. | L'e-sport est désormais reconnu dans de grands événements multisports.
Purists argue that esports aren't real sports. | Les puristes affirment que l'e-sport n'est pas un vrai sport.
Commercial interests now dictate scheduling. | Les intérêts commerciaux dictent désormais le calendrier.
Fans complain that ticket prices have priced them out. | Les supporters se plaignent de ne plus pouvoir payer les billets.
Clubs are increasingly owned by foreign investors and states. | Les clubs appartiennent de plus en plus à des investisseurs étrangers et à des États.
Fan ownership models give supporters a real voice. | L'actionnariat populaire donne aux supporters une vraie voix.
The breakaway league proposal was met with fierce backlash. | Le projet de ligue dissidente a suscité une violente levée de boucliers.
Financial fair play rules are meant to curb reckless spending. | Les règles du fair-play financier visent à freiner les dépenses inconsidérées.
Transfer fees have reached astronomical levels. | Les indemnités de transfert ont atteint des niveaux astronomiques.
Player power has shifted the balance in contract negotiations. | Le pouvoir des joueurs a modifié l'équilibre des négociations de contrat.
Agents take a hefty cut of player earnings. | Les agents prélèvent une grosse part des revenus des joueurs.
Rivalries are what make sport so compelling. | Ce sont les rivalités qui rendent le sport si captivant.
Home advantage is a well-documented phenomenon. | L'avantage du terrain est un phénomène bien documenté.
Momentum can shift in an instant. | La dynamique peut basculer en un instant.
The mental game is just as important as physical ability. | Le mental compte autant que les capacités physiques.
Champions are made in the hours nobody sees. | Les champions se forgent dans les heures que personne ne voit.
Talent will only take you so far without discipline. | Sans discipline, le talent ne mène pas très loin.
Resilience is what separates good athletes from great ones. | C'est la résilience qui distingue les bons athlètes des grands.
Losing teaches you more than winning ever will. | La défaite t'apprend plus que la victoire ne le fera jamais.
They showed tremendous grit to come back. | Ils ont fait preuve d'une ténacité incroyable pour revenir.
The team lacked cohesion despite its star players. | L'équipe manquait de cohésion malgré ses stars.
Chemistry matters more than individual brilliance. | L'alchimie collective compte plus que le talent individuel.
The manager's tactics were exposed by a younger team. | La tactique de l'entraîneur a été mise à nu par une équipe plus jeune.
They parked the bus and played for a draw. | Ils ont garé le bus et joué le match nul.
The underdog story captured the public imagination. | L'histoire de l'outsider a captivé le public.
It was one of the greatest upsets in sporting history. | C'était l'une des plus grandes surprises de l'histoire du sport.
The rules were changed to make the game more exciting. | Les règles ont été modifiées pour rendre le jeu plus spectaculaire.
Shorter formats are attracting younger audiences. | Les formats plus courts attirent un public plus jeune.
Streaming is changing how fans consume sport. | Le streaming change la façon dont les fans regardent le sport.
Highlights on social media have replaced full matches for many fans. | Pour beaucoup de fans, les résumés sur les réseaux sociaux ont remplacé les matchs complets.
Athletes are now brands in their own right. | Les athlètes sont désormais des marques à part entière.
Endorsement deals can dwarf athletes' salaries. | Les contrats publicitaires peuvent éclipser le salaire des athlètes.
Climate change is threatening winter sports. | Le changement climatique menace les sports d'hiver.
Extreme heat poses serious risks to athletes. | La chaleur extrême fait courir de graves risques aux athlètes.
Major events are under pressure to cut their carbon footprint. | Les grands événements sont pressés de réduire leur empreinte carbone.
Accessibility at sports venues has improved, but there's a long way to go. | L'accessibilité des équipements sportifs s'est améliorée, mais il reste beaucoup à faire.
The Paralympics have transformed attitudes toward disability. | Les Jeux paralympiques ont changé le regard sur le handicap.
Adaptive sports give everyone the chance to compete. | Le sport adapté donne à chacun la chance de concourir.
Sport teaches teamwork, discipline and respect. | Le sport enseigne l'esprit d'équipe, la discipline et le respect.
Sport can be a ladder out of poverty. | Le sport peut être un moyen de sortir de la pauvreté.
Community sport programs keep young people out of trouble. | Les programmes sportifs de quartier éloignent les jeunes des ennuis.
The final whistle doesn't end the debate among fans. | Le coup de sifflet final ne met pas fin au débat entre supporters.
Every fan thinks they could manage the team better. | Chaque supporter pense qu'il dirigerait mieux l'équipe.
Sport is the most important of the unimportant things. | Le sport est la plus importante des choses sans importance.
Salary caps are designed to keep competition balanced. | Les plafonds salariaux visent à maintenir une compétition équilibrée.
Ticket touts exploit the demand for big games. | Les revendeurs de billets profitent de la demande pour les grands matchs.
Instant replay has taken some of the drama out of close calls. | Le ralenti a enlevé une part de suspense aux décisions serrées.
Physical literacy should be developed from early childhood. | La littératie physique devrait se développer dès la petite enfance.
`,
});
