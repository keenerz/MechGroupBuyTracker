const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tracked: [],
      projects: [],
      useredit: null,
    },
    actions: {
      //Login and Token items
      getCurrentSession: () => {
        const session = JSON.parse(localStorage.getItem("session"));
        return session;
      },
      login: async (email, password) => {
        const store = getStore();
        const actions = getActions();
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
          actions.loadProjects();
          actions.getUser();
          return true;
        } catch (error) {
          console.error("Error in login zone");
        }
      },
      logout: () => {
        const store = getStore();
        const actions = getActions();
        localStorage.removeItem("session");
        setStore({ session: null });
        localStorage.removeItem("useredit");
        setStore({ useredit: null });
        actions.loadProjects();
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
          e.preventDefault();
        }
      },
      editUser: async (email, password, username) => {
        const store = getStore();
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + session.token,
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
      },
      getUser: async () => {
        const store = getStore();
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + session.token,
          },
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/user`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          localStorage.setItem("useredit", JSON.stringify(payload));
          setStore({ useredit: payload });
          console.log(JSON.stringify(payload));
        }
      },

      //Project Loading
      loadProjects: async () => {
        const store = getStore();
        const actions = getActions();
        const session = actions.getCurrentSession();
        let options = {
          headers: {
            Authorization: "Bearer " + session?.token,
          },
        };
        if (!session) {
          options.headers = {};
        }
        const response = await fetch(
          process.env.BACKEND_URL + `/api/projects`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          setStore({ projects: payload });
        }
      },
      addProject: async (
        name,
        project_type,
        project_stage,
        sale_type,
        region,
        baseprice,
        estimated_ship,
        create_at,
        updates_at,
        started_at,
        ended_at,
        vendor_links,
        discussion_links,
        img_url
      ) => {
        const actions = getActions();
        const session = actions.getCurrentSession();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token,
          },
          body: JSON.stringify({
            name: name,
            project_type: project_type,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter: diameter,
            terrain: terrain,
            population: population,
            img_url: imgUrl,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + `/api/planet`,
          options
        );
        if (response.status === 200) {
          const payload = await response.json();
          console.log("planet created successfully!");
          return payload;
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
        actions.loadProjects();
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
        actions.loadProjects();
      },
    },
  };
};

export default getState;
