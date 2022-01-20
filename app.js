$(document).ready(function () { 

    function makeAccusation() {
        for (var i = 0; i <= 100; i++) {
            var friends = ["Resetti", "Brewster", "Sable", "Tom", "Isabelle"];
            var locations = ["beach shack", "town hall", "sewing shop", "boat shed", "library", "kitchen", "solarium", "dining room", "studio", "game room"]
            var objects = ["banana taped to a stick", "giant wheel of cheese", "arsenic", "rock", "net", "shovel", "silver bullet", "holy water",
                "cursed necklace", "cow plant", "acid", "really bad singing", "giant mecha robot", "stake", "glass bottle", "demon portal", "rattlesnake",
                "slingshot", "mysterious liquid", "laser turrets"];
            var h3 = $("<h3></h3>");

            h3.text("Accusation " + [i + 1]);
            $(".acc-box").append(h3);
            h3.click(alertAccusation(i));
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

    makeAccusation();
});
