const spaceXFilter = document.querySelectorAll('.spaceXFilter div');
const services = new Services();
const ui = new UI();

let filter = {};

const getData = (t, e) => {
    const url = localStorage.getItem('url');
    if ( url ) {
        filter =   Object.fromEntries(new URLSearchParams(url.split("?")[1]));
        delete filter.limit;
        // for (let key in filter) {
        //     tags = document.querySelectorAll('.'+key);
        //     for (i = 0; i < tags.length; i++){
        //         sections[i].classList.remove('active'); 
        //     }
        // }
    }
    // Get Div text
    if (e.target.innerHTML) {
        filter[e.target.className] =  e.target.innerHTML.toLowerCase();
        
        if (filter.hasOwnProperty(e.target.className))  {
            let sections =  document.querySelectorAll(`.${e.target.className}`);
            for (i = 0; i < sections.length; i++){
                sections[i].classList.remove('active'); 
            }
            e.target.classList.add('active');
        } else {
            e.target.classList.add('active');
        }
    }

    
    // calling the API
    services.getData(filter, t)
        .then( data => {
            // Decorating in UI
            ui.showSpaceX(data);
        })
};

// Load and click Handlers
Array.from(spaceXFilter).forEach(link => {
    link.addEventListener("click", getData.bind(null, 'click'));
});

document.addEventListener("DOMContentLoaded", getData.bind(null , 'load'));






