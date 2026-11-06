// 法文對照（Français）：跑步・馬拉松
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


addFrench("running", {
  words: `
run | courir | Je cours tous les matins.
walk | marcher | Je marche quand je suis fatigué.
jog | faire un jogging | Allons faire un jogging au parc.
race | la course | La course commence à sept heures.
runner | le coureur | C'est une coureuse rapide.
fast | vite | Il court très vite.
slow | doucement | Vas-y doucement au départ.
start | le départ | Attends au départ.
finish | finir | Je veux finir la course.
finish line | la ligne d'arrivée | Elle a franchi la ligne d'arrivée.
starting line | la ligne de départ | Mettez-vous sur la ligne de départ.
running shoes | les chaussures de course | J'ai besoin de nouvelles chaussures de course.
socks | les chaussettes | Mets de bonnes chaussettes pour courir.
shorts | le short | Mets un short quand il fait chaud.
T-shirt | le tee-shirt | Tout le monde a reçu un tee-shirt de la course.
cap | la casquette | Mets une casquette au soleil.
water | l'eau | Bois de l'eau avant de courir.
water bottle | la gourde | Apporte une gourde.
drink | boire | Bois un peu à la fois.
sweat | transpirer | Je transpire beaucoup quand je cours.
tired | fatigué | Je suis fatigué mais content.
breathe | respirer | Respire lentement et profondément.
leg | la jambe | J'ai les jambes fatiguées.
foot | le pied | J'ai mal au pied.
knee | le genou | La course m'a fait mal au genou.
heart | le cœur | Mon cœur bat vite.
road | la route | Nous avons couru sur la route au bord de la rivière.
park | le parc | Allons courir au parc.
track | la piste | Je cours sur la piste de l'école.
lap | le tour | J'ai fait dix tours.
kilometer | le kilomètre | J'ai couru cinq kilomètres aujourd'hui.
mile | le mile | Un marathon fait environ 26 miles.
minute | la minute | J'ai couru trente minutes.
hour | l'heure | La course m'a pris deux heures.
time | le temps | Quel a été ton temps ?
watch | la montre | Ma montre affiche ma vitesse.
medal | la médaille | Chaque finisseur reçoit une médaille.
winner | le vainqueur | Le vainqueur a couru très vite.
first | premier | Elle est arrivée première.
last | dernier | Je suis arrivé dernier, mais j'ai fini !
cheer | encourager | Les gens encourageaient les coureurs.
crowd | la foule | La foule était très bruyante.
friend | l'ami | Je cours avec mon ami.
team | l'équipe | Notre équipe a gagné le relais.
coach | l'entraîneur | Mon entraîneur dit que je deviens plus rapide.
morning | le matin | J'aime courir le matin.
evening | le soir | Il fait plus frais le soir.
hot | chaud | Il fait trop chaud pour courir maintenant.
cold | froid | Il fait froid ce matin.
rain | la pluie | Nous avons couru sous la pluie.
sun | le soleil | Le soleil tape fort aujourd'hui.
wind | le vent | Le vent était très fort.
hill | la côte | Monter la côte en courant, c'est dur.
uphill | la montée | La dernière partie est en montée.
downhill | la descente | Fais attention dans la descente.
rest | se reposer | Repose-toi une minute.
sleep | dormir | Dors bien avant une course.
banana | la banane | Je mange une banane avant de courir.
energy | l'énergie | J'ai beaucoup d'énergie aujourd'hui.
strong | fort | La course renforce les jambes.
healthy | en bonne santé | Courir me garde en bonne santé.
fit | en forme | Je veux être en forme.
goal | l'objectif | Mon objectif est de courir 10 kilomètres.
dream | le rêve | Mon rêve est de courir un marathon.
try | essayer | Essaie de courir un peu chaque jour.
far | loin | Tu as couru jusqu'où ?
long | long | C'était une longue sortie.
short | court | Aujourd'hui, c'est une sortie courte.
easy | facile | La sortie d'aujourd'hui est facile.
hard | dur | La course était dure.
again | encore | On recourt demain.
every day | tous les jours | Je cours tous les jours.
weekend | le week-end | Nous faisons une longue sortie le week-end.
alone | seul | J'aime courir seul.
together | ensemble | Courons ensemble.
music | la musique | J'écoute de la musique quand je cours.
phone | le téléphone | Je mets mon téléphone dans ma poche.
map | le plan | Regarde le plan de la course.
number | le numéro | Mon numéro de course est le 1024.
sign up | s'inscrire | Inscris-toi tôt ; la course est vite complète.
ready | prêt | À vos marques, prêts, partez !
go | partir | Partez ! Courez !
stop | s'arrêter | Arrête-toi si tu te sens mal.
slow down | ralentir | Ralentis dans la côte.
speed up | accélérer | Accélère à la fin.
pass | dépasser | J'ai dépassé trois coureurs.
fall | tomber | Fais attention à ne pas tomber.
hurt | faire mal | J'ai mal à la cheville.
sore | courbaturé | J'ai les jambes courbaturées aujourd'hui.
stretch | s'étirer | Étire-toi après ta course.
shower | la douche | Prends une douche après ta course.
towel | la serviette | Apporte une serviette.
sunscreen | la crème solaire | Mets de la crème solaire.
sunglasses | les lunettes de soleil | Je cours avec des lunettes de soleil.
headband | le bandeau | Un bandeau arrête la sueur.
proud | fier | Je suis fier de ma première course.
happy | heureux | Courir me rend heureux.
fun | amusant | La course fun était géniale.
fun run | la course fun | Toute la famille a fait la course fun.
step | le pas | Fais de petits pas en montée.
`,
  phrases: `
Do you like running? | Tu aimes courir ?
I run every morning. | Je cours tous les matins.
Let's go for a run. | Allons courir.
Do you want to run with me? | Tu veux courir avec moi ?
Where do you usually run? | Tu cours où d'habitude ?
I run in the park near my home. | Je cours dans le parc près de chez moi.
How far did you run? | Tu as couru combien de kilomètres ?
I ran five kilometers. | J'ai couru cinq kilomètres.
How long did it take? | Ça t'a pris combien de temps ?
It took me thirty minutes. | Ça m'a pris trente minutes.
I'm not very fast. | Je ne suis pas très rapide.
Let's run slowly. | Courons doucement.
Wait for me! | Attends-moi !
You're too fast for me. | Tu vas trop vite pour moi.
I need to walk for a minute. | J'ai besoin de marcher une minute.
I'm out of breath. | Je suis essoufflé.
Breathe in through your nose. | Inspire par le nez.
Keep going! | Continue !
You can do it! | Tu peux le faire !
Almost there! | On y est presque !
Only one more kilometer! | Plus qu'un kilomètre !
Don't stop now! | Ne t'arrête pas maintenant !
Good job! | Bravo !
I did it! | J'ai réussi !
I finished my first race! | J'ai fini ma première course !
I got a medal! | J'ai eu une médaille !
I'm so tired. | Je suis tellement fatigué.
My legs are sore. | J'ai des courbatures aux jambes.
My feet hurt. | J'ai mal aux pieds.
I need some water. | J'ai besoin d'eau.
Drink some water. | Bois un peu d'eau.
Don't forget your water bottle. | N'oublie pas ta gourde.
It's too hot to run now. | Il fait trop chaud pour courir maintenant.
Let's run early in the morning. | Courons tôt le matin.
It's raining. Let's run tomorrow. | Il pleut. Courons demain.
Put on sunscreen before you run. | Mets de la crème solaire avant de courir.
Wear a cap in the sun. | Mets une casquette au soleil.
I need new running shoes. | J'ai besoin de nouvelles chaussures de course.
These shoes are very comfortable. | Ces chaussures sont très confortables.
Tie your shoelaces. | Fais tes lacets.
Warm up before you run. | Échauffe-toi avant de courir.
Stretch after your run. | Étire-toi après ta course.
I run three times a week. | Je cours trois fois par semaine.
I want to run a 5K. | Je veux courir un 5 km.
I signed up for a race. | Je me suis inscrit à une course.
The race is next Sunday. | La course a lieu dimanche prochain.
What time does the race start? | La course commence à quelle heure ?
The race starts at six. | La course commence à six heures.
Where is the starting line? | Où est la ligne de départ ?
Where is the finish line? | Où est la ligne d'arrivée ?
Here's your race number. | Voici ton dossard.
Good luck in your race! | Bonne chance pour ta course !
Have fun! | Amuse-toi bien !
Look, there's the finish line! | Regarde, voilà la ligne d'arrivée !
Everyone is cheering for you. | Tout le monde t'encourage.
Go, go, go! | Allez, allez, allez !
I want to beat my time. | Je veux battre mon temps.
I want to get faster. | Je veux devenir plus rapide.
I want to lose weight. | Je veux perdre du poids.
Running makes me feel good. | Courir me fait du bien.
Running is good for your heart. | Courir, c'est bon pour le cœur.
I listen to music when I run. | J'écoute de la musique quand je cours.
I like to run with friends. | J'aime courir avec des amis.
I like to run alone. | J'aime courir seul.
Let's run around the lake. | Faisons le tour du lac en courant.
One lap is 400 meters. | Un tour fait 400 mètres.
I ran ten laps. | J'ai fait dix tours.
Let's take a break. | Faisons une pause.
I'm ready. Let's go! | Je suis prêt. On y va !
Slow down on the hill. | Ralentis dans la côte.
Watch out for cars! | Attention aux voitures !
Run on the left side. | Cours sur le côté gauche.
Be careful. The road is wet. | Fais attention. La route est mouillée.
I fell down. | Je suis tombé.
Are you okay? | Ça va ?
My ankle hurts. | J'ai mal à la cheville.
I need to stop. | J'ai besoin de m'arrêter.
Let's walk back. | Rentrons à pied.
Eat a banana before you run. | Mange une banane avant de courir.
Don't eat too much before running. | Ne mange pas trop avant de courir.
Sleep early tonight. | Couche-toi tôt ce soir.
I have a race tomorrow. | J'ai une course demain.
I'm a little nervous. | Je suis un peu nerveux.
Don't worry. Just enjoy it. | Ne t'inquiète pas. Profite.
What was your time? | Quel a été ton temps ?
My time was 28 minutes. | J'ai fait 28 minutes.
That's a great time! | C'est un super temps !
You're getting faster! | Tu deviens plus rapide !
I run to stay healthy. | Je cours pour rester en bonne santé.
My dream is to run a marathon. | Mon rêve est de courir un marathon.
A marathon is very long. | Un marathon, c'est très long.
My dad runs marathons. | Mon père court des marathons.
Let's run together next week. | Courons ensemble la semaine prochaine.
See you at the park! | Rendez-vous au parc !
I love running in the morning. | J'adore courir le matin.
The air is fresh in the morning. | L'air est frais le matin.
I'm so happy I finished. | Je suis tellement content d'avoir fini.
Thank you for running with me. | Merci d'avoir couru avec moi.
Same time tomorrow? | Même heure demain ?
I feel great after a run. | Je me sens super bien après une course.
`,
});

