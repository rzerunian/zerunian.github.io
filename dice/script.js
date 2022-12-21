const iniciativa = document.getElementById('iniciativa');
iniciativa.addEventListener('click', async () => {
    const pageId = 'cc50ac5544ea412fb2cb37daca877934'; // Replace with the ID of the page you want to update
    const databaseId = '0be1ac8fb627477280713eb49f0a7cce'; // Replace with the ID of the database you want to update
    const property = 'Iniciativa'; // Replace with the name of the property you want to update
    const value = '5'; // Replace with the new value you want to set

    const response = await fetch(`https://api.notion.com/v3/updatePage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer secret_Hz5rN4bBP6kXPsOaZERP35OMagBipwN5sumECgVia8W`
      },
      body: JSON.stringify({
        pageId: pageId,
        properties: {
          [property]: {
            rich_text: [[value]]
          }
         }
        })
       });
    console.log(await response.json());
});

/*
const ataqueDistancia = document.getElementById('ataque-distancia');
ataqueDistancia.addEventListener('click', () => {
  fetch('http://191.9.126.30:2456/run-node-ataque-distancia')
    .then(response => response.text())
});

const ataqueCorpo = document.getElementById('ataque-corpo');
ataqueCorpo.addEventListener('click', () => {
  fetch('http://191.9.126.30:2456/run-node-ataque-corpo')
    .then(response => response.text())
});
*/
