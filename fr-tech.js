// 法文對照（Français）：科技
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
addFrench("tech", {
  words: `
computer | l'ordinateur | J'utilise un ordinateur à l'école.
laptop | l'ordinateur portable | Mon ordinateur portable est très léger.
phone | le téléphone | Mon téléphone n'a plus de batterie.
tablet | la tablette | Ma petite sœur joue sur une tablette.
screen | l'écran | L'écran est trop lumineux.
keyboard | le clavier | J'ai besoin d'un nouveau clavier.
mouse | la souris | Clique avec le bouton gauche de la souris.
camera | l'appareil photo ; la caméra | Le téléphone a un excellent appareil photo.
battery | la batterie | La batterie est faible.
charger | le chargeur | Je peux t'emprunter ton chargeur ?
cable | le câble | Ce câble est trop court.
internet | internet | Internet est lent aujourd'hui.
Wi-Fi | le wifi | Il y a du wifi gratuit ici ?
password | le mot de passe | Ne partage pas ton mot de passe.
email | l'e-mail | Je t'ai envoyé un e-mail.
app | l'application ; l'appli | Télécharge l'application.
game | le jeu | Ce jeu est amusant.
video | la vidéo | Regarde cette vidéo !
photo | la photo | Envoie-moi la photo.
music | la musique | J'écoute de la musique sur mon téléphone.
click | cliquer | Clique ici.
type | taper | Je tape vite.
search | chercher | Cherche-le en ligne.
download | télécharger | Télécharge le fichier.
upload | téléverser ; mettre en ligne | Mets ta photo en ligne.
save | enregistrer | N'oublie pas d'enregistrer ton travail.
delete | supprimer | Supprime les vieux messages.
print | imprimer | Imprime deux exemplaires.
printer | l'imprimante | L'imprimante n'a plus de papier.
turn on | allumer | Allume l'ordinateur.
turn off | éteindre | Éteins ton téléphone en classe.
charge | charger | Je dois charger mon téléphone.
online | en ligne | Tu es en ligne ?
offline | hors ligne | Je suis hors ligne en ce moment.
website | le site web | Visitez notre site web.
link | le lien | Clique sur le lien.
message | le message | J'ai reçu ton message.
call | l'appel | Je peux t'appeler plus tard ?
text | envoyer un texto | Envoie-moi un texto quand tu arrives.
selfie | le selfie | Faisons un selfie !
robot | le robot | Le robot sait parler.
smartwatch | la montre connectée | Ma montre connectée compte mes pas.
headphones | le casque | Ce casque est très confortable.
speaker | l'enceinte ; le haut-parleur | Monte le son de l'enceinte.
microphone | le micro | Parlez dans le micro.
USB | l'USB ; la clé USB | Branche la clé USB.
button | le bouton | Appuie sur le bouton rouge.
icon | l'icône | Touche l'icône pour ouvrir l'appli.
tap | toucher ; taper | Touche l'écran.
swipe | balayer ; glisser | Glisse vers la gauche.
scroll | faire défiler | Fais défiler vers le bas pour en lire plus.
log in | se connecter | Connecte-toi avec ton e-mail.
log out | se déconnecter | Déconnecte-toi quand tu as fini.
account | le compte | Crée un nouveau compte.
user | l'utilisateur | L'appli compte un million d'utilisateurs.
slow | lent | Mon ordinateur est tellement lent.
fast | rapide | Ce téléphone est très rapide.
new | nouveau | J'ai un nouveau téléphone.
broken | cassé | Mon écran est cassé.
fix | réparer | Tu peux réparer mon ordinateur portable ?
update | mettre à jour | Mets l'application à jour.
file | le fichier | Ouvre le fichier.
folder | le dossier | Mets le fichier dans ce dossier.
copy | copier | Copie le texte.
paste | coller | Colle-le ici.
share | partager | Partage la photo avec moi.
like | aimer ; liker | Likez et partagez cette publication.
post | la publication ; le post | J'ai lu ta publication.
TV | la télé | Nous regardons la télé après le dîner.
remote control | la télécommande | Où est la télécommande ?
plug | la prise | Débranche la prise.
game console | la console de jeux | J'ai eu une console de jeux pour mon anniversaire.
joystick | le joystick ; la manette | Pousse le joystick vers la gauche.
power | l'alimentation | Appuie sur le bouton d'alimentation.
volume | le volume | Baisse le volume.
sound | le son | Il n'y a pas de son.
picture | l'image | Envoie-moi l'image.
page | la page | Va à la page suivante.
home page | la page d'accueil | Clique sur la page d'accueil.
alarm | le réveil ; l'alarme | Mets un réveil à sept heures.
calculator | la calculatrice | Utilise la calculatrice de ton téléphone.
radio | la radio | Allume la radio.
watch | la montre | Ma montre affiche mes messages.
earphones | les écouteurs | Mets tes écouteurs.
memory card | la carte mémoire | La carte mémoire est pleine.
flash drive | la clé USB | Enregistre le fichier sur une clé USB.
chat | discuter ; tchatter | Discutons en ligne.
send | envoyer | Envoie-moi un message.
open | ouvrir | Ouvre l'appli.
close | fermer | Ferme la fenêtre.
start | démarrer | Appuie sur « Start » pour jouer.
stop | arrêter | Arrête la vidéo.
play | lire ; jouer | Relance la chanson.
pause | mettre en pause | Mets le film en pause, s'il te plaît.
zoom in | zoomer | Zoome sur la photo.
silent | silencieux | Mets ton téléphone en silencieux.
mute | couper le son ; mettre en sourdine | Coupe ton micro.
loud | fort | L'enceinte est trop forte.
easy | facile | Cette appli est facile à utiliser.
smart | intelligent ; connecté | C'est une télé connectée.
`,
  phrases: `
What's the Wi-Fi password? | Quel est le mot de passe du wifi ?
My phone is dead. | Mon téléphone est à plat.
Can you send me the link? | Tu peux m'envoyer le lien ?
Can I charge my phone here? | Je peux charger mon téléphone ici ?
Do you have a charger? | Tu as un chargeur ?
The Wi-Fi is slow. | Le wifi est lent.
I can't connect to the Wi-Fi. | Je n'arrive pas à me connecter au wifi.
The internet is down. | Internet est en panne.
My computer is slow. | Mon ordinateur est lent.
My computer froze. | Mon ordinateur a planté.
Turn it off and on again. | Éteins-le et rallume-le.
Restart your phone. | Redémarre ton téléphone.
I forgot my password. | J'ai oublié mon mot de passe.
Type your password. | Tape ton mot de passe.
Click here. | Clique ici.
Click the button. | Clique sur le bouton.
Scroll down. | Fais défiler vers le bas.
Swipe left. | Glisse vers la gauche.
Tap the screen. | Touche l'écran.
Open the app. | Ouvre l'appli.
Close the window. | Ferme la fenêtre.
Save the file. | Enregistre le fichier.
I lost my file. | J'ai perdu mon fichier.
Download the app. | Télécharge l'appli.
Upload the photo. | Mets la photo en ligne.
Send me the link. | Envoie-moi le lien.
Did you get my message? | Tu as reçu mon message ?
I'll text you. | Je t'envoie un texto.
Call me later. | Appelle-moi plus tard.
I can't hear you. | Je ne t'entends pas.
You're breaking up. | Ça coupe.
Can you hear me now? | Tu m'entends maintenant ?
Turn on your camera. | Allume ta caméra.
Turn off your microphone. | Coupe ton micro.
Let's have a video call. | Faisons un appel vidéo.
My screen is broken. | Mon écran est cassé.
I dropped my phone. | J'ai fait tomber mon téléphone.
I need a new phone. | J'ai besoin d'un nouveau téléphone.
This phone is expensive. | Ce téléphone est cher.
I use my phone every day. | J'utilise mon téléphone tous les jours.
I play games on my tablet. | Je joue à des jeux sur ma tablette.
I watch videos on my phone. | Je regarde des vidéos sur mon téléphone.
Take a screenshot. | Fais une capture d'écran.
Can you print this? | Tu peux imprimer ça ?
The printer is out of paper. | L'imprimante n'a plus de papier.
Plug in the cable. | Branche le câble.
Where is the USB port? | Où est le port USB ?
My battery is low. | Ma batterie est faible.
Put your phone on silent. | Mets ton téléphone en silencieux.
Turn up the volume. | Monte le volume.
Turn down the volume. | Baisse le volume.
Log in to your account. | Connecte-toi à ton compte.
Log out when you're done. | Déconnecte-toi quand tu as fini.
Sign up for free. | Inscrivez-vous gratuitement.
What's your email address? | Quelle est ton adresse e-mail ?
Check your email. | Regarde tes e-mails.
I sent you an email. | Je t'ai envoyé un e-mail.
Search for it online. | Cherche-le en ligne.
Google it. | Cherche sur Google.
Let's look it up. | Cherchons.
This website is useful. | Ce site est utile.
The page won't load. | La page ne se charge pas.
Refresh the page. | Actualise la page.
Go back to the home page. | Reviens à la page d'accueil.
Update your app. | Mets ton appli à jour.
My phone is updating. | Mon téléphone fait une mise à jour.
Is there an app for that? | Il existe une appli pour ça ?
I pay with my phone. | Je paie avec mon téléphone.
Scan the QR code. | Scanne le QR code.
I use social media every day. | J'utilise les réseaux sociaux tous les jours.
Follow me on Instagram. | Suis-moi sur Instagram.
Like and share! | Likez et partagez !
I posted a photo. | J'ai publié une photo.
Delete that photo. | Supprime cette photo.
Copy and paste it. | Copie-colle-le.
Press Enter. | Appuie sur Entrée.
Use the mouse. | Utilise la souris.
The keyboard doesn't work. | Le clavier ne marche pas.
My headphones are broken. | Mon casque est cassé.
Connect to Bluetooth. | Connecte-toi en Bluetooth.
Turn on Bluetooth. | Active le Bluetooth.
Can I borrow your laptop? | Je peux t'emprunter ton ordinateur portable ?
I'm good with computers. | Je m'y connais en informatique.
I'm not good with technology. | Je ne suis pas doué avec la technologie.
Can you show me how? | Tu peux me montrer comment faire ?
It's easy. Look. | C'est facile. Regarde.
Robots are cool. | Les robots, c'est cool.
I like new gadgets. | J'aime les nouveaux gadgets.
Put your phone away. | Range ton téléphone.
Don't use your phone in class. | N'utilise pas ton téléphone en classe.
I spend too much time online. | Je passe trop de temps en ligne.
My smartwatch counts my steps. | Ma montre connectée compte mes pas.
Ask the AI. | Demande à l'IA.
The robot can talk. | Le robot sait parler.
Technology makes life easy. | La technologie facilite la vie.
I love my new phone! | J'adore mon nouveau téléphone !
Is your phone on? | Ton téléphone est allumé ?
Plug in your laptop. | Branche ton ordinateur portable.
The mouse isn't working. | La souris ne marche pas.
Can you send it again? | Tu peux le renvoyer ?
`,
});

