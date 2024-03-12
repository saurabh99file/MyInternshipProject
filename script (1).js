const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const basic_price = document.getElementById('basic_price');
const standard_price = document.getElementById('standard_price');
const premium_price = document.getElementById('premium_price');

yearly.style.color = 'white';
yearly.addEventListener('click', () => {
    if (yearly.style.color == 'white') {
        monthly.style.color = 'white';
        monthly.style.backgroundColor = 'transparent'; // or 'transparent'
        yearly.style.color = 'black';
        yearly.style.backgroundColor = '#FFEBCD';
        basic_price.innerHTML = 'Price: $150/year';
        standard_price.innerHTML = 'Price: $300/year';
        premium_price.innerHTML = 'Price: $500/year';
    }
});
monthly.addEventListener('click', () => {
    if (monthly.style.color == 'white') {
        yearly.style.color = 'white';
        yearly.style.backgroundColor = 'transparent'; // or 'transparent'
        monthly.style.color = 'black';
        monthly.style.backgroundColor = '#FFEBCD';
        basic_price.innerHTML = 'Price: $15/year';
        standard_price.innerHTML = 'Price: $30/year';
        premium_price.innerHTML = 'Price: $50/year';
    }
});
