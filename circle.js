const circlearea=(r)=>{
let area = r*r*Math.PI
console.log(area)
}

const circleCircumference = (r)=>{
let circumference = r*2*Math.PI;
console.log(circumference);
}

module.exports = {
    circlearea,
    circleCircumference
}

