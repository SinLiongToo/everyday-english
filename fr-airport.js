// 法文對照（Français）：機場
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
addFrench("airport", {
  words: `
airport | l'aéroport | Nous sommes arrivés tôt à l'aéroport.
airplane | l'avion | L'avion est très grand.
flight | le vol | Mon vol est à neuf heures.
passport | le passeport | Votre passeport, s'il vous plaît.
ticket | le billet d'avion | J'ai acheté mon billet en ligne.
boarding pass | la carte d'embarquement | Voici votre carte d'embarquement.
gate | la porte d'embarquement | Allez à la porte 5.
seat | le siège ; la place | Ma place est la 23A.
window | le hublot ; la fenêtre | Je veux une place côté hublot.
aisle | le couloir ; l'allée | Je peux m'asseoir côté couloir ?
bag | le sac | C'est votre sac ?
suitcase | la valise | Ma valise est bleue.
luggage | les bagages | J'ai deux bagages.
trolley | le chariot à bagages | Mets tes sacs sur le chariot.
pilot | le pilote ; le commandant de bord | Le commandant de bord nous a salués.
flight attendant | l'hôtesse de l'air ; le steward | L'hôtesse de l'air m'a apporté de l'eau.
passenger | le passager | Il y a 300 passagers dans cet avion.
take off | décoller | L'avion va bientôt décoller.
land | atterrir | Nous atterrissons à Tokyo à midi.
fly | prendre l'avion | Nous prenons l'avion pour Bangkok demain.
sky | le ciel | Le ciel est dégagé aujourd'hui.
cloud | le nuage | Nous volons au-dessus des nuages.
wing | l'aile | Je vois l'aile depuis ma place.
seat belt | la ceinture de sécurité | Attachez votre ceinture de sécurité.
meal | le repas | Le repas, c'est poulet ou poisson.
water | l'eau | Je peux avoir de l'eau, s'il vous plaît ?
blanket | la couverture | Je peux avoir une couverture ? J'ai froid.
toilet | les toilettes | Où sont les toilettes ?
line | la file d'attente | Faites la queue, s'il vous plaît.
wait | attendre | Nous attendons à la porte d'embarquement.
early | en avance ; tôt | Venez deux heures en avance, s'il vous plaît.
late | en retard | Notre vol est en retard.
time | l'heure | L'embarquement est à quelle heure ?
sign | le panneau | Suivez les panneaux jusqu'à la porte 10.
map | le plan | Regarde le plan de l'aéroport.
money | l'argent | Je dois changer de l'argent.
shop | la boutique | Il y a beaucoup de boutiques dans l'aéroport.
restaurant | le restaurant | Mangeons au restaurant de l'aéroport.
coffee | le café | Je vais prendre un café avant l'embarquement.
bathroom | les toilettes | Les toilettes sont à côté de la porte 3.
elevator | l'ascenseur | Prends l'ascenseur jusqu'au troisième étage.
escalator | l'escalator | Prends l'escalator pour descendre.
bus | le bus | Prends le bus de l'aéroport pour aller en ville.
taxi | le taxi | Prenons un taxi à l'aéroport.
train | le train | Le train va à l'aéroport.
country | le pays | De quel pays venez-vous ?
trip | le voyage | Bon voyage !
holiday | les vacances | Nous partons en vacances.
hello | bonjour | Bonjour ! Bienvenue à bord.
goodbye | au revoir | On se dit au revoir à la porte.
hug | le câlin ; serrer dans ses bras | Fais-moi un câlin avant de partir.
welcome | bienvenue | Bienvenue à Taïwan !
heavy | lourd | Mon sac est trop lourd.
light | léger | Voyage léger.
big | grand ; gros | Ce sac est trop gros pour la cabine.
small | petit | Un petit sac, ça va.
phone | le téléphone | Éteignez votre téléphone, s'il vous plaît.
headphones | le casque ; les écouteurs | Mets ton casque.
movie | le film | J'ai regardé deux films dans l'avion.
sleep | dormir | Je dors toujours dans l'avion.
window shade | le volet du hublot | Ouvrez le volet du hublot, s'il vous plaît.
tray table | la tablette | Relevez votre tablette, s'il vous plaît.
lost | perdu | J'ai perdu mon passeport !
help | aider ; l'aide | Vous pouvez m'aider ?
police | la police | Demande à la police de l'aéroport.
tourist | le touriste | Beaucoup de touristes viennent en été.
visit | rendre visite à | Je rends visite à ma tante au Canada chaque année.
home | à la maison ; chez soi | Je rentre chez moi en avion aujourd'hui.
camera | l'appareil photo | J'ai acheté un nouvel appareil photo pour mon voyage.
pillow | l'oreiller | Je peux avoir un oreiller, s'il vous plaît ?
snack | l'en-cas | On nous a donné un en-cas dans l'avion.
juice | le jus | Un jus d'orange, s'il vous plaît.
tea | le thé | Vous voulez du thé ?
drink | la boisson | Je peux avoir une boisson ?
chair | la chaise ; le siège | Il y a un siège libre là-bas.
trash can | la poubelle | Mets-le à la poubelle.
toy | le jouet | L'enfant a un avion en jouet.
bag tag | l'étiquette à bagage | Écris ton nom sur l'étiquette à bagage.
name | le nom | Comment vous appelez-vous ?
family | la famille | Je voyage avec ma famille.
friend | l'ami | Mon ami vient me chercher ici.
gift | le cadeau | J'ai acheté un cadeau pour ma mère.
chocolate | le chocolat | Achetons du chocolat à la boutique.
pen | le stylo | Vous avez un stylo ?
form | le formulaire | Remplissez ce formulaire, s'il vous plaît.
card | la carte | Je peux payer par carte ?
cash | les espèces ; le liquide | Je n'ai pas beaucoup d'espèces.
credit card | la carte de crédit | J'ai payé avec ma carte de crédit.
wallet | le portefeuille | Je ne trouve pas mon portefeuille !
key | la clé | N'oublie pas la clé de la maison.
jacket | la veste | Il fait froid dans l'avion. Prends une veste.
hat | le chapeau | J'ai oublié mon chapeau dans l'avion.
glasses | les lunettes | Où sont mes lunettes ?
charger | le chargeur | Mon chargeur est dans mon sac.
Wi-Fi | le Wi-Fi | Il y a du Wi-Fi gratuit ici ?
open | ouvert | La boutique est ouverte ?
close | fermer | La porte d'embarquement va bientôt fermer.
fast | rapide | Cette file avance vite.
slow | lent | La file du contrôle de sécurité est lente aujourd'hui.
tired | fatigué | Je suis fatigué après ce long vol.
`,
  phrases: `
Where is the check-in counter? | Où est le comptoir d'enregistrement ?
Window or aisle? | Hublot ou couloir ?
Have a nice flight! | Bon vol !
Here is my passport. | Voici mon passeport.
Can I see your ticket? | Je peux voir votre billet ?
How many bags do you have? | Vous avez combien de bagages ?
I have one bag. | J'ai un bagage.
I have one carry-on bag. | J'ai un bagage cabine.
Please put your bag on the scale. | Posez votre bagage sur la balance, s'il vous plaît.
Can I have a window seat? | Je peux avoir une place côté hublot ?
Can I have an aisle seat? | Je peux avoir une place côté couloir ?
Here is your boarding pass. | Voici votre carte d'embarquement.
Boarding starts at ten. | L'embarquement commence à dix heures.
Which gate is it? | C'est quelle porte ?
Go to Gate 12. | Allez à la porte 12.
Where is Gate 12? | Où est la porte 12 ?
My flight is at three. | Mon vol est à trois heures.
Is the flight on time? | Le vol est à l'heure ?
The flight is delayed. | Le vol est retardé.
The flight is cancelled. | Le vol est annulé.
Where is security? | Où est le contrôle de sécurité ?
Put your phone in the tray. | Mettez votre téléphone dans le bac.
Take off your jacket. | Enlevez votre veste.
Take your laptop out of the bag. | Sortez votre ordinateur portable du sac.
No liquids, please. | Pas de liquides, s'il vous plaît.
Please walk through. | Passez, s'il vous plaît.
Please wait here. | Attendez ici, s'il vous plaît.
Where is the restroom? | Où sont les toilettes ?
Where can I get some water? | Où est-ce que je peux avoir de l'eau ?
Where are the shops? | Où sont les boutiques ?
I want to buy a gift. | Je veux acheter un cadeau.
Is there free Wi-Fi? | Il y a du Wi-Fi gratuit ?
Where can I charge my phone? | Où est-ce que je peux recharger mon téléphone ?
We are boarding now. | Nous embarquons maintenant.
Please line up here. | Faites la queue ici, s'il vous plaît.
Have your boarding pass ready. | Préparez votre carte d'embarquement.
What's your seat number? | Quel est votre numéro de siège ?
My seat is 23A. | Ma place est la 23A.
Excuse me, this is my seat. | Excusez-moi, c'est ma place.
Can I put my bag here? | Je peux mettre mon sac ici ?
Please fasten your seat belt. | Attachez votre ceinture, s'il vous plaît.
Please turn off your phone. | Éteignez votre téléphone, s'il vous plaît.
Can I have a blanket? | Je peux avoir une couverture ?
Can I have some water? | Je peux avoir de l'eau ?
Chicken or fish? | Poulet ou poisson ?
Chicken, please. | Poulet, s'il vous plaît.
Coffee or tea? | Café ou thé ?
Can I go to the toilet now? | Je peux aller aux toilettes maintenant ?
How long is the flight? | Le vol dure combien de temps ?
It's a three-hour flight. | C'est un vol de trois heures.
What time do we land? | À quelle heure atterrit-on ?
We will land soon. | Nous allons bientôt atterrir.
Welcome to Taipei. | Bienvenue à Taipei.
Where is baggage claim? | Où est la récupération des bagages ?
I can't find my bag. | Je ne trouve pas mon bagage.
My bag is lost. | Mon bagage est perdu.
This is my bag. | C'est mon bagage.
Where is the exit? | Où est la sortie ?
Where can I get a taxi? | Où est-ce que je peux prendre un taxi ?
Where is the airport bus? | Où est le bus de l'aéroport ?
Is there a train to the city? | Il y a un train pour le centre-ville ?
Where can I change money? | Où est-ce que je peux changer de l'argent ?
What is the purpose of your visit? | Quel est le but de votre visite ?
I'm here on vacation. | Je suis en vacances.
I'm here on business. | Je suis en voyage d'affaires.
I'm visiting my family. | Je rends visite à ma famille.
How long will you stay? | Combien de temps allez-vous rester ?
I'll stay for one week. | Je reste une semaine.
Where will you stay? | Où allez-vous loger ?
I'm staying at a hotel. | Je loge à l'hôtel.
Do you have anything to declare? | Vous avez quelque chose à déclarer ?
No, nothing. | Non, rien.
Please open your bag. | Ouvrez votre sac, s'il vous plaît.
Please look at the camera. | Regardez la caméra, s'il vous plaît.
Put your finger here. | Posez votre doigt ici.
Enjoy your stay. | Bon séjour.
I'm meeting my friend at arrivals. | Je retrouve mon ami au hall des arrivées.
My friend is picking me up. | Mon ami vient me chercher.
I'm tired after the long flight. | Je suis fatigué après ce long vol.
I have jet lag. | J'ai le décalage horaire.
Have a good flight! | Bon vol !
Call me when you land. | Appelle-moi quand tu atterris.
Don't forget your passport. | N'oublie pas ton passeport.
Let's get to the airport early. | Allons à l'aéroport en avance.
We need to leave now. | Il faut partir maintenant.
Where is Terminal 2? | Où est le terminal 2 ?
Take the train to Terminal 2. | Prends la navette ferroviaire jusqu'au terminal 2.
Is this the line for check-in? | C'est la file pour l'enregistrement ?
Can I take this on the plane? | Je peux emporter ça dans l'avion ?
My bag is too heavy. | Mon bagage est trop lourd.
Is there a cart? | Il y a un chariot ?
I need a luggage cart. | J'ai besoin d'un chariot à bagages.
Where is the information desk? | Où est le comptoir d'information ?
I missed my flight. | J'ai raté mon vol.
What should I do? | Qu'est-ce que je dois faire ?
Is this the right gate? | C'est bien la bonne porte ?
The plane is big. | L'avion est grand.
Look at the planes! | Regarde les avions !
My ears hurt on the plane. | J'ai mal aux oreilles dans l'avion.
I need a pen to fill in this card. | J'ai besoin d'un stylo pour remplir cette carte.
`
});

