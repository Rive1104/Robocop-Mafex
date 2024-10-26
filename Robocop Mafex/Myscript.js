function showSide(side) {
    document.getElementById('side1').style.display = 'none';
    document.getElementById('side2').style.display = 'none';
    document.getElementById('side3').style.display = 'none';
    document.getElementById(side).style.display = 'block';
}

function toggleDescription(action) {
    var desc = document.getElementById('desc');
    if (action === 'show') {
        desc.style.display = 'block';
    } else if (action === 'hide') {
        desc.style.display = 'none';
    }
}

function highlightPrice() {
    var price = document.getElementById('price');
    price.style.fontSize = '32px';
    price.style.color = 'blue';
}