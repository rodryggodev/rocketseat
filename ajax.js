var xhr  = new XMLHttpRequest(); // da acesso ao ajax

xhr.open('GET', 'https://rocketseat.com.br/');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}
