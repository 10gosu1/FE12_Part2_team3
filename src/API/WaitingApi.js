import axios from "axios";

const BASE_URL = "https://fandom-k-api.vercel.app/12-3/donations";

// GET 
export const getDonation = async (cursor = 0, pageSize = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
        params: {
            cursor: cursor,
            pageSize: pageSize,
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching donation:", error);
    throw error;
  }
};

// POST
export const createDonation = async (donationData) => {
  try {
    const response = await axios.post(BASE_URL, donationData);
    return response.data;
  } catch (error) {
    console.error("Error creating donation:", error);
    throw error;
  }
};

// PUT - 1
export const updateDonation = async (id, donationData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, donationData);
    return response.data;
  } catch (error) {
    console.error("Error updating donation:", error);
    throw error;
  }
};

// PUT - 2
export const toSponDonation = async (id, sponsorData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}/contribute`,
      sponsorData,
    );
    return response.data;
  } catch (error) {
    console.error("Error sponsoring donation:", error);
    throw error;
  }
};

// DELETE
export const deleteDonation = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting donation:", error);
    throw error;
  }
};
