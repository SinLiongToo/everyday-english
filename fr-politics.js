// 法文對照（Français）：政治
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


addFrench("politics", {
  words: `
vote | voter | Je vais voter samedi.
president | le président | Le président a fait un discours.
government | le gouvernement | Le gouvernement a construit un nouveau parc.
law | la loi | Tout le monde doit respecter la loi.
country | le pays | Mon pays a beaucoup de montagnes.
election | l'élection | L'élection a lieu le mois prochain.
people | le peuple | Le peuple veut une vie meilleure.
leader | le dirigeant | C'est une dirigeante forte.
mayor | le maire | Le maire a inauguré la nouvelle bibliothèque.
city | la ville | Notre ville grandit vite.
flag | le drapeau | Beaucoup de maisons arborent un drapeau le jour de la fête nationale.
freedom | la liberté | La liberté d'expression est importante.
rights | les droits | Tout le monde a les mêmes droits.
safe | sûr | Nous voulons des rues sûres.
army | l'armée | Il a servi un an dans l'armée.
war | la guerre | Personne ne veut la guerre.
peace | la paix | Nous espérons tous la paix.
world | le monde | Le monde change vite.
choose | choisir | Les électeurs choisissent leurs dirigeants.
agree | être d'accord | Je suis d'accord avec toi.
idea | l'idée | C'est une excellente idée.
public | public | La bibliothèque publique est gratuite.
citizen | le citoyen | Chaque citoyen peut voter à dix-huit ans.
power | le pouvoir | Le président a beaucoup de pouvoir.
fair | équitable | L'élection a été libre et équitable.
problem | le problème | La circulation est un gros problème dans notre ville.
speech | le discours | Le maire a fait un court discours.
poor | pauvre | Nous devons aider les familles pauvres.
rich | riche | Les riches devraient-ils payer plus d'impôts ?
change | le changement | Nous avons besoin de changement.
member | le membre | Elle est membre du conseil municipal.
promise | la promesse | Les politiciens font beaucoup de promesses.
against | contre | Beaucoup de gens sont contre la nouvelle route.
community | la communauté | Nous nettoyons ensemble le parc du quartier.
king | le roi | Le roi vit dans un palais.
queen | la reine | La reine a salué la foule.
police | la police | La police nous protège.
court | le tribunal | L'affaire est allée au tribunal.
judge | le juge | Le juge a rendu une décision équitable.
rule | la règle | Qui fait les règles ?
help | aider | Le gouvernement devrait aider les agriculteurs.
jobs | les emplois | Les gens veulent plus d'emplois.
health | la santé | Les soins de santé sont importants.
free | gratuit | Le déjeuner à l'école est gratuit ici.
equal | égal | Tous les êtres humains sont égaux.
voter | l'électeur | Chaque électeur a une voix.
win | gagner | Qui va gagner l'élection ?
lose | perdre | Le maire risque de perdre cette fois.
yes | oui | Je vote oui à cette question.
no | non | Beaucoup de gens ont voté non.
group | le groupe | Un petit groupe de personnes a lancé le changement.
talk | discuter | Les deux dirigeants discuteront demain.
listen | écouter | Les dirigeants devraient écouter le peuple.
nation | la nation | La nation est en fête aujourd'hui.
border | la frontière | La frontière est fermée.
soldier | le soldat | Le soldat protège le pays.
enemy | l'ennemi | N'en fais pas ton ennemi.
danger | le danger | La ville est en danger.
protect | protéger | La loi protège les enfants.
pay | payer | Nous payons des impôts chaque année.
clean | propre | Nous voulons un air propre.
build | construire | La ville va construire un nouveau pont.
meet | se rencontrer | Les deux présidents se rencontreront à Paris.
fight | se battre | Ils se battent pour la liberté.
hope | espérer | Nous espérons un avenir meilleur.
office | le bureau | Le bureau du maire est au dernier étage.
national | national | Aujourd'hui, c'est un jour férié national.
capital | la capitale | Tokyo est la capitale du Japon.
prime minister | le Premier ministre | Le Premier ministre a visité l'école.
governor | le gouverneur | Le gouverneur a fait un discours.
ballot box | l'urne | Mets ton bulletin dans l'urne.
ID card | la carte d'identité | Apporte ta carte d'identité pour voter.
poster | l'affiche | Il y a des affiches électorales partout.
news | les informations | Je regarde les informations tous les soirs.
TV | la télé | Le président passe à la télé.
map | la carte | Trouve notre pays sur la carte.
island | l'île | Taïwan est une île.
state | l'État | Chaque État a ses propres lois.
city hall | la mairie | Le maire travaille à la mairie.
money | l'argent | Le gouvernement utilise l'argent des impôts.
school | l'école | La ville a construit une nouvelle école.
park | le parc | Nous avons besoin de plus de parcs.
road | la route | Le gouvernement a réparé la route.
bridge | le pont | Ils ont construit un nouveau pont.
hospital | l'hôpital | La ville a besoin d'un hôpital.
plan | le plan | Quel est le plan du maire ?
decide | décider | C'est le peuple qui décide.
lead | diriger | Qui va diriger le pays ?
follow | respecter | Tout le monde doit respecter la loi.
ask | demander | Les journalistes posent des questions au président.
answer | répondre | Il n'a pas répondu à la question.
true | vrai | Cette histoire est vraie ?
false | faux | Cette affirmation est fausse.
right | le droit | Voter est ton droit.
wrong | injuste | Cette loi est injuste.
honest | honnête | Nous voulons un dirigeant honnête.
strong | fort | Nous avons besoin d'une économie forte.
weak | faible | L'économie est faible.
angry | en colère | Les gens sont en colère à cause des prix.
happy | content | Ses partisans sont contents.
`,
  phrases: `
Are you going to vote? | Tu vas voter ?
I think it's a good idea. | Je pense que c'est une bonne idée.
I don't agree. | Je ne suis pas d'accord.
Who is the president? | Qui est le président ?
Who is the mayor of this city? | Qui est le maire de cette ville ?
The election is next month. | L'élection a lieu le mois prochain.
When is the election? | Quand a lieu l'élection ?
Did you vote? | Tu as voté ?
I voted today. | J'ai voté aujourd'hui.
Where do I vote? | Où est-ce que je vote ?
I'm old enough to vote now. | J'ai maintenant l'âge de voter.
Everyone should vote. | Tout le monde devrait voter.
Who will you vote for? | Tu vas voter pour qui ?
That's a secret. | C'est un secret.
Who won the election? | Qui a gagné l'élection ?
She won the election. | Elle a gagné l'élection.
He lost the election. | Il a perdu l'élection.
The votes are being counted. | Les votes sont en cours de dépouillement.
This is a new law. | C'est une nouvelle loi.
The government is building a new road. | Le gouvernement construit une nouvelle route.
Taxes are going up. | Les impôts augmentent.
I pay my taxes. | Je paie mes impôts.
The mayor gave a speech. | Le maire a fait un discours.
The president is on TV. | Le président passe à la télé.
I don't like politics. | Je n'aime pas la politique.
I'm interested in politics. | Je m'intéresse à la politique.
Politics is complicated. | La politique, c'est compliqué.
What do you think? | Qu'est-ce que tu en penses ?
I agree with you. | Je suis d'accord avec toi.
That's a good idea. | C'est une bonne idée.
That's not fair. | Ce n'est pas juste.
Everyone has the right to speak. | Tout le monde a le droit de s'exprimer.
People are protesting. | Les gens manifestent.
There's a protest downtown. | Il y a une manifestation en centre-ville.
They want change. | Ils veulent du changement.
The police are here. | La police est là.
We live in a democracy. | Nous vivons en démocratie.
Freedom is important. | La liberté est importante.
Every vote counts. | Chaque voix compte.
The country has a new leader. | Le pays a un nouveau dirigeant.
The leaders had a meeting. | Les dirigeants se sont réunis.
The two countries are friends. | Les deux pays sont amis.
They signed an agreement. | Ils ont signé un accord.
I want peace. | Je veux la paix.
War is terrible. | La guerre est terrible.
The army protects the country. | L'armée protège le pays.
Taiwan is an island. | Taïwan est une île.
What's the capital city? | Quelle est la capitale ?
This is the flag of our country. | Voici le drapeau de notre pays.
I'm proud of my country. | Je suis fier de mon pays.
The government helps poor people. | Le gouvernement aide les pauvres.
Schools are free here. | Ici, l'école est gratuite.
Healthcare is important. | La santé est importante.
Prices are too high. | Les prix sont trop élevés.
We need more jobs. | Nous avons besoin de plus d'emplois.
We need cleaner air. | Nous avons besoin d'un air plus propre.
Young people want a better future. | Les jeunes veulent un avenir meilleur.
The candidates are on TV tonight. | Les candidats passent à la télé ce soir.
Let's watch the debate. | Regardons le débat.
What did he promise? | Qu'est-ce qu'il a promis ?
He promised lower taxes. | Il a promis de baisser les impôts.
I don't trust him. | Je ne lui fais pas confiance.
She is honest. | Elle est honnête.
The law says you can't do that. | La loi dit qu'on ne peut pas faire ça.
Follow the rules. | Respecte les règles.
That's against the law. | C'est illégal.
The court made a decision. | Le tribunal a rendu sa décision.
The judge is fair. | Le juge est impartial.
The city has a new park. | La ville a un nouveau parc.
The city council meets on Monday. | Le conseil municipal se réunit lundi.
Write to your representative. | Écris à ton représentant.
Join the meeting and share your ideas. | Participe à la réunion et partage tes idées.
I signed a petition. | J'ai signé une pétition.
Our school had a class election. | Notre école a organisé une élection de délégués.
I was elected class leader. | J'ai été élu délégué de classe.
Let's take a vote. | Votons.
Raise your hand if you agree. | Levez la main si vous êtes d'accord.
Most people said yes. | La plupart des gens ont dit oui.
The majority wins. | La majorité l'emporte.
Everyone is equal. | Tout le monde est égal.
Men and women have the same rights. | Les hommes et les femmes ont les mêmes droits.
Be kind to everyone. | Sois gentil avec tout le monde.
People have different opinions. | Les gens ont des opinions différentes.
It's okay to disagree. | On a le droit de ne pas être d'accord.
Let's talk about it calmly. | Parlons-en calmement.
Don't fight about politics. | Ne vous disputez pas à propos de politique.
Read the news every day. | Lis les informations tous les jours.
Who makes the laws? | Qui fait les lois ?
The parliament makes the laws. | Le parlement fait les lois.
The prime minister is visiting Japan. | Le Premier ministre est en visite au Japon.
The minister resigned. | Le ministre a démissionné.
There's a holiday on election day. | Le jour de l'élection est férié.
Bring your ID card to vote. | Apporte ta carte d'identité pour voter.
Polling stations open at eight. | Les bureaux de vote ouvrent à huit heures.
Put your ballot in the box. | Mets ton bulletin dans l'urne.
The results come out tonight. | Les résultats sortent ce soir.
Who do you think will win? | À ton avis, qui va gagner ?
Politics affects everyone. | La politique concerne tout le monde.
The government should listen to the people. | Le gouvernement devrait écouter le peuple.
I want a good leader. | Je veux un bon dirigeant.
`,
});

