const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tracked: [],
      projects: [],
    },
    actions: {
      login: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + `/api/token`,
            options
          );
          if (response.status !== 200) {
            alert("Incorrect Email or Password");
            return false;
          }

          const data = await response.json();
          localStorage.setItem("session", JSON.stringify(data));
          setStore({ session: data });
          return true;
        } catch (error) {
          console.error("Error in login zone");
        }
      },
    },
  };
};

export default getState;
