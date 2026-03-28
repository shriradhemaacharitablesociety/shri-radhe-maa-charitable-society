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
];
