// 法文對照（Français）：家庭生活
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
addFrench("family", {
  words: `
family | la famille | J'ai une grande famille.
parents | les parents | Mes parents habitent à Tainan.
brother | le frère | Mon frère a dix ans.
cook | cuisiner ; faire à manger | Mon père fait le dîner le dimanche.
together | ensemble | Nous dînons ensemble tous les soirs.
love | aimer | J'aime ma famille.
mother | la mère | Ma mère est infirmière.
father | le père | Mon père travaille dans une banque.
sister | la sœur | Ma sœur est au lycée.
grandmother | la grand-mère | Ma grand-mère fait de délicieux raviolis.
grandfather | le grand-père | Mon grand-père a quatre-vingts ans.
baby | le bébé | Le bébé dort.
son | le fils | Ils ont un fils.
daughter | la fille | Leur fille est très intelligente.
husband | le mari | Son mari est professeur.
wife | la femme ; l'épouse | Sa femme vient du Japon.
uncle | l'oncle | Mon oncle habite en Amérique.
aunt | la tante | Ma tante m'a offert un cadeau.
cousin | le cousin ; la cousine | Mon cousin et moi avons le même âge.
pet | l'animal de compagnie | Tu as un animal de compagnie ?
dog | le chien | Nous promenons le chien tous les soirs.
cat | le chat | Notre chat dort toute la journée.
kid | l'enfant ; le gamin | Ils ont trois enfants.
twins | les jumeaux ; les jumelles | Mes sœurs sont jumelles.
help | aider | Tu peux m'aider, papa ?
busy | occupé | Maman est occupée en ce moment.
tired | fatigué | Papa est fatigué après le travail.
young | jeune | Mon frère est trop jeune pour conduire.
tall | grand | Mon père est très grand.
visit | rendre visite | Nous rendons visite à mamie tous les dimanches.
hug | le câlin | Fais-moi un câlin !
shopping | les courses ; le shopping | Maman et moi faisons les magasins le samedi.
share | partager | Partage tes jouets avec ta sœur, s'il te plaît.
kind | gentil | Ma grand-mère est très gentille.
mom | maman | Maman, je suis rentré !
dad | papa | Papa lit le journal.
grandma | mamie | Mamie raconte de super histoires.
grandpa | papi | Papi fait pousser des légumes.
child | l'enfant | Ils ont un enfant.
children | les enfants | Les enfants jouent dehors.
boy | le garçon | Le garçon, c'est mon frère.
girl | la fille | Cette fille est ma cousine.
man | l'homme | L'homme d'à côté est médecin.
woman | la femme | La femme en rouge est ma tante.
old | vieux ; âgé | Mon papi est âgé mais costaud.
bath | le bain | Le bébé prend un bain tous les soirs.
teeth | les dents | Brosse-toi les dents avant d'aller au lit.
bedtime | l'heure du coucher | C'est l'heure d'aller te coucher depuis longtemps !
clean up | ranger | Range tes jouets, s'il te plaît.
dishes | la vaisselle | Je fais la vaisselle après le dîner.
make | faire ; préparer | Maman prépare le petit-déjeuner tous les jours.
cry | pleurer | Le bébé s'est mis à pleurer.
nap | la sieste | Papi fait la sieste après le déjeuner.
playground | l'aire de jeux | Allons à l'aire de jeux.
proud | fier | Mes parents sont fiers de moi.
worry | s'inquiéter | Ne t'inquiète pas, maman.
careful | prudent | Fais attention dans l'escalier.
older | aîné ; plus âgé | Ma sœur aînée est à l'université.
younger | cadet ; plus jeune | Mon petit frère a cinq ans.
only | seul ; unique | Je suis la seule fille de la famille.
family name | le nom de famille | Quel est ton nom de famille ?
look like | ressembler à | Tu ressembles à ta mère.
kiss | le bisou ; embrasser | Fais un bisou à mamie.
Sunday | le dimanche | Nous déjeunons en famille tous les dimanches.
smile | le sourire | Mamie a un sourire chaleureux.
baby sister | la petite sœur | J'ai une petite sœur bébé.
dinner table | la table du dîner | Nous discutons à table.
toys | les jouets | Range tes jouets.
grandson | le petit-fils | Mamie adore son petit-fils.
granddaughter | la petite-fille | Sa petite-fille a trois ans.
home | la maison ; chez soi | Je rentre à la maison à cinq heures.
house | la maison | Nous habitons dans une petite maison.
birthday | l'anniversaire | Aujourd'hui, c'est l'anniversaire de maman.
cake | le gâteau | Papa a acheté un gâteau d'anniversaire.
party | la fête | Nous avons fait une fête de famille.
photo | la photo | Prenons une photo de famille.
breakfast | le petit-déjeuner | Nous prenons le petit-déjeuner ensemble.
lunch | le déjeuner | Papi prépare le déjeuner le dimanche.
dinner | le dîner | Le dîner est à sept heures.
wake up | se réveiller | Réveille-toi ! C'est l'heure d'aller à l'école.
happy | heureux | Ma famille est heureuse.
sad | triste | Le bébé est triste.
angry | fâché ; en colère | Maman est fâchée contre moi.
sorry | désolé | Je suis désolé, papa.
thanks | merci | Merci pour le dîner, maman !
good night | bonne nuit | Bonne nuit, mon chéri.
bedroom | la chambre | Ma sœur et moi partageons une chambre.
bed | le lit | C'est l'heure d'aller au lit.
story | l'histoire | Raconte-moi une histoire, papa.
read | lire | Mamie aime lire le journal.
game | le jeu | Nous faisons un jeu après le dîner.
garden | le jardin | Papi travaille au jardin.
walk | la promenade ; promener | Nous promenons le chien tous les soirs.
park | le parc | Allons au parc.
car | la voiture | Papa conduit la voiture.
trip | le voyage | Nous avons fait un voyage en famille à Hualien.
holiday | les vacances ; le jour férié | Nous rendons visite à mamie à chaque jour férié.
goldfish | le poisson rouge | Mon frère a un poisson rouge.
hamster | le hamster | Notre hamster dort toute la journée.
rabbit | le lapin | Ma sœur veut un lapin.
booger | la crotte de nez | Tu as une crotte de nez sur la figure. Prends un mouchoir !
earwax | le cérumen | Ne nettoie pas le cérumen avec ton doigt.
snot | la morve | Essuie ta morve avec un mouchoir.
runny nose | le nez qui coule | Le bébé a le nez qui coule.
sweat | la sueur ; transpirer | Tu es trempé de sueur. Va prendre une douche.
`,
  phrases: `
How many people are in your family? | Vous êtes combien dans ta famille ?
I'm the oldest child. | Je suis l'aîné.
Good night, Mom. | Bonne nuit, maman.
This is my family. | Voici ma famille.
I have one brother and one sister. | J'ai un frère et une sœur.
I'm an only child. | Je suis enfant unique.
There are four people in my family. | Nous sommes quatre dans ma famille.
This is my mom. | Voici ma maman.
This is my dad. | Voici mon papa.
My grandma lives with us. | Ma grand-mère habite avec nous.
My grandpa is eighty years old. | Mon grand-père a quatre-vingts ans.
My brother is older than me. | Mon frère est plus âgé que moi.
My sister is two years younger. | Ma sœur a deux ans de moins que moi.
I love my family. | J'aime ma famille.
I miss my mom. | Ma mère me manque.
Call your mother. | Appelle ta mère.
Mom, I'm home! | Maman, je suis rentré !
Dad is at work. | Papa est au travail.
Mom is cooking dinner. | Maman prépare le dîner.
Dinner's ready! Come and eat. | Le dîner est prêt ! Venez manger.
Let's eat together. | Mangeons ensemble.
Wash your hands first. | Lave-toi d'abord les mains.
Help your mother, please. | Aide ta mère, s'il te plaît.
Set the table. | Mets la table.
Clear the table. | Débarrasse la table.
Who's doing the dishes tonight? | Qui fait la vaisselle ce soir ?
It's your turn. | C'est ton tour.
Go to bed. It's late. | Va te coucher. Il est tard.
Brush your teeth. | Brosse-toi les dents.
Time to wake up! | C'est l'heure de se lever !
Get dressed for school. | Habille-toi pour l'école.
Don't forget your lunch. | N'oublie pas ton déjeuner.
Have a good day at school. | Bonne journée à l'école.
How was school today? | Comment s'est passée l'école aujourd'hui ?
Did you finish your homework? | Tu as fini tes devoirs ?
Turn off the TV and do your homework. | Éteins la télé et fais tes devoirs.
Be nice to your sister. | Sois gentil avec ta sœur.
Say sorry to your brother. | Dis pardon à ton frère.
Share your toys. | Partage tes jouets.
Stop fighting! | Arrêtez de vous disputer !
Clean your room. | Range ta chambre.
Don't shout. | Ne crie pas.
Listen to your mother. | Écoute ta mère.
Be careful! | Fais attention !
Hold my hand. | Donne-moi la main.
I'm proud of you. | Je suis fier de toi.
Good night. I love you. | Bonne nuit. Je t'aime.
Sweet dreams. | Fais de beaux rêves.
We're having a baby. | Nous attendons un bébé.
The baby is crying. | Le bébé pleure.
The baby is sleeping. | Le bébé dort.
Can you hold the baby? | Tu peux prendre le bébé ?
My son is five. | Mon fils a cinq ans.
My daughter is in high school. | Ma fille est au lycée.
I have two children. | J'ai deux enfants.
We visit my grandparents every weekend. | Nous rendons visite à mes grands-parents tous les week-ends.
My aunt lives in Tainan. | Ma tante habite à Tainan.
My uncle is a doctor. | Mon oncle est médecin.
My cousin is my best friend. | Mon cousin est mon meilleur ami.
We have a family dinner on Sunday. | Nous avons un dîner de famille dimanche.
Happy Mother's Day! | Bonne fête des mères !
Happy Father's Day! | Bonne fête des pères !
Thank you, Mom. | Merci, maman.
I'm married. | Je suis marié.
This is my husband. | Voici mon mari.
This is my wife. | Voici ma femme.
We got married last year. | Nous nous sommes mariés l'année dernière.
We have a dog. | Nous avons un chien.
Walk the dog, please. | Va promener le chien, s'il te plaît.
Feed the cat. | Donne à manger au chat.
Whose turn is it to cook? | C'est à qui de cuisiner ?
Let's go out as a family. | Sortons en famille.
We're going to the park. | Nous allons au parc.
Put on your shoes. | Mets tes chaussures.
Are you ready? Let's go. | Tu es prêt ? On y va.
Where's Dad? | Où est papa ?
He's in the garden. | Il est dans le jardin.
Can I go to my friend's house? | Je peux aller chez mon ami ?
Be home by six. | Sois rentré avant six heures.
Call me when you get there. | Appelle-moi quand tu arrives.
I'm sorry, Mom. | Je suis désolé, maman.
It's okay. | Ce n'est pas grave.
Give me a hug. | Fais-moi un câlin.
You look like your father. | Tu ressembles à ton père.
She has her mother's eyes. | Elle a les yeux de sa mère.
We're a big family. | Nous sommes une grande famille.
My parents are very kind. | Mes parents sont très gentils.
My mom works at a hospital. | Ma mère travaille dans un hôpital.
My dad likes fishing. | Mon père aime la pêche.
My brother plays basketball. | Mon frère joue au basket.
My sister is a student. | Ma sœur est étudiante.
Grandma tells us stories. | Mamie nous raconte des histoires.
Can we have pizza tonight? | On peut manger une pizza ce soir ?
Ask your father. | Demande à ton père.
Not today. Maybe tomorrow. | Pas aujourd'hui. Peut-être demain.
Please be quiet. Grandpa is sleeping. | Silence, s'il vous plaît. Papi dort.
My family is very important to me. | Ma famille compte beaucoup pour moi.
Do you have any brothers or sisters? | Tu as des frères et sœurs ?
My parents are at home. | Mes parents sont à la maison.
Let's take a family photo. | Prenons une photo de famille.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("family", {
  words: `
chores | les tâches ménagères | Nous partageons les tâches ménagères à la maison.
relatives | la famille ; les proches | Nous rendons visite à la famille pendant le Nouvel An chinois.
raise | élever | Mes grands-parents ont aidé à m'élever.
get along | bien s'entendre | Je m'entends bien avec ma sœur.
argue | se disputer | Mes frères se disputent souvent pour des broutilles.
reunion | les retrouvailles ; la réunion de famille | Nous faisons une réunion de famille chaque été.
household | le foyer ; le ménage | Notre foyer compte cinq personnes.
sibling | le frère ou la sœur | Tu as des frères et sœurs ?
only child | l'enfant unique | Enfant unique, je me sentais souvent seul.
nephew | le neveu | Mon neveu vient d'entrer à la maternelle.
niece | la nièce | Ma nièce adore dessiner.
in-laws | la belle-famille | Nous passons le réveillon du Nouvel An avec ma belle-famille.
stepmother | la belle-mère (épouse du père) | Ma belle-mère m'a toujours bien traité.
newborn | le nouveau-né | Les nouveau-nés dorment jusqu'à dix-sept heures par jour.
toddler | le bambin ; le tout-petit | Les tout-petits demandent une attention constante.
teenager | l'adolescent ; l'ado | Être ado, ce n'est pas facile.
babysitter | la baby-sitter | Nous avons pris une baby-sitter pour vendredi soir.
allowance | l'argent de poche | J'ai de l'argent de poche chaque semaine pour les tâches ménagères.
curfew | l'heure limite de retour | Je dois rentrer avant dix heures.
grounded | privé de sortie ; puni | J'ai été privé de sortie pour avoir menti.
spoil | gâter | Les grands-parents adorent gâter leurs petits-enfants.
discipline | discipliner ; éduquer | Les parents ne sont pas d'accord sur la façon d'éduquer les enfants.
respect | respecter | Nous devons respecter nos aînés.
responsible | responsable | Mon fils est très responsable pour son âge.
independent | indépendant | Elle est devenue indépendante très jeune.
divorce | le divorce | Le divorce est dur pour les enfants.
single parent | le parent seul ; la famille monoparentale | Élever seul ses enfants, c'est beaucoup de travail.
adopt | adopter | Ils ont décidé d'adopter un enfant.
anniversary | l'anniversaire de mariage | C'est le trentième anniversaire de mariage de mes parents.
wedding | le mariage (la cérémonie) | Le mariage de mon cousin est en mai.
engaged | fiancé | Ma sœur vient de se fiancer !
pregnant | enceinte | Ma tante est enceinte de son deuxième enfant.
routine | la routine | Notre routine du matin est chaotique.
stepfather | le beau-père (mari de la mère) | Mon beau-père m'a appris à conduire.
half-brother | le demi-frère | Mon demi-frère a dix ans de moins que moi.
grandchild | le petit-enfant | Ils ont cinq petits-enfants.
great-grandmother | l'arrière-grand-mère | Mon arrière-grand-mère a quatre-vingt-quinze ans.
father-in-law | le beau-père | Mon beau-père adore la pêche.
ancestor | l'ancêtre | Nous honorons nos ancêtres lors de la fête de Qingming.
generation | la génération | Trois générations vivent dans cette maison.
take after | tenir de | Tu tiens de ta mère ou de ton père ?
bring up | élever | C'est difficile d'élever des enfants dans une grande ville.
look after | s'occuper de | Tu peux t'occuper de mon chat ce week-end ?
pick up | aller chercher | Je vais chercher mon fils à cinq heures.
drop off | déposer | Je dépose les enfants à l'école.
housework | le ménage | Nous partageons le ménage à parts égales.
family gathering | la réunion de famille | Nous avons une réunion de famille chaque dimanche.
quality time | le temps de qualité | J'essaie de passer du temps de qualité avec mes enfants.
close-knit | uni ; soudé | Nous sommes une famille très unie.
quarrel | se quereller | Mes parents se querellent rarement.
house rules | les règles de la maison | Nos règles de la maison : pas de téléphone à table.
screen time | le temps d'écran | Nous limitons le temps d'écran de nos enfants.
praise | féliciter | Félicitez vos enfants quand ils font des efforts.
punish | punir | Les parents doivent-ils punir un enfant qui ment ?
tantrum | la crise de colère | Mon tout-petit a fait une crise dans le magasin.
diaper | la couche | J'ai changé trois couches ce matin.
stroller | la poussette | Nous prenons la poussette dans le métro.
daycare | la crèche | Notre fils va à la crèche.
retired | retraité | Mes grands-parents retraités voyagent beaucoup.
widow | la veuve | Elle est devenue veuve à soixante ans.
elderly | âgé | Nous rendons visite à nos voisins âgés.
family tree | l'arbre généalogique | Nous avons dessiné notre arbre généalogique en classe.
marriage | le mariage (l'union) | Ils ont un mariage heureux.
propose | demander en mariage | Il l'a demandée en mariage à la plage.
honeymoon | la lune de miel | Ils sont partis à Bali pour leur lune de miel.
newlyweds | les jeunes mariés | Les jeunes mariés ont emménagé dans un petit appartement.
brother-in-law | le beau-frère | Mon beau-frère est chef cuisinier.
sister-in-law | la belle-sœur | Ma belle-sœur habite à Tainan.
mother-in-law | la belle-mère | Ma belle-mère cuisine très bien.
son-in-law | le gendre | Leur gendre vient du Canada.
daughter-in-law | la belle-fille ; la bru | Leur belle-fille est médecin.
stepdaughter | la belle-fille (fille du conjoint) | Il s'entend bien avec sa belle-fille.
godmother | la marraine | Ma marraine m'envoie une carte chaque année.
great-grandfather | l'arrière-grand-père | Mon arrière-grand-père venait du Fujian.
nanny | la nounou | La nounou va chercher les enfants à l'école.
pocket money | l'argent de poche | Combien d'argent de poche tu as ?
bedtime story | l'histoire du soir | Papa lit une histoire du soir tous les soirs.
sleepover | la soirée pyjama | Je peux faire une soirée pyjama chez Amy ?
lullaby | la berceuse | Maman a chanté une berceuse au bébé.
nursery | la chambre de bébé | Nous avons peint la chambre de bébé en jaune.
pacifier | la tétine | Le bébé ne dort pas sans sa tétine.
baby bottle | le biberon | Lave le biberon à l'eau chaude.
high chair | la chaise haute | Mets le bébé dans la chaise haute.
car seat | le siège auto | Les enfants doivent utiliser un siège auto.
playdate | le rendez-vous de jeu | Mon fils a un rendez-vous de jeu cet après-midi.
school run | le trajet de l'école | Je fais le trajet de l'école tous les matins.
parenting | la parentalité ; l'éducation des enfants | Élever des enfants est plus dur que je ne pensais.
mood swings | les sautes d'humeur | Les ados ont souvent des sautes d'humeur.
adolescence | l'adolescence | L'adolescence peut être une période difficile.
puberty | la puberté | Les enfants entrent dans la puberté à des âges différents.
rebellious | rebelle | Il était très rebelle à l'adolescence.
obedient | obéissant | C'était une enfant obéissante.
naughty | coquin ; vilain | Le petit coquin a caché les chaussures de sa sœur.
well-behaved | sage | Vos enfants sont tellement sages.
family business | l'entreprise familiale | Il a repris l'entreprise familiale.
family trip | le voyage en famille | Nous préparons un voyage en famille au Japon.
budget | le budget | Il nous faut un budget familial.
savings | les économies | Nous avons utilisé nos économies pour la maison.
nursing home | la maison de retraite | Papi est entré en maison de retraite.
funeral | les obsèques ; l'enterrement | Toute la famille était aux obsèques.
eye discharge | les sécrétions oculaires ; les chassies | Essuie les chassies avec un linge propre et humide.
dandruff | les pellicules | Ce shampoing aide contre les pellicules.
like father, like son | tel père, tel fils | Il adore aussi la pêche. Tel père, tel fils.
like mother, like daughter | telle mère, telle fille | Elles adorent chanter toutes les deux. Telle mère, telle fille.
the apple doesn't fall far from the tree | les chiens ne font pas des chats | Les chiens ne font pas des chats.
run in the family | être de famille | La rapidité semble être de famille.
black sheep | la brebis galeuse ; le mouton noir | C'est le mouton noir de la famille.
spitting image | le portrait craché | C'est le portrait craché de sa mère.
blood is thicker than water | la voix du sang est la plus forte | La voix du sang est la plus forte.
flesh and blood | la chair de sa chair | C'est la chair de ma chair.
the man of the house | l'homme de la maison | C'est lui l'homme de la maison maintenant.
family man | le père de famille dévoué | Mon mari est un vrai père de famille.
wear the pants | porter la culotte | Chez nous, maman et papa portent tous les deux la culotte.
tie the knot | se marier ; se passer la bague au doigt | Ils vont se marier au printemps prochain.
`,
  phrases: `
Whose turn is it to do the dishes? | C'est à qui de faire la vaisselle ?
We're having a family reunion this weekend. | Nous avons une réunion de famille ce week-end.
My mom is always nagging me to clean my room. | Ma mère me harcèle sans arrêt pour que je range ma chambre.
We're a pretty close family. | Nous sommes une famille assez unie.
I get along well with my siblings. | Je m'entends bien avec mes frères et sœurs.
My brother and I used to fight all the time. | Mon frère et moi nous disputions tout le temps.
I take after my mother. | Je tiens de ma mère.
I'm the middle child. | Je suis l'enfant du milieu.
My parents divorced when I was ten. | Mes parents ont divorcé quand j'avais dix ans.
I grew up in a single-parent family. | J'ai grandi dans une famille monoparentale.
My grandparents raised me. | Ce sont mes grands-parents qui m'ont élevé.
We have a family reunion every Lunar New Year. | Nous nous réunissons en famille à chaque Nouvel An lunaire.
My relatives always ask when I'm getting married. | Ma famille me demande toujours quand je vais me marier.
They keep asking about my salary. | Ils n'arrêtent pas de me demander combien je gagne.
I'm visiting my in-laws this weekend. | Je vais chez ma belle-famille ce week-end.
I get along fine with my mother-in-law. | Je m'entends bien avec ma belle-mère.
My parents are getting older, and I worry about them. | Mes parents vieillissent et je m'inquiète pour eux.
I call my parents every Sunday. | J'appelle mes parents tous les dimanches.
We're expecting our first child in May. | Nous attendons notre premier enfant pour mai.
I'm on parental leave. | Je suis en congé parental.
We've been up all night with the baby. | Nous avons passé la nuit debout avec le bébé.
Who's picking up the kids today? | Qui va chercher les enfants aujourd'hui ?
Could you drop the kids off at school? | Tu pourrais déposer les enfants à l'école ?
We share the housework equally. | Nous partageons le ménage à parts égales.
He never helps around the house. | Il n'aide jamais à la maison.
We need to talk about the chores. | Il faut qu'on parle des tâches ménagères.
My kids spend too much time on their phones. | Mes enfants passent trop de temps sur leur téléphone.
We have a no-phones rule at dinner. | Chez nous, pas de téléphone à table.
My teenager won't talk to me. | Mon ado ne veut pas me parler.
She's going through a difficult phase. | Elle traverse une période difficile.
He's grounded for a week. | Il est privé de sortie pendant une semaine.
We set a curfew of ten o'clock. | Nous avons fixé l'heure de retour à dix heures.
I try not to compare my kids. | J'essaie de ne pas comparer mes enfants.
Every child is different. | Chaque enfant est différent.
We want to spend more quality time together. | Nous voulons passer plus de temps de qualité ensemble.
Family comes first. | La famille d'abord.
We're having a small family gathering. | Nous organisons une petite réunion de famille.
My cousin is getting married next month. | Ma cousine se marie le mois prochain.
We're going to my grandmother's birthday party. | Nous allons à l'anniversaire de ma grand-mère.
My grandfather passed away last year. | Mon grand-père est décédé l'année dernière.
I'm sorry for your loss. | Toutes mes condoléances.
We're moving closer to my parents. | Nous déménageons plus près de mes parents.
My parents help out with childcare. | Mes parents nous aident à garder les enfants.
We can't afford daycare. | Nous n'avons pas les moyens de payer la crèche.
It's hard to balance work and family. | C'est difficile de concilier travail et famille.
I feel guilty about working late. | Je culpabilise de travailler tard.
We're thinking of having another baby. | Nous pensons avoir un autre bébé.
Raising kids is expensive. | Élever des enfants coûte cher.
We're saving for the kids' education. | Nous mettons de l'argent de côté pour les études des enfants.
My parents were very strict. | Mes parents étaient très stricts.
My parents gave me a lot of freedom. | Mes parents m'ont laissé beaucoup de liberté.
I want to raise my kids differently. | Je veux élever mes enfants autrement.
We're trying positive parenting. | Nous essayons l'éducation positive.
Don't spoil the kids too much. | Ne gâte pas trop les enfants.
Grandparents tend to spoil their grandchildren. | Les grands-parents ont tendance à gâter leurs petits-enfants.
We had a big argument last night. | Nous nous sommes violemment disputés hier soir.
We made up the next morning. | Nous nous sommes réconciliés le lendemain matin.
We need to talk about our budget. | Il faut qu'on parle de notre budget.
I'll handle the bills this month. | Je m'occupe des factures ce mois-ci.
My husband does most of the cooking. | C'est mon mari qui cuisine le plus souvent.
My wife is better at fixing things. | Ma femme est plus douée pour réparer les choses.
We've been married for ten years. | Nous sommes mariés depuis dix ans.
Happy anniversary! | Joyeux anniversaire de mariage !
We're going away for our anniversary. | Nous partons pour notre anniversaire de mariage.
Could you babysit for us on Saturday? | Tu pourrais garder les enfants samedi ?
The kids are at their grandparents' house. | Les enfants sont chez leurs grands-parents.
We have the house to ourselves tonight. | Nous avons la maison pour nous ce soir.
My son just started kindergarten. | Mon fils vient d'entrer à la maternelle.
She cried on her first day of school. | Elle a pleuré le jour de sa rentrée.
He's going through a growth spurt. | Il est en pleine poussée de croissance.
They grow up so fast. | Ils grandissent si vite.
My daughter wants a pet. | Ma fille veut un animal.
Who's going to take care of it? | Qui va s'en occuper ?
I moved out when I was eighteen. | J'ai quitté la maison à dix-huit ans.
I still live with my parents. | J'habite encore chez mes parents.
I visit my hometown during the holidays. | Je retourne dans ma ville natale pendant les vacances.
My parents want me to come home more often. | Mes parents voudraient que je rentre plus souvent.
We're planning a family trip to Japan. | Nous préparons un voyage en famille au Japon.
Traveling with kids is exhausting. | Voyager avec des enfants, c'est épuisant.
I'm the one who keeps the family together. | C'est moi qui maintiens la famille unie.
My sister and I are very close. | Ma sœur et moi sommes très proches.
We don't see each other very often. | Nous ne nous voyons pas très souvent.
We have a family group chat. | Nous avons un groupe de discussion familial.
My mom sends us messages every morning. | Ma mère nous envoie des messages tous les matins.
I have a big extended family. | J'ai une très grande famille élargie.
I don't really know my distant relatives. | Je ne connais pas vraiment mes parents éloignés.
We're adopting a child. | Nous adoptons un enfant.
We're a blended family. | Nous sommes une famille recomposée.
My stepfather is very kind to me. | Mon beau-père est très gentil avec moi.
I'm looking after my elderly father. | Je m'occupe de mon père âgé.
He needs help with daily activities. | Il a besoin d'aide pour les gestes du quotidien.
We hired a caregiver for my grandmother. | Nous avons engagé une aide à domicile pour ma grand-mère.
It's tiring, but I want to be there for him. | C'est fatigant, mais je veux être là pour lui.
Family isn't always easy. | La famille, ce n'est pas toujours facile.
We have our ups and downs. | Nous avons des hauts et des bas.
At the end of the day, we're family. | Au bout du compte, on est une famille.
Blood is thicker than water. | La voix du sang est la plus forte.
I learned a lot from my parents. | J'ai beaucoup appris de mes parents.
I want to make my parents proud. | Je veux rendre mes parents fiers.
Home is wherever my family is. | Ma maison, c'est là où est ma famille.
`,
});

// ---------- 高級 Advanced ----------
addFrench("family", {
  words: `
generation gap | le fossé des générations | Il y a un fossé des générations entre mes grands-parents et moi.
work-life balance | l'équilibre vie professionnelle-vie privée | Trouver un bon équilibre vie pro-vie perso est difficile pour les jeunes parents.
upbringing | l'éducation ; l'enfance | Son éducation stricte a façonné son éthique de travail.
elderly care | la prise en charge des personnes âgées | La prise en charge des personnes âgées est une préoccupation croissante dans une société vieillissante.
filial piety | la piété filiale | La piété filiale est une valeur centrale dans de nombreuses cultures asiatiques.
dynamics | la dynamique | La dynamique familiale change à l'arrivée d'un bébé.
nuclear family | la famille nucléaire | La famille nucléaire est désormais la norme en ville.
extended family | la famille élargie | Ma famille élargie se réunit à chaque Nouvel An lunaire.
breadwinner | le soutien de famille | Elle est devenue le soutien de famille quand son mari est tombé malade.
homemaker | la femme au foyer ; l'homme au foyer | Être au foyer est un travail à plein temps.
parenting style | le style éducatif | Leur style éducatif est détendu mais ferme.
helicopter parent | le parent hélicoptère | Les parents hélicoptères laissent rarement leurs enfants échouer.
empty nest | le nid vide | Ils se sentaient seuls dans leur nid vide.
sandwich generation | la génération sandwich | La génération sandwich s'occupe à la fois de ses enfants et de ses parents âgés.
caregiver | l'aidant ; l'aidante | Elle est la principale aidante de sa mère.
inheritance | l'héritage | Les frères et sœurs se sont disputés l'héritage.
estranged | brouillé ; en froid | Il est brouillé avec son père.
reconcile | se réconcilier | Ils se sont enfin réconciliés au bout de dix ans.
sibling rivalry | la rivalité fraternelle | La rivalité fraternelle est fréquente dans les familles nombreuses.
birth rate | le taux de natalité | Taïwan a l'un des taux de natalité les plus bas du monde.
aging population | le vieillissement de la population | Le vieillissement de la population met le système de santé sous pression.
paternity leave | le congé de paternité | De plus en plus de pères prennent un congé de paternité.
maternity leave | le congé de maternité | Elle est en congé de maternité jusqu'en mars.
childcare | la garde d'enfants | Une garde d'enfants abordable aide les parents à reprendre le travail.
custody | la garde | La mère a obtenu la garde des enfants.
dysfunctional | dysfonctionnel | Il a grandi dans une famille dysfonctionnelle.
nurture | nourrir ; cultiver | Les parents devraient cultiver la curiosité de leurs enfants.
resilience | la résilience | Les enfants font preuve d'une résilience étonnante après les épreuves.
intergenerational | intergénérationnel | La cohabitation intergénérationnelle est courante à Taïwan.
domestic | domestique ; conjugal | Les violences conjugales sont un problème grave.
foster | accueillir (un enfant placé) | Ils accueillent des enfants qui ont besoin d'un foyer sûr.
heirloom | l'objet de famille | Cette bague est un bijou de famille.
lineage | la lignée | La famille peut faire remonter sa lignée jusqu'au Fujian.
patriarchal | patriarcal | Les familles traditionnelles étaient souvent patriarcales.
matriarch | la matriarche | Ma grand-mère est la matriarche de notre famille.
kinship | la parenté | Les liens de parenté sont forts à la campagne.
dowry | la dot | Sa famille a versé une grosse dot.
arranged marriage | le mariage arrangé | Mes grands-parents ont eu un mariage arrangé.
cohabitation | le concubinage ; la vie commune | La vie commune avant le mariage est maintenant courante.
same-sex marriage | le mariage homosexuel | Taïwan a légalisé le mariage homosexuel en 2019.
blended family | la famille recomposée | Ils forment une famille recomposée avec quatre enfants.
alimony | la pension alimentaire (entre ex-époux) | Il verse une pension alimentaire chaque mois.
child support | la pension alimentaire pour les enfants | Le tribunal l'a condamné à verser une pension pour les enfants.
guardianship | la tutelle | Sa tante a obtenu sa tutelle.
surrogacy | la gestation pour autrui (GPA) | La GPA n'est pas légale à Taïwan.
fertility | la fertilité | Les traitements de fertilité coûtent cher.
IVF | la fécondation in vitro (FIV) | Ils ont eu des jumeaux grâce à une FIV.
postpartum | post-partum | La dépression post-partum est plus fréquente qu'on ne le pense.
confinement center | le centre de repos post-partum | Beaucoup de mères taïwanaises séjournent dans un centre de repos post-partum.
dual-income | à deux salaires | Ici, la plupart des familles ont deux salaires.
latchkey kid | l'enfant à la clé | Enfant à la clé, je préparais mon dîner tout seul.
boomerang kids | les enfants boomerang | Les enfants boomerang retournent vivre chez leurs parents.
eldest | l'aîné | Traditionnellement, c'est le fils aîné qui hérite de la maison.
favoritism | le favoritisme | Le favoritisme parental peut abîmer les relations entre frères et sœurs.
emotional labor | le travail émotionnel | Les mères assument souvent le travail émotionnel du foyer.
mental load | la charge mentale | C'est elle qui porte la charge mentale de tout organiser.
gender roles | les rôles de genre | Les rôles de genre à la maison évoluent.
ancestor worship | le culte des ancêtres | Le culte des ancêtres est au cœur du Nouvel An lunaire.
obligation | l'obligation ; le devoir | Elle se sentait le devoir de s'occuper de ses parents.
guilt | la culpabilité | Les parents qui travaillent ressentent souvent de la culpabilité.
estrangement | la rupture ; l'éloignement | La rupture avec sa famille est douloureuse.
reconciliation | la réconciliation | Leur réconciliation a pris des années.
legacy | l'héritage ; ce qu'on transmet | Il veut transmettre quelque chose à ses petits-enfants.
will | le testament | Papi a rédigé son testament l'année dernière.
estate | la succession ; les biens | La succession a été partagée entre les enfants.
next of kin | le plus proche parent | L'hôpital a appelé son plus proche parent.
primogeniture | le droit d'aînesse | Le droit d'aînesse donnait tout au fils aîné.
patrilineal | patrilinéaire | Beaucoup de sociétés traditionnelles sont patrilinéaires.
clan | le clan | Le clan se réunit chaque année au temple des ancêtres.
genealogy | la généalogie | Elle a remonté sa généalogie sur dix générations.
family register | le registre familial | Notre registre familial remonte à la dynastie Qing.
household registration | l'enregistrement du foyer (hukou) | L'enregistrement du foyer détermine l'école qu'on peut fréquenter.
succession | la succession | La succession dans les entreprises familiales provoque souvent des conflits.
probate | l'homologation du testament | Le testament est en cours d'homologation.
power of attorney | la procuration | Elle a une procuration pour son père.
advance directive | les directives anticipées | Tout le monde devrait rédiger ses directives anticipées.
end-of-life care | les soins de fin de vie | Nous avons parlé en famille des soins de fin de vie.
palliative care | les soins palliatifs | Les soins palliatifs visent le confort.
bereavement | le deuil | L'entreprise accorde un congé de deuil.
grief | le chagrin ; le deuil | Chacun vit le deuil différemment.
mourning | le deuil | La famille est encore en deuil.
domestic violence | les violences conjugales ; les violences familiales | Les violences conjugales sont souvent passées sous silence.
child abuse | la maltraitance infantile | Les enseignants sont formés à repérer la maltraitance infantile.
neglect | la négligence | La négligence peut être aussi nocive que la maltraitance.
protective order | l'ordonnance de protection | Elle a obtenu une ordonnance de protection.
family court | le tribunal aux affaires familiales | L'affaire a été jugée au tribunal aux affaires familiales.
mediation | la médiation | La médiation les a aidés à s'entendre sur la garde.
co-parenting | la coparentalité | La coparentalité marche mieux avec une communication claire.
visitation rights | le droit de visite | Le père a un droit de visite tous les week-ends.
prenuptial agreement | le contrat de mariage | Ils ont signé un contrat de mariage.
egg freezing | la congélation d'ovocytes | La congélation d'ovocytes donne plus de choix aux femmes.
adoption agency | l'organisme d'adoption | Ils ont fait une demande auprès d'un organisme d'adoption.
DINK | le couple sans enfant à deux revenus | C'est un couple sans enfant à deux revenus qui adore voyager.
childfree | sans enfant par choix | Ils ont choisi de ne pas avoir d'enfants.
singlehood | le célibat | Le célibat est de plus en plus vu comme un choix.
living alone | vivre seul | Vivre seul est courant chez les personnes âgées.
multigenerational household | le foyer multigénérationnel | Ils vivent dans un foyer multigénérationnel.
intergenerational trauma | le traumatisme transgénérationnel | Le traumatisme transgénérationnel peut façonner les schémas familiaux.
attachment | l'attachement | Un attachement sécurisant dans la petite enfance compte toute la vie.
authoritative | démocratique (style éducatif) | L'éducation démocratique allie chaleur et règles.
born with a silver spoon in his mouth | né avec une cuillère d'argent dans la bouche | Il est né avec une cuillère d'argent dans la bouche.
a chip off the old block | le digne fils de son père | Tom est le digne fils de son père.
rule the roost | faire la loi | Les grands-mères font souvent la loi.
tied to your mother's apron strings | dans les jupes de sa mère | À trente ans, on ne devrait plus être dans les jupes de sa mère.
bun in the oven | avoir un polichinelle dans le tiroir | Elle a un polichinelle dans le tiroir !
in the family way | attendre un heureux événement | Ma sœur attend un heureux événement.
make ends meet | joindre les deux bouts | C'est difficile de joindre les deux bouts avec trois enfants.
the patter of tiny feet | l'arrivée d'un bébé | Nous attendons l'arrivée d'un bébé.
spare the rod and spoil the child | qui aime bien châtie bien | Certains croient que qui aime bien châtie bien.
your nearest and dearest | ses proches | Fête ça avec tes proches.
to have and to hold | pour le meilleur et pour le pire | Pour le meilleur et pour le pire, à partir de ce jour.
see eye to eye | être sur la même longueur d'onde | Mes parents ne sont pas toujours sur la même longueur d'onde.
bury the hatchet | enterrer la hache de guerre | Il est temps d'enterrer la hache de guerre avec ton frère.
`,
  phrases: `
We don't always see eye to eye, but we respect each other. | Nous ne sommes pas toujours d'accord, mais nous nous respectons.
Juggling a career and raising kids is exhausting. | Jongler entre carrière et éducation des enfants est épuisant.
Blood is thicker than water. | La voix du sang est la plus forte.
Family structures have changed dramatically over the past few decades. | Les structures familiales ont profondément changé ces dernières décennies.
The nuclear family is no longer the norm. | La famille nucléaire n'est plus la norme.
Many couples are choosing not to have children. | Beaucoup de couples choisissent de ne pas avoir d'enfants.
The declining birth rate is a national crisis. | La baisse de la natalité est une crise nationale.
Financial insecurity is a major reason people delay having kids. | L'insécurité financière est une raison majeure de retarder la parentalité.
Childcare costs are prohibitive for many families. | Les frais de garde sont prohibitifs pour beaucoup de familles.
Generous parental leave encourages higher birth rates. | Un congé parental généreux favorise la natalité.
Fathers are increasingly taking an active role in parenting. | Les pères s'impliquent de plus en plus dans l'éducation des enfants.
The burden of caregiving still falls disproportionately on women. | La charge des soins repose encore de manière disproportionnée sur les femmes.
The sandwich generation cares for both children and aging parents. | La génération sandwich s'occupe à la fois des enfants et des parents âgés.
Filial piety remains a deeply held value. | La piété filiale reste une valeur profondément ancrée.
Expectations around filial duty can create enormous pressure. | Les attentes liées au devoir filial peuvent créer une pression énorme.
Elder care is becoming a pressing social issue. | La prise en charge des aînés devient un enjeu social urgent.
Long-term care insurance is still underdeveloped. | L'assurance dépendance est encore peu développée.
Many families rely on migrant caregivers. | Beaucoup de familles comptent sur des aides à domicile étrangères.
Intergenerational conflict often stems from different values. | Les conflits entre générations viennent souvent de valeurs différentes.
Our parents grew up in a very different world. | Nos parents ont grandi dans un monde très différent.
I've had to set boundaries with my parents. | J'ai dû poser des limites avec mes parents.
Setting boundaries isn't the same as being disrespectful. | Poser des limites, ce n'est pas manquer de respect.
Unresolved childhood issues tend to resurface in adulthood. | Les problèmes d'enfance non résolus ont tendance à ressurgir à l'âge adulte.
Family therapy helped us communicate more openly. | La thérapie familiale nous a aidés à communiquer plus ouvertement.
Some family wounds take years to heal. | Certaines blessures familiales mettent des années à guérir.
We've drifted apart since our parents passed away. | Nous nous sommes éloignés depuis la mort de nos parents.
Inheritance disputes can tear families apart. | Les conflits d'héritage peuvent déchirer les familles.
It's wise to have a will drawn up. | Il est sage de faire rédiger un testament.
We had a frank conversation about end-of-life care. | Nous avons eu une conversation franche sur les soins de fin de vie.
Advance directives spare families agonizing decisions. | Les directives anticipées épargnent aux familles des décisions déchirantes.
Helicopter parenting can stunt a child's independence. | L'éducation hélicoptère peut freiner l'autonomie de l'enfant.
Children need room to fail and learn from it. | Les enfants ont besoin de pouvoir échouer et en tirer des leçons.
Overscheduling leaves kids with no time to just play. | Un emploi du temps surchargé ne laisse pas aux enfants le temps de simplement jouer.
Tiger parenting is a controversial approach. | L'éducation « mère tigre » est une approche controversée.
Academic pressure starts at a frighteningly young age. | La pression scolaire commence à un âge effroyablement jeune.
Parents often project their own ambitions onto their children. | Les parents projettent souvent leurs propres ambitions sur leurs enfants.
Unconditional love is the foundation of a secure childhood. | L'amour inconditionnel est le fondement d'une enfance sécurisante.
Consistency matters more than strictness. | La cohérence compte plus que la sévérité.
Children learn far more from what we do than what we say. | Les enfants apprennent bien plus de nos actes que de nos paroles.
Screen time has become a constant source of family tension. | Le temps d'écran est devenu une source permanente de tensions familiales.
Parents struggle to keep up with their kids' online lives. | Les parents peinent à suivre la vie en ligne de leurs enfants.
Sharing children's photos online raises consent issues. | Publier des photos d'enfants en ligne pose des questions de consentement.
Same-sex couples are now able to marry and adopt. | Les couples de même sexe peuvent désormais se marier et adopter.
Legal recognition has given many families security. | La reconnaissance légale a apporté une sécurité à beaucoup de familles.
Single parents face disproportionate financial strain. | Les parents seuls subissent une pression financière disproportionnée.
Divorce is less stigmatized than it used to be. | Le divorce est moins stigmatisé qu'avant.
Co-parenting after a divorce requires a lot of goodwill. | La coparentalité après un divorce demande beaucoup de bonne volonté.
Children should never be caught in the middle. | Les enfants ne devraient jamais être pris entre deux feux.
Blended families face unique challenges. | Les familles recomposées font face à des défis particuliers.
Adoption should be about the child's best interests. | L'adoption doit avant tout servir l'intérêt de l'enfant.
Fertility treatment can be emotionally and financially draining. | Les traitements de fertilité peuvent épuiser émotionnellement et financièrement.
Egg freezing is giving women more options. | La congélation d'ovocytes offre plus de choix aux femmes.
Marriage is increasingly seen as a choice rather than an obligation. | Le mariage est de plus en plus vu comme un choix plutôt qu'une obligation.
People are marrying later than ever before. | On se marie de plus en plus tard.
Living alone is on the rise, especially in cities. | Le nombre de personnes vivant seules augmente, surtout en ville.
Chosen family can be just as meaningful as blood relatives. | La famille qu'on se choisit peut compter autant que la famille de sang.
Pets have become full members of the family. | Les animaux sont devenus des membres à part entière de la famille.
Dual-income households are now the norm. | Les foyers à deux salaires sont désormais la norme.
The division of household labor is still far from equal. | Le partage des tâches ménagères est encore loin d'être égal.
Mental load refers to the invisible work of running a household. | La charge mentale désigne le travail invisible de gestion du foyer.
Couples who share chores tend to report higher satisfaction. | Les couples qui partagent les tâches se disent généralement plus satisfaits.
Communication is the bedrock of any lasting relationship. | La communication est le socle de toute relation durable.
Arguments about money are a leading cause of divorce. | Les disputes d'argent sont l'une des principales causes de divorce.
We pool our income but keep some money separate. | Nous mettons nos revenus en commun, mais gardons un peu d'argent chacun.
Prenuptial agreements are becoming more common. | Les contrats de mariage deviennent plus courants.
Multigenerational households have their pros and cons. | Les foyers multigénérationnels ont leurs avantages et leurs inconvénients.
Living with grandparents can enrich a child's upbringing. | Vivre avec ses grands-parents peut enrichir l'éducation d'un enfant.
Grandparents are an invaluable source of childcare. | Les grands-parents sont une aide précieuse pour la garde des enfants.
Cultural traditions are passed down through families. | Les traditions culturelles se transmettent par la famille.
Many young people no longer speak their grandparents' language. | Beaucoup de jeunes ne parlent plus la langue de leurs grands-parents.
Losing a heritage language severs a link to the past. | Perdre une langue d'héritage, c'est couper un lien avec le passé.
Family stories are worth recording before they're lost. | Les histoires de famille méritent d'être enregistrées avant qu'elles se perdent.
Ancestor worship is still an important part of family life here. | Le culte des ancêtres reste une part importante de la vie familiale ici.
Tomb Sweeping Day brings scattered families together. | La fête de Qingming rassemble les familles dispersées.
The Lunar New Year can be both joyful and stressful. | Le Nouvel An lunaire peut être à la fois joyeux et stressant.
Relatives' well-meaning questions can feel intrusive. | Les questions bien intentionnées de la famille peuvent sembler indiscrètes.
Family expectations can clash with personal ambitions. | Les attentes familiales peuvent entrer en conflit avec les ambitions personnelles.
I've learned to accept my parents for who they are. | J'ai appris à accepter mes parents tels qu'ils sont.
As you get older, you see your parents as people. | En vieillissant, on voit ses parents comme des personnes.
Becoming a parent changes your perspective on your own childhood. | Devenir parent change le regard qu'on porte sur sa propre enfance.
Parenthood is the hardest and most rewarding job there is. | Être parent est le métier le plus dur et le plus gratifiant qui soit.
Sibling rivalry often eases with age. | La rivalité fraternelle s'apaise souvent avec l'âge.
Birth order may shape personality, but the evidence is mixed. | Le rang de naissance influence peut-être la personnalité, mais les données sont contrastées.
Only children are often unfairly stereotyped. | Les enfants uniques font souvent l'objet de stéréotypes injustes.
Family dinners are linked to better outcomes for children. | Les repas en famille sont associés à un meilleur développement des enfants.
Rituals and routines give children a sense of security. | Les rituels et les routines donnent aux enfants un sentiment de sécurité.
Quality matters more than quantity when it comes to family time. | Pour le temps en famille, la qualité compte plus que la quantité.
Work culture makes it hard to be a present parent. | La culture du travail rend difficile d'être un parent présent.
Flexible working arrangements are a lifeline for parents. | Les horaires flexibles sont une bouée de sauvetage pour les parents.
Domestic violence often goes unreported. | Les violences conjugales ne sont souvent pas signalées.
Abuse can happen in any family, regardless of background. | La maltraitance peut exister dans n'importe quelle famille, quel que soit son milieu.
Support services need to be easier to access. | Les services d'aide doivent être plus accessibles.
Family policy needs to reflect how people actually live. | La politique familiale doit refléter la façon dont les gens vivent réellement.
Housing costs are delaying household formation. | Le coût du logement retarde la formation des foyers.
Young adults are living with their parents for longer. | Les jeunes adultes vivent plus longtemps chez leurs parents.
Boomerang kids return home after college. | Les enfants boomerang reviennent à la maison après leurs études.
Empty nesters often rediscover their own interests. | Les parents dont les enfants sont partis redécouvrent souvent leurs propres centres d'intérêt.
Family is not defined by a single model. | La famille ne se définit pas par un modèle unique.
What matters most is love, respect and support. | Ce qui compte le plus, c'est l'amour, le respect et le soutien.
Caring for a sick parent can take a heavy emotional toll. | S'occuper d'un parent malade peut avoir un lourd coût émotionnel.
`,
});
