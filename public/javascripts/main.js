




    var dhxWins

    dhxWins = new dhtmlXWindows();
    dhxWins.attachViewportTo("winVP");


    var idPrefix = 1;
    function createWindow() {
        var p = 0;
        dhxWins.forEachWindow(function(){p++;});
        if (p>5) {
            alert("Too many windows");
            return;
        }
        var id = "userWin"+(idPrefix++);
        //
        var w = 830;
        var h = 420;
        var x = 0;
        var y = 0;
        //
        dhxWins.createWindow("main_window", x, y, w, h);
      //  dhxWins.window(id).setText(document.getElementById("win_t").value);
        // dhxWins.window(id).keepInViewport(true);
        //
    //    document.getElementById("win_x").value = x+8;
      //  document.getElementById("win_y").value = y+6;
    }

    function doOnUnload() {
        if (dhxWins != null && dhxWins.unload != null) {
            dhxWins.unload();
            dhxWins = null;
        }
    }

    createWindow();

    dhxWins.window("main_window").attachURL("partials/index_window.html");




   //$('h1').css('color','red');