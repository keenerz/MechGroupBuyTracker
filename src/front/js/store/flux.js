const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tracked: [],
      projects: [],
    },
    actions: {
      //Login and Token items
      getCurrentSession: () => {
        const session = JSON.parse(localStorage.getItem("session"));
        return session;
      },
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
      logout: () => {
        const actions = getActions();
        localStorage.removeItem("session");
        setStore({ session: null });
      },
      createUser: async (email, password, username) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            username: username,
            usertype: "buyer",
          }),
        };

        const response = await fetch(
          process.env.BACKEND_URL + `/api/user`,
          options
        );
        if (response.status !== 200) {
          alert("Incorrect Email or Password");
        }
      },

      //Project Loading
      loadProjects: async () => {
        const response = await fetch(process.env.BACKEND_URL + `/api/projects`);
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ projects: payload });
        }
      },
      //Tracked Loading
      loadTracked: async () => {
        const store = getStore();
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          headers: {
            Authorization: "Bearer " + session.token,
          },
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/tracked`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ tracked: payload });
        }
      },
      addTracking: async (project) => {
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token,
          },
          body: JSON.stringify({
            user: session.user_id,
            project: project.id,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/tracked`,
          options
        );
        actions.loadTracked();
      },
      deleteTracking: async (project) => {
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token,
          },
          body: JSON.stringify({
            user: session.user_id,
            project: project.id,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/tracked`,
          options
        );
        if (response.status !== 200) {
          alert("Error in first");
        }
        actions.loadCharacters();
      },
    },
  };
};

export default getState;
