// 法文對照（Français）：籃球
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


addFrench("basketball", {
  words: `
basketball | le basket | Je joue au basket tous les jours.
ball | le ballon | Passe-moi le ballon.
hoop | le cercle | Le cercle est très haut.
basket | le panier | Il a marqué le panier !
net | le filet | Le ballon est passé dans le filet.
court | le terrain | Retrouvons-nous au terrain.
team | l'équipe | Tu es dans quelle équipe ?
player | le joueur | C'est un bon joueur.
coach | l'entraîneur | Écoute l'entraîneur.
referee | l'arbitre | L'arbitre a sifflé.
game | le match | Le match commence à sept heures.
play | jouer | Tu joues au basket ?
shoot | tirer | Tire !
pass | passer | Passe-la-moi !
dribble | dribbler | Dribble de la main gauche.
catch | attraper | Attrape le ballon !
jump | sauter | Il saute très haut.
run | courir | Cours défendre !
score | le score | Quel est le score ?
point | le point | Un panier vaut deux points.
win | gagner | Nous gagnons quand nous faisons tourner le ballon.
lose | perdre | Ne sois pas triste si tu perds.
tie | l'égalité | C'est l'égalité !
tall | grand | Les joueurs de basket sont grands.
short | petit | Il est petit, mais il est rapide.
fast | rapide | Elle est très rapide.
strong | fort | Il faut des jambes fortes.
basketball shoes | les chaussures de basket | J'ai acheté de nouvelles chaussures de basket.
jersey | le maillot | Mon numéro de maillot est le 23.
number | le numéro | Quel est ton numéro ?
shorts | le short | Mets un short pour jouer.
whistle | le sifflet | L'entraîneur a donné un coup de sifflet.
foul | la faute | C'était une faute !
timeout | le temps mort | L'entraîneur a demandé un temps mort.
half | la mi-temps | Nous menions à la mi-temps.
quarter | le quart-temps | Un match a quatre quarts-temps.
scoreboard | le tableau d'affichage | Regarde le tableau d'affichage.
fan | le fan | Je suis un grand fan de basket.
cheer | acclamer | Les fans ont acclamé bruyamment.
home team | l'équipe à domicile | L'équipe à domicile a gagné.
away team | l'équipe visiteuse | L'équipe visiteuse a bien joué.
practice | l'entraînement | Nous avons entraînement après l'école.
gym | le gymnase | Nous jouons dans le gymnase de l'école.
bench | le banc | Il était assis sur le banc.
captain | le capitaine | C'est la capitaine de l'équipe.
miss | rater | J'ai raté mon tir.
good shot | beau tir | Beau tir !
nice pass | belle passe | Belle passe !
my ball | à moi | À moi !
out | dehors | Le ballon est dehors.
in | dedans | Le ballon était dedans !
left | à gauche | Va à gauche !
right | à droite | Passe à droite.
defense | la défense | Fais une bonne défense.
guard | défendre sur | Défends sur ton joueur.
open | démarqué | Je suis démarqué !
throw | lancer | Lance-le-moi.
bounce | rebondir | Fais rebondir le ballon.
hands up | les mains en l'air | Les mains en l'air en défense !
ready | prêt | Tu es prêt ?
again | encore | On rejoue.
water | l'eau | Faisons une pause pour boire de l'eau.
tired | fatigué | Je suis fatigué.
sweat | la sueur | Je suis couvert de sueur.
fun | amusant | Le basket, c'est amusant.
friend | l'ami | Je joue avec mes amis.
park | le parc | Il y a un terrain dans le parc.
outdoor | en plein air | J'aime les terrains en plein air.
indoor | couvert | Le terrain couvert est frais.
afternoon | l'après-midi | Nous jouons l'après-midi.
weekend | le week-end | Nous avons un match ce week-end.
ticket | le billet | J'ai eu deux billets pour le match.
stadium | la salle | La salle était pleine.
TV | la télé | Je regarde le basket à la télé.
star | la star | C'est la star de l'équipe.
favorite | préféré | Qui est ton joueur préféré ?
poster | le poster | J'ai un poster de mon joueur préféré.
height | la taille | La taille aide au basket.
hand | la main | Utilise tes doigts, pas toute ta main.
eye | l'œil | Garde l'œil sur le ballon.
knee | le genou | Plie les genoux quand tu tires.
ankle | la cheville | Je me suis fait mal à la cheville.
fall | tomber | Fais attention à ne pas tomber.
help | aider | Aide en défense !
team player | le joueur collectif | C'est une excellente joueuse collective.
first half | la première mi-temps | Nous avons marqué 40 points en première mi-temps.
second half | la seconde mi-temps | Ils sont revenus en seconde mi-temps.
winner | le vainqueur | Le vainqueur reçoit un trophée.
trophy | le trophée | Nous avons gagné le trophée !
champion | le champion | Ce sont les champions cette année.
school team | l'équipe de l'école | Je suis dans l'équipe de l'école.
try out | passer les sélections | Je vais passer les sélections pour l'équipe.
long shot | le tir lointain | Il a réussi un tir lointain.
high five | tope là | Tope là !
shot | le tir | Joli tir !
ball boy | le ramasseur de balles | Le ramasseur de balles a récupéré le ballon.
uniform | la tenue | Notre tenue est rouge.
game day | le jour de match | C'est jour de match !
snack | le snack | Nous avons mangé des snacks au match.
sneakers | les baskets | Mes baskets sont neuves.
`,
  phrases: `
Do you play basketball? | Tu joues au basket ?
Let's play basketball. | Jouons au basket.
Do you want to play with us? | Tu veux jouer avec nous ?
Can I play too? | Je peux jouer aussi ?
We need one more player. | Il nous faut encore un joueur.
Let's pick teams. | Faisons les équipes.
You're on my team. | Tu es dans mon équipe.
Shirts against skins? | Ceux en tee-shirt contre ceux torse nu ?
Who has the ball? | Qui a le ballon ?
Pass me the ball! | Passe-moi le ballon !
I'm open! | Je suis démarqué !
Shoot! | Tire !
Nice shot! | Joli tir !
It went in! | Il est rentré !
I missed. | J'ai raté.
So close! | Presque !
Good try! | Bien essayé !
Rebound! | Rebond !
Get the ball! | Récupère le ballon !
Run back on defense! | Repli défensif !
Hands up! | Les mains en l'air !
Guard him! | Marque-le !
Don't let him shoot! | Ne le laisse pas tirer !
Watch out! | Attention !
That's a foul! | C'est une faute !
Sorry, my bad. | Désolé, c'est ma faute.
It's our ball. | C'est notre ballon.
Whose ball is it? | C'est à qui le ballon ?
The ball is out. | Le ballon est sorti.
Check ball. | Balle à toi pour reprendre.
What's the score? | Quel est le score ?
It's ten to eight. | C'est dix à huit.
We're winning! | On mène !
We're losing. | On est menés.
It's tied. | C'est égalité.
Next basket wins. | Le prochain panier gagne.
We won! | On a gagné !
Good game! | Bien joué !
Let's play again. | On rejoue.
Let's take a break. | Faisons une pause.
I need some water. | J'ai besoin d'eau.
I'm so tired. | Je suis tellement fatigué.
I'm sweating a lot. | Je transpire beaucoup.
Can you dribble with your left hand? | Tu sais dribbler de la main gauche ?
Bend your knees when you shoot. | Plie les genoux quand tu tires.
Keep your eyes on the basket. | Garde les yeux sur le panier.
Follow through with your wrist. | Accompagne le tir avec le poignet.
Use your fingers, not your palm. | Utilise tes doigts, pas ta paume.
Practice your free throws. | Entraîne-toi aux lancers francs.
Jump higher! | Saute plus haut !
Run faster! | Cours plus vite !
Help me on defense! | Aide-moi en défense !
Great pass! | Super passe !
Thanks for the pass. | Merci pour la passe.
Who's your favorite player? | Qui est ton joueur préféré ?
I like Stephen Curry. | J'aime Stephen Curry.
He's really tall. | Il est vraiment grand.
How tall are you? | Tu mesures combien ?
Are you on the school team? | Tu es dans l'équipe de l'école ?
I want to join the basketball team. | Je veux rejoindre l'équipe de basket.
We have practice after school. | Nous avons entraînement après l'école.
The coach is very strict. | L'entraîneur est très strict.
Our team has a game on Saturday. | Notre équipe a un match samedi.
Come and watch our game! | Viens voir notre match !
Let's cheer for our team! | Encourageons notre équipe !
Defense! Defense! | Défense ! Défense !
The crowd is so loud. | Le public est tellement bruyant.
Did you watch the game last night? | Tu as regardé le match hier soir ?
Who won the game? | Qui a gagné le match ?
It was a great game. | C'était un super match.
He scored thirty points. | Il a marqué trente points.
I want to watch an NBA game. | Je veux voir un match de NBA.
Do you have tickets? | Tu as des billets ?
Let's buy jerseys. | Achetons des maillots.
My jersey number is 23. | Mon numéro de maillot est le 23.
These are my new basketball shoes. | Ce sont mes nouvelles chaussures de basket.
Where is the court? | Où est le terrain ?
The court is in the park. | Le terrain est dans le parc.
The court is full. Let's wait. | Le terrain est plein. Attendons.
Can we play next? | On peut jouer après ?
Let's play three-on-three. | Jouons à trois contre trois.
First to 21 wins. | Le premier à 21 gagne.
I'm on the bench. | Je suis sur le banc.
Put me in, coach! | Fais-moi entrer, coach !
I hurt my ankle. | Je me suis fait mal à la cheville.
Are you okay? Can you walk? | Ça va ? Tu peux marcher ?
Put some ice on it. | Mets de la glace dessus.
I love basketball. | J'adore le basket.
Basketball is my favorite sport. | Le basket est mon sport préféré.
I play every weekend. | Je joue tous les week-ends.
Let's shoot some hoops. | Allons shooter un peu.
Let's practice layups. | Entraînons-nous aux double-pas.
Can you dunk? | Tu sais dunker ?
I can't dunk yet. | Je ne sais pas encore dunker.
Good job, team! | Bravo, l'équipe !
High five! | Tope là !
Same time next week? | Même heure la semaine prochaine ?
See you at the court! | Rendez-vous au terrain !
I'm getting better at basketball. | Je progresse au basket.
Let's warm up first. | Échauffons-nous d'abord.
`,
});

