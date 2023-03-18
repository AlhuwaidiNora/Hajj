 
    document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});


function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

let body = {
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: value }],
  temperature: 1,
};



  let headers = {
    Authorization: "Bearer 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",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    });
}