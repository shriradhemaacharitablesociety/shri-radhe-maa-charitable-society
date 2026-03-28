export interface Story {
  id: string;
  name: string;
  nameHi: string;
  sevaType: "dialysis" | "pension" | "divyang" | "disaster" | "marriage" | "gaushala";
  quote: string;
  quoteHi: string;
  fullStory: string;
  location: string;
  featured: boolean;
}

export const stories: Story[] = [
  {
    id: "ramesh-sharma",
    name: "Ramesh Sharma",
    nameHi: "रमेश शर्मा",
    sevaType: "dialysis",
    quote: "The free dialysis centre saved my life when I couldn't afford treatment.",
    quoteHi: "जब मैं इलाज का खर्च नहीं उठा सकता था, तब निःशुल्क डायलिसिस केंद्र ने मेरी जान बचाई।",
    fullStory: "Ramesh Sharma, a 58-year-old retired government clerk from Mumbai, was diagnosed with chronic kidney disease in 2022. With his pension barely covering household expenses, dialysis treatments costing ₹1,500 per session three times a week were impossible to afford. Through the society's free 24/7 dialysis centre at Anand Hospital, Dahisar, Ramesh has been receiving regular treatment for over two years. Today, he lives an active life with his family.",
    location: "Mumbai",
    featured: true,
  },
  {
    id: "savitri-devi",
    name: "Savitri Devi",
    nameHi: "सावित्री देवी",
    sevaType: "pension",
    quote: "The monthly pension has given me dignity in my old age.",
    quoteHi: "मासिक पेंशन ने मुझे बुढ़ापे में सम्मान दिया है।",
    fullStory: "Savitri Devi, a 72-year-old widow from Rohini, Delhi, lost her husband in 2019. With no children and no source of income, she struggled to meet basic needs. The society enrolled her in the monthly pension programme, providing ₹2,000 every month. This support covers her food, medicines, and basic necessities, allowing her to live with dignity.",
    location: "Delhi",
    featured: true,
  },
  {
    id: "mohit-kumar",
    name: "Mohit Kumar",
    nameHi: "मोहित कुमार",
    sevaType: "divyang",
    quote: "The wheelchair changed everything — I can move freely now.",
    quoteHi: "व्हीलचेयर ने सब कुछ बदल दिया — अब मैं स्वतंत्र रूप से चल सकता हूँ।",
    fullStory: "Mohit Kumar, a 28-year-old from North Delhi, lost mobility in both legs after an accident in 2021. Unable to afford a quality wheelchair, he was confined to his home for over a year. The society provided him with a motorised wheelchair and mobility training, enabling him to resume his small tailoring business from home.",
    location: "Delhi",
    featured: false,
  },
  {
    id: "kamal-flood-relief",
    name: "Kamal Singh & Family",
    nameHi: "कमल सिंह एवं परिवार",
    sevaType: "disaster",
    quote: "When the floods destroyed everything, the society was the first to reach us.",
    quoteHi: "जब बाढ़ ने सब कुछ तबाह कर दिया, सोसाइटी सबसे पहले हमारे पास पहुँची।",
    fullStory: "During the 2023 floods in Punjab, Kamal Singh's family of six lost their home and all belongings. The society deployed emergency relief within 48 hours — providing food packets, clean water, medicines, blankets, and temporary shelter materials. The family was also given ₹25,000 for rebuilding through the PM Cares fund channelled via the society.",
    location: "Punjab",
    featured: true,
  },
  {
    id: "pooja-marriage",
    name: "Pooja Verma",
    nameHi: "पूजा वर्मा",
    sevaType: "marriage",
    quote: "They made my wedding possible when my family couldn't afford it.",
    quoteHi: "जब मेरा परिवार खर्च वहन नहीं कर सकता था, तब उन्होंने मेरी शादी संभव बनाई।",
    fullStory: "Pooja Verma, the daughter of a daily wage labourer in East Delhi, was engaged to be married in 2024. With no savings for wedding expenses, the family approached the society for help. The society provided comprehensive marriage assistance including wedding essentials, clothes, and financial support of ₹25,000, ensuring Pooja had a dignified wedding ceremony.",
    location: "Delhi",
    featured: false,
  },
];

export const sevaTypeLabels: Record<Story["sevaType"], { en: string; hi: string }> = {
  dialysis: { en: "Free Dialysis", hi: "निःशुल्क डायलिसिस" },
  pension: { en: "Monthly Pension", hi: "मासिक पेंशन" },
  divyang: { en: "Divyang Seva", hi: "दिव्यांग सेवा" },
  disaster: { en: "Disaster Relief", hi: "आपदा राहत" },
  marriage: { en: "Marriage Assistance", hi: "विवाह सहायता" },
  gaushala: { en: "Gaushala", hi: "गौशाला" },
};