addFrench("basketball", {
  words: `
layup | le double-pas | Il a conclu par un double-pas facile.
jump shot | le tir en suspension | Elle a un tir en suspension très fluide.
free throw | le lancer franc | Il a réussi ses deux lancers francs.
three-pointer | le tir à trois points | Elle a mis un tir à trois points au buzzer.
slam dunk | le dunk | Le public a adoré son dunk.
rebound | le rebond | Il a pris dix rebonds.
assist | la passe décisive | Elle a fait huit passes décisives.
steal | l'interception | Il a fait une interception et a marqué.
block | le contre | Quel contre !
turnover | la perte de balle | Trop de pertes de balle nous ont coûté le match.
fast break | la contre-attaque | Ils ont marqué sur contre-attaque.
pick and roll | le pick and roll | Ils ont joué le pick and roll encore et encore.
screen | l'écran | Pose un écran pour le shooteur.
double-team | la prise à deux | Ils ont fait une prise à deux sur leur meilleur joueur.
zone defense | la défense de zone | Ils sont passés en défense de zone.
man-to-man | l'individuelle | Nous jouons une défense individuelle.
full-court press | le pressing tout terrain | Le pressing tout terrain a provoqué des pertes de balle.
shot clock | les 24 secondes | Le chronomètre des tirs est de 24 secondes.
backcourt | les arrières | Leurs arrières sont très rapides.
frontcourt | le secteur intérieur | Ils ont un secteur intérieur très grand.
paint | la raquette | Il marque la plupart de ses points dans la raquette.
three-point line | la ligne à trois points | Recule derrière la ligne à trois points.
free-throw line | la ligne des lancers francs | Va sur la ligne des lancers francs.
baseline | la ligne de fond | Il a pénétré le long de la ligne de fond.
sideline | la ligne de touche | L'entraîneur criait depuis la ligne de touche.
half-court | le milieu de terrain | Il a marqué depuis le milieu de terrain !
point guard | le meneur | Le meneur dirige l'attaque.
shooting guard | l'arrière | Notre arrière sait vraiment marquer.
small forward | l'ailier | Il joue ailier.
power forward | l'ailier fort | L'ailier fort est puissant à l'intérieur.
center | le pivot | Le pivot mesure plus de deux mètres dix.
sixth man | le sixième homme | C'est le sixième homme de l'équipe.
starting lineup | le cinq de départ | Il est dans le cinq de départ ce soir.
substitute | le remplaçant | L'entraîneur a fait entrer un remplaçant.
foul out | sortir pour cinq fautes | Ne sors pas pour cinq fautes trop tôt dans le match.
technical foul | la faute technique | Il a pris une faute technique pour avoir contesté.
flagrant foul | la faute antisportive | C'était une faute antisportive.
traveling | le marcher | L'arbitre a sifflé un marcher.
double dribble | la reprise de dribble | C'est une reprise de dribble !
goaltending | le goaltending | Le contre a été sanctionné pour goaltending.
charging | le passage en force | Il a été sanctionné pour passage en force.
and-one | le panier plus la faute | Il a marqué avec la faute.
buzzer-beater | le tir au buzzer | Elle a gagné le match sur un tir au buzzer.
overtime | la prolongation | Le match est allé en prolongation.
playoffs | les playoffs | Ils se sont qualifiés pour les playoffs.
finals | les finales | Les finales commencent la semaine prochaine.
NBA | la NBA | Il a été drafté par une équipe NBA.
MVP | le MVP | Elle a été élue MVP.
rookie | le rookie | Le rookie a marqué 20 points.
all-star | l'All-Star | Il a été sélectionné trois fois au All-Star Game.
highlight | les meilleurs moments | Regarde les meilleurs moments en ligne.
box score | la feuille de match | Regarde la feuille de match pour ses statistiques.
triple-double | le triple-double | Il a réussi un triple-double.
double-double | le double-double | Elle a fait un double-double : 20 points et 12 rebonds.
crossover | le crossover | Son crossover a fait tomber le défenseur.
fadeaway | le fadeaway | Il a réussi un tir en fadeaway.
hook shot | le bras roulé | Le pivot a marqué en bras roulé.
alley-oop | l'alley-oop | Quel alley-oop !
bank shot | le tir avec la planche | Il a marqué avec la planche.
airball | l'airball | Le public a chanté après l'airball.
swish | le panier propre | Ficelle ! Rien que le filet.
inbound | la remise en jeu | Fais la remise en jeu rapidement.
possession | la possession | Nous avons la possession.
three-on-three | le trois contre trois | Jouons à trois contre trois.
streetball | le streetball | Le streetball, c'est surtout du style.
pickup game | le match improvisé | J'ai rejoint un match improvisé au parc.
shoot hoops | shooter | Allons shooter.
defender | le défenseur | Il a battu son défenseur.
offense | l'attaque | Notre attaque était géniale ce soir.
drive | pénétrer | Pénètre vers le panier !
post up | jouer dos au panier | Joue dos au panier près du cercle.
box out | faire écran au rebond | Fais écran au rebond !
backboard | la planche | Le ballon a touché la planche.
rim | l'arceau | Le tir a rebondi sur l'arceau.
tip-off | l'entre-deux initial | L'entre-deux initial est à 19 h 30.
jump ball | l'entre-deux | L'arbitre a sifflé un entre-deux.
stats | les statistiques | Regarde ses statistiques cette saison.
season | la saison | La saison commence en octobre.
league | la ligue | Il joue dans la ligue japonaise.
draft | la draft | Il a été le premier choix de la draft.
contract | le contrat | Il a signé un contrat de quatre ans.
trade | l'échange | L'équipe a réalisé un gros échange.
injury report | la liste des blessés | Il est sur la liste des blessés.
sprained ankle | l'entorse de la cheville | Il est absent à cause d'une entorse de la cheville.
comeback | la remontée | Quelle remontée dans le quatrième quart-temps !
lead | l'avance | Nous avions dix points d'avance.
blowout | la large victoire | C'était une victoire de 30 points d'écart.
close game | le match serré | C'était un match serré jusqu'à la fin.
home court | le terrain à domicile | Ils sont forts sur leur terrain.
road game | le match à l'extérieur | Ils ont perdu trois matchs à l'extérieur d'affilée.
jumper | le tir en suspension | Il a mis un tir en suspension depuis le coude.
elbow | le coude | Il aime tirer depuis le coude de la raquette.
wing | l'aile | Place-toi sur l'aile.
corner | le corner | Attends la passe dans le corner.
pull-up | le pull-up | Il a mis un pull-up à trois points.
step-back | le step-back | Son step-back est difficile à défendre.
euro step | l'euro step | Elle a utilisé un euro step pour le passer.
behind-the-back | dans le dos | Il a fait une passe dans le dos.
no-look pass | la passe aveugle | Quelle passe aveugle !
putback | la claquette | Il a marqué sur une claquette.
drop the ball | faire une gaffe | Ne fais pas de gaffe sur ce projet.
on the rebound | après une rupture | Il sort avec elle juste après une rupture.
a shot in the dark | une réponse au hasard | Ma réponse était au hasard.
take your best shot | tenter sa chance | Vas-y, tente ta chance.
nothing but net | parfait | Sa réponse était parfaite.
the ball is in your court | la balle est dans ton camp | La balle est dans ton camp maintenant.
game time | l'heure du match | C'est l'heure du match, tout le monde !
ball hog | le perso | Ne sois pas perso ; passe la balle !
a team effort | un effort collectif | La victoire était un effort collectif.
call a timeout | faire une pause | Faisons une pause pour réfléchir.
keep your head in the game | rester concentré sur le match | Reste concentré sur le match.
from downtown | de loin | Il a marqué de loin.
in the zone | dans un état de grâce | Elle est dans un état de grâce ce soir.
`,
});

