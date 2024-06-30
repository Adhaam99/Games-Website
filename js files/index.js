

// <reference types="../@types/jquery" />;

const body = document.querySelector("body")
const gameRow = document.querySelector("#gameRow")
const details = document.querySelector(".details")
const detailsRow = document.querySelector("#detailsRow")
const close = document.querySelector("#close")
const category = document.querySelectorAll(".nav-link")

//import { GamesDisplay,card} from "./games.js"
//import { DetailsDisplay } from "./details.js"
//import { Ui } from "./ui.js"


// Category Function

for (let i = 0; i < category.length; i++) {

    category[i].addEventListener("click", function (e) {

        for (let i = 0; i < category.length; i++) {
            category[i].classList.remove("active")
        }

        e.target.classList.add("active")

        let cat = $(e.target).text()

        gamesDisplay(cat)
    })

};


close.addEventListener("click", function () {

    details.classList.add("d-none")
    body.classList.remove("overflow-hidden")
    detailsRow.innerHTML = 
    
    `  <div class="bg-loading d-none d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
    
                <span class="loader"></span>
    
            </div>`

})

gamesDisplay("mmorpg")



async function gameApi(categorey) {

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categorey}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '19b8fb6c57msh114281b26c5fdf3p15fe33jsn8daf7b2111bf',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();


        return result

    } catch (error) {
        console.error(error);
    }
}

async function detailsApi(id) {

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '19b8fb6c57msh114281b26c5fdf3p15fe33jsn8daf7b2111bf',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result
    } catch (error) {
        console.error(error);
    }
}

// Games Display

async function gamesDisplay(category = "mmorpg") {

    let res = await gameApi(category)

    gameRow.innerHTML = ""

    for (let i = 0; i < res.length; i++) {

        let name = res[i].title

        name = new GamesDisplay(res[i].id, res[i].title, res[i].thumbnail, res[i].short_description, res[i].genre, res[i].platform)

        name.gameDisplay()



    }


}

gamesDisplay()

// Details Display



async function displayDetails(id) {

    details.classList.remove("d-none")
    body.classList.add("overflow-hidden")


    let res = await detailsApi(id)

    console.log(res);

    let element = new DetailsDisplay(res.title, res.thumbnail, res.status, res.description, res.game_url, res.genre, res.platform)

    element.detailsDisplay()

}


class DetailsDisplay {

    constructor(title, thumbnail, status, description, game_url, genre, platform) {

        this.title = title;
        this.thumbnail = thumbnail;
        this.status = status;
        this.description = description;
        this.game_url = game_url;
        this.genre = genre;
        this.platform = platform
    }

    detailsDisplay() {

        detailsRow.innerHTML = `
        
        <div class="col-md-4">
                        <div class="details-image">
                            <img src="${this.thumbnail}" class="w-100" alt="">
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h3>Title: ${this.title}</h3>
                        <p>Category:
                            <span class="text-bg-info badge">${this.genre}</span>
                        </p>
                        <p>Platform:
                            <span class="text-bg-info badge">${this.platform}</span>
                        </p>
                        <p>Status:
                            <span class="text-bg-info badge">${this.status}</span>
                        </p>
                        <p class="small">
                        ${this.description}
                        </p>
                        <a class="btn btn-outline-warning" target="_blank" href="${this.game_url}">Show Game</a>
                    </div>


        `


    }

}

class GamesDisplay {

    constructor(id, title, thumbnail, short_description, genre, platform) {


        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.genre = genre;
        this.platform = platform
    }

    gameDisplay() {
        gameRow.innerHTML += `                    
            
        <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="card w-100 h-100" id="${this.id}">

                        <div class="card-body">
                            <div class="card-img mb-3">
                                <img src="${this.thumbnail}" class="card-img-top" alt="image">
                            </div>
                            <div class="card-content">
                                <div class="cont-1 d-flex justify-content-between align-items-center">
                                    <h3 class="h6 text-white">${this.title}</h3>
                                    <span class="type text-bg-primary p-2 rounded-2">Free</span>

                                </div>
                                <p class="card-text text-center opacity-50 text-white">
                                 ${this.short_description}
                                </p>

                            </div>

                        </div>
                        <footer>
                            <div class="card-footer d-flex justify-content-between text-white">
                                <span class="badge">${this.genre}</span>
                                <span class="badge">${this.platform}</span>
                            </div>
                        </footer>

                    </div>
                </div>
                
                `;

        $(".card").on("click", function (e) {

            let id = $(e.currentTarget).attr("id")

            displayDetails(id)
        })
    }


}








