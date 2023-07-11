
import axios from 'axios';
import {local_Url, base_Url} from '../../Config/Config'


const apiService = async (method, url, headers, data) => {
  try {
    const response = await axios({
      method,
      url:`${local_Url}${base_Url}${url}`,
      headers,
      data,
    });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export default apiService;
