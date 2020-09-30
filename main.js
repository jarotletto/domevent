// membuat function untuk memunculkan MODAL
const showModal =()=>{
    //kita dapatkan element modal yang mau dimunculkan
    let modal= document.getElementById("modalMenu")
//atur styling elemnt modal
    modal.style.display="flex"
}

const closeModal =()=>{
    let modal = document.getElementById("modalMenu")
    modal.style.display='none' 
}