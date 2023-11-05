const { OpenAIApi } = require("openai");
require("dotenv").config();

const apiKey = process.env.OpenAI_KEY;

const openai = new OpenAIApi({ key: apikey });

const formData = {
  name: "John Doe",
  skills: "JavaScript, React, CSS",
  project: "Portfolio Website",
};

const prompt = `Create a portfolio website for ${formData.name}. It should showcase their skills in ${formData.skills}. This project should be named "${formData.project}".`;

const params = {
  model: "text-davinci-002",
  prompt: prompt,
  //   max_tokens: 100,
};

openai
  .createCompletion(params)
  .then((response) => {
    const generatedCode = response.choices[0].text;
    console.log(generatedCode);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
