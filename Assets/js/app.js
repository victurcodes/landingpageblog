var toggleBtn = document.getElementById('menuBtn')
var navBar = document.getElementById("links")


toggleBtn.addEventListener('click', function() {

    // const myColors = ['red', 'yellow', 'blue']

    // var rand = Math.ceil(Math.random() * (2 - 0) + 0)

    // console.log(rand)

    // toggleBtn.style.color = myColors[rand]

    if (navBar.classList.contains('translateZero')) {
        navBar.classList.remove('translateZero')
    } else {
        navBar.classList.add('translateZero')
    }

    // navBar.classList.contains('translateZero') ? navBar.classList.remove('translateZero') : navBar.classList.add('translateZero')

})


// toggleBtn.addEventListener('click', () => navBar.classList.contains('translateZero') ? navBar.classList.remove('translateZero') : navBar.classList.add('translateZero'))


// let x = 6;

// if (x > 5) {
//     console.log(x + ' is greater than 5')
// } else {
//     console.log(x + ' is less than 5')
// }

// x > 5 ? console.log(x + ' is greater than 5') : console.log(x + ' is less than 5')


// const myArray = [1, 'Victor', 'Friday', 'some text']


// console.log(myArray[0])


// onBtnClick()

// var toggleBtn = document.querySelector('#menuBtn')
// var toggleBtn = document.getElementsByClassName('menuBtn')[0] /* return an array of elements */
// const query = (domEl) => document.getElementById(domEl)
// query('menuBtn').addEventListener('click', () => query('links').classList.add('translateZero'))