addFrench("running", {
  words: `
marathon | le marathon | Un marathon fait 42,195 kilomètres.
half marathon | le semi-marathon | Je m'entraîne pour un semi-marathon.
5K | le 5 km | Ma première course était un 5 km.
10K | le 10 km | Elle a couru un 10 km en moins d'une heure.
bib | le dossard | Accroche ton dossard sur le devant de ton maillot.
pace | l'allure | Quelle est ton allure sur marathon ?
split | le temps intermédiaire | Mon premier temps intermédiaire était trop rapide.
personal best | le record personnel | J'ai établi un nouveau record personnel aujourd'hui.
training plan | le plan d'entraînement | Je suis un plan d'entraînement de seize semaines.
long run | la sortie longue | Je fais ma sortie longue le dimanche.
easy run | le footing | La plupart de tes sorties devraient être des footings.
tempo run | la sortie au seuil | Une sortie au seuil est difficile mais tenable.
interval | le fractionné | Nous avons fait huit fractionnés de 400 mètres.
hill repeats | les côtes | Les côtes renforcent les jambes.
warm-up | l'échauffement | Fais un échauffement de dix minutes.
cool-down | le retour au calme | Ne saute pas le retour au calme.
foam roller | le rouleau de massage | J'utilise un rouleau de massage après les sorties longues.
cushioning | l'amorti | Ces chaussures ont beaucoup d'amorti.
insoles | les semelles | Des semelles spéciales m'ont soulagé les pieds.
chafing | les frottements | Utilise un baume pour éviter les frottements.
blister | l'ampoule | J'ai une ampoule à l'orteil.
cramp | la crampe | J'ai eu une crampe au 35e kilomètre.
side stitch | le point de côté | Un point de côté m'a obligé à ralentir.
shin splints | la périostite | Courir trop, trop tôt, provoque des périostites.
runner's knee | le genou du coureur | Le renforcement musculaire aide à prévenir le genou du coureur.
hydration | l'hydratation | L'hydratation est essentielle quand il fait chaud.
water station | le point d'eau | Il y a un point d'eau tous les cinq kilomètres.
aid station | le ravitaillement | Le ravitaillement propose des bananes et des boissons énergétiques.
energy gel | le gel énergétique | Prends un gel énergétique toutes les 45 minutes.
sports drink | la boisson énergétique | Une boisson énergétique remplace le sel perdu.
carbohydrates | les glucides | Mange beaucoup de glucides avant la course.
carb-loading | la recharge en glucides | La recharge en glucides commence deux jours avant le marathon.
rest day | le jour de repos | Prends au moins un jour de repos par semaine.
recovery | la récupération | La récupération fait partie de l'entraînement.
taper | l'affûtage | Je fais deux semaines d'affûtage avant un marathon.
registration | l'inscription | Les inscriptions ouvrent en juin.
entry fee | les frais d'inscription | Les frais d'inscription sont de 1 500 dollars.
starting gun | le coup de pistolet du départ | Le coup de pistolet du départ est donné à 6 heures.
starting corral | le sas de départ | Trouve ton sas de départ grâce à la couleur de ton dossard.
wave start | le départ par vagues | La course a un départ par vagues pour éviter la foule.
chip timing | le chronométrage par puce | Le chronométrage par puce mesure ton temps exact.
finish time | le temps final | Mon temps final était de 4 h 28.
finisher medal | la médaille de finisseur | La médaille de finisseur est magnifique cette année.
cutoff time | la barrière horaire | La barrière horaire est de six heures.
pacer | le meneur d'allure | J'ai suivi le meneur d'allure des quatre heures.
course | le parcours | Le parcours est plat et rapide.
route | l'itinéraire | L'itinéraire longe la rivière.
elevation | le dénivelé | Le parcours a très peu de dénivelé.
headwind | le vent de face | Nous avons eu le vent de face pendant dix kilomètres.
humidity | l'humidité | L'humidité rendait la respiration difficile.
heatstroke | le coup de chaleur | Ralentis pour éviter le coup de chaleur.
GPS watch | la montre GPS | Ma montre GPS mesure ma distance.
heart rate monitor | le cardiofréquencemètre | Un cardiofréquencemètre me garde dans la bonne zone.
running app | l'appli de course | J'enregistre chaque sortie dans une appli de course.
running club | le club de course | J'ai rejoint un club de course.
treadmill | le tapis de course | Je cours sur un tapis de course quand il pleut.
trail running | le trail | Le trail est excellent pour l'équilibre.
mileage | le kilométrage | Mon kilométrage hebdomadaire est d'environ 50 kilomètres.
cadence | la cadence | Augmente ta cadence pour réduire les impacts.
stride | la foulée | Ne fais pas de trop grandes foulées.
running form | la technique de course | Une bonne technique de course économise de l'énergie.
negative split | le negative split | J'ai couru en negative split.
hit the wall | frapper le mur | J'ai frappé le mur au 32e kilomètre.
second wind | le second souffle | J'ai trouvé mon second souffle après la côte.
DNF | l'abandon | J'ai dû abandonner à cause d'une crampe.
age group | la catégorie d'âge | Elle a gagné sa catégorie d'âge.
qualifying time | le temps de qualification | Il faut un temps de qualification pour Boston.
relay | le relais | Notre bureau a participé à un marathon en relais.
sprint | sprinter | Sprinte sur les 200 derniers mètres.
reflective vest | le gilet réfléchissant | Porte un gilet réfléchissant la nuit.
headlamp | la lampe frontale | Une lampe frontale est utile pour les sorties matinales.
compression socks | les chaussettes de compression | Les chaussettes de compression peuvent aider la récupération.
sports bra | la brassière de sport | Une bonne brassière de sport est indispensable.
anti-chafe balm | le baume anti-frottements | Mets du baume anti-frottements sur tes pieds.
motivation | la motivation | Une course me donne la motivation de m'entraîner.
consistency | la régularité | La régularité compte plus que la vitesse.
injury | la blessure | Repose-toi quand tu as une blessure.
physiotherapist | le kinésithérapeute | Mon kinésithérapeute a soigné mon genou.
massage | le massage | Un massage fait du bien après un marathon.
ice bath | le bain glacé | Certains coureurs prennent un bain glacé après la course.
electrolytes | les électrolytes | Les électrolytes préviennent les crampes.
salt tablets | les pastilles de sel | Les pastilles de sel aident les jours de course chauds.
night run | la course de nuit | La ville organise une course de nuit en été.
virtual race | la course virtuelle | J'ai couru une course virtuelle sur mon propre parcours.
race day | le jour de la course | N'essaie rien de nouveau le jour de la course.
race pack | le kit du coureur | Récupère ton kit du coureur samedi.
volunteer | le bénévole | Remercie les bénévoles aux points d'eau.
spectator | le spectateur | Des spectateurs bordaient le parcours.
cheer zone | la zone d'encouragement | La zone d'encouragement m'a donné de l'énergie.
marathoner | le marathonien | C'est un marathonien de toujours.
running buddy | le partenaire de course | Mon partenaire de course me motive.
streak | la série | J'ai une série de 100 jours de course.
pace chart | le tableau d'allure | J'ai écrit mon tableau d'allure sur mon bras.
race belt | la ceinture porte-dossard | Une ceinture porte-dossard tient ton dossard.
hydration vest | le sac d'hydratation | Je porte un sac d'hydratation en trail.
kilometer marker | la borne kilométrique | J'ai passé la borne des 30 kilomètres.
porta-potty | les toilettes mobiles | La file pour les toilettes mobiles était longue.
pacing band | le bracelet d'allure | Mon bracelet d'allure indique chaque temps intermédiaire.
running belt | la ceinture de course | Mon téléphone tient dans ma ceinture de course.
sweat-wicking | respirant | Porte des vêtements respirants.
off to a running start | prendre un bon départ | Nous avons pris un bon départ.
pace yourself | gérer son effort | Gère ton effort ; la course est longue.
neck and neck | au coude à coude | Ils ont couru au coude à coude.
the finish line | la ligne d'arrivée | Je vois la ligne d'arrivée !
in the running | dans la course | Elle est toujours dans la course.
out of the running | hors course | Il est hors course.
on the run | sur le pouce | J'ai pris mon petit-déjeuner sur le pouce.
run circles around | être largement supérieur à | Elle m'est largement supérieure.
off and running | bien lancé | Le projet est bien lancé.
run for your life | courir pour sauver sa peau | Cours pour sauver ta peau !
hit your stride | trouver son rythme | Tu trouveras ton rythme après dix kilomètres.
run in the family | être de famille | La vitesse semble être de famille.
quick off the mark | prompt à réagir | Il est prompt à réagir.
`,
});

