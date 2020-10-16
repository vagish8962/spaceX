function UI () {
    this.profile = document.querySelector('.spaceXcontainer');

    this.showSpaceX = (spaceX) => {
        this.profile.innerHTML = '';
        if (spaceX.spaceXdata.length > 0) {
            spaceX.spaceXdata.forEach( spaceX =>  {
                let landtag = document.createElement('p');
                let launchFlag = spaceX.rocket.first_stage.cores[0].land_success !== null ? 
                    `<p>Successful Landing: <span>${spaceX.rocket.first_stage.cores[0].land_success}</span></p>`
                    : 
                    '';
                landtag.insertAdjacentHTML( 'beforeend', `${launchFlag}` ); 
              
                let missions = document.createElement('ul');
                spaceX.mission_id.forEach((misson) => {
                    missions.insertAdjacentHTML( 'beforeend', `<li>${misson}</li>` ); 
                });
            const str = ` <div class="col-sx-3 col col-sx-md-6">
                    <article class="space-each">
                    <div class="pic">
                        <img src="${spaceX.links.mission_patch_small}" alt="${spaceX.rocket.rocket_name}">
                    </div>
                    <h3>${spaceX.rocket.rocket_name}</h3>
                    <p>Mission IDS:<ul> ${missions.innerHTML}</ul></p>
                    <p>Launch Year: <span>${spaceX.launch_year}</span></p>
                    <p>Successful Launch: <span>${spaceX.launch_success}</span></p>
                    ${landtag.innerHTML}
                    </article>
                </div>`;
                console.log(str);
                this.profile.insertAdjacentHTML('beforeend', str);
            });
        } else {
            this.profile.insertAdjacentHTML('beforeend',  `<div class="noresult"> No Records Found</div>`);
        }
        
    }
}
