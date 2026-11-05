// 法文對照（Français）：住・居住
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


// ---------- 基礎 Basic ----------
addFrench("housing", {
  words: `
apartment | l'appartement | J'habite dans un petit appartement.
kitchen | la cuisine | Ma mère cuisine dans la cuisine.
bedroom | la chambre | Ma chambre est à côté de la salle de bains.
rent | le loyer ; louer | Le loyer est de dix mille dollars par mois.
neighbor | le voisin | Notre voisin est très sympathique.
clean | nettoyer | Je nettoie ma chambre tous les dimanches.
house | la maison | Ils habitent dans une grande maison.
home | la maison ; le chez-soi | Je rentre à la maison à six heures.
room | la pièce ; la chambre | Ma chambre est petite mais douillette.
bathroom | la salle de bains ; les toilettes | Où sont les toilettes ?
living room | le salon | Nous regardons la télé dans le salon.
door | la porte | Ferme la porte, s'il te plaît.
window | la fenêtre | Tu peux ouvrir la fenêtre ?
bed | le lit | Je me couche à onze heures.
table | la table | Mets les assiettes sur la table.
chair | la chaise | Cette chaise est très confortable.
sofa | le canapé | Le chat dort sur le canapé.
lamp | la lampe | Allume la lampe, s'il te plaît.
floor | le sol ; l'étage | J'habite au troisième étage.
wall | le mur | Il y a une horloge au mur.
key | la clé | J'ai perdu ma clé !
stairs | l'escalier | Prends l'escalier jusqu'au deuxième étage.
garden | le jardin | Mon grand-père cultive des tomates dans le jardin.
roof | le toit | Le toit fuit.
toilet | les toilettes ; la cuvette | La chasse d'eau ne marche pas.
shower | la douche | Je prends une douche tous les matins.
fridge | le frigo | Le lait est dans le frigo.
sleep | dormir | Je dors huit heures par nuit.
wake up | se réveiller | Je me réveille à six heures et demie.
wash | laver | Lave la vaisselle, s'il te plaît.
quiet | calme | Ma rue est très calme.
noisy | bruyant | Les voisins sont bruyants la nuit.
dirty | sale | Le sol est sale.
messy | en désordre | La chambre de mon frère est toujours en désordre.
light | la lumière | Éteins la lumière, s'il te plaît.
fan | le ventilateur | Allume le ventilateur. Il fait chaud.
TV | la télé | La télé est dans le salon.
clock | l'horloge | L'horloge est au mur.
mirror | le miroir | Il y a un miroir dans la salle de bains.
bathtub | la baignoire | Notre salle de bains a une baignoire.
sink | l'évier ; le lavabo | Lave-toi les mains au lavabo.
towel | la serviette | Je peux avoir une serviette propre ?
soap | le savon | Lave-toi les mains avec du savon.
pillow | l'oreiller | J'ai besoin d'un oreiller moelleux.
blanket | la couverture | Cette couverture est chaude.
curtain | le rideau | Ferme les rideaux, s'il te plaît.
carpet | le tapis | Le chat dort sur le tapis.
shelf | l'étagère | Les livres sont sur l'étagère.
box | la boîte ; le carton | Range les jouets dans la boîte.
trash can | la poubelle | Jette-le à la poubelle.
broom | le balai | Balaie le sol avec un balai.
yard | la cour | Les enfants jouent dans la cour.
gate | le portail | Ferme le portail, s'il te plaît.
mailbox | la boîte aux lettres | Regarde s'il y a des lettres dans la boîte aux lettres.
upstairs | en haut ; à l'étage | Ma chambre est à l'étage.
downstairs | en bas | Le petit-déjeuner est prêt en bas.
inside | dedans ; à l'intérieur | Restons à l'intérieur aujourd'hui.
outside | dehors | Il pleut dehors.
open | ouvrir | Tu peux ouvrir la boîte ?
close | fermer | Ferme la porte en partant.
turn on | allumer | Allume la télé.
turn off | éteindre | Éteins les lumières avant d'aller au lit.
live | habiter ; vivre | J'habite à Taichung.
sweep | balayer | Je balaie le sol tous les jours.
build | construire | Ils vont construire une nouvelle maison ici.
stove | la cuisinière | La casserole est sur la cuisinière.
hot water | l'eau chaude | Il n'y a pas d'eau chaude aujourd'hui.
paint | peindre ; la peinture | Nous allons peindre le mur en bleu.
ceiling | le plafond | Il y a une lampe au plafond.
corner | le coin | Mets la plante dans le coin.
garage | le garage | La voiture est dans le garage.
fence | la clôture | Nous avons une clôture blanche.
chimney | la cheminée | De la fumée sort de la cheminée.
front door | la porte d'entrée | Quelqu'un est à la porte d'entrée.
back door | la porte de derrière | Le chat est sorti par la porte de derrière.
bunk bed | le lit superposé | Mon frère dort en haut du lit superposé.
desk | le bureau | Je fais mes devoirs à mon bureau.
bookshelf | la bibliothèque ; l'étagère à livres | La bibliothèque est pleine de livres.
wardrobe | l'armoire | Mes vêtements sont dans l'armoire.
drawer | le tiroir | Les ciseaux sont dans le tiroir.
pool | la piscine | La maison a une piscine.
lawn | la pelouse | Papa tond la pelouse.
tree | l'arbre | Il y a un grand arbre dans la cour.
flower | la fleur | Ma mère fait pousser des fleurs dans le jardin.
brick | la brique | La maison est en briques.
building | l'immeuble | Mon immeuble a douze étages.
first floor | le rez-de-chaussée | La cuisine est au rez-de-chaussée.
address | l'adresse | Quelle est ton adresse ?
move | déménager | Nous allons déménager le mois prochain.
visit | rendre visite ; visiter | Viens voir ma nouvelle maison.
guest | l'invité | Nous avons un invité ce soir.
village | le village | Mes grands-parents habitent dans un petit village.
city | la ville | J'habite dans une grande ville.
farmhouse | la ferme | Ils habitent dans une vieille ferme.
cabin | le chalet ; la cabane | Nous avons dormi dans un chalet à la montagne.
hut | la cabane ; la hutte | Il y a une petite cabane au bord de la rivière.
castle | le château | Le roi vivait dans un château.
doghouse | la niche | Notre chien dort dans une niche.
light switch | l'interrupteur | L'interrupteur est près de la porte.
flowerpot | le pot de fleurs | J'ai mis un pot de fleurs sur le balcon.
`,
  phrases: `
Where do you live? | Où habites-tu ?
I live with my parents. | J'habite avec mes parents.
Make yourself at home. | Fais comme chez toi.
I live in an apartment. | J'habite dans un appartement.
My house is near the station. | Ma maison est près de la gare.
Come in, please. | Entre, je t'en prie.
Welcome to my home. | Bienvenue chez moi.
Please sit down. | Assieds-toi, je t'en prie.
This is my room. | Voici ma chambre.
The kitchen is over there. | La cuisine est par là.
Where is the bathroom? | Où sont les toilettes ?
The bathroom is upstairs. | La salle de bains est à l'étage.
My bedroom is small. | Ma chambre est petite.
The living room is big. | Le salon est grand.
We have two bedrooms. | Nous avons deux chambres.
I share a room with my brother. | Je partage une chambre avec mon frère.
Close the door, please. | Ferme la porte, s'il te plaît.
Open the window. | Ouvre la fenêtre.
Turn on the light. | Allume la lumière.
Turn off the light. | Éteins la lumière.
It's dark in here. | Il fait sombre ici.
It's hot in here. | Il fait chaud ici.
Can you turn on the air conditioner? | Tu peux allumer la clim ?
Lock the door when you go out. | Ferme la porte à clé quand tu sors.
I forgot my key. | J'ai oublié ma clé.
Who is at the door? | Qui est à la porte ?
Someone is knocking. | Quelqu'un frappe.
Please ring the bell. | Sonnez, s'il vous plaît.
My apartment is on the fifth floor. | Mon appartement est au cinquième étage.
Is there an elevator? | Il y a un ascenseur ?
Take the stairs. | Prends l'escalier.
I clean my room every Sunday. | Je nettoie ma chambre tous les dimanches.
Make your bed. | Fais ton lit.
Your room is messy. | Ta chambre est en désordre.
Clean up your room. | Range ta chambre.
Take out the trash. | Sors les poubelles.
Where do I put this? | Je mets ça où ?
Put it on the table. | Pose-le sur la table.
The house is quiet. | La maison est calme.
My neighbors are nice. | Mes voisins sont gentils.
The neighbors are noisy. | Les voisins sont bruyants.
I like my home. | J'aime ma maison.
There is a garden behind the house. | Il y a un jardin derrière la maison.
We have a small balcony. | Nous avons un petit balcon.
I hang my clothes on the balcony. | Je fais sécher mon linge sur le balcon.
The rent is expensive. | Le loyer est cher.
How much is the rent? | Le loyer est de combien ?
I pay rent every month. | Je paie le loyer tous les mois.
I want to move. | Je veux déménager.
We moved last year. | Nous avons déménagé l'année dernière.
I'm looking for a new apartment. | Je cherche un nouvel appartement.
Is the apartment big? | L'appartement est grand ?
It has a nice view. | Il a une belle vue.
It's close to my office. | C'est près de mon bureau.
It's far from the city. | C'est loin de la ville.
Is it furnished? | C'est meublé ?
Can I see the room? | Je peux voir la chambre ?
When can I move in? | Quand est-ce que je peux emménager ?
The water is not hot. | L'eau n'est pas chaude.
The toilet is broken. | Les toilettes sont cassées.
The light doesn't work. | La lumière ne marche pas.
The sink is leaking. | L'évier fuit.
Call the landlord. | Appelle le propriétaire.
I need to fix the door. | Je dois réparer la porte.
Watch your step. | Attention à la marche.
Take off your shoes at the door. | Enlève tes chaussures à l'entrée.
Here are some slippers. | Voici des chaussons.
Would you like something to drink? | Tu veux boire quelque chose ?
Dinner is in the kitchen. | Le dîner est dans la cuisine.
I'm going to bed. | Je vais me coucher.
Good night. Sleep well. | Bonne nuit. Dors bien.
I'm home! | Je suis rentré !
Welcome back! | Bon retour !
What time do you get home? | Tu rentres à quelle heure ?
I'll be home late tonight. | Je rentrerai tard ce soir.
Is anyone home? | Il y a quelqu'un ?
Nobody is home. | Il n'y a personne à la maison.
I stay home on weekends. | Je reste à la maison le week-end.
Our house has a red roof. | Notre maison a un toit rouge.
The house is old. | La maison est vieille.
The building is new. | L'immeuble est neuf.
My cat sleeps on the sofa. | Mon chat dort sur le canapé.
Don't run in the house. | Ne cours pas dans la maison.
Please be quiet. The baby is sleeping. | Silence, s'il te plaît. Le bébé dort.
Can I use your bathroom? | Je peux utiliser tes toilettes ?
The towels are in the closet. | Les serviettes sont dans le placard.
Shut the window. It's raining. | Ferme la fenêtre. Il pleut.
The floor is wet. | Le sol est mouillé.
I'm painting my room blue. | Je peins ma chambre en bleu.
I love my cozy room. | J'adore ma chambre douillette.
My house has a garage. | Ma maison a un garage.
The mail is in the mailbox. | Le courrier est dans la boîte aux lettres.
Where's the light switch? | Où est l'interrupteur ?
The heater is on. | Le chauffage est allumé.
My home is my favorite place. | Ma maison est mon endroit préféré.
See you at my place. | On se voit chez moi.
Do you live alone? | Tu vis seul ?
How many rooms does your house have? | Combien de pièces a ta maison ?
My room has a big window. | Ma chambre a une grande fenêtre.
We have a small yard. | Nous avons une petite cour.
`
});

