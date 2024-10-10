"use strict";
let viewedCount = 0; 


// Update artwork that was viewed
function updateCounter()
{
    document.getElementById('counter').innerText = 'Artworks Viewed: ${viewedCount}';
}

// Add a click event when user clicks panel
document.querySelectorAll('.art-panel').forEach(panel=> 
{
    panel.addEventListener('click', ()=> 
    {
        if (!panel.classList.contains('viewed')) 
        {
            panel.classList.add('viewed');
            panel.style.bakcgroundColor = 'lightblue';
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
        panel.style.bakcgroundColor = ''; 
    })
});



