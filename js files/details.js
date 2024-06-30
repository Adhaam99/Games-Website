export class DetailsDisplay {

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

