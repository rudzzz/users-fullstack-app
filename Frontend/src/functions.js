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

export const formatDateList = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};

export const formatDateForm = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};