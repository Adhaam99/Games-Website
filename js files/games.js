export let card=document.querySelectorAll(".card")

export class GamesDisplay {

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

                card=document.querySelectorAll(".card")

                /*
        $(".card").on("click", function (e) {

            let id = $(e.currentTarget).attr("id")

            //console.log(id);

            getId(id)

        })*/
    }
}

