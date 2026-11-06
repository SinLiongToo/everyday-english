// 法文對照（Français）：育・教育
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
addFrench("education", {
  words: `
teacher | le professeur ; la maîtresse | Ma maîtresse est très gentille.
homework | les devoirs | Je fais mes devoirs après le dîner.
class | le cours | Le cours d'anglais commence à huit heures.
learn | apprendre | Je veux apprendre l'anglais.
test | le contrôle ; l'examen | Nous avons un contrôle de maths demain.
library | la bibliothèque | Allons étudier à la bibliothèque.
school | l'école | Je vais à l'école à pied.
student | l'élève ; l'étudiant | C'est une bonne élève.
classroom | la salle de classe | Notre salle de classe est au deuxième étage.
book | le livre | Ouvrez votre livre à la page dix.
pen | le stylo | Je peux t'emprunter un stylo ?
pencil | le crayon | Écris ton nom au crayon.
desk | le bureau ; la table | Mon bureau est à côté de la fenêtre.
notebook | le cahier | Écris les nouveaux mots dans ton cahier.
question | la question | Je peux poser une question ?
answer | la réponse ; répondre | Quelle est la réponse à la question trois ?
read | lire | Je lis une histoire tous les soirs.
write | écrire | Écris ton nom ici, s'il te plaît.
study | étudier | J'étudie l'anglais tous les jours.
easy | facile | Ce contrôle est facile.
difficult | difficile | Les maths sont difficiles pour moi.
math | les mathématiques ; les maths | J'ai cours de maths le lundi.
science | les sciences | Nous faisons des expériences en cours de sciences.
history | l'histoire | Nous apprenons l'histoire à l'école.
art | les arts plastiques | Nous avons dessiné en arts plastiques.
lesson | la leçon | La leçon d'aujourd'hui parle des animaux.
page | la page | Allez à la page vingt, s'il vous plaît.
word | le mot | Comment dit-on ce mot ?
sentence | la phrase | Fais une phrase avec ce mot.
eraser | la gomme | Je peux utiliser ta gomme ?
backpack | le cartable ; le sac à dos | Mon cartable est très lourd.
ruler | la règle | Utilise une règle pour tracer un trait.
grade | la classe ; la note | Je suis en CM2.
subject | la matière | Quelle est ta matière préférée ?
English | l'anglais | Je parle un peu anglais.
Chinese | le chinois | Le chinois est difficile à écrire.
PE | l'EPS ; le sport | Nous jouons au basket en EPS.
geography | la géographie | J'aime les cartes, alors j'adore la géographie.
spell | épeler | Comment épelles-tu ton nom ?
count | compter | Tu sais compter jusqu'à dix en anglais ?
listen | écouter | Écoute la maîtresse.
speak | parler | Parlez lentement, s'il vous plaît.
repeat | répéter | Répétez après moi, s'il vous plaît.
know | savoir | Je ne sais pas la réponse.
think | réfléchir ; penser | Laisse-moi réfléchir.
remember | se souvenir | Je n'arrive pas à me souvenir du mot.
forget | oublier | N'oublie pas tes devoirs.
ask | demander | Demande-moi si tu as des questions.
raise your hand | lever la main | Lève la main pour parler.
board | le tableau | Regardez le tableau.
chalk | la craie | La maîtresse écrit à la craie.
glue | la colle | J'ai besoin de colle pour mon projet.
scissors | les ciseaux | Découpe le papier avec des ciseaux.
paper | le papier ; la feuille | Je peux avoir une feuille ?
crayon | le crayon de couleur ; la craie grasse | Les enfants ont colorié avec des crayons de couleur.
dictionary | le dictionnaire | Cherche-le dans le dictionnaire.
pass | réussir | J'espère réussir le contrôle.
fail | échouer ; rater | Ne t'inquiète pas si tu rates une fois.
score | la note ; le score | Quelle note as-tu eue ?
correct | correct ; juste | Ta réponse est juste.
wrong | faux | Désolé, c'est faux.
break | la récréation ; la pause | Nous avons une récréation de dix minutes.
bell | la sonnerie ; la cloche | La sonnerie retentit à midi.
principal | le directeur ; la directrice | La directrice a fait un discours.
kindergarten | l'école maternelle | Ma sœur va à l'école maternelle.
elementary school | l'école primaire | Je suis allé à l'école primaire à Tainan.
high school | le lycée | Mon frère est au lycée.
letter | la lettre | Il y a 26 lettres en anglais.
pencil case | la trousse | Ma trousse est bleue.
marker | le feutre ; le marqueur | Écris au tableau avec un feutre.
paper clip | le trombone | Attache les pages avec un trombone.
stapler | l'agrafeuse | Je peux utiliser ton agrafeuse ?
map | la carte | Trouve Taïwan sur la carte.
globe | le globe terrestre | Il y a un globe terrestre dans notre classe.
computer | l'ordinateur | Nous utilisons un ordinateur en classe.
music | la musique | Nous avons musique le lundi.
lunchbox | la boîte à repas ; la lunch box | J'ai oublié ma boîte à repas.
uniform | l'uniforme | Nous portons un uniforme à l'école.
friend | l'ami ; l'amie | C'est mon amie à l'école.
name | le nom ; le prénom | Écris ton nom sur la feuille.
number | le nombre ; le chiffre | Compte le nombre d'élèves.
color | la couleur | C'est de quelle couleur ?
shape | la forme | Le cercle est une forme.
story | l'histoire | La maîtresse nous a lu une histoire.
song | la chanson | Chantons une chanson.
game | le jeu | Nous avons fait un jeu en cours d'anglais.
play | jouer | Nous jouons dehors à la récréation.
draw | dessiner | Dessine un chat.
paint | peindre | Nous peignons des tableaux en arts plastiques.
cut | couper ; découper | Coupe le papier en deux.
explain | expliquer | Tu peux expliquer ce mot ?
help | aider | Tu peux m'aider ?
try | essayer | Essaie encore !
practice | s'entraîner ; pratiquer | Entraîne-toi à l'orthographe tous les jours.
mistake | l'erreur ; la faute | Ce n'est pas grave de faire une erreur.
quiet | silencieux ; calme | Restez silencieux à la bibliothèque, s'il vous plaît.
late | en retard | Ne sois pas en retard à l'école.
absent | absent | Tom est absent aujourd'hui.
present | présent | Tout le monde est présent.
playground | la cour de récréation | Nous jouons dans la cour de récréation.
bookstore | la librairie | Retrouvons-nous à la librairie après le déjeuner.
bookshelf | l'étagère ; le rayon | Les BD sont sur l'étagère du bas.
novel | le roman | Je cherche un bon roman à lire.
comic book | la bande dessinée ; la BD | Mon frère achète une BD chaque semaine.
magazine | le magazine | Ce magazine sort tous les mois.
author | l'auteur | Qui est l'auteur de ce livre ?
title | le titre | J'ai oublié le titre du livre.
cover | la couverture | J'adore la couverture de ce livre.
price | le prix | Quel est le prix de ce livre ?
cashier | la caisse ; le caissier | Veuillez payer à la caisse.
receipt | le ticket de caisse ; le reçu | Je peux avoir un ticket de caisse, s'il vous plaît ?
bag | le sac | Vous voulez un sac pour vos livres ?
bookmark | le marque-page | J'ai eu un marque-page gratuit avec mon livre.
`,
  phrases: `
Can you say that again, please? | Vous pouvez répéter, s'il vous plaît ?
What does this word mean? | Que veut dire ce mot ?
How do you spell it? | Comment ça s'écrit ?
Good morning, teacher. | Bonjour, maîtresse.
Open your books, please. | Ouvrez vos livres, s'il vous plaît.
Turn to page ten. | Allez à la page dix.
Close your books. | Fermez vos livres.
Listen carefully. | Écoutez bien.
Repeat after me. | Répétez après moi.
Read it out loud. | Lis-le à voix haute.
Can you say that again? | Tu peux répéter ?
Please speak slowly. | Parlez lentement, s'il vous plaît.
I don't understand. | Je ne comprends pas.
I have a question. | J'ai une question.
Can I ask a question? | Je peux poser une question ?
How do you say this in English? | Comment on dit ça en anglais ?
Raise your hand. | Levez la main.
Sit down, please. | Asseyez-vous, s'il vous plaît.
Stand up, please. | Levez-vous, s'il vous plaît.
Be quiet, please. | Silence, s'il vous plaît.
Work in pairs. | Travaillez par deux.
Work in groups of four. | Travaillez par groupes de quatre.
Write your name here. | Écris ton nom ici.
Take out a pen. | Sortez un stylo.
Can I borrow a pencil? | Je peux t'emprunter un crayon ?
I forgot my book. | J'ai oublié mon livre.
Where is my homework? | Où sont mes devoirs ?
I finished my homework. | J'ai fini mes devoirs.
I didn't do my homework. | Je n'ai pas fait mes devoirs.
Hand in your homework. | Rendez vos devoirs.
The test is on Friday. | Le contrôle est vendredi.
I have a test tomorrow. | J'ai un contrôle demain.
I need to study tonight. | Je dois réviser ce soir.
I passed the test! | J'ai réussi le contrôle !
I failed the test. | J'ai raté le contrôle.
I got a good grade. | J'ai eu une bonne note.
What did you get? | Tu as eu combien ?
Let's study together. | Révisons ensemble.
Can you help me with this? | Tu peux m'aider avec ça ?
Is this right? | C'est juste ?
That's correct. | C'est correct.
That's wrong. Try again. | C'est faux. Essaie encore.
Good job! | Bon travail !
Well done! | Bravo !
What's the answer? | Quelle est la réponse ?
I know the answer. | Je connais la réponse.
I don't know. | Je ne sais pas.
Let me think. | Laisse-moi réfléchir.
Look at the board. | Regardez le tableau.
Copy this down. | Recopiez ceci.
Can I go to the bathroom? | Je peux aller aux toilettes ?
Class starts at eight. | Le cours commence à huit heures.
Don't be late for class. | Ne sois pas en retard en cours.
Sorry I'm late. | Désolé, je suis en retard.
It's time for lunch. | C'est l'heure du déjeuner.
School is over. | L'école est finie.
See you tomorrow. | À demain.
What's your favorite subject? | Quelle est ta matière préférée ?
I like math. | J'aime les maths.
English is fun. | L'anglais, c'est amusant.
Science is hard for me. | Les sciences sont difficiles pour moi.
I go to school by bus. | Je vais à l'école en bus.
My school is big. | Mon école est grande.
I'm in grade five. | Je suis en CM2.
Who is your teacher? | Qui est ton professeur ?
My teacher is very kind. | Ma maîtresse est très gentille.
I have many friends at school. | J'ai beaucoup d'amis à l'école.
Where is the library? | Où est la bibliothèque ?
I want to borrow this book. | Je voudrais emprunter ce livre.
Return the book next week. | Rends le livre la semaine prochaine.
Let's go to the playground. | Allons dans la cour.
We have PE today. | On a sport aujourd'hui.
I'm good at drawing. | Je suis doué en dessin.
Practice makes perfect. | C'est en forgeant qu'on devient forgeron.
Write a short story. | Écris une petite histoire.
Draw a picture. | Fais un dessin.
Use a ruler. | Utilise une règle.
Erase it. | Efface-le.
Check your spelling. | Vérifie ton orthographe.
Count to ten. | Compte jusqu'à dix.
Two plus two is four. | Deux plus deux égale quatre.
What time is it now? | Quelle heure est-il ?
Read this page. | Lis cette page.
Learn these words. | Apprends ces mots.
Do your best. | Fais de ton mieux.
Don't give up. | N'abandonne pas.
I'm learning English. | J'apprends l'anglais.
I want to speak English well. | Je veux bien parler anglais.
English is useful. | L'anglais est utile.
I study every day. | J'étudie tous les jours.
My bag is heavy. | Mon cartable est lourd.
I have three classes today. | J'ai trois cours aujourd'hui.
Is there school tomorrow? | Il y a école demain ?
Summer vacation starts next week. | Les grandes vacances commencent la semaine prochaine.
I like my school. | J'aime mon école.
Thank you, teacher. | Merci, maîtresse.
Please write it on the board. | Écrivez-le au tableau, s'il vous plaît.
I can't see the board. | Je ne vois pas le tableau.
Let's check the answers. | Corrigeons les réponses.
Can I sit here? | Je peux m'asseoir ici ?
Is there a bookstore near here? | Il y a une librairie près d'ici ?
I'm looking for a book. | Je cherche un livre.
Where are the children's books? | Où sont les livres pour enfants ?
Where can I find English books? | Où se trouvent les livres en anglais ?
Do you have this book? | Vous avez ce livre ?
How much is this book? | Combien coûte ce livre ?
Can I read it here? | Je peux le lire ici ?
I'm just looking, thanks. | Je regarde seulement, merci.
I'll take this one. | Je prends celui-ci.
Can I pay by card? | Je peux payer par carte ?
Do you have a bag? | Vous avez un sac ?
This book looks interesting. | Ce livre a l'air intéressant.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("education", {
  words: `
major | la spécialité ; la matière principale | Ma spécialité, c'est l'informatique.
scholarship | la bourse d'études | Elle a obtenu une bourse pour étudier à l'étranger.
deadline | la date limite | La date limite du rapport est vendredi.
semester | le semestre | Ce semestre, je suis cinq cours.
tuition | les frais de scolarité | Les frais de scolarité augmentent chaque année.
graduate | obtenir son diplôme | J'obtiendrai mon diplôme en juin prochain.
assignment | le devoir ; le travail à rendre | Le devoir est à rendre lundi prochain.
essay | la dissertation ; la rédaction | Je dois écrire une dissertation de 1 000 mots.
presentation | l'exposé | Je suis nerveux pour mon exposé de demain.
research | la recherche | Elle fait des recherches sur le plastique dans les océans.
lecture | le cours magistral | Le cours magistral était long mais intéressant.
professor | le professeur d'université | Mon professeur nous a donné des lectures supplémentaires.
campus | le campus | Le campus est magnifique au printemps.
dormitory | la résidence universitaire | J'habite dans une résidence universitaire sur le campus.
credit | le crédit (ECTS) | Ce cours vaut trois crédits.
textbook | le manuel | Le manuel coûte presque deux mille dollars.
midterm | l'examen de mi-semestre ; le partiel | Comment s'est passé ton partiel ?
attendance | l'assiduité ; la présence | L'assiduité compte pour dix pour cent de la note.
cheat | tricher | Les étudiants qui trichent échoueront au cours.
tutor | le professeur particulier | J'ai un professeur particulier de maths deux fois par semaine.
cram school | l'école de soutien scolaire (buxiban) | Beaucoup d'élèves taïwanais vont dans une école de soutien après les cours.
enroll | s'inscrire | Je veux m'inscrire à un cours de japonais.
degree | le diplôme | Elle a un diplôme d'économie.
bachelor's | la licence | Il a fini sa licence en quatre ans.
master's | le master | Je postule pour un master en design.
internship | le stage | Je fais un stage cet été.
extracurricular | extrascolaire | Les activités extrascolaires font bonne impression dans un dossier.
study abroad | étudier à l'étranger | J'espère étudier à l'étranger, au Canada.
review | réviser | Révisons le vocabulaire avant le contrôle.
memorize | apprendre par cœur ; mémoriser | J'apprends dix nouveaux mots par cœur chaque jour.
skip class | sécher les cours | Ne sèche pas les cours avant l'examen.
group project | le projet de groupe | Notre projet de groupe est à rendre la semaine prochaine.
handout | le polycopié | Prenez un polycopié et faites passer le reste.
pop quiz | l'interrogation surprise | Nous avons eu une interrogation surprise aujourd'hui.
GPA | la moyenne générale | Ma moyenne générale a baissé ce semestre.
transcript | le relevé de notes | Veuillez joindre votre relevé de notes.
diploma | le diplôme | J'ai reçu mon diplôme en juin.
certificate | le certificat | J'ai obtenu un certificat de japonais.
elective | le cours optionnel | Je suis un cours optionnel de cinéma.
required course | le cours obligatoire | Le calcul différentiel est un cours obligatoire.
prerequisite | le prérequis | Les statistiques sont un prérequis pour ce cours.
office hours | les heures de permanence | Va aux heures de permanence si tu ne comprends pas.
teaching assistant | l'assistant d'enseignement ; le chargé de TD | Le chargé de TD corrige nos travaux pratiques.
lab | les travaux pratiques (TP) | Nous avons TP de chimie le jeudi.
seminar | le séminaire | Le séminaire ne compte que douze étudiants.
club | le club | Je me suis inscrit au club photo.
student council | le conseil des élèves ; le bureau des étudiants | Elle a été élue au conseil des élèves.
exchange student | l'étudiant en échange | Nous avons une étudiante en échange qui vient de France.
entrance exam | l'examen d'entrée ; le concours | L'examen d'entrée a lieu en juillet.
college | l'université ; la fac | Dans quelle université veux-tu aller ?
university | l'université | L'Université nationale de Taïwan est à Taipei.
online course | le cours en ligne | Je suis un cours en ligne de Python.
due | à rendre | Le rapport est à rendre vendredi.
submit | rendre ; soumettre | Rendez vos devoirs en ligne.
proofread | relire | Relis toujours ta dissertation.
outline | le plan | Fais un plan avant de commencer.
draft | le brouillon | Ce n'est que mon premier brouillon.
take notes | prendre des notes | Je prends des notes sur mon ordinateur portable.
attend | assister à | Vous devez assister à tous les cours.
retake | repasser ; redoubler une matière | Je dois repasser la chimie.
dropout | le décrocheur ; l'élève en décrochage | Il a décroché à seize ans.
graduate school | les études de troisième cycle ; le master | Elle postule pour un master.
student loan | le prêt étudiant | Je rembourse encore mon prêt étudiant.
motivation | la motivation | J'ai perdu ma motivation après les partiels.
concentrate | se concentrer | Je n'arrive pas à me concentrer avec de la musique.
strict | strict ; sévère | Notre professeur est sévère mais juste.
course | le cours | Je suis un cours de marketing.
module | le module | Ce module porte sur la grammaire.
quiz | l'interro | Nous avons une interro de vocabulaire vendredi.
final exam | l'examen final | L'examen final compte pour la moitié de la note.
report card | le bulletin scolaire | Mes parents étaient contents de mon bulletin.
parent-teacher meeting | la réunion parents-professeurs | La réunion parents-professeurs est jeudi.
field trip | la sortie scolaire | Nous avons fait une sortie scolaire au musée.
graduation | la remise des diplômes | Ma remise de diplôme est en juin.
ceremony | la cérémonie | La cérémonie commence à dix heures.
classmate | le camarade de classe | C'était ma camarade de classe au lycée.
senior | l'élève de dernière année | Il est en dernière année cette année.
freshman | l'étudiant de première année | Tous les étudiants de première année vivent en résidence.
sophomore | l'étudiant de deuxième année | Je suis en deuxième année de biologie.
junior | l'étudiant de troisième année | Elle est en troisième année à l'Université nationale de Taïwan.
library card | la carte de bibliothèque | Il faut une carte de bibliothèque pour emprunter des livres.
study group | le groupe de travail ; le groupe de révision | Notre groupe de révision se réunit chaque mercredi.
extension | le délai supplémentaire | Je peux avoir un délai supplémentaire pour ma dissertation ?
recommendation letter | la lettre de recommandation | Mon professeur m'a écrit une lettre de recommandation.
personal statement | la lettre de motivation | Je travaille encore sur ma lettre de motivation.
application | la candidature | J'ai envoyé ma candidature en ligne.
acceptance letter | la lettre d'admission | J'ai reçu ma lettre d'admission aujourd'hui !
waiting list | la liste d'attente | Je suis sur la liste d'attente pour ce cours.
interview | l'entretien | L'école m'a convoqué à un entretien.
part-time job | le petit boulot ; le travail à temps partiel | J'ai un petit boulot dans un café.
language exchange | l'échange linguistique | J'ai trouvé un partenaire d'échange linguistique.
proficiency | le niveau ; la maîtrise | Il faut une preuve de votre niveau d'anglais.
fluent | courant ; bilingue | Elle parle couramment trois langues.
vocabulary | le vocabulaire | La lecture aide à enrichir son vocabulaire.
grammar | la grammaire | La grammaire anglaise peut être piégeuse.
pronunciation | la prononciation | Sa prononciation est très claire.
accent | l'accent | Il a un léger accent britannique.
procrastinate | procrastiner ; remettre à plus tard | Je procrastine toujours avant les examens.
cram | bachoter | J'ai dû bachoter pour le contrôle.
all-nighter | la nuit blanche | J'ai fait une nuit blanche pour finir mon mémoire.
bestseller | le best-seller | Ce best-seller s'est vendu à un million d'exemplaires.
paperback | le livre de poche | Le livre de poche est moins cher et plus léger.
hardcover | l'édition reliée | J'ai acheté l'édition reliée pour l'offrir.
edition | l'édition | C'est la dernière édition ?
in stock | en stock | Vous avez ce livre en stock ?
out of stock | épuisé ; en rupture de stock | Désolé, ce titre est en rupture de stock.
order in | commander | Nous pouvons vous le commander.
genre | le genre | Le polar est mon genre préféré.
section | le rayon | Où est le rayon voyages ?
browse | flâner ; feuilleter | J'aime flâner dans les rayons le week-end.
blurb | la quatrième de couverture | La quatrième de couverture m'a donné envie de le lire.
gift wrap | faire un paquet cadeau | Vous pourriez me faire un paquet cadeau pour ce livre ?
membership card | la carte de fidélité | Les membres ont dix pour cent de réduction avec la carte de fidélité.
secondhand bookstore | la librairie d'occasion ; le bouquiniste | J'ai trouvé un livre rare chez un bouquiniste.
book signing | la séance de dédicaces | L'auteur fait une séance de dédicaces samedi.
hit the books | se plonger dans les livres ; bûcher | Je dois bûcher ce soir.
by heart | par cœur | Apprenez ces mots par cœur.
teacher's pet | le chouchou du prof | Tout le monde l'appelle le chouchou du prof.
pass with flying colors | réussir haut la main | J'espère réussir haut la main.
copycat | le copieur ; le copieur-colleur | Ne sois pas un copieur.
brainstorm | faire un remue-méninges | Faisons un remue-méninges pour trouver des idées.
bookworm | le rat de bibliothèque | Ma sœur est un vrai rat de bibliothèque.
cut class | sécher les cours | Il a séché les cours pour jouer aux jeux vidéo.
school of thought | le courant de pensée ; l'école | Selon un courant de pensée, les devoirs sont utiles.
know the ropes | connaître les ficelles | Demande à Amy, elle doit connaître les ficelles.
show of hands | le vote à main levée | Votons à main levée.
by the book | dans les règles ; selon le règlement | Notre professeur fait tout selon le règlement.
draw a blank | avoir un trou | J'ai toujours un trou pour les noms.
crack the books | se mettre au travail ; ouvrir ses bouquins | C'est l'heure d'ouvrir ses bouquins.
`,
  phrases: `
I'm cramming for my final exam. | Je bachote pour mon examen final.
Could I get an extension on the assignment? | Est-ce que je pourrais avoir un délai pour le devoir ?
What are you planning to do after you graduate? | Qu'est-ce que tu comptes faire après ton diplôme ?
I'm majoring in economics. | Je fais des études d'économie.
What are you studying at university? | Qu'est-ce que tu étudies à l'université ?
I'm in my second year. | Je suis en deuxième année.
I'm minoring in Japanese. | Je prends le japonais en matière secondaire.
When is the deadline for the assignment? | Quelle est la date limite pour le devoir ?
Can I get an extension on my essay? | Je peux avoir un délai pour ma dissertation ?
I pulled an all-nighter to finish my paper. | J'ai fait une nuit blanche pour finir mon devoir.
I'm cramming for my finals. | Je bachote pour mes examens de fin d'année.
The midterm was harder than I expected. | Le partiel était plus dur que prévu.
I think I did pretty well on the exam. | Je pense que j'ai plutôt bien réussi l'examen.
I need to retake the course. | Je dois repasser ce cours.
Attendance counts for 10 percent of the grade. | L'assiduité compte pour 10 % de la note.
The professor is really strict about plagiarism. | Le professeur est très strict sur le plagiat.
Make sure you cite your sources. | N'oublie pas de citer tes sources.
Could you explain that part again? | Vous pourriez réexpliquer cette partie ?
I'm not sure I follow. | Je ne suis pas sûr de suivre.
Could you give an example? | Vous pourriez donner un exemple ?
What's the difference between these two? | Quelle est la différence entre les deux ?
I take notes on my laptop. | Je prends des notes sur mon ordinateur portable.
Can I borrow your notes from last week? | Je peux t'emprunter tes notes de la semaine dernière ?
We have a group project due next Monday. | Nous avons un projet de groupe à rendre lundi prochain.
Let's divide up the work. | Répartissons le travail.
One person isn't pulling their weight. | Quelqu'un ne fait pas sa part.
I'm giving a presentation tomorrow. | Je fais un exposé demain.
I get nervous speaking in front of the class. | Je suis nerveux quand je parle devant la classe.
Let's form a study group. | Formons un groupe de révision.
The library is open until midnight during exams. | La bibliothèque est ouverte jusqu'à minuit pendant les examens.
I study better in a quiet place. | J'étudie mieux dans un endroit calme.
I'm applying for a scholarship. | Je fais une demande de bourse.
The tuition fees are very high. | Les frais de scolarité sont très élevés.
I took out a student loan. | J'ai contracté un prêt étudiant.
I work part-time to pay for school. | Je travaille à temps partiel pour payer mes études.
I'm thinking about studying abroad. | Je pense à étudier à l'étranger.
What do I need to apply? | De quoi ai-je besoin pour postuler ?
You need a recommendation letter. | Il te faut une lettre de recommandation.
I'm writing my personal statement. | J'écris ma lettre de motivation.
I got accepted to my first-choice school! | J'ai été admis dans l'école de mon premier choix !
I didn't get in. | Je n'ai pas été admis.
I'm on the waiting list. | Je suis sur liste d'attente.
What's the entry requirement for this program? | Quelles sont les conditions d'admission de ce programme ?
I need to take an English proficiency test. | Je dois passer un test de niveau d'anglais.
My IELTS score wasn't high enough. | Mon score à l'IELTS n'était pas assez élevé.
I'm taking an online course in data science. | Je suis un cours en ligne de science des données.
Online classes require a lot of self-discipline. | Les cours en ligne demandent beaucoup d'autodiscipline.
I learn best by doing. | J'apprends mieux en pratiquant.
Some students learn better visually. | Certains élèves apprennent mieux de façon visuelle.
I can't concentrate for more than an hour. | Je n'arrive pas à me concentrer plus d'une heure.
Take regular breaks when you study. | Fais des pauses régulières quand tu étudies.
I've been procrastinating all week. | J'ai procrastiné toute la semaine.
I need to manage my time better. | Je dois mieux gérer mon temps.
My kids go to cram school after class. | Mes enfants vont en cours de soutien après l'école.
Homework takes up their whole evening. | Les devoirs leur prennent toute la soirée.
There's too much pressure on students. | Les élèves subissent trop de pression.
Parents' night is next Thursday. | La réunion des parents est jeudi prochain.
The teacher said he's doing well. | Le professeur a dit qu'il se débrouillait bien.
She needs some extra help with math. | Elle a besoin d'un peu d'aide en maths.
We hired a tutor for him. | Nous lui avons pris un professeur particulier.
Which elective are you taking? | Quelle option est-ce que tu prends ?
The course is fully booked. | Le cours est complet.
I dropped the class. | J'ai abandonné ce cours.
The lecture was really interesting. | Le cours était vraiment intéressant.
The professor's lectures are a bit dry. | Les cours du professeur sont un peu arides.
I fell asleep in class. | Je me suis endormi en cours.
Office hours are on Wednesday afternoon. | Les heures de permanence sont le mercredi après-midi.
I emailed my professor about my grade. | J'ai écrit un e-mail à mon professeur au sujet de ma note.
My thesis is due in June. | Mon mémoire est à rendre en juin.
My supervisor gave me some useful feedback. | Mon directeur de mémoire m'a fait des remarques utiles.
I'm graduating next summer. | J'obtiens mon diplôme l'été prochain.
Congratulations on your graduation! | Félicitations pour ton diplôme !
What are you going to do after graduation? | Que vas-tu faire après ton diplôme ?
I want to go on to graduate school. | Je veux poursuivre en master.
I'm taking a gap year. | Je prends une année sabbatique.
Learning a language takes time. | Apprendre une langue prend du temps.
I practice speaking with a language partner. | Je pratique l'oral avec un partenaire d'échange linguistique.
I watch movies with English subtitles. | Je regarde des films avec des sous-titres en anglais.
My listening is better than my speaking. | Je comprends mieux à l'oral que je ne parle.
Grammar is my weak point. | La grammaire, c'est mon point faible.
I keep a vocabulary notebook. | J'ai un carnet de vocabulaire.
Spaced repetition really helps me remember words. | La répétition espacée m'aide vraiment à retenir les mots.
Don't be afraid to make mistakes. | N'aie pas peur de faire des erreurs.
It's never too late to learn. | Il n'est jamais trop tard pour apprendre.
I'm taking an evening class in photography. | Je suis un cours du soir de photographie.
The school has excellent facilities. | L'école a d'excellentes installations.
Class sizes are getting smaller. | Les effectifs des classes diminuent.
The school is known for its science program. | L'école est connue pour sa filière scientifique.
Students have to wear uniforms. | Les élèves doivent porter un uniforme.
The school year starts in September. | L'année scolaire commence en septembre.
We have a field trip next week. | Nous avons une sortie scolaire la semaine prochaine.
The exam results come out next month. | Les résultats de l'examen sortent le mois prochain.
I'm proud of how much I've improved. | Je suis fier de mes progrès.
I want to get a certificate in this field. | Je veux obtenir un certificat dans ce domaine.
Education opens doors. | L'éducation ouvre des portes.
I learned more from my mistakes than from textbooks. | J'ai plus appris de mes erreurs que des manuels.
Good teachers can change your life. | Les bons professeurs peuvent changer une vie.
I still keep in touch with my old teacher. | Je suis toujours en contact avec mon ancien professeur.
Could you look over my essay before I hand it in? | Tu pourrais relire ma dissertation avant que je la rende ?
The reading list for this course is huge. | La liste de lectures de ce cours est énorme.
Could you help me find a book? I only know the author's name. | Vous pourriez m'aider à trouver un livre ? Je ne connais que le nom de l'auteur.
Do you have this in paperback? | Vous l'avez en poche ?
Is this the newest edition? | C'est la dernière édition ?
When will it be back in stock? | Quand sera-t-il de nouveau en stock ?
Could you order it in for me? | Vous pourriez me le commander ?
Can you call me when it arrives? | Vous pouvez m'appeler quand il arrive ?
Can I return it if it's a gift? | Je peux le rendre si c'est un cadeau ?
Could you gift wrap it, please? | Vous pourriez faire un paquet cadeau, s'il vous plaît ?
Do members get a discount? | Les membres ont-ils une réduction ?
What are your best sellers this month? | Quelles sont vos meilleures ventes ce mois-ci ?
Can you recommend a good mystery novel? | Vous pouvez me conseiller un bon polar ?
Is there a café inside the bookstore? | Il y a un café dans la librairie ?
`,
});

// ---------- 高級 Advanced ----------
addFrench("education", {
  words: `
curriculum | le programme scolaire | Le nouveau programme met l'accent sur l'esprit critique.
rote learning | l'apprentissage par cœur | L'apprentissage par cœur seul ne construit pas une vraie compréhension.
dissertation | la thèse de doctorat | Il écrit sa thèse sur la politique climatique.
lifelong learning | la formation tout au long de la vie | La formation tout au long de la vie est essentielle dans une économie qui change.
equity | l'équité | L'équité scolaire reste un défi majeur.
pedagogy | la pédagogie | Sa pédagogie repose sur l'apprentissage par projets.
academia | le monde universitaire | Elle a quitté le monde universitaire pour travailler dans l'industrie.
thesis | le mémoire ; la thèse | Mon mémoire de master porte sur les îlots de chaleur urbains.
peer review | l'évaluation par les pairs | L'article est en cours d'évaluation par les pairs.
plagiarism | le plagiat | Le plagiat peut entraîner une exclusion.
citation | la citation ; la référence | Chaque référence doit suivre les normes APA.
methodology | la méthodologie | Votre méthodologie doit être plus claire.
hypothesis | l'hypothèse | Les données n'ont pas confirmé notre hypothèse.
empirical | empirique | Il nous faut davantage de preuves empiriques.
literacy | l'alphabétisation ; la littératie | La culture numérique est aussi importante que la lecture.
vocational | professionnel | Les lycées professionnels forment les élèves à des métiers précis.
tertiary | supérieur | L'enseignement supérieur se développe dans toute l'Asie.
meritocracy | la méritocratie | Certains estiment que les examens créent une fausse impression de méritocratie.
admissions | les admissions | Les admissions à l'université sont très sélectives.
accreditation | l'accréditation | Le programme a reçu une accréditation internationale.
tenure | la titularisation | Elle a été titularisée au bout de sept ans.
faculty | le corps enseignant | Le corps enseignant a voté la nouvelle politique.
alumni | les anciens élèves | Les anciens élèves ont donné de l'argent pour une nouvelle bibliothèque.
endowment | la dotation ; le fonds de dotation | Harvard possède la plus grosse dotation de toutes les universités.
holistic | global ; holistique | Ils ont une approche globale de l'éducation.
bilingual | bilingue | Taïwan développe l'enseignement bilingue.
inclusive | inclusif | Les classes inclusives accompagnent les élèves en situation de handicap.
cognitive | cognitif | Le sommeil influe sur les performances cognitives.
metacognition | la métacognition | La métacognition, c'est réfléchir à sa propre façon de penser.
autonomy | l'autonomie | Les enseignants veulent plus d'autonomie en classe.
assessment | l'évaluation | L'évaluation devrait aller au-delà des QCM.
syllabus | le plan de cours | Consultez le plan de cours pour la liste de lectures.
mentor | le mentor | Un bon mentor peut changer une carrière.
flipped classroom | la classe inversée | Dans une classe inversée, les élèves regardent les cours à la maison.
blended learning | l'apprentissage hybride | L'apprentissage hybride combine cours en ligne et en présentiel.
differentiated instruction | la pédagogie différenciée | La pédagogie différenciée répond aux besoins de chaque élève.
formative assessment | l'évaluation formative | L'évaluation formative guide l'enseignement pendant le trimestre.
rubric | la grille d'évaluation | La grille d'évaluation explique comment les dissertations sont notées.
scaffolding | l'étayage | L'étayage aide les élèves à aborder des tâches complexes.
inquiry-based | par investigation ; par démarche d'enquête | L'apprentissage par investigation part de questions.
STEM | les sciences et technologies (STIM) | Les filles sont sous-représentées dans les STIM.
humanities | les sciences humaines ; les lettres | Le financement des sciences humaines diminue.
liberal arts | les arts libéraux ; la formation pluridisciplinaire | Une formation en arts libéraux apprend à penser largement.
interdisciplinary | interdisciplinaire | Le programme est interdisciplinaire.
attainment | le niveau d'études ; la réussite scolaire | Le revenu des parents prédit le niveau d'études.
achievement gap | l'écart de réussite | L'écart de réussite s'est creusé pendant la pandémie.
dropout rate | le taux de décrochage | Le taux de décrochage a baissé cette année.
grade inflation | l'inflation des notes | L'inflation des notes rend les relevés moins significatifs.
standardized testing | les tests standardisés | Les critiques disent que les tests standardisés appauvrissent le programme.
cram culture | la culture du bachotage | La culture du bachotage met une pression énorme sur les adolescents.
academic pressure | la pression scolaire | La pression scolaire affecte la santé mentale des élèves.
gifted | surdoué ; à haut potentiel | Elle suit un programme pour élèves à haut potentiel.
special education | l'enseignement spécialisé | On manque d'enseignants spécialisés.
EdTech | les technologies éducatives (EdTech) | Les start-up de l'EdTech ont attiré d'énormes investissements.
MOOC | le MOOC ; le cours en ligne ouvert et massif | J'ai terminé un MOOC du MIT.
credentialism | la course aux diplômes | La course aux diplômes gonfle les exigences à l'embauche.
research grant | la subvention de recherche | Elle a obtenu une subvention pour étudier les récifs coralliens.
postdoc | le postdoctorant | Il est postdoctorant en neurosciences.
publish or perish | publier ou périr | Les jeunes chercheurs vivent selon la règle « publier ou périr ».
journal | la revue scientifique | L'étude a été publiée dans une grande revue.
abstract | le résumé | Lisez le résumé avant l'article complet.
literature review | l'état de l'art ; la revue de littérature | Mon état de l'art couvre cinquante études.
qualitative | qualitatif | Nous avons utilisé des entretiens qualitatifs.
quantitative | quantitatif | Les données quantitatives confirment notre affirmation.
intellectual curiosity | la curiosité intellectuelle | Les bons professeurs éveillent la curiosité intellectuelle.
critical thinking | l'esprit critique | Le cours développe l'esprit critique.
learning outcome | l'acquis d'apprentissage | Chaque cours énumère ses acquis d'apprentissage.
competency | la compétence | La compétence numérique fait partie du nouveau programme.
benchmark | la référence ; l'étalon | Les tests nationaux servent de référence.
league table | le palmarès ; le classement | Les écoles sont jugées sur les palmarès.
ranking | le classement | L'université a progressé dans le classement mondial.
prestige | le prestige | Les parents sont attirés par le prestige de l'école.
elitism | l'élitisme | Les critiques accusent le programme d'élitisme.
social mobility | la mobilité sociale | L'éducation est un moteur essentiel de la mobilité sociale.
digital divide | la fracture numérique | La pandémie a révélé la fracture numérique.
remote learning | l'enseignement à distance | L'enseignement à distance a été difficile pour les plus jeunes.
hybrid learning | l'enseignement hybride | L'établissement propose désormais un enseignement hybride.
learning management system | la plateforme d'apprentissage en ligne | Les devoirs se rendent sur la plateforme d'apprentissage en ligne.
academic integrity | l'intégrité académique | Les outils d'IA posent de nouvelles questions d'intégrité académique.
AI detector | le détecteur d'IA | Les détecteurs d'IA donnent souvent des faux positifs.
growth mindset | l'état d'esprit de développement | Un état d'esprit de développement aide les élèves à persévérer.
intrinsic motivation | la motivation intrinsèque | La motivation intrinsèque dure plus longtemps que les récompenses.
retrieval practice | la pratique de récupération ; l'auto-interrogation | L'auto-interrogation renforce la mémoire.
spaced repetition | la répétition espacée | La répétition espacée est idéale pour le vocabulaire.
cognitive load | la charge cognitive | Trop de diapositives augmentent la charge cognitive.
learning disability | le trouble de l'apprentissage | Un soutien précoce aide les enfants ayant un trouble de l'apprentissage.
dyslexia | la dyslexie | Les élèves dyslexiques peuvent avoir besoin de temps supplémentaire.
neurodiversity | la neurodiversité | L'école valorise la neurodiversité.
mainstreaming | l'inclusion scolaire | L'inclusion scolaire place les élèves à besoins particuliers dans des classes ordinaires.
tracking | les classes de niveau | Les classes de niveau restent controversées.
teacher burnout | l'épuisement professionnel des enseignants | L'épuisement professionnel pousse des enseignants à quitter le métier.
class size | l'effectif de la classe | Des effectifs plus réduits améliorent les résultats.
student-teacher ratio | le taux d'encadrement | Le taux d'encadrement est très favorable ici.
apprenticeship | l'apprentissage ; l'alternance | Il a appris le métier en apprentissage.
upskilling | le perfectionnement professionnel | Le perfectionnement aide les salariés à suivre la technologie.
reskilling | la reconversion professionnelle | Les programmes de reconversion visent les travailleurs remplacés par l'automatisation.
continuing education | la formation continue | Elle suit des cours de formation continue le soir.
adult learner | l'apprenant adulte | Les apprenants adultes concilient souvent études et travail.
civic education | l'éducation civique | L'éducation civique prépare les élèves à voter.
media literacy | l'éducation aux médias | L'éducation aux médias aide les élèves à repérer les fausses nouvelles.
independent bookstore | la librairie indépendante | Les librairies indépendantes organisent souvent des événements locaux.
first edition | l'édition originale | Une édition originale dédicacée peut valoir une fortune.
out of print | épuisé | Ce manuel est épuisé depuis des années.
staff pick | le coup de cœur du libraire | L'étagère des coups de cœur des libraires regorge de pépites.
translation | la traduction | Existe-t-il une traduction chinoise de ce roman ?
curate | sélectionner ; choisir avec soin | La propriétaire choisit chaque livre en rayon.
page-turner | le livre qu'on ne lâche pas | Ce thriller, on ne le lâche pas.
backlist | le fonds (d'éditeur) | Les éditeurs comptent sur leur fonds pour des ventes régulières.
pre-order | précommander | Vous pouvez précommander la suite en ligne.
reading nook | le coin lecture | La librairie a un coin lecture douillet à l'étage.
learn the ropes | apprendre les ficelles du métier | Il faut du temps pour apprendre les ficelles du métier.
the school of hard knocks | l'école de la vie | Il a appris à l'école de la vie.
a quick study | quelqu'un qui apprend vite | Elle apprend vite.
an old hand | un vieux routier | C'est un vieux routier de l'enseignement.
make the grade | être à la hauteur | Seule la moitié des élèves est à la hauteur.
a steep learning curve | un apprentissage difficile | Apprendre à coder demande un apprentissage difficile.
know something inside out | connaître quelque chose sur le bout des doigts | Il faut connaître un sujet sur le bout des doigts avant de l'enseigner.
read between the lines | lire entre les lignes | Apprenez à lire entre les lignes.
think outside the box | sortir des sentiers battus | Essaie de sortir des sentiers battus.
put on your thinking cap | se creuser la tête ; faire travailler ses méninges | Fais travailler tes méninges pour cette énigme.
the three Rs | lire, écrire, compter | Les jeunes enfants doivent apprendre à lire, écrire et compter.
ivory tower | la tour d'ivoire | Les professeurs ne devraient pas vivre dans une tour d'ivoire.
burn the midnight oil | travailler tard dans la nuit | Les étudiants travaillent tard dans la nuit avant les examens.
it's never too late to learn | on apprend à tout âge | Grand-mère dit qu'on apprend à tout âge.
`,
  phrases: `
The system places too much emphasis on standardized testing. | Le système accorde trop d'importance aux tests standardisés.
Students should be taught how to think, not what to think. | Il faut apprendre aux élèves à penser, pas quoi penser.
There's a growing gap between what schools teach and what employers need. | L'écart se creuse entre ce qu'enseignent les écoles et ce dont les employeurs ont besoin.
Rote learning is still deeply entrenched in the system. | L'apprentissage par cœur reste profondément ancré dans le système.
The curriculum places too much emphasis on exams. | Le programme accorde trop d'importance aux examens.
Teaching to the test stifles creativity. | Enseigner en vue de l'examen étouffe la créativité.
Critical thinking should be at the heart of education. | L'esprit critique devrait être au cœur de l'éducation.
Students need to learn how to learn. | Les élèves doivent apprendre à apprendre.
The education system was designed for an industrial age. | Le système éducatif a été conçu pour l'ère industrielle.
Standardized testing has its merits, but it's a blunt instrument. | Les tests standardisés ont leurs mérites, mais c'est un outil grossier.
Grade inflation has made top marks almost meaningless. | L'inflation des notes a presque vidé de sens les meilleures notes.
The cram school industry thrives on parental anxiety. | L'industrie du soutien scolaire prospère sur l'anxiété des parents.
Private tutoring widens the gap between rich and poor. | Les cours particuliers creusent l'écart entre riches et pauvres.
Access to quality education is still a postcode lottery. | L'accès à une éducation de qualité dépend encore du code postal.
Rural schools struggle to recruit and retain teachers. | Les écoles rurales peinent à recruter et à garder des enseignants.
Teachers are overworked and underpaid. | Les enseignants sont surchargés et sous-payés.
Teachers spend too much time on paperwork. | Les enseignants passent trop de temps sur des tâches administratives.
Class sizes have a significant impact on outcomes. | L'effectif des classes a un impact important sur les résultats.
Early childhood education has lifelong benefits. | L'éducation de la petite enfance a des bienfaits pour toute la vie.
Bilingual education is a national policy goal. | L'enseignement bilingue est un objectif de politique nationale.
Critics say the bilingual policy was rushed. | Les critiques disent que la politique bilingue a été précipitée.
Immersion is the most effective way to learn a language. | L'immersion est la façon la plus efficace d'apprendre une langue.
Motivation matters more than talent in language learning. | Pour apprendre une langue, la motivation compte plus que le talent.
Fluency is less about grammar than about confidence. | L'aisance dépend moins de la grammaire que de la confiance en soi.
I've hit a plateau in my English. | Je stagne en anglais.
Language anxiety holds many learners back. | L'anxiété linguistique freine beaucoup d'apprenants.
Learners should be exposed to a variety of accents. | Les apprenants devraient être exposés à des accents variés.
Native-speaker teachers aren't necessarily better teachers. | Les enseignants natifs ne sont pas forcément de meilleurs enseignants.
Academic writing has its own conventions. | L'écriture universitaire a ses propres conventions.
Your argument needs more supporting evidence. | Ton argumentation a besoin de plus de preuves.
The thesis statement should be clear and arguable. | La problématique doit être claire et discutable.
The literature review sets your research in context. | L'état de l'art situe votre recherche dans son contexte.
Peer review is the cornerstone of academic publishing. | L'évaluation par les pairs est la pierre angulaire de la publication scientifique.
Publish or perish culture puts huge pressure on researchers. | La culture du « publier ou périr » met une pression énorme sur les chercheurs.
Research funding is increasingly tied to industry. | Le financement de la recherche est de plus en plus lié à l'industrie.
Universities are increasingly run like businesses. | Les universités sont de plus en plus gérées comme des entreprises.
Tuition has outpaced inflation for decades. | Les frais de scolarité augmentent plus vite que l'inflation depuis des décennies.
Student debt shapes graduates' life choices. | La dette étudiante pèse sur les choix de vie des diplômés.
Is a degree still worth the cost? | Un diplôme vaut-il encore ce qu'il coûte ?
Employers increasingly value skills over credentials. | Les employeurs privilégient de plus en plus les compétences aux diplômes.
Vocational education deserves more respect. | L'enseignement professionnel mérite plus de considération.
Apprenticeships combine learning with paid work. | L'apprentissage associe formation et travail rémunéré.
Lifelong learning is essential in a fast-changing economy. | La formation tout au long de la vie est essentielle dans une économie qui évolue vite.
Reskilling programs help workers adapt to automation. | Les programmes de reconversion aident les travailleurs à s'adapter à l'automatisation.
Online courses have democratized access to knowledge. | Les cours en ligne ont démocratisé l'accès au savoir.
Completion rates for online courses are notoriously low. | Les taux d'achèvement des cours en ligne sont notoirement faibles.
Remote learning exposed the digital divide. | L'enseignement à distance a révélé la fracture numérique.
AI tools are forcing schools to rethink assessment. | Les outils d'IA obligent les écoles à repenser l'évaluation.
Banning AI outright is neither realistic nor desirable. | Interdire purement et simplement l'IA n'est ni réaliste ni souhaitable.
Students need to learn to use AI responsibly. | Les élèves doivent apprendre à utiliser l'IA de manière responsable.
Academic integrity is harder to police than ever. | L'intégrité académique n'a jamais été aussi difficile à contrôler.
Personalized learning adapts to each student's pace. | L'apprentissage personnalisé s'adapte au rythme de chaque élève.
Formative assessment gives feedback during learning, not just at the end. | L'évaluation formative donne un retour pendant l'apprentissage, pas seulement à la fin.
Mistakes should be treated as part of the learning process. | Les erreurs devraient être considérées comme faisant partie de l'apprentissage.
A growth mindset helps students persevere. | Un état d'esprit de développement aide les élèves à persévérer.
Praise effort rather than intelligence. | Félicitez l'effort plutôt que l'intelligence.
Intrinsic motivation is more durable than rewards. | La motivation intrinsèque est plus durable que les récompenses.
Play is an essential part of how children learn. | Le jeu est essentiel dans l'apprentissage des enfants.
Too much homework can be counterproductive. | Trop de devoirs peut être contre-productif.
Students are chronically sleep-deprived. | Les élèves manquent chroniquement de sommeil.
Mental health support in schools is woefully inadequate. | Le soutien psychologique dans les écoles est terriblement insuffisant.
Bullying can leave lasting scars. | Le harcèlement peut laisser des cicatrices durables.
Schools need clear policies on cyberbullying. | Les écoles ont besoin de règles claires contre le cyberharcèlement.
Inclusive education benefits all students, not just those with special needs. | L'école inclusive profite à tous les élèves, pas seulement à ceux qui ont des besoins particuliers.
Gifted programs can reinforce social inequality. | Les programmes pour élèves à haut potentiel peuvent renforcer les inégalités sociales.
Streaming students by ability is a contentious practice. | Répartir les élèves par niveau est une pratique controversée.
Civic education is crucial for a healthy democracy. | L'éducation civique est cruciale pour une démocratie saine.
Media literacy should be taught from an early age. | L'éducation aux médias devrait commencer dès le plus jeune âge.
History textbooks are often politically contested. | Les manuels d'histoire sont souvent contestés politiquement.
The curriculum reform sparked a heated debate. | La réforme des programmes a déclenché un vif débat.
Parents want a say in what their children are taught. | Les parents veulent avoir leur mot à dire sur ce qu'on enseigne à leurs enfants.
Declining birth rates are forcing schools to merge or close. | La baisse de la natalité oblige des écoles à fusionner ou à fermer.
Universities are competing fiercely for international students. | Les universités se livrent une concurrence féroce pour attirer les étudiants étrangers.
League tables encourage universities to game the metrics. | Les classements incitent les universités à manipuler les indicateurs.
Prestige doesn't always reflect the quality of teaching. | Le prestige ne reflète pas toujours la qualité de l'enseignement.
Interdisciplinary study prepares students for complex problems. | Les études interdisciplinaires préparent aux problèmes complexes.
The humanities are being squeezed by STEM priorities. | Les sciences humaines sont écrasées par la priorité donnée aux STIM.
A liberal arts education teaches you how to think. | Une formation en arts libéraux vous apprend à penser.
Learning for its own sake is undervalued. | Le savoir pour lui-même est sous-estimé.
Curiosity is the engine of learning. | La curiosité est le moteur de l'apprentissage.
The best teachers inspire rather than instruct. | Les meilleurs professeurs inspirent plus qu'ils n'instruisent.
Mentorship can be just as valuable as formal teaching. | Le mentorat peut valoir autant que l'enseignement formel.
Learning outside the classroom is often more memorable. | Ce qu'on apprend hors de la classe marque souvent davantage.
Experiential learning bridges theory and practice. | L'apprentissage par l'expérience fait le lien entre théorie et pratique.
Students retain more when they teach others. | Les élèves retiennent mieux quand ils enseignent aux autres.
Reflection consolidates what you've learned. | La réflexion consolide ce que vous avez appris.
Spaced practice beats cramming every time. | La pratique espacée bat toujours le bachotage.
Retrieval practice strengthens long-term memory. | L'auto-interrogation renforce la mémoire à long terme.
Multitasking undermines deep learning. | Le multitâche nuit à l'apprentissage en profondeur.
Phones in classrooms are a constant distraction. | Les téléphones en classe sont une distraction permanente.
Several countries have banned phones in schools. | Plusieurs pays ont interdit les téléphones à l'école.
Teacher autonomy is essential for good teaching. | L'autonomie des enseignants est essentielle à un bon enseignement.
Education policy changes too often to take root. | La politique éducative change trop souvent pour s'enraciner.
Reforms need buy-in from teachers to succeed. | Pour réussir, les réformes doivent avoir l'adhésion des enseignants.
Education is the most powerful tool for social mobility. | L'éducation est l'outil le plus puissant de mobilité sociale.
Family background still predicts academic success. | Le milieu familial prédit encore la réussite scolaire.
Free school meals improve both health and learning. | Les repas scolaires gratuits améliorent la santé et l'apprentissage.
Libraries remain vital community spaces. | Les bibliothèques restent des lieux de vie essentiels.
Education doesn't end when you leave school. | L'éducation ne s'arrête pas à la sortie de l'école.
The goal of education is to create independent thinkers. | Le but de l'éducation est de former des esprits indépendants.
I'm after something light for a long flight. | Je cherche quelque chose de léger pour un long vol.
Are any of these signed copies? | Il y a des exemplaires dédicacés parmi ceux-ci ?
This one's been out of print for ages; do you know where I might find a copy? | Celui-ci est épuisé depuis longtemps ; vous savez où je pourrais en trouver un exemplaire ?
I always check the staff picks; they rarely disappoint. | Je regarde toujours les coups de cœur des libraires ; ils déçoivent rarement.
Independent bookstores have a charm that online shops can't match. | Les librairies indépendantes ont un charme que les boutiques en ligne n'égalent pas.
I tend to judge a book by its first page, not its cover. | Je juge plutôt un livre à sa première page qu'à sa couverture.
`,
});
