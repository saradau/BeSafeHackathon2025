export const flowData = [
  {
    id: "1",
    question: "מה מעניין אותך?",
    options: [
      { id: "a", text: "מה זה בכלל בטיחות ברשת?" },
      {
        id: "b",
        text: "חוקים וזכויות",
        link: "/BeSafe Hackathon 2025/page5.html",
      },
      {
        id: "c",
        text: "מקרים לדוגמא",
        link: "/BeSafe Hackathon 2025/page2.HTML",
      },
      {
        id: "d",
        text: "איך אני בכלל אמור לדבר על זה עם ההורים?",
        link: "/BeSafe Hackathon 2025/page3.html",
      },
      {
        id: "e",
        text: "אתרים ומספרי טלפון חשובים",
        link: "/BeSafe Hackathon 2025/page1.HTML",
      },
      {
        id: "f",
        text: "עד כמה אתה חכם ברשת?",
        link: "/BeSafe Hackathon 2025/page4.html",
      },
      {
        id: "g",
        text: "מה הצעד הבא?",
        link: "/BeSafe Hackathon 2025/page6.html",
      },
      { id: "h", text: "איך מתמודדים עם בריונות ברשת?" },
      { id: "i", text: "איך מתמודדים עם בריונות מינית ברשת?" },
      { id: "j", text: "אחר" },
    ],
  },
  {
    id: "2",
    parentId: "a",
    question: "איזה נושא בטיחות מעניין אותך?",
    options: [
      {
        id: "a1",
        text: "בטיחות ברשת - הסבר כללי",
        explanation:
          "בטיחות ברשת כוללת פעולות המבטיחות את הפרטיות שלך, את המידע האישי שלך ואת השימוש הבטוח בפלטפורמות מקוונות.",
      },
      {
        id: "a2",
        text: "שמירה על פרטיות",
        explanation:
          "אל תשתף מידע אישי כמו כתובת, מספר טלפון או פרטי תשלום עם גורמים שאינך מכיר.",
      },
      {
        id: "a3",
        text: "שימוש בסיסמאות חזקות",
        explanation:
          "השתמש בסיסמאות ייחודיות לכל חשבון, המשלבות אותיות, מספרים ותווים מיוחדים.",
      },
      {
        id: "a4",
        text: "זיהוי אתרים חשודים",
        explanation:
          "ודא שהאתר שבו אתה משתמש מאובטח (סמל מנעול בדפדפן) ושמדובר בכתובת האתר הרשמית.",
      },
      { id: "a5", text: "אחר" },
    ],
  },
  {
    id: "3",
    parentId: "h",
    question: "שאלה מצוינת! מה אתה רוצה לדעת?",
    options: [
      {
        id: "h1",
        text: "איך מדווחים?",
        explanation: `
דיווח על תוכן פוגעני הוא כלי חשוב שמסייע להגן עליך ועל אחרים מפני פגיעה נוספת.
בפלטפורמות כמו פייסבוק או אינסטגרם, כפתור הדיווח ממוקם ליד התוכן הפוגעני, בדרך כלל כסמל של שלוש נקודות.
לאחר לחיצה עליו, יש לבחור סיבה מתאימה לדיווח, כמו בריונות או הטרדה.
מומלץ לשמור צילומי מסך של התוכן לצורך הוכחה אם יהיה בכך צורך בעתיד.
חלק מהפלטפורמות מאפשרות דיווח אנונימי, כך שתוכל לדווח מבלי לחשוף את זהותך.
במקרים חמורים, חשוב לשקול פנייה לרשויות החוק או לגורמים מקצועיים כמו מוקד 105 לקבלת עזרה נוספת.
        `,
      },
      {
        id: "h2",
        text: "למה כדאי לי לפנות להורה או דמות מבוגרת?",
        explanation:
          "שיתוף הבעיה עם דמות מבוגרת יכול לעזור להתמודד עם הפגיעה בצורה טובה. הם יכולים לעזור לך לדווח או להתמודד רגשית. לחץ על הקישור כדי ללמוד איך לדבר עם ההורים על הנושא.",
        link: "/BeSafe Hackathon 2025/page3.html",
      },
      {
        id: "h3",
        text: "מה אני יכול לעשות בשביל לעצור את ההתנהגות הפוגעת?",
        explanation: `
כדי לעצור את ההתנהגות הפוגעת, ניתן לחסום את החשבון של הפוגע, פעולה שתמנע ממנו לשלוח לך הודעות או לצפות בפרופיל שלך.
ברוב הפלטפורמות, אפשרות החסימה נמצאת בתפריט ליד הפרופיל של הפוגע או ההודעה הפוגענית.
בנוסף, כדאי להפעיל הגדרות פרטיות מחמירות כך שרק אנשים שאתה מאשר יוכלו לתקשר איתך.
אם ההתנהגות ממשיכה בדרכים אחרות, חשוב לערב דמות מבוגרת או לפנות לעזרה מקצועית.
        `,
      },
      { id: "h4", text: "אחר" },
    ],
  },
  {
    id: "4",
    parentId: "i",
    question:
      "בוא נגלה ביחד איך להתמודד עם בריונות מינית ברשת בצורה הטובה ביותר!",
    options: [
      {
        id: "i1",
        text: "איך מדווחים לרשויות?",
        explanation: `
בריונות מינית היא עבירה חמורה שמצריכה טיפול מיידי.
ניתן לפנות למשטרה ולהגיש תלונה רשמית הכוללת תיעוד של המקרה, כמו צילומי מסך או הודעות.
יש גם מרכזי סיוע שמנחים כיצד לפנות לרשויות בצורה הנכונה ותומכים בתהליך.
חשוב לדעת שהרשויות מחויבות לשמור על פרטיותך ולפעול במהירות למניעת המשך הפגיעה.
        `,
      },
      {
        id: "i2",
        text: "לשמור ראיות ולפנות לעזרה",
        explanation: `
במקרים של בריונות מינית, חשוב לשמור ראיות כמו צילומי מסך של הודעות, תמונות או סרטונים פוגעניים.
שמירת הראיות תוכל לעזור לך כשתחליט לדווח לרשויות החוק או לפנות לעזרה מקצועית.
אל תתמודד עם המצב לבד – פנה ליועץ, למורה, או לארגון מקצועי לקבלת תמיכה רגשית וייעוץ.
זכור שבריונות מינית היא עבירה חמורה, וחשוב לטפל בה באופן רציני כדי להגן על עצמך ועל אחרים.
שמור על פרטיותך ואל תשיב לפוגע, כדי לא להחמיר את המצב.
        `,
      },
      {
        id: "i3",
        text: "לדבר עם יועץ מקצועי",
        explanation: `
שיחה עם יועץ מקצועי יכולה להיות צעד משמעותי בהתמודדות עם ההשפעות הרגשיות של בריונות מינית.
היועץ יוכל להקשיב לך ללא שיפוטיות, לעזור לך לעבד את התחושות שלך ולספק לך כלים להתמודד עם המצב.
חשוב לדעת שהשיחות נשמרות בסודיות מלאה, כך שתוכל להרגיש בטוח לשתף את מה שעובר עליך.
אל תתמודד עם זה לבד – יש מי שיכול לעזור לך, לתמוך בך ולהעניק לך תחושת ביטחון והעצמה.
        `,
      },
      { id: "i4", text: "אחר" },
    ],
  },
];
