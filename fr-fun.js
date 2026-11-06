// 法文對照（Français）：樂・娛樂休閒
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
addFrench("fun", {
  words: `
movie | le film | Regardons un film ce soir.
music | la musique | J'écoute de la musique tous les jours.
game | le jeu ; le match | Mon frère joue aux jeux vidéo.
weekend | le week-end | Qu'est-ce que tu fais le week-end ?
fun | amusant ; sympa | La fête était vraiment sympa.
favorite | préféré | Mon plat préféré, ce sont les raviolis.
song | la chanson | Cette chanson est tellement entraînante.
sing | chanter | Allons chanter au karaoké ce soir.
dance | danser | Elle adore danser.
draw | dessiner | J'aime dessiner des chats.
picture | l'image ; la photo | Regarde cette image !
photo | la photo | Tu peux nous prendre en photo ?
camera | l'appareil photo | J'ai acheté un nouvel appareil photo.
park | le parc | Allons au parc.
zoo | le zoo | Nous avons vu des pandas au zoo.
beach | la plage | Nous sommes allés à la plage l'été dernier.
party | la fête | Viens à ma fête samedi !
birthday | l'anniversaire | Joyeux anniversaire !
toy | le jouet | Mon petit frère adore ce jouet.
play | jouer | Jouons aux cartes.
watch | regarder | Je regarde la télé après le dîner.
cartoon | le dessin animé | Les enfants adorent ce dessin animé.
story | l'histoire | Raconte-moi une histoire.
piano | le piano | Elle joue très bien du piano.
guitar | la guitare | J'apprends à jouer de la guitare.
holiday | les vacances ; le jour férié | Qu'est-ce que tu as fait pendant les vacances ?
picnic | le pique-nique | Faisons un pique-nique au parc.
trip | le voyage ; l'excursion | Nous avons fait un voyage à Kenting.
travel | voyager | J'adore voyager.
museum | le musée | Le musée est gratuit le dimanche.
relax | se détendre | Je me détends en lisant le dimanche.
boring | ennuyeux | Le film était ennuyeux.
exciting | passionnant ; palpitant | Le match était vraiment palpitant !
comic | la bande dessinée ; la BD | Je lis des BD le week-end.
karaoke | le karaoké | Allons au karaoké ce soir.
cards | les cartes | Nous avons joué aux cartes toute la nuit.
puzzle | le puzzle ; l'énigme | J'ai fini un puzzle de 1 000 pièces.
kite | le cerf-volant | Faisons voler un cerf-volant à la plage.
balloon | le ballon (de baudruche) | Les enfants veulent un ballon rouge.
swing | la balançoire | Les enfants sont sur les balançoires.
slide | le toboggan | Mon fils adore le toboggan.
fishing | la pêche | Mon père adore la pêche.
video game | le jeu vidéo | Il joue aux jeux vidéo tous les soirs.
movie theater | le cinéma | Le cinéma est dans le centre commercial.
popcorn | le pop-corn | Je vais prendre du pop-corn et une boisson.
show | le spectacle ; l'émission | Le spectacle commence à huit heures.
magic | la magie | Les enfants ont adoré le spectacle de magie.
clown | le clown | Il y a un clown à la fête.
drum | le tambour ; la batterie | Il joue de la batterie.
violin | le violon | Elle s'entraîne au violon tous les jours.
painting | la peinture ; le tableau | Son tableau est au musée.
doll | la poupée | Ma sœur a beaucoup de poupées.
teddy bear | l'ours en peluche ; le nounours | Je dors avec un nounours.
robot | le robot | J'ai construit un robot avec des blocs.
blocks | les cubes ; les blocs de construction | Les enfants adorent construire avec des cubes.
Christmas | Noël | Nous décorons un sapin à Noël.
New Year | le Nouvel An | Bonne année !
fireworks | le feu d'artifice | Le feu d'artifice de Taipei 101 est incroyable.
gift | le cadeau | Merci pour le cadeau !
vacation | les vacances | Nous partons en vacances la semaine prochaine.
mountain | la montagne | Nous avons gravi une montagne.
sea | la mer | J'adore nager dans la mer.
river | la rivière | Nous avons pique-niqué au bord de la rivière.
flower | la fleur | Elle fait pousser des fleurs.
free time | le temps libre | Que fais-tu pendant ton temps libre ?
bowling | le bowling | Allons au bowling vendredi.
chess | les échecs | Mon grand-père m'a appris les échecs.
ice skating | le patin à glace | Nous avons fait du patin à glace à Taichung.
film | le film | Nous avons regardé un film hier soir.
radio | la radio | J'écoute la radio en voiture.
TV show | l'émission de télé ; la série | Quelle est ton émission de télé préférée ?
ball | la balle ; le ballon | Lance-moi la balle.
jump rope | la corde à sauter | Les enfants jouent à la corde à sauter à la récré.
hide-and-seek | cache-cache | Jouons à cache-cache.
sandcastle | le château de sable | Nous avons fait un château de sable à la plage.
swim | nager | J'aime nager en été.
run | courir | Courons jusqu'au parc.
jump | sauter | Tu sais sauter haut ?
laugh | rire | Cette blague m'a fait rire.
smile | sourire | Souris pour la photo !
happy | heureux ; content | Je suis tellement content aujourd'hui.
funny | drôle | Le film était très drôle.
scary | effrayant ; qui fait peur | Cette histoire fait peur.
loud | fort | La musique est trop forte.
ticket | le billet ; la place | J'ai deux places pour le spectacle.
circus | le cirque | Nous avons vu des éléphants au cirque.
carousel | le manège ; le carrousel | Ma sœur est montée sur le manège.
Ferris wheel | la grande roue | Nous sommes montés sur la grande roue le soir.
water park | le parc aquatique | Allons au parc aquatique cet été.
aquarium | l'aquarium | Nous avons vu des requins à l'aquarium.
playground | l'aire de jeux | Les enfants sont à l'aire de jeux.
sticker | l'autocollant ; le sticker | Je collectionne les albums d'autocollants.
coloring book | le livre de coloriage | Elle adore son livre de coloriage.
storybook | le livre d'histoires | Lis-moi un livre d'histoires, s'il te plaît.
marbles | les billes | Mon grand-père jouait aux billes quand il était petit.
yo-yo | le yo-yo | Tu sais faire des figures avec un yo-yo ?
trumpet | la trompette | Il joue de la trompette dans la fanfare.
flute | la flûte | Elle apprend la flûte.
camp | camper ; la colonie | Nous campons au bord du lac chaque été.
costume | le déguisement | J'ai mis un déguisement de chat pour la fête.
`,
  phrases: `
What do you like to do for fun? | Qu'est-ce que tu aimes faire pour t'amuser ?
Do you want to go to the movies? | Tu veux aller au cinéma ?
That sounds great! | Super idée !
What do you do for fun? | Qu'est-ce que tu fais pour te divertir ?
I like watching movies. | J'aime regarder des films.
Let's go to the movies. | Allons au cinéma.
What's on TV tonight? | Qu'est-ce qu'il y a à la télé ce soir ?
I love music. | J'adore la musique.
What kind of music do you like? | Quel genre de musique tu aimes ?
I like pop music. | J'aime la pop.
Let's sing karaoke. | Allons chanter au karaoké.
I can't sing well. | Je chante mal.
Can you play the guitar? | Tu sais jouer de la guitare ?
I play the piano. | Je joue du piano.
I like reading books. | J'aime lire.
I'm reading a good book. | Je lis un bon livre.
Let's play a game. | Faisons un jeu.
I like video games. | J'aime les jeux vidéo.
Do you want to play cards? | Tu veux jouer aux cartes ?
It's your turn. | C'est ton tour.
I win! | J'ai gagné !
You lose. | Tu as perdu.
Let's play again. | On rejoue.
Let's go to the park. | Allons au parc.
Let's have a picnic. | Faisons un pique-nique.
The weather is nice today. | Il fait beau aujourd'hui.
Let's go to the beach. | Allons à la plage.
I like swimming. | J'aime nager.
I like taking pictures. | J'aime prendre des photos.
Can you take a picture of us? | Vous pouvez nous prendre en photo ?
Smile! | Souriez !
Let's go to the zoo. | Allons au zoo.
I love animals. | J'adore les animaux.
Let's go shopping this weekend. | Allons faire du shopping ce week-end.
What are you doing this weekend? | Qu'est-ce que tu fais ce week-end ?
I'm free on Saturday. | Je suis libre samedi.
I'm busy on Sunday. | Je suis pris dimanche.
Do you want to come? | Tu veux venir ?
Sure, I'd love to. | Bien sûr, avec plaisir.
Sorry, I can't. | Désolé, je ne peux pas.
Maybe next time. | Peut-être la prochaine fois.
That sounds fun! | Ça a l'air amusant !
I had a great time. | Je me suis bien amusé.
It was boring. | C'était ennuyeux.
I'm bored. | Je m'ennuie.
Let's do something fun. | Faisons quelque chose d'amusant.
I like drawing. | J'aime dessiner.
I like dancing. | J'aime danser.
Let's dance! | Dansons !
I go hiking on weekends. | Je fais de la randonnée le week-end.
I like cooking. | J'aime cuisiner.
My hobby is gardening. | Mon passe-temps, c'est le jardinage.
Let's go camping. | Allons camper.
Let's go to a concert. | Allons à un concert.
The tickets are sold out. | Les billets sont épuisés.
What time does the movie start? | À quelle heure commence le film ?
Two tickets, please. | Deux places, s'il vous plaît.
Let's get some popcorn. | Prenons du pop-corn.
That movie was great! | Ce film était génial !
It was very funny. | C'était très drôle.
It was scary. | Ça faisait peur.
I cried at the end. | J'ai pleuré à la fin.
Who is your favorite singer? | Qui est ton chanteur préféré ?
I love this song. | J'adore cette chanson.
Turn up the music. | Monte le son.
Let's go to the museum. | Allons au musée.
Let's go to the night market. | Allons au marché de nuit.
I want to travel. | J'ai envie de voyager.
Where do you want to go? | Où veux-tu aller ?
I want to go to Japan. | Je veux aller au Japon.
Let's go on a trip. | Partons en voyage.
I'm on vacation. | Je suis en vacances.
Have fun! | Amuse-toi bien !
Enjoy your trip! | Bon voyage !
I like riding my bike. | J'aime faire du vélo.
Let's fly a kite. | Allons faire voler un cerf-volant.
I like puzzles. | J'aime les puzzles.
Let's watch a cartoon. | Regardons un dessin animé.
I watch videos online. | Je regarde des vidéos en ligne.
I play games on my phone. | Je joue à des jeux sur mon téléphone.
Let's go to the amusement park. | Allons au parc d'attractions.
I want to ride the roller coaster. | Je veux faire les montagnes russes.
I'm scared! | J'ai peur !
That was fun! | C'était génial !
Let's go to a café. | Allons dans un café.
I like to relax at home. | J'aime me détendre à la maison.
I'm going to take a nap. | Je vais faire une sieste.
Let's go for a walk. | Allons nous promener.
Let's meet at the park. | Retrouvons-nous au parc.
I collect stamps. | Je collectionne les timbres.
I like the beach. | J'aime la plage.
I like the mountains. | J'aime la montagne.
It's a beautiful day. | Il fait un temps magnifique.
We had a party. | Nous avons fait une fête.
It's my birthday today. | C'est mon anniversaire aujourd'hui.
Happy birthday! | Joyeux anniversaire !
Let's celebrate! | Fêtons ça !
Are you having fun? | Tu t'amuses bien ?
Let's go home. I'm tired. | Rentrons. Je suis fatigué.
See you next weekend! | À le week-end prochain !
`,
});