// ---------- 中級 Intermediate ----------
addFrench("housing", {
  words: `
landlord | le propriétaire ; le bailleur | Je dois appeler le propriétaire pour la fuite.
lease | le bail | J'ai signé un bail d'un an.
utilities | les charges | Les charges sont comprises dans le loyer ?
furnished | meublé | Nous cherchons un appartement meublé.
move in | emménager | Quand est-ce que je peux emménager ?
deposit | la caution ; le dépôt de garantie | La caution est de deux mois de loyer.
tenant | le locataire | Le locataire paie le loyer le premier de chaque mois.
roommate | le colocataire | Mon colocataire vient du Japon.
studio | le studio | Je loue un studio près du campus.
balcony | le balcon | Nous faisons sécher notre linge sur le balcon.
elevator | l'ascenseur | L'ascenseur est en panne.
basement | le sous-sol ; la cave | Nous rangeons nos vélos au sous-sol.
storage | le rangement | Cet appartement n'a pas beaucoup de rangement.
appliance | l'appareil électroménager | La cuisine est équipée d'appareils électroménagers neufs.
air conditioner | le climatiseur | Le climatiseur fait un bruit bizarre.
heater | le radiateur ; le chauffage | Allume le chauffage. Il gèle.
plumber | le plombier | Nous avons appelé un plombier pour réparer le tuyau.
repair | réparer ; la réparation | Le propriétaire va réparer la porte la semaine prochaine.
maintenance | l'entretien | L'entretien de l'immeuble est compris dans les charges.
leak | la fuite | Il y a une fuite au plafond.
cockroach | le cafard | J'ai vu un cafard dans la cuisine !
garbage | les ordures ; les poubelles | Le camion poubelle passe à huit heures.
recycling | le recyclage ; le tri sélectif | Le tri sélectif est ramassé le mardi et le vendredi.
security guard | le gardien ; l'agent de sécurité | Le gardien garde nos colis.
neighborhood | le quartier | C'est un quartier sûr avec beaucoup de parcs.
convenient | pratique | L'emplacement est très pratique.
spacious | spacieux | Le salon est lumineux et spacieux.
cozy | douillet ; cosy | C'est un petit appartement, mais douillet.
decorate | décorer | Nous avons décoré la pièce avec des plantes.
move out | déménager ; quitter le logement | Je dois quitter le logement d'ici la fin du mois.
real estate agent | l'agent immobilier | L'agent immobilier nous a fait visiter trois appartements.
view | la vue | L'appartement a une belle vue sur la rivière.
pest | le nuisible | Il nous faut un traitement contre les nuisibles. Il y a des fourmis partout.
internet | Internet | Internet est compris dans le loyer ?
rental | la location | Nous cherchons une location près du métro.
utility bill | la facture d'eau et d'électricité | La facture d'eau et d'électricité a augmenté ce mois-ci.
electricity | l'électricité | L'électricité coûte cher en été.
gas | le gaz | Nous cuisinons au gaz.
plumbing | la plomberie | La plomberie de ce vieil immeuble est en mauvais état.
wiring | l'installation électrique | L'installation électrique doit être refaite.
mold | la moisissure | Il y a de la moisissure dans la salle de bains.
humid | humide | Taipei est très humide en été.
dehumidifier | le déshumidificateur | Nous faisons tourner le déshumidificateur tous les jours.
lock | la serrure | Change la serrure quand tu emménages.
doorbell | la sonnette | La sonnette est cassée.
intercom | l'interphone | Appuie sur l'interphone pour appeler le gardien.
parking space | la place de parking | L'appartement comprend une place de parking ?
management fee | les charges de copropriété | Les charges de copropriété sont de 2 000 dollars par mois.
renovation | la rénovation ; les travaux | Les travaux ont duré trois mois.
furniture | les meubles | Nous devons acheter des meubles.
layout | l'agencement ; la disposition | J'aime l'agencement de cet appartement.
square meters | les mètres carrés | L'appartement fait soixante mètres carrés.
facing south | exposé plein sud | Le salon est exposé plein sud.
sunlight | la lumière du soleil | La chambre reçoit beaucoup de lumière du soleil.
soundproof | insonorisé | Les murs ne sont pas insonorisés.
renew | renouveler | Je veux renouveler mon bail.
notice | le préavis | Donne un mois de préavis au propriétaire.
inspection | l'état des lieux ; l'inspection | Nous avons fait un état des lieux avant de signer.
share a flat | être en colocation | Je suis en colocation avec deux amis.
hallway | le couloir | Ne laisse pas de chaussures dans le couloir.
built-in | encastré ; intégré | La chambre a des placards intégrés.
tidy | rangé | Garde ta chambre rangée.
dust | la poussière | Il y a de la poussière partout.
vacuum | passer l'aspirateur | Je passe l'aspirateur sur le tapis chaque week-end.
laundry room | la buanderie | La buanderie est sur le toit.
wear and tear | l'usure normale | L'usure normale n'est pas la faute du locataire.
attic | le grenier | Nous gardons de vieux cartons au grenier.
porch | le porche | Ils étaient assis sous le porche le soir.
patio | le patio ; la terrasse | Nous avons dîné sur le patio.
terrace | la terrasse | L'appartement a une grande terrasse.
rooftop | le toit-terrasse | Il y a un jardin sur le toit-terrasse.
townhouse | la maison de ville | Ils ont acheté une maison de ville de trois étages.
duplex | le duplex | Nous habitons dans un duplex avec un escalier intérieur.
dormitory | la résidence universitaire ; le dortoir | Les étudiants de première année logent à la résidence universitaire.
commute | le trajet domicile-travail | Mon trajet ne dure que quinze minutes.
landlady | la propriétaire | La propriétaire habite en bas.
contract | le contrat | Lis le contrat avant de le signer.
tenancy | la location ; la durée du bail | La location se termine en juin.
move-in date | la date d'emménagement | Quelle est la date d'emménagement ?
rent increase | l'augmentation de loyer | Le propriétaire a annoncé une augmentation de loyer.
pet-friendly | qui accepte les animaux | Il nous faut un appartement qui accepte les animaux.
noise complaint | la plainte pour bruit | Les voisins ont porté plainte pour bruit.
housewarming | la pendaison de crémaillère | Nous faisons notre pendaison de crémaillère samedi.
spare room | la chambre d'amis ; la pièce libre | Tu peux dormir dans la chambre d'amis.
guest room | la chambre d'amis | La chambre d'amis a sa propre salle de bains.
closet space | l'espace de rangement | Il n'y a pas assez d'espace de rangement.
walk-in closet | le dressing | La chambre a un dressing.
skylight | le puits de lumière ; le vasistas | Le puits de lumière fait entrer beaucoup de soleil.
tiles | le carrelage | Le carrelage de la salle de bains est fissuré.
wallpaper | le papier peint | Nous avons choisi un papier peint bleu pour la chambre.
ceiling fan | le ventilateur de plafond | Le ventilateur de plafond garde la pièce au frais.
water pressure | la pression de l'eau | La pression de l'eau dans la douche est faible.
fuse box | le tableau électrique | Le tableau électrique est à côté de la porte d'entrée.
thermostat | le thermostat | Baisse le thermostat la nuit.
burglar | le cambrioleur | Un cambrioleur est entré dans la maison d'à côté.
alarm system | le système d'alarme | Nous avons installé un système d'alarme.
fire escape | l'escalier de secours | L'immeuble a un escalier de secours à l'arrière.
community | la communauté ; le voisinage | C'est un voisinage sympathique.
suburban | de banlieue | Ils ont déménagé dans un quartier de banlieue.
rural | rural | Les maisons rurales sont beaucoup moins chères.
home sweet home | on n'est jamais si bien que chez soi | On n'est jamais si bien que chez soi ! Mon lit m'a manqué.
make yourself at home | fais comme chez toi | Entre et fais comme chez toi.
on the house | offert par la maison | Les boissons sont offertes par la maison.
hit the roof | sortir de ses gonds | Papa est sorti de ses gonds en voyant le désordre.
hit the sack | aller au lit ; aller se pieuter | Je suis fatigué. Il est temps d'aller au lit.
under one roof | sous le même toit | Trois générations vivent sous le même toit.
get on like a house on fire | s'entendre comme larrons en foire | Mon colocataire et moi, on s'entend comme larrons en foire.
safe as houses | en lieu sûr ; parfaitement sûr | Ici, ton argent est parfaitement en sécurité.
through the roof | crever le plafond | Les loyers ont crevé le plafond.
a roof over your head | un toit sur la tête | Sois reconnaissant d'avoir un toit sur la tête.
open house | la journée portes ouvertes ; la visite libre | Il y a une visite libre dimanche.
bring the house down | faire un tabac | Sa chanson va faire un tabac.
moving day | le jour du déménagement | Le jour du déménagement est toujours stressant.
house-proud | fier de son intérieur | Ma tante est très fière de son intérieur.
homebody | le casanier | Le week-end, je suis casanier.
`,
  phrases: `
Is the apartment close to public transportation? | L'appartement est-il proche des transports en commun ?
The sink is leaking. Could you send someone to fix it? | L'évier fuit. Vous pourriez envoyer quelqu'un pour le réparer ?
Are pets allowed? | Les animaux sont-ils acceptés ?
I'm looking for a two-bedroom apartment near the MRT. | Je cherche un appartement avec deux chambres près du métro.
What's included in the rent? | Qu'est-ce qui est compris dans le loyer ?
Are utilities included? | Les charges sont comprises ?
How much is the deposit? | La caution est de combien ?
The deposit is two months' rent. | La caution est de deux mois de loyer.
How long is the lease? | Le bail est de quelle durée ?
It's a one-year lease. | C'est un bail d'un an.
Can I break the lease early? | Je peux résilier le bail plus tôt ?
Is there a management fee? | Il y a des charges de copropriété ?
Is there parking available? | Il y a une place de parking ?
How old is the building? | L'immeuble a quel âge ?
Which way does the apartment face? | L'appartement est exposé de quel côté ?
Does it get a lot of natural light? | Il est lumineux ?
The apartment gets very humid in spring. | L'appartement devient très humide au printemps.
We need a dehumidifier. | Il nous faut un déshumidificateur.
There's mold on the bathroom ceiling. | Il y a de la moisissure au plafond de la salle de bains.
The walls are paper-thin. | Les murs sont fins comme du papier.
I can hear my neighbors talking. | J'entends mes voisins parler.
The upstairs neighbors are always stomping around. | Les voisins du dessus marchent toujours lourdement.
I've complained to the building manager. | Je me suis plaint au gestionnaire de l'immeuble.
The landlord hasn't fixed the leak yet. | Le propriétaire n'a pas encore réparé la fuite.
I've been waiting a week for a repair. | J'attends une réparation depuis une semaine.
Who's responsible for repairs? | Qui est responsable des réparations ?
The water heater broke down again. | Le chauffe-eau est encore tombé en panne.
We had a power outage last night. | Nous avons eu une coupure de courant hier soir.
The pipes are clogged. | Les tuyaux sont bouchés.
We need to call a plumber. | Il faut appeler un plombier.
I'm thinking of renovating the kitchen. | Je pense rénover la cuisine.
Renovations always take longer than expected. | Les travaux prennent toujours plus de temps que prévu.
We're repainting the living room this weekend. | Nous repeignons le salon ce week-end.
We're moving out at the end of the month. | Nous déménageons à la fin du mois.
Have you hired a moving company? | Tu as engagé une entreprise de déménagement ?
Packing is the worst part of moving. | Faire les cartons, c'est le pire dans un déménagement.
Label the boxes by room. | Étiquette les cartons par pièce.
I need to change my address. | Je dois changer mon adresse.
I'm saving up for a down payment. | J'économise pour un apport.
Housing prices here are insane. | Les prix de l'immobilier ici sont délirants.
Buying a home is out of reach for many young people. | Acheter un logement est hors de portée pour beaucoup de jeunes.
Renting gives you more flexibility. | Louer donne plus de flexibilité.
We're thinking of buying instead of renting. | Nous pensons acheter au lieu de louer.
The mortgage takes up half my salary. | Le prêt immobilier me prend la moitié de mon salaire.
We split the rent three ways. | Nous partageons le loyer en trois.
I'm looking for a roommate. | Je cherche un colocataire.
We take turns cleaning the bathroom. | Nous nettoyons la salle de bains à tour de rôle.
Can we set some house rules? | On peut fixer quelques règles pour la maison ?
Please keep the noise down after ten. | Merci de faire moins de bruit après dix heures.
Could you please not leave dishes in the sink? | Tu pourrais ne pas laisser la vaisselle dans l'évier, s'il te plaît ?
The commute from here is only twenty minutes. | D'ici, le trajet ne prend que vingt minutes.
It's in a quiet residential area. | C'est dans un quartier résidentiel calme.
The neighborhood has everything you need. | Le quartier a tout ce qu'il faut.
There's a convenience store downstairs. | Il y a une supérette en bas.
It's within walking distance of the park. | C'est à quelques pas du parc.
The area is a bit run-down. | Le quartier est un peu délabré.
The neighborhood is up and coming. | C'est un quartier en plein essor.
Is the area safe at night? | Le quartier est-il sûr la nuit ?
The building has 24-hour security. | L'immeuble a une sécurité 24 heures sur 24.
Packages are left at the front desk. | Les colis sont laissés à l'accueil.
Garbage collection is at eight p.m. | Le ramassage des ordures est à vingt heures.
Don't forget to separate the recycling. | N'oublie pas de trier les déchets.
The elevator is out of order. | L'ascenseur est en panne.
The building is undergoing maintenance. | L'immeuble est en travaux d'entretien.
I'd like a place with a bit more space. | J'aimerais un logement un peu plus grand.
A studio is enough for me. | Un studio me suffit.
The layout is a bit awkward. | L'agencement est un peu bizarre.
The kitchen is too small to cook properly. | La cuisine est trop petite pour bien cuisiner.
I love the open-plan living area. | J'adore la pièce à vivre ouverte.
We converted the spare room into an office. | Nous avons transformé la chambre d'amis en bureau.
There isn't enough storage space. | Il n'y a pas assez de rangement.
We need to declutter before we move. | Nous devons faire du tri avant de déménager.
Let's rearrange the furniture. | Réorganisons les meubles.
The sofa won't fit through the door. | Le canapé ne passera pas par la porte.
Measure the space before you buy furniture. | Mesure l'espace avant d'acheter des meubles.
I'm going to put up some shelves. | Je vais installer des étagères.
Can I hang pictures on the walls? | Je peux accrocher des tableaux aux murs ?
The landlord said no nails in the walls. | Le propriétaire a dit pas de clous dans les murs.
I'm house-sitting for a friend. | Je garde la maison d'un ami.
Could you water my plants while I'm away? | Tu pourrais arroser mes plantes pendant mon absence ?
I'll leave a spare key with my neighbor. | Je laisserai un double des clés à mon voisin.
I locked myself out. | Je me suis enfermé dehors.
We need to call a locksmith. | Il faut appeler un serrurier.
The smoke alarm keeps beeping. | Le détecteur de fumée n'arrête pas de biper.
I think the battery is low. | Je crois que la pile est faible.
Our electricity bill was really high this month. | Notre facture d'électricité était très élevée ce mois-ci.
Let's keep the air conditioning at 26 degrees. | Laissons la clim à 26 degrés.
The house is freezing in winter. | La maison est glaciale en hiver.
There's no insulation. | Il n'y a pas d'isolation.
I'm having a housewarming party on Saturday. | Je pends la crémaillère samedi.
Feel free to drop by anytime. | Passe quand tu veux.
Sorry about the mess. | Désolé pour le désordre.
I just moved in, so it's still a bit empty. | Je viens d'emménager, alors c'est encore un peu vide.
It already feels like home. | Je m'y sens déjà chez moi.
I grew up in this house. | J'ai grandi dans cette maison.
My parents still live in my hometown. | Mes parents habitent toujours dans ma ville natale.
I'd love to live by the sea one day. | J'aimerais vivre au bord de la mer un jour.
There's no place like home. | On n'est jamais si bien que chez soi.
Could I see the apartment again before I decide? | Je pourrais revoir l'appartement avant de me décider ?
The previous tenant left a lot of furniture behind. | L'ancien locataire a laissé beaucoup de meubles.
`
});

