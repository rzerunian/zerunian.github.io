// Use the require function to import the Client class
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Hz5rN4bBP6kXPsOaZERP35OMagBipwN5sumECgVia8W' });

let valordistancia;

  (async () => {
    let dado = Math.floor(Math.random() * 20) + 1;
    const distanciaId = '82089f2f-667d-45b1-8ae6-60f6d301c85f';
    let distancia = await notion.blocks.retrieve({
      block_id: distanciaId,
    });
    distancia = distancia.callout.rich_text[1].text.content.substring(2,3);
    valordistancia = dado + parseInt(distancia);
    console.log(distancia);
    console.log(dado);
    console.log(valordistancia);

    const diceId = '6a3bdcd7-cb0b-415a-b36f-d4eb9fda67cc';
    const dice = await notion.blocks.update({
      block_id: diceId,
      "callout": {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Ataque à distância (' + distancia + '+' + dado +')', link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default'
              },
              plain_text: '',
              href: null
            },
            {
              type: 'text',
              text: { content: '\n' + valordistancia, link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default'
              },
              plain_text: '\n',
              href: null
            }
          ],
          color: 'gray_background'
      }
    });
    console.log(dice.callout.rich_text[1]);
  })();