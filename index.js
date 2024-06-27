const axios = require("axios");
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function createNotionPage() {
  const data = {
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_DATABASE_ID,
    },

    properties: {
      Number45: { number: 999358 },
    },
  };
  await sleep(300);

  console.log(`Sending to Notion`);

  const response = await notion.pages.create(data);

  console.log(`Operation complete.`);
}

createNotionPage();
