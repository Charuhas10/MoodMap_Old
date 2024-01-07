const createURL = (path) => {
  return window.location.origin + path;
};

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async () => {
  try {
    const res = await fetch(
      new Request(createURL("/api/journal"), {
        method: "POST",
        body: JSON.stringify({}),
      })
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error creating new entry:", error);
    // Handle error appropriately
    return null;
  }
};

export const askQuestion = async (question) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
