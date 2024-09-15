let storyHistory = [];

function showOption1() {
    updateStory(`
        <p>Planets are fascinating celestial bodies. Did you know that Jupiter is so big that you could fit all the other planets inside it?</p>
        <button onclick="mercury()">Mercury</button>
        <button onclick="venus()">Venus</button>
        <button onclick="earth()">Earth</button>
        <button onclick="mars()">Mars</button>
        <button onclick="jupiter()">Jupiter</button>
        <button onclick="saturn()">Saturn</button>
        <button onclick="uranus()">Uranus</button>
        <button onclick="neptune()">Neptune</button>
        <button onclick="resetStory()">Start Page</button>
    `);
}

function showOption2() {
    updateStory(`
        <p>Stars are enormous glowing balls of gas. Did you know that the Sun is a star, and it is about 93 million miles away from Earth?</p>
        <button onclick="showOption2A()">Supernovae</button>
        <button onclick="showOption2B()">Neutron Stars</button>
        <button onclick="resetStory()">Start Page</button>
    `);
}

function mars() {
    updateStory(`
        <p>Mars is known as the Red Planet. It has the tallest volcano in the solar system, Olympus Mons.</p>
        <button onclick="resetStory()">Start Page</button>
        <button onclick="goBack()">Previous Page</button>
    `);
}

function venus() {
    updateStory(`
        <p>Venus is the hottest planet in our solar system. It has a thick atmosphere full of carbon dioxide.</p>
        <button onclick="resetStory()">Start Page</button>
        <button onclick="goBack()">Previous Page</button>
    `);
}

function showOption2A() {
    updateStory(`
        <p>A supernova is a powerful explosion of a star. It can outshine entire galaxies for a short time.</p>
        <button onclick="resetStory()">Start Page</button>
        <button onclick="goBack()">Previous Page</button>
    `);
}

function showOption2B() {
    updateStory(`
        <p>Neutron stars are incredibly dense. A sugar-cube-sized amount of neutron-star material would weigh about a billion tons on Earth.</p>
        <button onclick="resetStory()">Start Page</button>
        <button onclick="goBack()">Previous Page</button>
    `);
}

function resetStory() {
    storyHistory = [];
    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = `
        <p>Welcome to the space adventure! Choose your path to learn some amazing space facts.</p>
        <button onclick="showOption1()">Explore the Planets</button>
        <button onclick="showOption2()">Learn about Stars</button>
    `;
}

function goBack() {
    if (storyHistory.length > 1) {
        storyHistory.pop();  // Remove the current page
        document.getElementById('story').innerHTML = storyHistory[storyHistory.length - 1];
    }
}

function updateStory(newContent) {
    storyHistory.push(newContent);
    document.getElementById('story').innerHTML = newContent;
}

// Initialize the story
resetStory();
