const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    //console.log(lowerLetters);
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;
    console.log("Generating password with", len, " characters");

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }
        console.log(password);
    if (lowerEl.checked) {
        password += getLowercase();
    }
    console.log(password);
    if (numberEl.checked) {
        password += getNumber();
    }
    console.log(password);
    if (symbolEl.checked) {
        password += getSymbol();
    }
    console.log(password);
    for (let i = password.length; i < len; i++) {
        console.log(password.length, 'estou aqui');
        const x = generateX();
        console.log(x)
        password += x;
    }
    console.log(password);
    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }
    console.log(xs)

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }
    console.log(xs)
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    console.log(xs)
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    console.log(xs)
    if (xs.length === 0) return "";
    console.log(xs)
    return xs[Math.floor(Math.random() * xs.length)];
    console.log(xs)
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
