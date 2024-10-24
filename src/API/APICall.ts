import axios from "axios";

const KEY: string = import.meta.env.VITE_MAIN_KEY;

export const fetchLLMModel = async (text: string) => {
  const options = {
    method: "POST",
    url: "https://infinite-gpt.p.rapidapi.com/infinite-gpt",
    headers: {
      "x-rapidapi-key": KEY,
      "x-rapidapi-host": "infinite-gpt.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      query: text,
      sysMsg: text,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
