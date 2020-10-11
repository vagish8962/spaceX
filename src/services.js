function Services () {
    this.getData = async (filter, t) => {
        const queryStrings = '?limit=100&' + new URLSearchParams(filter).toString();
        const url = (t == 'load' && localStorage.getItem('url'))? localStorage.getItem('url') : `https://api.spaceXdata.com/v3/launches${queryStrings}`;
        const spaceXResponse = await fetch(url);

        const spaceXdata = await spaceXResponse.json();
        localStorage.setItem('url', url)
        return {
            spaceXdata
        }
    }
}