$(document).ready(function () {

    var accButton = $("#accButton");
    var allAccButton = $("#allAccButton");

    var accTextBox = $("<h3></h3>");
    accTextBox.addClass("make-acc-text");

    accButton.click(makeAccusation);

    allAccButton.click(showAccusations);

    allAccButton.dblclick(clearAccusations);



    function makeAccusation() {

        clearAccusations();

        for (var i = 0; i <= 100; i++) {
            var friends = ["Resetti", "Brewster", "Sable", "Tom", "Isabelle"];
            var locations = ["beach shack", "town hall", "sewing shop", "boat shed", "library", "kitchen", "solarium", "dining room", "studio", "game room"]
            var objects = ["banana taped to a stick", "giant wheel of cheese", "arsenic", "rock", "net", "shovel", "silver bullet", "holy water",
                "cursed necklace", "cow plant", "acid", "really bad singing", "giant mecha robot", "stake", "glass bottle", "demon portal", "rattlesnake",
                "slingshot", "mysterious liquid", "laser turrets"];
        };

        var i = Math.floor((Math.random() * 100) + 1);

        accTextBox.text("");
        accTextBox.text("Accusation " + [i]);
        $(".acc-box").append(accTextBox);
        accTextBox.click(alertAccusation(i));

        function alertAccusation(i) {

            return function () {
                swal({
                    title: `I accuse ${friends[i % friends.length]},`,
                    text: `with the ${objects[i % objects.length]} in the ${locations[i % locations.length]}!`,
                    button: "Case Closed",
                });
            };
        };

    };

    function showAccusations() {

        clearAccusations();

        for (var i = 0; i <= 100; i++) {
            var friends = ["Resetti", "Brewster", "Sable", "Tom", "Isabelle"];
            var locations = ["beach shack", "town hall", "sewing shop", "boat shed", "library", "kitchen", "solarium", "dining room", "studio", "game room"]
            var objects = ["banana taped to a stick", "giant wheel of cheese", "arsenic", "rock", "net", "shovel", "silver bullet", "holy water",
                "cursed necklace", "cow plant", "acid", "really bad singing", "giant mecha robot", "stake", "glass bottle", "demon portal", "rattlesnake",
                "slingshot", "mysterious liquid", "laser turrets"];
            var allAccText = $("<h3></h3>");
            allAccText.addClass("show-all-text");

            allAccText.text("Accusation " + [i + 1]);
            $(".acc-box").append(allAccText);
            allAccText.click(alertAccusation(i));
        };

        function alertAccusation(i) {
            return function () {
                swal({
                    title: `I accuse ${friends[i % friends.length]},`,
                    text: `with the ${objects[i % objects.length]} in the ${locations[i % locations.length]}!`,
                    button: "Case Closed",
                });
            };
        };
    };

    function clearAccusations() {

        $(".acc-box").empty(".show-all-text");
    };

});
