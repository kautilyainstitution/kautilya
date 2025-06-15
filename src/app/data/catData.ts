// data/catData.ts
 
import { IIMRanking, NonEngineerCutoff,TopBSchool,CatSyllabus, PercentileData, ApplicationDeadline, BSchoolRanking } from "@/types/cat";

export const iimRankings: IIMRanking[] = [
  { rank: 1, name: "IIM Ahmedabad", catCutoff: 99 },
  { rank: 2, name: "IIM Bangalore", catCutoff: 99 },
  { rank: 3, name: "IIM Calcutta", catCutoff: 99 },
  { rank: 4, name: "IIM Lucknow", catCutoff: 97 },
  { rank: 5, name: "IIM Kozhikode", catCutoff: 97 },
  { rank: 6, name: "IIM Indore", catCutoff: 97 },
  { rank: 7, name: "IIM Shillong", catCutoff: 95 },
  { rank: 8, name: "IIM Ranchi", catCutoff: 92 },
  { rank: 9, name: "IIM Trichy", catCutoff: 92 },
  { rank: 10, name: "IIM Udaipur", catCutoff: 92 },
  { rank: 11, name: "IIM Raipur", catCutoff: 92 },
  { rank: 12, name: "IIM Kashipur", catCutoff: 92 },
  { rank: 13, name: "IIM Rohtak", catCutoff: 95 },
  { rank: 14, name: "IIM Vizag", catCutoff: 80 },
  { rank: 15, name: "IIM Nagpur", catCutoff: 90 },
  { rank: 16, name: "IIM Amritsar", catCutoff: 85 },
  { rank: 17, name: "IIM Bodhgaya", catCutoff: 92 },
  { rank: 18, name: "IIM Jammu", catCutoff: 90 },
  { rank: 19, name: "IIM Sirmaur", catCutoff: 92 },
  { rank: 20, name: "IIM Sambalpur", catCutoff: 92 }
];

export const nonEngineerCutoffs: NonEngineerCutoff[] = [
  { rank: 1, name: "IIM Ahmedabad", cutoff: "80%ile" },
  { rank: 2, name: "IIM Bangalore", cutoff: "85%ile" },
  { rank: 3, name: "IIM Calcutta", cutoff: "85%ile" },
  { rank: 4, name: "IIM Lucknow", cutoff: "90%ile" },
  { rank: 5, name: "IIM Kozhikode", cutoff: "85%ile" },
  { rank: 6, name: "IIM Indore", cutoff: "90%ile" },
  { rank: 7, name: "IIM Shillong", cutoff: "85%ile" },
  { rank: 8, name: "IIM Ranchi", cutoff: "80%ile" },
  { rank: 9, name: "IIM Trichy", cutoff: "80%ile" },
  { rank: 10, name: "IIM Udaipur", cutoff: "80%ile" },
  { rank: 11, name: "IIM Raipur", cutoff: "80%ile" },
  { rank: 12, name: "IIM Kashipur", cutoff: "80%ile" },
  { rank: 13, name: "IIM Rohtak", cutoff: "85%ile" },
  { rank: 14, name: "IIM Vizag", cutoff: "70%ile" },
  { rank: 15, name: "IIM Nagpur", cutoff: "75%ile" },
  { rank: 16, name: "IIM Amritsar", cutoff: "75%ile" },
  { rank: 17, name: "IIM Bodhgaya", cutoff: "80%ile" },
  { rank: 18, name: "IIM Jammu", cutoff: "75%ile" },
  { rank: 19, name: "IIM Sirmaur", cutoff: "80%ile" },
  { rank: 20, name: "IIM Sambalpur", cutoff: "80%ile" }
];

