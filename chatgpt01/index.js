require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// openai.listModels().then(res => console.log(res.data));

const run = async () => {

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "best way to display content from openai.createCompletion method in node.js"}],

  });
  console.log(completion.data.choices[0].message);
}

run() 



