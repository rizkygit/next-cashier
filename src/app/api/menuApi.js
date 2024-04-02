import axios from 'axios';
import baseURL from './api'

const menuApi = {
    // Mendapatkan semua menu
    getAllMenus: async () => {
        try {
            const response = await axios.get(`${baseURL}/menus`);
            return response.data;
        } catch (error) {
            console.error('Error getting all menus:', error);
            throw error;
        }
    },

    // Mendapatkan menu berdasarkan ID
    getMenuById: async (id) => {
        try {
            const response = await axios.get(`${baseURL}/menus/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error getting menu with ID ${id}:`, error);
            throw error;
        }
    },

    // Menambahkan menu baru
    addMenu: async (menuData) => {
        try {
            const response = await axios.post(`${baseURL}/menus`, menuData);
            return response.data;
        } catch (error) {
            console.error('Error adding menu:', error);
            throw error;
        }
    },

    // Mengupdate menu
    updateMenu: async (id, updatedMenuData) => {
        try {
            const response = await axios.put(`${baseURL}/menus/${id}`, updatedMenuData);
            return response.data;
        } catch (error) {
            console.error(`Error updating menu with ID ${id}:`, error);
            throw error;
        }
    },

    // Menghapus menu
    deleteMenu: async (id) => {
        try {
            const response = await axios.delete(`${baseURL}/menus/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting menu with ID ${id}:`, error);
            throw error;
        }
    }
};

export default menuApi;