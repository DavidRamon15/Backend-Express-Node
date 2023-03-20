
  const callOpenAiApi = async(ask) =>  {
    const raw = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": ask,
        "temperature": 0.6,
        "max_tokens": 1024,
        "stream": false
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch("https://api.openai.com/v1/completions", requestOptions);
    return response.json();
}

module.exports ={
    callOpenAiApi
}