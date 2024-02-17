function promptAuthorization(action) {
    var code = prompt("Enter the license key you obtained from Nox to " + action + ":");
    return code;
}

document.oncontextmenu = function() {
    var code = promptAuthorization("Continue");
    if (code === "kla3132") {
        return true , true;
    } else {
        alert("Incorrect license key!");
        return false;
    }
};

document.onkeydown = function(e) {
    if (e.keyCode == 123) {
        var code = promptAuthorization("Continue");
        if (code === "kla1112") {
            return true;
        } else {
            alert("Incorrect license key!");
            return false;
        }
    }
};
          document.oncontextmenu = function() {
              return false;
            };
            
            document.onkeydown = function(e) {
              if (e.keyCode == 123) {
                return false;
              }
            };
            
            document.onselectstart = function() {
              return false;
            };
            
