let noClickCount = 0;

function nextScene(sceneNumber) {
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.scene').forEach(el => el.classList.add('hidden'));

    const next = document.getElementById(`scene${sceneNumber}`);
    next.classList.remove('hidden');
    next.classList.add('active');
}

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainImg = document.getElementById('main-character');
    const samDialogue = document.getElementById('sam-dialogue');
    const questionText = document.getElementById('question-text');
    
    // BUMPED UP TO SCENE 6
    const scene6 = document.getElementById('scene6'); 

    // Hide Question and Buttons immediately
    questionText.classList.add('hidden');
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');

    mainImg.src = "yosemite-sam.png?v=2"; 
    mainImg.style.width = "350px"; 
    samDialogue.classList.remove('hidden');

    // Button sizing logic
    let noScale = 1 - (noClickCount * 0.2);
    if (noScale < 0) noScale = 0;
    noBtn.style.transform = `scale(${noScale})`;

    let yesScale = 1 + (noClickCount * 0.5); 
    yesBtn.style.transform = `scale(${yesScale})`;

    // Sequence timing
    setTimeout(() => {
        samDialogue.classList.add('hidden');

        mainImg.src = "yoongi-cartoon.png?v=2";
        mainImg.style.width = "100%"; 
        mainImg.classList.add('hidden'); 

        scene6.classList.add('split-layout');
        questionText.classList.remove('hidden');

        setTimeout(() => {
            mainImg.classList.remove('hidden');
            yesBtn.classList.remove('hidden');
            yesBtn.style.transformOrigin = "top right";
            yesBtn.style.transform = `scale(${yesScale})`; 
        }, 1000);

        setTimeout(() => {
            noBtn.classList.remove('hidden');
        }, 3000);

    }, 4000); 
}

function handleYes() {
    // BUMPED UP TO SCENE 7
    nextScene(7);

    const scene7 = document.getElementById('scene7');
    const img = scene7.querySelector('img');

    // Hide old text immediately
    scene7.querySelectorAll('h1, h2, p, span, .dialogue-box').forEach(el => {
        el.style.display = 'none'; 
    });

    img.src = ""; 

    setTimeout(() => {
        img.src = "mask-reveal.gif?v=2";
        
        setTimeout(() => {
            img.src = "my-avatar.png?v=2";

            const punchline = document.createElement('div');
            punchline.innerHTML = "Hehe got you. Now you're stuck with me.";
            punchline.style.fontFamily = "'Courier New', monospace";
            punchline.style.fontSize = "20px";
            punchline.style.marginTop = "20px"; 
            punchline.style.textAlign = "center";
            punchline.style.fontWeight = "bold";

            scene7.appendChild(punchline);
        }, 5000); 

    }, 50);
}
