// 法文對照（Français）：羽球
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


addFrench("badminton", {
  words: `
badminton | le badminton | Je joue au badminton avec ma sœur.
racket | la raquette | J'ai une nouvelle raquette.
shuttlecock | le volant | Ramasse le volant.
birdie | le volant | Envoie le volant par-dessus le filet.
net | le filet | Le volant a touché le filet.
court | le terrain | Réservons un terrain.
line | la ligne | C'était sur la ligne ?
in | dedans | Il est dedans !
out | dehors | Il est dehors.
serve | le service | C'est ton service.
hit | frapper | Frappe haut !
miss | rater | Je l'ai raté.
point | le point | Ce point est pour moi.
score | le score | Quel est le score ?
game | le set | J'ai gagné le premier set.
match | le match | Le match était serré.
win | gagner | Tu as gagné !
lose | perdre | Je ne veux pas perdre.
player | le joueur | C'est une excellente joueuse.
partner | le partenaire | Tu es mon partenaire.
team | l'équipe | Notre équipe a gagné.
coach | l'entraîneur | Mon entraîneur est strict.
gym | le gymnase | Nous jouons au gymnase.
shoes | les chaussures | Mets des chaussures d'intérieur.
grip | le grip | Tiens le grip sans serrer.
string | le cordage | Une corde est cassée.
wind | le vent | Il y a trop de vent pour jouer dehors.
fast | rapide | C'était un coup rapide !
high | haut | Frappe haut.
low | bas | Garde-le bas.
front | l'avant | Cours à l'avant.
back | le fond | Va au fond.
left | à gauche | Envoie-le à gauche.
right | à droite | Surveille le côté droit.
jump | sauter | Saute et frappe !
run | courir | Cours, cours !
ready | prêt | Prêt ?
again | encore | On rejoue.
good shot | beau coup | Beau coup !
nice try | bien essayé | Bien essayé !
my turn | mon tour | C'est mon tour de servir.
your turn | ton tour | À toi !
sweat | la sueur | Je suis couvert de sueur.
water | l'eau | Allons boire de l'eau.
tired | fatigué | Je suis tellement fatigué.
fun | amusant | Le badminton, c'est amusant.
park | le parc | Nous avons joué au parc.
school | l'école | Nous jouons à l'école.
friend | l'ami | Je joue avec mon ami.
family | la famille | Ma famille joue ensemble.
weekend | le week-end | Nous jouons le week-end.
evening | le soir | Jouons ce soir.
light | léger | Cette raquette est légère.
heavy | lourd | Cette raquette est lourde.
feather | la plume | Le volant a des plumes.
plastic | en plastique | Les volants en plastique durent plus longtemps.
broken | cassé | Ma raquette est cassée.
new | neuf | Prends un volant neuf.
buy | acheter | Je veux acheter une raquette.
bag | le sac | Mets ta raquette dans ton sac.
towel | la serviette | Apporte une serviette.
wristband | le poignet éponge | Je porte un poignet éponge.
singles | le simple | Jouons en simple.
doubles | le double | Jouons en double.
mixed doubles | le double mixte | Nous jouons en double mixte.
fault | la faute | C'est une faute.
let | le let | C'est un let. Resservez.
deuce | l'égalité | 20 partout, égalité !
champion | le champion | C'est la championne.
medal | la médaille | Elle a gagné une médaille d'or.
Olympics | les Jeux olympiques | Le badminton est aux Jeux olympiques.
fan | le fan | Je suis fan de badminton.
TV | la télé | Nous avons regardé la finale à la télé.
practice | l'entraînement | Nous nous entraînons deux fois par semaine.
lesson | le cours | Je prends des cours de badminton.
club | le club | J'ai rejoint un club de badminton.
rent | louer | Louons un terrain.
hour | l'heure | Nous avons réservé le terrain pour deux heures.
lights | l'éclairage | Allume l'éclairage du terrain.
ceiling | le plafond | Le volant a touché le plafond.
watch | regarder | Regarde le volant.
catch | attraper | Attrape le volant.
pick up | ramasser | Ramasse le volant.
throw | lancer | Lance-le-moi.
warm up | s'échauffer | Échauffons-nous.
stretch | étirer | Étire tes bras.
arm | le bras | J'ai mal au bras.
wrist | le poignet | Utilise ton poignet.
knee | le genou | Plie les genoux.
foot | le pied | Mets ton pied sur la ligne.
strong | fort | Il faut des jambes fortes.
quick | vif | Elle est très vive.
smile | sourire | Elle sourit toujours quand elle joue.
high five | tope là | Tope là !
thank you | merci | Merci pour la partie.
racket bag | le sac à raquettes | Mon sac à raquettes contient trois raquettes.
backyard | le jardin | Nous avons joué dans le jardin.
beginner | le débutant | Je suis débutant.
rules | les règles | Tu connais les règles ?
count | compter | Compte les points à voix haute.
`,
  phrases: `
Do you play badminton? | Tu joues au badminton ?
Let's play badminton. | Jouons au badminton.
I have two rackets. | J'ai deux raquettes.
Do you have a shuttlecock? | Tu as un volant ?
Let's play in the park. | Jouons au parc.
It's too windy outside. | Il y a trop de vent dehors.
Let's play in the gym. | Jouons au gymnase.
Can we book a court? | On peut réserver un terrain ?
Who serves first? | Qui sert en premier ?
You serve first. | Tu sers en premier.
My serve! | À moi de servir !
Ready? | Prêt ?
Go! | C'est parti !
Hit it over the net. | Envoie-le par-dessus le filet.
Hit it high. | Frappe haut.
Good shot! | Beau coup !
Nice try! | Bien essayé !
I missed. | Je l'ai raté.
Sorry! | Pardon !
That's okay. | Ce n'est pas grave.
Was it in or out? | C'était dedans ou dehors ?
It's in. | C'est dedans.
It's out. | C'est dehors.
It touched the line. | Il a touché la ligne.
The line is in. | La ligne est bonne.
It hit the net. | Il a touché le filet.
Let's play it again. | On rejoue le point.
What's the score? | Quel est le score ?
Five to three. | Cinq à trois.
It's my point. | Le point est pour moi.
It's your point. | Le point est pour toi.
Game point! | Balle de set !
I win! | J'ai gagné !
You win! | Tu as gagné !
Good game! | Bien joué !
Let's play one more game. | Jouons encore un set.
I'm tired. | Je suis fatigué.
Let's take a break. | Faisons une pause.
I need some water. | J'ai besoin d'eau.
I'm sweating a lot. | Je transpire beaucoup.
Pick up the shuttlecock, please. | Ramasse le volant, s'il te plaît.
The shuttlecock is broken. | Le volant est abîmé.
Use a new one. | Prends-en un neuf.
My racket string broke. | Le cordage de ma raquette a cassé.
Can I borrow your racket? | Je peux t'emprunter ta raquette ?
This racket is very light. | Cette raquette est très légère.
Hold the racket like this. | Tiens la raquette comme ça.
Don't hold it too tight. | Ne la serre pas trop.
Watch the shuttlecock. | Regarde le volant.
Move your feet. | Bouge tes pieds.
Run to the front! | Cours à l'avant !
Go back! | Recule !
Bend your knees. | Plie les genoux.
Get ready. | Prépare-toi.
It's your turn. | C'est ton tour.
Let's play doubles. | Jouons en double.
You can be my partner. | Tu peux être mon partenaire.
I'll take the front. You take the back. | Je prends l'avant. Tu prends le fond.
Mine! | À moi !
Yours! | À toi !
Leave it! | Laisse !
Great teamwork! | Super travail d'équipe !
I'm a beginner. | Je suis débutant.
Can you teach me? | Tu peux m'apprendre ?
Sure, it's easy. | Bien sûr, c'est facile.
I play badminton every week. | Je joue au badminton toutes les semaines.
I take badminton lessons. | Je prends des cours de badminton.
I joined a badminton club. | J'ai rejoint un club de badminton.
Our school has a badminton team. | Notre école a une équipe de badminton.
Badminton is very popular in Taiwan. | Le badminton est très populaire à Taïwan.
I watched the Olympics on TV. | J'ai regardé les Jeux olympiques à la télé.
Taiwan won a gold medal! | Taïwan a gagné une médaille d'or !
They're my favorite players. | Ce sont mes joueurs préférés.
I want to play like them. | Je veux jouer comme eux.
Let's practice serving. | Entraînons-nous au service.
Serve low. | Sers bas.
Serve high and deep. | Sers haut et long.
Hit it to the corner. | Envoie-le dans le coin.
Jump and hit! | Saute et frappe !
That was fast! | C'était rapide !
You're really good. | Tu es vraiment bon.
You're getting better. | Tu progresses.
Thanks for playing with me. | Merci d'avoir joué avec moi.
Same time next week? | Même heure la semaine prochaine ?
Bring your own shuttlecocks. | Apporte tes propres volants.
Wear court shoes. | Mets des chaussures d'intérieur.
Don't wear black soles on the court. | Ne porte pas de semelles noires sur le terrain.
Turn on the lights. | Allume la lumière.
The court is free now. | Le terrain est libre maintenant.
We have the court until nine. | Nous avons le terrain jusqu'à neuf heures.
Can we join you? | On peut se joindre à vous ?
Let's rotate. Winners stay on. | Faisons tourner. Les gagnants restent.
Who's next? | Qui est le suivant ?
My arm hurts. | J'ai mal au bras.
I hurt my ankle. | Je me suis fait mal à la cheville.
Let's stretch first. | Étirons-nous d'abord.
Warm up before you play. | Échauffe-toi avant de jouer.
Badminton is great exercise. | Le badminton est un excellent exercice.
I love badminton! | J'adore le badminton !
Nice rally! | Bel échange !
`,
});