// ---------- 中級 Intermediate ----------
addFrench("fun", {
  words: `
concert | le concert | Nous avons eu des places pour le concert.
binge-watch | regarder en rafale ; binger | Je regarde des séries en rafale le week-end.
hobby | le passe-temps ; le loisir | La photographie est mon passe-temps.
spoiler | le spoiler ; le divulgâcheur | Pas de spoilers, s'il te plaît ! Je ne l'ai pas encore vu.
streaming | le streaming | Les services de streaming ont changé notre façon de regarder la télé.
sold out | complet ; épuisé | Les billets étaient épuisés en quelques minutes.
festival | le festival ; la fête | La fête des lanternes est magnifique.
exhibition | l'exposition | Il y a une nouvelle exposition de photos en centre-ville.
theater | le théâtre | Nous avons vu une pièce au Théâtre national.
musical | la comédie musicale | J'ai vu cette comédie musicale trois fois.
band | le groupe | Mon groupe préféré fait une tournée en Asie.
album | l'album | Leur nouvel album sort vendredi.
lyrics | les paroles | Je ne comprends pas les paroles.
playlist | la playlist | J'ai fait une playlist pour notre road trip.
podcast | le podcast | J'écoute un podcast pendant mon trajet.
documentary | le documentaire | Nous avons regardé un documentaire sur les baleines.
comedy | la comédie | J'ai besoin d'une bonne comédie pour me remonter le moral.
thriller | le thriller | Ce thriller m'a tenu en haleine.
sequel | la suite | La suite est meilleure que l'original.
trailer | la bande-annonce | Tu as déjà vu la bande-annonce ?
director | le réalisateur | Le réalisateur a remporté un prix à Cannes.
actor | l'acteur | C'est mon acteur préféré.
audience | le public | Le public s'est levé pour applaudir.
review | la critique | Le film a eu d'excellentes critiques.
rating | la note | La série a une très bonne note en ligne.
board game | le jeu de société | Nous avons joué à un jeu de société toute la soirée.
amusement park | le parc d'attractions | Allons au parc d'attractions samedi.
camping | le camping | Nous avons fait du camping à la montagne.
craft | l'artisanat ; la création artisanale | Elle vend ses créations sur les marchés du week-end.
subscribe | s'abonner | Je suis abonné à trois services de streaming.
influencer | l'influenceur | Cet influenceur a deux millions d'abonnés.
fan | le fan | Je suis un grand fan de K-pop.
episode | l'épisode | Le dernier épisode passe ce soir.
gallery | la galerie | Nous avons visité une petite galerie d'art.
performance | la représentation ; le spectacle | La représentation a duré deux heures.
stage | la scène | Le groupe est monté sur scène à neuf heures.
ticket booth | la billetterie ; le guichet | Achetez vos billets au guichet.
front row | le premier rang | Nous avions des places au premier rang.
encore | le rappel | Le public a réclamé un rappel.
lineup | la programmation ; l'affiche | La programmation du festival est incroyable cette année.
cosplay | le cosplay | Elle fabrique elle-même ses costumes de cosplay.
anime | l'anime ; le dessin animé japonais | J'ai vu tous les films d'animation de Miyazaki.
manga | le manga | Il lit des mangas dans le métro.
K-drama | le drama coréen | Je suis accro aux dramas coréens.
variety show | l'émission de variétés | Les émissions de variétés taïwanaises sont hilarantes.
reality show | l'émission de téléréalité | Je ne supporte pas la téléréalité.
talk show | le talk-show | Le talk-show recevait un invité célèbre.
stand-up comedy | le stand-up | Le stand-up devient populaire à Taipei.
escape room | l'escape game | Nous sommes sortis de l'escape game à une minute de la fin.
theme park | le parc à thème | Le parc à thème a de nouvelles montagnes russes.
roller coaster | les montagnes russes | J'ai hurlé dans les montagnes russes.
arcade | la salle d'arcade | Nous avons dépensé toutes nos pièces à la salle d'arcade.
claw machine | la machine à pince | J'ai gagné une peluche à la machine à pince.
mobile game | le jeu sur mobile | Elle est accro à un jeu sur mobile.
livestream | le live ; le direct | Il regarde des lives de jeux vidéo tous les soirs.
followers | les abonnés | Elle a dix mille abonnés.
meme | le mème | Ce mème est partout.
photography | la photographie | Je suis un cours de photographie.
gardening | le jardinage | Le jardinage m'aide à me détendre.
knitting | le tricot | Ma tante s'est mise au tricot.
baking | la pâtisserie ; faire du pain | Faire du pain, c'est mon passe-temps du week-end.
volunteer | faire du bénévolat | Je fais du bénévolat dans un refuge pour animaux.
day trip | l'excursion d'une journée | Faisons une excursion d'une journée à Jiufen.
staycation | les vacances à domicile ; la staycation | Nous avons fait une staycation dans un hôtel de Taipei.
hot spring | la source chaude | Beitou est célèbre pour ses sources chaudes.
bucket list | la liste de choses à faire avant de mourir | Voir les aurores boréales fait partie de ma liste de choses à faire avant de mourir.
horror | le film d'horreur | Je ne peux pas regarder de films d'horreur seul.
romance | le film romantique | Elle adore les bons films romantiques.
animation | l'animation | Le studio Ghibli fait de magnifiques films d'animation.
fantasy | la fantasy ; le fantastique | Ce livre est une aventure de fantasy.
science fiction | la science-fiction | J'aime les romans de science-fiction.
subtitles | les sous-titres | Je regarde les films étrangers avec des sous-titres.
dubbed | doublé | Je préfère la version originale à la version doublée.
season | la saison | La nouvelle saison sort en mai.
finale | le final ; le dernier épisode | Le dernier épisode était tellement émouvant.
membership | l'abonnement ; l'adhésion | Mon abonnement à la salle de sport comprend la piscine.
gig | le concert ; la date | Le groupe a un concert vendredi soir.
venue | la salle ; le lieu | La salle peut accueillir 5 000 personnes.
autograph | l'autographe | J'ai eu l'autographe du chanteur !
selfie | le selfie | Prenons un selfie ici.
souvenir | le souvenir | J'ai acheté un souvenir pour ma sœur.
lantern | la lanterne | Nous avons lâché une lanterne céleste à Pingxi.
parade | le défilé | Le défilé a traversé le centre-ville.
fair | la foire ; le salon | Nous sommes allés au salon du livre dimanche.
carnival | le carnaval | Le carnaval avait de la musique et des stands de nourriture.
street performer | l'artiste de rue | Un artiste de rue jonglait sur la place.
puppet show | le spectacle de marionnettes | Le spectacle de marionnettes taïwanais est un art traditionnel.
open mic | la scène ouverte | J'ai chanté lors d'une scène ouverte.
jam session | le bœuf ; la jam session | Les musiciens ont fait un bœuf après le concert.
rehearsal | la répétition | Nous avons une répétition avant le concert.
audition | l'audition | Elle a une audition pour la comédie musicale.
workshop | l'atelier | J'ai participé à un atelier de photo.
pottery | la poterie | La poterie, c'est très relaxant.
calligraphy | la calligraphie | Mon grand-père pratique la calligraphie.
origami | l'origami | Elle sait faire une grue en origami.
jigsaw puzzle | le puzzle | Nous avons fait un puzzle de 1 000 pièces.
crossword | les mots croisés | Il fait les mots croisés tous les matins.
trivia | le quiz de culture générale | Notre équipe a gagné la soirée quiz.
sightseeing | le tourisme ; les visites | Nous avons passé la journée à faire du tourisme.
backpacking | le voyage sac au dos | J'ai voyagé sac au dos en Asie du Sud-Est.
have a blast | s'éclater | On va s'éclater au concert.
paint the town red | faire la fête toute la nuit | Faisons la fête toute la nuit ce soir !
let your hair down | se lâcher | Lâche-toi à la fête.
kick back | se poser ; se détendre | J'ai juste envie de me poser ce week-end.
a night out | une sortie en ville ; une soirée | On a besoin d'une soirée dehors.
party animal | le fêtard | C'est un vrai fêtard.
all work and no play | que du travail et pas de loisirs | Trop de travail sans loisirs rend la vie bien terne.
steal the show | voler la vedette | La petite danseuse va voler la vedette.
two thumbs up | un grand bravo ; à recommander | Ce film, je le recommande vivement.
a barrel of laughs | très drôle ; une rigolade | Le voyage a été une franche rigolade.
on the edge of your seat | tenu en haleine | Ce jeu vous tient en haleine.
killjoy | le rabat-joie | Ne fais pas ton rabat-joie.
free as a bird | libre comme l'air | En vacances, je me sens libre comme l'air.
the life of the party | le boute-en-train | Elle est toujours le boute-en-train de la soirée.
just for kicks | juste pour rigoler | On l'a fait juste pour rigoler.
`,
  phrases: `
Have you seen the latest episode? | Tu as vu le dernier épisode ?
I'm not really into horror movies. | Je ne suis pas trop films d'horreur.
It was a total waste of time. | C'était une perte de temps totale.
I've been really into hiking lately. | Je suis à fond dans la randonnée ces temps-ci.
I'm trying to find a new hobby. | J'essaie de trouver un nouveau passe-temps.
I've taken up rock climbing. | Je me suis mis à l'escalade.
I used to play the violin, but I gave it up. | Je jouais du violon, mais j'ai arrêté.
I'm thinking of learning to surf. | Je pense apprendre le surf.
Have you seen the new Marvel movie? | Tu as vu le nouveau Marvel ?
No spoilers, please! | Pas de spoilers, s'il te plaît !
I'm binge-watching a new series. | Je regarde une nouvelle série en rafale.
I stayed up all night watching it. | J'ai passé la nuit à la regarder.
What are you watching these days? | Qu'est-ce que tu regardes en ce moment ?
It's worth watching. | Ça vaut le coup d'être vu.
The ending was a bit disappointing. | La fin était un peu décevante.
The book is better than the movie. | Le livre est meilleur que le film.
I read about two books a month. | Je lis environ deux livres par mois.
I prefer e-books because they're lighter. | Je préfère les livres numériques parce qu'ils sont plus légers.
I listen to audiobooks on my commute. | J'écoute des livres audio pendant mes trajets.
I joined a book club. | Je me suis inscrit à un club de lecture.
Are you going to the music festival? | Tu vas au festival de musique ?
The concert was absolutely amazing. | Le concert était absolument génial.
We queued for hours to get in. | Nous avons fait la queue des heures pour entrer.
I managed to get tickets online. | J'ai réussi à avoir des billets en ligne.
The tickets sold out in minutes. | Les billets se sont vendus en quelques minutes.
The seats were too far from the stage. | Les places étaient trop loin de la scène.
I'm a huge fan of that band. | Je suis un grand fan de ce groupe.
I've been to three of their concerts. | Je suis allé à trois de leurs concerts.
Let's check out the new exhibition. | Allons voir la nouvelle exposition.
The museum is free on Wednesdays. | Le musée est gratuit le mercredi.
The gallery is showing some local artists. | La galerie expose des artistes locaux.
I'm not really into modern art. | L'art moderne, ce n'est pas trop mon truc.
Let's go for a bike ride along the river. | Allons faire du vélo le long de la rivière.
We're going camping in the mountains this weekend. | Nous allons camper à la montagne ce week-end.
Don't forget to bring insect repellent. | N'oublie pas l'anti-moustiques.
The view from the top was breathtaking. | La vue du sommet était à couper le souffle.
Let's watch the sunset from the beach. | Regardons le coucher de soleil depuis la plage.
We're planning a weekend getaway. | Nous prévoyons une escapade le week-end.
Let's book a hot spring hotel. | Réservons un hôtel avec sources chaudes.
I need a break from work. | J'ai besoin de faire une pause dans le travail.
I'm going to spend the weekend doing nothing. | Je vais passer le week-end à ne rien faire.
Sometimes I just like to stay in and relax. | Parfois, j'aime juste rester chez moi et me détendre.
Let's have a movie night at home. | Faisons une soirée cinéma à la maison.
How about a board game night? | Et si on faisait une soirée jeux de société ?
I'm terrible at this game. | Je suis nul à ce jeu.
Beginner's luck! | La chance du débutant !
You're so competitive! | Qu'est-ce que tu es compétitif !
It's just a game. | Ce n'est qu'un jeu.
I spend too much time gaming. | Je passe trop de temps à jouer aux jeux vidéo.
I'm trying to cut down on screen time. | J'essaie de réduire mon temps d'écran.
I play online with my friends. | Je joue en ligne avec mes amis.
Do you want to join our team? | Tu veux rejoindre notre équipe ?
I've been learning to cook new dishes. | J'apprends à cuisiner de nouveaux plats.
Baking is a great way to relax. | La pâtisserie, c'est un excellent moyen de se détendre.
I go to a pottery class every Tuesday. | Je vais à un cours de poterie tous les mardis.
I've started journaling. | J'ai commencé à tenir un journal.
I find painting very relaxing. | Je trouve la peinture très relaxante.
I go to the gym three times a week. | Je vais à la salle de sport trois fois par semaine.
Yoga helps me unwind. | Le yoga m'aide à décompresser.
I joined a running club. | Je me suis inscrit à un club de course.
I volunteer at an animal shelter on weekends. | Je suis bénévole dans un refuge pour animaux le week-end.
Let's try that escape room. | Essayons cet escape game.
I'd love to try paragliding someday. | J'aimerais bien essayer le parapente un jour.
That's on my bucket list. | C'est sur ma liste de choses à faire avant de mourir.
Shall we go out for drinks? | On sort boire un verre ?
There's a great bar with live music nearby. | Il y a un super bar avec des concerts pas loin.
I'm not much of a party person. | Je ne suis pas très fêtes.
I'm more of a homebody. | Je suis plutôt casanier.
Let's go to the night market and try some snacks. | Allons au marché de nuit goûter quelques en-cas.
The theme park is packed on weekends. | Le parc à thème est bondé le week-end.
Let's go on a weekday to avoid the crowds. | Allons-y en semaine pour éviter la foule.
The line for that ride is an hour long. | Il y a une heure de queue pour cette attraction.
I've been saving up for a trip to Europe. | J'économise pour un voyage en Europe.
I prefer traveling on my own. | Je préfère voyager seul.
I like to plan everything in advance. | J'aime tout prévoir à l'avance.
I'd rather go with the flow. | Je préfère me laisser porter.
I'm into photography these days. | Je suis passionné de photo en ce moment.
I post my photos on Instagram. | Je publie mes photos sur Instagram.
I've started a small YouTube channel. | J'ai lancé une petite chaîne YouTube.
Let's go fishing this weekend. | Allons pêcher ce week-end.
I love going to festivals. | J'adore aller aux festivals.
The lantern festival is beautiful at night. | La fête des lanternes est magnifique la nuit.
The fireworks were spectacular. | Le feu d'artifice était spectaculaire.
Let's go for a drive along the coast. | Allons faire un tour en voiture le long de la côte.
It's a good day for a picnic. | C'est une belle journée pour un pique-nique.
I'm learning to play the ukulele. | J'apprends à jouer du ukulélé.
I practice for half an hour every day. | Je m'entraîne une demi-heure par jour.
I'm not very good yet, but I'm improving. | Je ne suis pas encore très bon, mais je progresse.
Do you want to come along? | Tu veux venir avec nous ?
The more, the merrier. | Plus on est de fous, plus on rit.
I'll pass this time. | Je passe mon tour cette fois.
Count me in! | Je suis partant !
What time should we meet? | On se retrouve à quelle heure ?
Let's play it by ear. | On verra sur le moment.
I'm exhausted, but it was worth it. | Je suis épuisé, mais ça valait le coup.
That was the best weekend in ages. | C'était le meilleur week-end depuis une éternité.
We should do this more often. | On devrait faire ça plus souvent.
I need a holiday after my holiday! | J'ai besoin de vacances après mes vacances !
Have you ever tried stand-up paddleboarding? | Tu as déjà essayé le stand-up paddle ?
Let's grab dinner before the show. | Allons dîner avant le spectacle.
`,
});