// ---------- 高級 Advanced ----------
addFrench("housing", {
  words: `
mortgage | le prêt immobilier | Nous avons contracté un prêt immobilier sur trente ans.
down payment | l'apport personnel | Économiser pour l'apport personnel prend des années.
renovate | rénover | Ils prévoient de rénover la vieille maison.
gentrification | la gentrification | La gentrification a fait grimper les loyers dans ce quartier.
affordable | abordable | Il manque de logements abordables.
zoning | le zonage | Les règles de zonage limitent la hauteur des immeubles.
property | le bien immobilier | Ils possèdent des biens immobiliers à Taipei et à Kaohsiung.
homeowner | le propriétaire | Les propriétaires doivent payer la taxe foncière chaque année.
appraisal | l'expertise ; l'évaluation | La banque a demandé une expertise de la maison.
listing | l'annonce immobilière | J'ai vu l'annonce en ligne ce matin.
floor plan | le plan | Le plan est ouvert et pratique.
interest rate | le taux d'intérêt | La hausse des taux d'intérêt rend les prêts immobiliers plus chers.
foreclosure | la saisie immobilière | La famille a perdu sa maison à cause d'une saisie.
eviction | l'expulsion | Les locataires risquent l'expulsion.
rent control | l'encadrement des loyers | Les économistes ne sont pas d'accord sur l'encadrement des loyers.
housing bubble | la bulle immobilière | Beaucoup craignent qu'une bulle immobilière se forme.
urban sprawl | l'étalement urbain | L'étalement urbain augmente la dépendance à la voiture.
social housing | le logement social | La ville prévoit de construire plus de logements sociaux.
homelessness | le sans-abrisme | Le sans-abrisme a fortement augmenté dans les grandes villes.
sublet | sous-louer | Je vais sous-louer ma chambre pour l'été.
amenities | les équipements ; les commodités | Les équipements de l'immeuble comprennent une salle de sport et une piscine.
ventilation | la ventilation ; l'aération | Une mauvaise aération peut causer de la moisissure.
insulation | l'isolation | Une bonne isolation réduit les factures d'énergie.
feng shui | le feng shui | Ils ont réorganisé les meubles pour un meilleur feng shui.
curb appeal | l'attrait extérieur | Un coup de peinture peut améliorer l'attrait extérieur.
fixer-upper | la maison à rénover | Nous avons acheté une maison à rénover et fait les travaux nous-mêmes.
downsize | réduire la taille de son logement | Après le départ des enfants, ils ont décidé de prendre plus petit.
suburb | la banlieue | Beaucoup de familles partent en banlieue pour avoir plus d'espace.
high-rise | la tour | Ils habitent au trentième étage d'une tour.
condominium | la copropriété | La copropriété a des règles strictes sur les animaux.
co-living | le coliving | Les espaces de coliving plaisent aux jeunes actifs.
smart home | la maison connectée | Le système de notre maison connectée gère les lumières et les serrures.
title deed | le titre de propriété | Garde le titre de propriété en lieu sûr.
real estate | l'immobilier | L'immobilier est un placement populaire à Taïwan.
speculation | la spéculation | La spéculation fait monter les prix de l'immobilier.
vacancy rate | le taux de vacance | Le taux de vacance des immeubles neufs est élevé.
housing affordability | l'accessibilité au logement | L'accessibilité au logement est un grand enjeu électoral.
price-to-income ratio | le ratio prix-revenu | Le ratio prix-revenu de Taipei est parmi les plus élevés du monde.
home equity | la valeur nette du logement | Ils ont emprunté sur la valeur nette de leur logement.
refinance | renégocier son prêt | Nous avons renégocié notre prêt pour obtenir un meilleur taux.
collateral | la garantie | La maison sert de garantie pour le prêt.
closing costs | les frais de notaire | N'oublie pas de prévoir les frais de notaire.
escrow | le séquestre | Le dépôt est placé sous séquestre.
property tax | la taxe foncière | La taxe foncière augmente avec la valeur estimée.
urban renewal | la rénovation urbaine | Le projet de rénovation urbaine remplacera les vieux immeubles.
redevelopment | le réaménagement | Le réaménagement de l'ancien marché commence l'an prochain.
seismic retrofit | le renforcement parasismique | Les vieux immeubles ont besoin d'un renforcement parasismique.
building code | les normes de construction | Les normes de construction exigent des sorties de secours.
density | la densité | Les logements à forte densité économisent du terrain.
mixed-use | à usage mixte | Le projet à usage mixte comprend des commerces et des appartements.
green building | le bâtiment écologique | Le bureau est un bâtiment écologique certifié.
energy-efficient | économe en énergie | Des fenêtres économes en énergie réduisent les frais de chauffage.
solar panels | les panneaux solaires | Nous avons installé des panneaux solaires sur le toit.
homeowners association | le syndic ; le conseil de copropriété | Le conseil de copropriété a approuvé les réparations.
communal | commun ; partagé | L'immeuble a un jardin commun.
bylaws | le règlement de copropriété | Le règlement de copropriété interdit les locations courte durée.
short-term rental | la location courte durée | Les locations courte durée sont illégales dans beaucoup de villes.
displacement | le déplacement des habitants | La gentrification entraîne souvent le déplacement des habitants.
squatter | le squatteur | Des squatteurs se sont installés dans l'immeuble vide.
rent burden | le poids du loyer | Les jeunes locataires supportent un lourd poids du loyer.
homeownership | l'accession à la propriété | L'accession à la propriété recule chez les jeunes.
tiny house | la tiny house ; la mini-maison | Ils ont construit une mini-maison à la montagne.
eminent domain | l'expropriation | La ville a eu recours à l'expropriation pour construire la route.
appreciate | prendre de la valeur | L'immobilier dans ce quartier va prendre de la valeur.
depreciate | perdre de la valeur | Les voitures perdent de la valeur, mais le terrain rarement.
aging building | le bâtiment vieillissant | Beaucoup de bâtiments vieillissants n'ont pas d'ascenseur.
freehold | la pleine propriété | Ils sont en pleine propriété de l'immeuble.
leasehold | le bail emphytéotique | L'appartement est en bail emphytéotique, avec 90 ans restants.
gated community | la résidence fermée | Ils habitent dans une résidence fermée avec des gardiens.
slum | le bidonville | Des millions de personnes vivent dans des bidonvilles.
informal settlement | l'habitat informel | L'habitat informel manque souvent d'eau potable.
overcrowding | le surpeuplement | Le surpeuplement est courant dans les locations bon marché.
public housing | le logement public | La ville prévoit de construire plus de logements publics.
rental yield | le rendement locatif | Le rendement locatif est très faible ici.
buy-to-let | l'investissement locatif | Les investisseurs locatifs ont fait grimper les prix.
first-time buyer | le primo-accédant | Les primo-accédants peuvent obtenir un taux plus bas.
bidding war | la surenchère | La maison a déclenché une surenchère.
asking price | le prix demandé | Ils ont payé plus que le prix demandé.
valuation | l'estimation | L'estimation de la banque était plus basse que prévu.
pre-sale | la vente sur plan | Les appartements en vente sur plan sont vendus avant d'être construits.
developer | le promoteur | Le promoteur a fait faillite en plein chantier.
contractor | l'entrepreneur | L'entrepreneur a terminé les travaux à temps.
structural | structurel | L'inspection a révélé des dégâts structurels.
load-bearing wall | le mur porteur | On ne peut pas abattre un mur porteur.
dampness | l'humidité | L'humidité a abîmé les murs.
subsidence | l'affaissement du sol | La maison se fissure à cause de l'affaissement du sol.
termite | le termite | Les termites ont rongé la charpente en bois.
asbestos | l'amiante | Les vieux bâtiments peuvent contenir de l'amiante.
retrofit | la rénovation ; la mise aux normes | L'immeuble a besoin d'une rénovation énergétique.
passive house | la maison passive | Une maison passive a très peu besoin de chauffage.
heritage building | le bâtiment classé | Le bâtiment classé ne peut pas être démoli.
preservation | la préservation | Des associations de préservation se sont battues pour sauver la vieille rue.
urban planning | l'urbanisme | Un bon urbanisme rend les villes agréables à vivre.
infill | la densification ; le comblement des dents creuses | La densification utilise les terrains vides en ville.
walkability | la marchabilité | La marchabilité du quartier attire les jeunes familles.
commuter belt | la grande couronne ; la zone périurbaine | Les prix augmentent dans la zone périurbaine.
housing shortage | la pénurie de logements | La pénurie de logements fait monter les loyers.
empty nest | le nid vide | Ils ont pris plus petit quand leur nid s'est vidé.
multigenerational | multigénérationnel | Les foyers multigénérationnels sont courants ici.
aging in place | le maintien à domicile | Le maintien à domicile exige des logements accessibles.
put your house in order | balayer devant sa porte | Balaie devant ta porte avant de juger les autres.
skeletons in the closet | des cadavres dans le placard | Chaque famille a des cadavres dans le placard.
the elephant in the room | le sujet qui fâche ; l'éléphant dans la pièce | Le loyer, c'est le sujet qui fâche.
a house of cards | un château de cartes | Leur entreprise est un château de cartes.
get your foot in the door | mettre un pied dans la porte | Un stage aide à mettre un pied dans la porte.
climb the property ladder | gravir l'échelle immobilière | Les jeunes ont du mal à gravir l'échelle immobilière.
come home to roost | se retourner contre soi | Les mensonges finissent toujours par se retourner contre soi.
eat someone out of house and home | manger comme quatre ; ruiner quelqu'un en nourriture | Les ados peuvent te ruiner en nourriture.
paper over the cracks | cacher la poussière sous le tapis | Un coup de peinture ne fera que cacher la poussière sous le tapis.
drive me up the wall | me rendre fou | Les voisins bruyants me rendent fou.
behind closed doors | à huis clos | L'accord a été conclu à huis clos.
safe haven | le havre de paix ; le refuge | La maison devrait être un havre de paix.
a man's home is his castle | charbonnier est maître chez soi | Charbonnier est maître chez soi, alors frappe d'abord.
priced out | exclu par les prix | Beaucoup de familles sont exclues de la ville par les prix.
raise the roof | faire trembler les murs | Faisons trembler les murs pour le groupe !
`,
  phrases: `
Property prices have skyrocketed in recent years. | Les prix de l'immobilier ont flambé ces dernières années.
We're weighing the pros and cons of renting versus buying. | Nous pesons le pour et le contre entre louer et acheter.
Location is everything when it comes to real estate. | En immobilier, l'emplacement, c'est tout.
Soaring property prices have priced many young people out of the market. | La flambée des prix a exclu beaucoup de jeunes du marché.
Housing affordability has become a major political issue. | L'accessibilité au logement est devenue un enjeu politique majeur.
Speculators are driving up prices. | Les spéculateurs font grimper les prix.
Many apartments sit empty as investments. | Beaucoup d'appartements restent vides comme placements.
A vacancy tax could free up housing stock. | Une taxe sur les logements vacants pourrait libérer des logements.
Social housing is in desperately short supply. | Les logements sociaux manquent cruellement.
The waiting list for public housing is years long. | La liste d'attente pour un logement public dure des années.
Rent control protects tenants but may discourage new construction. | L'encadrement des loyers protège les locataires mais peut freiner la construction.
Tenants' rights are poorly enforced. | Les droits des locataires sont mal appliqués.
Landlords sometimes withhold deposits unfairly. | Les propriétaires retiennent parfois la caution de manière injuste.
Make sure everything is spelled out in the lease. | Assure-toi que tout est clairement écrit dans le bail.
Document any existing damage before you move in. | Note tous les dégâts existants avant d'emménager.
Read the fine print before you sign anything. | Lis les petits caractères avant de signer quoi que ce soit.
The contract has a clause about early termination. | Le contrat contient une clause de résiliation anticipée.
Gentrification is pushing out long-time residents. | La gentrification chasse les habitants de longue date.
Old neighborhoods are losing their character. | Les vieux quartiers perdent leur caractère.
Urban renewal projects often divide communities. | Les projets de rénovation urbaine divisent souvent les habitants.
Many older buildings aren't up to earthquake standards. | Beaucoup de vieux bâtiments ne sont pas aux normes parasismiques.
The building needs a seismic retrofit. | L'immeuble a besoin d'un renforcement parasismique.
Residents can't agree on whether to rebuild. | Les habitants n'arrivent pas à se mettre d'accord sur la reconstruction.
The homeowners' association meets once a month. | Le conseil de copropriété se réunit une fois par mois.
The management committee is notoriously slow to act. | Le comité de gestion est connu pour sa lenteur.
Our maintenance fees went up again. | Nos charges ont encore augmenté.
We're weighing the pros and cons of buying. | Nous pesons le pour et le contre d'un achat.
Property is often seen as a safe investment. | L'immobilier est souvent vu comme un placement sûr.
Interest rate hikes have cooled the market. | Les hausses de taux ont refroidi le marché.
Prices may correct sharply if the bubble bursts. | Les prix pourraient chuter fortement si la bulle éclate.
We locked in a fixed-rate mortgage. | Nous avons bloqué un prêt à taux fixe.
We're refinancing to lower our monthly payments. | Nous renégocions notre prêt pour baisser nos mensualités.
It'll take thirty years to pay off the mortgage. | Il faudra trente ans pour rembourser le prêt.
Owning a home comes with hidden costs. | Être propriétaire entraîne des coûts cachés.
Maintenance can eat into your savings. | L'entretien peut grignoter tes économies.
I'd rather rent and invest the difference. | Je préfère louer et placer la différence.
Co-living spaces appeal to young professionals. | Les espaces de coliving plaisent aux jeunes actifs.
Shared housing helps cut costs, but privacy suffers. | La colocation réduit les coûts, mais l'intimité en souffre.
Remote work has changed what people want from a home. | Le télétravail a changé ce qu'on attend d'un logement.
More people are moving out of the city center. | De plus en plus de gens quittent le centre-ville.
Suburban sprawl increases car dependency. | L'étalement des banlieues augmente la dépendance à la voiture.
Dense, walkable neighborhoods are more sustainable. | Les quartiers denses et piétonniers sont plus durables.
Mixed-use developments combine housing with shops and offices. | Les projets à usage mixte associent logements, commerces et bureaux.
Green building standards are becoming mandatory. | Les normes de construction écologique deviennent obligatoires.
Solar panels can significantly cut energy bills. | Les panneaux solaires peuvent réduire nettement les factures d'énergie.
Good insulation pays for itself over time. | Une bonne isolation finit par se rentabiliser.
Passive design reduces the need for air conditioning. | La conception passive réduit le besoin de climatisation.
Smart home devices raise privacy concerns. | Les objets connectés de la maison soulèvent des questions de vie privée.
The design maximizes natural light and ventilation. | La conception maximise la lumière naturelle et l'aération.
The floor plan makes efficient use of space. | Le plan utilise l'espace de façon efficace.
The previous owners did a botched renovation. | Les anciens propriétaires ont bâclé la rénovation.
The inspection revealed serious structural problems. | L'inspection a révélé de graves problèmes structurels.
There's a water leak somewhere behind the wall. | Il y a une fuite d'eau quelque part derrière le mur.
Damp is slowly damaging the foundations. | L'humidité abîme lentement les fondations.
The contractor went way over budget. | L'entrepreneur a largement dépassé le budget.
Always get several quotes before hiring a contractor. | Demande toujours plusieurs devis avant d'engager un entrepreneur.
We had a dispute with the developer over defects. | Nous avons eu un litige avec le promoteur à cause de malfaçons.
Pre-sale apartments carry certain risks. | Les appartements vendus sur plan comportent certains risques.
The handover was delayed by six months. | La livraison a été retardée de six mois.
We're downsizing now that the kids have moved out. | Les enfants sont partis, alors nous prenons plus petit.
Many elderly people want to age in place. | Beaucoup de personnes âgées veulent rester chez elles.
The house needs to be made more accessible. | La maison doit être rendue plus accessible.
Multigenerational living is common here. | Ici, il est courant que plusieurs générations vivent ensemble.
Living with in-laws requires a lot of compromise. | Vivre avec sa belle-famille demande beaucoup de compromis.
Neighbors used to know each other much better. | Avant, les voisins se connaissaient beaucoup mieux.
High-rise living can feel isolating. | Vivre dans une tour peut donner un sentiment d'isolement.
Community spaces help residents connect. | Les espaces communs aident les habitants à se rencontrer.
Noise disputes between neighbors can turn ugly. | Les conflits de bruit entre voisins peuvent mal tourner.
I try to keep on good terms with my neighbors. | J'essaie de rester en bons termes avec mes voisins.
The view alone is worth the extra rent. | La vue à elle seule vaut le loyer en plus.
It's a stone's throw from the river. | C'est à deux pas de la rivière.
It's conveniently located but noisy. | C'est bien situé, mais bruyant.
Location matters more than square footage. | L'emplacement compte plus que la surface.
This area is prone to flooding. | Ce quartier est sujet aux inondations.
Rising sea levels threaten coastal housing. | La montée du niveau de la mer menace les logements côtiers.
Insurance premiums have skyrocketed in high-risk areas. | Les primes d'assurance ont flambé dans les zones à risque.
The rental market is extremely tight right now. | Le marché locatif est extrêmement tendu en ce moment.
Short-term rentals reduce the supply for locals. | Les locations courte durée réduisent l'offre pour les habitants.
The city is cracking down on illegal rooftop additions. | La ville sévit contre les constructions illégales sur les toits.
Subdivided units are often unsafe. | Les logements subdivisés sont souvent dangereux.
Homelessness is a visible symptom of the housing crisis. | Le sans-abrisme est un symptôme visible de la crise du logement.
A home is more than four walls and a roof. | Un foyer, c'est plus que quatre murs et un toit.
Home is where you feel you belong. | Chez soi, c'est là où l'on se sent à sa place.
We put a lot of thought into the interior design. | Nous avons beaucoup réfléchi à la décoration intérieure.
Minimalist interiors are easier to keep tidy. | Les intérieurs minimalistes sont plus faciles à garder rangés.
I'd like the place to feel warm rather than showy. | Je voudrais que l'endroit soit chaleureux plutôt que tape-à-l'œil.
Every piece of furniture here has a story. | Chaque meuble ici a une histoire.
We've made a lot of compromises on space. | Nous avons fait beaucoup de compromis sur l'espace.
I've grown attached to this neighborhood. | Je me suis attaché à ce quartier.
Moving is one of life's most stressful events. | Déménager est l'un des événements les plus stressants de la vie.
It took months to feel settled. | Il m'a fallu des mois pour me sentir installé.
We're in the process of selling our flat. | Nous sommes en train de vendre notre appartement.
The agent suggested staging the apartment before viewings. | L'agent a conseillé de mettre en valeur l'appartement avant les visites.
We had several offers within the first week. | Nous avons reçu plusieurs offres dès la première semaine.
The buyer pulled out at the last minute. | L'acheteur s'est retiré à la dernière minute.
The sale fell through because of financing issues. | La vente a échoué à cause de problèmes de financement.
Closing costs added up to more than we expected. | Les frais de notaire ont été plus élevés que prévu.
Property taxes vary significantly by district. | La taxe foncière varie beaucoup selon le quartier.
The old house has a charm that new builds can't match. | La vieille maison a un charme que le neuf ne peut égaler.
Zoning laws restrict what can be built where. | Les règles de zonage limitent ce qu'on peut construire et où.
`
});
