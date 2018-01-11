import axios from 'axios';

export default {

    getWx: (airport) => {
        const url = `http://avwx.rest/api/metar/${airport}?options=info`;
        return axios.get(url);
    }
    
};
