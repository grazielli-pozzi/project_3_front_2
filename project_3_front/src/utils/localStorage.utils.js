class LocalStorageUtils {
    set(dataFromAPI) {
        localStorage.setItem("token", dataFromAPI.token);
        localStorage.setItem("role", dataFromAPI.role);
    }

    get() {
        return localStorage.getItem("token");
    }

    delete() {
        localStorage.removeItem("token");
    }
}

export default new LocalStorageUtils();