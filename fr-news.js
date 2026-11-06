// 法文對照（Français）：新聞時事
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


addFrench("news", {
  words: `
news | les informations | Je regarde les informations tous les soirs.
weather | le temps | Il fera beau demain.
typhoon | le typhon | Un typhon arrive ce week-end.
happen | se passer | Qu'est-ce qui s'est passé ?
fire | l'incendie | Il y a eu un incendie en centre-ville hier soir.
earthquake | le tremblement de terre | Tu as senti le tremblement de terre ?
newspaper | le journal | Mon grand-père lit le journal tous les matins.
radio | la radio | J'écoute la radio dans la voiture.
TV | la télé | Les informations passent à la télé à sept heures.
rain | pleuvoir | Il va pleuvoir cet après-midi.
sunny | ensoleillé | Il fait beau et doux aujourd'hui.
hot | chaud | Il fait très chaud aujourd'hui.
cold | froid | Il fera froid ce week-end.
wind | le vent | Le vent est très fort.
storm | la tempête | Une grosse tempête a frappé la côte.
flood | l'inondation | L'inondation a fermé beaucoup de routes.
police | la police | La police recherche le voleur.
hospital | l'hôpital | Deux personnes ont été transportées à l'hôpital.
hurt | blessé | Personne n'a été blessé.
today | aujourd'hui | Qu'est-ce qu'il y a dans l'actualité aujourd'hui ?
yesterday | hier | Il y a eu un accident hier.
tomorrow | demain | Les écoles seront fermées demain.
event | l'événement | L'événement a été annulé à cause de la pluie.
price | le prix | Le prix des œufs a augmenté.
true | vrai | Cette histoire est vraie ?
famous | célèbre | Un chanteur célèbre vient à Taipei.
important | important | C'est une nouvelle importante.
temperature | la température | La température va baisser cette nuit.
thief | le voleur | Le voleur a volé un vélo.
lost | perdu | La police a retrouvé l'enfant perdu.
rescue | secourir | Les pompiers ont secouru un chat coincé dans un arbre.
firefighter | le pompier | Les pompiers ont éteint l'incendie.
announce | annoncer | Le maire annoncera le projet aujourd'hui.
warning | l'alerte | Il y a une alerte au typhon pour Taipei.
cloudy | nuageux | C'est nuageux ce matin.
windy | venteux | Il y a beaucoup de vent aujourd'hui.
snow | neiger | Il a neigé sur le mont Hehuan.
thunder | le tonnerre | J'ai entendu le tonnerre hier soir.
lightning | la foudre | La foudre est tombée sur un arbre.
rainbow | l'arc-en-ciel | Regarde ! Un arc-en-ciel !
heavy rain | les fortes pluies | De fortes pluies ont fermé les routes.
crash | l'accident | Il y a eu un accident de voiture sur l'autoroute.
help | l'aide | Ils ont appelé à l'aide.
safe | sain et sauf | Tout le monde est sain et sauf.
die | mourir | Deux personnes sont mortes dans l'incendie.
win | gagner | Qui va gagner le match ?
game | le match | Tu as vu le match hier soir ?
election | l'élection | L'élection a lieu samedi.
new | nouveau | Il y a une nouvelle ligne de métro.
open | ouvrir | Une nouvelle bibliothèque a ouvert aujourd'hui.
close | fermer | La route fermera à dix heures.
cancel | annuler | Le concert a été annulé.
rise | augmenter | Les prix continuent d'augmenter.
fall | baisser | La température va baisser cette nuit.
big | gros | Une grosse tempête arrive.
small | petit | Un petit séisme a secoué Hualien.
people | les gens | Beaucoup de gens étaient au défilé.
parade | le défilé | Le défilé commence à midi.
school | l'école | L'école est fermée aujourd'hui.
traffic | la circulation | La circulation est dense en centre-ville.
ambulance | l'ambulance | Une ambulance est arrivée rapidement.
phone | le téléphone | Regarde les informations sur ton téléphone.
online | en ligne | Je lis les informations en ligne.
photo | la photo | La photo montre les dégâts.
video | la vidéo | Tu as vu la vidéo ?
story | l'histoire | Cette histoire est triste.
sad | triste | C'est une très triste nouvelle.
good news | la bonne nouvelle | J'ai une bonne nouvelle !
weather report | le bulletin météo | Le bulletin météo dit qu'il va pleuvoir.
news app | l'appli d'information | Je lis l'appli d'information tous les matins.
page | la page | L'article est en page deux.
front page | la une | Le tremblement de terre fait la une.
picture | la photo | Regarde cette photo de l'inondation.
map | la carte | La carte montre où se trouve le typhon.
car | la voiture | Une voiture a percuté un arbre.
accident | l'accident | Il y a eu un accident sur l'autoroute.
bus | le bus | Le bus était en retard à cause de la pluie.
train | le train | Le train s'est arrêté à cause de la tempête.
road | la route | La route est fermée.
bridge | le pont | Le pont a été endommagé.
city | la ville | La ville fait le ménage.
town | la petite ville | La petite ville a organisé une fête.
world | le monde | Ce sont des nouvelles du monde entier.
country | le pays | Le pays a un nouveau dirigeant.
team | l'équipe | Notre équipe a gagné le match.
player | le joueur | Le joueur a battu un record.
singer | le chanteur | Le chanteur vient à Taipei.
movie star | la star de cinéma | Une star de cinéma a visité le marché de nuit.
zoo | le zoo | Le zoo a un nouveau bébé éléphant.
baby panda | le bébé panda | Un bébé panda est né au zoo.
festival | la fête | La fête des lanternes commence ce soir.
money | l'argent | Les gens ont donné de l'argent pour aider.
shop | le magasin | Un nouveau magasin a ouvert en centre-ville.
fog | le brouillard | Un épais brouillard a fermé l'aéroport.
hail | la grêle | La grêle a endommagé les voitures.
heat | la chaleur | La chaleur est dangereuse pour les personnes âgées.
smoke | la fumée | De la fumée noire sortait du bâtiment.
danger | le danger | Il y a un risque de glissements de terrain.
message | le message | Le gouvernement a envoyé un message d'alerte.
share | partager | Ne partage pas d'informations que tu n'as pas vérifiées.
`,
  phrases: `
Did you hear the news? | Tu as entendu la nouvelle ?
What happened? | Qu'est-ce qui s'est passé ?
Schools are closed because of the typhoon. | Les écoles sont fermées à cause du typhon.
Did you see the news? | Tu as vu les informations ?
What's in the news today? | Qu'est-ce qu'il y a dans l'actualité aujourd'hui ?
I read the news every morning. | Je lis les informations tous les matins.
I watch the news on TV. | Je regarde les informations à la télé.
I read the news on my phone. | Je lis les informations sur mon téléphone.
There was a big earthquake. | Il y a eu un gros tremblement de terre.
Is everyone okay? | Tout le monde va bien ?
There's a typhoon coming. | Un typhon arrive.
School is closed tomorrow. | L'école est fermée demain.
Work is cancelled because of the typhoon. | Le travail est suspendu à cause du typhon.
The weather report says it will rain. | Le bulletin météo dit qu'il va pleuvoir.
It will be sunny tomorrow. | Il fera beau demain.
There was a fire downtown. | Il y a eu un incendie en centre-ville.
There was a car accident. | Il y a eu un accident de voiture.
Nobody was hurt. | Personne n'a été blessé.
Two people were hurt. | Deux personnes ont été blessées.
The road is closed. | La route est fermée.
The police are looking for him. | La police le recherche.
The thief was caught. | Le voleur a été arrêté.
That's good news! | C'est une bonne nouvelle !
That's bad news. | C'est une mauvaise nouvelle.
That's terrible. | C'est terrible.
That's amazing! | C'est incroyable !
I can't believe it. | Je n'arrive pas à y croire.
Is it true? | C'est vrai ?
Where did you hear that? | Où est-ce que tu as entendu ça ?
I saw it online. | Je l'ai vu en ligne.
It's on the front page. | C'est à la une.
Here is the newspaper. | Voici le journal.
I like the sports news. | J'aime les informations sportives.
I read the business news. | Je lis l'actualité économique.
The news is on at seven. | Les informations passent à sept heures.
Turn on the news. | Mets les informations.
When did it happen? | Quand est-ce que ça s'est passé ?
Where did it happen? | Où est-ce que ça s'est passé ?
It happened last night. | Ça s'est passé hier soir.
It happened in Taipei. | Ça s'est passé à Taipei.
Prices are going up. | Les prix augmentent.
Gas prices are high. | Le prix de l'essence est élevé.
A new store is opening. | Un nouveau magasin va ouvrir.
The new MRT line is open. | La nouvelle ligne de métro est ouverte.
The city has a new mayor. | La ville a un nouveau maire.
There is a new president. | Il y a un nouveau président.
The team won the championship. | L'équipe a gagné le championnat.
A famous singer is coming to Taiwan. | Un chanteur célèbre vient à Taïwan.
There's a big festival this weekend. | Il y a une grande fête ce week-end.
Many people are sick with the flu. | Beaucoup de gens ont la grippe.
Wear a mask. | Porte un masque.
Wash your hands often. | Lave-toi souvent les mains.
The air is bad today. | L'air est mauvais aujourd'hui.
Stay inside today. | Reste à l'intérieur aujourd'hui.
It's very hot today. | Il fait très chaud aujourd'hui.
Drink lots of water. | Bois beaucoup d'eau.
There's a heat warning. | Il y a une alerte canicule.
The rain caused flooding. | La pluie a provoqué des inondations.
Many houses are under water. | Beaucoup de maisons sont sous l'eau.
People are helping each other. | Les gens s'entraident.
They need help. | Ils ont besoin d'aide.
You can give money to help. | Tu peux donner de l'argent pour aider.
I saw it on social media. | Je l'ai vu sur les réseaux sociaux.
This video is everywhere. | Cette vidéo est partout.
Don't believe everything you read. | Ne crois pas tout ce que tu lis.
Is this news real? | Cette information est vraie ?
I think it's fake. | Je pense que c'est faux.
Check the facts. | Vérifie les faits.
Let me look it up. | Laisse-moi vérifier.
The reporter is on TV. | Le journaliste est à la télé.
She's a news reporter. | Elle est journaliste.
He works for a newspaper. | Il travaille pour un journal.
Have you heard? | Tu es au courant ?
Did you hear about the earthquake? | Tu as entendu parler du tremblement de terre ?
Yes, I felt it too. | Oui, je l'ai senti aussi.
My house shook. | Ma maison a tremblé.
I was scared. | J'ai eu peur.
Breaking news! | Dernière minute !
Here's the latest news. | Voici les dernières nouvelles.
Stay safe! | Fais attention à toi !
Prices of eggs went up. | Le prix des œufs a augmenté.
There's a strike today. | Il y a une grève aujourd'hui.
The trains are not running. | Les trains ne circulent pas.
The airport is closed. | L'aéroport est fermé.
Flights are cancelled. | Les vols sont annulés.
They found the missing child. | Ils ont retrouvé l'enfant disparu.
The family is very happy. | La famille est très heureuse.
A baby panda was born at the zoo. | Un bébé panda est né au zoo.
What a cute story! | Quelle histoire mignonne !
The story is sad. | L'histoire est triste.
Read this article. | Lis cet article.
This article is interesting. | Cet article est intéressant.
I share news with my friends. | Je partage des informations avec mes amis.
I don't watch the news much. | Je ne regarde pas beaucoup les informations.
The news makes me sad. | Les informations me rendent triste.
I like good news. | J'aime les bonnes nouvelles.
Tell me the news. | Raconte-moi les nouvelles.
The bridge is closed today. | Le pont est fermé aujourd'hui.
There's a lot of traffic because of the accident. | Il y a beaucoup de circulation à cause de l'accident.
The new museum opens today. | Le nouveau musée ouvre aujourd'hui.
`,
});

