// 法文對照（Français）：海外工作
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
addFrench("overseas", {
  words: `
visa | le visa | J'ai besoin d'un visa pour travailler au Japon.
passport | le passeport | N'oublie pas ton passeport.
abroad | à l'étranger | Je veux travailler à l'étranger.
foreign | étranger | Elle travaille pour une entreprise étrangère.
language | la langue | Apprendre la langue aide beaucoup.
homesick | qui a le mal du pays | J'ai parfois le mal du pays.
suitcase | la valise | Ma valise est trop lourde.
flight | le vol | Mon vol part à minuit.
arrive | arriver | Quand es-tu arrivé à Tokyo ?
leave | partir | Je pars pour le Canada le mois prochain.
move | déménager | Nous allons déménager en Australie l'an prochain.
overseas | à l'étranger ; outre-mer | Il travaille à l'étranger.
local | local | J'aime manger dans les restaurants locaux.
bank | la banque | Je dois trouver une banque près de mon bureau.
address | l'adresse | Quelle est ta nouvelle adresse ?
SIM card | la carte SIM | J'ai acheté une carte SIM locale à l'aéroport.
lonely | seul | Je me suis senti seul la première semaine.
friendly | sympathique ; accueillant | Mes nouveaux collègues sont très sympathiques.
different | différent | La nourriture ici est très différente.
culture | la culture | J'adore découvrir la culture.
weather | le temps ; la météo | Ici, il fait froid et pluvieux.
coworker | le collègue | Mon collègue m'a aidé à trouver un appartement.
accent | l'accent | Je ne comprends pas son accent.
understand | comprendre | Désolé, je ne comprends pas.
speak | parler | Vous parlez anglais ?
translate | traduire | Tu peux me traduire ça ?
video call | l'appel vidéo | J'ai un appel vidéo avec ma famille tous les dimanches.
nervous | nerveux | Je suis nerveux pour mon premier jour.
excited | impatient ; enthousiaste | J'ai hâte de commencer mon nouveau travail.
stranger | l'inconnu | Au début, tout le monde est un inconnu.
country | le pays | Dans quel pays veux-tu travailler ?
cash | les espèces | Ils acceptent les espèces ici ?
pack | faire ses bagages | Je dois faire ma valise ce soir.
home | chez soi ; le pays | Je rentre au pays une fois par an.
airport | l'aéroport | Mon patron est venu me chercher à l'aéroport.
map | la carte ; le plan | J'utilise une appli de cartes tous les jours.
city | la ville | Tokyo est une ville immense.
food | la nourriture | La cuisine taïwanaise me manque.
apartment | l'appartement | J'ai trouvé un petit appartement près du travail.
rent | le loyer | Les loyers sont chers à Singapour.
job | le travail ; l'emploi | J'ai trouvé un travail en Allemagne.
office | le bureau | Mon bureau est en centre-ville.
boss | le patron | Mon patron vient d'Australie.
English | l'anglais | Nous parlons anglais au travail.
Japanese | le japonais | J'apprends le japonais.
help | aider | Vous pouvez m'aider ?
lost | perdu | Je me suis perdu le premier jour.
thank you | merci | Merci pour votre aide !
excuse me | excusez-moi | Excusez-moi, où est la gare ?
phone | le téléphone | Mon téléphone ne marche pas ici.
internet | internet | Il y a internet dans l'appartement ?
money | l'argent | J'envoie de l'argent à mes parents.
post office | la poste | Où est la poste la plus proche ?
doctor | le médecin | J'ai besoin de voir un médecin.
pharmacy | la pharmacie | Il y a une pharmacie près d'ici ?
safe | sûr | Ce quartier est très sûr.
snow | neiger | Il neige beaucoup au Canada.
winter | l'hiver | L'hiver en Corée est très froid.
summer | l'été | L'été à Dubaï est extrêmement chaud.
family | la famille | J'appelle ma famille chaque semaine.
parents | les parents | Mes parents me rendent visite chaque année.
friend | l'ami | Je me suis fait un nouvel ami au travail.
neighbor | le voisin | Mon voisin parle espagnol.
visit | rendre visite | Ma sœur viendra me voir en mai.
return | rentrer | Je rentre à Taïwan à chaque Nouvel An lunaire.
miss | manquer | La cuisine de ma mère me manque.
tired | fatigué | Je suis fatigué après ce long vol.
welcome | bienvenue | Bienvenue à Singapour !
ticket | le billet | J'ai acheté un billet d'avion.
bus | le bus | Je prends le bus pour aller au travail.
train | le train | Le train est rapide et propre.
taxi | le taxi | Prenons un taxi.
hotel | l'hôtel | Je suis resté une semaine à l'hôtel.
room | la chambre | Ma chambre est petite.
key | la clé | J'ai perdu la clé de ma chambre.
bag | le sac | Mon sac est lourd.
clothes | les vêtements | J'ai besoin de vêtements chauds.
coat | le manteau | Achète un manteau avant l'hiver.
umbrella | le parapluie | Il pleut beaucoup ici. Prends un parapluie.
rain | pleuvoir ; la pluie | Il va pleuvoir aujourd'hui.
hot | chaud | Il fait très chaud en été.
cold | froid | Il fait tellement froid ici !
hungry | qui a faim | J'ai faim. Allons manger.
eat | manger | Qu'est-ce que les gens mangent ici ?
drink | boire | Je bois du thé tous les jours.
shop | le magasin | Le magasin ferme à dix-huit heures.
supermarket | le supermarché | J'achète à manger au supermarché.
price | le prix | Quel est le prix ?
expensive | cher | La nourriture est chère ici.
cheap | bon marché | Le bus n'est pas cher.
work | travailler | Je travaille dans un hôtel.
school | l'école | Je vais dans une école de langues.
class | le cours | Mon cours d'anglais est à neuf heures.
teacher | le professeur | Mon professeur est très gentil.
learn | apprendre | J'apprends de nouveaux mots tous les jours.
write | écrire | J'écris à ma famille chaque semaine.
read | lire | Je ne sais pas encore lire les panneaux.
photo | la photo | J'envoie des photos à ma mère.
letter | la lettre | J'ai reçu une lettre de la maison.
gift | le cadeau | J'ai apporté un cadeau de Taïwan.
`,
  phrases: `
Where are you from? | D'où viens-tu ?
I'm here on a work visa. | Je suis ici avec un visa de travail.
Could you speak more slowly, please? | Pourriez-vous parler plus lentement, s'il vous plaît ?
I work in another country. | Je travaille dans un autre pays.
I'm moving abroad next month. | Je pars vivre à l'étranger le mois prochain.
I got a job in Australia. | J'ai trouvé un travail en Australie.
I live in Japan now. | J'habite au Japon maintenant.
I'm from Taiwan. | Je viens de Taïwan.
I'm new here. | Je suis nouveau ici.
I don't speak the language well. | Je ne parle pas bien la langue.
Can you speak English? | Vous parlez anglais ?
Please speak slowly. | Parlez lentement, s'il vous plaît.
Can you help me? | Vous pouvez m'aider ?
I need a visa. | J'ai besoin d'un visa.
Where is the embassy? | Où est l'ambassade ?
Here is my passport. | Voici mon passeport.
I have a work visa. | J'ai un visa de travail.
I need to open a bank account. | Je dois ouvrir un compte bancaire.
I need a phone number. | J'ai besoin d'un numéro de téléphone.
Where can I buy a SIM card? | Où puis-je acheter une carte SIM ?
I'm looking for an apartment. | Je cherche un appartement.
How much is the rent? | Combien coûte le loyer ?
I miss my family. | Ma famille me manque.
I miss home. | Mon pays me manque.
I miss Taiwanese food. | La cuisine taïwanaise me manque.
I call my family every week. | J'appelle ma famille chaque semaine.
The food here is different. | La nourriture ici est différente.
The weather here is cold. | Il fait froid ici.
It's very hot here. | Il fait très chaud ici.
Everything is expensive here. | Tout est cher ici.
Where is the supermarket? | Où est le supermarché ?
Where can I buy Asian food? | Où puis-je acheter des produits asiatiques ?
I'm learning the language. | J'apprends la langue.
I go to language class. | Je prends des cours de langue.
My English is getting better. | Mon anglais s'améliore.
I have new friends here. | J'ai de nouveaux amis ici.
My coworkers are from many countries. | Mes collègues viennent de nombreux pays.
How long have you been here? | Depuis combien de temps es-tu ici ?
I've been here for six months. | Je suis ici depuis six mois.
How long will you stay? | Combien de temps vas-tu rester ?
I'll stay for two years. | Je vais rester deux ans.
I like living here. | J'aime vivre ici.
It's hard at first. | C'est dur au début.
I'm lonely sometimes. | Je me sens seul parfois.
I'm getting used to it. | Je m'y habitue.
Everything is new to me. | Tout est nouveau pour moi.
What's the time difference? | Quel est le décalage horaire ?
It's eight hours ahead. | Il y a huit heures d'avance.
It's midnight in Taiwan now. | Il est minuit à Taïwan en ce moment.
I go home once a year. | Je rentre au pays une fois par an.
I'm going home for Lunar New Year. | Je rentre pour le Nouvel An lunaire.
I send money to my family. | J'envoie de l'argent à ma famille.
Where can I send money? | Où puis-je envoyer de l'argent ?
I need to see a doctor. | J'ai besoin de voir un médecin.
Where is the hospital? | Où est l'hôpital ?
Do I need insurance? | J'ai besoin d'une assurance ?
I have health insurance. | J'ai une assurance santé.
I pay taxes here. | Je paie des impôts ici.
I'm working on a farm. | Je travaille dans une ferme.
I work in a factory. | Je travaille dans une usine.
I work in a restaurant. | Je travaille dans un restaurant.
I'm on a working holiday. | Je suis en PVT (vacances-travail).
I work and travel. | Je travaille et je voyage.
What's the minimum wage here? | Quel est le salaire minimum ici ?
I get paid every two weeks. | Je suis payé toutes les deux semaines.
I share a house with other workers. | Je partage une maison avec d'autres travailleurs.
My roommate is from Korea. | Mon colocataire vient de Corée.
I take the bus to work. | Je prends le bus pour aller au travail.
I need a driver's license. | J'ai besoin d'un permis de conduire.
Is it safe here? | C'est sûr ici ?
Be careful at night. | Fais attention la nuit.
Where is the police station? | Où est le commissariat ?
I lost my passport. | J'ai perdu mon passeport.
Please call this number. | Appelez ce numéro, s'il vous plaît.
What's this in English? | Comment ça se dit en anglais ?
How do you say this? | Comment on dit ça ?
I don't understand. Can you write it down? | Je ne comprends pas. Vous pouvez l'écrire ?
Thank you for your help. | Merci pour votre aide.
People here are very friendly. | Les gens ici sont très accueillants.
I want to travel around the country. | Je veux voyager dans tout le pays.
I'll visit you in Taiwan. | Je viendrai te voir à Taïwan.
Come visit me here! | Viens me voir ici !
Welcome to our country. | Bienvenue dans notre pays.
Do you like it here? | Tu te plais ici ?
Yes, I love it. | Oui, j'adore.
It's a beautiful country. | C'est un beau pays.
I want to stay longer. | Je veux rester plus longtemps.
My visa expires soon. | Mon visa expire bientôt.
I need to renew my visa. | Je dois renouveler mon visa.
I'm going back to Taiwan. | Je rentre à Taïwan.
I'll miss this place. | Cet endroit va me manquer.
I learned so much here. | J'ai tellement appris ici.
This was a great experience. | C'était une super expérience.
Keep in touch! | Restons en contact !
I'm proud of myself. | Je suis fier de moi.
What do I need to bring? | Qu'est-ce que je dois apporter ?
Where is the nearest bank? | Où est la banque la plus proche ?
I don't have a car here. | Je n'ai pas de voiture ici.
My boss speaks English. | Mon patron parle anglais.
I work with people from many places. | Je travaille avec des gens venus de partout.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("overseas", {
  words: `
work permit | le permis de travail | Mon permis de travail est valable deux ans.
relocate | muter ; s'installer | L'entreprise va me muter à Singapour.
culture shock | le choc culturel | J'ai subi un choc culturel le premier mois.
adapt | s'adapter | Il m'a fallu du temps pour m'adapter au climat.
cost of living | le coût de la vie | Le coût de la vie à Londres est très élevé.
residence | le séjour ; la résidence | J'ai demandé une carte de séjour.
embassy | l'ambassade | J'ai rendez-vous à l'ambassade.
sponsor | parrainer | L'entreprise va parrainer mon visa.
application | la demande | Ma demande de visa a été acceptée.
immigration office | le service de l'immigration | Je suis allé au service de l'immigration pour renouveler mon permis.
currency | la monnaie ; la devise | Quelle monnaie utilise-t-on au Vietnam ?
exchange rate | le taux de change | Le taux de change est bon en ce moment.
bank account | le compte bancaire | J'ai ouvert un compte bancaire le premier jour.
health insurance | l'assurance maladie | Le poste comprend-il une assurance maladie ?
settle in | s'installer ; prendre ses marques | Il m'a fallu trois mois pour prendre mes marques.
time zone | le fuseau horaire | Ma famille est dans un autre fuseau horaire.
job offer | l'offre d'emploi | J'ai reçu une offre d'emploi d'une entreprise à Singapour.
recruiter | le recruteur | Un recruteur m'a contacté pour un poste à Dubaï.
probation | la période d'essai | Il y a une période d'essai de trois mois.
housing allowance | l'indemnité de logement | L'entreprise me verse une indemnité de logement.
language barrier | la barrière de la langue | La barrière de la langue a été difficile au début.
etiquette | l'étiquette ; les usages | Renseignez-vous sur les usages professionnels avant votre première réunion.
tradition | la tradition | Le pourboire n'est pas une tradition au Japon.
working holiday | le PVT (programme vacances-travail) | J'ai fait un PVT en Australie.
homestay | la famille d'accueil | J'ai vécu dans une famille d'accueil le premier mois.
foreigner | l'étranger | En tant qu'étranger, il me fallait des documents supplémentaires.
paperwork | les démarches administratives | Il y a beaucoup de démarches quand on part à l'étranger.
translator | le traducteur | Nous avons engagé un traducteur pour le contrat.
document | le document | Apportez tous vos documents à l'entretien.
branch office | la succursale ; le bureau régional | Je travaille au bureau de Tokyo.
local hire | le recrutement local | Recruté localement, je n'ai pas les avantages des expatriés.
network | le réseau | Se constituer un réseau prend du temps dans un nouveau pays.
head office | le siège | Le siège est à Taipei.
visa extension | la prolongation de visa | J'ai demandé une prolongation de visa.
renewal | le renouvellement | Le renouvellement de mon passeport a pris deux semaines.
ID card | la pièce d'identité | Les étrangers doivent avoir une pièce d'identité sur eux.
ARC | l'ARC (titre de séjour des résidents étrangers à Taïwan) | À Taïwan, les étrangers reçoivent un ARC.
tax return | la déclaration de revenus | J'ai fait ma première déclaration de revenus à l'étranger.
pension | la retraite ; la pension | Puis-je transférer ma retraite quand je pars ?
social security | la sécurité sociale | Les cotisations sociales sont prélevées sur mon salaire.
payslip | la fiche de paie | Vérifie ta fiche de paie chaque mois.
international school | l'école internationale | Mes enfants vont dans une école internationale.
moving company | le déménageur | Nous avons fait appel à des déménageurs pour le grand départ.
storage unit | le garde-meubles | J'ai laissé mes meubles dans un garde-meubles.
international driving permit | le permis de conduire international | Prends ton permis de conduire international.
public holiday | le jour férié | Il y a beaucoup de jours fériés au Japon.
work culture | la culture du travail | La culture du travail ici est très détendue.
hierarchy | la hiérarchie | Les bureaux coréens ont une hiérarchie stricte.
punctuality | la ponctualité | La ponctualité est importante en Suisse.
directness | la franchise ; le franc-parler | Le franc-parler néerlandais m'a surpris.
body language | le langage corporel | Le langage corporel varie selon les cultures.
gesture | le geste | Ce geste est impoli dans certains pays.
taboo | le tabou | Parler de salaire est tabou ici.
stereotype | le stéréotype | Tous les stéréotypes ne sont pas vrais.
adjust | s'adapter | Il m'a fallu des mois pour m'adapter.
expat | l'expatrié | Il y a une grande communauté d'expatriés à Bangkok.
international | international | Je travaille pour une entreprise internationale.
global | mondial | Notre équipe est mondiale.
remote team | l'équipe à distance | Je dirige une équipe à distance répartie dans cinq pays.
time difference | le décalage horaire | Le décalage horaire avec Taïwan est de sept heures.
overtime pay | la rémunération des heures supplémentaires | La loi impose de payer les heures supplémentaires.
union | le syndicat | Beaucoup de travailleurs ici sont syndiqués.
commute | le trajet | Mon trajet ne dure que quinze minutes à vélo.
deposit | la caution ; le dépôt de garantie | La caution était de trois mois de loyer.
lease | le bail | Mon bail se termine en août.
interpreter | l'interprète | Nous avons eu besoin d'un interprète à l'hôpital.
orientation | la séance d'accueil | L'entreprise a organisé une séance d'accueil pour les nouveaux.
induction | la formation d'intégration | Ma formation d'intégration a duré deux jours.
buddy system | le système de parrainage | Le parrainage aide les nouveaux à s'intégrer.
mentor | le mentor | Mon mentor m'a montré comment les choses fonctionnent ici.
landlord | le propriétaire | Mon propriétaire habite à l'étage.
utilities | les charges (eau, électricité, gaz) | Les charges sont comprises dans le loyer.
furnished | meublé | J'ai loué un appartement meublé.
roommate | le colocataire | Mon colocataire vient du Brésil.
flatshare | la colocation | Une colocation coûte moins cher que vivre seul.
grocery | les courses ; l'épicerie | Les prix de l'alimentation sont élevés ici.
public transport | les transports en commun | Les transports en commun sont excellents dans cette ville.
driving license | le permis de conduire | Je dois faire convertir mon permis de conduire.
medical check | la visite médicale | Le visa exige une visite médicale.
vaccination | la vaccination | Présentez votre carnet de vaccination.
certificate | le certificat ; l'acte | J'ai besoin d'un acte de naissance.
notarize | faire certifier par un notaire | Vous devez faire certifier ces documents par un notaire.
apostille | l'apostille | Mon diplôme a besoin d'une apostille.
translation | la traduction | J'ai besoin d'une traduction officielle de mon diplôme.
visa interview | l'entretien pour le visa | Mon entretien pour le visa est mardi.
biometrics | les données biométriques | Je suis allé au centre pour donner mes données biométriques.
appointment | le rendez-vous | J'ai pris rendez-vous en ligne.
queue number | le ticket d'attente | Prenez un ticket et attendez.
bank transfer | le virement bancaire | Mon salaire arrive par virement bancaire.
wire transfer | le virement international | J'envoie de l'argent chez moi par virement international.
debit card | la carte de débit | Ma carte bancaire est arrivée par la poste.
credit history | l'historique de crédit | Sans historique de crédit, c'est difficile de louer.
phone plan | le forfait téléphonique | J'ai choisi un forfait pas cher.
contract | le contrat | Lisez attentivement votre contrat de travail.
language school | l'école de langues | J'étudie dans une école de langues le soir.
conversation partner | le partenaire de conversation | Mon partenaire de conversation m'aide à pratiquer.
meetup | la rencontre ; le meetup | Je suis allé à une rencontre d'expatriés samedi.
community center | le centre socioculturel | Le centre socioculturel propose des cours gratuits.
consulate | le consulat | J'ai renouvelé mon passeport au consulat.
emergency contact | la personne à prévenir en cas d'urgence | Qui est votre personne à prévenir en cas d'urgence ?
when in Rome, do as the Romans do | à Rome, fais comme les Romains | À Rome, fais comme les Romains.
a fish out of water | comme un poisson hors de l'eau | Au début, je me sentais comme un poisson hors de l'eau.
lost in translation | perdu à la traduction | La blague s'est perdue à la traduction.
find your feet | trouver ses marques | Tu vas vite trouver tes marques.
start from scratch | repartir de zéro | J'ai dû repartir de zéro à l'étranger.
the grass is always greener | l'herbe est toujours plus verte ailleurs | L'herbe est toujours plus verte chez le voisin.
far from home | loin de chez soi | C'est dur d'être loin de chez soi.
pack your bags | faire ses valises | Fais tes valises, on part au Canada.
make friends | se faire des amis | Ce n'est pas facile de se faire des amis à l'étranger.
see the world | voir le monde | Je veux voir le monde.
learn the ropes | apprendre les ficelles | Mes collègues m'ont aidé à apprendre les ficelles.
put down roots | s'enraciner ; faire souche | Nous nous sommes enracinés en Australie.
`,
  phrases: `
How long does it take to process the visa? | Combien de temps faut-il pour traiter le visa ?
Do I need to open a local bank account? | Dois-je ouvrir un compte bancaire local ?
I'm still getting used to the work culture here. | Je m'habitue encore à la culture du travail ici.
I've been transferred to our Singapore office. | J'ai été muté à notre bureau de Singapour.
I'm on a two-year assignment in Germany. | Je suis en mission de deux ans en Allemagne.
The company is sponsoring my visa. | L'entreprise parraine mon visa.
How long does the visa application take? | Combien de temps prend la demande de visa ?
I need to get my documents translated and certified. | Je dois faire traduire et certifier mes documents.
I have an appointment at the immigration office. | J'ai rendez-vous au service de l'immigration.
I need to register my address with the local authorities. | Je dois déclarer mon adresse aux autorités locales.
My residence permit is valid for three years. | Mon titre de séjour est valable trois ans.
Do I need to pay taxes in both countries? | Dois-je payer des impôts dans les deux pays ?
There's a tax agreement between the two countries. | Il existe une convention fiscale entre les deux pays.
The relocation package covers the first month's rent. | L'aide à la mobilité couvre le premier mois de loyer.
The company helped me find an apartment. | L'entreprise m'a aidé à trouver un appartement.
I'm still dealing with a lot of paperwork. | Je suis encore aux prises avec beaucoup de démarches.
Opening a bank account here was a nightmare. | Ouvrir un compte bancaire ici a été un cauchemar.
You need a local address to get a phone contract. | Il faut une adresse locale pour avoir un forfait téléphonique.
My foreign degree isn't recognized here. | Mon diplôme étranger n'est pas reconnu ici.
I had to get my qualifications assessed. | J'ai dû faire évaluer mes qualifications.
People here are much more direct. | Les gens ici sont beaucoup plus directs.
Meetings here are very punctual. | Ici, les réunions commencent pile à l'heure.
Nobody works overtime here. | Personne ne fait d'heures supplémentaires ici.
They take work-life balance very seriously. | Ils prennent l'équilibre vie pro-vie perso très au sérieux.
I was surprised by how informal everyone is. | J'ai été surpris de voir à quel point tout le monde est décontracté.
Everyone calls the boss by their first name. | Tout le monde appelle le patron par son prénom.
It's normal to disagree with your manager here. | Ici, c'est normal de ne pas être d'accord avec son responsable.
I'm learning to speak up in meetings. | J'apprends à prendre la parole en réunion.
I sometimes miss the subtle meanings. | Il m'arrive de ne pas saisir les sous-entendus.
I'm working on my accent. | Je travaille mon accent.
I can understand them, but they speak too fast. | Je les comprends, mais ils parlent trop vite.
I still have to think in Chinese first. | Je dois encore réfléchir d'abord en chinois.
I've started dreaming in English. | J'ai commencé à rêver en anglais.
Small talk was hard for me at first. | Les conversations banales m'étaient difficiles au début.
I'm experiencing culture shock. | Je vis un choc culturel.
The first few months were the hardest. | Les premiers mois ont été les plus durs.
I felt really homesick at the beginning. | J'avais vraiment le mal du pays au début.
It took me a while to settle in. | Il m'a fallu du temps pour prendre mes marques.
I've joined a community group for Taiwanese people. | J'ai rejoint une association de Taïwanais.
It's nice to speak my own language sometimes. | Ça fait du bien de parler ma langue de temps en temps.
I've made friends from all over the world. | Je me suis fait des amis du monde entier.
I try not to only hang out with other expats. | J'essaie de ne pas fréquenter que des expatriés.
I'm trying to integrate into the local community. | J'essaie de m'intégrer à la communauté locale.
The cost of living here is much higher. | Le coût de la vie est beaucoup plus élevé ici.
My salary is higher, but so are my expenses. | Mon salaire est plus élevé, mais mes dépenses aussi.
I'm saving most of what I earn. | J'économise l'essentiel de ce que je gagne.
I transfer money home every month. | J'envoie de l'argent à ma famille chaque mois.
The exchange rate makes a big difference. | Le taux de change fait une grande différence.
Healthcare here works differently. | Le système de santé fonctionne différemment ici.
I had to register with a local doctor. | J'ai dû m'inscrire chez un médecin local.
I keep in touch with my family through video calls. | Je reste en contact avec ma famille par appel vidéo.
The time difference makes it hard to call home. | Le décalage horaire complique les appels à la maison.
My parents are worried about me living alone. | Mes parents s'inquiètent que je vive seul.
I'm thinking about extending my contract. | Je pense prolonger mon contrat.
I'm considering applying for permanent residency. | J'envisage de demander la résidence permanente.
You need to have lived here for five years. | Il faut avoir vécu ici cinq ans.
My partner is joining me next year. | Mon conjoint me rejoint l'an prochain.
Can my spouse work here too? | Mon conjoint peut-il aussi travailler ici ?
The kids go to an international school. | Les enfants vont dans une école internationale.
International schools are very expensive. | Les écoles internationales sont très chères.
The working holiday visa lets you work for a year. | Le visa vacances-travail permet de travailler pendant un an.
I picked fruit on a farm for three months. | J'ai cueilli des fruits dans une ferme pendant trois mois.
The work was hard, but the pay was good. | Le travail était dur, mais bien payé.
Make sure your employer pays you legally. | Assurez-vous que votre employeur vous paie légalement.
Some employers take advantage of foreign workers. | Certains employeurs exploitent les travailleurs étrangers.
Know your rights as a worker. | Connaissez vos droits de travailleur.
I keep copies of all my documents. | Je garde des copies de tous mes documents.
My contract says I get four weeks of annual leave. | Mon contrat prévoit quatre semaines de congés annuels.
I'm entitled to the same rights as local workers. | J'ai droit aux mêmes droits que les travailleurs locaux.
Do I need a local driving license? | Ai-je besoin d'un permis de conduire local ?
I had to retake my driving test here. | J'ai dû repasser mon permis ici.
I'm still getting used to the food. | Je m'habitue encore à la nourriture.
I found a great Asian grocery store. | J'ai trouvé une super épicerie asiatique.
I cook Taiwanese food when I'm homesick. | Je cuisine taïwanais quand j'ai le mal du pays.
The winters here are long and dark. | Les hivers ici sont longs et sombres.
I'm taking vitamin D supplements. | Je prends de la vitamine D.
Public holidays are different here. | Les jours fériés sont différents ici.
I spent Lunar New Year at work. | J'ai passé le Nouvel An lunaire au travail.
My colleagues threw me a farewell party. | Mes collègues m'ont organisé un pot de départ.
I'm going to miss everyone here. | Tout le monde ici va me manquer.
Coming back home was a bit of a reverse culture shock. | Rentrer chez moi a été un petit choc culturel inversé.
My time abroad changed the way I see things. | Mon séjour à l'étranger a changé ma façon de voir les choses.
Working abroad looks great on your résumé. | Une expérience à l'étranger fait très bien sur un CV.
It's made me much more independent. | Ça m'a rendu beaucoup plus autonome.
I've learned to adapt to new situations. | J'ai appris à m'adapter à de nouvelles situations.
My English improved so much. | Mon anglais a énormément progressé.
I'd recommend it to anyone. | Je le recommanderais à tout le monde.
Do your research before you go. | Renseignez-vous bien avant de partir.
Make sure you have some savings first. | Assurez-vous d'avoir un peu d'économies d'abord.
Be prepared for things to go wrong. | Préparez-vous à ce que les choses tournent mal.
Don't be afraid to ask for help. | N'ayez pas peur de demander de l'aide.
It's okay to feel lost sometimes. | C'est normal de se sentir perdu parfois.
Every day is a learning experience. | Chaque jour est une occasion d'apprendre.
I've grown so much since I moved here. | J'ai beaucoup grandi depuis que j'ai déménagé ici.
I'm thinking about going home for good. | Je pense rentrer définitivement.
I don't know where home is anymore. | Je ne sais plus où est chez moi.
Part of me will always belong here. | Une partie de moi appartiendra toujours à cet endroit.
How do I apply for a tax number? | Comment demander un numéro fiscal ?
I'm still waiting for my work permit. | J'attends toujours mon permis de travail.
Could you recommend a good area to live in? | Pourriez-vous me conseiller un bon quartier où habiter ?
`,
});

// ---------- 高級 Advanced ----------
addFrench("overseas", {
  words: `
expatriate | l'expatrié | La communauté expatriée ici est très active.
cross-cultural | interculturel | La communication interculturelle demande de la pratique.
assimilate | s'assimiler | Certains nouveaux arrivants s'assimilent plus vite que d'autres.
global mobility | la mobilité internationale | Notre service de mobilité internationale gère les mutations.
tax residency | la résidence fiscale | Vérifiez votre résidence fiscale avant de partir.
repatriation | le rapatriement ; le retour au pays | Le retour au pays peut être plus difficile que le départ.
overseas assignment | la mission à l'étranger | Elle a accepté une mission de trois ans à l'étranger.
relocation package | l'aide à la mobilité | L'aide à la mobilité couvre les billets et le logement.
dual citizenship | la double nationalité | Elle a la double nationalité canadienne et taïwanaise.
permanent residency | la résidence permanente | Il a demandé la résidence permanente au bout de cinq ans.
credential | le diplôme ; la qualification | Mes diplômes d'infirmière n'ont pas été reconnus.
brain drain | la fuite des cerveaux | Les bas salaires provoquent une fuite des cerveaux.
talent shortage | la pénurie de talents | L'Allemagne fait face à une pénurie de talents dans l'informatique.
diaspora | la diaspora | La diaspora taïwanaise est active en Californie.
remittance | les envois de fonds | Beaucoup de travailleurs migrants envoient des fonds chez eux.
integration | l'intégration | Les cours de langue facilitent l'intégration.
xenophobia | la xénophobie | La xénophobie rend la vie plus difficile aux migrants.
discrimination | la discrimination | La discrimination au travail est illégale.
acculturation | l'acculturation | L'acculturation est un processus progressif.
third culture kid | l'enfant de troisième culture | Enfant de troisième culture, elle se sent chez elle partout.
reverse culture shock | le choc culturel inversé | Le choc culturel inversé m'a surpris à mon retour.
digital nomad | le nomade numérique | Les nomades numériques travaillent souvent depuis Bali ou Chiang Mai.
double taxation | la double imposition | La convention évite la double imposition.
labor law | le droit du travail | Le droit du travail varie d'un pays à l'autre.
non-compete | la clause de non-concurrence | J'ai signé une clause de non-concurrence.
multinational | la multinationale | Il travaille pour une multinationale à Shanghai.
localization | la localisation | La localisation consiste à adapter les produits aux marchés locaux.
hardship posting | le poste en zone difficile | Un poste en zone difficile s'accompagne d'une prime.
cultural intelligence | l'intelligence culturelle | L'intelligence culturelle est essentielle pour les dirigeants internationaux.
glass ceiling | le plafond de verre | Le personnel étranger se heurte parfois à un plafond de verre.
migrant worker | le travailleur migrant | Les travailleurs migrants sont indispensables aux usines taïwanaises.
bureaucracy | la bureaucratie | Affronter la bureaucratie à l'étranger demande de la patience.
host country | le pays d'accueil | Respectez les lois de votre pays d'accueil.
expat bubble | la bulle d'expatriés | Il est facile de vivre dans une bulle d'expatriés.
code-switching | l'alternance codique | L'alternance codique est une seconde nature pour le personnel bilingue.
cultural humility | l'humilité culturelle | L'humilité culturelle, c'est accepter d'apprendre.
high-context culture | la culture à contexte riche | Le Japon est une culture à contexte riche.
low-context culture | la culture à contexte pauvre | L'Allemagne est une culture à contexte pauvre.
saving face | sauver la face | Sauver la face compte beaucoup dans de nombreux lieux de travail asiatiques.
power distance | la distance hiérarchique | Une forte distance hiérarchique signifie que les employés contestent rarement leurs chefs.
culture fit | l'adéquation culturelle | Ils l'ont refusé pour manque d'adéquation culturelle.
global citizen | le citoyen du monde | Vivre à l'étranger a fait de moi un citoyen du monde.
identity crisis | la crise identitaire | Beaucoup de gens qui rentrent traversent une crise identitaire.
belonging | l'appartenance | Il m'a fallu des années pour ressentir un sentiment d'appartenance.
naturalization | la naturalisation | La naturalisation exige des années de résidence.
asylum | l'asile | Ils ont demandé l'asile après avoir fui la guerre.
refugee | le réfugié | La crise des réfugiés a mis à rude épreuve les frontières de l'Europe.
deportation | l'expulsion | Dépasser la durée de son visa peut entraîner une expulsion.
overstay | dépasser la durée de séjour autorisée | Ne dépassez pas la durée de votre visa.
undocumented | sans papiers | Les travailleurs sans papiers ont peu de protections.
quota | le quota | Il y a un quota de travailleurs étrangers.
points-based | à points | Le Canada utilise un système d'immigration à points.
skilled worker | le travailleur qualifié | Le visa vise les travailleurs qualifiés.
Gold Card | la Gold Card (visa de travail taïwanais pour talents) | La Gold Card de Taïwan attire les professionnels étrangers.
offshoring | la délocalisation | La délocalisation a déplacé des usines en Asie du Sud-Est.
nearshoring | la relocalisation de proximité | La relocalisation de proximité rapproche la production.
cost-of-living adjustment | l'ajustement au coût de la vie | Les expatriés reçoivent un ajustement au coût de la vie.
hardship allowance | la prime de pénibilité ; la prime d'éloignement | La prime d'éloignement représente vingt pour cent du salaire.
tax treaty | la convention fiscale | La convention fiscale évite de payer l'impôt deux fois.
social integration | l'intégration sociale | L'intégration sociale demande plus que des compétences linguistiques.
transnational | transnational | Beaucoup de familles mènent aujourd'hui une vie transnationale.
circular migration | la migration circulaire | La migration circulaire profite aux deux pays.
return migration | la migration de retour | La migration de retour progresse chez les jeunes Taïwanais.
soft skills | les compétences comportementales | Les compétences comportementales comptent encore plus à l'étranger.
global mindset | l'ouverture internationale | Les employeurs valorisent l'ouverture internationale.
language proficiency | le niveau de langue | Le niveau de langue influe sur les chances de promotion.
integration course | le cours d'intégration | Les nouveaux résidents doivent suivre un cours d'intégration.
residence permit | le titre de séjour | Mon titre de séjour est valable deux ans.
family reunification | le regroupement familial | Les visas de regroupement familial prennent des mois.
dependent visa | le visa de personne à charge | Mes enfants sont venus avec un visa de personne à charge.
spousal visa | le visa de conjoint | Elle a demandé un visa de conjoint.
sponsorship | le parrainage | Le parrainage du visa est nécessaire pour ce poste.
labor market test | le test du marché du travail | Les employeurs doivent d'abord passer un test du marché du travail.
credential recognition | la reconnaissance des diplômes | La reconnaissance des diplômes peut prendre un an.
underemployment | le sous-emploi | Le sous-emploi est fréquent chez les migrants qualifiés.
deskilling | la déqualification | La déqualification survient quand les migrants ne peuvent pas utiliser leur formation.
exploitation | l'exploitation | Le droit du travail protège les travailleurs de l'exploitation.
debt bondage | la servitude pour dettes | Des frais élevés peuvent mener à la servitude pour dettes.
recruitment fee | les frais de recrutement | Les travailleurs paient souvent d'énormes frais de recrutement.
human trafficking | la traite des êtres humains | La traite des êtres humains est un crime grave.
forced labor | le travail forcé | Le travail forcé existe encore dans certains secteurs.
ethical recruitment | le recrutement éthique | Le recrutement éthique signifie aucun frais pour les travailleurs.
migrant rights | les droits des migrants | Des ONG militent pour les droits des migrants.
trailing spouse | le conjoint suiveur | Son mari est devenu conjoint suiveur.
dual-career couple | le couple à double carrière | S'expatrier est difficile pour un couple à double carrière.
expat package | le package d'expatriation | Son package d'expatriation couvre les frais de scolarité.
local-plus | contrat local amélioré | Elle a été embauchée avec un contrat local amélioré.
cost-of-living index | l'indice du coût de la vie | La ville se classe haut dans l'indice du coût de la vie.
home leave | le congé dans le pays d'origine | Les expatriés ont un congé dans leur pays une fois par an.
rotation | la rotation | Le programme comprend une rotation dans trois pays.
secondment | le détachement | Elle est en détachement de six mois à Londres.
global talent | les talents internationaux | Les pays se disputent les talents internationaux.
talent visa | le visa talent | Il a obtenu un visa talent pour chercheurs en IA.
startup visa | le visa start-up | Le visa start-up attire les fondateurs étrangers.
nomad visa | le visa nomade numérique | Le Portugal propose un visa nomade pour les travailleurs à distance.
tax haven | le paradis fiscal | Il a transféré sa société dans un paradis fiscal.
foreign income | les revenus étrangers | Faut-il déclarer les revenus étrangers ?
pension portability | la transférabilité des droits à la retraite | La transférabilité des retraites compte pour les travailleurs mobiles.
heritage language | la langue d'origine | Ses enfants perdent leur langue d'origine.
hybrid identity | l'identité hybride | Vivre à l'étranger lui a donné une identité hybride.
go native | adopter complètement les mœurs locales | Au bout de cinq ans, il a adopté complètement les mœurs locales.
a stranger in a strange land | un étranger en terre étrangère | J'étais un étranger en terre étrangère.
there's no place like home | on n'est nulle part aussi bien que chez soi | On n'est nulle part aussi bien que chez soi.
out of your element | pas dans son élément | Tu ne te sentiras peut-être pas dans ton élément au début.
burn your bridges | couper les ponts | Ne coupe pas les ponts avec ton pays.
the land of opportunity | la terre de tous les possibles | Ils y voient la terre de tous les possibles.
a leap in the dark | un saut dans l'inconnu | Partir à l'étranger a été un saut dans l'inconnu.
uproot | déraciner | C'est difficile de déraciner sa famille.
greener pastures | des horizons plus prometteurs | Il est parti vers des horizons plus prometteurs.
a melting pot | un creuset ; un melting-pot | Toronto est un melting-pot.
a home away from home | une deuxième maison | Ce café est une deuxième maison.
lose touch | perdre le contact | Ne perds pas le contact avec tes amis restés au pays.
cut the cord | couper le cordon | Partir à l'étranger m'a aidé à couper le cordon.
`,
  phrases: `
My credentials aren't recognized here, so I had to get recertified. | Mes diplômes ne sont pas reconnus ici, alors j'ai dû refaire une certification.
Working abroad has broadened my perspective. | Travailler à l'étranger a élargi mes horizons.
Reverse culture shock hit me harder than I expected. | Le choc culturel inversé m'a frappé plus fort que prévu.
Moving abroad forces you to question assumptions you never knew you had. | S'installer à l'étranger oblige à remettre en question des certitudes qu'on ignorait avoir.
Cultural adaptation tends to follow a predictable curve. | L'adaptation culturelle suit en général une courbe prévisible.
The honeymoon phase rarely lasts more than a few months. | La phase de lune de miel dure rarement plus de quelques mois.
Reverse culture shock can be harder than the original move. | Le choc culturel inversé peut être plus dur que le départ lui-même.
Third culture kids often struggle to answer where they're from. | Les enfants de troisième culture ont souvent du mal à dire d'où ils viennent.
Living between two cultures can feel like belonging to neither. | Vivre entre deux cultures peut donner l'impression de n'appartenir à aucune.
Language proficiency shapes how much of yourself you can express. | Le niveau de langue détermine la part de soi qu'on peut exprimer.
I feel like a slightly different person in each language. | J'ai l'impression d'être un peu une autre personne dans chaque langue.
Humor is the last thing to translate across cultures. | L'humour est la dernière chose qui passe d'une culture à l'autre.
High-context and low-context cultures communicate very differently. | Les cultures à contexte riche et à contexte pauvre communiquent très différemment.
Saving face matters a great deal in some workplaces. | Sauver la face compte énormément dans certains milieux professionnels.
Directness can be mistaken for rudeness, and vice versa. | La franchise peut passer pour de l'impolitesse, et inversement.
Feedback styles vary enormously across cultures. | La façon de faire des retours varie énormément selon les cultures.
Hierarchy is far flatter in Scandinavian companies. | La hiérarchie est beaucoup plus plate dans les entreprises scandinaves.
Decision-making by consensus can be frustratingly slow. | La décision par consensus peut être d'une lenteur frustrante.
Building trust takes longer in relationship-based cultures. | Bâtir la confiance prend plus de temps dans les cultures fondées sur la relation.
Understanding unwritten rules is key to fitting in. | Comprendre les règles tacites est la clé pour s'intégrer.
Expats often live in a bubble that limits real integration. | Les expatriés vivent souvent dans une bulle qui limite une vraie intégration.
Integration is a two-way process. | L'intégration est un processus réciproque.
Host societies need to make newcomers feel welcome. | Les sociétés d'accueil doivent faire en sorte que les nouveaux arrivants se sentent bienvenus.
Foreign workers often face subtle discrimination. | Les travailleurs étrangers subissent souvent une discrimination insidieuse.
A foreign accent can unfairly affect how competent you seem. | Un accent étranger peut injustement influencer la compétence qu'on vous prête.
The glass ceiling can be even thicker for immigrants. | Le plafond de verre peut être encore plus épais pour les immigrés.
Credential recognition remains a major barrier for skilled migrants. | La reconnaissance des diplômes reste un obstacle majeur pour les migrants qualifiés.
Many highly qualified immigrants end up underemployed. | Beaucoup d'immigrés très qualifiés finissent en situation de sous-emploi.
Brain drain deprives developing countries of talent. | La fuite des cerveaux prive les pays en développement de leurs talents.
Brain circulation can benefit both home and host countries. | La circulation des cerveaux peut profiter au pays d'origine comme au pays d'accueil.
Remittances are a lifeline for many economies. | Les envois de fonds sont une bouée de sauvetage pour de nombreuses économies.
Migrant workers are the backbone of many industries. | Les travailleurs migrants sont la colonne vertébrale de nombreux secteurs.
Recruitment agencies sometimes charge exploitative fees. | Les agences de recrutement facturent parfois des frais abusifs.
Debt bondage traps workers in abusive situations. | La servitude pour dettes piège les travailleurs dans des situations abusives.
Tying visas to a single employer creates a power imbalance. | Lier le visa à un seul employeur crée un déséquilibre de pouvoir.
Labor protections for domestic workers are often weak. | Les protections des travailleurs domestiques sont souvent faibles.
Language barriers make it harder to report abuse. | La barrière de la langue rend plus difficile le signalement des abus.
NGOs play a vital role in supporting migrant workers. | Les ONG jouent un rôle vital dans le soutien aux travailleurs migrants.
Immigration policy is increasingly politicized. | La politique d'immigration est de plus en plus politisée.
Aging societies will need more foreign workers. | Les sociétés vieillissantes auront besoin de plus de travailleurs étrangers.
Points-based systems favor highly skilled applicants. | Les systèmes à points favorisent les candidats très qualifiés.
Digital nomad visas are attracting remote workers. | Les visas nomades numériques attirent les travailleurs à distance.
Remote work lets you earn a foreign salary from anywhere. | Le télétravail permet de toucher un salaire étranger depuis n'importe où.
Tax residency rules can get complicated for nomads. | Les règles de résidence fiscale peuvent se compliquer pour les nomades.
Double taxation agreements prevent you from paying twice. | Les conventions de non-double imposition évitent de payer deux fois.
Pension rights may not transfer between countries. | Les droits à la retraite ne se transfèrent pas toujours d'un pays à l'autre.
Social security agreements protect mobile workers. | Les accords de sécurité sociale protègent les travailleurs mobiles.
Expat packages have become far less generous. | Les packages d'expatriation sont devenus bien moins généreux.
Local-plus contracts are replacing full expat packages. | Les contrats locaux améliorés remplacent les packages d'expatriation complets.
Trailing spouses often sacrifice their own careers. | Les conjoints suiveurs sacrifient souvent leur propre carrière.
Dual-career couples face hard choices about relocation. | Les couples à double carrière font face à des choix difficiles en cas de mutation.
Assignments often fail because the family can't adjust. | Les missions échouent souvent parce que la famille ne s'adapte pas.
Cross-cultural training should be offered before departure. | Une formation interculturelle devrait être proposée avant le départ.
Repatriation is often poorly managed by employers. | Le retour des expatriés est souvent mal géré par les employeurs.
Returnees often feel their overseas experience isn't valued. | Ceux qui rentrent ont souvent l'impression que leur expérience à l'étranger n'est pas valorisée.
Many returnees leave their company within a year. | Beaucoup de ceux qui rentrent quittent leur entreprise dans l'année.
Global mobility is a strategic priority for multinationals. | La mobilité internationale est une priorité stratégique pour les multinationales.
Working across time zones demands flexibility from everyone. | Travailler sur plusieurs fuseaux horaires exige de la souplesse de la part de tous.
Global teams need a shared working language. | Les équipes internationales ont besoin d'une langue de travail commune.
Non-native speakers often contribute less in meetings. | Les non-natifs interviennent souvent moins en réunion.
Native speakers should slow down and avoid idioms. | Les locuteurs natifs devraient ralentir et éviter les expressions idiomatiques.
Global English is not the same as native English. | L'anglais international n'est pas l'anglais des natifs.
Intelligibility matters more than a native-like accent. | Être compréhensible compte plus qu'avoir un accent de natif.
Code-switching between languages becomes second nature. | Passer d'une langue à l'autre devient une seconde nature.
Maintaining your mother tongue abroad takes deliberate effort. | Entretenir sa langue maternelle à l'étranger demande un effort délibéré.
Children of migrants often lose their heritage language. | Les enfants de migrants perdent souvent leur langue d'origine.
Diaspora communities preserve traditions far from home. | Les diasporas préservent les traditions loin de chez elles.
Food is often the strongest link to home. | La nourriture est souvent le lien le plus fort avec le pays.
Homesickness tends to hit hardest during holidays. | Le mal du pays frappe le plus fort pendant les fêtes.
Loneliness is one of the most underestimated risks of moving abroad. | La solitude est l'un des risques les plus sous-estimés de l'expatriation.
Building a support network should be a priority. | Se constituer un réseau de soutien devrait être une priorité.
Mental health services in a foreign language can be hard to access. | Les services de santé mentale en langue étrangère peuvent être difficiles d'accès.
Navigating bureaucracy in a foreign language is exhausting. | Affronter la bureaucratie dans une langue étrangère est épuisant.
Patience is the most important skill for living abroad. | La patience est la compétence la plus importante pour vivre à l'étranger.
You have to be comfortable with not understanding everything. | Il faut accepter de ne pas tout comprendre.
Being an outsider gives you a fresh perspective. | Être étranger donne un regard neuf.
Living abroad makes you more aware of your own culture. | Vivre à l'étranger rend plus conscient de sa propre culture.
You start to see your home country through foreign eyes. | On commence à voir son pays avec des yeux d'étranger.
Global experience is highly valued in senior roles. | L'expérience internationale est très appréciée pour les postes de direction.
Cultural intelligence is a genuine competitive advantage. | L'intelligence culturelle est un véritable avantage concurrentiel.
Overseas experience teaches resilience like nothing else. | Rien n'apprend la résilience comme une expérience à l'étranger.
Every move involves leaving something behind. | Chaque départ implique de laisser quelque chose derrière soi.
Saying goodbye becomes a regular part of expat life. | Dire au revoir fait partie du quotidien des expatriés.
Friendships abroad are intense but often short-lived. | Les amitiés à l'étranger sont intenses mais souvent éphémères.
Home becomes less a place than a feeling. | Chez soi devient moins un lieu qu'un sentiment.
I've built a life here that I never expected. | Je me suis construit ici une vie que je n'aurais jamais imaginée.
Deciding whether to stay or return is never simple. | Décider de rester ou de rentrer n'est jamais simple.
Ageing parents back home weigh heavily on many expats. | Les parents vieillissants restés au pays pèsent lourd sur beaucoup d'expatriés.
Citizenship rules determine whether you can ever truly settle. | Les règles de nationalité déterminent si l'on peut vraiment s'installer un jour.
Dual nationality is not permitted in every country. | La double nationalité n'est pas autorisée partout.
Visa uncertainty makes it hard to plan for the future. | L'incertitude liée au visa rend difficile toute projection dans l'avenir.
Policy changes can upend migrants' lives overnight. | Un changement de politique peut bouleverser la vie des migrants du jour au lendemain.
Migration has shaped every society in history. | Les migrations ont façonné toutes les sociétés de l'histoire.
Diversity brings both richness and friction. | La diversité apporte à la fois richesse et frictions.
Immigrants contribute far more than they're often given credit for. | Les immigrés contribuent bien plus qu'on ne le reconnaît souvent.
Openness to other cultures is a learned skill. | L'ouverture aux autres cultures s'apprend.
The world feels smaller after you've lived in it. | Le monde paraît plus petit quand on y a vécu.
Going abroad was the best decision I ever made. | Partir à l'étranger a été la meilleure décision de ma vie.
Employers must not confiscate workers' passports. | Les employeurs ne doivent pas confisquer les passeports des travailleurs.
Ethical recruitment means workers pay no fees to get a job. | Le recrutement éthique signifie que les travailleurs ne paient aucun frais pour obtenir un emploi.
`,
});
