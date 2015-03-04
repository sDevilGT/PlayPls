
function GetVKAuthUri(){
    var appId = 4810896;
    var permissions = "audio,offline";
    var redirectUri = "http%3A%2F%2Foauth.vk.com%2Fblank.html";
    var displayMode = "page";
    var tokenType = "token";
    var authUri = "https://oauth.vk.com/authorize?client_id=" + appId + "&scope=" + permissions + "&redirect_uri=" + redirectUri + "&display=" + displayMode + "&response_type=" + tokenType;
    return authUri;
}

function SetAuthVK(){
    var authUri = GetVKAuthUri();
    //$("#AuthVKLink").attr("href", authUri);
    $("#AuthVKLink").click(function(){
            window.open(authUri);
    });
}
$(document).ready(function(){
        SetAuthVK();
});