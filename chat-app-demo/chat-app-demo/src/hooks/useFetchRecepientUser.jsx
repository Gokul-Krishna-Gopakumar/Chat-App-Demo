import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

//Custom hook to fetch available chats of users into userList
export const useFetchRecepientUser = (chat, user) => {
  const [recepientUser, setRecepientUser] = useState(null);
  const [error, setError] = useState(null);

  const recepientId = chat?.members.find((id) => id !== user._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recepientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recepientId}`);

      if (response.error) {
        return setError(error);
      }

      setRecepientUser(response);
    };

    getUser();
  }, []);

  return { recepientUser };
};
