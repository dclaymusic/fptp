
function startGame() { 

    let loadscreen = document.querySelector('#loadscreen');
    loadscreen.style.visibility = 'hidden';

    hasStarted = true;

}


function loadbarHandler()
{

    let loadbarloading = document.getElementById('loadbarloading');
    loadbarloading.style.width = (checkBuffers()/numberOfSounds) * 200 + 'px';
    //before start
    if(checkBuffers() == numberOfSounds)
    {
        allBuffersLoaded = true;
        let loadtext = document.getElementById('loadtext');
        loadtext.innerHTML = 'Tap anywhere to begin.';
        loadtext.style.left = '212px';
        //210
    }
    else 
    { } //opening state;
}

function frameRate()
{
    ////////////frame rate check
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Andale Mono";
    ctx.textAlign = "start";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
}

// function toggleInfo()
// { 
//     if(hasStarted)
//     {
//         infoWindow = !infoWindow; 

//         let loadscreen = document.getElementById('loadscreen');
//         if(loadscreen.style.visibility == 'visible')
//         { loadscreen.style.visibility = 'hidden'; 
//             document.getElementById('infotext').style.visibility = 'hidden';
//         }
//         else 
//         { 
//             document.getElementById('loadbarfull').style.visibility = 'hidden';
//             document.getElementById('loadbarloading').style.visibility = 'hidden';
//             document.getElementById('loadtext').style.visibility = 'hidden';
//             loadscreen.style.visibility = 'visible'; 
//             document.getElementById('infotext').style.visibility = 'visible';
//         }
//     }
// }