// ---------- 中級 Intermediate ----------
addFrench("airport", {
  words: `
check-in counter | le comptoir d'enregistrement | Le comptoir d'enregistrement ouvre trois heures avant le vol.
check in | s'enregistrer | Vous pouvez vous enregistrer en ligne.
boarding time | l'heure d'embarquement | L'heure d'embarquement est 8 h 20.
departure | le départ | Les départs sont au troisième étage.
arrival | l'arrivée | Les arrivées sont au rez-de-chaussée.
terminal | le terminal | Notre vol part du terminal 2.
domestic | intérieur ; national | Les vols intérieurs partent de ce terminal.
international | international | Allez au hall des départs internationaux.
nonstop | direct ; sans escale | Il y a un vol direct pour Paris ?
connecting flight | le vol de correspondance | Mon vol de correspondance part dans une heure.
layover | l'escale | Nous avons une escale de quatre heures à Séoul.
transit | le transit | Suivez les panneaux « Transit ».
delay | le retard | Il y a deux heures de retard.
cancel | annuler | La compagnie a annulé notre vol.
on time | à l'heure | Le vol est à l'heure.
board | embarquer | Nous embarquerons dans dix minutes.
final call | le dernier appel | Ceci est le dernier appel pour le vol CI 100.
announcement | l'annonce | Écoute l'annonce.
carry-on | le bagage cabine | Vous pouvez emporter un bagage cabine.
checked baggage | le bagage en soute | Les bagages en soute doivent peser moins de 23 kilos.
baggage allowance | la franchise bagages | Quelle est la franchise bagages ?
overweight | en excédent de poids | Votre bagage est en excédent de poids.
excess baggage fee | les frais d'excédent de bagages | J'ai payé des frais d'excédent de bagages.
baggage claim | la récupération des bagages | Récupérez vos bagages à la récupération des bagages.
carousel | le tapis à bagages | Nos bagages sont sur le tapis 7.
security check | le contrôle de sécurité | Sors ton ordinateur au contrôle de sécurité.
metal detector | le portique de détection | Passez sous le portique de détection.
liquids | les liquides | Les liquides doivent faire moins de 100 ml.
immigration | le contrôle de l'immigration | La file au contrôle de l'immigration était longue.
customs | la douane | Vous avez quelque chose à déclarer à la douane ?
declare | déclarer | Je n'ai rien à déclarer.
duty-free | hors taxes | J'ai acheté du parfum à la boutique hors taxes.
currency exchange | le bureau de change | Le bureau de change est à côté de la sortie.
lost and found | les objets trouvés | Renseigne-toi aux objets trouvés.
information desk | le comptoir d'information | Demandez au comptoir d'information.
airline | la compagnie aérienne | Vous voyagez avec quelle compagnie aérienne ?
economy class | la classe économique | Je voyage toujours en classe économique.
business class | la classe affaires | En classe affaires, les sièges s'allongent complètement.
first class | la première classe | La première classe a des suites privées.
upgrade | le surclassement | J'ai eu un surclassement gratuit !
frequent flyer | le voyageur fréquent | Inscris-toi au programme de fidélité pour voyageurs fréquents.
mileage | les miles | J'ai utilisé mes miles pour un billet gratuit.
itinerary | l'itinéraire ; le récapitulatif de voyage | Imprimez votre récapitulatif de voyage, s'il vous plaît.
e-ticket | le billet électronique | Montrez votre billet électronique sur votre téléphone.
round-trip | l'aller-retour | Un aller-retour coûte moins cher.
one-way | l'aller simple | J'ai acheté un aller simple.
jet lag | le décalage horaire | J'ai un gros décalage horaire.
turbulence | les turbulences | Nous avons traversé des turbulences.
runway | la piste | L'avion est sur la piste.
cabin | la cabine | Il fait froid dans la cabine.
cabin crew | le personnel navigant ; l'équipage | Le personnel navigant était très aimable.
overhead bin | le coffre à bagages | Mets ton sac dans le coffre à bagages.
life jacket | le gilet de sauvetage | Votre gilet de sauvetage se trouve sous votre siège.
emergency exit | l'issue de secours | Les issues de secours sont à l'avant et à l'arrière.
oxygen mask | le masque à oxygène | Mettez d'abord votre propre masque à oxygène.
airsick | avoir le mal de l'air | J'ai le mal de l'air.
window seat | la place côté hublot | J'ai réservé une place côté hublot.
aisle seat | la place côté couloir | Je préfère une place côté couloir.
shuttle bus | la navette | Prenez la navette pour le terminal 1.
airport express | le train express de l'aéroport | Le train express de l'aéroport met 35 minutes.
pick up | aller chercher | Tu peux aller chercher mes parents à l'aéroport ?
see off | accompagner à l'aéroport | Nous sommes allés à l'aéroport accompagner notre ami.
souvenir | le souvenir | J'ai acheté des souvenirs pour mes collègues.
travel insurance | l'assurance voyage | Tu as pris une assurance voyage ?
visa | le visa | J'ai besoin d'un visa ?
arrival card | la carte de débarquement | Remplis la carte de débarquement dans l'avion.
check-in kiosk | la borne d'enregistrement | Utilisez la borne d'enregistrement pour imprimer votre carte d'embarquement.
bag drop | le dépôt bagages | Le dépôt bagages est au comptoir 12.
power bank | la batterie externe | Une batterie externe doit aller dans le bagage cabine.
scale | la balance | Pose ta valise sur la balance.
boarding gate | la porte d'embarquement | Rendez-vous à la porte d'embarquement C3.
gate change | le changement de porte | Il y a eu un changement de porte pour notre vol.
departure board | le tableau des départs | Regarde le tableau des départs pour ta porte.
arrival hall | le hall des arrivées | Je t'attendrai dans le hall des arrivées.
departure hall | le hall des départs | Le hall des départs est au troisième étage.
transfer desk | le comptoir des correspondances | Renseigne-toi sur ta correspondance au comptoir des correspondances.
boarding group | le groupe d'embarquement | Nous sommes dans le groupe d'embarquement 3.
middle seat | le siège du milieu | Personne ne veut le siège du milieu.
legroom | l'espace pour les jambes | Ce siège a plus d'espace pour les jambes.
recline | incliner | Je peux incliner mon siège ?
headrest | l'appui-tête | Règle l'appui-tête pour être à l'aise.
seatback screen | l'écran individuel | L'écran individuel ne marche pas.
in-flight meal | le repas à bord | Le repas à bord était étonnamment bon.
in-flight entertainment | le divertissement à bord | Le divertissement à bord propose beaucoup de films.
passport control | le contrôle des passeports | Il y avait une longue file au contrôle des passeports.
fingerprint | l'empreinte digitale | Posez votre doigt sur le lecteur d'empreintes digitales.
porter | le porteur | Un porteur nous a aidés avec nos bagages.
luggage cart | le chariot à bagages | Prends un chariot à bagages près de la sortie.
SIM card | la carte SIM | J'ai acheté une carte SIM à l'aéroport.
meeting point | le point de rencontre | Retrouvons-nous au point de rencontre des arrivées.
taxi rank | la station de taxis | La station de taxis est devant la porte 3.
car rental | la location de voitures | Les comptoirs de location de voitures sont au rez-de-chaussée.
airport hotel | l'hôtel d'aéroport | Nous avons dormi dans un hôtel d'aéroport avant notre vol matinal.
tax refund | la détaxe | Vous pouvez demander la détaxe avant le contrôle de sécurité.
prayer room | la salle de prière | La salle de prière est près de la porte 20.
nursing room | la salle d'allaitement | Il y a une salle d'allaitement à côté des toilettes.
smoking area | l'espace fumeurs | Il y a un espace fumeurs dans le terminal ?
charging station | la borne de recharge | Recharge ton téléphone à la borne de recharge.
lost luggage | le bagage perdu | Signale ton bagage perdu au comptoir de la compagnie.
rebook | replacer sur un autre vol | La compagnie nous a replacés sur le vol suivant.
fly by the seat of your pants | improviser ; y aller au feeling | N'improvise pas tout pour un long voyage.
up in the air | en suspens | Nos projets de voyage sont encore en suspens.
on cloud nine | aux anges ; sur un petit nuage | Elle était sur un petit nuage après le voyage.
travel light | voyager léger | Je voyage toujours léger.
time flies | le temps file | Le temps file quand on voyage.
touch base | prendre des nouvelles ; se tenir au courant | On se tient au courant quand tu atterris.
on autopilot | en pilote automatique | J'étais en pilote automatique après ce long vol.
in the same boat | dans le même bateau | Tous les passagers étaient dans le même bateau.
grounded | cloué au sol | Les avions ont été cloués au sol par le typhon.
fly the nest | quitter le nid | Notre fils va quitter le nid l'année prochaine.
off the beaten path | hors des sentiers battus | Nous aimons les endroits hors des sentiers battus.
`,
  phrases: `
I'd like to check in for my flight to Tokyo. | Je voudrais m'enregistrer pour mon vol à destination de Tokyo.
How many bags can I check? | Combien de bagages je peux enregistrer ?
My luggage didn't arrive. | Mes bagages ne sont pas arrivés.
Did you pack your bags yourself? | Avez-vous fait vos bagages vous-même ?
Are there any batteries in your checked luggage? | Y a-t-il des batteries dans vos bagages en soute ?
Power banks must go in your carry-on. | Les batteries externes doivent aller dans le bagage cabine.
Your bag is two kilos overweight. | Votre bagage a deux kilos d'excédent.
Is there a fee for excess baggage? | Il y a des frais pour l'excédent de bagages ?
I'll move some things to my carry-on. | Je vais mettre quelques affaires dans mon bagage cabine.
Can I check this bag all the way through to London? | Je peux enregistrer ce bagage directement jusqu'à Londres ?
You'll need to collect your bags and check them in again. | Vous devrez récupérer vos bagages et les enregistrer à nouveau.
I'd like to upgrade to business class. | Je voudrais être surclassé en classe affaires.
Is it possible to get an exit row seat? | Est-il possible d'avoir une place à la rangée des issues de secours ?
Could we sit together? | On pourrait être assis ensemble ?
I checked in online last night. | Je me suis enregistré en ligne hier soir.
The bag drop counter is over there. | Le comptoir de dépôt bagages est là-bas.
How early should I get to the airport? | Combien de temps à l'avance je dois arriver à l'aéroport ?
Arrive at least two hours before an international flight. | Arrivez au moins deux heures avant un vol international.
The security line is really long today. | La file au contrôle de sécurité est vraiment longue aujourd'hui.
Liquids must be in containers of 100 milliliters or less. | Les liquides doivent être dans des contenants de 100 millilitres maximum.
Please put your liquids in a clear plastic bag. | Mettez vos liquides dans un sac plastique transparent, s'il vous plaît.
Empty your pockets, please. | Videz vos poches, s'il vous plaît.
Your bag needs to go through again. | Votre sac doit repasser.
I'm afraid you can't take this through security. | Je crains que vous ne puissiez pas passer ceci au contrôle.
The gate has changed to B6. | La porte d'embarquement est maintenant la B6.
Final call for passengers on flight CI100. | Dernier appel pour les passagers du vol CI100.
We're now boarding passengers in rows 30 to 45. | Nous invitons maintenant les passagers des rangées 30 à 45 à embarquer.
Passengers with small children may board first. | Les passagers avec de jeunes enfants peuvent embarquer en priorité.
The flight has been delayed by two hours. | Le vol a deux heures de retard.
Due to bad weather, all flights are on hold. | En raison du mauvais temps, tous les vols sont suspendus.
Will I make my connecting flight? | Je vais avoir ma correspondance ?
I only have a 50-minute layover. | Je n'ai que 50 minutes d'escale.
Where's the transfer desk? | Où est le comptoir des correspondances ?
Do I need to go through immigration to transfer? | Je dois passer l'immigration pour ma correspondance ?
My connecting flight leaves from another terminal. | Mon vol de correspondance part d'un autre terminal.
Can you rebook me on the next flight? | Vous pouvez me mettre sur le prochain vol ?
Will the airline provide a hotel? | La compagnie va-t-elle fournir un hôtel ?
Here's a meal voucher for the delay. | Voici un bon repas pour le retard.
Could you help me put my bag in the overhead bin? | Vous pourriez m'aider à mettre mon sac dans le coffre à bagages ?
Would you mind switching seats with me? | Ça vous dérangerait d'échanger votre place avec moi ?
Could you put your seat up during the meal? | Pourriez-vous redresser votre siège pendant le repas ?
Can I recline my seat? | Je peux incliner mon siège ?
I'd like a vegetarian meal. | Je voudrais un repas végétarien.
I pre-ordered a special meal. | J'ai commandé un repas spécial à l'avance.
Could I have a glass of water, please? | Je pourrais avoir un verre d'eau, s'il vous plaît ?
We're experiencing some turbulence. | Nous traversons une zone de turbulences.
Please return to your seat and fasten your seat belt. | Veuillez regagner votre siège et attacher votre ceinture.
Could you fill in this arrival card? | Pourriez-vous remplir cette carte de débarquement ?
Do I need to fill in a customs form? | Je dois remplir une déclaration de douane ?
We'll be landing in about thirty minutes. | Nous atterrirons dans environ trente minutes.
Please remain seated until the seat belt sign is off. | Veuillez rester assis jusqu'à l'extinction du signal « Attachez vos ceintures ».
Is this the line for foreign passports? | C'est la file pour les passeports étrangers ?
How long are you planning to stay? | Combien de temps comptez-vous rester ?
Do you have a return ticket? | Vous avez un billet retour ?
Can you show me your hotel booking? | Vous pouvez me montrer votre réservation d'hôtel ?
I'm here for a conference. | Je viens pour une conférence.
I'm transiting through to Singapore. | Je suis en transit pour Singapour.
My bag didn't come out on the carousel. | Mon bagage n'est pas sorti sur le tapis.
I'd like to report a missing bag. | Je voudrais signaler un bagage manquant.
Here's my baggage tag. | Voici mon étiquette bagage.
My suitcase was damaged. | Ma valise a été abîmée.
Can you deliver the bag to my hotel? | Vous pouvez livrer le bagage à mon hôtel ?
Do I have to declare these items? | Je dois déclarer ces articles ?
Go through the green channel if you have nothing to declare. | Prenez le couloir vert si vous n'avez rien à déclarer.
Fresh fruit and meat are not allowed in. | Les fruits frais et la viande sont interdits à l'entrée.
Where can I buy a local SIM card? | Où est-ce que je peux acheter une carte SIM locale ?
Is the exchange rate better in the city? | Le taux de change est meilleur en ville ?
How do I get to the city center from here? | Comment aller au centre-ville d'ici ?
The airport express takes about 35 minutes. | Le train express de l'aéroport met environ 35 minutes.
I'll be waiting for you at arrivals. | Je t'attendrai aux arrivées.
I'll hold a sign with your name. | Je tiendrai une pancarte avec ton nom.
Let me help you with your luggage. | Laisse-moi t'aider avec tes bagages.
How was your flight? | Ton vol s'est bien passé ?
The flight was bumpy. | Le vol a été agité.
I didn't sleep at all on the plane. | Je n'ai pas du tout dormi dans l'avion.
The food on the plane was pretty good. | La nourriture dans l'avion était plutôt bonne.
I'll see you off at the airport. | Je t'accompagnerai à l'aéroport.
Can I claim a tax refund here? | Je peux demander la détaxe ici ?
Duty-free has some good deals. | Il y a de bonnes affaires en duty-free.
Is there a lounge I can use? | Il y a un salon que je peux utiliser ?
I have lounge access with my credit card. | Ma carte de crédit me donne accès au salon.
Where's the prayer room? | Où est la salle de prière ?
Is there a smoking area? | Il y a un espace fumeurs ?
I need to print my boarding pass. | Je dois imprimer ma carte d'embarquement.
The self-service kiosk isn't working. | La borne libre-service ne marche pas.
I'm traveling with a pet. | Je voyage avec un animal.
I'll need wheelchair assistance. | J'aurai besoin d'une assistance en fauteuil roulant.
Are there any seats with extra legroom? | Il y a des sièges avec plus d'espace pour les jambes ?
How many miles will I earn on this flight? | Combien de miles je vais gagner sur ce vol ?
I'd like to use my miles for an upgrade. | Je voudrais utiliser mes miles pour un surclassement.
My name is misspelled on the ticket. | Mon nom est mal orthographié sur le billet.
The airline overbooked the flight. | La compagnie a surréservé le vol.
I'd like to file a complaint. | Je voudrais déposer une réclamation.
I'm entitled to compensation for the delay. | J'ai droit à une indemnisation pour le retard.
Please keep your belongings with you at all times. | Veuillez garder vos effets personnels avec vous en permanence.
Unattended bags will be removed. | Les bagages laissés sans surveillance seront retirés.
Thank you for flying with us. | Merci d'avoir voyagé avec nous.
Is there a direct flight, or do I have to change planes? | Il y a un vol direct, ou je dois changer d'avion ?
What's the baggage allowance for this ticket? | Quelle est la franchise bagages pour ce billet ?
Could I get a blanket and a pillow? | Je pourrais avoir une couverture et un oreiller ?
`
});

