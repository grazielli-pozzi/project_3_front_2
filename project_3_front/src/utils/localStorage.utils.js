class LocalStorageUtils {
    set(dataFromAPI) {
        localStorage.setItem("info", JSON.stringify(dataFromAPI));
    }

    get() {
        return JSON.parse(localStorage.getItem("info"));
    }

    delete() {
        localStorage.removeItem("info");
    }
}

export default new LocalStorageUtils();