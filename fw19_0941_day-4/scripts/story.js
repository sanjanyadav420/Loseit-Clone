let slideData = [
    { img: "https://assets.loseit.com/website/story_submission/member_josh.png", p: "Josh lost 52 lbs, his doctor says he’s in the best shape of his life" },
    { img: "https://assets.loseit.com/website/story_submission/member_emily.png", p: "Emily Partnered Up With Her Husband & Watched 51 Lbs Melt Away!" },
    { img: "https://assets.loseit.com/website/story_submission/member_justin.png", p: "Meet Justin: Father, Lose It! Member, & Healthy Recipe Creator Who Lost 190 Lbs" },
    { img: "https://assets.loseit.com/website/story_submission/member_laura.png", p: "Laura Stopped Feeding Her Emotions And Dropped 118 Lbs" },
    { img: "https://assets.loseit.com/website/HIW/advice-premium_clayton.png", p: "Clayton Joined A Weight Loss Challenge At Work And Shed 50 Lbs" },
    { img: "https://assets.loseit.com/website/HIW/advice-free_ashley.png", p: "Ashley Used A Medical Scare As Motivation and Lost 176 Lbs" }
]
// console.log(slideData)

let image = document.querySelector("#inner-story>img");
let p = document.querySelector("#inner-story>p");

//  .........Unable to do the slide part.........
slideData.forEach(el=> {
    setInterval(()=>{
        image.src = el.img;
        p.innerText = el.p;
    }, 3000);
});


