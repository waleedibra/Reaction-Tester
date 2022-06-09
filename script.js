var start = new Date().getTime();


function randomColors(){
    var letters = '0123456789ABCDEF'.split('')
    var color = '#'
    for(var i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()* 16)]
    }
    return color
}


//store instruction to change shape dimensions and placement
//if statement to change shape
//code to insert random measures and make shape appear and chnage color
//reset timer

function makeShapeAppear(){
    var top = Math.floor(Math.random() * 500 )
    var left = Math.floor(Math.random() * 800 )
    var width = Math.floor(Math.random() * 500 ) + 200

    if(Math.random() > 0.5 ){
        document.getElementById('shape').style.borderRadius = '50%'
    }else{
        document.getElementById('shape').style.borderRadius = '0%'
    }

    document.getElementById('shape').style.top = top + 'px'
    document.getElementById('shape').style.left = left + 'px'
    document.getElementById('shape').style.width = width + 'px'
    document.getElementById('shape').style.backgroundColor = randomColors()
    document.getElementById('shape').style.display = 'block'

    start = new Date().getTime();


}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 2000)
}

//call the appear function
appearAfterDelay()

//create onlick function
//make shape disappear
//end time and calc time taken
//display time taken on html
document.getElementById('shape').onclick = function(){
    document.getElementById('shape').style.display = 'none'
    var end = new Date().getTime();
    var totalTime = (end - start) /1000
    document.getElementById('timeTaken').innerHTML = totalTime + 'seconds'
    appearAfterDelay()
}


