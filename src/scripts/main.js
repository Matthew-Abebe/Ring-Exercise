const ringContainerEl = document.querySelector(".container")

document.getElementById("ring_button").addEventListener("click", function () {

    const stylesInput = document.getElementById("styles_ring").selectedIndex
    const stylesInputValue = (document.querySelectorAll("#styles_ring option")[stylesInput].value);
    // console.log(ringStyles[stylesInputValue].price)

    const caretsInput = document.getElementById("carets_ring").selectedIndex;
    const caretsInputValue = (document.querySelectorAll("#carets_ring option")[caretsInput].value);
    // console.log(diamonds[caretsInputValue].price)

    const metalsInput = document.getElementById("metals_ring").selectedIndex;
    const metalsInputValue = (document.querySelectorAll("#metals_ring option")[metalsInput].value);
    // console.log(metals[metalsInputValue].price)

    const ringObject = {
        styles: ringStyles[stylesInputValue].style,
        caret: diamonds[caretsInputValue].carets,
        metal: metals[metalsInputValue].metal,
        price: ringStyles[stylesInputValue].price + diamonds[caretsInputValue].price + metals[metalsInputValue].price
    }
    // console.log(ringObject)
    const ringHtml =
        `<h2>${ringObject.styles}</h2>
 <h2>${ringObject.caret}</h2>
 <h2>${ringObject.metal}</h2>
 <h2>${ringObject.price}</h2>
`
    ringContainerEl.innerHTML = ringHtml
})
