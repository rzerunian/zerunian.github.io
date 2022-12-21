// script.js

// Replace YOUR_DATABASE_ID and YOUR_API_KEY with your own values
const databaseId = '0be1ac8fb627477280713eb49f0a7cce';
const apiKey = 'secret_Hz5rN4bBP6kXPsOaZERP35OMagBipwN5sumECgVia8W';

// Create a function to update the value in the database
async function updateValue() {
  // Set the new value that you want to update in the database
  const newValue = '5';

  // Make an HTTP POST request to the Notion API using the database ID and API key
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      // Set the property that you want to update in the database
        properties: {
          [property]: {
            rich_text: newValue
            }
          }
        })
    });

  // Check the response status to see if the update was successful
  if (response.status === 200) {
    console.log('Value updated successfully');
  } else {
    console.error('Error updating value');
  }
}

// Add an event listener to the button element that calls the updateValue function when the button is clicked
const updateButton = document.getElementById('iniciativa');
updateButton.addEventListener('click', updateValue);

    
    
    
    
    
    
    

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
