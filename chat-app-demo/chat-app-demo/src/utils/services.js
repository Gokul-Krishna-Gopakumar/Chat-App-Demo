//setting baseUrl
export const baseUrl = "http://localhost:5000/api";

//POST function
export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();
  //checking for errors when registering
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    //if error found, alert is shown in window
    return { error: true, message };
  }
  //if no error, data of user posted to localStorage
  return data;
};
