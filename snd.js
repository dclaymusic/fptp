function selectSound(x, r)
{
    if(x == 1) 
	{ 
		if(r == 0) { loadnature01(); playnature01(x,r); }
		if(r == 1) { loadnature02(); playnature02(x,r); }
		if(r == 2) { loadnature03(); playnature03(x,r); }
		if(r == 3) { loadnature04(); playnature04(x,r); }
		if(r == 4) { loadnature05(); playnature05(x,r); }
		if(r == 5) { loadnature06(); playnature06(x,r); }
		if(r == 6) { loadnature07(); playnature07(x,r); }
		if(r == 7) { loadnature08(); playnature08(x,r); }
		if(r == 8) { loadnature09(); playnature09(x,r); }
		if(r == 9) { loadnature10(); playnature10(x,r); }
		if(r == 10) { loadnature11(); playnature11(x,r); }
		if(r == 11) { loadnature12(); playnature12(x,r); }
	}
	if(x == 2) 
	{ 
		if(r == 0) { loadwater01(); playwater01(x,r); }
		if(r == 1) { loadwater02(); playwater02(x,r); }
		if(r == 2) { loadwater03(); playwater03(x,r); }
		if(r == 3) { loadwater04(); playwater04(x,r); }
		if(r == 4) { loadwater05(); playwater05(x,r); }
		if(r == 5) { loadwater06(); playwater06(x,r); }
		if(r == 6) { loadwater07(); playwater07(x,r); }
		if(r == 7) { loadwater08(); playwater08(x,r); }
		if(r == 8) { loadwater09(); playwater09(x,r); }
		if(r == 9) { loadwater10(); playwater10(x,r); }
		if(r == 10) { loadwater11(); playwater11(x,r); }
		if(r == 11) { loadwater12(); playwater12(x,r); }
	}
	if(x == 3) 
	{ 
		if(r == 0) { loadpeople01(); playpeople01(x,r); }
		if(r == 1) { loadpeople02(); playpeople02(x,r); }
		if(r == 2) { loadpeople03(); playpeople03(x,r); }
		if(r == 3) { loadpeople04(); playpeople04(x,r); }
		if(r == 4) { loadpeople05(); playpeople05(x,r); }
		if(r == 5) { loadpeople06(); playpeople06(x,r); }
		if(r == 6) { loadpeople07(); playpeople07(x,r); }
		if(r == 7) { loadpeople08(); playpeople08(x,r); }
		if(r == 8) { loadpeople09(); playpeople09(x,r); }
		if(r == 9) { loadpeople10(); playpeople10(x,r); }
		if(r == 10) { loadpeople11(); playpeople11(x,r); }
		if(r == 11) { loadpeople12(); playpeople12(x,r); }
	}
	if(x == 4) 
	{ 
		if(r == 0) { loadwind01(); playwind01(x,r); }
		if(r == 1) { loadwind02(); playwind02(x,r); }
		if(r == 2) { loadwind03(); playwind03(x,r); }
		if(r == 3) { loadwind04(); playwind04(x,r); }
		if(r == 4) { loadwind05(); playwind05(x,r); }
		if(r == 5) { loadwind06(); playwind06(x,r); }
		if(r == 6) { loadwind07(); playwind07(x,r); }
		if(r == 7) { loadwind08(); playwind08(x,r); }
		if(r == 8) { loadwind09(); playwind09(x,r); }
		if(r == 9) { loadwind10(); playwind10(x,r); }
		if(r == 10) { loadwind11(); playwind11(x,r); }
		if(r == 11) { loadwind12(); playwind12(x,r); }
	}
}

function stopSound(x,r)
{
	for(let i = 0; i < activeAudio.length; i++)
	{
		if(activeAudio[i][2] == x && activeAudio[i][3] == r)
		{
			if(x == 1) { n[r] = 0; }
			if(x == 2) { wa[r] = 0; }
			if(x == 3) { p[r] = 0; }
			if(x == 4) { wi[r] = 0; }
			activeAudio[i][1].gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime + 0.05));
            setTimeout(function(){activeAudio[i][0].stop(audioCtx.currentTime); activeAudio.splice(i,1); }, 60);
		}
	}
}

