// 法文對照（Français）：游泳
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


addFrench("swimming", {
  words: `
swim | nager | Je sais nager.
pool | la piscine | Allons à la piscine.
water | l'eau | L'eau est froide.
swimsuit | le maillot de bain | Apporte ton maillot de bain.
swim trunks | le short de bain | Il a oublié son short de bain.
goggles | les lunettes de natation | Mets tes lunettes de natation.
swim cap | le bonnet de bain | Tu dois porter un bonnet de bain.
towel | la serviette | Sèche-toi avec une serviette.
locker | le casier | Mets ton sac dans un casier.
locker room | le vestiaire | Le vestiaire est là-bas.
shower | la douche | Prends une douche avant de nager.
deep | profond | L'eau est profonde ici.
shallow | peu profond | Reste là où ce n'est pas profond.
shallow end | le petit bain | Les enfants jouent dans le petit bain.
deep end | le grand bain | Ne va pas dans le grand bain.
lifeguard | le maître-nageur | Le maître-nageur surveille.
kick | battre des jambes | Bats des jambes.
float | flotter | Tu sais flotter sur le dos ?
breathe | respirer | Souffle sous l'eau.
dive | plonger | Ne plonge pas dans le petit bain.
jump in | sauter dans l'eau | Saute dans l'eau !
splash | éclabousser | Ne m'éclabousse pas !
wet | mouillé | J'ai les cheveux mouillés.
cold | froid | La piscine est froide aujourd'hui.
warm | chaud | L'eau est chaude.
lane | la ligne d'eau | Nage dans cette ligne d'eau.
lap | la longueur | J'ai nagé dix longueurs.
wall | le mur | Tiens-toi au mur.
ladder | l'échelle | Sors par l'échelle.
kickboard | la planche | Utilise une planche.
float ring | la bouée | Le bébé a une bouée.
armbands | les brassards | Les enfants portent des brassards.
beach | la plage | Allons nager à la plage.
sea | la mer | La mer est calme aujourd'hui.
wave | la vague | Les vagues sont grosses.
sand | le sable | Le sable est brûlant.
sunscreen | la crème solaire | Mets de la crème solaire.
sun | le soleil | Le soleil tape fort.
river | la rivière | Ne nage pas dans la rivière.
lake | le lac | Nous avons nagé dans le lac.
safe | sans danger | On peut nager ici sans danger ?
danger | le danger | Danger ! Baignade interdite.
no swimming | baignade interdite | Le panneau dit « Baignade interdite ».
whistle | le sifflet | Le maître-nageur a donné un coup de sifflet.
help | au secours | Au secours !
lesson | le cours | Je prends des cours de natation.
teacher | le professeur | Mon professeur de natation est patient.
learn | apprendre | J'apprends à nager.
practice | s'entraîner | Entraîne-toi chaque semaine.
fast | vite | Elle nage vite.
slow | lentement | Je nage lentement.
far | loin | Ne nage pas trop loin.
under water | sous l'eau | Tu sais ouvrir les yeux sous l'eau ?
head | la tête | Mets la tête dans l'eau.
arms | les bras | Bouge les bras.
legs | les jambes | Bats des jambes tendues.
feet | les pieds | Tends les pieds.
hands | les mains | Creuse les mains.
nose | le nez | Fais des bulles avec le nez.
mouth | la bouche | Ferme la bouche sous l'eau.
ears | les oreilles | J'ai de l'eau dans les oreilles.
eyes | les yeux | J'ai mal aux yeux à cause du chlore.
bubbles | les bulles | Fais des bulles.
scared | avoir peur | J'ai peur de l'eau profonde.
brave | courageux | Sois courageux !
tired | fatigué | Je suis fatigué après la natation.
hungry | avoir faim | La natation me donne faim.
fun | amusant | Nager, c'est amusant.
summer | l'été | Je nage tous les étés.
weekend | le week-end | Allons nager ce week-end.
morning | le matin | La piscine est calme le matin.
open | ouvert | La piscine est ouverte jusqu'à neuf heures.
closed | fermé | La piscine est fermée le lundi.
ticket | le ticket | Achète un ticket au guichet.
slide | le toboggan | Allons sur le toboggan !
water park | le parc aquatique | Nous sommes allés dans un parc aquatique.
hot tub | le jacuzzi | Détends-toi dans le jacuzzi.
sauna | le sauna | Je vais au sauna après la natation.
fish | le poisson | J'ai vu un poisson !
boat | le bateau | Éloigne-toi du bateau en nageant.
snorkel | faire du snorkeling | Je veux faire du snorkeling.
diving | la plongée | La plongée, c'est passionnant.
race | la course | On fait la course jusqu'au mur !
win | gagner | Je veux gagner la course.
medal | la médaille | Elle a gagné une médaille.
champion | le champion | C'est un champion de natation.
Olympics | les Jeux olympiques | Je regarde la natation aux Jeux olympiques.
freestyle | le crawl | J'aime le crawl.
backstroke | le dos crawlé | Le dos crawlé est facile pour moi.
breaststroke | la brasse | Ma mère nage la brasse.
butterfly | le papillon | Le papillon est très difficile.
dog paddle | la nage du petit chien | Mon fils sait nager comme un petit chien.
swimmer | le nageur | C'est une bonne nageuse.
cramp | la crampe | J'ai une crampe à la jambe.
rest | se reposer | Repose-toi au mur.
dry | sec | Sèche-toi et habille-toi.
hair dryer | le sèche-cheveux | Utilise le sèche-cheveux.
flip-flops | les tongs | Mets des tongs dans le vestiaire.
pool deck | le bord de la piscine | Ne cours pas au bord de la piscine.
noodle | la frite | Les enfants jouent avec une frite.
`,
  phrases: `
Can you swim? | Tu sais nager ?
I can swim a little. | Je sais nager un peu.
I can't swim yet. | Je ne sais pas encore nager.
I'm learning to swim. | J'apprends à nager.
Let's go swimming. | Allons nager.
Let's go to the pool. | Allons à la piscine.
What time does the pool open? | La piscine ouvre à quelle heure ?
The pool opens at six. | La piscine ouvre à six heures.
How much is a ticket? | Combien coûte un ticket ?
Where is the locker room? | Où est le vestiaire ?
Where are the showers? | Où sont les douches ?
Take a shower before you swim. | Prends une douche avant de nager.
Put on your swim cap. | Mets ton bonnet de bain.
You must wear a swim cap. | Tu dois porter un bonnet de bain.
I forgot my goggles. | J'ai oublié mes lunettes.
Can I borrow your goggles? | Je peux t'emprunter tes lunettes ?
My goggles are leaking. | Mes lunettes prennent l'eau.
The water is cold! | L'eau est froide !
The water is warm. | L'eau est chaude.
Is the water deep? | L'eau est profonde ?
Stay in the shallow end. | Reste dans le petit bain.
Don't go to the deep end. | Ne va pas dans le grand bain.
How deep is it here? | C'est profond comment ici ?
It's 1.2 meters deep. | Il y a 1,20 mètre de profondeur.
I can touch the bottom. | J'ai pied.
I can't touch the bottom. | Je n'ai pas pied.
Hold on to the wall. | Tiens-toi au mur.
Kick your legs. | Bats des jambes.
Move your arms. | Bouge les bras.
Put your face in the water. | Mets le visage dans l'eau.
Blow bubbles. | Fais des bulles.
Breathe out under water. | Souffle sous l'eau.
Turn your head to breathe. | Tourne la tête pour respirer.
Float on your back. | Fais la planche sur le dos.
Relax. Don't panic. | Détends-toi. Ne panique pas.
I'm scared of the water. | J'ai peur de l'eau.
Don't worry. I'm here. | Ne t'inquiète pas. Je suis là.
You're doing great! | Tu te débrouilles très bien !
Use the kickboard. | Utilise la planche.
Swim to me! | Nage vers moi !
You did it! | Tu as réussi !
I swam across the pool! | J'ai traversé la piscine à la nage !
No running! | Interdit de courir !
Walk, don't run. The floor is wet. | Marche, ne cours pas. Le sol est mouillé.
No diving in the shallow end. | Interdit de plonger dans le petit bain.
Don't push people into the pool. | Ne pousse pas les gens dans la piscine.
Listen to the lifeguard. | Écoute le maître-nageur.
The lifeguard blew the whistle. | Le maître-nageur a sifflé.
Everyone out of the pool! | Tout le monde sort de l'eau !
It's time to get out. | Il est l'heure de sortir.
I swam ten laps today. | J'ai nagé dix longueurs aujourd'hui.
Which stroke do you like? | Quelle nage tu préfères ?
I like freestyle. | J'aime le crawl.
Breaststroke is easy for me. | La brasse est facile pour moi.
Butterfly is very hard. | Le papillon est très difficile.
Can you swim backstroke? | Tu sais nager le dos crawlé ?
Let's race to the other side! | On fait la course jusqu'à l'autre bout !
I won! | J'ai gagné !
You're a fast swimmer. | Tu nages vite.
I'm slow, but I don't give up. | Je suis lent, mais je n'abandonne pas.
I got water in my ears. | J'ai de l'eau dans les oreilles.
My eyes are red. | J'ai les yeux rouges.
I swallowed some water. | J'ai bu la tasse.
I have a cramp! | J'ai une crampe !
Help! | Au secours !
Are you okay? | Ça va ?
Let's rest for a minute. | Reposons-nous une minute.
I'm so hungry after swimming. | J'ai tellement faim après la natation.
Dry yourself with a towel. | Sèche-toi avec une serviette.
Don't forget your flip-flops. | N'oublie pas tes tongs.
Put your things in the locker. | Mets tes affaires dans le casier.
I lost my locker key. | J'ai perdu la clé de mon casier.
Let's go to the beach. | Allons à la plage.
Put on sunscreen. | Mets de la crème solaire.
The waves are big today. | Les vagues sont grosses aujourd'hui.
Don't swim too far out. | Ne nage pas trop au large.
Swim between the flags. | Nage entre les drapeaux.
The red flag means no swimming. | Le drapeau rouge signifie baignade interdite.
Don't swim in the river. | Ne nage pas dans la rivière.
It's dangerous. | C'est dangereux.
Always swim with a friend. | Nage toujours avec un ami.
Wear a life jacket on the boat. | Porte un gilet de sauvetage sur le bateau.
Let's go to the water park! | Allons au parc aquatique !
Let's go down the slide! | Descendons le toboggan !
I want to try snorkeling. | Je veux essayer le snorkeling.
I saw lots of fish! | J'ai vu plein de poissons !
I take swimming lessons on Saturday. | Je prends des cours de natation le samedi.
My swimming teacher is very kind. | Mon professeur de natation est très gentil.
Swimming is good exercise. | La natation est un bon exercice.
Swimming makes me feel relaxed. | La natation me détend.
I swim every morning before work. | Je nage tous les matins avant le travail.
I love swimming in summer. | J'adore nager en été.
The pool is closed today. | La piscine est fermée aujourd'hui.
The pool is very crowded. | La piscine est bondée.
Let's come early tomorrow. | Venons tôt demain.
My hair is still wet. | J'ai encore les cheveux mouillés.
Where's the hair dryer? | Où est le sèche-cheveux ?
That was fun! | C'était amusant !
Let's swim again next week. | Retournons nager la semaine prochaine.
I'm getting better at swimming. | Je progresse en natation.
`,
});