export const topBSchools: TopBSchool[] = [
  { rank: 1, name: "FMS Delhi", test: "CAT-98%ile" },
  { rank: 2, name: "XLRI Jamshedpur", test: "XAT-95%ile" },
  { rank: 3, name: "TISS Mumbai", test: "TISSNET-72/100" },
  { rank: 4, name: "JBIMS Mumbai", test: "MAHCET-95%ile" },
  { rank: 5, name: "SPJMR Mumbai", test: "SPJAT-85%ile" },
  { rank: 6, name: "MDI Gurgaon", test: "CAT-95%ile" },
  { rank: 7, name: "IIFT", test: "IIFT-93/300" },
  { rank: 8, name: "IIT Mumbai", test: "CAT-95%ile" },
  { rank: 9, name: "NITIE Mumbai", test: "CAT-91%ile" },
  { rank: 10, name: "IIT Delhi", test: "CAT-95%ile" },
  { rank: 11, name: "SIBM Pune", test: "SNAP-98.5%ile" },
  { rank: 12, name: "NMIMS Mumbai", test: "NMAT-94%ile" },
  { rank: 13, name: "IIT Kharagpur", test: "CAT-90%ile" },
  { rank: 14, name: "MICA Ahmedabad", test: "MICAT-85%ile" },
  { rank: 15, name: "IMT Ghaziabad", test: "CAT-90%ile" },
  { rank: 16, name: "IMI New Delhi", test: "CAT-90%ile" },
  { rank: 17, name: "IRMA Anand", test: "IRMA-80%ile" },
  { rank: 18, name: "SIMSREE Mumbai", test: "MAHCET-99%ile" },
  { rank: 19, name: "Great Lakes Chennai", test: "CAT-80%ile" },
  { rank: 20, name: "IIT Madras", test: "CAT-90%ile" },
  { rank: 21, name: "TAPMI Manipal", test: "CAT-85%ile" },
  { rank: 22, name: "IISC Bengaluru", test: "CAT-98%ile" },
  { rank: 23, name: "IIT Kanpur", test: "CAT-80%ile" },
  { rank: 24, name: "MFC Delhi", test: "CAT-70%ile" },
  { rank: 25, name: "IIT Roorkee", test: "CAT-90%ile" },
  { rank: 26, name: "GIM Goa", test: "CAT-85%ile" },
  { rank: 27, name: "KJ Somaiya Mumbai", test: "CAT-85%ile" },
  { rank: 28, name: "BIM Trichy", test: "CAT-85%ile" },
  { rank: 29, name: "BITS Pilani", test: "BITSAT-75%ile" },
  { rank: 30, name: "DBE Delhi University", test: "CAT-90%ile" },
  { rank: 31, name: "LIBA Chennai", test: "LIBA-80%ile" },
  { rank: 32, name: "FORE School Delhi", test: "CAT-85%ile" },
  { rank: 33, name: "NIRMA Ahmedabad", test: "CAT-65%ile" },
  { rank: 34, name: "LBSIM Delhi", test: "CAT-85%ile" },
  { rank: 35, name: "IFMR Sri City", test: "CAT-80%ile" }
];

export const catSyllabus: CatSyllabus[] = [
  {key1:"Number Systems",key2:"Linear Equations", key3:"Ratio & Proportion"},
  {key1:"HCF & LCM",key2:"Quadratic Equations", key3:"Time & Work"},
  {key1:"Profit, Loss & Discount",key2:"Complex Numbers", key3:"Set Theory & Function"},
  {key1:"Time, Speed & Distance",key2:"Logarithm", key3:"Coordinate Geometry"},
  {key1:"Percentages",key2:"Sequence & Series", key3:"Geometry"},
  {key1:"Simple & Compound Interest",key2:"Inequalities", key3:"Mensuration"},
  {key1:"Averages",key2:"Surds & Indices", key3:"Trigonometry"},
  {key1:"Mixtures & Allegations",key2:"Probability", key3:"Permutation, Combination"},
];

export const percentileData: PercentileData[] = [
  { percentile: "99.5", score: 37, questions: 12 },
  // ... add all percentile data
];

