document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById("projectlist");
    var lis = Array.from(ul.getElementsByTagName("li"));

    shuffleArray(lis);

    lis.forEach(function(li, index1) {
        setRandomPosition(li);

        lis.forEach(function(otherLi, index2) {
            if (index1 !== index2) {
                connectItems(li, otherLi);
            }
        });
    });

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function setRandomPosition(element) {
        var maxX = window.innerWidth - element.clientWidth;
        var maxY = window.innerHeight - element.clientHeight;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        element.style.position = "absolute";
        element.style.left = randomX + "px";
        element.style.top = randomY + "px";
    }

    function connectItems(item1, item2) {
        var line = document.createElement("div");
        line.className = "line";
        document.body.appendChild(line);
    
        // Get the current positions after setting random positions
        var style1 = window.getComputedStyle(item1);
        var style2 = window.getComputedStyle(item2);
    
        var centerX1 = parseFloat(style1.left) + parseFloat(style1.width) / 2;
        var centerY1 = parseFloat(style1.top) + parseFloat(style1.height) / 2;
    
        var centerX2 = parseFloat(style2.left) + parseFloat(style2.width) / 2;
        var centerY2 = parseFloat(style2.top) + parseFloat(style2.height) / 2;
    
        var length = Math.sqrt(Math.pow(centerX2 - centerX1, 2) + Math.pow(centerY2 - centerY1, 2));
        var angle = Math.atan2(centerY2 - centerY1, centerX2 - centerX1);
    
        line.style.width = length + "px";
        line.style.transform = "rotate(" + angle + "rad)";
        line.style.left = centerX1 + "px";
        line.style.top = centerY1 + "px";
    }
});