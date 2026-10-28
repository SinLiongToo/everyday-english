// Pictures for intermediate and advanced words, merged into PICS.
// Format: word:emoji, separated by "|" or new lines.
(function () {
  const more = {
    food: `
      appetizer:🥗|reservation:📅|vegetarian:🥬|spicy:🌶️|leftovers:🥡|recommend:👍|ingredient:🧺|recipe:📒
      portion:🍛|flavor:🍨|takeout:🥡|buffet:🍱|beverage:🍹|grilled:🍢|fried:🍤|steamed:🥟|raw:🍣|fresh:🌿
      frozen:🧊|organic:🌱|diet:🥗|calories:🔥|nutrition:🥦|seasoning:🧂|side dish:🥬|specialty:⭐
      street food:🍢|night market:🏮|refill:🔄|tip:💵|waiter:🤵|crispy:🥠|bland:😐|dumpling:🥟|sauce:🥫
      broth:🍲|cafeteria:🍽️|bakery:🥐|grocery store:🛒|supermarket:🛒|convenience store:🏪|lunchbox:🍱
      bubble tea:🧋|craving:🤤|hot pot:🍲|barbecue:🍖|microwave:📟|boil:♨️|fry:🍳|chop:🔪|mix:🥣|bake:🧁
      oven:♨️|expired:📆|gluten-free:🌾|allergy:🤧|dairy:🥛|seafood:🦀|tofu:🧈|brunch:🥞|set meal:🍱
      to go:🛍️|self-service:🙋|tasty:😋|overcooked:🔥|juicy:🥭
      palate:👅|savory:🥨|culinary:👨‍🍳|indulge:🍫|sustainable:♻️|acquired taste:🧀|gourmet:🍽️|cuisine:🌏
      connoisseur:🧐|aroma:👃|texture:🧋|umami:🍄|garnish:🌿|marinate:🥩|ferment:🫙|simmer:🍲|artisanal:🥖
      farm-to-table:🚜|food security:🌾|food waste:🗑️|processed food:🌭|additive:🧪|moderation:⚖️
      palatable:😋|succulent:🍖|decadent:🍫|delicacy:🦪|fusion:🍣|michelin-starred:⭐|appetite:🍽️
      wholesome:🥗|sommelier:🍷|gluttony:🐷|caramelize:🍮|emulsify:🥣|braise:🥘|infuse:🫖|zest:🍋
      tangy:🍋|pungent:👃|velvety:🥣|charred:🔥|bittersweet:🍫|tasting menu:📜|pairing:🍷|provenance:📍
      foraging:🍄|plant-based:🌱|lab-grown:🧫|malnutrition:⚠️|obesity:⚖️|fermentation:🫙|gastronomy:🍽️
      epicurean:🍷|famished:😫|scrumptious:😋|overrated:👎|mouthwatering:🤤|condiment:🧂|staple:🍚
      perishable:⏳|shelf life:📆|food chain:🔗|agribusiness:🚜|fine dining:🍷|comfort food:🍜`,
    clothing: `
      outfit:👗|casual:👕|fit:📐|refund:💸|on sale:🏷️|match:🎨|accessories:👜|jewelry:💎|necklace:📿
      sleeve:👕|collar:👔|zipper:🤐|fabric:🧵|cotton:☁️|wool:🐑|leather:👞|stain:💧|laundry:🧺|iron:👔
      fold:🗂️|hanger:🪝|loose:👘|tight:🤏|comfortable:😌|formal:🤵|stylish:😎|brand:™️|receipt:🧾
      discount:🏷️|out of stock:🚫|alter:✂️|sneakers:👟|suit:🕴️|blouse:👚|vest:🦺|hoodie:🧥|blazer:🧥
      cardigan:🧶|heels:👠|silk:🐛|denim:👖|polyester:🧪|pattern:🔶|striped:➖|plaid:🟥|plain:⬜|hem:🧵
      shrink:📉|fade:🌫️|wrinkle:〰️|dry clean:🧼|return:↩️|exchange:🔄|fashionable:💃|trendy:🔥|outlet:🏬
      checkout:🛒|cashier:💁|in stock:✅|waterproof:☔|breathable:🌬️|lightweight:🪶|dress code:📋
      custom-made:📏|oversized:🐻|designer:✏️
      tailored:✂️|fast fashion:⚡|understated:🤫|versatile:🔁|secondhand:♻️|trendsetter:🌟|wardrobe:🚪
      silhouette:👤|couture:🪡|minimalist:◻️|statement piece:💥|eco-friendly:🌿|textile:🧵|garment:👗
      ethical:⚖️|sweatshop:🏭|vintage:🕰️|timeless:♾️|accessorize:👜|flattering:🪞|garish:🦚|frumpy:😩
      impeccable:💯|dapper:🎩|monochrome:⚫|embroidery:🪡|upcycle:♻️|streetwear:🧢|athleisure:🧘
      durable:💪|counterfeit:🚫|fashion-forward:🚀|label:🏷️|haute couture:👑|bespoke:📏|drape:🌊
      tailoring:✂️|sartorial:🎩|ensemble:👗|runway:🚶|collection:🗂️|muse:✨|heritage brand:🏛️|luxury:💎
      knockoff:🎭|microtrend:📱|overconsumption:🛍️|landfill:🗑️|traceability:🔎|supply chain:🔗
      synthetic:🧪|biodegradable:🌱|dye:🎨|artisan:🧑‍🎨|craftsmanship:🛠️|effortless:😌|chic:💅
      eclectic:🎨|androgynous:⚧️|gender-neutral:⚧️|resale:💱|rental:🔁|proportion:📐|layering:🧅
      signature:✍️|embellishment:✨`,
    housing: `
      landlord:🧑‍💼|lease:📝|utilities:🔌|furnished:🛋️|move in:📦|deposit:💰|tenant:🧑|roommate:👯
      studio:🏠|balcony:🌇|elevator:🛗|basement:⬇️|storage:📦|appliance:🔌|air conditioner:❄️|heater:🔥
      plumber:🔧|repair:🛠️|maintenance:🧰|leak:💧|cockroach:🪳|garbage:🗑️|recycling:♻️|security guard:💂
      neighborhood:🏘️|convenient:👍|spacious:↔️|cozy:☕|decorate:🎀|move out:🚚|real estate agent:🧑‍💼
      view:🌅|pest:🐜|internet:🌐|rental:🔑|utility bill:🧾|electricity:⚡|gas:🔥|plumbing:🚰|wiring:🔌
      mold:🦠|humid:💦|dehumidifier:💧|lock:🔒|doorbell:🔔|intercom:📞|parking space:🅿️
      management fee:💵|renovation:🛠️|furniture:🪑|layout:📐|square meters:📏|facing south:🧭
      sunlight:☀️|soundproof:🔇|renew:🔄|notice:📢|inspection:🔍|share a flat:👥|hallway:🚪|built-in:🧱
      tidy:✨|dust:🌫️|vacuum:🧹|laundry room:🧺|wear and tear:🩹
      mortgage:🏦|down payment:💰|renovate:🛠️|gentrification:🏙️|affordable:💲|zoning:🗺️|property:🏠
      homeowner:🔑|appraisal:📋|listing:📄|floor plan:📐|interest rate:📈|foreclosure:🔨|eviction:🚪
      rent control:🎛️|housing bubble:🫧|urban sprawl:🌆|social housing:🏢|homelessness:⛺|sublet:🔁
      amenities:🏊|ventilation:🌬️|insulation:🧱|feng shui:☯️|curb appeal:🏡|fixer-upper:🔨|downsize:📉
      suburb:🏘️|high-rise:🏙️|condominium:🏢|co-living:👥|smart home:📱|title deed:📜|real estate:🏘️
      speculation:🎲|vacancy rate:🏚️|housing affordability:💸|price-to-income ratio:📊|home equity:💰
      refinance:🔄|collateral:🔐|closing costs:🧾|escrow:🤝|property tax:🧾|urban renewal:🏗️
      redevelopment:🏗️|seismic retrofit:🏚️|building code:📘|density:🏙️|mixed-use:🏬|green building:🌿
      energy-efficient:🔋|solar panels:☀️|homeowners association:👥|communal:🤝|bylaws:📜
      short-term rental:🧳|displacement:🚚|squatter:⛺|rent burden:🏋️|homeownership:🔑|tiny house:🛖
      eminent domain:🏛️|appreciate:📈|depreciate:📉|aging building:🏚️`,
    household: `
      detergent:🧴|extension cord:🔌|ironing board:👔|drying rack:👕|first aid kit:🩹|batteries:🔋
      dish soap:🧼|bleach:🧪|fabric softener:🧸|stain remover:🧽|laundry bag:🧺|clothespin:📎|dryer:🌀
      lint roller:🐈|storage box:📦|hamper:🧺|cleaning cloth:🧽|rubber gloves:🧤|toilet brush:🚽
      plunger:🪠|air freshener:🌸|insect repellent:🦟|electric fly swatter:🦟|mousetrap:🐭
      food container:🥡|plastic wrap:🎞️|aluminum foil:🥈|thermos:☕|ladle:🥄|spatula:🍳|tongs:🥢
      peeler:🥕|grater:🧀|strainer:🍝|measuring cup:🥛|apron:🧑‍🍳|oven mitt:🧤|air fryer:🍟
      electric kettle:🫖|water dispenser:🚰|range hood:💨|freezer:🧊|power strip:🔌|plug:🔌|socket:🔌
      charger:🔋|adapter:🔌|smoke detector:🚨|fire extinguisher:🧯|toolbox:🧰|wrench:🔧|pliers:🛠️
      drill:🪛|screw:🔩|tape measure:📏|superglue:🧪|sewing kit:🪡|coat rack:🧥|shoe rack:👞
      bedsheet:🛏️|duvet:🛌|mattress:🛏️|pillowcase:🛌|blinds:🪟|nightlight:🌙|doorstop:🚪
      air purifier:🌬️|water filter:🚰|circuit breaker:⚡|surge protector:🛡️|warranty:📄|ergonomic:🪑
      induction cooktop:🍳|heat pump:♨️|water heater:🚿|tankless:🚿|smart plug:📱|robot vacuum:🤖
      voice assistant:🗣️|standby power:🔋|energy label:🏷️|wattage:💡|voltage:⚡|overload:⚠️
      short circuit:💥|grounding:🌍|gas leak:☠️|carbon monoxide:🚨|ventilation fan:🌀|caulk:🛁
      grout:🧱|sealant:🧴|upholstery:🛋️|stain-resistant:🛡️|hypoallergenic:🤧|dust mite:🦠
      antibacterial:🧼|non-stick:🍳|cast iron:🍳|stainless steel:🥄|bpa-free:🍼|disposable:🗑️
      reusable:♻️|compost bin:🌱|declutter:🧹|minimalism:◻️|storage solution:📦|space-saving:📐
      modular:🧩|flat-pack:📦|assemble:🔧|instruction manual:📖|troubleshoot:🔍|malfunction:⚠️
      spare part:⚙️|planned obsolescence:⏳|right to repair:🛠️|extended warranty:📑|trade-in:🔄
      e-waste:🔋|household chemicals:🧪|childproof:🔒|non-slip:🚿|grab bar:🦯|durability:💪
      maintenance schedule:📅|descale:🫖|limescale:🚰|aerator:🚰|ambient lighting:🕯️|dimmer:🎚️
      blackout curtains:🌑`,
    transport: `
      commute:🚆|transfer:🔀|delay:⏳|rush hour:👥|fare:💲|traffic jam:🚗|platform:🚉|departure:🛫
      arrival:🛬|one-way:➡️|round-trip:🔁|timetable:🕒|passenger:🧍|luggage:🧳|gate:🚪|boarding pass:🎫
      check in:✅|aisle seat:💺|route:🗺️|detour:↪️|intersection:➕|crosswalk:🚸|traffic light:🚦
      speed limit:🔢|parking lot:🅿️|gas station:⛽|license:🪪|accident:💥|fine:💸|pedestrian:🚶
      carpool:🚙|high-speed rail:🚄|shuttle:🚐|reserved seat:💺|non-reserved:🎫|express:🚅
      local train:🚃|terminal:🛫|security check:🛂|carry-on:🎒|baggage claim:🧳|window seat:🪟
      canceled:❌|on time:⏰|breakdown:⚠️|flat tire:🛞|tow:🚛|parking ticket:🎫|navigation:🧭|gps:📡
      u-turn:↩️|lane:🛣️|overtake:🏎️|honk:📯|roundabout:🔄|highway:🛣️|tunnel:🚇|ferry:⛴️|cruise:🛳️
      rental car:🚗|test drive:🚘|transit card:💳|top up:➕|exit:🚪|entrance:🚪|handrail:🤚
      infrastructure:🏗️|congestion:🚗|emissions:💨|autonomous:🤖|itinerary:🗓️|layover:⏳|mobility:🛴
      commuter:🧑‍💼|logistics:📦|freight:🚛|ridesharing:🚕|toll:💰|bottleneck:🍾|gridlock:🚦
      carbon footprint:👣|electric vehicle:🔋|charging station:🔌|subsidy:💵|jet lag:😵|turbulence:🌪️
      customs:🛃|red-eye flight:🌙|overbooked:📈|stranded:🏝️|punctual:⏱️|walkability:🚶|bike lane:🚲
      urban planning:🗺️|road rage:😡|fuel efficiency:⛽|scenic route:🏞️|last mile:🏁|expressway:🛣️
      public transit:🚌|transit-oriented:🚉|modal shift:🔀|micromobility:🛴|e-scooter:🛴
      ride-hailing:📱|self-driving:🤖|hydrogen:💧|battery swap:🔋|range anxiety:😰|car-free:🚫
      pedestrianize:🚶|traffic calming:🐢|road safety:🦺|fatality:🕯️|hit-and-run:🚨|dui:🍺
      ridership:👥|capacity:📊|frequency:🔁|headway:⏱️|interchange:🔀|hub:🎯|aviation:✈️
      low-cost carrier:💸|connecting flight:🔗|shipping:🚢|container:📦|port:⚓|rail network:🛤️
      maglev:🚄|telecommuting:💻|accessibility:♿`,
    education: `
      major:🎓|scholarship:🏅|deadline:⏰|semester:📆|tuition:💰|graduate:🎓|assignment:📝|essay:📃
      presentation:📊|research:🔬|lecture:🧑‍🏫|professor:👨‍🏫|campus:🏫|dormitory:🛏️|credit:🔢
      textbook:📘|midterm:📝|attendance:✅|cheat:🙈|tutor:🧑‍🏫|cram school:🏫|enroll:🖊️|degree:🎓
      bachelor's:🎓|master's:🎓|internship:💼|extracurricular:⚽|study abroad:✈️|review:🔁|memorize:🧠
      skip class:🏃|group project:👥|handout:📄|pop quiz:❓|gpa:📈|transcript:📜|diploma:📜
      certificate:📃|elective:☑️|required course:📌|prerequisite:🔗|office hours:🕓
      teaching assistant:🙋|lab:🧪|seminar:💬|club:🎭|student council:🗳️|exchange student:🌏
      entrance exam:📝|college:🏛️|university:🏛️|online course:💻|due:📅|submit:📤|proofread:🔍
      outline:🗒️|draft:✏️|take notes:📝|attend:🙋|retake:🔁|dropout:🚪|graduate school:🎓
      student loan:💳|motivation:🔥|concentrate:🎯|strict:📏
      curriculum:📚|rote learning:🔁|dissertation:📕|lifelong learning:♾️|equity:⚖️|pedagogy:🧑‍🏫
      academia:🏛️|thesis:📘|peer review:👥|plagiarism:🚫|citation:🔖|methodology:🧭|hypothesis:💡
      empirical:📊|literacy:📖|vocational:🔧|tertiary:🎓|meritocracy:🏆|admissions:🚪|accreditation:✅
      tenure:🪑|faculty:👩‍🏫|alumni:🎓|endowment:💰|holistic:🌐|bilingual:🗣️|inclusive:🤝|cognitive:🧠
      metacognition:🤔|autonomy:🧭|assessment:📋|syllabus:📑|mentor:🧑‍🏫|flipped classroom:🔄
      blended learning:💻|differentiated instruction:🎯|formative assessment:📝|rubric:📋
      scaffolding:🏗️|inquiry-based:❓|stem:🔬|humanities:📜|liberal arts:🎨|interdisciplinary:🔗
      attainment:🏅|achievement gap:📉|dropout rate:📉|grade inflation:📈|standardized testing:📝
      cram culture:📚|academic pressure:😰|gifted:🌟|special education:♿|edtech:💻|mooc:🌐
      credentialism:📜|research grant:💰|postdoc:🔬|publish or perish:📰|journal:📓|abstract:📄
      literature review:📚|qualitative:💬|quantitative:🔢|intellectual curiosity:🔍|critical thinking:🤔`,
    fun: `
      concert:🎤|binge-watch:📺|hobby:🎨|spoiler:🤫|streaming:📲|sold out:🚫|festival:🏮|exhibition:🖼️
      theater:🎭|musical:🎶|band:🎸|album:💿|lyrics:📝|playlist:🎧|podcast:🎙️|documentary:🎥|comedy:😂
      thriller:😱|sequel:2️⃣|trailer:🎞️|director:🎬|actor:🎭|audience:👥|review:⭐|rating:⭐
      board game:🎲|amusement park:🎡|camping:🏕️|craft:✂️|subscribe:🔔|influencer:🤳|fan:📣|episode:📺
      gallery:🖼️|performance:🎭|stage:🎪|ticket booth:🎟️|front row:💺|encore:👏|lineup:📋|cosplay:🦸
      anime:🎌|manga:📚|k-drama:📺|variety show:🤣|reality show:📹|talk show:🛋️|stand-up comedy:🎤
      escape room:🔐|theme park:🎢|roller coaster:🎢|arcade:🕹️|claw machine:🧸|mobile game:📱
      livestream:🔴|followers:👥|meme:😹|photography:📷|gardening:🌻|knitting:🧶|baking:🧁
      volunteer:🙋|day trip:🚌|staycation:🏨|hot spring:♨️|bucket list:📝
      plot twist:🔀|critically acclaimed:🏆|immersive:🥽|mainstream:🌊|nostalgic:📼|escapism:🚪
      genre:🏷️|cinematography:🎥|screenplay:📜|soundtrack:🎼|protagonist:🦸|antagonist:🦹
      cliffhanger:🧗|cameo:👀|box office:💰|blockbuster:💥|indie:🎸|avant-garde:🌀|satire:🃏
      parody:🤪|fandom:💜|cult classic:📼|virtual reality:🥽|leisure:🏖️|pastime:🎣|subculture:🛹
      aesthetic:🌸|highbrow:🧐|remake:🔁|adaptation:📖|franchise:🔢|premiere:🌟|phenomenon:🌍
      auteur:🎬|arthouse:🎞️|critique:📝|pacing:⏱️|character arc:📈|foreshadowing:🔮
      unreliable narrator:🤥|ensemble cast:👥|typecast:🦹|box-office flop:📉|sleeper hit:💤
      streaming wars:⚔️|algorithmic:🤖|binge culture:📺|spin-off:🌱|intellectual property:©️
      reboot:🔄|canon:📚|fan fiction:✍️|immersive theater:🎭|installation:🗿|curator:🧑‍🎨
      retrospective:🖼️|gamification:🎮|microtransaction:💳|creator economy:🤳|parasocial:📱
      doomscrolling:📱|digital detox:📵|hedonism:🍾|catharsis:😭|zeitgeist:🕰️|virality:📈`,
    family: `
      chores:🧹|relatives:👪|raise:🌱|get along:🤝|argue:😠|reunion:🎎|household:🏠|sibling:👫
      only child:🧒|nephew:👦|niece:👧|in-laws:👥|stepmother:👩|newborn:👶|toddler:🚼|teenager:🧑
      babysitter:🍼|allowance:🪙|curfew:🕙|grounded:🚫|spoil:🍭|discipline:📏|respect:🙇
      responsible:✅|independent:🦅|divorce:💔|single parent:👩‍👧|adopt:🏠|anniversary:💐|wedding:💒
      engaged:💍|pregnant:🤰|routine:🔁|stepfather:👨|half-brother:👦|grandchild:👶
      great-grandmother:👵|father-in-law:👴|ancestor:🏯|generation:🧬|take after:🪞|bring up:🌱
      look after:🤲|pick up:🚗|drop off:🏫|housework:🧺|family gathering:🎉|quality time:⏳
      close-knit:🤝|quarrel:🗯️|house rules:📜|screen time:📱|praise:👏|punish:⛔|tantrum:😤
      diaper:🧷|stroller:🚼|daycare:🧸|retired:🏖️|widow:🖤|elderly:🧓|family tree:🌳|marriage:💑
      propose:💍|honeymoon:🌴|newlyweds:💏
      generation gap:↔️|work-life balance:⚖️|upbringing:🌱|elderly care:🧓|filial piety:🙏
      dynamics:🔄|nuclear family:👨‍👩‍👧|extended family:👨‍👩‍👧‍👦|breadwinner:💼|homemaker:🏠
      parenting style:🧭|helicopter parent:🚁|empty nest:🪺|sandwich generation:🥪|caregiver:🤲
      inheritance:📜|estranged:💔|reconcile:🤝|sibling rivalry:⚔️|birth rate:👶|aging population:👴
      paternity leave:👨‍🍼|maternity leave:🤱|childcare:🧸|custody:⚖️|dysfunctional:💢|nurture:🌱
      resilience:💪|intergenerational:👵|domestic:🏠|foster:🤗|heirloom:💍|lineage:🌳
      patriarchal:👴|matriarch:👵|kinship:🔗|dowry:💰|arranged marriage:💌|cohabitation:🏠
      same-sex marriage:🌈|blended family:👨‍👩‍👦‍👦|alimony:💸|child support:💵|guardianship:🛡️
      surrogacy:🤰|fertility:🌸|ivf:🧫|postpartum:🤱|confinement center:🏥|dual-income:💼
      latchkey kid:🔑|boomerang kids:🪃|eldest:🥇|favoritism:❤️|emotional labor:🧠|mental load:🧠
      gender roles:⚧️|ancestor worship:🏮|obligation:📌|guilt:😔|estrangement:🚪|reconciliation:🕊️
      legacy:🏛️|will:📜|estate:🏡|next of kin:📞`,
    friends: `
      catch up:☕|hang out:🛹|invite:💌|text:💬|plans:🗓️|cancel:❌|get together:🎉|chill:😎|gossip:🗣️
      rumor:👂|secret:🤫|trust:🤝|loyal:🐕|honest:😇|jealous:😒|awkward:😬|embarrassed:😳
      compliment:💐|apologize:🙇|forgive:🕊️|favor:🙏|advice:💡|support:💪|disagree:🙅|make up:🤗
      group chat:💬|selfie:🤳|acquaintance:👋|close friend:👯|show up:🙋|flake:❄️|introduce:🤝
      mutual friend:👥|grab a bite:🍔|drop by:🚪|run into:😮|keep in touch:📞|lose touch:📵
      reply:↩️|seen:👁️|emoji:😀|sticker:🏷️|voice message:🎙️|profile picture:🖼️|surprise party:🎉
      potluck:🍲|split:➗|treat:🎁|owe:💸|promise:🤞|personality:🌈|outgoing:🗣️|easygoing:😌
      reliable:🧱|mean:😈|annoying:😒|argument:🗯️|misunderstanding:❓|peer:👥|crush:💘|date:🌹
      break up:💔|blind date:🙈|stay over:🛌|pajama party:🌙|comfort:🫂
      small talk:💬|drift apart:↔️|confide in:🤫|reconnect:🔗|tactful:🕊️|banter:😄|rapport:🤝
      camaraderie:🍻|companionship:👫|kindred spirit:✨|frenemy:😏|falling-out:💢|ghost:👻
      boundaries:🚧|vulnerable:🥺|empathy:💗|sarcastic:🙄|witty:😏|genuine:💯|superficial:🎭
      toxic:☠️|reciprocate:🔁|solidarity:✊|peer pressure:😰|inside joke:🤭|heart-to-heart:💞
      socialize:🥂|introvert:📚|extrovert:🎉|mingle:🍸|icebreaker:🧊|bond:🔗|confidant:🤫
      platonic:🤝|fair-weather friend:🌤️|ride or die:🏍️|wingman:🦅|third wheel:🛞|fomo:😱
      social battery:🪫|people-pleaser:🙇|passive-aggressive:😒|gaslight:🔥|manipulative:🕹️
      envious:😒|resentment:😠|grudge:😤|olive branch:🫒|bury the hatchet:🪓|clear the air:🌬️
      mutual respect:🤝|emotional support:🫂|active listening:👂|open up:📖|put up with:😩
      look up to:⬆️|see eye to eye:👀|on the same wavelength:📶|loner:🐺|social circle:⭕|clique:👯
      affinity:🧲|long-distance friendship:🌏|loyalty:🐕|betray:🔪|trustworthy:🤝`,
    work: `
      colleague:🧑‍🤝‍🧑|schedule:🗓️|interview:🎤|salary:💰|overtime:🌙|promotion:📈|resume:📄|apply:📨
      hire:🤝|fire:🔥|quit:🚪|part-time:🕐|full-time:🕘|employee:🧑‍💼|employer:🏢|client:🤝
      department:🏬|project:📁|report:📊|budget:💵|goal:🎯|feedback:💬|training:🏋️|benefits:🎁
      bonus:💰|contract:📝|shift:🔄|retire:🏖️|teamwork:🤝|experience:🧳|qualified:✅|position:🪑
      workload:📚|job fair:🏢|cover letter:✉️|reference:📇|trial period:⏳|annual leave:🏝️
      sick leave:🤒|pay raise:📈|deadline:⏰|agenda:📋|minutes:📝|follow up:🔁|cc:📧|attachment:📎
      spreadsheet:📊|slides:📽️|conference call:📞|business trip:🧳|expense:🧾|reimburse:💵
      supervisor:🧑‍💼|intern:🧑‍🎓|headquarters:🏢|branch:🏪|sales:📈|marketing:📣
      customer service:🎧|complaint:😠|deal:🤝|proposal:📑|brainstorm:💡|multitask:🤹
      flexible hours:🕰️|resign:✉️
      negotiate:🤝|stakeholder:👥|burnout:🪫|leverage:🏋️|remote work:🏠|deliverable:📦|kpi:📊
      quarterly:📆|revenue:💰|profit margin:📈|scalable:📶|synergy:🔗|onboarding:🚀
      performance review:📋|layoff:📉|restructuring:🏗️|entrepreneur:🚀|startup:🦄|venture capital:💸
      delegate:👉|micromanage:🔍|productivity:⚡|workflow:🔀|outsourcing:🌏|compliance:✅
      headhunter:🎯|networking:🤝|severance:💵|work ethic:💪|gig economy:🛵|upskill:📈|proactive:🏃
      initiative:💡|leadership:🧭|accountability:✅|benchmark:📏|roi:💹|market share:🥧
      competitive advantage:🏆|value proposition:💎|pivot:↪️|disrupt:💥|bottom line:💲
      cost-cutting:✂️|merger:🔗|acquisition:🛒|due diligence:🔍|fiscal year:📅|projection:📈
      shareholder:📜|board of directors:🪑|ceo:👔|c-suite:🏢|succession planning:👑
      corporate culture:🏢|diversity and inclusion:🌈|psychological safety:🛡️|quiet quitting:🤐
      disengagement:😶|four-day week:4️⃣|automation:🤖|reskill:🔄|intrapreneur:💡|okr:🎯
      cross-functional:🔀|buy-in:👍`,
    overseas: `
      work permit:🪪|relocate:🚚|culture shock:😵|adapt:🦎|cost of living:💸|residence:🏠|embassy:🏛️
      sponsor:🤝|application:📝|immigration office:🏢|currency:💱|exchange rate:💹|bank account:🏦
      health insurance:🏥|settle in:🛋️|time zone:🌐|job offer:📩|recruiter:🧑‍💼|probation:⏳
      housing allowance:🏠|language barrier:🚧|etiquette:🙇|tradition:🎎|working holiday:🎒
      homestay:🏡|foreigner:🌍|paperwork:📑|translator:🔤|document:📄|branch office:🏢|local hire:📍
      network:🕸️|head office:🏢|visa extension:🛂|renewal:🔄|id card:🪪|arc:🪪|tax return:🧾
      pension:👴|social security:🛡️|payslip:🧾|international school:🏫|moving company:🚚
      storage unit:📦|international driving permit:🚗|public holiday:🎌|work culture:🏢|hierarchy:🔺
      punctuality:⏰|directness:➡️|body language:🙆|gesture:👌|taboo:🚫|stereotype:🏷️|adjust:🔧
      expat:🌏|international:🌐|global:🌍|remote team:💻|time difference:🕰️|overtime pay:💵|union:✊
      commute:🚇|deposit:💰|lease:📝|interpreter:🗣️
      expatriate:🌏|cross-cultural:🌐|assimilate:🦎|global mobility:✈️|tax residency:🧾
      repatriation:🏠|overseas assignment:🧳|relocation package:📦|dual citizenship:🛂
      permanent residency:🏠|credential:📜|brain drain:🧠|talent shortage:📉|diaspora:🌏
      remittance:💸|integration:🧩|xenophobia:🚫|discrimination:⛔|acculturation:🌱
      third culture kid:🧒|reverse culture shock:🔄|digital nomad:💻|double taxation:🧾|labor law:⚖️
      non-compete:🚫|multinational:🌐|localization:📍|hardship posting:⛺|cultural intelligence:🧠
      glass ceiling:🔝|migrant worker:👷|bureaucracy:📑|host country:🏳️|expat bubble:🫧
      code-switching:🔀|cultural humility:🙇|high-context culture:🤫|low-context culture:🗣️
      saving face:🎭|power distance:🔺|culture fit:🧩|global citizen:🌍|identity crisis:❓
      belonging:🏡|naturalization:🪪|asylum:🛡️|refugee:⛺|deportation:🚫|overstay:⏳|undocumented:❔
      quota:🔢|points-based:🎯|skilled worker:🛠️|gold card:🥇|offshoring:🌏|nearshoring:📍
      cost-of-living adjustment:💹|hardship allowance:💵|tax treaty:🤝|social integration:🤝
      transnational:🌐|circular migration:🔄|return migration:↩️|soft skills:💬|global mindset:🧠
      language proficiency:🗣️`,
    sports: `
      work out:🏋️|tournament:🏆|coach:🧑‍🏫|injury:🤕|score:🔢|stretch:🤸|athlete:🏃|referee:🧑‍⚖️
      opponent:🆚|championship:🏆|league:🏟️|season:📅|fitness:💪|muscle:💪|warm up:🔥|sweat:💦
      cardio:❤️|weightlifting:🏋️|marathon:🏃|cycling:🚴|jogging:🏃|personal trainer:🧑‍🏫
      spectator:👀|stadium:🏟️|medal:🏅|record:📊|foul:🚩|penalty:⚽|tie:🤝|half-time:⏸️
      defense:🛡️|offense:⚔️|sprain:🦶|pitcher:⚾|batter:🏏|home run:⚾|inning:🔢|strikeout:❌
      goalkeeper:🧤|striker:⚽|captain:©️|substitute:🔁|bench:🪑|timeout:⏱️|overtime:⏰|final:🏆
      semifinal:🥈|qualify:✅|knockout:🥊|trophy:🏆|podium:🥇|lap:🔁|treadmill:🏃|dumbbell:🏋️
      protein:🥩|hydrate:💧|cramp:😖|fracture:🦴|physical therapy:🩺|workout routine:📋|rest day:😴
      rock climbing:🧗|triathlon:🏊|fan club:📣|cheerleader:📣|broadcast:📺
      endurance:🔋|underdog:🐕|doping:💉|comeback:🔄|sportsmanship:🤝|dominate:👑|athleticism:🤸
      agility:🐇|stamina:🔋|rehabilitation:🩺|sports science:🔬|analytics:📊|scouting:🔭|draft:📋
      free agent:🆓|endorsement:✍️|salary cap:🧢|rivalry:⚔️|home advantage:🏠|momentum:🌊
      clutch:🎯|mvp:🌟|playoffs:🏆|esports:🎮|governing body:🏛️|hall of fame:🏛️|tactics:♟️
      physique:💪|grueling:😫|veteran:🎖️|rookie:🌱|hat trick:🎩|fair play:🤝
      performance-enhancing:💉|anti-doping:🚫|match-fixing:🎭|biomechanics:🦴|periodization:📆
      overtraining:🪫|vo2 max:🫁|lactic acid:🧪|recovery:🛌|concussion:🤕|acl:🦵
      mental toughness:🧠|in the zone:🎯|choke:😰|upset:😲|dynasty:👑|juggernaut:🚂|long shot:🎯
      odds:🎲|sports betting:🎰|broadcasting rights:📡|sponsorship:🤝|franchise:🏟️|transfer fee:💸
      trade deadline:⏰|retirement:👋|goat:🐐|inclusivity:🤝|paralympics:♿|youth development:🌱
      spectator sport:👀|home crowd:📣|photo finish:📸`,
    politics: `
      candidate:🙋|policy:📜|tax:💸|campaign:📣|debate:🎙️|protest:✊|democracy:🗳️|legislature:🏛️
      political party:🎌|opposition:🆚|ruling party:👑|minister:👔|cabinet:🗄️|constitution:📜
      referendum:🗳️|poll:📊|majority:👥|minority:👤|reform:🔧|corruption:💰|scandal:📰|welfare:🤲
      immigration:🛂|economy:📈|unemployment:📉|inflation:🎈|diplomacy:🤝|ballot:🗳️|turnout:👥
      spokesperson:🎤|approval rating:👍|lobby:🗣️|term:📅|council:🏛️|councilor:🧑‍💼|lawmaker:⚖️
      bill:📃|amendment:✏️|recount:🔢|polling station:🏫|absentee voting:✉️|platform:📋|slogan:📢
      rally:📣|supporter:🙌|public opinion:💬|press release:📰|policymaker:🧑‍💼|regulation:📏
      subsidy:💵|pension:👴|minimum wage:💲|human rights:✊|equality:🟰|justice:⚖️
      national defense:🛡️|treaty:📜|alliance:🤝|summit:🏔️|recall:↩️|term limit:⏳|resignation:✉️
      bribery:💰|budget deficit:📉|public spending:🏗️|civil servant:🧑‍💼
      legislation:📜|bipartisan:🤝|polarization:↔️|accountability:✅|grassroots:🌱|sovereignty:🛡️
      populism:📢|ideology:💭|partisan:🎌|gerrymandering:🗺️|filibuster:🗣️|coalition:🤝|mandate:📜
      incumbent:🪑|constituency:🏘️|checks and balances:⚖️|separation of powers:🔱
      judicial independence:⚖️|civil liberties:🗽|authoritarian:👊|geopolitics:🌐|sanctions:⛔
      soft power:🎵|transparency:🔍|rhetoric:🎤|propaganda:📢|landslide:🏆|swing voter:🔄
      lame duck:🦆|veto:❌|impeachment:⚖️|electorate:👥|consensus:🤝|technocrat:🧑‍🔬|demagogue:📢
      nationalism:🎌|isolationism:🏝️|multilateralism:🌐|deterrence:🛡️|escalation:📈
      de-escalation:📉|status quo:⏸️|self-determination:✊|rule of law:⚖️|due process:📋
      oversight:🔍|pork barrel:🐖|patronage:🎁|cronyism:🤝|kleptocracy:💰|regime change:🔄|coup:🪖
      martial law:🪖|transitional justice:⚖️|civil society:👥|think tank:🧠|fiscal policy:💰
      austerity:✂️|welfare state:🤲|redistribution:🔄|electoral reform:🗳️
      proportional representation:📊|hung parliament:⚖️|caretaker government:🧹|realpolitik:♟️
      hawkish:🦅`,
    news: `
      headline:📰|according to:💬|reporter:🎤|breaking news:🚨|source:🔎|update:🔄|article:📄
      journalist:🧑‍💻|interview:🎙️|press conference:🎤|anchor:📺|editor:✏️|column:🗞️|opinion:💭
      fake news:🚫|viral:📈|trending:🔥|investigation:🔍|witness:👀|suspect:🕵️|victim:🤕|evacuate:🏃
      disaster:🌪️|stock market:📈|statement:📃|coverage:📡|local:📍|international:🌐|live:🔴|media:📺
      survey:📋|exclusive:🌟|forecast:🌦️|aftershock:📳|landslide:⛰️|power outage:🔌|heat wave:🥵
      air quality:😷|drought:🏜️|injured:🤕|missing:❓|search and rescue:🚁|emergency:🚨|shelter:⛺
      donation:💝|arrest:🚔|scam:🎣|fraud:💳|court case:⚖️|verdict:🔨|sentence:⛓️|demonstration:✊
      strike:🪧|price hike:📈|export:🚢|gdp:📊|recession:📉|census:🔢|official:🧑‍💼|sources say:🗣️
      report:📑|celebrity:🌟|obituary:🕯️|tsunami:🌊|wildfire:🔥|pandemic:🦠
      misinformation:❌|bias:⚖️|credible:✅|clickbait:🎣|echo chamber:📢|unprecedented:❗
      journalism:📰|editorial:✍️|objectivity:⚖️|sensationalism:💥|press freedom:🗽|censorship:🚫
      whistleblower:📯|allegation:☝️|verify:✅|fact-checker:🔍|deepfake:🎭|algorithm:🤖
      polarizing:↔️|narrative:📖|framing:🖼️|spin:🌀|op-ed:✍️|paywall:🧱|watchdog:🐕|scoop:🗞️
      anonymous source:🕵️|retraction:↩️|media literacy:📚|escalate:📈|aftermath:🏚️|embargo:⛔
      in-depth:🔬|investigative:🔍|gatekeeping:🚪|agenda-setting:📋|newsworthy:⭐|fearmongering:😱
      alarmist:🚨|corroborate:🤝|debunk:❌|hoax:🎭|conspiracy theory:🛸|infodemic:🦠
      disinformation:🧨|state media:📺|slant:📐|impartial:⚖️|sourcing:🔎|off the record:🤫
      on the record:🎙️|libel:✒️|defamation:🗯️|press pass:🪪|newsroom:🏢|news cycle:🔄
      citizen journalism:📱|legacy media:🗞️|subscription model:💳|filter bubble:🫧|doxxing:🔓
      geopolitical:🌐|humanitarian crisis:🆘|casualty:🕯️|ceasefire:🕊️|embedded journalist:🪖`
  };
  const pics = (window.PICS = window.PICS || {});
  Object.keys(more).forEach((id) => {
    const s = more[id].split(/[\n|]+/).map((x) => x.trim()).filter(Boolean).join("|");
    pics[id] = (pics[id] ? pics[id] + "|" : "") + s;
  });
})();
