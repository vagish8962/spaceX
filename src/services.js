function Services () {
    this.getData = async (filter, t) => {
        const queryStrings = '?limit=100&' + new URLSearchParams(filter).toString();
        const url = (t == 'load' && localStorage.getItem('spaceurl'))? localStorage.getItem('spaceurl') : `https://api.spaceXdata.com/v3/launches${queryStrings}`;
        // url = url.split("?") ; 
        const spaceXResponse = await fetch(url);

        const spaceXdata = await spaceXResponse.json();
        localStorage.setItem('surl', url);
        return {
            spaceXdata
        }
    }
}