addFrench("news", {
  words: `
headline | le gros titre | L'histoire a fait les gros titres dans le monde entier.
according to | selon | Selon la police, personne n'a été blessé.
reporter | le journaliste | Un journaliste a interviewé le maire.
breaking news | la dernière minute | Dernière minute : des nouvelles de Hualien.
source | la source | Vérifie toujours la source d'une information.
update | la mise à jour | Voici le dernier point sur la tempête.
article | l'article | J'ai lu un article intéressant sur l'IA.
journalist | le journaliste | C'est une journaliste primée.
interview | l'interview | L'interview sera diffusée ce soir.
press conference | la conférence de presse | Le ministre a tenu une conférence de presse.
anchor | le présentateur | Le présentateur lit les titres.
editor | le rédacteur | Le rédacteur a réécrit le titre.
column | la chronique | Il écrit une chronique hebdomadaire sur la politique.
opinion | la tribune | C'est une tribune, pas un reportage.
fake news | les fausses informations | Ne partage pas de fausses informations.
viral | viral | La vidéo est devenue virale du jour au lendemain.
trending | tendance | Qu'est-ce qui est tendance sur les réseaux sociaux aujourd'hui ?
investigation | l'enquête | La police a ouvert une enquête.
witness | le témoin | Un témoin a vu la voiture s'enfuir.
suspect | le suspect | Le suspect a été arrêté à l'aéroport.
victim | la victime | Les victimes ont reçu de l'aide de la ville.
evacuate | évacuer | On a demandé aux habitants d'évacuer.
disaster | la catastrophe | Le tremblement de terre a été une terrible catastrophe.
stock market | la Bourse | La Bourse a fortement chuté aujourd'hui.
statement | le communiqué | L'entreprise a publié un communiqué.
coverage | la couverture | La couverture de l'élection a été continue.
local | local | Je préfère lire les informations locales.
international | international | Les informations internationales sont en page cinq.
live | en direct | Nous passons en direct à notre envoyé spécial.
media | les médias | Les médias se sont concentrés sur le scandale.
survey | l'enquête | Une nouvelle enquête montre une hausse des prix.
exclusive | l'exclusivité | Le journal a publié une interview exclusive.
forecast | les prévisions | Les prévisions météo annoncent de la pluie.
aftershock | la réplique | Plusieurs répliques ont suivi le séisme.
landslide | le glissement de terrain | Un glissement de terrain a bloqué la route de montagne.
power outage | la coupure de courant | Une coupure de courant a touché le nord de Taïwan.
heat wave | la canicule | La canicule a battu des records.
air quality | la qualité de l'air | La qualité de l'air est mauvaise aujourd'hui.
drought | la sécheresse | La sécheresse a entraîné des restrictions d'eau.
injured | blessé | Trois personnes ont été blessées.
missing | disparu | Deux randonneurs sont toujours portés disparus.
search and rescue | les recherches et secours | Les équipes de recherche et de secours sont sur place.
emergency | l'urgence | Appelle le 119 en cas d'urgence.
shelter | le centre d'hébergement | Des familles ont passé la nuit dans un centre d'hébergement.
donation | le don | Les dons ont afflué après le tremblement de terre.
arrest | arrêter | La police a arrêté le suspect.
scam | l'arnaque | Méfie-toi des arnaques téléphoniques.
fraud | la fraude | Il a été inculpé de fraude.
court case | le procès | Le procès a duré deux ans.
verdict | le verdict | Le verdict a été annoncé aujourd'hui.
sentence | la peine | Il a été condamné à une peine de dix ans.
demonstration | la manifestation | Une manifestation a eu lieu devant le parlement.
strike | la grève | La grève de la compagnie aérienne a annulé des centaines de vols.
price hike | la hausse des prix | Une hausse du prix de l'électricité commence en avril.
export | l'exportation | Les exportations de puces ont atteint un record.
GDP | le PIB | Le PIB a augmenté de trois pour cent.
recession | la récession | Les experts craignent une récession.
census | le recensement | Le recensement compte chaque habitant.
official | le responsable | Un responsable a confirmé la nouvelle.
sources say | selon des sources | Selon des sources, l'accord est presque conclu.
report | le rapport | Le rapport a été publié aujourd'hui.
celebrity | la célébrité | La célébrité a démenti les rumeurs.
obituary | la nécrologie | La nécrologie retraçait sa longue carrière.
tsunami | le tsunami | Une alerte au tsunami a été lancée.
wildfire | le feu de forêt | Le feu de forêt a brûlé pendant des semaines.
pandemic | la pandémie | La pandémie a changé notre façon de travailler.
eyewitness | le témoin oculaire | Un témoin oculaire a filmé l'accident.
footage | les images | Les images de vidéosurveillance montrent le suspect.
broadcast | diffuser | Le discours a été diffusé en direct.
news alert | l'alerte info | J'ai reçu une alerte info sur le tremblement de terre.
push notification | la notification push | Les notifications push interrompent mon travail.
podcast | le podcast | J'écoute un podcast d'actualité tous les matins.
newsletter | la newsletter | Je suis abonné à une newsletter quotidienne.
subscription | l'abonnement | Mon abonnement au journal coûte 10 dollars par mois.
tabloid | la presse à scandale | La presse à scandale adore les scandales de célébrités.
gossip | les ragots | Le magazine est plein de ragots.
rumor | la rumeur | La rumeur s'est révélée fausse.
hashtag | le hashtag | Le hashtag a été tendance toute la journée.
influencer | l'influenceur | Un influenceur a partagé la vidéo.
comment section | les commentaires | Ne lis jamais les commentaires.
public figure | la personnalité publique | Les personnalités publiques sont constamment scrutées.
spokesperson | le porte-parole | Un porte-parole de l'entreprise a démenti l'information.
no comment | pas de commentaire | Le ministre a dit « pas de commentaire ».
official statement | la déclaration officielle | La police a publié une déclaration officielle.
death toll | le bilan des morts | Le bilan s'élève à vingt morts.
survivor | le survivant | Les secouristes ont trouvé un survivant sous les décombres.
relief effort | les opérations de secours | Les opérations de secours sont en cours.
aid | l'aide | L'aide arrive dans la zone inondée.
volunteer | le bénévole | Des centaines de bénévoles ont aidé à nettoyer.
fundraiser | la collecte de fonds | La collecte de fonds a rapporté un million de dollars.
inflation | l'inflation | L'inflation a atteint un pic sur deux ans.
interest rate | le taux d'intérêt | La banque centrale a relevé son taux d'intérêt.
layoffs | les licenciements | L'entreprise a annoncé des licenciements.
unemployment rate | le taux de chômage | Le taux de chômage a baissé le mois dernier.
housing prices | les prix de l'immobilier | Les prix de l'immobilier continuent d'augmenter.
recall | le rappel | L'entreprise a annoncé un rappel des voitures.
outbreak | l'épidémie | Il y a eu une épidémie de grippe à l'école.
quarantine | la quarantaine | Les voyageurs devaient faire une quarantaine d'une semaine.
vaccine | le vaccin | Le nouveau vaccin a été approuvé.
cold front | le front froid | Un front froid arrive ce week-end.
hot off the press | tout juste sorti | C'est tout juste sorti.
make headlines | faire les gros titres | Cette histoire va faire les gros titres.
no news is good news | pas de nouvelles, bonnes nouvelles | Pas de nouvelles, bonnes nouvelles.
hear it through the grapevine | l'apprendre par le bouche-à-oreille | Tu l'as appris par le bouche-à-oreille ?
the talk of the town | le sujet de conversation de toute la ville | Le nouveau centre commercial est le sujet de conversation de toute la ville.
go viral | devenir viral | Sa vidéo pourrait devenir virale.
straight from the horse's mouth | de source sûre | Je le tiens de source sûre.
spread the word | faire passer le mot | Faites passer le mot, s'il vous plaît.
bad news travels fast | les mauvaises nouvelles vont vite | Les mauvaises nouvelles vont vite.
in the spotlight | sous les projecteurs | Le maire est sous les projecteurs.
a hot topic | un sujet brûlant | L'IA est un sujet brûlant.
stay tuned | restez à l'écoute | Restez à l'écoute pour la suite.
`,
});

