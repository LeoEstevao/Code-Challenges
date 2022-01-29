// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// INPUT:
// customers: An array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// cashiers: A positive integer, the number of checkout tills.

// Return the total time spent to serve each customer.

function queueTime(arrCustomers, activeCashiers) {
    // Create count time served
    let totalServingTime = 0;

    // If no one showed up in the queue
    if(typeof(arrCustomers[0]) != 'number'){
        console.log(`Total times: ${totalServingTime}`);
        return totalServingTime;
    }


    // Cashier status
    let cashierStatus = true;
    
    // Create arr for each active cashier
    let cashier = []
    for(i=0; i<activeCashiers; i++){
        cashier[i] = 0
    }

    // While there are customers on the queue or active cashiers serving, keeps counting the time

    while(cashierStatus == true ){
        // Restarting cashier status
        cashierStatus = false;


        // When active cashier value is free (value 0), receives the next person in the queue (arr index 0) and get it's times...
        cashier.map( (value, index) => {

            // If cashier is free AND there are more customers in the queue
            if(value == 0 && typeof(arrCustomers[0]) == 'number'){

                // Cashier receives the customer and he leaves the queue
                cashier[index] = arrCustomers[0]
                arrCustomers.shift()
            }

            // Reduce time of every cashier
            cashier[index] -= 1;
            
            // If cashier is serving OR there are more customers in the queue
            if(cashier[index] > 0 || typeof(arrCustomers[0]) == 'number')
                cashierStatus = true;
            
        })
        
        // Increase total time spent
        totalServingTime += 1
    }
    console.log(`Total times: ${totalServingTime}`);
    return totalServingTime;
}
    
queueTime([], 2)    // 0
queueTime([10, 5, 4, 10], 2)    // 19
queueTime([1,2,3,4], 1)         // 10
queueTime([2,2,3,3,4,4], 2)     // 9
queueTime([1,2,3,4,5], 100)     // 5