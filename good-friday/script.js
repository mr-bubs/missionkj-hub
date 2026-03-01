let noClickCount = 0;

function nextScene(sceneNumber) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.scene').forEach(el => el.classList.add('hidden'));

    // Show the requested scene
    const next = document.getElementById(`scene${sceneNumber}`);
    next.classList.remove('hidden');
    next.classList.add('active');

    // Special logic for Scene 4 (Yoongi Reveal Delay)
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

    // --- PHASE 1: YOSEMITE SAM TAKEOVER ---

    // 1. Hide the Question and Buttons immediately
    questionText.classList.add('hidden');
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');

    // 2. Show Yosemite Sam & Dialogue
    mainImg.src = "yosemite-sam.png"; 
    // Force Sam to be big
    mainImg.style.width = "350px"; 
    samDialogue.classList.remove('hidden');

    // 3. Prepare the size/growth logic for later
    let noScale = 1 - (noClickCount * 0.2);
    if (noScale < 0) noScale = 0;
    noBtn.style.transform = `scale(${noScale})`;

    let yesScale = 1 + (noClickCount * 0.5); 
    yesBtn.style.transform = `scale(${yesScale})`;

    // --- PHASE 2: THE SEQUENCE (After 4 Seconds) ---
    setTimeout(() => {
        // 1. Remove Sam and his dialogue
        samDialogue.classList.add('hidden');

        // 2. Prepare Cartoon Yoongi (Hidden initially)
        mainImg.src = "yoongi-cartoon.png";
        mainImg.style.width = "100%"; 
        mainImg.classList.add('hidden'); 

        // 3. Activate the "Split Layout" (Left/Right positioning)
        scene5.classList.add('split-layout');

        // --- THE REVEAL STEPS ---

        // Step A: Bring back the Question (Immediately)
        questionText.classList.remove('hidden');

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
