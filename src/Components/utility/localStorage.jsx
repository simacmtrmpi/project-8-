

const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("card-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const saveApplication = (id) => {
  const storedApplication = getStoredApplication();
  const exists = storedApplication.find((cardId) => cardId === id);
  if (!exists) {
    storedApplication.push(id);
    localStorage.setItem("card-application", JSON.stringify(storedApplication));
  }
};

export { getStoredApplication, saveApplication };
