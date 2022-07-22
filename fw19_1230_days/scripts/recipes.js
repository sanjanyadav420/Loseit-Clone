import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let recipesData=[
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/06/Miso-Lime-Tuna.jpg?w=1010&ssl=1",
        name:"Miso-Lime Tuna",
        para:"Miso-Lime Tuna is a restaurant-quality meal that you can easily make at home"
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-891629998.jpg?resize=1536%2C1024&ssl=1",
        name:"3 Dinner Ideas When You Don’t Know What to Make",
        para:"Do you ever find it hard to think of new, healthy dinner ideas?  If so, you aren’t alone.  Even as a dietitian, an actual food and nutrition expert, I, too, still have nights when absolutely nothing sounds appetizing",

    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1373260075.jpg?resize=1536%2C1025&ssl=1",
        name:"How To Make A Simple Salad Dressing For Any Occasion",
        para:"Salad dressing tastes great. It can add flavor, texture, and pizzazz to liven up any salad.  But homemade salad dressing is even better because it’s fresh, cost-effective, and can be made using a few ingredients.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1322712309.jpg?resize=1536%2C1025&ssl=1",
        name:"5 Salads to Enjoy on Repeat This Summer",
        para:"Late sunsets, tropical produce, and warm weather all point to one thing–summer has officially arrived. ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1301821349.jpg?resize=1536%2C1024&ssl=1",
        name:"4 Veggie Burgers We’re Loving",
        para:"Are you bored of what you typically reach for at lunch?  Or maybe you’re working on boosting your vegetable intake at dinner.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/03/GettyImages-1130732658.jpg?resize=1536%2C1006&ssl=1",
        name:"4 Ways to Enjoy Salsa (Besides Chips)",
        para:"May is National Salsa Month, and at Lose It!, we are more than happy to celebrate.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/02/GettyImages-1136728936.jpg?resize=1536%2C1025&ssl=1",
        name:"The Health Benefits of Pecans",
        para:"Pecans may be best known for their starring role in the dessert, pecan pie, but this nut shines alone as well.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/02/GettyImages-1254969187.jpg?resize=1536%2C1025&ssl=1",
        name:"2 Delicious Recipes to Celebrate National Oatmeal Cookie Day",
        para:"We love a food holiday and Oatmeal Cookie Day is 100% one we can get behind.  We’re sharing two cookie recipes for you to bake up and celebrate, but first, let’s talk about the health benefits of oatmeal.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/03/GettyImages-1300357939.jpg?resize=1536%2C1024&ssl=1",
        name:"5 Keto Snacks to Snag",
        para:"We’ve heard from our readers and know that many of you are focusing on healthy snacking and reducing carbohydrate content.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/02/GettyImages-1134034941.jpg?resize=1536%2C1235&ssl=1",
        name:"Healthy Brunch Items That Will Be A Hit At Easter",
        para:"Are you hosting Easter brunch this year?  If so, you know the amount of planning it requires. Menu planning can sometimes be the hardest part.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/04/Veggie-Poke-Bowl.png?w=1010&ssl=1",
        name:"Plant-Based Poke Bowls",
        para:"Usually filled with fish, rice, and veggies, poke bowls have become a popular lunch option when dining out.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/03/9a3536bb-2cb6-4f66-a851-a945a8c66032RESIZE-1.jpeg?w=1010&ssl=1",
        name:"Chickpea Pasta Salad",
        para:"This easy-to-make pasta salad recipe is perfect for meal prep, holiday get-togethers, or just a quick and fresh dinner.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/05/GettyImages-1301822304.jpg?resize=1536%2C1024&ssl=1",
        name:"Swap Your Traditional Meat-Based Dishes for These Plant-Based Options",
        para:"No meat? No problem! In addition to plant-based diets being on the rise, many of us are noticing the increase in meat prices at the grocery store right now.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/06/Mexican-Corn-Salad.jpg?w=1010&ssl=1",
        name:"Mexican Street Corn Salad",
        para:"Corn is in season! Branch out from the cob and try this delicious street corn salad recipe that bursts with flavor.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/03/img_7560.jpeg?w=1010&ssl=1",
        name:"Homemade Cinnamon Pop Tarts",
        para:"A Pop Tart is essentially a little pastry that has a flaky crust, topped with a glaze, and filled with a sugary flavor.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/07/Spinach-Artichoke-Frittata-Featured.png?w=1010&ssl=1",
        name:"Spinach and Artichoke Cottage Cheese Frittata",
        para:"This Spinach and Artichoke Frittata is high-protein, low-carb, and perfect for breakfast or a light lunch.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/07/Radicchio-Pear-Salad.jpg?w=1010&ssl=1",
        name:"Radicchio and Pear Salad",
        para:"Are you familiar with radicchio? Chances are you’ve seen it at the store, but weren’t sure how to put it to good use.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/08/Chicken-Tikka-Masala.png?w=1010&ssl=1",
        name:"Lightened Up Chicken Tikka Masala",
        para:"This lightened up chicken tikka masala is an easy weeknight meal with a healthy spin. There are few dishes that I find as comforting as chicken tikka masala. After all, how can you say no to tender chicken simmered in a rich and creamy sauce? ",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/07/Zucchini-Noodle-Salad.jpg?w=1010&ssl=1",
        name:"Zucchini Noodle Salad",
        para:"This plant-based vegetarian is a take on a soba noodle salad. It’s a fresh and easy recipe – and the best part is no cooking is required.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/10/Beet-Citrus.jpg?w=1010&ssl=1",
        name:"Beet and Citrus Salad",
        para:"Brighten and lighten up all those heavy holiday dishes with this gorgeous beet and citrus salad.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/05/Miso-Spinach.jpg?w=1010&ssl=1",
        name:"Miso Sesame Spinach",
        para:"Nutrition facts:servings: 2 serving size about 1 cup cooked spinach",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/04/Strawberry-Scallops.jpg?w=1010&ssl=1",
        name:"Strawberry Scallops",
        para:"Nutrition Facts: Servings: 4 serving size: 4 scallops, 1 tablespoon of strawberry sauce",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2020/04/Tumeric-Orange-Salmon.jpg?w=1010&ssl=1",
        name:"Blood Orange & Turmeric Salmon",
        para:"Blood Orange & Turmeric Salmon Beautiful colors, delicious flavors and immune boosting ingredients.",
    },
    {
        Image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/07/Salmon-Salad.jpg?w=1010&ssl=1",
        name:"Avocado Salmon Salad",
        para:"Put a fun spin on your traditional tuna salad with this keto-friendly salmon salad. This recipe is quick and easy to put together and great for meal prep. Throw it on top of a salad or pile it high in a sandwich for an easy lunch or light supper.",
    },
];

let recipes=document.getElementById("recipies");
let displayRecipes=(recipesData)=>{
recipes.innerHTML="";
recipesData.forEach(({Image,name,para})=>{
    let image=document.createElement("img");
    image.src=Image;
    image.addEventListener("click",()=>{
        window.location.href="https://loseitblog.com/2022/07/20/miso-lime-tuna/";
    })
    let h1=document.createElement("h1");
    h1.innerText=name;
    let p=document.createElement("p");
    p.innerText=para;
    let btn=document.createElement("button");
    btn.innerText= "Read More...."
    btn.addEventListener("click",()=>{
        window.location.href="https://loseitblog.com/2022/07/20/miso-lime-tuna/";
    });
    let div=document.createElement("div");
    div.append(image,h1,p,btn);
    recipes.append(div);
})
}
displayRecipes(recipesData);