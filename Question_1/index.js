//Question 1: ES6 Features

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        try {
            let result = arr.filter(el => typeof el === 'string').map(el => el.toLowerCase());
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};


lowerCaseWords(
    [1, 'Apple', 'banana', true, 'ORANGE' , 22, 'Grapes', 10, 'mango'])
    .then(
        console.log
    )
.catch(
    console.error
);
