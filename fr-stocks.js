// 法文對照（Français）：股市投資
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
addFrench("stocks", {
  words: `
stock | l'action | J'ai acheté une action.
share | l'action ; la part | Je possède dix actions.
stock market | la Bourse ; le marché boursier | La Bourse a monté aujourd'hui.
buy | acheter | Achète bas.
sell | vendre | Vends haut.
price | le prix ; le cours | Le cours monte.
up | en hausse | Les actions sont en hausse aujourd'hui.
down | en baisse | Le marché est en baisse.
rise | monter | Les prix montent et baissent.
fall | baisser ; chuter | Les actions peuvent chuter vite.
money | l'argent | N'investis pas l'argent dont tu as bientôt besoin.
invest | investir | Je veux investir.
investor | l'investisseur | C'est une investisseuse avisée.
savings | l'épargne ; les économies | Garde un peu d'épargne à la banque.
bank | la banque | Mon argent est à la banque.
company | l'entreprise | Achète des actions d'une bonne entreprise.
profit | le bénéfice ; le gain | J'ai fait un bénéfice.
loss | la perte | J'ai essuyé une perte.
earn | gagner | Combien as-tu gagné ?
lose | perdre | Tu peux perdre de l'argent.
risk | le risque | Chaque action comporte un risque.
safe | sûr | Les obligations sont plus sûres que les actions.
rich | riche | Tu ne deviendras pas riche rapidement.
goal | l'objectif | Quel est ton objectif ?
plan | le plan | Fais un plan.
long-term | à long terme | Pense à long terme.
short-term | à court terme | Les mouvements à court terme sont difficiles à prévoir.
chart | le graphique | Regarde le graphique.
red | rouge | À Taïwan, le rouge signifie que le cours monte.
green | vert | À Taïwan, le vert signifie que le cours baisse.
app | l'application | Je passe mes ordres avec une application.
account | le compte | Ouvre un compte.
broker | le courtier | Choisis un bon courtier.
fee | les frais | Vérifie les frais avant de passer un ordre.
cheap | bon marché | L'action a l'air bon marché en ce moment.
expensive | cher | Cette action est chère.
news | les nouvelles ; les infos | De bonnes nouvelles ont fait monter l'action.
rumor | la rumeur | N'achète pas sur une rumeur.
tip | le tuyau | Mon oncle m'a donné un tuyau boursier.
guess | deviner | Personne ne peut deviner le marché.
luck | la chance | La chance n'est pas une stratégie.
patient | patient | Sois patient.
calm | calme | Reste calme quand les cours baissent.
panic | paniquer | Ne panique pas.
afraid | qui a peur | J'ai peur de perdre de l'argent.
greedy | avide ; cupide | Ne sois pas cupide.
learn | apprendre | Apprends avant d'investir.
read | lire | Lis le rapport de l'entreprise.
report | le rapport | Le rapport sort aujourd'hui.
open | ouvrir | La Bourse ouvre à neuf heures.
close | fermer ; clôturer | La Bourse ferme à 13 h 30.
week | la semaine | Ça a été une bonne semaine pour les actions.
gold | l'or | L'or est une valeur refuge.
dollar | le dollar | Le dollar est fort.
currency | la monnaie ; la devise | Les cours des devises changent tous les jours.
exchange rate | le taux de change | Le taux de change influe sur les exportateurs.
fund | le fonds | J'ai acheté un fonds.
bond | l'obligation | Une obligation verse des intérêts.
interest | les intérêts | La banque verse des intérêts.
dividend | le dividende | Cette action verse un dividende.
cash | les liquidités ; l'argent liquide | Garde un peu de liquidités.
debt | la dette | Rembourse d'abord tes dettes.
loan | le prêt ; l'emprunt | N'investis pas avec de l'argent emprunté.
pocket money | l'argent de poche | J'ai économisé mon argent de poche.
piggy bank | la tirelire | Ma tirelire est pleine.
wallet | le portefeuille | Mon portefeuille est vide.
spend | dépenser | Dépense moins que ce que tu gagnes.
budget | le budget | Respecte ton budget.
win | gagner | On ne peut pas gagner à chaque fois.
trade | négocier ; faire du trading | Je négocie des actions sur mon téléphone.
order | l'ordre | Passe un ordre.
market | le marché | Le marché est très actif aujourd'hui.
famous | célèbre | TSMC est une entreprise célèbre.
chip | la puce | Les valeurs des puces sont à la mode.
tech | la tech ; les valeurs technologiques | Les valeurs technologiques ont monté.
boom | le boom ; l'essor | Le marché est en plein boom.
crash | le krach | Le marché s'est effondré en 2008.
bubble | la bulle | Est-ce une bulle ?
bull | le taureau (haussier) | Les haussiers pensent que les prix vont monter.
bear | l'ours (baissier) | Les baissiers pensent que les prix vont baisser.
high | le plus haut | L'action a atteint un nouveau plus haut.
low | le plus bas | L'action est tombée à un nouveau plus bas.
record | le record | L'indice a atteint un record.
index | l'indice | L'indice a gagné 1 %.
percent | le pour cent | Il a monté de deux pour cent.
point | le point | L'indice a perdu 100 points.
value | la valeur | La valeur de mes actions a augmenté.
worth | valoir | Combien ça vaut ?
own | posséder | Je possède des actions Apple.
owner | le propriétaire | Les actionnaires sont en partie propriétaires de l'entreprise.
young | jeune | Commence à investir quand tu es jeune.
early | tôt | Commence tôt.
habit | l'habitude | Épargner est une bonne habitude.
monthly | chaque mois ; mensuel | J'investis un peu chaque mois.
grow | croître ; fructifier | Laisse ton argent fructifier.
wait | attendre | Parfois, la meilleure chose à faire est d'attendre.
check | consulter ; vérifier | Je consulte mes actions tous les jours.
forget | oublier | Achète de bons fonds et oublie-les.
rule | la règle | Ma règle : ne jamais emprunter pour investir.
drop | baisser | Les prix baissent parfois.
`,
  phrases: `
Do you invest in stocks? | Tu investis en Bourse ?
I just started investing. | Je viens de commencer à investir.
I don't know anything about stocks. | Je n'y connais rien en Bourse.
How do I start? | Comment je commence ?
First, open an account. | D'abord, ouvre un compte.
You can open an account online. | Tu peux ouvrir un compte en ligne.
Which broker do you use? | Quel courtier utilises-tu ?
I use an app. | J'utilise une application.
How much money do I need? | De combien d'argent ai-je besoin ?
You can start with a little money. | Tu peux commencer avec peu d'argent.
Start small. | Commence petit.
Only invest money you don't need. | N'investis que l'argent dont tu n'as pas besoin.
Don't borrow money to invest. | N'emprunte pas pour investir.
Stocks can go up or down. | Les actions peuvent monter ou baisser.
The market is up today. | Le marché est en hausse aujourd'hui.
The market is down today. | Le marché est en baisse aujourd'hui.
Stocks went up a lot. | Les actions ont beaucoup monté.
Stocks fell sharply. | Les actions ont fortement chuté.
My stock went up! | Mon action a monté !
My stock went down. | Mon action a baissé.
I made money. | J'ai gagné de l'argent.
I lost money. | J'ai perdu de l'argent.
I lost a lot. | J'ai perdu gros.
How much did you make? | Combien as-tu gagné ?
Don't tell anyone. | Ne le dis à personne.
What should I buy? | Qu'est-ce que je devrais acheter ?
I can't tell you what to buy. | Je ne peux pas te dire quoi acheter.
Do your own research. | Fais tes propres recherches.
Buy what you understand. | Achète ce que tu comprends.
Is it a good time to buy? | C'est un bon moment pour acheter ?
No one knows. | Personne ne le sait.
Buy low, sell high. | Acheter bas, vendre haut.
It's easier said than done. | C'est plus facile à dire qu'à faire.
Red means up in Taiwan. | À Taïwan, le rouge veut dire hausse.
Green means down. | Le vert veut dire baisse.
It's the opposite in the US. | C'est l'inverse aux États-Unis.
The market opens at nine. | La Bourse ouvre à neuf heures.
The market closes at one thirty. | La Bourse ferme à treize heures trente.
The market is closed on weekends. | La Bourse est fermée le week-end.
The market is closed for the holiday. | La Bourse est fermée pour les fêtes.
Check the price before you buy. | Vérifie le cours avant d'acheter.
How much is one share? | Combien coûte une action ?
It's too expensive for me. | C'est trop cher pour moi.
You can buy just a few shares. | Tu peux n'acheter que quelques actions.
I bought my first stock today. | J'ai acheté ma première action aujourd'hui.
Congratulations! | Félicitations !
I bought an ETF. | J'ai acheté un ETF.
An ETF is a basket of stocks. | Un ETF, c'est un panier d'actions.
It's a good way to start. | C'est une bonne façon de commencer.
I invest a little every month. | J'investis un peu chaque mois.
That's a good habit. | C'est une bonne habitude.
Be patient. | Sois patient.
Don't check your stocks every minute. | Ne regarde pas tes actions toutes les minutes.
I can't stop looking at my app. | Je n'arrête pas de regarder mon appli.
Stay calm. | Reste calme.
Don't panic when prices drop. | Ne panique pas quand les cours baissent.
Don't be greedy. | Ne sois pas cupide.
Don't follow the crowd. | Ne suis pas la foule.
My friend gave me a hot tip. | Mon ami m'a donné un tuyau en or.
Be careful with stock tips. | Méfie-toi des tuyaux boursiers.
That sounds too good to be true. | Ça a l'air trop beau pour être vrai.
It's probably a scam. | C'est sans doute une arnaque.
Never give your password to anyone. | Ne donne jamais ton mot de passe à personne.
This stock pays a dividend. | Cette action verse un dividende.
I got my dividend today. | J'ai reçu mon dividende aujourd'hui.
Dividends are paid once a year. | Les dividendes sont versés une fois par an.
Some companies pay every quarter. | Certaines entreprises versent chaque trimestre.
Is TSMC expensive now? | TSMC est cher en ce moment ?
Everyone is talking about TSMC. | Tout le monde parle de TSMC.
Chip stocks are hot right now. | Les valeurs des puces ont la cote en ce moment.
Tech stocks went up today. | Les valeurs technologiques ont monté aujourd'hui.
The index hit a new record. | L'indice a atteint un nouveau record.
It's a bull market. | C'est un marché haussier.
It's a bear market. | C'est un marché baissier.
Is this a bubble? | Est-ce une bulle ?
The market crashed. | Le marché s'est effondré.
It will come back. | Il remontera.
It may take years. | Ça peut prendre des années.
Think long-term. | Pense à long terme.
Time in the market beats timing the market. | Rester investi vaut mieux que chercher le bon moment.
Save first, then invest. | Épargne d'abord, investis ensuite.
Keep some cash for emergencies. | Garde un peu de liquidités pour les urgences.
Don't put all your eggs in one basket. | Ne mets pas tous tes œufs dans le même panier.
Stocks are riskier than savings accounts. | Les actions sont plus risquées que les livrets d'épargne.
Bonds are safer but pay less. | Les obligations sont plus sûres mais rapportent moins.
Gold is going up. | L'or monte.
The dollar is getting stronger. | Le dollar se renforce.
My parents don't trust the stock market. | Mes parents ne font pas confiance à la Bourse.
My grandpa still buys stocks. | Mon grand-père achète encore des actions.
Learn before you invest. | Apprends avant d'investir.
Read books about investing. | Lis des livres sur l'investissement.
I'm learning from YouTube. | J'apprends sur YouTube.
Not everything online is true. | Tout ce qu'on trouve en ligne n'est pas vrai.
Start investing when you're young. | Commence à investir quand tu es jeune.
I wish I had started earlier. | J'aurais aimé commencer plus tôt.
It's never too late to start. | Il n'est jamais trop tard pour commencer.
Money doesn't grow on trees. | L'argent ne pousse pas sur les arbres.
Investing is a marathon, not a sprint. | Investir, c'est un marathon, pas un sprint.
Slow and steady wins the race. | Rien ne sert de courir, il faut partir à point.
Let's talk about something else. | Parlons d'autre chose.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("stocks", {
  words: `
Taiwan Stock Exchange | la Bourse de Taïwan (TWSE) | La Bourse de Taïwan ouvre à 9 heures.
TAIEX | le TAIEX (indice pondéré de Taïwan) | Le TAIEX a clôturé en hausse aujourd'hui.
OTC market | le marché de gré à gré | Les petites entreprises sont cotées sur le marché de gré à gré.
brokerage account | le compte-titres | J'ai ouvert un compte-titres en ligne.
settlement account | le compte de règlement | Garde assez d'argent sur ton compte de règlement.
settlement | le règlement-livraison | Le règlement-livraison prend deux jours ouvrés.
settlement default | le défaut de règlement | Un défaut de règlement peut ruiner ton crédit.
commission | la commission ; les frais de courtage | Les frais de courtage standard sont de 0,1425 %.
discount | la remise | Les courtiers en ligne proposent une remise sur les frais.
ticker | le code boursier ; le ticker | Le code de TSMC à Taïwan est 2330.
ETF | l'ETF ; le fonds indiciel coté | 0050 est l'ETF le plus connu de Taïwan.
index fund | le fonds indiciel | Un fonds indiciel suit le marché.
high-dividend ETF | l'ETF à haut rendement | Les ETF à haut rendement sont populaires chez les retraités.
dollar-cost averaging | l'investissement programmé | L'investissement programmé réduit le risque de mauvais timing.
odd lot | le lot irrégulier ; les actions à l'unité | On peut acheter des actions à l'unité pendant la séance.
board lot | le lot standard | Un lot standard compte 1 000 actions.
limit up | la hausse maximale autorisée | L'action a atteint la hausse maximale ce matin.
limit down | la baisse maximale autorisée | Elle a clôturé à la baisse maximale.
price limit | la limite de variation journalière | La limite de variation journalière à Taïwan est de 10 %.
ex-dividend | le détachement du dividende | L'action détache son dividende demain.
ex-rights | le détachement du droit | Beaucoup de détachements de droits ont lieu en été.
dividend yield | le rendement du dividende | Le rendement du dividende est d'environ 5 %.
cash dividend | le dividende en numéraire | Je préfère les dividendes en numéraire.
stock dividend | le dividende en actions | Un dividende en actions vous donne plus d'actions.
shareholder | l'actionnaire | Les actionnaires votent à l'assemblée.
shareholders' meeting | l'assemblée générale des actionnaires | L'assemblée générale a lieu en juin.
souvenir | le cadeau de l'assemblée générale | Certains investisseurs achètent une action juste pour le cadeau de l'assemblée.
annual report | le rapport annuel | Lis le rapport annuel.
earnings | les bénéfices ; les résultats | Les résultats ont dépassé les attentes.
earnings call | la conférence sur les résultats | Le PDG s'est exprimé lors de la conférence sur les résultats.
revenue | le chiffre d'affaires | Le chiffre d'affaires mensuel a augmenté de 30 %.
EPS | le bénéfice par action (BPA) | Le BPA est passé à 12 dollars.
P/E ratio | le PER (cours/bénéfice) | Le PER est d'environ 20.
valuation | la valorisation | La valorisation semble élevée.
market cap | la capitalisation boursière | TSMC a la plus grosse capitalisation de Taïwan.
blue chip | la valeur de premier ordre | Les valeurs de premier ordre sont généralement stables.
growth stock | la valeur de croissance | Les valeurs de croissance sont volatiles.
value stock | la valeur décotée | Les valeurs décotées semblent bon marché.
sector | le secteur | Le secteur technologique a mené la hausse.
semiconductor | le semi-conducteur | Les valeurs des semi-conducteurs dominent le TAIEX.
AI | l'IA | La demande d'IA a porté les fabricants de serveurs.
foreign investors | les investisseurs étrangers | Les investisseurs étrangers ont beaucoup vendu aujourd'hui.
institutional investors | les investisseurs institutionnels | Les institutionnels ont acheté des valeurs technologiques.
retail investor | le petit porteur ; l'investisseur particulier | Les petits porteurs se sont rués sur le marché.
investment trust | la société de gestion de fonds | Les sociétés de gestion ont acheté avant la fin du trimestre.
dealer | le négociant pour compte propre | Les négociants pour compte propre opèrent avec leur propre argent.
margin trading | l'achat sur marge | L'achat sur marge augmente le risque.
short selling | la vente à découvert | La vente à découvert, c'est parier sur la baisse.
day trading | le day trading ; l'aller-retour intrajournalier | Le day trading est très risqué.
margin call | l'appel de marge | J'ai reçu un appel de marge.
stop-loss | l'ordre stop ; le stop-loss | Place un stop-loss.
take profit | prendre ses bénéfices | Je prends mes bénéfices à 20 %.
diversify | diversifier | Diversifie ton portefeuille.
portfolio | le portefeuille | Mon portefeuille est surtout composé d'ETF.
asset allocation | l'allocation d'actifs | C'est l'allocation d'actifs qui compte le plus.
rebalance | rééquilibrer | Rééquilibre une fois par an.
volatility | la volatilité | La volatilité est normale.
correction | la correction | Une baisse de 10 % s'appelle une correction.
bear market | le marché baissier | Un marché baissier, c'est une chute de 20 % ou plus.
bull market | le marché haussier | Le marché haussier a duré des années.
rally | le rebond ; la remontée | La remontée a duré une semaine.
sell-off | la vague de ventes | Il y a eu une grosse vague de ventes.
rebound | rebondir | Les actions ont rebondi dans l'après-midi.
trading volume | le volume d'échanges | Le volume d'échanges était important.
liquidity | la liquidité | Les petites valeurs sont peu liquides.
IPO | l'introduction en Bourse | L'introduction en Bourse de l'entreprise a été un succès.
listed company | la société cotée | Elle est devenue une société cotée l'an dernier.
delisted | radié de la cote | L'action a été radiée de la cote.
capital reduction | la réduction de capital | L'entreprise a annoncé une réduction de capital.
stock split | la division d'actions | Après la division, chaque action coûte moins cher.
buyback | le rachat d'actions | L'entreprise a annoncé un rachat d'actions.
insider trading | le délit d'initié | Le délit d'initié est illégal.
financial statement | les états financiers | Apprends à lire des états financiers.
balance sheet | le bilan | Vérifie le bilan.
cash flow | les flux de trésorerie | La trésorerie, c'est le nerf de la guerre.
gross margin | la marge brute | La marge brute s'est améliorée ce trimestre.
guidance | les prévisions | L'entreprise a relevé ses prévisions.
analyst | l'analyste | Les analystes prévoient une forte croissance.
target price | l'objectif de cours | L'objectif de cours est de 1 500 dollars.
upgrade | relever la recommandation | La banque a relevé sa recommandation sur l'action.
downgrade | l'abaissement de recommandation | Un abaissement de recommandation a fait chuter l'action.
compound interest | les intérêts composés | Les intérêts composés font croître le patrimoine lentement, puis vite.
inflation | l'inflation | L'inflation ronge votre épargne.
interest rate | le taux d'intérêt | Des taux d'intérêt plus élevés peuvent nuire aux actions.
central bank | la banque centrale | La banque centrale a relevé ses taux.
Fed | la Fed | Tout le monde surveille la Fed.
Nasdaq | le Nasdaq | Le Nasdaq est plein de valeurs technologiques.
S&P 500 | le S&P 500 | Le S&P 500 a atteint un record.
ADR | l'ADR (certificat de dépôt américain) | L'ADR de TSMC s'échange à New York.
mutual fund | le fonds commun de placement | Un fonds commun de placement est géré par un gérant.
management fee | les frais de gestion | Vérifie les frais de gestion.
emergency fund | l'épargne de précaution | Constitue d'abord une épargne de précaution.
financial literacy | l'éducation financière | L'éducation financière devrait être enseignée à l'école.
scam | l'arnaque | Les arnaques à l'investissement sont partout.
investment group | le groupe d'investissement | Les faux groupes d'investissement sur LINE sont des arnaques.
Financial Supervisory Commission | la Commission de surveillance financière (FSC) | La Commission de surveillance financière régule les courtiers.
dividend reinvestment | le réinvestissement des dividendes | Le réinvestissement des dividendes accélère la croissance.
quarterly | trimestriel | Les résultats sont publiés chaque trimestre.
candlestick chart | le graphique en chandeliers | Un graphique en chandeliers montre les plus hauts et plus bas de chaque jour.
moving average | la moyenne mobile | Le cours a franchi la moyenne mobile à 60 jours.
don't put all your eggs in one basket | ne pas mettre tous ses œufs dans le même panier | Ne mets pas tous tes œufs dans le même panier.
buy the dip | acheter sur repli | Beaucoup de gens achètent sur repli.
to the moon | jusqu'à la lune | Cette action va monter jusqu'à la lune !
cash cow | la vache à lait | Ce produit est la vache à lait de l'entreprise.
get rich quick | s'enrichir rapidement | Il n'y a aucun moyen de s'enrichir rapidement.
easy come, easy go | ce qui vient de la flûte s'en va par le tambour | J'ai tout perdu. Ce qui vient de la flûte s'en va par le tambour.
hit rock bottom | toucher le fond | Le cours a touché le fond.
cut your losses | couper ses pertes | Vends maintenant et coupe tes pertes.
a safe bet | un pari sûr | Les fonds indiciels sont un pari sûr.
in the long run | à long terme | À long terme, les actions montent.
a gold mine | une mine d'or | Cette appli est une mine d'or.
skyrocket | s'envoler | Les actions se sont envolées après l'annonce.
`,
  phrases: `
I opened a brokerage account last week. | J'ai ouvert un compte-titres la semaine dernière.
You also need a settlement account. | Il te faut aussi un compte de règlement.
Make sure you have enough money for settlement. | Assure-toi d'avoir assez d'argent pour le règlement.
Settlement is two days after the trade. | Le règlement intervient deux jours après la transaction.
Never default on settlement. | Ne fais jamais défaut au règlement.
What's the commission? | Quels sont les frais de courtage ?
My broker gives a 60% discount online. | Mon courtier facture 60 % du tarif pour les ordres en ligne.
There's also a securities transaction tax when you sell. | Il y a aussi une taxe sur les transactions quand tu vends.
I buy odd lots every month. | J'achète des actions à l'unité tous les mois.
One board lot is a thousand shares. | Un lot standard, c'est mille actions.
I can't afford a full lot of TSMC. | Je n'ai pas les moyens d'acheter un lot entier de TSMC.
Odd lots make it possible. | Les actions à l'unité rendent ça possible.
I set up dollar-cost averaging. | J'ai mis en place un investissement programmé.
It runs automatically on the 6th of each month. | Il s'exécute automatiquement le 6 de chaque mois.
0050 tracks the top 50 companies in Taiwan. | 0050 suit les 50 plus grandes entreprises de Taïwan.
High-dividend ETFs are very popular in Taiwan. | Les ETF à haut rendement sont très populaires à Taïwan.
A high yield isn't always a good sign. | Un rendement élevé n'est pas toujours bon signe.
Check the total return, not just the dividend. | Regarde le rendement total, pas seulement le dividende.
The stock goes ex-dividend next week. | L'action détache son dividende la semaine prochaine.
Did it recover its dividend yet? | Le cours a-t-il déjà comblé le détachement du dividende ?
It recovered the dividend in three days. | Il a comblé le détachement en trois jours.
I'm going to the shareholders' meeting. | Je vais à l'assemblée générale des actionnaires.
I'm only going for the souvenir. | J'y vais seulement pour le cadeau.
TSMC hit a new high today. | TSMC a atteint un nouveau plus haut aujourd'hui.
The stock hit limit up. | L'action a atteint la hausse maximale.
It opened limit down. | Elle a ouvert à la baisse maximale.
Taiwan's daily limit is 10%. | La limite de variation journalière à Taïwan est de 10 %.
Foreign investors sold heavily today. | Les investisseurs étrangers ont beaucoup vendu aujourd'hui.
Investment trusts were net buyers. | Les sociétés de gestion ont été acheteuses nettes.
Retail investors are piling in. | Les petits porteurs se ruent sur le marché.
Margin balances are rising. | Les encours d'achat sur marge augmentent.
That's usually a warning sign. | C'est généralement un signal d'alarme.
Day trading is not for beginners. | Le day trading n'est pas pour les débutants.
I got a margin call. | J'ai reçu un appel de marge.
Set a stop-loss before you buy. | Fixe un stop-loss avant d'acheter.
I sold half to take profit. | J'ai vendu la moitié pour prendre mes bénéfices.
What's the P/E ratio? | Quel est le PER ?
That valuation looks stretched. | Cette valorisation paraît tendue.
Earnings beat expectations. | Les résultats ont dépassé les attentes.
Revenue missed estimates. | Le chiffre d'affaires a déçu.
Monthly revenue is out on the 10th. | Le chiffre d'affaires mensuel est publié avant le 10.
Did you listen to the earnings call? | Tu as écouté la conférence sur les résultats ?
The company raised its guidance. | L'entreprise a relevé ses prévisions.
The stock jumped after the news. | L'action a bondi après l'annonce.
Analysts raised their target price. | Les analystes ont relevé leur objectif de cours.
A downgrade sent the shares lower. | Un abaissement de recommandation a fait baisser l'action.
Don't trade on headlines alone. | Ne passe pas d'ordres sur la seule foi des gros titres.
Read the financial statements. | Lis les états financiers.
Check the cash flow, not just profit. | Regarde les flux de trésorerie, pas seulement les bénéfices.
Debt levels matter. | Le niveau d'endettement compte.
Semiconductors are a big part of the TAIEX. | Les semi-conducteurs pèsent lourd dans le TAIEX.
AI demand is driving the rally. | La demande liée à l'IA porte la hausse.
Server makers have done very well. | Les fabricants de serveurs ont très bien performé.
Shipping stocks are cyclical. | Les valeurs du transport maritime sont cycliques.
Financial stocks are good for dividends. | Les valeurs financières sont bonnes pour les dividendes.
Diversify across sectors. | Diversifie entre les secteurs.
Diversify across countries, too. | Diversifie aussi entre les pays.
I hold US stocks through an ETF. | Je détiens des actions américaines via un ETF.
The S&P 500 hit a record. | Le S&P 500 a atteint un record.
The Nasdaq fell 2% overnight. | Le Nasdaq a perdu 2 % pendant la nuit.
Taiwan stocks often follow the US. | La Bourse de Taïwan suit souvent Wall Street.
Everyone is waiting for the Fed. | Tout le monde attend la Fed.
A rate cut would help stocks. | Une baisse des taux aiderait les actions.
Inflation came in hotter than expected. | L'inflation est ressortie plus forte que prévu.
Bond yields jumped. | Les rendements obligataires ont bondi.
The Taiwan dollar strengthened today. | Le dollar taïwanais s'est apprécié aujourd'hui.
That hurts exporters' earnings. | Cela pèse sur les bénéfices des exportateurs.
What's your asset allocation? | Quelle est ton allocation d'actifs ?
About 70% stocks and 30% bonds. | Environ 70 % d'actions et 30 % d'obligations.
I rebalance once a year. | Je rééquilibre une fois par an.
Volatility is the price of higher returns. | La volatilité est le prix de rendements plus élevés.
A 10% correction is normal. | Une correction de 10 % est normale.
Bear markets don't last forever. | Les marchés baissiers ne durent pas éternellement.
The market rebounded in the afternoon. | Le marché a rebondi dans l'après-midi.
Trading volume was very light. | Le volume d'échanges était très faible.
The IPO was oversubscribed. | L'introduction en Bourse a été sursouscrite.
I entered the IPO lottery. | J'ai participé au tirage au sort de l'introduction en Bourse.
I won the lottery for the new listing! | J'ai été tiré au sort pour la nouvelle introduction !
The company announced a buyback. | L'entreprise a annoncé un rachat d'actions.
A capital reduction isn't always bad news. | Une réduction de capital n'est pas toujours une mauvaise nouvelle.
Insider trading is a crime. | Le délit d'initié est un crime.
Beware of fake investment groups on LINE. | Méfie-toi des faux groupes d'investissement sur LINE.
No real advisor guarantees returns. | Aucun vrai conseiller ne garantit de rendement.
Check if the company is licensed. | Vérifie si la société est agréée.
Report scams to 165. | Signale les arnaques au 165 (ligne anti-fraude de Taïwan).
Build an emergency fund before you invest. | Constitue une épargne de précaution avant d'investir.
Six months of expenses is a good target. | Six mois de dépenses, c'est un bon objectif.
Compound interest takes time to work. | Les intérêts composés mettent du temps à agir.
Fees eat into your returns. | Les frais rongent tes rendements.
Index funds have low fees. | Les fonds indiciels ont des frais faibles.
Most active funds don't beat the index. | La plupart des fonds actifs ne battent pas l'indice.
Keep a trading journal. | Tiens un journal de trading.
Write down why you bought. | Note pourquoi tu as acheté.
Sell when the reason is gone. | Vends quand la raison a disparu.
Don't fall in love with a stock. | Ne tombe pas amoureux d'une action.
Cut your losses early. | Coupe tes pertes tôt.
Let your winners run. | Laisse courir tes gains.
I'm staying on the sidelines for now. | Je reste à l'écart pour l'instant.
Cash is also a position. | Les liquidités sont aussi une position.
Review your portfolio once a quarter. | Passe en revue ton portefeuille une fois par trimestre.
`,
});

// ---------- 高級 Advanced ----------
addFrench("stocks", {
  words: `
market efficiency | l'efficience des marchés | L'efficience des marchés rend difficile de battre l'indice.
efficient market hypothesis | l'hypothèse des marchés efficients | L'hypothèse des marchés efficients dit que les prix reflètent toute l'information.
passive investing | la gestion passive | La gestion passive maintient des coûts bas.
active management | la gestion active | La gestion active bat rarement l'indice après frais.
alpha | l'alpha ; la surperformance | Peu de gérants génèrent de l'alpha de façon régulière.
beta | le bêta | Une action à bêta élevé bouge plus que le marché.
benchmark | l'indice de référence | Comparez vos rendements à un indice de référence.
tracking error | l'écart de suivi | Un bon ETF a un faible écart de suivi.
expense ratio | les frais courants | Des frais courants faibles comptent sur des décennies.
risk-adjusted return | le rendement ajusté au risque | Regardez le rendement ajusté au risque, pas seulement le rendement.
Sharpe ratio | le ratio de Sharpe | Un ratio de Sharpe plus élevé signifie une meilleure rémunération par unité de risque.
drawdown | la perte maximale ; le drawdown | La perte maximale du fonds a été de 30 %.
mean reversion | le retour à la moyenne | Le retour à la moyenne suggère que les extrêmes ne durent pas.
momentum | le momentum ; la dynamique | Les valeurs de momentum montent… jusqu'au jour où elles ne montent plus.
behavioral finance | la finance comportementale | La finance comportementale étudie la psychologie des investisseurs.
loss aversion | l'aversion aux pertes | L'aversion aux pertes rend les pertes deux fois plus douloureuses.
herd behavior | l'instinct grégaire | L'instinct grégaire alimente les bulles.
FOMO | la peur de rater le coche (FOMO) | La peur de rater le coche pousse à acheter au plus haut.
confirmation bias | le biais de confirmation | Le biais de confirmation nous fait ignorer les mauvaises nouvelles.
overconfidence | l'excès de confiance | L'excès de confiance pousse à trop trader.
recency bias | le biais de récence | Le biais de récence fait paraître les tendances récentes permanentes.
disposition effect | l'effet de disposition | L'effet de disposition pousse à vendre trop tôt les titres gagnants.
survivorship bias | le biais du survivant | Le biais du survivant masque les fonds qui ont fermé.
leverage | l'effet de levier | L'effet de levier amplifie les gains et les pertes.
leveraged ETF | l'ETF à effet de levier | Les ETF à effet de levier perdent de la valeur dans les marchés agités.
inverse ETF | l'ETF inverse | Un ETF inverse monte quand le marché baisse.
derivative | le produit dérivé | Les produits dérivés peuvent couvrir ou amplifier le risque.
futures | les contrats à terme | Les contrats à terme sur l'indice taïwanais se négocient aussi la nuit.
options | les options | Les options donnent le droit, et non l'obligation, d'acheter ou de vendre.
warrant | le warrant | Les warrants sont populaires chez les traders taïwanais.
hedge | se couvrir | Les exportateurs se couvrent contre les variations de change.
call option | l'option d'achat ; le call | Une option d'achat gagne quand les prix montent.
put option | l'option de vente ; le put | Une option de vente fonctionne comme une assurance.
implied volatility | la volatilité implicite | La volatilité implicite bondit avant les résultats.
VIX | le VIX (indice de la peur) | Le VIX a flambé pendant le krach.
short squeeze | le short squeeze | Un short squeeze a fait s'envoler l'action.
open interest | l'intérêt ouvert ; les positions ouvertes | Les positions ouvertes ont atteint un record.
yield curve | la courbe des taux | Surveillez la courbe des taux.
inverted yield curve | l'inversion de la courbe des taux | Une inversion de la courbe des taux précède souvent une récession.
recession | la récession | Les actions baissent généralement avant une récession.
soft landing | l'atterrissage en douceur | La banque centrale espère un atterrissage en douceur.
rate cut | la baisse des taux | Les marchés ont salué la baisse des taux.
quantitative easing | l'assouplissement quantitatif | L'assouplissement quantitatif a fait monter les prix des actifs.
risk appetite | l'appétit pour le risque | L'appétit pour le risque est revenu après la baisse des taux.
safe haven | la valeur refuge | L'or est une valeur refuge classique.
capital flows | les flux de capitaux | Les flux de capitaux font bouger le dollar taïwanais.
hot money | les capitaux spéculatifs | Les capitaux spéculatifs peuvent repartir aussi vite qu'ils sont venus.
New Taiwan dollar | le nouveau dollar de Taïwan | Un nouveau dollar de Taïwan plus fort pénalise les exportateurs.
market maker | le teneur de marché | Un teneur de marché assure la fluidité des échanges.
bid-ask spread | l'écart acheteur-vendeur ; la fourchette | Les titres peu liquides ont une large fourchette.
order book | le carnet d'ordres | Le carnet d'ordres montre les acheteurs et les vendeurs.
limit order | l'ordre à cours limité | Utilisez un ordre à cours limité pour maîtriser votre prix.
market order | l'ordre au marché | Un ordre au marché s'exécute à n'importe quel prix.
after-hours trading | les échanges après clôture | Les échanges après clôture sont peu fournis.
circuit breaker | le coupe-circuit | Le coupe-circuit a suspendu les cotations.
flash crash | le krach éclair | Un krach éclair a effacé des milliards en quelques minutes.
algorithmic trading | le trading algorithmique | Le trading algorithmique domine les volumes.
high-frequency trading | le trading à haute fréquence | Le trading à haute fréquence se joue en microsecondes.
dark pool | le dark pool | Les gros ordres passent parfois par un dark pool.
free cash flow | le flux de trésorerie disponible | Le flux de trésorerie disponible finance les dividendes.
return on equity | la rentabilité des capitaux propres | Une forte rentabilité des capitaux propres témoigne de l'efficacité.
discounted cash flow | l'actualisation des flux de trésorerie | Un modèle d'actualisation des flux estime la valeur.
intrinsic value | la valeur intrinsèque | Achetez sous la valeur intrinsèque.
margin of safety | la marge de sécurité | Gardez toujours une marge de sécurité.
moat | l'avantage concurrentiel durable | L'avantage durable de TSMC, c'est sa technologie de gravure.
pricing power | le pouvoir de fixation des prix | Le pouvoir de fixation des prix protège les marges.
cyclical | cyclique | Les valeurs des puces mémoire sont cycliques.
inventory cycle | le cycle des stocks | Le cycle des stocks influe sur le prix des puces.
supply chain | la chaîne d'approvisionnement | La chaîne d'approvisionnement de l'IA passe par Taïwan.
concentration risk | le risque de concentration | Une valeur géante dans un indice crée un risque de concentration.
market-cap weighting | la pondération par la capitalisation | La pondération par la capitalisation favorise les plus grandes entreprises.
corporate governance | la gouvernance d'entreprise | Une bonne gouvernance protège les actionnaires minoritaires.
ESG | l'ESG (environnement, social, gouvernance) | Les fonds ESG filtrent les entreprises selon des critères de durabilité.
proxy | la procuration | Les actionnaires peuvent voter par procuration.
activist investor | l'investisseur activiste | Un investisseur activiste a réclamé des sièges au conseil.
hostile takeover | l'OPA hostile | Le conseil a repoussé une OPA hostile.
merger | la fusion | La fusion a créé un géant du secteur.
acquisition | l'acquisition | L'acquisition a été payée en numéraire.
spin-off | la scission | La scission a révélé une valeur cachée.
dilution | la dilution | Les nouvelles actions entraînent une dilution.
convertible bond | l'obligation convertible | Une obligation convertible peut se transformer en actions.
stock-based compensation | la rémunération en actions | La rémunération en actions est un vrai coût.
lock-up period | la période de blocage | Les initiés ne peuvent pas vendre pendant la période de blocage.
underwriter | la banque introductrice ; le souscripteur | La banque introductrice a fixé le prix de l'introduction.
prospectus | le prospectus | Lisez le prospectus avant d'acheter.
disclosure | la communication d'informations | La loi impose une communication rapide des informations.
market manipulation | la manipulation de cours | La manipulation de cours est un délit grave.
pump and dump | le pump and dump | Un pump and dump laisse des pertes aux derniers acheteurs.
pig butchering scam | l'arnaque « pig butchering » | L'arnaque « pig butchering » gagne la confiance avant de voler les économies.
fiduciary duty | le devoir fiduciaire | Les conseillers ont un devoir fiduciaire envers leurs clients.
robo-advisor | le robot-conseiller | Un robot-conseiller rééquilibre automatiquement.
financial independence | l'indépendance financière | L'indépendance financière, c'est quand le travail devient facultatif.
withdrawal rate | le taux de retrait | Un taux de retrait de 4 % est une règle empirique courante.
total return | le rendement total | Le rendement total inclut les dividendes.
reinvest | réinvestir | Réinvestissez vos dividendes.
index inclusion | l'entrée dans un indice | L'entrée dans un indice déclenche des achats automatiques.
MSCI | MSCI | Les changements d'indices MSCI déplacent les capitaux étrangers.
sovereign wealth fund | le fonds souverain | Un fonds souverain investit l'épargne nationale.
risk premium | la prime de risque | Les actions offrent une prime de risque par rapport aux obligations.
black swan | le cygne noir | Un cygne noir est un événement rare mais extrême.
buy low, sell high | acheter bas, vendre haut | La règle : acheter bas, vendre haut.
the trend is your friend | la tendance est ton amie | Souviens-toi, la tendance est ton amie.
catch a falling knife | rattraper un couteau qui tombe | N'essaie pas de rattraper un couteau qui tombe.
dead cat bounce | le rebond du chat mort | Cette hausse n'était qu'un rebond du chat mort.
paper hands | les mains de papier (qui vendent au moindre recul) | Il a des mains de papier.
diamond hands | les mains de diamant (qui ne vendent jamais) | Mains de diamant, on ne vend jamais !
a bubble | une bulle | Ce marché est-il une bulle ?
the bottom fell out | le marché s'est effondré | Le marché s'est complètement effondré.
throw good money after bad | s'entêter à perdre de l'argent | Ne t'entête pas à perdre davantage.
time in the market beats timing the market | le temps passé sur le marché bat le timing | Le temps passé sur le marché bat le timing.
be fearful when others are greedy | avoir peur quand les autres sont avides | Aie peur quand les autres sont avides.
ride it out | tenir bon ; laisser passer l'orage | Tiens bon, laisse passer l'orage.
take a bath | boire la tasse ; perdre gros | Tu pourrais perdre gros sur les valeurs technologiques.
dry powder | les liquidités en réserve | Garde des liquidités en réserve pour un krach.
`,
  phrases: `
Concentration risk is a real concern in Taiwan. | Le risque de concentration est une vraie préoccupation à Taïwan.
One company makes up a huge share of the index. | Une seule entreprise représente une part énorme de l'indice.
Market-cap weighting amplifies that effect. | La pondération par la capitalisation amplifie cet effet.
Owning the index means betting heavily on chips. | Détenir l'indice revient à parier lourdement sur les puces.
Global diversification reduces home bias. | La diversification mondiale réduit le biais domestique.
Currency risk matters for overseas holdings. | Le risque de change compte pour les placements à l'étranger.
A strong Taiwan dollar cuts your foreign returns. | Un dollar taïwanais fort réduit vos rendements étrangers.
Life insurers' currency hedging can move the market. | La couverture de change des assureurs-vie peut faire bouger le marché.
Foreign capital flows drive short-term moves. | Les flux de capitaux étrangers dictent les mouvements à court terme.
Hot money can leave just as quickly. | Les capitaux spéculatifs peuvent repartir tout aussi vite.
MSCI weight changes trigger passive flows. | Les changements de pondération MSCI déclenchent des flux passifs.
Index inclusion often lifts a stock temporarily. | L'entrée dans un indice fait souvent monter une action temporairement.
Passive investing now dominates fund flows. | La gestion passive domine désormais les flux de fonds.
Does passive investing distort prices? | La gestion passive fausse-t-elle les prix ?
Markets are efficient, but not perfectly. | Les marchés sont efficients, mais pas parfaitement.
Few managers beat the index after fees. | Peu de gérants battent l'indice après frais.
Survivorship bias flatters fund statistics. | Le biais du survivant embellit les statistiques des fonds.
Look at risk-adjusted returns. | Regardez les rendements ajustés au risque.
A high Sharpe ratio means better reward for the risk. | Un ratio de Sharpe élevé signifie une meilleure rémunération du risque.
Maximum drawdown tells you how much pain to expect. | La perte maximale vous dit combien de douleur attendre.
Can you hold on through a 50% drop? | Pouvez-vous tenir pendant une chute de 50 % ?
Your risk tolerance is lower than you think. | Votre tolérance au risque est plus faible que vous ne le pensez.
Loss aversion makes losses hurt twice as much. | L'aversion aux pertes rend les pertes deux fois plus douloureuses.
Investors tend to sell winners too early. | Les investisseurs ont tendance à vendre leurs gagnants trop tôt.
And hold losers far too long. | Et à garder leurs perdants bien trop longtemps.
Herd behavior turns rallies into bubbles. | L'instinct grégaire transforme les hausses en bulles.
FOMO is the enemy of discipline. | La peur de rater le coche est l'ennemie de la discipline.
Recency bias makes trends feel permanent. | Le biais de récence fait paraître les tendances permanentes.
Overconfidence leads to overtrading. | L'excès de confiance mène à trop trader.
The best investors control their emotions. | Les meilleurs investisseurs maîtrisent leurs émotions.
Leverage works both ways. | L'effet de levier joue dans les deux sens.
Leveraged ETFs are designed for short-term trading. | Les ETF à effet de levier sont conçus pour le court terme.
Daily rebalancing causes decay in choppy markets. | Le rééquilibrage quotidien érode la valeur dans les marchés agités.
Inverse ETFs are not a long-term hedge. | Les ETF inverses ne sont pas une couverture à long terme.
Futures let you hedge a whole portfolio. | Les contrats à terme permettent de couvrir tout un portefeuille.
Warrants are popular but complex. | Les warrants sont populaires mais complexes.
Options are a tool, not a lottery ticket. | Les options sont un outil, pas un billet de loterie.
Buying puts is like buying insurance. | Acheter des puts, c'est comme acheter une assurance.
Insurance isn't free. | L'assurance n'est pas gratuite.
Implied volatility spikes before earnings. | La volatilité implicite flambe avant les résultats.
The VIX is sometimes called the fear index. | On surnomme parfois le VIX « l'indice de la peur ».
A short squeeze can push prices to absurd levels. | Un short squeeze peut pousser les cours à des niveaux absurdes.
The yield curve inverted last year. | La courbe des taux s'est inversée l'an dernier.
An inverted curve has often signaled recession. | Une courbe inversée a souvent annoncé une récession.
But timing the recession is nearly impossible. | Mais prévoir le moment de la récession est presque impossible.
Markets hope for a soft landing. | Les marchés espèrent un atterrissage en douceur.
Rate cuts usually boost risk appetite. | Les baisses de taux stimulent généralement l'appétit pour le risque.
Quantitative easing inflated asset prices. | L'assouplissement quantitatif a gonflé les prix des actifs.
Liquidity drives markets in the short run. | À court terme, c'est la liquidité qui fait les marchés.
Earnings drive markets in the long run. | À long terme, ce sont les bénéfices qui font les marchés.
In the short run, the market is a voting machine. | À court terme, le marché est une machine à voter.
In the long run, it's a weighing machine. | À long terme, c'est une machine à peser.
Estimate intrinsic value before you buy. | Estimez la valeur intrinsèque avant d'acheter.
Always demand a margin of safety. | Exigez toujours une marge de sécurité.
A discounted cash flow model is only as good as its assumptions. | Un modèle d'actualisation des flux ne vaut que ce que valent ses hypothèses.
Small changes in the discount rate change everything. | De petites variations du taux d'actualisation changent tout.
Look for companies with a durable moat. | Cherchez des entreprises dotées d'un avantage concurrentiel durable.
Pricing power protects margins during inflation. | Le pouvoir de fixation des prix protège les marges en période d'inflation.
Return on equity shows how well capital is used. | La rentabilité des capitaux propres montre l'efficacité de l'utilisation du capital.
Free cash flow is harder to fake than earnings. | Le flux de trésorerie disponible est plus difficile à maquiller que les bénéfices.
Watch out for aggressive accounting. | Méfiez-vous d'une comptabilité agressive.
Stock-based compensation dilutes shareholders. | La rémunération en actions dilue les actionnaires.
Convertible bonds can mean future dilution. | Les obligations convertibles peuvent signifier une dilution future.
Memory chips are a deeply cyclical business. | Les puces mémoire sont une activité profondément cyclique.
The inventory cycle drives chip prices. | Le cycle des stocks influe sur le prix des puces.
Buy cyclicals when the news is worst. | Achetez les valeurs cycliques quand les nouvelles sont les pires.
The AI supply chain runs through Taiwan. | La chaîne d'approvisionnement de l'IA passe par Taïwan.
Geopolitical risk is priced in, at least partly. | Le risque géopolitique est intégré dans les cours, du moins en partie.
A crisis in the strait would hit every asset. | Une crise dans le détroit frapperait tous les actifs.
Diversification is the only free lunch in investing. | La diversification est le seul repas gratuit de l'investissement.
Corporate governance has improved in Taiwan. | La gouvernance d'entreprise s'est améliorée à Taïwan.
Minority shareholders deserve better protection. | Les actionnaires minoritaires méritent une meilleure protection.
Activist investors are rare in Asia. | Les investisseurs activistes sont rares en Asie.
ESG ratings vary widely between providers. | Les notations ESG varient beaucoup d'une agence à l'autre.
Beware of greenwashing. | Méfiez-vous de l'écoblanchiment.
Read the prospectus, especially the risk section. | Lisez le prospectus, surtout la partie sur les risques.
Lock-up expiry can pressure a new stock. | La fin de la période de blocage peut peser sur une nouvelle action.
Market manipulation still happens in small caps. | La manipulation de cours existe encore sur les petites capitalisations.
Pump-and-dump schemes target beginners. | Les montages de pump and dump visent les débutants.
Pig butchering scams have cost victims fortunes. | Les arnaques « pig butchering » ont coûté des fortunes à leurs victimes.
If they promise guaranteed returns, walk away. | S'ils promettent un rendement garanti, partez.
High-frequency traders profit from tiny spreads. | Les traders à haute fréquence profitent de minuscules écarts.
Use limit orders in illiquid stocks. | Utilisez des ordres à cours limité sur les titres peu liquides.
A market order can fill at a terrible price. | Un ordre au marché peut s'exécuter à un prix catastrophique.
Circuit breakers exist to stop panic. | Les coupe-circuits existent pour arrêter la panique.
Flash crashes recover quickly, but not always. | Les krachs éclair se résorbent vite, mais pas toujours.
A robo-advisor can automate rebalancing. | Un robot-conseiller peut automatiser le rééquilibrage.
An advisor with fiduciary duty must put you first. | Un conseiller soumis au devoir fiduciaire doit vous faire passer en premier.
Ask how your advisor gets paid. | Demandez comment votre conseiller est rémunéré.
The 4% rule is a starting point, not a guarantee. | La règle des 4 % est un point de départ, pas une garantie.
Sequence risk matters most near retirement. | Le risque de séquence des rendements compte le plus à l'approche de la retraite.
Reinvesting dividends drives long-term returns. | Le réinvestissement des dividendes porte les rendements à long terme.
Total return is what really matters. | C'est le rendement total qui compte vraiment.
Your savings rate matters more than your returns at first. | Au début, votre taux d'épargne compte plus que vos rendements.
Financial independence is about choices, not luxury. | L'indépendance financière, c'est une question de choix, pas de luxe.
Black swans are rare, but they do happen. | Les cygnes noirs sont rares, mais ils arrivent.
Survive first, then thrive. | Survivre d'abord, prospérer ensuite.
The market can stay irrational longer than you can stay solvent. | Le marché peut rester irrationnel plus longtemps que vous ne pouvez rester solvable.
Be fearful when others are greedy, and greedy when others are fearful. | Soyez craintif quand les autres sont avides, et avide quand les autres sont craintifs.
The biggest risk is not knowing what you own. | Le plus grand risque, c'est de ne pas savoir ce que l'on détient.
`,
});
