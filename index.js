const nums = []
var startNum;
var endingNum;
var sum;


function numsPopulate () {
    for (let i = startNum; i < endingNum; i++) {
        nums.push(i);
    }
}

function addNums () {
    sum = 0;
    for (var index = 0; index < nums.length; index++) {
      sum += nums[index];
    }
    return sum;    
}


$('#numSubmit').on('click', function(e) {
e.preventDefault();
startNum= parseInt($('#startingNum').val());
endingNum= parseInt($('#endingNum').val());
numsPopulate()
addNums()
$('.value').text(sum);
})

