function getRandomString(length) {
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}
function add_new_chars() {
    const container = document.getElementById("container");
    const num = Math.floor(Math.random() * 3) + 1;
    container.innerHTML += getRandomString(num);
}

window.onload = function() {
    const container = document.getElementById("container");
    const num = Math.floor(Math.random() * 3);
    container.innerHTML = getRandomString(num);
};

window.addEventListener("keyup", function(e) {
    const container = document.getElementById("container");
    const currentStr = container.innerHTML;

    console.log("按下:", e.key);

    if (currentStr.length > 0 && e.key === currentStr.charAt(0)) {
        container.innerHTML = currentStr.substring(1);
    }

    add_new_chars();
});