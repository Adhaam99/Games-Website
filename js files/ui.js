
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

export class Ui{

    async gamesDisplay(category = "mmorpg",obj) {

        let res = await gameApi(category)
    
        gameRow.innerHTML = ""
    
        for (let i = 0; i < res.length; i++) {
    
            let name = res[i].title
    
            name = new obj(res[i].id, res[i].title, res[i].thumbnail, res[i].short_description, res[i].genre, res[i].platform)
    
            name.gameDisplay()
    
    
    
        }
    
    
    }

    async displayDetails(id,obj) {

        details.classList.remove("d-none")
        body.classList.add("overflow-hidden")
    
    
        let res = await detailsApi(id)
    
        console.log(res);
    
        let element = new obj(res.title, res.thumbnail, res.status, res.description, res.game_url, res.genre, res.platform)
    
        element.detailsDisplay()
    
    }
}