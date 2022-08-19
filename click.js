function clickHandler(event) 
{

    if(!hasStarted)
    {
        if(checkBuffers() == numberOfSounds)
        {
            startGame();
        }
    }
    else 
    {
        if(isInfoScreen)
        { }
        else
        {
            const rect = document.getElementById('game').getBoundingClientRect();
            var x = Math.floor(event.clientX - rect.left) * scale;
            var y = Math.floor(event.clientY - rect.top) * scale;
    
            for(let i = 0; i < activeSounds.length; i++)
            {
                if(activeSounds[i] != null)
                {
                    if((x >= activeSounds[i].position[0] && x <= activeSounds[i].position[0] + tileW) &&
                    (y >= activeSounds[i].position[1] && y <= activeSounds[i].position[1] + tileH))
                    {
                        if(activeSounds[i].index == 1) { natureChoices.push(activeSounds[i].lookup); }
                        if(activeSounds[i].index == 2) { waterChoices.push(activeSounds[i].lookup); }
                        if(activeSounds[i].index == 3) { peopleChoices.push(activeSounds[i].lookup); }
                        if(activeSounds[i].index == 4) { windChoices.push(activeSounds[i].lookup); }
                        // console.log(activeSounds[i].lookup);
                        if(activeAudio.length != 0)
                        { stopSound(activeSounds[i].index,activeSounds[i].lookup); } 

                        activeSounds[i] = null;
                        break;
                    }
                }
            }
        }
    }
}

function getHoverOver(event) {
    document.body.style.cursor = 'pointer';
    const rect = document.getElementById('game').getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left) * scale;
    var y = Math.floor(event.clientY - rect.top) * scale;

    let isHovering = false;

    for(let i = 0; i < activeSounds.length; i++)
    {
        if(activeSounds[i] != null)
        {
            if((x >= activeSounds[i].position[0] && x <= activeSounds[i].position[0] + tileW) &&
            (y >= activeSounds[i].position[1] && y <= activeSounds[i].position[1] + tileH))
            {
                document.body.style.cursor = 'pointer';
                isHovering = true;
                break;
            }
        }
    }
    if(!isHovering)
    {
        document.body.style.cursor = 'default';
    }

}


function add(tile)
{
    let thisTile;
    
    for(let i = 0; i < 16; i++)
    {
        if(activeSounds[i] == null)
        {
            if(tile == 1 && natureChoices.length != 0) { thisTile = new Tile(1,0,0); }
            if(tile == 2 && waterChoices.length != 0) { thisTile = new Tile(2,0,0); }
            if(tile == 3 && peopleChoices.length != 0) { thisTile = new Tile(3,0,0); }
            if(tile == 4 && windChoices.length != 0) { thisTile = new Tile(4,0,0); }

            if(thisTile != undefined)
            {
                activeSounds[i] = thisTile;
                let thisPos = fromIndex(i);
                let x = thisPos[0];
                let y = thisPos[1];
                thisTile.position = [x * tileW,y * tileH];
                thisTile.center = [x * tileW,y * tileH];
                break;
            }
        }
    }
    // console.log(thisTile.lookup);
}

function shuffle()
{
    

    for(let i = 0; i < activeSounds.length; i++)
    {
        if(activeSounds[i] != null)
        {
            if(activeSounds[i].index == 1) { natureChoices.push(activeSounds[i].lookup); }
            if(activeSounds[i].index == 2) { waterChoices.push(activeSounds[i].lookup); }
            if(activeSounds[i].index == 3) { peopleChoices.push(activeSounds[i].lookup); }
            if(activeSounds[i].index == 4) { windChoices.push(activeSounds[i].lookup); }

            if(activeAudio.length != 0)
            { stopSound(activeSounds[i].index,activeSounds[i].lookup); } 
            
            activeSounds[i] = null;
        }
    }

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let thisList = [];
    while(thisList.length < 16)
    {
        let r = randomInt(3);
        if(r == 0 && count1 < 12) { thisList.push(1); count1++; }
        else if(r == 1 && count2 < 12) { thisList.push(2); count2++; }
        else if(r == 2 && count3 < 12) { thisList.push(3); count3++; }
        else if(r == 3 && count4 < 12) { thisList.push(4); count4++; }
        else continue;
    }

    for(let i = 0; i < 16; i++)
    {
        add(thisList[i]);
    }

}

function toggleInfo()
{
    isInfoScreen = !isInfoScreen;
    if(!isInfoScreen) 
    { 
        document.getElementById("infoscreen").style.visibility = 'hidden';
    }
    else
    {
        document.getElementById("infoscreen").style.visibility = 'visible';
    }
}