addFrench("basketball", {
  phrases: `
Set a screen for me! | Pose-moi un écran !
Switch! | Change !
Box out! | Écran au rebond !
Get back in transition! | Repli défensif !
Push the ball! | Accélère !
Run the play! | Joue le système !
Swing the ball! | Renverse le jeu !
Look for the open man. | Cherche le joueur démarqué.
Attack the basket. | Attaque le cercle.
Don't force the shot. | Ne force pas le tir.
Take the open shot. | Prends le tir ouvert.
That's a great look. | C'est un très bon tir.
He's hot tonight. Keep feeding him. | Il est en feu ce soir. Continuez à le servir.
Double-team the big man. | Prenez le grand à deux.
Play zone this possession. | Défense de zone sur cette possession.
Watch the backdoor cut! | Attention à la coupe dans le dos !
Who's got number 7? | Qui prend le numéro 7 ?
I've got him. | Je l'ai.
Help side! | Aide !
Close out on the shooter! | Sors sur le shooteur !
Don't foul him on the three. | Ne fais pas faute sur son tir à trois points.
Foul him! We need to stop the clock. | Fais faute ! Il faut arrêter le chrono.
That was a clean block! | C'était un contre propre !
That's goaltending! | C'est du goaltending !
He traveled! | Il a marché !
That's a charge, not a block! | C'est un passage en force, pas une faute défensive !
He flopped. | Il a simulé.
The referee missed that call. | L'arbitre n'a pas vu la faute.
He fouled out with three minutes left. | Il est sorti pour cinq fautes à trois minutes de la fin.
The coach got a technical foul. | L'entraîneur a pris une faute technique.
Call a timeout! | Demande un temps mort !
We're in the bonus. | On est dans la pénalité.
He hit both free throws. | Il a réussi ses deux lancers francs.
And one! | Et la faute !
What a buzzer-beater! | Quel tir au buzzer !
The game is going to overtime. | Le match va en prolongation.
They're up by twelve at halftime. | Ils mènent de douze points à la mi-temps.
We cut the lead to four. | Nous sommes revenus à quatre points.
They went on a 15-0 run. | Ils ont fait un 15-0.
It's a one-possession game. | C'est un match à une possession.
Ice it! | Plie le match !
That was a statement win. | C'était une victoire qui envoie un message.
They blew a twenty-point lead. | Ils ont gâché une avance de vingt points.
What a comeback! | Quelle remontée !
He had a triple-double. | Il a fait un triple-double.
She had 30 points and 12 rebounds. | Elle a eu 30 points et 12 rebonds.
He's shooting 50 percent from three. | Il tire à 50 % à trois points.
He's struggling with his shot. | Il a du mal avec son tir.
He's in a slump. | Il traverse une mauvaise passe.
He's the best point guard in the league. | C'est le meilleur meneur de la ligue.
She runs the offense beautifully. | Elle dirige l'attaque magnifiquement.
He's a great passer. | C'est un excellent passeur.
He's a lockdown defender. | C'est un défenseur verrou.
He can play three positions. | Il peut jouer à trois postes.
He's coming off the bench tonight. | Il sort du banc ce soir.
He's in the starting lineup. | Il est dans le cinq de départ.
He's out with a sprained ankle. | Il est absent à cause d'une entorse de la cheville.
He's questionable for tonight. | Sa présence ce soir est incertaine.
He's a rookie, but he plays like a veteran. | C'est un rookie, mais il joue comme un vétéran.
He was the first pick in the draft. | Il a été le premier choix de la draft.
They traded him at the deadline. | Ils l'ont échangé à la date limite.
He signed a five-year contract. | Il a signé un contrat de cinq ans.
Who do you think will win the title? | À ton avis, qui va gagner le titre ?
They're the favorites this year. | Ce sont les favoris cette année.
They'll make the playoffs for sure. | Ils iront sûrement en playoffs.
They need home-court advantage. | Ils ont besoin de l'avantage du terrain.
The series is tied 2–2. | La série est à égalité 2-2.
Game 7 is on Sunday. | Le match 7 est dimanche.
He won Finals MVP. | Il a été élu MVP des finales.
Did you see the highlights? | Tu as vu les meilleurs moments ?
That dunk went viral. | Ce dunk a fait le buzz.
I'm watching the game at a sports bar. | Je regarde le match dans un bar sportif.
Let's get tickets for the P. LEAGUE+ game. | Prenons des billets pour le match de P. LEAGUE+.
The atmosphere in the arena was incredible. | L'ambiance dans la salle était incroyable.
We had courtside seats! | Nous étions au bord du terrain !
I've been playing pickup games every Saturday. | Je fais des matchs improvisés tous les samedis.
Winners stay on. | Les gagnants restent.
We've got next. | On prend le prochain match.
Call your own fouls. | Chacun annonce ses fautes.
Let's play to 15, win by two. | On joue en 15 points, avec deux points d'écart.
Make it, take it. | Qui marque garde la balle.
I need to work on my left hand. | Je dois travailler ma main gauche.
My jump shot is getting better. | Mon tir en suspension s'améliore.
Work on your footwork. | Travaille tes appuis.
Don't telegraph your passes. | N'annonce pas tes passes.
Keep your dribble low. | Dribble bas.
Protect the ball. | Protège le ballon.
Communicate on defense. | Communiquez en défense.
Talk on every screen. | Annoncez chaque écran.
Sprint back after a turnover. | Sprinte en défense après une perte de balle.
Rebounding is about effort. | Le rebond, c'est une question d'effort.
Defense wins championships. | C'est la défense qui fait gagner les titres.
Play hard on both ends. | Joue à fond des deux côtés du terrain.
Leave it all on the court. | Donne tout sur le terrain.
Keep your head up after a mistake. | Garde la tête haute après une erreur.
Next play! | Action suivante !
Great hustle! | Super combativité !
We play as a team. | Nous jouons en équipe.
Ball is life. | Le basket, c'est la vie.
Good game, everyone. Shake hands. | Bien joué, tout le monde. Serrez-vous la main.
`,
});

