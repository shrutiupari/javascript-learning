function funcFour() {
    console.log('Four')
}

function funcThree() {
     funcFour()
    console.log('Three')
}
    
function funcTwo() {
    funcThree()
    console.log('Two')
}
    
function funcOne() {
    funcTwo()
    console.log('One') 
}
    
funcOne()