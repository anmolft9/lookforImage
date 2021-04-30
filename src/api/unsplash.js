import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers:{
        Authorization: 'Client-ID eF8iAolEejoWtbPNAnKjhdR4aXqsO52nvzC18oF3lk4'
    }
})