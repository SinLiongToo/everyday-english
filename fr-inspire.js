// 法文對照（Français）：勵志激勵
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
addFrench("inspire", {
  words: `
dream | le rêve | Suis ton rêve.
goal | l'objectif | Fixe-toi un objectif pour cette année.
hope | l'espoir | Ne perds jamais espoir.
try | essayer | Essaie simplement de faire de ton mieux.
believe | croire | Je crois en toi.
brave | courageux | Sois courageux et prends la parole.
strong | fort | Tu es plus fort que tu ne le crois.
smile | sourire | Souris, demain est un autre jour.
happy | heureux | Fais ce qui te rend heureux.
proud | fier | Je suis tellement fier de toi.
best | le meilleur ; le mieux | Fais de ton mieux et oublie le reste.
start | commencer | Commence petit, mais commence aujourd'hui.
begin | commencer | Tout voyage commence par un pas.
step | le pas ; l'étape | Avance un pas à la fois.
work hard | travailler dur | Si tu travailles dur, tu progresseras.
practice | la pratique ; s'entraîner | C'est la pratique qui fait progresser.
learn | apprendre | On apprend de ses erreurs.
grow | grandir | Chaque jour, tu grandis un peu.
change | changer | Tu peux changer ta vie.
chance | la chance ; l'occasion | Donne-toi une chance.
win | gagner | Parfois on gagne, parfois on apprend.
lose | perdre | Ce n'est pas grave de perdre parfois.
fail | échouer | Ce n'est pas grave d'échouer.
again | encore ; de nouveau | Tombe, puis relève-toi.
keep going | continuer | Continue, tu y es presque.
don't give up | n'abandonne pas | N'abandonne pas ton rêve.
give up | abandonner | N'abandonne jamais.
you can do it | tu peux y arriver | Allez, tu peux y arriver !
good job | bon travail ; bravo | Bravo ! Je savais que tu y arriverais.
well done | bien joué | Bien joué, c'était super.
great | super ; formidable | Tu as fait un super travail.
wonderful | merveilleux | Quelle idée merveilleuse !
amazing | incroyable | Tu es incroyable.
awesome | génial | C'est génial !
nice | bien ; beau | Beau travail aujourd'hui.
kind | gentil ; bienveillant | Sois bienveillant envers toi-même.
help | l'aide | Demande de l'aide quand tu en as besoin.
friend | l'ami | Un bon ami te tire vers le haut.
love | aimer | Fais ce que tu aimes.
heart | le cœur | Suis ton cœur.
light | la lumière | Sois une lumière pour les autres.
shine | briller | C'est ton moment de briller.
star | l'étoile ; la star | Tu es une star.
sun | le soleil | Le soleil se lèvera de nouveau.
rain | la pluie | Après la pluie vient l'arc-en-ciel.
rainbow | l'arc-en-ciel | Cherche l'arc-en-ciel.
tomorrow | demain | Demain est un nouveau départ.
today | aujourd'hui | Aujourd'hui est un bon jour pour commencer.
now | maintenant | C'est le moment.
future | l'avenir | Ton avenir est prometteur.
bright | brillant ; radieux | Tu as un brillant avenir.
better | meilleur ; mieux | Chaque jour, un peu mieux.
easy | facile | Ce n'est pas facile, mais ça vaut la peine.
hard | dur ; difficile | Les choses difficiles nous rendent forts.
difficult | difficile | Les chemins difficiles mènent à de beaux endroits.
problem | le problème | Chaque problème a une solution.
answer | la réponse | Tu trouveras la réponse.
idea | l'idée | C'est une super idée !
think | penser | Vois grand.
mind | l'esprit | Mets-y toute ton énergie.
yes | oui | Dis oui à la nouveauté.
no | non | Ce n'est pas grave de dire non.
energy | l'énergie | J'ai beaucoup d'énergie aujourd'hui.
fun | le plaisir ; amusant | Amuse-toi.
enjoy | profiter | Profite du voyage.
thank you | merci | Merci d'avoir cru en moi.
cheer | encourager ; acclamer | Encourageons-la.
cheer up | courage ; reprends le moral | Courage ! Ce n'est pas la fin.
team | l'équipe | Nous sommes une équipe.
together | ensemble | Nous pouvons y arriver ensemble.
alone | seul | Tu n'es pas seul.
safe | en sécurité | Tu es en sécurité ici.
ready | prêt | Tu es prêt ? C'est parti !
fast | rapide | Lentement, c'est bien ; tu n'as pas besoin d'être rapide.
slow | lent | Rien ne sert de courir, il faut partir à point.
far | loin | Regarde le chemin que tu as parcouru.
near | proche | La ligne d'arrivée est proche.
top | le sommet | Rendez-vous au sommet !
climb | grimper | Grimpe encore une colline.
fly | voler | Déploie tes ailes et envole-toi.
free | libre | Sois libre d'être toi-même.
yourself | toi-même | Sois toi-même, tout simplement.
special | spécial | Tu es spécial.
gift | le don ; le cadeau | Ta voix est un don.
talent | le talent | Tu as un vrai talent.
skill | la compétence | La pratique développe les compétences.
power | le pouvoir ; la force | Tu as le pouvoir de changer.
courage | le courage | Il faut du courage pour essayer.
fear | la peur | Affronte ta peur.
afraid | qui a peur | N'aie pas peur de demander.
worry | s'inquiéter | Ne t'inquiète pas, sois heureux.
relax | se détendre | Détends-toi, tu vas y arriver.
rest | se reposer | Repose-toi s'il le faut, mais n'abandonne pas.
quit | abandonner ; arrêter | Les gagnants n'abandonnent jamais.
finish | finir | Termine ce que tu commences.
done | fini | Mieux vaut fait que parfait.
success | le succès ; la réussite | La réussite prend du temps.
happy ending | la fin heureuse | Ton histoire peut avoir une fin heureuse.
wish | le vœu | Fais un vœu et travaille pour le réaliser.
lucky | chanceux | J'ai de la chance de t'avoir.
`,
  phrases: `
You can do it! | Tu peux y arriver !
I believe in you. | Je crois en toi.
Don't give up. | N'abandonne pas.
Never give up. | N'abandonne jamais.
Keep going. | Continue.
Keep trying. | Continue d'essayer.
Try again. | Essaie encore.
Just try your best. | Fais juste de ton mieux.
Do your best. | Fais de ton mieux.
You did it! | Tu as réussi !
Good job! | Bravo !
Well done! | Bien joué !
Great work! | Super travail !
I'm proud of you. | Je suis fier de toi.
You're doing great. | Tu t'en sors très bien.
You're getting better. | Tu progresses.
Look how far you've come. | Regarde tout le chemin parcouru.
You're almost there. | Tu y es presque.
One more time! | Encore une fois !
Don't worry. | Ne t'inquiète pas.
It's okay. | Ce n'est pas grave.
It's okay to make mistakes. | Ce n'est pas grave de faire des erreurs.
Everyone makes mistakes. | Tout le monde fait des erreurs.
It's not the end of the world. | Ce n'est pas la fin du monde.
Tomorrow is a new day. | Demain est un autre jour.
Cheer up! | Courage !
Chin up! | Haut les cœurs !
Smile! | Souris !
Be brave. | Sois courageux.
Be strong. | Sois fort.
Be yourself. | Sois toi-même.
Be kind to yourself. | Sois indulgent avec toi-même.
You are not alone. | Tu n'es pas seul.
I'm here for you. | Je suis là pour toi.
I'm on your side. | Je suis de ton côté.
We're in this together. | On est dans le même bateau.
Let's do it together. | Faisons-le ensemble.
You are stronger than you think. | Tu es plus fort que tu ne le crois.
You are smarter than you think. | Tu es plus intelligent que tu ne le crois.
You can do anything. | Tu peux tout faire.
Anything is possible. | Tout est possible.
Dreams come true. | Les rêves se réalisent.
Follow your dream. | Suis ton rêve.
Follow your heart. | Suis ton cœur.
Do what you love. | Fais ce que tu aimes.
Start today. | Commence aujourd'hui.
Start small. | Commence petit.
Take it one step at a time. | Avance pas à pas.
Take your time. | Prends ton temps.
There's no rush. | Rien ne presse.
Slow and steady wins the race. | Rien ne sert de courir, il faut partir à point.
Practice makes progress. | C'est en pratiquant qu'on progresse.
Every day is a chance to learn. | Chaque jour est une occasion d'apprendre.
Learn from your mistakes. | Apprends de tes erreurs.
Fall down, get up. | Tombe, relève-toi.
Get back up. | Relève-toi.
Shake it off. | Secoue-toi et passe à autre chose.
Let it go. | Laisse tomber.
Forget about it. | N'y pense plus.
You got this. | Tu vas assurer.
Go for it! | Fonce !
Why not try? | Pourquoi ne pas essayer ?
What do you have to lose? | Qu'est-ce que tu as à perdre ?
Give it a try. | Essaie.
You won't know until you try. | Tu ne le sauras pas tant que tu n'auras pas essayé.
It's worth a try. | Ça vaut le coup d'essayer.
Believe in yourself. | Crois en toi.
Trust yourself. | Fais-toi confiance.
Be proud of yourself. | Sois fier de toi.
You should be proud. | Tu devrais être fier.
You make me proud. | Tu me rends fier.
That's the spirit! | C'est comme ça qu'il faut faire !
Way to go! | Bien joué !
Keep it up! | Continue comme ça !
Keep up the good work. | Continue ton bon travail.
You're a star. | Tu es une star.
You're amazing. | Tu es incroyable.
You inspire me. | Tu m'inspires.
Thank you for helping me. | Merci de m'avoir aidé.
Thanks for believing in me. | Merci d'avoir cru en moi.
Don't be afraid. | N'aie pas peur.
Don't be shy. | Ne sois pas timide.
Speak up. | Exprime-toi.
Ask for help. | Demande de l'aide.
It's okay to ask for help. | Ce n'est pas grave de demander de l'aide.
Take a break. | Fais une pause.
Rest, then try again. | Repose-toi, puis réessaie.
Have fun! | Amuse-toi bien !
Enjoy every moment. | Profite de chaque instant.
Good luck! | Bonne chance !
Fingers crossed! | Je croise les doigts !
Break a leg! | Merde ! (bonne chance avant un spectacle)
Hope for the best. | Espère le meilleur.
Every little bit helps. | Les petits ruisseaux font les grandes rivières.
Today is your day. | C'est ton jour.
Make today count. | Fais que cette journée compte.
Never stop learning. | N'arrête jamais d'apprendre.
Never stop dreaming. | N'arrête jamais de rêver.
You can do hard things. | Tu es capable de choses difficiles.
The best is yet to come. | Le meilleur reste à venir.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("inspire", {
  words: `
sell yourself short | se sous-estimer | Ne te sous-estime pas ; tu es plus qualifié que tu ne le crois.
believe in yourself | croire en soi | Il faut d'abord croire en toi.
you've got this | tu vas y arriver | Respire profondément. Tu vas y arriver.
hang in there | tiens bon | Tiens bon, ça va s'arranger.
keep your chin up | garder la tête haute | Garde la tête haute ; demain est un autre jour.
go for it | foncer | Si tu le veux, fonce !
give it a shot | tenter le coup | Pourquoi ne pas tenter le coup ?
step out of your comfort zone | sortir de sa zone de confort | On grandit quand on sort de sa zone de confort.
comfort zone | la zone de confort | La vie commence là où finit ta zone de confort.
push yourself | se dépasser | Dépasse-toi, car personne ne le fera à ta place.
challenge | le défi | Chaque défi est une occasion de grandir.
motivation | la motivation | La motivation te fait démarrer ; l'habitude te fait continuer.
motivate | motiver | Son histoire m'a motivé à réessayer.
inspire | inspirer | Ton courage m'inspire.
inspiration | l'inspiration | Tu es mon inspiration.
inspiring | inspirant | C'était un discours inspirant.
encourage | encourager | Mon professeur m'a encouragé à postuler.
encouragement | l'encouragement | Un petit encouragement fait beaucoup.
confidence | la confiance en soi | La confiance en soi vient de la pratique.
confident | sûr de soi | Entre comme si tu étais sûr de toi.
self-esteem | l'estime de soi | Les mots gentils renforcent l'estime de soi.
self-doubt | le doute de soi | Ne laisse pas le doute t'arrêter.
potential | le potentiel | Tu as tellement de potentiel.
progress | le progrès | Le progrès, pas la perfection.
improve | progresser ; s'améliorer | Tu progresses un peu chaque jour.
effort | l'effort | Tes efforts seront récompensés.
pay off | payer ; porter ses fruits | Tout ton travail va porter ses fruits.
determined | déterminé | Elle est déterminée à finir la course.
determination | la détermination | La détermination bat le talent quand le talent ne travaille pas.
persistent | persévérant | Sois persévérant et tu y arriveras.
patience | la patience | Les grands rêves demandent de la patience.
patient | patient | Sois patient avec toi-même.
positive | positif | Reste positif.
optimistic | optimiste | Je suis optimiste pour l'avenir.
attitude | l'attitude | C'est ton attitude qui détermine jusqu'où tu iras.
mindset | l'état d'esprit | Change d'état d'esprit, change de vie.
growth mindset | l'état d'esprit de développement | Avec un état d'esprit de développement, les erreurs deviennent des leçons.
mistake | l'erreur | Une erreur prouve que tu essaies.
setback | le revers | Un revers prépare un retour en force.
comeback | le retour en force | Prépare-toi à un grand retour en force.
bounce back | rebondir | Tu peux toujours rebondir après un échec.
failure | l'échec | L'échec n'est pas le contraire de la réussite.
achieve | accomplir ; atteindre | Tu peux atteindre tout ce pour quoi tu travailles.
achievement | la réussite ; l'accomplissement | Célèbre chaque réussite, petite ou grande.
accomplish | accomplir | Regarde tout ce que tu as accompli cette année.
milestone | l'étape importante | Réussir l'examen a été une étape importante.
celebrate | célébrer | Célèbre les petites victoires.
small wins | les petites victoires | Les petites victoires s'additionnent pour donner de grands résultats.
habit | l'habitude | Les bonnes habitudes font une bonne vie.
discipline | la discipline | La discipline, c'est choisir ce que l'on veut le plus.
focus | se concentrer | Concentre-toi sur ce que tu peux contrôler.
priority | la priorité | Fais de ta santé une priorité.
purpose | le but ; la raison d'être | Trouve ta raison d'être.
passion | la passion | Fais de ta passion un métier.
passionate | passionné | Sois passionné par ce que tu fais.
dedication | le dévouement | Son dévouement a rendu l'équipe meilleure.
commitment | l'engagement | La réussite demande de l'engagement.
strength | la force ; le point fort | Connais tes points forts.
weakness | la faiblesse | Fais de ta faiblesse une force.
overcome | surmonter | Tu peux surmonter ça.
struggle | la lutte ; les difficultés | Tes difficultés d'aujourd'hui sont ta force de demain.
tough | dur ; coriace | Les temps durs passent, les gens coriaces restent.
obstacle | l'obstacle | Chaque obstacle t'apprend quelque chose.
opportunity | l'occasion ; l'opportunité | L'opportunité ressemble souvent à du travail acharné.
make it | réussir ; y arriver | Je sais que tu vas y arriver.
make a difference | faire la différence | Une seule personne peut faire la différence.
believe it or not | crois-le ou non | Crois-le ou non, j'ai raté mon premier permis.
it's never too late | il n'est jamais trop tard | Il n'est jamais trop tard pour apprendre quelque chose de nouveau.
one day at a time | un jour à la fois | La guérison se fait un jour à la fois.
step by step | pas à pas | Pas à pas, tu atteindras ton objectif.
little by little | petit à petit | Petit à petit, l'oiseau fait son nid.
the sky's the limit | tout est possible | Avec ton talent, tout est possible.
dream big | voir grand | Vois grand et travaille dur.
aim high | viser haut | Vise haut, même si tu rates.
stand out | se démarquer | N'aie pas peur de te démarquer.
fit in | s'intégrer | Pas besoin de rentrer dans le moule pour avoir sa place.
unique | unique | Chacun est unique.
worth it | qui en vaut la peine | La vue du sommet en vaut la peine.
deserve | mériter | Tu mérites d'être heureux.
gratitude | la gratitude | La gratitude transforme ce que nous avons en suffisance.
grateful | reconnaissant | Je suis reconnaissant pour chaque chance.
hopeful | plein d'espoir | Garde espoir.
cheerful | joyeux ; enjoué | Elle est toujours enjouée le matin.
role model | le modèle | Ma mère est mon modèle.
mentor | le mentor | Un bon mentor voit ton potentiel.
support | le soutien | Merci pour ton soutien.
count on | compter sur | Tu peux toujours compter sur moi.
look up to | admirer | J'admire ma grande sœur.
proud of | fier de | Je suis fier de tout le travail que tu as fourni.
recharge | recharger ses batteries | Prends un week-end pour recharger tes batteries.
burnout | l'épuisement professionnel ; le burn-out | Le repos permet d'éviter le burn-out.
balance | l'équilibre | Trouve l'équilibre entre travail et vie privée.
calm down | se calmer | Calme-toi et avance pas à pas.
take a deep breath | respirer profondément | Respire profondément avant de commencer.
fresh start | le nouveau départ | Chaque matin est un nouveau départ.
turning point | le tournant | Cet échec a été mon tournant.
on the right track | sur la bonne voie | Continue, tu es sur la bonne voie.
almost there | presque arrivé | Ne t'arrête pas maintenant, tu y es presque.
keep at it | persévérer | Persévère et tu verras des résultats.
willpower | la volonté | Il faut de la volonté pour se lever tôt.
no guts, no glory | qui ne risque rien n'a rien | Qui ne risque rien n'a rien — invite-la à sortir !
no pain, no gain | on n'a rien sans rien | J'ai mal aux jambes, mais on n'a rien sans rien.
no risk, no reward | qui ne tente rien n'a rien | Qui ne tente rien n'a rien — j'accepte le poste.
nothing ventured, nothing gained | qui ne risque rien n'a rien | Postule quand même. Qui ne risque rien n'a rien.
go big or go home | tout ou rien | C'est la finale, alors c'est tout ou rien !
now or never | maintenant ou jamais | C'est maintenant ou jamais, alors allons-y.
do or die | ça passe ou ça casse | C'est un match où ça passe ou ça casse pour notre équipe.
sink or swim | marche ou crève ; se débrouiller | Mon premier jour, c'était marche ou crève.
all in | à fond ; tout miser | Je suis à fond dans ce projet.
give it 110% | se donner à 110 % | Donne-toi à 110 % dans le dernier tour !
dig deep | puiser dans ses réserves | Tu es fatigué, mais puise dans tes réserves et finis en beauté.
bring it on | qu'on m'apporte le défi | Un examen plus difficile ? Qu'on me l'apporte !
game on | c'est parti | Tu crois pouvoir me battre ? C'est parti !
no excuses | pas d'excuses | Pas d'excuses — on s'entraîne aujourd'hui.
mind over matter | la volonté plus forte que tout | Courir un marathon, c'est la volonté plus forte que le corps.
where there's a will, there's a way | quand on veut, on peut | Ne t'inquiète pas ; quand on veut, on peut.
practice makes perfect | c'est en forgeant qu'on devient forgeron | Continue le piano. C'est en forgeant qu'on devient forgeron.
actions speak louder than words | les actes valent mieux que les paroles | Les actes valent mieux que les paroles, alors montre-leur.
the early bird catches the worm | l'avenir appartient à ceux qui se lèvent tôt | Je me lève à six heures. L'avenir appartient à ceux qui se lèvent tôt.
it ain't over till it's over | rien n'est joué tant que ce n'est pas fini | On a dix points de retard, mais rien n'est joué.
sweat now, shine later | transpire maintenant, brille plus tard | Transpire maintenant, brille plus tard — encore une série !
leave it all on the field | tout donner sur le terrain | C'est le dernier match. Donnez tout sur le terrain.
the ball is in your court | la balle est dans ton camp | J'ai fait ma part. La balle est dans ton camp.
reach for the stars | viser les étoiles | Vise toujours les étoiles.
rise and shine | debout là-dedans | Debout là-dedans ! C'est un nouveau jour.
turn over a new leaf | tourner la page ; repartir à zéro | Cette année, je repars à zéro.
take the plunge | se jeter à l'eau | Il est temps de te jeter à l'eau et de démissionner.
keep your eyes on the prize | ne pas perdre de vue l'objectif | Ne perds pas de vue l'objectif.
Rome wasn't built in a day | Rome ne s'est pas faite en un jour | Sois patient ; Rome ne s'est pas faite en un jour.
every cloud has a silver lining | à quelque chose malheur est bon | À quelque chose malheur est bon.
from rags to riches | partir de rien | Son histoire, c'est celle d'un homme parti de rien.
make your mark | faire sa marque ; se faire un nom | Va te faire un nom.
on top of the world | au septième ciel | Je suis au septième ciel.
the world is your oyster | le monde t'appartient | Tu es jeune ; le monde t'appartient.
back on your feet | remis sur pied | Tu seras bientôt remis sur pied.
move mountains | déplacer des montagnes | La foi peut déplacer des montagnes.
swing for the fences | viser le coup de circuit ; tout tenter | Ne joue pas la sécurité. Tente le grand coup !
do it scared | le faire même en ayant peur | Pas besoin de te sentir prêt. Fais-le même si tu as peur.
step up to the plate | prendre ses responsabilités | Quand le chef est absent, quelqu'un doit prendre ses responsabilités.
own it | assumer | Tu as fait une erreur, alors assume et avance.
play to win | jouer pour gagner | N'essaie pas seulement de ne pas perdre. Joue pour gagner.
raise the bar | placer la barre plus haut | Cette année, plaçons la barre encore plus haut.
bring your A game | donner le meilleur de soi-même | C'est la grande présentation. Donne le meilleur de toi-même.
make waves | faire des vagues | N'aie pas peur de faire des vagues.
leave your mark | laisser son empreinte | Trouve un moyen de laisser ton empreinte sur le monde.
check your ego at the door | laisser son ego au vestiaire | Dans cette équipe, on laisse son ego au vestiaire.
go for broke | jouer le tout pour le tout | Il nous reste une chance, alors jouons le tout pour le tout.
hit the ground running | démarrer sur les chapeaux de roue | Elle a démarré sur les chapeaux de roue dans son nouveau travail.
keep your eye on the prize | garder le cap | Ignore le bruit et garde le cap.
finish strong | finir en beauté | On y est presque, alors finissons en beauté.
get after it | s'y mettre à fond | Nouvelle semaine, nouveaux objectifs. On s'y met à fond !
make it happen | le concrétiser | Tu as le plan. Maintenant, concrétise-le.
put yourself out there | se montrer ; oser se lancer | Tu n'auras jamais le poste si tu n'oses pas te lancer.
`,
  phrases: `
Don't sell yourself short. | Ne te sous-estime pas.
You're selling yourself short. | Tu te sous-estimes.
Hang in there. | Tiens bon.
Keep your chin up. | Garde la tête haute.
Keep your head up. | Relève la tête.
You've got what it takes. | Tu as ce qu'il faut.
You were born to do this. | Tu es né pour ça.
Give it your all. | Donne tout.
Give it a shot. | Tente le coup.
Take a chance on yourself. | Donne-toi une chance.
Bet on yourself. | Mise sur toi.
It's now or never. | C'est maintenant ou jamais.
There's no time like the present. | Il n'y a pas de meilleur moment que maintenant.
What are you waiting for? | Qu'est-ce que tu attends ?
The first step is always the hardest. | C'est le premier pas qui coûte.
Rome wasn't built in a day. | Rome ne s'est pas faite en un jour.
Good things take time. | Les bonnes choses prennent du temps.
Progress, not perfection. | Le progrès, pas la perfection.
Done is better than perfect. | Mieux vaut fait que parfait.
Focus on what you can control. | Concentre-toi sur ce que tu peux contrôler.
Don't compare yourself to others. | Ne te compare pas aux autres.
Everyone grows at their own pace. | Chacun grandit à son rythme.
Your only competition is who you were yesterday. | Ton seul rival, c'est celui que tu étais hier.
Be better than you were yesterday. | Sois meilleur qu'hier.
Failure is part of the process. | L'échec fait partie du processus.
Every failure is a lesson. | Chaque échec est une leçon.
Mistakes are proof that you are trying. | Les erreurs prouvent que tu essaies.
It's not about how many times you fall. | Ce n'est pas le nombre de chutes qui compte.
What matters is that you get back up. | Ce qui compte, c'est de se relever.
You learn more from failure than from success. | On apprend plus de ses échecs que de ses réussites.
Turn your setbacks into comebacks. | Transforme tes revers en retours en force.
This too shall pass. | Cela aussi passera.
Tough times don't last, but tough people do. | Les temps durs passent, les gens forts restent.
Things will get better. | Ça va s'arranger.
It gets easier. | Ça devient plus facile.
You've come so far. | Tu as fait tellement de chemin.
Don't quit now. | N'abandonne pas maintenant.
Don't stop until you're proud. | Ne t'arrête pas avant d'être fier de toi.
Believe you can and you're halfway there. | Crois que tu peux, et tu as fait la moitié du chemin.
If you can dream it, you can do it. | Si tu peux le rêver, tu peux le faire.
Dream big, start small. | Rêve grand, commence petit.
Aim high. | Vise haut.
Shoot for the moon. | Vise la lune.
The sky's the limit. | Tout est possible.
Step out of your comfort zone. | Sors de ta zone de confort.
Growth happens outside your comfort zone. | On grandit en dehors de sa zone de confort.
Feel the fear and do it anyway. | Aie peur, et fais-le quand même.
Courage isn't the absence of fear. | Le courage, ce n'est pas l'absence de peur.
Be the change you want to see. | Sois le changement que tu veux voir.
Small steps every day add up. | Les petits pas quotidiens s'additionnent.
Consistency beats intensity. | La régularité l'emporte sur l'intensité.
Hard work pays off. | Le travail paie.
Your hard work will pay off. | Ton travail va payer.
All that effort was worth it. | Tous ces efforts en valaient la peine.
You deserve this. | Tu le mérites.
You earned it. | Tu l'as bien mérité.
Celebrate the small wins. | Célèbre les petites victoires.
Give yourself some credit. | Reconnais tes mérites.
Cut yourself some slack. | Sois un peu indulgent avec toi-même.
Be patient with yourself. | Sois patient avec toi-même.
You're doing better than you think. | Tu t'en sors mieux que tu ne le crois.
Don't be so hard on yourself. | Ne sois pas si dur avec toi-même.
Stop doubting yourself. | Arrête de douter de toi.
You're more capable than you realize. | Tu es plus capable que tu ne le penses.
You have so much potential. | Tu as tellement de potentiel.
Your future is bright. | Ton avenir est prometteur.
Stay positive. | Reste positif.
Look on the bright side. | Vois le bon côté des choses.
Every cloud has a silver lining. | À quelque chose malheur est bon.
When one door closes, another one opens. | Quand une porte se ferme, une autre s'ouvre.
Everything happens for a reason. | Tout arrive pour une raison.
It's never too late to start. | Il n'est jamais trop tard pour commencer.
It's never too late to change. | Il n'est jamais trop tard pour changer.
You only live once. | On ne vit qu'une fois.
Life is short; make it count. | La vie est courte ; fais qu'elle compte.
Make every day count. | Fais que chaque jour compte.
Find what you love and go for it. | Trouve ce que tu aimes et fonce.
Stay true to yourself. | Reste fidèle à toi-même.
Don't let anyone tell you that you can't. | Ne laisse personne te dire que tu ne peux pas.
Prove them wrong. | Prouve-leur qu'ils ont tort.
Let your work speak for itself. | Laisse ton travail parler pour toi.
Keep pushing. | Continue de pousser.
Push through. | Tiens jusqu'au bout.
Stick with it. | Accroche-toi.
Stay focused. | Reste concentré.
Eyes on the prize. | Garde l'objectif en vue.
You're on the right track. | Tu es sur la bonne voie.
Trust the process. | Fais confiance au processus.
One day at a time. | Un jour à la fois.
Take a deep breath and start again. | Respire un grand coup et recommence.
It's okay not to be okay. | C'est normal de ne pas aller bien.
Rest is part of the work. | Le repos fait partie du travail.
You can't pour from an empty cup. | On ne peut pas donner ce qu'on n'a pas.
I've got your back. | Je te soutiens.
You can count on me. | Tu peux compter sur moi.
I knew you could do it. | Je savais que tu y arriverais.
That was a huge step forward. | C'était un grand pas en avant.
Look at how much you've grown. | Regarde comme tu as grandi.
You make a difference. | Tu fais la différence.
Keep shining. | Continue de briller.
No guts, no glory. | Qui ne risque rien n'a rien.
No pain, no gain. | On n'a rien sans rien.
No risk, no reward. | Qui ne tente rien n'a rien.
Nothing ventured, nothing gained. | Qui ne risque rien n'a rien.
Go big or go home. | C'est tout ou rien.
It's do or die. | Ça passe ou ça casse.
I'm all in. | Je mise tout.
Dig deep! | Puise dans tes réserves !
Bring it on! | Je t'attends !
Game on! | C'est parti !
No excuses. | Pas d'excuses.
It's mind over matter. | C'est une question de volonté.
Where there's a will, there's a way. | Quand on veut, on peut.
Practice makes perfect. | C'est en forgeant qu'on devient forgeron.
Actions speak louder than words. | Les actes valent mieux que les paroles.
The early bird catches the worm. | L'avenir appartient à ceux qui se lèvent tôt.
It ain't over till it's over. | Rien n'est fini tant que ce n'est pas fini.
Sweat now, shine later. | Transpire maintenant, brille plus tard.
Leave it all on the field. | Donne tout sur le terrain.
`,
});

// ---------- 高級 Advanced ----------
addFrench("inspire", {
  words: `
resilience | la résilience | La résilience se construit dans les moments difficiles.
resilient | résilient | Les enfants sont plus résilients qu'on ne le pense.
perseverance | la persévérance | La persévérance transforme les rêves en réalité.
persevere | persévérer | Si tu persévères, tu réussiras.
tenacity | la ténacité | Sa ténacité a impressionné toute l'équipe.
tenacious | tenace | Sois tenace dans la poursuite de tes objectifs.
grit | le cran ; la ténacité | À long terme, le cran compte plus que le talent.
fortitude | la force d'âme | Il a affronté la maladie avec une grande force d'âme.
adversity | l'adversité | L'adversité révèle qui nous sommes vraiment.
hardship | l'épreuve ; les difficultés | Les épreuves préparent souvent des gens ordinaires à un destin extraordinaire.
triumph | le triomphe | Sa guérison a été un triomphe de l'esprit humain.
prevail | l'emporter | La vérité et la bonté l'emporteront.
undaunted | intrépide ; sans se décourager | Sans se décourager après le refus, elle a postulé de nouveau.
unwavering | indéfectible | Merci pour ton soutien indéfectible.
steadfast | inébranlable | Reste inébranlable dans tes valeurs.
relentless | acharné ; implacable | Le succès est venu d'un entraînement acharné.
indomitable | indomptable | Elle a un esprit indomptable.
unstoppable | inarrêtable | Une fois que tu crois en toi, tu es inarrêtable.
audacious | audacieux | Fixe-toi un objectif audacieux.
ambition | l'ambition | L'ambition sans action n'est qu'un souhait.
ambitious | ambitieux | Elle est jeune, intelligente et ambitieuse.
aspire | aspirer à | J'aspire à devenir médecin un jour.
aspiration | l'aspiration | Note tes aspirations.
visionary | le visionnaire | Tout visionnaire a d'abord été traité de rêveur.
vision | la vision | Accroche-toi à ta vision.
self-belief | la confiance en soi | La confiance en soi est le premier pas vers la réussite.
self-worth | la valeur personnelle | Ta valeur ne se mesure pas à tes notes.
self-compassion | l'autocompassion ; la bienveillance envers soi | La bienveillance envers soi aide à se remettre de ses erreurs.
self-discipline | l'autodiscipline | L'autodiscipline est une forme de respect de soi.
self-improvement | le développement personnel | La lecture est un excellent outil de développement personnel.
self-made | qui s'est fait tout seul | C'est un entrepreneur qui s'est fait tout seul.
imposter syndrome | le syndrome de l'imposteur | Beaucoup de gens brillants souffrent du syndrome de l'imposteur.
underestimate | sous-estimer | Ne sous-estime jamais le pouvoir d'un petit pas.
undervalue | sous-évaluer | Ne sous-évalue pas ton expérience.
overthink | trop réfléchir | Ne réfléchis pas trop ; lance-toi.
procrastinate | procrastiner | Ne procrastine pas ; commence maintenant.
procrastination | la procrastination | La procrastination est la voleuse du temps.
complacency | la complaisance ; l'autosatisfaction | L'autosatisfaction est l'ennemie du progrès.
complacent | trop content de soi | Ne te repose pas sur tes lauriers après un seul succès.
momentum | l'élan | Garde cet élan.
breakthrough | la percée | Après des mois de travail, nous avons enfin fait une percée.
epiphany | la révélation | J'ai eu une révélation pendant mon footing du matin.
transformation | la transformation | Une vraie transformation prend du temps.
transform | transformer | La douleur peut faire de toi quelqu'un de plus fort.
reinvent | réinventer | Il n'est jamais trop tard pour se réinventer.
flourish | s'épanouir | Avec le bon soutien, les gens s'épanouissent.
thrive | prospérer ; s'épanouir | Ne te contente pas de survivre ; épanouis-toi.
excel | exceller | Elle excelle dans tout ce qu'elle entreprend.
excellence | l'excellence | L'excellence est une habitude, pas un acte.
distinction | la mention ; la distinction | Il a obtenu son diplôme avec mention.
legacy | l'héritage | Quel héritage veux-tu laisser ?
fulfillment | l'épanouissement | Le véritable épanouissement vient de l'aide aux autres.
fulfilling | épanouissant | L'enseignement est un métier épanouissant.
meaningful | qui a du sens | Mène une vie qui a du sens.
authentic | authentique | Sois authentique ; le monde a besoin de la vraie toi.
integrity | l'intégrité | L'intégrité, c'est bien agir quand personne ne regarde.
humility | l'humilité | L'humilité rend les grands encore plus grands.
humble | humble | Reste humble et continue d'apprendre.
gracious | élégant ; bienveillant | Sois élégant dans la victoire comme dans la défaite.
magnanimous | magnanime | Il s'est montré magnanime envers ses rivaux.
empower | donner les moyens d'agir | L'éducation peut donner aux jeunes femmes les moyens d'agir.
empowering | qui donne de la force | C'était une expérience qui donne de la force.
uplifting | réconfortant ; édifiant | Quelle histoire réconfortante !
invigorating | revigorant | Une baignade matinale est revigorante.
exhilarating | grisant ; exaltant | Franchir la ligne d'arrivée a été grisant.
galvanize | galvaniser | Son discours a galvanisé la foule.
rally | se mobiliser ; reprendre des forces | Mobilisons-nous et finissons en beauté.
spur | aiguillonner ; pousser | Les critiques l'ont poussé à travailler davantage.
instill | inculquer | Les bons entraîneurs inculquent la confiance.
cultivate | cultiver | Cultive l'habitude de lire.
nurture | nourrir ; cultiver | Cultive tes talents.
embrace | accueillir ; embrasser | Accueille le défi à bras ouverts.
seize | saisir | Saisis le jour.
seize the moment | saisir l'instant | Saisis l'instant avant qu'il ne passe.
carpe diem | carpe diem | Carpe diem, mes amis.
rise to the occasion | se montrer à la hauteur | Au moment décisif, elle a su se montrer à la hauteur.
go the extra mile | faire un effort supplémentaire | Les excellents employés font toujours un effort supplémentaire.
against all odds | contre toute attente | Contre toute attente, ils ont remporté le championnat.
odds | les chances ; les probabilités | Ne laisse pas les probabilités te faire peur.
underdog | l'outsider | Tout le monde aime l'histoire d'un outsider.
long shot | le pari risqué | C'est un pari risqué, mais ça vaut le coup d'essayer.
leap of faith | le saut dans l'inconnu | Créer une entreprise, c'est un saut dans l'inconnu.
calculated risk | le risque calculé | Prends des risques calculés.
uncharted | inexploré | N'aie pas peur des eaux inexplorées.
trailblazer | le pionnier ; la pionnière | Elle a été une pionnière pour les femmes scientifiques.
pioneer | le pionnier | Il a été un pionnier des énergies vertes.
defy | défier | Défie les attentes.
transcend | transcender | Le grand art peut transcender la langue.
limitless | illimité | Ton potentiel est illimité.
boundless | débordant ; sans limites | Elle a une énergie débordante.
silver lining | le bon côté des choses | À quelque chose malheur est bon.
blessing in disguise | un mal pour un bien | Perdre ce travail a été un mal pour un bien.
light at the end of the tunnel | le bout du tunnel | Je vois enfin le bout du tunnel.
weather the storm | traverser la tempête | Ensemble, nous pouvons traverser la tempête.
stay the course | garder le cap | C'est dur, mais garde le cap.
never say die | ne jamais s'avouer vaincu | Il ne s'avoue jamais vaincu.
the best is yet to come | le meilleur reste à venir | Courage — le meilleur reste à venir.
fall seven times, stand up eight | tomber sept fois, se relever huit | Souviens-toi : tombe sept fois, relève-toi huit.
what doesn't kill you makes you stronger | ce qui ne tue pas rend plus fort | On dit que ce qui ne tue pas rend plus fort.
conviction | la conviction | Elle a parlé avec une conviction tranquille.
fortune favors the brave | la fortune sourit aux audacieux | La fortune sourit aux audacieux, alors lance-toi.
when the going gets tough, the tough get going | quand ça se corse, les durs se mettent en route | Quand ça se corse, les durs se mettent en route.
who dares wins | qui ose gagne | Qui ose gagne — c'est ma devise.
fake it till you make it | faire semblant jusqu'à y arriver | Nerveux ? Fais semblant jusqu'à ce que ça devienne vrai.
no man is an island | nul homme n'est une île | Demande de l'aide ; nul homme n'est une île.
the harder you work, the luckier you get | plus on travaille, plus on a de la chance | Plus on travaille, plus on a de la chance.
champions are made, not born | on ne naît pas champion, on le devient | Souviens-toi : on ne naît pas champion, on le devient.
hustle | la débrouille ; l'énergie | Le talent n'est rien sans l'énergie de se battre.
grind | le labeur quotidien | Le succès vient du labeur quotidien.
when life gives you lemons, make lemonade | faire contre mauvaise fortune bon cœur | Fais contre mauvaise fortune bon cœur.
the darkest hour is just before the dawn | c'est avant l'aube que la nuit est la plus noire | C'est avant l'aube que la nuit est la plus noire.
a diamond in the rough | un diamant brut | C'est un diamant brut.
burn the boats | brûler ses vaisseaux | Il a décidé de brûler ses vaisseaux et de créer sa propre entreprise.
cross the Rubicon | franchir le Rubicon | Une fois que tu signes, tu franchis le Rubicon.
a long road ahead | un long chemin à parcourir | Il reste un long chemin à parcourir, mais nous y arriverons.
pull yourself up by your bootstraps | s'en sortir par ses propres moyens | Sors-t'en par tes propres moyens.
rise from the ashes | renaître de ses cendres | L'entreprise renaîtra de ses cendres.
shoot for the moon | viser la lune | Vise la lune.
strike while the iron is hot | battre le fer pendant qu'il est chaud | Il faut battre le fer pendant qu'il est chaud.
the sky is not the limit | le ciel n'est pas la limite | Pour toi, le ciel n'est pas la limite.
think big | voir grand | Vois grand et commence petit.
the journey is the reward | le chemin est la récompense | Souviens-toi, le chemin est la récompense.
a new lease on life | une seconde vie | L'opération lui a donné une seconde vie.
rise above | prendre de la hauteur | Prends de la hauteur face aux critiques.
punch above your weight | jouer au-dessus de sa catégorie | Avec du travail, tu peux jouer au-dessus de ta catégorie.
moonshot | le projet fou ; l'objectif très ambitieux | Guérir cette maladie est un projet fou, mais ça vaut la peine d'essayer.
push the envelope | repousser les limites | Les grands artistes repoussent les limites.
play the long game | voir sur le long terme | Pour bâtir la confiance, il faut voir sur le long terme.
embrace the suck | serrer les dents et encaisser | L'entraînement est brutal, alors serre les dents et encaisse.
all or nothing | tout ou rien | C'était tout ou rien au dernier tour.
back yourself | se faire confiance | Personne ne connaît ton idée mieux que toi, alors fais-toi confiance.
`,
  phrases: `
Don't underestimate yourself; others certainly won't make that mistake twice. | Ne te sous-estime pas ; les autres ne feront certainement pas deux fois cette erreur.
You're far more qualified than you give yourself credit for. | Tu es bien plus qualifié que tu ne le crois.
Don't let imposter syndrome talk you out of applying. | Ne laisse pas le syndrome de l'imposteur te dissuader de postuler.
The only person standing in your way is you. | La seule personne qui te barre la route, c'est toi.
Success is not final, and failure is not fatal. | Le succès n'est pas définitif, et l'échec n'est pas fatal.
It's the courage to continue that counts. | C'est le courage de continuer qui compte.
Fall seven times, stand up eight. | Tombe sept fois, relève-toi huit.
What doesn't kill you makes you stronger. | Ce qui ne tue pas rend plus fort.
Adversity doesn't build character; it reveals it. | L'adversité ne forge pas le caractère ; elle le révèle.
Smooth seas never made a skilled sailor. | Ce n'est pas par mer calme qu'on devient bon marin.
The comeback is always stronger than the setback. | Le retour est toujours plus fort que le revers.
Every setback is a setup for a comeback. | Chaque revers prépare un retour en force.
Pressure is a privilege. | La pression est un privilège.
Discomfort is the price of growth. | L'inconfort est le prix de la croissance.
Embrace the struggle; that's where the growth is. | Accueille la difficulté ; c'est là qu'on grandit.
The obstacle is the way. | L'obstacle est le chemin.
Every expert was once a beginner. | Tout expert a d'abord été débutant.
Comparison is the thief of joy. | La comparaison est la voleuse de joie.
Run your own race. | Cours ta propre course.
Your pace is your own; don't let anyone rush you. | Ton rythme t'appartient ; ne laisse personne te presser.
Talent gets you in the door, but character keeps you in the room. | Le talent t'ouvre la porte, mais c'est le caractère qui te fait rester.
Hard work beats talent when talent doesn't work hard. | Le travail bat le talent quand le talent ne travaille pas.
Discipline will take you places motivation can't. | La discipline te mènera là où la motivation ne peut pas.
Motivation gets you started; habit keeps you going. | La motivation te fait démarrer ; l'habitude te fait continuer.
You don't have to be great to start, but you have to start to be great. | Pas besoin d'être excellent pour commencer, mais il faut commencer pour devenir excellent.
The best time to plant a tree was twenty years ago; the second best time is now. | Le meilleur moment pour planter un arbre, c'était il y a vingt ans ; le deuxième meilleur moment, c'est maintenant.
A journey of a thousand miles begins with a single step. | Un voyage de mille lieues commence par un seul pas.
Don't wait for the perfect moment; take the moment and make it perfect. | N'attends pas le moment parfait ; saisis l'instant et rends-le parfait.
Opportunities don't happen; you create them. | Les occasions n'arrivent pas toutes seules ; on les crée.
Luck is what happens when preparation meets opportunity. | La chance, c'est quand la préparation rencontre l'occasion.
Fortune favors the bold. | La fortune sourit aux audacieux.
Seize the day. | Saisis le jour.
Take the leap; the net will appear. | Saute ; le filet apparaîtra.
If it scares you, it might be worth doing. | Si ça te fait peur, ça vaut peut-être la peine de le faire.
A ship in harbor is safe, but that's not what ships are built for. | Un navire au port est en sécurité, mais ce n'est pas pour ça qu'on construit des navires.
Courage is grace under pressure. | Le courage, c'est la grâce sous la pression.
You miss one hundred percent of the shots you don't take. | On rate cent pour cent des tirs qu'on ne tente pas.
The greatest risk is not taking one. | Le plus grand risque, c'est de n'en prendre aucun.
Aim for the moon; even if you miss, you'll land among the stars. | Vise la lune ; même si tu la manques, tu atterriras parmi les étoiles.
Set goals that scare you a little and excite you a lot. | Fixe-toi des objectifs qui te font un peu peur et t'enthousiasment beaucoup.
Ambition is the path to success; persistence is the vehicle you arrive in. | L'ambition est le chemin vers le succès ; la persévérance est le véhicule qui t'y conduit.
Rise to the occasion. | Sois à la hauteur.
Go the extra mile; it's never crowded. | Fais l'effort supplémentaire ; il n'y a jamais foule.
Stay hungry, stay humble. | Reste affamé, reste humble.
Be humble in victory and gracious in defeat. | Sois humble dans la victoire et digne dans la défaite.
Excellence is not an act but a habit. | L'excellence n'est pas un acte, mais une habitude.
We are what we repeatedly do. | Nous sommes ce que nous faisons de manière répétée.
Small daily improvements lead to stunning results over time. | Les petits progrès quotidiens mènent à des résultats étonnants avec le temps.
Success is the sum of small efforts repeated day in and day out. | Le succès est la somme de petits efforts répétés jour après jour.
Don't count the days; make the days count. | Ne compte pas les jours ; fais que les jours comptent.
The pain you feel today will be the strength you feel tomorrow. | La douleur d'aujourd'hui sera ta force de demain.
Out of difficulty comes opportunity. | Au cœur de la difficulté se trouve l'opportunité.
Every cloud has a silver lining, if you're willing to look for it. | Chaque nuage a sa doublure d'argent, si l'on veut bien la chercher.
That rejection may turn out to be a blessing in disguise. | Ce refus pourrait se révéler être un mal pour un bien.
There's light at the end of the tunnel. | On voit le bout du tunnel.
We will weather this storm together. | Nous traverserons cette tempête ensemble.
Stay the course, even when progress feels invisible. | Garde le cap, même quand les progrès semblent invisibles.
Trust the timing of your life. | Fais confiance au rythme de ta vie.
Your story isn't over yet. | Ton histoire n'est pas encore finie.
The chapter you're in isn't the whole book. | Le chapitre que tu vis n'est pas tout le livre.
Don't judge your life by one bad day. | Ne juge pas ta vie sur une mauvaise journée.
Be gentle with yourself; you're doing the best you can. | Sois doux avec toi-même ; tu fais de ton mieux.
Your worth isn't defined by your productivity. | Ta valeur ne se définit pas par ta productivité.
Self-compassion is not self-indulgence. | La bienveillance envers soi n'est pas de la complaisance.
Rest when you must, but don't you quit. | Repose-toi s'il le faut, mais n'abandonne surtout pas.
Burnout isn't a badge of honor. | Le burn-out n'est pas une médaille.
Protect your peace. | Protège ta paix intérieure.
Surround yourself with people who lift you higher. | Entoure-toi de gens qui te tirent vers le haut.
Iron sharpens iron. | Le fer aiguise le fer.
Be the kind of person you needed when you were younger. | Sois la personne dont tu avais besoin quand tu étais plus jeune.
Lead by example. | Montre l'exemple.
Kindness is never wasted. | La gentillesse n'est jamais perdue.
Live the life you'd be proud to tell your children about. | Vis une vie que tu serais fier de raconter à tes enfants.
Leave the world a little better than you found it. | Laisse le monde un peu meilleur que tu ne l'as trouvé.
What you do today can improve all your tomorrows. | Ce que tu fais aujourd'hui peut améliorer tous tes lendemains.
Don't let what you cannot do interfere with what you can do. | Ne laisse pas ce que tu ne peux pas faire t'empêcher de faire ce que tu peux.
Focus on progress, not on how far you still have to go. | Concentre-toi sur tes progrès, pas sur le chemin qu'il reste.
Celebrate how far you've come, not just how far you have to go. | Célèbre le chemin parcouru, pas seulement celui qui reste.
Defy the odds. | Défie les pronostics.
Everyone loves an underdog story; make yours one worth telling. | Tout le monde aime les histoires d'outsiders ; fais de la tienne une histoire qui vaille la peine d'être racontée.
It always seems impossible until it's done. | Ça paraît toujours impossible jusqu'à ce que ce soit fait.
The harder the battle, the sweeter the victory. | Plus la bataille est rude, plus la victoire est douce.
Great things never come from comfort zones. | Les grandes choses ne naissent jamais dans la zone de confort.
Growth is uncomfortable because you've never been here before. | Grandir est inconfortable parce que tu n'es jamais allé là avant.
Reinvent yourself as many times as you need to. | Réinvente-toi autant de fois qu'il le faut.
It's never too late to be what you might have been. | Il n'est jamais trop tard pour devenir ce que l'on aurait pu être.
Change is hard at first, messy in the middle and gorgeous at the end. | Le changement est dur au début, chaotique au milieu et magnifique à la fin.
Don't just survive; thrive. | Ne te contente pas de survivre ; épanouis-toi.
Bloom where you are planted. | Fleuris là où tu es planté.
Be relentless in pursuit of what sets your soul on fire. | Poursuis sans relâche ce qui enflamme ton âme.
Your potential is limitless if you're willing to put in the work. | Ton potentiel est illimité si tu es prêt à travailler.
Doubt kills more dreams than failure ever will. | Le doute tue plus de rêves que l'échec.
Believe in yourself even when no one else does. | Crois en toi même quand personne d'autre n'y croit.
You were given this life because you're strong enough to live it. | Cette vie t'a été donnée parce que tu es assez fort pour la vivre.
Keep your eyes on the stars and your feet on the ground. | Garde les yeux vers les étoiles et les pieds sur terre.
Stay patient and trust your journey. | Reste patient et fais confiance à ton parcours.
One day, you'll thank yourself for not giving up. | Un jour, tu te remercieras de ne pas avoir abandonné.
The view from the top is worth every step of the climb. | La vue du sommet vaut chaque pas de l'ascension.
Never mistake a single defeat for a final defeat. | Ne confonds jamais une défaite avec la défaite finale.
The best is yet to come, and it's closer than you think. | Le meilleur reste à venir, et il est plus proche que tu ne le crois.
Fortune favors the brave. | La fortune sourit aux audacieux.
When the going gets tough, the tough get going. | Quand ça se corse, les durs se mettent en route.
Who dares wins. | Qui ose gagne.
Fake it till you make it. | Fais semblant jusqu'à ce que ça devienne vrai.
No man is an island. | Nul homme n'est une île.
The harder you work, the luckier you get. | Plus on travaille, plus on a de la chance.
Champions are made, not born. | On ne naît pas champion, on le devient.
Hard work beats talent, but only if you hustle. | Le travail bat le talent, mais seulement si tu te bats.
Fall in love with the grind. | Tombe amoureux de l'effort quotidien.
`,
});