addFrench("badminton", {
  words: `
smash | le smash | Son smash est très puissant.
clear | le dégagement | Fais un dégagement vers le fond.
drop shot | l'amorti | Elle a gagné le point sur un amorti.
drive | le drive | Ils ont échangé des drives rapides.
net shot | le contre-amorti | Son contre-amorti était serré.
lift | le lob | Envoie un lob vers le fond.
push | la poussette | Fais une poussette vers le milieu du terrain.
kill | le rush | Il l'a tué au filet.
block | le bloc | Bloque le smash.
lob | le lob | Un lob te donne du temps.
short serve | le service court | Les joueurs de double utilisent un service court.
long serve | le service long | Un service long les repousse au fond.
forehand | le coup droit | Utilise ton coup droit.
backhand | le revers | Mon revers est faible.
footwork | le jeu de jambes | Un bon jeu de jambes, c'est tout.
split step | le pas d'appel | Fais un pas d'appel avant chaque coup.
lunge | la fente | Fais une fente pour atteindre le contre-amorti.
rally | l'échange | Cet échange a duré quarante coups.
service line | la ligne de service | Reste derrière la ligne de service.
baseline | la ligne de fond | Le volant est tombé sur la ligne de fond.
sideline | la ligne de côté | Le simple utilise la ligne de côté intérieure.
mid-court | le milieu de terrain | Il couvre bien le milieu de terrain.
front court | l'avant du terrain | Elle est forte à l'avant du terrain.
rear court | le fond du terrain | Il joue au fond du terrain en double.
attacking formation | la position d'attaque | Passez en position d'attaque.
defensive formation | la position de défense | Mettez-vous côte à côte en position de défense.
rotation | la rotation | Leur rotation est fluide.
string tension | la tension du cordage | La tension de mon cordage est de 26 livres.
restring | recorder | Je dois faire recorder ma raquette.
overgrip | le surgrip | Change souvent ton surgrip.
feather shuttlecock | le volant en plumes | Les tournois utilisent des volants en plumes.
shuttle speed | la vitesse du volant | Choisis la vitesse du volant selon la température.
racket head | la tête de raquette | Garde la tête de raquette haute.
head-heavy | lourd en tête | Une raquette lourde en tête donne de la puissance.
head-light | léger en tête | Une raquette légère en tête est rapide au filet.
stiff shaft | le manche rigide | Un manche rigide convient aux joueurs puissants.
flexible shaft | le manche flexible | Les débutants préfèrent un manche flexible.
court shoes | les chaussures de badminton | Les chaussures de badminton protègent les chevilles.
non-marking soles | les semelles non marquantes | Porte des semelles non marquantes sur le terrain.
rubber floor | le sol synthétique | La salle a un sol synthétique.
service fault | la faute de service | C'était une faute de service : trop haut.
service height | la hauteur de service | La hauteur de service maximale est de 1,15 mètre.
rally point | le comptage en points directs | Le badminton se joue en points directs.
21 points | 21 points | Un set se joue en 21 points.
best of three | deux sets gagnants | Le match se joue en deux sets gagnants.
change ends | changer de côté | Les joueurs changent de côté après chaque set.
interval | la pause | Il y a une pause à 11 points.
umpire | l'arbitre | L'arbitre a sifflé une faute.
line judge | le juge de ligne | Le juge de ligne a annoncé dehors.
challenge | le challenge | Elle a utilisé son challenge.
Hawk-Eye | l'Hawk-Eye | L'Hawk-Eye a montré qu'il était dedans.
seed | la tête de série | C'est la tête de série numéro un.
ranking | le classement | Il est numéro un au classement.
BWF | la BWF | La BWF organise le circuit mondial.
World Tour | le World Tour | Elle a gagné trois titres du World Tour.
Super 1000 | les Super 1000 | Les Super 1000 offrent les plus grosses primes.
Thomas Cup | la Thomas Cup | La Thomas Cup est l'épreuve masculine par équipes.
Uber Cup | l'Uber Cup | L'Uber Cup est l'épreuve féminine par équipes.
Sudirman Cup | la Sudirman Cup | La Sudirman Cup est l'épreuve mixte par équipes.
All England | l'All England | Elle a gagné le titre de l'All England.
qualifier | les qualifications | Il est sorti des qualifications.
quarterfinal | le quart de finale | Ils ont perdu en quart de finale.
semifinal | la demi-finale | Elle a atteint la demi-finale.
final | la finale | La finale a lieu dimanche.
upset | la surprise | C'était une énorme surprise.
comeback | la remontée | Quelle remontée depuis 15-20 !
match point | la balle de match | C'est balle de match.
game point | la balle de set | Elle a sauvé trois balles de set.
retire | abandonner | Il a dû abandonner sur blessure.
walkover | le forfait | Elle s'est qualifiée par forfait.
cramp | la crampe | Il a eu une crampe dans le troisième set.
ankle sprain | l'entorse de la cheville | Les entorses de la cheville sont fréquentes au badminton.
shoulder pain | la douleur à l'épaule | Trop de smashs lui ont causé une douleur à l'épaule.
tennis elbow | le tennis-elbow | Les joueurs de badminton peuvent aussi avoir un tennis-elbow.
stamina | l'endurance | Il faut de l'endurance pour un match de 90 minutes.
agility | l'agilité | Les exercices d'agilité améliorent le jeu de jambes.
reaction time | le temps de réaction | Le double demande un temps de réaction rapide.
shadow footwork | le jeu de jambes à vide | Fais du jeu de jambes à vide tous les jours.
multi-shuttle drill | l'exercice multivolants | L'entraîneur a fait un exercice multivolants.
sparring partner | le partenaire d'entraînement | J'ai besoin d'un partenaire d'entraînement.
club night | la soirée du club | La soirée du club a lieu jeudi.
court booking | la réservation de terrain | La réservation de terrain ouvre à minuit.
sports center | le centre sportif | Le centre sportif a huit terrains.
sweet spot | le centre du tamis | Frappe avec le centre du tamis.
follow-through | l'accompagnement | Termine ton accompagnement.
wrist snap | le coup de poignet | Utilise un coup de poignet pour la puissance.
deception | la feinte | Ses feintes trompent tout le monde.
placement | le placement | Le placement l'emporte sur la puissance.
tempo | le rythme | Change le rythme de l'échange.
pressure | la pression | Maintiens la pression.
cross-court | croisé | Elle a fait un smash croisé.
straight | long de ligne | Joue un amorti long de ligne.
body smash | le smash au corps | Un smash au corps est difficile à renvoyer.
jump smash | le smash sauté | Son smash sauté est redoutable.
tight net shot | le contre-amorti serré | Un contre-amorti serré oblige l'adversaire à lober.
flick serve | le service flick | Un service flick l'a pris par surprise.
around-the-head shot | le coup au-dessus de la tête | Il a joué un coup au-dessus de la tête.
crossover step | le pas croisé | Utilise un pas croisé pour atteindre le coin.
chasse step | le pas chassé | Le pas chassé te déplace latéralement.
net cord | la bande du filet | Il a touché la bande du filet et il est retombé de l'autre côté.
keep your eye on the shuttle | garder les yeux sur le volant | Garde les yeux sur le volant.
back and forth | dans un va-et-vient | Nous avons échangé dans un va-et-vient pendant une heure.
on your toes | sur le qui-vive | Reste sur le qui-vive.
quick on your feet | vif sur ses jambes | Il faut être vif sur ses jambes.
a close game | un match serré | C'était un match serré.
smash it | tout déchirer | Vas-y et déchire tout !
the upper hand | le dessus | Elle a le dessus maintenant.
in your court | dans ton camp | Maintenant, c'est dans ton camp.
level the score | égaliser | Il lui faut un point pour égaliser.
a fair game | un match équitable | C'était un match équitable.
practice makes perfect | c'est en forgeant qu'on devient forgeron | C'est en forgeant qu'on devient forgeron.
a rally | un échange | C'était un échange de cinquante coups.
`,
});

