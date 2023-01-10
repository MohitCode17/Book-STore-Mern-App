import axios from 'axios';

const URL = 'http://localhost:8000';

export const addBook = async (book) => {
    try{
        return await axios.post(`${URL}/add`, book);
    }catch(error){
        console.log(`Error while calling post api to add book : ${error}`)
    }
    await axios.post(URL, book);
}

export const getBooks = async () => {
    try{
        return axios.get(`${URL}/all`);
    }catch(error) {
        console.log(`Error while calling get api to get books: ${error}`)
    }
}

export const deleteBook = async (id) => {
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log(`Error while calling delete api to delete book: ${error}`);
    }
}

export const getBook = async (id) => {
    try{    
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log(`Error while calling get api to get single book: ${error}`)
    }
}

export const updateBook = async (id, book) => {
    try{
        return await axios.put(`${URL}/edit/${id}`, book);
    }catch (error){
        console.log(`Error while calling put api to update book: ${error}`);
    }
}