// ---------- 中級 Intermediate ----------
addFrench("tech", {
  words: `
software | le logiciel | Installe le nouveau logiciel.
hardware | le matériel | Le problème vient du matériel.
operating system | le système d'exploitation | Mets à jour ton système d'exploitation.
install | installer | Installe l'appli sur ton téléphone.
uninstall | désinstaller | Désinstalle les applis que tu n'utilises pas.
storage | le stockage | Mon téléphone manque d'espace de stockage.
memory | la mémoire | Cet ordinateur portable a 16 Go de mémoire.
backup | la sauvegarde | Garde toujours une sauvegarde de tes photos.
cloud | le cloud | J'enregistre mes fichiers dans le cloud.
sync | synchroniser | Mon téléphone et mon ordinateur se synchronisent automatiquement.
settings | les paramètres | Change-le dans les paramètres.
notification | la notification | Désactive les notifications la nuit.
browser | le navigateur | Quel navigateur utilises-tu ?
search engine | le moteur de recherche | Google est le moteur de recherche le plus populaire.
bookmark | le favori ; mettre en favori | Ajoute cette page à tes favoris.
tab | l'onglet | J'ai trop d'onglets ouverts.
attachment | la pièce jointe | Je l'envoie en pièce jointe.
spam | le spam ; les courriers indésirables | Cet e-mail est allé dans les spams.
virus | le virus | Mon ordinateur a un virus.
antivirus | l'antivirus | Installe un antivirus.
hacker | le pirate informatique ; le hacker | Un pirate a volé leurs données.
privacy | la confidentialité ; la vie privée | Vérifie tes paramètres de confidentialité.
username | le nom d'utilisateur | Choisis un nom d'utilisateur.
two-factor authentication | l'authentification à deux facteurs | Active l'authentification à deux facteurs.
verification code | le code de vérification | Saisis le code de vérification.
screenshot | la capture d'écran | Fais une capture d'écran et envoie-la-moi.
Bluetooth | le Bluetooth | Connecte ton casque en Bluetooth.
wireless | sans fil | J'ai acheté une souris sans fil.
touchscreen | l'écran tactile | L'écran tactile ne marche pas.
resolution | la résolution | L'écran a une haute résolution.
smartphone | le smartphone | Presque tout le monde a un smartphone.
social media | les réseaux sociaux | Je passe trop de temps sur les réseaux sociaux.
platform | la plateforme | YouTube est une plateforme vidéo.
streaming | le streaming | Le streaming consomme beaucoup de données.
data | les données mobiles ; la data | Je n'ai plus de données mobiles.
signal | le réseau ; le signal | Il n'y a pas de réseau dans l'ascenseur.
router | le routeur ; la box | Redémarre la box.
hotspot | le partage de connexion | Je vais activer le partage de connexion.
crash | planter | Mon ordinateur portable a encore planté.
freeze | se figer ; bloquer | Les applis bloquent parfois sur les vieux téléphones.
restart | redémarrer | Redémarre ton ordinateur.
bug | le bug | Il y a un bug dans l'appli.
version | la version | Tu utilises la dernière version ?
user-friendly | convivial ; facile à utiliser | L'appli est très facile à utiliser.
device | l'appareil | Tu peux l'utiliser sur n'importe quel appareil.
gadget | le gadget | Il adore les nouveaux gadgets.
e-commerce | le commerce en ligne | Le commerce en ligne se développe vite.
online shopping | les achats en ligne | Les achats en ligne, c'est tellement pratique.
mobile payment | le paiement mobile | Beaucoup de magasins acceptent le paiement mobile.
QR code | le QR code | Scanne le QR code.
scan | scanner | Scanne le document et envoie-le-moi par e-mail.
coding | la programmation ; coder | La programmation est une compétence utile.
programmer | le programmeur | Mon frère est programmeur.
engineer | l'ingénieur | Elle est ingénieure logiciel.
tech support | le support technique | Appelle le support technique.
tutorial | le tutoriel | Regarde un tutoriel sur YouTube.
subscribe | s'abonner | Abonnez-vous à ma chaîne.
influencer | l'influenceur | L'influenceuse a publié un avis.
emoji | l'émoji | Ajoute un émoji à ton message.
hashtag | le hashtag | Utilise un hashtag pour trouver des publications.
filter | le filtre | Je n'utilise pas de filtres sur mes photos.
video call | l'appel vidéo | Nous avons un appel vidéo à quinze heures.
webcam | la webcam | Allume ta webcam.
drone | le drone | Il filme des vidéos avec un drone.
3D printer | l'imprimante 3D | L'école a une imprimante 3D.
smart home | la maison connectée | Les objets de la maison connectée deviennent moins chers.
pop-up | la fenêtre pop-up | Ferme la fenêtre pop-up pour continuer.
ad blocker | le bloqueur de publicités | J'utilise un bloqueur de publicités dans mon navigateur.
cache | le cache | Vide le cache et recharge la page.
browser history | l'historique de navigation | Efface ton historique de navigation.
incognito mode | la navigation privée | J'ai cherché des cadeaux en navigation privée.
dark mode | le mode sombre | Le mode sombre fatigue moins les yeux.
airplane mode | le mode avion | Passe en mode avion avant le décollage.
screen time | le temps d'écran | Mon temps d'écran était de huit heures hier.
app store | la boutique d'applications | Télécharge-la sur la boutique d'applications.
free trial | l'essai gratuit | L'essai gratuit dure trente jours.
in-app purchase | l'achat intégré | Le jeu est plein d'achats intégrés.
subscription | l'abonnement | J'ai résilié mon abonnement musical.
password manager | le gestionnaire de mots de passe | Un gestionnaire de mots de passe retient tous mes mots de passe.
fingerprint sensor | le capteur d'empreintes | Le capteur d'empreintes est sous l'écran.
face ID | la reconnaissance faciale | Je déverrouille mon téléphone par reconnaissance faciale.
wallpaper | le fond d'écran | J'ai changé le fond d'écran de mon téléphone.
ringtone | la sonnerie | Je n'aime pas cette sonnerie.
voicemail | la messagerie vocale | Laisse un message sur ma messagerie vocale.
group call | l'appel de groupe | Faisons un appel de groupe ce soir.
screen sharing | le partage d'écran | Active le partage d'écran pour qu'on puisse voir.
smart speaker | l'enceinte connectée | L'enceinte connectée joue de la musique quand je le demande.
voice assistant | l'assistant vocal | Demande la météo à l'assistant vocal.
e-reader | la liseuse | Je lis des romans sur ma liseuse.
fitness tracker | le bracelet d'activité | Mon bracelet d'activité compte mes pas.
power bank | la batterie externe | Prends une batterie externe pour les longs voyages.
fast charging | la charge rapide | Ce téléphone est compatible avec la charge rapide.
wireless charger | le chargeur sans fil | Pose simplement le téléphone sur le chargeur sans fil.
earbuds | les écouteurs intra-auriculaires | J'ai perdu un de mes écouteurs.
noise-canceling | à réduction de bruit | Les casques à réduction de bruit sont parfaits en avion.
VR headset | le casque de réalité virtuelle | J'ai essayé un casque de réalité virtuelle au centre commercial.
electric car | la voiture électrique | Mon voisin a acheté une voiture électrique.
self-checkout | la caisse automatique | J'ai utilisé la caisse automatique au supermarché.
food delivery app | l'appli de livraison de repas | J'ai commandé le déjeuner sur une appli de livraison.
ride-hailing app | l'appli de VTC | J'ai réservé une voiture sur une appli de VTC.
reboot | redémarrer | Essaie de redémarrer l'ordinateur.
plug and play | prêt à l'emploi | Cette imprimante est prête à l'emploi.
go viral | devenir viral | Sa vidéo pourrait devenir virale.
cutting-edge | de pointe | C'est une technologie de pointe.
state-of-the-art | dernier cri | Nous avons un équipement dernier cri.
on the same wavelength | sur la même longueur d'onde | Nous sommes sur la même longueur d'onde.
glitch | le bug ; le petit dysfonctionnement | Il y a un petit bug dans le système.
the cloud | le cloud | Enregistre tes fichiers dans le cloud.
early adopter | l'adopteur précoce | Il adopte toujours les nouveaux gadgets avant tout le monde.
plugged in | branché ; au courant | Elle est très branchée sur le monde de la tech.
`,
  phrases: `
Have you tried restarting it? | Tu as essayé de le redémarrer ?
My phone keeps freezing. | Mon téléphone n'arrête pas de bloquer.
Can you send me a screenshot of the error? | Tu peux m'envoyer une capture d'écran de l'erreur ?
I think it's a software problem. | Je crois que c'est un problème logiciel.
The app keeps crashing. | L'appli n'arrête pas de planter.
My laptop is overheating. | Mon ordinateur portable surchauffe.
I accidentally deleted an important file. | J'ai supprimé un fichier important par erreur.
Do you have a backup? | Tu as une sauvegarde ?
Always back up your data. | Sauvegarde toujours tes données.
I store everything in the cloud. | Je stocke tout dans le cloud.
I'm running out of storage space. | Je n'ai presque plus d'espace de stockage.
Clear your cache and try again. | Vide ton cache et réessaie.
Make sure your software is up to date. | Vérifie que tes logiciels sont à jour.
The update fixed a lot of bugs. | La mise à jour a corrigé beaucoup de bugs.
The new update drains my battery. | La nouvelle mise à jour vide ma batterie.
Turn on two-factor authentication. | Active l'authentification à deux facteurs.
I got a verification code by text. | J'ai reçu un code de vérification par SMS.
Use a strong password for each account. | Utilise un mot de passe solide pour chaque compte.
I use a password manager. | J'utilise un gestionnaire de mots de passe.
Don't click on suspicious links. | Ne clique pas sur des liens suspects.
I think I got a phishing email. | Je crois que j'ai reçu un e-mail d'hameçonnage.
My account was hacked. | Mon compte a été piraté.
Change your password right away. | Change ton mot de passe tout de suite.
Is this website secure? | Ce site est-il sécurisé ?
Look for the padlock in the address bar. | Cherche le cadenas dans la barre d'adresse.
Don't use public Wi-Fi for banking. | N'utilise pas le wifi public pour tes opérations bancaires.
You should use a VPN. | Tu devrais utiliser un VPN.
I'll share my screen with you. | Je vais partager mon écran avec toi.
Could you send me the meeting link? | Tu pourrais m'envoyer le lien de la réunion ?
I'm having trouble with my audio. | J'ai un problème de son.
There's an echo on the line. | Il y a de l'écho sur la ligne.
I'll drop off and rejoin. | Je me déconnecte et je reviens.
My internet connection is unstable. | Ma connexion internet est instable.
Could you turn on your hotspot? | Tu pourrais activer ton partage de connexion ?
My data plan has unlimited data. | Mon forfait a des données illimitées.
I've used up all my mobile data. | J'ai épuisé toutes mes données mobiles.
I need a faster internet plan. | J'ai besoin d'un abonnement internet plus rapide.
The router needs to be reset. | Il faut réinitialiser la box.
Which phone would you recommend? | Quel téléphone tu me conseilles ?
Is it worth upgrading to the new model? | Ça vaut le coup de passer au nouveau modèle ?
The camera on this phone is amazing. | L'appareil photo de ce téléphone est incroyable.
The battery lasts all day. | La batterie tient toute la journée.
It supports fast charging. | Il est compatible avec la charge rapide.
Does it come with a warranty? | Il est vendu avec une garantie ?
I'm switching from Android to iPhone. | Je passe d'Android à l'iPhone.
How do I transfer my data to the new phone? | Comment je transfère mes données sur le nouveau téléphone ?
I set up face recognition to unlock my phone. | J'ai configuré la reconnaissance faciale pour déverrouiller mon téléphone.
I mostly pay with mobile payment now. | Je paie surtout par mobile maintenant.
Online shopping is so convenient. | Les achats en ligne, c'est tellement pratique.
I track my package with the app. | Je suis mon colis avec l'appli.
I stream music on my phone. | J'écoute de la musique en streaming sur mon téléphone.
I've cancelled some of my subscriptions. | J'ai résilié certains de mes abonnements.
There are too many streaming services. | Il y a trop de plateformes de streaming.
I use AI to help me write emails. | J'utilise l'IA pour m'aider à écrire mes e-mails.
I asked ChatGPT to explain it. | J'ai demandé à ChatGPT de me l'expliquer.
AI can make mistakes, so double-check. | L'IA peut se tromper, alors vérifie.
The translation app was really helpful. | L'appli de traduction m'a vraiment aidé.
I learn languages with an app. | J'apprends des langues avec une appli.
My smart speaker plays music when I ask. | Mon enceinte connectée joue de la musique quand je le demande.
I control the lights with my phone. | Je commande les lumières avec mon téléphone.
My watch tracks my sleep. | Ma montre suit mon sommeil.
I check my screen time every week. | Je vérifie mon temps d'écran chaque semaine.
I'm trying to spend less time on social media. | J'essaie de passer moins de temps sur les réseaux sociaux.
I turned off my notifications. | J'ai désactivé mes notifications.
I'm taking a break from social media. | Je fais une pause des réseaux sociaux.
This video went viral. | Cette vidéo est devenue virale.
Did you see that post? | Tu as vu cette publication ?
I don't believe everything I read online. | Je ne crois pas tout ce que je lis en ligne.
Check the source before you share it. | Vérifie la source avant de partager.
I'm learning to code. | J'apprends à coder.
I'm taking an online course in Python. | Je suis un cours en ligne de Python.
I work in IT. | Je travaille dans l'informatique.
I'm a software engineer. | Je suis ingénieur logiciel.
Our company is going digital. | Notre entreprise se numérise.
We're moving everything to the cloud. | Nous migrons tout vers le cloud.
The system is down for maintenance. | Le système est en maintenance.
Please contact IT support. | Veuillez contacter le support informatique.
I've submitted a ticket to the help desk. | J'ai ouvert un ticket auprès du support.
Tech moves so fast these days. | La tech évolue tellement vite de nos jours.
It's hard to keep up with new technology. | C'est difficile de suivre les nouvelles technologies.
My parents need help with their smartphones. | Mes parents ont besoin d'aide avec leurs smartphones.
I set up video calls for my grandmother. | J'ai configuré les appels vidéo pour ma grand-mère.
Electric cars are becoming more common. | Les voitures électriques sont de plus en plus courantes.
Taiwan is famous for making computer chips. | Taïwan est célèbre pour la fabrication de puces informatiques.
Semiconductors are in almost every device. | Les semi-conducteurs sont dans presque tous les appareils.
Self-driving cars are being tested on the roads. | Des voitures autonomes sont testées sur les routes.
I'm excited about virtual reality. | La réalité virtuelle m'enthousiasme.
I tried a VR headset for the first time. | J'ai essayé un casque de réalité virtuelle pour la première fois.
Drones are used for deliveries now. | On utilise désormais des drones pour les livraisons.
3D printers can make almost anything. | Les imprimantes 3D peuvent fabriquer presque tout.
Robots are doing more work in factories. | Les robots font de plus en plus de travail dans les usines.
My data was leaked in a hack. | Mes données ont fuité lors d'un piratage.
Be careful what you share online. | Fais attention à ce que tu partages en ligne.
Read the privacy settings carefully. | Lis attentivement les paramètres de confidentialité.
Is this app safe for kids? | Cette appli est-elle sûre pour les enfants ?
I recycled my old phone. | J'ai recyclé mon ancien téléphone.
How did we live without smartphones? | Comment vivait-on sans smartphones ?
Could you help me set up my new laptop? | Tu pourrais m'aider à configurer mon nouvel ordinateur portable ?
The file is too big to send by email. | Le fichier est trop lourd pour être envoyé par e-mail.
I'll put it in a shared folder. | Je vais le mettre dans un dossier partagé.
`,
});

