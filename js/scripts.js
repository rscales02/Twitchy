$(document).ready(function() {
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp', function(dataStream) {
    	console.log(dataStream);
            if (dataStream.stream === null) {
                $("#status").html("Free Code Camp is OFFLINE");
            } else {
                $("#status").html("Online");
            }
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/freecodecamp', function(dataChannel) {
        console.log(dataChannel);
        $('#display-name').html(dataChannel.display_name);
        $('#logo').html('<img src=\"' + dataChannel.logo + '\"/>');
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/users/freecodecamp', function(dataUser) {
    	console.log(dataUser);
    });
});
/*
https://wind-bow.glitch.me/twitch-api/channels/freecodecamp
https://wind-bow.glitch.me/twitch-api/users/freecodecamp
https://wind-bow.glitch.me/twitch-api/streams/freecodecamp
*/