addFrench("news", {
  phrases: `
I read it online, but I'm not sure if it's true. | Je l'ai lu en ligne, mais je ne suis pas sûr que ce soit vrai.
It's all over the news. | On ne parle que de ça aux informations.
Let's fact-check that first. | Vérifions d'abord les faits.
Have you been following the story? | Tu suis cette affaire ?
It's been all over the news. | Ça a fait la une de tous les médias.
It made headlines around the world. | Ça a fait les gros titres dans le monde entier.
The story broke last night. | L'affaire a éclaté hier soir.
According to the report, the company knew about the problem. | Selon le reportage, l'entreprise était au courant du problème.
Sources say the minister will resign. | Selon des sources, le ministre va démissionner.
The police have released a statement. | La police a publié un communiqué.
The government has denied the reports. | Le gouvernement a démenti ces informations.
The company declined to comment. | L'entreprise s'est refusée à tout commentaire.
An investigation is under way. | Une enquête est en cours.
More details are expected later today. | Plus de détails sont attendus dans la journée.
The death toll has risen to twelve. | Le bilan s'est alourdi à douze morts.
Rescue teams are searching for survivors. | Les équipes de secours recherchent des survivants.
Thousands of people have been evacuated. | Des milliers de personnes ont été évacuées.
The typhoon has caused widespread damage. | Le typhon a causé des dégâts considérables.
Power has been restored to most homes. | Le courant a été rétabli dans la plupart des foyers.
The earthquake measured 6.5 on the Richter scale. | Le séisme a atteint une magnitude de 6,5 sur l'échelle de Richter.
There's no tsunami warning. | Il n'y a pas d'alerte au tsunami.
Experts warn of aftershocks. | Les experts mettent en garde contre des répliques.
The suspect was arrested this morning. | Le suspect a été arrêté ce matin.
He's been charged with fraud. | Il a été inculpé de fraude.
The trial starts next month. | Le procès commence le mois prochain.
She was found not guilty. | Elle a été déclarée non coupable.
He was sentenced to five years in prison. | Il a été condamné à cinq ans de prison.
The stock market fell sharply today. | La Bourse a fortement chuté aujourd'hui.
The central bank raised interest rates. | La banque centrale a relevé ses taux d'intérêt.
Inflation hit a two-year high. | L'inflation a atteint son plus haut niveau depuis deux ans.
The company announced record profits. | L'entreprise a annoncé des bénéfices records.
The company is laying off a thousand workers. | L'entreprise licencie mille salariés.
Housing prices continue to rise. | Les prix de l'immobilier continuent d'augmenter.
The unemployment rate is at its lowest in years. | Le taux de chômage est au plus bas depuis des années.
The new policy has sparked a lot of debate. | La nouvelle politique a suscité de nombreux débats.
There's been a lot of criticism of the plan. | Le projet a été très critiqué.
Public reaction has been mixed. | Les réactions du public sont mitigées.
Many people are angry about the decision. | Beaucoup de gens sont en colère contre cette décision.
The protest drew thousands of people. | La manifestation a rassemblé des milliers de personnes.
The two leaders held talks in Tokyo. | Les deux dirigeants se sont entretenus à Tokyo.
The summit ended with a joint statement. | Le sommet s'est terminé par une déclaration commune.
The ceasefire appears to be holding. | Le cessez-le-feu semble tenir.
Aid is finally reaching the area. | L'aide arrive enfin dans la région.
The refugees urgently need food and shelter. | Les réfugiés ont un besoin urgent de nourriture et d'abri.
Scientists have made an important discovery. | Des scientifiques ont fait une découverte importante.
A new study shows that coffee may be good for you. | Une nouvelle étude montre que le café pourrait être bon pour la santé.
The study was based on a small sample. | L'étude reposait sur un petit échantillon.
I'd take that with a grain of salt. | Je prendrais ça avec des pincettes.
That headline is a bit misleading. | Ce titre est un peu trompeur.
It's just clickbait. | C'est juste un piège à clics.
Don't just read the headline. | Ne lis pas seulement le titre.
I always try to check the source. | J'essaie toujours de vérifier la source.
That story turned out to be fake. | Cette histoire s'est révélée fausse.
The video was taken out of context. | La vidéo a été sortie de son contexte.
It's been debunked by fact-checkers. | Elle a été démentie par les vérificateurs de faits.
My uncle keeps sharing fake news. | Mon oncle n'arrête pas de partager de fausses informations.
Which news sources do you trust? | À quelles sources d'information fais-tu confiance ?
I get most of my news from podcasts. | Je m'informe surtout grâce aux podcasts.
I subscribe to a few newsletters. | Je suis abonné à quelques newsletters.
I hit the paywall again. | Je suis encore tombé sur un article payant.
Good journalism costs money. | Le bon journalisme coûte de l'argent.
I signed up for a digital subscription. | J'ai pris un abonnement numérique.
The news is so depressing these days. | L'actualité est tellement déprimante ces temps-ci.
I've been avoiding the news lately. | J'évite les informations ces derniers temps.
I just read the headlines. | Je lis juste les titres.
I check the news first thing in the morning. | Je regarde l'actualité dès le réveil.
I get news alerts on my phone. | Je reçois des alertes info sur mon téléphone.
The news was trending on social media. | L'information était tendance sur les réseaux sociaux.
The hashtag went viral overnight. | Le hashtag est devenu viral du jour au lendemain.
The interview was broadcast live. | L'interview a été diffusée en direct.
The press conference is at three o'clock. | La conférence de presse est à trois heures.
The reporter asked a tough question. | Le journaliste a posé une question difficile.
He gave a vague answer. | Il a donné une réponse vague.
The anchor read the breaking news. | Le présentateur a lu l'information de dernière minute.
She's a foreign correspondent in Tokyo. | Elle est correspondante à Tokyo.
The journalist was injured while covering the story. | Le journaliste a été blessé en couvrant l'événement.
Journalists should be free to report. | Les journalistes doivent être libres de faire leur travail.
The editorial criticized the government. | L'éditorial a critiqué le gouvernement.
I don't agree with this opinion piece. | Je ne suis pas d'accord avec cette tribune.
The paper has a political bias. | Le journal a un parti pris politique.
Every outlet has its own angle. | Chaque média a son angle.
Let's compare how different papers covered it. | Comparons la façon dont différents journaux l'ont couvert.
The local news covers what's happening in our town. | Les informations locales couvrent ce qui se passe dans notre ville.
There was a feel-good story about a lost dog. | Il y avait une belle histoire sur un chien perdu.
The weather forecast was wrong again. | Les prévisions météo se sont encore trompées.
A cold front is moving in this weekend. | Un front froid arrive ce week-end.
The typhoon is expected to make landfall tomorrow. | Le typhon devrait toucher terre demain.
Stay away from the coast during the storm. | Éloignez-vous de la côte pendant la tempête.
The air quality is unhealthy today. | La qualité de l'air est mauvaise pour la santé aujourd'hui.
There's been a recall of a popular snack. | Un snack populaire a été rappelé.
Check if your car is affected by the recall. | Vérifie si ta voiture est concernée par le rappel.
Tickets for the concert sold out in minutes. | Les billets du concert se sont vendus en quelques minutes.
The election results will be announced tonight. | Les résultats de l'élection seront annoncés ce soir.
It's too early to call the race. | Il est trop tôt pour désigner le vainqueur.
The exit polls suggest a close result. | Les sondages de sortie des urnes annoncent un résultat serré.
That's the top story tonight. | C'est l'information principale ce soir.
We'll bring you more as the story develops. | Nous vous tiendrons informés de l'évolution de la situation.
Stay tuned for more updates. | Restez à l'écoute pour plus d'informations.
The company has issued an apology. | L'entreprise a présenté ses excuses.
Officials are urging people to stay calm. | Les autorités appellent la population au calme.
`,
});

