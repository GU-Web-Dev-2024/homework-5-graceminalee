"use strict"
// <!-- Placeholder for JavaScript Code -->
    // List of additional artworks to add dynamically

    let viewedCount = 0;
    const newArtworks = [
        { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
        { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
        { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
        { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
        { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
        { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
        { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
        { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
        { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
        { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
    ];
    // Add your JavaScript code here.
    // Later, move this to an external JavaScript file for better organization.
     

// Update artwork that was viewed
function updateCounter()
{
document.getElementById('counter').innerText =  `Artworks Viewed: ${viewedCount}`;
}

// Add a click event when user clicks panel
document.querySelectorAll('.art-panel').forEach(panel=> 
{
    panel.addEventListener('click', ()=> 
    {
        if (!panel.classList.contains('viewed')) 
        {
            panel.classList.add('viewed');
            panel.style.backgroundColor = 'lightblue';
            viewedCount++;
            updateCounter();
        }
    });
});

// Reset the button
document.getElementById('reset-button').addEventListener('click', ()=> 
{
viewedCount = 0;
updateCounter();
document.querySelectorAll('.art-panel').forEach(panel => {
    panel.classList.remove('viewed');
    panel.style.backgroundColor = ''; 
})
});

// Add art to pannel 
document.getElementById('add-art-button').addEventListener('click', ()=>
{
    const randomArt = newArtworks[Math.floor(Math.random() * newArtworks.length)];

    const newPanel = document.createElement('div');
    newPanel.className = 'art-panel';

    // New image elemetn
    const img = document.createElement('img');
    img.src = randomArt.img;
    img.alt = randomArt.title;

    // Create text element
    const text = document.createElement('p');
    text.innerText = `${randomArt.title} by ${randomArt.artist}`;

    // Add new panel to the gallery
    newPanel.appendChild(img);
    newPanel.appendChild(text);

    // Append new pannel to the galleryh
    document.querySelector('.art-grid').appendChild(newPanel);

    // Add click event to the pannel
    newPanel.addEventListener('click', ()=> 
    {
        if (!newPanel.classList.contains('viewed')) 
        {
            newPanel.classList.add('viewed');
            newPanel.style.backgroundColor = 'lightblue';
            viewedCount++;
            updateCounter();
        }
    });
});

// remove art from pannel
// document.getElementById('remove-art-button').addEventListener('click', ()=>
// {
//    removeMode = !removeMode;
//    document.getElementById('remove-artwork-button').innerText =  removeMode ? 'Removing Artwork Mode': 'Remove Artwork';
// });

// document.querySelector('.art-grid').addEventListener('click', (event) => {
//     if (removeMod && event.target.closest('.art-panel')) 
//     {
//         (removeMode && event.target.closest('.art-panel'))
//         {
//             event.target.closest('.art-panel').remove();
//         }

//     }
// });