addFrench("badminton", {
  phrases: `
Can you book a court for tonight? | Tu peux réserver un terrain pour ce soir ?
Court booking opens at midnight. | La réservation des terrains ouvre à minuit.
Let's play singles first, then doubles. | Jouons d'abord en simple, puis en double.
We play to 21 points, best of three. | On joue en 21 points, deux sets gagnants.
We'll change ends after each game. | On change de côté après chaque set.
There's a short break at 11 points. | Il y a une courte pause à 11 points.
It's 20-all. You need two clear points. | 20 partout. Il faut deux points d'écart.
The serve has to be below the waist. | Le service doit être frappé sous la taille.
That was a service fault. | C'était une faute de service.
You stepped on the line when you served. | Tu as marché sur la ligne en servant.
Your serve was too high. | Ton service était trop haut.
In doubles, the short service line matters. | En double, la ligne de service courte est importante.
The long service line is different in doubles. | La ligne de service longue est différente en double.
It's a let. Play it again. | C'est un let. On rejoue.
Your smash is really powerful. | Ton smash est vraiment puissant.
Try a drop shot instead. | Essaie plutôt un amorti.
Hit a deep clear to push them back. | Fais un dégagement long pour les repousser.
Use more net shots. | Fais plus de jeu au filet.
Your net play is very tight. | Ton jeu au filet est très serré.
Don't lift so much. | Ne lobe pas autant.
Keep the shuttle down. | Garde le volant bas.
Push it to the mid-court. | Pousse-le au milieu du terrain.
Drive it flat and fast. | Fais un drive à plat et rapide.
Attack the body. | Attaque le corps.
Smash cross-court. | Smashe en croisé.
Play it straight. | Joue long de ligne.
Mix up your shots. | Varie tes coups.
Watch her deception. | Méfie-toi de ses feintes.
Your backhand is getting better. | Ton revers s'améliore.
Use your wrist, not your whole arm. | Utilise ton poignet, pas tout ton bras.
Change your grip for backhand shots. | Change de prise pour les revers.
Split step before each shot. | Fais un pas d'appel avant chaque coup.
Get back to the center after every shot. | Reviens au centre après chaque coup.
Lunge forward with your racket foot. | Fends-toi en avant avec le pied du côté de la raquette.
Good footwork makes everything easier. | Un bon jeu de jambes rend tout plus facile.
When we attack, you go to the back. | Quand on attaque, tu vas au fond.
When we defend, stand side by side. | Quand on défend, on se met côte à côte.
I'll take the net. | Je prends le filet.
Cover the middle! | Couvre le milieu !
Call it! | Annonce !
Sorry, that was mine. | Désolé, c'était à moi.
Our rotation needs work. | Notre rotation doit être travaillée.
Their smash is strong, so lift high and deep. | Leur smash est fort, alors lobe haut et long.
Target the weaker player. | Vise le joueur le plus faible.
Don't give them easy lifts. | Ne leur donne pas de lobs faciles.
That rally was amazing! | Cet échange était incroyable !
That went on for forty shots! | Ça a duré quarante coups !
I need to restring my racket. | Je dois faire recorder ma raquette.
What tension do you use? | Tu cordes à quelle tension ?
I string at 26 pounds. | Je corde à 26 livres.
Higher tension gives more control. | Une tension plus élevée donne plus de contrôle.
Lower tension gives more power. | Une tension plus basse donne plus de puissance.
I need a new overgrip. | J'ai besoin d'un nouveau surgrip.
Feather shuttles fly better than plastic ones. | Les volants en plumes volent mieux que ceux en plastique.
These shuttles are too fast for this hall. | Ces volants sont trop rapides pour cette salle.
The air conditioning is causing drift. | La climatisation fait dériver le volant.
Which racket do you recommend? | Quelle raquette tu me conseilles ?
A head-heavy racket is good for smashing. | Une raquette lourde en tête est bonne pour smasher.
A head-light racket is quicker at the net. | Une raquette légère en tête est plus rapide au filet.
A flexible shaft is easier for beginners. | Un manche flexible est plus facile pour les débutants.
Court shoes help prevent ankle injuries. | Les chaussures de badminton aident à prévenir les blessures à la cheville.
I sprained my ankle last week. | Je me suis fait une entorse à la cheville la semaine dernière.
My shoulder hurts from too many smashes. | J'ai mal à l'épaule à cause de trop de smashs.
Ice it and rest for a few days. | Mets de la glace et repose-toi quelques jours.
Do your stretches after you play. | Fais tes étirements après avoir joué.
I'm working on my stamina. | Je travaille mon endurance.
I do footwork drills every morning. | Je fais des exercices de jeu de jambes tous les matins.
The coach fed us multi-shuttle drills. | L'entraîneur nous a fait faire des exercices multivolants.
Our club meets on Tuesday and Thursday nights. | Notre club se réunit le mardi et le jeudi soir.
Club night is a great way to meet people. | La soirée du club est un excellent moyen de rencontrer des gens.
Can I join your group? | Je peux rejoindre votre groupe ?
What level do you play at? | Tu joues à quel niveau ?
I'm an intermediate player. | Je suis de niveau intermédiaire.
Let's play mixed doubles. | Jouons en double mixte.
Did you watch the final last night? | Tu as regardé la finale hier soir ?
It went to three games. | Ça s'est joué en trois sets.
She saved four match points! | Elle a sauvé quatre balles de match !
He used his challenge, and Hawk-Eye showed it was in. | Il a utilisé son challenge, et l'Hawk-Eye a montré que c'était dedans.
The line judge called it out. | Le juge de ligne a annoncé dehors.
The umpire overruled the call. | L'arbitre a annulé la décision.
They're the top seeds. | Ce sont les têtes de série numéro un.
It was a huge upset. | C'était une énorme surprise.
She's ranked number one in the world. | Elle est numéro un mondiale.
Taiwan's men's doubles are world champions. | Le double messieurs de Taïwan est champion du monde.
Everyone in Taiwan was watching the Olympic final. | Tout Taïwan regardait la finale olympique.
The Thomas Cup is the most prestigious team event. | La Thomas Cup est l'épreuve par équipes la plus prestigieuse.
The All England is the oldest tournament. | L'All England est le plus ancien tournoi.
Badminton is the fastest racket sport. | Le badminton est le sport de raquette le plus rapide.
A smash can be over 400 kilometers an hour. | Un smash peut dépasser 400 kilomètres à l'heure.
You need quick reactions for doubles. | Il faut des réflexes rapides en double.
Placement beats power. | Le placement l'emporte sur la puissance.
Stay patient in long rallies. | Reste patient dans les longs échanges.
Don't rush the kill. | Ne te précipite pas pour conclure.
Wait for the right shuttle to attack. | Attends le bon volant pour attaquer.
Play to your strengths. | Joue sur tes points forts.
Keep your racket up. | Garde ta raquette haute.
Good game! Let's shake hands. | Bien joué ! Serrons-nous la main.
Same time next week? | Même heure la semaine prochaine ?
Let's split the court fee. | Partageons les frais de terrain.
I'll bring the shuttles next time. | J'apporterai les volants la prochaine fois.
`,
});