function checkBuffers()
{
	let buffCount = 0;
		
	if(nature01buff != null) { buffCount++; }
	if(nature02buff != null) { buffCount++; }
	if(nature03buff != null) { buffCount++; }
	if(nature04buff != null) { buffCount++; }
	if(nature05buff != null) { buffCount++; }
	if(nature06buff != null) { buffCount++; }
	if(nature07buff != null) { buffCount++; }
	if(nature08buff != null) { buffCount++; }
	if(nature09buff != null) { buffCount++; }
	if(nature10buff != null) { buffCount++; }
	if(nature11buff != null) { buffCount++; }
	if(nature12buff != null) { buffCount++; }

	if(people01buff != null) { buffCount++; }
	if(people02buff != null) { buffCount++; }
	if(people03buff != null) { buffCount++; }
	if(people04buff != null) { buffCount++; }
	if(people05buff != null) { buffCount++; }
	if(people06buff != null) { buffCount++; }
	if(people07buff != null) { buffCount++; }
	if(people08buff != null) { buffCount++; }
	if(people09buff != null) { buffCount++; }
	if(people10buff != null) { buffCount++; }
	if(people11buff != null) { buffCount++; }
	if(people12buff != null) { buffCount++; }

	if(water01buff != null) { buffCount++; }
	if(water02buff != null) { buffCount++; }
	if(water03buff != null) { buffCount++; }
	if(water04buff != null) { buffCount++; }
	if(water05buff != null) { buffCount++; }
	if(water06buff != null) { buffCount++; }
	if(water07buff != null) { buffCount++; }
	if(water08buff != null) { buffCount++; }
	if(water09buff != null) { buffCount++; }
	if(water10buff != null) { buffCount++; }
	if(water11buff != null) { buffCount++; }
	if(water12buff != null) { buffCount++; }

	if(wind01buff != null) { buffCount++; }
	if(wind02buff != null) { buffCount++; }
	if(wind03buff != null) { buffCount++; }
	if(wind04buff != null) { buffCount++; }
	if(wind05buff != null) { buffCount++; }
	if(wind06buff != null) { buffCount++; }
	if(wind07buff != null) { buffCount++; }
	if(wind08buff != null) { buffCount++; }
	if(wind09buff != null) { buffCount++; }
	if(wind10buff != null) { buffCount++; }
	if(wind11buff != null) { buffCount++; }
	if(wind12buff != null) { buffCount++; }

	return buffCount;
}

const natureDurations = [
	10134, 
	34816,
	21248,
	12715,
	12694,
	9643,
	5334,
	7062,
	21248,
	19475,
	3179,
	10091 
];

const waterDurations = [
	25779, 
	19352,
	6441,
	12452,
	10968,
	6470,
	15019,
	17674,
	10614,
	14022,
	17323,
	9952
];

const peopleDurations = [
	12563,
	8704,
	12544,
	14592,
	9814,
	7339,
	12203,
	11307,
	10240,
	16364,
	11691,
	12715
];

const windDurations = [
	16299,
	19286,
	15872,
	17195,
	20139,
	15702,
	8683,
	26880,
	5931,
	8448,
	24437,
	5696
];

let nature01buff = null;
let nature02buff = null;
let nature03buff = null;
let nature04buff = null;
let nature05buff = null;
let nature06buff = null;
let nature07buff = null;
let nature08buff = null;
let nature09buff = null;
let nature10buff = null;
let nature11buff = null;
let nature12buff = null;

let people01buff = null;
let people02buff = null;
let people03buff = null;
let people04buff = null;
let people05buff = null;
let people06buff = null;
let people07buff = null;
let people08buff = null;
let people09buff = null;
let people10buff = null;
let people11buff = null;
let people12buff = null;

let water01buff = null;
let water02buff = null;
let water03buff = null;
let water04buff = null;
let water05buff = null;
let water06buff = null;
let water07buff = null;
let water08buff = null;
let water09buff = null;
let water10buff = null;
let water11buff = null;
let water12buff = null;

