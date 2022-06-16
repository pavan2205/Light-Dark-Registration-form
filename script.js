
const chkBox=document.querySelector('input[name=checkbox]');

chkBox.addEventListener('change',function (){
    if(this.checked){
        document.body.style.backgroundImage="url('cover-2.webp')";
        document.getElementById('lab').style.color="white"
        document.getElementById('lab-1').style.color="white"
        document.getElementById('lab-2').style.color="white"
        document.getElementById('lab-3').style.color="white"
    }
    else{
        
        document.body.style.backgroundImage="url('cover-1.jpg')";
        document.getElementById('lab').style.color="rgba(40, 135, 135, 0.746)"
        document.getElementById('lab-1').style.color="rgba(40, 135, 135, 0.746)"
        document.getElementById('lab-2').style.color="rgba(40, 135, 135, 0.746)"
        document.getElementById('lab-3').style.color="rgba(40, 135, 135, 0.746)"
    }
})