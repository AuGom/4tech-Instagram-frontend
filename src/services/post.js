import {axios4tech} from './config';

export const getPosts= (page=0)=>{
    return  axios4tech.get(`user-activity/${page}`);
};

