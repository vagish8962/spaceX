function UI () {
    this.profile = document.querySelector('.spaceXcontainer');

    this.showSpaceX = (spaceX) => {
        this.profile.innerHTML = '';
        if (spaceX.spaceXdata.length > 0) {
            spaceX.spaceXdata.map( spaceX =>  {
                const str = ` <div class="col-sx-3 col">
                <div class="pic">
                    <img src="${spaceX.links.mission_patch_small}" alt="">
                </div>
                <h3>${spaceX.rocket.rocket_name}</h3>
                <p>Mission IDS: <span> ${spaceX.mission_id[0]}</span></p>
                <p>Launch Year: <span>${spaceX.launch_year}</span></p>
                <p>Successful Launch: <span>${spaceX.launch_success}</span></p>
                <p>Successful Landing: <span>${spaceX.rocket.first_stage.cores[0].land_success}</span></p>
    
            </div>`;
                this.profile.insertAdjacentHTML('beforeend', str);
            });
        } else {
            this.profile.insertAdjacentHTML('beforeend',  `<div class="noresult"> No Records Found</div>`);
        }
        
    }
}