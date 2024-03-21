const s = document.getElementById('start');
const m = document.getElementById('inst');
const close = document.getElementsByClassName('close')[0];
const continues = document.querySelector('#contd');

s.addEventListener('click', function(e) {    
    let q = prompt("Do you want to play a game?");
    if (q && (q.toLowerCase() === 'yes' || q.toLowerCase() === 'y')) {
        let nickname = prompt('Enter nick-name:');
        if (nickname) {
            alert("Great! Let's start the game!"+" "+nickname);
            s.style.display = "none"; // Hide starting message
            // Open the instructions page as a popup
            m.style.display='block';
            continues.addEventListener('click',function(){
                window.location.href='./game.html';
            })
        } else {
            alert("Please enter a nickname to start the game.");
        }
    } else {
        alert("Okay, maybe another time.");
    }
});

close.addEventListener('click',function(){
    m.style.display="none";
});

window.addEventListener('click',function(e){
    if(e.target == m){
        m.style.display = 'none';
    }
});
