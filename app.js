$(document).ready(function () { 

    function makeAccusation() {
        for (var i = 0; i <= 100; i++) {
            var friends = ["Kelsie", "Kelsey", "Paxton", "JT", "Aaron"];
            var locations = ["bedroom", "living room", "porch", "party room", "library", "kitchen", "solarium", "dining room", "studio", "game room"]
            var objects = ["banana taped to a stick", "giant wheel of cheese", "arsenic", "rock", "knife", "sword", "silver bullet", "holy water",
                "cursed necklace", "cow plant", "acid", "really bad singing", "giant mecha robot", "stake", "glass bottle", "demon portal", "rattlesnake",
                "gun", "mysterious liquid", "laser turrets"];
            var h3 = $("<h3></h3>");

            h3.text("Accusation " + [i + 1]);
            $("body").append(h3);
            h3.click(alertAccusation(i));
        };

        function alertAccusation(i) {
            return function () {
                alert(`I accuse ${friends[i % friends.length]}, with the ${objects[i % objects.length]} in the ${locations[i % locations.length]}!`);
            };
        };

    };

    makeAccusation();
});
