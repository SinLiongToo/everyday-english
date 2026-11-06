// 法文對照（Français）：婉拒與文化尊重
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
addFrench("respect", {
  words: `
no | non | Non, merci.
yes | oui | Oui, s'il vous plaît.
please | s'il vous plaît | Asseyez-vous, s'il vous plaît.
thank you | merci | Merci de me l'avoir demandé.
sorry | désolé | Désolé, je ne peux pas venir.
excuse me | excusez-moi | Excusez-moi, je peux vous demander quelque chose ?
maybe | peut-être | Peut-être la prochaine fois.
next time | la prochaine fois | Faisons-le la prochaine fois.
another time | une autre fois | On peut se voir une autre fois ?
busy | occupé | Je suis pris ce soir.
tired | fatigué | Je suis un peu fatigué aujourd'hui.
full | rassasié ; plein | J'ai assez mangé, merci.
enough | assez | Ça me suffit.
kind | gentil | C'est très gentil de votre part.
nice | gentil ; aimable | C'est gentil de demander.
offer | la proposition | Merci pour la proposition.
invite | inviter | Merci, mais je ne peux pas venir. Invite-moi la prochaine fois !
invitation | l'invitation | Merci pour l'invitation.
can't | ne pas pouvoir | Je suis désolé, je ne peux pas.
plan | le projet ; le programme | J'ai déjà quelque chose de prévu.
free | libre | Je ne suis pas libre dimanche.
time | le temps | Je n'ai pas le temps aujourd'hui.
help | aider | J'aimerais aider, mais je ne peux pas.
understand | comprendre | Je comprends.
okay | d'accord ; pas grave | Ce n'est pas grave. Ne t'inquiète pas.
fine | très bien | Ça me va.
polite | poli | C'est poli de dire merci.
rude | impoli | C'est impoli de montrer les gens du doigt.
respect | respecter | Nous nous respectons.
different | différent | Nous venons d'endroits différents.
same | pareil ; le même | Nous ne sommes pas tous pareils.
country | le pays | Tu viens de quel pays ?
city | la ville | J'ai grandi dans une grande ville.
hometown | la ville natale | Ma ville natale est dans le sud.
from | de ; venir de | Tu viens d'où ?
language | la langue | Combien de langues parles-tu ?
accent | l'accent | Elle a un accent du sud.
culture | la culture | J'adore découvrir d'autres cultures.
custom | la coutume | Chaque pays a ses coutumes.
food | la nourriture | Il y a des aliments que tu ne manges pas ?
eat | manger | Je ne mange pas de viande.
meat | la viande | Il y a de la viande là-dedans ?
pork | le porc | Je ne mange pas de porc.
beef | le bœuf | Certaines personnes ne mangent pas de bœuf.
fish | le poisson | Le poisson, ça te va ?
vegetarian | végétarien | Je suis végétarien.
vegan | végan | Elle est végane, donc ni œufs ni lait.
alcohol | l'alcool | Je ne bois pas d'alcool.
drink | boire ; la boisson | Je vais juste prendre une boisson sans alcool.
juice | le jus | Un jus, ça me va.
tea | le thé | Vous voulez plutôt du thé ?
religion | la religion | Nous ne parlons pas de religion au travail.
faith | la foi | La foi est très importante pour elle.
believe | croire | Chacun peut croire ce qu'il veut.
pray | prier | Il prie cinq fois par jour.
church | l'église | Elle va à l'église le dimanche.
temple | le temple | Visitons le temple.
mosque | la mosquée | Il y a une mosquée près de la gare.
God | Dieu | Beaucoup de gens croient en Dieu.
holiday | la fête ; le jour férié | Quelle est ta fête préférée ?
festival | la fête ; le festival | La fête des lanternes est magnifique.
Christmas | Noël | Joyeux Noël !
New Year | le Nouvel An | Bonne année !
gift | le cadeau | Merci pour le cadeau.
shoes | les chaussures | Enlevez vos chaussures, s'il vous plaît.
hat | le chapeau | Je peux garder mon chapeau ?
photo | la photo | Je peux prendre une photo ?
quiet | silencieux ; calme | Restez silencieux à l'intérieur, s'il vous plaît.
hand | la main | Donnez les choses avec la main droite.
shake hands | se serrer la main | On peut se serrer la main ?
bow | s'incliner ; saluer | Au Japon, les gens s'inclinent souvent.
hug | le câlin ; serrer dans ses bras | Je peux te serrer dans mes bras ?
smile | le sourire | Un sourire se comprend dans toutes les langues.
friendly | accueillant ; sympathique | Les gens ici sont très accueillants.
welcome | bienvenu | Tu es toujours le bienvenu ici.
guest | l'invité | Vous êtes notre invité.
host | l'hôte | Remerciez l'hôte avant de partir.
share | partager | Je peux partager une histoire de mon pays ?
ask | demander | Je peux te demander quelque chose ?
question | la question | C'est une question impolie ?
answer | répondre | Tu n'es pas obligé de répondre.
private | privé ; personnel | C'est un peu personnel.
age | l'âge | Ne lui demande pas son âge.
money | l'argent | Beaucoup de gens n'aiment pas parler d'argent.
joke | la blague | Cette blague n'est pas drôle.
funny | drôle | Il est vraiment drôle.
feel | ressentir ; penser | Qu'est-ce que tu en penses ?
mind | déranger | Ça vous dérange si je m'assois ici ?
idea | l'idée | C'est une bonne idée, mais non merci.
choice | le choix | C'est ton choix.
other | autre | Tu as d'autres idées ?
again | encore ; de nouveau | Tu peux me redemander plus tard ?
later | plus tard | Je te le dirai plus tard.
right now | en ce moment ; tout de suite | Je ne peux pas parler en ce moment.
really | vraiment | Je ne peux vraiment pas, désolé.
honest | honnête | Pour être honnête, je n'aime pas ça.
learn | apprendre | Je veux découvrir ta culture.
teach | apprendre ; enseigner | Tu peux m'apprendre un mot dans ta langue ?
neighbor | le voisin | Notre nouveau voisin vient d'Inde.
world | le monde | Les gens viennent ici du monde entier.
`,
  phrases: `
No, thank you. | Non, merci.
No, thanks. I'm good. | Non merci, ça va.
Thanks, but I can't. | Merci, mais je ne peux pas.
Sorry, I can't come today. | Désolé, je ne peux pas venir aujourd'hui.
Maybe next time. | La prochaine fois, peut-être.
Can we do it another day? | On peut le faire un autre jour ?
I'm busy tonight, sorry. | Désolé, je suis pris ce soir.
I already have plans. | J'ai déjà quelque chose de prévu.
I'm full, thank you. | J'ai assez mangé, merci.
It looks delicious, but I'm full. | Ça a l'air délicieux, mais je n'ai plus faim.
Just a little, please. | Juste un peu, s'il vous plaît.
That's enough, thank you. | Ça suffit, merci.
I don't drink, but thank you. | Je ne bois pas d'alcool, mais merci.
Can I have juice instead? | Je peux plutôt prendre un jus ?
Water is fine for me. | De l'eau, ça me va.
I don't eat pork. | Je ne mange pas de porc.
I don't eat meat. | Je ne mange pas de viande.
I'm vegetarian. Is there anything without meat? | Je suis végétarien. Il y a quelque chose sans viande ?
Is there pork in this? | Il y a du porc là-dedans ?
Does this have beef in it? | Il y a du bœuf dedans ?
Thank you for asking me. | Merci de me l'avoir proposé.
It's very kind of you. | C'est très gentil de votre part.
I'd love to, but I can't. | J'aimerais beaucoup, mais je ne peux pas.
I'm sorry, not this time. | Désolé, pas cette fois.
Please don't worry about it. | Ne vous en faites pas.
It's okay. Don't worry. | Ce n'est pas grave. Ne t'inquiète pas.
That's fine. | Ça me va.
I'll think about it. | Je vais y réfléchir.
Let me check and tell you later. | Je vérifie et je te dis plus tard.
Can I tell you tomorrow? | Je peux te répondre demain ?
I'm not sure. Let me ask my family. | Je ne suis pas sûr. Je vais demander à ma famille.
I don't really like it, sorry. | Désolé, je n'aime pas trop ça.
Not right now, thank you. | Pas pour l'instant, merci.
I can't help you today, sorry. | Désolé, je ne peux pas t'aider aujourd'hui.
Can someone else help you? | Quelqu'un d'autre peut t'aider ?
Thanks for understanding. | Merci de ta compréhension.
Thanks anyway! | Merci quand même !
No problem. | Pas de problème.
That sounds fun, but I can't. | Ça a l'air sympa, mais je ne peux pas.
Where are you from? | D'où viens-tu ?
Which part of the country are you from? | De quelle région du pays viens-tu ?
What's your hometown like? | Comment est ta ville natale ?
How do you say "thank you" in your language? | Comment dit-on « merci » dans ta langue ?
Can you teach me some words? | Tu peux m'apprendre quelques mots ?
How do you say your name? | Comment se prononce ton prénom ?
Did I say your name right? | J'ai bien prononcé ton prénom ?
Sorry, can you say that again? | Pardon, tu peux répéter ?
What's a popular food in your country? | Quel est un plat populaire dans ton pays ?
I'd like to try food from your country. | J'aimerais goûter la cuisine de ton pays.
What do people do for New Year in your country? | Que font les gens pour le Nouvel An dans ton pays ?
Is it the same in your country? | C'est pareil dans ton pays ?
In my country, we do it like this. | Dans mon pays, on fait comme ça.
That's interesting! | C'est intéressant !
I didn't know that. | Je ne savais pas.
Thank you for telling me. | Merci de me l'avoir dit.
I want to learn about your culture. | Je veux découvrir ta culture.
Can you show me how? | Tu peux me montrer comment faire ?
Is there anything you don't eat? | Il y a quelque chose que tu ne manges pas ?
What can you eat? | Qu'est-ce que tu peux manger ?
Is this food okay for you? | Tu peux manger ça ?
Let's eat together. | Mangeons ensemble.
Do you need a quiet place? | Tu as besoin d'un endroit calme ?
Should I take off my shoes? | Je dois enlever mes chaussures ?
Please take off your shoes. | Enlevez vos chaussures, s'il vous plaît.
Can I take a photo here? | Je peux prendre une photo ici ?
Please don't take photos here. | Merci de ne pas prendre de photos ici.
Please be quiet inside. | Veuillez rester silencieux à l'intérieur.
Is it okay to come in? | Je peux entrer ?
Can I sit here? | Je peux m'asseoir ici ?
Do you celebrate Christmas? | Tu fêtes Noël ?
Merry Christmas! | Joyeux Noël !
Happy New Year! | Bonne année !
Happy holidays! | Bonnes fêtes !
Enjoy your holiday! | Bonnes vacances !
What are you celebrating? | Qu'est-ce que vous fêtez ?
Is today a special day for you? | Aujourd'hui, c'est un jour spécial pour toi ?
Thank you for inviting me. | Merci de m'avoir invité.
Thank you for having me. | Merci de m'avoir reçu.
You're welcome here anytime. | Tu es le bienvenu ici quand tu veux.
We're happy you're here. | Nous sommes contents que tu sois là.
Please make yourself at home. | Fais comme chez toi.
Everyone is welcome. | Tout le monde est le bienvenu.
We're all different, and that's okay. | Nous sommes tous différents, et c'est très bien.
I respect that. | Je respecte ça.
That's okay with me. | Ça me va.
Sorry, I didn't know. | Désolé, je ne savais pas.
Sorry, I didn't mean that. | Désolé, ce n'est pas ce que je voulais dire.
I hope that's not rude. | J'espère que ce n'est pas impoli.
Is that a rude question? | C'est une question impolie ?
You don't have to answer. | Tu n'es pas obligé de répondre.
Sorry, that's private. | Désolé, c'est personnel.
I'd rather not say. | Je préfère ne pas le dire.
Let's talk about something else. | Parlons d'autre chose.
Please don't call him "the foreigner." | S'il te plaît, ne l'appelle pas « l'étranger ».
Everyone has a name. | Tout le monde a un prénom.
A smile works in every language. | Un sourire se comprend dans toutes les langues.
See you next time! | À la prochaine !
Have a nice day! | Bonne journée !
Let's be friends. | Soyons amis.
Thank you for being so kind. | Merci d'être si gentil.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("respect", {
  words: `
turn down | refuser ; décliner | J'ai dû refuser l'offre d'emploi.
decline | décliner | Elle a poliment décliné l'invitation.
refuse | refuser | Il a refusé de répondre.
rain check | remettre à plus tard | On peut remettre ça à plus tard ?
pass | passer son tour | Je crois que je vais passer mon tour cette fois.
not for me | pas pour moi | Merci, mais ce n'est pas pour moi.
appreciate | apprécier ; être reconnaissant | J'apprécie la proposition.
flattered | flatté | Je suis flatté, mais je dois dire non.
unfortunately | malheureusement | Malheureusement, je ne peux pas venir vendredi.
make it | pouvoir venir | J'ai bien peur de ne pas pouvoir venir.
I'm afraid | j'ai bien peur que ; je crains | J'ai bien peur d'être pris ce jour-là.
prior commitment | l'engagement antérieur | J'ai déjà un engagement.
schedule | l'emploi du temps | Mon emploi du temps est plein cette semaine.
overloaded | surchargé | Je suis surchargé de travail en ce moment.
bandwidth | la disponibilité ; la marge | Je n'ai pas la disponibilité pour un autre projet.
boundary | la limite | Dire non, c'est une façon de poser une limite.
pressure | la pression | Ne te sens pas obligé de dire oui.
guilty | coupable | Ne culpabilise pas de dire non.
excuse | l'excuse ; le prétexte | Je ne veux pas inventer de prétexte.
white lie | le pieux mensonge | Parfois, on dit un pieux mensonge par politesse.
alternative | l'alternative ; la solution de rechange | Je peux proposer une autre solution ?
instead | plutôt ; à la place | Et si on prenait un café à la place ?
compromise | le compromis | Trouvons un compromis.
suggestion | la suggestion | Merci pour la suggestion.
considerate | attentionné | C'était attentionné de ta part de demander.
politely | poliment | Elle a poliment dit non.
firmly | fermement | Dis non gentiment mais fermement.
hesitate | hésiter | N'hésite pas à dire non.
honestly | franchement | Franchement, ça ne m'intéresse pas.
interested | intéressé | Merci, mais ça ne m'intéresse pas.
pushy | insistant | Désolé si j'ai été insistant.
sensitive | délicat ; sensible | C'est un sujet sensible pour certaines personnes.
offend | offenser ; vexer | Je ne voulais pas te vexer.
offensive | offensant ; blessant | Ce mot est offensant.
awkward | gênant | C'était un peu gênant.
misunderstanding | le malentendu | Je crois qu'il y a eu un malentendu.
apologize | s'excuser | Je m'excuse si je t'ai contrarié.
background | les origines ; le milieu | Nous avons des origines différentes.
region | la région | Les coutumes varient d'une région à l'autre.
regional | régional | C'est un plat régional.
local | local ; l'habitant | Demande conseil à un habitant.
dialect | le dialecte | Ma grand-mère parle un dialecte local.
tradition | la tradition | C'est une tradition familiale.
traditional | traditionnel | Ils portaient des vêtements traditionnels.
etiquette | l'étiquette ; les bonnes manières | Les bonnes manières à table diffèrent selon les pays.
gesture | le geste | Ce geste est impoli dans certains pays.
eye contact | le contact visuel | Dans certaines cultures, trop de contact visuel paraît impoli.
personal space | l'espace personnel | Laisse aux gens un peu d'espace personnel.
stereotype | le stéréotype | Ce n'est qu'un stéréotype.
assume | supposer ; présumer | Ne pars pas du principe que tout le monde fête Noël.
generalize | généraliser | C'est injuste de généraliser sur tout un pays.
open-minded | ouvert d'esprit | Essaie d'être ouvert d'esprit.
curious | curieux | Ta culture m'intéresse beaucoup.
diverse | divers ; varié | Notre équipe est très diverse.
diversity | la diversité | Nous célébrons la diversité.
multicultural | multiculturel | C'est une ville multiculturelle.
immigrant | l'immigré | Mes parents étaient des immigrés.
expat | l'expatrié | Beaucoup d'expatriés vivent dans ce quartier.
religious | religieux ; croyant | Il est croyant ?
believer | le croyant | C'est une fervente croyante.
Christian | chrétien | Il est chrétien.
Catholic | catholique | Sa famille est catholique.
Muslim | musulman | Beaucoup de mes collègues sont musulmans.
Buddhist | bouddhiste | Ma grand-mère est bouddhiste.
Hindu | hindou | La plupart de sa famille est hindoue.
Jewish | juif | Sa famille est juive.
Sikh | sikh | Beaucoup d'hommes sikhs portent un turban.
Taoist | taoïste | C'est un temple taoïste.
atheist | athée | Il est athée, et c'est très bien.
halal | halal | Ce restaurant est halal ?
kosher | casher | Ils ne mangent que casher.
Ramadan | le ramadan | Pendant le ramadan, beaucoup de musulmans jeûnent de l'aube au coucher du soleil.
fast | jeûner | Elle jeûne aujourd'hui.
prayer | la prière | Il a besoin d'un endroit calme pour prier.
prayer room | la salle de prière | L'aéroport a une salle de prière.
headscarf | le foulard ; le voile | Elle porte un foulard.
turban | le turban | Il porte un turban.
dress code | le code vestimentaire | Le temple a un code vestimentaire.
cover up | se couvrir | Couvrez vos épaules à l'intérieur, s'il vous plaît.
Lunar New Year | le Nouvel An lunaire | Nous rendons visite à la famille au Nouvel An lunaire.
Diwali | Diwali | Diwali est la fête des lumières.
Eid | l'Aïd | Aïd Moubarak !
Hanukkah | Hanoukka | Ils allument des bougies pour Hanoukka.
Easter | Pâques | Nous faisons un grand déjeuner à Pâques.
Sabbath | le shabbat ; le sabbat | Il ne travaille pas pendant le shabbat.
incense | l'encens | Les gens brûlent de l'encens au temple.
ancestor | l'ancêtre | Nous honorons nos ancêtres.
belief | la croyance ; la conviction | Je respecte tes croyances.
spiritual | spirituel | Je suis spirituel mais pas religieux.
respectful | respectueux | Soyez respectueux dans le temple, s'il vous plaît.
appropriate | approprié ; convenable | C'est convenable d'apporter du vin ?
inappropriate | déplacé | Cette blague était déplacée.
taboo | le tabou | C'est tabou d'en parler ?
superstition | la superstition | C'est une vieille superstition.
accommodate | s'adapter à ; tenir compte de | Nous pouvons nous adapter aux régimes particuliers.
dietary restriction | la restriction alimentaire | Vous avez des restrictions alimentaires ?
allergic | allergique | Je suis allergique aux fruits à coque.
gently | doucement ; avec douceur | Dis-le avec douceur, mais clairement.
worldview | la vision du monde | Nous avons des visions du monde très différentes.
foreigner | l'étranger | Il n'aime pas qu'on l'appelle « l'étranger ».
`,
  phrases: `
Thanks for asking, but I'll have to pass. | Merci de me l'avoir proposé, mais je vais devoir décliner.
Can I take a rain check? | On peut remettre ça à une autre fois ?
I'm afraid I can't make it on Friday. | J'ai bien peur de ne pas pouvoir venir vendredi.
I have a prior commitment that day. | J'ai déjà un engagement ce jour-là.
I appreciate the offer, but I'm going to say no. | J'apprécie la proposition, mais je vais dire non.
That sounds great, but it's not for me. | Ça a l'air super, mais ce n'est pas pour moi.
I'd love to help, but my schedule is full this week. | J'aimerais aider, mais mon emploi du temps est plein cette semaine.
I can't take on anything else right now. | Je ne peux rien prendre de plus en ce moment.
Let me check my calendar and get back to you. | Je regarde mon agenda et je reviens vers toi.
Can I let you know by tomorrow? | Je peux te dire d'ici demain ?
I'm not comfortable with that. | Ça me met mal à l'aise.
I'd prefer not to. | Je préfère ne pas le faire.
I'm going to sit this one out. | Je ne vais pas participer cette fois.
Not this time, but please ask me again. | Pas cette fois, mais n'hésite pas à me le redemander.
How about coffee next week instead? | Et si on prenait plutôt un café la semaine prochaine ?
I can't come to dinner, but I can join you for dessert. | Je ne peux pas venir dîner, mais je peux vous rejoindre pour le dessert.
I can't do all of it, but I can do part of it. | Je ne peux pas tout faire, mais je peux en faire une partie.
I can help on Monday, but not today. | Je peux aider lundi, mais pas aujourd'hui.
Unfortunately, I'm not available that day. | Malheureusement, je ne suis pas disponible ce jour-là.
I'm flattered, but I'm not interested. | Je suis flatté, mais ça ne m'intéresse pas.
No, really, I'm fine. Thank you. | Non, vraiment, ça va. Merci.
I've already eaten, thank you. | J'ai déjà mangé, merci.
Thank you, but I don't drink alcohol. | Merci, mais je ne bois pas d'alcool.
I'll just have a soft drink, thanks. | Je vais juste prendre un soda, merci.
I'm driving, so no alcohol for me. | Je conduis, donc pas d'alcool pour moi.
I don't drink for religious reasons. | Je ne bois pas pour des raisons religieuses.
I'm fasting today, but please go ahead and eat. | Je jeûne aujourd'hui, mais mangez, je vous en prie.
Please don't feel bad. Enjoy your meal. | Ne vous sentez pas gênés. Bon appétit.
Do you have any dietary restrictions? | Avez-vous des restrictions alimentaires ?
I'm allergic to peanuts. Is there any in this? | Je suis allergique aux cacahuètes. Il y en a là-dedans ?
Is this restaurant halal? | Ce restaurant est halal ?
Is there a vegetarian option? | Il y a une option végétarienne ?
We can order something without pork. | Nous pouvons commander quelque chose sans porc.
Is there a prayer room in the building? | Il y a une salle de prière dans le bâtiment ?
Do you need some time for prayer? | Tu as besoin d'un moment pour prier ?
Let me know if you need a quiet room. | Dis-moi si tu as besoin d'une pièce calme.
When does Ramadan start this year? | Quand commence le ramadan cette année ?
Would you like to join us for dinner after sunset? | Tu veux te joindre à nous pour dîner après le coucher du soleil ?
Should I wear anything special? | Je dois porter une tenue particulière ?
Is there a dress code at the temple? | Il y a un code vestimentaire au temple ?
Please cover your shoulders and knees. | Couvrez vos épaules et vos genoux, s'il vous plaît.
In many mosques, women cover their hair. | Dans beaucoup de mosquées, les femmes se couvrent les cheveux.
Is it okay to bring wine as a gift? | Est-ce que je peux apporter du vin en cadeau ?
What's a good gift for this festival? | Quel serait un bon cadeau pour cette fête ?
How do you celebrate Diwali? | Comment fêtes-vous Diwali ?
Happy Diwali! | Joyeux Diwali !
Eid Mubarak! | Aïd Moubarak !
Happy Lunar New Year! | Bonne année lunaire !
Happy Hanukkah! | Joyeux Hanoukka !
I'm not religious, but I'd love to see the temple. | Je ne suis pas croyant, mais j'aimerais beaucoup voir le temple.
I respect your beliefs, even if I don't share them. | Je respecte tes croyances, même si je ne les partage pas.
Different people believe different things. | Chacun croit en des choses différentes.
I didn't mean to offend you. | Je ne voulais pas te vexer.
I'm sorry if that came out wrong. | Désolé si je me suis mal exprimé.
I think there's been a misunderstanding. | Je crois qu'il y a eu un malentendu.
Let me say that another way. | Laisse-moi le dire autrement.
What's the polite way to say this? | Quelle est la façon polie de dire ça ?
Is it rude to do this in your culture? | C'est impoli de faire ça dans ta culture ?
How do people greet each other in your country? | Comment les gens se saluent-ils dans ton pays ?
Do people shake hands or bow? | Les gens se serrent la main ou s'inclinent ?
Is it okay to hug? | Ça se fait de se prendre dans les bras ?
In some cultures, too much eye contact is rude. | Dans certaines cultures, trop de contact visuel est impoli.
That gesture means something else here. | Ce geste veut dire autre chose ici.
Please don't point at people. | Ne montre pas les gens du doigt, s'il te plaît.
In Japan, people give business cards with both hands. | Au Japon, on tend sa carte de visite à deux mains.
Customs are different in the north and the south. | Les coutumes diffèrent entre le nord et le sud.
Every region has its own dialect. | Chaque région a son dialecte.
My grandparents speak Taiwanese at home. | Mes grands-parents parlent taïwanais à la maison.
Where did you grow up? | Où as-tu grandi ?
What do you miss most about home? | Qu'est-ce qui te manque le plus de chez toi ?
How long have you lived here? | Depuis combien de temps vis-tu ici ?
It must be hard living so far from home. | Ça doit être dur de vivre si loin de chez soi.
Don't assume everyone celebrates Christmas. | Ne pars pas du principe que tout le monde fête Noël.
That's a stereotype. | C'est un stéréotype.
Not everyone from that country is the same. | Les gens de ce pays ne sont pas tous pareils.
We shouldn't generalize. | Nous ne devrions pas généraliser.
Let's keep an open mind. | Restons ouverts d'esprit.
I'm curious. Can I ask about your culture? | Je suis curieux. Je peux te poser des questions sur ta culture ?
Feel free to say no if you don't want to answer. | N'hésite pas à dire non si tu ne veux pas répondre.
Sorry if I'm being too personal. | Désolé si je suis trop indiscret.
I'd rather not talk about religion at work. | Je préfère ne pas parler de religion au travail.
Let's keep politics out of this. | Laissons la politique en dehors de ça.
I don't want to make a big deal of it. | Je ne veux pas en faire toute une histoire.
It's not a big deal. Don't worry. | Ce n'est pas grave. Ne t'inquiète pas.
That joke was a bit inappropriate. | Cette blague était un peu déplacée.
Some words can be really offensive. | Certains mots peuvent être vraiment blessants.
Please don't feel pressure to say yes. | Ne te sens surtout pas obligé de dire oui.
You don't need to give a reason. | Tu n'as pas besoin de te justifier.
Saying no doesn't make you a bad person. | Dire non ne fait pas de toi une mauvaise personne.
Don't feel guilty about it. | Ne culpabilise pas.
I'd rather say no now than let you down later. | Je préfère dire non maintenant que te décevoir plus tard.
I was being too pushy. Sorry. | J'ai trop insisté. Désolé.
Thanks for respecting my decision. | Merci de respecter ma décision.
Thanks for being so understanding. | Merci pour ta compréhension.
I'm happy to help, just not this week. | Je veux bien aider, mais pas cette semaine.
I'll have to say no to this one. | Pour celle-là, je vais devoir dire non.
Let me sleep on it. | Laisse-moi la nuit pour y réfléchir.
That's not really my thing. | Ce n'est pas trop mon truc.
I'm trying to cut back, so I'll skip dessert. | J'essaie de me modérer, donc je passe le dessert.
Thanks for thinking of me, though. | Merci quand même d'avoir pensé à moi.
`,
});

// ---------- 高級 Advanced ----------
addFrench("respect", {
  words: `
diplomatic | diplomate | Elle a donné une réponse diplomate.
tactful | plein de tact | Aie du tact quand tu dis non.
tact | le tact | Il a géré ça avec tact.
graciously | avec élégance ; gracieusement | Elle a décliné avec élégance.
cushion | amortir ; adoucir | Adoucis ton refus avec un remerciement.
soften the blow | adoucir le coup | Commence par quelque chose de positif pour adoucir le coup.
hedge | tergiverser ; rester évasif | Ne reste pas trop évasif, sinon les gens ne comprendront pas ta réponse.
noncommittal | évasif | Il a donné une réponse évasive.
assertive | affirmé ; assertif | S'affirmer, ce n'est pas être impoli.
passive-aggressive | passif-agressif | Ce commentaire sonnait passif-agressif.
people-pleaser | celui qui veut faire plaisir à tout le monde | Je veux faire plaisir à tout le monde, alors dire non est difficile.
overcommit | trop s'engager | J'ai tendance à trop m'engager.
spread too thin | s'éparpiller | Je m'éparpille trop en ce moment.
reciprocate | rendre la pareille | J'aimerais vous rendre la pareille une autre fois.
counteroffer | la contre-proposition | Je peux faire une contre-proposition ?
non-negotiable | non négociable | Pour lui, l'heure de la prière n'est pas négociable.
face | la face ; l'honneur | Dans beaucoup de cultures asiatiques, la face compte énormément.
save face | sauver la face | Donne-lui un moyen de sauver la face.
lose face | perdre la face | Personne ne veut perdre la face en public.
high-context culture | la culture à contexte riche | Dans une culture à contexte riche, on suggère souvent le « non ».
low-context culture | la culture à contexte pauvre | Dans une culture à contexte pauvre, on dit exactement ce qu'on pense.
indirect | indirect | Un « non » indirect peut ressembler à un « peut-être ».
direct | direct | Certaines cultures préfèrent une réponse directe.
read between the lines | lire entre les lignes | Il faut lire entre les lignes.
nuance | la nuance | Fais attention aux nuances.
cultural sensitivity | la sensibilité culturelle | La sensibilité culturelle est essentielle dans les équipes internationales.
cultural awareness | la conscience culturelle | La formation a renforcé notre conscience culturelle.
intercultural | interculturel | La communication interculturelle s'apprend.
cross-cultural | interculturel | Les malentendus interculturels sont fréquents.
culture shock | le choc culturel | J'ai subi un choc culturel le premier mois.
ethnocentric | ethnocentrique | Essaie de ne pas être ethnocentrique.
unconscious bias | le biais inconscient | Tout le monde a des biais inconscients.
microaggression | la microagression | « Tu viens d'où, vraiment ? » peut être ressenti comme une microagression.
prejudice | le préjugé | Les préjugés viennent souvent de la peur.
discrimination | la discrimination | La discrimination religieuse est illégale dans de nombreux pays.
inclusive | inclusif | Utilisez un langage inclusif.
inclusion | l'inclusion | Diversité et inclusion vont de pair.
marginalized | marginalisé | Écoutez les voix marginalisées.
minority | la minorité | Ils sont une minorité dans ce pays.
Indigenous | autochtone | Taïwan compte seize peuples autochtones officiellement reconnus.
ethnicity | l'origine ethnique | Ne devine pas l'origine ethnique de quelqu'un.
heritage | l'héritage ; les racines | Elle est fière de ses racines.
assimilate | s'assimiler | Certains immigrés se sentent obligés de s'assimiler.
integrate | s'intégrer | Il a fallu du temps pour s'intégrer à la communauté.
interfaith | interreligieux | Ils ont organisé un dîner interreligieux.
secular | laïque | L'école est laïque.
devout | pieux ; fervent | Ses parents sont des catholiques fervents.
observant | pratiquant | Elle est très pratiquante, elle respecte le shabbat.
practicing | pratiquant | Tu es musulman pratiquant ?
convert | se convertir | Il s'est converti au bouddhisme.
denomination | la confession ; la dénomination | Votre église appartient à quelle confession ?
pilgrimage | le pèlerinage | Des millions de musulmans font le pèlerinage à La Mecque.
sacred | sacré | Cette montagne est sacrée pour les habitants.
holy | saint | Jérusalem est une ville sainte pour trois religions.
ritual | le rituel | Le rituel a une signification profonde.
worship | le culte ; adorer | Les gens pratiquent leur culte de bien des façons.
place of worship | le lieu de culte | Habillez-vous sobrement dans tout lieu de culte.
modest | pudique ; sobre | Une tenue sobre est attendue à l'intérieur.
dietary law | la loi alimentaire | La nourriture casher suit les lois alimentaires juives.
abstain | s'abstenir | Beaucoup de musulmans s'abstiennent d'alcool.
vow | le vœu | Il a fait le vœu de ne pas manger de viande.
offering | l'offrande | Ne mangez pas les offrandes sur l'autel.
blasphemous | blasphématoire | Cette blague pourrait être jugée blasphématoire.
proselytize | faire du prosélytisme | Merci de ne pas faire de prosélytisme au travail.
agree to disagree | accepter de ne pas être d'accord | Acceptons de ne pas être d'accord.
common ground | le terrain d'entente | Cherchons un terrain d'entente.
tolerance | la tolérance | La tolérance est un minimum ; le respect, c'est mieux.
coexist | coexister | Beaucoup de religions coexistent pacifiquement ici.
pluralism | le pluralisme | Le pluralisme religieux fait partie de l'histoire de la ville.
freedom of religion | la liberté de religion | La liberté de religion est protégée par la Constitution.
reasonable accommodation | l'aménagement raisonnable | L'entreprise a prévu un aménagement raisonnable pour ses heures de prière.
holy day | la fête religieuse | Il prend congé pour les fêtes religieuses.
Lent | le carême | Elle renonce aux sucreries pendant le carême.
Yom Kippur | Yom Kippour | Yom Kippour est un jour de jeûne.
lunar calendar | le calendrier lunaire | Beaucoup de fêtes suivent le calendrier lunaire.
Ghost Month | le mois des fantômes | Certains évitent de déménager pendant le mois des fantômes.
filial piety | la piété filiale | La piété filiale est une valeur importante de la culture chinoise.
hierarchy | la hiérarchie | Le respect de la hiérarchie est fort dans certains bureaux.
seniority | l'ancienneté | L'ancienneté compte beaucoup dans de nombreuses entreprises asiatiques.
punctuality | la ponctualité | Le rapport à la ponctualité varie selon les cultures.
small talk | les banalités ; la conversation légère | Ici, la conversation légère est importante avant de parler affaires.
icebreaker | le brise-glace | La nourriture est un excellent brise-glace.
touchy subject | le sujet sensible | La politique est un sujet sensible.
steer clear | éviter | Évitez la religion et la politique au dîner.
change the subject | changer de sujet | Changeons de sujet.
deflect | éluder ; détourner | Il a éludé la question par une blague.
benefit of the doubt | le bénéfice du doute | Accorde-leur le bénéfice du doute.
good intentions | les bonnes intentions | Il avait de bonnes intentions.
well-meaning | bien intentionné | C'était une question bien intentionnée.
come across | donner l'impression | Je ne voulais pas paraître impoli.
tone-deaf | maladroit ; à côté de la plaque | La publicité était complètement à côté de la plaque.
faux pas | l'impair ; le faux pas | Garder ses chaussures à l'intérieur était un impair.
condescending | condescendant | Essaie de ne pas paraître condescendant.
patronizing | paternaliste ; condescendant | C'était un peu paternaliste.
empathy | l'empathie | Fais preuve d'empathie, pas de pitié.
humility | l'humilité | Abordez les autres cultures avec humilité.
reservation | la réserve | J'ai quelques réserves.
regretfully | à regret | À regret, je dois décliner.
with all due respect | sauf votre respect | Sauf votre respect, je ne suis pas d'accord.
take it personally | le prendre personnellement | Ne le prends pas personnellement, s'il te plaît.
no hard feelings | sans rancune | Sans rancune, j'espère.
burn bridges | couper les ponts | On peut dire non sans couper les ponts.
leave the door open | laisser la porte ouverte | J'aimerais laisser la porte ouverte pour l'avenir.
`,
  phrases: `
I'm honored that you thought of me, but I'll have to decline. | Je suis honoré que vous ayez pensé à moi, mais je vais devoir décliner.
Regretfully, I must decline your kind invitation. | C'est à regret que je dois décliner votre aimable invitation.
I'm going to have to say no, but thank you for considering me. | Je vais devoir dire non, mais merci d'avoir pensé à moi.
I'd hate to commit to something I can't do well. | Je ne voudrais pas m'engager dans quelque chose que je ne peux pas bien faire.
I'm stretched too thin to give this the attention it deserves. | Je suis trop dispersé pour y accorder l'attention que ça mérite.
I don't have the bandwidth to take this on right now. | Je n'ai pas la disponibilité pour m'en charger en ce moment.
If I say yes, I'll be letting someone else down. | Si je dis oui, je vais décevoir quelqu'un d'autre.
Could we revisit this next quarter? | Pourrions-nous en reparler au prochain trimestre ?
I'd like to leave the door open for the future. | J'aimerais laisser la porte ouverte pour l'avenir.
I can't lead the project, but I'd be happy to review the final draft. | Je ne peux pas diriger le projet, mais je relirai volontiers la version finale.
Let me suggest someone who'd be a better fit. | Permettez-moi de suggérer quelqu'un de plus adapté.
That's not something I'm able to do, but here's what I can offer. | Je ne peux pas faire ça, mais voici ce que je peux proposer.
I'm not in a position to agree to that. | Je ne suis pas en mesure d'accepter ça.
That's a hard no for me, I'm afraid. | Pour moi, c'est un non catégorique, j'en ai bien peur.
I've thought it over, and my answer is still no. | J'y ai bien réfléchi, et ma réponse reste non.
I know this isn't what you wanted to hear. | Je sais que ce n'est pas ce que tu voulais entendre.
I hope you understand. No hard feelings. | J'espère que tu comprends. Sans rancune.
Please don't take it personally. | Ne le prends pas personnellement, s'il te plaît.
I want to be upfront with you rather than make excuses. | Je préfère être franc avec toi plutôt que de chercher des excuses.
A clear no is kinder than a vague maybe. | Un non clair est plus bienveillant qu'un vague peut-être.
Saying no to this lets me say yes to what matters. | Dire non à ça me permet de dire oui à ce qui compte.
As a people-pleaser, I've had to learn to say no. | Comme je veux toujours faire plaisir, j'ai dû apprendre à dire non.
Being assertive doesn't mean being aggressive. | S'affirmer ne veut pas dire être agressif.
You can be firm and still be kind. | On peut être ferme et rester gentil.
Start with appreciation, give a brief reason, then offer an alternative. | Commencez par remercier, donnez une brève raison, puis proposez une alternative.
You don't owe anyone a long explanation. | Tu ne dois de longues explications à personne.
In many East Asian cultures, people rarely say "no" directly. | Dans beaucoup de cultures d'Asie de l'Est, on dit rarement « non » directement.
"That might be difficult" often means "no." | « Ça risque d'être difficile » veut souvent dire « non ».
"I'll think about it" can be a polite refusal. | « Je vais y réfléchir » peut être un refus poli.
In a high-context culture, you have to read between the lines. | Dans une culture à contexte riche, il faut lire entre les lignes.
In a low-context culture, people expect you to say what you mean. | Dans une culture à contexte pauvre, on attend de vous que vous disiez ce que vous pensez.
What sounds polite in one language can sound rude in another. | Ce qui paraît poli dans une langue peut sembler impoli dans une autre.
A direct answer isn't always a rude one. | Une réponse directe n'est pas forcément impolie.
Give people a way to save face. | Laissez aux gens un moyen de sauver la face.
Avoid correcting a senior colleague in front of others. | Évitez de corriger un collègue plus ancien devant les autres.
Raise it privately so no one loses face. | Abordez-le en privé pour que personne ne perde la face.
Seniority still matters a lot in some workplaces. | L'ancienneté compte encore beaucoup dans certains milieux de travail.
Small talk comes first; business comes later. | D'abord la conversation légère, les affaires ensuite.
Attitudes toward punctuality vary from culture to culture. | Le rapport à la ponctualité varie d'une culture à l'autre.
Silence in a meeting doesn't always mean agreement. | Le silence en réunion ne signifie pas toujours l'accord.
Ask open questions rather than making assumptions. | Posez des questions ouvertes plutôt que de faire des suppositions.
Avoid judging other cultures by your own standards. | Évitez de juger les autres cultures selon vos propres critères.
We all have unconscious biases, so check yours. | Nous avons tous des biais inconscients, alors examinez les vôtres.
"Where are you really from?" can feel like a microaggression. | « Tu viens d'où, vraiment ? » peut être vécu comme une microagression.
Treat people as individuals, not as representatives of a whole country. | Traitez les gens comme des individus, pas comme les représentants de tout un pays.
No one can speak for an entire culture. | Personne ne peut parler au nom de toute une culture.
Taiwan is home to sixteen officially recognized Indigenous peoples. | Taïwan compte seize peuples autochtones officiellement reconnus.
Learn to pronounce people's names correctly. | Apprenez à prononcer correctement le nom des gens.
Respect the traditions of the places you visit. | Respectez les traditions des lieux que vous visitez.
I'd love to learn more, if you're happy to share. | J'aimerais en savoir plus, si tu veux bien partager.
Let's agree to disagree and move on. | Acceptons nos désaccords et passons à autre chose.
We may not share the same faith, but we share the same values. | Nous n'avons peut-être pas la même foi, mais nous partageons les mêmes valeurs.
Let's focus on our common ground. | Concentrons-nous sur ce qui nous rassemble.
Tolerance is a start, but real respect goes further. | La tolérance est un début, mais le vrai respect va plus loin.
Freedom of religion includes the freedom not to believe. | La liberté de religion inclut la liberté de ne pas croire.
Please don't try to convert your coworkers. | Merci de ne pas essayer de convertir vos collègues.
Religious holidays should be respected, even if they aren't public holidays. | Les fêtes religieuses devraient être respectées, même si ce ne sont pas des jours fériés.
Let's avoid scheduling meetings at midday on Fridays, when some colleagues attend prayers. | Évitons les réunions le vendredi midi, quand certains collègues vont à la prière.
During Ramadan, let's hold the team dinner after sunset. | Pendant le ramadan, organisons le dîner d'équipe après le coucher du soleil.
We should offer halal and vegetarian options at the event. | Nous devrions proposer des options halal et végétariennes à l'événement.
Label the dishes so people know what's in them. | Étiquetez les plats pour que les gens sachent ce qu'ils contiennent.
Not everyone drinks, so don't make alcohol the center of the event. | Tout le monde ne boit pas, alors ne faites pas de l'alcool le centre de l'événement.
The company provided a prayer room as a reasonable accommodation. | L'entreprise a aménagé une salle de prière au titre des aménagements raisonnables.
He's a devout Hindu, so he doesn't eat beef. | Il est hindou pratiquant, donc il ne mange pas de bœuf.
Many observant Jews rest from work on the Sabbath. | Beaucoup de juifs pratiquants ne travaillent pas pendant le shabbat.
Many Sikhs keep their hair uncut as part of their faith. | Beaucoup de sikhs ne se coupent pas les cheveux par conviction religieuse.
Wearing a headscarf is a personal choice for many women. | Pour beaucoup de femmes, porter le foulard est un choix personnel.
Ask before you touch someone's religious items. | Demandez avant de toucher les objets religieux de quelqu'un.
Don't take or eat the offerings on the altar. | Ne prenez pas et ne mangez pas les offrandes sur l'autel.
In Taiwan, some people avoid swimming or moving house during Ghost Month. | À Taïwan, certains évitent de nager ou de déménager pendant le mois des fantômes.
Filial piety shapes many family decisions here. | La piété filiale influence beaucoup de décisions familiales ici.
I'm spiritual, but I don't follow any particular religion. | Je suis spirituel, mais je ne suis aucune religion en particulier.
I was raised Catholic, but I'm not practicing anymore. | J'ai été élevé dans la religion catholique, mais je ne suis plus pratiquant.
I don't share your beliefs, but I respect your right to them. | Je ne partage pas tes croyances, mais je respecte ton droit de les avoir.
That comment came across as condescending, even if you didn't mean it. | Cette remarque a paru condescendante, même si ce n'était pas ton intention.
I'm sure it was well-meaning, but it felt a bit patronizing. | Je suis sûr que c'était bien intentionné, mais ça m'a semblé un peu paternaliste.
Let's give him the benefit of the doubt. | Accordons-lui le bénéfice du doute.
Intent matters, but impact matters too. | L'intention compte, mais l'effet aussi.
If you make a faux pas, apologize sincerely and learn from it. | Si vous commettez un impair, excusez-vous sincèrement et tirez-en la leçon.
A sincere apology goes a long way. | Des excuses sincères font beaucoup.
Approach unfamiliar customs with curiosity and humility. | Abordez les coutumes inconnues avec curiosité et humilité.
Culture shock usually fades after a few months. | Le choc culturel s'estompe généralement au bout de quelques mois.
Integration is a two-way street. | L'intégration est une démarche réciproque.
No one should have to give up their heritage to fit in. | Personne ne devrait avoir à renoncer à ses racines pour s'intégrer.
Diversity is a fact; inclusion is a choice. | La diversité est un fait ; l'inclusion est un choix.
Use inclusive language, like "holiday party" instead of "Christmas party." | Employez un langage inclusif, comme « fête de fin d'année » au lieu de « fête de Noël ».
Religious discrimination at work is against the law in many countries. | La discrimination religieuse au travail est illégale dans de nombreux pays.
Treat every faith, and no faith, with equal respect. | Respectez de la même façon toutes les religions, et l'absence de religion.
Politics and religion are touchy subjects at the dinner table. | La politique et la religion sont des sujets sensibles à table.
Steer clear of sensitive topics until you know people well. | Évitez les sujets sensibles tant que vous ne connaissez pas bien les gens.
If a conversation gets heated, change the subject gracefully. | Si la conversation s'échauffe, changez de sujet avec élégance.
He deflected the question with a joke, which was very diplomatic. | Il a éludé la question par une blague, ce qui était très diplomate.
With all due respect, I see it differently. | Sauf votre respect, je vois les choses autrement.
I hear you, and I'd like to share another view. | Je t'entends, et j'aimerais proposer un autre point de vue.
Let's find a solution that works for everyone. | Trouvons une solution qui convienne à tout le monde.
Empathy means trying to see the world through someone else's eyes. | L'empathie, c'est essayer de voir le monde à travers les yeux de l'autre.
Respect costs nothing. | Le respect ne coûte rien.
Saying no is a complete sentence. | « Non » est une phrase complète.
I'd rather disappoint you now than make a promise I can't keep. | Je préfère te décevoir maintenant que faire une promesse que je ne pourrai pas tenir.
Thank you for your understanding and your grace. | Merci pour votre compréhension et votre bienveillance.
`,
});
