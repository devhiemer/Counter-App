const countValue = document.querySelector('#counter');

const increment = () => {
    //get the value from UI
    //parseInt change string to int
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value from UI
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};

console.log("hi");