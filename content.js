/*
  ORIGINAL CONTENT — written from scratch to match the structural spec the user provided
  (question types, counts, and topics only — no text, transcripts, or prompts were taken
  from any copyrighted source). Safe to publish.
*/

const TEST_CONTENT = {

/* =========================================================================
   LISTENING — 40 questions, 4 parts
   ========================================================================= */
listening: {

  part1: {
    title: "Questions 1–10",
    instructions: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for questions 1–6. Write ONE WORD ONLY for questions 7–10.",
    topic: "Booking a food walking tour",
    transcript: `
TOM: Good morning, Old Town Food Trail, Tom speaking. How can I help?
PRIYA: Hi Tom, I'd like to book two places on tomorrow's walking tour, if there's room.
TOM: Let me check... yes, we still have space. Can I take a few details? First, could I get your surname?
PRIYA: It's Sharma. S-H-A-R-M-A.
TOM: Great, thanks. And a contact number, in case anything changes?
PRIYA: It's 0741 552 903.
TOM: Perfect. Now, the tour meets outside Riverside Bakery, on Mill Street, at half past nine. Riverside Bakery is actually our first stop, so you'll get to try their famous cinnamon rolls straight away.
PRIYA: Lovely, my daughter will be pleased. Where do we go after that?
TOM: From the bakery we walk down to Harlow's Cheese Shop, on the corner of Market Square. The owner, Ben Harlow, gives everyone a small taste of his aged cheddar.
PRIYA: Sounds great. Is there anything to pay at the shops themselves?
TOM: No, everything's included in the ticket price, which is eighteen pounds per adult, but children under twelve go free.
PRIYA: That's good value. What's the third stop?
TOM: The third stop is Patel's Spice House, where they'll show you how they blend their own curry, all from scratch. They do ask that you don't wear any strong perfume that day, as it can affect the tasting.
PRIYA: Ha, noted. And the last one?
TOM: The final stop is Green Valley Deli, which specialises in olives and cured meats from small local farms. The tour usually finishes there around midday.
PRIYA: Perfect. Do I need to bring anything with me?
TOM: Just comfortable shoes, really, and please bring cash for any extra purchases, since the smaller shops don't always take cards.
PRIYA: Understood, thank you so much.
TOM: My pleasure. We'll see you and your daughter at Riverside Bakery at half past nine.
`.trim(),
    // note-completion template rendered with blanks {{1}} .. {{10}}
    noteTemplate: `OLD TOWN FOOD TRAIL — Booking Notes

Customer's surname: Sharma
Meeting point: outside {{1}} Bakery, Mill Street
Meeting time: {{2}}
Ticket price (per adult): £{{3}}
Children go free under age: {{4}}
Second stop: Harlow's {{5}} Shop
Contact number: {{6}}

Bring:
 - comfortable {{7}}
 - {{8}} for extra purchases (smaller shops don't take cards)

Avoid wearing strong {{9}} at the third stop
Third stop teaches blending of {{10}}`,
    questions: [
      { id: 1, answer: "Riverside" },
      { id: 2, answer: "9:30" , altAnswers: ["9.30", "09:30", "half past nine"] },
      { id: 3, answer: "18" },
      { id: 4, answer: "12" },
      { id: 5, answer: "Cheese" },
      { id: 6, answer: "0741552903", altAnswers: ["0741 552 903"] },
      { id: 7, answer: "shoes" },
      { id: 8, answer: "cash" },
      { id: 9, answer: "perfume" },
      { id: 10, answer: "curry" }
    ]
  },

  part2: {
    title: "Questions 11–20",
    topic: "Festival workshops",
    transcript: `
Good afternoon, everyone, and welcome to this year's Riverside Arts Festival. I'd like to run through the workshop programme quickly before the gates open.

We have six workshops running today. The pottery workshop will be held in the Old Mill Barn — plenty of space there for the wheels. Just next to that, our photography walk actually starts from Market Square, so photographers should head there rather than to the barn. For younger visitors, we're running a storytelling session for children in the Rose Garden, which should be a lovely, shaded spot for that. Our woodcarving workshop is in the Willow Tent, over by the car park. Textile printing will take place in the Boathouse Studio, down by the river, and finally, the drumming circle will be held in Chapel Meadow, at the far end of the site.

Just a couple of notes: the registration desk itself is in the Riverside Pavilion, and if you lose anything, our lost property point is in the Community Hall.

Now, for all six workshops, tools and materials are provided free of charge, so you don't need to bring anything with you. We're also giving every participant a free festival tote bag when they check in. Refreshments are available but you will need to pay for those separately, and unfortunately we're not able to offer certificates of attendance this year, nor free transport to the site.

Finally, a bit of advice. These workshops are extremely popular, so we strongly recommend booking at least a week in advance if you can. On the day itself, please try to arrive around fifteen minutes early, since registration can take a little while when it's busy. You don't need to pay any deposit online, and while the festival app is handy for general updates, it won't tell you anything about workshop availability specifically.
`.trim(),
    matching: {
      instructions: "Questions 11–16: What location is each workshop held in? Choose SIX answers from the box.",
      options: [
        { key: "A", label: "Riverside Pavilion" },
        { key: "B", label: "Old Mill Barn" },
        { key: "C", label: "Community Hall" },
        { key: "D", label: "Rose Garden" },
        { key: "E", label: "Boathouse Studio" },
        { key: "F", label: "Market Square" },
        { key: "G", label: "Chapel Meadow" },
        { key: "H", label: "Willow Tent" }
      ],
      items: [
        { id: 11, label: "Pottery workshop", answer: "B" },
        { id: 12, label: "Photography walk", answer: "F" },
        { id: 13, label: "Storytelling for children", answer: "D" },
        { id: 14, label: "Woodcarving", answer: "H" },
        { id: 15, label: "Textile printing", answer: "E" },
        { id: 16, label: "Drumming circle", answer: "G" }
      ]
    },
    multiSelect: [
      {
        ids: [17, 18],
        instructions: "Questions 17 and 18: Which TWO things are provided free to all workshop participants?",
        options: [
          { key: "A", label: "tools and materials" },
          { key: "B", label: "refreshments" },
          { key: "C", label: "a certificate of attendance" },
          { key: "D", label: "transport to the site" },
          { key: "E", label: "a festival tote bag" }
        ],
        answers: ["A", "E"]
      },
      {
        ids: [19, 20],
        instructions: "Questions 19 and 20: Which TWO pieces of advice does the speaker give about booking a workshop?",
        options: [
          { key: "A", label: "Book at least a week in advance" },
          { key: "B", label: "Bring a valid ID" },
          { key: "C", label: "Arrive 15 minutes early" },
          { key: "D", label: "Pay a deposit online" },
          { key: "E", label: "Check the festival app for updates" }
        ],
        answers: ["A", "C"]
      }
    ]
  },

  part3: {
    title: "Questions 21–30",
    topic: "A science experiment discussion",
    transcript: `
DR REYES: So, Maria, Josh — talk me through the seedling experiment you've been running.
MARIA: Sure. We wanted to look at how light colour affects the growth of lettuce seedlings.
DR REYES: Why lettuce, out of interest?
JOSH: Mainly because they grow so quickly — we needed results within a couple of weeks, and lettuce germinates and grows fast enough for that.
DR REYES: Sensible. And what did you expect to find?
MARIA: Our original hypothesis was that blue light would produce the tallest seedlings, since blue light is associated with strong leaf growth in a lot of the literature we read.
DR REYES: And how did the first attempt go?
JOSH: Not brilliantly, actually. The seedlings were fine, and the lights didn't overheat them, and watering wasn't an issue either. The real problem was that we were measuring the seedlings at different times each day, sometimes morning, sometimes evening, so the growth data ended up quite inconsistent.
DR REYES: That would do it. What did you change?
MARIA: You suggested we fix a single measurement time, so now we measure every tray at exactly nine each morning, no exceptions.
DR REYES: Good. And the results this time?
JOSH: Much more consistent. Although, honestly, the most surprising thing was that the red light seedlings actually grew tallest overall — but they were quite weak and floppy compared to the blue light ones.
DR REYES: Interesting — height isn't the whole story, is it. Can you walk me through the procedure itself, step by step?
MARIA: Of course. We start by germinating the seeds in trays, just on damp paper towel. Once they've sprouted, we expose each tray to a different coloured light — red, blue, green, and white as a control. Every tray gets watered equally, so that's not a variable. Then each morning at nine we record the height of every seedling. At the end of the two weeks, we bring all that data together and analyse it using a spreadsheet.
DR REYES: And do you plan to remove any of the weaker seedlings, or present anything to the class?
JOSH: Not for this stage — we're keeping every seedling in the dataset, and we'll only present to the class once we've run a second, longer trial.
`.trim(),
    multipleChoice: {
      instructions: "Questions 21–25: Choose the correct letter, A, B or C.",
      items: [
        {
          id: 21, question: "Why did Maria and Josh choose to study lettuce seedlings?",
          options: [
            { key: "A", label: "They grow quickly" },
            { key: "B", label: "They are commercially important" },
            { key: "C", label: "Previous research was inconclusive" }
          ], answer: "A"
        },
        {
          id: 22, question: "What was the students' original hypothesis?",
          options: [
            { key: "A", label: "Red light would produce the tallest seedlings" },
            { key: "B", label: "Blue light would produce the tallest seedlings" },
            { key: "C", label: "Light colour would make no difference" }
          ], answer: "B"
        },
        {
          id: 23, question: "What problem did the students encounter with their first attempt?",
          options: [
            { key: "A", label: "The lights overheated the seedlings" },
            { key: "B", label: "The seedlings didn't get enough water" },
            { key: "C", label: "They didn't record data at the same time each day" }
          ], answer: "C"
        },
        {
          id: 24, question: "What did Dr Reyes suggest to solve this problem?",
          options: [
            { key: "A", label: "Using a different type of seed" },
            { key: "B", label: "Setting a fixed daily measurement time" },
            { key: "C", label: "Reducing the number of test groups" }
          ], answer: "B"
        },
        {
          id: 25, question: "What surprised the students most about their results?",
          options: [
            { key: "A", label: "Green light seedlings grew fastest" },
            { key: "B", label: "Red light seedlings grew tallest but were weak" },
            { key: "C", label: "There was no difference between groups" }
          ], answer: "B"
        }
      ]
    },
    flowchart: {
      instructions: "Questions 26–30: Complete the flowchart. Choose FIVE answers from the box.",
      options: [
        { key: "A", label: "Germinate seeds in trays" },
        { key: "B", label: "Record height every day at 9am" },
        { key: "C", label: "Water each tray equally" },
        { key: "D", label: "Photograph seedlings weekly" },
        { key: "E", label: "Expose trays to different coloured lights" },
        { key: "F", label: "Analyse height data using a spreadsheet" },
        { key: "G", label: "Remove weak seedlings" },
        { key: "H", label: "Present findings to the class" }
      ],
      steps: [
        { id: 26, answer: "A" },
        { id: 27, answer: "E" },
        { id: 28, answer: "C" },
        { id: 29, answer: "B" },
        { id: 30, answer: "F" }
      ]
    }
  },

  part4: {
    title: "Questions 31–40",
    instructions: "Complete the notes below. Write ONE WORD ONLY.",
    topic: "Microplastics",
    transcript: `
Today I want to introduce the topic of microplastics — a subject that's become increasingly important in environmental science.

Microplastics are generally defined as plastic fragments smaller than five millimetres. Researchers usually divide them into two categories: primary microplastics and secondary microplastics. Primary microplastics are manufactured at that small size deliberately — a common example is the tiny plastic beads once used in facial scrubs. Secondary microplastics, on the other hand, form later, through the gradual breakdown of larger plastic items exposed to sunlight and wave action.

One of the largest sources entering our oceans is actually something most of us do every week: laundry. Synthetic fibres shed from clothing during washing machine cycles make their way through wastewater systems and out into rivers and seas in enormous quantities.

What's particularly concerning is how widespread the contamination has become. Studies over the last decade have found microplastics in drinking water samples collected from cities all over the world, which raises obvious questions about long-term human exposure.

In terms of the effects on wildlife, one issue researchers keep coming back to is ingestion. When fish or other marine animals swallow microplastic fragments, the particles can physically block the gut, sometimes causing animals to feel full and stop eating normal food entirely.

So how do scientists actually study this? Typically, research teams tow fine trawl nets behind boats to collect samples directly from the ocean surface, which are then sorted and analysed back in the laboratory.

In terms of solutions, one of the most promising ideas currently being explored is improving the filtration systems built into washing machines themselves, to catch fibres before they ever reach the wastewater system. Alongside that, public awareness campaigns continue to encourage people to simply reduce their use of single-use plastic in daily life, since less plastic entering the environment overall means less material available to break down into microplastics in the first place.
`.trim(),
    noteTemplate: `MICROPLASTICS — Lecture Notes

Definition: plastic fragments smaller than 5 {{31}}

Two categories: primary and {{32}}

Primary microplastics: found in products such as facial {{33}}

Secondary microplastics form through the {{34}} of larger plastic items

Major source: synthetic {{35}} shed from clothing during washing

Found in {{36}} water samples worldwide

Effect on marine life: ingestion can block the {{37}}

Research method: {{38}} nets used to collect ocean samples

Possible solution: improved {{39}} systems in washing machines

Public campaigns encourage reducing single-use {{40}}`,
    questions: [
      { id: 31, answer: "millimetres" },
      { id: 32, answer: "secondary" },
      { id: 33, answer: "scrubs" },
      { id: 34, answer: "breakdown" },
      { id: 35, answer: "fibres" },
      { id: 36, answer: "drinking" },
      { id: 37, answer: "gut" },
      { id: 38, answer: "trawl" },
      { id: 39, answer: "filtration" },
      { id: 40, answer: "plastic" }
    ]
  }
},

/* =========================================================================
   READING — 40 questions, 3 passages
   ========================================================================= */
reading: {

  passage1: {
    title: "Archaeologists discover evidence of prehistoric island settlers",
    body: `
For decades, the small volcanic island of Marowa, some four hundred kilometres off the mainland coast, was assumed by most archaeologists to have remained uninhabited until relatively recent times. Its isolation, steep terrain, and lack of a natural freshwater source seemed to make sustained human settlement unlikely. A recent excavation at Marowa's northern bay, however, has overturned that assumption, uncovering evidence that people were living on the island at least six thousand years ago.

The project began almost by accident. A team surveying coastal erosion noticed unusual dark layers exposed in a cliff face after a storm had washed away part of the shoreline. On closer inspection, these layers turned out to be shell middens — dense accumulations of discarded shellfish shells, along with charcoal and fragments of stone tools. Radiocarbon dating of the charcoal produced dates far older than researchers had expected, prompting a full excavation of the site over the following two field seasons.

What the team found beneath the surface was a rich picture of daily life. Stone tools recovered from the site included small blades likely used for cutting fibrous plant material, as well as heavier pounding stones probably used to process nuts or shellfish. Notably, none of the stone used to make these tools is found naturally on Marowa itself, meaning the raw material must have been brought over by boat from the mainland or a neighbouring island, a journey of considerable distance and risk in a simple vessel.

Perhaps the most striking discovery was a series of stone-lined pits interpreted as water-storage features. Given the island's lack of natural springs, the settlers appear to have relied on capturing and storing rainwater, a strategy that would have required careful planning and maintenance to sustain a permanent population through the dry season. This finding alone challenges the long-held view that a reliable natural water source was a strict prerequisite for early island settlement in the region.

Analysis of the shell midden layers also revealed changes over time. The earliest layers contain shells from species typically found in shallow reef environments close to shore, while shells from later layers increasingly come from deeper-water species. Researchers interpret this shift as evidence of improving boat technology and growing familiarity with the surrounding waters, allowing the settlers to exploit a wider range of marine resources as generations passed.

Not every researcher is convinced by every aspect of the interpretation. Some have argued that the apparent age of the charcoal could be misleading if older driftwood, rather than wood gathered specifically for fuel, was burned by the settlers, artificially inflating the site's estimated age. The excavation team has responded by dating multiple independent samples from different layers, all of which returned consistent results, a pattern they argue would be unlikely if driftwood contamination were the explanation.

The Marowa site is now considered one of the most significant early settlement discoveries in the region in recent years, not because it proves people reached remote islands earlier than previously thought elsewhere, but because it demonstrates that a lack of obvious natural resources, such as freshwater springs, does not necessarily rule out permanent early settlement. Excavations are set to continue at a second site on the island's western coast, where preliminary surveys have already identified further shell deposits.
`.trim(),
    trueFalseNotGiven: {
      instructions: "Questions 1–7: Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees, FALSE if the statement contradicts, or NOT GIVEN if there is no information on this.",
      items: [
        { id: 1, statement: "Marowa was previously believed to have been settled only in recent times.", answer: "TRUE" },
        { id: 2, statement: "The shell middens were discovered during a planned archaeological excavation.", answer: "FALSE" },
        { id: 3, statement: "The stone used for the tools found at the site came from Marowa itself.", answer: "FALSE" },
        { id: 4, statement: "The settlers built stone-lined pits to store rainwater.", answer: "TRUE" },
        { id: 5, statement: "Shells from deeper-water species were found only in the earliest layers.", answer: "FALSE" },
        { id: 6, statement: "All researchers agree with the excavation team's interpretation of the charcoal dates.", answer: "FALSE" },
        { id: 7, statement: "A larger population lived at the northern bay site than at any other location on Marowa.", answer: "NOT GIVEN" }
      ]
    },
    noteCompletion: {
      instructions: "Questions 8–13: Complete the notes below. Write ONE WORD ONLY FROM THE PASSAGE for each answer.",
      template: `MAROWA EXCAVATION — Key Findings

Site discovered after a {{8}} exposed dark layers in a cliff face
Dating method used on charcoal: {{9}} dating
Heavier stones were likely used for pounding nuts or {{10}}
Water was stored in stone-lined {{11}}
Earlier shell layers came from {{12}} environments close to shore
An alternative explanation for the charcoal's age involves burned {{13}}`,
      questions: [
        { id: 8, answer: "storm" },
        { id: 9, answer: "radiocarbon" },
        { id: 10, answer: "shellfish" },
        { id: 11, answer: "pits" },
        { id: 12, answer: "reef" },
        { id: 13, answer: "driftwood" }
      ]
    }
  },

  passage2: {
    title: "The global importance of wetlands",
    paragraphs: {
      A: "Wetlands are areas where land and water meet, ranging from coastal marshes and mangrove forests to inland swamps, bogs, and floodplains. Although they cover only a small fraction of the Earth's land surface, wetlands are among the most productive ecosystems on the planet, supporting a disproportionately large share of global biodiversity relative to their size.",
      B: "One of the least appreciated functions of wetlands is their role in storing carbon. Peat bogs in particular can hold vast quantities of carbon that has accumulated over thousands of years in waterlogged, slow-decaying plant material. When these bogs are drained for agriculture or development, that stored carbon is gradually released back into the atmosphere, contributing to climate change on a scale that is often overlooked in broader environmental discussions.",
      C: "Wetlands also act as natural flood defences. During periods of heavy rainfall, wetland soils and vegetation absorb and temporarily hold large volumes of water, releasing it slowly rather than allowing it to rush downstream all at once. Communities living near intact wetlands frequently experience less severe flooding than those in areas where wetlands have been drained or built over.",
      D: "Dr Elena Vasquez, a hydrologist who has studied wetland restoration projects across three continents, argues that the economic case for wetland protection is frequently underestimated by policymakers. In her view, the cost of replacing the flood-control services provided by a single large wetland with engineered infrastructure would, in most cases, far exceed the cost of simply preserving the wetland itself.",
      E: "Beyond flood control, wetlands play a crucial role in filtering pollutants from water as it passes through. Specialised plants and microorganisms found in wetland soils can break down or trap agricultural runoff, including excess nutrients from fertiliser, before that water reaches rivers, lakes, or the sea, thereby reducing the severity of downstream problems such as algal blooms.",
      F: "Despite these benefits, wetlands remain under significant threat worldwide. Agricultural expansion, urban development, and infrastructure projects have led to the loss of a substantial proportion of global wetland area over the past century. Professor Michael Chen, an ecologist specialising in freshwater systems, contends that public awareness campaigns alone are unlikely to reverse this trend without accompanying changes to land-use policy and stronger legal protection.",
      G: "In response to widespread losses, restoration projects have become increasingly common, with some governments now offering financial incentives to landowners who agree to restore drained wetlands on their property. Dr Amara Okafor, who has led several such restoration initiatives, notes that success rates vary considerably depending on how much of the original hydrology of a site can realistically be recovered, and cautions against assuming that all restored wetlands will function identically to the ecosystems they replace.",
      H: "Looking ahead, many researchers believe that wetlands will become increasingly important as a tool for climate adaptation, particularly in coastal regions facing rising sea levels. Dr Liam O'Sullivan, whose work focuses on coastal mangrove systems, suggests that protecting and expanding existing mangrove forests may prove to be one of the most cost-effective strategies available for reducing the impact of coastal storms on vulnerable communities in the coming decades."
    },
    matchingParagraphs: {
      instructions: "Questions 14–17: The reading passage has eight paragraphs, A–H. Which paragraph contains the following information?",
      items: [
        { id: 14, statement: "a comparison between the cost of natural and artificial flood protection", answer: "D" },
        { id: 15, statement: "a warning against assuming restored wetlands will work exactly like natural ones", answer: "G" },
        { id: 16, statement: "an explanation of how wetlands help remove pollution from water", answer: "E" },
        { id: 17, statement: "a suggestion that legal change is needed alongside public awareness", answer: "F" }
      ]
    },
    sentenceCompletion: {
      instructions: "Questions 18–22: Complete the sentences below. Write ONE WORD ONLY for each answer.",
      items: [
        { id: 18, sentence: "Peat bogs store large amounts of carbon in slow-decaying plant ______.", answer: "material" },
        { id: 19, sentence: "Wetlands release absorbed rainwater ______ rather than all at once.", answer: "slowly" },
        { id: 20, sentence: "Wetland plants and microorganisms can trap excess ______ from agricultural runoff.", answer: "nutrients" },
        { id: 21, sentence: "A large share of global wetland area has been lost due to agricultural and urban ______.", answer: "development" },
        { id: 22, sentence: "Mangrove forests may help reduce the impact of coastal ______ on vulnerable communities.", answer: "storms" }
      ]
    },
    matchingExperts: {
      instructions: "Questions 23–26: Look at the following statements and the list of experts below. Match each statement with the correct expert, A–D.",
      experts: [
        { key: "A", name: "Dr Elena Vasquez" },
        { key: "B", name: "Professor Michael Chen" },
        { key: "C", name: "Dr Amara Okafor" },
        { key: "D", name: "Dr Liam O'Sullivan" }
      ],
      items: [
        { id: 23, statement: "Restoration outcomes depend heavily on how much original site conditions can be recovered.", answer: "C" },
        { id: 24, statement: "Protecting coastal ecosystems could be an efficient way to guard against storm damage.", answer: "D" },
        { id: 25, statement: "Public awareness alone will not stop wetland loss without policy change.", answer: "B" },
        { id: 26, statement: "Preserving a wetland is often cheaper than replacing what it does with engineering.", answer: "A" }
      ]
    }
  },

  passage3: {
    title: "Is the era of artificial speech translation upon us?",
    body: `
For as long as people speaking different languages have needed to communicate, the dream of a device that could translate speech instantly and accurately has captured the imagination of inventors, writers, and, more recently, technology companies. Over the past few years, a wave of new tools claiming to offer real-time spoken translation has reached the consumer market, from smartphone apps to dedicated earpieces. The question now is whether these tools genuinely represent a breakthrough, or whether the reality still falls well short of the marketing.

At a technical level, real-time speech translation involves three distinct stages happening in rapid succession: converting spoken audio into text, translating that text into the target language, and then converting the translated text back into spoken audio. Each stage has improved considerably thanks to advances in machine learning, but errors at any single stage can compound, and the systems still struggle noticeably with background noise, overlapping speech, and speakers with strong regional accents.

One area where these tools have made genuine progress is in handling straightforward, transactional exchanges: ordering food, asking for directions, or checking into a hotel. In controlled tests involving such simple exchanges, modern translation devices performed well enough that many users reported barely noticing the technology at all. However, performance drops noticeably in conversations involving idiom, humour, or culturally specific references, areas where a direct, literal translation often fails to capture the intended meaning.

Professional interpreters remain sceptical that current technology poses an immediate threat to their profession, particularly in high-stakes settings such as legal proceedings or medical consultations, where a mistranslated word or phrase can have serious consequences. Interpreters also point out that their role frequently extends beyond simply converting words from one language to another; a skilled human interpreter reads tone, body language, and context, and can flag ambiguity to both parties rather than confidently producing a plausible-sounding but incorrect translation, which automated systems are prone to do.

There are also broader questions about what might be lost if spoken translation technology becomes truly seamless. Some linguists argue that the effort involved in learning another language produces cultural understanding that a translation device cannot replicate, regardless of how accurate its output becomes. Others take a more practical view, suggesting that lowering the barrier to cross-language communication could encourage more people to travel, work, and collaborate internationally, potentially increasing rather than decreasing overall interest in language learning as people encounter new cultures more easily.

From a commercial perspective, technology companies have strong incentives to overstate current capabilities, since dramatic claims generate media coverage and drive sales. Independent evaluations of several popular translation devices have found accuracy rates considerably lower than the figures quoted in company marketing material, particularly once the test conversations moved beyond simple, predictable exchanges. This gap between marketed performance and independently measured performance is likely to persist for as long as companies control both the technology and the manner in which it is publicly demonstrated.

Despite these limitations, few researchers in the field doubt that the underlying technology will continue to improve, and rapidly. The more interesting question, many argue, is not whether artificial speech translation will eventually become highly accurate across a wide range of situations, but what new social and professional dynamics will emerge once it does, and whether the convenience gained will come with meaningful cultural trade-offs that are, at present, difficult to fully anticipate.
`.trim(),
    multipleChoice: {
      instructions: "Questions 27–30: Choose the correct letter, A, B, C or D.",
      items: [
        {
          id: 27, question: "What point does the writer make about the three stages of real-time speech translation?",
          options: [
            { key: "A", label: "Each stage now works perfectly on its own" },
            { key: "B", label: "Errors in one stage can affect the others" },
            { key: "C", label: "Only the final stage still causes problems" },
            { key: "D", label: "The stages are no longer performed separately" }
          ], answer: "B"
        },
        {
          id: 28, question: "According to the passage, translation devices currently perform best in situations that are",
          options: [
            { key: "A", label: "emotionally sensitive" },
            { key: "B", label: "culturally specific" },
            { key: "C", label: "simple and predictable" },
            { key: "D", label: "legally significant" }
          ], answer: "C"
        },
        {
          id: 29, question: "Why do professional interpreters doubt they will soon be replaced?",
          options: [
            { key: "A", label: "Their equipment is more advanced than consumer devices" },
            { key: "B", label: "They can recognise and flag ambiguity, unlike automated systems" },
            { key: "C", label: "Clients prefer working with a human for cultural reasons" },
            { key: "D", label: "Automated systems cannot yet process any spoken language" }
          ], answer: "B"
        },
        {
          id: 30, question: "What does the writer suggest about technology companies' marketing claims?",
          options: [
            { key: "A", label: "They are usually confirmed by independent testing" },
            { key: "B", label: "They tend to be more accurate for complex conversations" },
            { key: "C", label: "They may overstate real-world accuracy" },
            { key: "D", label: "They are regulated more strictly than in the past" }
          ], answer: "C"
        }
      ]
    },
    sentenceCompletionMatching: {
      instructions: "Questions 31–34: Complete each sentence with the correct ending, A–F, below.",
      endings: [
        { key: "A", label: "because dramatic claims attract media attention and boost sales." },
        { key: "B", label: "because it can lead to serious consequences in professional settings." },
        { key: "C", label: "because it cannot be replaced by simply learning vocabulary." },
        { key: "D", label: "because it may encourage more people to learn additional languages." },
        { key: "E", label: "because background noise and accents remain difficult to process." },
        { key: "F", label: "because the technology has not yet been tested in real conversations." }
      ],
      items: [
        { id: 31, stem: "Mistranslation matters especially in legal or medical settings", answer: "B" },
        { id: 32, stem: "Speech translation systems still face technical challenges", answer: "E" },
        { id: 33, stem: "Companies may exaggerate their products' abilities", answer: "A" },
        { id: 34, stem: "Some believe easier communication could increase interest in language learning", answer: "D" }
      ]
    },
    yesNoNotGiven: {
      instructions: "Questions 35–40: Do the following statements agree with the claims of the writer? Write YES if the statement agrees, NO if the statement contradicts, or NOT GIVEN if it is impossible to say.",
      items: [
        { id: 35, statement: "Real-time speech translation performs equally well regardless of the type of conversation.", answer: "NO" },
        { id: 36, statement: "Human interpreters offer more than a word-for-word conversion between languages.", answer: "YES" },
        { id: 37, statement: "Learning a foreign language provides cultural benefits that translation devices cannot fully replace, according to some linguists.", answer: "YES" },
        { id: 38, statement: "Most consumers are aware that marketed accuracy rates differ from independently measured ones.", answer: "NOT GIVEN" },
        { id: 39, statement: "The gap between marketed and actual performance is likely to disappear soon.", answer: "NO" },
        { id: 40, statement: "Researchers are confident that translation technology will keep improving.", answer: "YES" }
      ]
    }
  }
},

/* =========================================================================
   WRITING
   ========================================================================= */
writing: {
  task1: {
    minutes: 20,
    minWords: 150,
    prompt: "The diagram below shows the process by which ethanol, a biofuel, is produced from crops. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    // Described as an ordered sequence so it can be rendered as a process diagram (built in the Writing phase).
    processSteps: [
      "Sugar or starch crops (e.g. sugarcane, corn) are harvested",
      "Crops are crushed or milled to extract juice or starch",
      "Extracted liquid is mixed with yeast and left to ferment",
      "Fermented liquid is heated in a distillation unit to separate ethanol",
      "Ethanol is blended with petrol to create biofuel",
      "Biofuel is transported to filling stations for use in vehicles"
    ]
  },
  task2: {
    minutes: 40,
    minWords: 250,
    prompt: "It is important for everyone, including young people, to save money for their future. To what extent do you agree or disagree?"
  }
}

};

// Export for both plain <script> usage (window global) and potential module usage.
if (typeof module !== "undefined" && module.exports) {
  module.exports = TEST_CONTENT;
}