addFrench("swimming", {
  words: `
stroke | la nage | Quelle nage tu préfères ?
front crawl | le crawl | Le crawl est la nage la plus rapide.
individual medley | le quatre nages | Le quatre nages utilise les quatre styles.
relay | le relais | Notre équipe a gagné le relais.
flip turn | le virage culbute | Entraîne-toi au virage culbute.
open turn | le virage ouvert | La brasse utilise un virage ouvert.
push off | pousser sur le mur | Pousse fort sur le mur.
streamline | la position hydrodynamique | Garde une position hydrodynamique bien serrée.
glide | la glisse | Glisse après chaque battement.
flutter kick | le battement de jambes | Le crawl utilise un battement de jambes.
dolphin kick | l'ondulation | L'ondulation est puissante.
frog kick | le ciseau de brasse | La brasse utilise un ciseau de brasse.
bilateral breathing | la respiration bilatérale | La respiration bilatérale équilibre ta nage.
body position | la position du corps | Une bonne position du corps réduit la résistance.
rotation | la rotation | La rotation du corps aide à allonger le mouvement.
pull buoy | le pull-buoy | Utilise un pull-buoy pour les éducatifs de bras.
fins | les palmes | Les palmes t'aident à battre plus vite.
paddles | les plaquettes | Les plaquettes renforcent les bras.
center snorkel | le tuba frontal | Un tuba frontal t'aide à te concentrer sur ta nage.
anti-fog | antibuée | Mes lunettes ont des verres antibuée.
nose clip | le pince-nez | Utilise un pince-nez pour le dos crawlé.
earplugs | les bouchons d'oreilles | Les bouchons d'oreilles empêchent l'eau d'entrer.
chlorine | le chlore | L'odeur de chlore est forte.
lane rope | la ligne de flottaison | Ne tire pas sur la ligne de flottaison.
lane etiquette | les règles de la ligne d'eau | Respecte les règles de la ligne d'eau et nage en cercle.
fast lane | la ligne rapide | La ligne rapide est pour les bons nageurs.
slow lane | la ligne lente | Je nage dans la ligne lente.
circle swim | nager en cercle | Nagez en cercle quand vous êtes trois dans une ligne.
set | la série | La série principale d'aujourd'hui est dix 100 mètres.
interval | le temps de départ | Nage chaque 100 sur un départ toutes les deux minutes.
pace clock | la pendule | Regarde la pendule.
warm-up | l'échauffement | Commence par 400 mètres d'échauffement.
cool-down | la récupération | Termine par une récupération facile.
drill | l'éducatif | Cet éducatif améliore ta prise d'eau.
technique | la technique | La technique compte plus que la force.
endurance | l'endurance | La natation développe l'endurance.
lung capacity | la capacité pulmonaire | La natation augmente la capacité pulmonaire.
low-impact | sans impact | La natation est un sport sans impact.
swim team | l'équipe de natation | J'ai rejoint l'équipe de natation.
swim meet | la compétition de natation | Nous avons une compétition de natation samedi.
heat | la série | Elle a gagné sa série.
starting block | le plot de départ | Monte sur le plot de départ.
false start | le faux départ | Il a été disqualifié pour faux départ.
disqualified | disqualifié | Elle a été disqualifiée pour un virage non réglementaire.
touchpad | la plaque de touche | Frappe fort la plaque de touche à l'arrivée.
personal best | le record personnel | J'ai battu mon record personnel.
50-meter pool | le bassin de 50 mètres | Les épreuves olympiques se nagent en bassin de 50 mètres.
25-meter pool | le bassin de 25 mètres | La plupart des piscines publiques ont un bassin de 25 mètres.
open water | l'eau libre | La nage en eau libre est un autre défi.
wetsuit | la combinaison | Mets une combinaison en eau froide.
buoy | la bouée | Contourne la bouée jaune.
sighting | le repérage | Entraîne-toi au repérage en eau libre.
current | le courant | Le courant est fort aujourd'hui.
rip current | le courant d'arrachement | Un courant d'arrachement peut t'emporter au large.
jellyfish | la méduse | Attention aux méduses.
sunburn | le coup de soleil | J'ai pris un coup de soleil à la plage.
drowning | la noyade | Une noyade peut arriver en quelques secondes.
CPR | la réanimation cardio-pulmonaire | Tous les maîtres-nageurs connaissent la réanimation cardio-pulmonaire.
life jacket | le gilet de sauvetage | Porte un gilet de sauvetage sur le bateau.
water safety | la sécurité aquatique | La sécurité aquatique doit s'apprendre tôt.
swim test | le test de natation | Réussis un test de natation pour aller dans le grand bain.
swimmer's ear | l'otite du baigneur | Sèche-toi les oreilles pour éviter l'otite du baigneur.
red eyes | les yeux rouges | Le chlore me donne les yeux rouges.
dry skin | la peau sèche | Nager tous les jours me donne la peau sèche.
membership | l'abonnement | J'ai pris un abonnement à la piscine.
indoor pool | la piscine couverte | La piscine couverte est chauffée.
outdoor pool | la piscine en plein air | La piscine en plein air ferme en hiver.
heated pool | la piscine chauffée | Une piscine chauffée, c'est génial en hiver.
lap swimming | la nage en longueurs | La nage en longueurs, c'est de six à huit heures.
aqua aerobics | l'aquagym | Ma grand-mère fait de l'aquagym.
synchronized swimming | la natation synchronisée | La natation synchronisée s'appelle maintenant natation artistique.
water polo | le water-polo | Le water-polo est très fatigant.
diving board | le plongeoir | Saute du plongeoir.
platform | la plateforme | La plateforme de 10 mètres fait peur.
triathlon | le triathlon | Un triathlon commence par la natation.
Sun Moon Lake swim | la traversée du lac du Soleil et de la Lune | Des milliers de personnes participent chaque année à la traversée du lac du Soleil et de la Lune.
long distance | la longue distance | Je préfère la nage de longue distance.
sprint | le sprint | Le 50 nage libre est un sprint.
coach | l'entraîneur | Mon entraîneur a corrigé ma nage.
swim club | le club de natation | Je nage dans un club de natation local.
goggle tan | les marques de lunettes | J'ai des marques de lunettes.
swim bag | le sac de piscine | Prépare ton sac de piscine.
chamois towel | la serviette microfibre | Une serviette microfibre sèche vite.
lifeguard chair | la chaise de surveillance | Le maître-nageur est assis sur une haute chaise de surveillance.
no diving | plongeon interdit | Le panneau dit « Plongeon interdit ».
rinse off | se rincer | Rince-toi après la natation.
tread water | faire du surplace | Tu sais faire du surplace pendant une minute ?
backfloat | faire la planche | Fais la planche si tu es fatigué.
cannonball | la bombe | Pas de bombes dans la piscine !
stroke count | le nombre de mouvements | Compte tes mouvements à chaque longueur.
length | la longueur | Une longueur fait 25 mètres.
drag suit | le maillot frein | Certains nageurs s'entraînent avec un maillot frein.
kick set | la série de jambes | Nous avons fait une longue série de jambes.
pull set | la série de bras | La série de bras se fait avec des plaquettes.
catch-up drill | l'éducatif de rattrapé | L'éducatif de rattrapé améliore la coordination.
sculling | la godille | La godille aide à sentir l'eau.
underwater | sous l'eau | Retiens ta respiration sous l'eau.
lifesaving | le sauvetage | J'ai suivi une formation de sauvetage.
pool rules | le règlement de la piscine | Lis le règlement de la piscine.
swim lesson | le cours de natation | Mon cours de natation est le mardi.
sink or swim | marche ou crève | Au nouveau travail, c'est marche ou crève.
dive in | se lancer | Lançons-nous.
test the waters | tâter le terrain | Tâte le terrain avant de t'engager.
in deep water | dans le pétrin | Il est dans le pétrin avec la banque.
go with the flow | se laisser porter | Laisse-toi porter.
keep your head above water | garder la tête hors de l'eau | C'est difficile de garder la tête hors de l'eau.
like a fish to water | comme un poisson dans l'eau | Elle s'y est mise comme un poisson dans l'eau.
make waves | faire des vagues | Ne fais pas de vagues au travail.
dip your toe in | tâter l'eau | Commence par tâter l'eau.
swim against the tide | nager à contre-courant | Il aime nager à contre-courant.
in the swim | dans le coup | Elle est dans le coup.
just keep swimming | continuer à nager | Continue à nager.
a big fish in a small pond | un gros poisson dans une petite mare | C'est un gros poisson dans une petite mare.
fish out of water | comme un poisson hors de l'eau | Je me sentais comme un poisson hors de l'eau.
make a splash | faire sensation | La nouvelle émission va faire sensation.
`,
});

