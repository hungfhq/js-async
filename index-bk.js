const checkAuth = async () => {
    setTimeout(() => {}, 2000);
    return true;
};

const getUser = async auth => {
    setTimeout(() => {}, 2000);
    return { name: "Max" };
};

async function fetchUser() {
    const auth = await checkAuth(); // <- async operation
    const user = await getUser(auth); // <- async operation
    return user;
}

fetchUser().then(user => console.log(user.name));
