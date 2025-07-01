import { httpGet } from './HttpService';

const baseUrl = "https://bible-api.com/";
const bibleQuotes = [
        // === Motivational (Old Testament) ===
        { reference: "Joshua 1:9", testament: "Old", type: "Motivational" },
        { reference: "Isaiah 40:31", testament: "Old", type: "Motivational" },
        { reference: "Deuteronomy 31:6", testament: "Old", type: "Motivational" },
        { reference: "Psalm 23:4", testament: "Old", type: "Motivational" },
        { reference: "Psalm 46:1", testament: "Old", type: "Motivational" },
        { reference: "Psalm 27:1", testament: "Old", type: "Motivational" },
        { reference: "Proverbs 3:5-6", testament: "Old", type: "Motivational" },
        { reference: "Isaiah 41:10", testament: "Old", type: "Motivational" },

        // === Wisdom (Old Testament) ===
        { reference: "Proverbs 1:7", testament: "Old", type: "Wisdom" },
        { reference: "Proverbs 4:7", testament: "Old", type: "Wisdom" },
        { reference: "Ecclesiastes 7:12", testament: "Old", type: "Wisdom" },
        { reference: "Psalm 111:10", testament: "Old", type: "Wisdom" },
        { reference: "Job 28:28", testament: "Old", type: "Wisdom" },
        { reference: "Proverbs 15:33", testament: "Old", type: "Wisdom" },
        { reference: "Proverbs 9:10", testament: "Old", type: "Wisdom" },

        // === Motivational (New Testament) ===
        { reference: "Philippians 4:13", testament: "New", type: "Motivational" },
        { reference: "Romans 8:28", testament: "New", type: "Motivational" },
        { reference: "2 Timothy 1:7", testament: "New", type: "Motivational" },
        { reference: "Matthew 19:26", testament: "New", type: "Motivational" },
        { reference: "John 16:33", testament: "New", type: "Motivational" },
        { reference: "Matthew 11:28", testament: "New", type: "Motivational" },
        { reference: "Hebrews 12:1-2", testament: "New", type: "Motivational" },
        { reference: "1 Corinthians 16:13", testament: "New", type: "Motivational" },

        // === Wisdom (New Testament) ===
        { reference: "James 1:5", testament: "New", type: "Wisdom" },
        { reference: "Matthew 7:24", testament: "New", type: "Wisdom" },
        { reference: "Colossians 3:16", testament: "New", type: "Wisdom" },
        { reference: "Ephesians 5:15-16", testament: "New", type: "Wisdom" },
        { reference: "1 Corinthians 1:25", testament: "New", type: "Wisdom" },
        { reference: "James 3:17", testament: "New", type: "Wisdom" },
        { reference: "2 Peter 1:5-6", testament: "New", type: "Wisdom" }
    ];

export async function getBibleQuote(reference) {
    let result = await httpGet(baseUrl + reference);
    return result;
}

export async function filterAvailableQuotes(testament, type) {
    let newQuotesList = [];
    if (testament === "Any" && type === "Any") {
        return bibleQuotes;
    }
    if (testament === "Any") {
        // eslint-disable-next-line no-debugger
        debugger;
        bibleQuotes.forEach((item) => {
            if (item.type === type) {
                newQuotesList.push(item);
            }
        })
    }
    if (type === "Any") {
        // eslint-disable-next-line no-debugger
        debugger;
        bibleQuotes.forEach((item) => {
            if (item.testament === testament) {
                newQuotesList.push(item);
            }
        })
    }
    else {
        // eslint-disable-next-line no-debugger
        debugger;
        bibleQuotes.forEach((item) => {
            if (item.testament === testament && item.type === type) {
                newQuotesList.push(item);
            }
        })
    }
    return newQuotesList;
}