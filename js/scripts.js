$(document).ready(function() {

    //free code camp stream
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp', function(dataStream) {
        //console.log(dataStream);
        if (dataStream.stream === null) {
            $("#status1").html("Free Code Camp is OFFLINE");
        } else {
            $("#status1").html("Online");
        }
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/freecodecamp', function(dataChannel) {
       // console.log(dataChannel);
        $('#display-name1').html(dataChannel.display_name);
        $('#logo1').html('<img src=\"' + dataChannel.logo + '\" class=\"center-block\"/>');
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/users/freecodecamp', function(dataUser) {
       // console.log(dataUser);
       $('#description1').html(dataUser.bio);
    });

    //Omgitsfirefoxx stream
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/Omgitsfirefoxx', function(dataStream) {
       // console.log(dataStream);
        if (dataStream.stream === null) {
            $("#status2").html("Free Code Camp is OFFLINE");
        } else {
            $("#status2").html("Online");
        }
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/Omgitsfirefoxx', function(dataChannel) {
        //console.log(dataChannel);
        $('#display-name2').html(dataChannel.display_name);
        $('#logo2').html('<img src=\"' + dataChannel.logo + '\" class=\"center-block\"/>');
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/users/Omgitsfirefoxx', function(dataUser) {
        //console.log(dataUser);
        $('#description2').html(dataUser.bio);
    });

    //kindafunnygames stream
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/kindafunnygames', function(dataStream) {
        //console.log(dataStream);
        if (dataStream.stream === null) {
            $("#status3").html("Free Code Camp is OFFLINE");
        } else {
            $("#status3").html("Online");
        }
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/kindafunnygames', function(dataChannel) {
        //console.log(dataChannel);
        $('#display-name3').html(dataChannel.display_name);
        $('#logo3').html('<img src=\"' + dataChannel.logo + '\" class=\"center-block\"/>');
    });

    $.getJSON('https://wind-bow.glitch.me/twitch-api/users/kindafunnygames', function(dataUser) {
        console.log(dataUser);
        $('#description3').html(dataUser.bio);
    });


});
/*
https://wind-bow.glitch.me/twitch-api/channels/freecodecamp
https://wind-bow.glitch.me/twitch-api/users/freecodecamp
https://wind-bow.glitch.me/twitch-api/streams/freecodecamp
*/