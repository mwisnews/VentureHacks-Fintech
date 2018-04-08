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
    
    var parent = $("#aCalc");
    
    if (a >= 1) {
        console.log("yes1");
        
        
    } else if(a >= 0.9) {
        console.log("yes2");
        parent.append('<div>You have enough money to start up the business, but here are some suggestions on allocating money so you do not end up in debt.</div>');
    } else {
        console.log("yes3");
        var txt3 = document.createElement("p");
        txt3.innerHTML = "You are able to start up your business successfully, just be careful about where you allocate your money in the future. This is a solid budget plan. All you need to do is wait. Credit increases, as credit improves as time progresses, as long as you do not deviate from the budget plan you established in this form. Here are some areas where you can spend more money if you would like.";
        console.log(txt3);
        $('#aCalc').append(txt3);
    }
    
}


