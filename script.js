const quotes = [
    ["I have to stop rushing things. I have to be composed in my mind and slow things down. I think that will make me a better finisher.", "Ji"],
    ["Success is not built on success. It's built on failure. It's built on frustation. Sometimes its built on catastrophe.", "Summer Redstone"],
    ["We know what we are, but not what we may be.", "William Shakespeare"],
    ["Whether you think you can or think you can't, you're right.", "Henry Ford"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
    ["Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.", "Samuel Beckett"],
    ["I have no special talents. I am only passionately curious.", "Albert Einstein"],
    ["The best revenge is massive success.", "Frank Sinatra"],
    ["Forever is composed of nows.", "Emily Dickinson"],
    ["I have not failed. I've just found 10,000 ways that won't work.", "Thomas A. Edison"],
    ["Well done is better than well said.", "Benjamin Franklin"],
    ["Your imagination is your preview of life's coming attractions.", "Albert Einstein"],
    ["In theory there is no difference between theory and practice. In practice there is.", "Yogi Berra"],
    ["Someday is not a day of the week.", "Denise Brennan-Nelson"],
    ["Start before you're ready. Good things happen when we start before we're ready.", "Steven Pressfield"]
]

const colors = [
    "#ff71ce",
    "#B28DFF",
    "#b967ff",
    "#ECD4FF",
    "#01cdfe",
    "#05ffa1",
    "#fffb96",
    "#AFF8DB",
    "#ff00c1",
    "#00fff9",
    "#defe47",
    "#FFABAB",
    "#FFCBC1"
];


const btn = document.getElementById("btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


btn.addEventListener("click", function() {
   const randomQuoteNumber =  getRandomQuoteNumber();
   const randomColorNumber = getRandomColorNumber();

   // text
   quote.textContent = quotes[randomQuoteNumber][0];
   author.textContent = quotes[randomQuoteNumber][1];

   // color
   document.getElementById("quote").style.color = colors[randomColorNumber];
})


function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

function getRandomColorNumber() {
    return Math.floor(Math.random() * colors.length);
}