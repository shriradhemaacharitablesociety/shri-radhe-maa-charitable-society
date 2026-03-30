export interface CampaignMedia {
  id: string;
  type: "photo" | "video";
  url: string;
  caption?: string;
  captionHi?: string;
  order: number;
}

export interface CampaignDonor {
  id: string;
  name: string;
  amount: number;
  source: "online" | "offline";
  date?: string;
  isAnonymous?: boolean;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  goal: number;
  raised: number;
  donorCount: number;
  endDate: string;
  sevaType: string;
  active: boolean;
  successStory?: string;
  successStoryHi?: string;
  media?: CampaignMedia[];
  topDonors?: CampaignDonor[];
  completedDate?: string;
}

export const campaigns: Campaign[] = [
  {
    id: "1",
    slug: "fund-100-dialysis-sessions",
    title: "Fund 100 Dialysis Sessions",
    titleHi: "100 डायलिसिस सत्रों का वित्तपोषण",
    description:
      "Help us provide 100 free haemodialysis sessions at Anand Hospital, Dahisar for patients who cannot afford life-saving treatment. Each session costs approximately ₹1,500 and keeps a kidney patient alive.",
    descriptionHi:
      "उन रोगियों के लिए आनंद अस्पताल, दहिसर में 100 निःशुल्क हेमोडायलिसिस सत्र प्रदान करने में हमारी सहायता करें जो जीवन रक्षक उपचार का खर्च वहन नहीं कर सकते।",
    goal: 150000,
    raised: 87500,
    donorCount: 64,
    endDate: "2026-06-30",
    sevaType: "Healthcare",
    active: true,
  },
  {
    id: "2",
    slug: "wheelchairs-for-20-divyang",
    title: "Wheelchairs for 20 Divyang",
    titleHi: "20 दिव्यांगों के लिए व्हीलचेयर",
    description:
      "Provide quality wheelchairs to 20 differently-abled individuals who lack mobility. Each wheelchair costs ₹5,000 and restores independence and dignity to someone in need.",
    descriptionHi:
      "20 दिव्यांग व्यक्तियों को गुणवत्तापूर्ण व्हीलचेयर प्रदान करें। प्रत्येक व्हीलचेयर की लागत ₹5,000 है और यह किसी ज़रूरतमंद को स्वतंत्रता और सम्मान लौटाती है।",
    goal: 100000,
    raised: 45000,
    donorCount: 31,
    endDate: "2026-05-15",
    sevaType: "Divyang Seva",
    active: true,
  },
  {
    id: "3",
    slug: "flood-relief-emergency-fund",
    title: "Flood Relief Emergency Fund",
    titleHi: "बाढ़ राहत आपातकालीन कोष",
    description:
      "Urgent relief for flood-affected families across India. Funds provide food packets, clean water, medicines, blankets, and temporary shelter to displaced families in crisis.",
    descriptionHi:
      "भारत भर में बाढ़ प्रभावित परिवारों के लिए तत्काल राहत। कोष विस्थापित परिवारों को भोजन, स्वच्छ पानी, दवाइयाँ, कम्बल और अस्थायी आश्रय प्रदान करता है।",
    goal: 500000,
    raised: 312000,
    donorCount: 218,
    endDate: "2026-08-31",
    sevaType: "Disaster Relief",
    active: true,
  },
  {
    id: "4",
    slug: "punjab-flood-relief-2023",
    title: "Punjab Flood Relief — Islampur Village",
    titleHi: "पंजाब बाढ़ राहत — इस्लामपुर गाँव",
    description:
      "Emergency relief for flood-affected families in Islampur Village, Punjab. Funds provided food, clean water, medicines, blankets, and rebuilding assistance to 50+ displaced families.",
    descriptionHi:
      "इस्लामपुर गाँव, पंजाब में बाढ़ प्रभावित परिवारों के लिए आपातकालीन राहत। 50+ विस्थापित परिवारों को भोजन, स्वच्छ पानी, दवाइयाँ, कम्बल और पुनर्निर्माण सहायता प्रदान की गई।",
    goal: 300000,
    raised: 300000,
    donorCount: 187,
    endDate: "2023-10-15",
    sevaType: "Disaster Relief",
    active: false,
    completedDate: "2023-10-15",
    successStory:
      "The Punjab Flood Relief campaign successfully provided emergency assistance to over 50 families in Islampur Village. Within 48 hours of the floods, our team deployed with food packets, clean drinking water, essential medicines, warm blankets, and temporary shelter materials. Working alongside local volunteers, we established a relief camp that served as a base of operations for two weeks. Beyond immediate relief, we contributed ₹25,000 per family through PM Cares fund channeling for permanent rebuilding, helping families reconstruct their homes and restore their livelihoods.",
    successStoryHi:
      "पंजाब बाढ़ राहत अभियान ने इस्लामपुर गाँव में 50 से अधिक परिवारों को सफलतापूर्वक आपातकालीन सहायता प्रदान की। बाढ़ के 48 घंटों के भीतर, हमारी टीम ने भोजन पैकेट, स्वच्छ पेयजल, आवश्यक दवाइयाँ, गर्म कम्बल और अस्थायी आश्रय सामग्री के साथ तैनाती की।",
    media: [
      {
        id: "m4-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Relief camp setup at Islampur Village community ground",
        captionHi: "इस्लामपुर गाँव सामुदायिक मैदान में राहत शिविर की स्थापना",
        order: 1,
      },
      {
        id: "m4-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Food and water distribution to flood-affected families",
        captionHi: "बाढ़ प्रभावित परिवारों को भोजन और पानी का वितरण",
        order: 2,
      },
      {
        id: "m4-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Medical aid camp providing free medicines and check-ups",
        captionHi: "निःशुल्क दवाइयाँ और जाँच प्रदान करने वाला चिकित्सा शिविर",
        order: 3,
      },
      {
        id: "m4-4",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Rebuilding work underway with community participation",
        captionHi: "सामुदायिक भागीदारी के साथ पुनर्निर्माण कार्य जारी",
        order: 4,
      },
    ],
    topDonors: [
      {
        id: "d4-1",
        name: "Rajesh Malhotra",
        amount: 50000,
        source: "online",
        date: "2023-08-12",
      },
      {
        id: "d4-2",
        name: "Sunita Sharma",
        amount: 25000,
        source: "offline",
        date: "2023-08-15",
      },
      {
        id: "d4-3",
        name: "Vikram Singh Dhillon",
        amount: 20000,
        source: "online",
        date: "2023-08-14",
      },
      {
        id: "d4-4",
        name: "Parveen Kaur",
        amount: 10000,
        source: "offline",
        date: "2023-09-01",
      },
      {
        id: "d4-5",
        name: "Amit Bhatia",
        amount: 5000,
        source: "online",
        date: "2023-09-10",
      },
    ],
  },
  {
    id: "5",
    slug: "winter-blanket-drive-2023",
    title: "Winter Blanket Distribution Drive",
    titleHi: "शीतकालीन कम्बल वितरण अभियान",
    description:
      "Distributed 500 warm blankets to homeless and underprivileged families across Delhi NCR during the harsh winter months. Each blanket provided warmth and dignity to those sleeping on the streets.",
    descriptionHi:
      "कड़ाके की सर्दी में दिल्ली एनसीआर में बेघर और वंचित परिवारों को 500 गर्म कम्बल वितरित किए। प्रत्येक कम्बल ने सड़कों पर सोने वालों को गर्माहट और सम्मान दिया।",
    goal: 150000,
    raised: 150000,
    donorCount: 92,
    endDate: "2024-01-31",
    sevaType: "Janseva",
    active: false,
    completedDate: "2024-01-31",
    successStory:
      "The Winter Blanket Distribution Drive successfully delivered 500 warm blankets to homeless and underprivileged individuals across Delhi NCR. Our volunteers covered night shelters in Rohini, Kashmere Gate, and Nizamuddin, railway stations including New Delhi and Old Delhi, and footpaths along major roads in central Delhi. Each blanket was personally handed over with hot tea and biscuits. The drive ran through December and January, the coldest months, ensuring that those most vulnerable to the winter chill received protection when they needed it most.",
    successStoryHi:
      "शीतकालीन कम्बल वितरण अभियान ने दिल्ली एनसीआर में बेघर और वंचित व्यक्तियों को सफलतापूर्वक 500 गर्म कम्बल वितरित किए। हमारे स्वयंसेवकों ने रोहिणी, कश्मीरी गेट और निज़ामुद्दीन के रैन बसेरों, नई दिल्ली और पुरानी दिल्ली रेलवे स्टेशनों, और मध्य दिल्ली की प्रमुख सड़कों पर फुटपाथों को कवर किया। प्रत्येक कम्बल गर्म चाय और बिस्कुट के साथ व्यक्तिगत रूप से सौंपा गया। यह अभियान दिसंबर और जनवरी में चला, जो सबसे ठंडे महीने हैं, यह सुनिश्चित करते हुए कि सर्दी से सबसे अधिक प्रभावित लोगों को सुरक्षा मिले।",
    media: [
      {
        id: "m5-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Volunteers distributing blankets at Kashmere Gate night shelter",
        captionHi: "कश्मीरी गेट रैन बसेरे में कम्बल वितरित करते स्वयंसेवक",
        order: 1,
      },
      {
        id: "m5-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Blanket distribution at New Delhi Railway Station",
        captionHi: "नई दिल्ली रेलवे स्टेशन पर कम्बल वितरण",
        order: 2,
      },
      {
        id: "m5-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Hot tea and blankets being shared on a cold winter night",
        captionHi: "ठंडी सर्दियों की रात में गर्म चाय और कम्बल बाँटे गए",
        order: 3,
      },
    ],
    topDonors: [
      {
        id: "d5-1",
        name: "Neha Agarwal",
        amount: 25000,
        source: "online",
        date: "2023-12-05",
      },
      {
        id: "d5-2",
        name: "Deepak Verma",
        amount: 15000,
        source: "offline",
        date: "2023-12-10",
      },
      {
        id: "d5-3",
        name: "Priya Mehta",
        amount: 10000,
        source: "online",
        date: "2023-12-18",
      },
      {
        id: "d5-4",
        name: "Harish Chandra Gupta",
        amount: 10000,
        source: "offline",
        date: "2024-01-02",
      },
      {
        id: "d5-5",
        name: "Kavita Joshi",
        amount: 5000,
        source: "online",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: "6",
    slug: "dialysis-machine-fund-2024",
    title: "Fund a Dialysis Machine",
    titleHi: "डायलिसिस मशीन कोष",
    description:
      "Successfully raised funds for a new haemodialysis machine at Anand Hospital, Dahisar. The machine now serves 3 shifts daily, providing free treatment to kidney patients who cannot afford care.",
    descriptionHi:
      "आनंद अस्पताल, दहिसर में एक नई हेमोडायलिसिस मशीन के लिए सफलतापूर्वक कोष जुटाया गया। मशीन अब प्रतिदिन 3 शिफ्ट में सेवा देती है।",
    goal: 500000,
    raised: 525000,
    donorCount: 314,
    endDate: "2024-06-30",
    sevaType: "Healthcare",
    active: false,
    completedDate: "2024-06-30",
    successStory:
      "The Dialysis Machine Fund campaign exceeded its goal, raising ₹5,25,000 against a target of ₹5,00,000. The funds were used to purchase and install a new state-of-the-art haemodialysis machine at Anand Hospital, Dahisar. The machine became operational in July 2024 and now serves 3 shifts daily — morning, afternoon, and evening — providing free dialysis treatment to kidney patients who cannot afford care. In its first three months of operation, the machine completed over 270 sessions, directly benefiting 45 patients. The surplus funds were allocated to maintenance and consumables, ensuring uninterrupted service for the first year.",
    successStoryHi:
      "डायलिसिस मशीन कोष अभियान ने अपने लक्ष्य से अधिक राशि जुटाई, ₹5,00,000 के लक्ष्य के मुकाबले ₹5,25,000 एकत्र किए। इन निधियों का उपयोग आनंद अस्पताल, दहिसर में एक नई अत्याधुनिक हेमोडायलिसिस मशीन खरीदने और स्थापित करने के लिए किया गया। मशीन जुलाई 2024 में चालू हुई और अब प्रतिदिन 3 शिफ्ट — सुबह, दोपहर और शाम — में सेवा देती है, उन गुर्दा रोगियों को निःशुल्क डायलिसिस उपचार प्रदान करती है जो इलाज का खर्च वहन नहीं कर सकते। संचालन के पहले तीन महीनों में, मशीन ने 270 से अधिक सत्र पूरे किए, जिससे 45 रोगियों को सीधा लाभ हुआ।",
    media: [
      {
        id: "m6-1",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "The new haemodialysis machine installed at Anand Hospital",
        captionHi: "आनंद अस्पताल में स्थापित नई हेमोडायलिसिस मशीन",
        order: 1,
      },
      {
        id: "m6-2",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Inauguration ceremony with hospital staff and society members",
        captionHi: "अस्पताल कर्मचारियों और समाज सदस्यों के साथ उद्घाटन समारोह",
        order: 2,
      },
      {
        id: "m6-3",
        type: "photo",
        url: "/placeholder-gallery.jpg",
        caption: "Patient receiving free dialysis treatment on the new machine",
        captionHi: "नई मशीन पर निःशुल्क डायलिसिस उपचार प्राप्त करता रोगी",
        order: 3,
      },
    ],
    topDonors: [
      {
        id: "d6-1",
        name: "Ramesh Patel",
        amount: 50000,
        source: "offline",
        date: "2024-02-20",
      },
      {
        id: "d6-2",
        name: "Anita Deshmukh",
        amount: 35000,
        source: "online",
        date: "2024-03-05",
      },
      {
        id: "d6-3",
        name: "Anonymous",
        amount: 25000,
        source: "online",
        date: "2024-04-12",
        isAnonymous: true,
      },
      {
        id: "d6-4",
        name: "Suresh Kumar Tiwari",
        amount: 20000,
        source: "offline",
        date: "2024-03-28",
      },
      {
        id: "d6-5",
        name: "Meena Iyer",
        amount: 15000,
        source: "online",
        date: "2024-05-15",
      },
    ],
  },
];