addFrench("running", {
  phrases: `
I'm training for the Taipei Marathon. | Je m'entraîne pour le marathon de Taipei.
This will be my first full marathon. | Ce sera mon premier marathon complet.
I've done a few half marathons before. | J'ai déjà fait quelques semi-marathons.
What's your goal time? | Quel est ton objectif de temps ?
I'm aiming to finish under four hours. | Je vise moins de quatre heures.
I just want to finish without walking. | Je veux juste finir sans marcher.
What pace are you running? | Tu cours à quelle allure ?
I'm running about six minutes per kilometer. | Je cours à environ six minutes au kilomètre.
I set a new personal best today! | J'ai battu mon record personnel aujourd'hui !
I knocked two minutes off my time. | J'ai gagné deux minutes sur mon temps.
I'm following a sixteen-week training plan. | Je suis un plan d'entraînement de seize semaines.
I run about forty kilometers a week. | Je cours environ quarante kilomètres par semaine.
I do my long run on Sunday mornings. | Je fais ma sortie longue le dimanche matin.
Most of my runs are easy runs. | La plupart de mes sorties sont des footings.
Today is interval training on the track. | Aujourd'hui, c'est fractionné sur la piste.
We did eight 400-meter repeats. | Nous avons fait huit répétitions de 400 mètres.
Tempo runs are tough but worth it. | Les sorties au seuil sont dures, mais ça vaut le coup.
Hill repeats really build strength. | Les côtes renforcent vraiment les jambes.
Don't skip your rest days. | Ne saute pas tes jours de repos.
I'm tapering this week. | Je suis en affûtage cette semaine.
I'm carb-loading for Sunday's race. | Je fais ma recharge en glucides pour la course de dimanche.
Have you picked up your race pack? | Tu as récupéré ton kit du coureur ?
Pin your bib on the front of your shirt. | Accroche ton dossard sur le devant de ton maillot.
Which starting corral are you in? | Tu es dans quel sas de départ ?
I'll follow the four-hour pacer. | Je vais suivre le meneur d'allure des quatre heures.
Don't go out too fast. | Ne pars pas trop vite.
Run your own race. | Cours à ton rythme.
Stay with the group as long as you can. | Reste avec le groupe le plus longtemps possible.
There's a water station every five kilometers. | Il y a un point d'eau tous les cinq kilomètres.
Grab a cup and keep moving. | Prends un gobelet et continue d'avancer.
Take an energy gel every forty-five minutes. | Prends un gel énergétique toutes les quarante-cinq minutes.
I hit the wall at 32 kilometers. | J'ai frappé le mur au 32e kilomètre.
I got a cramp in my calf. | J'ai eu une crampe au mollet.
I had to walk the last few kilometers. | J'ai dû marcher les derniers kilomètres.
I got my second wind after the bridge. | J'ai retrouvé un second souffle après le pont.
The last ten kilometers were the hardest. | Les dix derniers kilomètres ont été les plus durs.
The crowd kept me going. | Le public m'a porté.
I sprinted to the finish line. | J'ai sprinté jusqu'à la ligne d'arrivée.
I crossed the finish line in 3:58! | J'ai franchi la ligne d'arrivée en 3 h 58 !
I ran a negative split. | J'ai couru la seconde moitié plus vite que la première.
I missed my goal by two minutes. | J'ai raté mon objectif de deux minutes.
I had to DNF because of a knee injury. | J'ai dû abandonner à cause d'une blessure au genou.
My GPS watch says I ran 42.6 kilometers. | Ma montre GPS dit que j'ai couru 42,6 kilomètres.
The course was flat and fast. | Le parcours était plat et rapide.
The humidity made it really tough. | L'humidité a rendu la course vraiment difficile.
We ran into a headwind on the way back. | Nous avons eu le vent de face au retour.
The cutoff time is six and a half hours. | La barrière horaire est de six heures et demie.
Registration opens next month. | Les inscriptions ouvrent le mois prochain.
The race sold out in ten minutes. | La course a affiché complet en dix minutes.
The entry fee is quite expensive. | Les frais d'inscription sont assez chers.
I joined a running club last year. | J'ai rejoint un club de course l'année dernière.
We meet every Wednesday night at the track. | Nous nous retrouvons tous les mercredis soir sur la piste.
My running buddy keeps me motivated. | Mon partenaire de course me garde motivé.
I log all my runs in an app. | J'enregistre toutes mes sorties dans une appli.
I prefer running outdoors to the treadmill. | Je préfère courir dehors que sur un tapis.
I tried trail running for the first time. | J'ai essayé le trail pour la première fois.
Running downhill is hard on the knees. | Courir en descente est dur pour les genoux.
I'm working on my running form. | Je travaille ma technique de course.
Try to increase your cadence a little. | Essaie d'augmenter un peu ta cadence.
Don't overstride. | Ne fais pas de trop grandes foulées.
Relax your shoulders. | Détends tes épaules.
Keep your arms at ninety degrees. | Garde les bras à quatre-vingt-dix degrés.
I'm getting shin splints. | Je commence à avoir une périostite.
I think I have runner's knee. | Je crois que j'ai le genou du coureur.
I'm seeing a physiotherapist for my knee. | Je vois un kinésithérapeute pour mon genou.
Increase your mileage by no more than ten percent a week. | N'augmente pas ton kilométrage de plus de dix pour cent par semaine.
Listen to your body. | Écoute ton corps.
If it hurts, take a day off. | Si ça fait mal, prends un jour de repos.
I use a foam roller after long runs. | J'utilise un rouleau de massage après les sorties longues.
An ice bath helps my legs recover. | Un bain glacé aide mes jambes à récupérer.
These shoes have great cushioning. | Ces chaussures ont un excellent amorti.
Replace your shoes every 600 to 800 kilometers. | Change de chaussures tous les 600 à 800 kilomètres.
Don't wear new shoes on race day. | Ne porte pas de chaussures neuves le jour de la course.
Don't try anything new on race day. | N'essaie rien de nouveau le jour de la course.
Use anti-chafe balm on your feet. | Mets du baume anti-frottements sur tes pieds.
I got a blister on my toe. | J'ai une ampoule à l'orteil.
Wear a reflective vest when it's dark. | Porte un gilet réfléchissant quand il fait nuit.
I'm doing a night run this weekend. | Je fais une course de nuit ce week-end.
How do you stay motivated in winter? | Comment tu restes motivé en hiver ?
Consistency is more important than speed. | La régularité est plus importante que la vitesse.
I'm running for charity this year. | Cette année, je cours pour une association caritative.
I raised 20,000 dollars for the children's hospital. | J'ai récolté 20 000 dollars pour l'hôpital des enfants.
Thank you, volunteers! | Merci, les bénévoles !
I'll be cheering at the 30K mark. | Je serai au 30e kilomètre pour encourager.
Look for me at kilometer 35. | Cherche-moi au kilomètre 35.
I need to qualify for Boston. | Je dois me qualifier pour Boston.
Tokyo uses a lottery, so it's hard to get in. | Tokyo fait un tirage au sort, donc c'est difficile d'y entrer.
My recovery took about a week. | Ma récupération a pris environ une semaine.
I'm taking it easy this week. | J'y vais doucement cette semaine.
I'm already planning my next race. | Je prépare déjà ma prochaine course.
Running clears my head. | Courir me vide la tête.
I do my best thinking when I run. | C'est en courant que je réfléchis le mieux.
Running is cheaper than therapy. | Courir coûte moins cher qu'une thérapie.
Every runner has bad days. | Tous les coureurs ont de mauvais jours.
Respect the distance. | Respecte la distance.
See you at the start line! | Rendez-vous sur la ligne de départ !
The marathon starts when you reach 30 kilometers. | Le marathon commence au 30e kilomètre.
I'm proud of every kilometer. | Je suis fier de chaque kilomètre.
Pain is temporary, but the medal is forever. | La douleur est passagère, mais la médaille est éternelle.
Which race are you doing next? | Quelle est ta prochaine course ?
`,
});

