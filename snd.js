function initSnd() 
{
	let d = document.getElementById('description');
	let lbf = document.getElementById('loadbarfull');
	let lbl = document.getElementById('loadbarloading');
	lbf.style.visibility = 'visible';
	lbl.style.visibility = 'visible';
	d.innerHTML = 'Sounds are loading...';
	d.style.marginTop = '60px';
	let anim = 0;

	let loading = setInterval(function () {
		loadbarloading.style.width = (checkBuffers()/TOTAL_SOUNDS) * 200 + 'px';
		if(checkBuffers() == TOTAL_SOUNDS)
		{
			d.innerHTML = 'Tap anywhere to begin.';
			isLoaded = true;
			clearInterval(loading);
		}
	}, 250);

	var AudioContext = window.AudioContext || window.webkitAudioContext;   
	audioCtx = new AudioContext();
	loadnature01(); loadnature02(); loadnature03(); loadnature04(); loadnature05(); loadnature06(); loadnature07(); loadnature08(); loadnature09(); loadnature10(); loadnature11(); loadnature12(); 
	loadwater01(); loadwater02(); loadwater03(); loadwater04(); loadwater05(); loadwater06(); loadwater07(); loadwater08(); loadwater09(); loadwater10(); loadwater11(); loadwater12();
	loadpeople01(); loadpeople02(); loadpeople03(); loadpeople04(); loadpeople05(); loadpeople06(); loadpeople07(); loadpeople08(); loadpeople09(); loadpeople10(); loadpeople11(); loadpeople12(); 
	loadwind01(); loadwind02(); loadwind03(); loadwind04(); loadwind05(); loadwind06(); loadwind07(); loadwind08(); loadwind09(); loadwind10(); loadwind11(); loadwind12(); 


	if(isLoaded) {
		let startScreen = document.getElementById('startDiv');
		startScreen.onclick = function() { startWidget(); }
	}

}

function startWidget()
{
	document.getElementById('startDiv').remove();
}

function selectSound(tile, sound, indexOnScreen)
{
    if(tile == 1) 
	{ 
		if(sound == 0) { loadnature01(); playnature01(indexOnScreen); }
		if(sound == 1) { loadnature02(); playnature02(indexOnScreen); }
		if(sound == 2) { loadnature03(); playnature03(indexOnScreen); }
		if(sound == 3) { loadnature04(); playnature04(indexOnScreen); }
		if(sound == 4) { loadnature05(); playnature05(indexOnScreen); }
		if(sound == 5) { loadnature06(); playnature06(indexOnScreen); }
		if(sound == 6) { loadnature07(); playnature07(indexOnScreen); }
		if(sound == 7) { loadnature08(); playnature08(indexOnScreen); }
		if(sound == 8) { loadnature09(); playnature09(indexOnScreen); }
		if(sound == 9) { loadnature10(); playnature10(indexOnScreen); }
		if(sound == 10) { loadnature11(); playnature11(indexOnScreen); }
		if(sound == 11) { loadnature12(); playnature12(indexOnScreen); }
	}
	if(tile == 2) 
	{ 
		if(sound == 0) { loadwater01(); playwater01(indexOnScreen); }
		if(sound == 1) { loadwater02(); playwater02(indexOnScreen); }
		if(sound == 2) { loadwater03(); playwater03(indexOnScreen); }
		if(sound == 3) { loadwater04(); playwater04(indexOnScreen); }
		if(sound == 4) { loadwater05(); playwater05(indexOnScreen); }
		if(sound == 5) { loadwater06(); playwater06(indexOnScreen); }
		if(sound == 6) { loadwater07(); playwater07(indexOnScreen); }
		if(sound == 7) { loadwater08(); playwater08(indexOnScreen); }
		if(sound == 8) { loadwater09(); playwater09(indexOnScreen); }
		if(sound == 9) { loadwater10(); playwater10(indexOnScreen); }
		if(sound == 10) { loadwater11(); playwater11(indexOnScreen); }
		if(sound == 11) { loadwater12(); playwater12(indexOnScreen); }
	}
	if(tile == 3) 
	{ 
		if(sound == 0) { loadpeople01(); playpeople01(indexOnScreen); }
		if(sound == 1) { loadpeople02(); playpeople02(indexOnScreen); }
		if(sound == 2) { loadpeople03(); playpeople03(indexOnScreen); }
		if(sound == 3) { loadpeople04(); playpeople04(indexOnScreen); }
		if(sound == 4) { loadpeople05(); playpeople05(indexOnScreen); }
		if(sound == 5) { loadpeople06(); playpeople06(indexOnScreen); }
		if(sound == 6) { loadpeople07(); playpeople07(indexOnScreen); }
		if(sound == 7) { loadpeople08(); playpeople08(indexOnScreen); }
		if(sound == 8) { loadpeople09(); playpeople09(indexOnScreen); }
		if(sound == 9) { loadpeople10(); playpeople10(indexOnScreen); }
		if(sound == 10) { loadpeople11(); playpeople11(indexOnScreen); }
		if(sound == 11) { loadpeople12(); playpeople12(indexOnScreen); }
	}
	if(tile == 4) 
	{ 
		if(sound == 0) { loadwind01(); playwind01(indexOnScreen); }
		if(sound == 1) { loadwind02(); playwind02(indexOnScreen); }
		if(sound == 2) { loadwind03(); playwind03(indexOnScreen); }
		if(sound == 3) { loadwind04(); playwind04(indexOnScreen); }
		if(sound == 4) { loadwind05(); playwind05(indexOnScreen); }
		if(sound == 5) { loadwind06(); playwind06(indexOnScreen); }
		if(sound == 6) { loadwind07(); playwind07(indexOnScreen); }
		if(sound == 7) { loadwind08(); playwind08(indexOnScreen); }
		if(sound == 8) { loadwind09(); playwind09(indexOnScreen); }
		if(sound == 9) { loadwind10(); playwind10(indexOnScreen); }
		if(sound == 10) { loadwind11(); playwind11(indexOnScreen); }
		if(sound == 11) { loadwind12(); playwind12(indexOnScreen); }
	}

}


