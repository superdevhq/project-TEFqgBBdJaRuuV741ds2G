
export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  image?: string;
  answers: Answer[];
  explanation?: string;
}

// 15 שאלות תאוריה למבחני נהיגה בישראל
export const questions: Question[] = [
  {
    id: 1,
    text: "מהי המהירות המרבית המותרת בדרך עירונית?",
    answers: [
      { id: 1, text: "50 קמ\"ש", isCorrect: true },
      { id: 2, text: "60 קמ\"ש", isCorrect: false },
      { id: 3, text: "70 קמ\"ש", isCorrect: false },
      { id: 4, text: "80 קמ\"ש", isCorrect: false }
    ],
    explanation: "המהירות המרבית המותרת בדרך עירונית היא 50 קמ\"ש, אלא אם כן מצוין אחרת בתמרור."
  },
  {
    id: 2,
    text: "מה פירוש תמרור זה?",
    image: "/images/stop-sign.png",
    answers: [
      { id: 1, text: "האט", isCorrect: false },
      { id: 2, text: "תן זכות קדימה", isCorrect: false },
      { id: 3, text: "עצור", isCorrect: true },
      { id: 4, text: "אין כניסה", isCorrect: false }
    ],
    explanation: "תמרור עצור (301) מחייב את הנהג לעצור עצירה מוחלטת לפני קו העצירה."
  },
  {
    id: 3,
    text: "מתי מותר לעקוף רכב אחר מצד ימין?",
    answers: [
      { id: 1, text: "כאשר הרכב שלפניך מאותת שמאלה", isCorrect: true },
      { id: 2, text: "כאשר אתה נוסע בכביש מהיר", isCorrect: false },
      { id: 3, text: "בכל זמן שהנתיב פנוי", isCorrect: false },
      { id: 4, text: "אף פעם לא מותר לעקוף מימין", isCorrect: false }
    ],
    explanation: "מותר לעקוף מצד ימין כאשר הרכב שלפניך מאותת שמאלה ומתכוון לפנות שמאלה."
  },
  {
    id: 4,
    text: "מהו המרחק המינימלי שיש לשמור מהרכב שלפניך בכביש מהיר?",
    answers: [
      { id: 1, text: "שני שניות נסיעה", isCorrect: true },
      { id: 2, text: "10 מטרים", isCorrect: false },
      { id: 3, text: "20 מטרים", isCorrect: false },
      { id: 4, text: "50 מטרים", isCorrect: false }
    ],
    explanation: "יש לשמור מרחק של לפחות שתי שניות נסיעה מהרכב שלפניך בכביש מהיר, ובתנאי מזג אוויר קשים אף יותר."
  },
  {
    id: 5,
    text: "מה עליך לעשות כאשר אתה מתקרב לצומת ללא רמזור או תמרור?",
    answers: [
      { id: 1, text: "להאט ולתת זכות קדימה לרכב הבא מימין", isCorrect: true },
      { id: 2, text: "להמשיך בנסיעה רגילה", isCorrect: false },
      { id: 3, text: "לעצור תמיד", isCorrect: false },
      { id: 4, text: "לתת זכות קדימה לרכב הבא משמאל", isCorrect: false }
    ],
    explanation: "בצומת ללא רמזור או תמרור, חל כלל ימין קודם - יש לתת זכות קדימה לרכב המגיע מימין."
  },
  {
    id: 6,
    text: "מתי חובה להדליק אורות ברכב?",
    answers: [
      { id: 1, text: "בשעות החשיכה בלבד", isCorrect: false },
      { id: 2, text: "בשעות החשיכה ובמנהרה", isCorrect: false },
      { id: 3, text: "בכל נסיעה בדרך בינעירונית", isCorrect: true },
      { id: 4, text: "רק כאשר יש ערפל", isCorrect: false }
    ],
    explanation: "חובה להדליק אורות בכל נסיעה בדרך בינעירונית, בשעות החשיכה, במנהרה, וכאשר הראות לקויה."
  },
  {
    id: 7,
    text: "מהו העונש על נהיגה בשכרות?",
    answers: [
      { id: 1, text: "קנס כספי בלבד", isCorrect: false },
      { id: 2, text: "שלילת רישיון למשך חודש", isCorrect: false },
      { id: 3, text: "שלילת רישיון, קנס כספי ואפשרות למאסר", isCorrect: true },
      { id: 4, text: "אזהרה בלבד בפעם הראשונה", isCorrect: false }
    ],
    explanation: "נהיגה בשכרות היא עבירה חמורה שעונשה יכול לכלול שלילת רישיון, קנס כספי משמעותי ואף מאסר."
  },
  {
    id: 8,
    text: "מהי המהירות המרבית המותרת בדרך בינעירונית שאינה דרך מהירה?",
    answers: [
      { id: 1, text: "80 קמ\"ש", isCorrect: false },
      { id: 2, text: "90 קמ\"ש", isCorrect: true },
      { id: 3, text: "100 קמ\"ש", isCorrect: false },
      { id: 4, text: "110 קמ\"ש", isCorrect: false }
    ],
    explanation: "המהירות המרבית המותרת בדרך בינעירונית שאינה דרך מהירה היא 90 קמ\"ש, אלא אם כן מצוין אחרת בתמרור."
  },
  {
    id: 9,
    text: "מה יש לעשות כאשר רכב חירום (אמבולנס, משטרה, כיבוי אש) מתקרב עם אורות וסירנה?",
    answers: [
      { id: 1, text: "להמשיך בנסיעה רגילה", isCorrect: false },
      { id: 2, text: "להאיץ ולהתרחק", isCorrect: false },
      { id: 3, text: "לפנות לצד הדרך ולעצור", isCorrect: true },
      { id: 4, text: "להאט אבל להמשיך בנסיעה", isCorrect: false }
    ],
    explanation: "כאשר רכב חירום מתקרב עם אורות וסירנה, יש לפנות לצד הדרך ולעצור כדי לאפשר לו לעבור בבטחה."
  },
  {
    id: 10,
    text: "מהו הגיל המינימלי לקבלת רישיון נהיגה לרכב פרטי בישראל?",
    answers: [
      { id: 1, text: "16 שנים", isCorrect: false },
      { id: 2, text: "16 שנים וחצי", isCorrect: false },
      { id: 3, text: "17 שנים", isCorrect: true },
      { id: 4, text: "18 שנים", isCorrect: false }
    ],
    explanation: "הגיל המינימלי לקבלת רישיון נהיגה לרכב פרטי בישראל הוא 17 שנים."
  },
  {
    id: 11,
    text: "מה פירוש הקו הלבן הרצוף במרכז הכביש?",
    answers: [
      { id: 1, text: "מותר לעקוף בזהירות", isCorrect: false },
      { id: 2, text: "אסור לעבור לנתיב הנגדי", isCorrect: true },
      { id: 3, text: "מותר לעבור לנתיב הנגדי רק בפניות", isCorrect: false },
      { id: 4, text: "מסמן את שולי הכביש", isCorrect: false }
    ],
    explanation: "קו לבן רצוף במרכז הכביש מסמן שאסור לעבור לנתיב הנגדי בשום מקרה."
  },
  {
    id: 12,
    text: "האם מותר להשתמש בטלפון נייד בזמן נהיגה?",
    answers: [
      { id: 1, text: "מותר רק בשיחות קצרות", isCorrect: false },
      { id: 2, text: "מותר רק בעצירה ברמזור", isCorrect: false },
      { id: 3, text: "מותר רק עם דיבורית", isCorrect: true },
      { id: 4, text: "מותר בכל מקרה", isCorrect: false }
    ],
    explanation: "מותר להשתמש בטלפון נייד בזמן נהיגה רק באמצעות דיבורית, כאשר הטלפון מקובע ברכב."
  },
  {
    id: 13,
    text: "מה יש לעשות כאשר נתקלים בתמרור \"תן זכות קדימה\"?",
    answers: [
      { id: 1, text: "לעצור תמיד", isCorrect: false },
      { id: 2, text: "להאט ולתת זכות קדימה לתנועה בדרך החוצה", isCorrect: true },
      { id: 3, text: "להמשיך בנסיעה רגילה", isCorrect: false },
      { id: 4, text: "לעצור רק אם יש רכב מתקרב", isCorrect: false }
    ],
    explanation: "בתמרור \"תן זכות קדימה\" יש להאט ולתת זכות קדימה לתנועה בדרך החוצה. אין חובה לעצור אם הדרך פנויה."
  },
  {
    id: 14,
    text: "מהו המרחק המינימלי שיש לשמור מרכב חונה?",
    answers: [
      { id: 1, text: "חצי מטר", isCorrect: false },
      { id: 2, text: "מטר אחד", isCorrect: true },
      { id: 3, text: "שני מטרים", isCorrect: false },
      { id: 4, text: "אין מרחק מינימלי", isCorrect: false }
    ],
    explanation: "יש לשמור מרחק של לפחות מטר אחד מרכב חונה, כדי לאפשר פתיחת דלתות ולהימנע מפגיעה בהולכי רגל."
  },
  {
    id: 15,
    text: "מה יש לעשות כאשר נוסעים בגשם חזק והראות לקויה?",
    answers: [
      { id: 1, text: "להדליק אורות גבוהים (אור דרך)", isCorrect: false },
      { id: 2, text: "להדליק אורות נמוכים ופנסי ערפל", isCorrect: true },
      { id: 3, text: "להדליק אורות מצוקה (ארבעה איתותים)", isCorrect: false },
      { id: 4, text: "לכבות את כל האורות כדי למנוע סנוור", isCorrect: false }
    ],
    explanation: "בגשם חזק וראות לקויה יש להדליק אורות נמוכים ופנסי ערפל, להאט ולהגדיל את מרחק הבטיחות מהרכב שלפניך."
  }
];