export const applicationDeadlines: ApplicationDeadline[] = [
  { rank: 1, name: "Narsi Monji Institute", entranceTest: "NMAT", lastDate: "Oct", cutoff: "94%ile", fees: "₹2800" },
  { rank: 2, name: "Symbiosis Pune", entranceTest: "SNAP (Dec)", lastDate: "Nov", cutoff: "98.5%ile", fees: "₹1950" },
  { rank: 3, name: "SPJAI Mumbai", entranceTest: "SPJAT", lastDate: "Nov", cutoff: "85%ile", fees: "₹2000" },
  { rank: 4, name: "MDI Gurgaon", entranceTest: "CAT", lastDate: "Nov", cutoff: "95%ile", fees: "₹3000" },
  { rank: 5, name: "IMT Ghaziabad", entranceTest: "CAT", lastDate: "Nov", cutoff: "90%ile", fees: "₹2500" },
  { rank: 6, name: "XLRI Jamshedpur", entranceTest: "XAT (Jan)", lastDate: "Nov", cutoff: "95%ile", fees: "₹2000" },
  { rank: 7, name: "Great Lakes Chennai", entranceTest: "CAT", lastDate: "Dec", cutoff: "80%ile", fees: "₹2000" },
  { rank: 8, name: "MAT Paper-based", entranceTest: "MAT (Dec)", lastDate: "Dec", cutoff: "700/800", fees: "₹1850" },
  { rank: 9, name: "GIM Goa", entranceTest: "CAT", lastDate: "Dec", cutoff: "85%ile", fees: "₹2000" },
  { rank: 10, name: "FMS Delhi", entranceTest: "CAT", lastDate: "Dec", cutoff: "98%ile", fees: "₹1000" },
  { rank: 11, name: "MAT Computer-based", entranceTest: "MAT (Dec)", lastDate: "Dec", cutoff: "700/800", fees: "₹1850" },
  { rank: 12, name: "IMI Delhi", entranceTest: "CAT", lastDate: "Dec", cutoff: "87-90%ile", fees: "₹2200" },
  { rank: 13, name: "TAPMI Manipal", entranceTest: "CAT", lastDate: "Dec", cutoff: "85%ile", fees: "₹1850" },
  { rank: 14, name: "IRMA Gujarat", entranceTest: "IRMA", lastDate: "Dec", cutoff: "80%ile", fees: "₹2000" },
  { rank: 15, name: "Hyderabad Central University", entranceTest: "HUCET", lastDate: "Dec", cutoff: "75%ile", fees: "₹600" },
  { rank: 16, name: "KJ Somaiya Mumbai", entranceTest: "CAT", lastDate: "Jan", cutoff: "85%ile", fees: "₹3000" },
  { rank: 17, name: "TATA Institute", entranceTest: "TISSNET (Jan)", lastDate: "Jan", cutoff: "72/100", fees: "₹1030" },
  { rank: 18, name: "LIBA Chennai", entranceTest: "LIBA", lastDate: "Jan", cutoff: "80%ile", fees: "₹2000" },
  { rank: 19, name: "CMAT", entranceTest: "CMAT (Feb)", lastDate: "Jan", cutoff: "90%ile", fees: "₹2000" },
  { rank: 20, name: "XIM Bhubaneswar", entranceTest: "CAT", lastDate: "Jan", cutoff: "85%ile", fees: "₹1600" },
  { rank: 21, name: "IITs (Delhi/Mumbai/Roorkee/Chennai)", entranceTest: "CAT", lastDate: "Jan", cutoff: "95-98%ile", fees: "₹1600" },
  { rank: 22, name: "BIM Trichy", entranceTest: "CAT", lastDate: "Jan", cutoff: "85%ile", fees: "₹1250" },
  { rank: 23, name: "DBE Delhi University", entranceTest: "CAT", lastDate: "Jan", cutoff: "90%ile", fees: "₹2000" },
  { rank: 24, name: "FORE School Delhi", entranceTest: "CAT", lastDate: "Jan", cutoff: "85%ile", fees: "₹1770" },
  { rank: 25, name: "Nirma University Ahmedabad", entranceTest: "CAT", lastDate: "Jan", cutoff: "65%ile", fees: "₹1500" },
  { rank: 26, name: "NITIE Mumbai", entranceTest: "CAT", lastDate: "Feb", cutoff: "91%ile", fees: "₹1000" },
  { rank: 27, name: "BITS Pilani", entranceTest: "BITSAT", lastDate: "Feb", cutoff: "75%ile", fees: "₹3300" },
  { rank: 28, name: "IFMR Sri City", entranceTest: "CAT", lastDate: "Mar", cutoff: "80%ile", fees: "₹1500" },
  { rank: 29, name: "JBIMS Mumbai", entranceTest: "MAHCET", lastDate: "Jun", cutoff: "95%ile", fees: "₹1000" },
  { rank: 30, name: "LBSIM New Delhi", entranceTest: "CAT", lastDate: "Jun", cutoff: "85%ile", fees: "₹1500" }
];


