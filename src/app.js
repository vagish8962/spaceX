const spaceXFilter = document.querySelectorAll('.spaceXFilter div');
const services = new Services();
const ui = new UI();

let filter = {};

const getData = (t, e) => {
    const url = localStorage.getItem('spaceurl');
    if ( url ) {
        filter =   Object.fromEntries(new URLSearchParams(url.split("?")[1]));
        delete filter.limit;
        for (const [key, value] of Object.entries(filter)) {
    
            let sections =  document.querySelectorAll(`.${key}`);
            for (i = 0; i < sections.length; i++){
                if ( value === sections[i].innerHTML.toLowerCase() ) {
                    sections[i].setAttribute('data-active', 'active');
                }
            }
        }
       
    }
    // Get Div text
    if (e.target.innerHTML) {
        filter[e.target.className] =  e.target.innerHTML.toLowerCase();
        
        if (filter.hasOwnProperty(e.target.className))  {

            let sections =  document.querySelectorAll(`.${e.target.className}`);
            for (i = 0; i < sections.length; i++){
                sections[i].removeAttribute('data-active');
            }
            e.target.setAttribute('data-active', 'active');
        } else {
            e.target.removeAttribute('data-active');
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