// ---------- 高級 Advanced ----------
addFrench("fun", {
  words: `
plot twist | le rebondissement | Le rebondissement final a pris tout le monde par surprise.
critically acclaimed | salué par la critique | C'est un film indépendant salué par la critique.
immersive | immersif | Le musée propose une expérience artistique immersive.
mainstream | grand public | Sa musique est enfin devenue grand public.
nostalgic | nostalgique | La bande originale me rend nostalgique.
escapism | l'évasion | Les romans de fantasy offrent une forme d'évasion.
genre | le genre | La science-fiction est mon genre préféré.
cinematography | la photographie (d'un film) | La photographie du film a remporté un Oscar.
screenplay | le scénario | Elle a écrit le scénario elle-même.
soundtrack | la bande originale | La bande originale est dans ma playlist.
protagonist | le protagoniste ; le héros | Le héros est un robot solitaire.
antagonist | l'antagoniste ; le méchant | L'antagoniste est étonnamment attachant.
cliffhanger | le suspense de fin d'épisode | La saison s'est terminée sur un suspense insoutenable.
cameo | l'apparition éclair ; le caméo | Le réalisateur fait une apparition éclair dans chaque film.
box office | le box-office | Le film a dominé le box-office pendant trois semaines.
blockbuster | le blockbuster ; le film à grand spectacle | L'été, c'est la saison des blockbusters.
indie | indépendant | Je préfère la musique indépendante à la pop.
avant-garde | d'avant-garde | La galerie expose des installations d'avant-garde.
satire | la satire | L'émission est une satire mordante de la politique.
parody | la parodie | Ils ont fait une parodie de la célèbre publicité.
fandom | la communauté de fans ; le fandom | La communauté de fans a récolté de l'argent pour une association.
cult classic | le film culte | Il a fait un flop en salle mais il est devenu culte.
virtual reality | la réalité virtuelle | Les jeux en réalité virtuelle sont de plus en plus réalistes.
leisure | les loisirs | Que fais-tu pendant tes loisirs ?
pastime | le passe-temps | La pêche est un passe-temps populaire ici.
subculture | la sous-culture | Le cosplay a commencé comme une petite sous-culture.
aesthetic | l'esthétique | Le café a une esthétique minimaliste.
highbrow | intellectuel ; élitiste | Le festival mêle films d'auteur et films populaires.
remake | le remake | Le remake ne vaut pas l'original.
adaptation | l'adaptation | L'adaptation télé suit fidèlement le roman.
franchise | la franchise ; la saga | La saga compte dix films.
premiere | l'avant-première | L'avant-première a lieu vendredi prochain à Taipei.
phenomenon | le phénomène | La série est devenue un phénomène mondial.
auteur | l'auteur ; le cinéaste d'auteur | Le cinéaste contrôle chaque détail de ses films.
arthouse | art et essai | Le cinéma d'art et essai passe des films étrangers.
critique | la critique | Sa critique du film était sévère.
pacing | le rythme | Le rythme du deuxième acte est lent.
character arc | l'arc narratif du personnage | L'arc narratif du héros est satisfaisant.
foreshadowing | l'annonce ; la préfiguration | La scène d'ouverture contient une préfiguration habile.
unreliable narrator | le narrateur non fiable | Le roman utilise un narrateur non fiable.
ensemble cast | la distribution chorale | Le film réunit une distribution chorale.
typecast | cantonner à un type de rôle | On le cantonne aux rôles de méchant.
box-office flop | l'échec commercial ; le flop | La suite a été un échec commercial.
sleeper hit | le succès surprise | Le film à petit budget est devenu un succès surprise.
streaming wars | la guerre du streaming | La guerre du streaming a fait grimper les coûts de production.
algorithmic | algorithmique | Les recommandations algorithmiques influencent ce que nous regardons.
binge culture | la culture du binge-watching | La culture du binge-watching a changé l'écriture des séries.
spin-off | le spin-off ; la série dérivée | La série dérivée est meilleure que l'originale.
intellectual property | la propriété intellectuelle | Les studios misent sur des propriétés intellectuelles existantes.
reboot | le reboot ; le redémarrage | Un nouveau reboot de Spider-Man arrive.
canon | le canon | Les fans se disputent sur ce qui fait partie du canon.
fan fiction | la fanfiction | Elle écrit des fanfictions en ligne.
immersive theater | le théâtre immersif | Le théâtre immersif permet au public de circuler.
installation | l'installation | L'installation occupe toute la salle.
curator | le commissaire d'exposition | La commissaire a présenté l'exposition.
retrospective | la rétrospective | Le musée a organisé une rétrospective de son œuvre.
gamification | la ludification | La ludification rend l'apprentissage plus amusant.
microtransaction | la microtransaction | Les joueurs détestent les jeux pleins de microtransactions.
creator economy | l'économie des créateurs | L'économie des créateurs récompense les contenus viraux.
parasocial | parasocial | Les fans nouent des relations parasociales avec les streamers.
doomscrolling | le doomscrolling | J'ai gâché ma soirée à faire du doomscrolling.
digital detox | la détox numérique | Je fais une détox numérique ce week-end.
hedonism | l'hédonisme | Le film est une ode à l'hédonisme.
catharsis | la catharsis | La tragédie offre au public une catharsis.
zeitgeist | l'air du temps ; l'esprit de l'époque | La chanson a capté l'air du temps des années 90.
virality | la viralité | La viralité est difficile à prévoir.
narrative | la narration ; le récit | Le jeu a une narration captivante.
storytelling | l'art de raconter des histoires | Un bon art du récit vous rend accro.
worldbuilding | la construction d'univers | La construction de l'univers de la série est remarquable.
montage | le montage | Le montage d'entraînement est un cliché de cinéma.
voiceover | la voix off | Le documentaire a une voix off apaisante.
dialogue | les dialogues | Les dialogues sonnaient juste.
monologue | le monologue | Son dernier monologue était puissant.
symbolism | le symbolisme | Le film est plein de symbolisme religieux.
allegory | l'allégorie | Le roman est une allégorie du pouvoir politique.
anthology | l'anthologie ; le recueil | C'est un recueil de nouvelles d'horreur.
biopic | le biopic | Le biopic raconte l'histoire d'un chanteur célèbre.
period drama | le drame historique ; le film en costumes | J'adore les drames historiques sous la dynastie Qing.
noir | le film noir | C'est un thriller élégant, un vrai film noir.
slapstick | le burlesque | Le burlesque fonctionne dans toutes les langues.
deadpan | pince-sans-rire | Son humour pince-sans-rire est hilarant.
pun | le jeu de mots | Les blagues de papa sont souvent de mauvais jeux de mots.
irony | l'ironie | L'ironie a échappé à la plupart des spectateurs.
melodrama | le mélodrame | L'intrigue a viré au mélodrame.
tearjerker | le film à faire pleurer ; le mélo | Prends des mouchoirs, c'est un vrai mélo.
page-turner | le livre qu'on ne lâche pas | Ce thriller, on ne peut pas le lâcher.
bestseller | le best-seller | Son premier roman est devenu un best-seller.
critic | le critique | Les critiques ont adoré le film, mais pas le public.
masterpiece | le chef-d'œuvre | Beaucoup le considèrent comme un chef-d'œuvre du cinéma.
overhyped | surcoté | J'ai trouvé la série surcotée.
underrated | sous-estimé | C'est une pépite sous-estimée des années 90.
binge-worthy | à dévorer d'une traite | La série est à dévorer d'une traite.
must-see | incontournable | L'exposition est incontournable.
guilty pleasure | le plaisir coupable | La téléréalité, c'est mon plaisir coupable.
flow state | l'état de flow | La peinture me met dans un état de flow.
mindfulness | la pleine conscience | La randonnée est pour moi une forme de pleine conscience.
experiential | expérientiel | Les gens dépensent davantage pour le tourisme expérientiel.
overtourism | le surtourisme | Le surtourisme abîme les sites populaires.
patronage | le mécénat | Les arts dépendaient autrefois du mécénat royal.
royalties | les droits d'auteur ; les royalties | Les droits issus du streaming sont minuscules pour la plupart des artistes.
whoop it up | faire la fête ; faire la bringue | Faisons la fête après la victoire.
a feast for the eyes | un régal pour les yeux | Le feu d'artifice était un régal pour les yeux.
a far cry from | bien loin de | Cet hôtel est bien loin du précédent.
the time of your life | le moment de ta vie ; un moment inoubliable | Tu vas vivre un moment inoubliable.
go with the flow | se laisser porter | En vacances, je me laisse porter.
hit the spot | tomber à pic ; faire du bien | Cette glace m'a fait un bien fou.
make a splash | faire sensation | La nouvelle émission va faire sensation.
in full swing | battre son plein | La fête battait son plein.
a busman's holiday | des vacances passées à faire son métier | Cuisiner en vacances, pour un chef, c'est faire son métier même en congé.
ham it up | en faire des tonnes ; cabotiner | Il aime en faire des tonnes sur scène.
let off steam | se défouler | La danse m'aide à me défouler.
over the moon | aux anges | J'étais aux anges d'avoir les billets.
break the ice | briser la glace | Les jeux aident à briser la glace.
call it a night | en rester là pour ce soir | Restons-en là pour ce soir.
rain check | remettre à plus tard | On peut remettre ça à une autre fois ?
`,
  phrases: `
It didn't live up to the hype. | Ça n'a pas été à la hauteur du battage.
The cinematography was breathtaking, but the pacing dragged. | La photographie était à couper le souffle, mais le rythme traînait.
It's the kind of film that stays with you long after the credits roll. | C'est le genre de film qui vous reste en tête longtemps après le générique.
Leisure time has become another thing we try to optimize. | Le temps libre est devenu une chose de plus qu'on essaie d'optimiser.
We've turned hobbies into side hustles. | Nous avons transformé nos passe-temps en petits boulots.
Not everything you enjoy needs to be monetized. | Tout ce qu'on aime n'a pas besoin d'être rentabilisé.
There's real value in doing something purely for pleasure. | Faire quelque chose uniquement pour le plaisir a une vraie valeur.
Boredom can actually spark creativity. | L'ennui peut en fait stimuler la créativité.
We rarely allow ourselves to be idle anymore. | Nous nous autorisons rarement à ne rien faire.
Doomscrolling isn't really rest. | Faire défiler les mauvaises nouvelles, ce n'est pas vraiment se reposer.
Streaming has fundamentally changed how we watch TV. | Le streaming a profondément changé notre façon de regarder la télé.
Algorithms decide much of what we end up watching. | Les algorithmes décident d'une bonne partie de ce que nous finissons par regarder.
Recommendation engines can trap you in a bubble. | Les moteurs de recommandation peuvent vous enfermer dans une bulle.
Subscription fatigue is setting in. | La lassitude des abonnements s'installe.
The sheer amount of content is overwhelming. | La quantité de contenus est écrasante.
I spend more time choosing what to watch than actually watching. | Je passe plus de temps à choisir quoi regarder qu'à regarder.
The film was visually stunning but emotionally hollow. | Le film était visuellement époustouflant mais émotionnellement creux.
The plot was riddled with holes. | Le scénario était truffé d'incohérences.
The pacing dragged in the second half. | Le rythme traînait dans la seconde moitié.
The performances carried an otherwise forgettable script. | Les acteurs ont porté un scénario sinon oubliable.
It's a slow burn, but the payoff is worth it. | Ça démarre lentement, mais la fin en vaut la peine.
The series has been renewed for another season. | La série a été renouvelée pour une nouvelle saison.
The franchise is running out of steam. | La saga s'essouffle.
Hollywood relies too heavily on sequels and remakes. | Hollywood mise trop sur les suites et les remakes.
Independent films often take more creative risks. | Les films indépendants prennent souvent plus de risques créatifs.
Korean dramas have taken the world by storm. | Les dramas coréens ont conquis le monde.
Soft power is projected through popular culture. | Le soft power passe par la culture populaire.
Fandoms can be intensely loyal and occasionally toxic. | Les communautés de fans peuvent être très fidèles et parfois toxiques.
Live music has a raw energy that recordings can't capture. | La musique live a une énergie brute qu'aucun enregistrement ne capte.
Ticket scalping has become a serious problem. | La revente illégale de billets est devenue un vrai problème.
Dynamic pricing has made concerts unaffordable for many fans. | La tarification dynamique a rendu les concerts inabordables pour beaucoup de fans.
Artists earn a pittance from streaming royalties. | Les artistes touchent des clopinettes grâce au streaming.
Vinyl has made a surprising comeback. | Le vinyle a fait un retour surprenant.
Nostalgia is a powerful driver of consumption. | La nostalgie est un puissant moteur de consommation.
Gaming is now a bigger industry than film and music combined. | Le jeu vidéo pèse désormais plus que le cinéma et la musique réunis.
Esports fill stadiums and attract huge sponsorships. | L'e-sport remplit des stades et attire d'énormes sponsors.
Video games can be a legitimate art form. | Le jeu vidéo peut être une forme d'art à part entière.
Loot boxes have been criticized as a form of gambling. | Les loot boxes sont critiquées comme une forme de jeu d'argent.
Games are designed to be as addictive as possible. | Les jeux sont conçus pour être aussi addictifs que possible.
Gaming can foster community as well as isolation. | Le jeu vidéo peut créer du lien comme de l'isolement.
Board games have enjoyed a renaissance. | Les jeux de société connaissent une renaissance.
Analog hobbies offer a welcome break from screens. | Les loisirs analogiques offrent une pause bienvenue loin des écrans.
Crafting has a meditative quality. | Les travaux manuels ont quelque chose de méditatif.
Working with your hands is deeply satisfying. | Travailler de ses mains est profondément satisfaisant.
Flow is that state where you lose track of time. | Le flow, c'est cet état où l'on perd la notion du temps.
I find gardening incredibly grounding. | Le jardinage m'ancre incroyablement.
Spending time in nature has measurable health benefits. | Passer du temps dans la nature a des bienfaits mesurables sur la santé.
Forest bathing has become popular in recent years. | Les bains de forêt sont devenus populaires ces dernières années.
Outdoor activities have boomed since the pandemic. | Les activités de plein air ont explosé depuis la pandémie.
Popular trails are suffering from overcrowding. | Les sentiers populaires souffrent de la surfréquentation.
Leave no trace when you camp. | Ne laissez aucune trace quand vous campez.
Overtourism is damaging fragile ecosystems. | Le surtourisme abîme des écosystèmes fragiles.
Instagram has turned scenic spots into photo queues. | Instagram a transformé les beaux paysages en files d'attente pour la photo.
People seem more interested in documenting experiences than living them. | Les gens semblent plus intéressés à documenter leurs expériences qu'à les vivre.
I try to put my phone away and just be present. | J'essaie de ranger mon téléphone et d'être simplement présent.
Travel broadens the mind, but only if you're open to it. | Les voyages ouvrent l'esprit, mais seulement si l'on est ouvert.
Slow travel means staying longer in fewer places. | Le voyage lent, c'est rester plus longtemps dans moins d'endroits.
I prefer experiences over possessions. | Je préfère les expériences aux biens matériels.
Theme parks have become increasingly expensive. | Les parcs à thème sont de plus en plus chers.
Paid fast passes have created a two-tier experience. | Les coupe-files payants ont créé une expérience à deux vitesses.
Museums are reinventing themselves to attract younger audiences. | Les musées se réinventent pour attirer un public plus jeune.
Immersive exhibitions blur the line between art and entertainment. | Les expositions immersives brouillent la frontière entre art et divertissement.
Public funding for the arts is always the first to be cut. | Le financement public de la culture est toujours le premier à être coupé.
Culture shouldn't be a luxury reserved for the few. | La culture ne devrait pas être un luxe réservé à quelques-uns.
Community events strengthen local identity. | Les événements locaux renforcent l'identité locale.
Traditional festivals are evolving to stay relevant. | Les fêtes traditionnelles évoluent pour rester d'actualité.
Commercialization has stripped some festivals of their meaning. | La commercialisation a vidé certaines fêtes de leur sens.
Work-life balance is impossible without real downtime. | L'équilibre vie pro-vie perso est impossible sans vrai temps de repos.
Many people feel guilty when they're not being productive. | Beaucoup de gens culpabilisent quand ils ne sont pas productifs.
Rest is not a reward; it's a necessity. | Le repos n'est pas une récompense ; c'est une nécessité.
Hobbies give you an identity outside of work. | Les loisirs vous donnent une identité en dehors du travail.
Shared interests are a great way to make friends as an adult. | Les centres d'intérêt communs sont un excellent moyen de se faire des amis à l'âge adulte.
Amateur sports leagues build a sense of community. | Les ligues sportives amateurs créent un sentiment d'appartenance.
Picking up a new skill as an adult can be humbling. | Apprendre une nouvelle compétence à l'âge adulte peut rendre humble.
Being a beginner again is good for the ego. | Redevenir débutant fait du bien à l'ego.
You don't need to be good at something to enjoy it. | Pas besoin d'être doué pour aimer quelque chose.
I've given myself permission to be mediocre at my hobbies. | Je m'autorise à être médiocre dans mes loisirs.
Comparison is the thief of joy. | La comparaison est la voleuse de joie.
Social media turns hobbies into performances. | Les réseaux sociaux transforment les loisirs en performances.
The pressure to have an interesting life is exhausting. | La pression d'avoir une vie intéressante est épuisante.
Some of my best memories are from doing nothing in particular. | Certains de mes meilleurs souvenirs viennent de moments où je ne faisais rien de spécial.
The anticipation is often half the pleasure. | L'attente fait souvent la moitié du plaisir.
Novelty makes time feel longer in memory. | La nouveauté allonge le temps dans nos souvenirs.
Routine makes the weeks blur together. | La routine fait que les semaines se confondent.
I try to do at least one new thing every month. | J'essaie de faire au moins une chose nouvelle chaque mois.
Stepping out of your comfort zone is how you grow. | C'est en sortant de sa zone de confort qu'on grandit.
Adventure doesn't have to mean traveling far. | L'aventure ne veut pas forcément dire partir loin.
Exploring your own city with fresh eyes can be eye-opening. | Explorer sa propre ville avec un regard neuf peut être une révélation.
Leisure time is unequally distributed across society. | Le temps de loisir est inégalement réparti dans la société.
Many workers simply can't afford time off. | Beaucoup de travailleurs ne peuvent tout simplement pas se permettre de congés.
Paid vacation is far from universal. | Les congés payés sont loin d'être universels.
A four-day week would transform how people spend their time. | La semaine de quatre jours transformerait la façon dont les gens occupent leur temps.
We overestimate how much free time we'll have in the future. | Nous surestimons le temps libre que nous aurons à l'avenir.
Free time expands to fill whatever you put into it. | Le temps libre se remplit de tout ce qu'on y met.
Play is as important for adults as it is for children. | Le jeu est aussi important pour les adultes que pour les enfants.
Laughter is one of the best stress relievers there is. | Le rire est l'un des meilleurs anti-stress qui soient.
A good book can transport you to another world. | Un bon livre peut vous transporter dans un autre monde.
Fiction builds empathy by letting you inhabit other lives. | La fiction développe l'empathie en nous faisant vivre d'autres vies.
Art lets us see the familiar in a new light. | L'art nous fait voir le familier sous un jour nouveau.
Music has an uncanny ability to evoke memories. | La musique a un pouvoir étrange de faire resurgir les souvenirs.
`,
});