// ---------- 高級 Advanced ----------
addFrench("tech", {
  words: `
artificial intelligence | l'intelligence artificielle | L'intelligence artificielle transforme tous les secteurs.
machine learning | l'apprentissage automatique | L'apprentissage automatique repère des schémas dans les données.
large language model | le grand modèle de langage | Un grand modèle de langage peut rédiger des dissertations.
generative AI | l'IA générative | L'IA générative peut créer des images à partir de texte.
algorithm | l'algorithme | L'algorithme décide de ce que vous voyez.
neural network | le réseau de neurones | Un réseau de neurones apprend à partir d'exemples.
training data | les données d'entraînement | Des données d'entraînement biaisées donnent des résultats biaisés.
automation | l'automatisation | L'automatisation remplace les tâches répétitives.
semiconductor | le semi-conducteur | Taïwan est un leader des semi-conducteurs.
chip | la puce | Cette puce est fabriquée à Taïwan.
wafer | la plaquette ; le wafer | TSMC produit des plaquettes de silicium.
foundry | la fonderie | La fonderie fabrique des puces pour Apple.
supply chain | la chaîne d'approvisionnement | La chaîne d'approvisionnement des puces est mondiale.
cybersecurity | la cybersécurité | La cybersécurité est une priorité absolue pour les banques.
encryption | le chiffrement | Le chiffrement de bout en bout protège vos messages.
data breach | la fuite de données | La fuite de données a exposé des millions d'e-mails.
phishing | l'hameçonnage | Ne cliquez pas sur les liens des e-mails d'hameçonnage.
ransomware | le rançongiciel | Un rançongiciel a bloqué les ordinateurs de l'hôpital.
malware | le logiciel malveillant | L'appli contenait un logiciel malveillant.
firewall | le pare-feu | Le pare-feu a bloqué l'attaque.
cloud computing | l'informatique en nuage | L'informatique en nuage permet aux petites entreprises de croître vite.
data center | le centre de données | Les centres de données consomment énormément d'électricité.
bandwidth | la bande passante | Les appels vidéo demandent plus de bande passante.
latency | la latence | Les joueurs ont besoin d'une faible latence.
5G | la 5G | Les réseaux 5G sont beaucoup plus rapides.
Internet of Things | l'Internet des objets | L'Internet des objets connecte les appareils du quotidien.
blockchain | la blockchain | La blockchain enregistre chaque transaction.
cryptocurrency | la cryptomonnaie | Le bitcoin est la cryptomonnaie la plus connue.
virtual reality | la réalité virtuelle | Les casques de réalité virtuelle deviennent plus légers.
augmented reality | la réalité augmentée | La réalité augmentée ajoute des objets numériques au monde réel.
open source | l'open source ; le logiciel libre | Linux est open source.
user interface | l'interface utilisateur | L'interface utilisateur est épurée et simple.
user experience | l'expérience utilisateur | Une bonne expérience utilisateur fidélise les clients.
beta | la version bêta | La version bêta a quelques bugs.
launch | lancer | L'entreprise lancera un nouveau téléphone en septembre.
startup | la start-up | Elle a fondé une start-up technologique.
venture capital | le capital-risque | La start-up a levé du capital-risque.
scalability | la scalabilité ; l'évolutivité | L'évolutivité compte quand le nombre d'utilisateurs augmente.
innovation | l'innovation | L'innovation stimule la croissance économique.
disruptive | disruptif ; de rupture | Les smartphones ont été une technologie de rupture.
obsolete | obsolète | Les disquettes sont obsolètes.
big data | les mégadonnées ; le big data | Le big data aide les entreprises à prévoir les tendances.
analytics | l'analyse de données | L'analyse d'audience montre d'où viennent les visiteurs.
data privacy | la protection des données personnelles | Les lois sur la protection des données se durcissent.
surveillance | la surveillance | La surveillance de masse soulève des inquiétudes sur la vie privée.
facial recognition | la reconnaissance faciale | La reconnaissance faciale déverrouille mon téléphone.
biometrics | la biométrie | Les banques utilisent la biométrie pour la sécurité.
digital divide | la fracture numérique | La fracture numérique laisse les zones rurales à la traîne.
screen addiction | l'addiction aux écrans | L'addiction aux écrans est fréquente chez les ados.
tech giant | le géant de la tech | Les géants de la tech font face à de nouvelles régulations.
antitrust | antitrust | Les autorités antitrust enquêtent sur l'entreprise.
net neutrality | la neutralité du net | La neutralité du net signifie que tout le trafic est traité de la même façon.
quantum computing | l'informatique quantique | L'informatique quantique pourrait casser le chiffrement actuel.
robotics | la robotique | La robotique transforme l'industrie.
autonomous vehicle | le véhicule autonome | Des véhicules autonomes sont testés dans plusieurs villes.
wearable | l'objet connecté à porter | Les objets connectés peuvent suivre votre rythme cardiaque.
firmware | le micrologiciel ; le firmware | Mets à jour le firmware du routeur.
API | l'API | L'appli se connecte à une API météo.
debug | déboguer | Il a fallu des heures pour déboguer le code.
source code | le code source | Le code source est sur GitHub.
deploy | déployer | Nous déployons les mises à jour chaque vendredi.
server | le serveur | Le serveur est tombé en panne cette nuit.
database | la base de données | Les fiches clients sont stockées dans une base de données.
cookie | le cookie | Ce site utilise des cookies.
tech-savvy | féru de technologie | Ma grand-mère est étonnamment à l'aise avec la technologie.
digital transformation | la transformation numérique | La transformation numérique est une priorité pour les banques.
prompt | le prompt ; l'instruction | Un prompt clair donne de meilleures réponses de l'IA.
hallucination | l'hallucination | L'hallucination du chatbot comprenait une fausse source.
fine-tuning | l'ajustement fin ; le fine-tuning | Le fine-tuning adapte un modèle à une tâche précise.
inference | l'inférence | Le coût de l'inférence baisse avec les progrès des puces.
parameter | le paramètre | Le modèle compte des milliards de paramètres.
GPU | le processeur graphique (GPU) | L'entraînement de l'IA tourne sur des milliers de GPU.
compute | la puissance de calcul | L'accès à la puissance de calcul est un goulet d'étranglement majeur.
edge computing | l'informatique en périphérie | L'informatique en périphérie traite les données sur l'appareil.
lithography | la lithographie | La lithographie EUV imprime des circuits minuscules sur les puces.
transistor | le transistor | Une puce moderne contient des milliards de transistors.
Moore's Law | la loi de Moore | La loi de Moore ralentit.
advanced packaging | l'encapsulation avancée | L'encapsulation avancée empile les puces.
yield rate | le taux de rendement (de fabrication) | Un meilleur taux de rendement réduit les coûts.
export controls | les contrôles à l'exportation | Les contrôles à l'exportation limitent la vente de puces avancées.
zero trust | le zero trust ; la confiance zéro | La confiance zéro consiste à vérifier chaque utilisateur.
social engineering | l'ingénierie sociale | L'ingénierie sociale pousse les gens à révéler leurs mots de passe.
penetration test | le test d'intrusion | La banque a fait appel à des experts pour un test d'intrusion.
patch | le correctif | Installe le correctif de sécurité tout de suite.
zero-day | la faille zero-day | Des pirates ont exploité une faille zero-day.
botnet | le botnet ; le réseau de machines zombies | Le botnet contrôlait des milliers d'appareils.
DDoS attack | l'attaque par déni de service (DDoS) | Une attaque DDoS a mis le site hors ligne.
spyware | le logiciel espion | Un logiciel espion a été découvert sur le téléphone du journaliste.
end-to-end encryption | le chiffrement de bout en bout | L'appli utilise le chiffrement de bout en bout.
metadata | les métadonnées | Les métadonnées peuvent révéler où une photo a été prise.
content moderation | la modération de contenu | La modération de contenu est difficile à grande échelle.
recommendation algorithm | l'algorithme de recommandation | L'algorithme de recommandation vous fait continuer à regarder.
attention economy | l'économie de l'attention | Les applis se font concurrence dans l'économie de l'attention.
dark pattern | le dark pattern ; l'interface trompeuse | Cacher le bouton de résiliation est un dark pattern.
right to repair | le droit à la réparation | Les lois sur le droit à la réparation aident les consommateurs à réparer leurs appareils.
e-waste | les déchets électroniques | Les vieux téléphones s'ajoutent aux déchets électroniques.
technical debt | la dette technique | La dette technique ralentit les nouvelles fonctionnalités.
legacy system | le système hérité | La banque tourne encore sur un système hérité.
interoperability | l'interopérabilité | L'interopérabilité permet à différentes applis de fonctionner ensemble.
AI ethics | l'éthique de l'IA | L'éthique de l'IA devrait guider la conception des produits.
garbage in, garbage out | à données médiocres, résultats médiocres | À données médiocres, résultats médiocres.
reinvent the wheel | réinventer la roue | Ne réinvente pas la roue.
push the envelope | repousser les limites | Apple aime repousser les limites.
game changer | ce qui change la donne | L'IA change la donne.
a steep learning curve | une courbe d'apprentissage abrupte | La programmation a une courbe d'apprentissage abrupte.
under the hood | sous le capot | Regardons sous le capot.
bleeding edge | à la pointe de la pointe | C'est une technologie à la pointe de la pointe.
digital detox | la détox numérique | J'ai besoin d'une détox numérique.
a blast from the past | un retour vers le passé | Ce vieux téléphone, c'est un vrai retour vers le passé.
move fast and break things | aller vite quitte à tout casser | Les start-up vont vite, quitte à tout casser.
low-tech | low-tech ; rudimentaire | Parfois, une solution low-tech est la meilleure.
going dark | faire silence ; couper toute communication | L'entreprise coupe toute communication après le piratage.
the next big thing | la prochaine grande révolution | La réalité virtuelle est-elle la prochaine grande révolution ?
ghost in the machine | le fantôme dans la machine | Il y a un fantôme dans la machine.
`,
  phrases: `
The update patched a critical security vulnerability. | La mise à jour a corrigé une faille de sécurité critique.
We need to scale our infrastructure before the launch. | Nous devons dimensionner notre infrastructure avant le lancement.
AI should augment human judgment, not replace it. | L'IA devrait renforcer le jugement humain, pas le remplacer.
Generative AI is transforming knowledge work. | L'IA générative transforme le travail intellectuel.
Large language models can produce convincing but false answers. | Les grands modèles de langage peuvent produire des réponses convaincantes mais fausses.
AI hallucinations make human oversight essential. | Les hallucinations de l'IA rendent la supervision humaine indispensable.
Training data can embed bias into AI systems. | Les données d'entraînement peuvent introduire des biais dans les systèmes d'IA.
Algorithmic decisions need to be explainable. | Les décisions algorithmiques doivent être explicables.
Who is accountable when an AI system causes harm? | Qui est responsable quand un système d'IA cause un préjudice ?
Regulators are struggling to keep pace with AI. | Les régulateurs peinent à suivre le rythme de l'IA.
The EU's AI Act takes a risk-based approach. | Le règlement européen sur l'IA adopte une approche fondée sur les risques.
Deepfakes are eroding trust in video evidence. | Les hypertrucages érodent la confiance dans les preuves vidéo.
Synthetic media could be weaponized during elections. | Les médias synthétiques pourraient servir d'armes pendant les élections.
Watermarking AI-generated content is one proposed safeguard. | Le tatouage numérique des contenus générés par IA est l'une des protections proposées.
Copyright law hasn't caught up with generative AI. | Le droit d'auteur n'a pas encore rattrapé l'IA générative.
Artists argue their work was used without consent. | Les artistes affirment que leurs œuvres ont été utilisées sans consentement.
AI is likely to augment rather than replace most jobs. | L'IA devrait renforcer plutôt que remplacer la plupart des emplois.
Prompt engineering has become a skill in its own right. | L'ingénierie de prompts est devenue une compétence à part entière.
The compute required to train frontier models is staggering. | La puissance de calcul nécessaire pour entraîner les modèles de pointe est vertigineuse.
Data centers consume enormous amounts of electricity and water. | Les centres de données consomment d'énormes quantités d'électricité et d'eau.
The AI boom has driven unprecedented demand for chips. | L'essor de l'IA a suscité une demande de puces sans précédent.
Taiwan sits at the heart of the global semiconductor supply chain. | Taïwan est au cœur de la chaîne mondiale des semi-conducteurs.
Advanced chip manufacturing is concentrated in very few places. | La fabrication de puces avancées est concentrée dans très peu d'endroits.
This concentration creates a geopolitical vulnerability. | Cette concentration crée une vulnérabilité géopolitique.
Export controls have reshaped the chip industry. | Les contrôles à l'exportation ont remodelé l'industrie des puces.
Countries are pouring subsidies into domestic chip production. | Les pays injectent des subventions dans la production nationale de puces.
Building a new fab takes years and billions of dollars. | Construire une nouvelle usine de puces prend des années et des milliards de dollars.
Moore's Law is slowing as transistors approach physical limits. | La loi de Moore ralentit à mesure que les transistors approchent des limites physiques.
Advanced packaging is the new frontier in chip performance. | L'encapsulation avancée est la nouvelle frontière de la performance des puces.
Yield rates determine whether a process is profitable. | Le taux de rendement détermine si un procédé est rentable.
The talent shortage is a bottleneck for the industry. | La pénurie de talents est un goulet d'étranglement pour le secteur.
Quantum computing could break today's encryption. | L'informatique quantique pourrait casser le chiffrement actuel.
Post-quantum cryptography is being standardized now. | La cryptographie post-quantique est en cours de normalisation.
Practical quantum computers are still years away. | Les ordinateurs quantiques utilisables sont encore à des années.
Ransomware attacks have crippled hospitals and city services. | Les attaques par rançongiciel ont paralysé des hôpitaux et des services municipaux.
Critical infrastructure is a prime target for cyberattacks. | Les infrastructures critiques sont une cible de choix pour les cyberattaques.
State-sponsored hackers are increasingly sophisticated. | Les pirates soutenus par des États sont de plus en plus sophistiqués.
Most breaches start with a simple human error. | La plupart des fuites commencent par une simple erreur humaine.
Zero-trust security assumes no user is trustworthy by default. | La sécurité zero trust part du principe qu'aucun utilisateur n'est digne de confiance par défaut.
Social engineering exploits trust rather than technology. | L'ingénierie sociale exploite la confiance plutôt que la technologie.
Security is only as strong as its weakest link. | Une sécurité ne vaut que ce que vaut son maillon le plus faible.
Companies often pay ransoms, which fuels further attacks. | Les entreprises paient souvent les rançons, ce qui alimente d'autres attaques.
Data has been called the new oil. | On a qualifié les données de nouveau pétrole.
Surveillance capitalism monetizes our personal data. | Le capitalisme de surveillance monétise nos données personnelles.
If the product is free, you are the product. | Si c'est gratuit, c'est vous le produit.
Most people click "agree" without reading the terms. | La plupart des gens cliquent sur « J'accepte » sans lire les conditions.
Privacy regulations like the GDPR have had a global impact. | Des réglementations comme le RGPD ont eu un impact mondial.
Facial recognition in public spaces raises civil liberties concerns. | La reconnaissance faciale dans l'espace public soulève des inquiétudes pour les libertés.
Recommendation algorithms optimize for engagement, not well-being. | Les algorithmes de recommandation optimisent l'engagement, pas le bien-être.
Outrage spreads faster online than nuanced views. | L'indignation se propage plus vite en ligne que les avis nuancés.
Content moderation at scale is an unsolved problem. | La modération de contenu à grande échelle reste un problème non résolu.
Platforms walk a fine line between free speech and harm. | Les plateformes marchent sur une ligne de crête entre liberté d'expression et préjudice.
Tech giants wield unprecedented economic and political power. | Les géants de la tech exercent un pouvoir économique et politique sans précédent.
Antitrust regulators are scrutinizing big tech. | Les autorités de la concurrence examinent de près les géants de la tech.
Network effects create natural monopolies. | Les effets de réseau créent des monopoles naturels.
Interoperability would give users more choice. | L'interopérabilité donnerait plus de choix aux utilisateurs.
Open-source software underpins much of the internet. | Le logiciel libre est à la base d'une grande partie d'internet.
Critical open-source projects are often maintained by volunteers. | Des projets open source critiques sont souvent maintenus par des bénévoles.
Technical debt slows development over time. | La dette technique ralentit le développement avec le temps.
Legacy systems are expensive to maintain and risky to replace. | Les systèmes hérités coûtent cher à maintenir et sont risqués à remplacer.
Digital transformation is as much about culture as technology. | La transformation numérique est autant une question de culture que de technologie.
Cloud computing has lowered barriers for startups. | L'informatique en nuage a abaissé les barrières à l'entrée pour les start-up.
Vendor lock-in makes switching providers costly. | La dépendance à un fournisseur rend le changement coûteux.
Edge computing processes data closer to where it's generated. | L'informatique en périphérie traite les données au plus près de leur source.
5G enables low-latency applications like remote surgery. | La 5G permet des applications à faible latence comme la chirurgie à distance.
The Internet of Things connects billions of devices. | L'Internet des objets connecte des milliards d'appareils.
Many smart devices ship with weak security. | Beaucoup d'objets connectés sont livrés avec une sécurité faible.
Batteries are the key to the energy transition. | Les batteries sont la clé de la transition énergétique.
Solid-state batteries promise greater range and safety. | Les batteries à l'état solide promettent plus d'autonomie et de sécurité.
Critical minerals have become a geopolitical flashpoint. | Les minerais critiques sont devenus un point de tension géopolitique.
E-waste is the fastest-growing waste stream in the world. | Les déchets électroniques sont le flux de déchets qui croît le plus vite au monde.
Planned obsolescence shortens the life of devices. | L'obsolescence programmée raccourcit la vie des appareils.
Right-to-repair laws are gaining ground. | Les lois sur le droit à la réparation gagnent du terrain.
The digital divide leaves many people behind. | La fracture numérique laisse beaucoup de gens de côté.
Older people risk being excluded as services move online. | Les personnes âgées risquent d'être exclues à mesure que les services passent en ligne.
Digital literacy is now a basic life skill. | La culture numérique est désormais une compétence de base.
Children are growing up as digital natives. | Les enfants grandissent en natifs du numérique.
Excessive screen time is linked to poor sleep and anxiety. | Un temps d'écran excessif est associé à un mauvais sommeil et à l'anxiété.
Persuasive design keeps us hooked on our phones. | Le design persuasif nous rend accros à nos téléphones.
Tech companies hire psychologists to maximize engagement. | Les entreprises de la tech embauchent des psychologues pour maximiser l'engagement.
Digital minimalism is a response to information overload. | Le minimalisme numérique est une réponse à la surcharge d'informations.
Autonomous vehicles face as many legal hurdles as technical ones. | Les véhicules autonomes se heurtent à autant d'obstacles juridiques que techniques.
Robotics is transforming logistics and manufacturing. | La robotique transforme la logistique et l'industrie.
Humanoid robots are attracting huge investment. | Les robots humanoïdes attirent d'énormes investissements.
Biotechnology and AI are converging rapidly. | Les biotechnologies et l'IA convergent rapidement.
AI is accelerating drug discovery. | L'IA accélère la découverte de médicaments.
Gene editing raises profound ethical questions. | L'édition génétique soulève de profondes questions éthiques.
Brain-computer interfaces are moving from science fiction to reality. | Les interfaces cerveau-machine passent de la science-fiction à la réalité.
Space technology is becoming increasingly commercial. | Les technologies spatiales deviennent de plus en plus commerciales.
Satellite internet is connecting remote regions. | L'internet par satellite connecte les régions isolées.
Space debris poses a growing risk to satellites. | Les débris spatiaux représentent un risque croissant pour les satellites.
Crypto remains highly speculative and volatile. | Les cryptomonnaies restent très spéculatives et volatiles.
Blockchain has found few uses beyond cryptocurrency. | La blockchain a trouvé peu d'usages au-delà des cryptomonnaies.
Central banks are exploring digital currencies. | Les banques centrales étudient les monnaies numériques.
Fintech has made banking more accessible. | La fintech a rendu les services bancaires plus accessibles.
Venture capital fuels innovation but also bubbles. | Le capital-risque alimente l'innovation, mais aussi les bulles.
Most startups fail, but a few reshape entire industries. | La plupart des start-up échouent, mais quelques-unes transforment des secteurs entiers.
Technology is neither good nor bad; it depends on how we use it. | La technologie n'est ni bonne ni mauvaise ; tout dépend de l'usage qu'on en fait.
The real question is who benefits from new technology. | La vraie question est de savoir à qui profitent les nouvelles technologies.
We need to design technology with people in mind. | Il faut concevoir la technologie en pensant aux gens.
`,
});