let wind01buff = null;
let wind02buff = null;
let wind03buff = null;
let wind04buff = null;
let wind05buff = null;
let wind06buff = null;
let wind07buff = null;
let wind08buff = null;
let wind09buff = null;
let wind10buff = null;
let wind11buff = null;
let wind12buff = null;

//increments
var n = [0,0,0,0,0,0,0,0,0,0,0,0];


const loadnature01 = () => {

	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature01buff = data);
	};
	request.send();
};

const playnature01 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature01buff;
	if(n[0] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[0]++;
};

const loadnature02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature02buff = data);
	};
	request.send();
};

const playnature02 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature02buff;
	if(n[1] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[1]++;
};

const loadnature03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature03buff = data);
	};
	request.send();
};

const playnature03 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature03buff;
	if(n[2] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[2]++;
};
const loadnature04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature04buff = data);
	};
	request.send();
};

const playnature04 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature04buff;
	if(n[3] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[3]++;
};

const loadnature05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature05buff = data);
	};
	request.send();
};

const playnature05 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature05buff;
	if(n[4] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[4]++;
};

const loadnature06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature06buff = data);
	};
	request.send();
};

const playnature06 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature06buff;
	if(n[5] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[5]++;
};
const loadnature07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature07buff = data);
	};
	request.send();
};
const playnature07 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature07buff;
	if(n[6] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[6]++;
};

const loadnature08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature08buff = data);
	};
	request.send();
};

const playnature08 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature08buff;
	if(n[7] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[7]++;
};
const loadnature09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature09buff = data);
	};
	request.send();
};

const playnature09 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature09buff;
	if(n[8] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[8]++;
};

const loadnature10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature10buff = data);
	};
	request.send();
};

const playnature10 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature10buff;
	if(n[9] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[9]++;
};

const loadnature11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature11buff = data);
	};
	request.send();
};

const playnature11 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature11buff;
	if(n[10] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[10]++;
};

const loadnature12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/nature12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => nature12buff = data);
	};
	request.send();
};

const playnature12 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = nature12buff;
	if(n[11] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	n[11]++;
};


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



var wa = [0,0,0,0,0,0,0,0,0,0,0,0];


const loadwater01 = () => {

	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water01buff = data);
	};
	request.send();
};

const playwater01 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water01buff;
	if(wa[0] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[0]++;
};

const loadwater02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water02buff = data);
	};
	request.send();
};

const playwater02 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water02buff;
	if(wa[1] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[1]++;
};

const loadwater03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water03buff = data);
	};
	request.send();
};

const playwater03 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water03buff;
	if(wa[2] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[2]++;
};
const loadwater04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water04buff = data);
	};
	request.send();
};

const playwater04 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water04buff;
	if(wa[3] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[3]++;
};

const loadwater05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water05buff = data);
	};
	request.send();
};

const playwater05 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water05buff;
	if(wa[4] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[4]++;
};

const loadwater06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water06buff = data);
	};
	request.send();
};

const playwater06 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water06buff;
	if(wa[5] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[5]++;
};
const loadwater07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water07buff = data);
	};
	request.send();
};
const playwater07 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water07buff;
	if(wa[6] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[6]++;
};

const loadwater08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water08buff = data);
	};
	request.send();
};

const playwater08 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water08buff;
	if(wa[7] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[7]++;
};
const loadwater09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water09buff = data);
	};
	request.send();
};

const playwater09 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water09buff;
	if(wa[8] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[8]++;
};

const loadwater10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water10buff = data);
	};
	request.send();
};

const playwater10 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water10buff;
	if(wa[9] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[9]++;
};

const loadwater11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water11buff = data);
	};
	request.send();
};

const playwater11 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water11buff;
	if(wa[10] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[10]++;
};

const loadwater12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/water12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => water12buff = data);
	};
	request.send();
};

const playwater12 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = water12buff;
	if(wa[11] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wa[11]++;
};




//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



var p = [0,0,0,0,0,0,0,0,0,0,0,0];


