import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannelSettings = async (data) => {
  try {
    return await apiClient.get("/settings/channel", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateChannelSettings = async (data) => {
  try {
    return await apiClient.put("/settings/channel", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const changePassword = async (data) => {
  try {
    return await apiClient.patch("/settings/password", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getFollowedChannels = async () => {
  try {
    return await apiClient.get("/channels/followed");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannels = async () => {
  try {
    return await apiClient.get("/channels");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getChannelDetails = async (channelId) => {
  try {
    return await apiClient.get(`/channels/${channelId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const followChannel = async (channelId, searchFlag) => {
  try {
    return await apiClient.post("/channels/follow", {
      channelId,
      searchFlag,
    });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const postGiftItem = async (itemId) => {
  try {
    return await apiClient.post("/channels/gift", { itemId });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const purchaseItem = async (point, itemName) => {
  try {
    return await apiClient.put("/items/purchase", { point, itemName });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getPoints = async () => {
  try {
    return await apiClient.get("/items/points");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getHeldItems = async () => {
  try {
    return await apiClient.get("/items/heldItems");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const postChargePoint = async (point) => {
  try {
    return await apiClient.post("/items/charge", { point });
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