addFrench("politics", {
  words: `
candidate | le candidat | Quel candidat soutiens-tu ?
policy | la politique | La nouvelle politique aide les jeunes familles.
tax | l'impôt | Le gouvernement prévoit d'augmenter les impôts.
campaign | la campagne | La campagne commence en juillet.
debate | le débat | Tu as regardé le débat hier soir ?
protest | la manifestation | Des milliers de personnes ont rejoint la manifestation.
democracy | la démocratie | Taïwan est une démocratie dynamique.
legislature | le corps législatif | Le corps législatif a voté le budget.
political party | le parti politique | Quel parti politique soutiens-tu ?
opposition | l'opposition | L'opposition a critiqué le projet.
ruling party | le parti au pouvoir | Le parti au pouvoir a perdu plusieurs sièges.
minister | le ministre | Le ministre de la Santé a tenu une conférence de presse.
cabinet | le gouvernement | Le gouvernement se réunit tous les jeudis.
constitution | la constitution | La constitution protège la liberté d'expression.
referendum | le référendum | Le référendum n'a pas été adopté.
poll | le sondage | Le dernier sondage montre une course serrée.
majority | la majorité | Le projet de loi a besoin d'une majorité pour être adopté.
minority | la minorité | Les minorités ont aussi besoin d'une voix.
reform | la réforme | La réforme des retraites est un sujet brûlant.
corruption | la corruption | Le maire a été arrêté pour corruption.
scandal | le scandale | Le scandale a mis fin à sa carrière.
welfare | la protection sociale | Les programmes de protection sociale aident les familles modestes.
immigration | l'immigration | La politique d'immigration fait débat.
economy | l'économie | L'économie est la première préoccupation des électeurs.
unemployment | le chômage | Le chômage des jeunes augmente.
inflation | l'inflation | L'inflation rend tout plus cher.
diplomacy | la diplomatie | La diplomatie vaut mieux que le conflit.
ballot | le bulletin de vote | Remplis ton bulletin de vote clairement.
turnout | la participation | La participation a dépassé soixante-dix pour cent.
spokesperson | le porte-parole | Un porte-parole du gouvernement a démenti l'information.
approval rating | la cote de popularité | La cote de popularité du président a baissé.
lobby | faire du lobbying | Les entreprises font du lobbying auprès des législateurs pour obtenir des règles favorables.
term | le mandat | Le président effectue un mandat de quatre ans.
council | le conseil | Le conseil municipal se réunit le lundi.
councilor | le conseiller | Notre conseiller a répondu à chaque e-mail.
lawmaker | le législateur | Les législateurs ont adopté le nouveau projet de loi.
bill | le projet de loi | Le projet de loi a passé la première lecture.
amendment | l'amendement | L'amendement nécessite le soutien des deux tiers.
recount | le recomptage | Le candidat a exigé un recomptage.
polling station | le bureau de vote | Le bureau de vote ouvre à huit heures.
absentee voting | le vote par correspondance | Certains pays autorisent le vote par correspondance.
platform | le programme | Son programme est centré sur le logement.
slogan | le slogan | Chaque campagne a besoin d'un slogan accrocheur.
rally | le meeting | Des milliers de personnes ont assisté au meeting.
supporter | le partisan | Les partisans ont agité des drapeaux toute la nuit.
public opinion | l'opinion publique | L'opinion publique s'est retournée contre le projet.
press release | le communiqué de presse | Le parti a publié un communiqué de presse.
policymaker | le décideur | Les décideurs doivent agir face au changement climatique.
regulation | la réglementation | De nouvelles réglementations visent les plateformes en ligne.
subsidy | la subvention | Les agriculteurs reçoivent une subvention du gouvernement.
pension | la retraite | La réforme des retraites a provoqué des manifestations.
minimum wage | le salaire minimum | Le salaire minimum a augmenté cette année.
human rights | les droits de l'homme | Les droits de l'homme doivent être protégés.
equality | l'égalité | Le mariage pour tous est devenu loi en 2019.
justice | la justice | Les gens ont manifesté pour la justice.
national defense | la défense nationale | Les dépenses de défense nationale ont augmenté.
treaty | le traité | Les deux pays ont signé un traité.
alliance | l'alliance | L'alliance compte trente membres.
summit | le sommet | Les dirigeants mondiaux se sont réunis au sommet.
recall | la révocation | Les électeurs ont lancé une procédure de révocation contre le maire.
term limit | la limitation des mandats | Le président est soumis à une limite de deux mandats.
resignation | la démission | Le ministre a présenté sa démission.
bribery | la corruption active | Il a été inculpé de corruption.
budget deficit | le déficit budgétaire | Le déficit budgétaire ne cesse de se creuser.
public spending | les dépenses publiques | Les dépenses publiques de santé ont augmenté.
civil servant | le fonctionnaire | Ma mère est fonctionnaire.
vice president | le vice-président | Le vice-président a reçu des invités étrangers.
premier | le Premier ministre | Le Premier ministre a annoncé un nouveau budget.
legislator | le député | Le député a proposé un nouveau projet de loi.
speaker | le président de l'assemblée | Le président de l'assemblée a ouvert la séance.
mayoral race | l'élection municipale | L'élection municipale est très serrée.
primary | la primaire | Elle a gagné la primaire du parti.
nominee | le candidat désigné | Il est le candidat désigné du parti pour la présidentielle.
running mate | le colistier | Elle a choisi un jeune colistier.
exit poll | le sondage de sortie des urnes | Les sondages de sortie des urnes montrent une course serrée.
vote count | le dépouillement | Le dépouillement a duré toute la nuit.
concede | reconnaître sa défaite | Il a reconnu sa défaite à minuit.
inauguration | l'investiture | L'investiture a lieu le 20 mai.
swearing-in | la prestation de serment | La prestation de serment a été retransmise en direct.
transition | la passation de pouvoir | La passation de pouvoir s'est faite sans heurts.
press secretary | l'attaché de presse | L'attaché de presse a répondu aux questions des journalistes.
interpellation | l'interpellation | Le ministre a fait face à une interpellation difficile.
hearing | l'audition | La commission a tenu une audition sur la sécurité alimentaire.
motion | la motion | La motion a été adoptée à une large majorité.
quorum | le quorum | La réunion n'avait pas le quorum.
session | la session | La session parlementaire se termine en mai.
agenda | l'ordre du jour | Le logement est en tête de l'ordre du jour.
public hearing | la consultation publique | Des habitants ont pris la parole lors de la consultation publique.
petition | la pétition | Des milliers de personnes ont signé la pétition.
sit-in | le sit-in | Des étudiants ont organisé un sit-in.
march | la marche | La marche a traversé le centre-ville.
riot police | les CRS | Les CRS bordaient la rue.
tear gas | le gaz lacrymogène | La police a utilisé du gaz lacrymogène contre la foule.
curfew | le couvre-feu | La ville a imposé un couvre-feu.
freedom of speech | la liberté d'expression | La liberté d'expression est protégée par la loi.
free press | la liberté de la presse | La liberté de la presse oblige les dirigeants à rendre des comptes.
independence | l'indépendance | Le pays a célébré son indépendance.
unification | l'unification | Certains partis soutiennent l'unification, d'autres s'y opposent.
cross-strait | entre les deux rives du détroit | Les relations entre les deux rives du détroit influencent le commerce.
foreign aid | l'aide étrangère | Le pays envoie de l'aide étrangère à ses alliés.
a political football | un enjeu politique | La santé est devenue un enjeu de querelles politiques.
toe the line | rentrer dans le rang | Les membres doivent rentrer dans le rang.
flip-flop | retourner sa veste | Le sénateur a retourné sa veste sur les impôts.
mudslinging | les attaques personnelles | La campagne était pleine d'attaques personnelles.
on the fence | indécis | Beaucoup d'électeurs sont indécis.
throw your hat in the ring | se porter candidat | Pourquoi ne pas te porter candidat ?
cross the aisle | travailler avec l'autre camp | Il est prêt à travailler avec l'autre camp.
red tape | la paperasserie | Réduisez la paperasserie.
smoke-filled room | les tractations en coulisses | Ça s'est décidé dans les coulisses.
a hot potato | une patate chaude | L'immigration est une patate chaude.
spin doctor | le conseiller en communication | Les conseillers en communication sont très occupés.
bite the bullet | serrer les dents | Le gouvernement doit serrer les dents.
`,
});

