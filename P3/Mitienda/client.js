
const cerveza = document.getElementById('cerveza')
const resultado = document.getElementById('resultado')

cerveza.onkeyup = () => {
  if (cerveza.value.length >= 3) {
    const m = new XMLHttpRequest();
    m.open("GET", "http://localhost:8080/myquery.busqueda?cerveza=" + cerveza.value, true)
    m.onreadystatechange=function(){
       //-- Petición enviada y recibida. Todo OK!
       if (m.readyState==4 && m.status==200){

         //-- La respuesta es un objeto JSON
         let cervezas = JSON.parse(m.responseText)

         //-- Borrar el resultado anterior que hubiese en el párrafo
         //-- de resultado
         resultado.innerHTML = "";

         //--Recorrer los productos del objeto JSON
         for (let i=0; i < cervezas.length; i++) {

           //-- Añadir cada producto al párrafo de visualización
           resultado.innerHTML += "<span onclick=\"location.href='"+cervezas[i][1]+".html'\">" + cervezas[i][0] + "</span>";
           console.log(cervezas[i][1]);

           //-- Separamos los productos por ',''
           if (i < cervezas.length-1) {
             resultado.innerHTML += ', ';
           }
         }
       }
     }
     m.send()
  }else {
    resultado.innerHTML = "";
  }
 }
