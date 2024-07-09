

export class Ui {

    constructor() {
        this.gameRow = document.querySelector("#gameRow");
        this.detailsRow = document.querySelector("#detailsRow")

    }

    displayGames(data) {

        let cartona=""

        for(let i=0;i<data.length;i++){

            cartona+= `                    
            
            <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card w-100 h-100" id="${data[i].id}">
    
                            <div class="card-body">
                                <div class="card-img mb-3">
                                    <img src="${data[i].thumbnail}" class="card-img-top" alt="image">
                                </div>
                                <div class="card-content">
                                    <div class="cont-1 d-flex justify-content-between align-items-center">
                                        <h3 class="h6 text-white">${data[i].title}</h3>
                                        <span class="type text-bg-primary p-2 rounded-2">Free</span>
    
                                    </div>
                                    <p class="card-text text-center opacity-50 text-white">
                                     ${data[i].short_description}
                                    </p>
    
                                </div>
    
                            </div>
                            <footer>
                                <div class="card-footer d-flex justify-content-between text-white">
                                    <span class="badge">${data[i].genre}</span>
                                    <span class="badge">${data[i].platform}</span>
                                </div>
                            </footer>
    
                        </div>
                    </div>
                    
                    `;
        }

        this.gameRow.innerHTML=cartona 
    }

    detailsDisplay(data) {

        let cartona = "";

        cartona = `
        
        <div class="col-md-4">
                        <div class="details-image">
                            <img src="${data.thumbnail}" class="w-100" alt="">
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h3>Title: ${data.title}</h3>
                        <p>Category:
                            <span class="text-bg-info badge">${data.genre}</span>
                        </p>
                        <p>Platform:
                            <span class="text-bg-info badge">${data.platform}</span>
                        </p>
                        <p>Status:
                            <span class="text-bg-info badge">${data.status}</span>
                        </p>
                        <p class="small">
                        ${data.description}
                        </p>
                        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                    </div>


        `
        this.detailsRow.innerHTML = cartona;


    }


}