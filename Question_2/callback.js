//Question 2: Promises

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({'message': 'delayed success!'});
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};


// Test Cases
resolvedPromise()
    .then(success => console.log(success))   
    .catch(error => console.error(error));


rejectedPromise()
    .then(success => console.log(success))
    .catch(error => console.error(error));  