addFrench("politics", {
  phrases: `
What's your stance on this issue? | Quelle est ta position sur ce sujet ?
It's a controversial topic. | C'est un sujet controversé.
I see your point, but... | Je comprends ton point de vue, mais...
Voter turnout was higher than expected. | La participation a été plus forte que prévu.
The polls suggest it's going to be a close race. | Les sondages laissent penser que la course sera serrée.
The ruling party lost its majority. | Le parti au pouvoir a perdu sa majorité.
The opposition has gained a lot of support. | L'opposition a gagné beaucoup de soutien.
She's running for mayor. | Elle se présente à la mairie.
He announced his candidacy yesterday. | Il a annoncé sa candidature hier.
The campaign is getting really negative. | La campagne devient vraiment négative.
They're spending millions on advertising. | Ils dépensent des millions en publicité.
What's their position on immigration? | Quelle est leur position sur l'immigration ?
I don't think they'll keep their promises. | Je ne pense pas qu'ils tiendront leurs promesses.
Politicians always say one thing and do another. | Les politiciens disent toujours une chose et en font une autre.
I'm undecided about who to vote for. | Je ne sais pas encore pour qui voter.
I usually vote for the same party. | Je vote généralement pour le même parti.
I'm a swing voter. | Je suis un électeur indécis.
Young people are more politically engaged than before. | Les jeunes sont plus engagés politiquement qu'avant.
I watched the presidential debate last night. | J'ai regardé le débat présidentiel hier soir.
Neither candidate really answered the question. | Aucun des deux candidats n'a vraiment répondu à la question.
He dodged the question about corruption. | Il a esquivé la question sur la corruption.
The scandal could cost him the election. | Le scandale pourrait lui coûter l'élection.
There have been calls for him to resign. | Des voix réclament sa démission.
The minister has been accused of corruption. | Le ministre a été accusé de corruption.
The investigation is still ongoing. | L'enquête est toujours en cours.
The bill was passed by a narrow margin. | Le projet de loi a été adopté de justesse.
The new law takes effect next year. | La nouvelle loi entre en vigueur l'année prochaine.
The government has announced a new policy on housing. | Le gouvernement a annoncé une nouvelle politique du logement.
The budget includes more spending on defense. | Le budget prévoit plus de dépenses pour la défense.
They're raising the minimum wage. | Ils augmentent le salaire minimum.
The pension reform was very controversial. | La réforme des retraites a été très controversée.
Opinion is divided on the issue. | Les avis sont partagés sur la question.
There's a referendum next month. | Il y a un référendum le mois prochain.
I'm not sure how I'll vote on the referendum. | Je ne sais pas comment je voterai au référendum.
Thousands of people took to the streets. | Des milliers de personnes sont descendues dans la rue.
The protest was peaceful. | La manifestation était pacifique.
Freedom of speech is protected by the constitution. | La liberté d'expression est protégée par la constitution.
The courts are independent of the government. | Les tribunaux sont indépendants du gouvernement.
The president has a four-year term. | Le président a un mandat de quatre ans.
She's serving her second term. | Elle effectue son deuxième mandat.
The cabinet was reshuffled. | Le gouvernement a été remanié.
He was appointed foreign minister. | Il a été nommé ministre des Affaires étrangères.
The legislature is in session. | Le parlement est en session.
The debate in parliament got heated. | Le débat au parlement s'est envenimé.
The two parties are deeply divided. | Les deux partis sont profondément divisés.
They need to find common ground. | Ils doivent trouver un terrain d'entente.
The coalition government collapsed. | Le gouvernement de coalition s'est effondré.
A snap election has been called. | Des élections anticipées ont été convoquées.
Local elections often focus on everyday issues. | Les élections locales portent souvent sur les questions du quotidien.
The city is investing in public transport. | La ville investit dans les transports en commun.
Taxpayers' money should be spent wisely. | L'argent des contribuables doit être dépensé avec sagesse.
The government needs to be more transparent. | Le gouvernement doit être plus transparent.
Lobbyists have too much influence. | Les lobbyistes ont trop d'influence.
The media plays an important role in a democracy. | Les médias jouent un rôle important dans une démocratie.
I try to read news from different sources. | J'essaie de lire des informations de sources différentes.
Social media has changed how campaigns are run. | Les réseaux sociaux ont changé la façon de mener les campagnes.
There's a lot of misinformation going around. | Beaucoup de fausses informations circulent.
The two leaders met to discuss trade. | Les deux dirigeants se sont rencontrés pour parler commerce.
They agreed to cooperate on climate change. | Ils ont convenu de coopérer sur le changement climatique.
The talks ended without an agreement. | Les négociations se sont terminées sans accord.
Tensions between the two countries are rising. | Les tensions entre les deux pays augmentent.
The government condemned the attack. | Le gouvernement a condamné l'attaque.
Sanctions have been imposed on the country. | Des sanctions ont été imposées au pays.
The embassy has issued a travel warning. | L'ambassade a émis un avertissement aux voyageurs.
Taiwan's international space is limited. | L'espace international de Taïwan est limité.
Cross-strait relations are a key issue in every election. | Les relations entre les deux rives du détroit sont un enjeu clé de chaque élection.
Many people want to maintain the status quo. | Beaucoup de gens veulent maintenir le statu quo.
Human rights should be respected everywhere. | Les droits de l'homme devraient être respectés partout.
Women are still underrepresented in politics. | Les femmes sont encore sous-représentées en politique.
I think we need more young politicians. | Je pense qu'il nous faut plus de jeunes politiciens.
I've never been very political. | Je n'ai jamais été très politisé.
I avoid talking about politics with my family. | J'évite de parler politique en famille.
We agreed to disagree. | Nous sommes convenus de ne pas être d'accord.
It's important to listen to the other side. | Il est important d'écouter l'autre camp.
Everyone is entitled to their own opinion. | Chacun a droit à son opinion.
That's a matter of opinion. | C'est une question d'opinion.
I'm not convinced by their argument. | Leur argument ne me convainc pas.
They make a good point, though. | Ils soulèvent quand même un bon point.
What's the government doing about housing prices? | Que fait le gouvernement contre les prix du logement ?
The cost of living is the biggest issue for most voters. | Le coût de la vie est la principale préoccupation de la plupart des électeurs.
The economy will decide this election. | L'économie décidera de cette élection.
Unemployment has fallen this year. | Le chômage a baissé cette année.
Inflation is hurting ordinary families. | L'inflation pèse sur les familles ordinaires.
They promised to cut red tape for small businesses. | Ils ont promis de réduire la paperasserie pour les petites entreprises.
The policy is popular with older voters. | Cette politique plaît aux électeurs âgés.
The policy has been criticized by environmental groups. | Cette politique a été critiquée par les groupes écologistes.
Public opinion has shifted on this issue. | L'opinion publique a évolué sur cette question.
The government's approval rating has dropped. | La cote de popularité du gouvernement a baissé.
He conceded defeat last night. | Il a reconnu sa défaite hier soir.
She thanked her supporters in her victory speech. | Elle a remercié ses partisans dans son discours de victoire.
The new government will be sworn in next month. | Le nouveau gouvernement prêtera serment le mois prochain.
There will be a peaceful transfer of power. | Il y aura une passation de pouvoir pacifique.
Democracy takes work to protect. | La démocratie demande des efforts pour être protégée.
Change takes time. | Le changement prend du temps.
I hope things get better. | J'espère que les choses vont s'améliorer.
It's our responsibility as citizens to stay informed. | En tant que citoyens, il est de notre responsabilité de rester informés.
Get involved in your community. | Engage-toi dans ta communauté.
Make your voice heard. | Fais entendre ta voix.
The recall vote failed to reach the threshold. | Le vote de révocation n'a pas atteint le seuil requis.
Both parties claim to represent the middle class. | Les deux partis prétendent représenter la classe moyenne.
`,
});

