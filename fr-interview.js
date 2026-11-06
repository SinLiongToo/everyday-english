// 法文對照（Français）：面試
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
addFrench("interview", {
  words: `
job | le travail ; l'emploi | Je cherche du travail.
interview | l'entretien | J'ai un entretien demain.
part-time | à temps partiel | Je veux un travail à temps partiel.
full-time | à temps plein | C'est un travail à temps plein ?
work | travailler | Je veux travailler dans un hôtel.
boss | le patron | Le patron est très gentil.
manager | le responsable ; le gérant | C'est le gérant qui va vous recevoir en entretien.
staff | le personnel | Nous avons besoin de plus de personnel.
team | l'équipe | Vous travaillerez dans une petite équipe.
company | l'entreprise | Que fait votre entreprise ?
office | le bureau | L'entretien a lieu au bureau.
shop | la boutique ; le magasin | Je veux travailler dans une boutique.
café | le café | Le café cherche un nouvel employé.
restaurant | le restaurant | J'ai travaillé dans un restaurant l'été dernier.
hotel | l'hôtel | L'hôtel recrute.
store | le magasin | Le magasin est ouvert jusqu'à vingt-deux heures.
customer | le client | Soyez aimable avec chaque client.
uniform | l'uniforme | Le personnel doit porter un uniforme.
shift | le service ; le poste | Le service du matin commence à sept heures.
hour | l'heure | Combien d'heures pouvez-vous travailler ?
weekend | le week-end | Pouvez-vous travailler le week-end ?
weekday | le jour de semaine | Je ne peux travailler qu'en semaine.
morning | le matin | Je suis libre le matin.
evening | le soir | Je peux travailler le soir.
start | commencer | Quand pouvez-vous commencer ?
finish | finir | À quelle heure finit le service ?
pay | le salaire ; la paie | Quel est le salaire ?
money | l'argent | Je veux économiser de l'argent pour mes études.
name | le nom | Écrivez votre nom ici, s'il vous plaît.
age | l'âge | Il faut avoir plus de 18 ans.
phone number | le numéro de téléphone | Quel est votre numéro de téléphone ?
email | l'e-mail | Envoyez-moi votre adresse e-mail.
address | l'adresse | Écrivez votre adresse sur le formulaire.
form | le formulaire | Remplissez ce formulaire, s'il vous plaît.
student | l'étudiant | Je suis étudiant à l'université.
school | l'école | Je vais en cours le matin.
teacher | le professeur | Mon professeur m'a écrit une lettre.
hardworking | travailleur ; sérieux | Je suis travailleur et soigneux.
friendly | aimable | Elle est aimable avec les clients.
polite | poli | Soyez toujours poli.
honest | honnête | Je suis quelqu'un d'honnête.
helpful | serviable | Il est très serviable.
careful | soigneux ; prudent | Je fais attention avec l'argent.
fast | rapide | J'apprends vite.
on time | à l'heure | Je suis toujours à l'heure.
late | en retard | Ne soyez pas en retard à l'entretien.
early | tôt ; en avance | Arrivez dix minutes en avance.
smile | sourire | Souriez et dites bonjour.
shake hands | serrer la main | Serrez la main du recruteur.
sit down | s'asseoir | Asseyez-vous, je vous en prie.
ready | prêt | Vous êtes prêt ?
nervous | nerveux | Je suis un peu nerveux.
calm | calme | Restez calme et respirez.
happy | content | Je suis content d'être ici.
like | aimer | J'aime travailler avec les gens.
love | adorer | J'adore cuisiner.
good at | doué en | Je suis doué en maths.
learn | apprendre | Je veux apprendre de nouvelles choses.
help | aider | Je peux aider en cuisine.
cook | cuisiner | Vous savez cuisiner ?
clean | nettoyer | Je peux nettoyer les tables.
serve | servir | J'ai servi des clients sur un stand de marché de nuit.
sell | vendre | Je peux vendre des boissons et des en-cas.
cash | l'argent liquide ; les espèces | Vous savez manipuler des espèces ?
count | compter | Comptez l'argent en fin de journée.
carry | porter | Vous pouvez porter des cartons lourds ?
drive | conduire | Vous savez conduire un scooter ?
speak | parler | Je parle anglais et chinois.
English | l'anglais | Mon anglais est bon.
language | la langue | Je parle deux langues.
computer | l'ordinateur | Je sais utiliser un ordinateur.
phone | le téléphone | Répondez au téléphone, s'il vous plaît.
question | la question | Je peux poser une question ?
answer | répondre | Répondez clairement aux questions.
ask | demander | N'ayez pas peur de demander.
listen | écouter | Écoutez attentivement.
think | réfléchir | Laissez-moi réfléchir.
know | savoir | Je sais faire du café.
try | essayer | Je ferai de mon mieux.
best | le mieux | Je fais toujours de mon mieux.
free | libre ; disponible | Quand êtes-vous disponible ?
busy | animé ; occupé | La boutique est très fréquentée à l'heure du déjeuner.
like to | aimer (faire) | J'aime travailler avec des enfants.
want to | vouloir | Je veux travailler ici.
can | pouvoir | Je peux travailler le dimanche.
before | avant ; déjà | Vous avez déjà travaillé ici ?
next week | la semaine prochaine | Vous pouvez commencer la semaine prochaine ?
thank you | merci | Merci pour votre temps.
call back | rappeler | Nous vous rappellerons vendredi.
hire | embaucher | Ils m'ont embauché !
worker | l'employé | Le café cherche un nouvel employé.
kitchen | la cuisine | Je veux travailler en cuisine.
cashier | le caissier ; la caissière | J'ai travaillé comme caissier.
waiter | le serveur | Il est serveur dans un hôtel.
clean clothes | les vêtements propres | Mettez des vêtements propres pour l'entretien.
dream job | le travail de rêve | Mon métier de rêve, c'est pilote.
new | nouveau | Je découvre ce genre de travail.
hard | dur | Le travail est dur ?
break | la pause | Vous avez une pause de 30 minutes.
lunch | le déjeuner | Le déjeuner est offert au personnel.
`,
  phrases: `
Hello, I'm here for the interview. | Bonjour, je viens pour l'entretien.
My name is Amy Chen. | Je m'appelle Amy Chen.
Nice to meet you. | Enchanté.
Thank you for having me. | Merci de me recevoir.
Please have a seat. | Asseyez-vous, je vous en prie.
Can you tell me about yourself? | Pouvez-vous vous présenter ?
I'm 20 years old. | J'ai 20 ans.
I'm a college student. | Je suis étudiant à l'université.
I study English at university. | J'étudie l'anglais à l'université.
I live near here. | J'habite près d'ici.
It takes me ten minutes to get here. | Je mets dix minutes pour venir.
Why do you want this job? | Pourquoi voulez-vous ce poste ?
I like working with people. | J'aime travailler avec les gens.
I want to get work experience. | Je veux acquérir de l'expérience professionnelle.
I want to save money for school. | Je veux économiser pour mes études.
I love coffee. | J'adore le café.
I like this shop. | J'aime bien cette boutique.
Have you worked before? | Vous avez déjà travaillé ?
Yes, I worked at a convenience store. | Oui, j'ai travaillé dans une supérette.
No, this is my first job. | Non, c'est mon premier emploi.
I worked there for one year. | J'y ai travaillé un an.
I helped customers and cleaned the store. | J'aidais les clients et je nettoyais le magasin.
What are you good at? | Dans quoi êtes-vous doué ?
I'm good at talking to people. | Je suis à l'aise pour parler aux gens.
I'm good with numbers. | Je suis à l'aise avec les chiffres.
I learn quickly. | J'apprends vite.
I work hard. | Je travaille dur.
I'm always on time. | Je suis toujours à l'heure.
I'm friendly and polite. | Je suis aimable et poli.
I'm a team player. | J'ai l'esprit d'équipe.
I can speak English and Chinese. | Je parle anglais et chinois.
I can speak a little Japanese. | Je parle un peu japonais.
I can use a computer. | Je sais utiliser un ordinateur.
I can drive a scooter. | Je sais conduire un scooter.
When can you work? | Quand pouvez-vous travailler ?
I can work on weekends. | Je peux travailler le week-end.
I'm free every afternoon. | Je suis libre tous les après-midi.
I can't work on Monday mornings. | Je ne peux pas travailler le lundi matin.
I have class on Tuesday. | J'ai cours le mardi.
How many hours can you work a week? | Combien d'heures pouvez-vous travailler par semaine ?
I can work about twenty hours a week. | Je peux travailler une vingtaine d'heures par semaine.
Can you work at night? | Pouvez-vous travailler de nuit ?
Yes, that's fine. | Oui, pas de problème.
Sorry, I can't work late. | Désolé, je ne peux pas travailler tard.
When can you start? | Quand pouvez-vous commencer ?
I can start next week. | Je peux commencer la semaine prochaine.
I can start right away. | Je peux commencer tout de suite.
How much is the pay? | Quel est le salaire ?
The pay is 190 dollars an hour. | Le salaire est de 190 dollars de l'heure.
Do I need to wear a uniform? | Dois-je porter un uniforme ?
What time does the shift start? | À quelle heure commence le service ?
Do I get a break? | J'ai droit à une pause ?
Is there training? | Il y a une formation ?
Who will train me? | Qui va me former ?
Can I ask a question? | Je peux poser une question ?
Sorry, can you say that again? | Pardon, vous pouvez répéter ?
Could you speak more slowly, please? | Pourriez-vous parler plus lentement, s'il vous plaît ?
I'm sorry, I don't understand. | Désolé, je ne comprends pas.
Let me think. | Laissez-moi réfléchir.
That's a good question. | C'est une bonne question.
I'm a little nervous. | Je suis un peu nerveux.
Don't worry. Take your time. | Ne vous inquiétez pas. Prenez votre temps.
I'll do my best. | Je ferai de mon mieux.
I really want this job. | Je veux vraiment ce poste.
I'm happy to learn new things. | Je suis content d'apprendre de nouvelles choses.
I'm not afraid of hard work. | Le travail ne me fait pas peur.
I like to keep things clean. | J'aime que tout soit propre.
I'm careful with money. | Je fais attention avec l'argent.
I'm good with children. | Je m'y prends bien avec les enfants.
I don't have much experience, but I learn fast. | Je n'ai pas beaucoup d'expérience, mais j'apprends vite.
I'm a quick learner. | J'apprends rapidement.
I can work well under pressure. | Je travaille bien sous pression.
I like busy places. | J'aime les endroits animés.
I'm a morning person. | Je suis du matin.
Do you have any questions? | Avez-vous des questions ?
No, I think that's all. | Non, je crois que c'est tout.
Yes, how many people work here? | Oui, combien de personnes travaillent ici ?
We'll call you this week. | Nous vous appellerons cette semaine.
We'll let you know. | Nous vous tiendrons au courant.
Thank you for your time. | Merci pour votre temps.
I look forward to hearing from you. | J'attends votre réponse avec impatience.
Have a nice day. | Bonne journée.
You got the job! | Vous êtes pris !
Welcome to the team! | Bienvenue dans l'équipe !
Thank you! I'm so happy. | Merci ! Je suis tellement content.
Sorry, we chose someone else. | Désolé, nous avons choisi quelqu'un d'autre.
That's okay. Thank you anyway. | Ce n'est pas grave. Merci quand même.
Bring your ID on the first day. | Apportez votre pièce d'identité le premier jour.
See you on Monday. | À lundi.
Wear clean clothes to the interview. | Mettez des vêtements propres pour l'entretien.
Arrive ten minutes early. | Arrivez dix minutes en avance.
Turn off your phone. | Éteignez votre téléphone.
Smile and say hello. | Souriez et dites bonjour.
Look at the interviewer when you talk. | Regardez le recruteur quand vous parlez.
Sit up straight. | Tenez-vous droit.
Speak clearly. | Parlez clairement.
Be yourself. | Soyez vous-même.
Good luck with your interview! | Bonne chance pour ton entretien !
How did the interview go? | Comment s'est passé l'entretien ?
I think it went well. | Je crois que ça s'est bien passé.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("interview", {
  words: `
resume | le CV | Envoyez-nous votre CV, s'il vous plaît.
cover letter | la lettre de motivation | Rédigez une courte lettre de motivation.
job posting | l'offre d'emploi | J'ai vu l'offre d'emploi en ligne.
job description | la fiche de poste | Lisez attentivement la fiche de poste.
qualifications | les qualifications | Avez-vous les qualifications requises ?
requirements | les exigences ; le profil recherché | Quelles sont les exigences pour ce poste ?
experience | l'expérience | J'ai deux ans d'expérience.
skills | les compétences | Quelles compétences avez-vous ?
strengths | les points forts | Quels sont vos points forts ?
weaknesses | les points faibles | Tout le monde a des points faibles.
achievement | la réussite ; la réalisation | Quelle est votre plus grande réussite ?
responsibilities | les responsabilités ; les missions | Quelles étaient vos principales missions ?
references | les références | Pouvez-vous fournir deux références ?
recruiter | le recruteur | Un recruteur m'a contacté sur LinkedIn.
HR | les RH | Les RH vous appelleront pour la prochaine étape.
hiring manager | le responsable du recrutement | Vous rencontrerez ensuite le responsable du recrutement.
interviewer | le recruteur ; l'intervieweur | Le recruteur m'a posé des questions sur mon stage.
candidate | le candidat | Il y a dix candidats pour le poste.
applicant | le candidat ; le postulant | Chaque candidat passe un petit test.
apply | postuler | Vous pouvez postuler en ligne.
application | la candidature | Nous avons bien reçu votre candidature.
position | le poste | Je postule au poste de commercial.
opening | le poste à pourvoir | Avez-vous des postes à pourvoir ?
first round | le premier tour | J'ai passé le premier tour.
final round | le dernier tour | Le dernier tour se passe avec le directeur.
phone interview | l'entretien téléphonique | L'entretien téléphonique a duré vingt minutes.
video interview | l'entretien en visio | Testez votre caméra avant un entretien en visio.
panel interview | l'entretien devant un jury | Il y avait quatre personnes à l'entretien devant le jury.
group interview | l'entretien collectif | Lors de l'entretien collectif, nous avons résolu un problème ensemble.
in-person | en personne ; en présentiel | Le deuxième entretien a lieu en présentiel.
background | le parcours | Parlez-moi de votre parcours.
degree | le diplôme | J'ai un diplôme en finance.
major | la spécialité | Ma spécialité était l'anglais.
internship | le stage | J'ai fait un stage dans une banque.
part-time job | le petit boulot | J'avais un petit boulot dans une librairie.
volunteer work | le bénévolat | Le bénévolat m'a appris le travail d'équipe.
certificate | le certificat | J'ai un certificat TOEIC.
teamwork | le travail d'équipe | Le travail d'équipe est important ici.
communication skills | les compétences en communication | De bonnes compétences en communication sont indispensables.
problem-solving | la résolution de problèmes | Donnez un exemple de résolution de problème.
leadership | le leadership | J'ai fait preuve de leadership en tant que président du club.
time management | la gestion du temps | Une bonne gestion du temps m'aide à respecter les délais.
deadline | le délai ; l'échéance | Je n'ai jamais manqué une échéance.
pressure | la pression | Comment gérez-vous la pression ?
multitask | gérer plusieurs tâches à la fois | Je sais gérer plusieurs tâches dans un restaurant animé.
motivated | motivé | Je suis très motivé pour apprendre.
reliable | fiable | Mon responsable a dit que j'étais très fiable.
detail-oriented | méticuleux | Je suis méticuleux et précis.
flexible | flexible ; disponible | Mon emploi du temps est flexible.
adaptable | capable de s'adapter | Je m'adapte facilement aux nouvelles situations.
punctual | ponctuel | Être ponctuel fait bonne impression.
professional | professionnel | Habillez-vous de façon professionnelle.
dress code | le code vestimentaire | Y a-t-il un code vestimentaire pour l'entretien ?
business casual | la tenue de ville décontractée | Une tenue de ville décontractée convient pour cet entretien.
eye contact | le contact visuel | Gardez un bon contact visuel.
body language | le langage corporel | Un langage corporel positif montre de l'assurance.
first impression | la première impression | On n'a qu'une seule occasion de faire bonne impression.
confident | assuré ; confiant | Parlez d'une voix assurée.
prepare | préparer | Préparez des réponses aux questions courantes.
practice | s'entraîner | Entraînez-vous avec un ami.
research | se renseigner | Renseignez-vous sur l'entreprise avant l'entretien.
mission | la mission | Je partage la mission de votre entreprise.
values | les valeurs | Nos valeurs sont l'honnêteté et le travail d'équipe.
company culture | la culture d'entreprise | J'aime votre culture d'entreprise.
salary | le salaire | Quel salaire espérez-vous ?
benefits | les avantages | Quels avantages proposez-vous ?
bonus | la prime | Il y a une prime de fin d'année.
annual leave | les congés annuels | Combien de jours de congés annuels aurai-je ?
probation | la période d'essai | La période d'essai est de trois mois.
start date | la date de prise de poste | Quelle date de prise de poste préférez-vous ?
notice period | le préavis | Mon préavis est d'un mois.
job offer | l'offre d'emploi ; la proposition d'embauche | J'ai reçu une proposition d'embauche !
accept | accepter | J'aimerais accepter l'offre.
decline | décliner | J'ai dû décliner l'offre.
rejection | le refus | Ne laissez pas un refus vous arrêter.
follow up | relancer | Relancez une semaine après l'entretien.
thank-you email | l'e-mail de remerciement | Envoyez un e-mail de remerciement le jour même.
feedback | le retour | Pourriez-vous me faire un retour ?
career goal | l'objectif de carrière | Mon objectif de carrière est de devenir designer.
promotion | la promotion | Y a-t-il des possibilités de promotion ?
training | la formation | Les nouveaux reçoivent deux semaines de formation.
overtime | les heures supplémentaires | Les heures supplémentaires sont-elles obligatoires ?
commute | le trajet | Le trajet dure environ quarante minutes.
relocate | déménager ; être muté | Êtes-vous prêt à déménager ?
remote | à distance | C'est un poste en télétravail ?
hybrid | hybride | Le poste est hybride, trois jours au bureau.
contract | le contrat | Lisez attentivement le contrat.
career change | la reconversion | Je fais une reconversion dans la tech.
employment gap | la période d'inactivité ; le trou dans le CV | Soyez prêt à expliquer un trou dans votre CV.
self-introduction | la présentation personnelle | Entraînez-vous à votre présentation.
portfolio | le portfolio | Apportez votre portfolio, s'il vous plaît.
LinkedIn profile | le profil LinkedIn | Mettez à jour votre profil LinkedIn.
job fair | le salon de l'emploi | J'ai rencontré le recruteur à un salon de l'emploi.
headhunter | le chasseur de têtes | Un chasseur de têtes m'a appelé pour un nouveau poste.
second interview | le deuxième entretien | Ils m'ont convoqué à un deuxième entretien.
assessment | le test d'évaluation | Il y a un court test écrit.
dress shoes | les chaussures habillées | Portez des chaussures habillées avec votre costume.
handshake | la poignée de main | Donnez une poignée de main ferme.
shortlisted | présélectionné | J'ai été présélectionné pour le poste.
work experience | l'expérience professionnelle | Avez-vous de l'expérience professionnelle ?
put your best foot forward | se montrer sous son meilleur jour | Montrez-vous sous votre meilleur jour en entretien.
sell yourself | se vendre | Il faut savoir se vendre.
first impressions count | la première impression compte | Habille-toi bien ; la première impression compte.
fingers crossed | croiser les doigts | Je croise les doigts pour ton entretien !
nail the interview | réussir son entretien haut la main | Tu vas réussir ton entretien haut la main.
a good fit | le bon profil | Je pense avoir le bon profil pour ce poste.
on the spot | sur le champ ; à brûle-pourpoint | Ils m'ont demandé de répondre sur le champ.
think on your feet | réagir vite ; avoir de la répartie | Les entretiens testent ta capacité à réagir vite.
break the ice | briser la glace | Un sourire aide à briser la glace.
a long shot | peu probable | Le poste est peu probable, mais je postule.
hear back | avoir des nouvelles | Quand aurai-je des nouvelles ?
get your foot in the door | mettre un pied dans la porte | N'importe quel travail peut te permettre de mettre un pied dans la porte.
the right stuff | l'étoffe | Elle a l'étoffe qu'il faut.
cold feet | se dégonfler | Je me suis dégonflé avant l'entretien.
on paper | sur le papier | Sur le papier, il est parfait.
`,
  phrases: `
Thanks for coming in today. | Merci d'être venu aujourd'hui.
Did you find us okay? | Vous avez trouvé facilement ?
Could you walk me through your resume? | Pourriez-vous me présenter votre CV ?
Tell me a little about yourself. | Parlez-moi un peu de vous.
I graduated with a degree in business administration. | Je suis diplômé en gestion des entreprises.
I've worked in customer service for three years. | Je travaille au service client depuis trois ans.
In my current role, I handle about fifty customer calls a day. | Dans mon poste actuel, je traite une cinquantaine d'appels clients par jour.
Why are you interested in this position? | Pourquoi ce poste vous intéresse-t-il ?
Why do you want to work for our company? | Pourquoi voulez-vous travailler dans notre entreprise ?
I've followed your company for years and I admire your products. | Je suis votre entreprise depuis des années et j'admire vos produits.
This role is a good match for my skills and experience. | Ce poste correspond bien à mes compétences et à mon expérience.
I'm looking for a role where I can grow. | Je cherche un poste où je pourrai évoluer.
Why are you leaving your current job? | Pourquoi quittez-vous votre emploi actuel ?
I'm looking for new challenges. | Je cherche de nouveaux défis.
There's limited room for growth in my current company. | Les perspectives d'évolution sont limitées dans mon entreprise actuelle.
I'd like to use my English more at work. | J'aimerais utiliser davantage l'anglais au travail.
What are your greatest strengths? | Quels sont vos plus grands atouts ?
I'm very organized and I meet deadlines. | Je suis très organisé et je respecte les délais.
I'm a good listener, so customers trust me. | Je sais écouter, alors les clients me font confiance.
I stay calm under pressure. | Je reste calme sous pression.
What's your greatest weakness? | Quel est votre plus grand défaut ?
I sometimes spend too long on details, so I now set time limits. | Je passe parfois trop de temps sur les détails, alors je me fixe désormais des limites de temps.
I used to find it hard to say no, but I'm learning to prioritize. | J'avais du mal à dire non, mais j'apprends à hiérarchiser.
Public speaking used to make me nervous, so I took a course. | Parler en public me rendait nerveux, alors j'ai suivi une formation.
Tell me about a challenge you faced at work. | Parlez-moi d'une difficulté que vous avez rencontrée au travail.
How did you handle it? | Comment l'avez-vous gérée ?
I stayed calm, listened to the customer, and found a solution. | Je suis resté calme, j'ai écouté le client et j'ai trouvé une solution.
Tell me about a time you worked in a team. | Parlez-moi d'une expérience de travail en équipe.
I led a group project at school, and we won first prize. | J'ai dirigé un projet de groupe à l'école, et nous avons remporté le premier prix.
How do you handle stress? | Comment gérez-vous le stress ?
I make a to-do list and take things one step at a time. | Je fais une liste de tâches et j'avance étape par étape.
How do you deal with a difficult customer? | Comment gérez-vous un client difficile ?
How do you prioritize your work? | Comment hiérarchisez-vous votre travail ?
I start with the most urgent tasks. | Je commence par les tâches les plus urgentes.
Where do you see yourself in five years? | Où vous voyez-vous dans cinq ans ?
I'd like to be in a leadership role. | J'aimerais occuper un poste de direction.
I hope to become an expert in this field. | J'espère devenir expert dans ce domaine.
What do you know about our company? | Que savez-vous de notre entreprise ?
I know you recently opened an office in Singapore. | Je sais que vous avez récemment ouvert un bureau à Singapour.
Why should we hire you? | Pourquoi devrions-nous vous embaucher ?
I have the right skills, and I'm eager to learn. | J'ai les bonnes compétences et j'ai très envie d'apprendre.
I can start contributing from day one. | Je peux être opérationnel dès le premier jour.
What are your salary expectations? | Quelles sont vos prétentions salariales ?
I'm looking for around 40,000 a month. | J'espère environ 40 000 par mois.
I'm flexible, depending on the overall package. | Je suis flexible, selon l'ensemble de la rémunération.
When would you be able to start? | Quand pourriez-vous commencer ?
I need to give one month's notice. | Je dois respecter un préavis d'un mois.
Are you willing to work overtime? | Êtes-vous prêt à faire des heures supplémentaires ?
Occasionally, yes, if the project needs it. | De temps en temps, oui, si le projet l'exige.
Are you willing to travel for work? | Êtes-vous prêt à vous déplacer pour le travail ?
Do you have any questions for us? | Avez-vous des questions à nous poser ?
What does a typical day look like in this role? | À quoi ressemble une journée type dans ce poste ?
What are the next steps in the process? | Quelles sont les prochaines étapes du processus ?
How will my performance be measured? | Comment ma performance sera-t-elle évaluée ?
What do you like most about working here? | Qu'est-ce que vous préférez dans votre travail ici ?
Is there training for new employees? | Y a-t-il une formation pour les nouveaux employés ?
How big is the team? | Combien de personnes compte l'équipe ?
Who would I be reporting to? | À qui serais-je rattaché ?
Is this a new position? | Est-ce un poste nouvellement créé ?
When can I expect to hear back? | Quand puis-je espérer avoir une réponse ?
Thank you for the opportunity. | Merci pour cette opportunité.
I really enjoyed our conversation. | J'ai vraiment apprécié notre échange.
I'm very interested in the position. | Le poste m'intéresse beaucoup.
I'm sending my resume as an attachment. | Je vous envoie mon CV en pièce jointe.
I'm writing to apply for the marketing assistant position. | Je vous écris pour postuler au poste d'assistant marketing.
I saw your job posting on LinkedIn. | J'ai vu votre offre d'emploi sur LinkedIn.
I'd like to follow up on my application. | Je souhaiterais avoir des nouvelles de ma candidature.
Thank you for interviewing me yesterday. | Merci de m'avoir reçu en entretien hier.
I'm pleased to accept your offer. | J'ai le plaisir d'accepter votre offre.
Could I have a few days to think about the offer? | Pourrais-je avoir quelques jours pour réfléchir à l'offre ?
Unfortunately, I have to decline the offer. | Malheureusement, je dois décliner l'offre.
Could you give me some feedback on my interview? | Pourriez-vous me faire un retour sur mon entretien ?
I have two years of experience in sales. | J'ai deux ans d'expérience dans la vente.
I'm proficient in Excel and PowerPoint. | Je maîtrise Excel et PowerPoint.
My TOEIC score is 850. | Mon score au TOEIC est de 850.
I'm comfortable speaking English with clients. | Je suis à l'aise pour parler anglais avec les clients.
I did an internship at an advertising agency. | J'ai fait un stage dans une agence de publicité.
I managed our club's social media accounts. | Je gérais les réseaux sociaux de notre club.
I increased our followers by thirty percent. | J'ai augmenté le nombre d'abonnés de trente pour cent.
I'm good at working with people from different backgrounds. | Je sais bien travailler avec des gens de milieux différents.
I'm detail-oriented and accurate. | Je suis méticuleux et précis.
I enjoy solving problems. | J'aime résoudre des problèmes.
I'm a fast learner and very adaptable. | J'apprends vite et je m'adapte facilement.
I'm comfortable working independently or in a team. | Je suis à l'aise en autonomie comme en équipe.
Let me give you an example. | Permettez-moi de vous donner un exemple.
To be honest, I don't have experience with that software. | Pour être honnête, je n'ai pas d'expérience avec ce logiciel.
But I'm a quick learner, and I'd be happy to take a course. | Mais j'apprends vite, et je suivrais volontiers une formation.
Could you clarify the question? | Pourriez-vous préciser la question ?
That's a great question. Let me think for a moment. | Très bonne question. Laissez-moi réfléchir un instant.
I took a year off to care for a family member. | J'ai pris un an pour m'occuper d'un proche.
During that time, I also took an online course. | Pendant cette période, j'ai aussi suivi un cours en ligne.
The interview is in three rounds. | Le processus d'entretien comporte trois étapes.
The first round is a phone interview. | La première étape est un entretien téléphonique.
Make sure your camera and microphone work before a video interview. | Vérifiez que votre caméra et votre micro fonctionnent avant un entretien en visio.
Dress one level more formal than the company's daily style. | Habillez-vous un cran plus formel que le style habituel de l'entreprise.
Research the company before the interview. | Renseignez-vous sur l'entreprise avant l'entretien.
Prepare three questions to ask the interviewer. | Préparez trois questions à poser au recruteur.
Send a thank-you email within 24 hours. | Envoyez un e-mail de remerciement dans les 24 heures.
`,
});

// ---------- 高級 Advanced ----------
addFrench("interview", {
  words: `
behavioral interview | l'entretien comportemental | Un entretien comportemental porte sur des situations passées.
STAR method | la méthode STAR | Utilisez la méthode STAR pour structurer vos réponses.
situation | la situation | Commencez par décrire la situation.
task | la tâche ; la mission | Expliquez ensuite votre mission.
action | l'action | Insistez sur les actions que vous avez menées.
result | le résultat | Terminez par un résultat mesurable.
competency | la compétence | Chaque question évalue une compétence clé.
case interview | l'étude de cas | Les cabinets de conseil utilisent l'étude de cas.
assessment center | le centre d'évaluation | Le centre d'évaluation a duré une journée entière.
aptitude test | le test d'aptitude | J'ai passé un test d'aptitude en ligne.
personality test | le test de personnalité | Le test de personnalité comptait 120 questions.
track record | le parcours ; les résultats passés | Elle a d'excellents résultats dans la vente.
quantifiable | quantifiable | Donnez des résultats quantifiables chaque fois que possible.
impact | l'impact | Quel impact votre projet a-t-il eu ?
stakeholder management | la gestion des parties prenantes | Le poste exige une solide gestion des parties prenantes.
cross-functional | transversal | J'ai dirigé une équipe transversale de douze personnes.
leadership style | le style de management | Comment décririez-vous votre style de management ?
conflict resolution | la résolution des conflits | Parlez-moi de votre approche de la résolution des conflits.
delegation | la délégation | Une bonne délégation libère du temps pour la stratégie.
decision-making | la prise de décision | Expliquez-moi votre processus de prise de décision.
strategic thinking | la réflexion stratégique | Le poste exige une réflexion stratégique.
initiative | l'initiative | J'ai pris l'initiative d'améliorer le processus.
ownership | le sens des responsabilités | J'assume mes erreurs.
accountability | la responsabilité | La responsabilité est au cœur de notre culture.
resilience | la résilience | Le poste exige de la résilience sous pression.
adaptability | l'adaptabilité | L'adaptabilité compte dans un secteur qui évolue vite.
growth mindset | l'état d'esprit de développement | Nous recrutons des personnes ayant un état d'esprit de développement.
self-awareness | la conscience de soi | La conscience de soi aide à répondre à la question sur les défauts.
emotional intelligence | l'intelligence émotionnelle | L'intelligence émotionnelle est essentielle pour un manager.
cultural fit | l'adéquation culturelle | Ils évaluent l'adéquation culturelle autant que les compétences.
culture add | l'apport culturel | Beaucoup d'entreprises cherchent désormais un apport culturel, pas seulement une adéquation.
red flag | le signal d'alarme | Dénigrer un ancien patron est un signal d'alarme.
transferable skills | les compétences transférables | Mettez en avant vos compétences transférables.
career trajectory | la trajectoire professionnelle | Votre trajectoire professionnelle montre une progression régulière.
career pivot | la réorientation de carrière | Présentez votre réorientation comme un choix délibéré.
overqualified | surqualifié | Ils craignaient que je sois surqualifié pour le poste.
underqualified | sous-qualifié | Ne pars pas du principe que tu es sous-qualifié ; postule quand même.
sabbatical | le congé sabbatique | J'ai pris un congé sabbatique pour m'occuper de mon père.
redundancy | la suppression de poste | Une suppression de poste ne reflète pas vos performances.
counteroffer | la contre-proposition | Mon entreprise m'a fait une contre-proposition pour me garder.
negotiation | la négociation | La négociation salariale est attendue.
salary range | la fourchette de salaire | Quelle est la fourchette de salaire pour ce poste ?
base salary | le salaire de base ; le fixe | Le fixe est plus bas, mais la prime est généreuse.
total compensation | la rémunération globale | Regardez la rémunération globale, pas seulement le salaire.
equity | les actions ; la participation au capital | La start-up a proposé des actions au lieu d'argent.
stock options | les stock-options | La rémunération comprend des stock-options.
signing bonus | la prime de bienvenue | Ils ont ajouté une prime de bienvenue pour conclure.
relocation package | l'aide à la mobilité | L'aide à la mobilité couvre les billets d'avion et le logement.
benefits package | l'ensemble des avantages sociaux | Les avantages comprennent une assurance santé complémentaire.
perks | les avantages en nature | Les avantages incluent le déjeuner gratuit et une salle de sport.
non-compete | la clause de non-concurrence | Lisez la clause de non-concurrence avant de signer.
background check | la vérification des antécédents | L'offre dépend d'une vérification des antécédents.
reference check | la prise de références | Les RH font ma prise de références.
executive search | la chasse de têtes | Un cabinet de chasse de têtes a trouvé le nouveau PDG.
talent acquisition | l'acquisition de talents | Le service d'acquisition de talents gère tous les recrutements.
employer branding | la marque employeur | Une marque employeur forte attire les meilleurs talents.
onboarding | l'intégration | L'intégration dure environ deux semaines.
30-60-90 day plan | le plan à 30, 60 et 90 jours | J'ai préparé un plan à 30, 60 et 90 jours pour le poste.
elevator pitch | le pitch d'ascenseur | Ayez un pitch de 30 secondes prêt.
personal brand | la marque personnelle | Votre marque personnelle commence par votre profil.
networking | le réseautage | La plupart des emplois se trouvent grâce au réseau.
informational interview | l'entretien d'information | Un entretien d'information aide à découvrir un secteur.
hiring freeze | le gel des embauches | L'entreprise a annoncé un gel des embauches.
hiring process | le processus de recrutement | Le processus de recrutement comporte quatre étapes.
ghosting | le ghosting ; disparaître sans donner de nouvelles | Laisser les candidats sans nouvelles nuit à la réputation d'une entreprise.
rescind | retirer ; annuler | Ils ont retiré l'offre après des coupes budgétaires.
verbal offer | l'offre verbale | J'ai reçu une offre verbale au téléphone.
written offer | l'offre écrite | Attendez l'offre écrite avant de démissionner.
contingent | sous réserve de | L'offre est sous réserve d'une visite médicale.
garden leave | la dispense d'activité rémunérée | Il a passé un mois en dispense d'activité avant de commencer.
exit interview | l'entretien de départ | J'ai été honnête lors de mon entretien de départ.
salary history | l'historique de salaire | Certains endroits interdisent de demander l'historique de salaire.
pay transparency | la transparence salariale | Les lois sur la transparence salariale obligent à publier les fourchettes de salaire.
market rate | le prix du marché | Renseignez-vous sur le prix du marché avant de négocier.
lowball | faire une offre au rabais | N'acceptez pas une offre au rabais par peur.
anchor | ancrer | Le premier chiffre ancre souvent la négociation.
leverage | le levier ; le moyen de pression | Une offre concurrente vous donne un levier.
competing offer | l'offre concurrente | J'ai une offre concurrente qui expire vendredi.
walk away | se retirer ; renoncer | Sachez quand vous retirer.
probationary period | la période d'essai | La performance est évaluée à la fin de la période d'essai.
KPI | les indicateurs clés de performance | Comment mes KPI seront-ils mesurés ?
deliverables | les livrables | Quels sont les livrables clés la première année ?
scope | le périmètre | Le périmètre du poste est plus large qu'annoncé.
seniority | le niveau d'expérience ; l'ancienneté | L'intitulé ne correspond pas à mon niveau d'expérience.
reporting line | le rattachement hiérarchique | Quel est le rattachement hiérarchique de ce poste ?
direct reports | les collaborateurs directs | Combien de collaborateurs directs aurais-je ?
headcount | l'effectif | Nous avons de l'effectif pour deux ingénieurs de plus.
turnover | le turnover ; la rotation du personnel | Pourquoi le turnover a-t-il été élevé dans cette équipe ?
psychological safety | la sécurité psychologique | La sécurité psychologique aide les équipes à s'exprimer.
work-life balance | l'équilibre vie professionnelle-vie privée | Comment l'équipe protège-t-elle l'équilibre vie pro-vie perso ?
remote-first | priorité au télétravail | C'est une entreprise qui privilégie le télétravail.
upskilling | le développement des compétences | L'entreprise investit dans le développement des compétences.
mentorship | le mentorat | Y a-t-il un mentorat formel pour les nouveaux managers ?
succession planning | la planification de la relève | Le poste fait partie de la planification de la relève.
fiduciary | fiduciaire | Les postes d'administrateur comportent des obligations fiduciaires.
due diligence | les vérifications préalables | Faites vos vérifications sur les finances de l'entreprise.
Glassdoor reviews | les avis Glassdoor | Les avis Glassdoor peuvent révéler des problèmes tôt.
up-front | franc ; transparent | Soyez transparent sur votre préavis.
underperform | être peu performant | Comment gérez-vous quelqu'un qui est peu performant ?
retention | la fidélisation | Quelle est votre stratégie de fidélisation des meilleurs éléments ?
blow your own trumpet | se lancer des fleurs | Ce n'est pas grave de se lancer un peu de fleurs.
a tough act to follow | difficile à égaler | Le dernier candidat sera difficile à égaler.
cut to the chase | aller droit au but | Je vais aller droit au but.
hit the ground running | être opérationnel tout de suite | Je peux être opérationnel tout de suite.
bring something to the table | apporter quelque chose | Chacun devrait apporter quelque chose.
a team player | quelqu'un qui a l'esprit d'équipe | J'ai l'esprit d'équipe.
a quick learner | quelqu'un qui apprend vite | J'apprends vite.
go above and beyond | aller au-delà des attentes | Je vais toujours au-delà des attentes.
fly under the radar | passer inaperçu | Vos points faibles ne passeront pas inaperçus.
in the running | encore en lice | Vous êtes encore en lice.
make the cut | être retenu | Seules cinq personnes seront retenues.
a perfect match | une adéquation parfaite | C'est une adéquation parfaite avec mes compétences.
throw a curveball | poser une question piège | Les recruteurs aiment poser des questions pièges.
talk the talk and walk the walk | joindre le geste à la parole | Il faut joindre le geste à la parole.
land the job | décrocher le poste | J'espère que tu décrocheras le poste !
`,
  phrases: `
Don't speak badly about your previous employer. | Ne dites pas de mal de votre ancien employeur.
Keep your answers short and to the point. | Faites des réponses courtes et pertinentes.
Tell me about a time you had to influence someone without authority. | Parlez-moi d'une fois où vous avez dû convaincre quelqu'un sans avoir d'autorité sur lui.
Walk me through a decision you made with incomplete information. | Racontez-moi une décision que vous avez prise avec des informations incomplètes.
Describe a project that failed and what you learned from it. | Décrivez un projet qui a échoué et ce que vous en avez appris.
Tell me about a time you disagreed with your manager. | Parlez-moi d'une fois où vous n'étiez pas d'accord avec votre responsable.
How do you handle an underperforming team member? | Comment gérez-vous un membre de l'équipe peu performant ?
Give me an example of how you've driven change in an organization. | Donnez-moi un exemple de changement que vous avez conduit dans une organisation.
How do you balance competing priorities from different stakeholders? | Comment arbitrez-vous entre les priorités concurrentes de différentes parties prenantes ?
Let me use the STAR method to answer that. | Laissez-moi répondre avec la méthode STAR.
The situation was a product launch that was three weeks behind schedule. | La situation : un lancement de produit qui avait trois semaines de retard.
My task was to get it back on track without cutting quality. | Ma mission était de le remettre sur les rails sans sacrifier la qualité.
I reprioritized the backlog and negotiated a phased release. | J'ai revu les priorités du backlog et négocié une sortie par étapes.
As a result, we launched on time and exceeded our first-quarter target by 15 percent. | Résultat : nous avons lancé à temps et dépassé notre objectif du premier trimestre de 15 %.
I took full ownership of the mistake and fixed the process so it wouldn't happen again. | J'ai assumé entièrement l'erreur et corrigé le processus pour qu'elle ne se reproduise pas.
In hindsight, I would have involved the client much earlier. | Avec le recul, j'aurais associé le client beaucoup plus tôt.
I'd rather make a timely decision and adjust than wait for perfect data. | Je préfère décider à temps et ajuster plutôt qu'attendre des données parfaites.
My leadership style is collaborative, but I'm not afraid to make the final call. | Mon style de management est collaboratif, mais je n'ai pas peur de trancher.
I believe in giving people autonomy while holding them accountable. | Je crois qu'il faut donner de l'autonomie tout en responsabilisant.
I invest heavily in developing the people on my team. | J'investis beaucoup dans le développement des membres de mon équipe.
Two of my direct reports have since been promoted to managers. | Deux de mes collaborateurs directs sont depuis devenus managers.
I build trust by being transparent about the reasons behind decisions. | Je crée la confiance en étant transparent sur les raisons des décisions.
I address conflict early, before it becomes personal. | Je traite les conflits tôt, avant qu'ils ne deviennent personnels.
I'm known for turning around struggling teams. | Je suis connu pour redresser les équipes en difficulté.
My track record speaks for itself. | Mes résultats parlent d'eux-mêmes.
I've consistently exceeded my targets for the past three years. | J'ai régulièrement dépassé mes objectifs ces trois dernières années.
I cut operating costs by 20 percent without any layoffs. | J'ai réduit les coûts d'exploitation de 20 % sans aucun licenciement.
My background in engineering gives me a different perspective on product decisions. | Ma formation d'ingénieur m'apporte un autre regard sur les décisions produit.
I made a deliberate career pivot from finance to tech. | J'ai délibérément quitté la finance pour la tech.
The skills are highly transferable: analysis, communication and managing risk. | Ces compétences sont très transférables : analyse, communication et gestion des risques.
I'm aware I may seem overqualified, but this role aligns with my long-term goals. | Je sais que je peux paraître surqualifié, mais ce poste correspond à mes objectifs à long terme.
The gap on my resume was a planned sabbatical to care for my father. | Le trou dans mon CV correspond à un congé sabbatique prévu pour m'occuper de mon père.
My previous role was made redundant in a restructuring. | Mon précédent poste a été supprimé lors d'une restructuration.
I left because the company's direction no longer matched my values. | Je suis parti parce que l'orientation de l'entreprise ne correspondait plus à mes valeurs.
What would success look like in this role after the first year? | À quoi ressemblerait la réussite dans ce poste au bout d'un an ?
What are the biggest challenges facing the team right now? | Quels sont les plus grands défis de l'équipe en ce moment ?
How does this role contribute to the company's strategy? | Comment ce poste contribue-t-il à la stratégie de l'entreprise ?
Why is this position open? | Pourquoi ce poste est-il à pourvoir ?
How would you describe the leadership culture here? | Comment décririez-vous la culture managériale ici ?
How does the company support professional development? | Comment l'entreprise soutient-elle le développement professionnel ?
What's the reporting line, and how much autonomy would I have? | À qui serais-je rattaché, et de quelle autonomie disposerais-je ?
Is there anything in my background that gives you pause? | Y a-t-il quelque chose dans mon parcours qui vous fait hésiter ?
I'd welcome the chance to address any concerns you might have. | Je serais heureux de répondre à vos éventuelles réserves.
I've prepared a 30-60-90 day plan for the role. | J'ai préparé un plan à 30, 60 et 90 jours pour le poste.
In my first month, I'd focus on listening and understanding the business. | Le premier mois, je me concentrerais sur l'écoute et la compréhension de l'activité.
Before we discuss numbers, could you share the salary range for this role? | Avant de parler chiffres, pourriez-vous m'indiquer la fourchette de salaire du poste ?
Based on my research and the scope of the role, I'm looking for 1.5 to 1.7 million a year. | D'après mes recherches et le périmètre du poste, je vise entre 1,5 et 1,7 million par an.
I'd prefer to discuss total compensation rather than base salary alone. | Je préférerais parler de rémunération globale plutôt que du seul fixe.
I'm very excited about the role, but the offer is below the market rate. | Le poste m'enthousiasme beaucoup, mais l'offre est en dessous du prix du marché.
Is there any flexibility on the base salary? | Y a-t-il une marge de manœuvre sur le fixe ?
If the base salary is fixed, could we look at a signing bonus instead? | Si le fixe n'est pas négociable, pourrions-nous envisager une prime de bienvenue ?
I have a competing offer, but your company is my first choice. | J'ai une offre concurrente, mais votre entreprise est mon premier choix.
Could you extend the deadline until Friday? | Pourriez-vous prolonger le délai jusqu'à vendredi ?
I'd like to see the full offer in writing before I resign. | J'aimerais voir l'offre complète par écrit avant de démissionner.
Could you clarify the terms of the non-compete clause? | Pourriez-vous préciser les termes de la clause de non-concurrence ?
How is the performance bonus calculated? | Comment la prime de performance est-elle calculée ?
What's the vesting schedule for the stock options? | Quel est le calendrier d'acquisition des stock-options ?
Is remote work an option, or is the role fully on-site? | Le télétravail est-il possible, ou le poste est-il entièrement sur site ?
My current employer made a counteroffer, but my decision is about growth, not money. | Mon employeur actuel m'a fait une contre-proposition, mais ma décision porte sur l'évolution, pas sur l'argent.
I appreciate the offer, and I'm delighted to accept. | Je vous remercie pour cette offre, et je l'accepte avec plaisir.
After careful consideration, I've decided to pursue another opportunity. | Après mûre réflexion, j'ai décidé de saisir une autre opportunité.
I hope our paths cross again in the future. | J'espère que nos chemins se recroiseront.
Behavioral questions assume that past behavior predicts future performance. | Les questions comportementales partent du principe que le comportement passé prédit la performance future.
Quantify your achievements wherever possible. | Chiffrez vos réalisations chaque fois que possible.
Interviewers listen for "I", not just "we", to see your own contribution. | Les recruteurs guettent le « je », pas seulement le « nous », pour voir votre propre contribution.
Never badmouth a former employer, however justified it feels. | Ne dénigrez jamais un ancien employeur, même si cela vous semble justifié.
The interview is a two-way street: you're assessing them too. | L'entretien va dans les deux sens : vous les évaluez aussi.
Pay attention to red flags, like vague answers about turnover. | Soyez attentif aux signaux d'alarme, comme des réponses vagues sur le turnover.
Culture fit can become an excuse for hiring people just like ourselves. | L'adéquation culturelle peut devenir un prétexte pour recruter des gens qui nous ressemblent.
Structured interviews reduce bias and are better predictors of performance. | Les entretiens structurés réduisent les biais et prédisent mieux la performance.
Panel interviews spread the decision across several people. | Les entretiens devant un jury répartissent la décision entre plusieurs personnes.
Case interviews test how you structure an ambiguous problem. | Les études de cas évaluent votre façon de structurer un problème ambigu.
Think out loud so the interviewer can follow your reasoning. | Réfléchissez à voix haute pour que le recruteur suive votre raisonnement.
It's fine to ask for a moment to think before answering. | On peut tout à fait demander un moment pour réfléchir avant de répondre.
Silence is better than rambling. | Mieux vaut le silence que les divagations.
Tailor your examples to the competencies in the job description. | Adaptez vos exemples aux compétences de la fiche de poste.
Most offers are negotiable, but few candidates negotiate. | La plupart des offres sont négociables, mais peu de candidats négocient.
Anchoring high gives you room to compromise. | Viser haut d'entrée vous laisse de la marge pour faire des concessions.
Never accept an offer on the spot; ask for time to review it. | N'acceptez jamais une offre sur-le-champ ; demandez du temps pour l'examiner.
A verbal offer isn't final until it's in writing. | Une offre verbale n'est définitive qu'une fois écrite.
Offers can be rescinded, so don't resign until everything is confirmed. | Les offres peuvent être retirées, alors ne démissionnez pas avant que tout soit confirmé.
Background and reference checks are standard for senior roles. | La vérification des antécédents et des références est courante pour les postes de direction.
Let your references know they may be contacted. | Prévenez vos références qu'elles pourraient être contactées.
Ghosting candidates after a final interview is unprofessional. | Laisser un candidat sans nouvelles après un dernier entretien n'est pas professionnel.
Pay transparency laws are changing how salary negotiations work. | Les lois sur la transparence salariale changent la façon de négocier les salaires.
Some places now ban employers from asking about salary history. | Certains endroits interdisent désormais aux employeurs de demander l'historique de salaire.
AI tools now screen many resumes before a human ever sees them. | Des outils d'IA trient désormais de nombreux CV avant qu'un humain ne les voie.
Use keywords from the job description so your resume isn't filtered out. | Reprenez les mots clés de la fiche de poste pour que votre CV ne soit pas écarté.
Networking opens doors that applications alone can't. | Le réseau ouvre des portes que les seules candidatures ne peuvent pas ouvrir.
An informational interview is a low-pressure way to learn about a company. | Un entretien d'information est un moyen détendu de découvrir une entreprise.
Your online presence is part of your first impression. | Votre présence en ligne fait partie de la première impression.
Rejection is rarely personal; it's often about timing or fit. | Un refus est rarement personnel ; c'est souvent une question de moment ou d'adéquation.
Ask for feedback, even when you don't get the job. | Demandez un retour, même quand vous n'obtenez pas le poste.
Every interview is practice for the next one. | Chaque entretien est un entraînement pour le suivant.
The best candidates come across as curious, not desperate. | Les meilleurs candidats paraissent curieux, pas désespérés.
Confidence comes from preparation. | L'assurance vient de la préparation.
Be honest; inconsistencies tend to come out in reference checks. | Soyez honnête ; les incohérences ressortent souvent lors de la prise de références.
I'm confident I can add real value to your team. | Je suis convaincu de pouvoir apporter une vraie valeur ajoutée à votre équipe.
I'd welcome the opportunity to take this conversation further. | Je serais ravi de poursuivre cette conversation.
How many direct reports would I have? | Combien de collaborateurs directs aurais-je ?
What is the budget and headcount for the team? | Quels sont le budget et l'effectif de l'équipe ?
How has the role evolved since it was created? | Comment le poste a-t-il évolué depuis sa création ?
`,
});
