console.log('Hello')

function scrollDown() {
    document.getElementById('chatlogs').scrollTop = document.getElementById('chatlogs').scrollHeight
}



const human_div = `<div id="chat self" class="chat self">
                        <div class="user-pic"><img src="static/img/user.png" alt="user"></div>
                            <p class="chat-msg user" id="user">`;


const bot_div = `<div id="chat bot" class="chat bot">
                    <div class="user-pic"><img src="static/img/bot.png" alt="bot"></div>
                        <p class="chat-msg robot" id="robot">`;

const close_div = "</p></div>";

$("#form").submit(function (e) {
    e.preventDefault();
    var input = $("#userMsg").val();
    $("#userMsg").val("");
    make_request(input);
    $("#chatlogs").append(human_div + input + close_div);
    scrollDown()
});


function make_request(message) {
    var url =
        "https://api.wit.ai/message?v=20201005&q=" +
        message +
        "&access_token=REH2ICFDRVXBFQMSWD4UKRUKS6UBFBVZ";
    $.getJSON(url, function (data) {
        return bot_reply(data);
    });
}

function bot_reply(data) {
    // console.log(data);
    var reply = "I am not programmed to answer that query just yet.";
    if (data["intents"].length > 0) {
        reply = responses[data["intents"][0]["name"]];
    }

    $("#chatlogs").append(bot_div + reply + close_div);
    scrollDown()
}



(responses = {
    "greetings": "Hello. This is Elga Bot. Ask me anything about Elga.",
    "who_made": "I was made by Elga. Ask me anything about her.",
    "who_elga": "Elga is a student, currently in XI.",
    "full_name": "Her full name is Elga Jerusha Henry.",
    "what_do": "Elga currently studies in class XI.",
    "where_live": "Elga is now in Chennai, doing her XI.",
    "like_doing": "Elga likes to read books, play music [piano, mouthorgan], solve rubik's cube, play carrom and also interested in computers.",
    "school": "Elga studies in MCC Campus School, East Tambaram, Chennai.",
    "birth_date": "Elga was born on the 19th of April, 2004.",
    "age": "Elga is 16 years now.",
    "email": "You can contact Elga by her mail : henryelga2004@gmail.com ",
    "birth_place": "Elga was born in Kolkata.",
    "language": "Elga knows English, Hindi, Bengali, Tamil and French.",
    "about_elga": "Elga is a student, currently doing her 11th standard in MCC Campus School in Chennai. She is a good student and scores well. She was born in Kolkata and lives in Chennai now. Elga likes to read books, play music [piano, mouthorgan], solve rubik's cube, play carrom and also interested in computers.",
    "who_you": "I am a Chatbot. I was made by Elga. Ask me anything about her.",
    "robot_name": "This is Elga Bot. Ask me anything about Elga.",
    "ok": "Ask me anything else about Elga.",
    "bye": "Goodbye! It was nice talking to you!",
    "no": "Ask me anything else about Elga.",
    "yes": "Ask me anything else about Elga.",
    "how_you": "I am fine. How are you?",
    "user_fine": "That's good to hear.",
    "morning": "Good morning. Have a nice day!",
    "afternoon": "Good afternoon!",
    "evening": "Good evening!",
    "night": "Good night! Sleep well!"
})