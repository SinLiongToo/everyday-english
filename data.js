// Lesson data. Each level has:
//   v: vocabulary  [english, 中文, example sentence (must contain the word, used for the quiz)]
//   p: phrases     [english, 中文]
//   d: dialogue    [speaker, english, 中文]
// To add a topic, copy one block below and edit it.
// More words per topic are added from vocab-1.js, vocab-2.js and vocab-3.js.
window.TOPICS = [
  {
    id: "food", icon: "🍜", zh: "食・飲食", en: "Food & Dining",
    basic: {
      v: [
        ["breakfast", "早餐", "I eat breakfast at seven."],
        ["hungry", "餓的", "I'm hungry. Let's eat."],
        ["menu", "菜單", "Can I see the menu, please?"],
        ["delicious", "美味的", "This soup is delicious."],
        ["order", "點餐", "Are you ready to order?"],
        ["bill", "帳單", "Can we have the bill, please?"]
      ],
      p: [
        ["What would you like to eat?", "你想吃什麼？"],
        ["I'd like a cup of coffee, please.", "我想要一杯咖啡，謝謝。"],
        ["For here or to go?", "內用還是外帶？"]
      ],
      d: [
        ["A", "Hi! Are you ready to order?", "嗨！準備好點餐了嗎？"],
        ["B", "Yes, I'd like the beef noodles, please.", "好了，我要牛肉麵。"],
        ["A", "Anything to drink?", "要喝點什麼嗎？"],
        ["B", "Just water, thanks.", "白開水就好，謝謝。"]
      ]
    },
    inter: {
      v: [
        ["appetizer", "開胃菜", "We shared an appetizer before the main course."],
        ["reservation", "訂位", "I made a reservation for six people."],
        ["vegetarian", "素食者", "My sister is a vegetarian, so she doesn't eat meat."],
        ["spicy", "辣的", "Is this dish very spicy?"],
        ["leftovers", "剩菜", "Can I take the leftovers home?"],
        ["recommend", "推薦", "What do you recommend?"]
      ],
      p: [
        ["Could we get a table by the window?", "我們可以坐靠窗的位子嗎？"],
        ["I'm allergic to peanuts.", "我對花生過敏。"],
        ["Let's split the bill.", "我們各付各的吧。"]
      ],
      d: [
        ["A", "Good evening. Do you have a reservation?", "晚安，請問有訂位嗎？"],
        ["B", "Yes, under the name Chen, for four.", "有，陳先生，四位。"],
        ["A", "Right this way. Would you like to start with an appetizer?", "這邊請。要先來份開胃菜嗎？"],
        ["B", "Sure. What do you recommend? Nothing too spicy, please.", "好啊，你推薦什麼？請不要太辣的。"]
      ]
    },
    adv: {
      v: [
        ["palate", "味覺；品味", "The wine has a complex flavor that appeals to a refined palate."],
        ["savory", "鹹香的", "I prefer savory snacks to sweet ones."],
        ["culinary", "烹飪的", "Taipei has a vibrant culinary scene."],
        ["indulge", "盡情享受", "We decided to indulge in a seven-course tasting menu."],
        ["sustainable", "永續的", "The restaurant only serves sustainable seafood."],
        ["acquired taste", "後天培養的口味", "Stinky tofu is an acquired taste for many visitors."]
      ],
      p: [
        ["This dish really hits the spot.", "這道菜真是太對味了。"],
        ["I'm trying to cut back on sugar.", "我正在努力減少吃糖。"],
        ["The flavors are well balanced, though the sauce is a bit overpowering.", "味道很平衡，不過醬汁有點太搶味。"]
      ],
      d: [
        ["A", "How's the tasting menu so far?", "目前覺得這套品嚐菜單如何？"],
        ["B", "The scallop course was exquisite, but the dessert was a bit too rich for my palate.", "扇貝那道非常精緻，但甜點對我的口味來說有點太膩。"],
        ["A", "I agree. Still, the chef clearly has a bold culinary vision.", "同意。不過主廚顯然有大膽的烹飪理念。"],
        ["B", "Definitely worth the splurge for a special occasion.", "特殊場合絕對值得這樣奢侈一下。"]
      ]
    }
  },
  {
    id: "clothing", icon: "👕", zh: "衣・穿著", en: "Clothing & Fashion",
    basic: {
      v: [
        ["shirt", "襯衫", "He is wearing a blue shirt."],
        ["shoes", "鞋子", "These shoes are too small."],
        ["size", "尺寸", "What size do you wear?"],
        ["try on", "試穿", "Can I try on this jacket?"],
        ["cheap", "便宜的", "This T-shirt is very cheap."],
        ["wear", "穿；戴", "I wear a coat in winter."]
      ],
      p: [
        ["How much is this?", "這個多少錢？"],
        ["Do you have this in a larger size?", "這件有大一點的尺寸嗎？"],
        ["Where is the fitting room?", "試衣間在哪裡？"]
      ],
      d: [
        ["A", "Can I help you?", "需要幫忙嗎？"],
        ["B", "Yes. Can I try on this jacket?", "是的，我可以試穿這件外套嗎？"],
        ["A", "Sure. The fitting room is over there.", "當然，試衣間在那邊。"],
        ["B", "Thanks. Oh, it fits perfectly!", "謝謝。哇，剛剛好！"]
      ]
    },
    inter: {
      v: [
        ["outfit", "一套服裝", "I love your outfit today!"],
        ["casual", "休閒的", "The dress code is casual on Fridays."],
        ["fit", "合身", "These jeans fit me well."],
        ["refund", "退款", "I'd like a refund for this sweater."],
        ["on sale", "特價", "Everything in this store is on sale."],
        ["match", "搭配", "Does this tie match my suit?"]
      ],
      p: [
        ["It looks good on you.", "你穿起來很好看。"],
        ["Can I exchange this for a different color?", "我可以換別的顏色嗎？"],
        ["What's the dress code for the party?", "派對的服裝規定是什麼？"]
      ],
      d: [
        ["A", "What's the dress code for the wedding?", "婚禮的服裝規定是什麼？"],
        ["B", "Semi-formal, so a suit without a tie is fine.", "半正式，所以穿西裝不打領帶也可以。"],
        ["A", "Does this jacket match these pants?", "這件外套配這條褲子嗎？"],
        ["B", "It looks good on you, but try a darker shirt.", "你穿起來很好看，不過試試深色一點的襯衫。"]
      ]
    },
    adv: {
      v: [
        ["tailored", "量身訂做的", "He wore a tailored suit to the interview."],
        ["fast fashion", "快時尚", "Fast fashion has a huge environmental cost."],
        ["understated", "低調的", "Her style is elegant and understated."],
        ["versatile", "百搭的；多用途的", "A navy blazer is a versatile piece."],
        ["secondhand", "二手的", "I buy most of my clothes secondhand."],
        ["trendsetter", "潮流引領者", "She has become a trendsetter on social media."]
      ],
      p: [
        ["That color really brings out your eyes.", "那個顏色很襯你的眼睛。"],
        ["I'd rather invest in a few quality pieces than follow every trend.", "我寧可投資幾件好衣服，也不想追每個潮流。"],
        ["It's a bit too flashy for a business setting.", "這在商務場合有點太花俏了。"]
      ],
      d: [
        ["A", "I'm trying to build a capsule wardrobe.", "我在試著打造膠囊衣櫥。"],
        ["B", "Smart move. Fast fashion is cheap, but it doesn't last.", "聰明。快時尚便宜，但不耐穿。"],
        ["A", "Exactly. I'd rather invest in versatile, well-tailored pieces.", "沒錯，我寧可投資百搭又剪裁好的單品。"],
        ["B", "Secondhand shops are great for that, too.", "二手店也很適合找這種衣服。"]
      ]
    }
  },
  {
    id: "housing", icon: "🏠", zh: "住・居住", en: "Housing & Home",
    basic: {
      v: [
        ["apartment", "公寓", "I live in a small apartment."],
        ["kitchen", "廚房", "My mom is cooking in the kitchen."],
        ["bedroom", "臥室", "My bedroom is next to the bathroom."],
        ["rent", "租金；租", "The rent is ten thousand dollars a month."],
        ["neighbor", "鄰居", "Our neighbor is very friendly."],
        ["clean", "打掃", "I clean my room every Sunday."]
      ],
      p: [
        ["Where do you live?", "你住在哪裡？"],
        ["I live with my parents.", "我和父母一起住。"],
        ["Make yourself at home.", "別客氣，當自己家。"]
      ],
      d: [
        ["A", "Welcome! Come on in.", "歡迎！請進。"],
        ["B", "Thanks. What a nice apartment!", "謝謝，好漂亮的公寓！"],
        ["A", "Make yourself at home. The kitchen is over there.", "別客氣，當自己家。廚房在那邊。"],
        ["B", "It's so bright and clean!", "好明亮又好乾淨！"]
      ]
    },
    inter: {
      v: [
        ["landlord", "房東", "I need to call the landlord about the leak."],
        ["lease", "租約", "I signed a one-year lease."],
        ["utilities", "水電瓦斯費", "Are utilities included in the rent?"],
        ["furnished", "附家具的", "We're looking for a furnished apartment."],
        ["move in", "搬進來", "When can I move in?"],
        ["deposit", "押金", "The deposit is two months' rent."]
      ],
      p: [
        ["Is the apartment close to public transportation?", "公寓離大眾運輸近嗎？"],
        ["The sink is leaking. Could you send someone to fix it?", "水槽漏水了，可以派人來修嗎？"],
        ["Are pets allowed?", "可以養寵物嗎？"]
      ],
      d: [
        ["A", "Hi, is the apartment still available?", "你好，公寓還在出租嗎？"],
        ["B", "Yes. It's fully furnished, and the rent includes utilities.", "還在。家具齊全，租金含水電。"],
        ["A", "Great. How much is the deposit?", "太好了。押金多少？"],
        ["B", "Two months' rent, and the lease is for one year.", "兩個月租金，租約一年。"]
      ]
    },
    adv: {
      v: [
        ["mortgage", "房貸", "We took out a thirty-year mortgage."],
        ["down payment", "頭期款", "Saving for a down payment takes years."],
        ["renovate", "翻修", "They plan to renovate the old house."],
        ["gentrification", "仕紳化", "Gentrification has pushed rents higher in this neighborhood."],
        ["affordable", "負擔得起的", "There is a shortage of affordable housing."],
        ["zoning", "分區規劃", "Zoning laws limit how tall buildings can be."]
      ],
      p: [
        ["Property prices have skyrocketed in recent years.", "近年來房價飆漲。"],
        ["We're weighing the pros and cons of renting versus buying.", "我們在權衡租房與買房的利弊。"],
        ["Location is everything when it comes to real estate.", "談到房地產，地點就是一切。"]
      ],
      d: [
        ["A", "Are you still thinking of buying a place?", "你還在考慮買房嗎？"],
        ["B", "Yes, but prices have skyrocketed, and the down payment alone is daunting.", "是啊，但房價飆漲，光頭期款就很嚇人。"],
        ["A", "Have you considered an older unit you could renovate?", "有考慮買舊房子來翻修嗎？"],
        ["B", "That's an option, though I'd have to factor in renovation costs on top of the mortgage.", "是個選項，不過除了房貸還得把翻修費用算進去。"]
      ]
    }
  },
  {
    id: "household", icon: "🧺", zh: "居家用品", en: "Household Items",
    basic: {
      v: [
        ["toothbrush", "牙刷", "I need a new toothbrush."],
        ["toothpaste", "牙膏", "We're out of toothpaste."],
        ["shampoo", "洗髮精", "This shampoo smells nice."],
        ["toilet paper", "衛生紙（捲筒）", "Buy some toilet paper, please."],
        ["hair dryer", "吹風機", "Can I borrow your hair dryer?"],
        ["comb", "梳子", "Where is my comb?"]
      ],
      p: [
        ["Where do you keep the scissors?", "剪刀放在哪裡？"],
        ["We're out of toilet paper.", "衛生紙用完了。"],
        ["Can you hand me a towel?", "可以拿條毛巾給我嗎？"]
      ],
      d: [
        ["A", "Mom, where's the toothpaste?", "媽，牙膏在哪裡？"],
        ["B", "It's in the bathroom cabinet.", "在浴室的櫃子裡。"],
        ["A", "I can't find it. Oh, we're out!", "找不到。喔，用完了！"],
        ["B", "OK, I'll buy some today.", "好，我今天去買。"]
      ]
    },
    inter: {
      v: [
        ["detergent", "洗衣精", "Use less detergent for small loads."],
        ["extension cord", "延長線", "Plug the lamp into the extension cord."],
        ["ironing board", "燙衣板", "Set up the ironing board in the bedroom."],
        ["drying rack", "曬衣架", "Hang the shirts on the drying rack."],
        ["first aid kit", "急救箱", "Keep a first aid kit in the kitchen."],
        ["batteries", "電池", "The remote needs new batteries."]
      ],
      p: [
        ["The light bulb in the hallway burned out.", "走廊的燈泡燒壞了。"],
        ["Could you unplug the iron when you're done?", "用完可以把熨斗插頭拔掉嗎？"],
        ["The vacuum cleaner isn't picking anything up.", "吸塵器吸不起東西了。"]
      ],
      d: [
        ["A", "The washing machine is making a weird noise.", "洗衣機發出奇怪的聲音。"],
        ["B", "Did you leave something in your pockets?", "你口袋裡有留東西嗎？"],
        ["A", "Oh, a coin! That's probably it.", "喔，一枚硬幣！大概就是這個。"],
        ["B", "Take it out before it damages the drum.", "趁它還沒弄壞滾筒前拿出來。"]
      ]
    },
    adv: {
      v: [
        ["air purifier", "空氣清淨機", "An air purifier helps with allergies."],
        ["water filter", "濾水器", "Change the water filter every three months."],
        ["circuit breaker", "斷路器", "The circuit breaker tripped when we ran two heaters."],
        ["surge protector", "突波保護器", "Plug your computer into a surge protector."],
        ["warranty", "保固", "The fridge is still under warranty."],
        ["ergonomic", "符合人體工學的", "I bought an ergonomic office chair."]
      ],
      p: [
        ["It's more cost-effective to repair it than to replace it.", "修理比換新更划算。"],
        ["Look for appliances with a high energy-efficiency rating.", "挑選能源效率等級高的家電。"],
        ["Decluttering made our small apartment feel twice as big.", "斷捨離讓我們的小公寓感覺大了一倍。"]
      ],
      d: [
        ["A", "Our dryer keeps tripping the circuit breaker.", "我們的烘衣機一直讓斷路器跳掉。"],
        ["B", "It might be drawing too much current on a shared circuit.", "可能是共用迴路的電流太大。"],
        ["A", "Should we call an electrician or just replace it?", "要叫電工還是直接換掉？"],
        ["B", "Get it inspected first. It's still under warranty, so the repair might be free.", "先請人檢查。還在保固期內，維修可能免費。"]
      ]
    }
  },
  {
    id: "transport", icon: "🚇", zh: "行・交通", en: "Transportation",
    basic: {
      v: [
        ["bus", "公車", "I take the bus to school."],
        ["train", "火車", "The train leaves at nine."],
        ["ticket", "票", "I need a ticket to Taichung."],
        ["station", "車站", "Where is the train station?"],
        ["left", "左邊", "Turn left at the corner."],
        ["walk", "走路", "I walk to work every day."]
      ],
      p: [
        ["How do I get to the MRT station?", "捷運站怎麼走？"],
        ["Go straight and turn right.", "直走然後右轉。"],
        ["How long does it take?", "要花多久時間？"]
      ],
      d: [
        ["A", "Excuse me, how do I get to the train station?", "不好意思，火車站怎麼走？"],
        ["B", "Go straight and turn left at the bank.", "直走，在銀行那裡左轉。"],
        ["A", "How long does it take to walk there?", "走路過去要多久？"],
        ["B", "About ten minutes.", "大約十分鐘。"]
      ]
    },
    inter: {
      v: [
        ["commute", "通勤", "My commute takes about forty minutes."],
        ["transfer", "轉乘", "You need to transfer at Taipei Main Station."],
        ["delay", "延誤", "There's a delay because of the heavy rain."],
        ["rush hour", "尖峰時刻", "The MRT is crowded during rush hour."],
        ["fare", "車資", "The fare is thirty dollars."],
        ["traffic jam", "塞車", "Sorry I'm late. I got stuck in a traffic jam."]
      ],
      p: [
        ["Which platform does the train leave from?", "火車從哪個月台出發？"],
        ["I missed my stop.", "我坐過站了。"],
        ["Could you give me a ride?", "可以載我一程嗎？"]
      ],
      d: [
        ["A", "Sorry I'm late. I got stuck in a traffic jam.", "抱歉我遲到了，遇到塞車。"],
        ["B", "No worries. Rush hour is terrible around here.", "沒關係，這附近尖峰時刻很糟。"],
        ["A", "Next time I'll take the MRT, even if I have to transfer.", "下次我搭捷運，就算要轉乘也沒關係。"],
        ["B", "Good idea. It's usually faster.", "好主意，通常比較快。"]
      ]
    },
    adv: {
      v: [
        ["infrastructure", "基礎建設", "The government is investing in rail infrastructure."],
        ["congestion", "擁塞", "Congestion pricing could reduce traffic downtown."],
        ["emissions", "排放", "Electric buses cut carbon emissions."],
        ["autonomous", "自動駕駛的；自主的", "Autonomous vehicles are still being tested."],
        ["itinerary", "行程", "Let me send you our itinerary."],
        ["layover", "轉機停留", "We have a five-hour layover in Tokyo."]
      ],
      p: [
        ["Public transit should be the backbone of urban mobility.", "大眾運輸應該是都市交通的骨幹。"],
        ["Our flight was rerouted due to bad weather.", "我們的班機因天候不佳改道。"],
        ["It's not worth the hassle of driving downtown.", "開車進市區不值得那個麻煩。"]
      ],
      d: [
        ["A", "Do you think the city should introduce congestion pricing?", "你覺得城市該實施擁塞收費嗎？"],
        ["B", "In principle, yes. It would cut emissions and ease traffic.", "原則上贊成，能減少排放並紓解交通。"],
        ["A", "But wouldn't it hit low-income commuters the hardest?", "但這不是對低收入通勤族衝擊最大嗎？"],
        ["B", "That's why the revenue should be reinvested in public transit infrastructure.", "所以收入應該再投入大眾運輸的基礎建設。"]
      ]
    }
  },
  {
    // All words for this topic are in vocab-8.js.
    id: "airport", icon: "✈️", zh: "機場", en: "At the Airport",
    basic: {
      v: [],
      p: [
        ["Where is the check-in counter?", "報到櫃台在哪裡？"],
        ["Window or aisle?", "靠窗還是靠走道？"],
        ["Have a nice flight!", "祝你旅途愉快！"]
      ],
      d: [
        ["A", "Passport, please.", "請出示護照。"],
        ["B", "Here you are.", "在這裡。"],
        ["A", "Window or aisle?", "靠窗還是走道？"],
        ["B", "Window, please.", "靠窗，謝謝。"]
      ]
    },
    inter: {
      v: [],
      p: [
        ["I'd like to check in for my flight to Tokyo.", "我要辦理飛往東京班機的報到。"],
        ["How many bags can I check?", "我可以託運幾件行李？"],
        ["My luggage didn't arrive.", "我的行李沒有到。"]
      ],
      d: [
        ["A", "Do you have any bags to check?", "有行李要託運嗎？"],
        ["B", "Just this one. Is it overweight?", "只有這件，有超重嗎？"],
        ["A", "It's 24 kilos, so it's one kilo over the allowance.", "24 公斤，超過限額一公斤。"],
        ["B", "I'll move a few things to my carry-on.", "我把一些東西移到隨身行李。"]
      ]
    },
    adv: {
      v: [],
      p: [
        ["We've been rebooked on a later flight at no extra cost.", "我們被免費改到較晚的航班。"],
        ["Due to a ground stop, all departures are on hold.", "因地面停飛命令，所有離境航班暫停。"],
        ["I'd like to file a claim for my damaged suitcase.", "我想為損壞的行李箱提出索賠。"]
      ],
      d: [
        ["A", "Our flight is overbooked, and they're asking for volunteers.", "我們的班機超賣了，他們在徵求自願改票的人。"],
        ["B", "What's the compensation?", "賠償是什麼？"],
        ["A", "A 400-dollar voucher, a hotel night, and a seat on tomorrow's first flight.", "400 美元抵用券、一晚飯店，加上明天第一班的座位。"],
        ["B", "Tempting, but I have a connection in Singapore I can't miss.", "很誘人，但我在新加坡有一班不能錯過的轉機。"]
      ]
    }
  },
  {
    id: "education", icon: "📚", zh: "育・教育", en: "Education",
    basic: {
      v: [
        ["teacher", "老師", "My teacher is very kind."],
        ["homework", "作業", "I do my homework after dinner."],
        ["class", "課", "English class starts at eight."],
        ["learn", "學習", "I want to learn English."],
        ["test", "考試", "We have a math test tomorrow."],
        ["library", "圖書館", "Let's study in the library."]
      ],
      p: [
        ["Can you say that again, please?", "可以再說一次嗎？"],
        ["What does this word mean?", "這個字是什麼意思？"],
        ["How do you spell it?", "怎麼拼？"]
      ],
      d: [
        ["A", "What does \"delighted\" mean?", "「delighted」是什麼意思？"],
        ["B", "It means \"very happy.\"", "意思是「非常開心」。"],
        ["A", "How do you spell it?", "怎麼拼？"],
        ["B", "D-E-L-I-G-H-T-E-D.", "D-E-L-I-G-H-T-E-D。"]
      ]
    },
    inter: {
      v: [
        ["major", "主修", "My major is computer science."],
        ["scholarship", "獎學金", "She got a scholarship to study abroad."],
        ["deadline", "截止期限", "The deadline for the report is Friday."],
        ["semester", "學期", "This semester I'm taking five courses."],
        ["tuition", "學費", "Tuition is getting more expensive every year."],
        ["graduate", "畢業", "I will graduate next June."]
      ],
      p: [
        ["I'm cramming for my final exam.", "我在為期末考臨時抱佛腳。"],
        ["Could I get an extension on the assignment?", "作業可以延期嗎？"],
        ["What are you planning to do after you graduate?", "你畢業後打算做什麼？"]
      ],
      d: [
        ["A", "You look exhausted. Are you okay?", "你看起來好累，還好嗎？"],
        ["B", "I'm cramming for finals, and my paper deadline is tomorrow.", "我在準備期末考，報告明天就截止。"],
        ["A", "Why don't you ask the professor for an extension?", "何不跟教授申請延期？"],
        ["B", "Good idea. I'll email her right now.", "好主意，我現在就寄信給她。"]
      ]
    },
    adv: {
      v: [
        ["curriculum", "課程綱要", "The new curriculum emphasizes critical thinking."],
        ["rote learning", "死記硬背", "Rote learning alone does not build real understanding."],
        ["dissertation", "博士論文", "He is writing his dissertation on climate policy."],
        ["lifelong learning", "終身學習", "Lifelong learning is essential in a changing economy."],
        ["equity", "公平；平等", "Educational equity remains a major challenge."],
        ["pedagogy", "教學法", "Her pedagogy focuses on project-based learning."]
      ],
      p: [
        ["The system places too much emphasis on standardized testing.", "這個體制太過重視標準化考試。"],
        ["Students should be taught how to think, not what to think.", "應該教學生如何思考，而不是思考什麼。"],
        ["There's a growing gap between what schools teach and what employers need.", "學校所教與雇主所需之間的落差越來越大。"]
      ],
      d: [
        ["A", "Do you think the new curriculum is an improvement?", "你覺得新課綱有比較好嗎？"],
        ["B", "Partly. It moves away from rote learning, which is long overdue.", "部分是。它擺脫了死記硬背，這早該如此。"],
        ["A", "But teachers say they weren't given enough training to adapt.", "但老師們說他們沒有得到足夠的培訓來調整。"],
        ["B", "True. A reform is only as good as its implementation.", "沒錯，改革好不好，取決於執行。"]
      ]
    }
  },
  {
    id: "fun", icon: "🎬", zh: "樂・娛樂休閒", en: "Entertainment & Leisure",
    basic: {
      v: [
        ["movie", "電影", "Let's watch a movie tonight."],
        ["music", "音樂", "I listen to music every day."],
        ["game", "遊戲；比賽", "My brother plays video games."],
        ["weekend", "週末", "What do you do on the weekend?"],
        ["fun", "好玩的", "The party was really fun."],
        ["favorite", "最喜歡的", "My favorite food is dumplings."]
      ],
      p: [
        ["What do you like to do for fun?", "你平常喜歡做什麼休閒活動？"],
        ["Do you want to go to the movies?", "要不要去看電影？"],
        ["That sounds great!", "聽起來很棒！"]
      ],
      d: [
        ["A", "What are you doing this weekend?", "你這週末要做什麼？"],
        ["B", "Nothing much. Do you want to go to the movies?", "沒什麼事。要不要去看電影？"],
        ["A", "That sounds great! What do you want to see?", "聽起來很棒！你想看什麼？"],
        ["B", "How about the new animated movie?", "那部新的動畫片怎麼樣？"]
      ]
    },
    inter: {
      v: [
        ["concert", "演唱會", "We got tickets for the concert."],
        ["binge-watch", "追劇；一口氣看完", "I binge-watch dramas on weekends."],
        ["hobby", "嗜好", "Photography is my hobby."],
        ["spoiler", "劇透", "No spoilers, please! I haven't seen it yet."],
        ["streaming", "串流", "Streaming services have changed how we watch TV."],
        ["sold out", "售完", "The tickets were sold out in minutes."]
      ],
      p: [
        ["Have you seen the latest episode?", "你看了最新一集嗎？"],
        ["I'm not really into horror movies.", "我不太喜歡恐怖片。"],
        ["It was a total waste of time.", "完全浪費時間。"]
      ],
      d: [
        ["A", "Have you seen the latest episode?", "你看了最新一集嗎？"],
        ["B", "Not yet! No spoilers, please.", "還沒！拜託不要劇透。"],
        ["A", "Okay, okay. But you have to watch it tonight.", "好啦好啦，不過你今晚一定要看。"],
        ["B", "I'll probably binge-watch the rest of the season.", "我大概會把這季剩下的一口氣看完。"]
      ]
    },
    adv: {
      v: [
        ["plot twist", "劇情轉折", "The plot twist at the end caught everyone off guard."],
        ["critically acclaimed", "廣受好評的", "It's a critically acclaimed indie film."],
        ["immersive", "沉浸式的", "The museum offers an immersive art experience."],
        ["mainstream", "主流的", "Her music has finally gone mainstream."],
        ["nostalgic", "懷舊的", "The soundtrack makes me feel nostalgic."],
        ["escapism", "逃避現實", "Fantasy novels offer a form of escapism."]
      ],
      p: [
        ["It didn't live up to the hype.", "不如宣傳的那麼好。"],
        ["The cinematography was breathtaking, but the pacing dragged.", "攝影美得驚人，但節奏拖沓。"],
        ["It's the kind of film that stays with you long after the credits roll.", "那是片尾字幕跑完後仍讓你久久難忘的電影。"]
      ],
      d: [
        ["A", "So, was the film as good as the reviews said?", "所以那部電影有像評論說的那麼好嗎？"],
        ["B", "Honestly, it didn't quite live up to the hype.", "老實說，不太符合期待。"],
        ["A", "Really? It's so critically acclaimed.", "真的嗎？它可是廣受好評耶。"],
        ["B", "The visuals were immersive, but the plot twist felt forced.", "視覺很有沉浸感，但劇情轉折感覺很牽強。"]
      ]
    }
  },
  {
    id: "family", icon: "👨‍👩‍👧", zh: "家庭生活", en: "Family & Daily Life",
    basic: {
      v: [
        ["family", "家人；家庭", "I have a big family."],
        ["parents", "父母", "My parents live in Tainan."],
        ["brother", "兄弟", "My brother is ten years old."],
        ["cook", "煮飯", "My dad cooks dinner on Sundays."],
        ["together", "一起", "We eat dinner together every night."],
        ["love", "愛", "I love my family."]
      ],
      p: [
        ["How many people are in your family?", "你家有幾個人？"],
        ["I'm the oldest child.", "我是家裡的老大。"],
        ["Good night, Mom.", "媽，晚安。"]
      ],
      d: [
        ["A", "How many people are in your family?", "你家有幾個人？"],
        ["B", "Five. My parents, my two brothers, and me.", "五個。我爸媽、兩個哥哥和我。"],
        ["A", "Are you the youngest?", "你是最小的嗎？"],
        ["B", "Yes, I am. What about you?", "是的。那你呢？"]
      ]
    },
    inter: {
      v: [
        ["chores", "家事", "We share the chores at home."],
        ["relatives", "親戚", "We visit our relatives during Chinese New Year."],
        ["raise", "撫養", "My grandparents helped raise me."],
        ["get along", "相處融洽", "I get along well with my sister."],
        ["argue", "爭吵", "My brothers often argue about small things."],
        ["reunion", "團聚", "We have a family reunion every summer."]
      ],
      p: [
        ["Whose turn is it to do the dishes?", "輪到誰洗碗？"],
        ["We're having a family reunion this weekend.", "我們這週末有家族聚會。"],
        ["My mom is always nagging me to clean my room.", "我媽老是唸我要整理房間。"]
      ],
      d: [
        ["A", "Whose turn is it to do the dishes?", "輪到誰洗碗了？"],
        ["B", "Yours! I did them last night.", "你啊！我昨晚洗過了。"],
        ["A", "Fine. Can you take out the trash, then?", "好吧。那你可以去倒垃圾嗎？"],
        ["B", "Deal. Let's finish the chores before Mom gets home.", "成交。媽回來前把家事做完吧。"]
      ]
    },
    adv: {
      v: [
        ["generation gap", "代溝", "There's a generation gap between my grandparents and me."],
        ["work-life balance", "工作與生活平衡", "Finding a healthy work-life balance is hard for new parents."],
        ["upbringing", "教養；成長背景", "Her strict upbringing shaped her work ethic."],
        ["elderly care", "長照", "Elderly care is a growing concern in an aging society."],
        ["filial piety", "孝道", "Filial piety is a core value in many Asian cultures."],
        ["dynamics", "互動關係", "Family dynamics change when a new baby arrives."]
      ],
      p: [
        ["We don't always see eye to eye, but we respect each other.", "我們意見不總是一致，但彼此尊重。"],
        ["Juggling a career and raising kids is exhausting.", "兼顧事業和養小孩讓人筋疲力盡。"],
        ["Blood is thicker than water.", "血濃於水。"]
      ],
      d: [
        ["A", "How are you managing now that your father needs full-time care?", "你父親需要全天照顧，你現在怎麼應付？"],
        ["B", "It's tough. Juggling work and elderly care is draining.", "很辛苦，同時兼顧工作和長照很耗人。"],
        ["A", "Have you looked into government long-term care services?", "你有研究過政府的長照服務嗎？"],
        ["B", "Yes, we're applying. My siblings and I don't always see eye to eye, but we're in this together.", "有，正在申請。我和兄弟姊妹意見不總是一致，但我們同舟共濟。"]
      ]
    }
  },
  {
    id: "friends", icon: "💬", zh: "朋友談話", en: "Talking with Friends",
    basic: {
      v: [
        ["friend", "朋友", "She is my best friend."],
        ["meet", "見面；認識", "Nice to meet you!"],
        ["name", "名字", "What's your name?"],
        ["free", "有空的", "Are you free tomorrow?"],
        ["call", "打電話", "I'll call you later."],
        ["happy", "開心的", "I'm happy to see you."]
      ],
      p: [
        ["How are you doing?", "你好嗎？"],
        ["Long time no see!", "好久不見！"],
        ["See you later!", "待會見！"]
      ],
      d: [
        ["A", "Hey, long time no see! How are you doing?", "嘿，好久不見！你好嗎？"],
        ["B", "I'm great, thanks! And you?", "我很好，謝謝！你呢？"],
        ["A", "Pretty good. Are you free tomorrow?", "還不錯。你明天有空嗎？"],
        ["B", "Yes! Let's have lunch together.", "有！我們一起吃午餐吧。"]
      ]
    },
    inter: {
      v: [
        ["catch up", "敘舊", "Let's grab coffee and catch up."],
        ["hang out", "出去玩；一起混", "We usually hang out at the park."],
        ["invite", "邀請", "I'd like to invite you to my party."],
        ["text", "傳訊息", "Text me when you get home."],
        ["plans", "計畫", "Do you have any plans this weekend?"],
        ["cancel", "取消", "Sorry, I have to cancel tonight."]
      ],
      p: [
        ["What have you been up to?", "你最近在忙什麼？"],
        ["I'll take a rain check.", "這次先不了，改天吧。"],
        ["Just kidding!", "開玩笑的啦！"]
      ],
      d: [
        ["A", "Hey! What have you been up to?", "嘿！你最近在忙什麼？"],
        ["B", "Work, mostly. We should hang out sometime.", "大多在忙工作。我們找時間出去玩吧。"],
        ["A", "Do you have any plans this Saturday?", "你這週六有什麼計畫嗎？"],
        ["B", "Nope. Let's grab dinner and catch up. I'll text you.", "沒有。一起吃晚餐敘敘舊吧，我再傳訊息給你。"]
      ]
    },
    adv: {
      v: [
        ["small talk", "閒聊", "I'm not great at small talk."],
        ["drift apart", "漸行漸遠", "Many friends drift apart after college."],
        ["confide in", "向…吐露心事", "I can always confide in her."],
        ["reconnect", "重新聯繫", "Social media helped me reconnect with old classmates."],
        ["tactful", "圓滑的；得體的", "Try to be tactful when you give feedback."],
        ["banter", "打趣；說笑", "Their friendly banter made everyone laugh."]
      ],
      p: [
        ["I didn't mean to step on your toes.", "我不是故意冒犯你的。"],
        ["Let's agree to disagree.", "我們就各自保留意見吧。"],
        ["You can count on me.", "你可以依靠我。"]
      ],
      d: [
        ["A", "I feel like we've drifted apart since you moved.", "感覺你搬家後我們漸行漸遠了。"],
        ["B", "I know, and I'm sorry. I've been overwhelmed with the new job.", "我知道，對不起。我被新工作壓得喘不過氣。"],
        ["A", "I get it. I just miss having someone to confide in.", "我懂，只是很懷念有人可以說心事。"],
        ["B", "Let's make it a point to call every Sunday. You can count on me.", "我們每週日固定通電話吧，你可以依靠我。"]
      ]
    }
  },
  {
    id: "work", icon: "💼", zh: "工作職場", en: "Work & Career",
    basic: {
      v: [
        ["job", "工作", "I have a new job."],
        ["office", "辦公室", "My office is on the fifth floor."],
        ["boss", "老闆；上司", "My boss is very busy."],
        ["meeting", "會議", "We have a meeting at ten."],
        ["email", "電子郵件", "I'll send you an email."],
        ["work", "工作", "I work from nine to six."]
      ],
      p: [
        ["What do you do?", "你做什麼工作？"],
        ["I work in marketing.", "我從事行銷工作。"],
        ["Nice to work with you.", "很高興和你共事。"]
      ],
      d: [
        ["A", "Hi, I'm Amy. I'm new here.", "嗨，我是 Amy，我是新來的。"],
        ["B", "Welcome! I'm Ken. I work in marketing.", "歡迎！我是 Ken，我在行銷部。"],
        ["A", "Nice to work with you. Where is the meeting room?", "很高興和你共事。會議室在哪裡？"],
        ["B", "It's next to the boss's office. Follow me.", "在老闆辦公室旁邊，跟我來。"]
      ]
    },
    inter: {
      v: [
        ["colleague", "同事", "My colleague helped me with the report."],
        ["schedule", "安排時程", "Let's schedule a meeting for Monday."],
        ["interview", "面試", "I have a job interview tomorrow."],
        ["salary", "薪水", "The salary is better than at my last job."],
        ["overtime", "加班", "I had to work overtime last night."],
        ["promotion", "升遷", "She got a promotion last month."]
      ],
      p: [
        ["Let me get back to you on that.", "這件事我再回覆你。"],
        ["Could you walk me through the process?", "可以帶我了解一下流程嗎？"],
        ["I'm swamped with work this week.", "我這週工作忙翻了。"]
      ],
      d: [
        ["A", "Do you have time to review my report today?", "你今天有空看我的報告嗎？"],
        ["B", "Sorry, I'm swamped this week. Can we schedule it for Monday?", "抱歉，我這週忙翻了。可以排在週一嗎？"],
        ["A", "Sure. Could you also walk me through the new process?", "好。你也可以順便帶我了解新流程嗎？"],
        ["B", "Of course. Let me get back to you with a time.", "當然，我再回覆你時間。"]
      ]
    },
    adv: {
      v: [
        ["negotiate", "談判；協商", "We need to negotiate a better contract."],
        ["stakeholder", "利害關係人", "We must keep every stakeholder informed."],
        ["burnout", "職業倦怠", "Long hours can lead to burnout."],
        ["leverage", "善用；槓桿", "We can leverage our data to improve sales."],
        ["remote work", "遠距工作", "Remote work has become the norm in tech."],
        ["deliverable", "交付成果", "The key deliverable is a working prototype."]
      ],
      p: [
        ["Let's circle back to this after the meeting.", "會後再回頭討論這個。"],
        ["We need to align on priorities before moving forward.", "推進之前我們需要先對齊優先順序。"],
        ["I'd like to push back on that timeline.", "我想對那個時程提出異議。"]
      ],
      d: [
        ["A", "The client wants the deliverable two weeks earlier.", "客戶希望交付成果提早兩週。"],
        ["B", "I'd like to push back on that. The team is already close to burnout.", "我想提出異議，團隊已經快要過勞了。"],
        ["A", "Fair point. Could we negotiate a phased delivery instead?", "有道理。我們可以改談分階段交付嗎？"],
        ["B", "Good idea. Let's align with the stakeholders before we commit.", "好主意，承諾之前先跟利害關係人取得共識。"]
      ]
    }
  },
  {
    id: "overseas", icon: "✈️", zh: "海外工作", en: "Working Abroad",
    basic: {
      v: [
        ["visa", "簽證", "I need a visa to work in Japan."],
        ["passport", "護照", "Don't forget your passport."],
        ["abroad", "在國外", "I want to work abroad."],
        ["foreign", "外國的", "She works for a foreign company."],
        ["language", "語言", "Learning the language helps a lot."],
        ["homesick", "想家的", "I feel homesick sometimes."]
      ],
      p: [
        ["Where are you from?", "你從哪裡來？"],
        ["I'm here on a work visa.", "我持工作簽證在這裡。"],
        ["Could you speak more slowly, please?", "可以請你說慢一點嗎？"]
      ],
      d: [
        ["A", "Welcome to the team! Where are you from?", "歡迎加入團隊！你從哪裡來？"],
        ["B", "I'm from Taiwan. I just arrived last week.", "我來自台灣，上週剛到。"],
        ["A", "How are you settling in?", "適應得怎麼樣？"],
        ["B", "Pretty well, but I feel a little homesick.", "還不錯，不過有點想家。"]
      ]
    },
    inter: {
      v: [
        ["work permit", "工作許可", "My work permit is valid for two years."],
        ["relocate", "調派；搬遷", "The company will relocate me to Singapore."],
        ["culture shock", "文化衝擊", "I had culture shock during my first month."],
        ["adapt", "適應", "It took me a while to adapt to the weather."],
        ["cost of living", "生活開銷", "The cost of living in London is very high."],
        ["residence", "居留", "I applied for a residence card."]
      ],
      p: [
        ["How long does it take to process the visa?", "簽證要多久才能辦好？"],
        ["Do I need to open a local bank account?", "我需要開當地的銀行帳戶嗎？"],
        ["I'm still getting used to the work culture here.", "我還在適應這裡的職場文化。"]
      ],
      d: [
        ["A", "How's life in Germany so far?", "目前在德國生活如何？"],
        ["B", "Good, but I'm still getting used to the work culture.", "不錯，但還在適應這裡的職場文化。"],
        ["A", "What's the biggest difference?", "最大的差異是什麼？"],
        ["B", "People here are very direct, and nobody works overtime.", "這裡的人說話很直接，而且沒人加班。"]
      ]
    },
    adv: {
      v: [
        ["expatriate", "外派人員；旅居者", "The expatriate community here is very active."],
        ["cross-cultural", "跨文化的", "Cross-cultural communication takes practice."],
        ["assimilate", "同化；融入", "Some newcomers assimilate faster than others."],
        ["global mobility", "全球人才流動", "Our global mobility team handles relocations."],
        ["tax residency", "稅務居民身分", "Check your tax residency before you move."],
        ["repatriation", "返國；調回母國", "Repatriation can be harder than leaving."]
      ],
      p: [
        ["My credentials aren't recognized here, so I had to get recertified.", "我的資格在這裡不被承認，所以得重新認證。"],
        ["Working abroad has broadened my perspective.", "海外工作開闊了我的視野。"],
        ["Reverse culture shock hit me harder than I expected.", "逆向文化衝擊比我預期的還強烈。"]
      ],
      d: [
        ["A", "Are you planning to extend your assignment abroad?", "你打算延長外派嗎？"],
        ["B", "I'm torn. The career growth is great, but my parents are getting older.", "很掙扎。職涯發展很好，但父母年紀越來越大。"],
        ["A", "Have you talked to HR about repatriation options?", "你跟人資談過調回的選項嗎？"],
        ["B", "Yes. They'll try to find me a regional role based in Taipei.", "談過，他們會試著幫我找駐台北的區域職位。"]
      ]
    }
  },
  {
    // All words for this topic are in vocab-8.js.
    id: "tech", icon: "💻", zh: "科技", en: "Technology",
    basic: {
      v: [],
      p: [
        ["What's the Wi-Fi password?", "Wi-Fi 密碼是什麼？"],
        ["My phone is dead.", "我的手機沒電了。"],
        ["Can you send me the link?", "可以把連結傳給我嗎？"]
      ],
      d: [
        ["A", "My computer is so slow.", "我的電腦好慢。"],
        ["B", "Did you try turning it off and on again?", "你試過重新開機嗎？"],
        ["A", "No. Let me try... Oh, it works now!", "沒有，我試試……喔，現在可以了！"],
        ["B", "Great!", "太好了！"]
      ]
    },
    inter: {
      v: [],
      p: [
        ["Have you tried restarting it?", "你試過重新啟動嗎？"],
        ["My phone keeps freezing.", "我的手機一直卡住。"],
        ["Can you send me a screenshot of the error?", "可以把錯誤畫面截圖給我嗎？"]
      ],
      d: [
        ["A", "I can't log in. It says my password is wrong.", "我登不進去，它說密碼錯誤。"],
        ["B", "Did you turn on two-factor authentication?", "你有開雙重驗證嗎？"],
        ["A", "Yes, but I didn't get a verification code.", "有，但我沒收到驗證碼。"],
        ["B", "Check your spam folder, or try the authenticator app.", "看看垃圾郵件匣，或試試驗證器 App。"]
      ]
    },
    adv: {
      v: [],
      p: [
        ["The update patched a critical security vulnerability.", "這次更新修補了一個嚴重的安全漏洞。"],
        ["We need to scale our infrastructure before the launch.", "上線前我們需要擴充基礎架構。"],
        ["AI should augment human judgment, not replace it.", "AI 應該輔助人類判斷，而不是取代它。"]
      ],
      d: [
        ["A", "Should we use a large language model for customer support?", "客服要用大型語言模型嗎？"],
        ["B", "It could cut costs, but we'd need safeguards against wrong answers.", "可以降低成本，但需要防止錯誤回答的機制。"],
        ["A", "And data privacy. Customers share sensitive information.", "還有資料隱私，客戶會分享敏感資訊。"],
        ["B", "Right. Let's run a small pilot and review every response first.", "對。先小規模試行，並先審查每一則回覆。"]
      ]
    }
  },
  {
    id: "sports", icon: "⚽", zh: "運動", en: "Sports & Fitness",
    basic: {
      v: [
        ["soccer", "足球", "Do you play soccer?"],
        ["run", "跑步", "I run in the park every morning."],
        ["swim", "游泳", "I can swim very well."],
        ["team", "隊伍", "Our team won the game."],
        ["ball", "球", "Throw me the ball!"],
        ["exercise", "運動", "Exercise is good for your health."]
      ],
      p: [
        ["Let's play basketball after school.", "放學後去打籃球吧。"],
        ["Who won the game?", "誰贏了比賽？"],
        ["I'm tired. Let's take a break.", "我累了，休息一下吧。"]
      ],
      d: [
        ["A", "Do you want to play basketball after school?", "放學後要不要打籃球？"],
        ["B", "Sure! Can my brother join us?", "好啊！我弟可以一起嗎？"],
        ["A", "Of course. We need one more player for our team.", "當然，我們隊上正好缺一個人。"],
        ["B", "Great. See you at the court!", "太好了，球場見！"]
      ]
    },
    inter: {
      v: [
        ["work out", "健身", "I work out at the gym three times a week."],
        ["tournament", "錦標賽", "Our school won the baseball tournament."],
        ["coach", "教練", "Our coach is very strict."],
        ["injury", "受傷", "He missed the season because of an injury."],
        ["score", "比分；得分", "What's the score?"],
        ["stretch", "伸展", "Always stretch before you run."]
      ],
      p: [
        ["Who are you rooting for?", "你支持哪一隊？"],
        ["It was a close game.", "比賽很接近。"],
        ["I pulled a muscle.", "我拉傷肌肉了。"]
      ],
      d: [
        ["A", "Did you watch the game last night?", "你昨晚有看比賽嗎？"],
        ["B", "Yes! It was a close game. What was the final score?", "有！比賽好接近。最後比分是多少？"],
        ["A", "Five to four. Who were you rooting for?", "五比四。你支持哪一隊？"],
        ["B", "The home team, of course!", "當然是主隊啊！"]
      ]
    },
    adv: {
      v: [
        ["endurance", "耐力", "Marathons test your endurance."],
        ["underdog", "弱勢的一方；黑馬", "Everyone loves to cheer for the underdog."],
        ["doping", "使用禁藥", "The athlete was banned for doping."],
        ["comeback", "逆轉；東山再起", "The team made an incredible comeback in the ninth inning."],
        ["sportsmanship", "運動家精神", "Good sportsmanship matters more than winning."],
        ["dominate", "主宰；壓制", "They dominate the league every year."]
      ],
      p: [
        ["They pulled off a stunning upset.", "他們爆出驚人冷門。"],
        ["It's anyone's game at this point.", "現在鹿死誰手還不知道。"],
        ["She's at the top of her game.", "她正處於巔峰狀態。"]
      ],
      d: [
        ["A", "Can you believe that comeback in the final?", "你能相信決賽那場逆轉嗎？"],
        ["B", "Unreal. Nobody expected the underdog to pull off an upset.", "太扯了，沒人想到黑馬會爆冷。"],
        ["A", "Their endurance in the last quarter was remarkable.", "他們最後一節的耐力驚人。"],
        ["B", "And the way they shook hands afterward showed real sportsmanship.", "賽後握手的樣子也展現了真正的運動家精神。"]
      ]
    }
  },
  {
    id: "politics", icon: "🏛️", zh: "政治", en: "Politics & Society",
    basic: {
      v: [
        ["vote", "投票", "I will vote on Saturday."],
        ["president", "總統", "The president gave a speech."],
        ["government", "政府", "The government built a new park."],
        ["law", "法律", "Everyone must follow the law."],
        ["country", "國家", "My country has many mountains."],
        ["election", "選舉", "The election is next month."]
      ],
      p: [
        ["Are you going to vote?", "你會去投票嗎？"],
        ["I think it's a good idea.", "我覺得這是個好主意。"],
        ["I don't agree.", "我不同意。"]
      ],
      d: [
        ["A", "The election is next Saturday.", "選舉是下週六。"],
        ["B", "Are you going to vote?", "你會去投票嗎？"],
        ["A", "Yes. It's my first time!", "會啊，這是我第一次投票！"],
        ["B", "That's great. Every vote counts.", "太棒了，每一票都很重要。"]
      ]
    },
    inter: {
      v: [
        ["candidate", "候選人", "Which candidate do you support?"],
        ["policy", "政策", "The new policy helps young families."],
        ["tax", "稅", "The government plans to raise taxes."],
        ["campaign", "競選活動", "The campaign starts in July."],
        ["debate", "辯論", "Did you watch the debate last night?"],
        ["protest", "抗議", "Thousands of people joined the protest."]
      ],
      p: [
        ["What's your stance on this issue?", "你對這個議題的立場是什麼？"],
        ["It's a controversial topic.", "這是有爭議的話題。"],
        ["I see your point, but...", "我懂你的意思，但是…"]
      ],
      d: [
        ["A", "Did you watch the debate last night?", "你昨晚有看辯論嗎？"],
        ["B", "I did. What's your stance on the new housing policy?", "有。你對新的住宅政策立場如何？"],
        ["A", "I support it. Young people need help with rent.", "我支持，年輕人需要租屋補助。"],
        ["B", "I see your point, but I worry about raising taxes.", "我懂你的意思，但我擔心會加稅。"]
      ]
    },
    adv: {
      v: [
        ["legislation", "立法；法規", "New legislation will protect online privacy."],
        ["bipartisan", "跨黨派的", "The climate bill received bipartisan support."],
        ["polarization", "兩極化", "Political polarization makes compromise difficult."],
        ["accountability", "問責；當責", "Voters demand accountability from their leaders."],
        ["grassroots", "草根的；基層的", "It started as a grassroots movement."],
        ["sovereignty", "主權", "The treaty respects each nation's sovereignty."]
      ],
      p: [
        ["The bill was watered down to win more votes.", "法案被稀釋以爭取更多票。"],
        ["Both sides need to find common ground.", "雙方需要找到共同點。"],
        ["That argument is a slippery slope.", "那個論點是滑坡謬誤。"]
      ],
      d: [
        ["A", "Polarization seems worse than ever. Can anything pass these days?", "兩極化似乎比以往更嚴重，現在還有法案過得了嗎？"],
        ["B", "Only bills that get watered down enough to win bipartisan support.", "只有被稀釋到能取得跨黨派支持的法案。"],
        ["A", "So grassroots pressure is the only real source of accountability?", "所以基層壓力是唯一真正的問責來源？"],
        ["B", "Largely, yes. Voters have to keep both sides honest.", "大致上是，選民得讓兩邊都誠實面對。"]
      ]
    }
  },
  {
    id: "news", icon: "📰", zh: "新聞時事", en: "News & Current Events",
    basic: {
      v: [
        ["news", "新聞", "I watch the news every night."],
        ["weather", "天氣", "The weather will be sunny tomorrow."],
        ["typhoon", "颱風", "A typhoon is coming this weekend."],
        ["happen", "發生", "What happened?"],
        ["fire", "火災", "There was a fire downtown last night."],
        ["earthquake", "地震", "Did you feel the earthquake?"]
      ],
      p: [
        ["Did you hear the news?", "你聽說那個新聞了嗎？"],
        ["What happened?", "發生什麼事了？"],
        ["Schools are closed because of the typhoon.", "學校因颱風停課。"]
      ],
      d: [
        ["A", "Did you hear the news? A typhoon is coming.", "你聽說了嗎？颱風要來了。"],
        ["B", "Really? When?", "真的嗎？什麼時候？"],
        ["A", "Tomorrow night. Schools will be closed.", "明天晚上，學校會停課。"],
        ["B", "I'd better buy some water and food today.", "我今天最好去買些水和食物。"]
      ]
    },
    inter: {
      v: [
        ["headline", "頭條", "The story made headlines around the world."],
        ["according to", "根據", "According to the police, no one was hurt."],
        ["reporter", "記者", "A reporter interviewed the mayor."],
        ["breaking news", "即時新聞", "This just in: breaking news from Hualien."],
        ["source", "消息來源", "Always check the source of a story."],
        ["update", "最新消息", "Here's the latest update on the storm."]
      ],
      p: [
        ["I read it online, but I'm not sure if it's true.", "我在網路上看到的，但不確定是否屬實。"],
        ["It's all over the news.", "新聞到處都在報。"],
        ["Let's fact-check that first.", "我們先查證一下吧。"]
      ],
      d: [
        ["A", "Did you see the headline about the power outage?", "你有看到停電的頭條嗎？"],
        ["B", "Yes, it's all over the news. What caused it?", "有，新聞到處都在報。原因是什麼？"],
        ["A", "According to one post, it was a cyberattack.", "根據某篇貼文，是網路攻擊。"],
        ["B", "Hmm, let's fact-check that. Is it from a reliable source?", "嗯，先查證一下，消息來源可靠嗎？"]
      ]
    },
    adv: {
      v: [
        ["misinformation", "錯誤資訊", "Misinformation spreads faster than the truth."],
        ["bias", "偏見；偏頗", "Every outlet has some degree of bias."],
        ["credible", "可信的", "Is this a credible source?"],
        ["clickbait", "標題黨；誘餌標題", "That headline is pure clickbait."],
        ["echo chamber", "同溫層", "Social media can trap us in an echo chamber."],
        ["unprecedented", "前所未有的", "The storm caused unprecedented damage."]
      ],
      p: [
        ["The quote was taken out of context.", "那句話被斷章取義了。"],
        ["Reports remain unconfirmed at this time.", "目前報導尚未證實。"],
        ["It's important to read news from a variety of sources.", "從多元管道閱讀新聞很重要。"]
      ],
      d: [
        ["A", "Have you noticed how every outlet frames the same story differently?", "你有注意到每家媒體對同一事件的框架都不同嗎？"],
        ["B", "Absolutely. Bias is unavoidable, but clickbait makes it worse.", "當然。偏頗難以避免，但標題黨讓情況更糟。"],
        ["A", "And algorithms keep feeding us what we already believe.", "而且演算法一直餵我們已經相信的東西。"],
        ["B", "Exactly. Breaking out of the echo chamber takes deliberate effort.", "沒錯，要走出同溫層得刻意努力。"]
      ]
    }
  }
];

// Extra vocabulary lives in vocab-*.js, one word per line: "word | 中文 | example sentence",
// optionally followed by "| emoji" to give the word a picture.
window.addVocab = function (id, more) {
  const tp = window.TOPICS.find((t) => t.id === id);
  if (!tp) return;
  const pics = (window.PICS = window.PICS || {});
  Object.keys(more).forEach((lv) => {
    const have = new Set(tp[lv].v.map((w) => w[0].toLowerCase()));
    more[lv].split("\n").map((l) => l.trim()).filter(Boolean).forEach((line) => {
      const w = line.split("|").map((s) => s.trim());
      if (w.length < 3 || have.has(w[0].toLowerCase())) return;
      tp[lv].v.push(w.slice(0, 3));
      have.add(w[0].toLowerCase());
      if (w[3]) pics[id] = (pics[id] ? pics[id] + "|" : "") + w[0] + ":" + w[3];
    });
  });
};
