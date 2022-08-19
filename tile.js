function Tile(thisTile,x,y)
{ 
    this.position = [x,y];
    this.center = [x,y];
    this.tile = tileTypes[thisTile];
    this.index = thisTile;
    let r;
    if(thisTile == 1)
    {
        let rand = randomInt(natureChoices.length-1);
        r = natureChoices[rand];
        natureChoices.splice(rand,1);
        this.duration = natureDurations[r];
    }
    if(thisTile == 2) { 
        let rand = randomInt(waterChoices.length-1);
        r = waterChoices[rand];
        waterChoices.splice(rand,1);
        this.duration = waterDurations[r];
    }
    if(thisTile == 3)
    {
        let rand = randomInt(peopleChoices.length-1);
        r = peopleChoices[rand];
        peopleChoices.splice(rand,1);
        this.duration = peopleDurations[r];
    }
    if(thisTile == 4)
    {
        let rand = randomInt(windChoices.length-1);
        r = windChoices[rand];
        windChoices.splice(rand,1);
        this.duration = windDurations[r];
    }
    this.lookup = r; 
    this.alpha = 1;
    this.count = 1;
    this.lastCount = 0;
    this.startTime = currentFrameTime;
    //these decimals are eyeball-scaled and based on the canvas height and width.
    // this.gainNum = 1/((y * 0.01) + 1);
    // this.panNum = ((x * 0.00068)*2) - 1;
    // selectSound(this.index, this.lookup);            
}

Tile.prototype.draw = function()
{
    let difference = 20;
    let pingModulo = (currentFrameTime - this.startTime) % this.duration;
    //console.log(pingModulo);
    if(pingModulo <= difference && this.lastCount == this.count - 1)
    {
        this.alpha = 1.0;
        this.count = 1;
        selectSound(this.index, this.lookup);
    }
    else
    {
        this.lastCount = this.count;
        this.count++;
        this.alpha -= (1/(this.duration*0.1));
        if(this.alpha <= 0) { this.alpha = 0; }
    }

    ctx.globalAlpha = this.alpha;
    //will need to scale by duration of sound
    ctx.drawImage(tileset, this.tile.sprite[0].x, this.tile.sprite[0].y, 
    this.tile.sprite[0].w, this.tile.sprite[0].h, 
    //scales from center, feels a bit jittery though?
    //this.center[0] - (tileW * this.scale * 0.5), this.center[1] - (tileH * this.scale * 0.5), tileW * this.scale, tileH * this.scale);
    //scales from corner
    this.position[0], this.position[1], tileW, tileH);
    ctx.globalAlpha = 1.0;
};


function redrawTiles()
{
    for(let i = 0; i < activeSounds.length; i++)
    {
        let thisTile = activeSounds[i];
        let thisPos = fromIndex(i);
        let x = thisPos[0];
        let y = thisPos[1];
        thisTile.position = [x * tileW,y * tileH];
        thisTile.center = [x * tileW,y * tileH];
    }
}