let errorCount = 0;

function getRandomString(length) {
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}
function add_new_chars(num) {
    const container = document.getElementById("container");
    container.textContent += getRandomString(num);
}

window.onload = function() {
    add_new_chars(2);
};

window.addEventListener("keyup", function(e) {
    if (e.key.length > 1) return;

    const container = document.getElementById("container");
    const currentStr = container.textContent;

    if (currentStr.length > 0) {
        const firstChar = currentStr.charAt(0).toLowerCase();
        const inputKey = e.key.toLowerCase();

        if (inputKey === firstChar) {
            container.textContent = currentStr.substring(1);
            errorCount = 0; 
            console.log("正確！");
        } else {
            errorCount++;
            console.log("打錯次數：" + errorCount);

            if (errorCount === 3) {
                console.log("懲罰：額外增加 3 個字");
                add_new_chars(3); 
                errorCount = 0; 
            }
        }
        const normalGrow = Math.floor(Math.random() * 3) + 1;
        add_new_chars(normalGrow);
    }
});