// Write your function here:

const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'good':
            return total * 0.2;
        case 'excellent':
            return total * 0.3;
        default:
            return total * 0.18;
    }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20