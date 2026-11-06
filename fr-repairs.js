// 法文對照（Français）：居家水電故障
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
addFrench("repairs", {
  words: `
light | la lumière | La lumière ne s'allume pas.
light bulb | l'ampoule | Change l'ampoule.
switch | l'interrupteur | Où est l'interrupteur ?
outlet | la prise de courant | Cette prise ne marche pas.
plug | la prise ; la fiche | Débranche la prise.
power | le courant ; l'électricité | Il n'y a plus de courant.
power outage | la coupure de courant | Il y a une coupure de courant.
electricity | l'électricité | Nous n'avons pas d'électricité.
wire | le fil électrique | Ne touche pas à ce fil.
cord | le cordon ; le câble | Le câble est abîmé.
extension cord | la rallonge | Ne branche pas trop d'appareils sur une seule rallonge.
battery | la pile | La télécommande a besoin d'une pile neuve.
fuse | le fusible | Un fusible a sauté.
breaker | le disjoncteur | Vérifie le disjoncteur.
water | l'eau | Il n'y a pas d'eau.
tap | le robinet | Le robinet goutte.
faucet | le robinet | Le robinet ne se ferme pas.
drip | goutter | J'entends l'eau goutter toute la nuit.
leak | la fuite | Il y a une fuite sous l'évier.
sink | le lavabo ; l'évier | Le lavabo est bouché.
toilet | les toilettes | La chasse d'eau des toilettes ne marche pas.
flush | tirer la chasse | Tire la chasse.
clogged | bouché | L'évacuation est bouchée.
drain | l'évacuation ; la bonde | Des cheveux sont coincés dans la bonde.
pipe | le tuyau ; la canalisation | Un tuyau a éclaté.
shower | la douche | La douche est froide.
hot water | l'eau chaude | Il n'y a pas d'eau chaude.
cold water | l'eau froide | Il ne sort que de l'eau froide.
water heater | le chauffe-eau | Le chauffe-eau est en panne.
gas | le gaz | Ça sent le gaz !
smell | l'odeur ; sentir | C'est quoi, cette odeur ?
smoke | la fumée | De la fumée sort de la prise !
spark | l'étincelle | J'ai vu une étincelle.
fire | le feu ; l'incendie | En cas d'incendie, appelle le 119.
dangerous | dangereux | C'est dangereux.
broken | cassé ; en panne | Le ventilateur est en panne.
fix | réparer | Tu peux le réparer ?
repair | la réparation | Combien coûte la réparation ?
plumber | le plombier | Appelle un plombier.
electrician | l'électricien | Il nous faut un électricien.
landlord | le propriétaire | Préviens le propriétaire.
tool | l'outil | Tu as le bon outil ?
toolbox | la boîte à outils | Va chercher la boîte à outils.
screwdriver | le tournevis | Passe-moi le tournevis.
hammer | le marteau | Où est le marteau ?
wrench | la clé à molette | J'ai besoin d'une clé à molette.
plunger | la ventouse | Utilise une ventouse.
tape | le ruban adhésif | Entoure-le de ruban adhésif.
glue | la colle | Répare-le avec de la colle.
ladder | l'échelle | Tiens-moi l'échelle.
flashlight | la lampe de poche | Va chercher une lampe de poche.
dark | sombre | Il fait tellement sombre ici.
turn on | allumer ; ouvrir | Allume la lumière.
turn off | éteindre ; couper | Coupe l'eau.
unplug | débrancher | Débranche-le d'abord.
wet | mouillé | Le sol est mouillé.
mop | la serpillière | Va chercher une serpillière !
bucket | le seau | Mets un seau sous la fuite.
towel | la serviette | Utilise une serviette.
ceiling | le plafond | Le plafond fuit.
wall | le mur | Le mur est humide.
floor | le sol | Il y a de l'eau partout par terre.
door | la porte | La porte ne ferme pas.
lock | la serrure | La serrure est cassée.
key | la clé | J'ai perdu ma clé.
locked out | enfermé dehors | Je suis enfermé dehors !
window | la fenêtre | La fenêtre est coincée.
stuck | coincé | Le tiroir est coincé.
noise | le bruit | Le ventilateur fait un bruit bizarre.
fan | le ventilateur | Le ventilateur ne marche plus.
air conditioner | le climatiseur ; la clim | La clim fuit.
fridge | le frigo | Le frigo ne refroidit pas.
washing machine | la machine à laver | La machine à laver ne se vide pas.
remote | la télécommande | Où est la télécommande ?
doorbell | la sonnette | La sonnette ne sonne pas.
smoke alarm | le détecteur de fumée | Le détecteur de fumée n'arrête pas de biper.
beep | biper | Pourquoi ça bipe ?
old | vieux | La maison est très vieille.
new | neuf | Achètes-en un neuf.
cost | coûter ; le coût | Ça va coûter combien ?
cheap | pas cher | Il y a un moyen pas cher de le réparer ?
call | appeler | Appelle le réparateur.
repairman | le réparateur | Le réparateur vient à trois heures.
wait | attendre | Il faut attendre.
today | aujourd'hui | Vous pouvez venir aujourd'hui ?
tomorrow | demain | Il viendra demain.
emergency | l'urgence | C'est une urgence !
help | aider ; l'aide | Tu peux m'aider ?
careful | prudent | Fais attention !
safe | sans danger | C'est sans danger ?
check | vérifier | Vérifie les tuyaux.
mold | la moisissure | Il y a de la moisissure sur le mur.
bug | l'insecte ; la bestiole | Il y a des bestioles dans la cuisine.
cockroach | le cafard | J'ai vu un cafard !
rat | le rat | Nous avons un problème de rats.
smell bad | sentir mauvais | L'évacuation sent mauvais ?
water bill | la facture d'eau | La facture d'eau est élevée.
electric bill | la facture d'électricité | La facture d'électricité a doublé.
noisy | bruyant | Les tuyaux sont bruyants la nuit.
hot | chaud ; brûlant | N'y touche pas, c'est brûlant.
`,
  phrases: `
Something's wrong with the light. | La lumière a un problème.
The light won't turn on. | La lumière ne s'allume pas.
The bulb burned out. | L'ampoule a grillé.
Do we have a spare bulb? | On a une ampoule de rechange ?
The power just went out. | Le courant vient de couper.
Is it just us, or the whole building? | C'est juste chez nous, ou tout l'immeuble ?
The neighbors have power. | Les voisins ont du courant.
Check the breaker box. | Va voir le tableau électrique.
The breaker tripped. | Le disjoncteur a sauté.
Flip the switch back up. | Remonte le disjoncteur.
It works again! | Ça remarche !
This outlet is dead. | Cette prise ne marche plus.
Don't touch the wires. | Ne touche pas aux fils.
Unplug it first. | Débranche-le d'abord.
I smell something burning. | Ça sent le brûlé.
There's smoke! | Il y a de la fumée !
I saw sparks from the outlet. | J'ai vu des étincelles sortir de la prise.
Turn off the power now! | Coupe le courant tout de suite !
Call 119! | Appelle le 119 !
I smell gas. | Ça sent le gaz.
Don't turn on any lights. | N'allume aucune lumière.
Open all the windows. | Ouvre toutes les fenêtres.
Get out of the house. | Sors de la maison.
There's no water. | Il n'y a pas d'eau.
There's no hot water. | Il n'y a pas d'eau chaude.
The water is cold. | L'eau est froide.
The water heater isn't working. | Le chauffe-eau ne marche pas.
The tap won't stop dripping. | Le robinet n'arrête pas de goutter.
There's a leak under the sink. | Il y a une fuite sous l'évier.
Water is coming from the ceiling! | L'eau coule du plafond !
Get a bucket! | Va chercher un seau !
The floor is all wet. | Le sol est tout mouillé.
Turn off the water. | Coupe l'eau.
Where's the main water valve? | Où est le robinet d'arrivée d'eau ?
The toilet is clogged. | Les toilettes sont bouchées.
The toilet won't flush. | La chasse d'eau ne marche pas.
Don't flush it again! | Ne tire plus la chasse !
Use the plunger. | Utilise la ventouse.
The toilet keeps running. | La chasse d'eau coule sans arrêt.
The sink is blocked. | Le lavabo est bouché.
The water won't go down. | L'eau ne s'écoule pas.
The drain smells bad. | La bonde sent mauvais.
Don't pour oil down the sink. | Ne verse pas d'huile dans l'évier.
The shower is too weak. | La douche n'a pas assez de pression.
The air conditioner is leaking. | La clim fuit.
The air conditioner isn't cold. | La clim ne refroidit pas.
The fridge stopped working. | Le frigo est tombé en panne.
The washing machine is making a loud noise. | La machine à laver fait beaucoup de bruit.
The fan is broken. | Le ventilateur est cassé.
The door won't lock. | La porte ne ferme pas à clé.
I'm locked out. | Je suis enfermé dehors.
I lost my keys. | J'ai perdu mes clés.
Can you call a locksmith? | Tu peux appeler un serrurier ?
The window won't close. | La fenêtre ne ferme pas.
The smoke alarm keeps beeping. | Le détecteur de fumée n'arrête pas de biper.
It needs a new battery. | Il lui faut une pile neuve.
Can you fix it? | Tu peux le réparer ?
I can fix it myself. | Je peux le réparer moi-même.
I don't know how to fix it. | Je ne sais pas comment le réparer.
Let's call a plumber. | Appelons un plombier.
We need an electrician. | Il nous faut un électricien.
I'll call the landlord. | Je vais appeler le propriétaire.
Tell the building manager. | Préviens le gardien de l'immeuble.
Can someone come today? | Quelqu'un peut venir aujourd'hui ?
When can you come? | Quand est-ce que vous pouvez venir ?
It's an emergency. | C'est une urgence.
How much will it cost? | Ça va coûter combien ?
Is that expensive? | C'est cher ?
Hand me the screwdriver. | Passe-moi le tournevis.
Hold the ladder, please. | Tiens l'échelle, s'il te plaît.
Bring a flashlight. | Apporte une lampe de poche.
It's too dark to see. | Il fait trop sombre pour voir.
Be careful on the ladder. | Fais attention sur l'échelle.
Wear gloves. | Mets des gants.
Is it safe now? | C'est sans danger maintenant ?
Let me check. | Laisse-moi vérifier.
It's fixed! | C'est réparé !
Thank you so much. | Merci beaucoup.
That was fast. | C'était rapide.
It's working fine now. | Ça marche bien maintenant.
It broke again. | C'est encore tombé en panne.
This happens every summer. | Ça arrive tous les étés.
There's mold on the wall. | Il y a de la moisissure sur le mur.
The wall is wet. | Le mur est humide.
The paint is peeling. | La peinture s'écaille.
I saw a cockroach in the kitchen! | J'ai vu un cafard dans la cuisine !
There's a strange smell. | Il y a une drôle d'odeur.
The electric bill is so high. | La facture d'électricité est tellement élevée.
The water bill went up. | La facture d'eau a augmenté.
Turn off the lights when you leave. | Éteins les lumières en partant.
Don't leave the water running. | Ne laisse pas l'eau couler.
There's a water outage tomorrow. | Il y a une coupure d'eau demain.
Fill some buckets tonight. | Remplis quelques seaux ce soir.
There's a power outage this afternoon. | Il y a une coupure de courant cet après-midi.
Charge your phone now. | Recharge ton téléphone maintenant.
Where's the toolbox? | Où est la boîte à outils ?
I need a bigger wrench. | J'ai besoin d'une clé plus grande.
Tighten the screw. | Serre la vis.
Old houses always need repairs. | Les vieilles maisons ont toujours besoin de réparations.
Thanks for coming so quickly. | Merci d'être venu si vite.
`
});

