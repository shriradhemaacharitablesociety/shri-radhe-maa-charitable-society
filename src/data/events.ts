export interface EventMedia {
  id: string;
  type: "photo" | "video";
  url: string;
  caption?: string;
  captionHi?: string;
  order: number;
}

export interface SocietyEvent {
  id: string;
  slug: string;
  type: string;
  typeLabel: string;
  typeLabelHi: string;
  badgeVariant: "crimson" | "gold";
  title: string;
  titleHi: string;
  date: string;
  dateHi?: string;
  time?: string;
  location: string;
  locationHi?: string;
  address?: string;
  addressHi?: string;
  description?: string;
  descriptionHi?: string;
  status: "upcoming" | "completed";
  // Completed event fields
  writeUp?: string;
  writeUpHi?: string;
  media?: EventMedia[];
  completedDate?: string;
  attendees?: number;
}

export const events: SocietyEvent[] = [
  // ── Upcoming Events ──────────────────────────────────────
  {
    id: "1",
    slug: "monthly-pension-distribution",
    type: "seva",
    typeLabel: "Seva Camp",
    typeLabelHi: "सेवा शिविर",
    badgeVariant: "crimson",
    title: "Monthly Pension Distribution",
    titleHi: "मासिक पेंशन वितरण",
    date: "Every Month",
    dateHi: "हर महीने",
    time: "10:00 AM — 2:00 PM",
    location: "Delhi & NCR",
    locationHi: "दिल्ली और एनसीआर",
    address: "Plot 5, Pocket-11, Sector-5, Rohini, Delhi 110085",
    addressHi: "प्लॉट 5, पॉकेट-11, सेक्टर-5, रोहिणी, दिल्ली 110085",
    description:
      "Monthly distribution of pension support to elderly and underprivileged beneficiaries across Delhi and NCR. Each beneficiary receives direct financial assistance to cover essential living expenses.",
    descriptionHi:
      "दिल्ली और एनसीआर में बुजुर्गों और वंचित लाभार्थियों को मासिक पेंशन सहायता का वितरण। प्रत्येक लाभार्थी को आवश्यक जीवन व्यय के लिए प्रत्यक्ष वित्तीय सहायता प्राप्त होती है।",
    status: "upcoming",
  },
  {
    id: "2",
    slug: "free-dialysis-awareness-drive",
    type: "health",
    typeLabel: "Health Camp",
    typeLabelHi: "स्वास्थ्य शिविर",
    badgeVariant: "gold",
    title: "Free Dialysis Awareness Drive",
    titleHi: "निःशुल्क डायलिसिस जागरूकता",
    date: "Coming Soon",
    dateHi: "जल्द ही",
    time: "9:00 AM — 5:00 PM",
    location: "Anand Hospital, Dahisar, Mumbai",
    locationHi: "आनंद अस्पताल, दहिसर, मुंबई",
    address: "Anand Hospital, Dahisar East, Mumbai 400068",
    addressHi: "आनंद अस्पताल, दहिसर पूर्व, मुंबई 400068",
    description:
      "A comprehensive awareness drive about kidney health and free dialysis services available at Anand Hospital. Includes free kidney function screening, consultation with nephrologists, and registration for our free haemodialysis programme.",
    descriptionHi:
      "किडनी स्वास्थ्य और आनंद अस्पताल में उपलब्ध निःशुल्क डायलिसिस सेवाओं के बारे में व्यापक जागरूकता अभियान। इसमें निःशुल्क किडनी कार्य जांच, नेफ्रोलॉजिस्ट से परामर्श और हमारे निःशुल्क हेमोडायलिसिस कार्यक्रम के लिए पंजीकरण शामिल है।",
    status: "upcoming",
  },
  {
    id: "3",
    slug: "wheelchair-distribution-drive",
    type: "seva",
    typeLabel: "Janseva",
    typeLabelHi: "जनसेवा",
    badgeVariant: "crimson",
    title: "Wheelchair Distribution Drive",
    titleHi: "व्हीलचेयर वितरण अभियान",
    date: "Coming Soon",
    dateHi: "जल्द ही",
    time: "11:00 AM — 3:00 PM",
    location: "Delhi",
    locationHi: "दिल्ली",
    address: "Plot 5, Pocket-11, Sector-5, Rohini, Delhi 110085",
    addressHi: "प्लॉट 5, पॉकेट-11, सेक्टर-5, रोहिणी, दिल्ली 110085",
    description:
      "Distribution of quality wheelchairs to differently-abled individuals who lack mobility. Each wheelchair is personally fitted and handed over with dignity, restoring independence to those in need.",
    descriptionHi:
      "गतिशीलता की कमी वाले दिव्यांग व्यक्तियों को गुणवत्तापूर्ण व्हीलचेयर का वितरण। प्रत्येक व्हीलचेयर को व्यक्तिगत रूप से फिट किया जाता है और सम्मान के साथ सौंपा जाता है।",
    status: "upcoming",
  },

  // ── Past Events ──────────────────────────────────────────
  {
    id: "4",
    slug: "bhajan-jamming-2024",
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold",
    title: "Bhajan Jamming",
    titleHi: "भजन जैमिंग",
    date: "2024",
    dateHi: "2024",
    time: "6:00 PM — 9:00 PM",
    location: "Delhi",
    locationHi: "दिल्ली",
    address: "Shri Radhe Maa Ashram, Sector-5, Rohini, Delhi 110085",
    addressHi: "श्री राधे माँ आश्रम, सेक्टर-5, रोहिणी, दिल्ली 110085",
    description:
      "An evening of devotional music and collective singing where volunteers and community members came together to celebrate spirituality through bhajans and kirtans.",
    descriptionHi:
      "भक्ति संगीत और सामूहिक गायन की एक शाम जहाँ स्वयंसेवक और समुदाय के सदस्य भजन और कीर्तन के माध्यम से आध्यात्मिकता का जश्न मनाने के लिए एक साथ आए।",
    status: "completed",
    completedDate: "2024-03-15",
    attendees: 250,
    writeUp:
      "The Bhajan Jamming event brought together over 250 devotees and community members for an unforgettable evening of spiritual music. Renowned bhajan singers and local artists performed together, creating an atmosphere of deep devotion and joy. The event featured traditional bhajans, kirtans, and contemporary devotional compositions. Attendees joined in the singing, creating a powerful collective experience. Light refreshments (prasad) were served to all participants. The event strengthened the community bond and inspired many to participate in the society's charitable activities.",
    writeUpHi:
      "भजन जैमिंग कार्यक्रम ने 250 से अधिक भक्तों और समुदाय के सदस्यों को आध्यात्मिक संगीत की एक अविस्मरणीय शाम के लिए एक साथ लाया। प्रसिद्ध भजन गायकों और स्थानीय कलाकारों ने एक साथ प्रदर्शन किया, गहरी भक्ति और आनंद का वातावरण बनाया। कार्यक्रम में पारंपरिक भजन, कीर्तन और समकालीन भक्ति रचनाओं का प्रदर्शन किया गया। सभी प्रतिभागियों को हल्का जलपान (प्रसाद) परोसा गया।",
    media: [
      {
        id: "me4-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Devotees singing bhajans together during the event",
        captionHi: "कार्यक्रम के दौरान भक्त एक साथ भजन गाते हुए",
        order: 1,
      },
      {
        id: "me4-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Musicians performing kirtan on stage",
        captionHi: "मंच पर कीर्तन प्रस्तुत करते संगीतकार",
        order: 2,
      },
      {
        id: "me4-3",
        type: "video",
        url: "/placeholder-gallery.jpg",
        caption: "Highlights of the Bhajan Jamming evening",
        captionHi: "भजन जैमिंग शाम की झलकियाँ",
        order: 3,
      },
    ],
  },
  {
    id: "5",
    slug: "sukhmani-sahib-paath-2024",
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold",
    title: "Sukhmani Sahib Paath",
    titleHi: "सुखमनी साहिब पाठ",
    date: "2024",
    dateHi: "2024",
    time: "8:00 AM — 12:00 PM",
    location: "Delhi",
    locationHi: "दिल्ली",
    address: "Gurudwara Sahib, Sector-7, Rohini, Delhi 110085",
    addressHi: "गुरुद्वारा साहिब, सेक्टर-7, रोहिणी, दिल्ली 110085",
    description:
      "A sacred recitation of the Sukhmani Sahib — the Psalm of Peace — organized for the well-being of the community. The paath was followed by langar (community meal) for all attendees.",
    descriptionHi:
      "समुदाय की भलाई के लिए सुखमनी साहिब — शांति का भजन — का पवित्र पाठ। पाठ के बाद सभी उपस्थित लोगों के लिए लंगर (सामुदायिक भोजन) का आयोजन किया गया।",
    status: "completed",
    completedDate: "2024-01-26",
    attendees: 400,
    writeUp:
      "The Sukhmani Sahib Paath was organized on Republic Day, bringing together over 400 devotees for the sacred recitation. The four-hour paath was conducted by a team of five pathis (reciters) in a serene and devotional atmosphere. Following the recitation, a full langar was served to all attendees, with over 500 meals distributed. The event also included a brief prayer for the well-being of the nation and its people. Many participants expressed deep gratitude for the opportunity to participate in the collective prayer.",
    writeUpHi:
      "सुखमनी साहिब पाठ का आयोजन गणतंत्र दिवस पर किया गया, जिसमें 400 से अधिक भक्त पवित्र पाठ के लिए एक साथ आए। चार घंटे का पाठ पाँच पाठियों की टीम द्वारा शांत और भक्तिमय वातावरण में किया गया। पाठ के बाद सभी उपस्थित लोगों को पूर्ण लंगर परोसा गया, 500 से अधिक भोजन वितरित किए गए। कार्यक्रम में राष्ट्र और उसके लोगों की भलाई के लिए एक संक्षिप्त प्रार्थना भी शामिल थी।",
    media: [
      {
        id: "me5-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Devotees gathered for the Sukhmani Sahib Paath",
        captionHi: "सुखमनी साहिब पाठ के लिए एकत्रित भक्त",
        order: 1,
      },
      {
        id: "me5-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Langar being served to attendees after the paath",
        captionHi: "पाठ के बाद उपस्थित लोगों को लंगर परोसा जा रहा है",
        order: 2,
      },
      {
        id: "me5-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Community members participating in the prayer ceremony",
        captionHi: "प्रार्थना समारोह में भाग लेते समुदाय के सदस्य",
        order: 3,
      },
    ],
  },
  {
    id: "6",
    slug: "bhagwat-katha-2023",
    type: "spiritual",
    typeLabel: "Spiritual Event",
    typeLabelHi: "आध्यात्मिक आयोजन",
    badgeVariant: "gold",
    title: "Bhagwat Katha",
    titleHi: "भागवत कथा",
    date: "2023",
    dateHi: "2023",
    time: "4:00 PM — 8:00 PM",
    location: "Delhi NCR",
    locationHi: "दिल्ली एनसीआर",
    address: "Community Hall, Sector-3, Rohini, Delhi 110085",
    addressHi: "सामुदायिक हॉल, सेक्टर-3, रोहिणी, दिल्ली 110085",
    description:
      "A seven-day Bhagwat Katha narrating the stories and teachings from the Shrimad Bhagwat Puran. The katha was conducted by a renowned kathavachak and attended by hundreds of devotees daily.",
    descriptionHi:
      "श्रीमद भागवत पुराण की कथाओं और शिक्षाओं का वर्णन करने वाली सात दिवसीय भागवत कथा। कथा एक प्रसिद्ध कथावाचक द्वारा की गई और प्रतिदिन सैकड़ों भक्तों ने इसमें भाग लिया।",
    status: "completed",
    completedDate: "2023-11-19",
    attendees: 1200,
    writeUp:
      "The seven-day Bhagwat Katha was a transformative spiritual experience for the community. Held over a week in November 2023, the katha attracted over 1,200 attendees across all seven days, with peak attendance of 300+ on the final day. A distinguished kathavachak narrated the divine stories of Lord Krishna and the timeless teachings of the Bhagwat Puran. Each session included devotional singing, aarti, and prasad distribution. The event was organized at no cost to attendees, with all expenses covered by the society. Many participants shared that the katha brought them closer to their spiritual roots and inspired acts of seva (service).",
    writeUpHi:
      "सात दिवसीय भागवत कथा समुदाय के लिए एक परिवर्तनकारी आध्यात्मिक अनुभव था। नवंबर 2023 में एक सप्ताह में आयोजित, कथा ने सभी सात दिनों में 1,200 से अधिक श्रोताओं को आकर्षित किया, अंतिम दिन 300 से अधिक की चरम उपस्थिति के साथ। एक प्रतिष्ठित कथावाचक ने भगवान कृष्ण की दिव्य कथाओं और भागवत पुराण की शाश्वत शिक्षाओं का वर्णन किया। प्रत्येक सत्र में भक्ति गायन, आरती और प्रसाद वितरण शामिल था। कार्यक्रम उपस्थित लोगों के लिए निःशुल्क आयोजित किया गया था।",
    media: [
      {
        id: "me6-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Kathavachak narrating the Bhagwat Katha to a large audience",
        captionHi: "बड़ी संख्या में श्रोताओं को भागवत कथा सुनाते कथावाचक",
        order: 1,
      },
      {
        id: "me6-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Devotees immersed in the katha on the final day",
        captionHi: "अंतिम दिन कथा में लीन भक्त",
        order: 2,
      },
      {
        id: "me6-3",
        type: "video",
        url: "/placeholder-gallery.jpg",
        caption: "Aarti and prasad distribution at the Bhagwat Katha",
        captionHi: "भागवत कथा में आरती और प्रसाद वितरण",
        order: 3,
      },
      {
        id: "me6-4",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "The beautifully decorated stage for the seven-day katha",
        captionHi: "सात दिवसीय कथा के लिए सुंदर सजा मंच",
        order: 4,
      },
    ],
  },
  {
    id: "7",
    slug: "punjab-flood-relief-islampur-2023",
    type: "relief",
    typeLabel: "Disaster Relief",
    typeLabelHi: "आपदा राहत",
    badgeVariant: "crimson",
    title: "Punjab Flood Relief — Islampur Village",
    titleHi: "पंजाब बाढ़ राहत — इस्लामपुर",
    date: "2023",
    dateHi: "2023",
    time: "6:00 AM onwards",
    location: "Islampur Village, Punjab",
    locationHi: "इस्लामपुर गाँव, पंजाब",
    address: "Islampur Village, Jalandhar District, Punjab",
    addressHi: "इस्लामपुर गाँव, जालंधर जिला, पंजाब",
    description:
      "Emergency relief operation for flood-affected families in Islampur Village, Punjab. Our team deployed within 48 hours with food, water, medicines, blankets, and temporary shelter materials.",
    descriptionHi:
      "इस्लामपुर गाँव, पंजाब में बाढ़ प्रभावित परिवारों के लिए आपातकालीन राहत अभियान। हमारी टीम ने 48 घंटों के भीतर भोजन, पानी, दवाइयाँ, कम्बल और अस्थायी आश्रय सामग्री के साथ तैनाती की।",
    status: "completed",
    completedDate: "2023-09-20",
    attendees: 50,
    writeUp:
      "The Punjab Flood Relief operation was one of the society's most impactful disaster response efforts. When devastating floods hit Islampur Village in August 2023, our team mobilized within 48 hours, reaching the village with truckloads of essential supplies. Over two weeks, we provided direct assistance to 50+ families — distributing food packets, clean drinking water, essential medicines, warm blankets, and temporary shelter materials. A medical camp was set up on-site, with volunteer doctors providing free check-ups and treatment. We also contributed towards permanent rebuilding through PM Cares fund channeling. The operation demonstrated the society's commitment to swift, ground-level disaster relief.",
    writeUpHi:
      "पंजाब बाढ़ राहत अभियान सोसाइटी के सबसे प्रभावशाली आपदा प्रतिक्रिया प्रयासों में से एक था। जब अगस्त 2023 में इस्लामपुर गाँव में विनाशकारी बाढ़ आई, तो हमारी टीम ने 48 घंटों के भीतर गतिशीलता दिखाई और आवश्यक आपूर्ति के ट्रक लेकर गाँव पहुँची। दो सप्ताह में, हमने 50 से अधिक परिवारों को सीधी सहायता प्रदान की — भोजन पैकेट, स्वच्छ पेयजल, आवश्यक दवाइयाँ, गर्म कम्बल और अस्थायी आश्रय सामग्री वितरित की। स्थल पर एक चिकित्सा शिविर स्थापित किया गया, जहाँ स्वयंसेवी डॉक्टरों ने निःशुल्क जाँच और उपचार प्रदान किया।",
    media: [
      {
        id: "me7-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Relief camp setup at Islampur Village community ground",
        captionHi: "इस्लामपुर गाँव सामुदायिक मैदान में राहत शिविर की स्थापना",
        order: 1,
      },
      {
        id: "me7-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Food and water distribution to flood-affected families",
        captionHi: "बाढ़ प्रभावित परिवारों को भोजन और पानी का वितरण",
        order: 2,
      },
      {
        id: "me7-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Medical camp providing free treatment to villagers",
        captionHi: "ग्रामीणों को निःशुल्क उपचार प्रदान करता चिकित्सा शिविर",
        order: 3,
      },
      {
        id: "me7-4",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Blanket and shelter material distribution",
        captionHi: "कम्बल और आश्रय सामग्री का वितरण",
        order: 4,
      },
    ],
  },
  {
    id: "8",
    slug: "winter-blanket-distribution-2023",
    type: "seva",
    typeLabel: "Blanket Distribution",
    typeLabelHi: "कंबल वितरण",
    badgeVariant: "crimson",
    title: "Winter Blanket Distribution Drive",
    titleHi: "शीतकालीन कंबल वितरण",
    date: "Winter 2023",
    dateHi: "सर्दी 2023",
    time: "8:00 PM — 11:00 PM",
    location: "Delhi",
    locationHi: "दिल्ली",
    address: "Multiple locations across Delhi — Rohini, Kashmere Gate, Nizamuddin, New Delhi Railway Station",
    addressHi: "दिल्ली भर में कई स्थान — रोहिणी, कश्मीरी गेट, निज़ामुद्दीन, नई दिल्ली रेलवे स्टेशन",
    description:
      "A winter drive distributing 500 warm blankets to homeless and underprivileged families across Delhi NCR during the coldest months of the year.",
    descriptionHi:
      "वर्ष के सबसे ठंडे महीनों में दिल्ली एनसीआर में बेघर और वंचित परिवारों को 500 गर्म कम्बल वितरित करने का शीतकालीन अभियान।",
    status: "completed",
    completedDate: "2024-01-31",
    attendees: 500,
    writeUp:
      "The Winter Blanket Distribution Drive successfully delivered 500 warm blankets to homeless and underprivileged individuals across Delhi NCR. Our volunteers covered night shelters in Rohini, Kashmere Gate, and Nizamuddin, railway stations including New Delhi and Old Delhi, and footpaths along major roads in central Delhi. Each blanket was personally handed over with hot tea and biscuits. The drive ran through December and January, the coldest months, ensuring that those most vulnerable to the winter chill received protection when they needed it most. Over 40 volunteers participated across multiple distribution nights.",
    writeUpHi:
      "शीतकालीन कम्बल वितरण अभियान ने दिल्ली एनसीआर में बेघर और वंचित व्यक्तियों को सफलतापूर्वक 500 गर्म कम्बल वितरित किए। हमारे स्वयंसेवकों ने रोहिणी, कश्मीरी गेट और निज़ामुद्दीन के रैन बसेरों, नई दिल्ली और पुरानी दिल्ली रेलवे स्टेशनों, और मध्य दिल्ली की प्रमुख सड़कों पर फुटपाथों को कवर किया। प्रत्येक कम्बल गर्म चाय और बिस्कुट के साथ व्यक्तिगत रूप से सौंपा गया। यह अभियान दिसंबर और जनवरी में चला, 40 से अधिक स्वयंसेवकों ने कई वितरण रातों में भाग लिया।",
    media: [
      {
        id: "me8-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Volunteers distributing blankets at Kashmere Gate night shelter",
        captionHi: "कश्मीरी गेट रैन बसेरे में कम्बल वितरित करते स्वयंसेवक",
        order: 1,
      },
      {
        id: "me8-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Blanket distribution at New Delhi Railway Station",
        captionHi: "नई दिल्ली रेलवे स्टेशन पर कम्बल वितरण",
        order: 2,
      },
      {
        id: "me8-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Hot tea and blankets shared on a cold winter night",
        captionHi: "ठंडी सर्दियों की रात में गर्म चाय और कम्बल बाँटे गए",
        order: 3,
      },
    ],
  },
  {
    id: "9",
    slug: "blood-donation-camp-2023",
    type: "health",
    typeLabel: "Blood Donation",
    typeLabelHi: "रक्तदान",
    badgeVariant: "gold",
    title: "Blood Donation Camp",
    titleHi: "रक्तदान शिविर",
    date: "2023",
    dateHi: "2023",
    time: "9:00 AM — 4:00 PM",
    location: "Delhi",
    locationHi: "दिल्ली",
    address: "Community Centre, Sector-5, Rohini, Delhi 110085",
    addressHi: "सामुदायिक केंद्र, सेक्टर-5, रोहिणी, दिल्ली 110085",
    description:
      "A blood donation camp organized in collaboration with local hospitals to address the critical shortage of blood supply. Volunteers and community members donated blood to save lives.",
    descriptionHi:
      "रक्त आपूर्ति की गंभीर कमी को दूर करने के लिए स्थानीय अस्पतालों के सहयोग से आयोजित रक्तदान शिविर। स्वयंसेवकों और समुदाय के सदस्यों ने जीवन बचाने के लिए रक्तदान किया।",
    status: "completed",
    completedDate: "2023-06-14",
    attendees: 180,
    writeUp:
      "The Blood Donation Camp held on World Blood Donor Day was a resounding success, with 180 donors stepping forward to give the gift of life. Organized in collaboration with the Indian Red Cross Society and Safdarjung Hospital blood bank, the camp collected 150+ units of blood in a single day. Donors were provided with refreshments, certificates, and health check-ups including haemoglobin testing and blood pressure monitoring. The collected blood was directed to hospitals across Delhi, directly supporting patients in need of transfusions. The camp also raised awareness about the importance of voluntary blood donation and dispelled common myths.",
    writeUpHi:
      "विश्व रक्तदाता दिवस पर आयोजित रक्तदान शिविर एक जबरदस्त सफलता रही, जिसमें 180 दानदाताओं ने जीवन का उपहार देने के लिए कदम बढ़ाया। भारतीय रेड क्रॉस सोसाइटी और सफदरजंग अस्पताल ब्लड बैंक के सहयोग से आयोजित, शिविर ने एक ही दिन में 150 से अधिक यूनिट रक्त एकत्र किया। दानदाताओं को जलपान, प्रमाण पत्र और हीमोग्लोबिन परीक्षण और रक्तचाप निगरानी सहित स्वास्थ्य जांच प्रदान की गई। एकत्रित रक्त दिल्ली भर के अस्पतालों को निर्देशित किया गया।",
    media: [
      {
        id: "me9-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Donors lined up at the registration desk",
        captionHi: "पंजीकरण डेस्क पर कतार में खड़े दानदाता",
        order: 1,
      },
      {
        id: "me9-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Blood donation in progress at the camp",
        captionHi: "शिविर में रक्तदान प्रगति पर",
        order: 2,
      },
      {
        id: "me9-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Donors receiving certificates and refreshments",
        captionHi: "प्रमाण पत्र और जलपान प्राप्त करते दानदाता",
        order: 3,
      },
    ],
  },
];
