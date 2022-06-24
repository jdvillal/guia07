
let ejecutarCodigo = ()=>{
    document.getElementById('titulo1').textContent = "Album de fotos";
    document.getElementsByClassName('text-muted')[1].innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href=\"https://codepen.io/taj1uddin/pen/eYVrLKy\">Codepen - Taj Uddin</a>.</span>`;
    let arreglo = document.getElementsByTagName('p');
    elemento = arreglo[2];
    elemento.setAttribute('class','d-none');

    let images_arr = [ { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'},
                    { url: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'copa'},
                    { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
                    { url: 'https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'globo'},
                    { url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'perro'},
                    { url: 'https://images.unsplash.com/photo-1654041562793-1bd2430585cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'bosque'},
                    { url: 'https://images.unsplash.com/photo-1653934004892-1399fb4444c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'nieve'},
                    { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',alt: 'energia'},
                    { url: 'https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'casa'}
                ];
    let svgs = document.getElementsByTagName('svg');
  
    let c = 1;
    while(true){
        const img = document.createElement("img");
        img.setAttribute('src',images_arr[c-1].url);
        img.setAttribute('alt', images_arr[c-1].alt);
        svgs[1].parentNode.replaceChild(img, svgs[1]);
        if(c == 9){
            break
        }
        c++;
    }

}
ejecutarCodigo();
