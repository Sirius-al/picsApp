import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID uL-mLIDg_QSHLfh0vMOjxkNkeciSGrAybRZcwC763sg`
    }
});