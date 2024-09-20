let searchBar = document.getElementById('searchQuery');
let searchButton = document.getElementById('searchButton');
let glass = searchButton.querySelector('svg');
let actionButtons = document.getElementById('actionButtons').querySelectorAll('button');
let recommendedPics = document.querySelectorAll('.recommendedPic');

function focus(element)
{
    element.style.outline = 'none';
    element.style.backgroundColor = '#18444a';
    element.style.boxShadow = '0 0 10px #00ffcc, 0 0 40px #009b7c, 0 0 80px #00765f';
    element.style.border = '2px solid #00ffcc';
    element.style.color = '#00ffcc';
}

function unfocus(element)
{
    element.style.backgroundColor = '#368F8B';
    element.style.boxShadow = 'none';
    element.style.border = '1px solid #276764';
    element.style.color = '#ffffff';
    element.style.boxShadow = '0.15rem 0.15rem 0.7rem rgba(0, 0, 0, 0.5)';
}


searchBar.addEventListener('focus', function(){focus(searchBar);});

searchBar.addEventListener('blur', function(){unfocus(searchBar);});

searchButton.addEventListener('mouseover', function()
{
    focus(searchButton);
    glass.style.fill = '#00ffcc';
}); 

searchButton.addEventListener('mouseout', function()
{
    unfocus(searchButton);
    glass.style.fill = '#F3DFC1';
}); 

for(let button of actionButtons)
{
    button.addEventListener('mouseover', function(){focus(button);});
    button.addEventListener('mouseout', function(){unfocus(button);});
}

for(let pic of recommendedPics)
{
    pic.style.width = `${pic.offsetHeight}px`;
}