let searchBar = document.getElementById('searchQuery');
let searchButton = document.getElementById('searchButton');
let glass = searchButton.querySelector('svg');

function focus(element)
{
    element.style.outline = 'none';
    element.style.backgroundColor = '#18444a';
    element.style.boxShadow = '0 0 10px #00ffcc, 0 0 40px #009b7c, 0 0 80px #00765f';
    element.style.border = '2px solid #00ffcc';
}

function unfocus(element)
{
    element.style.backgroundColor = '#368F8B';
    element.style.boxShadow = 'none';
    element.style.border = '1px solid #b6ab87';
}


searchBar.addEventListener('focus', function(){focus(searchBar);});

searchBar.addEventListener('blur', function(){unfocus(searchBar);});

searchButton.addEventListener('mouseover', function()
{
    focus(searchButton);
    glass.style.fill = '#00ffcc';
}); 

searchButton.addEventListener('mouseout', function(){unfocus(searchButton);}); 