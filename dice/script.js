const iniciativa = document.getElementById('iniciativa');
iniciativa.addEventListener('click', async () => {
    const pageId = '0be1ac8f-b627-4772-8071-3eb49f0a7cce'; // Replace with the ID of the page you want to update
    const databaseId = '67dcac7a-ef27-409e-9857-fc40208b8953'; // Replace with the ID of the database you want to update
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