addFrench("politics", {
  words: `
legislation | la législation | Une nouvelle législation protégera la vie privée en ligne.
bipartisan | transpartisan | Le projet de loi sur le climat a reçu un soutien transpartisan.
polarization | la polarisation | La polarisation politique rend le compromis difficile.
accountability | la responsabilité | Les électeurs exigent que leurs dirigeants rendent des comptes.
grassroots | populaire | C'est parti d'un mouvement populaire.
sovereignty | la souveraineté | Le traité respecte la souveraineté de chaque nation.
populism | le populisme | Le populisme progresse dans le monde entier.
ideology | l'idéologie | Leur idéologie façonne chaque politique.
partisan | partisan | Le débat est devenu âprement partisan.
gerrymandering | le charcutage électoral | Le charcutage électoral fausse les résultats des élections.
filibuster | l'obstruction parlementaire | Le sénateur a lancé une obstruction pour bloquer le projet de loi.
coalition | la coalition | Les partis ont formé un gouvernement de coalition.
mandate | le mandat | Sa victoire écrasante lui a donné un mandat clair.
incumbent | le sortant | Le sortant a été réélu pour un second mandat.
constituency | la circonscription | Il écoute toujours sa circonscription.
checks and balances | les contre-pouvoirs | Les contre-pouvoirs empêchent les abus de pouvoir.
separation of powers | la séparation des pouvoirs | La séparation des pouvoirs est inscrite dans la constitution.
judicial independence | l'indépendance de la justice | L'indépendance de la justice est vitale pour la démocratie.
civil liberties | les libertés civiles | La nouvelle loi suscite des inquiétudes pour les libertés civiles.
authoritarian | autoritaire | Les régimes autoritaires réduisent souvent la presse au silence.
geopolitics | la géopolitique | Les semi-conducteurs sont désormais au cœur de la géopolitique.
sanctions | les sanctions | L'ONU a imposé des sanctions au régime.
soft power | le soft power | La culture populaire est une source de soft power.
transparency | la transparence | Les électeurs veulent plus de transparence dans les dépenses.
rhetoric | la rhétorique | Sa rhétorique divisait.
propaganda | la propagande | Les médias d'État ont diffusé de la propagande pendant la guerre.
landslide | le raz-de-marée | Elle a gagné avec un raz-de-marée électoral.
swing voter | l'électeur indécis | Les candidats ciblent les électeurs indécis la dernière semaine.
lame duck | en fin de mandat | Un président en fin de mandat a peu d'influence.
veto | le veto | Le président pourrait opposer son veto au projet de loi.
impeachment | la destitution | Le vote de destitution a échoué.
electorate | l'électorat | L'électorat est profondément divisé.
consensus | le consensus | La commission est parvenue à un consensus.
technocrat | le technocrate | Le gouvernement est plein de technocrates.
demagogue | le démagogue | Le démagogue a exploité les peurs des électeurs.
nationalism | le nationalisme | La montée du nationalisme inquiète les voisins.
isolationism | l'isolationnisme | L'isolationnisme gagne du terrain.
multilateralism | le multilatéralisme | L'ONU repose sur le multilatéralisme.
deterrence | la dissuasion | La dissuasion vise à empêcher la guerre.
escalation | l'escalade | Les deux camps veulent éviter l'escalade.
de-escalation | la désescalade | Les diplomates ont poussé à la désescalade.
status quo | le statu quo | La plupart des gens préfèrent le statu quo.
self-determination | l'autodétermination | Le peuple a droit à l'autodétermination.
rule of law | l'État de droit | L'État de droit protège tout le monde.
due process | la procédure régulière | Chacun a droit à une procédure régulière.
oversight | le contrôle | Le parlement exerce un contrôle sur les dépenses.
pork barrel | le clientélisme électoral | Les critiques ont parlé de clientélisme électoral.
patronage | le favoritisme | Les nominations par favoritisme minent la confiance.
cronyism | le copinage | Le copinage est endémique au ministère.
kleptocracy | la kleptocratie | Le régime était une kleptocratie.
regime change | le changement de régime | Un changement de régime apporte rarement la stabilité.
coup | le coup d'État | L'armée a mené un coup d'État.
martial law | la loi martiale | Taïwan a levé la loi martiale en 1987.
transitional justice | la justice transitionnelle | La justice transitionnelle traite les abus du passé.
civil society | la société civile | Une société civile forte oblige les gouvernements à rendre des comptes.
think tank | le groupe de réflexion | Un groupe de réflexion a publié le rapport.
fiscal policy | la politique budgétaire | La politique budgétaire influence la croissance économique.
austerity | l'austérité | Les mesures d'austérité ont réduit les services publics.
welfare state | l'État-providence | Les pays nordiques sont des États-providence classiques.
redistribution | la redistribution | Les impôts permettent la redistribution des richesses.
electoral reform | la réforme électorale | Une réforme électorale pourrait aider les petits partis.
proportional representation | la représentation proportionnelle | La représentation proportionnelle donne des sièges aux petits partis.
hung parliament | le parlement sans majorité | L'élection a produit un parlement sans majorité.
caretaker government | le gouvernement intérimaire | Un gouvernement intérimaire dirige le pays jusqu'aux élections.
realpolitik | la realpolitik | La realpolitik l'emporte souvent sur les idéaux.
hawkish | belliciste | Le ministre a adopté une position belliciste.
polity | l'entité politique | Taïwan est une entité politique démocratique dynamique.
suffrage | le droit de vote | Les femmes ont obtenu le droit de vote au XXe siècle.
enfranchise | accorder le droit de vote | La réforme accordera le droit de vote aux jeunes de 18 ans.
disenfranchise | priver du droit de vote | Des lois strictes sur les pièces d'identité peuvent priver des électeurs de leur droit de vote.
voter suppression | la suppression du vote | Les critiques qualifient les nouvelles règles de suppression du vote.
electoral fraud | la fraude électorale | Il n'y avait aucune preuve de fraude électorale.
foreign interference | l'ingérence étrangère | L'ingérence étrangère dans les élections est une menace croissante.
cognitive warfare | la guerre cognitive | La guerre cognitive cible l'opinion publique.
information warfare | la guerre de l'information | La guerre de l'information sème la confusion en ligne.
gray zone | la zone grise | Les tactiques de zone grise s'arrêtent juste avant la guerre ouverte.
strategic ambiguity | l'ambiguïté stratégique | La politique d'ambiguïté stratégique dure depuis des décennies.
balance of power | l'équilibre des puissances | L'équilibre des puissances en Asie évolue.
containment | l'endiguement | L'endiguement était la stratégie de la guerre froide.
hegemony | l'hégémonie | La puissance montante a défié l'hégémonie américaine.
multipolar | multipolaire | Nous entrons dans un monde multipolaire.
nonproliferation | la non-prolifération | Le traité de non-prolifération limite les armes nucléaires.
arms race | la course aux armements | Une course aux armements est en cours dans la région.
rapprochement | le rapprochement | Les deux rivaux se sont rapprochés.
summitry | la diplomatie des sommets | La diplomatie des sommets règle rarement les différends profonds.
back channel | le canal officieux | Les discussions se sont poursuivies par un canal officieux.
bilateral | bilatéral | Ils ont signé un accord commercial bilatéral.
trade war | la guerre commerciale | La guerre commerciale a nui aux agriculteurs des deux côtés.
tariff | le droit de douane | Le gouvernement a augmenté les droits de douane sur l'acier.
embargo | l'embargo | L'embargo sur les armes est toujours en vigueur.
decoupling | le découplage | Un découplage économique coûterait très cher.
de-risking | la réduction des risques | Les entreprises réduisent les risques de leurs chaînes d'approvisionnement.
friend-shoring | la délocalisation amie | La délocalisation amie déplace les usines vers des pays alliés.
plebiscite | le plébiscite | Le plébiscite a tranché la question frontalière.
constitutional court | la cour constitutionnelle | La cour constitutionnelle a invalidé la loi.
judicial review | le contrôle de constitutionnalité | Le contrôle de constitutionnalité limite le pouvoir du gouvernement.
executive order | le décret | Le président a signé un décret.
emergency powers | les pouvoirs d'urgence | Les pouvoirs d'urgence doivent être limités dans le temps.
democratic backsliding | le recul démocratique | Les experts mettent en garde contre un recul démocratique mondial.
deliberative democracy | la démocratie délibérative | La démocratie délibérative invite les citoyens à débattre des politiques.
dark horse | l'outsider | C'est l'outsider de la course.
a straw poll | un sondage informel | Un sondage informel montre qu'il est en tête.
the silent majority | la majorité silencieuse | La majorité silencieuse a voté.
political capital | le capital politique | Il a dépensé son capital politique.
dog whistle | le message codé | C'était un message codé adressé à sa base.
float a trial balloon | lancer un ballon d'essai | Les politiciens lancent souvent un ballon d'essai.
throw someone under the bus | sacrifier quelqu'un | Les dirigeants ne devraient pas sacrifier quelqu'un.
a slippery slope | une pente glissante | C'est une pente glissante.
move the needle | faire bouger les lignes | Le débat n'a pas fait bouger les lignes.
the corridors of power | les arcanes du pouvoir | Les décisions se prennent dans les arcanes du pouvoir.
a power grab | une prise de pouvoir | Les critiques ont parlé de prise de pouvoir.
horse-trading | les marchandages | Il y a eu beaucoup de marchandages.
an October surprise | une surprise de dernière minute | Était-ce une surprise de dernière minute ?
`,
  phrases: `
The bill was watered down to win more votes. | Le projet de loi a été édulcoré pour gagner plus de voix.
Both sides need to find common ground. | Les deux camps doivent trouver un terrain d'entente.
That argument is a slippery slope. | Cet argument est une pente glissante.
Polarization has made compromise almost impossible. | La polarisation a rendu le compromis presque impossible.
Partisan loyalty often trumps policy substance. | La loyauté partisane l'emporte souvent sur le fond des politiques.
Identity politics has reshaped the political landscape. | La politique identitaire a remodelé le paysage politique.
Populism thrives on distrust of the establishment. | Le populisme prospère sur la méfiance envers les élites.
Populist leaders often pit "the people" against "the elite". | Les dirigeants populistes opposent souvent « le peuple » à « l'élite ».
Democratic backsliding is a global concern. | Le recul démocratique est une préoccupation mondiale.
Checks and balances are essential to prevent abuse of power. | Les contre-pouvoirs sont essentiels pour empêcher les abus de pouvoir.
An independent judiciary is the cornerstone of the rule of law. | Une justice indépendante est la pierre angulaire de l'État de droit.
Press freedom is under threat in many countries. | La liberté de la presse est menacée dans de nombreux pays.
Civil society acts as a watchdog on government. | La société civile joue un rôle de vigie face au gouvernement.
Transparency and accountability build public trust. | La transparence et la responsabilité renforcent la confiance du public.
Trust in institutions has been steadily declining. | La confiance dans les institutions ne cesse de baisser.
Political apathy is widespread among young voters. | L'apathie politique est répandue chez les jeunes électeurs.
Low turnout undermines the legitimacy of the result. | Une faible participation affaiblit la légitimité du résultat.
Electoral systems shape the kind of politics a country gets. | Les systèmes électoraux façonnent la vie politique d'un pays.
Proportional representation gives smaller parties a voice. | La représentation proportionnelle donne une voix aux petits partis.
First-past-the-post tends to favor a two-party system. | Le scrutin majoritaire à un tour tend à favoriser le bipartisme.
Gerrymandering distorts the will of voters. | Le charcutage électoral déforme la volonté des électeurs.
Campaign finance reform is long overdue. | La réforme du financement des campagnes se fait attendre depuis longtemps.
Dark money flows through opaque channels. | L'argent occulte circule par des canaux opaques.
Foreign interference in elections is a growing threat. | L'ingérence étrangère dans les élections est une menace croissante.
Disinformation campaigns aim to sow division. | Les campagnes de désinformation visent à semer la division.
Cognitive warfare targets public perception rather than territory. | La guerre cognitive vise les perceptions du public plutôt que le territoire.
Fact-checking alone can't stem the tide of falsehoods. | La vérification des faits ne suffit pas à endiguer le flot de mensonges.
Echo chambers reinforce existing beliefs. | Les chambres d'écho renforcent les croyances existantes.
Algorithms reward outrage over nuance. | Les algorithmes récompensent l'indignation plutôt que la nuance.
The government faces a crisis of legitimacy. | Le gouvernement fait face à une crise de légitimité.
The administration has been accused of overreach. | Le gouvernement a été accusé d'outrepasser ses pouvoirs.
Emergency powers must have clear limits. | Les pouvoirs d'urgence doivent avoir des limites claires.
The constitutional court struck down the law. | La cour constitutionnelle a invalidé la loi.
A constitutional amendment requires a supermajority. | Une révision constitutionnelle exige une majorité qualifiée.
The legislature has the power of the purse. | Le parlement détient le pouvoir budgétaire.
The opposition is boycotting the session. | L'opposition boycotte la session.
A filibuster delayed the vote for days. | Une obstruction a retardé le vote de plusieurs jours.
Divided government often leads to gridlock. | La cohabitation mène souvent au blocage.
The bill was watered down to win enough votes. | Le projet de loi a été édulcoré pour obtenir assez de voix.
Backroom deals undermine public confidence. | Les accords en coulisses minent la confiance du public.
The reform was gutted by special interests. | La réforme a été vidée de sa substance par des intérêts particuliers.
Regulatory capture serves industries, not the public. | La capture réglementaire sert les industries, pas le public.
The revolving door between government and industry raises concerns. | Les allers-retours entre le gouvernement et le privé suscitent des inquiétudes.
Conflicts of interest must be disclosed. | Les conflits d'intérêts doivent être déclarés.
Whistleblowers expose wrongdoing at great personal risk. | Les lanceurs d'alerte dénoncent des abus en prenant de grands risques personnels.
The scandal has dented the party's credibility. | Le scandale a entamé la crédibilité du parti.
The leader is clinging to power despite mounting pressure. | Le dirigeant s'accroche au pouvoir malgré une pression croissante.
A vote of no confidence was narrowly defeated. | Une motion de censure a été rejetée de justesse.
The policy U-turn was seen as a sign of weakness. | Le revirement politique a été perçu comme un signe de faiblesse.
Political capital is quickly spent. | Le capital politique s'épuise vite.
The honeymoon period is over for the new administration. | L'état de grâce est terminé pour le nouveau gouvernement.
Midterm elections are often a referendum on the government. | Les élections de mi-mandat sont souvent un référendum sur le gouvernement.
Incumbents enjoy a significant advantage. | Les sortants bénéficient d'un avantage important.
Grassroots movements can upend established parties. | Les mouvements populaires peuvent bouleverser les partis établis.
Civil disobedience has a long history in democratic struggles. | La désobéissance civile a une longue histoire dans les luttes démocratiques.
The protest movement forced the government to back down. | Le mouvement de contestation a forcé le gouvernement à reculer.
Taiwan's democratization was achieved without a revolution. | La démocratisation de Taïwan s'est faite sans révolution.
Transitional justice remains an unfinished project. | La justice transitionnelle reste un chantier inachevé.
Reconciling historical grievances requires honest dialogue. | Surmonter les griefs historiques exige un dialogue honnête.
National identity is a deeply contested issue. | L'identité nationale est une question très disputée.
Geopolitics shapes domestic politics more than ever. | La géopolitique influence la politique intérieure plus que jamais.
The balance of power in the region is shifting. | L'équilibre des puissances dans la région évolue.
Strategic ambiguity has long defined the policy. | L'ambiguïté stratégique caractérise depuis longtemps cette politique.
Deterrence depends on credibility. | La dissuasion dépend de la crédibilité.
Diplomacy is the art of the possible. | La diplomatie est l'art du possible.
Soft power can be as influential as military strength. | Le soft power peut avoir autant d'influence que la force militaire.
Economic interdependence complicates foreign policy. | L'interdépendance économique complique la politique étrangère.
Trade has become a tool of geopolitical leverage. | Le commerce est devenu un levier géopolitique.
Multilateral institutions are struggling to stay relevant. | Les institutions multilatérales peinent à rester pertinentes.
Sanctions rarely achieve regime change on their own. | Les sanctions provoquent rarement à elles seules un changement de régime.
Alliances are built on shared interests as well as shared values. | Les alliances reposent sur des intérêts communs autant que sur des valeurs communes.
Public diplomacy shapes how a country is perceived abroad. | La diplomatie publique façonne l'image d'un pays à l'étranger.
Climate policy has become a central political battleground. | La politique climatique est devenue un champ de bataille politique central.
Policies that impose short-term costs are hard to sell to voters. | Les politiques qui imposent des coûts à court terme sont difficiles à faire accepter aux électeurs.
Long-term planning clashes with short electoral cycles. | La planification à long terme se heurte aux cycles électoraux courts.
Intergenerational fairness is rarely on the agenda. | L'équité entre les générations est rarement à l'ordre du jour.
Pension reform is politically toxic. | La réforme des retraites est politiquement explosive.
Demographic decline will strain public finances. | Le déclin démographique pèsera sur les finances publiques.
Fiscal discipline often loses out to popular spending. | La discipline budgétaire cède souvent devant les dépenses populaires.
Tax reform is always a fierce political fight. | La réforme fiscale est toujours une bataille politique féroce.
Inequality is fueling resentment and instability. | Les inégalités alimentent le ressentiment et l'instabilité.
Evidence-based policy should be the norm, not the exception. | Les politiques fondées sur des preuves devraient être la norme, pas l'exception.
Policy is often shaped more by anecdotes than data. | Les politiques sont souvent davantage façonnées par des anecdotes que par des données.
Technocrats are often accused of being out of touch. | On accuse souvent les technocrates d'être déconnectés.
Deliberative democracy invites citizens into decision-making. | La démocratie délibérative associe les citoyens à la prise de décision.
Citizens' assemblies have tackled divisive issues successfully. | Des conventions citoyennes ont traité avec succès des sujets qui divisent.
Digital democracy tools can increase participation. | Les outils de démocratie numérique peuvent accroître la participation.
Taiwan is often cited as a pioneer in digital democracy. | Taïwan est souvent citée comme pionnière de la démocratie numérique.
Local governments are often more responsive than national ones. | Les collectivités locales sont souvent plus réactives que l'État central.
Decentralization brings decisions closer to the people. | La décentralisation rapproche les décisions des citoyens.
Political discourse has become increasingly coarse. | Le discours politique est devenu de plus en plus grossier.
Civility in politics seems to be a thing of the past. | La courtoisie en politique semble appartenir au passé.
Demonizing opponents erodes democratic norms. | Diaboliser ses adversaires érode les normes démocratiques.
Democracy depends on accepting the results of elections. | La démocratie repose sur l'acceptation des résultats électoraux.
Peaceful transfers of power should never be taken for granted. | Les passations de pouvoir pacifiques ne doivent jamais être tenues pour acquises.
Freedom, once lost, is very hard to regain. | La liberté, une fois perdue, est très difficile à retrouver.
An informed citizenry is democracy's best defense. | Des citoyens informés sont la meilleure défense de la démocratie.
Politics is too important to be left to politicians. | La politique est trop importante pour être laissée aux politiciens.
Change usually comes from the bottom up. | Le changement vient généralement d'en bas.
Democracy is messy, but it beats the alternatives. | La démocratie est désordonnée, mais elle vaut mieux que les autres systèmes.
`,
});