addFrench("basketball", {
  words: `
analytics | l'analyse statistique | L'analyse statistique a changé la façon de tirer des équipes.
true shooting percentage | le pourcentage de tir réel | Son pourcentage de tir réel est d'élite.
efficiency rating | l'évaluation | Elle a la meilleure évaluation de la ligue.
plus-minus | le plus-minus | Son plus-minus était de +18 ce soir.
usage rate | le taux d'utilisation | Un taux d'utilisation élevé signifie qu'il prend beaucoup de tirs.
pace | le rythme | Ils jouent sur un rythme rapide.
spacing | l'écartement | Un bon écartement ouvre des lignes de pénétration.
ball movement | la circulation de balle | Leur circulation de balle crée des tirs ouverts.
isolation | l'isolation | Ils comptent trop sur les isolations.
post-up | le jeu dos au panier | Le jeu dos au panier est plus rare dans le basket moderne.
switch | changer | Ils changent sur chaque écran.
drop coverage | la défense en drop | La défense en drop laisse des pull-ups.
help defense | l'aide défensive | Leur aide défensive arrive toujours à temps.
closeout | la sortie sur le tireur | Une sortie agressive sur le tireur empêche le tir ouvert.
transition defense | le repli défensif | Un mauvais repli défensif a donné des points faciles.
load management | la gestion de la charge | La gestion de la charge garde les stars fraîches pour les playoffs.
salary cap | le plafond salarial | Le plafond salarial limite les dépenses.
luxury tax | la taxe de luxe | L'équipe a payé une énorme taxe de luxe.
max contract | le contrat maximum | Il a signé un contrat maximum.
rookie scale | l'échelle salariale des rookies | Les contrats à l'échelle des rookies sont bon marché pour les équipes.
draft lottery | la loterie de la draft | La loterie de la draft décide des premiers choix.
tanking | le tanking | La ligue veut mettre fin au tanking.
free agency | le marché des agents libres | Le marché des agents libres ouvre en juillet.
trade deadline | la date limite des échanges | Ils ont bougé avant la date limite des échanges.
sign-and-trade | le sign-and-trade | Il est parti dans un sign-and-trade.
two-way contract | le contrat two-way | Il est sous contrat two-way.
G League | la G League | Il s'est développé en G League.
scouting report | le rapport de scouting | Le rapport de scouting dit qu'il ne sait pas aller à gauche.
game plan | le plan de jeu | Notre plan de jeu était de ralentir le rythme.
adjustments | les ajustements | Les ajustements de la mi-temps ont fait gagner le match.
momentum | la dynamique | Un gros dunk peut faire basculer la dynamique.
clutch | décisif | Il est décisif dans les dernières minutes.
hot hand | la main chaude | Elle avait la main chaude au troisième quart-temps.
home-court advantage | l'avantage du terrain | L'avantage du terrain compte en playoffs.
dynasty | la dynastie | Cette équipe était une dynastie.
superteam | la super équipe | Trois stars ont formé une super équipe.
franchise player | le joueur franchise | C'est leur joueur franchise.
role player | le joueur de rôle | Les joueurs de rôle font gagner les titres.
glue guy | le joueur liant | Chaque équipe a besoin d'un joueur liant.
three-and-D | le 3&D | Les équipes apprécient les ailiers 3&D.
stretch big | l'intérieur shooteur | Un intérieur shooteur fait sortir le pivot adverse.
positionless basketball | le basket sans poste | Le basket sans poste valorise la polyvalence.
small ball | le small ball | Ils sont passés en small ball au quatrième quart-temps.
mid-range | le mi-distance | Le tir à mi-distance fait son retour.
corner three | le tir à trois points dans le corner | Le tir à trois points dans le corner est le plus court.
shot selection | la sélection de tirs | Une meilleure sélection de tirs aiderait.
rim protection | la protection du cercle | Leur pivot assure une protection du cercle d'élite.
flopping | la simulation | La simulation est désormais sanctionnée d'une amende.
officiating | l'arbitrage | Les fans se sont plaints de l'arbitrage.
coach's challenge | le challenge de l'entraîneur | Il a utilisé son challenge sur la faute.
ACL tear | la rupture du ligament croisé | Une rupture du ligament croisé a mis fin à sa saison.
Achilles rupture | la rupture du tendon d'Achille | Une rupture du tendon d'Achille peut changer une carrière.
rotation | la rotation | Il ne fait plus partie de la rotation en playoffs.
minutes restriction | la limitation de temps de jeu | Il a un temps de jeu limité après sa blessure.
player empowerment | le pouvoir des joueurs | Le pouvoir des joueurs a pris le dessus sur les propriétaires.
trade request | la demande de transfert | La star a fait une demande de transfert.
front office | la direction | La direction a reconstruit l'effectif.
general manager | le directeur général | Le directeur général a fait un échange audacieux.
roster | l'effectif | L'effectif compte quinze joueurs.
rebuild | la reconstruction | L'équipe est en reconstruction.
cap space | la marge salariale | Ils ont la marge salariale pour une star.
draft pick | le choix de draft | Ils ont échangé deux premiers tours pour lui, et chaque choix de draft compte.
lottery pick | le choix de loterie | C'était un choix de loterie.
undrafted | non drafté | Il n'a pas été drafté mais il est devenu All-Star.
international player | le joueur international | Les joueurs internationaux remportent maintenant le titre de MVP.
naturalized player | le joueur naturalisé | Beaucoup de ligues asiatiques utilisent un joueur naturalisé.
import player | le joueur étranger | Chaque équipe peut aligner deux joueurs étrangers.
P. LEAGUE+ | la P. LEAGUE+ | Les matchs de P. LEAGUE+ sont populaires à Taïwan.
FIBA | la FIBA | Les règles FIBA diffèrent légèrement de celles de la NBA.
Olympic qualifier | le tournoi de qualification olympique | Taïwan a joué un tournoi de qualification olympique.
national team | l'équipe nationale | Il a été appelé en équipe nationale.
zone offense | l'attaque de zone | Leur attaque de zone faisait bien circuler le ballon.
motion offense | l'attaque en mouvement | Une attaque en mouvement implique tout le monde.
triangle offense | l'attaque en triangle | L'attaque en triangle a gagné de nombreux titres.
hack-a-Shaq | le hack-a-Shaq | Le hack-a-Shaq vise les mauvais tireurs de lancers francs.
intentional foul | la faute intentionnelle | Ils ont fait une faute intentionnelle pour arrêter le chrono.
free-throw percentage | le pourcentage aux lancers francs | Son pourcentage aux lancers francs n'est que de 55.
effective field goal percentage | le pourcentage de tir effectif | Le pourcentage de tir effectif pondère les tirs à trois points.
net rating | le net rating | Leur net rating est le meilleur de la ligue.
defensive rating | l'efficacité défensive | Ils sont premiers de la ligue en efficacité défensive.
win shares | les win shares | Les win shares estiment la valeur d'un joueur.
tracking data | les données de tracking | Les données de tracking mesurent la vitesse et la distance.
player development | le développement des joueurs | Leur programme de développement des joueurs est excellent.
skills coach | l'entraîneur individuel | Il a engagé un entraîneur individuel cet été.
sports science | les sciences du sport | Les sciences du sport réduisent les blessures.
recovery protocol | le protocole de récupération | Le protocole de récupération comprend des bains froids.
back-to-back | le back-to-back | Les stars se reposent souvent lors des back-to-back.
road trip | la tournée à l'extérieur | Une longue tournée à l'extérieur épuise les équipes.
sellout | la salle comble | La salle était comble.
broadcast rights | les droits de diffusion | Les droits de diffusion financent la ligue.
sneaker deal | le contrat de chaussures | Il a signé un énorme contrat de chaussures.
legacy | l'héritage | Un titre consoliderait son héritage.
GOAT debate | le débat sur le plus grand de tous les temps | Le débat sur le plus grand de tous les temps ne finit jamais.
pick-and-pop | le pick-and-pop | Le pick-and-pop libère le grand.
horns set | le système horns | Ils ont commencé avec un système horns.
dribble handoff | la passe à la main en dribble | La passe à la main en dribble a libéré le shooteur.
weak side | le côté faible | L'aide vient du côté faible.
strong side | le côté fort | Surchargez le côté fort.
hedge | sortir sur l'écran | Le grand est sorti sur l'écran.
ICE | la défense ICE | Ils défendent en ICE sur chaque pick-and-roll latéral.
a game changer | quelque chose qui change la donne | Cet échange a changé la donne.
bring your A game | donner le meilleur de soi | Donne le meilleur de toi ce soir.
take it to the hoop | foncer vers le panier | N'hésite pas ; fonce vers le panier.
on fire | en feu | Il est en feu à trois points.
set the tone | donner le ton | Notre défense a donné le ton.
throw up a brick | balancer une brique | Ne balance pas une brique à la fin.
a whole new ball game | une tout autre histoire | Les playoffs, c'est une tout autre histoire.
fake out | feinter | Essaie de feinter le défenseur.
dish out | distribuer | Il peut distribuer dix passes décisives par match.
crunch time | le money time | C'est le money time maintenant.
step up | prendre ses responsabilités | Quelqu'un doit prendre ses responsabilités.
run and gun | le jeu rapide | Ils pratiquent un jeu rapide.
leave it all on the court | tout donner sur le terrain | Donnez tout sur le terrain ce soir.
`,
  phrases: `
Analytics pushed teams toward threes and shots at the rim. | L'analyse statistique a poussé les équipes vers les tirs à trois points et près du cercle.
The mid-range jumper has become the least efficient shot. | Le tir à mi-distance est devenu le tir le moins rentable.
Spacing is the foundation of the modern offense. | L'écartement est la base de l'attaque moderne.
Ball movement creates better shots than isolation. | La circulation de balle crée de meilleurs tirs que l'isolation.
They rely too heavily on isolation in crunch time. | Ils comptent trop sur l'isolation dans le money time.
Their offense stagnates when the star sits. | Leur attaque stagne quand la star est sur le banc.
The pick-and-roll is the most common action in basketball. | Le pick-and-roll est l'action la plus courante au basket.
They switch everything, which kills ball-screen actions. | Ils changent sur tout, ce qui neutralise les écrans sur le porteur.
Drop coverage invites pull-up threes. | La défense en drop invite les pull-ups à trois points.
Their help defense rotates on a string. | Leurs rotations défensives sont parfaitement coordonnées.
The weak-side defender was late to rotate. | Le défenseur côté faible a tourné trop tard.
Transition defense was the difference tonight. | Le repli défensif a fait la différence ce soir.
They got killed on the offensive glass. | Ils se sont fait dominer au rebond offensif.
Turnovers led to easy points the other way. | Les pertes de balle ont donné des points faciles en contre.
Their net rating is the best in the league. | Leur net rating est le meilleur de la ligue.
His true shooting percentage is elite for a guard. | Son pourcentage de tir réel est d'élite pour un arrière.
Plus-minus can be misleading over small samples. | Le plus-minus peut être trompeur sur de petits échantillons.
Usage rate shows how much of the offense runs through him. | Le taux d'utilisation montre à quel point l'attaque passe par lui.
Tracking data measures distance run and speed. | Les données de tracking mesurent la distance parcourue et la vitesse.
Positionless basketball values versatility over size. | Le basket sans poste privilégie la polyvalence plutôt que la taille.
Three-and-D wings are among the most valuable role players. | Les ailiers 3&D font partie des joueurs de rôle les plus précieux.
A stretch big pulls the opposing center away from the rim. | Un intérieur shooteur éloigne le pivot adverse du cercle.
Rim protection is still essential, even in a small-ball era. | La protection du cercle reste essentielle, même à l'ère du small ball.
They went small to speed up the pace. | Ils sont passés en small ball pour accélérer le rythme.
The coach made great halftime adjustments. | L'entraîneur a fait d'excellents ajustements à la mi-temps.
The game plan was to make him a passer. | Le plan de jeu était de l'obliger à passer.
They used a hack-a-Shaq strategy late in the game. | Ils ont utilisé le hack-a-Shaq en fin de match.
Load management keeps stars healthy for the playoffs. | La gestion de la charge garde les stars en forme pour les playoffs.
Fans hate it when stars rest on national TV. | Les fans détestent voir les stars au repos lors des matchs télévisés.
The league introduced a minimum games rule for awards. | La ligue a instauré un nombre minimum de matchs pour les récompenses.
Back-to-backs are brutal on older players. | Les back-to-back sont durs pour les joueurs plus âgés.
An ACL tear can cost a player a full season. | Une rupture du ligament croisé peut coûter une saison entière.
Sports science has extended careers well into the late thirties. | Les sciences du sport ont prolongé les carrières jusqu'à la fin de la trentaine.
The salary cap is meant to keep the league competitive. | Le plafond salarial vise à garder la ligue compétitive.
Paying the luxury tax shows the owner is committed to winning. | Payer la taxe de luxe montre que le propriétaire veut gagner.
The new collective bargaining agreement punishes high spenders. | La nouvelle convention collective pénalise les équipes dépensières.
They have the cap space to sign a max player. | Ils ont la marge salariale pour signer un joueur au maximum.
He turned down a max extension to test free agency. | Il a refusé une prolongation au maximum pour tester le marché.
The trade sent three first-round picks for one star. | L'échange a envoyé trois premiers tours de draft contre une star.
The front office is committed to a full rebuild. | La direction s'est engagée dans une reconstruction complète.
Tanking for the top pick hurts the league's integrity. | Perdre exprès pour le premier choix nuit à l'intégrité de la ligue.
The draft lottery was reformed to discourage tanking. | La loterie de la draft a été réformée pour décourager le tanking.
He went undrafted and worked his way up through the G League. | Il n'a pas été drafté et s'est hissé au sommet en passant par la G League.
Player development is a competitive advantage. | Le développement des joueurs est un avantage compétitif.
Scouting has gone global. | Le recrutement est devenu mondial.
International players now dominate the MVP voting. | Les joueurs internationaux dominent désormais le vote du MVP.
FIBA basketball is more physical and team-oriented. | Le basket FIBA est plus physique et plus collectif.
Taiwan's league uses naturalized and import players. | La ligue taïwanaise utilise des joueurs naturalisés et étrangers.
Professional basketball in Taiwan has gone through several reorganizations. | Le basket professionnel à Taïwan a connu plusieurs réorganisations.
Many Taiwanese fans follow both local leagues and the NBA. | Beaucoup de fans taïwanais suivent à la fois les ligues locales et la NBA.
The national team struggles against taller opponents. | L'équipe nationale a du mal face à des adversaires plus grands.
Height isn't everything, but it's hard to coach. | La taille ne fait pas tout, mais elle ne s'apprend pas.
The hot-hand debate pits statisticians against players. | Le débat sur la main chaude oppose les statisticiens aux joueurs.
Momentum is real, at least in the players' minds. | La dynamique existe, au moins dans la tête des joueurs.
Clutch performances define a player's legacy. | Les performances décisives définissent l'héritage d'un joueur.
Championships are the currency of greatness. | Les titres sont la mesure de la grandeur.
Superteams have made the league less competitive. | Les super équipes ont rendu la ligue moins compétitive.
Player empowerment shifted power away from owners. | Le pouvoir des joueurs a retiré du pouvoir aux propriétaires.
Trade requests have become a negotiating tactic. | Les demandes de transfert sont devenues une tactique de négociation.
Role players often decide playoff series. | Les joueurs de rôle décident souvent des séries de playoffs.
Every contender needs a reliable glue guy. | Chaque prétendant au titre a besoin d'un joueur liant fiable.
His defensive versatility doesn't show up in the box score. | Sa polyvalence défensive n'apparaît pas sur la feuille de match.
Advanced stats can't fully capture leadership. | Les statistiques avancées ne mesurent pas pleinement le leadership.
Officiating has become a constant source of controversy. | L'arbitrage est devenu une source constante de controverse.
The coach's challenge overturned a crucial call. | Le challenge de l'entraîneur a annulé une décision cruciale.
Replay reviews slow the game down. | Les vérifications vidéo ralentissent le jeu.
Flopping penalties haven't stopped players from embellishing contact. | Les sanctions contre la simulation n'ont pas empêché les joueurs d'exagérer les contacts.
The rules increasingly favor the offense. | Les règles favorisent de plus en plus l'attaque.
The three-point revolution changed how kids learn the game. | La révolution du tir à trois points a changé la façon dont les enfants apprennent le jeu.
Youth coaches worry that fundamentals are being neglected. | Les entraîneurs de jeunes craignent que les fondamentaux soient négligés.
AAU basketball is criticized for prioritizing games over practice. | Le basket AAU est critiqué pour privilégier les matchs à l'entraînement.
Streetball culture shaped the game's style and fashion. | La culture streetball a façonné le style et la mode du basket.
Sneaker deals can be worth more than playing contracts. | Les contrats de chaussures peuvent valoir plus que les contrats de joueur.
Broadcast rights deals fund the league's growth. | Les contrats de droits de diffusion financent la croissance de la ligue.
Streaming is changing how fans watch games. | Le streaming change la façon dont les fans regardent les matchs.
Highlights on social media have replaced full games for many fans. | Pour beaucoup de fans, les résumés sur les réseaux sociaux ont remplacé les matchs complets.
The GOAT debate says more about fans than players. | Le débat sur le plus grand de tous les temps en dit plus sur les fans que sur les joueurs.
Comparing eras is almost impossible. | Comparer les époques est presque impossible.
The pace of play is far faster than in the nineties. | Le rythme de jeu est bien plus rapide que dans les années 90.
Teams now take more threes in a game than whole teams did in a season decades ago. | Les équipes tentent aujourd'hui plus de tirs à trois points en un match que des équipes entières en une saison il y a quelques décennies.
Women's basketball is attracting record audiences. | Le basket féminin attire des audiences records.
The WNBA's growth has been driven by star rookies. | La croissance de la WNBA est portée par des rookies vedettes.
Pay equity in basketball is still a long way off. | L'égalité salariale dans le basket est encore loin.
Mental health is now openly discussed by star players. | Les stars parlent désormais ouvertement de santé mentale.
The pressure of being a franchise player is enormous. | La pression d'être le joueur franchise est énorme.
Chemistry can't be bought in free agency. | L'alchimie ne s'achète pas sur le marché des agents libres.
Continuity is underrated in team building. | La continuité est sous-estimée dans la construction d'une équipe.
Good organizations build a culture that outlasts any one player. | Les bonnes organisations construisent une culture qui survit à n'importe quel joueur.
Coaching is as much about managing egos as drawing up plays. | Entraîner, c'est autant gérer les ego que dessiner des systèmes.
The best teams share the ball and defend as a unit. | Les meilleures équipes partagent le ballon et défendent ensemble.
Basketball is a game of runs. | Le basket est un jeu de séries.
The game is won in the margins: rebounds, turnovers and free throws. | Le match se gagne sur les détails : rebonds, pertes de balle et lancers francs.
Stars win games, but teams win championships. | Les stars gagnent des matchs, mais ce sont les équipes qui gagnent des titres.
The ball doesn't lie. | Le ballon ne ment pas.
Basketball is the ultimate team sport. | Le basket est le sport collectif par excellence.
At its best, basketball looks like jazz. | À son meilleur, le basket ressemble à du jazz.
The pick-and-pop punishes teams that drop their big man. | Le pick-and-pop punit les équipes dont le grand recule.
A horns set gives the ball handler options on both sides. | Le système horns donne au porteur des options des deux côtés.
They ICE side pick-and-rolls to keep the ball out of the middle. | Ils défendent en ICE sur les pick-and-rolls latéraux pour empêcher le ballon d'aller au centre.
The weak side has to be ready to help at all times. | Le côté faible doit être prêt à aider à tout moment.
`,
});