// function stopSound(x,r)
// {
// 	for(let i = 0; i < activeAudio.length; i++)
// 	{
// 		if(activeAudio[i][2] == x && activeAudio[i][3] == r)
// 		{
// 			if(x == 1) { n[r] = 0; }
// 			if(x == 2) { wa[r] = 0; }
// 			if(x == 3) { p[r] = 0; }
// 			if(x == 4) { wi[r] = 0; }
// 			activeAudio[i][1].gain.linearRampToValueAtTime(-0.001, (audioCtx.currentTime + 0.05));
//             setTimeout(function(){activeAudio[i][0].stop(audioCtx.currentTime); activeAudio.splice(i,1); }, 60);
// 		}
// 	}
// }

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

var soundingTiles = [null, null, null, null,
					null, null, null, null, 
					null, null, null, null];

var activeAudio = [null, null, null, null,
					null, null, null, null, 
					null, null, null, null];

var currentSounds = [];
var possibleSounds = [];

const TOTAL_SOUNDS = 48;
const DURATIONS = [
	[ //nature
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
	],

	[ //water
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
	],

	[ //people
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
	],

	[ //wind
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
	]
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

const playnature01 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature01buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature02 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature02buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature03 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature03buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature04 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature04buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature05 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature05buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature06 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature06buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature07 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature07buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature08 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature08buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature09 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature09buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature10 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature10buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature11 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature11buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playnature12 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = nature12buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
};

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

const playwater01 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water01buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater02 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water02buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater03 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water03buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater04 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water04buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater05 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water05buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater06 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water06buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater07 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water07buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater08 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water08buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater09 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water09buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater10 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water10buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater11 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water11buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwater12 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = water12buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
};

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

const playpeople01 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people01buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople02 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people02buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople03 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people03buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople04 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people04buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople05 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people05buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople06 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people06buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople07 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people07buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople08 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people08buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople09 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people09buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople10 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people10buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople11 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people11buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playpeople12 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = people12buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
};


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

const playwind01 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind01buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind02 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind02buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind03 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind03buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind04 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind04buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind05 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind05buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind06 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind06buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind07 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind07buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind08 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind08buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind09 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind09buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind10 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind10buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind11 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind11buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
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

const playwind12 = (index) => {
	const source = audioCtx.createBufferSource();
	source.buffer = wind12buff;
	activeAudio[index] = source;
	source.connect(audioCtx.destination);
	source.start(audioCtx.currentTime);
};