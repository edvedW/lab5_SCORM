var scormAPI = null;

function findAPI(win) {
    while (win) {
        if (win.API) return win.API;
        win = win.parent;
    }
    return null;
}

scormAPI = findAPI(window);

if (scormAPI) {
    scormAPI.LMSInitialize("");
}