// ---------- 高級 Advanced ----------
addFrench("airport", {
  words: `
aviation | l'aviation ; l'aéronautique | Elle travaille dans l'aéronautique depuis vingt ans.
air traffic control | le contrôle aérien | Le contrôle aérien a retardé notre décollage.
control tower | la tour de contrôle | La tour de contrôle guide chaque atterrissage.
hub | le hub ; la plateforme de correspondance | Taoyuan est un grand hub asiatique.
slot | le créneau | Les compagnies se disputent les créneaux d'atterrissage.
apron | l'aire de stationnement | Les avions stationnent sur l'aire de stationnement.
taxiway | la voie de circulation | L'avion avance sur la voie de circulation.
jet bridge | la passerelle d'embarquement | Nous avons embarqué par la passerelle.
ground crew | le personnel au sol | Le personnel au sol a chargé les bagages.
cargo hold | la soute | Les animaux voyagent en soute.
cockpit | le cockpit ; le poste de pilotage | Les visiteurs ne peuvent pas entrer dans le cockpit.
altitude | l'altitude | Nous volons à une altitude de 35 000 pieds.
cruising speed | la vitesse de croisière | La vitesse de croisière est d'environ 900 km/h.
headwind | le vent de face | Un fort vent de face nous a ralentis.
tailwind | le vent arrière | Le vent arrière nous a permis d'arriver en avance.
diversion | le déroutement | Le mauvais temps a provoqué un déroutement vers Osaka.
emergency landing | l'atterrissage d'urgence | L'avion a fait un atterrissage d'urgence.
evacuation slide | le toboggan d'évacuation | Les passagers sont sortis par le toboggan d'évacuation.
black box | la boîte noire | Les enquêteurs ont récupéré la boîte noire.
maintenance check | la visite de maintenance | Le retard était dû à une visite de maintenance.
de-icing | le dégivrage | Le dégivrage a ajouté trente minutes au départ.
overbooking | la surréservation | La surréservation a laissé dix passagers sans place.
bumped | refusé à l'embarquement | J'ai été refusé à l'embarquement et mis sur un vol plus tard.
compensation | l'indemnisation | Nous avons reçu une indemnisation pour le retard.
voucher | le bon ; le coupon | La compagnie nous a donné un bon repas.
standby | la liste d'attente | Je suis sur liste d'attente pour le prochain vol.
red-eye | le vol de nuit | J'ai pris le vol de nuit pour économiser une nuit d'hôtel.
codeshare | le partage de code | C'est un vol en partage de code avec Japan Airlines.
alliance | l'alliance | Les deux compagnies font partie de la même alliance.
loyalty program | le programme de fidélité | Le programme de fidélité donne accès au salon.
lounge | le salon | Nous nous sommes détendus au salon avant le vol.
priority boarding | l'embarquement prioritaire | Les familles avec enfants bénéficient de l'embarquement prioritaire.
fast track | la file prioritaire ; le coupe-file | Les passagers affaires utilisent la file prioritaire.
biometric | biométrique | Les portiques biométriques scannent votre visage.
e-gate | le sas automatique ; le PARAFE | Utilise le sas automatique si tu es inscrit.
facial recognition | la reconnaissance faciale | Ici, la reconnaissance faciale a remplacé les cartes d'embarquement.
pre-clearance | le prédédouanement | Le prédédouanement permet d'éviter la douane à l'arrivée.
contraband | la contrebande | La douane a saisi de la contrebande à l'aéroport.
quarantine | le contrôle sanitaire ; la quarantaine | Les fruits doivent passer le contrôle sanitaire.
sniffer dog | le chien renifleur | Un chien renifleur a inspecté nos sacs.
prohibited items | les articles interdits | Les briquets font partie des articles interdits.
tamper-evident | scellé ; à fermeture inviolable | Les liquides hors taxes sont remis dans des sacs scellés.
VAT refund | la détaxe ; le remboursement de la TVA | Demande ta détaxe avant l'enregistrement.
stopover | l'escale ; le stop-over | Nous avons fait une escale de deux jours à Dubaï.
open-jaw | le billet open-jaw | Un billet open-jaw permet de rentrer depuis une autre ville.
multi-city | multi-destinations | J'ai réservé un voyage multi-destinations à travers l'Europe.
fare class | la classe tarifaire | Ta classe tarifaire détermine combien de miles tu gagnes.
non-refundable | non remboursable | Les billets les moins chers ne sont pas remboursables.
fuel surcharge | la surcharge carburant | La surcharge carburant a encore augmenté.
carbon offset | la compensation carbone | Tu peux acheter une compensation carbone pour ton vol.
sustainable aviation fuel | le carburant d'aviation durable | Le carburant d'aviation durable réduit les émissions.
noise pollution | les nuisances sonores | Les riverains se plaignent des nuisances sonores près de l'aéroport.
curfew | le couvre-feu | L'aéroport a un couvre-feu nocturne.
capacity | la capacité | Le nouveau terminal doublera la capacité.
passenger traffic | le trafic passagers | Le trafic passagers s'est rétabli après la pandémie.
deregulation | la déréglementation | La déréglementation a fait baisser le prix des billets.
open skies | le ciel ouvert | Un accord de ciel ouvert autorise plus de lignes.
jet engine | le réacteur | Le réacteur est très bruyant.
wingspan | l'envergure | L'A380 a une envergure de 80 mètres.
fuselage | le fuselage | Des fissures ont été trouvées dans le fuselage.
landing gear | le train d'atterrissage | Le train d'atterrissage est sorti sans problème.
cabin pressure | la pressurisation de la cabine | La pressurisation de la cabine peut faire mal aux oreilles.
deep vein thrombosis | la thrombose veineuse profonde | Marche un peu pour prévenir la thrombose veineuse profonde.
frequent flyer status | le statut de voyageur fréquent | Son statut de voyageur fréquent lui donne des surclassements gratuits.
airside | la zone réservée ; côté piste | Les boutiques en zone réservée sont plus chères.
landside | la zone publique ; côté ville | Retrouve-moi en zone publique, près des arrivées.
airspace | l'espace aérien | L'espace aérien a été fermé à cause de la tempête.
flight path | le couloir aérien | Notre maison est sous le couloir aérien.
holding pattern | l'attente en hippodrome | Nous avons tourné en attente pendant 30 minutes.
go-around | la remise des gaz | Le pilote a fait une remise des gaz à cause du vent fort.
crosswind | le vent de travers | Un fort vent de travers a rendu l'atterrissage agité.
visibility | la visibilité | La faible visibilité a retardé tous les départs.
ground stop | l'arrêt des départs | Un arrêt des départs a été ordonné pendant l'orage.
air marshal | l'agent de sûreté en vol | Un agent de sûreté en vol était à bord.
screening | le contrôle ; l'inspection-filtrage | Le contrôle des passagers prend plus de temps pendant les vacances.
body scanner | le scanner corporel | Restez immobile dans le scanner corporel.
secondary inspection | le contrôle approfondi | On m'a envoyé au contrôle approfondi.
watch list | la liste de surveillance | Son nom figurait sur une liste de surveillance.
trusted traveler | le voyageur de confiance | Les programmes de voyageurs de confiance accélèrent l'immigration.
visa waiver | l'exemption de visa | Taïwan bénéficie d'une exemption de visa avec de nombreux pays.
electronic travel authorization | l'autorisation de voyage électronique | Il faut une autorisation de voyage électronique avant de partir.
entry ban | l'interdiction d'entrée | Le pays a imposé une interdiction d'entrée pendant l'épidémie.
deportation | l'expulsion | Dépasser la durée de son visa peut mener à l'expulsion.
asylum | l'asile | Il a demandé l'asile à l'aéroport.
smuggling | la contrebande | Les douaniers ont déjoué une tentative de contrebande.
airport tax | la taxe d'aéroport | La taxe d'aéroport est incluse dans le prix du billet.
landing fee | la redevance d'atterrissage | Les compagnies paient une redevance d'atterrissage dans chaque aéroport.
turnaround time | le temps d'escale ; la rotation | Les compagnies low-cost ont un temps d'escale très court.
on-time performance | la ponctualité | La ponctualité de la compagnie s'est améliorée.
load factor | le taux de remplissage | Un taux de remplissage élevé signifie des avions plus pleins.
yield management | le yield management ; la gestion des revenus | Le yield management fixe des prix différents pour le même siège.
dynamic pricing | la tarification dynamique | Avec la tarification dynamique, les prix changent toutes les heures.
ancillary fees | les frais annexes | Les frais annexes comprennent les bagages et le choix du siège.
baggage handler | le bagagiste | Un bagagiste a chargé les valises dans l'avion.
mishandled baggage | le bagage mal acheminé | Le taux de bagages mal acheminés a augmenté cet été.
wide-body | le gros-porteur | Les gros-porteurs ont deux allées.
narrow-body | l'avion monocouloir | La plupart des vols courts utilisent des avions monocouloirs.
long-haul | long-courrier | Les vols long-courriers peuvent durer plus de douze heures.
short-haul | court-courrier | En Europe, les vols court-courriers sont remplacés par le train.
flight shame | la honte de prendre l'avion | La honte de prendre l'avion pousse certains voyageurs à choisir le train.
wanderlust | l'envie de voyager ; la bougeotte | Mon envie de voyager a commencé après la fac.
itchy feet | avoir la bougeotte | J'ai la bougeotte chaque été.
a flying visit | une visite éclair | Ce n'était qu'une visite éclair.
come in for a landing | amorcer l'atterrissage | L'avion va bientôt amorcer son atterrissage.
cleared for takeoff | autorisé au décollage | Vol 7, vous êtes autorisé au décollage.
when pigs fly | quand les poules auront des dents | Il sera à l'heure quand les poules auront des dents.
high-flyer | l'étoile montante ; le battant | C'est une vraie étoile montante au travail.
the sky's the limit | tout est possible | Avec tes compétences, tout est possible.
miss the flight | rater l'avion | Dépêche-toi, ou on va rater l'avion.
globetrotter | le globe-trotteur | Mon oncle est un vrai globe-trotteur.
hit the ground running | démarrer sur les chapeaux de roue | Je veux démarrer sur les chapeaux de roue dans mon nouveau poste.
get off the ground | décoller ; prendre son envol | Le projet va enfin décoller.
under the radar | sous les radars | Il est passé sous les radars pendant des années.
running on fumes | être sur les rotules | Après ce long voyage, je suis sur les rotules.
a whirlwind trip | un voyage éclair | Nous avons fait un voyage éclair en Europe.
`,
  phrases: `
We've been rebooked on a later flight at no extra cost. | Nous avons été replacés sur un vol plus tardif sans frais supplémentaires.
Due to a ground stop, all departures are on hold. | En raison d'un arrêt des départs, tous les vols sont suspendus.
I'd like to file a claim for my damaged suitcase. | Je voudrais faire une réclamation pour ma valise abîmée.
Airlines routinely overbook flights to offset no-shows. | Les compagnies surréservent régulièrement leurs vols pour compenser les absents.
Passengers who are bumped are entitled to compensation. | Les passagers refusés à l'embarquement ont droit à une indemnisation.
Compensation rules vary significantly between jurisdictions. | Les règles d'indemnisation varient beaucoup d'un pays à l'autre.
Hidden fees have made comparing fares increasingly difficult. | Les frais cachés rendent la comparaison des tarifs de plus en plus difficile.
Budget carriers unbundle everything from seats to snacks. | Les compagnies low-cost font payer séparément tout, des sièges aux en-cas.
Dynamic pricing means fares change by the hour. | Avec la tarification dynamique, les prix changent d'heure en heure.
Loyalty programs have become hugely profitable for airlines. | Les programmes de fidélité sont devenus très rentables pour les compagnies.
Airport security is often criticized as security theater. | La sûreté aéroportuaire est souvent critiquée comme un simple théâtre sécuritaire.
Biometric screening speeds things up but raises privacy concerns. | Le contrôle biométrique accélère les choses, mais pose des questions de vie privée.
Facial recognition is now used at many boarding gates. | La reconnaissance faciale est désormais utilisée à de nombreuses portes d'embarquement.
Passenger data is shared between governments. | Les données des passagers sont partagées entre gouvernements.
Trusted traveler programs let you skip the long lines. | Les programmes de voyageurs de confiance permettent d'éviter les longues files.
Automated e-gates have cut waiting times at immigration. | Les sas automatiques ont réduit l'attente au contrôle de l'immigration.
Visa-free access depends on reciprocal agreements. | L'entrée sans visa dépend d'accords de réciprocité.
Some countries require electronic travel authorization in advance. | Certains pays exigent une autorisation de voyage électronique à l'avance.
Make sure your passport is valid for at least six months. | Assure-toi que ton passeport est valable au moins six mois.
I was pulled aside for a random secondary inspection. | On m'a mis de côté pour un contrôle approfondi aléatoire.
The customs officer questioned me about the purpose of my trip. | Le douanier m'a interrogé sur le but de mon voyage.
Undeclared goods can be confiscated. | Les marchandises non déclarées peuvent être confisquées.
Biosecurity rules are particularly strict in some countries. | Les règles de biosécurité sont particulièrement strictes dans certains pays.
Hub airports compete fiercely for transfer passengers. | Les aéroports hubs se disputent âprement les passagers en correspondance.
A missed connection can have a domino effect on your whole trip. | Une correspondance ratée peut avoir un effet domino sur tout le voyage.
Booking everything on one ticket protects you if you miss a connection. | Tout réserver sur un seul billet vous protège si vous ratez une correspondance.
Self-transfer itineraries are cheaper but riskier. | Les itinéraires avec correspondance autonome sont moins chers, mais plus risqués.
Air traffic control strikes can cripple an entire region. | Les grèves du contrôle aérien peuvent paralyser toute une région.
The delay was caused by a knock-on effect from earlier flights. | Le retard est dû à un effet en cascade des vols précédents.
Airspace closures have forced longer routes. | Les fermetures d'espace aérien ont imposé des trajets plus longs.
Crew shortages led to a wave of cancellations. | Le manque d'équipages a entraîné une vague d'annulations.
Pilots are bound by strict rules on duty hours. | Les pilotes sont soumis à des règles strictes sur le temps de service.
Turbulence is uncomfortable but rarely dangerous. | Les turbulences sont désagréables, mais rarement dangereuses.
Statistically, flying is far safer than driving. | Statistiquement, l'avion est bien plus sûr que la voiture.
Every incident is investigated to prevent a recurrence. | Chaque incident fait l'objet d'une enquête pour éviter qu'il se reproduise.
The plane was diverted because of a medical emergency. | L'avion a été dérouté à cause d'une urgence médicale.
The flight was forced to turn back shortly after takeoff. | Le vol a dû faire demi-tour peu après le décollage.
The aircraft was grounded pending a safety inspection. | L'appareil a été cloué au sol en attendant une inspection de sécurité.
Aviation accounts for a growing share of carbon emissions. | L'aviation représente une part croissante des émissions de carbone.
Sustainable aviation fuel is still prohibitively expensive. | Le carburant d'aviation durable reste d'un coût prohibitif.
Carbon offsets for flights are of questionable value. | La compensation carbone des vols est d'une valeur discutable.
Some travelers are choosing to fly less out of climate concerns. | Certains voyageurs choisissent de prendre moins l'avion par souci du climat.
Flight shame has gained traction in Northern Europe. | La honte de prendre l'avion gagne du terrain en Europe du Nord.
Airports are major employers in their regions. | Les aéroports sont de grands employeurs dans leur région.
Night flight restrictions protect nearby residents from noise. | Les restrictions de vols de nuit protègent les riverains du bruit.
The new runway has been fiercely opposed by local residents. | La nouvelle piste suscite une forte opposition des riverains.
Airport expansion often clashes with environmental goals. | L'agrandissement des aéroports se heurte souvent aux objectifs environnementaux.
Airports have become shopping malls with runways attached. | Les aéroports sont devenus des centres commerciaux avec des pistes.
Retail revenue keeps many airports profitable. | Les recettes commerciales assurent la rentabilité de nombreux aéroports.
Lounge access has become a key perk for frequent flyers. | L'accès aux salons est devenu un avantage clé pour les voyageurs fréquents.
Status matches let you transfer elite status between airlines. | Le « status match » permet de transférer son statut d'une compagnie à l'autre.
Award seats are notoriously hard to find. | Les billets primes sont notoirement difficiles à trouver.
Points devaluations erode the value of your miles. | La dévaluation des points érode la valeur de vos miles.
I always buy travel insurance for long-haul trips. | Je prends toujours une assurance voyage pour les longs courriers.
Read the policy carefully to see what's covered. | Lis attentivement le contrat pour savoir ce qui est couvert.
Lost luggage claims can drag on for months. | Les réclamations pour bagages perdus peuvent traîner des mois.
Tracking devices let you see exactly where your bag is. | Les traceurs permettent de savoir exactement où est son bagage.
Mishandled baggage rates have improved in recent years. | Le taux de bagages mal acheminés s'est amélioré ces dernières années.
Packing light saves you time and money. | Voyager léger fait gagner du temps et de l'argent.
I never check a bag on short trips. | Je n'enregistre jamais de bagage pour les petits voyages.
Long-haul flights take a real toll on the body. | Les vols long-courriers fatiguent vraiment le corps.
Staying hydrated helps with jet lag. | Bien s'hydrater aide à lutter contre le décalage horaire.
Get some sunlight to reset your body clock. | Expose-toi au soleil pour recaler ton horloge biologique.
Deep vein thrombosis is a risk on very long flights. | La thrombose veineuse profonde est un risque sur les très longs vols.
Cabin crew are trained first and foremost for safety, not service. | Le personnel navigant est formé avant tout pour la sécurité, pas pour le service.
Passengers who become disruptive can face criminal charges. | Les passagers perturbateurs peuvent faire l'objet de poursuites pénales.
Air rage incidents have increased in recent years. | Les incidents de passagers violents ont augmenté ces dernières années.
Reclining your seat remains a surprisingly divisive issue. | Incliner son siège reste un sujet étonnamment clivant.
Legroom has been steadily shrinking in economy. | L'espace pour les jambes ne cesse de diminuer en classe économique.
Premium economy offers a middle ground at a reasonable price. | La classe économique premium offre un compromis à un prix raisonnable.
Business class fares are often paid for by companies. | Les billets en classe affaires sont souvent payés par les entreprises.
Corporate travel has never fully recovered since the pandemic. | Les voyages d'affaires ne se sont jamais complètement remis de la pandémie.
Video calls have replaced many business trips. | Les visioconférences ont remplacé beaucoup de voyages d'affaires.
Wheelchair users still face too many barriers when flying. | Les personnes en fauteuil roulant rencontrent encore trop d'obstacles en avion.
Mobility aids are too often damaged in transit. | Les aides à la mobilité sont trop souvent abîmées pendant le transport.
Airports are introducing quiet rooms for neurodivergent travelers. | Les aéroports créent des salles calmes pour les voyageurs neuroatypiques.
Unaccompanied minors are escorted by airline staff. | Les mineurs non accompagnés sont escortés par le personnel de la compagnie.
Smuggling is often detected through behavioral profiling. | La contrebande est souvent détectée grâce à l'analyse comportementale.
Sniffer dogs are trained to detect drugs and food. | Les chiens renifleurs sont dressés pour détecter la drogue et la nourriture.
Never agree to carry a bag for a stranger. | N'accepte jamais de transporter un sac pour un inconnu.
Travel scams often target tired passengers on arrival. | Les arnaques ciblent souvent les passagers fatigués à leur arrivée.
Use only licensed taxis from the official rank. | Ne prends que des taxis agréés à la station officielle.
Airport transfers can be booked in advance for peace of mind. | On peut réserver son transfert depuis l'aéroport à l'avance pour être tranquille.
The airport rail link has transformed access to the city. | La liaison ferroviaire avec l'aéroport a transformé l'accès à la ville.
Airports are designed to keep you moving and spending. | Les aéroports sont conçus pour vous faire circuler et dépenser.
Wayfinding is surprisingly hard to get right in big terminals. | La signalétique est étonnamment difficile à réussir dans les grands terminaux.
The terminal was designed with natural light and greenery. | Le terminal a été conçu avec de la lumière naturelle et de la verdure.
Some airports are attractions in their own right. | Certains aéroports sont des attractions à part entière.
Airport hotels are a lifesaver on long layovers. | Les hôtels d'aéroport sont une bénédiction lors des longues escales.
Some airports offer free city tours during long layovers. | Certains aéroports proposent des visites gratuites de la ville pendant les longues escales.
Flying has been democratized over the past few decades. | L'avion s'est démocratisé au cours des dernières décennies.
Cheap flights have transformed tourism, for better and worse. | Les vols bon marché ont transformé le tourisme, pour le meilleur et pour le pire.
Overtourism is partly a side effect of low-cost air travel. | Le surtourisme est en partie un effet secondaire du transport aérien low-cost.
Regional airports depend heavily on government subsidies. | Les aéroports régionaux dépendent fortement des subventions publiques.
The route was cut because it wasn't profitable. | La ligne a été supprimée parce qu'elle n'était pas rentable.
Codeshare flights can be confusing for passengers. | Les vols en partage de code peuvent dérouter les passagers.
Airline alliances offer smoother connections between partners. | Les alliances aériennes facilitent les correspondances entre partenaires.
Mergers have reduced competition and pushed up fares. | Les fusions ont réduit la concurrence et fait monter les prix.
There's still something magical about watching a plane take off. | Il y a toujours quelque chose de magique à regarder un avion décoller.
Every departure lounge is full of stories. | Chaque salle d'embarquement est pleine d'histoires.
`
});
