function triangleArea() {
    // get input base
    const inputBase = document.getElementById('base');
    const inputBaseValue = inputBase.value;
    const base = parseInt(inputBaseValue);
    inputBase.value = '';
    console.log(base);

    // get input height
    const inputHeight = document.getElementById('height');

    const inputHeightValue = inputHeight.value;
    const height = parseFloat(inputHeightValue);
    inputHeight.value = '';
    console.log(height);

    const area = 0.5 * base * height ;
    const displayArea = document.getElementById('area');
    displayArea.innerText = area; 


}