import fakeFetch from "./fakeFetch";

const authenticate = async (username: string, password: string) => {
  try {
    const response = await fakeFetch("/oti/oti/oti", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return { ok: true, data };
  } catch (error) {
    return { ok: false, message: error.message };
  }
};

export default authenticate;
