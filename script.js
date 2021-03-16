    var count1, count2, count3;

        function setter() {
            var s = document.getElementById("seconde");
            var w = 0;
            count1 = setInterval(function() {
                w++;
                s.innerHTML = w;
                if (w > 59) {
                    w = 0;
                }
            }, 1000);


            var p = document.getElementById("minute");
            var x = 0;
            count2 = setInterval(function() {
                x++;
                p.innerHTML = x;
                if (x > 59) {
                    x = 0;
                }
            }, 60000);

            var o = document.getElementById("heure");
            var y = 0;
            count3 = setInterval(function() {
                y++;
                o.innerHTML = y
            }, 1200000);

        }

        function stop() {
            clearInterval(count1);
            clearInterval(count2);
            clearInterval(count3);
        }
