// COUPON DISCOUNTS

// Coupon Array
let coupons = [
    {
        name: 'CUPON25',
        value: 25,
    },
    {
        name: 'CUPON50',
        value: 50,
    },
];

// Function to know the price with coupon
function finalPrice(productPrice, coupon) {
    // If there is NOT a coupon
    if (!coupon) {
        return `You have not entered a coupon. The price of the product is ${productPrice}`;
    }

    // If there is a coupon
    if (coupon) {
        // Looking for the coupon in the array
        let couponObject = coupons.find((item) => item.name === coupon);

        // If there is a valid coupon
        if (couponObject !== undefined) {
            let couponName = couponObject.name;
            let couponValue = couponObject.value;

            let discountedPrice = (productPrice * (100 - couponValue)) / 100;

            return `Your product with price ${productPrice} and percentage discount of ${couponValue}% has a final value of ${discountedPrice}.`;
        }

        // If there is NOT a valid coupon
        if (couponObject === undefined) {
            return `The coupon you have entered is invalid. Please enter a valid one. The value of your product is ${productPrice}`;
        }
    }
}

// finalPrice(100, 'CUPON50');