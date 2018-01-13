import axios from 'axios';

export default {

    getWx: (airport) => {
        const url = `https://avwx.rest/api/metar/${airport}?options=info`;
        return axios.get(url);
    }
    
};
