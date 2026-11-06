// 法文對照（Français）：工作職場
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
addFrench("work", {
  words: `
job | le travail ; l'emploi | J'ai un nouveau travail.
office | le bureau | Mon bureau est au cinquième étage.
boss | le patron ; le chef | Mon patron est très occupé.
meeting | la réunion | Nous avons une réunion à dix heures.
email | l'e-mail ; le courriel | Je vous envoie un e-mail.
work | travailler | Je travaille de neuf heures à dix-huit heures.
company | l'entreprise | Je travaille pour une grande entreprise.
manager | le responsable ; le directeur | Le responsable est en réunion.
computer | l'ordinateur | Mon ordinateur est très lent aujourd'hui.
phone | le téléphone | Réponds au téléphone, s'il te plaît.
lunch break | la pause déjeuner | Nous avons une heure de pause déjeuner.
start | commencer | Nous commençons le travail à neuf heures.
finish | finir | Je dois finir ce rapport aujourd'hui.
doctor | le médecin | Ma sœur est médecin.
nurse | l'infirmier ; l'infirmière | L'infirmière travaille de nuit.
engineer | l'ingénieur | Il est ingénieur logiciel.
driver | le chauffeur | Le chauffeur du bus est très sympa.
chef | le chef cuisinier | Le chef fait de délicieuses pâtes.
farmer | l'agriculteur | Mon grand-père était agriculteur.
police officer | le policier | Le policier m'a aidé à retrouver mon chemin.
clerk | l'employé ; le vendeur | Le vendeur m'a aidé à trouver ma taille.
customer | le client | Le client est roi.
money | l'argent | Je veux économiser plus d'argent.
printer | l'imprimante | L'imprimante n'a plus de papier.
file | le fichier ; le dossier | Envoie-moi le fichier, s'il te plaît.
task | la tâche | J'ai trois tâches à finir aujourd'hui.
staff | le personnel | Le personnel est très serviable.
factory | l'usine | Mon oncle travaille dans une usine.
store | le magasin | Elle travaille dans un magasin de vêtements.
day off | le jour de congé | Demain, c'est mon jour de congé.
hard-working | travailleur | Mes parents sont très travailleurs.
copy | photocopier | Tu peux me photocopier cette page ?
worker | l'ouvrier ; le travailleur | Les ouvriers construisent une nouvelle route.
plan | le plan ; le programme | Quel est le programme aujourd'hui ?
lawyer | l'avocat | Mon cousin est avocat.
pilot | le pilote | Le pilote vole vers Tokyo chaque semaine.
scientist | le scientifique | Elle est scientifique dans un laboratoire.
artist | l'artiste | C'est un artiste qui peint des fresques.
secretary | le secrétaire ; la secrétaire | La secrétaire répond au téléphone.
mechanic | le mécanicien | Le mécanicien a réparé ma voiture.
builder | l'ouvrier du bâtiment | Les ouvriers du bâtiment travaillent sur la nouvelle école.
salesperson | le vendeur ; le commercial | Le vendeur a été très serviable.
businessperson | l'homme ou la femme d'affaires | C'est une femme d'affaires qui a réussi.
dentist | le dentiste | Je vais chez le dentiste deux fois par an.
vet | le vétérinaire | Emmène le chien chez le vétérinaire.
desk | le bureau | Laisse les dossiers sur mon bureau, s'il te plaît.
laptop | l'ordinateur portable | J'emporte mon ordinateur portable au travail.
password | le mot de passe | J'ai oublié mon mot de passe.
office worker | l'employé de bureau | Beaucoup d'employés de bureau déjeunent à leur bureau.
team | l'équipe | Notre équipe compte six personnes.
work hard | travailler dur | Il faut travailler dur pour obtenir une promotion.
earn | gagner | Combien gagnes-tu ?
save | économiser | J'économise un peu d'argent chaque mois.
spend | dépenser | Ne dépense pas tout ton salaire.
sell | vendre | Nous vendons des ordinateurs.
break | la pause | Faisons une petite pause.
weekday | le jour de semaine | Je travaille en semaine.
Monday | le lundi | Je déteste les lundis.
name card | la carte de visite | Voici ma carte de visite.
sign | signer | Signez ici, s'il vous plaît.
meeting room | la salle de réunion | La salle de réunion est réservée.
coffee break | la pause-café | Discutons pendant la pause-café.
warehouse | l'entrepôt | Les cartons sont dans l'entrepôt.
on time | à l'heure | Soyez à l'heure, s'il vous plaît.
absent | absent | Tom est absent aujourd'hui.
tool | l'outil | Apporte tes outils demain.
phone call | l'appel téléphonique | J'ai un appel à trois heures.
job title | l'intitulé de poste | Quel est l'intitulé de ton poste ?
teacher | le professeur ; l'enseignant | Ma mère est enseignante.
cook | le cuisinier | Le cuisinier travaille dans un hôtel.
cashier | le caissier ; la caissière | La caissière m'a rendu la monnaie.
waiter | le serveur | Le serveur nous a apporté nos plats.
hairdresser | le coiffeur | Mon coiffeur m'a coupé les cheveux court.
photographer | le photographe | Le photographe a pris les photos du mariage.
designer | le designer ; le styliste | Elle est styliste de mode.
writer | l'écrivain | C'est un écrivain de livres pour enfants.
singer | le chanteur ; la chanteuse | Elle veut devenir chanteuse.
actor | l'acteur | L'acteur est très célèbre.
soldier | le soldat | Mon oncle est soldat.
firefighter | le pompier | Le pompier a sauvé le chat.
mail carrier | le facteur | Le facteur passe à dix heures.
cleaner | l'agent d'entretien | L'agent d'entretien passe tous les soirs.
baker | le boulanger | Le boulanger commence à quatre heures du matin.
pay | le salaire ; payer | Le salaire est bon.
busy | occupé | Je suis très occupé aujourd'hui.
free | libre | Tu es libre à trois heures ?
help | aider | Tu peux m'aider avec ça ?
call | appeler | Rappelle le client, s'il te plaît.
write | écrire | Écris la date en haut.
read | lire | Lis ce rapport, s'il te plaît.
late | en retard | Ne sois pas en retard à la réunion.
early | tôt | Je commence le travail tôt.
uniform | l'uniforme ; la tenue de travail | Les infirmières portent une tenue de travail.
badge | le badge | Montrez votre badge à l'entrée.
chair | la chaise | Ma chaise de bureau est cassée.
pen | le stylo | Signe avec un stylo bleu.
paper | le papier | L'imprimante a besoin de papier.
shop | la boutique | Elle travaille dans une boutique.
hospital | l'hôpital | Ma sœur travaille dans un hôpital.
bank | la banque | Il travaille dans une banque.
private | privé | Désolé, c'est privé.
privacy | la vie privée | Respectez ma vie privée, s'il vous plaît.
personal | personnel | Je ne parle pas de choses personnelles au travail.
secret | le secret | Tu sais garder un secret ?
gossip | les ragots ; jaser | Ne colporte pas de ragots sur tes collègues.
rumor | la rumeur | J'ai entendu une rumeur, mais je n'y crois pas.
side | le camp ; le côté | Je ne prends parti pour personne.
neutral | neutre | Je veux rester neutre.
opinion | l'opinion ; l'avis | Chacun a un avis différent.
agree | être d'accord | Je suis d'accord avec toi sur ce point.
disagree | ne pas être d'accord | Ce n'est pas grave de ne pas être d'accord.
argue | se disputer | Ils se disputent tous les jours.
fight | la dispute | Je ne veux pas me mêler de leur dispute.
careful | prudent | Fais attention à ce que tu dis.
trust | faire confiance | À qui peut-on faire confiance au travail ?
lock | verrouiller | Verrouille ton ordinateur quand tu pars.
screen | l'écran | Éteins ton écran quand tu quittes ton bureau.
post | publier | Ne publie pas de photos du bureau en ligne.
social media | les réseaux sociaux | Je n'ajoute pas mes collègues sur les réseaux sociaux.
address | l'adresse | Je ne donne pas mon adresse personnelle aux clients.
phone number | le numéro de téléphone | Merci de ne pas communiquer mon numéro de téléphone.
relationship | la relation ; la vie amoureuse | Ma vie amoureuse est privée.
quiet | discret | Garde ça pour toi, s'il te plaît.
listen | écouter | Écoute simplement et ne prends pas parti.
nod | hocher la tête | J'ai juste hoché la tête sans rien dire.
politics | la politique | Je ne parle pas de politique au travail.
topic | le sujet | Changeons de sujet.
both | tous les deux | Je travaille bien avec tous les deux.
fair | juste ; équitable | Je veux être juste envers vous deux.
blame | blâmer ; rejeter la faute | Ne rejette pas tes erreurs sur les autres.
drama | les histoires ; le drame | Je n'aime pas les histoires au bureau.
by all means | bien sûr ; je vous en prie | Bien sûr, n'hésite pas à utiliser mon bureau pendant mon absence.
take the lead | prendre la tête ; piloter | Rachel pilotera le lancement du produit.
at the end of the day | au bout du compte | Au bout du compte, c'est la satisfaction client qui compte le plus.
slack off | se relâcher ; tirer au flanc | Ne te relâche pas sous prétexte que le patron est absent.
slacker | le tire-au-flanc | Personne ne veut travailler avec un tire-au-flanc.
take credit for | s'attribuer le mérite de | Il a essayé de s'attribuer le mérite de mon idée.
miss the point | passer à côté de l'essentiel | Je crois que tu passes à côté de l'essentiel. C'est une question de sécurité, pas de coût.
get straight to the point | aller droit au but | Je vais aller droit au but : nous dépassons le budget.
`,
  phrases: `
What do you do? | Qu'est-ce que tu fais dans la vie ?
I work in marketing. | Je travaille dans le marketing.
Nice to work with you. | Ravi de travailler avec toi.
Where do you work? | Où travailles-tu ?
I work at a bank. | Je travaille dans une banque.
I'm a nurse. | Je suis infirmière.
What time do you start work? | À quelle heure commences-tu le travail ?
I start work at nine. | Je commence à neuf heures.
I finish work at six. | Je finis à dix-huit heures.
I'm at work. | Je suis au travail.
I'm going to work. | Je vais au travail.
I'm off today. | Je suis en congé aujourd'hui.
I work from Monday to Friday. | Je travaille du lundi au vendredi.
I work on weekends. | Je travaille le week-end.
Good morning, everyone. | Bonjour à tous.
This is my desk. | Voici mon bureau.
Where is the meeting room? | Où est la salle de réunion ?
The meeting is at ten. | La réunion est à dix heures.
I'm in a meeting. | Je suis en réunion.
Can I call you back? | Je peux te rappeler ?
Please send me an email. | Envoie-moi un e-mail, s'il te plaît.
I'll send it to you now. | Je te l'envoie tout de suite.
Did you get my email? | Tu as reçu mon e-mail ?
Can you help me? | Tu peux m'aider ?
I need your help. | J'ai besoin de ton aide.
I'm busy right now. | Je suis occupé en ce moment.
I have a lot of work today. | J'ai beaucoup de travail aujourd'hui.
I'm almost done. | J'ai presque fini.
I'm done! | J'ai fini !
Is it finished? | C'est fini ?
Not yet. | Pas encore.
Let's take a break. | Faisons une pause.
It's lunchtime. | C'est l'heure du déjeuner.
Let's have lunch together. | Déjeunons ensemble.
My boss is nice. | Mon patron est sympa.
My coworkers are friendly. | Mes collègues sont sympathiques.
This is my manager. | Voici ma responsable.
I have a new job. | J'ai un nouveau travail.
I like my job. | J'aime mon travail.
My job is hard. | Mon travail est dur.
I'm tired after work. | Je suis fatigué après le travail.
I work long hours. | Je fais de longues journées.
I'm late for work. | Je suis en retard au travail.
Sorry, I'm late. The bus was late. | Désolé, je suis en retard. Le bus avait du retard.
I'm sick today. | Je suis malade aujourd'hui.
I can't come to work today. | Je ne peux pas venir travailler aujourd'hui.
I need a day off. | J'ai besoin d'un jour de congé.
I'm on vacation next week. | Je suis en vacances la semaine prochaine.
The printer is broken. | L'imprimante est en panne.
Where are the pens? | Où sont les stylos ?
Can I use your computer? | Je peux utiliser ton ordinateur ?
What's the Wi-Fi password? | Quel est le mot de passe du wifi ?
Please sign here. | Signez ici, s'il vous plaît.
Here is my business card. | Voici ma carte de visite.
Welcome to the team. | Bienvenue dans l'équipe.
Thank you for your hard work. | Merci pour votre travail.
Good job, everyone! | Bravo à tous !
See you tomorrow. | À demain.
Have a good weekend. | Bon week-end.
I get paid every month. | Je suis payé tous les mois.
Payday is on Friday. | La paie tombe le vendredi.
I want a better job. | Je veux un meilleur travail.
I'm looking for a job. | Je cherche du travail.
I have a job interview tomorrow. | J'ai un entretien d'embauche demain.
I got the job! | J'ai eu le poste !
I work part-time. | Je travaille à temps partiel.
I work full-time. | Je travaille à temps plein.
I work in an office. | Je travaille dans un bureau.
I work from home. | Je travaille de chez moi.
I'm a teacher. | Je suis enseignant.
She's an engineer. | Elle est ingénieure.
He's a cook. | Il est cuisinier.
What's your job? | Quel est ton métier ?
How long have you worked here? | Depuis combien de temps travailles-tu ici ?
I've worked here for two years. | Je travaille ici depuis deux ans.
Who is in charge? | Qui est le responsable ?
Ask the manager. | Demande au responsable.
Please call the customer. | Appelle le client, s'il te plaît.
The customer is waiting. | Le client attend.
Can I help you? | Je peux vous aider ?
One moment, please. | Un instant, s'il vous plaît.
I'll check. | Je vais vérifier.
Let me ask my boss. | Je vais demander à mon patron.
Please wait here. | Attendez ici, s'il vous plaît.
The office is on the third floor. | Le bureau est au troisième étage.
I have to work late tonight. | Je dois travailler tard ce soir.
I'm going home now. | Je rentre chez moi maintenant.
Don't work too hard. | Ne te tue pas à la tâche.
Is the report ready? | Le rapport est prêt ?
Please print this for me. | Imprime-moi ça, s'il te plaît.
Make two copies, please. | Fais deux copies, s'il te plaît.
Write it down. | Note-le.
What's the date today? | On est le combien aujourd'hui ?
The deadline is Friday. | La date limite est vendredi.
Let's start. | Commençons.
Any questions? | Des questions ?
That's all for today. | C'est tout pour aujourd'hui.
I'm learning a lot at work. | J'apprends beaucoup au travail.
Can you show me how to do this? | Tu peux me montrer comment faire ?
I'll do it right away. | Je le fais tout de suite.
Sorry, that's private. | Désolé, c'est privé.
I'd rather not talk about that. | Je préfère ne pas en parler.
I keep work and home separate. | Je sépare le travail et la vie privée.
Please don't tell anyone. | Ne le dis à personne, s'il te plaît.
I won't tell anyone. | Je ne le dirai à personne.
I don't know anything about it. | Je n'en sais rien.
I'm not on anyone's side. | Je ne prends parti pour personne.
I want to stay neutral. | Je veux rester neutre.
I like you both. | Je vous aime bien tous les deux.
Please don't ask me to choose. | Ne me demandez pas de choisir, s'il vous plaît.
That's between you two. | Ça vous regarde tous les deux.
Can you talk to each other? | Vous pouvez en parler entre vous ?
Let's not talk about other people. | Ne parlons pas des autres.
I don't like gossip. | Je n'aime pas les ragots.
Is that true, or is it just a rumor? | C'est vrai, ou c'est juste une rumeur ?
I'll wait and see. | J'attends de voir.
Let's talk about something else. | Parlons d'autre chose.
I don't talk about politics at work. | Je ne parle pas de politique au travail.
I'm not sure. I'd better not say. | Je ne suis pas sûr. Je préfère ne rien dire.
That's a good question. Ask the manager. | Bonne question. Demande au responsable.
Lock your computer when you leave. | Verrouille ton ordinateur quand tu pars.
Don't leave papers on your desk. | Ne laisse pas de documents sur ton bureau.
Don't share your password. | Ne communique pas ton mot de passe.
I don't add coworkers on social media. | Je n'ajoute pas mes collègues sur les réseaux sociaux.
Please don't post that photo. | Ne publie pas cette photo, s'il te plaît.
Please don't give out my phone number. | Ne donne pas mon numéro de téléphone, s'il te plaît.
Let's keep it professional. | Restons professionnels.
It's nothing personal. | Ce n'est rien de personnel.
I just want to do my job. | Je veux juste faire mon travail.
Let's focus on the work. | Concentrons-nous sur le travail.
By all means, feel free to use my desk while I'm away. | Bien sûr, n'hésite pas à utiliser mon bureau pendant mon absence.
By all means, go ahead. | Je t'en prie, vas-y.
Just wanted to give you a heads-up that the schedule might change. | Je voulais juste te prévenir que le planning risque de changer.
Thanks for the heads-up. | Merci de m'avoir prévenu.
Rachel will take the lead on the product launch. | Rachel pilotera le lancement du produit.
Can you take the lead on this one? | Tu peux prendre ça en main ?
At the end of the day, customer satisfaction is what matters most. | Au bout du compte, c'est la satisfaction client qui compte le plus.
Stop slacking off and get back to work. | Arrête de tirer au flanc et remets-toi au travail.
He slacks off whenever the boss isn't looking. | Il se relâche dès que le patron a le dos tourné.
She took credit for the whole team's work. | Elle s'est attribué le mérite du travail de toute l'équipe.
I don't care who takes the credit. I just want it done. | Peu m'importe à qui revient le mérite. Je veux juste que ce soit fait.
I think you're missing the point. | Je crois que tu passes à côté de l'essentiel.
Let's get straight to the point. | Allons droit au but.
I'll get straight to the point: we need more time. | Je vais aller droit au but : il nous faut plus de temps.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("work", {
  words: `
colleague | le collègue | Mon collègue m'a aidé à faire le rapport.
schedule | planifier ; programmer | Programmons une réunion pour lundi.
interview | l'entretien | J'ai un entretien d'embauche demain.
salary | le salaire | Le salaire est meilleur que dans mon ancien poste.
overtime | les heures supplémentaires | J'ai dû faire des heures supplémentaires hier soir.
promotion | la promotion | Elle a eu une promotion le mois dernier.
resume | le CV | Envoyez votre CV par e-mail, s'il vous plaît.
apply | postuler | Je vais postuler à ce poste.
hire | embaucher | L'entreprise prévoit d'embaucher dix ingénieurs.
fire | licencier ; virer | Il a été licencié parce qu'il arrivait en retard tous les jours.
quit | démissionner | Elle a démissionné pour créer son entreprise.
part-time | à temps partiel | J'ai un travail à temps partiel dans un café.
full-time | à temps plein | C'est un poste à temps plein.
employee | l'employé ; le salarié | L'entreprise compte 500 salariés.
employer | l'employeur | Mon employeur paie ma formation.
client | le client | J'ai rendez-vous avec un client à quatorze heures.
department | le service ; le département | Dans quel service travailles-tu ?
project | le projet | Ce projet est à rendre le mois prochain.
report | le rapport | J'écris un rapport de ventes.
budget | le budget | Nous dépassons le budget ce trimestre.
goal | l'objectif | Notre objectif est de doubler les ventes.
feedback | le retour ; les commentaires | Merci pour ton retour sur ma présentation.
training | la formation | Les nouveaux reçoivent deux semaines de formation.
benefits | les avantages sociaux | Les avantages comprennent une assurance santé.
bonus | la prime | Nous recevons une prime de fin d'année en janvier.
contract | le contrat | Signez le contrat, s'il vous plaît.
shift | le poste ; l'équipe | Je travaille dans l'équipe de nuit.
retire | prendre sa retraite | Mon père prendra sa retraite l'an prochain.
teamwork | le travail d'équipe | Un bon travail d'équipe facilite les choses.
experience | l'expérience | Avez-vous de l'expérience dans la vente ?
qualified | qualifié | Elle est très qualifiée pour le poste.
position | le poste | Je postule au poste de responsable.
workload | la charge de travail | Ma charge de travail a doublé ce mois-ci.
job fair | le salon de l'emploi | J'ai trouvé mon travail dans un salon de l'emploi.
cover letter | la lettre de motivation | Écrivez une courte lettre de motivation.
reference | la référence | Tu peux être ma référence ?
trial period | la période d'essai | La période d'essai est de trois mois.
annual leave | les congés annuels | J'ai quatorze jours de congés annuels.
sick leave | l'arrêt maladie | Je suis en arrêt maladie aujourd'hui.
pay raise | l'augmentation de salaire | J'ai demandé une augmentation.
deadline | la date limite ; l'échéance | Nous avons manqué l'échéance.
agenda | l'ordre du jour | Qu'est-ce qu'il y a à l'ordre du jour ?
minutes | le compte rendu | Qui rédige le compte rendu ?
follow up | relancer ; faire le suivi | Je relance le client demain.
cc | mettre en copie | Mets-moi en copie de cet e-mail, s'il te plaît.
attachment | la pièce jointe | Veuillez trouver la pièce jointe.
spreadsheet | le tableur ; la feuille de calcul | J'ai mis les chiffres dans un tableur.
slides | les diapositives | Je travaille encore sur mes diapositives.
conference call | la conférence téléphonique | Nous avons une conférence téléphonique avec Tokyo à neuf heures.
business trip | le déplacement professionnel | Je pars en déplacement professionnel au Japon.
expense | la dépense ; les frais | Garde tes reçus pour les notes de frais.
reimburse | rembourser | L'entreprise te remboursera le taxi.
supervisor | le supérieur ; le responsable | Mon responsable a validé mon congé.
intern | le stagiaire | Le stagiaire apprend vite.
headquarters | le siège | Notre siège est à Hsinchu.
branch | la succursale ; l'agence | L'entreprise a une agence à Kaohsiung.
sales | les ventes | Les ventes ont été bonnes ce mois-ci.
marketing | le marketing | Elle travaille dans le marketing.
customer service | le service client | Appelez le service client pour obtenir de l'aide.
complaint | la réclamation | Nous avons reçu une réclamation d'un client.
deal | l'affaire ; le contrat | Nous avons conclu l'affaire hier.
proposal | la proposition | Envoyez-moi votre proposition d'ici vendredi.
brainstorm | faire un brainstorming | Faisons un brainstorming.
multitask | faire plusieurs choses à la fois | Je ne suis pas doué pour faire plusieurs choses à la fois.
flexible hours | les horaires flexibles | Mon entreprise propose des horaires flexibles.
resign | démissionner | Il a démissionné le mois dernier.
job description | la fiche de poste | Lisez attentivement la fiche de poste.
vacancy | le poste vacant | Il y a un poste vacant dans l'équipe commerciale.
candidate | le candidat | Nous avons reçu cinq candidats en entretien.
shortlist | la liste restreinte | J'ai été retenu sur la liste restreinte.
offer letter | la lettre d'embauche | J'ai reçu la lettre d'embauche hier.
notice period | le préavis | Mon préavis est d'un mois.
probation | la période d'essai | Je suis encore en période d'essai.
payroll | la paie | La paie est traitée le 25.
tax deduction | la retenue d'impôt | Vérifie la retenue d'impôt sur ta fiche de paie.
commission | la commission | Les commerciaux touchent une commission sur chaque vente.
incentive | la prime d'encouragement ; l'incitation | La prime est une incitation à travailler davantage.
appraisal | l'entretien annuel d'évaluation | Mon entretien annuel est la semaine prochaine.
target | l'objectif | Nous avons atteint notre objectif de ventes ce mois-ci.
invoice | la facture | Envoyez-nous une facture, s'il vous plaît.
quotation | le devis | Le fournisseur a envoyé un devis.
purchase order | le bon de commande | Il faut un bon de commande avant d'acheter.
supplier | le fournisseur | Nous avons changé de fournisseur.
vendor | le prestataire ; le fournisseur | Le fournisseur a livré les ordinateurs portables.
inventory | le stock ; l'inventaire | Nous vérifions le stock tous les vendredis.
shipment | la livraison ; l'envoi | La livraison arrive lundi.
trade show | le salon professionnel | Nous avions un stand au salon professionnel.
pitch | la présentation commerciale ; le pitch | J'ai fait un pitch au client.
presentation | la présentation | Ma présentation s'est bien passée.
dress code | le code vestimentaire | Le code vestimentaire du bureau est tenue de ville décontractée.
work from home | télétravailler | Je télétravaille le vendredi.
hybrid | hybride | Nous suivons un rythme hybride.
coworking space | l'espace de coworking | Les indépendants louent souvent un espace de coworking.
time sheet | la feuille de temps | Remplis ta feuille de temps chaque semaine.
clock in | pointer (à l'arrivée) | Je pointe à neuf heures.
clock out | pointer (au départ) | N'oublie pas de pointer en partant.
lunch meeting | le déjeuner d'affaires | Nous avons un déjeuner d'affaires avec le client.
team building | le team building | Le voyage de team building était sympa.
office party | la fête du bureau ; le pot | La fête du bureau est vendredi.
workplace | le lieu de travail | La sécurité sur le lieu de travail est importante.
confidential | confidentiel | Cette information est confidentielle.
overshare | trop en dire | Essaie de ne pas trop en dire aux nouveaux collègues.
office gossip | les ragots de bureau | Je reste en dehors des ragots de bureau.
take sides | prendre parti | Je ne veux pas prendre parti.
stay out of it | ne pas s'en mêler | Je ne vais pas m'en mêler.
mind your own business | se mêler de ses affaires | Parfois, il vaut mieux se mêler de ses affaires.
impartial | impartial | Un bon responsable est impartial.
objective | objectif | Essayons de rester objectifs.
professional | professionnel | Restons professionnels.
boundary | la limite | Il est important de poser une limite entre travail et vie privée.
clique | le clan ; la clique | Il y a un clan dans notre service.
office politics | la politique de bureau | J'essaie d'éviter les jeux de pouvoir au bureau.
backstab | poignarder dans le dos | Il m'a poignardé dans le dos pour avoir une promotion.
vent | vider son sac | Fais attention à qui tu vides ton sac.
complain | se plaindre | Ne te plains pas de ton patron pendant le déjeuner.
spread | répandre | Ne répands pas de rumeurs.
two-faced | hypocrite ; à double face | Fais attention. Il est un peu hypocrite.
tactfully | avec tact | Réponds à la question avec tact.
sensitive information | les informations sensibles | Ne parlez pas d'informations sensibles dans l'ascenseur.
need-to-know basis | selon le principe du besoin d'en connaître | Nous partageons ça uniquement avec ceux qui ont besoin de le savoir.
personal data | les données personnelles | Les RH doivent protéger vos données personnelles.
privacy settings | les paramètres de confidentialité | Vérifie tes paramètres de confidentialité.
screen lock | le verrouillage de l'écran | Active le verrouillage de l'écran sur ton téléphone.
work phone | le téléphone professionnel | Utilise ton téléphone professionnel pour les clients.
personal phone | le téléphone personnel | Je ne donne pas mon numéro personnel.
group chat | le groupe de discussion | Ne te plains pas dans le groupe de discussion du travail.
screenshot | la capture d'écran | Tout ce que tu écris peut faire l'objet d'une capture d'écran.
off the record | officieusement ; entre nous | Rien n'est jamais vraiment officieux.
keep it to yourself | le garder pour soi | Garde-le pour toi, s'il te plaît.
low profile | la discrétion | J'essaie de rester discret.
no comment | sans commentaire | Sans commentaire.
mediator | le médiateur | Les RH peuvent jouer le rôle de médiateur.
conflict | le conflit | Je ne veux pas être mêlé à leur conflit.
HR | les RH ; les ressources humaines | Parle aux RH si ça devient grave.
favoritism | le favoritisme | Le favoritisme nuit au moral de l'équipe.
on the safe side | par précaution | La présentation est prête, mais je vais en enregistrer une autre copie par précaution.
take it offline | en discuter en aparté | Discutons-en en aparté pour régler les détails séparément.
back to square one | retour à la case départ | Le système a planté avant qu'on sauvegarde, alors retour à la case départ.
by the book | dans les règles | Pendant l'audit, nous devons tout faire dans les règles.
moving parts | les éléments à coordonner | Ce lancement comporte beaucoup d'éléments à coordonner, il faut être rigoureux.
pass the buck | se renvoyer la balle | Ne te défausse pas. C'est ton projet.
shift the blame | rejeter la faute | Elle essaie toujours de rejeter la faute sur le nouveau.
clean up someone's mess | réparer les pots cassés | J'en ai assez de réparer les pots cassés des autres chaque semaine.
dump work on someone | refiler du travail à quelqu'un | Ce n'est pas juste de refiler du travail à quelqu'un juste parce qu'il ne dit jamais non.
work for nothing | travailler pour rien | Signons d'abord un contrat. Je ne veux pas travailler pour rien.
beat around the bush | tourner autour du pot | Ne tourne pas autour du pot. Dis-moi ce qui s'est passé.
pay lip service | faire de belles promesses ; ne s'engager que du bout des lèvres | Beaucoup d'entreprises ne défendent l'équilibre vie pro-vie perso que du bout des lèvres.
give credit where credit is due | rendre à César ce qui est à César | Rendons à César ce qui est à César : c'est Amy qui a fait l'essentiel du travail.
pick up the slack | prendre le relais ; compenser | Quand il est en congé, nous prenons le relais.
free rider | le profiteur | Chaque projet de groupe semble avoir un profiteur.
call it a day | s'arrêter là pour aujourd'hui | Arrêtons-nous là pour aujourd'hui.
on the same page | sur la même longueur d'onde | Nous sommes tous sur la même longueur d'onde ?
back to the drawing board | retour à la planche à dessin | Le client a dit non, alors on repart de zéro.
get the ball rolling | lancer la machine | Lançons la machine.
think outside the box | sortir des sentiers battus | Il faut sortir des sentiers battus.
up to my ears | débordé ; jusqu'au cou | Je suis débordé de travail.
a heads-up | une mise en garde ; un avertissement | Merci de m'avoir prévenu.
the bottom line | l'essentiel | L'essentiel, c'est qu'il nous faut plus de ventes.
learn the ropes | apprendre les ficelles du métier | Il faut un mois pour apprendre les ficelles du métier.
burn out | s'épuiser ; faire un burn-out | Fais des pauses, sinon tu vas t'épuiser.
keep me in the loop | me tenir informé | Tiens-moi informé, s'il te plaît.
touch base | faire le point | Faisons le point la semaine prochaine.
in the long run | à long terme | À long terme, ça permettra d'économiser de l'argent.
work your fingers to the bone | se tuer à la tâche | Ne te tue pas à la tâche.
pull your weight | faire sa part | Il faut que tu fasses ta part.
`,
  phrases: `
Let me get back to you on that. | Je reviens vers toi à ce sujet.
Could you walk me through the process? | Tu pourrais m'expliquer le processus étape par étape ?
I'm swamped with work this week. | Je suis débordé de travail cette semaine.
I'm swamped this week. | Je suis débordé cette semaine.
I'm working on a tight deadline. | J'ai un délai très serré.
Can we push the deadline back a few days? | On peut repousser l'échéance de quelques jours ?
I'll get back to you by the end of the day. | Je te réponds d'ici la fin de la journée.
Let me look into it and get back to you. | Je me renseigne et je reviens vers toi.
Could you send me the file again? | Tu pourrais me renvoyer le fichier ?
I've attached the report. | J'ai joint le rapport.
Please find the slides attached. | Veuillez trouver les diapositives en pièce jointe.
Sorry for the late reply. | Désolé pour la réponse tardive.
I'll keep you posted. | Je te tiens au courant.
Let's schedule a meeting to discuss this. | Prévoyons une réunion pour en discuter.
Does Thursday afternoon work for you? | Jeudi après-midi, ça te va ?
I'm afraid I have a conflict at that time. | J'ai bien peur d'avoir déjà quelque chose à cette heure-là.
Let's go over the agenda. | Passons en revue l'ordre du jour.
Let's get started, shall we? | On commence ?
Could you take the minutes? | Tu pourrais rédiger le compte rendu ?
Can everyone see my screen? | Tout le monde voit mon écran ?
You're on mute. | Ton micro est coupé.
Sorry, you cut out for a second. | Désolé, ça a coupé une seconde.
Let's circle back to that later. | Revenons-y plus tard.
I'd like to add something to that. | J'aimerais ajouter quelque chose.
Could you elaborate on that? | Tu pourrais développer ?
That's a fair point. | C'est un argument valable.
I see where you're coming from, but… | Je comprends ton point de vue, mais…
Let's take this offline. | Discutons-en en aparté.
What are the next steps? | Quelles sont les prochaines étapes ?
Who's responsible for this? | Qui est responsable de ça ?
I'll take care of it. | Je m'en occupe.
Let's touch base next week. | Faisons le point la semaine prochaine.
I'm working from home today. | Je télétravaille aujourd'hui.
Our team works in a hybrid model. | Notre équipe fonctionne en mode hybride.
I'm putting together a proposal. | Je prépare une proposition.
The client wants some changes. | Le client veut quelques modifications.
We need to stay within budget. | Nous devons respecter le budget.
We're behind schedule. | Nous sommes en retard sur le planning.
We're on track to finish on time. | Nous sommes en bonne voie pour finir à temps.
I need to prioritize my tasks. | Je dois hiérarchiser mes tâches.
I'm juggling too many projects. | Je jongle avec trop de projets.
Could you give me a hand with this? | Tu pourrais me donner un coup de main ?
I'll cover for you while you're away. | Je te remplace pendant ton absence.
I'm taking annual leave next week. | Je prends mes congés la semaine prochaine.
I need to request a day off. | Je dois demander un jour de congé.
I'm calling in sick today. | Je me fais porter pâle aujourd'hui.
I've been working overtime all month. | J'ai fait des heures supplémentaires tout le mois.
Do we get paid for overtime? | Les heures supplémentaires sont-elles payées ?
I'm hoping for a raise this year. | J'espère une augmentation cette année.
I got promoted to team leader. | J'ai été promu chef d'équipe.
Congratulations on your promotion! | Félicitations pour ta promotion !
I have my performance review next week. | J'ai mon entretien d'évaluation la semaine prochaine.
My manager gave me some good feedback. | Ma responsable m'a fait de bons retours.
I'm thinking about changing jobs. | Je pense changer de travail.
I handed in my resignation. | J'ai remis ma démission.
My last day is next Friday. | Mon dernier jour est vendredi prochain.
I'm updating my résumé. | Je mets à jour mon CV.
Could you tell me a bit about yourself? | Pourriez-vous vous présenter brièvement ?
What are your strengths and weaknesses? | Quels sont vos points forts et vos points faibles ?
Why do you want to work here? | Pourquoi voulez-vous travailler ici ?
Where do you see yourself in five years? | Où vous voyez-vous dans cinq ans ?
What are your salary expectations? | Quelles sont vos prétentions salariales ?
When can you start? | Quand pouvez-vous commencer ?
We'll be in touch. | Nous reviendrons vers vous.
I'm still on probation. | Je suis encore en période d'essai.
The onboarding process takes two weeks. | L'intégration dure deux semaines.
I'm still learning the ropes. | J'apprends encore les ficelles du métier.
Who should I ask about this? | À qui dois-je m'adresser pour ça ?
Our office has a flexible schedule. | Notre bureau a des horaires flexibles.
The commute is killing me. | Les trajets me tuent.
I'm burned out. | Je suis épuisé.
I need to take some time off. | J'ai besoin de prendre un peu de congé.
I love the people I work with. | J'adore les gens avec qui je travaille.
There's a lot of office politics. | Il y a beaucoup de jeux de pouvoir au bureau.
My boss is a micromanager. | Mon patron veut tout contrôler.
I have to stay late to finish this. | Je dois rester tard pour finir ça.
Let's grab lunch and talk it over. | Allons déjeuner et parlons-en.
I'm meeting a client this afternoon. | Je vois un client cet après-midi.
I'm going on a business trip next week. | Je pars en déplacement la semaine prochaine.
Could you sign off on this? | Tu pourrais valider ça ?
I need your approval before I go ahead. | J'ai besoin de ton accord avant de continuer.
We're hiring a new marketing manager. | Nous recrutons un nouveau responsable marketing.
Our company is restructuring. | Notre entreprise se restructure.
There are rumors of layoffs. | Il y a des rumeurs de licenciements.
The company is doing well this year. | L'entreprise se porte bien cette année.
We hit our sales target. | Nous avons atteint notre objectif de ventes.
Let's celebrate the launch. | Fêtons le lancement.
Thanks for your patience. | Merci pour votre patience.
I apologize for the inconvenience. | Je vous prie de nous excuser pour la gêne occasionnée.
I'll look into the problem right away. | Je me penche sur le problème tout de suite.
Let me check with the team. | Je vérifie avec l'équipe.
I'm out of the office until Monday. | Je suis absent du bureau jusqu'à lundi.
Can we keep this short? | On peut faire court ?
That meeting could have been an email. | Cette réunion aurait pu être un e-mail.
I'm not sure that's within my job description. | Je ne suis pas sûr que ça fasse partie de ma fiche de poste.
I need to set clearer boundaries at work. | Je dois poser des limites plus claires au travail.
I don't check emails after work. | Je ne consulte pas mes e-mails après le travail.
I'm proud of what our team achieved. | Je suis fier de ce que notre équipe a accompli.
Teamwork makes the dream work. | Ensemble, on va plus loin.
Could you walk me through the new system? | Tu pourrais me présenter le nouveau système pas à pas ?
I'd rather not take sides. | Je préfère ne pas prendre parti.
I'm going to stay out of this one. | Je ne vais pas me mêler de celle-là.
I can see both points of view. | Je comprends les deux points de vue.
I think you should talk to her directly. | Je pense que tu devrais lui parler directement.
I'm not the right person to ask. | Je ne suis pas la bonne personne à qui demander.
I'd prefer to hear it from him. | Je préférerais l'entendre de sa bouche.
I don't want to get involved. | Je ne veux pas m'en mêler.
Let's not jump to conclusions. | Ne tirons pas de conclusions hâtives.
I'd take that rumor with a grain of salt. | Je prendrais cette rumeur avec des pincettes.
Who told you that? | Qui t'a dit ça ?
I'd rather not comment on that. | Je préfère ne pas faire de commentaire.
Let's keep personal opinions out of the meeting. | Laissons les opinions personnelles en dehors de la réunion.
Can we stick to the facts? | On peut s'en tenir aux faits ?
I keep my private life private. | Ma vie privée reste privée.
I'm a pretty private person. | Je suis quelqu'un d'assez réservé.
My weekend was good, thanks. Nothing special. | Mon week-end s'est bien passé, merci. Rien de spécial.
That's a bit personal, don't you think? | C'est un peu personnel, tu ne trouves pas ?
I'm not comfortable sharing that. | Je ne suis pas à l'aise pour en parler.
Please keep this to yourself for now. | Garde ça pour toi pour l'instant, s'il te plaît.
Is this confidential? | C'est confidentiel ?
This is on a need-to-know basis. | Seuls ceux qui doivent le savoir sont informés.
Don't discuss clients in the elevator. | Ne parlez pas des clients dans l'ascenseur.
Be careful what you write in the group chat. | Fais attention à ce que tu écris dans le groupe.
Assume anything you write could be screenshotted. | Pars du principe que tout ce que tu écris peut être capturé.
I don't check work messages on my personal phone. | Je ne consulte pas les messages du travail sur mon téléphone personnel.
Turn on the screen lock before you leave. | Active le verrouillage de l'écran avant de partir.
Check your privacy settings on social media. | Vérifie tes paramètres de confidentialité sur les réseaux sociaux.
I don't vent about work online. | Je ne me plains pas du travail en ligne.
Don't overshare in your first few weeks. | N'en dis pas trop sur toi les premières semaines.
I try to keep a low profile at work. | J'essaie de rester discret au travail.
I'm friendly with everyone, but I don't join cliques. | Je suis aimable avec tout le monde, mais je n'entre dans aucun clan.
If it gets serious, talk to HR. | Si ça devient grave, parles-en aux RH.
Favoritism makes the whole team unhappy. | Le favoritisme rend toute l'équipe malheureuse.
I treat everyone the same. | Je traite tout le monde de la même façon.
Let's agree to disagree and move on. | Acceptons nos désaccords et passons à la suite.
The presentation is ready, but I'll save another copy to be on the safe side. | La présentation est prête, mais j'en enregistre une autre copie par précaution.
Let's add an extra day, just to be on the safe side. | Ajoutons une journée, par précaution.
Let's take this offline and work out the details separately. | Discutons-en en aparté pour régler les détails séparément.
The first design didn't meet the requirements, so we're going back to the drawing board. | La première version ne répondait pas au cahier des charges, alors on reprend tout depuis le début.
The system crashed before we saved anything, so we're back to square one. | Le système a planté avant qu'on sauvegarde quoi que ce soit, alors retour à la case départ.
Can we touch base tomorrow afternoon about the new campaign? | On peut faire le point demain après-midi sur la nouvelle campagne ?
Let's get the ball rolling by assigning tasks to each team member. | Lançons la machine en attribuant des tâches à chaque membre de l'équipe.
Before we proceed, let's make sure everyone is on the same page. | Avant de continuer, vérifions que tout le monde est sur la même longueur d'onde.
We have to do everything by the book during the audit. | Pendant l'audit, nous devons tout faire dans les règles.
This launch has a lot of moving parts, so we need to coordinate carefully. | Ce lancement comporte beaucoup d'éléments, il faut donc bien se coordonner.
Nobody wants to take responsibility. Everyone's just passing the buck. | Personne ne veut prendre ses responsabilités. Tout le monde se renvoie la balle.
Don't try to shift the blame onto me. | N'essaie pas de rejeter la faute sur moi.
Why am I always the one cleaning up your mess? | Pourquoi c'est toujours moi qui répare tes pots cassés ?
I spent the whole weekend cleaning up someone else's mess. | J'ai passé tout le week-end à réparer les erreurs de quelqu'un d'autre.
He keeps dumping his work on me. | Il n'arrête pas de me refiler son travail.
Please don't dump this on me at five o'clock on a Friday. | Ne me refile pas ça un vendredi à dix-sept heures, s'il te plaît.
They changed the requirements again. All that work was for nothing. | Ils ont encore changé le cahier des charges. Tout ce travail n'a servi à rien.
Please don't beat around the bush. Just tell me. | Ne tourne pas autour du pot, s'il te plaît. Dis-le-moi.
They pay lip service to safety, but nothing ever changes. | Ils parlent de sécurité du bout des lèvres, mais rien ne change jamais.
Let's give credit where credit is due. | Rendons à César ce qui est à César.
Thanks for picking up the slack while I was out. | Merci d'avoir pris le relais pendant mon absence.
I'm not going to do everything while he takes the credit. | Je ne vais pas tout faire pendant qu'il en récolte les lauriers.
`,
});

// ---------- 高級 Advanced ----------
addFrench("work", {
  words: `
negotiate | négocier | Nous devons négocier un meilleur contrat.
stakeholder | la partie prenante | Nous devons tenir chaque partie prenante informée.
burnout | l'épuisement professionnel ; le burn-out | Les longues journées peuvent mener au burn-out.
leverage | tirer parti de | Nous pouvons tirer parti de nos données pour améliorer les ventes.
remote work | le télétravail | Le télétravail est devenu la norme dans la tech.
deliverable | le livrable | Le livrable clé est un prototype fonctionnel.
KPI | l'indicateur clé de performance (KPI) | Chaque équipe a son propre KPI.
quarterly | trimestriel | Les résultats trimestriels ont dépassé les attentes.
revenue | le chiffre d'affaires | Le chiffre d'affaires a augmenté de vingt pour cent.
profit margin | la marge bénéficiaire | Nous devons améliorer notre marge bénéficiaire.
scalable | évolutif | La plateforme doit être évolutive.
synergy | la synergie | La fusion devrait créer une vraie synergie.
onboarding | l'intégration des nouveaux arrivants | Notre parcours d'intégration dure deux semaines.
performance review | l'entretien d'évaluation | Mon entretien d'évaluation est vendredi prochain.
layoff | le licenciement | L'entreprise a annoncé des licenciements la semaine dernière.
restructuring | la restructuration | La restructuration a touché tous les services.
entrepreneur | l'entrepreneur | C'est une entrepreneuse en série.
startup | la start-up | Il a quitté un grand groupe pour rejoindre une start-up.
venture capital | le capital-risque | La start-up a levé du capital-risque l'an dernier.
delegate | déléguer | Un bon responsable sait déléguer.
micromanage | faire du micromanagement | Ne fais pas de micromanagement avec ton équipe.
productivity | la productivité | Le télétravail a augmenté notre productivité.
workflow | le flux de travail | Le nouvel outil a simplifié notre flux de travail.
outsourcing | l'externalisation | L'externalisation a réduit les coûts mais nui à la qualité.
compliance | la conformité | La conformité aux lois sur les données est obligatoire.
headhunter | le chasseur de têtes | Un chasseur de têtes m'a contacté sur LinkedIn.
networking | le réseautage | Les événements de réseautage peuvent créer de nouvelles opportunités.
severance | l'indemnité de licenciement | Il a reçu trois mois d'indemnités de licenciement.
work ethic | l'éthique de travail | Elle a une éthique de travail incroyable.
gig economy | l'économie des petits boulots ; l'ubérisation | L'économie des petits boulots offre de la flexibilité mais peu de sécurité.
upskill | développer ses compétences | Les entreprises doivent former leurs salariés à l'IA.
proactive | proactif | Sois proactif au lieu d'attendre les instructions.
initiative | l'initiative | Elle a pris l'initiative de régler le problème.
leadership | le leadership | Un leadership solide a maintenu l'équipe unie.
accountability | la responsabilisation | Il faut plus de responsabilisation sur ce projet.
benchmark | se comparer à ; la référence | Nous comparons nos prix à ceux des concurrents.
ROI | le retour sur investissement (ROI) | Quel est le retour sur investissement de cette campagne ?
market share | la part de marché | Nous avons gagné des parts de marché au Japon.
competitive advantage | l'avantage concurrentiel | La rapidité est notre avantage concurrentiel.
value proposition | la proposition de valeur | Notre proposition de valeur doit être claire.
pivot | pivoter ; réorienter | La start-up a dû pivoter pour survivre.
disrupt | bouleverser | L'IA va bouleverser de nombreux secteurs.
bottom line | le résultat net | La nouvelle politique a pesé sur notre résultat net.
cost-cutting | la réduction des coûts | La réduction des coûts a supprimé des avantages.
merger | la fusion | La fusion a créé le plus grand fabricant de puces d'Asie.
acquisition | l'acquisition | L'acquisition valait deux milliards de dollars.
due diligence | l'audit préalable ; la due diligence | Faites un audit préalable avant d'investir.
fiscal year | l'exercice fiscal | Notre exercice se termine en mars.
projection | la prévision | Notre prévision de ventes était trop optimiste.
shareholder | l'actionnaire | Les actionnaires ont voté contre le plan.
board of directors | le conseil d'administration | Le conseil d'administration a approuvé le budget.
CEO | le PDG ; le directeur général | La PDG a annoncé sa démission.
C-suite | la direction générale | Peu de femmes accèdent à la direction générale.
succession planning | la planification de la succession | La planification de la succession est vitale pour les entreprises familiales.
corporate culture | la culture d'entreprise | Leur culture d'entreprise privilégie la vitesse aux procédures.
diversity and inclusion | la diversité et l'inclusion | L'entreprise a recruté un responsable diversité et inclusion.
psychological safety | la sécurité psychologique | La sécurité psychologique aide les équipes à prendre des risques.
quiet quitting | la démission silencieuse | La démission silencieuse traduit un profond désengagement.
disengagement | le désengagement | Le désengagement des salariés coûte des milliards aux entreprises.
four-day week | la semaine de quatre jours | Certaines entreprises testent la semaine de quatre jours.
automation | l'automatisation | L'automatisation remplace les emplois routiniers.
reskill | se reconvertir ; requalifier | Les salariés doivent se requalifier à mesure que leur métier change.
intrapreneur | l'intrapreneur | Google encourage les intrapreneurs à créer de nouveaux produits.
OKR | les OKR (objectifs et résultats clés) | Nous fixons des OKR chaque trimestre.
cross-functional | transversal | Nous avons formé une équipe transversale.
buy-in | l'adhésion | Il nous faut l'adhésion de la direction.
corporate governance | la gouvernance d'entreprise | Les investisseurs exigent une gouvernance d'entreprise solide.
fiduciary duty | l'obligation fiduciaire | Les administrateurs ont une obligation fiduciaire envers les actionnaires.
insider trading | le délit d'initié | Il a été emprisonné pour délit d'initié.
conflict of interest | le conflit d'intérêts | Veuillez déclarer tout conflit d'intérêts.
whistleblower | le lanceur d'alerte | Le lanceur d'alerte a révélé la fraude.
harassment | le harcèlement | L'entreprise applique une tolérance zéro en matière de harcèlement.
grievance | la réclamation ; le grief | Elle a déposé une réclamation auprès des RH.
collective bargaining | la négociation collective | La négociation collective a fait augmenter les salaires.
labor union | le syndicat | Le syndicat a convoqué une réunion.
strike | la grève | Les pilotes se sont mis en grève.
minimum wage | le salaire minimum | Le salaire minimum augmente chaque année.
living wage | le salaire décent | Un salaire décent couvre les besoins essentiels.
pay gap | l'écart de salaire | L'écart de salaire entre femmes et hommes se réduit lentement.
pay transparency | la transparence salariale | La transparence salariale aide à réduire les inégalités.
equity compensation | la rémunération en actions | Les start-up proposent souvent une rémunération en actions.
stock options | les stock-options | Ses stock-options l'ont rendu riche.
vesting | l'acquisition des droits | Les actions s'acquièrent sur quatre ans.
retention | la fidélisation | Fidéliser coûte moins cher que recruter.
turnover | le taux de rotation | Le taux de rotation est très élevé dans le commerce.
talent pipeline | le vivier de talents | Les stages constituent un vivier de talents.
employer branding | la marque employeur | Une marque employeur forte attire les talents.
career ladder | l'échelle professionnelle | Elle a gravi les échelons rapidement.
lateral move | la mutation latérale | Une mutation latérale peut ouvrir de nouvelles perspectives.
sabbatical | le congé sabbatique | Il a pris un congé sabbatique de six mois.
presenteeism | le présentéisme | Le présentéisme réduit la productivité.
right to disconnect | le droit à la déconnexion | La loi donne aux salariés le droit à la déconnexion.
hustle culture | la culture du surmenage | La culture du surmenage glorifie le travail excessif.
side hustle | l'activité secondaire | Elle tient une boutique en ligne en activité secondaire.
portfolio career | la carrière multiple ; le slasheur | Une carrière multiple combine plusieurs emplois.
freelancer | le freelance ; l'indépendant | En tant que freelance, je fixe mes propres horaires.
independent contractor | l'entrepreneur indépendant | Les entrepreneurs indépendants n'ont pas de congés payés.
zero-hours contract | le contrat zéro heure | Un contrat zéro heure ne garantit aucun nombre d'heures.
asynchronous | asynchrone | Notre équipe s'appuie sur la communication asynchrone.
deep work | le travail en profondeur | Je bloque mes matinées pour le travail en profondeur.
discretion | la discrétion | Je compte sur ta discrétion.
discreet | discret | Sois discret à ce sujet, s'il te plaît.
nondisclosure agreement | l'accord de confidentialité | J'ai signé un accord de confidentialité.
NDA | l'accord de confidentialité (NDA) | C'est couvert par mon accord de confidentialité.
data protection | la protection des données | Les lois sur la protection des données s'appliquent aux dossiers du personnel.
consent | le consentement | Ils ont besoin de ton consentement pour partager tes données.
monitoring | la surveillance | Renseigne-toi sur la politique de surveillance des e-mails de l'entreprise.
digital footprint | l'empreinte numérique | Pense à ton empreinte numérique.
phishing | l'hameçonnage ; le phishing | Cet e-mail ressemble à de l'hameçonnage.
social engineering | l'ingénierie sociale | L'ingénierie sociale pousse les gens à révéler leurs mots de passe.
shoulder surfing | l'espionnage par-dessus l'épaule | Un filtre de confidentialité empêche l'espionnage par-dessus l'épaule.
privacy screen | le filtre de confidentialité | J'ai mis un filtre de confidentialité sur mon ordinateur portable.
compartmentalize | cloisonner | Je cloisonne vie professionnelle et vie privée.
impartiality | l'impartialité | Les RH doivent faire preuve d'impartialité.
even-handed | équitable ; impartial | Sois équitable avec les deux équipes.
stay above the fray | rester au-dessus de la mêlée | Elle parvient à rester au-dessus de la mêlée.
caught in the crossfire | pris entre deux feux | Je ne veux pas être pris entre deux feux.
fence-sitter | l'indécis ; celui qui ménage la chèvre et le chou | Rester neutre, ce n'est pas ménager la chèvre et le chou.
political capital | le capital politique ; l'influence | Ne gaspille pas ton influence dans de petites batailles.
alliance | l'alliance | Fais attention aux alliances que tu formes.
faction | la faction ; le clan | Le bureau s'est divisé en deux clans.
power struggle | la lutte de pouvoir | Il y a une lutte de pouvoir au sommet.
hearsay | les ouï-dire | Ce ne sont que des ouï-dire.
grapevine | le téléphone arabe ; les bruits de couloir | Je l'ai appris par des bruits de couloir.
confidante | le confident ; la confidente | Choisis bien tes confidents.
TMI | trop d'informations | Désolé, c'était trop d'informations.
professional distance | la distance professionnelle | Garde une distance professionnelle avec les clients.
reputation | la réputation | Ta réputation te suit.
paper trail | la trace écrite | Garde une trace écrite de chaque décision.
document | documenter ; consigner | Consigne tout par écrit.
escalate | faire remonter | Fais remonter aux RH si ça continue.
retaliation | les représailles | Tu peux le signaler sans crainte de représailles.
loose lips sink ships | trop parler nuit | Souviens-toi, trop parler nuit.
walls have ears | les murs ont des oreilles | Fais attention. Les murs ont des oreilles.
Switzerland | la Suisse (rester neutre) | Sur ce coup-là, je suis la Suisse.
bite your tongue | se mordre la langue | Parfois, il faut juste se mordre la langue.
keep your head down | faire profil bas | Fais profil bas et travaille bien.
stay in your lane | rester à sa place | Reste à ta place et laisse-les régler ça.
not my circus, not my monkeys | ce ne sont pas mes oignons | Ce ne sont pas mes oignons.
throw someone under the bus | jeter quelqu'un sous le bus ; sacrifier quelqu'un | Ne sacrifie jamais quelqu'un pour te protéger.
act first and ask permission later | agir d'abord et demander ensuite | Il aime agir d'abord et demander la permission ensuite.
ask forgiveness, not permission | demander pardon plutôt que la permission | Sa devise : « Mieux vaut demander pardon que la permission. »
do the heavy lifting | faire le gros du travail | Les stagiaires font le gros du travail et les responsables récoltent les lauriers.
all talk and no action | que des paroles, pas d'actes | Le nouveau responsable, c'est que des paroles, pas d'actes.
climb the corporate ladder | gravir les échelons | Il veut gravir les échelons.
a foot in the door | un pied dans la porte | Ce stage, c'est un pied dans la porte.
cut corners | bâcler ; rogner sur | Ne rogne pas sur la sécurité.
go the extra mile | faire un effort supplémentaire | Fais toujours un effort supplémentaire.
get the axe | se faire virer | Trois personnes risquent de se faire virer aujourd'hui.
glass ceiling | le plafond de verre | Elle a brisé le plafond de verre dans son entreprise.
red tape | la paperasserie | Il y a trop de paperasserie.
a rat race | la course effrénée | La vie en ville est une course effrénée.
jump ship | quitter le navire | Deux ingénieurs veulent quitter le navire pour un concurrent.
low-hanging fruit | les gains rapides | Commençons par les gains rapides.
move the needle | faire bouger les lignes | Cette pub ne fera pas bouger les lignes.
corner office | le bureau d'angle ; le bureau de direction | Elle a enfin obtenu le bureau d'angle.
a sweetheart deal | un arrangement de complaisance | Les critiques ont parlé d'arrangement de complaisance.
the buck stops here | la responsabilité m'incombe | Je suis le responsable ; c'est à moi d'assumer.
put out fires | gérer les urgences | Je passe ma journée à gérer les urgences.
`,
  phrases: `
Let's circle back to this after the meeting. | Revenons-y après la réunion.
We need to align on priorities before moving forward. | Il faut nous aligner sur les priorités avant d'avancer.
I'd like to push back on that timeline. | J'aimerais contester ce calendrier.
Remote work has blurred the line between work and home. | Le télétravail a brouillé la frontière entre travail et maison.
The right to disconnect is being written into law. | Le droit à la déconnexion est en train d'être inscrit dans la loi.
Always-on culture is a fast track to burnout. | La culture du « toujours connecté » mène tout droit au burn-out.
Presenteeism is as damaging as absenteeism. | Le présentéisme est aussi néfaste que l'absentéisme.
Long hours don't necessarily mean higher productivity. | Les longues journées ne signifient pas forcément plus de productivité.
A four-day week has shown promising results in trials. | La semaine de quatre jours a donné des résultats prometteurs lors des essais.
Quiet quitting reflects a deeper disengagement. | La démission silencieuse traduit un désengagement plus profond.
Employees want purpose, not just a paycheck. | Les salariés veulent du sens, pas seulement un salaire.
Company culture is shaped by what leaders do, not what they say. | La culture d'entreprise se façonne par les actes des dirigeants, pas par leurs paroles.
Psychological safety allows teams to take risks. | La sécurité psychologique permet aux équipes de prendre des risques.
People don't leave companies; they leave managers. | On ne quitte pas une entreprise, on quitte un manager.
Toxic workplaces drive away top talent. | Les environnements toxiques font fuir les meilleurs talents.
Retention is cheaper than recruitment. | Fidéliser coûte moins cher que recruter.
The war for talent has intensified. | La guerre des talents s'est intensifiée.
Skills shortages are holding back growth. | La pénurie de compétences freine la croissance.
Upskilling is no longer optional. | Développer ses compétences n'est plus facultatif.
AI will reshape far more jobs than it replaces. | L'IA transformera bien plus d'emplois qu'elle n'en remplacera.
Automation tends to eliminate routine tasks first. | L'automatisation élimine d'abord les tâches routinières.
The gig economy offers flexibility but little security. | L'économie des petits boulots offre de la flexibilité mais peu de sécurité.
Gig workers often lack basic labor protections. | Les travailleurs des plateformes manquent souvent de protections de base.
Wage stagnation has eroded the middle class. | La stagnation des salaires a érodé la classe moyenne.
The minimum wage barely covers living costs. | Le salaire minimum couvre à peine le coût de la vie.
Pay transparency could help close the gender gap. | La transparence salariale pourrait aider à réduire l'écart entre hommes et femmes.
Women are still underrepresented in senior leadership. | Les femmes sont encore sous-représentées aux postes de direction.
Diversity initiatives must go beyond box-ticking. | Les initiatives de diversité doivent aller au-delà de la simple case à cocher.
Unconscious bias affects hiring decisions. | Les biais inconscients influencent les décisions d'embauche.
Structured interviews reduce bias in recruitment. | Les entretiens structurés réduisent les biais de recrutement.
Networking is often more effective than applying online. | Le réseautage est souvent plus efficace que les candidatures en ligne.
Many jobs are filled before they're even advertised. | Beaucoup de postes sont pourvus avant même d'être publiés.
I'm negotiating my salary package. | Je négocie ma rémunération.
Always negotiate; the first offer is rarely the best. | Négociez toujours ; la première offre est rarement la meilleure.
Equity can be worth more than a higher salary. | Des actions peuvent valoir plus qu'un salaire plus élevé.
Non-compete clauses restrict where you can work next. | Les clauses de non-concurrence limitent vos futurs employeurs.
Read your employment contract carefully. | Lisez attentivement votre contrat de travail.
Job hopping is no longer seen as a red flag. | Changer souvent d'emploi n'est plus vu comme un signal d'alarme.
Loyalty to one company rarely pays off anymore. | La fidélité à une seule entreprise paie rarement aujourd'hui.
Portfolio careers combine several part-time roles. | Les carrières multiples combinent plusieurs emplois à temps partiel.
Side hustles have become the norm for young workers. | Les activités secondaires sont devenues la norme chez les jeunes actifs.
A career change in your forties is entirely possible. | Changer de carrière à quarante ans est tout à fait possible.
Transferable skills make career pivots easier. | Les compétences transférables facilitent les reconversions.
Soft skills are increasingly valued by employers. | Les employeurs valorisent de plus en plus les compétences relationnelles.
Emotional intelligence is a key leadership trait. | L'intelligence émotionnelle est une qualité clé du leadership.
Good managers give credit and take the blame. | Les bons managers partagent les mérites et assument les erreurs.
Delegating effectively is a skill many managers lack. | Bien déléguer est une compétence qui manque à beaucoup de managers.
Micromanagement signals a lack of trust. | Le micromanagement traduit un manque de confiance.
Clear expectations prevent a lot of conflict. | Des attentes claires évitent beaucoup de conflits.
Feedback should be specific, timely and actionable. | Un retour doit être précis, rapide et exploitable.
Annual reviews are being replaced by ongoing check-ins. | Les entretiens annuels sont remplacés par des points réguliers.
Performance metrics can encourage short-term thinking. | Les indicateurs de performance peuvent encourager une vision à court terme.
What gets measured gets managed. | Ce qui se mesure se gère.
Meetings without a clear purpose waste everyone's time. | Les réunions sans objectif clair font perdre du temps à tout le monde.
Deep work requires long stretches without interruption. | Le travail en profondeur exige de longues plages sans interruption.
Open-plan offices are bad for concentration. | Les open spaces nuisent à la concentration.
Hybrid work requires deliberate coordination. | Le travail hybride exige une coordination réfléchie.
Return-to-office mandates have met fierce resistance. | Les obligations de retour au bureau ont rencontré une vive résistance.
Proximity bias favors those who are physically present. | Le biais de proximité favorise ceux qui sont physiquement présents.
Remote teams need to over-communicate. | Les équipes à distance doivent surcommuniquer.
Asynchronous communication works across time zones. | La communication asynchrone fonctionne malgré les fuseaux horaires.
Workplace harassment must be taken seriously. | Le harcèlement au travail doit être pris au sérieux.
Whistleblowers need robust legal protection. | Les lanceurs d'alerte ont besoin d'une solide protection juridique.
Labor unions are regaining momentum in some sectors. | Les syndicats regagnent du terrain dans certains secteurs.
Collective bargaining gives workers more leverage. | La négociation collective donne plus de poids aux salariés.
The strike disrupted operations for weeks. | La grève a perturbé l'activité pendant des semaines.
Layoffs have hit the tech sector hard. | Les licenciements ont durement frappé le secteur technologique.
The company announced a hiring freeze. | L'entreprise a annoncé un gel des embauches.
Severance packages vary widely. | Les indemnités de départ varient énormément.
Being laid off isn't a reflection of your worth. | Être licencié ne dit rien de ta valeur.
Burnout is an occupational phenomenon, not a personal failing. | Le burn-out est un phénomène lié au travail, pas un échec personnel.
Employers have a duty of care for staff well-being. | Les employeurs ont un devoir de protection envers le bien-être du personnel.
Mental health days should be normalized. | Les jours de repos pour santé mentale devraient être normalisés.
Overwork culture is deeply rooted in some industries. | La culture du surmenage est profondément ancrée dans certains secteurs.
Death from overwork is a recognized problem in East Asia. | La mort par surmenage est un problème reconnu en Asie de l'Est.
Productivity has risen, but wages haven't kept pace. | La productivité a augmenté, mais les salaires n'ont pas suivi.
Executive pay has soared relative to average wages. | La rémunération des dirigeants a explosé par rapport aux salaires moyens.
Stock buybacks benefit shareholders more than workers. | Les rachats d'actions profitent plus aux actionnaires qu'aux salariés.
Stakeholder capitalism considers more than just profit. | Le capitalisme des parties prenantes ne se limite pas au profit.
ESG commitments are often more talk than action. | Les engagements ESG relèvent souvent plus du discours que de l'action.
A strong employer brand attracts better candidates. | Une marque employeur forte attire de meilleurs candidats.
Glassdoor reviews can make or break a company's reputation. | Les avis Glassdoor peuvent faire ou défaire la réputation d'une entreprise.
Exit interviews reveal what really drives turnover. | Les entretiens de départ révèlent les vraies causes du turnover.
High turnover is costly and demoralizing. | Un fort turnover coûte cher et démoralise.
Mentorship programs help retain junior staff. | Les programmes de mentorat aident à fidéliser les jeunes salariés.
Career ladders need to be clearly defined. | Les parcours de carrière doivent être clairement définis.
Not everyone wants to move into management. | Tout le monde ne veut pas devenir manager.
Dual career tracks reward technical experts too. | Les doubles filières de carrière récompensent aussi les experts techniques.
Intrapreneurship encourages innovation within large firms. | L'intrapreneuriat encourage l'innovation au sein des grands groupes.
Startups offer autonomy but come with high risk. | Les start-up offrent de l'autonomie, mais comportent de gros risques.
Most startups fail within five years. | La plupart des start-up échouent dans les cinq ans.
Failure is treated as a learning experience in Silicon Valley. | Dans la Silicon Valley, l'échec est considéré comme une expérience d'apprentissage.
A culture of blame stifles innovation. | Une culture du blâme étouffe l'innovation.
Cross-functional teams break down silos. | Les équipes transversales décloisonnent les services.
Clear decision-making rights avoid endless debate. | Des droits de décision clairs évitent les débats interminables.
Disagree and commit is a useful principle. | « Exprimer son désaccord puis s'engager » est un principe utile.
Ambiguity is part of most senior roles. | L'ambiguïté fait partie de la plupart des postes à responsabilité.
Leadership is about making others better. | Diriger, c'est rendre les autres meilleurs.
I'd rather be respected than liked as a manager. | En tant que manager, je préfère être respecté qu'apprécié.
Work should be part of a good life, not the whole of it. | Le travail devrait faire partie d'une bonne vie, pas la résumer.
I appreciate you telling me, but I'd rather not get involved. | Merci de me le dire, mais je préfère ne pas m'en mêler.
I'm Switzerland on this one. | Sur ce coup-là, je reste neutre comme la Suisse.
I value my relationships with both of you. | Je tiens à ma relation avec vous deux.
I don't want to be caught in the crossfire. | Je ne veux pas être pris entre deux feux.
I'm not comfortable discussing a colleague who isn't here. | Je ne suis pas à l'aise de parler d'un collègue absent.
If you have concerns, raise them with him directly. | Si tu as des inquiétudes, parle-lui en directement.
I'll leave that to the people involved. | Je laisse ça aux personnes concernées.
Staying neutral doesn't mean having no opinion. | Rester neutre ne veut pas dire n'avoir aucune opinion.
Neutral doesn't mean silent when something is wrong. | Neutre ne veut pas dire silencieux quand quelque chose ne va pas.
If it's harassment, I won't stay neutral. I'll report it. | Si c'est du harcèlement, je ne resterai pas neutre. Je le signalerai.
Be even-handed when you deal with competing teams. | Sois équitable avec des équipes concurrentes.
Don't let office politics affect your work. | Ne laisse pas les jeux de pouvoir affecter ton travail.
Factions come and go, but your reputation stays. | Les clans passent, ta réputation reste.
Avoid forming alliances in a power struggle. | Évite de former des alliances dans une lutte de pouvoir.
What you hear through the grapevine is often wrong. | Les bruits de couloir sont souvent faux.
Don't act on hearsay. | N'agis pas sur la base d'ouï-dire.
Remember, the walls have ears. | Souviens-toi, les murs ont des oreilles.
Loose lips sink ships. | Trop parler nuit.
Sometimes it's wiser to bite your tongue. | Parfois, il est plus sage de se mordre la langue.
Keep a professional distance from clients and vendors. | Garde une distance professionnelle avec les clients et les fournisseurs.
I trust your discretion on this. | Je compte sur ta discrétion.
Please be discreet. Nothing has been announced yet. | Sois discret, s'il te plaît. Rien n'a encore été annoncé.
This is covered by a nondisclosure agreement. | C'est couvert par un accord de confidentialité.
Don't let anyone look over your shoulder at your screen. | Ne laisse personne regarder ton écran par-dessus ton épaule.
A privacy screen helps on trains and in cafés. | Un filtre de confidentialité est utile dans le train et au café.
That email looks like phishing. Don't click the link. | Cet e-mail ressemble à de l'hameçonnage. Ne clique pas sur le lien.
Never give your password to someone who calls claiming to be IT. | Ne donne jamais ton mot de passe à quelqu'un qui appelle en prétendant être du service informatique.
Find out what the company's monitoring policy is. | Renseigne-toi sur la politique de surveillance de l'entreprise.
Assume your work email isn't private. | Pars du principe que ta messagerie professionnelle n'est pas privée.
Your employer needs a legitimate reason to collect your personal data. | Ton employeur doit avoir un motif légitime pour collecter tes données personnelles.
Think twice before you post anything about work online. | Réfléchis à deux fois avant de publier quoi que ce soit sur le travail en ligne.
Keep a paper trail if a conflict starts to escalate. | Garde une trace écrite si un conflit commence à s'envenimer.
Document what happened, when and who was there. | Note ce qui s'est passé, quand et qui était présent.
Employees should be able to report problems without fear of retaliation. | Les salariés doivent pouvoir signaler des problèmes sans craindre de représailles.
Not my circus, not my monkeys. | Ce ne sont pas mes oignons.
Keep your head down and let your work speak for itself. | Fais profil bas et laisse ton travail parler pour toi.
If you're ever in London, by all means visit the museums. | Si tu passes par Londres, ne manque surtout pas les musées.
He threw his teammate under the bus to avoid taking responsibility. | Il a sacrifié son coéquipier pour éviter d'assumer ses responsabilités.
The new pricing strategy could really move the needle on sales. | La nouvelle stratégie tarifaire pourrait vraiment faire bouger les ventes.
Will this move the needle? | Est-ce que ça va vraiment changer quelque chose ?
Being on the same page doesn't always mean everyone agrees. | Être sur la même longueur d'onde ne veut pas toujours dire que tout le monde est d'accord.
Back to the drawing board means rethinking the plan; back to square one means losing our progress. | « Back to the drawing board » veut dire repenser le plan ; « back to square one », perdre tout ce qu'on avait fait.
He acted first and asked permission later, and the boss was furious. | Il a agi d'abord et demandé la permission ensuite, et le patron était furieux.
Sometimes it's easier to ask forgiveness than permission. | Parfois, il est plus facile de demander pardon que la permission.
Passing the buck only makes the problem worse. | Se renvoyer la balle ne fait qu'aggraver le problème.
A good leader takes the blame and shares the credit. | Un bon leader assume les erreurs et partage les mérites.
If you keep cleaning up his mess, he'll never learn. | Si tu continues à réparer ses pots cassés, il n'apprendra jamais.
If you're dumping work on people, at least explain why. | Si tu refiles du travail aux autres, explique au moins pourquoi.
Saying yes in the meeting and doing nothing afterward is just paying lip service. | Dire oui en réunion et ne rien faire ensuite, ce ne sont que des paroles en l'air.
`,
});
