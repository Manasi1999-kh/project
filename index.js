const quotes=[{quote:"The Best Way To Get Started Is To Quit Talking And Begin Doing.",author:"--Walt Disney"},{quote:"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",author:"--Winston Churchill"},{quote:"Don't Let Yesterday Take Up Too Much Of Today.",author:"-- Will Rogers"},{quote:"If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You.",author:"--Steve Jobs"},{quote:"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",author:"-- Rob Siltanen"}]
//const quotes=[{quote:"The Best Way To Get Started Is To Quit Talking And Begin Doing.",author:"--Walt Disney"},{quote:"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",author:"--Winston Churchill"},{quotes:"Don’t Let Yesterday Take Up Too Much Of Today.",author:"-- Will Rogers"},{quotes:"",author:"--"},{quotes:"",author:"--"},{quotes:"",author:"--"}]
function newquote()
{
    var ran=Math.floor(Math.random()*(quotes.length));
    document.getElementById("d").innerHTML=quotes[ran].quote;
    document.getElementById("a").innerHTML=quotes[ran].author;

}