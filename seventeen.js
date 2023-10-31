const quotes = [
    {
        quote: "dasdsads",
        author: "das",
    },
    {
        quote: "dasdsads1",
        author: "das1",
    },
    {
        quote: "dasdsads2",
        author: "das2",
    },
    {
        quote: "dasdsads3",
        author: "das3",
    },
    {
        quote: "dasdsads4",
        author: "das4",
    },
    {
        quote: "dasdsads5",
        author: "das5",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const today = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = today.quote;
author.innerText = today.author;