addFrench("badminton", {
  words: `
shuttle trajectory | la trajectoire du volant | Les plumes donnent au volant une trajectoire unique.
aerodynamics | l'aérodynamique | L'aérodynamique du volant provoque une décélération rapide.
deceleration | la décélération | La décélération du volant est extrême.
initial velocity | la vitesse initiale | La vitesse initiale d'un smash peut dépasser 400 km/h.
world record smash | le record du monde du smash | Le record du monde du smash a été mesuré à plus de 500 km/h.
biomechanics | la biomécanique | La biomécanique explique un smash puissant.
kinetic chain | la chaîne cinétique | La chaîne cinétique va des jambes au poignet.
forearm rotation | la rotation de l'avant-bras | La rotation de l'avant-bras génère la vitesse de la raquette.
pronation | la pronation | La pronation ajoute de la puissance au smash.
supination | la supination | Les dégagements de revers reposent sur la supination.
finger power | la force des doigts | La force des doigts rend les drives courts incisifs.
grip change | le changement de prise | Les changements de prise rapides sont essentiels au filet.
panhandle grip | la prise poêle | La prise poêle aide au filet.
bevel grip | la prise sur le biseau | Utilise la prise sur le biseau pour les dégagements de revers.
spinning net shot | le contre-amorti coupé | Un contre-amorti coupé tourne par-dessus la bande.
tumbling net shot | le contre-amorti qui tourne | Les contre-amortis qui tournent sont difficiles à lober.
hairpin | le contre-amorti | Son contre-amorti est parfait.
reverse slice | l'amorti coupé inversé | Son amorti coupé inversé est trompeur.
stick smash | le smash sec | Un smash sec utilise un geste court.
half-smash | le demi-smash | Un demi-smash garde l'échange sous contrôle.
flat game | le jeu à plat | Le double est dominé par le jeu à plat.
interception | l'interception | Une interception précoce fait gagner des points en double.
third shot | le troisième coup | Le troisième coup prépare l'attaque.
serve return | le retour de service | Un bon retour de service prend l'initiative.
initiative | l'initiative | Garde l'initiative avec des drives rapides.
transition | la transition | La transition de la défense à l'attaque est essentielle.
court coverage | la couverture du terrain | Sa couverture du terrain est extraordinaire.
anticipation | l'anticipation | L'anticipation compte plus que la vitesse.
shot selection | le choix des coups | Le choix des coups sous pression décide des matchs.
pattern of play | le schéma de jeu | Chaque paire a son schéma de jeu.
tactical awareness | le sens tactique | Le sens tactique distingue les bons des grands.
game plan | le plan de jeu | Leur plan de jeu visait son revers.
match fitness | la condition de match | La condition de match vient de la compétition.
anaerobic capacity | la capacité anaérobie | Les échanges mettent à l'épreuve la capacité anaérobie.
interval training | l'entraînement fractionné | L'entraînement fractionné reproduit l'intensité d'un match.
plyometric training | l'entraînement pliométrique | L'entraînement pliométrique développe des sauts explosifs.
periodization | la périodisation | La périodisation prépare les joueurs aux grands événements.
peaking | le pic de forme | Atteindre son pic de forme pour les Jeux olympiques prend des années.
injury prevention | la prévention des blessures | La prévention des blessures commence par un bon jeu de jambes.
patellar tendinitis | la tendinite rotulienne | Les sauts provoquent des tendinites rotuliennes.
Achilles rupture | la rupture du tendon d'Achille | Une rupture du tendon d'Achille peut mettre fin à une carrière.
rotator cuff | la coiffe des rotateurs | Renforce ta coiffe des rotateurs.
load management | la gestion de la charge | La gestion de la charge garde les stars en bonne santé.
sports psychology | la psychologie du sport | La psychologie du sport aide sur balle de match.
composure | le sang-froid | Elle a gardé son sang-froid à 19-20.
momentum shift | le basculement du match | Un seul échange a fait basculer le match.
crowd pressure | la pression du public | La pression du public a pesé sur le joueur local.
drift | la dérive | La dérive dans cette salle perturbe les dégagements.
air conditioning | la climatisation | La climatisation fait dériver le volant.
venue conditions | les conditions de la salle | Les joueurs se sont plaints des conditions de la salle.
lighting | l'éclairage | Un mauvais éclairage rend le volant difficile à voir.
synthetic shuttle | le volant synthétique | Les volants synthétiques volent différemment.
goose feathers | les plumes d'oie | Les meilleurs volants utilisent des plumes d'oie.
feather shortage | la pénurie de plumes | Une pénurie de plumes a fait grimper le prix des volants.
sustainability | la durabilité | Les volants synthétiques pourraient améliorer la durabilité.
equipment sponsor | l'équipementier | Son équipementier a conçu une nouvelle raquette.
prize money | les primes | Les primes ont fortement augmenté.
appearance fee | la prime de participation | Les stars touchent une prime de participation.
tournament schedule | le calendrier des tournois | Le calendrier des tournois est épuisant.
world ranking points | les points au classement mondial | Les joueurs courent après les points au classement mondial.
Olympic qualification | la qualification olympique | La qualification olympique dépend du classement.
national squad | l'équipe nationale | Il a été sélectionné en équipe nationale.
training camp | le stage | Le stage a duré un mois.
independent player | le joueur indépendant | Certaines stars s'entraînent en joueurs indépendants.
federation | la fédération | La fédération sélectionne l'équipe olympique.
sports funding | le financement du sport | Le financement du sport a augmenté après l'or olympique.
talent pipeline | la filière de talents | Taïwan a une solide filière de talents.
grassroots program | le programme de base | Les programmes de base commencent à sept ans.
sports school | la section sportive | Elle s'est entraînée dans une section sportive.
national hero | le héros national | La paire de double est devenue un héros national.
parade | le défilé | La ville a organisé un défilé pour les médaillés.
golden era | l'âge d'or | C'est l'âge d'or du badminton taïwanais.
Asian dominance | la domination asiatique | La domination asiatique au badminton est écrasante.
European tradition | la tradition européenne | Le Danemark mène la tradition européenne du badminton.
Indonesian flair | le style indonésien | Le style indonésien est célèbre au filet.
Chinese system | le système chinois | Le système chinois produit de nombreux champions.
rivalry | la rivalité | Leur rivalité dure depuis une décennie.
head-to-head | le face-à-face | Leur bilan en face-à-face est de 10-9.
three-game thriller | le match à suspense en trois sets | La finale a été un match à suspense en trois sets.
marathon match | le match marathon | C'était un match marathon de 120 minutes.
retirement | la retraite | Elle a annoncé sa retraite après les Jeux olympiques.
comeback trail | le chemin du retour | Il est sur le chemin du retour après son opération.
legacy | l'héritage | Son héritage est assuré.
role model | le modèle | C'est un modèle pour les jeunes joueurs.
mental toughness | la force mentale | La force mentale fait gagner les longs échanges.
nerves | les nerfs | Ses nerfs ont lâché sur balle de match.
choke | craquer | Il a craqué alors qu'il menait largement.
clutch | décisif | Elle est décisive dans les sets décisifs.
stamina management | la gestion de l'effort | La gestion de l'effort compte dans les matchs en trois sets.
recovery between rounds | la récupération entre les tours | La récupération entre les tours est cruciale.
ice bath | le bain glacé | Les joueurs prennent un bain glacé après les matchs.
physiotherapist | le kinésithérapeute | Le kinésithérapeute de l'équipe voyage avec eux.
video analysis | l'analyse vidéo | L'analyse vidéo a révélé ses faiblesses.
data analytics | l'analyse de données | L'analyse de données suit les schémas de frappe.
wearable sensor | le capteur portable | Un capteur portable mesure la hauteur des sauts.
racket technology | la technologie des raquettes | La technologie des raquettes continue de progresser.
carbon fiber | la fibre de carbone | Les raquettes sont en fibre de carbone.
doubles chemistry | l'entente en double | Leur entente en double est inégalée.
front-and-back | avant-arrière | Ils passent en avant-arrière pour attaquer.
side-by-side | côte à côte | Ils défendent côte à côte.
caught off guard | pris au dépourvu | J'ai été pris au dépourvu par l'amorti.
a game of cat and mouse | un jeu du chat et de la souris | Le match était un jeu du chat et de la souris.
on the back foot | sur la défensive | Il a été sur la défensive tout le match.
turn the tables | renverser la situation | Elle peut renverser la situation dans le deuxième set.
seize the initiative | prendre l'initiative | Prends l'initiative tôt.
see it coming | le voir venir | Je ne l'ai pas vu venir.
a war of attrition | une guerre d'usure | C'est devenu une guerre d'usure.
lose your touch | perdre la main | Ne t'inquiète pas, tu ne perdras pas la main.
a split-second decision | une décision en une fraction de seconde | C'était une décision prise en une fraction de seconde.
find your rhythm | trouver son rythme | Une fois que tu auras trouvé ton rythme, tu te détendras.
mix it up | varier | Varie avec des dégagements et des amortis.
in the thick of it | en plein dedans | Nous sommes en plein dedans maintenant.
neck and neck | au coude à coude | Ils étaient au coude à coude à vingt.
the comeback kid | la reine des remontées | C'est la reine des remontées.
too close to call | trop serré pour se prononcer | Le match était trop serré pour se prononcer.
`,
  phrases: `
Badminton demands an extraordinary mix of speed, power and touch. | Le badminton exige un mélange extraordinaire de vitesse, de puissance et de toucher.
The shuttle decelerates faster than any other projectile in sport. | Le volant ralentit plus vite que n'importe quel autre projectile sportif.
That's why a smash can be blistering but a clear still lands short. | C'est pourquoi un smash peut être fulgurant alors qu'un dégagement retombe court.
Shuttle aerodynamics make every hall play differently. | L'aérodynamique du volant fait que chaque salle se joue différemment.
Drift in the hall can decide a close match. | La dérive dans la salle peut décider d'un match serré.
Players choose ends strategically because of the drift. | Les joueurs choisissent leur côté stratégiquement à cause de la dérive.
Power comes from the kinetic chain, not just the arm. | La puissance vient de la chaîne cinétique, pas seulement du bras.
Forearm pronation is the secret of a fast smash. | La pronation de l'avant-bras est le secret d'un smash rapide.
Finger power makes short, sharp drives possible. | La force des doigts rend possibles des drives courts et incisifs.
Fast grip changes separate good players from great ones. | Les changements de prise rapides distinguent les bons joueurs des grands.
A spinning net shot forces the opponent to lift. | Un contre-amorti coupé oblige l'adversaire à lober.
Deception at the net buys you precious time. | Les feintes au filet te font gagner un temps précieux.
A well-disguised drop is more effective than a full smash. | Un amorti bien masqué est plus efficace qu'un smash à pleine puissance.
The half-smash keeps the pressure on without leaving you exposed. | Le demi-smash maintient la pression sans te découvrir.
Modern doubles is dominated by the flat, fast game. | Le double moderne est dominé par le jeu à plat et rapide.
Seizing the initiative early is everything in doubles. | Prendre l'initiative tôt, c'est tout en double.
The third shot often determines who controls the rally. | Le troisième coup détermine souvent qui contrôle l'échange.
A strong serve return can neutralize a good server. | Un bon retour de service peut neutraliser un bon serveur.
Rotation should be seamless, with no gaps on court. | La rotation doit être fluide, sans trous sur le terrain.
The transition from defense to attack is where points are won. | C'est dans la transition de la défense à l'attaque que se gagnent les points.
Anticipation matters more than raw speed. | L'anticipation compte plus que la vitesse pure.
Reading your opponent's body language is a skill you develop over years. | Lire le langage corporel de l'adversaire est une compétence qui se développe au fil des années.
Shot selection under pressure decides tight matches. | Le choix des coups sous pression décide des matchs serrés.
Every elite pair has a recognizable pattern of play. | Chaque paire d'élite a un schéma de jeu reconnaissable.
Video analysis reveals patterns the naked eye misses. | L'analyse vidéo révèle des schémas qui échappent à l'œil nu.
Data analytics now track every shot's placement and speed. | L'analyse de données suit désormais le placement et la vitesse de chaque coup.
Badminton is one of the most physically demanding sports. | Le badminton est l'un des sports les plus exigeants physiquement.
Players change direction hundreds of times in a match. | Les joueurs changent de direction des centaines de fois par match.
Rallies stress both aerobic and anaerobic systems. | Les échanges sollicitent à la fois le système aérobie et anaérobie.
Interval training mimics the stop-start nature of rallies. | L'entraînement fractionné reproduit le rythme saccadé des échanges.
Plyometric work builds explosive movement. | Le travail pliométrique développe l'explosivité.
Periodization helps players peak for the major events. | La périodisation aide les joueurs à être au top lors des grands événements.
The tour schedule leaves little time for recovery. | Le calendrier du circuit laisse peu de temps pour récupérer.
Load management has become essential for top players. | La gestion de la charge est devenue essentielle pour les meilleurs joueurs.
Achilles ruptures and knee injuries are the sport's most feared injuries. | Les ruptures du tendon d'Achille et les blessures au genou sont les plus redoutées de ce sport.
Repetitive smashing puts enormous strain on the shoulder. | Les smashs répétés mettent l'épaule à rude épreuve.
Rotator cuff strength is key to a long career. | La force de la coiffe des rotateurs est la clé d'une longue carrière.
Mental toughness matters most at 19-all in the third game. | La force mentale compte le plus à 19 partout dans le troisième set.
She kept her composure while her opponent unraveled. | Elle a gardé son sang-froid pendant que son adversaire s'effondrait.
One long rally can cause a complete momentum shift. | Un seul long échange peut faire complètement basculer le match.
The home crowd lifted them through the final game. | Le public local les a portés pendant le dernier set.
Crowd pressure can work against home players too. | La pression du public peut aussi jouer contre les joueurs locaux.
Feather shuttles are expensive and environmentally costly. | Les volants en plumes sont chers et coûteux pour l'environnement.
A feather shortage once drove up shuttle prices worldwide. | Une pénurie de plumes a déjà fait grimper le prix des volants dans le monde entier.
Synthetic shuttles may be the more sustainable future. | Les volants synthétiques sont peut-être l'avenir plus durable.
Racket technology has made the game even faster. | La technologie des raquettes a rendu le jeu encore plus rapide.
Asian countries have dominated badminton for decades. | Les pays asiatiques dominent le badminton depuis des décennies.
Denmark is the strongest European nation in badminton. | Le Danemark est la nation européenne la plus forte au badminton.
Indonesian players are famous for their flair at the net. | Les joueurs indonésiens sont célèbres pour leur talent au filet.
China's state system has produced generations of champions. | Le système d'État chinois a produit des générations de champions.
Taiwan's success shows what a strong talent pipeline can achieve. | Le succès de Taïwan montre ce que peut accomplir une solide filière de talents.
Sports schools identify talent at a young age. | Les sections sportives repèrent les talents dès le plus jeune âge.
Grassroots programs keep the pipeline flowing. | Les programmes de base alimentent la filière.
Olympic gold changed the funding landscape overnight. | L'or olympique a changé le paysage du financement du jour au lendemain.
Sports funding often follows medals rather than participation. | Le financement du sport suit souvent les médailles plutôt que la pratique.
Some top players train independently rather than with the national squad. | Certains joueurs de haut niveau s'entraînent seuls plutôt qu'avec l'équipe nationale.
Disputes between players and the federation have made headlines. | Les conflits entre joueurs et fédération ont fait les gros titres.
Selection for the Olympics is based on world ranking points. | La sélection olympique repose sur les points au classement mondial.
Chasing ranking points means playing tournaments back to back. | Courir après les points signifie enchaîner les tournois.
Prize money has grown, but it still lags behind tennis. | Les primes ont augmenté, mais restent loin derrière le tennis.
Equipment sponsors play a big role in players' finances. | Les équipementiers jouent un grand rôle dans les finances des joueurs.
The medalists became national heroes overnight. | Les médaillés sont devenus des héros nationaux du jour au lendemain.
Thousands lined the streets for the victory parade. | Des milliers de personnes bordaient les rues pour le défilé de la victoire.
Their success inspired a boom in junior badminton. | Leur succès a déclenché un essor du badminton chez les jeunes.
Court bookings in Taipei are almost impossible to get after the Olympics. | Après les Jeux olympiques, réserver un terrain à Taipei est presque impossible.
A golden era rarely lasts forever. | Un âge d'or dure rarement éternellement.
The question now is who will carry the torch. | La question est maintenant de savoir qui reprendra le flambeau.
Their head-to-head record shows how close the rivalry is. | Leur bilan en face-à-face montre à quel point la rivalité est serrée.
Great rivalries make the sport more watchable. | Les grandes rivalités rendent le sport plus captivant.
A three-game thriller can last well over an hour. | Un match à suspense en trois sets peut durer bien plus d'une heure.
Marathon matches test fitness as much as skill. | Les matchs marathons testent autant la forme physique que la technique.
Recovery between rounds is critical in a week-long tournament. | La récupération entre les tours est cruciale dans un tournoi d'une semaine.
Ice baths, massage and sleep are part of the routine. | Bains glacés, massages et sommeil font partie de la routine.
Physiotherapists travel with the team to every event. | Les kinésithérapeutes accompagnent l'équipe à chaque compétition.
Wearable sensors measure jump height and workload. | Les capteurs portables mesurent la hauteur des sauts et la charge de travail.
Coaches use technology, but feel still matters. | Les entraîneurs utilisent la technologie, mais le ressenti compte toujours.
Doubles chemistry takes years to build. | L'entente en double met des années à se construire.
Communication between partners must be instant and wordless. | La communication entre partenaires doit être instantanée et sans mots.
Trust lets partners cover each other's weaknesses. | La confiance permet aux partenaires de compenser leurs faiblesses.
Partnerships break up for many reasons, not just results. | Les paires se séparent pour de nombreuses raisons, pas seulement les résultats.
A comeback from serious injury requires great patience. | Revenir d'une grave blessure demande beaucoup de patience.
Retirement is the hardest decision an athlete makes. | La retraite est la décision la plus difficile pour un athlète.
Her legacy goes beyond medals; she changed how the sport is seen. | Son héritage va au-delà des médailles ; elle a changé le regard sur ce sport.
Role models matter for young players, especially girls. | Les modèles comptent pour les jeunes joueurs, surtout pour les filles.
Badminton is played by hundreds of millions of people worldwide. | Des centaines de millions de personnes jouent au badminton dans le monde.
It's one of the few sports that families can play together in the park. | C'est l'un des rares sports que les familles peuvent pratiquer ensemble au parc.
The backyard game and the Olympic sport feel like two different worlds. | Le jeu de jardin et le sport olympique semblent être deux mondes différents.
Elite badminton looks effortless only because of thousands of hours of training. | Le badminton d'élite ne paraît facile que grâce à des milliers d'heures d'entraînement.
The best players make difficult shots look simple. | Les meilleurs joueurs font paraître simples les coups difficiles.
Touch is something you can't fully coach. | Le toucher ne s'enseigne pas complètement.
Badminton rewards both brains and brawn. | Le badminton récompense à la fois la tête et les jambes.
The sport's speed makes it thrilling to watch live. | La vitesse de ce sport le rend passionnant à voir en direct.
Television often fails to capture just how fast it is. | La télévision ne parvient souvent pas à montrer à quel point c'est rapide.
Slow-motion replays reveal the incredible skill involved. | Les ralentis révèlent l'incroyable technique nécessaire.
Every rally is a battle of patience and nerve. | Chaque échange est une bataille de patience et de nerfs.
In badminton, the next point is always the most important. | Au badminton, le prochain point est toujours le plus important.
Win or lose, shake hands under the net. | Victoire ou défaite, serrez-vous la main sous le filet.
Respect for opponents is part of the game's tradition. | Le respect des adversaires fait partie de la tradition de ce sport.
The fastest recorded smash topped 500 kilometers an hour. | Le smash le plus rapide jamais mesuré a dépassé 500 kilomètres à l'heure.
Badminton's popularity in Taiwan has never been higher. | La popularité du badminton à Taïwan n'a jamais été aussi forte.
`,
});
