//get status of testbot
if (regexTestbot.test(message.content)) {
    var testbot = client.users.get("76628027752054784");
    if (testbot.presence.status == "offline") {
        message.channel.send("test-bot is offline, but I'm here for you!");
    }else if(testbot.presence.status == "online") {
        message.channel.send("<@76628027752054784>'s status is " + testbot.presence.status);
    }
}