export const BSchoolData: BSchoolRanking[] = [
  {
    "rank": 1,
    "name": "FMS- Delhi",
    "cutoff": "98%ile"
  },
  {
    "rank": 2,
    "name": "XLRI",
    "cutoff": "XAT- 95%ile"
  },
  {
    "rank": 3,
    "name": "TISS- Mumbai",
    "cutoff": "TISSNET -72 marks out of 100"
  },
  {
    "rank": 4,
    "name": "JBIMS (Mumbai)",
    "cutoff": "95%ile"
  },
  {
    "rank": 5,
    "name": "SPJMR (Mumbai)",
    "cutoff": "85%ile"
  },
  {
    "rank": 6,
    "name": "MDI (Gurgaon)",
    "cutoff": "95%ile"
  },
  {
    "rank": 7,
    "name": "IIFT",
    "cutoff": "93 marks out of 300"
  },
  {
    "rank": 8,
    "name": "IIT-Mumbai",
    "cutoff": "95%ile"
  },
  {
    "rank": 9,
    "name": "NITIE (Mumbai)",
    "cutoff": "91% ile"
  },
  {
    "rank": 10,
    "name": "IIT- Delhi",
    "cutoff": "95%ile"
  },
  {
    "rank": 11,
    "name": "SIBM-Pune",
    "cutoff": "SNAP98.5%ile"
  },
  {
    "rank": 12,
    "name": "NMIMS- Mumbai",
    "cutoff": "NMAT - 94%ile"
  },
  {
    "rank": 13,
    "name": "IIT-Kharagpur",
    "cutoff": "90%ile"
  },
  {
    "rank": 14,
    "name": "MICA (Ahmedabad)",
    "cutoff": "85%ile"
  },
  {
    "rank": 15,
    "name": "IMT-Ghaziabad",
    "cutoff": "90%ile"
  },
  {
    "rank": 16,
    "name": "IMI- New Delhi",
    "cutoff": "90 %ile"
  },
  {
    "rank": 17,
    "name": "IRMA- Anand",
    "cutoff": "80%ile"
  },
  {
    "rank": 18,
    "name": "SIMSREE (Mumbai)",
    "cutoff": "99%ile (MAHCET)"
  },
  {
    "rank": 19,
    "name": "Greatlakes (Chennai)",
    "cutoff": "80%ile"
  },
  {
    "rank": 20,
    "name": "IIT- Madras",
    "cutoff": "90%ile"
  },
  {
    "rank": 21,
    "name": "TAPMI (Mumbai)",
    "cutoff": "85%ile"
  },
  {
    "rank": 22,
    "name": "IISC- Bengaluru",
    "cutoff": "98%ile"
  },
  {
    "rank": 23,
    "name": "IIT-Kanpur",
    "cutoff": "80%ile"
  },
  {
    "rank": 24,
    "name": "MFC- New Delhi",
    "cutoff": "70%ile"
  },
  {
    "rank": 25,
    "name": "IIT- Roorkee",
    "cutoff": "90%ile"
  },
  {
    "rank": 26,
    "name": "GIM (Goa)",
    "cutoff": "85%ile"
  },
  {
    "rank": 27,
    "name": "KJ Somaiya(Mumbai)",
    "cutoff": "85%ile"
  },
  {
    "rank": 28,
    "name": "BIM-Trichy",
    "cutoff": "85%ile"
  },
  {
    "rank": 29,
    "name": "BITS-Pilani",
    "cutoff": "75%ile"
  },
  {
    "rank": 30,
    "name": "DBE- Delhi Uni.",
    "cutoff": "90%ile"
  },
  {
    "rank": 31,
    "name": "LIBA- Chennai",
    "cutoff": "80%ile"
  },
  {
    "rank": 32,
    "name": "FORE School (Delhi)",
    "cutoff": "85%ile"
  },
  {
    "rank": 33,
    "name": "NIRMA University(Ahmedabad)",
    "cutoff": "65%ile"
  },
  {
    "rank": 34,
    "name": "LBS- New Delhi",
    "cutoff": "85%ile"
  },
  {
    "rank": 35,
    "name": "IFMR- Sri city",
    "cutoff": "80%ile"
  }
]