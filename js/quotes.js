// 10개의 명언 베열
const quotes = [
    {
        quote: "어디를 가든지 마음을 다해 가라.",
        author: "공자"
    },
    {
        quote: "믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다.",
        author: "무하마드 알리"
    },
    {
        quote: "할 수 없을 것 같은 일을 하라. 실패하라. 그리고 다시 도전하라. 이번에는 더 잘 해보라. 넘어져 본 적이 없는 사람은 단지 위험을 감수해 본 적이 없는 사람일 뿐이다. 이제 여러분 차례이다. 이 순간을 자신의 것으로 만들라.",
        author: "오프라 윈프리"
    },
    {
        quote: "나는 결국 실패할 대의를 추구하여 승리하기보다는 결국 승리할 대의를 따르다 실패하겠다.",
        author: "우드로 윌슨"
    },
    {
        quote: "그 여정이 바로 보상이다.",
        author: "스티브 잡스"
    },
    {
        quote: "만족은 결과가 아니라 과정에서 온다.",
        author: "제임스 딘"
    },
    {
        quote: "흠집 없는 조약돌보다는 흠집 있는 다이아몬드가 낫다.",
        author: "공자"
    },
    {
        quote: "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라..",
        author: "헬렌 켈러"
    },
    {
        quote: "행복하게 여행하려면 가볍게 여행해야 한다.",
        author: "생텍쥐페리"
    },
    {
        quote: "진정한 여행자는 걸어서 다니는 자이며, 걸으면서도 자주 앉는다.",
        author: "콜레트"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;