addFrench("running", {
  words: `
VO2 max | la VO2 max | Le fractionné peut augmenter ta VO2 max.
lactate threshold | le seuil lactique | Les sorties au seuil améliorent ton seuil lactique.
aerobic base | la base aérobie | Les kilomètres faciles construisent ta base aérobie.
anaerobic | anaérobie | Les sprints sont des efforts anaérobies.
heart rate zones | les zones de fréquence cardiaque | Entraîne-toi selon tes zones de fréquence cardiaque, pas selon ton ego.
zone 2 | la zone 2 | La plupart de mes sorties sont en zone 2.
periodization | la périodisation | La périodisation organise l'entraînement en phases.
base building | le foncier | Le travail foncier dure environ huit semaines.
peak week | la semaine de pointe | La semaine de pointe faisait 90 kilomètres.
overtraining syndrome | le syndrome de surentraînement | Une fatigue constante peut signaler un syndrome de surentraînement.
plantar fasciitis | l'aponévrosite plantaire | L'aponévrosite plantaire rendait chaque pas douloureux.
IT band syndrome | le syndrome de la bandelette ilio-tibiale | Le syndrome de la bandelette ilio-tibiale provoque une douleur à l'extérieur du genou.
stress fracture | la fracture de fatigue | Une fracture de fatigue l'a éloignée des courses pendant des mois.
Achilles tendinitis | la tendinite d'Achille | Le travail en côte a réveillé ma tendinite d'Achille.
gait analysis | l'analyse de foulée | Une analyse de foulée a montré que je faisais de trop grandes foulées.
overpronation | la surpronation | Les chaussures stables peuvent aider en cas de surpronation.
heel strike | l'attaque talon | L'attaque talon n'est pas toujours mauvaise.
forefoot strike | l'attaque avant-pied | Les sprinteurs attaquent généralement par l'avant-pied.
carbon-plated shoes | les chaussures à plaque carbone | Les chaussures à plaque carbone ont changé la course d'élite.
super shoes | les super chaussures | Les critiques disent que les super chaussures faussent les records.
running economy | l'économie de course | Le renforcement améliore l'économie de course.
glycogen | le glycogène | Tes muscles stockent du glycogène comme carburant.
bonk | la fringale | J'ai eu une fringale au 35e kilomètre parce que je n'avais pas mangé.
hyponatremia | l'hyponatrémie | Boire trop d'eau peut provoquer une hyponatrémie.
rhabdomyolysis | la rhabdomyolyse | Un effort extrême peut déclencher une rhabdomyolyse.
heat acclimatization | l'acclimatation à la chaleur | L'acclimatation à la chaleur prend environ deux semaines.
altitude training | l'entraînement en altitude | Les coureurs kényans profitent de l'entraînement en altitude.
even pacing | l'allure régulière | Une allure régulière est la stratégie la plus efficace.
race strategy | la stratégie de course | Ma stratégie de course était de me retenir jusqu'au 30e kilomètre.
drafting | l'aspiration | Courir dans l'aspiration des autres économise de l'énergie.
surge | l'accélération | Il a placé une accélération dans la dernière côte.
finishing kick | le finish | Elle a un finish redoutable.
world record | le record du monde | Le record du monde est d'un peu plus de deux heures.
sub-two-hour | sous les deux heures | Un marathon sous les deux heures était autrefois impensable.
doping | le dopage | Les scandales de dopage ont touché la course de fond.
biological passport | le passeport biologique | Le passeport biologique suit les valeurs sanguines des athlètes.
elite field | le peloton élite | Le peloton élite part cinq minutes plus tôt.
pacemaker | le lièvre | Les lièvres s'arrêtent après 30 kilomètres.
prize money | la prime | Les primes attirent les meilleurs coureurs.
appearance fee | la prime de participation | Les stars touchent une prime de participation.
mass participation | la participation de masse | Les courses de masse ont explosé.
charity runner | le coureur solidaire | Les coureurs solidaires collectent des fonds pour des causes.
bib transfer | la cession de dossard | Les cessions de dossard non officielles sont interdites.
course record | le record de l'épreuve | Le record de l'épreuve est tombé cette année.
net time | le temps réel | Ton temps réel commence quand tu passes le tapis.
gun time | le temps officiel | Le classement officiel utilise le temps officiel.
World Marathon Majors | les World Marathon Majors | Elle a terminé les six World Marathon Majors.
ultramarathon | l'ultramarathon | Un ultramarathon fait plus de 42 kilomètres.
trail ultra | l'ultra-trail | L'ultra-trail avait 3 000 mètres de dénivelé positif.
vertical gain | le dénivelé positif | Le parcours a un énorme dénivelé positif.
runner's high | l'euphorie du coureur | J'ai ressenti l'euphorie du coureur après 10 km.
endorphins | les endorphines | Courir libère des endorphines.
mental toughness | la force mentale | Les 10 derniers kilomètres mettent ta force mentale à l'épreuve.
visualization | la visualisation | La visualisation m'aide à rester calme le jour de la course.
mantra | le mantra | Mon mantra est « encore un kilomètre ».
recovery run | le footing de récupération | Un footing de récupération doit être très facile.
deload week | la semaine allégée | Je fais une semaine allégée chaque mois.
cross-training | l'entraînement croisé | Le vélo est un bon entraînement croisé.
strength training | le renforcement musculaire | Le renforcement musculaire réduit le risque de blessure.
plyometrics | la pliométrie | La pliométrie améliore la puissance.
mobility | la mobilité | Le travail de mobilité garde mes hanches en bonne santé.
sleep hygiene | l'hygiène du sommeil | Une bonne hygiène du sommeil accélère la récupération.
fueling strategy | la stratégie de ravitaillement | Teste ta stratégie de ravitaillement pendant les sorties longues.
gut training | l'entraînement digestif | L'entraînement digestif t'aide à absorber plus de glucides.
caffeine | la caféine | La caféine peut améliorer l'endurance.
sweat rate | le taux de sudation | Pèse-toi pour estimer ton taux de sudation.
sodium loss | la perte de sodium | Les personnes qui transpirent beaucoup perdent beaucoup de sodium.
cardiac arrest | l'arrêt cardiaque | L'arrêt cardiaque en course est rare, mais réel.
AED | le défibrillateur | Des bénévoles équipés de défibrillateurs sont placés le long du parcours.
medical tent | le poste de secours | Il est allé au poste de secours à cause de crampes.
heat illness | le malaise lié à la chaleur | Les malaises liés à la chaleur augmentent fortement au-dessus de 28 degrés.
wet-bulb temperature | la température humide | Les courses peuvent être annulées si la température humide est trop élevée.
air quality | la qualité de l'air | Vérifie la qualité de l'air avant de courir dehors.
cup-free | sans gobelet | C'est une course sans gobelet, alors apporte le tien.
sustainability | la durabilité | Le marathon a un plan de développement durable.
road closure | la fermeture de route | Le marathon entraîne des fermetures de routes en centre-ville.
lottery entry | l'inscription par tirage au sort | Tokyo utilise un système d'inscription par tirage au sort.
good-for-age | le temps qualificatif par âge | Il est entré grâce à un temps qualificatif par âge.
race-day nerves | le trac du jour de course | Le trac du jour de course est normal.
dropout rate | le taux d'abandon | La chaleur a fait grimper le taux d'abandon.
taper madness | l'angoisse de l'affûtage | L'angoisse de l'affûtage rend les coureurs nerveux.
progression run | la sortie progressive | Une sortie progressive finit plus vite qu'elle ne commence.
fartlek | le fartlek | Le fartlek alterne course rapide et course lente.
threshold run | la sortie au seuil | Une sortie au seuil se fait à peu près à l'allure d'une course d'une heure.
strides | les lignes droites | Fais quatre lignes droites après les footings.
form drills | les éducatifs | Les éducatifs améliorent la coordination.
biomechanics | la biomécanique | La biomécanique explique comment tu bouges.
ground contact time | le temps de contact au sol | Les coureurs d'élite ont un temps de contact au sol très court.
vertical oscillation | l'oscillation verticale | Une forte oscillation verticale gaspille de l'énergie.
training load | la charge d'entraînement | Augmente ta charge d'entraînement progressivement.
acute-to-chronic ratio | le ratio charge aiguë/chronique | Un ratio charge aiguë/chronique élevé augmente le risque de blessure.
heart rate variability | la variabilité de la fréquence cardiaque | Une faible variabilité de la fréquence cardiaque peut signaler de la fatigue.
resting heart rate | la fréquence cardiaque au repos | Ma fréquence cardiaque au repos est descendue à 48.
polarized training | l'entraînement polarisé | L'entraînement polarisé mélange séances très faciles et très dures.
double threshold | le double seuil | Les coureurs norvégiens ont popularisé les journées double seuil.
lactate testing | le test de lactate | Le test de lactate guide l'intensité de l'entraînement.
metabolic efficiency | l'efficacité métabolique | Les longues sorties faciles améliorent l'efficacité métabolique.
energy availability | la disponibilité énergétique | Une faible disponibilité énergétique nuit à la santé des os.
RED-S | le RED-S | Le RED-S peut provoquer des fractures de fatigue.
stride length | la longueur de foulée | La longueur de foulée augmente quand tu progresses.
it's a marathon, not a sprint | c'est un marathon, pas un sprint | N'oublie pas, c'est un marathon, pas un sprint.
go the distance | tenir la distance | Je sais que tu peux tenir la distance.
the home stretch | la dernière ligne droite | Nous sommes dans la dernière ligne droite !
run the gauntlet | passer entre les mailles | Il a dû affronter une haie de journalistes.
run out of steam | s'essouffler | Je m'essouffle toujours vers la fin.
run rings around | surclasser | Les jeunes coureurs nous surclassent.
a head start | une longueur d'avance | L'entraînement précoce m'a donné une longueur d'avance.
jump the gun | faire un faux départ | Ne fais pas de faux départ.
the long haul | le long terme | Courir, c'est sur le long terme.
in it for the long haul | engagé sur le long terme | Je suis engagé sur le long terme.
cross the finish line | franchir la ligne d'arrivée | J'ai pleuré en la voyant franchir la ligne d'arrivée.
pass the baton | passer le relais | Il est temps de passer le relais.
keep pace | suivre le rythme | C'est difficile de suivre son rythme.
outrun | distancer | On ne peut pas distancer une mauvaise alimentation.
slow and steady wins the race | rien ne sert de courir, il faut partir à point | Rien ne sert de courir, il faut partir à point.
`,
  phrases: `
Most of my training is in zone 2 to build my aerobic base. | La plupart de mon entraînement se fait en zone 2 pour construire ma base aérobie.
I follow an 80/20 approach: mostly easy, some very hard. | Je suis la règle des 80/20 : surtout du facile, un peu de très dur.
Threshold sessions raise the pace you can hold for an hour. | Les séances au seuil augmentent l'allure que tu peux tenir pendant une heure.
Intervals at VO2 max pace are brutal but effective. | Le fractionné à allure VO2 max est brutal mais efficace.
I've plateaued, so I'm changing my training stimulus. | Je stagne, alors je change mes stimulations d'entraînement.
Periodization lets you peak at exactly the right time. | La périodisation permet d'être au top au bon moment.
My coach adjusts the plan based on my heart rate variability. | Mon entraîneur ajuste le plan selon ma variabilité de fréquence cardiaque.
A rising resting heart rate is a warning sign of overtraining. | Une fréquence cardiaque au repos qui augmente est un signe de surentraînement.
I'm managing my training load to avoid injury. | Je gère ma charge d'entraînement pour éviter les blessures.
Injuries usually come from doing too much, too soon. | Les blessures viennent généralement d'en faire trop, trop tôt.
Strength training has made me far more resilient. | Le renforcement musculaire m'a rendu beaucoup plus résistant.
I cross-train on the bike to reduce impact. | Je fais du vélo en entraînement croisé pour réduire les impacts.
A gait analysis showed I was overstriding. | Une analyse de foulée a montré que je faisais de trop grandes foulées.
Changing your foot strike won't fix everything. | Changer ton attaque de pied ne réglera pas tout.
Carbon-plated shoes improve running economy by a few percent. | Les chaussures à plaque carbone améliorent l'économie de course de quelques pour cent.
Super shoes have made it hard to compare records across eras. | Les super chaussures rendent difficile la comparaison des records d'une époque à l'autre.
Governing bodies now limit the stack height of racing shoes. | Les fédérations limitent désormais l'épaisseur des semelles de compétition.
Your muscles can only store about ninety minutes' worth of glycogen. | Tes muscles ne stockent qu'environ quatre-vingt-dix minutes de glycogène.
Without fueling, almost everyone bonks in a marathon. | Sans ravitaillement, presque tout le monde a une fringale sur marathon.
Elite runners now take in up to 120 grams of carbs an hour. | Les coureurs d'élite absorbent désormais jusqu'à 120 grammes de glucides par heure.
Gut training lets your stomach handle race-day fueling. | L'entraînement digestif permet à ton estomac de supporter le ravitaillement le jour de la course.
Drinking to thirst is safer than forcing down water. | Boire selon sa soif est plus sûr que se forcer à boire.
Overdrinking can cause hyponatremia, which can be fatal. | Trop boire peut provoquer une hyponatrémie, qui peut être mortelle.
Heat acclimatization can take two weeks. | L'acclimatation à la chaleur peut prendre deux semaines.
In hot, humid conditions, adjust your goal pace. | Par temps chaud et humide, adapte ton allure cible.
Races are increasingly cancelled because of extreme heat. | Les courses sont de plus en plus souvent annulées à cause de la chaleur extrême.
Wet-bulb temperature is a better guide than air temperature. | La température humide est un meilleur repère que la température de l'air.
Even pacing is almost always the fastest strategy. | Une allure régulière est presque toujours la stratégie la plus rapide.
A slight negative split is the hallmark of a well-judged race. | Une seconde moitié légèrement plus rapide est la marque d'une course bien gérée.
Banking time early usually backfires. | Vouloir prendre de l'avance au début se retourne généralement contre toi.
Drafting behind a group saves a surprising amount of energy. | Courir dans l'aspiration d'un groupe économise une quantité surprenante d'énergie.
The race was decided by a surge at 35 kilometers. | La course s'est jouée sur une accélération au 35e kilomètre.
She has the best finishing kick in the field. | Elle a le meilleur finish du peloton.
The sub-two-hour marathon was achieved under special conditions. | Le marathon sous les deux heures a été réalisé dans des conditions spéciales.
Pacemakers and laser guides aren't allowed in record-eligible races. | Les lièvres qui se relaient et les guides laser sont interdits dans les courses homologables.
Doping has cast a shadow over distance running. | Le dopage a jeté une ombre sur la course de fond.
The biological passport helps catch cheats indirectly. | Le passeport biologique aide à attraper les tricheurs de manière indirecte.
Mass participation has turned marathons into festivals. | La participation de masse a transformé les marathons en fêtes.
The marathon boom has created a whole industry. | L'essor du marathon a créé toute une industrie.
Lottery systems were introduced because demand far exceeds supply. | Les tirages au sort ont été introduits parce que la demande dépasse largement l'offre.
Selling your bib is dangerous because medical records won't match. | Revendre son dossard est dangereux, car les données médicales ne correspondront pas.
Every major race has an AED team along the course. | Chaque grande course a une équipe avec défibrillateur le long du parcours.
Cardiac arrest during marathons is rare, but quick CPR saves lives. | L'arrêt cardiaque pendant un marathon est rare, mais un massage cardiaque rapide sauve des vies.
Get a health check before your first marathon. | Fais un bilan de santé avant ton premier marathon.
Low energy availability can lead to stress fractures. | Une faible disponibilité énergétique peut entraîner des fractures de fatigue.
RED-S affects both male and female athletes. | Le RED-S touche aussi bien les hommes que les femmes.
Recovery is where the adaptation actually happens. | C'est pendant la récupération que l'adaptation se produit vraiment.
Sleep is the most underrated performance enhancer. | Le sommeil est le facteur de performance le plus sous-estimé.
The mental side becomes everything in the final 10K. | Dans les 10 derniers kilomètres, tout se joue au mental.
I break the race into small chunks to stay focused. | Je découpe la course en petits morceaux pour rester concentré.
Visualization helps me rehearse the hard moments. | La visualisation m'aide à répéter les moments difficiles.
I repeat a mantra when it gets tough. | Je répète un mantra quand ça devient dur.
The runner's high is real, but it's not guaranteed. | L'euphorie du coureur existe, mais elle n'est pas garantie.
Running is as much about patience as fitness. | Courir demande autant de patience que de forme physique.
Ultramarathons are as much about eating as running. | En ultramarathon, manger compte autant que courir.
Trail ultras demand a completely different skill set. | Les ultra-trails demandent des compétences complètement différentes.
Vertical gain matters more than distance on mountain courses. | Sur les parcours de montagne, le dénivelé compte plus que la distance.
Age-graded results let older runners compare performances fairly. | Les résultats pondérés par l'âge permettent aux coureurs plus âgés de comparer équitablement leurs performances.
Masters runners are breaking records once thought impossible. | Les coureurs vétérans battent des records autrefois jugés impossibles.
Women's marathon times have improved dramatically in recent decades. | Les temps des femmes sur marathon se sont nettement améliorés ces dernières décennies.
Kenyan and Ethiopian runners dominate the sport for many reasons. | Les coureurs kényans et éthiopiens dominent ce sport pour de nombreuses raisons.
Altitude, culture and economics all play a part. | L'altitude, la culture et l'économie jouent toutes un rôle.
Prize money is a lifeline for many professional runners. | Les primes sont vitales pour beaucoup de coureurs professionnels.
Running shoe brands shape the sport through sponsorship. | Les marques de chaussures façonnent ce sport grâce au parrainage.
Race organizers face pressure to reduce plastic waste. | Les organisateurs sont pressés de réduire les déchets plastiques.
Cup-free races ask runners to carry their own cups. | Les courses sans gobelet demandent aux coureurs d'apporter le leur.
Road closures for marathons are often controversial with residents. | Les fermetures de routes pour les marathons sont souvent mal vues par les habitants.
Data from wearables can be useful but also obsessive. | Les données des objets connectés peuvent être utiles, mais aussi obsédantes.
Don't let your watch dictate how you feel. | Ne laisse pas ta montre décider de ce que tu ressens.
Run by feel on easy days. | Les jours faciles, cours aux sensations.
A rest week is part of the plan, not a failure. | Une semaine de repos fait partie du plan, ce n'est pas un échec.
Chasing a time can rob you of the joy of running. | Courir après un chrono peut te priver du plaisir de courir.
The best training plan is the one you can stick to. | Le meilleur plan d'entraînement est celui que tu peux tenir.
Small gains add up over years, not weeks. | Les petits progrès s'accumulent sur des années, pas des semaines.
Most runners peak in their late twenties to mid-thirties. | La plupart des coureurs atteignent leur meilleur niveau entre la fin de la vingtaine et le milieu de la trentaine.
Running economy improves with years of consistent mileage. | L'économie de course s'améliore avec des années de kilométrage régulier.
Ground contact time shortens as you get faster. | Le temps de contact au sol diminue quand on devient plus rapide.
Plyometrics improve the elastic return of your tendons. | La pliométrie améliore le retour élastique des tendons.
Hip strength is often the missing link in injury prevention. | La force des hanches est souvent le maillon manquant de la prévention des blessures.
Plantar fasciitis can take months to resolve. | L'aponévrosite plantaire peut mettre des mois à guérir.
An Achilles injury should never be run through. | Il ne faut jamais courir avec une blessure au tendon d'Achille.
Bone stress injuries need imaging to confirm. | Les blessures osseuses de fatigue doivent être confirmées par imagerie.
A return-to-run program should be gradual. | Un programme de reprise de la course doit être progressif.
Taper madness is the restless feeling before a big race. | L'angoisse de l'affûtage, c'est la nervosité avant une grande course.
Race-day nerves are a sign that you care. | Le trac du jour de course montre que ça compte pour toi.
Trust your training. | Fais confiance à ton entraînement.
The hay is in the barn. | Le travail est fait.
Start conservatively and finish strong. | Pars prudemment et finis fort.
Running a marathon teaches you what you're made of. | Courir un marathon t'apprend de quoi tu es fait.
Finishing is a victory in itself. | Finir est une victoire en soi.
The community is the best part of running. | La communauté est ce qu'il y a de mieux dans la course.
Running groups have become a way to make friends in big cities. | Les groupes de course sont devenus un moyen de se faire des amis dans les grandes villes.
Taiwan's race calendar is packed from autumn to spring. | Le calendrier des courses à Taïwan est chargé de l'automne au printemps.
Many Taiwanese runners travel abroad to run the Majors. | Beaucoup de coureurs taïwanais partent à l'étranger pour courir les Majors.
Six-star finishers have completed all the World Marathon Majors. | Les finisseurs six étoiles ont terminé tous les World Marathon Majors.
Running teaches you that discomfort is temporary. | Courir t'apprend que l'inconfort est passager.
The only bad run is the one you didn't do. | La seule mauvaise sortie est celle que tu n'as pas faite.
Long-distance running rewards stubbornness. | La course de fond récompense l'obstination.
The finish line is just the beginning of the next goal. | La ligne d'arrivée n'est que le début du prochain objectif.
The marathon humbles everyone sooner or later. | Le marathon finit toujours par rendre humble.
`,
});
