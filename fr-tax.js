// 法文對照（Français）：報稅
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
addFrench("tax", {
  words: `
tax | l'impôt ; la taxe | Nous payons tous des impôts.
income | le revenu | Mon revenu n'est pas très élevé.
salary | le salaire | Mon salaire augmente l'an prochain.
pay | payer | Je paie mes factures en ligne.
money | l'argent | Je dois économiser de l'argent.
bill | la facture | La facture de téléphone est arrivée aujourd'hui.
receipt | le reçu ; le ticket de caisse | Garde le reçu.
form | le formulaire | Remplissez ce formulaire.
fill in | remplir | Remplissez votre nom, s'il vous plaît.
sign | signer | Signez ici, s'il vous plaît.
deadline | la date limite | La date limite est le 31 mai.
file | déclarer | Je déclare mes revenus chaque mois de mai.
tax return | la déclaration de revenus | Tu as fini ta déclaration de revenus ?
refund | le remboursement | J'ai eu un remboursement d'impôt !
owe | devoir | Je dois plus d'impôts cette année.
bank | la banque | Va à la banque.
bank account | le compte bancaire | Le remboursement est versé sur mon compte bancaire.
transfer | virer | Je vais virer l'argent.
credit card | la carte de crédit | Vous pouvez payer par carte.
cash | les espèces | J'ai payé en espèces.
ID card | la carte d'identité | Apportez votre carte d'identité.
health insurance card | la carte d'assurance maladie | Vous pouvez vous connecter avec votre carte d'assurance maladie.
password | le mot de passe | N'oublie pas ton mot de passe.
app | l'application | Il existe une application pour déclarer ses impôts.
phone | le téléphone | Vous pouvez déclarer vos impôts sur votre téléphone.
computer | l'ordinateur | J'utilise mon ordinateur pour déclarer.
help | aider | Tu peux m'aider pour mes impôts ?
easy | facile | Déclarer en ligne, c'est facile.
hard | difficile | Les impôts sont difficiles à comprendre.
number | le chiffre ; le nombre | Vérifie encore les chiffres.
total | le total | Quel est le total ?
add | additionner | Additionne ces chiffres.
check | vérifier | Vérifie ton formulaire.
mistake | l'erreur | J'ai fait une erreur sur le formulaire.
correct | correct ; juste | C'est correct ?
family | la famille | Je déclare avec ma famille.
husband | le mari | C'est mon mari qui s'occupe de nos impôts.
wife | la femme | C'est ma femme qui gère notre argent.
parents | les parents | J'ai mes parents à charge.
child | l'enfant | Chaque enfant réduit votre impôt.
job | l'emploi | J'ai changé d'emploi l'an dernier.
boss | le patron | Mon patron m'a donné un formulaire fiscal.
company | l'entreprise | Mon entreprise m'envoie un formulaire chaque année.
part-time | à temps partiel | J'ai un emploi à temps partiel.
rent | le loyer | Je paie un loyer chaque mois.
house | la maison | Ils ont acheté une maison.
gift | le don ; le cadeau | Un gros don est-il imposé ?
price | le prix | À Taïwan, les prix incluent la taxe.
sales tax | la taxe sur les ventes | La taxe est-elle comprise ?
tip | le pourboire | Est-ce qu'on paie des impôts sur les pourboires ?
save | économiser | J'économise un peu chaque mois.
spend | dépenser | Je dépense trop.
budget | le budget | Fais un budget.
cost | le coût | Quel est le coût ?
free | gratuit | La déclaration en ligne est gratuite.
fee | les frais | Il n'y a pas de frais.
government | le gouvernement ; l'État | Les impôts vont à l'État.
tax office | le centre des impôts | Le centre des impôts est près de la gare.
road | la route | Les impôts financent les routes.
school | l'école | Les impôts aident à financer les écoles.
public | public | Les impôts financent les services publics.
fair | juste ; équitable | Le système fiscal est-il juste ?
rich | riche | Les riches paient plus d'impôts.
poor | pauvre | Les familles pauvres paient moins.
year | l'année | L'an dernier, j'ai gagné plus.
month | le mois | À Taïwan, mai est le mois des impôts.
May | mai | Nous déclarons nos impôts en mai.
April | avril | Les Américains déclarent généralement leurs impôts avant le 15 avril.
late | en retard | Ne déclare pas en retard.
early | tôt ; en avance | J'ai déclaré tôt cette année.
on time | à temps | Payez à temps.
penalty | la pénalité ; l'amende | Vous risquez une pénalité pour déclaration tardive.
letter | la lettre | J'ai reçu une lettre du centre des impôts.
email | l'e-mail | Regarde tes e-mails pour le reçu.
print | imprimer | Imprime le formulaire.
copy | la copie | Garde une copie.
paper | le papier ; la version papier | Mon grand-père déclare encore sur papier.
document | le document | Garde tous tes documents.
folder | le dossier ; la chemise | Range tes reçus dans une chemise.
count | compter | Compte ton argent.
calculator | la calculatrice | Utilise une calculatrice.
worry | s'inquiéter | Ne t'inquiète pas pour les impôts.
question | la question | J'ai une question sur mes impôts.
answer | répondre | Le centre des impôts peut répondre à ta question.
call | appeler | Appelle la ligne d'assistance fiscale.
hotline | la ligne d'assistance | La ligne d'assistance fiscale est occupée.
line | la file d'attente | Il y a une longue file au centre des impôts.
wait | attendre | Attendez votre tour.
lottery | la loterie | Les gains de loterie sont imposés.
receipt lottery | la loterie des tickets de caisse (à Taïwan) | J'ai gagné à la loterie des tickets de caisse !
prize | le gain ; le prix | Les gros gains sont imposés.
win | gagner | Tu as gagné ?
work | travailler | Je travaille à temps plein.
earn | gagner | Combien as-tu gagné l'an dernier ?
keep | garder ; conserver | Conserve tes reçus pendant cinq ans.
send | envoyer | Envoie le formulaire par la poste.
confirm | confirmer ; valider | Appuie sur « Valider » pour terminer.
log in | se connecter | Connecte-toi avec ton numéro de téléphone.
change | la monnaie | Voici votre monnaie.
list | la liste | Fais une liste de tes revenus.
`,
  phrases: `
Did you do your taxes? | Tu as fait ta déclaration d'impôts ?
Not yet. | Pas encore.
I already filed. | J'ai déjà déclaré.
When is the tax deadline? | Quelle est la date limite pour les impôts ?
The deadline is May 31. | La date limite est le 31 mai.
Don't miss the deadline. | Ne rate pas la date limite.
Tax season is here again. | C'est de nouveau la saison des impôts.
I hate doing taxes. | Je déteste faire ma déclaration.
It only took ten minutes. | Ça m'a pris seulement dix minutes.
It's easier than I thought. | C'est plus facile que je ne pensais.
Can you help me file my taxes? | Tu peux m'aider à faire ma déclaration ?
How do I file my taxes? | Comment je déclare mes impôts ?
You can file online. | Tu peux déclarer en ligne.
You can file on your phone. | Tu peux déclarer sur ton téléphone.
Download the app first. | Télécharge d'abord l'application.
Log in with your ID number. | Connecte-toi avec ton numéro d'identité.
Use your health insurance card to log in. | Utilise ta carte d'assurance maladie pour te connecter.
I forgot my password. | J'ai oublié mon mot de passe.
Enter your phone number. | Saisis ton numéro de téléphone.
Check the numbers carefully. | Vérifie bien les chiffres.
Is this number right? | Ce chiffre est juste ?
I think there's a mistake. | Je crois qu'il y a une erreur.
Press confirm. | Appuie sur « Valider ».
That's it! You're done. | Voilà ! C'est fini.
Did you get a refund? | Tu as été remboursé ?
I got a refund! | J'ai été remboursé !
How much did you get back? | Combien on t'a remboursé ?
I got 3,000 dollars back. | On m'a remboursé 3 000 dollars.
When will I get my refund? | Quand vais-je recevoir mon remboursement ?
The refund goes to your bank account. | Le remboursement est versé sur ton compte bancaire.
I have to pay more this year. | Je dois payer un complément cette année.
How much do I owe? | Combien je dois ?
I owe 5,000 dollars. | Je dois 5 000 dollars.
How can I pay? | Comment puis-je payer ?
You can pay by credit card. | Tu peux payer par carte.
You can pay at a convenience store. | Tu peux payer dans une supérette.
Can I pay later? | Je peux payer plus tard ?
Pay on time to avoid a penalty. | Paie à temps pour éviter une pénalité.
Keep your receipts. | Garde tes reçus.
Put all your papers in one folder. | Range tous tes papiers dans un même dossier.
Where is my tax form? | Où est mon formulaire fiscal ?
My company sent me a tax form. | Mon entreprise m'a envoyé un formulaire fiscal.
I changed jobs last year. | J'ai changé d'emploi l'an dernier.
I had two jobs last year. | J'avais deux emplois l'an dernier.
I only work part-time. | Je ne travaille qu'à temps partiel.
Do students pay tax? | Les étudiants paient-ils des impôts ?
I didn't earn much last year. | Je n'ai pas gagné grand-chose l'an dernier.
You may not need to pay any tax. | Tu n'auras peut-être pas d'impôt à payer.
Do I need to file? | Dois-je faire une déclaration ?
Everyone with income should check. | Toute personne ayant des revenus devrait vérifier.
My parents do their taxes together. | Mes parents font leur déclaration ensemble.
My dad helps me with my taxes. | Mon père m'aide pour mes impôts.
Ask your parents for help. | Demande de l'aide à tes parents.
I support my parents. | J'ai mes parents à charge.
Kids can lower your taxes. | Les enfants peuvent réduire tes impôts.
Taxes pay for roads and schools. | Les impôts financent les routes et les écoles.
Taxes pay for our health care. | Les impôts financent nos soins de santé.
Everyone has to pay taxes. | Tout le monde doit payer des impôts.
Is tax included in the price? | La taxe est-elle comprise dans le prix ?
Yes, tax is included. | Oui, la taxe est comprise.
Prices don't include tax in the US. | Aux États-Unis, les prix affichés sont hors taxe.
Add tax at the counter. | La taxe est ajoutée à la caisse.
Can I have a receipt? | Je peux avoir un reçu ?
Do you need a receipt? | Vous voulez un reçu ?
Keep the receipt for the lottery. | Garde le ticket pour la loterie.
I won 200 dollars in the receipt lottery! | J'ai gagné 200 dollars à la loterie des tickets de caisse !
I check my receipts every two months. | Je vérifie mes tickets tous les deux mois.
Lottery prizes are taxed. | Les gains de loterie sont imposés.
Is there a fee? | Y a-t-il des frais ?
Filing online is free. | La déclaration en ligne est gratuite.
I'll call the tax hotline. | Je vais appeler la ligne d'assistance fiscale.
The line is busy. | La ligne est occupée.
There's a long line at the tax office. | Il y a une longue file au centre des impôts.
Bring your ID card. | Apporte ta carte d'identité.
Bring a copy, too. | Apporte aussi une copie.
Sign at the bottom. | Signe en bas.
Fill in this part. | Remplis cette partie.
Write your name here. | Écris ton nom ici.
Print it out. | Imprime-le.
Save a copy on your computer. | Enregistre une copie sur ton ordinateur.
I got a letter from the tax office. | J'ai reçu une lettre du centre des impôts.
Don't worry, it's just a notice. | Ne t'inquiète pas, c'est juste un avis.
Open it and read it carefully. | Ouvre-la et lis-la attentivement.
I don't understand this. | Je ne comprends pas ça.
Let me take a look. | Laisse-moi regarder.
It's not that hard. | Ce n'est pas si difficile.
Take your time. | Prends ton temps.
Do it early. | Fais-le tôt.
I'll do it this weekend. | Je le ferai ce week-end.
Don't leave it to the last day. | N'attends pas le dernier jour.
The website is slow on the last day. | Le site est lent le dernier jour.
I filed early this year. | J'ai déclaré tôt cette année.
Good job! | Bravo !
Finally, it's done! | Enfin, c'est fait !
Let's celebrate with the refund. | Fêtons ça avec le remboursement.
I'm going to save my refund. | Je vais mettre mon remboursement de côté.
Taxes are part of life. | Les impôts font partie de la vie.
Nothing is certain except death and taxes. | Rien n'est certain, sauf la mort et les impôts.
See you next tax season! | À la prochaine saison des impôts !
Thank you for your help. | Merci pour ton aide.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("tax", {
  words: `
income tax | l'impôt sur le revenu | L'impôt sur le revenu est dû fin mai.
taxable income | le revenu imposable | Votre revenu imposable baisse après les déductions.
deduction | la déduction | Choisissez la déduction la plus avantageuse pour vous.
standard deduction | la déduction forfaitaire | La plupart des gens prennent la déduction forfaitaire.
itemized deduction | la déduction détaillée (frais réels) | Les déductions détaillées exigent des justificatifs.
exemption | l'abattement ; l'exonération | Chaque personne à charge donne droit à un abattement supplémentaire.
dependent | la personne à charge | Puis-je déclarer ma mère comme personne à charge ?
claim | déclarer ; faire valoir | Vous pouvez déclarer vos frais médicaux.
special deduction | la déduction spéciale | Il existe une déduction spéciale pour les revenus salariaux.
tax bracket | la tranche d'imposition | Je suis passé dans une tranche d'imposition plus élevée.
tax rate | le taux d'imposition | Le taux marginal le plus élevé à Taïwan est de 40 %.
withholding | la retenue à la source | La retenue à la source est prélevée sur chaque salaire.
withholding statement | l'attestation de retenue à la source | Votre employeur délivre une attestation de retenue à la source.
paycheck | la paie ; le salaire | Vérifie bien ta paie.
gross income | le revenu brut | Le revenu brut, c'est votre revenu avant impôt.
net income | le revenu net | Le revenu net, c'est ce qui reste après impôt.
take-home pay | le salaire net | Mon salaire net est plus bas que je ne pensais.
tax estimate notice | l'avis de calcul provisoire de l'impôt | Si vous êtes d'accord avec l'avis de calcul provisoire, il suffit de le valider.
e-filing | la déclaration en ligne | La déclaration en ligne fait gagner beaucoup de temps.
citizen digital certificate | le certificat numérique du citoyen | Vous pouvez vous connecter avec le certificat numérique du citoyen.
mobile verification | l'authentification par téléphone | L'authentification par téléphone est la façon la plus simple de se connecter.
tax software | le logiciel de déclaration | Téléchargez d'abord le logiciel de déclaration.
amend | rectifier | Vous pourrez rectifier votre déclaration plus tard.
audit | le contrôle fiscal | J'espère ne pas avoir de contrôle fiscal.
tax evasion | la fraude fiscale | La fraude fiscale est illégale.
tax avoidance | l'optimisation fiscale | L'optimisation fiscale est légale ; la fraude ne l'est pas.
loophole | la faille ; la niche | Ils ont fermé la faille fiscale.
tax credit | le crédit d'impôt | Un crédit d'impôt réduit l'impôt dû.
dividend | le dividende | Les dividendes comptent comme des revenus.
interest income | les revenus d'intérêts | Les revenus d'intérêts sont imposables.
rental income | les revenus locatifs | Les revenus locatifs doivent être déclarés.
freelancer | le travailleur indépendant | Les indépendants doivent déclarer tous leurs revenus.
self-employed | indépendant ; à son compte | Les indépendants paient eux-mêmes leurs impôts.
business tax | la taxe sur le chiffre d'affaires | Les commerces collectent la taxe sur le chiffre d'affaires.
VAT | la TVA | La TVA est comprise dans le prix.
property tax | la taxe foncière | La taxe foncière sur les maisons est due en mai.
land value tax | l'impôt sur la valeur du terrain | L'impôt sur la valeur du terrain est dû en novembre.
license tax | la taxe sur les véhicules | La taxe sur les véhicules est due en avril.
estate tax | les droits de succession | Les droits de succession portent sur ce qu'une personne laisse en mourant.
gift tax | les droits de donation | Les gros dons peuvent être soumis aux droits de donation.
inheritance | l'héritage | Elle a reçu un héritage de son grand-père.
donation | le don | Les dons aux associations sont déductibles.
charity | l'association caritative | Donnez à une association reconnue.
deductible | déductible | Les frais médicaux sont déductibles.
medical expenses | les frais médicaux | Gardez les justificatifs de frais médicaux.
insurance premium | la prime d'assurance | Les primes d'assurance sont en partie déductibles.
mortgage interest | les intérêts d'emprunt immobilier | Les intérêts d'emprunt immobilier sont déductibles.
rent deduction | la déduction pour loyer | Les locataires peuvent bénéficier d'une déduction pour loyer.
tuition | les frais de scolarité | Les frais de scolarité universitaires peuvent être déductibles.
childcare | la garde d'enfants | La déduction pour garde d'enfants aide les jeunes parents.
long-term care | la prise en charge de la dépendance | Il existe une déduction pour la prise en charge de la dépendance.
elderly | âgé | Les parents âgés peuvent être déclarés à charge.
spouse | le conjoint | Vous déclarez avec votre conjoint.
file jointly | faire une déclaration commune | À Taïwan, les couples mariés font une déclaration commune.
separate | séparément | Le salaire de chaque conjoint peut être imposé séparément.
tax payment | le paiement de l'impôt | Effectuez le paiement de l'impôt avant la date limite.
installment | le versement échelonné | Vous pouvez payer en plusieurs fois.
direct debit | le prélèvement automatique | Payez par prélèvement automatique sur votre compte.
refund check | le chèque de remboursement | Le chèque de remboursement est arrivé par la poste.
additional tax | le complément d'impôt | J'ai dû payer un complément d'impôt.
late fee | la majoration de retard | Il y a une majoration en cas de paiement tardif.
fine | l'amende | Il a reçu une amende pour défaut de déclaration.
uniform invoice | la facture unifiée (ticket de caisse officiel à Taïwan) | Demandez toujours une facture unifiée.
e-invoice | la facture électronique | Enregistrez la facture électronique sur votre téléphone.
carrier | le support (de facture électronique) | Utilisez le support sur votre téléphone pour les factures électroniques.
company tax ID | le numéro d'identification fiscale de l'entreprise | Vous voulez le numéro fiscal de l'entreprise sur le reçu ?
expense | la dépense | Notez chaque dépense.
reimbursement | le remboursement de frais | Remettez vos reçus pour le remboursement de frais.
accountant | le comptable ; l'expert-comptable | J'ai engagé un expert-comptable.
tax advisor | le conseiller fiscal | Demandez à un conseiller fiscal.
bookkeeping | la tenue des comptes | Une bonne tenue des comptes facilite la saison des impôts.
record | le justificatif ; l'archive | Conservez bien vos justificatifs.
year-end bonus | la prime de fin d'année | Ma prime de fin d'année est aussi imposée.
overtime pay | la rémunération des heures supplémentaires | Certaines heures supplémentaires sont exonérées d'impôt.
pension | la retraite | Les cotisations retraite volontaires peuvent réduire votre impôt.
labor insurance | l'assurance du travail | L'assurance du travail est prélevée sur le salaire.
National Health Insurance | l'assurance maladie nationale | L'assurance maladie nationale couvre tout le monde à Taïwan.
supplementary premium | la cotisation santé complémentaire | Une cotisation santé complémentaire s'applique aux gros dividendes.
residency | la résidence fiscale | La résidence fiscale dépend de la durée de séjour.
resident | le résident | Les résidents peuvent bénéficier de déductions.
non-resident | le non-résident | Les non-résidents paient un taux forfaitaire.
foreign income | les revenus de source étrangère | Les revenus de source étrangère doivent parfois être déclarés.
IRS | l'IRS (fisc américain) | L'IRS m'a envoyé une lettre.
W-2 | le formulaire W-2 (attestation de salaire américaine) | Votre employeur envoie le W-2 en janvier.
tax season | la saison des impôts | La saison des impôts est stressante.
extension | le report ; le délai supplémentaire | On peut demander un délai supplémentaire.
payroll | le service paie | Le service paie s'occupe de nos formulaires fiscaux.
bonus | la prime | Les primes sont imposées comme le salaire.
side job | l'activité annexe | Les revenus d'une activité annexe doivent aussi être déclarés.
cash payment | le paiement en espèces | Les paiements en espèces restent imposables.
tax-free | exonéré d'impôt | Certaines bourses sont exonérées d'impôt.
taxpayer | le contribuable | Les contribuables veulent savoir où va l'argent.
annual | annuel | La déclaration est une corvée annuelle.
basic exemption | l'abattement de base | L'abattement de base augmente avec l'inflation.
payment slip | l'avis de paiement | Apportez l'avis de paiement dans une supérette.
convenience store | la supérette | On peut payer certains impôts dans une supérette.
tax law | le droit fiscal | Le droit fiscal change presque chaque année.
deposit | verser | Le remboursement sera versé le mois prochain.
proof | la preuve ; le justificatif | Gardez une preuve de paiement.
household | le foyer fiscal | Chaque foyer fait une seule déclaration.
nothing is certain but death and taxes | rien n'est certain, sauf la mort et les impôts | Rien n'est certain, sauf la mort et les impôts.
pay through the nose | payer le prix fort | Nous payons le prix fort en impôts.
a pretty penny | une coquette somme | L'expert-comptable a coûté une coquette somme.
cost an arm and a leg | coûter les yeux de la tête | Les pénalités de retard peuvent coûter les yeux de la tête.
penny-pincher | le grippe-sou | C'est un vrai grippe-sou.
in the red | dans le rouge | L'entreprise est dans le rouge.
in the black | bénéficiaire ; dans le vert | Nous sommes enfin bénéficiaires.
make ends meet | joindre les deux bouts | Les impôts rendent difficile de joindre les deux bouts.
money doesn't grow on trees | l'argent ne pousse pas sur les arbres | L'argent ne pousse pas sur les arbres.
tighten your belt | se serrer la ceinture | Si les prix montent, serre-toi la ceinture.
save for a rainy day | garder une poire pour la soif | Garde toujours une poire pour la soif.
by the book | dans les règles | Fais ta déclaration dans les règles.
a paper trail | une trace écrite | Garde une trace écrite de tes reçus.
foot the bill | payer la note | Qui va payer la note ?
`,
  phrases: `
Should I take the standard deduction or itemize? | Je prends la déduction forfaitaire ou les frais réels ?
Add up your receipts first. | Additionne d'abord tes reçus.
The standard deduction is higher for me. | Pour moi, la déduction forfaitaire est plus élevée.
Itemizing saves me more money. | Les frais réels me font économiser davantage.
Can I claim my mother as a dependent? | Puis-je déclarer ma mère à charge ?
She has to be over sixty or unable to work. | Elle doit avoir plus de soixante ans ou être dans l'incapacité de travailler.
Each dependent adds an exemption. | Chaque personne à charge ajoute un abattement.
Only one sibling can claim a parent. | Un seul des enfants peut déclarer un parent à charge.
We need to decide who claims Mom this year. | Il faut décider qui déclare maman à charge cette année.
Insurance premiums are deductible up to a limit. | Les primes d'assurance sont déductibles dans une certaine limite.
Medical expenses are fully deductible. | Les frais médicaux sont entièrement déductibles.
Keep receipts from the hospital. | Garde les reçus de l'hôpital.
Donations to registered charities count. | Les dons aux associations reconnues comptent.
Can I deduct my rent? | Puis-je déduire mon loyer ?
Renters can now take a special rent deduction. | Les locataires peuvent désormais bénéficier d'une déduction spéciale pour loyer.
You'll need your lease and proof of payment. | Il te faudra ton bail et une preuve de paiement.
Mortgage interest is deductible. | Les intérêts d'emprunt immobilier sont déductibles.
There's a deduction for preschool children. | Il existe une déduction pour les enfants d'âge préscolaire.
College tuition can be deducted. | Les frais de scolarité universitaires peuvent être déduits.
There's a deduction for long-term care. | Il existe une déduction pour la prise en charge de la dépendance.
Check your tax estimate notice. | Vérifie ton avis de calcul provisoire.
If it's correct, just confirm it. | S'il est correct, il suffit de le valider.
If you have new deductions, file normally. | Si tu as de nouvelles déductions, fais une déclaration normale.
Download the tax software from the website. | Télécharge le logiciel de déclaration sur le site.
You can log in with mobile verification. | Tu peux te connecter par authentification téléphonique.
I use my citizen digital certificate. | J'utilise mon certificat numérique du citoyen.
The system pulls in your income data. | Le système importe automatiquement tes données de revenus.
Some income isn't in the system. | Certains revenus ne sont pas dans le système.
You have to add it yourself. | Tu dois les ajouter toi-même.
Did you report your freelance income? | Tu as déclaré tes revenus de freelance ?
Income from side jobs must be reported. | Les revenus d'activités annexes doivent être déclarés.
Rental income is taxable. | Les revenus locatifs sont imposables.
Up to 270,000 dollars of bank interest can be deducted. | Les intérêts bancaires sont déductibles jusqu'à 270 000 dollars.
Dividends are part of your income. | Les dividendes font partie de tes revenus.
You can choose how dividends are taxed. | Tu peux choisir le mode d'imposition des dividendes.
My withholding was too high. | On m'a trop prélevé à la source.
That's why I get a refund. | C'est pour ça que je suis remboursé.
My employer didn't withhold enough. | Mon employeur n'a pas assez prélevé.
So I have to pay additional tax. | Je dois donc payer un complément d'impôt.
Can I pay in installments? | Je peux payer en plusieurs fois ?
Large amounts can be paid in installments. | Les montants importants peuvent être payés en plusieurs fois.
Set up direct debit from your bank account. | Mets en place un prélèvement automatique sur ton compte.
The refund will arrive in August. | Le remboursement arrivera en août.
Your refund will be deposited automatically. | Ton remboursement sera versé automatiquement.
Married couples must file together. | Les couples mariés doivent faire une déclaration commune.
Salaries can be calculated separately. | Les salaires peuvent être calculés séparément.
That usually lowers the tax. | En général, ça réduit l'impôt.
The system picks the best option for you. | Le système choisit l'option la plus avantageuse pour toi.
Which tax bracket are you in? | Dans quelle tranche d'imposition es-tu ?
I'm in the 12% bracket. | Je suis dans la tranche à 12 %.
A raise won't push all your income into a higher bracket. | Une augmentation ne fera pas passer tout ton revenu dans une tranche supérieure.
Only the extra amount is taxed at the higher rate. | Seule la partie supplémentaire est imposée au taux supérieur.
My year-end bonus is taxed too. | Ma prime de fin d'année est aussi imposée.
Overtime pay within the legal limit is tax-free. | Les heures supplémentaires dans la limite légale sont exonérées.
Voluntary pension contributions lower your taxable income. | Les cotisations retraite volontaires réduisent ton revenu imposable.
What's the difference between gross and net income? | Quelle est la différence entre revenu brut et revenu net ?
My take-home pay is about 80% of my salary. | Mon salaire net représente environ 80 % de mon salaire.
Labor insurance and health insurance are deducted. | L'assurance du travail et l'assurance maladie sont prélevées.
I paid a supplementary premium on my dividends. | J'ai payé une cotisation santé complémentaire sur mes dividendes.
Ask for a uniform invoice. | Demande une facture unifiée.
Save the e-invoice to your phone carrier. | Enregistre la facture électronique sur le support de ton téléphone.
Do you need a company tax ID on that? | Vous voulez un numéro fiscal d'entreprise dessus ?
Yes, please put our company tax ID on it. | Oui, mettez notre numéro fiscal, s'il vous plaît.
Keep receipts for business expenses. | Garde les reçus des frais professionnels.
Submit your receipts for reimbursement. | Remets tes reçus pour te faire rembourser.
Foreigners who stay 183 days are tax residents. | Les étrangers qui restent 183 jours sont résidents fiscaux.
Non-residents are taxed at a flat rate. | Les non-résidents sont imposés à un taux forfaitaire.
I need to file before I leave Taiwan. | Je dois faire ma déclaration avant de quitter Taïwan.
Do I need to report foreign income? | Dois-je déclarer mes revenus étrangers ?
Foreign income over a certain amount is included. | Les revenus étrangers au-delà d'un certain montant sont inclus.
I hired an accountant this year. | J'ai pris un expert-comptable cette année.
Ask a tax advisor if you're not sure. | Demande à un conseiller fiscal si tu n'es pas sûr.
The tax office has free help desks in May. | Le centre des impôts propose des guichets d'aide gratuits en mai.
You can amend your return if you made a mistake. | Tu peux rectifier ta déclaration si tu as fait une erreur.
What happens if I'm audited? | Que se passe-t-il si j'ai un contrôle fiscal ?
Just show them your records. | Montre-leur simplement tes justificatifs.
That's why I keep everything. | C'est pour ça que je garde tout.
House tax is due in May. | La taxe sur les maisons est due en mai.
Land value tax is due in November. | L'impôt sur la valeur du terrain est dû en novembre.
Vehicle license tax is due in April. | La taxe sur les véhicules est due en avril.
I got the bill in the mail. | J'ai reçu l'avis par la poste.
Tax avoidance is legal; tax evasion is not. | L'optimisation fiscale est légale ; la fraude ne l'est pas.
Don't hide income. | Ne dissimule pas de revenus.
The fines can be heavy. | Les amendes peuvent être lourdes.
The government closed that loophole. | Le gouvernement a fermé cette faille.
Americans file their taxes by mid-April. | Les Américains déclarent leurs impôts avant la mi-avril.
I got my W-2 from my employer. | J'ai reçu mon W-2 de mon employeur.
I filed for an extension. | J'ai demandé un délai pour déclarer.
An extension to file is not an extension to pay. | Un délai pour déclarer n'est pas un délai pour payer.
Expats may have to file in two countries. | Les expatriés doivent parfois déclarer dans deux pays.
Is that scholarship taxable? | Cette bourse est-elle imposable ?
Big gifts may be subject to gift tax. | Les gros dons peuvent être soumis aux droits de donation.
Parents can give their children a certain amount tax-free each year. | Les parents peuvent donner chaque année une certaine somme à leurs enfants sans impôt.
Estate tax is due after someone passes away. | Les droits de succession sont dus après un décès.
Inheritance can be complicated. | Une succession peut être compliquée.
I always wait until the last week. | J'attends toujours la dernière semaine.
The deadline was extended this year. | La date limite a été repoussée cette année.
Make a checklist for next year. | Fais une liste de contrôle pour l'an prochain.
Good records make tax time easy. | De bons justificatifs facilitent la saison des impôts.
I'll use the same method next year. | J'utiliserai la même méthode l'an prochain.
`,
});

// ---------- 高級 Advanced ----------
addFrench("tax", {
  words: `
progressive tax | l'impôt progressif | Taïwan applique un système d'impôt progressif.
flat tax | l'impôt à taux unique | Certains pays appliquent un impôt à taux unique.
regressive | régressif | Les taxes sur les ventes sont régressives.
marginal tax rate | le taux marginal d'imposition | Le taux marginal ne s'applique qu'au dernier dollar gagné.
effective tax rate | le taux effectif d'imposition | Son taux effectif est bien plus bas que sa tranche.
tax base | l'assiette fiscale | Les économistes veulent élargir l'assiette fiscale.
tax burden | la charge fiscale | Qui supporte réellement la charge fiscale ?
tax revenue | les recettes fiscales | Les recettes fiscales ont atteint un record.
fiscal | budgétaire ; fiscal | L'exercice budgétaire de Taïwan suit l'année civile.
surplus | l'excédent | Le gouvernement a dégagé un gros excédent.
deficit | le déficit | Le déficit ne cesse de se creuser.
public debt | la dette publique | La dette publique limite les dépenses futures.
tax cut | la baisse d'impôts | La baisse d'impôts a aidé les familles de travailleurs.
tax hike | la hausse d'impôts | Personne n'aime les hausses d'impôts.
tax reform | la réforme fiscale | La réforme fiscale de 2018 a changé l'imposition des dividendes.
capital gains | les plus-values | Les plus-values des particuliers sur les actions taïwanaises ne sont pas imposées.
securities transaction tax | la taxe sur les transactions de titres | La taxe sur les ventes d'actions est de 0,3 %.
consolidated housing and land tax | l'impôt unifié sur les plus-values immobilières | L'impôt unifié sur les plus-values immobilières vise les reventes rapides.
speculation | la spéculation | Des impôts plus élevés découragent la spéculation immobilière.
alternative minimum tax | l'impôt minimum alternatif | L'impôt minimum alternatif oblige les hauts revenus à payer quelque chose.
tax haven | le paradis fiscal | Certaines entreprises transfèrent leurs bénéfices vers un paradis fiscal.
offshore | offshore | Les comptes offshore font l'objet d'une surveillance accrue.
transfer pricing | les prix de transfert | Les règles sur les prix de transfert empêchent le transfert de bénéfices.
profit shifting | le transfert de bénéfices | Le transfert de bénéfices érode l'assiette fiscale.
global minimum tax | l'impôt minimum mondial | L'impôt minimum mondial fixe un plancher de 15 %.
corporate tax | l'impôt sur les sociétés | Le taux de l'impôt sur les sociétés à Taïwan est de 20 %.
double taxation | la double imposition | Les conventions fiscales évitent la double imposition.
tax treaty | la convention fiscale | Une convention fiscale détermine quel pays impose quoi.
withholding tax | la retenue à la source | Les dividendes versés aux étrangers subissent une retenue à la source.
dividend tax credit | le crédit d'impôt sur dividendes | Le crédit d'impôt sur dividendes est plafonné à 80 000 dollars taïwanais.
separate taxation | l'imposition séparée | L'imposition séparée des dividendes se fait au taux de 28 %.
tax planning | la planification fiscale | Une bonne planification fiscale est parfaitement légale.
tax-efficient | fiscalement avantageux | Les fonds indiciels peuvent être fiscalement avantageux.
tax-exempt | exonéré d'impôt | Certaines obligations sont exonérées d'impôt.
tax-deferred | à imposition différée | Un plan 401(k) est à imposition différée.
retirement account | le compte d'épargne retraite | Cotisez tôt à un compte d'épargne retraite.
Roth IRA | le Roth IRA (compte retraite américain) | Un Roth IRA fructifie en franchise d'impôt.
depreciation | l'amortissement | L'amortissement réduit le bénéfice imposable.
amortization | l'amortissement (des actifs incorporels) | L'amortissement répartit un coût sur plusieurs années.
write-off | la charge déductible | Un déjeuner d'affaires peut être une charge déductible.
compliance | la conformité | La conformité fiscale coûte du temps et de l'argent.
enforcement | le contrôle ; l'application de la loi | Un contrôle renforcé augmente les recettes.
tax authority | l'administration fiscale | L'administration fiscale peut geler les biens de ceux qui refusent de payer.
statute of limitations | le délai de prescription | Le délai de prescription est de cinq ans dans la plupart des cas fiscaux.
back taxes | les arriérés d'impôts | Il devait des années d'arriérés d'impôts.
garnish | saisir (sur salaire) | Le tribunal peut saisir votre salaire.
lien | l'hypothèque légale ; la saisie | L'État a pris une hypothèque légale sur le bien.
tax fraud | la fraude fiscale | La fraude fiscale est un délit.
whistleblower | le lanceur d'alerte | Un lanceur d'alerte a dénoncé le montage.
shell company | la société écran | L'argent est passé par une société écran.
money laundering | le blanchiment d'argent | Le blanchiment d'argent dissimule des revenus illégaux.
transparency | la transparence | La transparence fiscale renforce la confiance du public.
Common Reporting Standard | la norme commune de déclaration (NCD) | La norme commune de déclaration permet l'échange de données bancaires entre pays.
FATCA | la loi FATCA | FATCA oblige les banques étrangères à déclarer les titulaires de comptes américains.
expatriate | l'expatrié | Les règles fiscales des expatriés sont complexes.
digital services tax | la taxe sur les services numériques | Certains pays appliquent une taxe sur les services numériques.
carbon tax | la taxe carbone | Une taxe carbone donne un prix à la pollution.
carbon fee | la redevance carbone | La redevance carbone de Taïwan vise les grands émetteurs.
excise tax | le droit d'accise | Le droit d'accise s'applique aux voitures et aux boissons.
tobacco tax | la taxe sur le tabac | La taxe sur le tabac décourage le tabagisme.
sin tax | la taxe comportementale | Une taxe comportementale vise les habitudes nocives.
tariff | le droit de douane | Les droits de douane font monter les prix des importations.
customs duty | les droits de douane | Vous pouvez avoir des droits de douane à payer sur vos commandes en ligne.
stamp duty | le droit de timbre | Certains contrats sont soumis au droit de timbre.
wealth tax | l'impôt sur la fortune | Un impôt sur la fortune est difficile à appliquer.
redistribution | la redistribution | Les impôts permettent la redistribution des revenus.
Gini coefficient | le coefficient de Gini | Le coefficient de Gini mesure les inégalités.
inequality | les inégalités | La politique fiscale influe sur les inégalités.
social security | la sécurité sociale | La sécurité sociale est financée par les cotisations sur les salaires.
payroll tax | les cotisations sur les salaires | Dans de nombreux pays, les cotisations sur les salaires financent les retraites.
tax incentive | l'incitation fiscale | Les incitations fiscales attirent les investissements.
R&D tax credit | le crédit d'impôt recherche | Le crédit d'impôt recherche aide les fabricants de puces.
tax holiday | l'exonération temporaire | La nouvelle usine a obtenu une exonération de cinq ans.
fiscal policy | la politique budgétaire | La politique budgétaire peut stimuler la croissance.
stimulus | le plan de relance | Le plan de relance comprenait de l'argent pour chaque citoyen.
cash handout | la distribution d'argent | En 2023, Taïwan a distribué 6 000 dollars taïwanais à chaque citoyen.
austerity | l'austérité | L'austérité consiste à réduire les dépenses publiques.
tax morale | le civisme fiscal | Un fort civisme fiscal signifie que les gens paient volontiers.
pay-as-you-earn | le prélèvement à la source | Le prélèvement à la source étale l'impôt sur l'année.
bracket creep | la progressivité à froid | L'inflation provoque une progressivité à froid.
indexation | l'indexation | L'indexation ajuste les tranches à l'inflation.
basic living expenses | les dépenses de subsistance | Les dépenses de subsistance ne sont pas imposées à Taïwan.
passive income | les revenus passifs | Les revenus passifs proviennent des placements.
tax residency certificate | le certificat de résidence fiscale | Demandez un certificat de résidence fiscale pour bénéficier d'une convention.
gig economy | l'économie des plateformes | L'économie des plateformes complique la collecte de l'impôt.
cryptocurrency | la cryptomonnaie | Les gains en cryptomonnaie peuvent être imposables.
tax wedge | le coin fiscal | Le coin fiscal est l'écart entre le coût du travail et le salaire net.
deadweight loss | la perte sèche | Des impôts élevés peuvent créer une perte sèche.
Laffer curve | la courbe de Laffer | La courbe de Laffer suggère que les taux peuvent être trop élevés.
incidence | l'incidence fiscale | L'incidence fiscale montre qui paie réellement.
earmarked | affecté | Certains impôts sont affectés à la dépendance.
general revenue | le budget général | La plupart des dépenses proviennent du budget général.
tax expenditure | la dépense fiscale | Chaque déduction est une dépense fiscale.
broad-based | à large assiette | Un impôt à large assiette et à taux faible est efficace.
horizontal equity | l'équité horizontale | L'équité horizontale veut que des revenus égaux paient un impôt égal.
vertical equity | l'équité verticale | L'équité verticale veut que les revenus plus élevés paient davantage.
ability to pay | la capacité contributive | La capacité contributive est un principe fiscal fondamental.
tax compliance cost | le coût de conformité fiscale | Des règles plus simples réduisent le coût de conformité fiscale.
underground economy | l'économie souterraine | L'économie souterraine échappe totalement à l'impôt.
tax arbitrage | l'arbitrage fiscal | L'arbitrage fiscal exploite les différences entre pays.
the taxman cometh | le fisc arrive | C'est avril ; le fisc arrive.
cook the books | truquer les comptes | Ne truque jamais les comptes.
under the table | sous le manteau ; au noir | Il était payé au noir.
off the books | non déclaré ; au noir | Le travail au noir est illégal.
a loophole | une faille | Ils ont utilisé une faille pour payer moins d'impôts.
bleed someone dry | saigner quelqu'un à blanc | Des impôts élevés peuvent saigner les gens à blanc.
a windfall | une aubaine | Le remboursement d'impôt a été une aubaine.
nickel-and-dime | grappiller sur tout | Ces frais grappillent sur tout aux dépens des clients.
a slush fund | une caisse noire | Le ministre avait une caisse noire.
the lion's share | la part du lion | Les impôts prennent la part du lion de ma prime.
balance the books | équilibrer les comptes | La ville doit équilibrer ses comptes.
the long arm of the law | le bras long de la justice | On n'échappe pas au bras long de la justice.
dot the i's and cross the t's | mettre les points sur les i | Mets les points sur les i dans ta déclaration.
go Dutch | partager l'addition | Partageons l'addition pour le dîner.
a fool and his money are soon parted | l'argent file vite entre les mains d'un sot | L'argent file vite entre les mains d'un sot.
`,
  phrases: `
Taiwan has a progressive income tax system. | Taïwan a un impôt sur le revenu progressif.
The top marginal rate is 40%. | Le taux marginal le plus élevé est de 40 %.
Most people's effective tax rate is much lower. | Le taux effectif de la plupart des gens est bien plus bas.
Deductions narrow the tax base. | Les déductions réduisent l'assiette fiscale.
Every deduction is a hidden form of spending. | Chaque déduction est une forme cachée de dépense.
The tax burden falls heavily on salaried workers. | La charge fiscale pèse lourdement sur les salariés.
Salary income is easy to track. | Les revenus salariaux sont faciles à suivre.
Capital income is much harder to tax. | Les revenus du capital sont beaucoup plus difficiles à imposer.
Stock gains are not taxed for individuals. | Les plus-values boursières des particuliers ne sont pas imposées.
The 2012 capital gains tax debate shook the market. | Le débat de 2012 sur l'impôt sur les plus-values a secoué la Bourse.
It was eventually repealed. | Il a finalement été abrogé.
The securities transaction tax is charged on every sale. | La taxe sur les transactions de titres s'applique à chaque vente.
Day trading enjoys a reduced rate. | Le day trading bénéficie d'un taux réduit.
The consolidated housing and land tax curbs speculation. | L'impôt unifié sur les plus-values immobilières freine la spéculation.
Short-term property sales face the highest rates. | Les reventes immobilières à court terme subissent les taux les plus élevés.
Tax policy is also housing policy. | La politique fiscale est aussi une politique du logement.
The government has run large tax surpluses. | Le gouvernement a enregistré d'importants excédents fiscaux.
Should surpluses be returned to taxpayers? | Faut-il rendre les excédents aux contribuables ?
Cash handouts are popular but short-lived. | Les distributions d'argent sont populaires mais éphémères.
Some argue for permanent tax cuts instead. | Certains plaident plutôt pour des baisses d'impôts permanentes.
Others want to fund long-term care and defense. | D'autres veulent financer la dépendance et la défense.
Fiscal discipline matters for future generations. | La discipline budgétaire compte pour les générations futures.
An aging society will need more revenue. | Une société vieillissante aura besoin de plus de recettes.
Who will pay for pensions and health care? | Qui paiera les retraites et la santé ?
The 2018 reform lowered the top rate from 45% to 40%. | La réforme de 2018 a abaissé le taux maximal de 45 % à 40 %.
It also changed how dividends are taxed. | Elle a aussi changé l'imposition des dividendes.
High earners usually choose separate taxation at 28%. | Les hauts revenus choisissent généralement l'imposition séparée à 28 %.
Others combine dividends with income and claim a credit. | Les autres intègrent les dividendes à leur revenu et demandent un crédit d'impôt.
The alternative minimum tax catches some high earners. | L'impôt minimum alternatif rattrape certains hauts revenus.
Taiwan's corporate tax rate is 20%. | Le taux de l'impôt sur les sociétés à Taïwan est de 20 %.
Undistributed earnings face an additional 5% tax. | Les bénéfices non distribués subissent un impôt supplémentaire de 5 %.
The global minimum tax is reshaping incentives. | L'impôt minimum mondial redéfinit les incitations.
Tax havens are losing their appeal. | Les paradis fiscaux perdent de leur attrait.
Profit shifting costs governments billions. | Le transfert de bénéfices coûte des milliards aux États.
Transfer pricing is a major audit risk. | Les prix de transfert sont un risque majeur de contrôle.
Tax treaties prevent double taxation. | Les conventions fiscales évitent la double imposition.
Taiwan's tax agreements help local firms abroad. | Les conventions fiscales de Taïwan aident les entreprises locales à l'étranger.
Banks now share account data across borders. | Les banques échangent désormais leurs données de comptes par-delà les frontières.
Hiding money offshore is much harder than before. | Cacher de l'argent offshore est bien plus difficile qu'avant.
Tax transparency builds public trust. | La transparence fiscale renforce la confiance du public.
Simple tax rules improve compliance. | Des règles fiscales simples améliorent la conformité.
Complexity favors those who can afford advisors. | La complexité favorise ceux qui peuvent se payer des conseillers.
Pre-filled returns have made filing much easier. | La déclaration préremplie a beaucoup simplifié les choses.
Most people just confirm and they're done. | La plupart des gens valident simplement, et c'est fini.
Digital filing has transformed tax administration. | La déclaration numérique a transformé l'administration fiscale.
The gig economy makes enforcement harder. | L'économie des plateformes complique les contrôles.
Platforms may have to report sellers' income. | Les plateformes pourraient devoir déclarer les revenus des vendeurs.
Cross-border e-commerce raises new tax questions. | Le commerce électronique transfrontalier soulève de nouvelles questions fiscales.
Foreign digital platforms now pay business tax in Taiwan. | Les plateformes numériques étrangères paient désormais la taxe sur le chiffre d'affaires à Taïwan.
Cryptocurrency gains are a gray area for many people. | Les gains en cryptomonnaie sont une zone grise pour beaucoup.
Taxes shape behavior, not just revenue. | Les impôts façonnent les comportements, pas seulement les recettes.
Tobacco taxes reduce smoking. | Les taxes sur le tabac réduisent le tabagisme.
A carbon fee puts a price on emissions. | Une redevance carbone donne un prix aux émissions.
Green taxes can fund the energy transition. | Les taxes vertes peuvent financer la transition énergétique.
Tariffs are ultimately paid by consumers. | Les droits de douane sont au final payés par les consommateurs.
Tax incidence is not always obvious. | L'incidence fiscale n'est pas toujours évidente.
Sales taxes hit lower-income families harder. | Les taxes sur les ventes frappent plus durement les ménages modestes.
That's why basic necessities are often exempt. | C'est pourquoi les produits de première nécessité sont souvent exonérés.
A wealth tax sounds fair but is hard to enforce. | Un impôt sur la fortune paraît juste mais est difficile à appliquer.
Capital can move faster than tax collectors. | Le capital se déplace plus vite que les percepteurs.
Inequality is shaped by both taxes and transfers. | Les inégalités dépendent à la fois des impôts et des transferts.
Redistribution is a political choice. | La redistribution est un choix politique.
Tax incentives helped build the chip industry. | Les incitations fiscales ont aidé à bâtir l'industrie des puces.
Critics say incentives mainly benefit big firms. | Les critiques disent que les incitations profitent surtout aux grandes entreprises.
Every tax break needs a sunset clause. | Chaque avantage fiscal devrait avoir une clause d'extinction.
Bracket creep raises taxes without a vote. | La progressivité à froid augmente les impôts sans vote.
Taiwan adjusts brackets when inflation passes a threshold. | Taïwan ajuste les tranches quand l'inflation dépasse un seuil.
Basic living expenses should never be taxed. | Les dépenses de subsistance ne devraient jamais être imposées.
The ability-to-pay principle guides tax design. | Le principe de capacité contributive guide la conception de l'impôt.
Equal incomes should pay equal tax. | À revenu égal, impôt égal.
Tax morale depends on trust in government. | Le civisme fiscal dépend de la confiance dans l'État.
People pay more willingly when they see results. | Les gens paient plus volontiers quand ils voient des résultats.
Waste in public spending erodes that trust. | Le gaspillage des dépenses publiques érode cette confiance.
The underground economy escapes taxation entirely. | L'économie souterraine échappe totalement à l'impôt.
Cash-only businesses are a classic audit target. | Les commerces qui n'acceptent que les espèces sont une cible classique de contrôle.
The tax authority can freeze assets of people who won't pay. | L'administration fiscale peut geler les biens de ceux qui refusent de payer.
Large tax debtors may be banned from leaving the country. | Les gros débiteurs fiscaux peuvent être interdits de sortie du territoire.
The statute of limitations is usually five years. | Le délai de prescription est généralement de cinq ans.
Fraud extends it to seven years. | En cas de fraude, il passe à sept ans.
Keep records at least that long. | Conservez vos justificatifs au moins aussi longtemps.
Good tax planning starts early in the year. | Une bonne planification fiscale commence en début d'année.
Retirement accounts offer tax advantages. | Les comptes d'épargne retraite offrent des avantages fiscaux.
Tax-deferred growth compounds faster. | La croissance à imposition différée se capitalise plus vite.
Know the difference between deferral and exemption. | Faites la différence entre report et exonération.
Never let taxes alone drive an investment decision. | Ne laissez jamais la fiscalité seule dicter une décision d'investissement.
The Laffer curve is often misused in debates. | La courbe de Laffer est souvent mal utilisée dans les débats.
Cutting rates doesn't always raise revenue. | Baisser les taux n'augmente pas toujours les recettes.
Tax reform always creates winners and losers. | Une réforme fiscale fait toujours des gagnants et des perdants.
That's why reform is politically difficult. | C'est pourquoi la réforme est politiquement difficile.
Lobbyists fight hard to keep their tax breaks. | Les lobbyistes se battent pour garder leurs avantages fiscaux.
A broad base with low rates is the textbook ideal. | Une assiette large avec des taux faibles, c'est l'idéal des manuels.
Reality is always messier. | La réalité est toujours plus compliquée.
Taxes are the price we pay for a civilized society. | Les impôts sont le prix d'une société civilisée.
The question is who pays and how much. | La question est de savoir qui paie et combien.
A fair tax system is one people believe in. | Un système fiscal juste, c'est un système auquel les gens croient.
Tax policy reflects a society's values. | La politique fiscale reflète les valeurs d'une société.
Read the budget to see a government's priorities. | Lisez le budget pour voir les priorités d'un gouvernement.
Every tax is ultimately paid by people. | Chaque impôt est en fin de compte payé par des personnes.
Understanding taxes makes you a better citizen. | Comprendre l'impôt fait de vous un meilleur citoyen.
The debate over taxes will never end. | Le débat sur les impôts ne finira jamais.
`,
});
