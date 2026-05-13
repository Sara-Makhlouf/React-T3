import { URL } from "../Constant/Constant";
export const getComments = async () => {
  const response = await fetch(`${URL}?_limit=8`);
  return response.json();
};

export const addCommentApi = async (newComment) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });

  return response.json();
};

export const updateCommentApi = async (id, updatedComment) => {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedComment),
  });

  return response.json();
};

export const deleteCommentApi = async (id) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });

  return id;
};