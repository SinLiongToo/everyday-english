// 法文對照（Français）：電影口語
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
addFrench("movie", {
  words: `
come on | allez ; voyons | Allez, on va être en retard.
no way | pas possible ; c'est pas vrai | C'est pas vrai ! Tu as rencontré une star de cinéma ?
way to go | bien joué | Bien joué, petit !
give me a break | lâche-moi ; arrête un peu | Oh, arrête un peu !
hang in there | tiens bon | Tiens bon. Ça va s'arranger.
take it easy | du calme ; vas-y doucement | Du calme, mec.
calm down | calme-toi | Calme-toi et écoute-moi.
chill out | relax ; détends-toi | Relax, ce n'est qu'un jeu.
I'm in | j'en suis ; je suis partant | Un road trip ? J'en suis !
count me out | sans moi | Du parachutisme ? Sans moi.
count me in | compte sur moi | Une soirée pizza ? Compte sur moi.
my bad | c'est ma faute ; au temps pour moi | Oups, c'est ma faute.
gotcha | compris ; je t'ai eu | Compris. Je serai là à six heures.
got it | compris ; reçu | Compris, chef.
no problem | pas de problème | Pas de problème du tout.
no worries | pas de souci | Pas de souci, ça arrive.
never mind | laisse tomber ; peu importe | Laisse tomber, je l'ai trouvé.
whatever | peu importe ; bref | Peu importe. Fais ce que tu veux.
seriously | sérieux ? | Sérieux ? Tu as mangé tout le gâteau ?
for real | pour de vrai ? | Pour de vrai ? C'est génial.
you bet | et comment ; bien sûr | Tu peux aider ? Et comment !
sure thing | bien sûr ; pas de souci | Pas de souci, je t'appelle.
big deal | la belle affaire | Il a une nouvelle voiture. La belle affaire.
no big deal | pas grave ; rien de grave | Ne t'inquiète pas, ce n'est pas grave.
shut up | tais-toi ; (surprise) arrête ! | Arrête ! Tu as eu le poste ?
get out | (surprise) sans blague ! ; sors d'ici | Sans blague ! Tu as gagné au loto ?
you're kidding | tu plaisantes | Tu plaisantes, hein ?
just kidding | je plaisante | Je plaisante !
I'm just saying | je dis ça, je dis rien | Je dis ça, je dis rien, mais c'est une mauvaise idée.
let's go | allons-y ; on y va | On y va !
hurry up | dépêche-toi | Dépêche-toi, le film commence !
hold on | attends | Attends, je prends mon manteau.
wait up | attends-moi | Hé, attends-moi !
watch out | attention | Attention !
look out | attention ; gare | Attention ! Une voiture !
heads up | attention ; je te préviens | Attention, le patron arrive.
behave | se tenir bien | Tiens-toi bien.
cut it out | arrête ça | Arrêtez ça, vous deux !
knock it off | ça suffit | Ça suffit !
leave me alone | laisse-moi tranquille | Laisse-moi tranquille.
go away | va-t'en | Va-t'en !
get lost | dégage | Dégage !
mind your own business | occupe-toi de tes affaires | Occupe-toi de tes affaires.
none of your business | ça ne te regarde pas | Ça ne te regarde pas.
good for you | tant mieux pour toi | Tu as quitté ton travail ? Tant mieux pour toi.
good job | bon travail ; bravo | Bravo, tout le monde !
nice try | bien essayé | Bien essayé, mais non.
not bad | pas mal | Pas mal pour un débutant.
not again | pas encore ! | Oh non, pas encore !
here we go again | et c'est reparti | Et c'est reparti.
tell me about it | à qui le dis-tu | Il fait trop chaud. À qui le dis-tu.
you said it | tu l'as dit | Tu l'as dit !
I told you so | je te l'avais bien dit | Tu vois ? Je te l'avais bien dit !
I guess so | je suppose | Je suppose.
I don't buy it | je n'y crois pas | Jolie histoire, mais je n'y crois pas.
beats me | aucune idée | Où il est ? Aucune idée.
search me | j'en sais rien | J'en sais rien. Aucune idée.
who cares | on s'en fiche | On s'en fiche de ce qu'ils pensent.
so what | et alors | Et alors, si je suis en retard ?
what's up | quoi de neuf ; ça va | Salut, quoi de neuf ?
what's wrong | qu'est-ce qui ne va pas | Qu'est-ce qui ne va pas ? Tu as l'air triste.
what happened | qu'est-ce qui s'est passé | Qu'est-ce qui s'est passé ici ?
long time no see | ça fait longtemps | Ça fait longtemps !
take care | prends soin de toi | Prends soin de toi.
see you around | à la prochaine | À la prochaine.
catch you later | à plus tard | À plus tard !
I'm off | j'y vais | Bon, j'y vais. Salut !
bless you | à vos souhaits | Atchoum ! À tes souhaits.
cheers | santé ; merci | Santé !
thanks a lot | merci beaucoup ; (ironique) merci bien | Merci bien. Tu as tout gâché.
my pleasure | avec plaisir | Ce fut un plaisir.
help me out | donner un coup de main | Tu peux me donner un coup de main ?
trust me | fais-moi confiance | Fais-moi confiance, je sais ce que je fais.
believe me | crois-moi | Crois-moi, ça vaut le coup.
deal | marché conclu | Dix dollars ? Marché conclu !
fair enough | c'est de bonne guerre ; d'accord | D'accord, c'est juste.
don't worry | ne t'inquiète pas | Ne t'en fais pas.
don't panic | pas de panique | Pas de panique !
don't move | ne bouge pas | Ne bouge pas !
freeze | plus un geste | Police ! Plus un geste !
run | cours | Cours !
help | au secours | Au secours ! Que quelqu'un m'aide !
oh my God | oh mon Dieu | Oh mon Dieu, regarde ça !
oh well | tant pis | Tant pis, la prochaine fois peut-être.
oops | oups | Oups ! Je l'ai fait tomber.
ouch | aïe | Aïe ! Ça fait mal.
yikes | aïe aïe aïe ; oh là là | Oh là là ! C'est une grosse araignée.
wow | waouh | Waouh, tu es superbe !
awesome | génial | C'est génial !
cool | cool ; d'accord | Cool, à tout à l'heure.
sweet | trop bien | Trop bien ! On a gagné !
gross | beurk | Beurk, c'est dégoûtant !
totally | complètement ; carrément | J'ai complètement oublié !
exactly | exactement | Exactement !
absolutely | absolument | Absolument !
absolutely not | absolument pas | Absolument pas !
maybe later | peut-être plus tard | Peut-être plus tard.
not now | pas maintenant | Pas maintenant, je suis occupé.
hang on | attends une seconde | Attends une seconde.
excuse me | pardon ? ; excusez-moi | Pardon ? Qu'est-ce que tu as dit ?
I'm over it | je suis passé à autre chose | C'était l'an dernier. Je suis passé à autre chose.
I'm on my way | j'arrive ; je suis en route | Attends, j'arrive.
I'm coming | j'arrive | Attends ! J'arrive !
I'm done | j'en ai assez ; j'ai fini | C'est bon. J'en ai assez.
I'm out | je me retire ; je ne joue plus | C'est trop risqué. Je me retire.
I'm sold | tu m'as convaincu | De la pizza gratuite ? Tu m'as convaincu.
I'm lost | je suis perdu | Attends, je suis perdu. Répète.
I'm good | ça va, merci ; je suis bien | Encore du gâteau ? Non merci, ça va.
I'm okay | je vais bien | Ne t'inquiète pas, je vais bien.
I'm busy | je suis occupé | Pas maintenant, je suis occupé.
I'm bored | je m'ennuie | Je m'ennuie. Sortons.
I'm late | je suis en retard | Oh non, je suis en retard !
I'm here | je suis là | Ne t'inquiète pas, je suis là.
you made it | tu es venu ; tu as réussi | Tu es venu ! Entre.
I made it | j'y suis arrivé ; je suis arrivé à temps | Je suis arrivé juste à temps.
no kidding | sans blague | Sans blague ? C'est génial !
you know what | tu sais quoi | Tu sais quoi ? Allons-y, c'est tout.
here you go | tiens ; voilà | Tiens.
there you go | voilà ; et voilà | Et voilà ! Tu as réussi.
is that it | c'est tout ? | C'est tout ? C'était facile.
that's it | c'est tout ; ça suffit | Ça suffit ! Je m'en vais.
now what | et maintenant ? | La voiture est en panne. Et maintenant ?
my turn | mon tour | C'est mon tour.
after you | après vous | Après vous.
so long | à la revoyure ; au revoir | Au revoir, à l'année prochaine.
how about you | et toi ? | Ça va. Et toi ?
same here | moi pareil | Moi pareil.
me too | moi aussi | Moi aussi !
me neither | moi non plus | Moi non plus. Je déteste les araignées.
right back at you | toi aussi ; pareillement | Toi aussi !
anytime | quand tu veux | Quand tu veux. C'est à ça que servent les amis.
good call | bonne idée ; bien vu | Bien vu. Partons tôt.
it's raining cats and dogs | il pleut des cordes | Prends un parapluie. Il pleut des cordes.
rain on my parade | gâcher ma joie | Je viens d'avoir le poste, alors ne gâche pas ma joie.
when it rains, it pours | un malheur n'arrive jamais seul | J'ai perdu mes clés et mon téléphone. Un malheur n'arrive jamais seul.
right as rain | frais comme un gardon | Dors un peu et tu seras frais comme un gardon.
save it for a rainy day | garder une poire pour la soif | Ne dépense pas tout. Garde une poire pour la soif.
it's a breeze | c'est du gâteau | Ne t'inquiète pas pour l'examen. C'est du gâteau.
head in the clouds | la tête dans les nuages | Il a toujours la tête dans les nuages.
a ray of sunshine | un rayon de soleil | Notre nouvelle voisine est un vrai rayon de soleil.
storm off | partir en claquant la porte | Ne pars pas en claquant la porte ! Parle-moi.
snowed under | débordé ; submergé | Désolé, je suis débordé de travail.
brainstorm | faire un remue-méninges | Faisons un remue-méninges pour trouver des idées.
chase rainbows | courir après des chimères | Tu ne peux pas courir après des chimères éternellement.
make it rain | jeter l'argent par les fenêtres | C'est jour de paie ! Jetons l'argent par les fenêtres !
rain or shine | qu'il pleuve ou qu'il vente | Nous serons là, qu'il pleuve ou qu'il vente.
steal my thunder | me voler la vedette | Tu leur as annoncé ma nouvelle ? Ne me vole pas la vedette !
`,
  phrases: `
Come on, hurry up! | Allez, dépêche-toi !
No way! Are you serious? | C'est pas vrai ! Tu es sérieux ?
You're kidding me. | Tu te moques de moi.
I'm not kidding. | Je ne plaisante pas.
I'm serious. | Je suis sérieux.
Just kidding! | Je rigole !
Gotcha! | Je t'ai eu !
Oh my God! | Oh mon Dieu !
Oh, come on! | Oh, arrête !
Give me a break. | Lâche-moi un peu.
Are you okay? | Ça va ?
I'm fine. | Ça va.
I'm good, thanks. | Ça va bien, merci.
What's going on? | Qu'est-ce qui se passe ?
What are you doing here? | Qu'est-ce que tu fais ici ?
Where have you been? | Où étais-tu passé ?
I've been looking all over for you. | Je t'ai cherché partout.
Let's get out of here. | Sortons d'ici.
Get in the car! | Monte dans la voiture !
Follow me. | Suis-moi.
Stay here. | Reste ici.
Stay close. | Reste près de moi.
Don't go anywhere. | Ne bouge pas d'ici.
I'll be right back. | Je reviens tout de suite.
Wait for me! | Attends-moi !
Hold on a second. | Attends une seconde.
Be careful. | Fais attention.
Watch your step. | Attention où tu mets les pieds.
Look out! | Attention !
Run! | Cours !
Help! | Au secours !
Call 911! | Appelle les secours ! (le 911 aux États-Unis)
Somebody help me! | Que quelqu'un m'aide !
It's going to be okay. | Ça va aller.
Everything is going to be fine. | Tout va bien se passer.
Don't worry about it. | Ne t'en fais pas.
Calm down. | Calme-toi.
Take a deep breath. | Respire profondément.
I'm here for you. | Je suis là pour toi.
I'm sorry. | Je suis désolé.
It's okay. | Ce n'est pas grave.
It's not your fault. | Ce n'est pas ta faute.
It's my fault. | C'est ma faute.
My bad. | Au temps pour moi.
Forget it. | Laisse tomber.
Never mind. | C'est rien.
Whatever. | Peu importe.
Who cares? | On s'en fiche !
So what? | Et alors ?
Big deal. | La belle affaire.
I don't care. | Je m'en fiche.
I don't know. | Je ne sais pas.
I have no idea. | Je n'en ai aucune idée.
Beats me. | Aucune idée.
Good question. | Bonne question.
Tell me about it. | À qui le dis-tu.
You're right. | Tu as raison.
You're telling me. | À qui le dis-tu !
I knew it! | Je le savais !
I told you so. | Je te l'avais dit.
See? | Tu vois ?
Here we go again. | Et c'est reparti.
Not again! | Pas encore !
Are you sure? | Tu es sûr ?
Trust me. | Fais-moi confiance.
Promise? | Promis ?
I promise. | Je te le promets.
Deal? | Marché conclu ?
Deal! | Marché conclu !
I'm in. | J'en suis.
Count me out. | Sans moi.
Let's do this! | Allons-y !
You can do it! | Tu peux le faire !
Go for it! | Fonce !
Good luck! | Bonne chance !
Way to go! | Bien joué !
Nice job! | Beau travail !
That was awesome! | C'était génial !
Cool! | Cool !
Wow! | Waouh !
Thank you so much. | Merci infiniment.
Thanks a lot. | Merci beaucoup.
No problem. | Pas de problème.
You're welcome. | De rien.
Anytime. | Quand tu veux.
Shut up! | Tais-toi !
Leave me alone. | Laisse-moi tranquille.
Get out! | Dehors !
Go away! | Va-t'en !
Stop it! | Arrête !
Knock it off! | Ça suffit !
That's enough! | Assez !
What's wrong with you? | Qu'est-ce qui ne va pas chez toi ?
Are you crazy? | Tu es fou ?
I can't believe it. | Je n'arrive pas à y croire.
This is crazy. | C'est dingue.
I love you. | Je t'aime.
I miss you. | Tu me manques.
See you later. | À plus tard.
Take care. | Prends soin de toi.
I'm over it. | Je suis passé à autre chose.
Don't worry, I'm over it now. | Ne t'inquiète pas, c'est du passé maintenant.
I'm on my way! | J'arrive !
Coming! | J'arrive !
I'm done with this. | J'en ai assez de tout ça.
I'm out. Good luck, guys. | Je me retire. Bonne chance, les gars.
Free food? I'm sold! | De la nourriture gratuite ? Vendu !
Sorry, I'm lost. Can you say that again? | Désolé, je suis perdu. Tu peux répéter ?
No thanks, I'm good. | Non merci, ça ira.
I'm okay, really. | Je vais bien, vraiment.
I'm kind of busy right now. | Je suis un peu occupé en ce moment.
I'm so bored. | Je m'ennuie tellement.
I'm late again! | Je suis encore en retard !
I'm right here. | Je suis juste là.
You made it! | Tu as pu venir !
We made it! | On a réussi !
No kidding! | Sans blague !
You know what? You're right. | Tu sais quoi ? Tu as raison.
Here you go. | Tiens.
There you go! | Et voilà !
Is that it? | C'est tout ?
That's it for today. | C'est tout pour aujourd'hui.
So, now what? | Bon, et maintenant ?
Your turn. | À toi.
After you. | Après toi.
Same here. | Moi pareil.
Me neither. | Moi non plus.
Right back at you. | Toi aussi.
Anytime! | Quand tu veux !
Good call. | Bien vu.
Look outside! It's raining cats and dogs. | Regarde dehors ! Il pleut des cordes.
Sorry to rain on your parade, but it's canceled. | Désolé de casser l'ambiance, mais c'est annulé.
Don't rain on my parade! | Ne gâche pas ma joie !
Great. When it rains, it pours. | Super. Un malheur n'arrive jamais seul.
Don't worry. You'll be right as rain tomorrow. | Ne t'inquiète pas. Tu seras frais comme un gardon demain.
I'm saving this money for a rainy day. | Je garde cet argent pour les coups durs.
Cooking pasta? It's a breeze. | Cuire des pâtes ? C'est du gâteau.
Get your head out of the clouds! | Redescends sur terre !
You're a ray of sunshine, you know that? | Tu es un vrai rayon de soleil, tu sais ?
She got angry and stormed off. | Elle s'est fâchée et elle est partie en claquant la porte.
I can't come. I'm snowed under. | Je ne peux pas venir. Je suis débordé.
Let's brainstorm before the meeting. | Faisons un remue-méninges avant la réunion.
Stop chasing rainbows and get a job. | Arrête de courir après des chimères et trouve un travail.
He just won big, and now he wants to make it rain. | Il vient de gagner gros, et maintenant il veut jeter l'argent par les fenêtres.
The game is on, rain or shine. | Le match a lieu qu'il pleuve ou qu'il vente.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("movie", {
  words: `
humor me | fais-moi plaisir | Je sais que ça paraît bête, mais fais-moi plaisir.
what's in it for me | qu'est-ce que j'y gagne | D'accord, je t'aide. Mais qu'est-ce que j'y gagne ?
cut to the chase | aller droit au but | Allons droit au but.
spill the beans | cracher le morceau | Allez, crache le morceau !
break a leg | merde ! (pour souhaiter bonne chance) | Merde pour ce soir !
piece of cake | du gâteau | Le contrôle, c'était du gâteau.
I've got your back | je te couvre | Ne t'inquiète pas, je te couvre.
no hard feelings | sans rancune | Sans rancune, d'accord ?
long story short | pour faire court | Pour faire court, on a raté l'avion.
it's on me | c'est pour moi | Range ton portefeuille. C'est pour moi.
call it a day | s'arrêter là pour aujourd'hui | Arrêtons-nous là pour aujourd'hui.
hit the road | prendre la route | Il est temps de prendre la route.
hit the sack | aller au pieu | Je vais aller au pieu.
under the weather | patraque | Je me sens un peu patraque.
on the same page | sur la même longueur d'onde | On est sur la même longueur d'onde ?
my hands are tied | j'ai les mains liées | Désolé, j'ai les mains liées.
cut me some slack | lâche-moi un peu la grappe | Lâche-moi un peu, c'est mon premier jour.
give it a shot | tenter le coup | Pourquoi ne pas tenter le coup ?
it's not rocket science | ce n'est pas sorcier | Détends-toi, ce n'est pas sorcier.
the ball is in your court | la balle est dans ton camp | J'ai fait mon offre. La balle est dans ton camp.
I'm all ears | je suis tout ouïe | Vas-y, je suis tout ouïe.
keep me posted | tiens-moi au courant | Tiens-moi au courant.
fill me in | mets-moi au parfum | Mets-moi au parfum de ce qui s'est passé.
I owe you one | je te revaudrai ça | Merci, je te revaudrai ça.
you owe me | tu me le dois | Tu me dois bien ça.
big time | grave ; à fond | Il a merdé grave.
mess up | tout gâcher ; merder | Ne gâche pas tout cette fois.
get over it | passe à autre chose | C'était il y a des années. Passe à autre chose.
move on | tourner la page | Il est temps de tourner la page.
let it go | laisse tomber ; lâche prise | Laisse tomber.
it is what it is | c'est comme ça | C'est comme ça.
whatever it takes | coûte que coûte | Je ferai tout ce qu'il faut, coûte que coûte.
I mean it | je suis sérieux | Cette fois, je suis sérieux.
I didn't mean it | je ne l'ai pas fait exprès | Pardon, je ne l'ai pas fait exprès.
you've got to be kidding me | c'est une blague ? | C'est une blague ?!
don't get me wrong | comprends-moi bien | Comprends-moi bien, je l'aime bien.
it's up to you | c'est toi qui vois | C'est toi qui vois.
suit yourself | comme tu veux | Très bien, comme tu veux.
be my guest | je t'en prie | Je peux essayer ? Je t'en prie.
you name it | tout ce que tu veux | Pizza, sushi, tacos, tout ce que tu veux.
I'll pass | je passe mon tour | Merci, mais je passe mon tour.
rain check | partie remise | On remet ça à une autre fois ?
on second thought | à la réflexion | À la réflexion, restons à la maison.
for the record | pour info ; qu'on se le dise | Pour info, j'avais raison.
off the record | entre nous ; officieusement | Entre nous, l'affaire est conclue.
between you and me | entre nous soit dit | Entre nous soit dit, il s'en va.
my lips are sealed | motus et bouche cousue | Ne t'inquiète pas, motus et bouche cousue.
speak of the devil | quand on parle du loup | Quand on parle du loup, le voilà !
what a small world | le monde est petit | Le monde est petit !
you can say that again | tu l'as dit | Tu l'as dit !
get a grip | ressaisis-toi | Ressaisis-toi !
pull yourself together | reprends-toi | Reprends-toi.
snap out of it | secoue-toi | Secoue-toi !
keep it down | moins de bruit | Moins de bruit, des gens dorment.
keep it real | rester vrai | Reste vrai.
get real | redescends sur terre | Redescends sur terre, ça n'arrivera jamais.
in your dreams | tu rêves | Moi, sortir avec toi ? Tu rêves !
over my dead body | il faudra me passer sur le corps | Pour vendre cette maison, il faudra me passer sur le corps.
not in a million years | jamais de la vie | Jamais de la vie.
when pigs fly | quand les poules auront des dents | Il s'excusera quand les poules auront des dents.
I could use | j'aurais bien besoin de | J'aurais bien besoin d'un café.
I'm dying to | je meurs d'envie de | Je meurs d'envie de voir ce film.
I'm starving | je meurs de faim | Je meurs de faim !
I'm beat | je suis crevé | Je suis crevé. Rentrons.
I'm broke | je suis fauché | Je ne peux pas venir. Je suis fauché.
I'm stuffed | je n'en peux plus ; j'ai trop mangé | Pas de dessert pour moi, j'ai trop mangé.
you're on | pari tenu | Une course ? Pari tenu !
bring it on | vas-y, je t'attends | Vas-y, je t'attends !
game on | c'est parti | C'est parti !
it's a long shot | c'est peu probable | C'est peu probable, mais essayons.
no strings attached | sans contrepartie | C'est un cadeau, sans contrepartie.
easy does it | doucement | Doucement.
you rock | t'es génial | Merci, t'es génial !
hands down | sans conteste | C'est sans conteste la meilleure pizza de la ville.
my two cents | mon humble avis | Ce n'est que mon humble avis.
the last straw | la goutte d'eau qui fait déborder le vase | Ça a été la goutte d'eau qui fait déborder le vase.
get the hang of it | prendre le coup de main | Tu vas prendre le coup de main.
it slipped my mind | ça m'est sorti de la tête | Désolé, ça m'est sorti de la tête.
I'm on it | je m'en occupe | Répare ça. Je m'en occupe.
you do you | fais comme tu le sens | Eh, fais comme tu le sens.
been there, done that | je connais la chanson | Je connais la chanson.
what's the catch | où est l'arnaque ? | C'est gratuit ? Où est l'arnaque ?
too good to be true | trop beau pour être vrai | Ça a l'air trop beau pour être vrai.
you can't be serious | tu n'es pas sérieux | Tu n'es pas sérieux !
I'll take it from here | je prends le relais | Merci, je prends le relais.
I've had it | j'en ai marre | J'en ai marre de ce boulot !
that's the spirit | voilà qui est bien dit ; c'est ça l'esprit | C'est ça l'esprit !
look who's talking | c'est l'hôpital qui se moque de la charité | C'est l'hôpital qui se moque de la charité !
so far so good | jusqu'ici tout va bien | Jusqu'ici, tout va bien.
better late than never | mieux vaut tard que jamais | Mieux vaut tard que jamais.
no pain, no gain | on n'a rien sans rien | On n'a rien sans rien.
my treat | c'est moi qui régale | Le déjeuner, c'est moi qui régale.
how come | comment ça se fait | Comment ça se fait que tu sois en retard ?
what's the big idea | qu'est-ce qui te prend | Hé ! Qu'est-ce qui te prend ?
count on me | compte sur moi | Tu peux compter sur moi.
I've got this | je gère | Ne t'inquiète pas, je gère.
are you in or out | tu en es ou pas | Alors, tu en es ou pas ?
I'm all set | je suis paré | Merci, je suis paré.
you're telling me | à qui le dis-tu | À qui le dis-tu ! J'y étais.
I'm game | je suis partant | Karaoké ce soir ? Je suis partant.
in for a penny, in for a pound | quand le vin est tiré, il faut le boire | On est allés trop loin. Quand le vin est tiré, il faut le boire.
plan B | le plan B | Il nous faut un plan B.
exit strategy | la stratégie de sortie | Quelle est notre stratégie de sortie ?
a decoy | un leurre | Le camion était un leurre.
checkmate | échec et mat | Échec et mat. Tu as perdu.
a pawn | un pion | Je n'étais qu'un pion dans leur jeu.
one step ahead | une longueur d'avance | Ils ont toujours une longueur d'avance sur nous.
call his bluff | le prendre au mot ; dévoiler son bluff | Prenons-le au mot.
an ace up my sleeve | un atout dans ma manche | Détends-toi, j'ai un atout dans ma manche.
hold the line | tenir la ligne | Tenez la ligne ! Ne les laissez pas passer !
hold the fort | garder la boutique | Tu peux garder la boutique pendant que je sors ?
rally the troops | rallier les troupes | Il est temps de rallier les troupes.
sitting duck | une cible facile | Si on reste ici, on est des cibles faciles.
a loose cannon | un électron libre ; une tête brûlée | C'est une tête brûlée.
friendly fire | le tir ami | Deux soldats ont été touchés par un tir ami.
the front line | la première ligne ; le front | Les infirmières sont en première ligne.
reinforcements | les renforts | Les renforts arrivent.
the cavalry | la cavalerie | Détends-toi, la cavalerie est arrivée.
a ceasefire | un cessez-le-feu | Les deux camps ont accepté un cessez-le-feu.
a stalemate | une impasse | Les négociations ont abouti à une impasse.
standoff | l'impasse ; le face-à-face | Le face-à-face a duré six heures.
a truce | une trêve | Faisons une trêve.
take the bait | mordre à l'hameçon | Il n'a pas mordu à l'hameçon.
retreat | battre en retraite ; repli | Repli ! Reculez !
fall back | se replier | Repliez-vous jusqu'au pont !
outnumbered | en infériorité numérique | Nous sommes à un contre dix.
outsmart | être plus malin que | On ne peut pas les battre, mais on peut être plus malins qu'eux.
ambush | l'embuscade | C'est une embuscade !
the high ground | la position dominante ; la supériorité morale | Celui qui tient la position dominante gagne.
live to fight another day | battre en retraite pour mieux revenir | Fuyons maintenant pour revenir nous battre un autre jour.
a war room | une salle des opérations ; une cellule de crise | Nous avons installé une cellule de crise au sous-sol.
a game plan | un plan d'action | Il nous faut un plan d'action.
a dry run | une répétition ; un galop d'essai | Faisons d'abord une répétition.
go rogue | faire cavalier seul | Ne fais pas cavalier seul.
radio silence | le silence radio | Silence radio jusqu'à l'aube.
a double agent | un agent double | C'était un agent double depuis le début.
a mole | une taupe | Il y a une taupe dans l'agence.
need-to-know | strictement confidentiel | C'est strictement confidentiel.
I'm on board | je suis partant ; j'adhère | Super plan. J'adhère.
I'm onto you | je t'ai percé à jour | Bien essayé. Je t'ai percé à jour.
I'm into it | j'accroche | Cette série est bizarre, mais j'accroche.
I'm up for it | ça me tente | Une randonnée de nuit ? Ça me tente.
I'm in over my head | je suis dépassé | Honnêtement, je suis dépassé.
I'm out of it | je suis à côté de la plaque | Désolé, je suis à côté de la plaque aujourd'hui.
I'm all for it | je suis pour à cent pour cent | Un jour de congé ? Je suis pour à cent pour cent.
I'm sick of it | j'en ai ras-le-bol | J'en ai ras-le-bol !
I'm fed up | j'en ai marre | J'en ai marre de ses excuses.
I'm cool with it | ça me va | Si tu veux rester, ça me va.
I'm with you | je suis avec toi ; je te suis | Je suis avec toi sur ce coup-là.
I'm not following | je ne te suis pas | Désolé, je ne te suis pas.
I'm just looking | je regarde seulement | Non merci, je regarde seulement.
I'm all yours | je suis tout à toi | Bon, je suis tout à toi. Qu'est-ce qu'il y a ?
I'm flattered | je suis flatté | Waouh, je suis flatté.
I'm speechless | je suis sans voix | Je suis sans voix.
I'm touched | je suis touché | Je suis touché. Merci.
I'm kidding | je plaisante | Détends-toi, je plaisante !
I'm not myself today | je ne suis pas dans mon assiette aujourd'hui | Désolé, je ne suis pas dans mon assiette aujourd'hui.
it's on | c'est la guerre ; c'est parti | Oh, c'est la guerre !
it's a deal | marché conclu | Marché conclu !
you got it | ça marche | Deux cafés ? Ça marche.
got it covered | c'est réglé | Ne t'inquiète pas, c'est réglé.
I'll get it | j'y vais | Le téléphone sonne. J'y vais.
get it over with | en finir | Finissons-en.
get on with it | allez, au fait | Arrête de parler et passe au fait.
I can't help it | c'est plus fort que moi | C'est plus fort que moi. C'est trop drôle.
I'll think about it | je vais y réfléchir | Je vais y réfléchir.
I'll see what I can do | je vais voir ce que je peux faire | Laisse-moi ça. Je vais voir ce que je peux faire.
don't mention it | il n'y a pas de quoi | Il n'y a pas de quoi.
it's about time | il était temps | Te voilà ! Il était temps.
you can't miss it | tu ne peux pas le rater | C'est le grand bâtiment rouge. Tu ne peux pas le rater.
what's it to you | qu'est-ce que ça peut te faire | Qu'est-ce que ça peut te faire ?
make it quick | fais vite | Fais vite.
take it or leave it | c'est à prendre ou à laisser | C'est mon offre finale. C'est à prendre ou à laisser.
every cloud has a silver lining | à quelque chose malheur est bon | J'ai raté le bus, mais je t'ai rencontré. À quelque chose malheur est bon.
silver lining | le bon côté des choses | Le bon côté des choses, c'est que personne n'a été blessé.
a storm in a teacup | une tempête dans un verre d'eau | Détends-toi. C'est une tempête dans un verre d'eau.
weather the storm | traverser la tempête | Nous traverserons la tempête ensemble.
the perfect storm | la tempête parfaite ; le concours de circonstances | Mauvais temps, pas d'argent et voiture en panne : la tempête parfaite.
take the world by storm | conquérir le monde | Ce groupe va conquérir le monde.
a bolt from the blue | un coup de tonnerre dans un ciel bleu | Sa démission a été un coup de tonnerre dans un ciel bleu.
lightning never strikes twice | la foudre ne tombe jamais deux fois au même endroit | Détends-toi. La foudre ne tombe jamais deux fois au même endroit.
get wind of | avoir vent de | Que le patron n'ait pas vent de ça.
second wind | le second souffle | J'étais fatigué, mais j'ai retrouvé un second souffle.
throw caution to the wind | jeter toute prudence aux orties | Jetons toute prudence aux orties et allons-y !
shoot the breeze | papoter ; tailler une bavette | Viens t'asseoir tailler une bavette avec nous.
fair-weather friend | l'ami des beaux jours | Ce n'était qu'un ami des beaux jours.
under a cloud | en disgrâce ; soupçonné | Il a quitté l'entreprise en disgrâce.
snowball | faire boule de neige | Les petits problèmes peuvent vite faire boule de neige.
a snowball's chance in hell | aucune chance | Il n'a strictement aucune chance.
frosty reception | un accueil glacial | Ses parents nous ont réservé un accueil glacial.
in a fog | dans le brouillard ; dans le cirage | Désolé, je suis dans le cirage ce matin.
face like thunder | une tête de six pieds de long | Il est entré avec une tête de six pieds de long.
greased lightning | à la vitesse de l'éclair | Il a couru à la vitesse de l'éclair.
come hell or high water | contre vents et marées | J'y serai, contre vents et marées.
steal the scene | voler la vedette | Le chien risque de voler la vedette.
binge-watch | regarder d'une traite | J'ai regardé toute la série d'une traite.
a tearjerker | un mélo ; un film à faire pleurer | Ce film est un vrai mélo.
edge-of-your-seat | haletant | C'est un thriller haletant.
hit the big screen | sortir au cinéma | Le livre sortira au cinéma l'an prochain.
behind the scenes | les coulisses | Regardons la vidéo des coulisses.
happy ending | la fin heureuse | J'adore les fins heureuses.
star-studded | à la distribution prestigieuse | C'est une distribution prestigieuse.
blockbuster | le blockbuster ; le gros succès | C'était le plus gros succès de l'été.
a must-see | un incontournable | Ce film est un incontournable.
cult classic | le film culte | C'est devenu un film culte.
check your coat | déposer son manteau au vestiaire | Bienvenue au gala. Je peux prendre votre manteau ?
bear with me | patiente une seconde | Patiente une seconde, j'ai presque fini.
spill it | crache le morceau | Tu souris. Allez, crache le morceau !
you had one job | tu avais une seule chose à faire | Tu as oublié les billets ? Tu avais une seule chose à faire !
says who | qui a dit ça ? | « Tu ne peux pas t'asseoir ici. » « Ah bon, qui a dit ça ? »
don't quote me on that | ne me prends pas au mot | Je crois que ça commence à huit heures, mais ne me prends pas au mot.
play along | jouer le jeu | Joue le jeu et fais semblant d'être surpris.
indulge me | fais-moi ce plaisir | Je sais qu'il est tard, mais fais-moi ce plaisir. Encore une scène.
hear me out | écoute-moi jusqu'au bout | Avant de dire non, écoute-moi jusqu'au bout.
spare me | épargne-moi | Épargne-moi tes excuses.
your call | c'est toi qui décides | Pizza ou sushi ? C'est toi qui décides.
come again | pardon ? tu peux répéter ? | Pardon ? Tu as quitté ton travail ?
say no more | n'en dis pas plus | Tu as besoin qu'on te dépose ? N'en dis pas plus.
point taken | message reçu | Message reçu. Je ferai plus attention la prochaine fois.
not on my watch | pas tant que je suis là | Tricher à l'examen ? Pas tant que je suis là.
keep your shirt on | du calme ; ne t'énerve pas | Du calme, j'arrive !
play it cool | rester décontracté | Elle arrive. Reste décontracté.
the jig is up | les carottes sont cuites | Les carottes sont cuites. On sait que tu as pris l'argent.
go figure | va comprendre | Il déteste les chats, mais il en a adopté un. Va comprendre.
say when | dis-moi quand ça suffit | Je te sers du vin. Dis-moi quand ça suffit.
level with me | sois franc avec moi | Sois franc avec moi. On a des ennuis ?
roll with it | s'adapter ; faire avec | Les plans ont changé, alors fais avec.
`,
});

addFrench("movie", {
  phrases: `
Just humor me. | Fais-moi plaisir.
What's in it for me? | Qu'est-ce que j'y gagne ?
Let's cut to the chase. | Allons droit au but.
Spill the beans! | Crache le morceau !
Long story short, I got the job. | Pour faire court, j'ai eu le poste.
I've got your back. | Je te couvre.
You've got my word. | Tu as ma parole.
You have my word. | Je te donne ma parole.
No hard feelings? | Sans rancune ?
No hard feelings. | Sans rancune.
Dinner's on me. | Le dîner, c'est pour moi.
This one's on me. | Celle-là, c'est pour moi.
I owe you one. | Je te revaudrai ça.
You owe me big time. | Tu me dois une fière chandelle.
We're even. | On est quittes.
Let's call it a day. | Arrêtons-nous là pour aujourd'hui.
I'm going to hit the sack. | Je vais me pieuter.
I'm feeling a bit under the weather. | Je suis un peu patraque.
Are we on the same page? | On est d'accord ?
Sorry, my hands are tied. | Désolé, j'ai les mains liées.
Cut me some slack. | Lâche-moi un peu.
Give it a shot. | Tente le coup.
It's not rocket science. | Ce n'est pas sorcier.
The ball is in your court. | La balle est dans ton camp.
I'm all ears. | Je suis tout ouïe.
Keep me posted. | Tiens-moi au courant.
Fill me in. | Mets-moi au parfum.
Let it go. | Lâche prise.
Get over it. | Passe à autre chose.
It is what it is. | C'est comme ça.
Move on. | Tourne la page.
I'll do whatever it takes. | Je ferai tout ce qu'il faudra.
I mean it. | Je suis sérieux.
I didn't mean it. | Je ne l'ai pas fait exprès.
I didn't mean to hurt you. | Je ne voulais pas te faire de mal.
You've got to be kidding me. | Tu te fiches de moi.
Don't get me wrong. | Comprends-moi bien.
It's up to you. | C'est toi qui vois.
Suit yourself. | Comme tu veux.
Be my guest. | Je t'en prie.
I'll pass. | Sans moi.
Can I take a rain check? | On remet ça ?
On second thought, never mind. | À la réflexion, laisse tomber.
For the record, I was against it. | Pour info, j'étais contre.
This stays between you and me. | Ça reste entre nous.
My lips are sealed. | Je serai muet comme une tombe.
Speak of the devil. | Quand on parle du loup.
Small world! | Le monde est petit !
You can say that again. | Tu l'as dit.
Get a grip! | Ressaisis-toi !
Pull yourself together. | Reprends-toi.
Snap out of it! | Secoue-toi !
Keep it down! | Moins fort !
Get real. | Sois réaliste.
In your dreams! | Tu peux toujours rêver !
Over my dead body! | Il faudra me passer sur le corps !
Not in a million years. | Jamais de la vie.
When pigs fly. | Quand les poules auront des dents.
I could use a drink. | Je boirais bien un verre.
I'm dying to know. | Je meurs d'envie de savoir.
I'm starving. | Je meurs de faim.
I'm beat. | Je suis crevé.
I'm broke. | Je suis fauché.
You're on! | Pari tenu !
Bring it on! | Vas-y, je t'attends !
It's a long shot. | C'est peu probable.
What's the catch? | Où est le piège ?
It's too good to be true. | C'est trop beau pour être vrai.
You can't be serious. | Tu ne peux pas être sérieux.
I've had it! | J'en ai marre !
That's the last straw. | C'est la goutte d'eau qui fait déborder le vase.
Look who's talking. | C'est l'hôpital qui se moque de la charité.
That's the spirit! | Voilà, c'est ça l'esprit !
So far, so good. | Jusqu'ici, tout va bien.
Better late than never. | Mieux vaut tard que jamais.
How come? | Comment ça se fait ?
What's the big idea? | Qu'est-ce qui te prend ?
You can count on me. | Tu peux compter sur moi.
I've got this. | Je gère.
Leave it to me. | Laisse-moi faire.
I'm on it. | Je m'en occupe.
You rock! | Tu assures !
Hands down, the best day ever. | Sans conteste, la meilleure journée de ma vie.
Just my two cents. | Ce n'est que mon avis.
You'll get the hang of it. | Tu vas prendre le coup.
Sorry, it slipped my mind. | Désolé, ça m'est sorti de la tête.
Been there, done that. | Je connais.
You do you. | Fais comme tu le sens.
Are you in or out? | Tu en es ou pas ?
I'm game. | Je suis partant.
I'm all set. | Je suis prêt.
What do you want from me? | Qu'est-ce que tu veux de moi ?
Who do you think you are? | Pour qui tu te prends ?
Don't you dare! | Ne t'avise pas de faire ça !
How dare you! | Comment oses-tu !
Get off my back! | Lâche-moi les baskets !
Mind your own business. | Occupe-toi de tes oignons.
I'm not in the mood. | Je ne suis pas d'humeur.
Make yourself at home. | Fais comme chez toi.
Hang in there. Things will get better. | Tiens bon. Ça va s'arranger.
In for a penny, in for a pound. | Quand le vin est tiré, il faut le boire.
We've come this far. In for a penny, in for a pound. | On est allés trop loin. Quand le vin est tiré, il faut le boire.
What's the game plan? | Quel est le plan ?
We need a plan B. | Il nous faut un plan B.
What's our exit strategy? | Quelle est notre porte de sortie ?
I'm calling your bluff. | Je te prends au mot.
I've still got an ace up my sleeve. | J'ai encore un atout dans ma manche.
Hold the line! | Tenez bon !
Can you hold the fort for an hour? | Tu peux garder la boutique pendant une heure ?
It's an ambush! | C'est une embuscade !
Fall back! | Repliez-vous !
We're outnumbered. | Ils sont plus nombreux que nous.
Reinforcements are on the way. | Les renforts arrivent.
The cavalry is here! | La cavalerie est là !
He didn't take the bait. | Il n'a pas mordu à l'hameçon.
It's a trap! | C'est un piège ! (Star Wars : Le Retour du Jedi)
Let's call a truce. | Faisons une trêve.
They're always one step ahead of us. | Ils ont toujours une longueur d'avance sur nous.
I was just a pawn in their game. | Je n'étais qu'un pion dans leur jeu.
Checkmate. | Échec et mat.
Let's live to fight another day. | Battons en retraite pour mieux revenir.
Keep radio silence. | Gardez le silence radio.
This is need-to-know only. | C'est strictement confidentiel.
Don't go rogue on me. | Ne fais pas cavalier seul.
There's a mole in our team. | Il y a une taupe dans notre équipe.
Let's do a dry run first. | Faisons d'abord une répétition.
We can't outgun them, but we can outsmart them. | On ne peut pas les battre en puissance de feu, mais on peut les battre en ruse.
Count me in. I'm on board. | Compte sur moi. J'en suis.
Nice try. I'm onto you. | Bien essayé. Je t'ai percé à jour.
I wasn't sure at first, but now I'm really into it. | Je n'étais pas sûr au début, mais maintenant j'accroche vraiment.
A road trip? I'm up for it. | Un road trip ? Ça me tente.
I took the job, but I'm in over my head. | J'ai accepté le poste, mais je suis dépassé.
Sorry, I'm a little out of it today. | Désolé, je suis un peu à côté de la plaque aujourd'hui.
If it saves money, I'm all for it. | Si ça fait économiser de l'argent, je suis pour.
I'm sick and tired of it. | J'en ai vraiment ras-le-bol.
I'm fed up with this traffic. | J'en ai marre de ces embouteillages.
If you're cool with it, so am I. | Si ça te va, ça me va aussi.
I'm with you on that. | Je suis d'accord avec toi là-dessus.
Sorry, I'm not following you. | Désolé, je ne te suis pas.
I'm just looking, thanks. | Je regarde seulement, merci.
I'm all yours. What do you need? | Je suis tout à toi. De quoi as-tu besoin ?
I'm flattered, but no thanks. | Je suis flatté, mais non merci.
I'm speechless. | Je suis sans voix.
I'm really touched. | Je suis vraiment touché.
I'm kidding! Relax. | Je plaisante ! Détends-toi.
Sorry, I'm not myself today. | Désolé, je ne suis pas dans mon assiette aujourd'hui.
Oh, it's on! | Oh, c'est la guerre !
It's a deal. | Marché conclu.
You got it, boss. | Ça marche, chef.
Relax. I've got it covered. | Détends-toi. C'est réglé.
I'll get it! | J'y vais !
Let's just get it over with. | Finissons-en.
Get on with it! | Allez, vas-y !
Sorry, I can't help it. | Désolé, c'est plus fort que moi.
Let me think about it. | Laisse-moi réfléchir.
I'll see what I can do. | Je vais voir ce que je peux faire.
Don't mention it. | Il n'y a pas de quoi.
It's about time! | Il était temps !
It's right there. You can't miss it. | C'est juste là. Tu ne peux pas le rater.
What's it to you? | Qu'est-ce que ça peut te faire ?
Make it quick. I'm busy. | Fais vite. Je suis occupé.
Take it or leave it. | C'est à prendre ou à laisser.
Look on the bright side. Every cloud has a silver lining. | Vois le bon côté. À quelque chose malheur est bon.
At least there's a silver lining. | Au moins, il y a un bon côté.
It's just a storm in a teacup. It'll blow over. | C'est une tempête dans un verre d'eau. Ça va passer.
We've been through worse. We'll weather this storm too. | On a connu pire. On traversera aussi cette tempête.
Everything went wrong at once. It was the perfect storm. | Tout a mal tourné en même temps. Un vrai concours de circonstances.
Her first movie took the world by storm. | Son premier film a conquis le monde.
The news hit me like a bolt from the blue. | La nouvelle m'a fait l'effet d'un coup de tonnerre.
Don't worry. Lightning never strikes twice. | Ne t'inquiète pas. La foudre ne tombe jamais deux fois au même endroit.
How did you get wind of it? | Comment en as-tu eu vent ?
After lunch, I got my second wind. | Après le déjeuner, j'ai retrouvé un second souffle.
For once, let's throw caution to the wind. | Pour une fois, envoyons la prudence aux orties.
We sat on the porch, just shooting the breeze. | On s'est assis sous le porche à papoter.
Where are your fair-weather friends now? | Où sont passés tes amis des beaux jours ?
He's been under a cloud since the scandal. | Il est en disgrâce depuis le scandale.
One small lie snowballed into a disaster. | Un petit mensonge a fait boule de neige jusqu'à la catastrophe.
You don't have a snowball's chance in hell of winning. | Tu n'as strictement aucune chance de gagner.
We got a pretty frosty reception. | On a eu un accueil plutôt glacial.
I've been in a fog all day. | J'ai été dans le brouillard toute la journée.
Uh-oh. Dad's got a face like thunder. | Oh oh. Papa fait une tête de six pieds de long.
He was out the door like greased lightning. | Il a filé comme l'éclair.
Come hell or high water, we finish this tonight. | Contre vents et marées, on finit ça ce soir.
`,
});

// ---------- 高級 Advanced ----------
addFrench("movie", {
  words: `
bite the bullet | serrer les dents | Je vais serrer les dents et l'appeler.
the elephant in the room | le sujet qui fâche | Parlons du sujet qui fâche.
jump the gun | brûler les étapes | Ne brûlons pas les étapes.
read the room | sentir l'ambiance | Sens un peu l'ambiance, mec.
throw him under the bus | le jeter en pâture | Ne le jette pas en pâture.
drop the ball | se louper ; laisser tomber le ballon | Ne te loupe pas sur ce coup-là.
pull some strings | faire jouer ses relations | Je peux faire jouer mes relations.
play devil's advocate | se faire l'avocat du diable | Laisse-moi me faire l'avocat du diable.
beat around the bush | tourner autour du pot | Ne tourne pas autour du pot.
the whole nine yards | le grand jeu | Ils ont sorti le grand jeu.
back to square one | retour à la case départ | Retour à la case départ.
a blessing in disguise | un mal pour un bien | Perdre ce travail a été un mal pour un bien.
cross that bridge when we come to it | chaque chose en son temps | Chaque chose en son temps, on verra le moment venu.
add insult to injury | pour couronner le tout | Pour couronner le tout, il s'est mis à pleuvoir.
on thin ice | sur la corde raide | Tu es sur la corde raide.
burn bridges | couper les ponts | Ne coupe pas les ponts avec ton ancien patron.
call the shots | mener la barque | C'est moi qui mène la barque ici.
the tip of the iceberg | la partie émergée de l'iceberg | Ce n'est que la partie émergée de l'iceberg.
a game changer | ce qui change la donne | Cette appli change la donne.
the bottom line | l'essentiel ; le fond du problème | L'essentiel, c'est qu'il nous faut plus d'argent.
get cold feet | se dégonfler | Ne te dégonfle pas maintenant.
let the cat out of the bag | vendre la mèche | Qui a vendu la mèche ?
sit tight | ne pas bouger ; patienter | Ne bouge pas, les secours arrivent.
lay low | se faire oublier | On devrait se faire oublier un moment.
cover for me | me couvrir | Tu peux me couvrir ?
take the fall | porter le chapeau | Je ne porterai pas le chapeau pour toi.
come clean | passer aux aveux | Il est temps de passer aux aveux.
it's a long story | c'est une longue histoire | C'est une longue histoire.
I'll make it up to you | je me rattraperai | Je suis désolé. Je me rattraperai.
I wouldn't count on it | n'y compte pas trop | Il viendra ? N'y compte pas trop.
don't push your luck | n'abuse pas | N'abuse pas.
you're pushing it | tu pousses le bouchon | Là, tu pousses le bouchon.
it's not what it looks like | ce n'est pas ce que tu crois | Attends ! Ce n'est pas ce que tu crois !
we need to talk | il faut qu'on parle | Il faut qu'on parle.
I've got a bad feeling about this | je le sens mal | Je le sens mal.
trust no one | ne fais confiance à personne | Ne fais confiance à personne.
it's now or never | c'est maintenant ou jamais | C'est maintenant ou jamais.
there's no turning back | on ne peut plus faire marche arrière | Une fois dedans, on ne pourra plus faire marche arrière.
we've got company | on a de la visite | Baissez la tête, on a de la visite.
cover me | couvre-moi | Couvre-moi, j'y vais !
stand down | baissez vos armes ; repos | Baissez vos armes ! C'est fini.
hold your fire | cessez le feu | Cessez le feu !
copy that | bien reçu | Bien reçu.
roger that | reçu cinq sur cinq | Reçu cinq sur cinq, terminé.
over and out | terminé | Terminé.
game over | c'est fini ; partie terminée | Pour lui, c'est fini.
you're fired | vous êtes viré | Vous êtes viré !
I quit | je démissionne | Je démissionne !
case closed | affaire classée | Affaire classée.
mission accomplished | mission accomplie | Mission accomplie !
plot twist | le rebondissement | Rebondissement : c'est le majordome qui l'a fait.
spoiler alert | attention spoiler | Attention spoiler : il meurt à la fin.
cliffhanger | le suspense de fin | La saison s'est terminée sur un suspense.
the moment of truth | le moment de vérité | C'est le moment de vérité.
in a nutshell | en un mot | En un mot, on est fauchés.
by the book | dans les règles | On fait ça dans les règles.
off the hook | tiré d'affaire | Tu es tiré d'affaire.
on the house | offert par la maison | Les boissons sont offertes par la maison.
a sight for sore eyes | un plaisir pour les yeux | Quel plaisir de te voir !
break the ice | briser la glace | Une blague peut briser la glace.
hit the nail on the head | mettre le doigt dessus | Tu as mis le doigt dessus.
not my cup of tea | pas ma tasse de thé | L'opéra, ce n'est pas ma tasse de thé.
cost an arm and a leg | coûter les yeux de la tête | Cette voiture a coûté les yeux de la tête.
once in a blue moon | tous les trente-six du mois | Il appelle tous les trente-six du mois.
the real deal | du vrai de vrai | Ce type, c'est du vrai de vrai.
a piece of work | un sacré numéro | Ton patron est un sacré numéro.
a wake-up call | un signal d'alarme | L'accident a été un signal d'alarme.
a no-brainer | une évidence | Accepter le poste, c'est une évidence.
up in the air | en suspens | Nos projets sont encore en suspens.
the last thing I need | la dernière chose dont j'ai besoin | La dernière chose dont j'ai besoin, c'est plus de devoirs.
get your act together | se reprendre en main | Reprends-toi en main !
on the tip of my tongue | sur le bout de la langue | J'ai son nom sur le bout de la langue.
don't hold your breath | ne compte pas dessus | Il va te rembourser ? N'y compte pas.
miss the boat | rater le coche | Dépêche-toi, sinon tu vas rater le coche.
see eye to eye | voir les choses du même œil | Nous ne voyons pas les choses du même œil.
hold your horses | pas si vite | Pas si vite !
I'm out of here | je me tire | C'est bon, je me tire.
it takes two to tango | il faut être deux pour danser le tango | Il faut être deux pour danser le tango.
a bitter pill to swallow | une pilule dure à avaler | La défaite a été une pilule dure à avaler.
the writing is on the wall | les carottes sont cuites | Les carottes sont cuites.
the devil is in the details | le diable se cache dans les détails | Le diable se cache dans les détails.
when in Rome | à Rome, fais comme les Romains | À Rome, fais comme les Romains.
keep your cool | garder son sang-froid | Garde ton sang-froid.
lose your temper | s'emporter | Ne t'emporte pas.
pick your battles | choisir ses combats | Choisis tes combats.
you're on your own | tu te débrouilles | À partir d'ici, tu te débrouilles.
I'm not going anywhere | je ne bouge pas d'ici | Je ne bouge pas d'ici.
we'll see about that | c'est ce qu'on va voir | C'est ce qu'on va voir.
don't even think about it | n'y pense même pas | N'y pense même pas.
make my day | vas-y, fais-moi plaisir | Vas-y, fais-moi plaisir.
no offense | sans vouloir te vexer | Sans vouloir te vexer, tu as tort.
none taken | je ne suis pas vexé | Sans vouloir te vexer. — Je ne le suis pas.
with all due respect | sauf votre respect | Sauf votre respect, monsieur, c'est une erreur.
agree to disagree | accepter nos désaccords | Acceptons nos désaccords.
get the ball rolling | lancer les choses | Lançons les choses.
a small price to pay | un faible prix à payer | C'est un faible prix à payer pour la liberté.
sleep on it | la nuit porte conseil | Laisse-moi la nuit pour y réfléchir.
the calm before the storm | le calme avant la tempête | C'est le calme avant la tempête.
out of the blue | sans crier gare | Elle m'a appelé sans crier gare.
the point of no return | le point de non-retour | Nous avons atteint le point de non-retour.
burn the boats | brûler ses vaisseaux | Parfois, il faut brûler ses vaisseaux.
cross the Rubicon | franchir le Rubicon | Une fois qu'on signe, on franchit le Rubicon.
the die is cast | les dés sont jetés | Les dés sont jetés. Pas de retour en arrière.
divide and conquer | diviser pour régner | Leur stratégie, c'était diviser pour régner.
a war of attrition | une guerre d'usure | C'est devenu une guerre d'usure.
scorched earth | la terre brûlée | Ils ont pratiqué la politique de la terre brûlée.
a Pyrrhic victory | une victoire à la Pyrrhus | C'était une victoire à la Pyrrhus.
a Trojan horse | un cheval de Troie | L'appli gratuite était un cheval de Troie.
a double-edged sword | une arme à double tranchant | La célébrité est une arme à double tranchant.
a pincer movement | une manœuvre en tenaille | L'armée a lancé une manœuvre en tenaille.
outflank | déborder ; prendre de vitesse | Ils ont essayé de déborder l'entreprise rivale.
outmaneuver | déjouer ; être plus habile que | Elle a déjoué tous ses adversaires.
endgame | la fin de partie ; le but final | Quel est ton but final ?
play the long game | voir sur le long terme | Les investisseurs malins voient sur le long terme.
lose the battle but win the war | perdre une bataille mais gagner la guerre | On perdra peut-être une bataille, mais on gagnera la guerre.
the enemy of my enemy is my friend | les ennemis de mes ennemis sont mes amis | Les ennemis de mes ennemis sont mes amis.
the fog of war | le brouillard de la guerre | Dans le brouillard de la guerre, les erreurs arrivent.
a tactical retreat | un repli tactique | Ce n'est pas une fuite. C'est un repli tactique.
a calculated risk | un risque calculé | C'est un risque calculé.
a contingency plan | un plan de secours | Ayez toujours un plan de secours.
a feint | une feinte | L'attaque au nord était une feinte.
a diversion | une diversion | Crée une diversion !
reconnaissance | la reconnaissance | Il nous faut d'abord une meilleure reconnaissance.
take no prisoners | ne pas faire de quartier | Elle joue pour gagner et ne fait pas de quartier.
dig in your heels | camper sur ses positions | Ne campe pas sur tes positions pour des broutilles.
close ranks | serrer les rangs | Attaqué, le parti va serrer les rangs.
last stand | le baroud d'honneur | C'est notre baroud d'honneur.
a suicide mission | une mission suicide | C'est une mission suicide.
a power vacuum | un vide de pouvoir | Sa mort a laissé un vide de pouvoir.
leverage | le levier ; le moyen de pression | Pour l'instant, nous n'avons aucun moyen de pression.
a bargaining chip | une monnaie d'échange | Ils ont utilisé les otages comme monnaie d'échange.
a red line | une ligne rouge | C'est une ligne rouge pour nous.
deterrence | la dissuasion | La dissuasion nucléaire a maintenu la paix.
mutually assured destruction | la destruction mutuelle assurée | La destruction mutuelle assurée a tenu les deux camps en respect.
a zero-sum game | un jeu à somme nulle | Les affaires ne sont pas un jeu à somme nulle.
shock and awe | le choc et l'effroi | C'était une campagne de « choc et effroi ».
collateral damage | les dommages collatéraux | Des civils sont devenus des dommages collatéraux.
smoking gun | la preuve irréfutable | Nous avons enfin trouvé la preuve irréfutable.
plausible deniability | le déni plausible | Laisse le patron en dehors de ça, pour le déni plausible.
a sleeper agent | un agent dormant | C'était un agent dormant depuis des années.
the eleventh hour | la dernière minute | L'accord a été sauvé à la dernière minute.
Achilles' heel | le talon d'Achille | L'orgueil est son talon d'Achille.
a war of nerves | une guerre des nerfs | La négociation est devenue une guerre des nerfs.
psychological warfare | la guerre psychologique | C'est de la guerre psychologique.
I'm over the moon | je suis aux anges | Je suis aux anges avec cette nouvelle.
I'm on the fence | j'hésite | J'hésite à déménager.
I'm on cloud nine | je suis sur un petit nuage | Elle a dit oui ! Je suis sur un petit nuage.
I'm at my wits' end | je suis à bout | Je suis à bout avec cette imprimante.
I'm at a loss for words | les mots me manquent | Les mots me manquent.
I'm on a roll | je suis sur une bonne lancée | Trois victoires d'affilée. Je suis sur une bonne lancée !
I'm off the clock | j'ai fini ma journée | Ne m'appelle pas pour le travail. J'ai fini ma journée.
I'm swamped | je suis débordé | Je suis débordé cette semaine.
I'm running on empty | je suis à bout de forces | Je suis à bout de forces.
I'm all over it | je suis dessus | Ne t'inquiète pas pour le rapport. Je suis dessus.
I'm calling it | je le prédis | Je le prédis : ils vont se marier.
I'm not cut out for this | je ne suis pas fait pour ça | Je ne suis pas fait pour ce métier.
I'm drawing a blank | j'ai un trou | Désolé, j'ai un trou.
I'm not losing sleep over it | je n'en perds pas le sommeil | Il est fâché, mais je n'en perds pas le sommeil.
I'm beside myself | je suis dans tous mes états | Je suis dans tous mes états tellement je m'inquiète.
I'm in the zone | je suis dans ma bulle | Ne me parle pas. Je suis dans ma bulle.
take it with a grain of salt | prendre avec des pincettes | Prends ça avec des pincettes.
get over yourself | redescends de ton piédestal | Oh, redescends de ton piédestal.
own it | assumer | Tu as fait une erreur. Assume.
nail it | assurer ; réussir à fond | Tu vas assurer.
crush it | tout déchirer | Tu vas tout déchirer !
wing it | improviser | Je ne me suis pas préparé. Je vais improviser.
blow it | tout faire foirer | Ne fais pas tout foirer cette fois.
fake it till you make it | faire semblant jusqu'à y arriver | Fais semblant jusqu'à ce que tu y arrives.
hit it off | accrocher tout de suite | Le courant est passé tout de suite.
call it even | être quittes | Disons qu'on est quittes.
call it quits | en rester là | Restons-en là pour aujourd'hui.
let it slide | laisser passer | Je laisse passer cette fois.
rub it in | remuer le couteau dans la plaie | Bon, j'ai perdu. Pas la peine d'en rajouter.
sugarcoat it | enrober la pilule | N'enrobe pas la pilule. Dis-moi la vérité.
spit it out | accouche | Allez, accouche !
cut it close | s'y prendre à la dernière minute | Ne t'y prends pas à la dernière minute la prochaine fois.
step on it | appuyer sur le champignon | Appuie sur le champignon ! On est en retard.
zip it | ferme-la | Ferme-la !
save it | garde ça pour toi | Garde ça pour toi. Je ne veux pas entendre tes excuses.
rain on me | qu'il pleuve sur moi (titre d'une chanson de Lady Gaga et Ariana Grande, 2020) | Vas-y. Qu'il pleuve sur moi. Je peux encaisser.
it never rains but it pours | un malheur n'arrive jamais seul | D'abord l'inondation, puis l'incendie. Un malheur n'arrive jamais seul.
any port in a storm | faute de grives, on mange des merles | Ce n'est pas un super hôtel, mais faute de grives, on mange des merles.
know which way the wind blows | savoir d'où vient le vent | Un bon politicien apprend à savoir d'où vient le vent.
sail close to the wind | jouer avec le feu ; frôler l'illégalité | Fais attention. Ne joue pas avec le feu.
the winds of change | le vent du changement | Le vent du changement souffle sur l'industrie.
take the wind out of his sails | lui couper l'herbe sous le pied | Rien ne peut lui couper l'herbe sous le pied.
a breath of fresh air | une bouffée d'air frais | Notre nouvel entraîneur est une bouffée d'air frais.
cloud your judgment | troubler le jugement | Ne laisse pas la colère troubler ton jugement.
the eye of the storm | l'œil du cyclone | En ce moment, on est dans l'œil du cyclone.
batten down the hatches | se préparer à essuyer la tempête | Préparez-vous à essuyer la tempête. Le patron est furieux.
a tempest in a teapot | une tempête dans un verre d'eau | Cette dispute, c'est une tempête dans un verre d'eau.
blow hot and cold | souffler le chaud et le froid | Ne souffle pas le chaud et le froid avec moi.
a storm brewing | l'orage qui gronde | Je sens l'orage gronder dans ce bureau.
put it on ice | mettre au placard ; mettre en veilleuse | Mettons-le en veilleuse jusqu'à l'an prochain.
make hay while the sun shines | battre le fer pendant qu'il est chaud | Les affaires marchent, alors battons le fer pendant qu'il est chaud.
a place in the sun | une place au soleil | Tout le monde veut sa place au soleil.
the calm after the storm | le calme après la tempête | Profite du calme après la tempête.
throw shade | lancer des piques | Ne lui lance pas de piques. Elle a beaucoup travaillé.
rain down | pleuvoir | Regarde les confettis pleuvoir sur les gagnants.
it's showtime | place au spectacle | Place au spectacle, tout le monde !
the show must go on | le spectacle doit continuer | Le spectacle doit continuer.
lights, camera, action | silence, moteur, action | Silence, moteur, action !
play it by ear | improviser ; voir sur le moment | On verra sur le moment.
in the limelight | sous les projecteurs | Elle adore être sous les projecteurs.
upstage | voler la vedette à | Ne vole pas la vedette à la mariée.
a hard act to follow | difficile à égaler | Son discours sera difficile à égaler.
stage fright | le trac | J'ai le trac avant les discours.
typecast | cantonner à un rôle | Il est toujours cantonné au rôle du méchant.
waiting in the wings | prêt à prendre la relève | Une nouvelle star attend dans les coulisses.
jump the shark | perdre le fil ; s'essouffler | Les séries qui durent longtemps finissent souvent par s'essouffler.
it's a wrap | c'est dans la boîte | C'est bon, c'est dans la boîte !
get your fifteen minutes of fame | avoir son quart d'heure de célébrité | Poste une vidéo drôle et tu auras ton quart d'heure de célébrité.
larger than life | plus grand que nature | Le héros est plus grand que nature.
bring the house down | faire crouler la salle sous les applaudissements | Sa chanson va faire crouler la salle sous les applaudissements.
we're not in Kansas anymore | on n'est plus au Kansas | Regarde cet endroit. On n'est plus au Kansas.
you can't handle the truth | tu ne supportes pas la vérité | Tu veux savoir ? Très bien, mais tu ne supportes pas la vérité.
whatever floats your boat | si ça te chante | De l'ananas sur la pizza ? Si ça te chante.
talk me down | me raisonner ; me calmer | Je suis sur le point de démissionner. Raisonne-moi, s'il te plaît.
`,
  phrases: `
Let's address the elephant in the room. | Abordons le sujet qui fâche.
I'll just have to bite the bullet. | Je vais devoir serrer les dents.
Let's not jump the gun. | Ne brûlons pas les étapes.
Read the room! | Sens un peu l'ambiance !
Don't throw me under the bus. | Ne me jette pas en pâture.
Somebody dropped the ball. | Quelqu'un s'est loupé.
I can pull a few strings. | Je peux faire jouer quelques relations.
Let me play devil's advocate for a second. | Laisse-moi me faire l'avocat du diable une seconde.
Stop beating around the bush. | Arrête de tourner autour du pot.
We're back to square one. | Retour à la case départ.
It was a blessing in disguise. | C'était un mal pour un bien.
We'll cross that bridge when we come to it. | Chaque chose en son temps.
You're on thin ice. | Tu es sur la corde raide.
Don't burn your bridges. | Ne coupe pas les ponts.
I call the shots around here. | C'est moi qui commande ici.
That's just the tip of the iceberg. | Ce n'est que la partie émergée de l'iceberg.
The bottom line is, we're out of time. | Le fond du problème, c'est qu'on n'a plus le temps.
He's getting cold feet. | Il commence à se dégonfler.
Who let the cat out of the bag? | Qui a vendu la mèche ?
Sit tight. I'm on my way. | Ne bouge pas. J'arrive.
We need to lay low for a while. | Il faut qu'on se fasse oublier un moment.
Can you cover for me? | Tu peux me couvrir ?
I'm not taking the fall for this. | Je ne vais pas porter le chapeau.
It's time to come clean. | Il est temps de tout avouer.
It's a long story. | C'est une longue histoire.
I'll make it up to you, I promise. | Je me rattraperai, promis.
I wouldn't count on it. | Je n'y compterais pas trop.
Don't push your luck. | N'abuse pas.
It's not what it looks like! | Ce n'est pas ce que tu crois !
We need to talk. | Il faut qu'on parle.
I've got a bad feeling about this. | Je le sens mal.
Trust no one. | Ne fais confiance à personne.
It's now or never. | C'est maintenant ou jamais.
There's no turning back now. | On ne peut plus faire marche arrière.
We've got company. | On a de la visite.
Cover me! | Couvre-moi !
Hold your fire! | Cessez le feu !
Copy that. | Bien reçu.
Roger that. Over and out. | Reçu cinq sur cinq. Terminé.
You're fired! | Vous êtes viré !
I quit! | Je démissionne !
Case closed. | Affaire classée.
Mission accomplished. | Mission accomplie.
Plot twist! | Coup de théâtre !
Spoiler alert! | Attention, spoiler !
Don't spoil the ending! | Ne divulgâche pas la fin !
It ended on a cliffhanger. | Ça s'est terminé sur un suspense insoutenable.
This is the moment of truth. | C'est le moment de vérité.
In a nutshell, we're in trouble. | En un mot, on a des ennuis.
We do this by the book. | On fait ça dans les règles.
You're off the hook. | Tu es tiré d'affaire.
Drinks are on the house! | C'est la maison qui offre les boissons !
You're a sight for sore eyes. | Ça fait plaisir de te voir.
You hit the nail on the head. | Tu as mis le doigt dessus.
It's not my cup of tea. | Ce n'est pas ma tasse de thé.
It cost me an arm and a leg. | Ça m'a coûté les yeux de la tête.
He's the real deal. | C'est du vrai de vrai.
She's a real piece of work. | C'est un sacré numéro.
That was a wake-up call. | Ça a été un signal d'alarme.
It's a no-brainer. | C'est une évidence.
Everything is still up in the air. | Tout est encore en suspens.
Get your act together! | Reprends-toi en main !
It's on the tip of my tongue. | Je l'ai sur le bout de la langue.
Don't hold your breath. | N'y compte pas trop.
Hold your horses! | Pas si vite !
I'm out of here. | Je me tire.
It takes two to tango. | Il faut être deux pour danser le tango.
The writing is on the wall. | Les carottes sont cuites.
With all due respect, you're wrong. | Sauf votre respect, vous avez tort.
Let's agree to disagree. | Acceptons nos désaccords.
No offense. | Sans vouloir te vexer.
None taken. | Je ne suis pas vexé.
We'll see about that. | C'est ce qu'on va voir.
Don't even think about it. | N'y pense même pas.
Go ahead, make my day. | Vas-y, fais-moi plaisir. (Le Retour de l'inspecteur Harry)
Let me sleep on it. | La nuit porte conseil.
It came out of nowhere. | C'est arrivé sans crier gare.
This is the calm before the storm. | C'est le calme avant la tempête.
May the Force be with you. | Que la Force soit avec toi. (Star Wars)
I'll be back. | Je reviendrai. (Terminator)
Houston, we have a problem. | Houston, nous avons un problème. (Apollo 13)
Here's looking at you, kid. | À la tienne, petite. (Casablanca)
You can't handle the truth! | La vérité, vous ne pouvez pas la supporter ! (Des hommes d'honneur)
Life is like a box of chocolates. | La vie, c'est comme une boîte de chocolats. (Forrest Gump)
I'm the king of the world! | Je suis le roi du monde ! (Titanic)
Show me the money! | Montre-moi le fric ! (Jerry Maguire)
You had me at hello. | Tu m'as eu dès le bonjour. (Jerry Maguire)
To infinity and beyond! | Vers l'infini et au-delà ! (Toy Story)
Why so serious? | Pourquoi tant de sérieux ? (The Dark Knight)
I see dead people. | Je vois des gens qui sont morts. (Sixième Sens)
There's no place like home. | Rien ne vaut son chez-soi. (Le Magicien d'Oz)
Just keep swimming. | Continue de nager. (Le Monde de Nemo)
Keep your friends close, but your enemies closer. | Sois proche de tes amis, et plus encore de tes ennemis. (Le Parrain, 2e partie)
I'm going to make him an offer he can't refuse. | Je vais lui faire une offre qu'il ne pourra pas refuser. (Le Parrain)
You're gonna need a bigger boat. | Il va nous falloir un plus gros bateau. (Les Dents de la mer)
Carpe diem. Seize the day. | Carpe diem. Profitez du jour présent. (Le Cercle des poètes disparus)
With great power comes great responsibility. | Un grand pouvoir implique de grandes responsabilités. (Spider-Man)
Winter is coming. | L'hiver vient. (Game of Thrones)
How you doin'? | Comment tu vas ? (pour draguer — Friends)
We were on a break! | On faisait une pause ! (Friends)
We've burned our boats. There's no going back. | Nous avons brûlé nos vaisseaux. Pas de retour possible.
We've crossed the Rubicon. | Nous avons franchi le Rubicon.
The die is cast. | Les dés sont jetés.
Divide and conquer. | Diviser pour régner.
This is turning into a war of attrition. | Ça tourne à la guerre d'usure.
It was a Pyrrhic victory. | C'était une victoire à la Pyrrhus.
Fame is a double-edged sword. | La célébrité est une arme à double tranchant.
What's your endgame? | Quel est ton but final ?
She's playing the long game. | Elle voit sur le long terme.
We may lose this battle, but we'll win the war. | Nous perdrons peut-être cette bataille, mais nous gagnerons la guerre.
The enemy of my enemy is my friend. | Les ennemis de mes ennemis sont mes amis.
It's a calculated risk. | C'est un risque calculé.
Create a diversion! | Crée une diversion !
That's a red line for us. | C'est une ligne rouge pour nous.
It's not a zero-sum game. | Ce n'est pas un jeu à somme nulle.
We found the smoking gun. | Nous avons trouvé la preuve irréfutable.
It all came down to the eleventh hour. | Tout s'est joué à la dernière minute.
This is our last stand. | C'est notre baroud d'honneur.
All warfare is based on deception. | Tout l'art de la guerre est fondé sur la duperie. (L'Art de la guerre, Sun Tzu)
If you know the enemy and know yourself, you need not fear the result of a hundred battles. | Connais l'ennemi et connais-toi toi-même, et tu ne craindras pas l'issue de cent batailles. (L'Art de la guerre)
Every battle is won before it is ever fought. | Chaque bataille est gagnée avant même d'être livrée. (Wall Street)
I love the smell of napalm in the morning. | J'adore l'odeur du napalm au petit matin. (Apocalypse Now)
Gentlemen, you can't fight in here! This is the War Room! | Messieurs, on ne se bat pas ici ! C'est la salle de guerre ! (Docteur Folamour)
A strange game. The only winning move is not to play. | Un jeu étrange. La seule façon de gagner, c'est de ne pas jouer. (WarGames, 1983)
Failure is not an option. | L'échec n'est pas une option. (Apollo 13)
Earn this. | Méritez-le. (Il faut sauver le soldat Ryan)
This is Sparta! | C'est Sparte ! (300)
At my signal, unleash hell. | À mon signal, déchaînez les enfers. (Gladiator)
What we do in life echoes in eternity. | Ce que l'on fait dans sa vie résonne dans l'éternité. (Gladiator)
Are you not entertained? | N'êtes-vous pas divertis ? (Gladiator)
Strength and honor. | Force et honneur. (Gladiator)
They may take our lives, but they'll never take our freedom! | Ils peuvent nous ôter la vie, mais jamais ils ne nous ôteront notre liberté ! (Braveheart)
Every man dies, not every man really lives. | Tous les hommes meurent, mais tous ne vivent pas vraiment. (Braveheart)
We shall never surrender. | Nous ne nous rendrons jamais. (Les Heures sombres)
We few, we happy few, we band of brothers. | Nous, peu nombreux, heureux petit nombre, bande de frères. (Henry V)
Once more unto the breach, dear friends, once more. | Encore une fois à la brèche, chers amis, encore une fois ! (Henry V)
Never tell me the odds! | Ne me dis jamais mes chances ! (L'Empire contre-attaque)
It's over, Anakin! I have the high ground! | C'est fini, Anakin ! J'ai l'avantage du terrain ! (La Revanche des Sith)
When you play the game of thrones, you win or you die. | Au jeu des trônes, on gagne ou on meurt. (Game of Thrones)
Chaos isn't a pit. Chaos is a ladder. | Le chaos n'est pas un gouffre. Le chaos est une échelle. (Game of Thrones)
It's not personal. It's strictly business. | Ce n'est pas personnel. Ce ne sont que les affaires. (Le Parrain)
Never tell anyone outside the family what you're thinking. | Ne dis jamais à quelqu'un d'extérieur à la famille ce que tu penses. (Le Parrain)
Just when I thought I was out, they pull me back in. | Juste quand je pensais en être sorti, ils me ramènent dedans. (Le Parrain, 3e partie)
Some men just want to watch the world burn. | Certains hommes veulent juste regarder le monde brûler. (The Dark Knight)
The needs of the many outweigh the needs of the few. | Les besoins du plus grand nombre l'emportent sur ceux d'une minorité. (Star Trek II)
I feel the need, the need for speed! | J'ai besoin, besoin de vitesse ! (Top Gun)
It's not the plane, it's the pilot. | Ce n'est pas l'avion, c'est le pilote. (Top Gun : Maverick)
Adapt or die. | S'adapter ou mourir. (Le Stratège)
You don't get to 500 million friends without making a few enemies. | On n'a pas 500 millions d'amis sans se faire quelques ennemis. (The Social Network)
Whatever it takes. | Quoi qu'il en coûte. (Avengers: Endgame)
Your mission, should you choose to accept it... | Votre mission, si vous l'acceptez... (Mission impossible)
May the odds be ever in your favor. | Puisse le sort vous être favorable. (Hunger Games)
Fear is the mind-killer. | La peur tue l'esprit. (Dune)
Even the smallest person can change the course of the future. | Même la plus petite personne peut changer le cours de l'avenir. (La Communauté de l'anneau)
Now I am become Death, the destroyer of worlds. | Je suis devenu la Mort, le destructeur des mondes. (Oppenheimer)
Sometimes it is the people no one imagines anything of who do the things no one can imagine. | Parfois, ce sont ceux dont on n'attend rien qui accomplissent ce que personne n'imaginait. (Imitation Game)
I'm over the moon! | Je suis aux anges !
I'm still on the fence. | J'hésite encore.
I've been on cloud nine all week. | Je suis sur un petit nuage depuis toute la semaine.
I'm at my wits' end. | Je suis à bout.
I'm at a loss for words. | Les mots me manquent.
I'm on a roll today! | Je suis sur une bonne lancée aujourd'hui !
Sorry, I'm off the clock. | Désolé, j'ai fini ma journée.
I'm swamped right now. Can it wait? | Je suis débordé en ce moment. Ça peut attendre ?
I haven't slept in two days. I'm running on empty. | Je n'ai pas dormi depuis deux jours. Je suis à bout de forces.
Leave it to me. I'm all over it. | Laisse-moi faire. Je suis dessus.
I'm calling it now: he's the killer. | Je le prédis : c'est lui le tueur.
I'm just not cut out for this. | Je ne suis tout simplement pas fait pour ça.
I know his name, but I'm drawing a blank. | Je connais son nom, mais j'ai un trou.
I'm not losing any sleep over it. | Je n'en perds pas le sommeil.
She was beside herself with worry. | Elle était folle d'inquiétude.
Shh, I'm in the zone. | Chut, je suis dans ma bulle.
Take what he says with a grain of salt. | Prends ce qu'il dit avec des pincettes.
Oh, get over yourself. | Oh, redescends sur terre.
You messed up. Own it. | Tu as merdé. Assume.
You nailed it! | Tu as assuré !
Go out there and crush it! | Vas-y et déchire tout !
I didn't prepare. I'm just going to wing it. | Je ne me suis pas préparé. Je vais improviser.
Don't blow it! | Ne fais pas tout foirer !
Fake it till you make it. | Fais semblant jusqu'à ce que tu y arrives.
We hit it off right away. | Le courant est passé tout de suite.
You paid for lunch, I paid for coffee. Let's call it even. | Tu as payé le déjeuner, moi le café. On est quittes.
I think it's time to call it quits. | Je crois qu'il est temps d'arrêter les frais.
I'll let it slide this time. | Je laisse passer pour cette fois.
All right, you won. No need to rub it in. | D'accord, tu as gagné. Pas la peine d'en rajouter.
Don't sugarcoat it. Just tell me. | N'enrobe pas la pilule. Dis-le-moi.
Come on, spit it out! | Allez, accouche !
That was cutting it close. | C'était moins une.
Step on it! | Appuie sur le champignon !
Zip it! | Ferme-la !
Save it for someone who cares. | Garde ça pour quelqu'un que ça intéresse.
Go ahead, rain on me. I'm not going anywhere. | Vas-y, qu'il pleuve sur moi. Je ne bouge pas d'ici.
It never rains but it pours. | Un malheur n'arrive jamais seul.
It's a terrible motel, but any port in a storm. | C'est un motel affreux, mais faute de grives, on mange des merles.
He always knows which way the wind is blowing. | Il sait toujours d'où vient le vent.
Your plan sails a little close to the wind. | Ton plan frôle un peu l'illégalité.
I can feel the winds of change. | Je sens souffler le vent du changement.
Her reply really took the wind out of his sails. | Sa réponse lui a vraiment coupé l'herbe sous le pied.
You're a breath of fresh air in this place. | Tu es une bouffée d'air frais ici.
Don't let your feelings cloud your judgment. | Ne laisse pas tes sentiments troubler ton jugement.
Stay calm. We're in the eye of the storm. | Reste calme. On est dans l'œil du cyclone.
Batten down the hatches. Here comes trouble. | Préparez-vous au gros temps. Les ennuis arrivent.
It's a tempest in a teapot. Let it go. | C'est une tempête dans un verre d'eau. Laisse tomber.
One day he loves me, the next day he doesn't. He blows hot and cold. | Un jour il m'aime, le lendemain non. Il souffle le chaud et le froid.
There's a storm brewing between those two. | L'orage gronde entre ces deux-là.
The project's been put on ice. | Le projet a été mis en veilleuse.
Make hay while the sun shines. You won't be young forever. | Profite-en tant que tu peux. Tu ne seras pas jeune éternellement.
After years of struggle, she finally found her place in the sun. | Après des années de lutte, elle a enfin trouvé sa place au soleil.
This is the calm after the storm. Enjoy it. | C'est le calme après la tempête. Profites-en.
Was that comment throwing shade at me? | Cette remarque, c'était une pique contre moi ?
Let the applause rain down. | Que les applaudissements pleuvent.
`,
});
