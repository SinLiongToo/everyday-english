// 法文對照（Français）：身體・健康
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
addFrench("health", {
  words: `
head | la tête | J'ai mal à la tête.
hair | les cheveux | Elle a les cheveux longs.
face | le visage | Lave-toi le visage.
eye | l'œil | J'ai quelque chose dans l'œil.
ear | l'oreille | J'ai mal à l'oreille.
nose | le nez | Mouche-toi.
mouth | la bouche | Ouvrez la bouche, s'il vous plaît.
tooth | la dent | J'ai une dent qui bouge.
tongue | la langue | Tirez la langue.
lip | la lèvre | J'ai la lèvre sèche.
neck | le cou | J'ai le cou raide.
shoulder | l'épaule | J'ai mal à l'épaule quand je lève le bras.
arm | le bras | Il s'est cassé le bras.
elbow | le coude | Je me suis cogné le coude contre la table.
hand | la main | Lave-toi les mains.
finger | le doigt | Je me suis coupé le doigt.
thumb | le pouce | Lève le pouce !
fingernail | l'ongle | Coupe-toi les ongles.
chest | la poitrine | J'ai une douleur dans la poitrine.
stomach | l'estomac ; le ventre | J'ai mal au ventre.
back | le dos | J'ai mal au dos.
leg | la jambe | J'ai la jambe fatiguée.
knee | le genou | Je me suis fait mal au genou.
foot | le pied | J'ai froid au pied.
toe | l'orteil | Je me suis cogné l'orteil.
skin | la peau | J'ai la peau sèche en hiver.
bone | l'os | Le lait est bon pour les os.
blood | le sang | Il y a du sang sur ta chemise.
heart | le cœur | Le cœur bat vite quand on court.
brain | le cerveau | Le sommeil est bon pour le cerveau.
cheek | la joue | Elle a les joues rouges.
chin | le menton | Il a une coupure au menton.
eyebrow | le sourcil | Elle a haussé un sourcil.
eyelash | le cil | Tu as un cil sur la joue.
forehead | le front | Touche mon front. Il est chaud ?
sick | malade | Je me sens malade aujourd'hui.
fever | la fièvre | Elle a beaucoup de fièvre.
cold | le rhume | J'ai un rhume.
cough | tousser ; la toux | Je n'arrête pas de tousser.
sneeze | éternuer | Couvre-toi la bouche quand tu éternues.
headache | le mal de tête | J'ai mal à la tête.
stomachache | le mal de ventre | J'ai mal au ventre.
toothache | le mal de dents | J'ai mal aux dents.
sore throat | le mal de gorge | J'ai mal à la gorge.
runny nose | le nez qui coule | J'ai le nez qui coule.
snot | la morve | Essuie ta morve.
booger | la crotte de nez | Ne mange pas ta crotte de nez !
earwax | le cérumen | Trop de cérumen peut boucher l'oreille.
sweat | la sueur ; transpirer | Je transpire beaucoup en été.
tears | les larmes | Les larmes coulaient sur son visage.
pee | faire pipi | J'ai envie de faire pipi.
poop | le caca | Le chien a fait caca sur l'herbe.
burp | roter ; le rot | Le bébé a fait son rot après avoir bu son lait.
hiccups | le hoquet | J'ai le hoquet.
fart | péter ; le pet | Qui a pété ?
itchy | qui démange | J'ai le bras qui me démange.
pain | la douleur | J'ai une douleur au côté.
hurt | faire mal | J'ai mal à la jambe.
cut | la coupure | J'ai une coupure à la main.
bandage | le pansement | Mets un pansement dessus.
medicine | le médicament | Prends ton médicament.
pill | le comprimé | Prenez un comprimé après chaque repas.
doctor | le médecin | Tu devrais voir un médecin.
nurse | l'infirmier ; l'infirmière | L'infirmière a pris ma température.
hospital | l'hôpital | Il est à l'hôpital.
clinic | le cabinet médical ; la clinique | Le cabinet ouvre à neuf heures.
dentist | le dentiste | Je vais chez le dentiste.
sleep | dormir ; le sommeil | Tu as besoin de dormir davantage.
rest | se reposer | Repose-toi.
healthy | sain ; en bonne santé | Mange sainement.
tired | fatigué | Je suis tellement fatigué.
dizzy | pris de vertige | J'ai la tête qui tourne.
throw up | vomir | Je crois que je vais vomir.
thirsty | qui a soif | J'ai soif. Je peux avoir de l'eau ?
weight | le poids | L'infirmière a vérifié mon poids.
height | la taille | Combien mesures-tu ?
wash | laver | Lave-toi les mains avant de manger.
soap | le savon | Utilise du savon et de l'eau tiède.
toothbrush | la brosse à dents | Prends une nouvelle brosse à dents.
shower | la douche | Prends une douche après le sport.
mask | le masque | Porte un masque si tu tousses.
tissue | le mouchoir en papier | Tiens, un mouchoir.
temperature | la température | Laisse-moi prendre ta température.
thermometer | le thermomètre | Mets le thermomètre sous ton bras.
glasses | les lunettes | J'ai besoin de lunettes pour lire.
ambulance | l'ambulance | Appelez une ambulance !
exercise | faire du sport ; l'exercice | Fais de l'exercice tous les jours.
vegetables | les légumes | Mange plus de légumes.
fruit | les fruits | Les fruits sont bons pour la santé.
water | l'eau | Bois beaucoup d'eau.
breathe | respirer | Inspirez lentement.
yawn | bâiller | Arrête de bâiller ! Va te coucher.
drool | baver | Le bébé bave.
sunburn | le coup de soleil | J'ai attrapé un coup de soleil à la plage.
mosquito bite | la piqûre de moustique | Ne gratte pas cette piqûre de moustique.
scratch | se gratter ; l'égratignure | Ne te gratte pas.
sore | courbaturé ; douloureux | J'ai des courbatures aux jambes.
shiver | frissonner | Je frissonne. J'ai froid.
pimple | le bouton | J'ai un bouton sur le nez.
belly button | le nombril | Le bébé a un joli nombril.
eye doctor | l'ophtalmologue ; l'ophtalmo | J'ai les yeux rouges, alors je vais chez l'ophtalmo.
family doctor | le médecin traitant ; le médecin de famille | Notre médecin de famille nous connaît très bien.
front desk | l'accueil | Demande à l'accueil où aller.
health insurance card | la carte d'assurance maladie | Présentez votre carte d'assurance maladie, s'il vous plaît.
baby | le bébé | Le bébé a de la fièvre.
toddler | le tout-petit | Le tout-petit est tombé et s'est cogné la tête.
diaper rash | l'érythème fessier | Le bébé a un érythème fessier.
teething | la poussée dentaire | Elle fait ses dents, alors elle pleure beaucoup.
growth | la croissance | Le médecin a vérifié sa croissance.
teenager | l'adolescent | Un adolescent a besoin de beaucoup de sommeil.
middle-aged | d'âge mûr | Mon père a la cinquantaine et il est très occupé.
elderly | âgé | Mon voisin âgé marche tous les matins.
walking stick | la canne | Papi utilise une canne.
hearing aid | l'appareil auditif | Mamie porte un appareil auditif.
wheelchair | le fauteuil roulant | Il a besoin d'un fauteuil roulant depuis sa chute.
body | le corps | Notre corps a besoin d'eau et de sommeil.
waist | la taille | Elle a noué une veste autour de sa taille.
belly | le ventre | J'ai le ventre plein.
bottom | les fesses | Je suis tombé sur les fesses.
palm | la paume | Mets le comprimé dans ta paume.
heel | le talon | J'ai mal au talon quand je marche.
sole | la plante du pied | J'ai la plante du pied qui me démange.
thigh | la cuisse | Je me suis froissé un muscle de la cuisse.
calf | le mollet | J'ai mal au mollet après avoir couru.
shin | le tibia | Je me suis cogné le tibia contre la table.
armpit | l'aisselle | Mets le thermomètre sous ton aisselle.
ribs | les côtes | Je me suis fait mal aux côtes en tombant.
skull | le crâne | Le crâne protège le cerveau.
jaw | la mâchoire | J'ai mal à la mâchoire quand je mâche.
eyeball | le globe oculaire | Le globe oculaire mesure environ 2,5 centimètres.
knuckle | l'articulation du doigt ; la jointure | Je me suis écorché les jointures.
toenail | l'ongle de pied | Coupe tes ongles de pied bien droit.
index finger | l'index | Montre avec l'index.
middle finger | le majeur | Ne fais pas de doigt d'honneur. C'est grossier.
ring finger | l'annulaire | Elle porte sa bague à l'annulaire.
pinky | l'auriculaire ; le petit doigt | Je me suis cassé le petit doigt.
big toe | le gros orteil | Je me suis cogné le gros orteil.
lap | les genoux (en position assise) | Le chat s'est assis sur mes genoux.
scalp | le cuir chevelu | J'ai le cuir chevelu sec et qui gratte.
lung | le poumon | On a deux poumons.
`,
  phrases: `
I don't feel well. | Je ne me sens pas bien.
I feel sick. | Je me sens mal.
What's wrong? | Qu'est-ce qui ne va pas ?
Where does it hurt? | Où avez-vous mal ?
It hurts here. | J'ai mal ici.
My head hurts. | J'ai mal à la tête.
I have a headache. | J'ai mal à la tête.
I have a stomachache. | J'ai mal au ventre.
I have a cold. | J'ai un rhume.
I have a fever. | J'ai de la fièvre.
I have a runny nose. | J'ai le nez qui coule.
I have a sore throat. | J'ai mal à la gorge.
I keep sneezing. | Je n'arrête pas d'éternuer.
I can't stop coughing. | Je n'arrête pas de tousser.
I feel dizzy. | J'ai des vertiges.
I feel tired all the time. | Je suis tout le temps fatigué.
I think I'm going to throw up. | Je crois que je vais vomir.
I have a toothache. | J'ai mal aux dents.
My eyes are itchy. | J'ai les yeux qui piquent.
My back hurts. | J'ai mal au dos.
I hurt my leg. | Je me suis fait mal à la jambe.
I cut my finger. | Je me suis coupé le doigt.
I need a bandage. | J'ai besoin d'un pansement.
Are you okay? | Ça va ?
Take care of yourself. | Prends soin de toi.
Get well soon! | Bon rétablissement !
You should see a doctor. | Tu devrais voir un médecin.
Go to bed early. | Couche-toi tôt.
Get some rest. | Repose-toi.
Drink lots of water. | Bois beaucoup d'eau.
Take this medicine. | Prends ce médicament.
Take one pill three times a day. | Prenez un comprimé trois fois par jour.
Take it after meals. | Prenez-le après les repas.
Do you have a fever? | Tu as de la fièvre ?
Let me take your temperature. | Laisse-moi prendre ta température.
Open your mouth and say "ah". | Ouvrez la bouche et dites « ah ».
Breathe in. Breathe out. | Inspirez. Expirez.
Cover your mouth when you cough. | Couvre-toi la bouche quand tu tousses.
Use a tissue. | Prends un mouchoir.
Blow your nose. | Mouche-toi.
Don't pick your nose. | Ne mets pas les doigts dans le nez.
Wipe your nose. | Essuie-toi le nez.
Wash your hands with soap. | Lave-toi les mains au savon.
Brush your teeth twice a day. | Brosse-toi les dents deux fois par jour.
Don't forget to floss. | N'oublie pas le fil dentaire.
Wear a mask, please. | Portez un masque, s'il vous plaît.
I need to go to the hospital. | Je dois aller à l'hôpital.
Call an ambulance! | Appelez une ambulance !
Help! He fell down. | Au secours ! Il est tombé.
Is there a clinic near here? | Il y a un cabinet médical près d'ici ?
Where is the pharmacy? | Où est la pharmacie ?
I need to see a dentist. | J'ai besoin de voir un dentiste.
I'm allergic to peanuts. | Je suis allergique aux cacahuètes.
I can't sleep. | Je n'arrive pas à dormir.
I slept well. | J'ai bien dormi.
I feel better now. | Je me sens mieux maintenant.
I'm much better, thanks. | Je vais beaucoup mieux, merci.
I feel great today! | Je me sens super bien aujourd'hui !
You look pale. | Tu es pâle.
You look tired. | Tu as l'air fatigué.
You're sweating. | Tu transpires.
I'm cold. I'm shivering. | J'ai froid. Je grelotte.
My skin is dry. | J'ai la peau sèche.
I got a sunburn. | J'ai attrapé un coup de soleil.
Put on sunscreen. | Mets de la crème solaire.
A mosquito bit me. | Un moustique m'a piqué.
Don't scratch it. | Ne gratte pas.
I have the hiccups. | J'ai le hoquet.
Excuse me, I burped. | Pardon, j'ai roté.
I need to pee. | J'ai envie de faire pipi.
Where's the toilet? | Où sont les toilettes ?
Eat your vegetables. | Mange tes légumes.
Fruit is good for you. | Les fruits sont bons pour la santé.
Don't eat too much candy. | Ne mange pas trop de bonbons.
Exercise every day. | Fais de l'exercice tous les jours.
Let's go for a walk. | Allons nous promener.
Sit up straight. | Tiens-toi droit.
Don't read in the dark. | Ne lis pas dans le noir.
Rest your eyes. | Repose tes yeux.
My glasses are dirty. | Mes lunettes sont sales.
I can't see well. | Je ne vois pas bien.
I can't hear you. | Je ne t'entends pas.
How tall are you? | Combien mesures-tu ?
I'm 160 centimeters tall. | Je mesure 1,60 mètre.
I want to be healthy. | Je veux être en bonne santé.
Health is important. | La santé, c'est important.
Bless you! | À tes souhaits !
Here's a tissue. | Tiens, un mouchoir.
Do you need help? | Tu as besoin d'aide ?
Sit down and rest. | Assieds-toi et repose-toi.
Lie down for a bit. | Allonge-toi un peu.
Put ice on it. | Mets de la glace dessus.
Keep warm. | Reste au chaud.
My baby is sick. | Mon bébé est malade.
She has a fever and a cough. | Elle a de la fièvre et elle tousse.
I'm not hungry. | Je n'ai pas faim.
I'm thirsty. | J'ai soif.
Stay home today. | Reste à la maison aujourd'hui.
Feel better soon! | Remets-toi vite !
I need to lie down. | J'ai besoin de m'allonger.
I want to see a doctor. | Je voudrais voir un médecin.
Where is the eye doctor? | Où est l'ophtalmologue ?
Here is my health insurance card. | Voici ma carte d'assurance maladie.
Please take a number. | Prenez un ticket, s'il vous plaît.
Please wait until your number is called. | Veuillez attendre qu'on appelle votre numéro.
It's your turn now. | C'est votre tour.
Do I pay now or later? | Je paie maintenant ou après ?
Where do I get my medicine? | Où est-ce que je récupère mes médicaments ?
My baby has a fever. | Mon bébé a de la fièvre.
My son keeps coughing at night. | Mon fils tousse sans arrêt la nuit.
Is this medicine okay for children? | Ce médicament convient-il aux enfants ?
How much should I give a five-year-old? | Quelle dose pour un enfant de cinq ans ?
She needs her shots next week. | Elle doit faire ses vaccins la semaine prochaine.
Wash your hands before you eat. | Lave-toi les mains avant de manger.
Brush your teeth before bed. | Brosse-toi les dents avant de te coucher.
Don't look at your phone too long. | Ne regarde pas ton téléphone trop longtemps.
Teenagers need more sleep. | Les adolescents ont besoin de plus de sommeil.
I stay up too late. | Je me couche trop tard.
My back hurts after work. | J'ai mal au dos après le travail.
I'm getting old. | Je me fais vieux.
I need to exercise more. | Je dois faire plus d'exercice.
Grandma can't hear very well. | Mamie n'entend pas très bien.
Please speak slowly and clearly. | Parlez lentement et clairement, s'il vous plaît.
Hold the handrail. | Tiens la rampe.
Be careful not to fall. | Attention à ne pas tomber.
Did you take your medicine? | Tu as pris ton médicament ?
I threw up this morning. | J'ai vomi ce matin.
I need to see a doctor. | J'ai besoin de voir un médecin.
Does it hurt when I press here? | Ça vous fait mal quand j'appuie ici ?
Show me where it hurts. | Montrez-moi où vous avez mal.
It hurts right here. | J'ai mal juste ici.
My lower back hurts. | J'ai mal au bas du dos.
I have a pain in my side. | J'ai une douleur au côté.
My belly hurts. | J'ai mal au ventre.
I hit my shin on the bed. | Je me suis cogné le tibia contre le lit.
My thighs are sore from the stairs. | J'ai des courbatures aux cuisses à cause des escaliers.
I have a cramp in my calf. | J'ai une crampe au mollet.
My heel hurts in the morning. | J'ai mal au talon le matin.
I stubbed my big toe. | Je me suis cogné le gros orteil.
I cut my index finger. | Je me suis coupé l'index.
I can't bend my pinky. | Je n'arrive pas à plier mon petit doigt.
My jaw clicks when I open my mouth. | Ma mâchoire craque quand j'ouvre la bouche.
I bumped my head. | Je me suis cogné la tête.
My scalp is itchy. | J'ai le cuir chevelu qui gratte.
Put the thermometer under your arm. | Mets le thermomètre sous ton bras.
Lie on your back, please. | Allongez-vous sur le dos, s'il vous plaît.
Lie on your stomach, please. | Allongez-vous sur le ventre, s'il vous plaît.
Turn on your side. | Tournez-vous sur le côté.
Take a deep breath. | Respirez profondément.
Breathe out slowly. | Expirez lentement.
Bend your knees. | Pliez les genoux.
Lift your arms over your head. | Levez les bras au-dessus de la tête.
Our bones keep growing until our twenties. | Nos os continuent de grandir jusqu'à la vingtaine.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("health", {
  words: `
symptom | le symptôme | Quels sont vos symptômes ?
appointment | le rendez-vous | J'ai pris rendez-vous chez le médecin.
prescription | l'ordonnance | Le médecin m'a fait une ordonnance.
pharmacy | la pharmacie | Apportez ceci à la pharmacie.
pharmacist | le pharmacien | Demandez au pharmacien comment le prendre.
side effect | l'effet secondaire | Ce médicament peut donner sommeil comme effet secondaire.
dose | la dose | Ne dépassez pas la dose recommandée.
painkiller | l'antidouleur ; l'antalgique | J'ai pris un antidouleur pour mon mal de tête.
antibiotic | l'antibiotique | Finissez tous vos antibiotiques.
vaccine | le vaccin | Vous avez fait le vaccin contre la grippe ?
flu | la grippe | La moitié du bureau a la grippe.
infection | l'infection | La coupure s'est infectée.
allergy | l'allergie | J'ai une allergie aux cacahuètes.
rash | l'éruption cutanée ; les rougeurs | Elle a une éruption sur le bras.
bruise | le bleu ; l'ecchymose | J'ai un gros bleu sur la jambe.
swelling | le gonflement | Mettez de la glace pour réduire le gonflement.
sprain | l'entorse ; se fouler | Je me suis foulé la cheville.
fracture | la fracture | La radio a montré une petite fracture.
cast | le plâtre | Il a le bras dans le plâtre.
stitches | les points de suture | J'ai eu besoin de cinq points de suture.
scar | la cicatrice | La coupure a laissé une cicatrice.
blister | l'ampoule | Mes nouvelles chaussures m'ont fait une ampoule.
eye discharge | les chassies ; les sécrétions oculaires | Essuie les chassies avec un linge propre et humide.
dandruff | les pellicules | J'utilise un shampoing spécial contre les pellicules.
acne | l'acné | Beaucoup d'adolescents ont de l'acné.
body odor | l'odeur corporelle | Le déodorant aide contre les odeurs corporelles.
bad breath | la mauvaise haleine | Se brosser la langue aide à éviter la mauvaise haleine.
dehydration | la déshydratation | Bois de l'eau pour éviter la déshydratation.
heatstroke | le coup de chaleur | Reste à l'ombre pour éviter le coup de chaleur.
food poisoning | l'intoxication alimentaire | J'ai eu une intoxication alimentaire à cause de fruits de mer avariés.
diarrhea | la diarrhée | J'ai la diarrhée depuis hier soir.
constipation | la constipation | Les fibres aident contre la constipation.
nausea | la nausée | Le médicament peut provoquer des nausées.
vomit | vomir | L'enfant a vomi deux fois.
indigestion | l'indigestion | Manger trop vite me donne une indigestion.
heartburn | les brûlures d'estomac | La nourriture épicée me donne des brûlures d'estomac.
migraine | la migraine | Elle a des migraines quand elle est stressée.
insomnia | l'insomnie | Je souffre d'insomnie.
stress | le stress | Le stress peut rendre malade.
anxiety | l'anxiété | Les exercices de respiration aident contre l'anxiété.
depression | la dépression | La dépression est une vraie maladie.
blood pressure | la tension artérielle | Laissez-moi prendre votre tension.
heart rate | la fréquence cardiaque | Ma fréquence cardiaque augmente quand je cours.
pulse | le pouls | L'infirmière a pris mon pouls.
check-up | le bilan de santé | Je fais un bilan de santé une fois par an.
blood test | la prise de sang ; l'analyse de sang | Il vous faut une prise de sang.
X-ray | la radio | Le médecin a prescrit une radio.
surgery | l'opération ; la chirurgie | Il s'est fait opérer du genou le mois dernier.
emergency room | les urgences | Nous sommes allés aux urgences à minuit.
waiting room | la salle d'attente | La salle d'attente était pleine.
health insurance | l'assurance maladie | Apportez votre carte d'assurance maladie.
medical record | le dossier médical | Le médecin a regardé mon dossier médical.
specialist | le spécialiste | Vous devriez voir un spécialiste.
physical therapy | la kinésithérapie | Je fais de la kiné pour mon dos.
recover | guérir ; se rétablir | Il faut deux semaines pour se rétablir.
contagious | contagieux | C'est contagieux ?
immune system | le système immunitaire | Le sommeil soutient le système immunitaire.
nutrition | la nutrition | Une bonne nutrition aide à guérir.
diet | l'alimentation | Une alimentation équilibrée garde en bonne santé.
calories | les calories | Cette boisson contient beaucoup de calories.
vitamins | les vitamines | Je prends des vitamines tous les matins.
protein | les protéines | Les œufs sont riches en protéines.
hydrate | s'hydrater | Hydrate-toi avant et après le sport.
posture | la posture | Une mauvaise posture peut donner mal au dos.
stretch | s'étirer | Étire-toi avant de courir.
muscle | le muscle | Je me suis froissé un muscle.
joint | l'articulation | J'ai mal aux articulations quand il fait froid.
spine | la colonne vertébrale | Rester assis toute la journée est mauvais pour la colonne.
lungs | les poumons | Fumer abîme les poumons.
liver | le foie | Trop d'alcool nuit au foie.
kidney | le rein | Bois de l'eau pour protéger tes reins.
stomach flu | la gastro-entérite | La gastro circule à l'école.
wrist | le poignet | Je me suis fait mal au poignet en jouant au tennis.
ankle | la cheville | J'ai la cheville enflée.
hip | la hanche | Mamie s'est cassé la hanche.
throat | la gorge | J'ai la gorge sèche.
nostril | la narine | J'ai une narine bouchée.
eardrum | le tympan | La musique forte peut abîmer le tympan.
eyelid | la paupière | Ma paupière n'arrête pas de tressauter.
pupil | la pupille | Le médecin a éclairé ma pupille.
gums | les gencives | Mes gencives saignent quand je me brosse les dents.
cavity | la carie | Le dentiste a trouvé une carie.
braces | l'appareil dentaire | Ma fille porte un appareil dentaire.
contact lenses | les lentilles de contact | Je porte des lentilles de contact.
hearing | l'audition | Son audition baisse.
eyesight | la vue | Trop d'écrans, c'est mauvais pour la vue.
nearsighted | myope | La plupart de mes camarades sont myopes.
hay fever | le rhume des foins | Mon rhume des foins est terrible au printemps.
asthma | l'asthme | Il a toujours un inhalateur pour son asthme.
cough syrup | le sirop contre la toux | Prends une cuillerée de sirop contre la toux.
eye drops | le collyre ; les gouttes pour les yeux | Mettez ce collyre deux fois par jour.
ointment | la pommade | Mets un peu de pommade sur les rougeurs.
hand sanitizer | le gel hydroalcoolique | Utilise du gel hydroalcoolique avant de manger.
first aid | les premiers secours | Tout le monde devrait apprendre les premiers secours.
CPR | la réanimation cardio-pulmonaire | Elle a fait un massage cardiaque jusqu'à l'arrivée de l'ambulance.
sick leave | l'arrêt maladie | Je suis en arrêt maladie aujourd'hui.
doctor's note | le certificat médical | Mon patron m'a demandé un certificat médical.
fit | en forme | Elle reste en forme grâce au vélo.
germs | les microbes | Lavez-vous les mains pour tuer les microbes.
inhaler | l'inhalateur | Garde toujours ton inhalateur sur toi.
registration | l'enregistrement à l'accueil | Passez à l'enregistrement avant de voir le médecin.
registration fee | les frais d'enregistrement | Les frais d'enregistrement sont de 150 dollars.
first visit | la première consultation | C'est ma première consultation dans cet hôpital.
follow-up visit | la consultation de suivi | Revenez pour une consultation de suivi la semaine prochaine.
queue number | le numéro de passage | Mon numéro de passage est le 23.
consultation room | la salle de consultation | Attendez devant la salle de consultation 5, s'il vous plaît.
outpatient clinic | les consultations externes | Les consultations externes ouvrent à 8 h 30.
referral | la lettre d'orientation | Le cabinet m'a donné une lettre d'orientation vers l'hôpital.
pick up | récupérer | Récupérez vos médicaments au guichet 3.
cashier | la caisse | Payez à la caisse avant de récupérer vos médicaments.
ward | le service ; la chambre d'hôpital | Mon grand-père est dans le service 7.
hospitalized | hospitalisé | Elle a été hospitalisée trois jours.
internal medicine | la médecine interne | Pour de la fièvre et de la toux, inscrivez-vous en médecine interne.
general surgery | la chirurgie générale | On l'a envoyé en chirurgie générale pour son appendicite.
pediatrics | la pédiatrie | Emmenez votre fils en pédiatrie.
OB-GYN | la gynécologie-obstétrique | Elle a un contrôle en gynécologie tous les mois.
ENT | l'ORL | Pour un mal de gorge ou un nez bouché, inscrivez-vous en ORL.
dermatology | la dermatologie | Pour une éruption cutanée, allez en dermatologie.
ophthalmology | l'ophtalmologie | Le service d'ophtalmologie est au deuxième étage.
dentistry | la dentisterie ; le service dentaire | Le service dentaire est très chargé.
orthopedics | l'orthopédie | Après ma chute, je suis allé en orthopédie pour une radio.
family medicine | la médecine générale | Si vous n'êtes pas sûr, commencez par la médecine générale.
pediatrician | le pédiatre | Notre pédiatre est très doux avec les enfants.
dermatologist | le dermatologue | Le dermatologue m'a donné une crème contre l'acné.
checkup | le bilan de santé | Les enfants ont besoin d'un bilan de santé chaque année.
chickenpox | la varicelle | Mon fils a attrapé la varicelle à l'école.
hand, foot and mouth disease | le syndrome pieds-mains-bouche | Le syndrome pieds-mains-bouche se propage vite dans les maternelles.
growth chart | la courbe de croissance | Sa taille est normale sur la courbe de croissance.
picky eater | l'enfant difficile ; le mangeur difficile | Mon fils est difficile et ne touche pas aux légumes.
puberty | la puberté | La puberté apporte de grands changements dans le corps.
growth spurt | la poussée de croissance | Il a eu une poussée de croissance l'été dernier.
body image | l'image corporelle | Les réseaux sociaux peuvent nuire à l'image corporelle des ados.
sports injury | la blessure sportive | Une blessure sportive l'a écartée de l'équipe pendant un mois.
all-nighter | la nuit blanche | Faire une nuit blanche avant l'examen, c'est une mauvaise idée.
health check | le bilan de santé | Faites un bilan de santé complet après quarante ans.
blood sugar | la glycémie | Mange moins de sucreries pour contrôler ta glycémie.
belly fat | la graisse abdominale | La graisse abdominale est difficile à perdre à l'âge mûr.
back pain | le mal de dos | Rester assis toute la journée me donne mal au dos.
reading glasses | les lunettes de lecture | J'ai besoin de lunettes de lecture pour les petits caractères.
nursing home | la maison de retraite ; l'EHPAD | Papi est entré en maison de retraite.
cataract | la cataracte | Elle s'est fait opérer de la cataracte la semaine dernière.
fall risk | le risque de chute | Les tapis mal fixés augmentent le risque de chute à la maison.
memory loss | la perte de mémoire | Une certaine perte de mémoire est normale avec l'âge.
dentures | le dentier | Mon grand-père enlève son dentier la nuit.
high blood pressure | l'hypertension | Mon père prend des comprimés contre l'hypertension.
organ | l'organe | Le cœur est un organe vital.
skeleton | le squelette | Le squelette soutient le corps.
rib cage | la cage thoracique | La cage thoracique protège le cœur et les poumons.
pelvis | le bassin | Le bassin relie la colonne aux jambes.
collarbone | la clavicule | Il s'est cassé la clavicule dans un accident de vélo.
shoulder blade | l'omoplate | J'ai une douleur sous l'omoplate.
kneecap | la rotule | La rotule protège l'articulation du genou.
tendon | le tendon | Les tendons relient les muscles aux os.
Achilles tendon | le tendon d'Achille | Il s'est rompu le tendon d'Achille en jouant au basket.
ligament | le ligament | Les ligaments relient les os entre eux.
cartilage | le cartilage | Le cartilage de mon genou est usé.
bone marrow | la moelle osseuse | La moelle osseuse fabrique les cellules sanguines.
nerve | le nerf | Un nerf coincé peut provoquer une douleur dans le bras.
vein | la veine | L'infirmière a fait une prise de sang dans une veine du bras.
artery | l'artère | Une artère transporte le sang depuis le cœur.
blood vessel | le vaisseau sanguin | Fumer abîme les vaisseaux sanguins.
digestive system | le système digestif | Les fibres sont bonnes pour le système digestif.
intestines | les intestins | Les aliments avancent lentement dans les intestins.
small intestine | l'intestin grêle | La plupart des nutriments sont absorbés dans l'intestin grêle.
large intestine | le gros intestin ; le côlon | Le gros intestin absorbe l'eau.
bladder | la vessie | J'ai la vessie pleine. Il me faut des toilettes.
gallbladder | la vésicule biliaire | On lui a retiré la vésicule biliaire.
pancreas | le pancréas | Le pancréas fabrique l'insuline.
appendix | l'appendice | Il s'est fait opérer de l'appendicite.
esophagus | l'œsophage | Les aliments descendent par l'œsophage jusqu'à l'estomac.
windpipe | la trachée | La trachée amène l'air aux poumons.
diaphragm | le diaphragme | Respire profondément avec le diaphragme.
tonsils | les amygdales | J'ai les amygdales gonflées.
thyroid | la thyroïde | La thyroïde se trouve à l'avant du cou.
sinus | le sinus | J'ai une sinusite.
abdomen | l'abdomen | Le médecin a palpé mon abdomen.
torso | le torse ; le tronc | Le tronc, c'est le corps sans la tête, les bras et les jambes.
forearm | l'avant-bras | Il a un tatouage sur l'avant-bras.
sweat gland | la glande sudoripare | Les glandes sudoripares aident à rafraîchir le corps.
saliva | la salive | La salive commence à décomposer les aliments.
womb | l'utérus | Le bébé grandit dans l'utérus de sa mère.
under the weather | patraque | Je me sens un peu patraque.
an apple a day keeps the doctor away | une pomme par jour éloigne le médecin | Une pomme par jour éloigne le médecin.
fit as a fiddle | en pleine forme ; frais comme un gardon | Papi est en pleine forme.
back on your feet | remis sur pied | Tu seras bientôt remis sur pied.
catch a cold | attraper froid ; s'enrhumer | Mets une veste ou tu vas t'enrhumer.
a frog in your throat | un chat dans la gorge | Tu as un chat dans la gorge ?
feel blue | avoir le cafard | J'ai le cafard aujourd'hui.
run down | à plat ; épuisé | Je me sens à plat.
sick as a dog | malade comme un chien | J'ai été malade comme un chien tout le week-end.
laughter is the best medicine | le rire est le meilleur des remèdes | Le rire est le meilleur des remèdes.
on the mend | en voie de guérison | Ma jambe est en voie de guérison.
a clean bill of health | un certificat de bonne santé | Le médecin m'a déclaré en parfaite santé.
take it easy | y aller doucement | Vas-y doucement pendant quelques jours.
out of shape | pas en forme | Je ne suis pas en forme.
in good shape | en bonne forme | Elle est en bonne forme pour son âge.
`,
});

addFrench("health", {
  phrases: `
I'd like to make an appointment with Dr. Lin. | J'aimerais prendre rendez-vous avec le docteur Lin.
Is this your first visit? | C'est votre première consultation ?
Please bring your health insurance card. | Apportez votre carte d'assurance maladie, s'il vous plaît.
What seems to be the problem? | Qu'est-ce qui ne va pas ?
How long have you had these symptoms? | Depuis combien de temps avez-vous ces symptômes ?
It started three days ago. | Ça a commencé il y a trois jours.
It's getting worse. | Ça s'aggrave.
The pain comes and goes. | La douleur va et vient.
It's a sharp pain. | C'est une douleur aiguë.
It's a dull ache. | C'est une douleur sourde.
It hurts when I swallow. | J'ai mal quand j'avale.
It hurts when I breathe deeply. | J'ai mal quand je respire profondément.
I've lost my appetite. | J'ai perdu l'appétit.
I've been feeling run-down lately. | Je me sens à plat ces derniers temps.
I've had diarrhea since last night. | J'ai la diarrhée depuis hier soir.
I feel nauseous. | J'ai la nausée.
I've got a rash on my arm. | J'ai des rougeurs sur le bras.
My ankle is swollen. | J'ai la cheville enflée.
I think I sprained my wrist. | Je crois que je me suis foulé le poignet.
I twisted my ankle playing basketball. | Je me suis tordu la cheville en jouant au basket.
I pulled a muscle at the gym. | Je me suis froissé un muscle à la salle de sport.
Are you allergic to any medication? | Êtes-vous allergique à un médicament ?
Are you taking any other medication? | Prenez-vous d'autres médicaments ?
Do you have any medical conditions? | Avez-vous des problèmes de santé ?
I have asthma. | Je suis asthmatique.
I'm pregnant. | Je suis enceinte.
Let me check your blood pressure. | Laissez-moi prendre votre tension.
Roll up your sleeve, please. | Remontez votre manche, s'il vous plaît.
Take a deep breath and hold it. | Inspirez profondément et retenez votre souffle.
We need to do a blood test. | Il faut faire une prise de sang.
You'll need an X-ray. | Il vous faudra une radio.
It's nothing serious. | Ce n'est rien de grave.
It's just a virus. | C'est juste un virus.
It's probably the flu. | C'est sans doute la grippe.
You have an ear infection. | Vous avez une otite.
I'll prescribe some antibiotics. | Je vais vous prescrire des antibiotiques.
Finish the whole course of antibiotics. | Allez jusqu'au bout du traitement antibiotique.
This may make you drowsy. | Ceci peut provoquer de la somnolence.
Don't drink alcohol with this medicine. | Ne buvez pas d'alcool avec ce médicament.
Take it on an empty stomach. | Prenez-le à jeun.
Come back if it doesn't get better. | Revenez si ça ne s'améliore pas.
Get plenty of rest and fluids. | Reposez-vous bien et buvez beaucoup.
Here's your prescription. | Voici votre ordonnance.
How often should I take this? | À quelle fréquence dois-je le prendre ?
Are there any side effects? | Y a-t-il des effets secondaires ?
Can I get this without a prescription? | Je peux l'avoir sans ordonnance ?
Do you have something for a cough? | Vous avez quelque chose contre la toux ?
Do you have anything for hay fever? | Vous avez quelque chose contre le rhume des foins ?
I need some eye drops. | J'ai besoin d'un collyre.
Could I get a doctor's note for work? | Pourrais-je avoir un certificat médical pour le travail ?
I'm calling in sick today. | Je me déclare malade aujourd'hui.
I've been off work for three days. | Je ne suis pas allé travailler depuis trois jours.
I'm on the mend. | Je suis en voie de guérison.
I'm fully recovered. | Je suis complètement rétabli.
Is it contagious? | C'est contagieux ?
You should stay home until the fever is gone. | Vous devriez rester chez vous jusqu'à ce que la fièvre tombe.
The flu is going around the office. | La grippe circule au bureau.
Have you had your flu shot? | Tu as fait ton vaccin contre la grippe ?
I need a booster shot. | J'ai besoin d'un rappel.
My arm is sore from the vaccine. | J'ai mal au bras à cause du vaccin.
I have a check-up next week. | J'ai un bilan de santé la semaine prochaine.
My blood pressure is a little high. | Ma tension est un peu élevée.
My cholesterol is borderline. | Mon cholestérol est à la limite.
The doctor told me to cut down on salt. | Le médecin m'a dit de réduire le sel.
I'm trying to lose weight. | J'essaie de perdre du poids.
I've gained a few kilos. | J'ai pris quelques kilos.
I'm trying to eat more fiber. | J'essaie de manger plus de fibres.
I need to drink more water. | Je dois boire plus d'eau.
I've been sleeping badly. | Je dors mal ces temps-ci.
I've been under a lot of stress. | Je suis très stressé ces temps-ci.
Stress gives me headaches. | Le stress me donne mal à la tête.
I get migraines when I'm tired. | J'ai des migraines quand je suis fatigué.
Too much screen time hurts my eyes. | Trop d'écran me fait mal aux yeux.
My eyesight is getting worse. | Ma vue baisse.
I wear contact lenses. | Je porte des lentilles de contact.
My gums bleed when I brush. | Mes gencives saignent quand je me brosse les dents.
I need a filling. | J'ai besoin d'un plombage.
I'm getting my teeth cleaned. | Je vais me faire détartrer les dents.
I've got dandruff. | J'ai des pellicules.
I always get acne before exams. | J'ai toujours des boutons avant les examens.
I have bad posture from sitting all day. | J'ai une mauvaise posture à force de rester assis toute la journée.
Stretch every hour if you sit at a desk. | Étire-toi toutes les heures si tu travailles assis.
I do physical therapy twice a week. | Je fais de la kiné deux fois par semaine.
I'm recovering from knee surgery. | Je me remets d'une opération du genou.
He's in the emergency room. | Il est aux urgences.
She's been admitted to the hospital. | Elle a été hospitalisée.
Visiting hours are from two to eight. | Les visites sont autorisées de quatorze à vingt heures.
When can I go home? | Quand est-ce que je pourrai rentrer chez moi ?
I was discharged yesterday. | Je suis sorti de l'hôpital hier.
I need to apply ice to reduce the swelling. | Je dois mettre de la glace pour faire dégonfler.
Keep the wound clean and dry. | Gardez la plaie propre et sèche.
The stitches come out next week. | On retire les points la semaine prochaine.
I fainted in the heat. | Je me suis évanoui à cause de la chaleur.
Stay in the shade and drink water. | Reste à l'ombre et bois de l'eau.
I think I have food poisoning. | Je crois que j'ai une intoxication alimentaire.
Wash your hands to stop germs spreading. | Lave-toi les mains pour éviter la propagation des microbes.
Does your insurance cover this? | Votre assurance couvre-t-elle ça ?
How much is the co-payment? | Quel est le reste à charge ?
Health is wealth. | La santé n'a pas de prix.
Could you write down the dosage for me? | Pourriez-vous m'écrire la posologie ?
Which department should I register for? | Dans quel service dois-je m'inscrire ?
I'd like to register for internal medicine. | Je voudrais m'inscrire en médecine interne.
For a skin rash, register for dermatology. | Pour une éruption cutanée, inscrivez-vous en dermatologie.
For a sore throat or blocked nose, go to ENT. | Pour un mal de gorge ou un nez bouché, allez en ORL.
Children should see a pediatrician. | Les enfants doivent voir un pédiatre.
For a sprained ankle, go to orthopedics. | Pour une entorse de la cheville, allez en orthopédie.
Is this your first visit or a follow-up? | C'est une première consultation ou un suivi ?
Can I register online? | Je peux m'inscrire en ligne ?
Which doctor is seeing patients this afternoon? | Quel médecin consulte cet après-midi ?
The morning clinic is fully booked. | Les consultations du matin sont complètes.
What number is the doctor on now? | Le médecin en est à quel numéro ?
Please pay at the cashier, then pick up your medicine. | Payez à la caisse, puis récupérez vos médicaments.
When is my follow-up appointment? | Quand est mon prochain rendez-vous de suivi ?
Could you give me a referral to the hospital? | Pourriez-vous me faire une lettre d'orientation vers l'hôpital ?
Is my child's growth normal for his age? | La croissance de mon enfant est-elle normale pour son âge ?
He gets sick every time he starts a new term. | Il tombe malade à chaque rentrée.
She has a rash all over her body. Is it contagious? | Elle a des boutons sur tout le corps. C'est contagieux ?
Should I keep him home from school? | Dois-je le garder à la maison ?
How can I get my kid to eat more vegetables? | Comment faire manger plus de légumes à mon enfant ?
His eyesight got worse this year. | Sa vue a baissé cette année.
My teenager is moody and always tired. | Mon ado est lunatique et toujours fatigué.
I've been under a lot of stress at school. | Je suis très stressé à l'école.
I hurt my knee playing basketball. | Je me suis fait mal au genou en jouant au basket.
I can't lose weight like I used to. | Je n'arrive plus à perdre du poids comme avant.
My doctor says my cholesterol is too high. | Mon médecin dit que mon cholestérol est trop élevé.
I've started needing reading glasses. | J'ai commencé à avoir besoin de lunettes de lecture.
It's time for my yearly health check. | C'est l'heure de mon bilan de santé annuel.
My mother keeps forgetting things. | Ma mère oublie sans arrêt des choses.
We're thinking about hiring a caregiver. | Nous pensons engager une aide à domicile.
Grandpa takes six different pills a day. | Papi prend six médicaments différents par jour.
Can you put the pills in a weekly pill box? | Vous pouvez mettre les comprimés dans un pilulier hebdomadaire ?
We added grab bars in the bathroom. | Nous avons installé des barres d'appui dans la salle de bains.
I've had this cough for two weeks. | Je tousse depuis deux semaines.
Do I need antibiotics? | Ai-je besoin d'antibiotiques ?
How long will it take to recover? | Combien de temps faudra-t-il pour guérir ?
The skeleton protects our organs. | Le squelette protège nos organes.
An adult has 206 bones. | Un adulte a 206 os.
Babies are born with more bones than adults. | Les bébés naissent avec plus d'os que les adultes.
Skin is the body's largest organ. | La peau est le plus grand organe du corps.
The rib cage protects the heart and lungs. | La cage thoracique protège le cœur et les poumons.
I think I broke my collarbone. | Je crois que je me suis cassé la clavicule.
I have a sharp pain under my shoulder blade. | J'ai une douleur aiguë sous l'omoplate.
He tore a ligament in his knee. | Il s'est déchiré un ligament du genou.
Tendons connect muscle to bone. | Les tendons relient les muscles aux os.
Ligaments connect bone to bone. | Les ligaments relient les os entre eux.
The cartilage in his knee is wearing away. | Le cartilage de son genou s'use.
A pinched nerve can make your fingers numb. | Un nerf coincé peut engourdir les doigts.
The nurse couldn't find a vein. | L'infirmière n'arrivait pas à trouver une veine.
Arteries carry blood away from the heart, and veins carry it back. | Les artères transportent le sang depuis le cœur, et les veines le ramènent.
Food goes down the esophagus into the stomach. | Les aliments descendent par l'œsophage jusqu'à l'estomac.
Most digestion happens in the small intestine. | L'essentiel de la digestion se fait dans l'intestin grêle.
The small intestine is several meters long. | L'intestin grêle mesure plusieurs mètres.
The large intestine absorbs water. | Le gros intestin absorbe l'eau.
The pain started near my belly button and moved to the lower right. | La douleur a commencé près du nombril, puis s'est déplacée en bas à droite.
That could be appendicitis. | Ça pourrait être une appendicite.
The pancreas makes insulin. | Le pancréas fabrique l'insuline.
The liver filters toxins from the blood. | Le foie filtre les toxines du sang.
The kidneys filter waste and make urine. | Les reins filtrent les déchets et produisent l'urine.
I have to go to the toilet a lot. My bladder must be weak. | Je dois souvent aller aux toilettes. Ma vessie doit être faible.
My tonsils are red and swollen. | J'ai les amygdales rouges et gonflées.
I have a sinus infection. My face hurts. | J'ai une sinusite. J'ai mal au visage.
The thyroid controls how fast your body uses energy. | La thyroïde contrôle la vitesse à laquelle le corps utilise l'énergie.
Breathe from your diaphragm, not your chest. | Respire avec le diaphragme, pas avec la poitrine.
The doctor pressed on my abdomen. | Le médecin a appuyé sur mon abdomen.
Sweat glands help keep you cool. | Les glandes sudoripares aident à rester au frais.
`,
});

// ---------- 高級 Advanced ----------
addFrench("health", {
  words: `
chronic | chronique | Il souffre de douleurs lombaires chroniques.
acute | aigu | Elle a été soignée pour une appendicite aiguë.
diagnosis | le diagnostic | Le diagnostic a été confirmé par un scanner.
prognosis | le pronostic | Le pronostic est très bon.
symptomatic | symptomatique | Seuls les patients symptomatiques ont été testés.
asymptomatic | asymptomatique | Beaucoup de porteurs sont asymptomatiques.
inflammation | l'inflammation | La glace réduit l'inflammation.
hypertension | l'hypertension | On appelle l'hypertension le tueur silencieux.
diabetes | le diabète | Le diabète est lié à l'alimentation et au poids.
cholesterol | le cholestérol | Son cholestérol est trop élevé.
obesity | l'obésité | L'obésité infantile progresse.
metabolism | le métabolisme | Le métabolisme ralentit avec l'âge.
cardiovascular | cardiovasculaire | Les maladies cardiovasculaires sont une cause majeure de décès.
respiratory | respiratoire | La pollution de l'air provoque des problèmes respiratoires.
dementia | la démence | La démence affecte la mémoire et le jugement.
Alzheimer's | l'Alzheimer | L'Alzheimer est la forme de démence la plus courante.
stroke | l'AVC | Un traitement rapide après un AVC sauve des vies.
cancer | le cancer | Le dépistage précoce aide à détecter le cancer.
tumor | la tumeur | La tumeur a été retirée chirurgicalement.
benign | bénin | Heureusement, la grosseur était bénigne.
malignant | malin | La biopsie a montré qu'elle était maligne.
chemotherapy | la chimiothérapie | Elle suit une chimiothérapie.
remission | la rémission | Il est en rémission depuis cinq ans.
relapse | la rechute | Le risque de rechute est faible.
terminal | en phase terminale | On lui a diagnostiqué une maladie en phase terminale.
palliative care | les soins palliatifs | Les soins palliatifs privilégient le confort.
hospice | l'unité de soins palliatifs | Elle a passé ses dernières semaines en unité de soins palliatifs.
anesthesia | l'anesthésie | L'opération s'est faite sous anesthésie générale.
transplant | la greffe | Il attend une greffe de rein.
donor | le donneur | Elle s'est inscrite comme donneuse d'organes.
MRI | l'IRM | L'IRM a montré un ligament déchiré.
ultrasound | l'échographie | L'échographie a montré un bébé en bonne santé.
biopsy | la biopsie | Le médecin a prescrit une biopsie.
screening | le dépistage | Un dépistage régulier détecte les problèmes tôt.
preventive care | la médecine préventive | La médecine préventive fait économiser à long terme.
epidemic | l'épidémie | Le pays fait face à une épidémie d'obésité.
pandemic | la pandémie | La pandémie a changé notre façon de travailler.
outbreak | la flambée ; l'épidémie | Il y a eu une épidémie de rougeole.
herd immunity | l'immunité collective | Les vaccins aident à atteindre l'immunité collective.
booster | le rappel | Faites un rappel avant l'hiver.
antibody | l'anticorps | Le test recherche un anticorps contre le virus.
antiviral | l'antiviral | Le médecin a prescrit un antiviral.
placebo | le placebo | La moitié des patients a reçu un placebo.
clinical trial | l'essai clinique | Le médicament est en essai clinique.
generic drug | le médicament générique | Un générique coûte beaucoup moins cher.
over-the-counter | sans ordonnance | On peut l'acheter sans ordonnance.
dosage | la posologie | Vérifiez la posologie pour les enfants.
contraindication | la contre-indication | La grossesse est une contre-indication pour ce médicament.
allergic reaction | la réaction allergique | Elle a fait une réaction allergique à la pénicilline.
anaphylaxis | le choc anaphylactique | Un choc anaphylactique exige un traitement immédiat.
autoimmune | auto-immun | Le lupus est une maladie auto-immune.
genetic | génétique | La maladie est génétique.
hereditary | héréditaire | Les maladies cardiaques peuvent être héréditaires.
congenital | congénital | Il est né avec une malformation cardiaque congénitale.
disability | le handicap | Le bâtiment est accessible aux personnes handicapées.
rehabilitation | la rééducation | La rééducation après un AVC prend des mois.
occupational therapy | l'ergothérapie | L'ergothérapie aide pour les gestes du quotidien.
mental health | la santé mentale | La santé mentale compte autant que la santé physique.
burnout | l'épuisement professionnel ; le burn-out | Le burn-out est fréquent chez les infirmières.
PTSD | le trouble de stress post-traumatique (TSPT) | Beaucoup d'anciens combattants souffrent de TSPT.
therapist | le thérapeute | Elle voit un thérapeute chaque semaine.
counseling | l'accompagnement psychologique | L'école propose un accompagnement psychologique gratuit.
mindfulness | la pleine conscience | La pleine conscience peut réduire le stress.
resilience | la résilience | Le sport renforce la résilience mentale.
sleep apnea | l'apnée du sommeil | Des ronflements bruyants peuvent signaler une apnée du sommeil.
circadian rhythm | le rythme circadien | Le travail de nuit perturbe le rythme circadien.
sedentary | sédentaire | Un mode de vie sédentaire augmente les risques pour la santé.
BMI | l'IMC (indice de masse corporelle) | Votre IMC est dans la norme.
life expectancy | l'espérance de vie | L'espérance de vie à Taïwan dépasse 80 ans.
aging population | le vieillissement de la population | Le vieillissement de la population pèse sur le système de santé.
long-term care | les soins de longue durée ; la dépendance | Le gouvernement développe la prise en charge de la dépendance.
caregiver | l'aidant | Les aidants ont aussi besoin de soutien.
National Health Insurance | l'assurance maladie nationale | L'assurance maladie nationale couvre presque tout le monde à Taïwan.
out-of-pocket | à la charge du patient | Les implants dentaires sont surtout à la charge du patient.
co-payment | le ticket modérateur ; le reste à charge | Le reste à charge pour une consultation est faible.
medical tourism | le tourisme médical | Taïwan attire le tourisme médical.
telemedicine | la télémédecine | La télémédecine aide les habitants des zones rurales.
wearable | l'objet connecté | Mon objet connecté suit ma fréquence cardiaque.
second opinion | le deuxième avis | Demandez un deuxième avis avant l'opération.
informed consent | le consentement éclairé | Une opération exige un consentement éclairé.
malpractice | la faute médicale | L'hôpital a été poursuivi pour faute médicale.
triage | le triage | Le triage décide qui est soigné en premier.
intensive care | les soins intensifs ; la réanimation | Il a passé trois jours en soins intensifs.
ventilator | le respirateur | Le patient a été placé sous respirateur.
sterile | stérile | Les instruments doivent être stériles.
hygiene | l'hygiène | Une bonne hygiène prévient les infections.
sanitation | l'assainissement | L'eau potable et l'assainissement sauvent des vies.
public health | la santé publique | Les interdictions de fumer sont une mesure de santé publique.
traditional Chinese medicine | la médecine traditionnelle chinoise | Beaucoup de gens à Taïwan ont recours à la médecine traditionnelle chinoise.
acupuncture | l'acupuncture | L'acupuncture a soulagé mon mal de dos.
herbal | à base de plantes | Elle boit une tisane avant de dormir.
holistic | holistique | Le cabinet adopte une approche holistique.
wellness | le bien-être | L'entreprise propose un programme bien-être.
detox | la détox | La plupart des produits détox ne servent à rien.
supplement | le complément alimentaire | Demandez à votre médecin avant de prendre un complément.
probiotic | le probiotique | Les probiotiques peuvent aider la digestion.
gut health | la santé intestinale | Les fibres sont bonnes pour la santé intestinale.
microbiome | le microbiote | Le microbiote intestinal influence l'humeur.
hormone | l'hormone | Le stress fait monter le cortisol, une hormone.
menopause | la ménopause | La ménopause peut perturber le sommeil.
cardiology | la cardiologie | On l'a orienté en cardiologie pour une douleur thoracique.
neurology | la neurologie | Des migraines fréquentes doivent être examinées en neurologie.
neurosurgery | la neurochirurgie | Le patient a été transféré en neurochirurgie.
psychiatry | la psychiatrie | Les services de psychiatrie reçoivent de plus en plus de jeunes patients.
urology | l'urologie | Les calculs rénaux sont traités en urologie.
gastroenterology | la gastro-entérologie | La gastro-entérologie traite les problèmes d'estomac et de foie.
endocrinology | l'endocrinologie | Les diabétiques consultent généralement en endocrinologie.
pulmonology | la pneumologie | Une toux qui dure peut nécessiter la pneumologie.
nephrology | la néphrologie | Les patients dialysés sont suivis en néphrologie.
oncology | l'oncologie | L'équipe d'oncologie a planifié son traitement.
radiology | la radiologie | La radiologie va interpréter votre examen.
anesthesiology | l'anesthésiologie | L'anesthésiste vous examine avant l'opération.
infectious diseases | les maladies infectieuses | Le service des maladies infectieuses traite les fièvres tropicales.
plastic surgery | la chirurgie plastique | Les grands brûlés sont soignés en chirurgie plastique.
physical medicine and rehabilitation | la médecine physique et de réadaptation | Après l'AVC, il a été suivi en médecine physique et de réadaptation.
attending physician | le médecin traitant hospitalier ; le médecin responsable | Le médecin responsable vous expliquera les résultats.
resident | l'interne | Un interne est passé me voir pendant la nuit.
head nurse | l'infirmière en chef ; le cadre de santé | L'infirmière en chef dirige le service.
medical center | le centre hospitalier universitaire | Les cas graves sont envoyés dans un CHU.
regional hospital | l'hôpital régional | Un hôpital régional peut assurer la plupart des opérations.
tiered healthcare | le parcours de soins hiérarchisé | Le parcours de soins hiérarchisé encourage à commencer par le cabinet de quartier.
inpatient | le patient hospitalisé | Les patients hospitalisés peuvent commander leurs repas à la cuisine de l'hôpital.
outpatient | le patient en consultation externe | La plupart des patients en consultation repartent en moins d'une heure.
medical history | les antécédents médicaux | Le médecin m'a interrogé sur mes antécédents médicaux.
developmental milestone | l'étape du développement | La marche est une étape importante du développement.
childhood obesity | l'obésité infantile | L'obésité infantile est liée aux boissons sucrées.
immunization schedule | le calendrier vaccinal | Gardez une copie du calendrier vaccinal de votre enfant.
eating disorder | le trouble du comportement alimentaire | Un trouble du comportement alimentaire peut être difficile à repérer.
peer pressure | la pression des pairs | La pression des pairs peut pousser les ados à essayer le vapotage.
vaping | le vapotage | Le vapotage n'est pas une alternative sûre au tabac.
fatty liver | la stéatose hépatique ; le foie gras | La stéatose hépatique est fréquente chez les gros buveurs.
colonoscopy | la coloscopie | Les médecins recommandent une coloscopie après quarante-cinq ans.
Alzheimer's disease | la maladie d'Alzheimer | La maladie d'Alzheimer est la forme de démence la plus courante.
osteoporosis | l'ostéoporose | L'ostéoporose rend les os fragiles.
frailty | la fragilité | Le renforcement musculaire aide à prévenir la fragilité.
polypharmacy | la polymédication | La polymédication est un problème courant chez les patients âgés.
heart attack | la crise cardiaque | Une douleur thoracique peut signaler une crise cardiaque.
cancer screening | le dépistage du cancer | Un dépistage régulier du cancer sauve des vies.
chronic kidney disease | la maladie rénale chronique | Le diabète est une cause majeure de maladie rénale chronique.
anatomy | l'anatomie | Les étudiants en médecine étudient l'anatomie humaine.
anatomical | anatomique | La maquette montre chaque détail anatomique.
circulatory system | l'appareil circulatoire | Le cœur est le centre de l'appareil circulatoire.
nervous system | le système nerveux | Le système nerveux contrôle tout ce que nous faisons.
central nervous system | le système nerveux central | Le cerveau et la moelle épinière forment le système nerveux central.
musculoskeletal | musculo-squelettique | Le mal de dos est un trouble musculo-squelettique courant.
lymphatic system | le système lymphatique | Le système lymphatique aide à combattre les infections.
lymph node | le ganglion lymphatique | Le médecin a palpé les ganglions de mon cou.
endocrine system | le système endocrinien | Le système endocrinien régule les hormones.
pituitary gland | l'hypophyse | L'hypophyse est parfois appelée la glande maîtresse.
adrenal gland | la glande surrénale | Les glandes surrénales produisent l'adrénaline.
vertebra | la vertèbre | Chaque vertèbre protège une partie de la moelle épinière.
spinal cord | la moelle épinière | La moelle épinière transmet les signaux entre le cerveau et le corps.
cerebrum | le cerveau (télencéphale) | Le télencéphale est la plus grande partie du cerveau.
cerebellum | le cervelet | Le cervelet participe à l'équilibre.
brainstem | le tronc cérébral | Le tronc cérébral contrôle la respiration et le rythme cardiaque.
hippocampus | l'hippocampe | L'hippocampe joue un rôle clé dans la mémoire.
femur | le fémur | Le fémur est l'os le plus long du corps.
tibia | le tibia | Elle s'est fracturé le tibia au ski.
sternum | le sternum | Pendant un massage cardiaque, appuyez fort au centre du sternum.
aorta | l'aorte | L'aorte est la plus grande artère du corps.
atrium | l'oreillette | Le sang entre dans le cœur par l'oreillette droite.
ventricle | le ventricule | Le ventricule gauche pompe le sang vers tout le corps.
heart valve | la valve cardiaque | Une valve cardiaque fait circuler le sang dans un seul sens.
capillary | le capillaire | L'oxygène traverse la paroi de chaque capillaire.
red blood cell | le globule rouge | Les globules rouges transportent l'oxygène.
white blood cell | le globule blanc | Les globules blancs combattent les infections.
platelet | la plaquette | Les plaquettes aident le sang à coaguler.
plasma | le plasma | Le plasma est la partie liquide du sang.
alveoli | les alvéoles pulmonaires | Les échanges gazeux se font dans les alvéoles.
cornea | la cornée | La chirurgie laser remodèle la cornée.
retina | la rétine | La rétine transmet les images au cerveau.
cochlea | la cochlée | La cochlée transforme le son en signaux nerveux.
epidermis | l'épiderme | L'épiderme est la couche externe de la peau.
dermis | le derme | Le derme contient des nerfs et des glandes sudoripares.
connective tissue | le tissu conjonctif | Les tendons et les ligaments sont du tissu conjonctif.
prevention is better than cure | mieux vaut prévenir que guérir | Mieux vaut prévenir que guérir.
a bitter pill to swallow | une pilule amère | La nouvelle a été une pilule amère.
alive and kicking | toujours bon pied, bon œil | Il a quatre-vingts ans et toujours bon pied, bon œil.
at death's door | à l'article de la mort | Il était à l'article de la mort l'an dernier.
black and blue | couvert de bleus | J'ai le bras couvert de bleus.
go under the knife | passer sur le billard | Elle passe sur le billard la semaine prochaine.
on your last legs | à bout de forces | Tu as l'air à bout de forces.
under the knife | sur la table d'opération | Il est passé sur la table d'opération pour son cœur.
you are what you eat | on est ce qu'on mange | On est ce qu'on mange.
a taste of your own medicine | la monnaie de sa pièce | Alors, ça te plaît qu'on te rende la monnaie de ta pièce ?
take a turn for the worse | s'aggraver | Son état pourrait s'aggraver.
just what the doctor ordered | exactement ce qu'il fallait | Des vacances, c'est exactement ce qu'il fallait.
a picture of health | l'image même de la santé | Elle est l'image même de la santé.
early to bed and early to rise | se coucher tôt et se lever tôt | Se coucher tôt et se lever tôt rend un homme sain.
burn the candle at both ends | brûler la chandelle par les deux bouts | Ne brûle pas la chandelle par les deux bouts.
`,
});

addFrench("health", {
  phrases: `
Prevention is better than cure. | Mieux vaut prévenir que guérir.
Early detection dramatically improves survival rates. | Le dépistage précoce améliore considérablement les taux de survie.
Many chronic diseases are linked to lifestyle. | Beaucoup de maladies chroniques sont liées au mode de vie.
Hypertension often has no symptoms at all. | L'hypertension ne donne souvent aucun symptôme.
Regular screening can catch problems before symptoms appear. | Un dépistage régulier peut détecter les problèmes avant l'apparition des symptômes.
The diagnosis came as a complete shock. | Le diagnostic a été un choc total.
The prognosis is better than we expected. | Le pronostic est meilleur que prévu.
She's been in remission for three years. | Elle est en rémission depuis trois ans.
The treatment has some unpleasant side effects. | Le traitement a des effets secondaires désagréables.
Chemotherapy left him exhausted. | La chimiothérapie l'a épuisé.
We're weighing the risks and benefits of surgery. | Nous pesons les risques et les bénéfices de l'opération.
I'd like to get a second opinion. | J'aimerais avoir un deuxième avis.
Informed consent is a cornerstone of medical ethics. | Le consentement éclairé est un pilier de l'éthique médicale.
Patients have the right to refuse treatment. | Les patients ont le droit de refuser un traitement.
The doctor explained everything in plain language. | Le médecin a tout expliqué avec des mots simples.
Medical jargon can be intimidating. | Le jargon médical peut être intimidant.
Antibiotic resistance is a growing global threat. | L'antibiorésistance est une menace mondiale croissante.
Overprescribing antibiotics makes them less effective. | La surprescription d'antibiotiques les rend moins efficaces.
Vaccines are one of medicine's greatest achievements. | Les vaccins sont l'une des plus grandes réussites de la médecine.
Herd immunity protects those who can't be vaccinated. | L'immunité collective protège ceux qui ne peuvent pas être vaccinés.
Vaccine hesitancy has led to outbreaks of measles. | L'hésitation vaccinale a entraîné des épidémies de rougeole.
The pandemic exposed weaknesses in public health systems. | La pandémie a révélé les faiblesses des systèmes de santé publique.
Hospitals were stretched to breaking point. | Les hôpitaux ont été poussés jusqu'au point de rupture.
Healthcare workers face enormous burnout. | Les soignants font face à un épuisement énorme.
Taiwan's National Health Insurance covers almost everyone. | L'assurance maladie nationale de Taïwan couvre presque tout le monde.
Universal healthcare keeps costs low for patients. | La couverture universelle maintient des coûts faibles pour les patients.
Low fees may encourage overuse of medical services. | Des tarifs bas peuvent encourager une surconsommation de soins.
Doctors here see an extraordinary number of patients each day. | Ici, les médecins voient un nombre impressionnant de patients chaque jour.
Short consultations leave little time for questions. | Les consultations courtes laissent peu de temps pour les questions.
An aging population will strain the healthcare system. | Le vieillissement de la population va peser sur le système de santé.
Long-term care is becoming a pressing social issue. | La prise en charge de la dépendance devient un enjeu social urgent.
Family caregivers often sacrifice their own health. | Les aidants familiaux sacrifient souvent leur propre santé.
Dementia care requires patience and specialized support. | La prise en charge de la démence demande de la patience et un soutien spécialisé.
Mental health is finally being taken seriously. | La santé mentale est enfin prise au sérieux.
There's still a stigma around seeking therapy. | Consulter un psy reste stigmatisé.
Talking to a counselor helped me put things in perspective. | Parler à un conseiller m'a aidé à relativiser.
Chronic stress takes a toll on the body. | Le stress chronique use le corps.
Sleep is the foundation of good health. | Le sommeil est la base d'une bonne santé.
Sleep deprivation impairs judgment as much as alcohol. | Le manque de sommeil altère le jugement autant que l'alcool.
Shift work disrupts the body's circadian rhythm. | Le travail posté perturbe le rythme circadien.
A sedentary lifestyle is as harmful as smoking. | La sédentarité est aussi nocive que le tabac.
Even short bursts of exercise have real benefits. | Même de courtes séances d'exercice ont de vrais bienfaits.
Strength training becomes more important as we age. | Le renforcement musculaire devient plus important avec l'âge.
Ultra-processed food is linked to a range of health problems. | Les aliments ultra-transformés sont associés à toute une série de problèmes de santé.
The evidence for many supplements is weak. | Les preuves en faveur de nombreux compléments sont faibles.
Be wary of health claims you see on social media. | Méfiez-vous des allégations santé sur les réseaux sociaux.
Correlation doesn't prove causation in nutrition studies. | Dans les études nutritionnelles, la corrélation ne prouve pas la causalité.
Diet trends come and go, but the basics stay the same. | Les modes alimentaires passent, les bases restent.
Moderation is more sustainable than strict dieting. | La modération est plus tenable qu'un régime strict.
The gut microbiome is a fast-growing area of research. | Le microbiote intestinal est un domaine de recherche en plein essor.
Genetics load the gun, but lifestyle pulls the trigger. | La génétique charge le pistolet, mais c'est le mode de vie qui appuie sur la détente.
Some conditions are hereditary, so family history matters. | Certaines maladies sont héréditaires, alors les antécédents familiaux comptent.
Genetic testing raises difficult ethical questions. | Les tests génétiques soulèvent des questions éthiques difficiles.
Personalized medicine tailors treatment to each patient. | La médecine personnalisée adapte le traitement à chaque patient.
AI is helping doctors read scans more accurately. | L'IA aide les médecins à lire les examens d'imagerie plus précisément.
Telemedicine has made care more accessible in rural areas. | La télémédecine a rendu les soins plus accessibles en zone rurale.
Wearables can flag irregular heart rhythms. | Les objets connectés peuvent signaler un rythme cardiaque irrégulier.
Health data is highly sensitive and must be protected. | Les données de santé sont très sensibles et doivent être protégées.
Clinical trials must include diverse participants. | Les essais cliniques doivent inclure des participants variés.
The placebo effect is surprisingly powerful. | L'effet placebo est étonnamment puissant.
Generic drugs work just as well as brand-name ones. | Les génériques sont aussi efficaces que les médicaments de marque.
Many people combine Western medicine with traditional Chinese medicine. | Beaucoup de gens combinent médecine occidentale et médecine traditionnelle chinoise.
Acupuncture is widely used for pain relief. | L'acupuncture est très utilisée contre la douleur.
Always tell your doctor about any herbal remedies you take. | Signalez toujours à votre médecin les remèdes à base de plantes que vous prenez.
Some herbs can interact with prescription drugs. | Certaines plantes peuvent interagir avec les médicaments prescrits.
Anaphylaxis is a medical emergency. | Le choc anaphylactique est une urgence médicale.
Knowing CPR could save someone's life. | Savoir faire un massage cardiaque peut sauver une vie.
Every minute counts when someone has a stroke. | Chaque minute compte quand quelqu'un fait un AVC.
Triage ensures the most urgent cases are seen first. | Le triage garantit que les cas les plus urgents passent en premier.
The emergency room is overcrowded with non-urgent cases. | Les urgences sont saturées de cas non urgents.
Medical errors are a leading cause of preventable harm. | Les erreurs médicales sont une cause majeure de préjudices évitables.
Hospitals need a culture where staff can report mistakes. | Les hôpitaux ont besoin d'une culture où le personnel peut signaler ses erreurs.
Doctors are increasingly worried about malpractice lawsuits. | Les médecins s'inquiètent de plus en plus des poursuites pour faute médicale.
Defensive medicine drives up costs. | La médecine défensive fait grimper les coûts.
Rehabilitation is just as important as the surgery itself. | La rééducation est aussi importante que l'opération elle-même.
Recovery is rarely a straight line. | La guérison suit rarement une ligne droite.
Chronic pain affects every aspect of a person's life. | La douleur chronique touche tous les aspects de la vie.
Invisible illnesses are often misunderstood. | Les maladies invisibles sont souvent mal comprises.
Accessibility is essential for people with disabilities. | L'accessibilité est essentielle pour les personnes handicapées.
End-of-life care should respect the patient's wishes. | Les soins de fin de vie doivent respecter les souhaits du patient.
An advance directive spares families difficult decisions. | Les directives anticipées épargnent aux familles des décisions difficiles.
Palliative care focuses on quality of life. | Les soins palliatifs privilégient la qualité de vie.
Organ donation saves thousands of lives every year. | Le don d'organes sauve des milliers de vies chaque année.
Life expectancy has risen, but healthy life expectancy lags behind. | L'espérance de vie a augmenté, mais l'espérance de vie en bonne santé ne suit pas.
Health inequality mirrors economic inequality. | Les inégalités de santé reflètent les inégalités économiques.
Clean water and sanitation do more for health than hospitals. | L'eau potable et l'assainissement font plus pour la santé que les hôpitaux.
Air pollution is a silent public health crisis. | La pollution de l'air est une crise de santé publique silencieuse.
Heat waves are a growing threat to vulnerable people. | Les canicules menacent de plus en plus les personnes vulnérables.
Climate change will reshape global health. | Le changement climatique va remodeler la santé mondiale.
Public health measures only work if people trust them. | Les mesures de santé publique ne fonctionnent que si les gens leur font confiance.
Misinformation spreads faster than accurate health advice. | Les fausses informations circulent plus vite que les bons conseils de santé.
Health literacy empowers patients to make better choices. | La littératie en santé aide les patients à faire de meilleurs choix.
Listen to your body; it usually knows something is wrong. | Écoutez votre corps ; il sait généralement quand quelque chose ne va pas.
Don't ignore warning signs just because you're busy. | N'ignorez pas les signaux d'alerte sous prétexte que vous êtes occupé.
Self-care isn't selfish; it's necessary. | Prendre soin de soi n'est pas égoïste ; c'est nécessaire.
Small daily habits add up to big health gains. | De petites habitudes quotidiennes finissent par faire de grands bénéfices pour la santé.
Good health is not just the absence of disease. | La santé, ce n'est pas seulement l'absence de maladie.
Physical and mental health are deeply connected. | La santé physique et la santé mentale sont étroitement liées.
You can't pour from an empty cup. | On ne peut pas donner ce qu'on n'a pas.
Burnout is a warning sign, not a badge of honor. | Le burn-out est un signal d'alarme, pas une médaille.
In Taiwan, you can usually see a specialist without a referral. | À Taïwan, on peut généralement voir un spécialiste sans lettre d'orientation.
Tiered healthcare aims to keep minor cases out of medical centers. | Le parcours de soins hiérarchisé vise à éviter que les cas bénins aillent dans les CHU.
Going straight to a big hospital is convenient but overloads it. | Aller directement dans un grand hôpital est pratique, mais le surcharge.
A referral can lower your co-payment at large hospitals. | Une lettre d'orientation peut réduire votre reste à charge dans les grands hôpitaux.
Choosing the right department saves time and a second registration fee. | Choisir le bon service fait gagner du temps et évite de payer deux fois les frais d'enregistrement.
If you're unsure which department to choose, ask the information desk. | Si vous ne savez pas quel service choisir, demandez à l'accueil.
Many hospitals let you track the queue number online. | Beaucoup d'hôpitaux permettent de suivre en ligne l'avancement des consultations.
The attending physician reviews every case on morning rounds. | Le médecin responsable passe en revue chaque dossier lors de la visite du matin.
Children aren't just small adults; their dosages are based on weight. | Les enfants ne sont pas de petits adultes ; leur posologie dépend du poids.
Early screening can catch developmental delays before they become bigger problems. | Un dépistage précoce peut détecter les retards de développement avant qu'ils ne s'aggravent.
Mental health struggles often begin in adolescence. | Les troubles de santé mentale commencent souvent à l'adolescence.
Young people tend to think they're invincible, so they skip checkups. | Les jeunes se croient souvent invincibles et sautent leurs bilans de santé.
Middle age is when lifestyle choices start to catch up with you. | C'est vers la cinquantaine que les choix de vie commencent à vous rattraper.
Being part of the sandwich generation means caring for both your kids and your parents. | Appartenir à la génération sandwich, c'est s'occuper à la fois de ses enfants et de ses parents.
Keeping your muscles strong is one of the best ways to stay independent in old age. | Garder des muscles forts est l'un des meilleurs moyens de rester autonome en vieillissant.
Falls are a leading cause of injury among older adults. | Les chutes sont une cause majeure de blessures chez les personnes âgées.
Early signs of dementia are easy to mistake for normal aging. | Les premiers signes de démence se confondent facilement avec le vieillissement normal.
Many chronic diseases can be managed, even if they can't be cured. | Beaucoup de maladies chroniques peuvent être contrôlées, même si on ne peut pas les guérir.
High blood pressure is called a silent killer because it often has no symptoms. | On appelle l'hypertension le tueur silencieux parce qu'elle ne donne souvent aucun symptôme.
I'd like a second opinion before deciding on surgery. | J'aimerais un deuxième avis avant de décider de l'opération.
The heart has four chambers: two atria and two ventricles. | Le cœur a quatre cavités : deux oreillettes et deux ventricules.
The left ventricle has the thickest wall. | Le ventricule gauche a la paroi la plus épaisse.
Heart valves keep blood flowing in one direction. | Les valves cardiaques font circuler le sang dans un seul sens.
The aorta is the largest artery in the body. | L'aorte est la plus grande artère du corps.
Capillaries connect the smallest arteries and veins. | Les capillaires relient les plus petites artères et veines.
Red blood cells carry oxygen, and white blood cells fight infection. | Les globules rouges transportent l'oxygène, et les globules blancs combattent les infections.
Platelets help your blood clot. | Les plaquettes aident le sang à coaguler.
Bone marrow produces new blood cells. | La moelle osseuse produit de nouvelles cellules sanguines.
Oxygen enters the blood through the alveoli in the lungs. | L'oxygène passe dans le sang par les alvéoles des poumons.
The brain and spinal cord make up the central nervous system. | Le cerveau et la moelle épinière forment le système nerveux central.
The cerebellum coordinates balance and movement. | Le cervelet coordonne l'équilibre et les mouvements.
The brainstem controls breathing, heart rate and sleep. | Le tronc cérébral contrôle la respiration, le rythme cardiaque et le sommeil.
The hippocampus is important for forming new memories. | L'hippocampe est important pour former de nouveaux souvenirs.
Damage to the spinal cord can cause paralysis. | Une lésion de la moelle épinière peut provoquer une paralysie.
A slipped disc can press on a nerve between two vertebrae. | Une hernie discale peut comprimer un nerf entre deux vertèbres.
The femur is the longest and strongest bone in the body. | Le fémur est l'os le plus long et le plus solide du corps.
The smallest bone in the body is in the middle ear. | Le plus petit os du corps se trouve dans l'oreille moyenne.
The lymph nodes in your neck may swell when you're sick. | Les ganglions du cou peuvent gonfler quand on est malade.
The endocrine system uses hormones to send messages. | Le système endocrinien utilise des hormones pour transmettre des messages.
The adrenal glands release adrenaline in a crisis. | Les glandes surrénales libèrent de l'adrénaline en cas de crise.
The pituitary gland controls many other glands. | L'hypophyse contrôle de nombreuses autres glandes.
The cornea and lens focus light onto the retina. | La cornée et le cristallin concentrent la lumière sur la rétine.
The cochlea turns sound waves into nerve signals. | La cochlée transforme les ondes sonores en signaux nerveux.
The skin has three main layers: the epidermis, the dermis and the fat layer beneath. | La peau a trois couches principales : l'épiderme, le derme et la couche graisseuse en dessous.
Tendons heal slowly because they have a poor blood supply. | Les tendons cicatrisent lentement parce qu'ils sont peu irrigués.
Musculoskeletal pain is one of the most common reasons people see a doctor. | Les douleurs musculo-squelettiques sont l'un des motifs de consultation les plus fréquents.
Weight-bearing exercise helps keep bones strong. | Les exercices en charge aident à garder des os solides.
Bone density starts to decline after middle age. | La densité osseuse commence à diminuer après la cinquantaine.
Understanding basic anatomy helps you describe symptoms clearly. | Connaître l'anatomie de base aide à décrire clairement ses symptômes.
Point to the exact spot, and say whether the pain is sharp, dull or burning. | Montrez l'endroit exact, et dites si la douleur est aiguë, sourde ou brûlante.
`,
});