addFrench("swimming", {
  phrases: `
How many laps do you usually swim? | Tu nages combien de longueurs d'habitude ?
I swim about two kilometers a session. | Je nage environ deux kilomètres par séance.
I'm working on my freestyle technique. | Je travaille ma technique de crawl.
I can breathe on both sides now. | Je sais maintenant respirer des deux côtés.
Bilateral breathing keeps your stroke balanced. | La respiration bilatérale équilibre ta nage.
Keep your head down and your hips up. | Garde la tête basse et les hanches hautes.
Your legs are sinking. | Tes jambes coulent.
Kick from your hips, not your knees. | Bats des jambes depuis les hanches, pas les genoux.
Reach forward and glide. | Allonge le bras devant et glisse.
Rotate your body with each stroke. | Fais pivoter ton corps à chaque mouvement.
Push off the wall in a streamline. | Pousse sur le mur en position hydrodynamique.
I'm learning to do flip turns. | J'apprends à faire des virages culbutes.
Breaststroke needs a two-hand touch at the wall. | En brasse, il faut toucher le mur des deux mains.
Which lane should I use? | Quelle ligne d'eau je dois prendre ?
This is the fast lane. | C'est la ligne rapide.
I'll swim in the slow lane. | Je vais nager dans la ligne lente.
We're circle swimming in this lane. | Dans cette ligne, on nage en cercle.
Keep to the right. | Reste à droite.
Can I share your lane? | Je peux partager ta ligne d'eau ?
Tap their feet if you want to pass. | Touche-lui les pieds si tu veux doubler.
Rest at the end of the lane, not in the middle. | Repose-toi au bout de la ligne, pas au milieu.
Today's main set is ten 100s. | La série principale d'aujourd'hui est dix 100 mètres.
Swim each one on a two-minute interval. | Pars toutes les deux minutes.
Watch the pace clock. | Regarde la pendule.
Start with a 400 warm-up. | Commence par 400 mètres d'échauffement.
Finish with an easy cool-down. | Termine par une récupération facile.
Let's do a kick set with fins. | Faisons une série de jambes avec palmes.
Use a pull buoy to focus on your arms. | Utilise un pull-buoy pour te concentrer sur les bras.
Paddles build strength, but don't overuse them. | Les plaquettes renforcent, mais n'en abuse pas.
This drill improves your catch. | Cet éducatif améliore ta prise d'eau.
I joined a masters swim club. | J'ai rejoint un club de natation pour maîtres.
We train three mornings a week. | Nous nous entraînons trois matins par semaine.
The coach filmed my stroke underwater. | L'entraîneur a filmé ma nage sous l'eau.
I'm swimming in a meet next month. | Je participe à une compétition le mois prochain.
Which events are you entered in? | Tu es inscrit à quelles épreuves ?
I'm swimming the 100 free and the 200 IM. | Je nage le 100 nage libre et le 200 quatre nages.
I'm in heat three, lane five. | Je suis dans la série trois, ligne cinq.
Step up onto the blocks. | Montez sur les plots.
Take your mark. | À vos marques.
He was disqualified for a false start. | Il a été disqualifié pour faux départ.
She was disqualified for an illegal turn. | Elle a été disqualifiée pour un virage non réglementaire.
I swam a personal best! | J'ai battu mon record personnel !
I dropped two seconds. | J'ai gagné deux secondes.
Our relay team finished third. | Notre équipe de relais a fini troisième.
I swam the anchor leg. | J'ai nagé le dernier relais.
Is this a 25-meter or a 50-meter pool? | C'est un bassin de 25 ou de 50 mètres ?
The heated pool is open all year. | La piscine chauffée est ouverte toute l'année.
The outdoor pool is closed in winter. | La piscine en plein air est fermée en hiver.
I bought a monthly pass. | J'ai acheté un abonnement mensuel.
The chlorine is really strong today. | Le chlore est vraiment fort aujourd'hui.
My skin gets dry from the chlorine. | Le chlore me dessèche la peau.
Rinse off and use lotion after swimming. | Rince-toi et mets de la crème après la natation.
I think I have swimmer's ear. | Je crois que j'ai une otite du baigneur.
Dry your ears carefully after swimming. | Sèche-toi bien les oreilles après la natation.
Anti-fog goggles make a big difference. | Les lunettes antibuée font une grande différence.
I'm training for the Sun Moon Lake swim. | Je m'entraîne pour la traversée du lac du Soleil et de la Lune.
Open water is very different from the pool. | L'eau libre est très différente de la piscine.
There's no wall to rest on. | Il n'y a pas de mur pour se reposer.
Practice sighting every few strokes. | Entraîne-toi à lever la tête pour te repérer tous les quelques mouvements.
Swim toward the yellow buoy. | Nage vers la bouée jaune.
Stay close to the group. | Reste près du groupe.
Wear a bright swim cap so people can see you. | Porte un bonnet de couleur vive pour qu'on te voie.
Do I need a wetsuit? | J'ai besoin d'une combinaison ?
The water temperature is 24 degrees. | La température de l'eau est de 24 degrés.
Watch out for jellyfish. | Attention aux méduses.
The current is strong near the rocks. | Le courant est fort près des rochers.
If you get caught in a rip current, swim parallel to the shore. | Si tu es pris dans un courant d'arrachement, nage parallèlement au rivage.
Don't fight the current. | Ne lutte pas contre le courant.
Float and wave for help. | Flotte et fais signe pour demander de l'aide.
I'm doing my first triathlon this year. | Je fais mon premier triathlon cette année.
The swim is the part I worry about most. | La natation est la partie qui m'inquiète le plus.
I took a lifesaving course. | J'ai suivi une formation de sauvetage.
Lifeguards need to pass a strict test. | Les maîtres-nageurs doivent réussir un examen strict.
Every child should learn to swim. | Chaque enfant devrait apprendre à nager.
Swimming is part of the school curriculum in Taiwan. | La natation fait partie du programme scolaire à Taïwan.
Can you tread water for two minutes? | Tu sais faire du surplace pendant deux minutes ?
Swimming is easy on the joints. | La natation ménage les articulations.
It's a great sport for people with back problems. | C'est un excellent sport pour les personnes qui ont mal au dos.
My grandmother does aqua aerobics. | Ma grand-mère fait de l'aquagym.
I swim to clear my head. | Je nage pour me vider la tête.
Swimming burns a lot of calories. | La natation brûle beaucoup de calories.
I'm always starving after practice. | J'ai toujours une faim de loup après l'entraînement.
The pool is quieter early in the morning. | La piscine est plus calme tôt le matin.
Lap swimming is from six to eight. | La nage en longueurs, c'est de six à huit heures.
Kids' lessons take up half the pool on weekends. | Le week-end, les cours pour enfants occupent la moitié de la piscine.
The pool is closed for maintenance. | La piscine est fermée pour entretien.
Can I bring my own kickboard? | Je peux apporter ma propre planche ?
Please don't hang on the lane ropes. | Merci de ne pas vous accrocher aux lignes.
Swimmers need to keep their nails short. | Les nageurs doivent garder les ongles courts.
I have a goggle tan from the summer. | J'ai des marques de lunettes depuis l'été.
I can hold my breath for a whole length. | Je peux retenir ma respiration sur toute une longueur.
Don't hold your breath too long. It's dangerous. | Ne retiens pas ta respiration trop longtemps. C'est dangereux.
Swim at your own pace. | Nage à ton rythme.
Consistency is the key to improving. | La régularité est la clé du progrès.
Technique matters more than strength. | La technique compte plus que la force.
Good swimmers make it look effortless. | Les bons nageurs donnent l'impression que c'est sans effort.
I've been swimming since I was five. | Je nage depuis l'âge de cinq ans.
Swimming is a skill for life. | Nager est une compétence pour la vie.
Could you check my stroke? | Tu pourrais regarder ma nage ?
I'd like to join the intermediate group. | J'aimerais rejoindre le groupe intermédiaire.
`,
});