// ---------- 中級 Intermediate ----------
addFrench("repairs", {
  words: `
circuit breaker | le disjoncteur | Le disjoncteur a sauté.
trip | sauter | Le disjoncteur saute quand j'utilise le micro-ondes.
breaker box | le tableau électrique | Le tableau électrique est près de la porte d'entrée.
main switch | le disjoncteur général | Coupe le disjoncteur général.
overload | surcharger | Trop d'appareils surchargent le circuit.
short circuit | le court-circuit | Un court-circuit a provoqué l'incendie.
power strip | la multiprise | Prends une multiprise avec interrupteur.
surge protector | le parafoudre | Branche l'ordinateur sur un parafoudre.
voltage | la tension | À Taïwan, la tension domestique est de 110 volts.
adapter | l'adaptateur | Il te faut un adaptateur pour cette prise.
grounded | relié à la terre | La prise est-elle reliée à la terre ?
light fixture | le luminaire | Le luminaire est mal fixé.
LED | la LED | Passe aux ampoules LED.
flicker | clignoter ; vaciller | Les lumières clignotent le soir.
dim | faible | La lumière est trop faible.
blown fuse | le fusible grillé | Ce n'est qu'un fusible grillé.
water pressure | la pression de l'eau | La pression de l'eau est faible.
booster pump | le surpresseur | Le surpresseur est bruyant.
water tower | le réservoir d'eau sur le toit | Nettoie le réservoir d'eau sur le toit une fois par an.
water outage | la coupure d'eau | Il y a une coupure d'eau demain.
shut-off valve | le robinet d'arrêt | Ferme le robinet d'arrêt.
valve | la vanne ; le robinet | La vanne est bloquée.
burst pipe | le tuyau éclaté | Un tuyau éclaté a inondé la cuisine.
leaky faucet | le robinet qui fuit | Répare ce robinet qui fuit.
washer | le joint | Remplace le joint.
clog | le bouchon ; l'engorgement | Ce sont des cheveux qui ont causé le bouchon.
drain cleaner | le déboucheur | Verse un peu de déboucheur.
plumbing snake | le furet | Utilise un furet.
sewer | l'égout | Ça sent l'égout.
backflow | le refoulement | Le refoulement des eaux usées, c'est dégoûtant.
overflow | déborder | Les toilettes vont déborder.
toilet tank | le réservoir de chasse d'eau | Le réservoir de chasse d'eau n'arrête pas de se remplir.
running toilet | la chasse d'eau qui fuit | Une chasse d'eau qui fuit gaspille beaucoup d'eau.
flapper | le clapet de chasse d'eau | Remplace le clapet de chasse d'eau.
seal | le joint d'étanchéité | Le joint d'étanchéité est usé.
caulk | le silicone ; refaire les joints | Refais les joints en silicone de la baignoire.
grout | le joint de carrelage | Les joints de carrelage sont moisis.
tile | le carreau | Un carreau s'est fissuré.
waterproofing | l'étanchéité | La salle de bains a besoin d'une nouvelle étanchéité.
leak detection | la recherche de fuite | Nous avons fait appel à une entreprise de recherche de fuite.
water stain | la tache d'humidité | Il y a une tache d'humidité au plafond.
damp | humide | Le mur est humide au toucher.
humidity | l'humidité | L'humidité est élevée à Taïwan.
dehumidifier | le déshumidificateur | Fais tourner le déshumidificateur.
efflorescence | le salpêtre | Le salpêtre est fréquent dans les vieux immeubles.
peeling paint | la peinture écaillée | Il y a de la peinture écaillée partout.
crack | la fissure | Il y a une fissure dans le mur.
gas water heater | le chauffe-eau au gaz | Le chauffe-eau au gaz ne s'allume pas.
electric water heater | le chauffe-eau électrique | Un chauffe-eau électrique met du temps à chauffer.
igniter | l'allumeur | L'allumeur fait clic, mais ne s'allume pas.
gas leak | la fuite de gaz | Si tu sens une fuite de gaz, ouvre les fenêtres.
carbon monoxide | le monoxyde de carbone | Le monoxyde de carbone n'a pas d'odeur.
ventilation | l'aération ; la ventilation | Une bonne aération sauve des vies.
exhaust fan | l'extracteur d'air | L'extracteur d'air est en panne.
range hood | la hotte | Nettoie le filtre de la hotte.
gas stove | la gazinière | La gazinière ne s'allume pas.
gas cylinder | la bouteille de gaz | La bouteille de gaz est vide.
natural gas | le gaz naturel | Notre immeuble utilise le gaz naturel.
meter | le compteur | Relève le compteur.
Taipower | Taipower, la compagnie d'électricité taïwanaise | Appelle Taipower pour la coupure.
water company | la compagnie des eaux | La compagnie des eaux coupera l'eau demain.
building manager | le gardien ; le gestionnaire de l'immeuble | Demande au gardien.
management committee | le conseil syndical | Le conseil syndical a approuvé la réparation.
upstairs neighbor | le voisin du dessus | La fuite vient du voisin du dessus.
common area | les parties communes | Les lumières des parties communes ne marchent plus.
quote | le devis | Demande d'abord un devis.
estimate | l'estimation ; le devis | Vous pouvez me faire une estimation ?
call-out fee | les frais de déplacement | Il y a 500 dollars de frais de déplacement.
labor cost | la main-d'œuvre | La main-d'œuvre est en plus.
parts | les pièces | Les pièces coûtent 300 dollars.
warranty | la garantie | C'est encore sous garantie ?
replace | remplacer | Il faut remplacer le tuyau.
install | installer | Ils vont installer un nouveau chauffe-eau.
appointment | le rendez-vous | Prends rendez-vous avec le plombier.
DIY | le bricolage | C'est une réparation de bricolage facile.
handyman | l'homme à tout faire ; le bricoleur | Un homme à tout faire peut s'occuper des petits travaux.
drill | la perceuse | Utilise une perceuse pour faire un trou.
screw | la vis | Serre la vis.
nail | le clou | Enfonce le clou.
pliers | la pince | Prends la pince.
multimeter | le multimètre | Teste-le avec un multimètre.
insulation tape | le ruban isolant ; le chatterton | Entoure le fil de ruban isolant.
rubber gloves | les gants en caoutchouc | Mets des gants en caoutchouc.
tenant | le locataire | Les locataires doivent signaler rapidement les dégâts.
lease | le bail | Regarde les clauses de réparation dans le bail.
responsible | responsable | Qui est responsable de la réparation ?
wear and tear | l'usure normale | L'usure normale est à la charge du propriétaire.
damage | les dégâts ; les dommages | Les locataires paient les dégâts qu'ils causent.
deposit | la caution | Ils l'ont retenu sur ma caution.
insurance claim | la déclaration de sinistre | Fais une déclaration de sinistre pour le dégât des eaux.
water damage | le dégât des eaux | Le dégât des eaux a abîmé le sol.
fuse box | la boîte à fusibles | La vieille boîte à fusibles a été remplacée.
water meter | le compteur d'eau | Le compteur d'eau n'arrête pas de tourner.
electric meter | le compteur électrique | Relève le compteur électrique.
drip tray | le bac de récupération | Vide le bac de récupération.
showerhead | le pommeau de douche | Le pommeau de douche est bouché par le calcaire.
hose | le tuyau flexible | Le tuyau de la machine à laver fuit.
access panel | la trappe de visite | Ouvre la trappe de visite au plafond.
socket | la douille ; la prise | La douille de l'ampoule est desserrée.
rust | la rouille | Le tuyau est couvert de rouille.
handy | bricoleur | Mon père est très bricoleur.
jack of all trades | le touche-à-tout | C'est un touche-à-tout : plombier, peintre et électricien.
do-it-yourself | le bricolage ; le fait maison | Le bricolage permet d'économiser.
quick fix | la solution de fortune | Le scotch, ce n'est qu'une solution de fortune.
a stitch in time saves nine | mieux vaut prévenir que guérir | Répare la fuite maintenant. Mieux vaut prévenir que guérir.
if it ain't broke, don't fix it | on ne change pas une équipe qui gagne | On ne change pas une équipe qui gagne.
on the blink | détraqué | La télé est encore détraquée.
up and running | en état de marche | Le chauffe-eau est de nouveau en état de marche.
out of order | hors service ; en panne | L'ascenseur est hors service.
nuts and bolts | les rouages ; les bases | Il connaît tous les rouages de la plomberie.
blow a fuse | péter un plomb | Maman va péter un plomb en voyant le tuyau éclaté.
run out of steam | s'essouffler | Je m'essouffle toujours vers la fin.
throw a wrench in the works | mettre des bâtons dans les roues | La pluie pourrait nous mettre des bâtons dans les roues.
hit the nail on the head | mettre le doigt dessus | Tu as mis le doigt dessus.
on the fritz | en rade ; détraqué | La clim est en rade.
`,
  phrases: `
The breaker trips every time I use the microwave. | Le disjoncteur saute chaque fois que j'utilise le micro-ondes.
Don't run the AC and the heater at the same time. | Ne fais pas marcher la clim et le chauffage en même temps.
You're overloading the circuit. | Tu surcharges le circuit.
Don't plug too many things into one power strip. | Ne branche pas trop d'appareils sur une seule multiprise.
Get a power strip with an overload switch. | Prends une multiprise avec protection contre les surcharges.
The extension cord is hot to the touch. | La rallonge est chaude au toucher.
Replace it right away. | Remplace-la tout de suite.
The lights keep flickering. | Les lumières n'arrêtent pas de clignoter.
It might be a loose connection. | C'est peut-être un faux contact.
Turn off the main switch before you start. | Coupe le disjoncteur général avant de commencer.
Test it with a multimeter. | Teste-le avec un multimètre.
Is this outlet grounded? | Cette prise est-elle reliée à la terre ?
The AC needs a 220-volt outlet. | La clim a besoin d'une prise 220 volts.
The water pressure is really low. | La pression de l'eau est vraiment faible.
The booster pump might be broken. | Le surpresseur est peut-être en panne.
When was the water tower last cleaned? | Quand est-ce que le réservoir sur le toit a été nettoyé pour la dernière fois ?
The water looks a bit yellow. | L'eau est un peu jaune.
Let it run for a minute. | Laisse-la couler une minute.
Close the shut-off valve under the sink. | Ferme le robinet d'arrêt sous l'évier.
The washer in the faucet is worn out. | Le joint du robinet est usé.
It's an easy fix. | C'est facile à réparer.
Hair is clogging the shower drain. | Des cheveux bouchent l'évacuation de la douche.
Try some drain cleaner first. | Essaie d'abord avec du déboucheur.
If that doesn't work, use a plumbing snake. | Si ça ne marche pas, utilise un furet.
Don't mix different drain cleaners. | Ne mélange pas différents déboucheurs.
The toilet tank keeps refilling. | Le réservoir de la chasse d'eau n'arrête pas de se remplir.
The flapper needs to be replaced. | Il faut remplacer le clapet.
The silicone around the tub is moldy. | Le silicone autour de la baignoire est moisi.
Let's re-caulk the bathtub. | Refaisons les joints de la baignoire.
There's a water stain on the ceiling. | Il y a une tache d'humidité au plafond.
It's coming from upstairs. | Ça vient du dessus.
Can you check your bathroom? | Vous pouvez vérifier votre salle de bains ?
I think your pipe is leaking into my unit. | Je crois que votre tuyau fuit chez moi.
Let's ask the management committee to help. | Demandons de l'aide au conseil syndical.
We need professional leak detection. | Il nous faut une recherche de fuite par un professionnel.
Who's going to pay for this? | Qui va payer ça ?
Normally, the owner of the leaking pipe pays. | Normalement, c'est le propriétaire du tuyau qui fuit qui paie.
Please take photos before the repair. | Prenez des photos avant la réparation, s'il vous plaît.
Keep all the receipts. | Garde tous les reçus.
The wall has efflorescence. | Il y a du salpêtre sur le mur.
Scraping it off won't fix it. | Le gratter ne réglera pas le problème.
You need to stop the water at the source. | Il faut arrêter l'eau à la source.
Run the dehumidifier during the rainy season. | Fais marcher le déshumidificateur pendant la saison des pluies.
The gas water heater won't light. | Le chauffe-eau au gaz ne s'allume pas.
Is the gas valve open? | Le robinet de gaz est ouvert ?
The gas cylinder might be empty. | La bouteille de gaz est peut-être vide.
Call the gas company for a refill. | Appelle le livreur de gaz pour une nouvelle bouteille.
Maybe the batteries in the igniter are dead. | Les piles de l'allumeur sont peut-être mortes.
Keep the window open when you shower. | Laisse la fenêtre ouverte quand tu prends ta douche.
Never install a gas heater in a closed space. | N'installe jamais un chauffe-eau au gaz dans un espace fermé.
Carbon monoxide has no color or smell. | Le monoxyde de carbone est incolore et inodore.
The range hood is really loud. | La hotte est vraiment bruyante.
The filter needs cleaning. | Il faut nettoyer le filtre.
The exhaust fan in the bathroom stopped working. | L'extracteur de la salle de bains ne marche plus.
Is it still under warranty? | C'est encore sous garantie ?
Do you have the receipt? | Vous avez le ticket de caisse ?
The repairman can come on Thursday. | Le réparateur peut venir jeudi.
Is there a call-out fee? | Il y a des frais de déplacement ?
How much is labor? | Combien coûte la main-d'œuvre ?
Can you give me a quote first? | Vous pouvez d'abord me faire un devis ?
That's more than I expected. | C'est plus que ce que je pensais.
Let me get another quote. | Je vais demander un autre devis.
Is it cheaper to repair or replace? | C'est moins cher de réparer ou de remplacer ?
It's not worth repairing. | Ça ne vaut pas la peine de le réparer.
Buy an energy-efficient model. | Achète un modèle économe en énergie.
It's the landlord's responsibility. | C'est la responsabilité du propriétaire.
Check your lease. | Vérifie ton bail.
Report it to the landlord in writing. | Signale-le au propriétaire par écrit.
Send a message so there's a record. | Envoie un message pour en garder une trace.
The landlord said he'd send someone. | Le propriétaire a dit qu'il enverrait quelqu'un.
It's been a week and no one has come. | Ça fait une semaine, et personne n'est venu.
Can I deduct the repair from the rent? | Je peux déduire la réparation du loyer ?
Ask the landlord before you do that. | Demande au propriétaire avant de faire ça.
I don't want to lose my deposit. | Je ne veux pas perdre ma caution.
Normal wear and tear isn't the tenant's fault. | L'usure normale n'est pas la faute du locataire.
Taipower says the outage will last two hours. | Taipower dit que la coupure durera deux heures.
The water company posted a notice downstairs. | La compagnie des eaux a affiché un avis en bas.
Call 1999 to report the problem. | Appelle le 1999 pour signaler le problème.
The streetlight outside is broken. | Le lampadaire dehors est en panne.
The common area lights are out. | Les lumières des parties communes sont éteintes.
The elevator is out of order. | L'ascenseur est en panne.
I'll do it myself. It's just a DIY job. | Je vais le faire moi-même. C'est juste du bricolage.
Watch a video first. | Regarde d'abord une vidéo.
Measure twice, cut once. | Mesure deux fois, coupe une fois.
Use the right size screw. | Utilise une vis de la bonne taille.
Don't strip the screw. | N'abîme pas la tête de la vis.
You'll need a drill for that. | Il te faudra une perceuse pour ça.
Wrap the connection with insulation tape. | Entoure la connexion de ruban isolant.
Wear rubber gloves for electrical work. | Mets des gants en caoutchouc pour les travaux électriques.
Make sure the power is off. | Assure-toi que le courant est coupé.
Double-check before you touch anything. | Vérifie deux fois avant de toucher quoi que ce soit.
If you're not sure, call a professional. | Si tu n'es pas sûr, appelle un professionnel.
The pipes make a banging noise. | Les tuyaux font des coups sourds.
The ceiling fan wobbles. | Le ventilateur de plafond oscille.
The doorbell needs new batteries. | La sonnette a besoin de piles neuves.
The tiles are coming loose. | Les carreaux se décollent.
The floor is uneven. | Le sol n'est pas plat.
The windows rattle in the wind. | Les fenêtres vibrent avec le vent.
We should fix this before typhoon season. | On devrait réparer ça avant la saison des typhons.
Small problems become big problems. | Les petits problèmes deviennent de gros problèmes.
`
});