const loadpeople01 = () => {

	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people01buff = data);
	};
	request.send();
};

const playpeople01 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people01buff;
	if(p[0] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[0]++;
};

const loadpeople02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people02buff = data);
	};
	request.send();
};

const playpeople02 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people02buff;
	if(p[1] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[1]++;
};

const loadpeople03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people03buff = data);
	};
	request.send();
};

const playpeople03 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people03buff;
	if(p[2] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[2]++;
};
const loadpeople04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people04buff = data);
	};
	request.send();
};

const playpeople04 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people04buff;
	if(p[3] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[3]++;
};

const loadpeople05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people05buff = data);
	};
	request.send();
};

const playpeople05 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people05buff;
	if(p[4] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[4]++;
};

const loadpeople06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people06buff = data);
	};
	request.send();
};

const playpeople06 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people06buff;
	if(p[5] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[5]++;
};
const loadpeople07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people07buff = data);
	};
	request.send();
};
const playpeople07 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people07buff;
	if(p[6] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[6]++;
};

const loadpeople08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people08buff = data);
	};
	request.send();
};

const playpeople08 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people08buff;
	if(p[7] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[7]++;
};
const loadpeople09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people09buff = data);
	};
	request.send();
};

const playpeople09 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people09buff;
	if(p[8] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[8]++;
};

const loadpeople10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people10buff = data);
	};
	request.send();
};

const playpeople10 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people10buff;
	if(p[9] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[9]++;
};

const loadpeople11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people11buff = data);
	};
	request.send();
};

const playpeople11 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people11buff;
	if(p[10] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[10]++;
};

const loadpeople12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/people12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => people12buff = data);
	};
	request.send();
};

const playpeople12 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = people12buff;
	if(p[11] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	p[11]++;
};




//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



var wi = [0,0,0,0,0,0,0,0,0,0,0,0];


const loadwind01 = () => {

	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind01buff = data);
	};
	request.send();
};

const playwind01 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind01buff;
	if(wi[0] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[0]++;
};

const loadwind02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind02buff = data);
	};
	request.send();
};

const playwind02 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind02buff;
	if(wi[1] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[1]++;
};

const loadwind03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind03buff = data);
	};
	request.send();
};

const playwind03 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind03buff;
	if(wi[2] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[2]++;
};
const loadwind04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind04buff = data);
	};
	request.send();
};

const playwind04 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind04buff;
	if(wi[3] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[3]++;
};

const loadwind05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind05buff = data);
	};
	request.send();
};

const playwind05 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind05buff;
	if(wi[4] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[4]++;
};

const loadwind06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind06buff = data);
	};
	request.send();
};

const playwind06 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind06buff;
	if(wi[5] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[5]++;
};
const loadwind07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind07buff = data);
	};
	request.send();
};
const playwind07 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind07buff;
	if(wi[6] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[6]++;
};

const loadwind08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind08buff = data);
	};
	request.send();
};

const playwind08 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind08buff;
	if(wi[7] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[7]++;
};
const loadwind09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind09buff = data);
	};
	request.send();
};

const playwind09 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind09buff;
	if(wi[8] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[8]++;
};

const loadwind10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind10buff = data);
	};
	request.send();
};

const playwind10 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind10buff;
	if(wi[9] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[9]++;
};

const loadwind11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind11buff = data);
	};
	request.send();
};

const playwind11 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind11buff;
	if(wi[10] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[10]++;
};

const loadwind12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/wind12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => wind12buff = data);
	};
	request.send();
};

const playwind12 = (x,r) => {
	const source = audioCtx.createBufferSource();
	const gain = audioCtx.createGain();
  	source.buffer = wind12buff;
	if(wi[11] == 0) { activeAudio.push([source, gain, x, r]); }
	else { 
		for(let i = 0; i < activeAudio.length; i++)
		{
			if(activeAudio[i][2] == x && activeAudio[i][3] == r)
			{
				activeAudio[i] = [source, gain, x, r];
			}
		}
	}
  	source.connect(gain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime); // play the source immediately
	wi[11]++;
};








