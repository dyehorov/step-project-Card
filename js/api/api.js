const url = "https://ajax.test-danit.com/api/v2";



const getToken = () => {
  return localStorage.getItem("token");
};

export const addVisit = async (obj) => {
  const res = await fetch(`${url}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  }
  
  return await res.json();
};

export const getCard = async (obj) => {
  const res = await fetch(`${url}/cards`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  }
  return res.json();
};

export const delCard = async (id) => {
  const res = await fetch(`${url}/cards/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  } else {
    let bloc = document.getElementById(`${id}`);
    bloc.remove();
  }
};

export const addChenge = async (obj) => {
  const res = await fetch(`${url}/cards`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  }
  
  return await res.json();
};