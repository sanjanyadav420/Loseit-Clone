import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let fitnessArr=[
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-891629998.jpg?resize=1536%2C1024&ssl=1",
        name:"3 Dinner Ideas When You Don’t Know What to Make",
        para:"Do you ever find it hard to think of new, healthy dinner ideas?  If so, you aren’t alone. Even as a dietitian, an actual food and nutrition expert, I, too, still have nights when absolutely nothing sounds appetizing. However, I’ve learned that sometimes the recipe staples in your home may be something new for someone else, so to share, here’s a peek inside my kitchen.  I’m sharing some of the quick and easy healthy dinners that I cook for my family on repeat.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1036554940.jpg?resize=1536%2C1024&ssl=1",
        name:"4 Reasons You’re Not Losing Weight With Intermittent Fasting ",
        para:"In my opinion, an intermittent fasting (IF) dietary approach is both a science and an art. I consider it a science because the approach can be used for many reasons—one of which may be weight loss. I also consider it an art because an IF dietary approach has to be personalized with respect to eating patterns and fasting regimens. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1280247430.jpg?resize=1536%2C1024&ssl=1",
        name:"I’m a Dietitian and I Tried Intermittent Fasting for 21 Days, Here’s What Happened",
        para:"An intermittent fasting (IF) dietary approach has gained popularity over recent years. It can be described as a way of eating that gladly welcomes various dietary patterns and is touted to have a multiple health benefits. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1326518646.jpg?resize=1536%2C1024&ssl=1",
        name:"6 Dietitian-Approved Gas Station Snacks",
        para:"Looking for adventure? Get the motor running; let’s go to the gas station. From cross-country road trips to weekend getaways, you’ll find more than just fuel for your car at a gas station—you’ll also find fuel for your body. Today we’ve rounded up a few of our favorite dietitian-approved gas station snacks to help you make the most of your next roadside pit stop.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1358010197.jpg?resize=1536%2C1037&ssl=1",
        name:"How An Intermittent Fasting Dietary Approach May Impact Hormone Health",
        para:"There’s a lot of talk about intermittent fasting (IF) dietary approaches and their impact on hormone health. In fact, if you do a Google search for the term “intermittent fasting and hormone health,” you’ll find over seven million search results.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1152930321-1.jpg?resize=1536%2C1024&ssl=1",
        name:"3 Ways to Avoid Constipation While Practicing An Intermittent Fasting Dietary Approach ",
        para:"If you have ever had constipation, you know that it might be an uncomfortable experience. While constipation is generally defined as the infrequent passage of stool or difficulty passing stools, the exact reasons someone may experience constipation can vary.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1373260075.jpg?resize=1536%2C1025&ssl=1",
        name:"How To Make A Simple Salad Dressing For Any Occasion",
        para:"Salad dressing tastes great. It can add flavor, texture, and pizzazz to liven up any salad.  But homemade salad dressing is even better because it’s fresh, cost-effective, and can be made using a few ingredients. Making a simple salad dressing isn’t hard—just follow the steps below to build your own salad dressing using as little as four ingredients. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1192905179.jpg?resize=1536%2C1025&ssl=1",
        name:"How to Eat a High-Protein Diet While Practicing an Intermittent Fasting Dietary Approach",
        para:"What is Protein? Protein is a multipurpose macronutrient that the body needs for the growth, repair, and proper functioning of cells. General dietary guidelines recommend that 15-30% of your daily calories come from protein. The Recommended Dietary Allowance (RDA) states adults should consume 0.8 grams of protein per kilogram of body weight per day.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1141343601.jpg?resize=1536%2C1024&ssl=1",
        name:"Nutrients to Keep in Mind When You’re Fasting",
        para:"There are two types of hunger: physical and hidden. Physical hunger is the type of hunger you may experience if you go a prolonged period of time without eating. This hunger may make your stomach growl, cause you to feel light-headed, and result in hunger pangs. The symptoms of this type of hunger are generally alleviated when you eat something.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1176762073.jpg?resize=1536%2C1024&ssl=1",
        name:"Hello from Lisbon: 4 International Desserts We’re Enjoying",
        para:"Hello from Portugal.  Every year, our team goes on an international retreat to experience the culture of somewhere beyond our Boston roots.  This year, we are off to Lisbon, Portugal.  Working for a food tracking app, we innately love all things food.  Traveling somewhere new allows the experience of tasting new and exciting flavors and dishes native to that city.  We’re excited to help bring a little bit of Portugal into your kitchen with these four traditional dessert recipes.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1289714126.jpg?resize=1536%2C1024&ssl=1",
        name:"What Happens to Your Body During an Intermittent Fasting Dietary Approach?",
        para:"If I were to take a wild guess, you’re probably in one of two places: either you’re thinking about starting an intermittent fasting (IF) dietary approach and are curious to know how your body will respond, or you’ve already started to practice an IF dietary approach and are thinking, “I’m so hungry! What is my body going through right now?”",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-492596717.jpg?resize=1536%2C1052&ssl=1",
        name:"How to Use an Intermittent Fasting Dietary Approach for Weight Loss",
        para:"There are different ways to lose weight.Some people may pay attention to the volume of foods consumed, while others may zero in on a particular dietary approach. One weight loss method that has gained a lot of media attention lately is the intermittent fasting (IF) dietary approach. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1337857808.jpg?resize=1536%2C864&ssl=1",
        name:"10-Minute All Out Arms Workout",
        para:"Summer is here! Bring on the sun, sand, and sleeveless shirts! Let’s whip those arms into shape with a quick and effective upper-body workout Traveling with no equipment? No problem! These exercises may be performed using a variety of different tools (water jugs, cans, etc.) or no weights at all.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1300311769.jpg?resize=1536%2C1024&ssl=1",
        name:"4 Brain-Boosting Foods to Keep in Mind",
        para:"Googling “what are the healthiest foods to eat?” yields an abundance of answers. The results range from 15 life-changing superfoods to the 100 healthiest foods on the planet. What we love about these results is that they all encourage consuming a variety of foods which is important for a healthy body.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1322712309.jpg?resize=1536%2C1025&ssl=1",
        name:"5 Salads to Enjoy on Repeat This Summer",
        para:"Late sunsets, tropical produce, and warm weather all point to one thing–summer has officially arrived. We don’t know what’s more exciting, the fact it’s officially summer or the abundance of summer produce. In honor of the warm weather, here are five summer salads that will keep you cool and work well at any cookout.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1097262046.jpg?resize=1536%2C1024&ssl=1",
        name:"6 Grilling Ideas from our Lose It! Team Members",
        para:"Did you know that approximately 75% of Americans own a grill (or smoker)?  That’s a lot of us, and with the summer weather in full swing, you may find yourself turning towards this cooking method more frequently.  We know the best advice usually comes from those around us, so we polled our office to get their best grilling ideas and hacks.  Keep reading to learn what they had to say.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1387842183.jpg?resize=1536%2C1024&ssl=1",
        name:"7 Days to a Stronger Core",
        para:"“Stand up straight. Chest up. Shoulders back!”  This line was on constant repeat at my grandparents’ house growing up. Posture was very important to my grandfather, and he was determined to keep his youngest grandchild very well poised! He knew good core strength helps prevent falls and supports the entire body. He knew that having a strong core benefits everyone, no matter what age because it allows every body to function properly. While I may have laughed (and probably cried) about it then, I realize now how grateful I am for him promoting the importance of core strength! ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-544004162.jpg?resize=1536%2C1024&ssl=1",
        name:"11 Red, White & Blue Recipes for the 4th",
        para:"This iconic American summer holiday is well-known for its theme of red, white, and blue. From decorations to fireworks, you’ll see it represented throughout. So, why not also keep the theme going with your food? We’ve rounded up eleven drool-worthy dishes for you to choose from that feature red, white, and blue ingredients. After all, we think holiday eating should be fun…and festive food seems like the best way to do it. Enjoy!",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1153816876-1.jpg?resize=1536%2C1024&ssl=1",
        name:"Do Males and Females Lose Weight Differently?",
        para:"Every body is different. When it comes to body weight, there are a variety of modifiable and non-modifiable factors that decide someone’s final weight status. When you throw sex into the mix, the weight equation gets even more interesting. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1227309296.jpg?resize=1536%2C1025&ssl=1",
        name:"3 Foods for Better Sleep",
        para:"If we have one thing in common, it’s the fact that we all sleep. Sleep is a natural periodic state of rest, and according to the Sleep Foundation, most healthy adults need about seven to nine hours of sleep each night. But what if you can’t sleep or aren’t getting enough.  Could your diet help? Keep reading to learn which foods might boost your zzz’s.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/05/GettyImages-1140193165.jpg?resize=1536%2C1024&ssl=1",
        name:"Intermittent Fasting Essentials from a Dietitian",
        para:"What immediately comes to mind when you think of intermittent fasting (IF)? Is it restriction, high levels of self-control, and the total abstinence of food during fasting windows? Or maybe it’s feelings of bliss and indulging in your favorite foods during feasting windows.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1337654334.jpg?resize=1536%2C1025&ssl=1",
        name:"Intro to Intermittent Fasting",
        para:"Whether you’re an intermittent fasting (IF) newbie or an IF pro looking for a refresher, you’ve come to the right place to get all the details on IF. The IF dietary approach to eating has been picking up steam, especially in health and wellness spaces.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1220372067.jpg?resize=1536%2C1024&ssl=1",
        name:"4 Male Food Bloggers We’re Loving",
        para:"Are you feeling a little blah in the kitchen? Needing some recipe inspiration? In honor of Men’s Health Week, we are featuring these four foodies hoping they will inspire you to try out new flavors and bring some much-needed excitement back into your kitchen. Keep reading to see how these four fellas might help you to make healthy eating a little easier.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1357522236.jpg?resize=1536%2C1025&ssl=1",
        name:"Curious About Intermittent Fasting? How To Choose A Fast That Works For You",
        para:"Intermittent Fasting (IF) is a way of eating that incorporates various dietary patterns. It is growing in popularity as it is associated with numerous health benefits. Because health is not one size fits all, picking the right type of fast makes a world of difference; after all, you want to make sure your fast aligns with your lifestyle and goals. Today, we’ll examine a few different types of fasts and provide some tips to help you understand which one might be right for you.",
    },
    

];
let fitness=document.getElementById("fitnesstips");
let displayRecipes=(fitnessArr)=>{
fitness.innerHTML="";
fitnessArr.forEach(({Image,name,para})=>{
    let image=document.createElement("img");
    image.src=Image;
    image.addEventListener("click",()=>{
        window.location.href="https://loseitblog.com/2022/07/12/4-reasons-youre-not-losing-weight-with-intermittent-fasting/";
    })
    let h1=document.createElement("h1");
    h1.innerText=name;
    let p=document.createElement("p");
    p.innerText=para;
    let btn=document.createElement("button");
    btn.innerText= "Read More...."
    btn.addEventListener("click",()=>{
        window.location.href="https://loseitblog.com/2022/07/12/4-reasons-youre-not-losing-weight-with-intermittent-fasting//";
    });
    let div=document.createElement("div");
    div.append(image,h1,p,btn);
    fitness.append(div);
})
}
displayRecipes(fitnessArr);