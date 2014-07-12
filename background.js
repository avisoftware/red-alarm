﻿var orefGenerator =  {
    requestoref: function () {
        var req = new XMLHttpRequest();         req.open("GET", "http://www.oref.org.il/WarningMessages/alerts.json", true);         req.onload = this.showOref_.bind(this);         req.send(null);
    },     showOref_: function (e) {
        var data = JSON.parse(e.target.responseText);         checkJson(data);
    }
} Number.prototype.pad = function (len) {
    return (new Array(len + 1).join("0") + this).slice(-len);
} var citiesList = ''; var codes = []; var cities = { "124": ["א דהאבשה", "אבו ג\u0027ווייעד", "אבו ג\u0027ויעד", "אבו קורינאת", "אבו רביעה", "אבו רביעה צפונית לכסיפה", "אל ג\u0027וויני", "אל ג\u0027נאמי", "אל עביד", "אל קורעאן ב", "אל קרישי", "אל קרעאן", "אל קשכר", "ג\u0027נאביב", "דריג\u0027את", "זבארגה", "כוחלה", "כסיפה", "מכחול", "נצאצרה", "ערד", "ערערה בנגב", "קבועה", "קודייראת א צאנה", "קשכר נבארי"], "122": ["א דיראת", "א טבקה", "א טוואני", "א ריחייה", "אדורה", "אזור תעסוקה מיתרים", "אימריש", "אל הג\u0027רה", "אל חדב", "אל מאג\u0027ור", "אל מראג\u0027ם", "אל עלקה אל פוקא", "אל פוואר", "אל קוסור", "אפיניש", "בית עינון", "בית עמרה", "בני נעים", "ג\u0027רון א לוז", "דהרייה", "דיר סאמת", "דיר ראזח", "הר עמשא", "ואדיח", "זיף", "חברון", "חגי", "ח\u0027ירבת זיתא", "ח\u0027ירבת כרמה", "ח\u0027רסה", "ח\u0027שם אל כרם", "טנא עומרים", "יטא יוטה", "כעאבנה", "כרזה", "כרמיל", "לב יתיר", "מג\u0027ד", "מעון", "מעין", "מצדות יהודה", "נגוהות", "סובא", "סוסיה", "סימיא", "סמוע", "עבדה", "עווד", "עוזיז", "ענאב אל כביר", "עתניאל", "פוקיקיס", "פני חבר", "קוואעין", "קילקיס", "קרית ארבע", "ראבוד", "ראפאת ליד סמוע", "רוג\u0027ם אום ח\u0027יר", "רוקעה", "שוויכה בהר חברון", "שייח\u0027 אחמד אל עבד", "שמעה", "שני ליבנה", "תפוח", "תראמה"], "205": ["א דנפירי", "אבו עפאש", "אזור תעשייה רמת בקע", "אל ג\u0027רג\u0027אווי", "אל ולידי", "אל כלאב", "עזאזמה", "עזאזמה דרומית לרמת חובב", "עזאזמה דרומית לשגב שלום", "עזאזמה מזרחית לרמת חובב", "תארבין א צאנה שבט"], "179": ["א זיאדנה דרומית לרהט", "א זיאדנה צפונית לרהט", "אל הייל", "אל חוקוק", "אל עתאיקה", "בית קמה", "גבעות בר", "דבירה", "הוזייל", "כפר נוער עדנים", "להבים", "מפעלי אבשלום", "משמר הנגב", "רהט", "שובל", "תראבין א צאנה"], "96": ["א זעיים", "אבו דיס", "אל ולג\u0027ה", "ביר נבאלה", "בית איכסא", "בית חנינא", "דיר כרמיזן", "חיזמא", "ירושלים", "ענאתא", "רמת רחל"], "92": ["א לובאן", "בית אריה", "ברוכין", "דיר בלוט", "עופרים", "עלי זהב", "פדואל", "ראפאת", "שקבא"], "199": ["א נבארי", "אל סייד", "אל עטאונה", "אעצם", "חורה", "כרמים", "כרמית", "מולדה", "מיתר", "סנסנה", "עוקבי"], "141": ["א נוואקיר", "אדמית", "אידמית", "אילון", "ג\u0027ורדיח", "גורן", "גורנות הגליל", "חניתה", "יערה", "עראמשה"], "59": ["א סלבה", "אניעם", "ברוכים קלע אלון", "חד נס", "כנף", "מעלה גמלא", "קדמת צבי", "קצרין", "שעל"], "90": ["א ראם", "אבו קש", "אבו שחידם", "אל בירה", "בורקה", "בילעין", "בית איענאן", "בית אל", "בית דוקו", "בית חורון", "בית ליקיא", "בית סירא", "בית עיור א תחתא", "בית עיור אל פוקא", "ביתוניא", "ביתילו", "ביתין", "ג\u0027אניה", "גבעת אסף", "גיבע מצפון לירושלים ", "גילזון", "גימאלא", "גיפנא", "דולב", "דורא אל קריע", "דיר איבזיע", "דיר עמאר", "ח\u0027ירבת א טירה", "ח\u0027ירבת אל מיסבאח", "ח\u0027ירבתא", "טלמון", "יברוד", "כוכב יעקב", "כפר ניעמה", "כפר עקב", "מזרעה אל קיבליה", "נחליאל", "ניל\u0027\u0027י", "נעלה", "סורדה", "ספא", "עין איוב", "עין יברוד", "עין סיניא", "עין עריכ", "עין קיניא", "קיביא", "קלנדיה", "ראס כרכר", "רמאללה", "שבתין", "שוקבא"], "165": ["א ראס", "א.ת בראון", "אבני חפץ", "אודלה", "אימאתין", "איתמר", "אל פונדוק", "אלון מורה", "באקה", "בורין", "בית א אל פוקא", "בית איבא", "בית דג\u0027ן", "בית וזן", "בית ליד", "בית פוריכ", "ביתא א תחתא", "בלאטה", "ברכה", "גבעת סנה יעקב", "ג\u0027וניד", "ג\u0027יוס", "ג\u0027ית", "ג\u0027מאעין", "דיר אל חטב", "דיר שרף", "הר גריזים", "זוואתא", "זיתא", "חג\u0027ה", "ח\u0027ווארה", "חוות גלעד", "ח\u0027ירבת סיר", "יאנון", "יצהר", "כור", "כפר ג\u0027מאל", "כפר זיבאד", "כפר סור", "כפר עבוש", "כפר קדום", "כפר קליל", "מג\u0027דל", "מדמא", "נאקורה", "סאלם ", "סאלם ליד אלון מורה", "סבסטיה", "סלעית", "ספארין", "סרה", "עוורתא", "עוסארין", "עוריף", "עזמוט", "עין יאנון", "עינאבוס", "עיראק בורין", "ענב", "עסירה אל קיבליה", "עסכר", "עקרבה", "פלאמה", "פרעון", "פרעתה", "קדומים", "קוזה", "קוסין", "ראמין", "רוג\u0027ייב", "רפידיה", "שבי שומרון", "שופה", "שכם", "תל"], "158": ["א שהאדה", "אום א תות", "איג\u0027ניסיניא", "איכתאבא", "אירתאח", "אל ג\u0027ארושיה", "אל מוטילה", "אל מוע\u0027ייר", "אקרע", "באקה א שרקיה", "בזאריה", "בית אומרין", "בית קאד", "בלעא", "ג\u0027בע", "ג\u0027ודידה", "ג\u0027לבון", "ג\u0027למה", "ג\u0027נין", "ג\u0027רבה", "דיר אבו דעיף", "דיר אל ע\u0027וסוף", "דיר ע\u0027זאלה", "דנאבה", "ואדי א דבע", "זאוויה בצפון שומרון", "זבאבידה", "ח\u0027ירבת אל עקרבאניה", "ח\u0027ירבת בית חסן", "טובאס", "טול כרם", "טלוזה", "טמון", "יאסיד", "כופיר", "כפר א לבד", "כפר ראעי", "כפר רומאן", "כשדה", "מוח\u0027יים פארעה", "מירכה", "מית\u0027לון", "מסיליה", "משרוע בית קאד", "נור א שמס", "נזלה אל ווסטא", "נזלה אל ע\u0027רביה", "נזלת אבו נאר", "ניסף ג\u0027וביל", "סאנור", "סידא", "סילת א דהר", "סיר", "סיריס", "עאבה", "ע\u0027גה", "עטארה", "עילאר", "עין אל בידא", "ענזה", "ענתבא", "עסירה א שמאליה", "עקבה בשומרון", "עקבת תיאסיר", "עראנה", "ערבונה", "עתיל", "פחמה", "פנדקומיה", "פקועה", "קבאטיה", "ראבא", "רמה", "שוויכה", "תיאסיר", "תלפית", "תנין"], "85": ["א שויוח", "אל ערוב ", "אלון שבות", "אלעזר", "אפרת", "בית אומר", "בית כאחיל", "בית סכריא", "ביתר עילית", "בת עין", "בתיר ", "דורא", "הר גילה", "ואדי פוכין", "חלחול", "חסכה", "כוויזבא", "כפר עציון", "כרמי צור", "מגדל עוז", "מועסכר אל ערובה", "מראח אל בקר", "נווה דניאל", "נחאלין", "סוריף", "סיעיר", "ראש צורים"], "171": ["א שייח\u0027 אחמד", "אבו סלמאן", "אל מודוור", "אלפי מנשה", "אלקנה", "בידיה", "בית אמין", "ג\u0027ינסאפוט", "דיר איסתיא", "ח\u0027ירבת א נבי אליאס", "ח\u0027ירבת אל אשקר", "ח\u0027ירבת עסלה", "ח\u0027ירבת ראס א טירה", "ח\u0027ירבת ראס עטיה", "יקיר", "כפר לאקף", "כפר ת\u0027ולת", "מסחה", "מעלה שומרון", "נופים", "סניריא", "סרטא", "עזון", "עזון עתמה", "עמנואל", "עץ אפרים", "צופין", "קלקיליה", "קראות בני חסן", "קרני שומרון", "שערי תקווה"], "82": ["א.ת תנובות", "אזור תעשייה תנובות", "בארותיים", "בורגתה", "בית הלוי", "בת חפר", "גן יאשיה", "העוגן", "חניאל", "יד חנה", "ינוב", "כפר יונה", "כפר מונש", "מרכז האקדמי רופין", "ניצני עוז", "עולש", "תנובות"], "242": ["אבו ג\u0027אבר", "אבו טראש", "אבו כף אום בטין", "אבו סריחאן", "אבו עבדון", "אבו עמאר", "אבו עסא", "אבו ריקייק", "אל אסד", "לקיה", "עומר", "תל שבע"], "87": ["אבו גוש", "אולפני נווה אילן", "איתנים", "בית מאיר", "בר גיורא", "גבעת יערים", "יד השמונה", "ידידה", "כסלון", "מטע", "נווה אילן", "נטף", "נס הרים", "עין נקובא", "עין ראפה", "קרית יערים מוסד", "קרית יערים/טלז סטון", "רמת רזיאל", "שואבה", "שורש"], "75": ["אבו דיאב", "אום א סח\u0027אלי", "אחיהוד", "אלון הגליל", "אעבלין", "אתגר", "בור אל מכסור", "דמיידה", "הרדוף", "ח\u0027ואלד", "חנתון", "טמרה", "יבור", "יובלים", "יודפת", "יסעור", "יעד", "כאבול", "כאוכב אבו אל היגא", "כפר מנדא", "מורשת", "מנוף", "מצפה אבי\u0027\u0027ב", "מרכז אזורי מישגב", "נופית", "סוואעד חמרייה", "עדי", "ערב אל גנאדי", "ערב אל נעים", "ערב אל סגיראת", "ערב אל סמניה", "קורנית", "ראס עלי", "רקפת", "שגב/עצמון", "שורשים", "שכניה", "שעב", "שפרעם", "תעשייון בר לב"], "95": ["אבו נוג\u0027ים", "אום א טלע", "אום סלמונה", "אום עסלה", "אל ח\u0027דר", "אספר", "ארטאס", "בד פלוח", "בווידיעה", "ביאדה", "בית רחאל", "בית תעמר", "ג\u0027וב א רום", "ג\u0027והזם", "דהיישה מחנה פליטים", "ד\u0027הר חלת אל ג\u0027אמיע", "ה", "ואדי על עראיסה", "זעתרה", "חוג\u0027ילה", "ח\u0027רזאן", "חרמלה", "כפר אלדד", "מיניה", "מעלה עמוס", "מעסרה", "מצד שמעון", "מראח רבאח", "נוקדים", "עבדאללה איברהים", "עובידייה", "עילת עלי", "ערב א שמע", "ראס סניסיל", "רפידא", "תוקוע", "תעמרה", "תקוע"], "68": ["אבו סנאן", "אשרת", "ג\u0027וליס", "גיתה", "טל אל", "ירכא", "כליל", "כפר יאסיף", "לפידות", "עמקה"], "207": ["אבו קוידר", "אבו תלול", "אל חמידי", "אל עת\u0027אמין", "ביר אבו אל חמאם", "נבטים", "שגב שלום"], "134": ["אבטין", "אושה", "אל ח\u0027וואלד מערב", "אפק", "יגור", "כפר המכבי", "כפר הנוער הדתי", "כפר חסידים", "כפר חסידים א\u0027", "סרכיס", "קרית אתא", "רומיחאת", "רכסים", "רמת יוחנן"], "71": ["אבטליון", "אשבל", "אשחר", "דייר חנא", "הררית", "חוג\u0027ייראת ד\u0027הרה", "חוסנייה", "חזון", "יחד", "כמאנה", "כמאנה מזרח", "כמון", "לוטם", "מורן", "מכמנים", "סח\u0027נין", "סלמה", "עראבה", "ערב אזונר", "צביה", "ראס אל עין", "תרדיון"], "181": ["אביאל", "אלוני יצחק", "בית חנניה", "בנימינה גבעת עדה", "גבעת ניל\u0027\u0027י", "ג\u0027סר א זרקא", "כפר גליקסון", "מעגן מיכאל", "עמיקם", "רגבים"], "58": ["אביבים", "ברעם", "יראון"], "234": ["אביגדור", "אורות", "אחווה", "אל עזי", "באר טוביה", "כפר אחים", "כפר ורבורג", "מפעלי צומת מלאכי", "ערוגות", "קרית מלאכי", "תימורים"], "175": ["אביחיל", "בית יצחק שער חפר", "ביתן אהרן", "גבעת שפירא", "גנות הדר", "הדר עם", "חבצלת השרון", "כפר חיים", "כפר ידידיה", "מעברות", "משמר השרון", "נורדיה", "נתניה", "צוקי ים", "שושנת העמקים"], "236": ["אביטל", "אדירים", "אומן", "ברק", "גבע", "גדיש", "גדעונה", "גן נר", "דבורה", "חבר", "טייבה ליד מולדת", "יזרעאל", "יעל", "כפר יחזקאל", "מגן שאול", "מוקייבלה", "מיטב", "מלאה", "ניר יפה", "פרזון", "צנדלה", "רם און", "רמת צבי", "תל יוסף"], "99": ["אביעזר", "אדרת", "אשתאול", "בית ג\u0027מאל", "בית שמש", "בקוע", "גבעות עדן", "גבעת  שמש", "גבעת שמש", "גיזו", "דייר ראפאת", "הראל", "זנוח", "טל שחר", "ישעי", "כפר אוריה", "מחסיה", "מנזר לטרון", "מסילת ציון", "מפעלי נחם הר טוב", "נווה מיכאל", "נווה שלום", "נחם", "נחשון", "נתיב הל\u0027\u0027ה", "צלפון", "צרעה", "רוגלית", "תעוז", "תרום"], "74": ["אבירים", "אלקוש", "נטועה", "פסוטה"], "237": ["אבן יהודה", "אודים", "ארסוף", "בית יהושע", "בני ציון", "בצרה", "געש", "ורדים מוסד חינוכי", "חרוצים", "יקום", "כפר נטר", "מכון וינגייט", "מרכז קניות חוצות שפיים", "קרית שלמה", "שפיים", "תל יצחק"], "132": ["אבן מנחם", "זרעית", "שומרה", "שתולה"], "86": ["אבן ספיר", "אורה", "מבוא ביתר", "עמינדב", "צור הדסה"], "235": ["אבן שמואל", "אחוזם", "איתן", "עוזה", "שלווה"], "46": ["אבני איתן", "אזור תעשייה בני יהודה", "אפיק", "בני יהודה", "גבעת יואב", "גשור", "חמת גדר", "חספין", "כפר חרוב", "מבוא חמה", "מיצר", "נאות גולן", "נוב", "נטור", "רמת מגשימים"], "84": ["אבנת", "מצוקי דרגות", "מצפה שלם"], "148": ["אבשלום", "דקל", "יבול", "יתד", "פרי גן", "שדי אברהם", "תלמי יוסף"], "44": ["אודם", "אל רום", "בוקעתא", "מג\u0027דל שמס", "מסעדה", "נווה אטי\u0027\u0027ב", "נמרוד", "עין קנייא"], "144": ["אוהד", "צוחר", "שדה ניצן", "תלמי אליהו"], "49": ["אוהלו", "אלומות", "אפיקים", "אשדות יעקב איחוד", "אשדות יעקב מאוחד", "בית זרע", "בית חולים פורייה", "בית ירח", "גבעת אבני", "דגניה א", "דגניה ב\u0027", "הודיות ", "הזורעים", "יבניאל", "כינרת מושבה", "כינרת קבוצה", "כפר כמא", "כפר נהר הירדן", "לביא", "מנחמיה", "פארק תעשיות קדמת גליל", "פוריה כפר עבודה", "פוריה נווה עובד", "פוריה עילית", "שדה אילן", "שרונה"], "156": ["אום א ריחאן", "אום דאר", "בורקה ליד שכם", "בורקין", "האשימיה", "זובובא", "זיבדה", "חיננית", "ח\u0027ירבת א טורם", "ח\u0027ירבת א טייבה", "חרמש", "טורה על ע\u0027רביה", "יאמון", "יעבד", "כופיראת", "כפר דאן", "כפר קוד", "מבוא דותן", "מנשיה", "נזלה א שרקיה", "נזלת זיד", "סילת אל ח\u0027רית\u0027יה", "עאנין", "עראבה ליד ג\u0027נין", "ערקה", "פיראסין", "קפין", "רומאנה ממזרח לאום אל פחם", "שקד", "תיעניכ", "תעשיון שח\u0027\u0027ק"], "180": ["אום אל פחם", "בסמ\u0027\u0027ה", "גבעת עוז", "ח\u0027ירבת מועאוויה", "מי עמי", "מעלה עירון"], "187": ["אום אל קוטוף", "אל מועלקה", "אל עריאן", "ברקאי", "דאר אל חנון", "ד\u0027הר אל עבד", "ח\u0027ירבת אל עכאבה", "כפר קרע", "מנסורה", "מצפה אילן", "ערערה", "קציר חריש", "ריחן"], "88": ["אום ספא", "איסכאכא", "בורהאם", "בורוקין", "בית רימא", "דיר אל משעל", "דיר אל סודאן ", "דיר ניזאם", "דיר ע\u0027סאנה", "ח\u0027ירבת קיס", "חלמיש", "יאסוף", "כובר", "כפר א דיכ", "כפר עין", "כפר תפוח", "לובאן שרקיה", "מעלה לבונה", "נבי סאלח", "סאוויה", "סינג\u0027יל", "עאבוד", "עבווין", "עג\u0027ול", "עטארה ליד ביר זית ", "עטרת", "עמוריה", "ערורה", "קראות בני זיד"], "100": ["אום עלאס", "אל קילא", "בית אולא", "ח\u0027ראס", "נובא", "תלם", "תרקומיא"], "70": ["אומץ", "אחיטוב", "באקה אל ע\u0027רביה", "באקה ג\u0027ת", "בחן", "בת חן", "ג\u0027ת", "המעפיל", "זיתא ליד באקה אל ע\u0027רביה", "זמר", "להבות חביבה", "מגל", "מייסר", "מצר", "מרכז קהילתי יכון", "נזלת עיסא"], "43": ["אופקים", "פדויים", "קרית חינוך מרחבים"], "52": ["אור הגנוז", "אמירים", "בר יוחאי", "חמדת ימים", "כפר שמאי", "מירון", "מרכז אזורי מרום הגליל", "עין כמונים", "פרוד", "קדיתא", "שפר"], "188": ["אור הנר", "ארז"], "117": ["אור יהודה", "גני תקווה", "יהוד מונוסון", "כפר אזר", "מעש", "נווה אפעל", "סביון", "קרית אונו", "רמת אפעל"], "190": ["אור עקיבא", "קיסריה", "שדות ים"], "125": ["אורון", "אל ע\u0027ול", "אל עמראני", "דימונה", "הוואשלה", "ירוחם", "מפעלי רותם", "קסר א סיר", "קרנב אבו סלב", "רח\u0027מה", "תעשיון תמ\u0027\u0027ד"], "222": ["אורטל", "אלוני הבשן", "יונתן", "מרום גולן", "עין זיוון", "קשת"], "195": ["אורים", "פטיש"], "128": ["אורנים", "אלונים", "בית זיד", "בסמת טבעון", "כפר תקווה", "קרית טבעון", "שער העמקים"], "115": ["אורנית", "אלישמע", "ג\u0027לג\u0027וליה", "גני עם", "הוד השרון", "חבלה", "חגור", "חורשים", "ירחיב", "ירקונה", "כפר ברא", "כפר מל\u0027\u0027ל", "כפר קאסם", "מתן", "נווה ירק", "נירית", "עדנים", "רמות השבים", "שדי חמד"], "104": ["אזור", "בת ים", "חולון", "מקווה ישראל"], "154": ["אזור תעשיות צבאים", "אחוזת שושנה", "ביכורה", "בית אלפא", "בית השיטה", "בית יוסף", "בית שאן", "גשר", "חוות דושן", "חוות עדן", "חוות שפעה", "חמדיה", "חפצי בה", "טירת צבי", "ירדנה", "כפר רופין", "מולדת", "מירב", "מלכישוע", "מסילות", "מעוז חיים", "מעלה גלבוע", "מפעלי שאן", "נווה אור", "נווה איתן", "ניר דוד (תל עמל)", "עין הנצי\u0027\u0027ב", "רוויה", "רחוב", "רשפים", "שדה אליהו", "שדה נחום", "שדי תרומות", "שלוחות", "תל תאומים"], "143": ["אזור תעשייה אכזיב מילואות", "בצת", "כפר ראש הנקרה", "לימן", "מצובה", "שלומי"], "161": ["אזור תעשייה אלון התבור", "אחוזת ברק", "דברת", "דחי", "טמרה יזרעאל", "מפעלי גלבוע", "מרחביה מושב", "מרחביה קיבוץ", "נאעורה", "נורית", "נין", "סולם שונם", "עין חרוד איחוד", "עין חרוד מאוחד", "עפולה"], "170": ["אזור תעשייה אשקלון"], "157": ["אזור תעשייה נ.ע.מ", "בית הגדי", "נתיבות", "קרית חינוך שדות נגב"], "220": ["אזור תעשייה נעמן", "כפר ביאליק", "קרית ביאליק", "קרית חיים", "קרית ים", "קרית מוצקין", "קרית שמואל"], "246": ["אזור תעשייה ספיר", "מפעלי ים המלח", "מפעלי ים המלח ב\u0027 סדום"], "126": ["אזור תעשייה שגיא 2000", "אלוני אבא", "בית לחם הגלילית", "בית שערים", "גבעת אלה", "גבת", "גיניגר", "זרזיר", "יפעת", "כעביה טבאש חג\u0027אג\u0027רה", "כפר יהושע", "מגדל העמק", "מנשה זבדה", "מפעלי העמק", "נהלל", "נווה יער", "עילוט", "ערב אל עיסאת", "רמת דוד", "רמת ישי", "שדה יעקב", "שמשית", "שריד", "תמרת"], "89": ["אזור תעשייה שער בנימין", "ג\u0027אלוד", "ג\u0027וריש", "דיר ג\u0027ריר", "דיר דיבוואן ", "ח\u0027ירבת אבו פלאח", "יתמא", "כפר מאליכ", "מגדלים", "מוח\u0027מאס", "מזרעה א שרקיה", "סילואד", "עלי", "עפרה", "קבלאן", "קוסרה", "קריות", "רחלים", "שבות רחל", "שילה", "תורמוס עייא", "תלפית  במרכז השומרון"], "239": ["אחיסמך", "בן שמן", "בן שמן כפר נוער", "גינתון", "כרם בן שמן", "לוד", "ניר צבי", "תעשיון צריפין"], "238": ["אחיעזר", "בית דגן", "גנות", "זיתן", "חמד", "יגל", "כפר חב\u0027\u0027ד", "כפר טרומן", "משמר השבעה", "צפריה"], "198": ["איבים", "גבים", "מכללת ספיר", "ניר עם", "פארק תעשיות ספירים", "שדרות", "תעשיות שער הנגב"], "178": ["אייל", "אילנות", "בית ברל", "בני דרור", "גאולים", "חרות", "טייבה", "טירה", "יעף", "כוכב יאיר", "כפר הס", "כפר יעבץ", "כפר עבודה", "מועצה אזורית לב השרון", "משמרת", "ניר אליהו", "עזריאל", "עין ורד", "עין שריד", "פורת", "פרדסיה", "צור יגאל", "צור יצחק", "צור משה", "צור נתן", "קדימה צורן", "קלנסווה", "רמת הכובש", "שדה ורבורג", "שער אפרים", "תל מונד"], "54": ["איילת השחר", "גדות", "חולתה", "יסוד המעלה", "משמר הירדן", "עמוקה", "שדה אליעזר"], "216": ["אילות", "אילת"], "136": ["אילניה", "בית קשת", "גזית", "דבוריה", "טורעאן", "כדורי", "כפר מיסר", "כפר קיש", "כפר תבור", "מרכז אזורי כדורי", "עין דור", "שבלי", "שדמות דבורה", "שעורים"], "109": ["אירוס", "גבעת ברנר", "גיבתון", "גן שלמה", "כפר דניאל", "מפעלי ברנר", "נצר סרני", "רחובות"], "81": ["אכסאל", "בלפוריה", "הושעיה", "הסוללים", "יפיע/יאפא", "כפר גדעון", "כפר החורש", "כפר כנא", "מזרע", "משהד", "נצרת", "נצרת עילית", "עין מאהל", "ערב אל פמאז", "ציפורי", "ריינה", "תל עדשים"], "204": ["אל בירה בהר חברון", "אמציה", "אשכולות", "בורג\u0027", "בית א רוש אל פוקא", "בית מירסים", "בני דקלים", "כרם עמי", "כרמי קטיף", "נטע", "שומריה", "שקף"], "186": ["אלומה", "ורדון", "זבדיאל", "זרחיה", "מנוחה", "נחלה", "ניר בנים", "סגולה", "קדמה", "קוממיות", "רווחה"], "93": ["אלון", "אלמוג", "גבע בנימין/אדם", "ורד יריחו", "יריחו", "כוכב השחר", "כפר אדומים", "מבואות יריחו", "מעלה מכמש", "מצפה יריחו", "נועימה", "נועימה מחנה פליטים", "נח\u0027\u0027ל אלישע", "עין א סולטאן ", "עלמון/ראפה", "עקאבת גיבר", "קליה", "רימונים"], "78": ["אלי עד", "אליכין", "אלישיב", "בית חזון", "גבעת חיים איחוד", "גבעת חיים מאוחד", "חגלה", "חיבת ציון", "חרב לאת", "כפר הרא\u0027\u0027ה", "עין החורש"], "215": ["אליפז", "באר אורה", "גרופית", "חצבה", "יהל", "יטבתה", "לוטן", "מיכרות תמנע", "נאות הכיכר", "נאות סמדר", "נווה חריף", "סמר", "ספיר", "עידן", "עין חצבה", "עין יהב", "עין תמר", "עיר אובות", "פארן", "צופר", "צוקים", "קטורה", "שחרות"], "60": ["אליפלט", "אלמגור", "אמנון", "ורד הגליל", "חצור הגלילית", "טובא זנגריה", "כורזים", "כפר הנשיא", "כפר נחום", "כרי דשא", "כרכום", "מחניים", "עמיעד", "ראש פינה"], "173": ["אליקים", "ג\u0027ועארה", "גלעד (אבן יצחק)", "דליה", "הזורע", "יוקנעם", "יוקנעם עילית", "מגידו", "מדרך עוז", "משמר העמק", "עין העמק", "עין השופט", "פארק מדע ותעשייה מבוא כרמל", "רמות מנשה", "רמת השופט"], "118": ["אלעד", "בארות יצחק", "בני עטרות", "גבעת כ\u0027\u0027ח", "מגשימים", "מזור", "נופך", "נחלים", "נחשונים", "ראש העין", "רינתיה", "תעשיון חצב"], "193": ["אמונים", "בית עזרא", "גבעתי", "עזר", "עזריקם", "שדה עוזיהו", "שתולים"], "253": ["אסדת תמר ומרי בי"], "53": ["ארבל", "גינוסר", "ואדי חמאם", "חוקוק", "כחל", "כפר זיתים", "כפר חיטים", "לבנים", "מגדל", "רביד"], "163": ["ארגמן", "בקעות", "ברדלה", "זובידאת", "ח\u0027לת אל פולה", "חמדת", "חמרה", "מחולה", "מכורה", "מרג\u0027 נעג\u0027ה", "משכיות", "עאטוף", "פארעה אל ג\u0027פתלכ", "פרוש בית דג\u0027ן", "רועי", "רותם", "שדמות מחולה", "תל א בידה", "תל א שמסיה"], "168": ["אריאל", "ברקן", "חארס", "כיפל חארת", "מפעלי ברקן", "מרדה", "סלפית", "עין אל מטווי", "פרח\u0027ה", "קירה", "קרית נטפים", "רבבה"], "160": ["אשבול", "מבועים", "ניר עקיבא", "פעמי תש\u0027\u0027ז", "קלחים", "שבי דרום", "שדה צבי", "תלמי ביל\u0027\u0027ו"], "196": ["אשדוד", "בני דרום", "מפעלי חבל יבנה", "נווה הרצוג", "ניר גלים", "עד הלום"], "203": ["אשל הנשיא בי\u0027\u0027ס אזורי", "בטחה", "גילת", "תחנת ניסיונות גילת", "תפרח"], "223": ["אשלים", "ביר הדאג\u0027", "טללים", "מעלה שביט", "משאבי שדה", "עזוז", "קציעות", "ראם תשלובת חקלאית", "רביבים", "רוח במדבר", "רתמים", "שיבטה"], "172": ["אשקלון", "באר גנים"], "106": ["באר יעקב", "ישרש", "מצליח", "פלמחים", "צריפין", "רמלה"], "210": ["באר מילכה", "כמהין", "ניצנה כפר נוער", "ניצני סיני"], "209": ["באר שבע", "מסעודין אל עזאזמה"], "135": ["בארי"], "105": ["בודרוס", "גמזו", "חשמונאים", "כפר הארנים", "כפר רות", "לפיד", "מבוא חורון", "מבוא מודיעים", "מודיעין מכבים רעות", "מודיעין עילית", "מידיה", "מתתיהו", "נוף איילון", "ניעלין", "שילת", "שעלבים"], "69": ["בוסתן הגליל", "בית העמק", "ג\u0027דידה מכר", "כפר מסריק", "נס עמים", "נתיב השיירה", "עין המפרץ", "עכו", "שייח\u0027 דנון", "שמרה"], "98": ["בידו", "בית זית", "בית נקופה", "הר אדר", "מבשרת ציון", "מוצא עילית", "מעלה החמישה", "עין כרם בי\u0027\u0027ס חקלאי", "צובה", "קרית ענבים"], "152": ["בי\u0027\u0027ס אזורי מקיף מטה אשר", "בן עמי", "כברי"], "201": ["ביצרון", "בני עי\u0027\u0027ש", "חצב", "כנות", "מפעלי כנות", "נווה מבטח", "תעשיון מבצע"], "51": ["ביריה", "צפת"], "129": ["בית אורן", "גבעת וולפסון", "דאלית אל כרמל", "עיספיא", "עיר כרמל"], "91": ["בית איגיזא", "גבעון החדשה", "גבעת זאב", "גיב", "גיודירה", "נבי סמואל", "פסגות"], "112": ["בית אלעזרי", "בית חלקיה", "בני ראם", "ברורים", "גדרה", "גני טל", "חפץ חיים", "יד בנימין", "קדרון", "רבדים"], "232": ["בית גוברין", "בית ניר"], "113": ["בית גמליאל", "בית רבן", "בן זכאי", "בניה", "כפר אביב", "כפר מרדכי", "כרם יבנה", "מישר", "משגב דב", "עשרת", "צופיה", "קבוצת יבנה", "שדמה"], "64": ["בית ג\u0027ן", "חלוץ", "חרשים"], "55": ["בית הלל", "גן התעשייה תל חי", "יובל", "כפר גלעדי", "מטולה", "מנרה", "מעיין ברוך", "מפעלים אזוריים הגליל העליון", "מרגליות", "משגב עם", "קרית שמונה", "תל חי"], "241": ["בית חנן", "בית עובד", "נס ציונה", "עיינות"], "76": ["בית חרות", "בית ינאי", "גאולי תימן", "חופית", "כפר ויתקין", "מבואות ים", "מכמורת", "נעורים", "פארק תעשיות עמק חפר"], "108": ["בית חשמונאי", "בית עוזיאל", "גזר", "גני הדר", "גני יוחנן", "חולדה", "יד רמב\u0027\u0027ם", "יסודות", "יציץ", "כפר ביל\u0027\u0027ו", "כפר בן נון", "כפר שמואל", "כרמי יוסף", "מזכרת בתיה", "מרכז קניות ביל\u0027\u0027ו", "משמר איילון", "משמר דוד", "נען", "נצר חזני", "סתריה", "עזריה", "פדיה", "פתחיה", "קרית עקרון", "רמות מאיר"], "103": ["בית נחמיה", "בית עריף", "ברקת", "חדיד", "טירת יהודה", "מרכז שוהם", "קרית תעופה", "שוהם"], "130": ["בית צבי", "גבע כרמל", "ימין אורד", "מגדים", "נווה ים", "ניר עציון", "עין הוד", "עין חוד/אבו אל היג\u0027אל", "עין כרמל", "עתלית"], "72": ["בית רימון", "עוזייר", "רומאנה", "רומת היב"], "169": ["בית שקמה", "בת הדר"], "120": ["בני ברק", "גבעת שמואל", "גבעתיים", "חוות שלם", "רמת גן"], "150": ["בני נצרים", "נווה ", "שלומית"], "66": ["בענה", "גילון", "דיר אל אסד", "כרמיאל", "לבון", "מג\u0027דל כרום", "נחף", "סאג\u0027ור", "עין אל אסד", "צורית", "קובסי", "ראמה", "שגור", "שזור"], "164": ["ברור חיל", "חלץ"], "159": ["ברוש", "גבעולים", "מלילות", "מעגלים", "שיבולים", "שרשרת", "תאשור", "תדהר"], "191": ["ברכיה", "הודיה", "כפר סילבר", "משען", "ניר ישראל"], "185": ["בת שלמה", "דור", "הבונים", "זכרון יעקב", "כרם מהר\u0027\u0027ל", "מאיר שפיה", "מעיין צבי", "מרכז מיר\u0027\u0027ב", "נחשולים", "עופר", "עין איילה", "פרידיס", "צרופה"], "79": ["בתי זיקוק חיפה", "נשר"], "110": ["גאליה", "יבנה", "כפר הנגיד"], "194": ["גבולות", "צאלים"], "189": ["גבעת אולגה", "גן השומרון", "כפר פינס", "משמרות", "נווה אבות", "עין עירון", "עין שמר", "פרדס חנה כרכור"], "119": ["גבעת השלושה", "גת רימון", "כפר סירקין", "פתח תקווה", "תעשיון השרון"], "183": ["גבעת חביבה", "גן שמואל", "מאור", "מענית", "מפעלי גרנות", "מרכז קניות גן שמואל", "שדה יצחק", "שער מנשה", "תלמי אלעזר"], "114": ["גבעת ח\u0027\u0027ן", "רעננה", "רשפון"], "101": ["גבעת ישעיהו", "גפן", "זכריה", "כפר זוהרים", "לוזית", "נחושה", "עגור", "צפרירים", "שדות מיכה", "שריגים", "תירוש"], "166": ["גברעם"], "97": ["ג\u0027האלין", "מעלה אדומים", "עיזרייה", "קדר"], "56": ["גונן", "כפר בלום", "כפר סאלד", "להבות הבשן", "נאות מרדכי", "עמיר", "שדה נחמיה", "שמיר"], "226": ["גיאה", "מבקיעים", "תלמי יפה"], "167": ["גיתית", "יפית", "משואה", "שלומציון"], "202": ["גלאון", "לכיש"], "83": ["גלגל", "דומא ", "ייט\u0027\u0027ב", "מוע\u0027ייר", "מעלה אפרים", "נירן", "נעמי", "נתיב הגדוד", "עוג\u0027א אתחתא", "פסאיל ", "פצאל", "תומר"], "116": ["גליל ים", "הכפר הירוק", "הרצליה", "כפר שמריהו", "רמת השרון"], "233": ["גן הדרום", "גן יבנה", "חצור אשדוד"], "102": ["גן חיים", "כפר סבא", "נווה ימין", "צופית"], "107": ["גן שורק", "נטעים", "פארק תעשיות פלמחים", "ראשון לציון"], "151": ["געתון", "יחיעם", "מנות", "נווה זיו", "עבדון", "עין יעקב"], "62": ["גשר הזיו", "נהריה", "סער", "עברון", "רגבה"], "182": ["גת", "מבחור", "נועם", "קרית גת", "שדה משה"], "245": ["דוב\u0027\u0027ב", "מתת", "סאסא"], "228": ["דורות"], "57": ["דישון", "יפתח", "מלכיה", "מרכז כ\u0027\u0027ח", "רמות נפתלי"], "61": ["דלתון", "כרם בן זמרה", "עלמה", "פארק תעשיות רמת דלתון", "ריחאנייה"], "50": ["דן", "דפנה", "הגושרים", "ע\u0027ג\u0027ר", "שאר ישוב", "שניר"], "48": ["האון", "מסדה", "מעגן", "מפעלים אזוריים צמח", "עין גב", "רמות", "שער הגולן", "תל קציר"], "80": ["החותרים", "חיפה", "טירת כרמל", "כפר גלים"], "139": ["היוגב", "כפר ברוך"], "149": ["הילה", "חוסן", "כפר ורדים", "מעונה", "מעיליא", "מעלות תרשיחא"], "184": ["זוהר", "יד נתן", "כוכב מיכאל", "נגבה", "נהורה", "נוגה", "ניר ח\u0027\u0027ן", "עוצם", "שדה יואב", "שחר"], "131": ["זיקים", "כרמיה"], "133": ["זמרת", "חוות יזרעם", "כפר מימון", "שובה", "שוקדה", "תושיה"], "229": ["זרועה", "ניר משה"], "221": ["חדרה"], "162": ["חוות שיקמים", "רוחמה"], "176": ["חולית", "ניר יצחק", "סופה"], "145": ["חורפיש", "פקיעין חדשה", "פקיעין/בוקיעה", "צבעון", "צוריאל"], "208": ["חצרים"], "45": ["טבריה", "מצפה"], "47": ["טפחות", "כלנית", "כפר חנניה", "מסד", "מע\u0027אר/מגאר", "מצפה נטופה", "נג\u0027ידאת", "עיילבון", "עינבר", "קדרים"], "65": ["יאנוח ג\u0027ת", "כיסרא סמיע", "מגדל תפן"], "155": ["יד מרדכי", "נתיב העשרה"], "260": ["יושיביה", "תקומה"], "212": ["יכיני"], "123": ["ים המלח בתי מלון", "מצדה", "נווה זוהר", "עין בוקק", "עין גדי"], "197": ["ינון", "כפר הרי\u0027\u0027ף", "כפר מנחם", "תלמי יחיאל", "תעשיון ראם"], "146": ["ישע", "מבטחים", "עמיעוז"], "217": ["כימדע"], "138": ["כיסופים"], "67": ["כישור", "פלך", "תובל"], "219": ["כנף 2"], "213": ["כפר עזה", "סעד"], "153": ["כרם שלום"], "230": ["להב"], "63": ["לוחמי הגיטאות", "מזרעה"], "174": ["מגן", "מועצה אזורית אשכול", "מפעלי מעון", "עין הבשור"], "127": ["מדרשת בן גוריון", "מצפה רמון", "מרחב עם", "שדה בוקר"], "218": ["מחנה נחשונים"], "231": ["מסלול", "רנן"], "206": ["מפלסים"], "192": ["מרכז שפירא", "משואות יצחק", "עין צורים", "שפיר"], "258": ["מתקן התפלה פלמחים"], "224": ["נאות חובב"], "214": ["נחל עוז", "עלומים"], "225": ["ניצן", "ניצן ב\u0027"], "200": ["ניצנים"], "142": ["ניר עוז"], "140": ["נירים", "עין השלושה"], "252": ["נמל חיפה"], "111": ["נמל תעופה בן גוריון"], "147": ["ספסופה"], "240": ["עינת"], "137": ["רעים"], "244": ["שבי ציון"], "227": ["שדה דוד", "תלמים"], "243": ["שיטים"], "256": ["תחנת הכוח אלון תבור"], "248": ["תחנת הכוח אשדוד"], "257": ["תחנת הכוח גזר"], "254": ["תחנת הכוח חגית"], "251": ["תחנת הכוח חיפה"], "247": ["תחנת הכוח צפית"], "249": ["תחנת הכוח רוטנברג"], "250": ["תחנת הכוח רידינג"], "255": ["תחנת הכוח רמת חובב"], "121": ["תל אביב יפו"] }; if (true) {         orefGenerator.requestoref();     var interval = 0;       setInterval(function () {
        interval++;         if (localStorage.isActivated || true) {
            orefGenerator.requestoref();
        }         interval = 0;
    }, 2000);
  }  function checkJson(jsonData) {
     var alertId = jsonData.id;     var lastWarningId = getCookie();     if (lastWarningId == null || lastWarningId < alertId) {
             if (jsonData.data != null && jsonData.data.length != 0) {
                        for (i = 0; i < jsonData.data.length; ++i) {
                var code = lastWord(jsonData.data[i]);
                if (!(codes.indexOf(code) >= 0)) {
                    if (!(localStorage.getItem("frequency") === null) && localStorage.mycity) {
                      //  var notification = new Notification(" התרעה באיזור שלי " , { icon: "icon.png", tag: "my" });
                    } 
                      
                    var names = cities[code];
                    //if (typeof names === 'undefined') {
                        citiesList += jsonData.data[i] + ', ';
                    //} else {
                    //    citiesList += jsonData.data[i] + '( ';
                    //    for (j = 0; j < names.length; ++j) {
                    //        citiesList += names[j] + ', ';

                    //    }
                        //citiesList = citiesList.substring(0, citiesList.length - 2);
                        //citiesList += ')  ';
                   // }
                        codes.push(code);
                }

            };             var citiesString = citiesList.substring(0, citiesList.length - 2);             setCookie(alertId);             var time = new Date();
            var timeString = time.getHours().pad(2) + ":" + time.getMinutes().pad(2) + ":" + time.getSeconds().pad(2);             var notification = new Notification(" התרעות לשעה " + timeString + " : ", { body: citiesString, icon: "icon.png", tag: "oref" });             if (localStorage.SoundActivated || true) {
                var beep = new Audio("beep-08b.mp3");                 beep.play();
            }             notification.onclose = function () { codes = []; citiesList = ''; };             setTimeout(function () {
                notification.close();
            }, 30 * 1000);          }
    }
}    function setCookie(alertId) {
    document.cookie = "pakar_last_warning_id=" + alertId + ";path:/";
}  function getCookie() {
    var arrCookies = document.cookie.split("; ");     for (var i = 0; i < arrCookies.length; i++) {
        var arrCookie = arrCookies[i].split("=");         if (arrCookie[0] == "pakar_last_warning_id") {
            return unescape(arrCookie[1]);
        }
    }
} var lastWord = function (o) {
    return ("" + o).replace(/[\s-]+$/, '').split(/[\s-]/).pop();
}; 