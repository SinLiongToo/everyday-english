// 法文對照（Français）：朋友談話
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
addFrench("friends", {
  words: `
friend | l'ami ; l'amie | C'est ma meilleure amie.
meet | rencontrer | Ravi de te rencontrer !
name | le prénom ; le nom | Comment tu t'appelles ?
free | libre | Tu es libre demain ?
call | appeler | Je t'appelle plus tard.
happy | content ; heureux | Je suis content de te voir.
hello | bonjour ; salut | Salut ! Moi, c'est Lisa.
goodbye | au revoir | Au revoir ! À demain.
thanks | merci | Merci pour ton aide !
sorry | désolé | Désolé, je suis en retard.
please | s'il te plaît ; s'il vous plaît | Asseyez-vous, s'il vous plaît.
welcome | bienvenue ; de rien | De rien !
nice | sympa ; gentil | Ton ami est vraiment sympa.
fine | bien | Ça va bien, merci.
same | même | Nous sommes dans la même classe.
talk | parler | On peut parler plus tard ?
chat | discuter ; papoter | Nous discutons en ligne tous les soirs.
laugh | rire | Il me fait toujours rire.
smile | le sourire | Elle a un beau sourire.
sad | triste | Pourquoi tu es triste ?
angry | fâché ; en colère | Tu es fâché contre moi ?
funny | drôle | Cette blague est trop drôle !
cool | cool ; génial | Ton nouveau téléphone est cool.
classmate | le camarade de classe | C'est ma camarade de classe.
message | le message | Je t'ai envoyé un message.
phone number | le numéro de téléphone | Je peux avoir ton numéro de téléphone ?
like | aimer bien | J'aime bien ton sac.
join | rejoindre | Je peux me joindre à vous ?
come | venir | Viens chez moi après l'école.
age | l'âge | Nous avons le même âge.
hometown | la ville natale | Ma ville natale, c'est Hualien.
joke | la blague | Raconte-moi une blague !
miss | manquer | Tu me manques !
bored | qui s'ennuie | Je m'ennuie. Sortons.
best friend | le meilleur ami ; la meilleure amie | Amy est ma meilleure amie.
yes | oui | Oui, avec plaisir !
no | non | Non, merci.
okay | d'accord ; OK | D'accord, à six heures.
maybe | peut-être | Peut-être la prochaine fois.
give | donner | Tu peux me donner ton numéro ?
take | prendre | Prends un biscuit !
bring | amener ; apporter | Amène tes amis !
borrow | emprunter | Je peux t'emprunter ton stylo ?
lend | prêter | Tu peux me prêter 100 dollars ?
surprised | surpris | Je suis tellement surpris de te voir !
scared | qui a peur | J'ai peur du noir.
good | bon ; bien | Bonjour !
bad | mauvais | J'ai passé une mauvaise journée.
great | génial ; super | C'est une super nouvelle !
wonderful | merveilleux | Nous avons passé un moment merveilleux.
card | la carte | Merci pour la carte d'anniversaire !
tell | raconter ; dire | Raconte-moi ta journée.
say | dire | Qu'est-ce que tu as dit ?
hear | entendre | Je ne t'entends pas.
see | voir | À demain !
look | regarder | Regarde ça !
hate | détester | Je déteste les jours de pluie.
hi | salut | Salut, Tom ! Ça va ?
bye | salut ; ciao | Salut ! Prends soin de toi !
take care | prendre soin de soi | Prends soin de toi.
tonight | ce soir | Tu es libre ce soir ?
later | plus tard | On se parle plus tard !
soon | bientôt | À bientôt !
friendship | l'amitié | Notre amitié compte beaucoup pour moi.
polite | poli | Elle est toujours polie.
rude | impoli ; grossier | Ne sois pas impoli.
shy | timide | Il est timide au début.
smart | intelligent | Elle est vraiment intelligente.
party | la fête | Viens à ma fête samedi !
game | le jeu | Faisons un jeu.
movie | le film | Tu veux voir un film ?
coffee | le café | Allons prendre un café.
lunch | le déjeuner | Tu veux déjeuner avec moi ?
together | ensemble | Nous rentrons toujours ensemble à pied.
kind | gentil | Elle est très gentille.
help | l'aide ; aider | Merci pour ton aide.
share | partager | Partageons ce gâteau.
gift | le cadeau | Ce cadeau est pour toi.
birthday | l'anniversaire | C'est quand ton anniversaire ?
photo | la photo | Envoie-moi la photo.
fun | amusant ; le plaisir | On s'est tellement amusés !
play | jouer | Tu peux jouer après l'école ?
visit | rendre visite | Je peux venir te voir ce week-end ?
wait | attendre | Attends-moi !
hug | le câlin ; serrer dans ses bras | Fais-moi un câlin !
high five | le check ; tope là | Tope là ! On a gagné !
wave | faire signe de la main | Elle m'a fait signe depuis le bus.
nickname | le surnom | C'est quoi ton surnom ?
neighbor | le voisin | Mon voisin est un bon ami.
team | l'équipe | Nous sommes dans la même équipe.
partner | le partenaire ; le binôme | Tu peux être mon binôme.
buddy | le pote | Salut, mon pote ! Ça va ?
pal | le copain | C'est un vieux copain d'école.
stranger | l'inconnu | Ne parle pas à un inconnu.
group | le groupe | Notre groupe se réunit tous les vendredis.
friendly | sympathique ; accueillant | Tout le monde ici est sympathique.
lonely | seul ; esseulé | Je me sens seul sans mes amis.
excited | impatient ; tout excité | J'ai tellement hâte de te voir !
worried | inquiet | Je m'inquiète pour toi.
tired | fatigué | Tu as l'air fatigué.
`,
  phrases: `
How are you doing? | Comment ça va ?
Long time no see! | Ça fait longtemps !
See you later! | À plus tard !
Hi! How are you? | Salut ! Ça va ?
I'm fine, thanks. And you? | Ça va bien, merci. Et toi ?
What's your name? | Comment tu t'appelles ?
Nice to meet you. | Enchanté.
Where are you from? | Tu viens d'où ?
I'm from Taiwan. | Je viens de Taïwan.
What do you do? | Qu'est-ce que tu fais dans la vie ?
I'm a student. | Je suis étudiant.
How old are you? | Tu as quel âge ?
Do you live near here? | Tu habites près d'ici ?
What's new? | Quoi de neuf ?
Not much. | Pas grand-chose.
What are you doing? | Qu'est-ce que tu fais ?
Are you free tonight? | Tu es libre ce soir ?
Let's hang out. | On se voit ?
Let's get coffee. | Allons prendre un café.
Do you want to come with me? | Tu veux venir avec moi ?
Sure! | Bien sûr !
Sounds good. | Ça marche.
See you later. | À plus.
See you tomorrow. | À demain.
Take care. | Prends soin de toi.
Bye! | Salut !
Thank you so much. | Merci beaucoup.
You're welcome. | De rien.
No problem. | Pas de problème.
I'm sorry. | Je suis désolé.
That's okay. | Ce n'est pas grave.
Excuse me. | Excuse-moi.
What's your phone number? | C'est quoi ton numéro de téléphone ?
Can I have your LINE ID? | Je peux avoir ton identifiant LINE ?
Text me. | Envoie-moi un texto.
I'll call you. | Je t'appelle.
You're my best friend. | Tu es mon meilleur ami.
I like you. | Je t'aime bien.
You're so funny! | Tu es trop drôle !
That's so cool! | C'est trop cool !
Really? | C'est vrai ?
Me too. | Moi aussi.
Me neither. | Moi non plus.
I agree. | Je suis d'accord.
I don't think so. | Je ne crois pas.
Good idea! | Bonne idée !
Happy birthday! | Joyeux anniversaire !
This is for you. | C'est pour toi.
I have a present for you. | J'ai un cadeau pour toi.
Congratulations! | Félicitations !
Good luck! | Bonne chance !
You can do it! | Tu vas y arriver !
Don't worry. | Ne t'inquiète pas.
Are you okay? | Ça va ?
What's wrong? | Qu'est-ce qui ne va pas ?
I'm sad. | Je suis triste.
I'm happy. | Je suis content.
I'm tired. | Je suis fatigué.
I'm busy today. | Je suis occupé aujourd'hui.
Wait for me! | Attends-moi !
Hurry up! | Dépêche-toi !
I'm here. | Je suis là.
Where are you? | Tu es où ?
I'm on my way. | J'arrive.
Sorry I'm late. | Désolé d'être en retard.
Let's meet at the station. | Retrouvons-nous à la gare.
What time? | À quelle heure ?
At six o'clock. | À six heures.
Let's take a selfie. | Faisons un selfie.
Send me the photo. | Envoie-moi la photo.
I miss you. | Tu me manques.
Come and visit me. | Viens me voir.
Can I come over? | Je peux passer ?
Come on in. | Entre.
Do you like it? | Ça te plaît ?
I love it! | J'adore !
That's great news! | C'est une super nouvelle !
That's too bad. | C'est dommage.
Have a good weekend. | Bon week-end.
How was your weekend? | Ton week-end s'est bien passé ?
It was fun. | C'était sympa.
What did you do? | Qu'est-ce que tu as fait ?
I stayed home. | Je suis resté à la maison.
Let's play together. | Jouons ensemble.
Can I join you? | Je peux me joindre à vous ?
This is my friend, Amy. | Voici mon amie Amy.
Do you know him? | Tu le connais ?
We met at school. | On s'est rencontrés à l'école.
We're good friends. | Nous sommes de bons amis.
You look great! | Tu as l'air en pleine forme !
I like your bag. | J'aime bien ton sac.
Thanks for coming. | Merci d'être venu.
Thanks for your help. | Merci pour ton aide.
Let me help you. | Laisse-moi t'aider.
Lunch is on me. | C'est moi qui t'invite à déjeuner.
Next time, it's my treat. | La prochaine fois, c'est moi qui invite.
Have fun! | Amuse-toi bien !
Talk to you soon. | On se reparle bientôt.
What's your favorite food? | C'est quoi ton plat préféré ?
Do you have any pets? | Tu as des animaux ?
That's not what I meant. | Ce n'est pas ce que je voulais dire.
Can we talk about this calmly? | On peut en parler calmement ?
I need you to listen to me. | J'ai besoin que tu m'écoutes.
I don't feel comfortable with that. | Ça me met mal à l'aise.
That's a personal matter. | C'est une affaire personnelle.
I'd rather not talk about it. | Je préfère ne pas en parler.
I need some space right now. | J'ai besoin d'un peu d'espace en ce moment.
I value our friendship. | Notre amitié compte beaucoup pour moi.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("friends", {
  words: `
catch up | se raconter les dernières nouvelles | Allons prendre un café pour nous raconter les nouvelles.
hang out | traîner ensemble ; se voir | Nous traînons souvent au parc.
invite | inviter | J'aimerais t'inviter à ma fête.
text | envoyer un texto | Envoie-moi un texto quand tu rentres.
plans | les projets ; le programme | Tu as des projets ce week-end ?
cancel | annuler | Désolé, je dois annuler ce soir.
get together | se retrouver | Retrouvons-nous ce week-end.
chill | se détendre ; glander | Restons tranquilles à la maison ce soir.
gossip | les potins ; potiner | Je n'aime pas dire des potins sur mes amis.
rumor | la rumeur | Ne crois pas cette rumeur.
secret | le secret | Tu sais garder un secret ?
trust | faire confiance | Je te fais entièrement confiance.
loyal | loyal ; fidèle | C'est un ami fidèle.
honest | honnête ; franc | Merci d'avoir été franc avec moi.
jealous | jaloux | Tu es jaloux d'elle ?
awkward | gênant | Il y a eu un silence gênant.
embarrassed | gêné ; mal à l'aise | J'avais tellement honte !
compliment | le compliment | Merci pour le compliment !
apologize | s'excuser | Je voudrais m'excuser pour hier.
forgive | pardonner | Pardonne-moi, s'il te plaît.
favor | le service | Tu peux me rendre un service ?
advice | le conseil | J'ai besoin de tes conseils.
support | soutenir | Mes amis me soutiennent toujours.
disagree | ne pas être d'accord | Ce n'est pas grave de ne pas être d'accord.
make up | se réconcilier | Vous vous êtes réconciliés ?
group chat | la discussion de groupe | Je le mettrai dans la discussion de groupe.
selfie | le selfie | Faisons un selfie !
acquaintance | la connaissance | C'est plus une connaissance qu'un ami.
close friend | l'ami proche | C'est l'une de mes amies proches.
show up | se pointer ; venir | Il n'est pas venu hier soir.
flake | poser un lapin | Ne me pose pas encore un lapin !
introduce | présenter | Laisse-moi te présenter mon ami Tom.
mutual friend | l'ami commun | Nous nous sommes rencontrés par un ami commun.
grab a bite | manger un morceau | Tu veux manger un morceau après le travail ?
drop by | passer | N'hésite pas à passer quand tu veux.
run into | tomber sur | J'espère tomber de nouveau sur elle.
keep in touch | garder le contact | Restons en contact !
lose touch | perdre de vue | Ne perds pas de vue tes vieux amis.
reply | la réponse ; répondre | Désolé de répondre si tard.
seen | vu | Elle m'a encore laissé en « vu ».
emoji | l'émoji | Il ne répond qu'avec des émojis.
sticker | l'autocollant ; le sticker | Les stickers LINE sont trop mignons.
voice message | le message vocal | Je t'envoie un message vocal.
profile picture | la photo de profil | Jolie nouvelle photo de profil !
surprise party | la fête surprise | Nous préparons une fête surprise pour Jenny.
potluck | le repas partagé | Apporte un plat au repas partagé.
split | partager | Partageons le prix du taxi.
treat | inviter ; régaler | Ce soir, c'est moi qui invite.
owe | devoir | Je te dois une fière chandelle !
promise | promettre | Je te promets de ne le dire à personne.
personality | la personnalité | Elle a une super personnalité.
outgoing | sociable ; extraverti | Il est sociable et se fait facilement des amis.
easygoing | facile à vivre | Mon colocataire est très facile à vivre.
reliable | fiable | Sam est la personne la plus fiable que je connaisse.
mean | méchant | Ne sois pas méchant avec elle.
annoying | énervant ; agaçant | Ses blagues sont agaçantes.
argument | la dispute | Nous nous sommes disputés à propos de politique.
misunderstanding | le malentendu | Ce n'était qu'un malentendu.
peer | le pair | Les ados se soucient de ce que pensent leurs pairs.
crush | le béguin | J'ai le béguin pour quelqu'un dans ma classe.
date | le rendez-vous (amoureux) | Ils sont sortis ensemble hier soir.
break up | rompre | Ils ont décidé de rompre.
blind date | le rendez-vous arrangé | Mon ami m'a organisé un rendez-vous arrangé.
stay over | dormir chez quelqu'un | Je peux dormir chez toi ?
pajama party | la soirée pyjama | Nous avons fait une soirée pyjama vendredi.
comfort | réconforter | J'ai essayé de la réconforter après l'examen.
hit it off | s'entendre tout de suite | Nous nous sommes tout de suite entendus.
in common | en commun | Nous avons beaucoup de points communs.
chat app | l'application de messagerie | Nous parlons tous les jours sur une application de messagerie.
unfollow | ne plus suivre ; se désabonner | Elle s'est désabonnée de mon compte après notre dispute.
block | bloquer | J'ai dû le bloquer sur les réseaux sociaux.
mute | mettre en sourdine | J'ai mis le groupe en sourdine parce qu'il était trop bruyant.
read receipt | l'accusé de lecture | J'ai désactivé les accusés de lecture.
last-minute | de dernière minute | Désolé pour le changement de dernière minute.
rain check | partie remise | On peut remettre le dîner à plus tard ?
BFF | le meilleur ami pour la vie | C'est ma meilleure amie depuis la maternelle.
roommate | le colocataire ; le coloc | Mon coloc vient du Japon.
housemate | le colocataire | Ma colocataire fait un curry incroyable.
reunion | les retrouvailles ; la réunion d'anciens élèves | Notre réunion d'anciens élèves est le mois prochain.
farewell party | la fête d'adieu ; le pot de départ | Nous lui avons organisé une fête d'adieu.
welcome party | la fête de bienvenue | Nous avons fait une fête de bienvenue pour le nouvel élève.
karaoke night | la soirée karaoké | Tu viens à la soirée karaoké ?
game night | la soirée jeux | Nous faisons une soirée jeux tous les vendredis.
brunch | le brunch | Retrouvons-nous pour un brunch dimanche.
happy hour | l'happy hour | L'happy hour commence à cinq heures.
toast | le toast | Portons un toast à notre amitié.
cheers | santé ; tchin-tchin | Santé, tout le monde !
sense of humor | le sens de l'humour | Il a un grand sens de l'humour.
kindness | la gentillesse | Je n'oublierai jamais ta gentillesse.
generous | généreux | Elle est toujours généreuse de son temps.
stingy | radin | Ne sois pas si radin !
bossy | autoritaire | Elle peut être un peu autoritaire.
moody | lunatique | Il est d'humeur changeante toute la semaine.
considerate | attentionné | C'était attentionné de ta part d'appeler.
thoughtful | délicat ; prévenant | Quel cadeau délicat !
talkative | bavard | Mon ami est très bavard.
quiet | discret ; calme | Il est discret mais très drôle.
sincere | sincère | Merci pour tes conseils sincères.
bestie | la meilleure copine ; le meilleur pote | Je vais faire du shopping avec ma meilleure copine.
get along | bien s'entendre | Nous nous entendons vraiment bien.
a friend in need is a friend indeed | c'est dans le besoin qu'on reconnaît ses vrais amis | C'est dans le besoin qu'on reconnaît ses vrais amis.
birds of a feather flock together | qui se ressemble s'assemble | Qui se ressemble s'assemble.
best friends forever | meilleurs amis pour la vie | Nous sommes meilleurs amis pour la vie.
have your back | être là pour quelqu'un ; couvrir quelqu'un | Ne t'inquiète pas, je suis là pour toi.
two peas in a pod | comme deux gouttes d'eau ; inséparables | Ils se ressemblent comme deux gouttes d'eau.
lend an ear | prêter une oreille attentive | Tu peux m'écouter une minute ?
just kidding | je plaisante | Je plaisante ! Ne te fâche pas.
pull my leg | faire marcher quelqu'un | Tu essaies de me faire marcher ?
`,
  phrases: `
What have you been up to? | Qu'est-ce que tu deviens ?
I'll take a rain check. | Ce sera pour une autre fois.
Just kidding! | Je plaisante !
What have you been up to lately? | Qu'est-ce que tu fais de beau ces temps-ci ?
I've been swamped with work. | Je suis débordé de travail.
We should catch up sometime. | On devrait se voir un de ces jours.
Let's grab a drink after work. | Allons boire un verre après le travail.
How about this Friday? | Et ce vendredi ?
I'm afraid I already have plans. | J'ai bien peur d'avoir déjà quelque chose de prévu.
Can I take a rain check? | On peut remettre ça à plus tard ?
Something came up, so I have to cancel. | J'ai un imprévu, je dois annuler.
Sorry for the short notice. | Désolé de te prévenir si tard.
No worries. Another time. | Pas de souci. Une autre fois.
I'm running about ten minutes late. | J'ai environ dix minutes de retard.
Save me a seat. | Garde-moi une place.
It's been ages since we last met. | Ça fait une éternité qu'on ne s'est pas vus.
You haven't changed a bit. | Tu n'as pas changé du tout.
How's your family doing? | Comment va ta famille ?
Are you still working at the same place? | Tu travailles toujours au même endroit ?
I heard you got a new job. Congratulations! | J'ai appris que tu avais un nouveau travail. Félicitations !
I'm so happy for you. | Je suis tellement content pour toi.
You deserve it. | Tu le mérites.
I'm sorry to hear that. | Je suis désolé d'apprendre ça.
That must be really hard. | Ça doit être vraiment dur.
Let me know if there's anything I can do. | Dis-moi si je peux faire quelque chose.
I'm here if you need to talk. | Je suis là si tu as besoin de parler.
Do you want to talk about it? | Tu veux en parler ?
I didn't mean to upset you. | Je ne voulais pas te faire de peine.
I think there's been a misunderstanding. | Je crois qu'il y a eu un malentendu.
Let's not argue about it. | Ne nous disputons pas pour ça.
I owe you one. | Je te revaudrai ça.
You saved my life! | Tu m'as sauvé la vie !
Don't mention it. | Il n'y a pas de quoi.
What are friends for? | C'est à ça que servent les amis.
I couldn't have done it without you. | Je n'aurais pas pu y arriver sans toi.
Can you keep a secret? | Tu sais garder un secret ?
My lips are sealed. | Motus et bouche cousue.
Don't tell anyone, okay? | Ne le dis à personne, d'accord ?
You won't believe what happened. | Tu ne vas pas croire ce qui s'est passé.
Guess who I ran into yesterday? | Devine sur qui je suis tombé hier ?
No way! | Pas possible !
Are you serious? | Tu es sérieux ?
You're kidding me! | Tu plaisantes !
I'm just joking. | Je rigole.
That's hilarious. | C'est hilarant.
I couldn't stop laughing. | Je n'arrêtais pas de rire.
That's a good point. | C'est vrai, bien vu.
I see what you mean. | Je vois ce que tu veux dire.
I'm not so sure about that. | Je n'en suis pas si sûr.
To be honest, I'm not a fan. | Pour être honnête, je n'accroche pas.
It's up to you. | C'est toi qui vois.
I don't mind either way. | Ça m'est égal.
Whatever works for you. | Comme ça t'arrange.
Let me think about it. | Laisse-moi y réfléchir.
Speaking of which, did you hear about Tom? | À propos, tu as entendu parler de Tom ?
Anyway, enough about me. How are you? | Bref, assez parlé de moi. Et toi, comment ça va ?
I've got to go, but let's talk soon. | Je dois y aller, mais on se reparle bientôt.
It was great seeing you. | C'était super de te voir.
Say hi to your sister for me. | Dis bonjour à ta sœur de ma part.
Keep in touch. | Restons en contact.
Let me know when you're back in town. | Fais-moi signe quand tu reviens en ville.
We should do this more often. | On devrait faire ça plus souvent.
I made a new friend at the gym. | Je me suis fait un nouvel ami à la salle de sport.
We hit it off right away. | Le courant est passé tout de suite.
We have a lot in common. | Nous avons beaucoup de points communs.
We've known each other since elementary school. | Nous nous connaissons depuis l'école primaire.
We lost touch after high school. | Nous nous sommes perdus de vue après le lycée.
We reconnected on social media. | Nous nous sommes retrouvés sur les réseaux sociaux.
She's more of an acquaintance than a friend. | C'est plus une connaissance qu'une amie.
He's a friend of a friend. | C'est un ami d'ami.
I'm throwing a party on Saturday. You should come. | J'organise une fête samedi. Tu devrais venir.
Feel free to bring a friend. | N'hésite pas à amener un ami.
Should I bring anything? | J'apporte quelque chose ?
Just bring yourself. | Viens juste toi-même.
Thanks for having me. | Merci de m'avoir reçu.
I had a blast. | Je me suis éclaté.
Let's split the bill. | Partageons l'addition.
I'll get the next one. | La prochaine, c'est pour moi.
Can I borrow some money? I'll pay you back tomorrow. | Tu peux me prêter un peu d'argent ? Je te rembourse demain.
Could you do me a favor? | Tu pourrais me rendre un service ?
Sure, what do you need? | Bien sûr, de quoi tu as besoin ?
I'm not really in the mood. | Je ne suis pas trop d'humeur.
I'm feeling a bit down today. | J'ai un peu le moral à zéro aujourd'hui.
Cheer up! | Courage !
Things will get better. | Ça va s'arranger.
Hang in there. | Tiens bon.
I've got your back. | Je suis là pour toi.
You're a true friend. | Tu es un vrai ami.
I'm lucky to have you. | J'ai de la chance de t'avoir.
Are you seeing anyone? | Tu vois quelqu'un en ce moment ?
We've been dating for a few months. | Nous sortons ensemble depuis quelques mois.
I think I have a crush on someone. | Je crois que j'ai le béguin pour quelqu'un.
They broke up last week. | Ils ont rompu la semaine dernière.
Do you want to come to my place for dinner? | Tu veux venir dîner chez moi ?
Let's do a video call this weekend. | Faisons un appel vidéo ce week-end.
I'll send you the link. | Je t'envoie le lien.
Did you see my message? | Tu as vu mon message ?
Sorry, I didn't see it. | Désolé, je ne l'ai pas vu.
Let's plan something fun. | Prévoyons quelque chose de sympa.
I'll introduce you to my friends. | Je te présenterai mes amis.
I appreciate your honesty. | J'apprécie ta franchise.
I didn't mean to hurt your feelings. | Je ne voulais pas te blesser.
Please don't jump to conclusions. | S'il te plaît, ne tire pas de conclusions hâtives.
I see where you're coming from. | Je comprends ton point de vue.
We don't have to agree on everything. | On n'est pas obligés d'être d'accord sur tout.
Let's agree to disagree. | Restons-en à nos désaccords.
I don't want this to come between us. | Je ne veux pas que ça se mette entre nous.
Let's not make a big deal out of it. | N'en faisons pas toute une histoire.
I hope we can work this out. | J'espère qu'on pourra arranger ça.
I think we need to be honest with each other. | Je crois qu'il faut qu'on soit honnêtes l'un envers l'autre.
I'd rather clear the air than let things get awkward. | Je préfère crever l'abcès plutôt que de laisser la situation devenir gênante.
`,
});

// ---------- 高級 Advanced ----------
addFrench("friends", {
  words: `
small talk | les banalités ; le bavardage | Je ne suis pas doué pour les banalités.
drift apart | s'éloigner | Beaucoup d'amis s'éloignent après les études.
confide in | se confier à | Je peux toujours me confier à elle.
reconnect | renouer le contact | Les réseaux sociaux m'ont aidé à renouer avec d'anciens camarades.
tactful | plein de tact | Essaie d'avoir du tact quand tu fais des remarques.
banter | les plaisanteries ; la taquinerie | Leurs plaisanteries amicales ont fait rire tout le monde.
rapport | la bonne entente | Nous avons vite établi une bonne entente.
camaraderie | la camaraderie | La camaraderie entre coéquipiers était forte.
companionship | la compagnie | Les personnes âgées ont souvent besoin de compagnie.
kindred spirit | l'âme sœur ; l'esprit apparenté | J'ai tout de suite su que c'était une âme sœur.
frenemy | l'ami-ennemi | C'est plus une amie-ennemie qu'une amie.
falling-out | la brouille | Ils se sont brouillés pour une histoire d'argent.
ghost | ghoster ; disparaître sans prévenir | Il m'a ghostée après notre deuxième rendez-vous.
boundaries | les limites | Les amitiés saines ont besoin de limites claires.
vulnerable | vulnérable | C'est difficile de se montrer vulnérable avec de nouveaux amis.
empathy | l'empathie | Elle écoute avec une vraie empathie.
sarcastic | sarcastique | C'était sarcastique, cette remarque ?
witty | spirituel ; plein d'esprit | Il est plein d'esprit et a toujours la réplique facile.
genuine | sincère ; authentique | Sa gentillesse est sincère.
superficial | superficiel | Les amitiés en ligne peuvent sembler superficielles.
toxic | toxique | Il est temps de mettre fin à cette amitié toxique.
reciprocate | rendre la pareille | L'amitié fonctionne quand chacun rend la pareille.
solidarity | la solidarité | Nous avons fait preuve de solidarité envers notre ami.
peer pressure | la pression des pairs | Les ados cèdent souvent à la pression des pairs.
inside joke | la blague d'initiés | C'est une blague d'initiés. Il fallait être là.
heart-to-heart | la conversation à cœur ouvert | Nous avons eu une longue conversation à cœur ouvert hier soir.
socialize | voir du monde ; socialiser | Je vois peu de monde pendant les examens.
introvert | l'introverti | En tant qu'introverti, j'ai besoin d'être seul pour recharger mes batteries.
extrovert | l'extraverti | Les extravertis puisent leur énergie dans la compagnie des autres.
mingle | se mêler aux autres | Allons nous mêler aux gens et faire des rencontres.
icebreaker | le brise-glace | Nous avons commencé par un brise-glace amusant.
bond | créer des liens | Voyager ensemble nous a aidés à créer des liens.
confidant | le confident ; la confidente | C'est ma confidente depuis le lycée.
platonic | platonique | Leur relation est purement platonique.
fair-weather friend | l'ami des beaux jours | Un ami des beaux jours disparaît quand les choses se gâtent.
ride or die | l'ami à la vie à la mort | C'est mon amie à la vie à la mort.
wingman | le complice (de drague) | Tu peux être mon complice ce soir ?
third wheel | la cinquième roue du carrosse ; tenir la chandelle | J'avais l'impression de tenir la chandelle pendant leur rendez-vous.
FOMO | la peur de rater quelque chose (FOMO) | La peur de rater quelque chose me fait accepter toutes les fêtes.
social battery | la batterie sociale | Ma batterie sociale est à plat.
people-pleaser | celui qui veut plaire à tout le monde | Je veux plaire à tout le monde, je n'arrive pas à dire non.
passive-aggressive | passif-agressif | Ses remarques passives-agressives m'ont blessé.
gaslight | manipuler ; faire douter de soi | Il a essayé de me manipuler pour que je doute de moi.
manipulative | manipulateur | Un ami manipulateur déforme tes paroles.
envious | envieux | J'envie un peu sa réussite.
resentment | la rancœur | La rancœur non exprimée peut briser une amitié.
grudge | la rancune | Il lui en veut encore.
olive branch | le rameau d'olivier | Elle a tendu un rameau d'olivier après la dispute.
bury the hatchet | enterrer la hache de guerre | Il est temps d'enterrer la hache de guerre.
clear the air | crever l'abcès ; dissiper les malentendus | Il faut qu'on parle pour crever l'abcès.
mutual respect | le respect mutuel | L'amitié repose sur le respect mutuel.
emotional support | le soutien émotionnel | Les bons amis apportent un soutien émotionnel.
active listening | l'écoute active | L'écoute active donne aux gens le sentiment d'être entendus.
open up | s'ouvrir | Il lui a fallu des mois pour s'ouvrir.
put up with | supporter | Je ne supporte plus ses mensonges.
look up to | admirer | Je l'admire vraiment.
see eye to eye | être d'accord | Nous ne sommes pas toujours d'accord.
on the same wavelength | sur la même longueur d'onde | Nous sommes toujours sur la même longueur d'onde.
loner | le solitaire | C'est un peu un solitaire.
social circle | le cercle d'amis | Mon cercle d'amis s'est réduit après mon déménagement.
clique | la bande ; le clan | Les clans au lycée peuvent être cruels.
affinity | l'affinité | J'ai ressenti une affinité immédiate avec elle.
long-distance friendship | l'amitié à distance | Les appels vidéo font vivre notre amitié à distance.
loyalty | la loyauté | La loyauté compte plus que la popularité.
betray | trahir | Je n'aurais jamais cru qu'il me trahirait.
trustworthy | digne de confiance | C'est la personne la plus digne de confiance que je connaisse.
social isolation | l'isolement social | L'isolement social est mauvais pour la santé.
loneliness | la solitude | La solitude touche les gens de tous âges.
belonging | l'appartenance | Les amis nous donnent un sentiment d'appartenance.
reciprocity | la réciprocité | L'amitié dépend de la réciprocité.
vulnerability | la vulnérabilité | Montrer sa vulnérabilité crée la confiance.
self-disclosure | la confidence ; l'ouverture de soi | Se confier approfondit les relations.
people skills | le sens du relationnel | Elle a un excellent sens du relationnel.
charisma | le charisme | Son charisme attire les gens.
social anxiety | l'anxiété sociale | L'anxiété sociale rend les fêtes stressantes pour lui.
rejection | le rejet | La peur du rejet empêche beaucoup de gens de faire le premier pas.
exclusion | l'exclusion | Être exclue du groupe l'a profondément blessée.
cyberbullying | le cyberharcèlement | Le cyberharcèlement peut être incessant.
catfish | le faux profil ; l'imposteur en ligne | Il a compris qu'il parlait à un faux profil.
parasocial relationship | la relation parasociale | Les fans peuvent nouer une relation parasociale avec des streamers.
situationship | la relation floue | Ils sont dans une relation floue, pas en couple.
breadcrumbing | le breadcrumbing ; entretenir l'intérêt sans s'engager | Le breadcrumbing entretient l'intérêt de quelqu'un sans s'engager.
love bombing | le love bombing | Le love bombing est une tactique de manipulation courante.
red flag | le signal d'alarme | La jalousie dès le début est un signal d'alarme.
green flag | le bon signe | Respecter tes limites, c'est un bon signe.
emotional availability | la disponibilité émotionnelle | La disponibilité émotionnelle est essentielle dans les amitiés proches.
codependent | codépendant | Leur amitié était devenue codépendante.
enabler | le complice ; celui qui encourage | Ne sois pas complice de ses mauvaises habitudes.
backhanded compliment | le compliment à double tranchant | « Tu fais jeune pour ton âge », c'est un compliment à double tranchant.
white lie | le pieux mensonge | J'ai dit un pieux mensonge pour ménager ses sentiments.
diplomacy | la diplomatie | Il a fallu un peu de diplomatie pour régler la dispute.
discretion | la discrétion | J'ai entièrement confiance en sa discrétion.
benefit of the doubt | le bénéfice du doute | Accorde-lui le bénéfice du doute.
common ground | le terrain d'entente | Nous avons trouvé un terrain d'entente malgré nos différences.
shared values | les valeurs communes | Les amitiés durables reposent sur des valeurs communes.
networking event | l'événement de réseautage | Je l'ai rencontrée lors d'un événement de réseautage.
mentor | le mentor | Mon mentor est devenu un ami proche.
accountability partner | le partenaire de motivation | Mon partenaire de motivation me pousse à aller à la salle.
cheerleader | le premier supporter | Elle a toujours été ma première supportrice.
sounding board | la caisse de résonance ; l'oreille attentive | Il est une excellente oreille pour tester mes idées.
thick as thieves | comme larrons en foire | Ces deux-là s'entendent comme larrons en foire.
go back a long way | se connaître depuis longtemps | Nous nous connaissons depuis longtemps.
through thick and thin | contre vents et marées | Elle m'a soutenu contre vents et marées.
a shoulder to cry on | une épaule sur laquelle pleurer | Merci d'avoir été une épaule sur laquelle pleurer.
fall out | se brouiller | Ne vous brouillez pas pour de l'argent.
stab someone in the back | poignarder quelqu'un dans le dos | Un vrai ami ne poignarderait jamais quelqu'un dans le dos.
bend over backwards | se mettre en quatre | Elle se mettrait en quatre pour m'aider.
give someone the cold shoulder | battre froid à quelqu'un | C'est impoli de battre froid à quelqu'un.
a friend of a friend | un ami d'ami | Je l'ai rencontré par un ami d'ami.
mend fences | recoller les morceaux | Il est temps de recoller les morceaux.
read me like a book | lire en moi comme dans un livre | Mon meilleur ami lit en moi comme dans un livre.
let the cat out of the bag | vendre la mèche | Qui a vendu la mèche ?
old friends are the best friends | ce sont les vieux amis les meilleurs | Ce sont les vieux amis les meilleurs.
`,
  phrases: `
I didn't mean to step on your toes. | Je ne voulais pas marcher sur tes plates-bandes.
Let's agree to disagree. | Restons-en à nos désaccords.
You can count on me. | Tu peux compter sur moi.
Making friends as an adult is surprisingly hard. | Se faire des amis à l'âge adulte est étonnamment difficile.
Friendships need time and effort to maintain. | Les amitiés demandent du temps et des efforts pour durer.
Some friendships naturally run their course. | Certaines amitiés s'éteignent naturellement.
It's okay to outgrow certain friendships. | Ce n'est pas grave de dépasser certaines amitiés.
We've drifted apart, but there's no bad blood. | Nous nous sommes éloignés, mais sans rancune.
I can pick up where I left off with my oldest friends. | Avec mes plus vieux amis, on reprend là où on s'était arrêtés.
True friends tell you what you need to hear, not what you want to hear. | Les vrais amis vous disent ce que vous avez besoin d'entendre, pas ce que vous voulez entendre.
I value honesty above all in a friendship. | Dans une amitié, je privilégie l'honnêteté avant tout.
Trust takes years to build and seconds to break. | La confiance met des années à se construire et quelques secondes à se briser.
I felt betrayed when she shared my secret. | Je me suis senti trahi quand elle a révélé mon secret.
It took a long time to rebuild our friendship. | Il a fallu longtemps pour reconstruire notre amitié.
Holding a grudge only hurts you in the end. | La rancune ne fait de mal qu'à soi-même au bout du compte.
I've learned to let go of friendships that drain me. | J'ai appris à lâcher les amitiés qui m'épuisent.
A toxic friend can do real damage to your self-esteem. | Un ami toxique peut vraiment abîmer l'estime de soi.
Reciprocity is the backbone of any friendship. | La réciprocité est la colonne vertébrale de toute amitié.
I always feel like I'm the one reaching out. | J'ai toujours l'impression que c'est moi qui fais le premier pas.
Quality matters far more than the number of friends you have. | La qualité compte bien plus que le nombre d'amis.
Online connections can't fully replace face-to-face contact. | Les liens en ligne ne remplacent pas complètement les rencontres en personne.
Loneliness has been described as an epidemic. | On a qualifié la solitude d'épidémie.
Social isolation is as harmful as smoking. | L'isolement social est aussi nocif que le tabac.
Strong social ties are linked to longer, healthier lives. | Des liens sociaux forts sont associés à une vie plus longue et en meilleure santé.
Men often find it harder to open up to friends. | Les hommes ont souvent plus de mal à se confier à leurs amis.
Vulnerability is what deepens a friendship. | C'est la vulnérabilité qui approfondit une amitié.
Small talk serves a social purpose, even if it feels trivial. | Les banalités ont une fonction sociale, même si elles semblent futiles.
I find large gatherings draining as an introvert. | En tant qu'introverti, je trouve les grands rassemblements épuisants.
I need time alone to recharge after socializing. | J'ai besoin d'être seul pour recharger mes batteries après avoir vu du monde.
Extroverts tend to get energy from being around people. | Les extravertis puisent leur énergie dans la compagnie des autres.
I'd rather have a deep conversation with one person than chat with ten. | Je préfère une conversation profonde avec une personne que bavarder avec dix.
She has a knack for putting people at ease. | Elle a le don de mettre les gens à l'aise.
He's the glue that holds our group together. | C'est lui le ciment de notre groupe.
Every friend group has its own inside jokes. | Chaque bande d'amis a ses blagues d'initiés.
I felt left out when they made plans without me. | Je me suis senti exclu quand ils ont fait des projets sans moi.
Group chats can create unspoken pressure to respond. | Les discussions de groupe créent une pression implicite à répondre.
Leaving someone on read can feel like a snub. | Laisser quelqu'un en « vu » peut passer pour un affront.
Tone is easily misread in text messages. | Le ton est facilement mal interprété dans les messages écrits.
It's better to have difficult conversations in person. | Il vaut mieux avoir les conversations difficiles en face à face.
I tried to give constructive feedback without sounding critical. | J'ai essayé de faire des remarques constructives sans paraître critique.
I bit my tongue to avoid an argument. | Je me suis mordu la langue pour éviter une dispute.
We agreed to disagree. | Nous avons convenu de ne pas être d'accord.
Politics is best avoided at the dinner table. | Mieux vaut éviter la politique à table.
Friends with different views can broaden your perspective. | Des amis aux opinions différentes peuvent élargir votre horizon.
It's hard to stay friends when your values diverge. | C'est difficile de rester amis quand les valeurs divergent.
Mixing money and friendship is risky. | Mélanger argent et amitié est risqué.
Never lend more than you can afford to lose. | Ne prêtez jamais plus que ce que vous pouvez vous permettre de perdre.
Going into business with friends can strain the relationship. | S'associer avec des amis peut mettre la relation à rude épreuve.
Workplace friendships can blur professional boundaries. | Les amitiés au travail peuvent brouiller les limites professionnelles.
Friendships often change after people have children. | Les amitiés changent souvent quand les gens ont des enfants.
Life stages shape who we spend our time with. | Les étapes de la vie déterminent avec qui nous passons notre temps.
Long-distance friendships take extra effort. | Les amitiés à distance demandent un effort supplémentaire.
We make a point of meeting up once a year. | Nous tenons à nous voir une fois par an.
Reunions bring back a flood of memories. | Les retrouvailles font remonter un flot de souvenirs.
Nostalgia can make old friendships seem better than they were. | La nostalgie peut embellir les anciennes amitiés.
Friendships formed in adversity tend to last. | Les amitiés nées dans l'adversité ont tendance à durer.
Shared experiences create lasting bonds. | Les expériences partagées créent des liens durables.
I met some of my closest friends while traveling. | J'ai rencontré certains de mes amis les plus proches en voyage.
Joining a club is a great way to meet like-minded people. | S'inscrire à un club est un excellent moyen de rencontrer des gens qui partagent vos goûts.
Volunteering connects you with people who share your values. | Le bénévolat vous met en contact avec des gens qui partagent vos valeurs.
Apps for making friends are becoming more popular. | Les applications pour se faire des amis gagnent en popularité.
It takes about fifty hours to go from acquaintance to friend. | Il faut environ cinquante heures pour passer de connaissance à ami.
Friendship is one of the most underrated sources of happiness. | L'amitié est l'une des sources de bonheur les plus sous-estimées.
Romantic relationships often get more attention than friendships. | Les relations amoureuses reçoivent souvent plus d'attention que les amitiés.
Good friends celebrate your successes without envy. | Les bons amis célèbrent vos réussites sans envie.
Jealousy can quietly poison a friendship. | La jalousie peut empoisonner une amitié en silence.
Social media makes it easy to compare ourselves to others. | Les réseaux sociaux facilitent la comparaison avec les autres.
Everyone's highlight reel looks better than your daily life. | Les meilleurs moments des autres paraissent toujours plus beaux que votre quotidien.
I've muted a few people for my own peace of mind. | J'ai mis quelques personnes en sourdine pour ma tranquillité d'esprit.
Ghosting is a cowardly way to end a relationship. | Le ghosting est une façon lâche de mettre fin à une relation.
I'd rather someone be upfront with me. | Je préfère qu'on soit franc avec moi.
I tend to people-please, which isn't always healthy. | J'ai tendance à vouloir plaire à tout le monde, ce qui n'est pas toujours sain.
Saying no is a skill worth learning. | Savoir dire non est une compétence qui vaut la peine d'être apprise.
Good boundaries make for better friendships. | De bonnes limites font de meilleures amitiés.
Active listening shows people you genuinely care. | L'écoute active montre aux gens qu'ils comptent vraiment pour vous.
Sometimes people just need to vent, not get advice. | Parfois, les gens ont juste besoin de vider leur sac, pas de conseils.
Offering unsolicited advice can come across as condescending. | Donner des conseils non sollicités peut paraître condescendant.
A heartfelt apology can repair a lot of damage. | Des excuses sincères peuvent réparer beaucoup de dégâts.
I owe her an apology for what I said. | Je lui dois des excuses pour ce que j'ai dit.
It takes courage to admit you were wrong. | Il faut du courage pour admettre qu'on a eu tort.
Forgiveness doesn't mean forgetting. | Pardonner ne veut pas dire oublier.
I gave him the benefit of the doubt. | Je lui ai accordé le bénéfice du doute.
First impressions can be misleading. | Les premières impressions peuvent être trompeuses.
I misjudged her at first, but she turned out to be great. | Je l'ai mal jugée au début, mais elle s'est révélée formidable.
We bonded over our shared love of old films. | Nous nous sommes rapprochés grâce à notre amour commun des vieux films.
Banter is how we show affection. | La taquinerie, c'est notre façon de montrer notre affection.
Teasing can cross the line if you're not careful. | La taquinerie peut dépasser les bornes si l'on n'y prend pas garde.
Read the room before you make a joke. | Sentez l'ambiance avant de faire une blague.
Humor is a great way to defuse tension. | L'humour est un excellent moyen de désamorcer les tensions.
Cultural differences can lead to awkward misunderstandings. | Les différences culturelles peuvent créer des malentendus gênants.
Directness is valued in some cultures and seen as rude in others. | La franchise est appréciée dans certaines cultures et jugée impolie dans d'autres.
I've had to learn the unwritten rules of socializing here. | J'ai dû apprendre les règles tacites de la vie sociale ici.
Making friends in a new country can be isolating at first. | Se faire des amis dans un nouveau pays peut être isolant au début.
Expat friendships form quickly but can be fleeting. | Les amitiés entre expatriés se nouent vite mais peuvent être éphémères.
Language barriers make it hard to connect on a deeper level. | La barrière de la langue empêche de créer des liens profonds.
Friends become our family when we're far from home. | Les amis deviennent notre famille quand nous sommes loin de chez nous.
A good friend is someone you can be silent with. | Un bon ami, c'est quelqu'un avec qui on peut se taire.
Friendship doesn't need constant contact to stay strong. | L'amitié n'a pas besoin de contacts constants pour rester forte.
Show up for people when it matters most. | Soyez là pour les gens quand ça compte le plus.
In the end, it's the people that make life meaningful. | Au bout du compte, ce sont les gens qui donnent du sens à la vie.
`,
});
