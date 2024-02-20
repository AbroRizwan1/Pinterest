var arry = [
    { name: "River", image: "river.jpg" },
    { name: "Petals of roses", image: "photo-1518831696273-f1886ea5f920.avif" },
    { name: "Snowfall", image: "snowfall.avif" },
    { name: "Girl", image: "girl3.jpg" },
    { name: "Eye", image: "eye2.jpg" },
    { name: "cat", image: "cat1.jpg" },
    { name: "wolf", image: "wolf.jpg" },
    { name: "car", image: "car3.jpg" },
    { name: "cat", image: "cat2.jpg" },
    { name: "Tiger", image: "tiger1.jpg" },
    { name: "cat", image: "cat3.jpg" },
    { name: "lion", image: "lion2.jpg" },
    { name: "River", image: "river.avif" },
    { name: "Girl", image: "girl.jpg" },
    { name: "mountains", image: "premium_photo-1673254928968-b6513f32d43b.avif" },
    { name: "Girl cartoon", image: "girl6.jpg" },
    { name: "lion", image: "lion1.jpg" },
    { name: " the Girl", image: "girll0.jpg" },
    { name: " the Eye", image: "eye.jpg" },
    { name: "the Boy", image: "boy4.jpg" },
    { name: " the lion", image: "lion.jpg" },
    { name: "car", image: "car2.jpg" },
    { name: "Tiger", image: "tiger.jpg" },
    { name: "Boat", image: "boat.avif" },
    { name: "flower", image: "flower1.jpg" },
    { name: "the Boy", image: "boy3.jpg" },
    { name: " Car", image: "car.avif" },
    { name: "flower", image: "flower.jpg" },
    { name: "the Girl", image: "girl4.jpg" },
    { name: "Girl cartoon", image: "girl11.jpg" },
    { name: "Boat", image: "car1.jpg" },
    { name: "Boy", image: "boy2.jpg" },
    { name: "Tiger", image: "tiger2.jpg" },
    { name: "Girl cartoon", image: "girl8.jpg" },
    { name: "Eye", image: "eye.jpg" },
    { name: "car", image: "boat.jpg" },
    { name: "Eye", image: "eye6.jpg" },
    { name: "Boy", image: "boy1.jpg" },
    { name: "Girl cartoon", image: "girl7.jpg" },
    { name: "The Girl", image: "girl9.jpg" },
    { name: "Boy", image: "boy.jpg" },


]



function showTheCards() {

    var clutter = "";

    arry.forEach(function (obj) {
        clutter += ` <div class="col-12 col-sm-12 col-md-6 col-lg-2 mt-3">
        <img class="img-fluid" src="${obj.image}" alt="">
    </div>  `;

    })

    document.querySelector(".row").innerHTML = clutter;

}


function searchFunctionality() {

    var input = document.querySelector("#searchInput");


    input.addEventListener("focus", function () {
        document.querySelector(".overlay")
            .style.display = "block";
    })


    input.addEventListener("blur", function () {
        document.querySelector(".overlay")
            .style.display = "none";
    })


    input.addEventListener("input", function () {
        const filteredArray = arry.filter(obj => obj.name.toLocaleLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="searchbar-item">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>${obj.name}</h3></div>`

        });

        let searchBar = document.querySelector(".search-bar");

        searchBar.style.display = "block";
        searchBar.innerHTML = clutter;

        // document.querySelector(".search-bar").style.display = "block";
        // document.querySelector(".search-bar").innerHTML = clutter;
    })


    input.addEventListener("blur", function () {
        document.querySelector(".search-bar")
            .style.display = "none";
    })




}


searchFunctionality()
showTheCards();