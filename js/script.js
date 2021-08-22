
// Memory - 8GB
const memoryCost = document.getElementById('memory-cost');

document.getElementById('memory-8bg').addEventListener('click', function () {
    memoryCost.innerText = 0;
    upDateTotal()
})

// Memory - 16GB
document.getElementById('memory-16bg').addEventListener('click', function () {
    memoryCost.innerText = 180;
    upDateTotal()
})


// Storage - 256GB
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-256gb').addEventListener('click', function () {
    storageCost.innerText = 0;
    upDateTotal()
})

// Storage - 512GB
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageCost.innerText = 100;
    upDateTotal()
})

// Storage - 1TB
document.getElementById('storage-1tb').addEventListener('click', function () {
    // const storageCost = document.getElementById('storage-cost');
    
    storageCost.innerText = 180;
    upDateTotal()
})



// Delivery-free
const deliveryCharge = document.getElementById('delivery-charge');

document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    upDateTotal()
})

// Delivery-paid
document.getElementById('delivery-paid').addEventListener('click', function a() {
    deliveryCharge.innerText = 20;
    upDateTotal()
})



// Total-cost
const bestPrice = document.getElementById('best-price');
const totalCost = document.getElementById('total-cost');

function upDateTotal() {
    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCharge = parseInt(deliveryCharge.innerText);
    const totalBestPrice = parseInt(bestPrice.innerText);
    const upDateCost = totalMemoryCost + totalStorageCost + totalDeliveryCharge + totalBestPrice;
    totalCost.innerText = upDateCost;
}


// Add Pomo code

document.getElementById('pomo-code').addEventListener('click', function () {
    const pomoInput = document.getElementById('pomo-input');
    const pomoInputValue = pomoInput.value;

    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;

    if (pomoInputValue == 'stevekaku') {
        const nm = parseInt(totalCost.innerText) / 20;
        console.log(nm);
        totalAmount.innerText = nm;
    }

    pomoInput.value = '';

})







