import axios from "axios";

export const fetchUserData = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        console.log('data: ', response.data);
        return response.data;
    } catch (error){
        console.log(`Error fetching user data: ${error}`);
        throw error;
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};