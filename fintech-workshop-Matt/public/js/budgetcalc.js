function calcA() {

    var q1 = $('#assets1').val();
    var q2 = $('#assets2').val();
    
    var assets = ~~q1 + ~~q2;
    console.log(assets);
    
    var market = $('#marketing').val();
    var rd = $('#rd').val();
    var legal = $('#legal').val();
    var util = $('#util').val();
    var emer = $('#emer').val();
    var debt = $('#debt').val();
    
    var expenses = ~~market + ~~rd + ~~legal + ~~util + ~~emer + ~~debt;
    console.log(expenses);
    
    var a = expenses/assets;
    console.log(a);
    
    if (a >= 1) {
        console.log("yes1");
        $('#if').css("background-color", "red");
        
    } else if(a >= 0.9) {
        console.log("yes2");
        $('#elseif').css("background-color", "red");
    } else {
        console.log("yes3");
        $('#else').css("background-color", "green");
    }
    
    
    
}


