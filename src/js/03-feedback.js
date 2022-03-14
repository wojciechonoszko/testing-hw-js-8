const form = document.querySelector("form");



form.addEventListener("submit", resetForm);
if (localStorage.getItem("feedback-form-state") !== null) {
inputElementsUpdate();
}
else {
form.addEventListener("input", _.throttle(saveMessage, 700));

}

function saveMessage(evt) {
    evt.preventDefault();
    const obj = {
        email: document.querySelector("input").value,
        message: document.querySelector("textarea").value,
    };
    const storage = localStorage.setItem("feedback-form-state", JSON.stringify(obj));
    inputElementsUpdate();
    

};

function resetForm(evt) {
    evt.preventDefault();
    const obj = {
        email: document.querySelector("input").value,
        message: document.querySelector("textarea").value,
    };
    console.log(obj);
    
    localStorage.clear();
    form.reset();
}

function inputElementsUpdate() {
    const storageItem = localStorage.getItem("feedback-form-state");
    const parsedStorage = JSON.parse(storageItem);
    console.log(parsedStorage);
    document.querySelector("input").value = parsedStorage.email;
    document.querySelector("textarea").value = parsedStorage.message;
    
}




