let noClickCount = 0;

function nextScene(sceneNumber) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.scene').forEach(el => el.classList.add('hidden'));

    // Show the requested scene
    const next = document.getElementById(`scene${sceneNumber}`);
    next.classList.remove('hidden');
    next.classList.add('active');

    if (sceneNumber === 4) {
        setTimeout(() => {
            document.getElementById('yoongi-reveal').classList.remove('hidden-content');
        }, 2000); 
    }
}

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainImg = document.getElementById('main-character');
    const samDialogue = document.getElementById('sam-dialogue');
    const questionText = document.getElementById('question-text');
    const scene5 = document.getElementById('scene5');

    // Hide Question and Buttons immediately
    questionText.classList.add('hidden');
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');

    // Show Yosemite Sam (Updated to the new, foolproof filename)
    mainImg.src = "sam.png"; 
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

        // Prepare Cartoon Yoongi
        mainImg.src = "yoongi-cartoon.png";
        mainImg.style.width = "100%"; 
        mainImg.classList.add('hidden'); 

        scene5.classList.add('split-layout');
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
    nextScene(6);

    const scene6 = document.getElementById('scene6');
    const img = scene6.querySelector('img');

    // Hide old text immediately
    scene6.querySelectorAll('h1, h2, p, span, .dialogue-box').forEach(el => {
        el.style.display = 'none'; 
    });

    // Reset the image source so the GIF is forced to play from Frame 1
    img.src = ""; 

    // A tiny 50ms pause lets the browser catch its breath before firing the GIF
    setTimeout(() => {
        img.src = "mask-reveal.gif";
        
        // NOW start the precise 3-second stopwatch
        setTimeout(() => {
            img.src = "my-avatar.png";

            const punchline = document.createElement('div');
            punchline.innerHTML = "Hehe got you. Now you're stuck with me.";
            punchline.style.fontFamily = "'Courier New', monospace";
            punchline.style.fontSize = "20px";
            punchline.style.marginTop = "20px"; 
            punchline.style.textAlign = "center";
            punchline.style.fontWeight = "bold";

            scene6.appendChild(punchline);
        }, 3000); 

    }, 50);
}

        // Step B: Bring in Yoongi AND Yes Button (Together, 1s later)
        setTimeout(() => {
            // Show Yoongi
            mainImg.classList.remove('hidden');

            // Show Yes Button
            yesBtn.classList.remove('hidden');
            yesBtn.style.transformOrigin = "top right";
            yesBtn.style.transform = `scale(${yesScale})`; 
        }, 1000);

        // Step C: Bring back NO Button (2s later)
        setTimeout(() => {
            noBtn.classList.remove('hidden');
        }, 3000);

    }, 4000); // End of Yosemite Sam time
}

function handleYes() {
    // Transition to the final scene
    nextScene(6);

    // Target Scene 6 and grab its image element
    const scene6 = document.getElementById('scene6');
    const img = scene6.querySelector('img');

    // Hide any existing text inside Scene 6 so the GIF plays completely silently
    const textElements = scene6.querySelectorAll('h1, h2, p, span, .dialogue-box');
    textElements.forEach(el => {
        el.style.display = 'none'; 
    });

    // 1. Play the silent mask removal GIF
    img.src = "mask-reveal.gif";

    // 2. The 3-Second Punchline Delay (3000 milliseconds)
    setTimeout(() => {
        // Swap to the cartoon avatar
        img.src = "my-avatar.png";

        // Create the final message
        const punchline = document.createElement('h2');
        punchline.innerHTML = "Hehe got you. Now you're stuck with me.";

        // Add a little styling to make it look clean and centered above the image
        punchline.style.fontFamily = "'Courier New', monospace";
        punchline.style.fontSize = "22px";
        punchline.style.marginBottom = "20px";
        punchline.style.textAlign = "center";

        // Insert the text exactly at the top of the image
        scene6.insertBefore(punchline, img);

    }, 3000);
}
