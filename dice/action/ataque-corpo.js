// Use the require function to import the Client class
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: 'secret_Hz5rN4bBP6kXPsOaZERP35OMagBipwN5sumECgVia8W' });

let valorcorpo;

  (async () => {
    let dado = Math.floor(Math.random() * 20) + 1;
    const corpoId = '0157238f-287c-4316-b5c2-af1c4e8349d9';
    let corpo = await notion.blocks.retrieve({
      block_id: corpoId,
    });
    corpo = corpo.callout.rich_text[1].text.content.substring(2,3);
    valorcorpo = dado + parseInt(corpo);
    console.log(corpo);
    console.log(dado);
    console.log(valorcorpo);

    const diceId = '6a3bdcd7-cb0b-415a-b36f-d4eb9fda67cc';
    const dice = await notion.blocks.update({
      block_id: diceId,
      "callout": {
          rich_text: [
            {
              type: 'text',
              text: { content: 'Ataque corpo-a-corpo ('+ corpo + ' + ' + dado + ')' , link: null },
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
              text: { content: '\n' + valorcorpo, link: null },
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