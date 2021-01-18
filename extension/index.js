let resultDiv = document.querySelector(".attemptResultsSummary .ResultsWithError");
if(!resultDiv) resultDiv = document.querySelector(".attemptResultsSummary .ResultsWithoutError");

const hope = [
    "https://media.giphy.com/media/1xVbRS6j52YSzp9P7N/giphy.gif",
    "https://media.giphy.com/media/XcAa52ejGuNqdb5SFQ/giphy.gif",
    "https://media.giphy.com/media/n3YMhEGYUAw4E/giphy.gif",
    "https://media.giphy.com/media/UWEZ8dWFjwzel26x2W/giphy.gif",
    "https://media.giphy.com/media/11F0d3IVhQbreE/giphy.gif",
    "https://media.giphy.com/media/obQ0Q8dav3L5S/giphy.gif",
    "https://media.giphy.com/media/TwmEnGgxdUT4Y/giphy.gif",
    "https://media.giphy.com/media/dnIsXwv78BC4U/giphy.gif"
]

const victory = [
    "https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",
    "https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif",
    "https://media.giphy.com/media/cOB8cDnKM6eyY/giphy.gif",
    "https://media.giphy.com/media/5oGIdt1xapQ76/giphy.gif",
    "https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif",
    "https://media.giphy.com/media/xT5LMVTPf4zIH3zYk0/giphy.gif",
    "https://media.giphy.com/media/rhfxbPtm4m5uo/giphy.gif",
    "https://media.giphy.com/media/UWEcHpY9k3rxe/giphy.gif"
]

if(resultDiv){
  if(resultDiv.innerText == "The answer above is NOT correct."){
    const br = document.createElement("br")
    const br2 = document.createElement("br")
    const image = document.createElement("img");
    const randomImageSrc = hope[Math.floor(Math.random()*hope.length)]
    console.log("currently showing gif:", randomImageSrc);
    image.src = randomImageSrc
    image.height = 50
    image.style = "border: 5px solid indianred; border-radius: 10px; height : 175px";
    resultDiv.append(br, br2, image);
  } else if(resultDiv.innerText == "The answer above is correct."){
    const br = document.createElement("br")
    const br2 = document.createElement("br")
    const image = document.createElement("img");
    const randomImageSrc = victory[Math.floor(Math.random()*victory.length)]
    console.log("currently showing gif:", randomImageSrc);
    image.src = randomImageSrc
    image.height = 50
    image.style = "border: 5px solid indianred; border-radius: 10px; height: 175px";
    resultDiv.append(br, br2, image);
  }
}