addFrench("swimming", {
  words: `
catch | la prise d'eau | Une bonne prise d'eau déplace plus d'eau.
early vertical forearm | l'avant-bras vertical précoce | Un avant-bras vertical précoce améliore la prise d'eau.
high elbow | le coude haut | Garde le coude haut pendant la traction.
pull phase | la phase de traction | La phase de traction génère la propulsion.
recovery phase | le retour aérien | Détends-toi pendant le retour aérien.
propulsion | la propulsion | Tes jambes ajoutent de la propulsion.
drag | la résistance | Une mauvaise position du corps augmente la résistance.
frontal drag | la résistance frontale | Garde la tête basse pour réduire la résistance frontale.
hydrodynamics | l'hydrodynamique | L'hydrodynamique explique pourquoi la position allongée compte.
buoyancy | la flottabilité | La masse grasse augmente la flottabilité.
stroke rate | la fréquence de nage | Les sprinteurs d'élite ont une fréquence de nage élevée.
distance per stroke | la distance par cycle | La distance par cycle montre l'efficacité.
SWOLF | le SWOLF | Mon score SWOLF s'est amélioré ce mois-ci.
critical swim speed | la vitesse critique de nage | La vitesse critique de nage fixe ton allure d'entraînement.
threshold pace | l'allure au seuil | Tiens l'allure au seuil pendant la série principale.
aerobic capacity | la capacité aérobie | Les longues séries développent la capacité aérobie.
lactate tolerance | la tolérance au lactate | Les séries de tolérance au lactate préparent au 200 mètres.
taper | l'affûtage | Les nageurs font un affûtage avant les grandes compétitions.
shave down | se raser | Les nageurs se rasent avant les championnats.
tech suit | la combinaison de compétition | Une combinaison de compétition comprime le corps.
polyurethane suit | la combinaison en polyuréthane | Les combinaisons en polyuréthane ont été interdites en 2010.
underwater dolphin kick | l'ondulation sous-marine | L'ondulation sous-marine est appelée la cinquième nage.
15-meter mark | la marque des 15 mètres | Tu dois remonter avant la marque des 15 mètres.
breakout | la sortie de coulée | Sa sortie de coulée est très rapide.
reaction time | le temps de réaction | Son temps de réaction au départ était de 0,6 seconde.
relay exchange | le passage de relais | Un passage de relais rapide peut faire gagner la course.
negative split | le negative split | Elle a nagé son 400 en negative split.
splits | les temps de passage | Ses temps de passage étaient très réguliers.
world record | le record du monde | Le record du monde est tombé ce soir.
Olympic trials | les sélections olympiques | Elle s'est qualifiée aux sélections olympiques.
qualifying standard | le temps de qualification | Il a réalisé le temps de qualification.
heats, semis and finals | les séries, les demi-finales et les finales | Le 100 mètres comporte des séries, des demi-finales et des finales.
lane assignment | l'attribution des lignes | L'attribution des lignes dépend des temps d'engagement.
anchor leg | le dernier relais | Elle a nagé le dernier relais.
dryland training | la préparation physique à sec | La préparation physique à sec renforce la ceinture abdominale.
core stability | la stabilité du tronc | La stabilité du tronc garde les hanches hautes.
shoulder mobility | la mobilité des épaules | Les nageurs ont besoin d'une bonne mobilité des épaules.
swimmer's shoulder | l'épaule du nageur | Le surentraînement peut provoquer l'épaule du nageur.
impingement | le conflit sous-acromial | Le conflit sous-acromial est fréquent chez les nageurs.
overuse injury | la blessure de surmenage | Les blessures de surmenage viennent de trop de kilomètres.
yardage | le kilométrage | Les nageurs d'élite accumulent un énorme kilométrage.
periodization | la périodisation | La périodisation prépare à la compétition principale.
hypoxic training | l'entraînement en hypoxie | L'entraînement en hypoxie doit se faire avec prudence.
shallow water blackout | la syncope en eau peu profonde | Retenir sa respiration peut provoquer une syncope.
hyperventilation | l'hyperventilation | Ne jamais hyperventiler avant une apnée ; l'hyperventilation est dangereuse.
cold water shock | le choc thermique | Le choc thermique peut provoquer la panique.
hypothermia | l'hypothermie | L'hypothermie est un risque en eau libre.
acclimatize | s'acclimater | Acclimate-toi lentement à l'eau froide.
marathon swimming | la nage marathon | La nage marathon couvre 10 kilomètres.
channel swim | la traversée de la Manche | La traversée de la Manche à la nage est légendaire.
escort boat | le bateau accompagnateur | Un bateau accompagnateur suit le nageur.
feeding stick | la perche de ravitaillement | L'entraîneur a utilisé une perche de ravitaillement.
drafting | l'aspiration | Nager dans l'aspiration des autres économise de l'énergie.
navigation | l'orientation | Une bonne orientation raccourcit ta nage.
water temperature | la température de l'eau | La température de l'eau est de 19 degrés.
water quality | la qualité de l'eau | Les courses peuvent être annulées à cause d'une mauvaise qualité de l'eau.
E. coli | l'E. coli | Des taux élevés d'E. coli ont fait fermer la plage.
drowning prevention | la prévention des noyades | La prévention des noyades sauve de jeunes vies.
swim curriculum | le programme de natation | Les écoles de Taïwan ont un programme de natation.
self-rescue | l'autosauvetage | Les enfants apprennent les techniques d'autosauvetage.
float to live | flotter pour survivre | « Flotter pour survivre » apprend à rester calme.
rescue tube | la bouée tube | Le maître-nageur a pris une bouée tube.
spinal injury | la lésion de la colonne vertébrale | Plonger en eau peu profonde peut causer une lésion de la colonne vertébrale.
anti-doping | l'antidopage | Les contrôles antidopage sont fréquents en natation.
contamination | la contamination | Ils ont attribué le contrôle positif à une contamination alimentaire.
biological passport | le passeport biologique | Le passeport biologique suit les valeurs sanguines.
federation | la fédération | La fédération sélectionne l'équipe nationale.
World Aquatics | World Aquatics | World Aquatics fixe les règles.
short course | le petit bain de 25 mètres | Les records en bassin de 25 mètres sont plus rapides.
long course | le grand bassin | Les épreuves olympiques se nagent en grand bassin.
touch out | battre à la touche | Elle a battu sa rivale à la touche pour un centième.
dead heat | l'ex aequo | La course s'est terminée par un ex aequo.
false start rule | la règle du faux départ | La règle du faux départ unique est stricte.
disqualification | la disqualification | Une disqualification a mis fin à ses Jeux olympiques.
stroke judge | le juge de nage | Le juge de nage surveillait les virages.
turn judge | le juge de virage | Le juge de virage a signalé un virage non réglementaire.
illegal kick | le battement irrégulier | Un battement irrégulier a entraîné une disqualification.
para swimming | la para-natation | En para-natation, les catégories dépendent du handicap.
classification | la classification | La classification garantit une compétition équitable.
inclusive | inclusif | La piscine propose des séances inclusives.
aquatic therapy | la thérapie aquatique | La thérapie aquatique aide à la rééducation.
hydrotherapy | l'hydrothérapie | L'hydrothérapie soulage les douleurs articulaires.
masters swimming | la natation des maîtres | La natation des maîtres s'adresse aux adultes de tous âges.
lifelong sport | le sport de toute une vie | La natation est un sport de toute une vie.
pool maintenance | l'entretien de la piscine | L'entretien de la piscine la ferme pendant une semaine.
water chemistry | le traitement de l'eau | Le traitement de l'eau garde la piscine sûre.
public pool | la piscine municipale | La piscine municipale n'est pas chère.
accessibility | l'accessibilité | La piscine a un élévateur pour l'accessibilité.
carbon footprint | l'empreinte carbone | Les piscines chauffées ont une forte empreinte carbone.
energy cost | le coût de l'énergie | La hausse du coût de l'énergie a fait fermer certaines piscines.
kick tempo | le rythme des jambes | Le rythme des jambes change selon la distance.
six-beat kick | le battement à six temps | Les sprinteurs utilisent un battement à six temps.
two-beat kick | le battement à deux temps | Les nageurs de fond utilisent un battement à deux temps.
glide phase | la phase de glisse | Raccourcis la phase de glisse en sprint.
hip rotation | la rotation des hanches | La rotation des hanches entraîne le mouvement.
head position | la position de la tête | La position de la tête influence tes hanches.
pacing | la gestion de l'allure | Gérer l'allure sur un 400, c'est tout un art.
start reaction | la réaction au départ | Sa réaction au départ est la plus rapide du plateau.
track start | le départ athlétique | La plupart des nageurs utilisent un départ athlétique.
backstroke ledge | le cale-pieds de dos | Le cale-pieds de dos empêche de glisser.
jump in at the deep end | se jeter à l'eau | Parfois, il faut se jeter à l'eau.
out of your depth | dépassé | Ne t'inquiète pas si tu te sens dépassé.
go off the deep end | péter les plombs | Ne pète pas les plombs pour une petite erreur.
thrown in at the deep end | jeté dans le grand bain | Les nouveaux enseignants sont souvent jetés dans le grand bain.
come up for air | souffler | Je n'ai pas eu le temps de souffler de la semaine.
the tide is turning | le vent tourne | Le vent tourne en notre faveur.
a sea change | un changement radical | Il y a eu un changement radical des mentalités.
smooth sailing | sans encombre | À partir d'ici, ça ira sans encombre.
plenty of fish in the sea | un de perdu, dix de retrouvés | Un de perdu, dix de retrouvés.
the tip of the iceberg | la partie émergée de l'iceberg | Ce n'est que la partie émergée de l'iceberg.
make a clean sweep | tout rafler | Elle espère rafler toutes les médailles d'or.
like water off a duck's back | glisser comme l'eau sur les plumes d'un canard | Les critiques glissent sur lui comme l'eau sur les plumes d'un canard.
swim with the sharks | nager avec les requins | Dans les affaires, on nage avec les requins.
a drop in the ocean | une goutte d'eau dans l'océan | C'est une goutte d'eau dans l'océan.
`,
  phrases: `
A strong catch is the foundation of an efficient stroke. | Une bonne prise d'eau est la base d'une nage efficace.
Focus on an early vertical forearm during the catch. | Concentre-toi sur un avant-bras vertical précoce pendant la prise d'eau.
Keep a high elbow so you push water backward, not downward. | Garde le coude haut pour pousser l'eau vers l'arrière, pas vers le bas.
Most of your propulsion comes from the pull. | L'essentiel de ta propulsion vient de la traction.
Drag increases with the square of your speed. | La résistance augmente avec le carré de la vitesse.
Reducing drag is often easier than adding power. | Réduire la résistance est souvent plus facile qu'ajouter de la puissance.
Lifting your head to breathe drops your hips. | Lever la tête pour respirer fait tomber les hanches.
A neutral head position keeps your body aligned. | Une position neutre de la tête garde le corps aligné.
Hip-driven rotation is more efficient than shoulder-driven rotation. | Une rotation guidée par les hanches est plus efficace qu'une rotation guidée par les épaules.
Distance swimmers often use a two-beat kick to save energy. | Les nageurs de fond utilisent souvent un battement à deux temps pour économiser de l'énergie.
Sprinters rely on a six-beat kick for maximum speed. | Les sprinteurs comptent sur un battement à six temps pour la vitesse maximale.
Stroke rate and distance per stroke must be balanced. | Fréquence de nage et distance par cycle doivent être équilibrées.
Spinning your arms without a good catch wastes energy. | Mouliner des bras sans bonne prise d'eau gaspille de l'énergie.
Track your SWOLF to measure efficiency. | Suis ton SWOLF pour mesurer ton efficacité.
Critical swim speed helps you set training paces. | La vitesse critique de nage t'aide à fixer tes allures d'entraînement.
Threshold sets build the engine for the 400 and 1500. | Les séries au seuil construisent le moteur pour le 400 et le 1500.
Lactate tolerance work prepares you for the pain of the 200. | Le travail de tolérance au lactate te prépare à la douleur du 200 mètres.
Underwater dolphin kicks are often called the fifth stroke. | L'ondulation sous-marine est souvent appelée la cinquième nage.
You must surface before the 15-meter mark. | Tu dois remonter avant la marque des 15 mètres.
A fast breakout carries your speed into the stroke. | Une sortie de coulée rapide transmet ta vitesse à la nage.
Races are often won on the starts and turns. | Les courses se gagnent souvent aux départs et aux virages.
A great relay exchange can be worth half a second. | Un excellent passage de relais peut valoir une demi-seconde.
She swam a perfectly judged negative split. | Elle a nagé une seconde moitié plus rapide parfaitement dosée.
Going out too fast in the 200 is a classic mistake. | Partir trop vite sur 200 mètres est une erreur classique.
Swimmers taper for two or three weeks before championships. | Les nageurs s'affûtent deux ou trois semaines avant les championnats.
Shaving down reduces drag and sharpens your feel for the water. | Se raser réduit la résistance et aiguise les sensations dans l'eau.
Tech suits compress the body and improve body position. | Les combinaisons de compétition compriment le corps et améliorent la position.
The polyurethane suits of 2009 rewrote the record books. | Les combinaisons en polyuréthane de 2009 ont réécrit les tablettes des records.
Those suits were banned because they distorted competition. | Ces combinaisons ont été interdites parce qu'elles faussaient la compétition.
Dryland training builds the core strength swimmers need. | La préparation physique à sec développe la force du tronc dont les nageurs ont besoin.
Shoulder mobility is essential for a long swimming career. | La mobilité des épaules est essentielle pour une longue carrière.
Swimmer's shoulder comes from overuse and poor technique. | L'épaule du nageur vient du surmenage et d'une mauvaise technique.
Huge yardage was once the only path to success. | Un énorme kilométrage était autrefois la seule voie vers le succès.
Today coaches balance volume with quality and recovery. | Aujourd'hui, les entraîneurs équilibrent volume, qualité et récupération.
Hypoxic training must always be supervised. | L'entraînement en hypoxie doit toujours être surveillé.
Breath-holding games can lead to shallow water blackout. | Les jeux d'apnée peuvent provoquer une syncope.
Never hyperventilate before swimming underwater. | Ne jamais hyperventiler avant de nager sous l'eau.
Cold water shock can cause involuntary gasping. | Le choc thermique peut provoquer un réflexe d'inspiration involontaire.
Acclimatize gradually before cold open water swims. | Acclimate-toi progressivement avant de nager en eau libre froide.
Hypothermia can set in faster than people expect. | L'hypothermie peut s'installer plus vite qu'on ne le pense.
Marathon swimming is as much mental as physical. | La nage marathon est autant mentale que physique.
Channel swimmers are fed from an escort boat. | Les nageurs de la Manche sont ravitaillés depuis un bateau accompagnateur.
Navigation can add hundreds of meters to an open water swim. | Une mauvaise orientation peut ajouter des centaines de mètres en eau libre.
Drafting in open water can save significant energy. | Nager dans l'aspiration en eau libre économise beaucoup d'énergie.
Water quality concerns have disrupted open water events. | Les inquiétudes sur la qualité de l'eau ont perturbé des épreuves en eau libre.
High bacteria levels forced organizers to cancel training sessions. | Des taux de bactéries élevés ont obligé les organisateurs à annuler des entraînements.
Drowning is a leading cause of death for young children. | La noyade est l'une des principales causes de décès chez les jeunes enfants.
Most drownings are silent; there's rarely splashing or shouting. | La plupart des noyades sont silencieuses ; il y a rarement des éclaboussures ou des cris.
Drowning prevention starts with teaching children to swim. | La prévention des noyades commence par apprendre aux enfants à nager.
Self-rescue skills are as important as stroke technique. | Les techniques d'autosauvetage sont aussi importantes que la technique de nage.
"Float to live" teaches people to stay calm and breathe. | « Flotter pour survivre » apprend à rester calme et à respirer.
Never jump in to save someone unless you're trained. | Ne saute jamais à l'eau pour sauver quelqu'un si tu n'es pas formé.
Reach or throw, don't go. | Tends ou lance, mais n'y va pas.
Diving into shallow water is a major cause of spinal injuries. | Plonger en eau peu profonde est une cause majeure de lésions de la colonne.
Anti-doping rules in swimming are among the strictest in sport. | Les règles antidopage en natation sont parmi les plus strictes du sport.
Contamination cases have caused heated debate. | Les cas de contamination ont provoqué de vifs débats.
The biological passport detects suspicious changes in blood values. | Le passeport biologique détecte les variations suspectes des valeurs sanguines.
Short course and long course records are kept separately. | Les records en petit et en grand bassin sont comptés séparément.
Races can be decided by a hundredth of a second. | Les courses peuvent se jouer à un centième de seconde.
A touchpad measures the finish to the hundredth. | Une plaque de touche mesure l'arrivée au centième.
Dead heats are rare but do happen. | Les ex aequo sont rares, mais ils arrivent.
The one-start rule leaves no room for error. | La règle du départ unique ne laisse aucune place à l'erreur.
Stroke judges watch every kick and every turn. | Les juges de nage surveillent chaque battement et chaque virage.
Para swimmers are grouped by classification to ensure fair competition. | Les para-nageurs sont regroupés par classification pour garantir une compétition équitable.
Aquatic therapy helps patients recover from injury. | La thérapie aquatique aide les patients à se remettre de blessures.
Hydrotherapy eases arthritis pain. | L'hydrothérapie soulage les douleurs de l'arthrite.
Masters swimmers prove that it's never too late. | Les nageurs maîtres prouvent qu'il n'est jamais trop tard.
Swimming is one of the few sports you can do for a lifetime. | La natation est l'un des rares sports qu'on peut pratiquer toute sa vie.
Heated pools have a large energy footprint. | Les piscines chauffées ont une forte empreinte énergétique.
Rising energy costs have forced some public pools to close. | La hausse du coût de l'énergie a forcé certaines piscines municipales à fermer.
Access to pools is unequal across neighborhoods. | L'accès aux piscines est inégal selon les quartiers.
Public pools are vital community spaces. | Les piscines municipales sont des lieux de vie essentiels.
Good water chemistry protects both swimmers and the pool. | Un bon traitement de l'eau protège à la fois les nageurs et la piscine.
Many swimmers develop asthma-like symptoms from chlorine by-products. | Beaucoup de nageurs développent des symptômes proches de l'asthme à cause des sous-produits du chlore.
Ventilation in indoor pools affects air quality. | La ventilation des piscines couvertes influe sur la qualité de l'air.
The best swimmers have an almost unteachable feel for the water. | Les meilleurs nageurs ont un sens de l'eau presque impossible à enseigner.
Feel for the water comes from thousands of hours in the pool. | Le sens de l'eau vient de milliers d'heures passées dans la piscine.
Elite swimming is a lonely sport: hours staring at a black line. | La natation d'élite est un sport solitaire : des heures à fixer une ligne noire.
Mental health struggles among elite swimmers have been widely discussed. | Les difficultés de santé mentale des nageurs d'élite ont été largement évoquées.
Burnout is common among young swimmers who specialize too early. | L'épuisement est fréquent chez les jeunes nageurs qui se spécialisent trop tôt.
Early specialization can shorten a swimmer's career. | Une spécialisation précoce peut raccourcir la carrière d'un nageur.
Talent identification in swimming starts very young. | La détection des talents en natation commence très tôt.
Asian swimmers have made huge progress in recent years. | Les nageurs asiatiques ont fait d'énormes progrès ces dernières années.
Swimming in Taiwan has a growing following thanks to open water events. | La natation à Taïwan attire de plus en plus de monde grâce aux épreuves en eau libre.
The Sun Moon Lake swim attracts tens of thousands each year. | La traversée du lac du Soleil et de la Lune attire des dizaines de milliers de personnes chaque année.
Mass participation events make swimming social. | Les événements de masse rendent la natation conviviale.
Triathlon has introduced many adults to serious swim training. | Le triathlon a initié beaucoup d'adultes à un entraînement de natation sérieux.
Adult-onset swimmers often struggle with breathing technique. | Les adultes qui apprennent à nager ont souvent du mal avec la respiration.
Fear of water is common and can be overcome with patience. | La peur de l'eau est courante et peut se surmonter avec de la patience.
Good coaching makes the difference between struggling and gliding. | Un bon encadrement fait la différence entre se débattre et glisser.
Video analysis has transformed how coaches teach technique. | L'analyse vidéo a transformé la façon d'enseigner la technique.
Wearables now track stroke count, distance and rest. | Les objets connectés suivent désormais le nombre de mouvements, la distance et le repos.
Data is useful, but feel in the water matters most. | Les données sont utiles, mais les sensations dans l'eau comptent le plus.
Every great swim is the product of many unseen mornings. | Chaque grande course est le fruit de nombreux matins dans l'ombre.
The water doesn't care how strong you are; it rewards technique. | L'eau se moque de ta force ; elle récompense la technique.
Efficiency is speed. | L'efficacité, c'est la vitesse.
Swim smarter, not just harder. | Nage plus intelligemment, pas seulement plus fort.
A relaxed recovery saves energy for the next pull. | Un retour aérien détendu économise de l'énergie pour la traction suivante.
The best open water swimmers navigate as well as they swim. | Les meilleurs nageurs en eau libre s'orientent aussi bien qu'ils nagent.
Learning to swim can save your life. | Apprendre à nager peut te sauver la vie.
`,
});
