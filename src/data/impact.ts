export interface ImpactTier {
  amount: number;
  label: string;
  labelHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
}

export const impactTiers: ImpactTier[] = [
  {
    amount: 500,
    label: "1 Week Pension",
    labelHi: "1 सप्ताह की पेंशन",
    description: "Provides one week of pension support for an elderly person in need.",
    descriptionHi: "एक बुजुर्ग व्यक्ति को एक सप्ताह की पेंशन सहायता प्रदान करता है।",
    icon: "👴",
  },
  {
    amount: 1500,
    label: "1 Dialysis Session",
    labelHi: "1 डायलिसिस सत्र",
    description: "Funds one complete haemodialysis session at our free dialysis centre.",
    descriptionHi: "हमारे निःशुल्क डायलिसिस केंद्र में एक पूर्ण हेमोडायलिसिस सत्र का वित्तपोषण।",
    icon: "🏥",
  },
  {
    amount: 2000,
    label: "1 Month Pension",
    labelHi: "1 माह की पेंशन",
    description: "Covers one full month of pension for a widow or disabled individual.",
    descriptionHi: "एक विधवा या दिव्यांग व्यक्ति के लिए एक पूरे माह की पेंशन।",
    icon: "💰",
  },
  {
    amount: 5000,
    label: "1 Wheelchair",
    labelHi: "1 व्हीलचेयर",
    description: "Provides a quality wheelchair to a differently-abled person.",
    descriptionHi: "एक दिव्यांग व्यक्ति को एक गुणवत्तापूर्ण व्हीलचेयर प्रदान करता है।",
    icon: "🦽",
  },
  {
    amount: 10000,
    label: "1 Month Gaushala Feed",
    labelHi: "1 माह गौशाला चारा",
    description: "Feeds and maintains cows at the gaushala for one full month.",
    descriptionHi: "एक पूरे माह के लिए गौशाला में गायों का भरण-पोषण।",
    icon: "🐄",
  },
  {
    amount: 25000,
    label: "Marriage Assistance",
    labelHi: "विवाह सहायता",
    description: "Provides complete wedding assistance for one underprivileged family.",
    descriptionHi: "एक वंचित परिवार को पूर्ण विवाह सहायता प्रदान करता है।",
    icon: "💐",
  },
  {
    amount: 50000,
    label: "Disaster Relief Kit (10 Families)",
    labelHi: "आपदा राहत किट (10 परिवार)",
    description: "Emergency relief kits with food, water, medicine, and shelter for 10 families.",
    descriptionHi: "10 परिवारों के लिए भोजन, पानी, दवा और आश्रय सहित आपातकालीन राहत किट।",
    icon: "🆘",
  },
];

export const faqs = [
  {
    category: "donations",
    question: "Is my donation eligible for tax deduction?",
    questionHi: "क्या मेरा दान कर कटौती के लिए पात्र है?",
    answer: "Yes. Donations to Shri Radhe Maa Charitable Society are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive an official receipt for your records.",
    answerHi: "हाँ। श्री राधे माँ चैरिटेबल सोसाइटी को किए गए दान आयकर अधिनियम की धारा 80G के तहत कर कटौती के पात्र हैं।",
  },
  {
    category: "donations",
    question: "How do I get my 80G receipt?",
    questionHi: "मुझे अपनी 80G रसीद कैसे मिलेगी?",
    answer: "After making a donation, contact us at shriradhemaacharitablesociety@gmail.com or call 95608 00343 with your donation details. We will issue an official 80G receipt within 7 working days.",
    answerHi: "दान करने के बाद, अपने दान के विवरण के साथ हमसे ईमेल या फोन पर संपर्क करें। हम 7 कार्य दिवसों के भीतर आधिकारिक 80G रसीद जारी करेंगे।",
  },
  {
    category: "donations",
    question: "Can I choose which programme my donation supports?",
    questionHi: "क्या मैं चुन सकता हूँ कि मेरा दान किस कार्यक्रम का समर्थन करे?",
    answer: "Yes. When donating, you can designate your contribution to a specific seva — Free Dialysis, Financial Aid, Disaster Relief, Divyang Seva, Gaushala, or the General Fund.",
    answerHi: "हाँ। दान करते समय आप अपना योगदान किसी विशेष सेवा के लिए निर्दिष्ट कर सकते हैं।",
  },
  {
    category: "volunteering",
    question: "How can I volunteer with the society?",
    questionHi: "मैं सोसाइटी में स्वयंसेवा कैसे कर सकता हूँ?",
    answer: "Contact us at 95608 00343 or email shriradhemaacharitablesociety@gmail.com expressing your interest. We welcome volunteers for distribution drives, event organisation, and seva camps.",
    answerHi: "अपनी रुचि व्यक्त करते हुए हमसे फोन या ईमेल पर संपर्क करें। हम वितरण अभियानों, कार्यक्रम आयोजन और सेवा शिविरों के लिए स्वयंसेवकों का स्वागत करते हैं।",
  },
  {
    category: "programmes",
    question: "How do I apply for financial assistance or pension?",
    questionHi: "मैं वित्तीय सहायता या पेंशन के लिए कैसे आवेदन करूँ?",
    answer: "Please call our Delhi office at 95608 00343 or send an email to shriradhemaacharitablesociety@gmail.com. Our team will guide you through the application process and assess your eligibility.",
    answerHi: "कृपया हमारे दिल्ली कार्यालय को 95608 00343 पर कॉल करें या ईमेल भेजें। हमारी टीम आवेदन प्रक्रिया में आपका मार्गदर्शन करेगी।",
  },
  {
    category: "programmes",
    question: "How do I reach the free dialysis centre in Mumbai?",
    questionHi: "मैं मुंबई में निःशुल्क डायलिसिस केंद्र तक कैसे पहुँचूँ?",
    answer: "The dialysis centre is at Anand Hospital, 2nd Floor, Dahisar Village, Anand Nagar, Dahisar East, Mumbai – 400068. Call 86570 67228 or 98921 54615 for details.",
    answerHi: "डायलिसिस केंद्र आनंद अस्पताल, दूसरी मंज़िल, दहिसर गाँव, आनंद नगर, दहिसर पूर्व, मुंबई – 400068 में है।",
  },
  {
    category: "general",
    question: "Is the society a registered organisation?",
    questionHi: "क्या सोसाइटी एक पंजीकृत संगठन है?",
    answer: "Yes. Shri Radhe Maa Charitable Society is registered under the Societies Registration Act with registration number S/2930/SDM/NW/2017. We are also 80G certified by the Income Tax Department.",
    answerHi: "हाँ। श्री राधे माँ चैरिटेबल सोसाइटी सोसायटी पंजीकरण अधिनियम के तहत पंजीकृत है। हम आयकर विभाग द्वारा 80G प्रमाणित भी हैं।",
  },
  {
    category: "general",
    question: "Can I visit your projects?",
    questionHi: "क्या मैं आपकी परियोजनाओं का दौरा कर सकता हूँ?",
    answer: "Yes, we welcome visitors. Please call our Delhi office at 95608 00343 to schedule a visit to our office or any of our seva centres.",
    answerHi: "हाँ, हम आगंतुकों का स्वागत करते हैं। कृपया अपने दौरे का समय निर्धारित करने के लिए हमारे दिल्ली कार्यालय को कॉल करें।",
  },
];