addFrench("news", {
  words: `
misinformation | la mésinformation | La mésinformation se propage plus vite que la vérité.
bias | le parti pris | Chaque média a un certain parti pris.
credible | crédible | Cette source est-elle crédible ?
clickbait | le piège à clics | Ce titre est un pur piège à clics.
echo chamber | la chambre d'écho | Les réseaux sociaux peuvent nous enfermer dans une chambre d'écho.
unprecedented | sans précédent | La tempête a causé des dégâts sans précédent.
journalism | le journalisme | Le journalisme d'investigation oblige le pouvoir à rendre des comptes.
editorial | l'éditorial | L'éditorial a critiqué le nouvel impôt.
objectivity | l'objectivité | L'objectivité est un principe fondamental du reportage.
sensationalism | le sensationnalisme | Le sensationnalisme fait vendre, mais il trompe les lecteurs.
press freedom | la liberté de la presse | La liberté de la presse recule dans de nombreux pays.
censorship | la censure | La censure limite ce que les citoyens peuvent apprendre.
whistleblower | le lanceur d'alerte | Le lanceur d'alerte a dénoncé la fraude.
allegation | l'accusation | Il a nié toutes les accusations.
verify | vérifier | Les journalistes doivent vérifier chaque affirmation.
fact-checker | le vérificateur de faits | Un vérificateur de faits a signalé l'affirmation comme fausse.
deepfake | le deepfake | Le deepfake a trompé des millions de spectateurs.
algorithm | l'algorithme | L'algorithme décide de ce que tu vois.
polarizing | clivant | C'était une décision clivante.
narrative | le récit | Chaque camp a défendu son propre récit.
framing | le cadrage | Le cadrage d'une information façonne l'opinion publique.
spin | l'enrobage | Le porte-parole a tenté de présenter la nouvelle sous un jour favorable.
op-ed | la tribune | Elle a écrit une tribune sur les prix de l'immobilier.
paywall | le mur payant | L'article est derrière un mur payant.
watchdog | le chien de garde | La presse joue le rôle de chien de garde face au gouvernement.
scoop | le scoop | Le journal a eu le scoop avant tout le monde.
anonymous source | la source anonyme | Une source anonyme a confirmé l'accord.
retraction | le démenti | Le journal a publié un démenti.
media literacy | l'éducation aux médias | Les écoles devraient enseigner l'éducation aux médias.
escalate | s'aggraver | Les tensions continuent de s'aggraver dans la région.
aftermath | les suites | Des bénévoles ont aidé dans les suites du séisme.
embargo | l'embargo | Le rapport est sous embargo jusqu'à lundi.
in-depth | approfondi | Le magazine a publié un reportage approfondi sur la pauvreté.
investigative | d'investigation | Des journalistes d'investigation ont passé un an sur l'affaire.
gatekeeping | le filtrage | Les rédacteurs contrôlaient autrefois le filtrage de l'information.
agenda-setting | la mise à l'agenda | La mise à l'agenda signifie que les médias décident de ce qui compte.
newsworthy | digne d'intérêt | Est-ce vraiment digne d'intérêt ?
fearmongering | l'alarmisme | L'article a été accusé d'alarmisme.
alarmist | alarmiste | Certains ont jugé le rapport alarmiste.
corroborate | corroborer | Deux sources ont corroboré l'information.
debunk | démentir | Les vérificateurs de faits ont démenti l'affirmation virale.
hoax | le canular | La vidéo s'est révélée être un canular.
conspiracy theory | la théorie du complot | La théorie du complot s'est répandue sur les réseaux sociaux.
infodemic | l'infodémie | La pandémie s'est accompagnée d'une infodémie.
disinformation | la désinformation | La désinformation étrangère cible les élections.
state media | les médias d'État | Les médias d'État ont démenti les informations.
slant | l'orientation | La couverture avait une orientation claire.
impartial | impartial | Les médias publics visent à être impartiaux.
sourcing | le sourçage | Un sourçage rigoureux renforce la confiance.
off the record | en off | Il a parlé en off.
on the record | officiellement | Tu le dirais officiellement ?
libel | la diffamation écrite | Le journal a été poursuivi pour diffamation.
defamation | la diffamation | Elle a porté plainte pour diffamation.
press pass | la carte de presse | Les journalistes ont besoin d'une carte de presse pour entrer.
newsroom | la rédaction | La rédaction a été très occupée toute la nuit.
news cycle | le cycle de l'information | Le cycle de l'information en continu ne s'arrête jamais.
citizen journalism | le journalisme citoyen | Le journalisme citoyen a comblé le vide pendant les manifestations.
legacy media | les médias traditionnels | Les médias traditionnels perdent des annonceurs.
subscription model | le modèle par abonnement | Le journal est passé à un modèle par abonnement.
filter bubble | la bulle de filtres | Les algorithmes créent une bulle de filtres.
doxxing | le doxxing | Le doxxing est illégal dans de nombreux endroits.
geopolitical | géopolitique | Les tensions géopolitiques ont augmenté dans la région.
humanitarian crisis | la crise humanitaire | La guerre a provoqué une crise humanitaire.
casualty | la victime | Le nombre de victimes continue d'augmenter.
ceasefire | le cessez-le-feu | Les deux camps ont accepté un cessez-le-feu.
embedded journalist | le journaliste embarqué | Le journaliste embarqué voyageait avec les troupes.
fourth estate | le quatrième pouvoir | La presse est souvent appelée le quatrième pouvoir.
public interest | l'intérêt public | L'article a été publié dans l'intérêt public.
right to privacy | le droit à la vie privée | Le droit à la vie privée limite ce que les journalistes peuvent publier.
source protection | la protection des sources | La protection des sources est vitale pour le journalisme d'investigation.
leak | la fuite | La fuite a révélé des négociations secrètes.
SLAPP | la poursuite-bâillon | La poursuite-bâillon visait à faire taire les critiques.
self-censorship | l'autocensure | L'autocensure est courante sous la pression.
media ownership | la propriété des médias | La propriété des médias est très concentrée.
advertorial | le publireportage | L'article était en fait un publireportage.
native advertising | la publicité native | La publicité native ressemble à de vraies informations.
sponsored content | le contenu sponsorisé | Le contenu sponsorisé doit être clairement signalé.
press release | le communiqué de presse | Beaucoup d'articles sont réécrits à partir d'un communiqué de presse.
spin doctor | le spin doctor | Le spin doctor a tenté de changer l'histoire.
talking points | les éléments de langage | Le ministre s'en est tenu à ses éléments de langage.
soundbite | la petite phrase | La petite phrase a tourné en boucle toute la journée.
news desert | le désert médiatique | La ville est devenue un désert médiatique quand le journal a fermé.
public broadcaster | l'audiovisuel public | L'audiovisuel public est financé par les impôts.
foreign correspondent | le correspondant à l'étranger | Elle est correspondante à Tokyo.
parachute journalism | le journalisme parachuté | Le journalisme parachuté manque souvent de contexte local.
data journalism | le journalisme de données | Le journalisme de données utilise des graphiques pour raconter des histoires.
explainer | l'article explicatif | L'article explicatif a aidé les lecteurs à comprendre la crise.
long-form | au long cours | J'aime le journalisme au long cours le week-end.
slow news | le slow journalisme | Le slow journalisme privilégie la profondeur à la vitesse.
news fatigue | la lassitude informationnelle | La lassitude informationnelle est répandue après une longue crise.
news avoidance | l'évitement de l'information | L'évitement de l'information progresse chez les jeunes.
doomscrolling | le doomscrolling | Le doomscrolling avant de dormir ruine mon sommeil.
compassion fatigue | l'usure de la compassion | Une couverture constante des catastrophes peut provoquer une usure de la compassion.
false balance | le faux équilibre | Le faux équilibre donne trop de poids aux opinions marginales.
both-sidesism | le renvoi dos à dos systématique | Renvoyer systématiquement les deux camps dos à dos peut déformer les faits.
prebunking | le prebunking | Le prebunking prévient les gens des manipulations à l'avance.
lateral reading | la lecture latérale | La lecture latérale consiste à vérifier d'autres sources.
reverse image search | la recherche d'image inversée | Une recherche d'image inversée a montré que la photo était ancienne.
synthetic media | les médias synthétiques | Les médias synthétiques facilitent la création de fausses vidéos.
provenance | la provenance | Vérifie la provenance d'une photo avant de la partager.
if it bleeds, it leads | le sang fait vendre | Les journaux télévisés suivent la règle : le sang fait vendre.
the fourth estate | le quatrième pouvoir | Le quatrième pouvoir oblige les puissants à rendre des comptes.
a smoking gun | une preuve irréfutable | Les journalistes ont trouvé une preuve irréfutable.
a media circus | un cirque médiatique | Le procès est devenu un cirque médiatique.
damage control | la gestion de crise | L'entreprise est en mode gestion de crise.
with a pinch of salt | avec des pincettes | Prends ce reportage avec des pincettes.
sit on a story | garder une information sous le coude | Les rédacteurs gardent parfois une information sous le coude pendant une semaine.
break the story | révéler l'affaire | Qui va révéler l'affaire ?
a puff piece | un article complaisant | Cet article est complaisant.
yesterday's news | de l'histoire ancienne | Ce scandale, c'est de l'histoire ancienne.
the court of public opinion | le tribunal de l'opinion publique | Il a perdu devant le tribunal de l'opinion publique.
a news cycle | un cycle d'information | Ce sera oublié en un cycle d'information.
spill the tea | balancer les potins | Allez, balance les potins !
a leak | une fuite | Il y a eu une fuite venant de la Maison-Blanche.
read all about it | demandez le journal | Édition spéciale ! Demandez le journal !
`,
  phrases: `
The quote was taken out of context. | La citation a été sortie de son contexte.
Reports remain unconfirmed at this time. | Les informations ne sont pas confirmées pour le moment.
It's important to read news from a variety of sources. | Il est important de lire des informations de sources variées.
The news cycle moves at a relentless pace. | Le cycle de l'information avance à un rythme effréné.
The 24-hour news cycle rewards speed over accuracy. | L'information en continu récompense la vitesse plutôt que l'exactitude.
Breaking news is often incomplete or wrong. | Les informations de dernière minute sont souvent incomplètes ou fausses.
Early reports should be treated with caution. | Les premières informations doivent être prises avec prudence.
Corrections rarely get the same attention as the original story. | Les rectificatifs reçoivent rarement autant d'attention que l'article original.
Sensationalism sells, but it erodes trust. | Le sensationnalisme fait vendre, mais il érode la confiance.
If it bleeds, it leads. | Le sang fait la une.
Negativity bias makes bad news more compelling. | Le biais de négativité rend les mauvaises nouvelles plus captivantes.
Constructive journalism focuses on solutions as well as problems. | Le journalisme de solutions s'intéresse aux solutions autant qu'aux problèmes.
Investigative journalism holds the powerful to account. | Le journalisme d'investigation oblige les puissants à rendre des comptes.
Investigative reporting is expensive and slow. | L'enquête journalistique est coûteuse et lente.
Local newspapers are closing at an alarming rate. | Les journaux locaux ferment à un rythme alarmant.
News deserts leave communities uninformed. | Les déserts médiatiques laissent des communautés sans information.
Advertising revenue has migrated to tech platforms. | Les recettes publicitaires ont migré vers les plateformes technologiques.
The business model for journalism is broken. | Le modèle économique du journalisme est cassé.
Paywalls risk making quality news a luxury. | Les murs payants risquent de faire de l'information de qualité un luxe.
Public broadcasters play a vital role in an informed society. | L'audiovisuel public joue un rôle vital dans une société informée.
Media ownership is increasingly concentrated. | La propriété des médias est de plus en plus concentrée.
Owners' political interests can shape editorial lines. | Les intérêts politiques des propriétaires peuvent influencer la ligne éditoriale.
Editorial independence must be protected. | L'indépendance éditoriale doit être protégée.
Self-censorship is often more insidious than direct censorship. | L'autocensure est souvent plus insidieuse que la censure directe.
Foreign-funded media can be a vehicle for propaganda. | Les médias financés par l'étranger peuvent servir de vecteur de propagande.
State media blurs the line between news and propaganda. | Les médias d'État brouillent la frontière entre information et propagande.
Press freedom rankings reflect deep differences between countries. | Les classements de la liberté de la presse reflètent de profondes différences entre les pays.
Journalists face harassment, lawsuits and even violence. | Les journalistes font face au harcèlement, aux procès et même à la violence.
Strategic lawsuits are used to silence critics. | Les poursuites-bâillons servent à faire taire les critiques.
Protecting sources is a fundamental principle of journalism. | La protection des sources est un principe fondamental du journalisme.
Anonymous sources must be used sparingly. | Les sources anonymes doivent être utilisées avec parcimonie.
Leaks have exposed serious abuses of power. | Des fuites ont révélé de graves abus de pouvoir.
The public interest must be weighed against privacy. | L'intérêt public doit être mis en balance avec la vie privée.
Tabloids routinely intrude on people's private lives. | La presse à scandale s'immisce régulièrement dans la vie privée des gens.
Victims of tragedies deserve to be treated with dignity. | Les victimes de drames méritent d'être traitées avec dignité.
Graphic images can inform, but they can also exploit. | Les images choquantes peuvent informer, mais aussi exploiter.
False balance gives fringe views undue credibility. | Le faux équilibre donne une crédibilité indue aux opinions marginales.
Objectivity is an ideal, not a guarantee. | L'objectivité est un idéal, pas une garantie.
Every story involves choices about what to include. | Chaque article implique des choix sur ce qu'il faut inclure.
Framing shapes how audiences interpret events. | Le cadrage influence la façon dont le public interprète les événements.
Word choice can subtly signal a political stance. | Le choix des mots peut subtilement trahir une position politique.
Agenda-setting determines what people think about. | La mise à l'agenda détermine les sujets auxquels les gens pensent.
What isn't reported can be as revealing as what is. | Ce qui n'est pas rapporté peut être aussi révélateur que ce qui l'est.
Media literacy is essential in the age of misinformation. | L'éducation aux médias est essentielle à l'ère de la mésinformation.
Disinformation is designed to spread faster than the truth. | La désinformation est conçue pour se propager plus vite que la vérité.
False stories travel further and faster than true ones online. | En ligne, les fausses histoires vont plus loin et plus vite que les vraies.
Bad actors exploit breaking news to spread rumors. | Des acteurs malveillants exploitent l'actualité brûlante pour répandre des rumeurs.
Lateral reading means checking what other sources say. | La lecture latérale consiste à vérifier ce que disent d'autres sources.
Reverse image searches can expose doctored photos. | Les recherches d'images inversées peuvent révéler des photos truquées.
AI-generated images have made verification harder. | Les images générées par IA ont rendu la vérification plus difficile.
Synthetic voices can impersonate public figures convincingly. | Les voix synthétiques peuvent imiter de façon convaincante des personnalités publiques.
Seeing is no longer believing. | Voir n'est plus croire.
Conspiracy theories flourish when trust in institutions collapses. | Les théories du complot prospèrent quand la confiance dans les institutions s'effondre.
Debunking can inadvertently spread the original falsehood. | Démentir peut involontairement propager le mensonge initial.
Prebunking warns people about manipulation techniques in advance. | Le prebunking avertit à l'avance des techniques de manipulation.
Platforms profit from engagement, regardless of accuracy. | Les plateformes profitent de l'engagement, quelle que soit l'exactitude.
Algorithms decide which stories most people see. | Les algorithmes décident des informations que voient la plupart des gens.
Personalized feeds fragment our shared reality. | Les fils personnalisés fragmentent notre réalité commune.
Filter bubbles narrow the range of views we encounter. | Les bulles de filtres réduisent l'éventail des opinions que nous rencontrons.
News avoidance is on the rise. | L'évitement de l'information progresse.
Many people feel overwhelmed by the volume of bad news. | Beaucoup de gens se sentent submergés par le flot de mauvaises nouvelles.
Doomscrolling takes a toll on mental health. | Le doomscrolling nuit à la santé mentale.
Compassion fatigue sets in after constant exposure to tragedy. | L'usure de la compassion s'installe après une exposition constante aux drames.
Younger audiences get news mainly from social video. | Les jeunes s'informent surtout par les vidéos sur les réseaux sociaux.
Influencers increasingly act as news gatekeepers. | Les influenceurs jouent de plus en plus le rôle de filtres de l'information.
Citizen journalism has democratized news gathering. | Le journalisme citoyen a démocratisé la collecte d'informations.
Eyewitness footage is now central to breaking news. | Les images de témoins sont désormais au cœur de l'actualité brûlante.
Verification is the essence of journalism. | La vérification est l'essence du journalisme.
Data journalism reveals patterns that anecdotes can't. | Le journalisme de données révèle des tendances que les anecdotes ne montrent pas.
Visualizations can clarify or mislead, depending on design. | Les visualisations peuvent éclairer ou tromper, selon leur conception.
Statistics without context can be deeply misleading. | Des statistiques sans contexte peuvent être très trompeuses.
Correlation is not the same as causation. | Corrélation n'est pas causalité.
A single study rarely settles a scientific question. | Une seule étude tranche rarement une question scientifique.
Science reporting often overstates preliminary findings. | Le journalisme scientifique exagère souvent les résultats préliminaires.
Press releases are frequently recycled as news. | Les communiqués de presse sont souvent recyclés en articles.
Native advertising blurs the line between news and ads. | La publicité native brouille la frontière entre information et publicité.
Sponsored content should be clearly labeled. | Le contenu sponsorisé devrait être clairement signalé.
Access journalism can compromise independence. | Le journalisme de connivence peut compromettre l'indépendance.
Spin doctors try to shape the narrative. | Les spin doctors tentent de façonner le récit.
The government is trying to control the narrative. | Le gouvernement essaie de contrôler le récit.
The story was buried on page twelve. | L'article a été enterré en page douze.
A late Friday announcement is often a sign of bad news. | Une annonce tardive le vendredi est souvent signe de mauvaise nouvelle.
The leak was clearly a trial balloon. | La fuite était clairement un ballon d'essai.
The minister's comments were taken out of context. | Les propos du ministre ont été sortis de leur contexte.
The outlet issued a retraction and an apology. | Le média a publié un démenti et des excuses.
Trust, once lost, is hard to rebuild. | La confiance, une fois perdue, est difficile à reconstruire.
Transparency about methods builds credibility. | La transparence sur les méthodes renforce la crédibilité.
Diverse newsrooms produce more representative coverage. | Des rédactions diversifiées produisent une couverture plus représentative.
Some communities are routinely ignored by mainstream media. | Certaines communautés sont régulièrement ignorées par les grands médias.
International news coverage has shrunk dramatically. | La couverture de l'actualité internationale s'est considérablement réduite.
Foreign bureaus are expensive to maintain. | Les bureaux à l'étranger coûtent cher à entretenir.
Parachute journalism lacks local knowledge. | Le journalisme parachuté manque de connaissance du terrain.
Taiwan receives more international coverage than ever before. | Taïwan bénéficie d'une couverture internationale plus importante que jamais.
Coverage tends to spike during crises and then fade. | La couverture tend à exploser pendant les crises, puis à s'estomper.
Podcasts have opened up new forms of storytelling. | Les podcasts ont ouvert de nouvelles formes de narration.
Newsletters let journalists build direct relationships with readers. | Les newsletters permettent aux journalistes de nouer des liens directs avec les lecteurs.
Reader-funded models are proving surprisingly resilient. | Les modèles financés par les lecteurs se révèlent étonnamment solides.
Quality journalism is a public good. | Le journalisme de qualité est un bien public.
A free press is the oxygen of democracy. | Une presse libre est l'oxygène de la démocratie.
Read widely, think critically and question everything. | Lis beaucoup, réfléchis de manière critique et remets tout en question.
`,
});