// ---------- 高級 Advanced ----------
addFrench("repairs", {
  words: `
rewiring | la réfection de l'installation électrique | Les vieux immeubles ont souvent besoin d'une réfection de l'installation électrique.
dedicated circuit | le circuit dédié ; la ligne spécialisée | La clim a besoin d'un circuit dédié.
220-volt | en 220 volts | Les gros climatiseurs fonctionnent sur une ligne en 220 volts.
amperage | l'intensité ; l'ampérage | Vérifie l'intensité avant d'ajouter des appareils.
wattage | la puissance | La puissance du radiateur est trop élevée pour cette prise.
load calculation | le bilan de puissance | L'électricien a fait un bilan de puissance.
residual current device | le disjoncteur différentiel | Un disjoncteur différentiel coupe le courant en cas de fuite.
ground fault | le défaut à la terre | Un défaut à la terre peut provoquer une décharge.
electric shock | la décharge électrique | Il a reçu une décharge électrique.
electrocution | l'électrocution | De l'eau près des fils, c'est un risque d'électrocution.
insulation | la gaine isolante ; l'isolant | La gaine isolante des vieux fils se craquelle.
aging wiring | l'installation électrique vétuste | Une installation électrique vétuste est une cause majeure d'incendies domestiques.
electrical fire | l'incendie d'origine électrique | Un incendie d'origine électrique a démarré derrière le frigo.
fire extinguisher | l'extincteur | Garde un extincteur dans la cuisine.
conduit | la gaine ; le conduit | Fais passer les fils dans une gaine.
junction box | la boîte de dérivation | La connexion se trouve dans une boîte de dérivation.
three-prong plug | la fiche avec terre | Une fiche avec terre est reliée à la terre.
polarity | la polarité | La polarité de la prise est inversée.
voltage drop | la chute de tension | Les câbles longs provoquent une chute de tension.
smart meter | le compteur intelligent | Un compteur intelligent suit la consommation heure par heure.
time-of-use rate | le tarif heures creuses | Le tarif heures creuses rend l'électricité moins chère la nuit.
tiered pricing | la tarification progressive | L'électricité domestique suit une tarification progressive.
energy efficiency label | l'étiquette énergétique | Cherche l'étiquette énergétique.
inverter air conditioner | le climatiseur inverter | Un climatiseur inverter économise l'électricité.
refrigerant | le fluide frigorigène | La clim manque de fluide frigorigène.
condensate drain | l'évacuation des condensats | L'évacuation des condensats est bouchée.
compressor | le compresseur | Le compresseur fait du bruit.
forced-exhaust water heater | le chauffe-eau à ventouse | Un chauffe-eau à ventouse est plus sûr.
enclosed balcony | le balcon fermé | N'installe jamais un chauffe-eau au gaz sur un balcon fermé.
carbon monoxide poisoning | l'intoxication au monoxyde de carbone | Les cas d'intoxication au monoxyde de carbone augmentent en hiver.
CO detector | le détecteur de monoxyde de carbone | Installe un détecteur de monoxyde de carbone près du chauffe-eau.
gas shut-off valve | le robinet de gaz | Ferme le robinet de gaz avant de partir en voyage.
heat pump water heater | le chauffe-eau thermodynamique | Un chauffe-eau thermodynamique est très efficace.
solar water heater | le chauffe-eau solaire | Les chauffe-eau solaires sont courants dans le sud de Taïwan.
water hammer | le coup de bélier | Le coup de bélier fait cogner les tuyaux.
pipe corrosion | la corrosion des canalisations | La corrosion des canalisations rend l'eau brune.
galvanized pipe | le tuyau galvanisé | Les vieux tuyaux galvanisés rouillent de l'intérieur.
PVC pipe | le tuyau en PVC | La plupart des évacuations sont en tuyau PVC.
stainless steel pipe | le tuyau en inox | Le tuyau en inox dure plus longtemps.
P-trap | le siphon | Un siphon sec laisse entrer les odeurs d'égout.
sewer gas | les gaz d'égout | Les gaz d'égout sentent l'œuf pourri.
vent stack | la ventilation primaire | La ventilation primaire est bouchée.
septic tank | la fosse septique | La fosse septique doit être vidangée.
grease trap | le bac à graisse | Les restaurants doivent installer un bac à graisse.
water filter | le purificateur d'eau ; le filtre à eau | Change régulièrement le filtre à eau.
water quality | la qualité de l'eau | La qualité de l'eau dépend aussi des tuyaux.
hard water | l'eau calcaire ; l'eau dure | L'eau calcaire laisse des dépôts blancs.
limescale | le calcaire ; le tartre | Le vinaigre enlève le calcaire.
seepage | l'infiltration | Une infiltration par le toit a causé la tache.
waterproof membrane | la membrane d'étanchéité | La membrane d'étanchéité du toit a lâché.
roof leak | la fuite de toiture | Les typhons révèlent chaque fuite de toiture.
moisture meter | l'humidimètre | Un humidimètre détecte les fuites cachées.
thermal imaging | la thermographie | La thermographie peut localiser une fuite sans casser le carrelage.
pressure test | l'essai de pression ; la mise en pression | Un essai de pression a révélé une fuite sur la conduite d'eau chaude.
spalling | l'éclatement du béton | L'éclatement du béton met les armatures à nu.
rebar | l'armature ; le fer à béton | Les armatures rouillent.
sea sand house | la maison en béton au sable de mer | Une maison en béton au sable de mer contient trop de chlorure dans le béton.
structural engineer | l'ingénieur structure | Demande à un ingénieur structure d'inspecter les fissures.
load-bearing wall | le mur porteur | Ne supprime jamais un mur porteur.
illegal addition | la construction illégale | La pièce sur le toit est une construction illégale.
building permit | le permis de construire | Les gros travaux nécessitent un permis de construire.
renovation | la rénovation ; les travaux | La rénovation a duré trois mois.
interior renovation permit | l'autorisation de travaux intérieurs | Certains travaux nécessitent une autorisation de travaux intérieurs.
contractor | l'entrepreneur | Demande des devis à trois entrepreneurs.
subcontractor | le sous-traitant | L'entrepreneur a embauché un sous-traitant.
itemized quote | le devis détaillé | Demande un devis détaillé.
change order | l'avenant ; la modification de travaux | Chaque avenant fait monter le prix.
progress payment | le paiement échelonné | Paie de façon échelonnée, pas tout en une fois.
final inspection | la réception des travaux | Fais la réception des travaux avant de payer.
punch list | la liste des réserves | Donne la liste des réserves à l'entrepreneur.
workmanship | la qualité d'exécution | Une mauvaise qualité d'exécution a causé la fuite.
licensed electrician | l'électricien qualifié | Fais appel à un électricien qualifié.
code | les normes | L'installation électrique n'est pas aux normes.
inspection report | le rapport d'inspection | Lis le rapport d'inspection.
liability | la responsabilité | Qui est responsable des dégâts ?
negligence | la négligence | La fuite est due à une négligence.
compensation | l'indemnisation | Nous avons demandé une indemnisation.
mediation | la médiation | Les voisins peuvent recourir à la médiation.
fire insurance | l'assurance incendie | L'assurance incendie couvre les dégâts causés par le feu.
earthquake insurance | l'assurance tremblement de terre | À Taïwan, l'assurance tremblement de terre de base est incluse dans l'assurance incendie habitation.
preventive maintenance | l'entretien préventif | L'entretien préventif fait faire des économies.
lifespan | la durée de vie | La durée de vie d'un chauffe-eau est d'environ dix ans.
energy audit | le diagnostic énergétique | Un diagnostic énergétique a révélé de l'électricité gaspillée.
standby power | la consommation en veille | La consommation en veille finit par compter.
phantom load | la consommation fantôme | Débranche les chargeurs pour réduire la consommation fantôme.
voltage stabilizer | le stabilisateur de tension | Un stabilisateur de tension protège les appareils sensibles.
uninterruptible power supply | l'onduleur | Un onduleur garde le routeur allumé.
generator | le groupe électrogène | Un groupe électrogène est utile lors des longues coupures.
blackout | la panne générale ; le black-out | Le black-out de 2017 a touché des millions de foyers à Taïwan.
rolling blackout | le délestage tournant | Des délestages tournants ont frappé Taïwan en 2021.
grid | le réseau électrique | Le réseau électrique était sous tension.
peak demand | le pic de consommation | Le pic de consommation a lieu les après-midi d'été.
smart home | la maison connectée | Les capteurs d'une maison connectée peuvent détecter les fuites.
leak sensor | le détecteur de fuite | Un détecteur de fuite envoie une alerte sur ton téléphone.
fire escape | l'issue de secours | Garde l'issue de secours dégagée.
evacuation ladder | l'échelle d'évacuation ; le descendeur | Apprends à utiliser l'échelle d'évacuation.
emergency lighting | l'éclairage de secours | L'éclairage de secours s'allume en cas de panne.
hazardous | dangereux | Une vieille installation électrique est dangereuse.
building code | le code de la construction | Le code de la construction impose des sorties de secours.
arc fault | l'arc électrique | Un arc électrique peut déclencher un incendie à l'intérieur des murs.
patch things up | se réconcilier ; recoller les morceaux | Il est temps de recoller les morceaux avec ton voisin.
a bad workman blames his tools | les mauvais ouvriers ont toujours de mauvais outils | Les mauvais ouvriers ont toujours de mauvais outils.
a band-aid solution | une solution pansement | Ce n'est qu'une solution pansement.
duct tape and a prayer | des bouts de ficelle | La vieille voiture tient avec des bouts de ficelle.
the writing is on the wall | les signes ne trompent pas | Les tuyaux sont rouillés : les signes ne trompent pas.
come apart at the seams | partir en morceaux | Le vieux canapé va bientôt partir en morceaux.
all thumbs | maladroit de ses mains | Je suis maladroit de mes mains avec les outils.
cut corners | bâcler ; rogner sur la qualité | Ne laisse pas l'entrepreneur bâcler le travail.
a can of worms | un sac de nœuds ; la boîte de Pandore | Ouvrir ce mur pourrait ouvrir la boîte de Pandore.
pull the plug | arrêter les frais ; débrancher | Ils ont décidé d'arrêter les frais sur la rénovation.
get to the bottom of | aller au fond des choses ; tirer au clair | Il faut tirer au clair l'origine de cette fuite.
a drop in the bucket | une goutte d'eau dans la mer | Cette facture de réparation, c'est une goutte d'eau dans la mer.
water under the bridge | de l'histoire ancienne | Notre dispute, c'est de l'histoire ancienne.
leave no stone unturned | remuer ciel et terre | Nous allons remuer ciel et terre pour trouver la fuite.
the whole nine yards | tout le tralala ; de A à Z | Ils ont refait la cuisine de A à Z.
`,
  phrases: `
The wiring in this building is over forty years old. | L'installation électrique de cet immeuble a plus de quarante ans.
Aging wiring is a fire hazard. | Une installation électrique vétuste présente un risque d'incendie.
The insulation is cracking. | La gaine isolante se craquelle.
We should have the whole unit rewired. | On devrait refaire toute l'installation électrique du logement.
The AC should be on a dedicated circuit. | La clim devrait être sur un circuit dédié.
The electrician did a load calculation. | L'électricien a fait un bilan de puissance.
The main breaker is too small for modern appliances. | Le disjoncteur général est trop faible pour les appareils modernes.
We need to upgrade the electrical capacity. | Il faut augmenter la puissance électrique.
You'll have to apply to Taipower for that. | Pour ça, il faudra faire une demande auprès de Taipower.
Install a residual current device in the bathroom. | Installe un disjoncteur différentiel dans la salle de bains.
It cuts the power if there's a ground fault. | Il coupe le courant en cas de défaut à la terre.
Water and electricity don't mix. | L'eau et l'électricité ne font pas bon ménage.
The outlet near the sink should be on a GFCI. | La prise près du lavabo devrait être protégée par un différentiel.
Hire a licensed electrician. | Fais appel à un électricien qualifié.
The wiring isn't up to code. | L'installation électrique n'est pas aux normes.
That could void your insurance. | Ça pourrait annuler ton assurance.
An electrical fire can start inside the wall. | Un incendie électrique peut démarrer à l'intérieur du mur.
Keep a fire extinguisher in the kitchen. | Garde un extincteur dans la cuisine.
Do you know how to use it? | Tu sais t'en servir ?
Pull, aim, squeeze, sweep. | Tirer la goupille, viser, presser, balayer.
Install smoke detectors in every bedroom. | Installe un détecteur de fumée dans chaque chambre.
Carbon monoxide poisoning cases rise every winter. | Les intoxications au monoxyde de carbone augmentent chaque hiver.
Many cases involve gas heaters on enclosed balconies. | Beaucoup de cas concernent des chauffe-eau au gaz sur des balcons fermés.
Switch to a forced-exhaust model. | Passe à un modèle à ventouse.
Or consider a heat pump water heater. | Ou envisage un chauffe-eau thermodynamique.
It costs more upfront but saves energy. | Il coûte plus cher à l'achat, mais économise de l'énergie.
Install a CO detector near the heater. | Installe un détecteur de monoxyde de carbone près du chauffe-eau.
Close the gas valve before a long trip. | Ferme le robinet de gaz avant un long voyage.
Old galvanized pipes rust from the inside. | Les vieux tuyaux galvanisés rouillent de l'intérieur.
That's why the water looks brown. | C'est pour ça que l'eau est brune.
Replace them with stainless steel. | Remplace-les par de l'inox.
Water hammer can damage the pipes. | Les coups de bélier peuvent endommager les tuyaux.
A pressure test will show if there's a leak. | Un essai de pression montrera s'il y a une fuite.
Thermal imaging can find leaks without breaking tiles. | La thermographie peut trouver les fuites sans casser le carrelage.
Leak detection isn't always accurate. | La recherche de fuite n'est pas toujours précise.
Ask what happens if they can't find the leak. | Demande ce qui se passe s'ils ne trouvent pas la fuite.
Get a written guarantee. | Exige une garantie écrite.
The waterproof membrane on the roof has failed. | La membrane d'étanchéité du toit a lâché.
Rooftop waterproofing is a shared cost. | L'étanchéité du toit est une charge commune.
The management committee has to approve it. | Le conseil syndical doit l'approuver.
Efflorescence means water is getting into the concrete. | Le salpêtre signifie que l'eau pénètre dans le béton.
Painting over it is only cosmetic. | Repeindre par-dessus, c'est purement esthétique.
The real fix is waterproofing from the wet side. | La vraie solution, c'est l'étanchéité du côté humide.
Spalling concrete is a structural warning sign. | L'éclatement du béton est un signal d'alarme structurel.
You can see the rusted rebar. | On voit les armatures rouillées.
Have a structural engineer inspect it. | Fais-le inspecter par un ingénieur structure.
Test the concrete for chloride. | Fais analyser la teneur en chlorure du béton.
A sea sand house can lose a lot of value. | Une maison en béton au sable de mer peut perdre beaucoup de valeur.
Never remove a load-bearing wall. | Ne supprime jamais un mur porteur.
Check whether that rooftop room is an illegal addition. | Vérifie si cette pièce sur le toit est une construction illégale.
Get an itemized quote from three contractors. | Demande un devis détaillé à trois entrepreneurs.
Don't pay everything upfront. | Ne paie pas tout d'avance.
Pay in stages as the work is completed. | Paie par étapes, au fur et à mesure de l'avancement des travaux.
Write the warranty terms into the contract. | Inscris les conditions de garantie dans le contrat.
Every change order raises the price. | Chaque modification fait monter le prix.
Agree on changes in writing. | Mettez-vous d'accord par écrit sur les modifications.
Do a final inspection before the last payment. | Fais la réception des travaux avant le dernier paiement.
Make a punch list of everything that's not right. | Dresse la liste des réserves pour tout ce qui ne va pas.
Poor workmanship caused the leak. | Un travail mal fait a causé la fuite.
The contractor should fix it at his own cost. | L'entrepreneur devrait réparer à ses frais.
If he refuses, you can apply for mediation. | S'il refuse, tu peux demander une médiation.
Water damage from a neighbor's pipe is their liability. | Un dégât des eaux venant du tuyau d'un voisin relève de sa responsabilité.
Check whether your fire insurance covers water damage. | Vérifie si ton assurance incendie couvre les dégâts des eaux.
Basic fire insurance usually doesn't cover leaks. | L'assurance incendie de base ne couvre généralement pas les fuites.
Earthquake coverage comes with home fire insurance. | La garantie tremblement de terre est incluse dans l'assurance incendie habitation.
Document everything for the claim. | Garde une trace de tout pour la déclaration de sinistre.
Preventive maintenance is cheaper than emergency repairs. | L'entretien préventif coûte moins cher que les réparations d'urgence.
A water heater lasts about ten years. | Un chauffe-eau dure environ dix ans.
Ours is fifteen years old. | Le nôtre a quinze ans.
It's living on borrowed time. | Il vit ses derniers jours.
Inverter air conditioners use much less power. | Les climatiseurs inverter consomment beaucoup moins.
Clean the filters every two weeks in summer. | En été, nettoie les filtres toutes les deux semaines.
Look for the energy efficiency label. | Cherche l'étiquette énergétique.
Summer electricity rates are higher. | Les tarifs d'électricité sont plus élevés en été.
Household rates rise with usage. | Le tarif domestique augmente avec la consommation.
Standby power adds up over a year. | Sur un an, la consommation en veille finit par peser.
Unplug chargers when you're not using them. | Débranche les chargeurs quand tu ne t'en sers pas.
A smart meter shows when you use the most power. | Un compteur intelligent montre quand tu consommes le plus.
Time-of-use rates reward night-time use. | Le tarif heures creuses favorise la consommation de nuit.
Remember the 2017 blackout? | Tu te souviens du black-out de 2017 ?
Rolling blackouts hit Taiwan in 2021. | Des délestages tournants ont frappé Taïwan en 2021.
The grid is under stress on hot afternoons. | Le réseau est sous pression les après-midi de chaleur.
Keep a flashlight and power bank ready. | Garde une lampe de poche et une batterie externe à portée de main.
An uninterruptible power supply protects your computer. | Un onduleur protège ton ordinateur.
A leak sensor can send alerts to your phone. | Un détecteur de fuite peut envoyer des alertes sur ton téléphone.
Smart home devices can shut off the water automatically. | Les objets connectés peuvent couper l'eau automatiquement.
After an earthquake, check for gas leaks. | Après un tremblement de terre, vérifie qu'il n'y a pas de fuite de gaz.
Know where your main switch and main valve are. | Sache où se trouvent le disjoncteur général et le robinet d'arrivée d'eau.
Show everyone in the family. | Montre-les à toute la famille.
Keep emergency numbers on the fridge. | Garde les numéros d'urgence sur le frigo.
Don't attempt electrical work you're not qualified for. | Ne fais pas de travaux électriques pour lesquels tu n'es pas qualifié.
Cutting corners can be deadly. | Bâcler le travail peut être mortel.
Cheap repairs often cost more in the end. | Les réparations bon marché finissent souvent par coûter plus cher.
Fix the cause, not just the symptom. | Traite la cause, pas seulement le symptôme.
Older buildings need regular inspections. | Les vieux bâtiments ont besoin d'inspections régulières.
Urban renewal may be the only real solution. | La rénovation urbaine est peut-être la seule vraie solution.
A well-maintained home keeps its value. | Un logement bien entretenu garde sa valeur.
Safety is worth the cost. | La sécurité vaut bien son prix.
A home is only as safe as its wiring. | Un logement n'est pas plus sûr que son installation électrique.
When in doubt, shut it off and call a pro. | Dans le doute, coupe tout et appelle un pro.
`
});
