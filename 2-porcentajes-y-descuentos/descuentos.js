

// Function to know the price with a discount
function finalPrice(productPrice, discount) {
    // If there is NOT a discount
    if (!discount) {
      
        return `You have not entered a discount. The price of the product is ${productPrice}`;
    }

    // If there is a discount
    if (discount) {

            let discountedPrice = (productPrice * (100 - discount)) / 100;

            return `Your product with price ${productPrice} and a discount of ${discount}% has a final value of ${discountedPrice}.`;
        }
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = finalPrice(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = priceWithDiscount;
}