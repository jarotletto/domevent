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

//kita ambil data alamat
let showcase = document.getElementById("wrapper_showcase")
console.log(showcase)
let nama = `anjeng`
//kita inject elememt dengan syntax html
//showcase.innerHTML +=`
//<img src="https://picsum.photos/seed/176/300" alt="tungguin sampe keluar gambar"/>
//<h1 style='color : red'>Selamat Datang ${nama}</h1>
//`


for (var i = 0 ; i < 60 ; i++){
    showcase.innerHTML += `
    <img src ="https://picsum.photos/seed/${1+i}/100" alt='lu pantau nih ${i}'/>
    `
}