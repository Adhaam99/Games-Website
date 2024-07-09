import { Ui } from "./ui.module.js";

export class Details {

    constructor() {

        this.ui = new Ui()

        

        this.loading=document.querySelector(".bg-loading")

        

        document.querySelector('.details').classList.remove("d-none")
        document.querySelector('body').classList.add('overflow-hidden')

        document.querySelector('#close').addEventListener("click",()=>{

            document.querySelector('.details').classList.add("d-none")
            document.querySelector('body').classList.remove('overflow-hidden')
        
        })


    }

    async detailsApi(id) {

        document.querySelector("#detailsRow").innerHTML=""

        this.loading.classList.remove("d-none")

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

            this.ui.detailsDisplay(result)

            this.loading.classList.add("d-none")

            return result
        } catch (error) {
            console.error(error);
        }
    }


}

