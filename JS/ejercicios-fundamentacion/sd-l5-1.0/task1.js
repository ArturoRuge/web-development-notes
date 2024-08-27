export function costCalculator(transactions) {
    let numTransaction = parseInt(transactions);
    let payments = numTransaction + (numTransaction * 0.01) + 3 ;
    return payments;

}

