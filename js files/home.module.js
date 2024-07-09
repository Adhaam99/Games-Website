import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"


export class Home {

    constructor() {

        document.querySelectorAll(".navbar .nav-link").forEach((link) => {

            link.addEventListener("click", () => {

                this.activeLink(link)

            })
        })

        this.ui = new Ui()

        this.loading=document.querySelector(".bg-loading")

    }

    activeLink(link) {

        document.querySelector(".navbar .active").classList.remove('active')
       
        link.classList.add('active')

        const categorey = link.getAttribute("data-category")

        this.gameApi(categorey)

    }

    async gameApi(categorey = "mmorpg") {

        this.loading.classList.remove("d-none")

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

            this.loading.classList.add("d-none")

            console.log(result)

            this.ui.displayGames(result)

            document.querySelectorAll(".card").forEach((card)=>{

                card.addEventListener("click",(e)=>{

                    const details=new Details()

                    let cardId=e.currentTarget.getAttribute("id")

                    details.detailsApi(cardId)
                    
                })
            })

        } catch (error) {

            console.error(error);

        }
    }
}