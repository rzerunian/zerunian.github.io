// Use the require function to import the Client class
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Hz5rN4bBP6kXPsOaZERP35OMagBipwN5sumECgVia8W' });

//let valorIniciativa;

  (async () => {
    //let dado = Math.floor(Math.random() * 20) + 1;
    const iniciativaId = '1422251e-f3cd-44ce-898b-e96a67ea7635';
    let iniciativa = await notion.databases.query({
      database_id: iniciativaId,
      filter: {
        property: "Valor",
        rich_text: {
          equals: "Iniciativa" 
        }
      }
    });
    /*
    iniciativa = iniciativa.callout.rich_text[1].text.content.substring(2);
    valorIniciativa = dado + parseInt(iniciativa);
    console.log(iniciativa);
    console.log(dado);
    console.log(valorIniciativa);

    const diceId = '6a3bdcd7-cb0b-415a-b36f-d4eb9fda67cc';
    const dice = await notion.blocks.update({
      block_id: diceId,
      "callout": {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Iniciativa ('+ iniciativa + ' + ' + dado + ')' , link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default'
              },
              plain_text: 'Rolagem',
              href: null
            },
            {
              type: 'text',
              text: { content: '\n' + valorIniciativa, link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default'
              },
              plain_text: '\nCalisto Polista',
              href: null
            }
          ],
          color: 'gray_background'
      }
    });
    console.log(dice.callout.rich_text[1]);
      */
  console.log(iniciativa);
  })();