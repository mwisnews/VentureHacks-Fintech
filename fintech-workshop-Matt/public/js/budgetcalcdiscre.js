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
    
    var recmarket = 0.30;
    var recrd = 0.27;
    var reclegal = 0.01;
    var recassets = 0.30;
    var recemer = 0.05;
    var recdebt = 0.07;
    
    var marketrate = ~~market/assets;
    var rdrate = ~~rd/assets;
    var legalrate = ~~legal/assets;
    var assetsrate = ~~util/assets;
    var emerrate = ~~emer/assets;
    var debtrate = ~~debt/assets;
    
    if (marketrate > recmarket) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((recmarket*~~market).toString());
      var newContent3 = document.createTextNode(" on marketing instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((marketrate-recmarket)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    if (rdrate > recrd) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((recrd*~~rd).toString());
      var newContent3 = document.createTextNode(" on Research and Development instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((rdrate-recrd)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    if (legalrate > reclegal) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((reclegal*~~legal).toString());
      var newContent3 = document.createTextNode(" on legal services instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((legalrate-reclegal)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    if (assetsrate > recassets) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((recassets*~~util).toString());
      var newContent3 = document.createTextNode(" on utilities instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((assetsrate-recassets)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    if (emerrate > recemer) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((recemer*~~emer).toString());
      var newContent3 = document.createTextNode(" on emergency services instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((emerrate-recemer)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    if (debtrate > recdebt) {
        // create a new div element 
      var newDiv = document.createElement("div"); 
        newDiv.className = "output";
      // and give it some content 
      var newContent = document.createTextNode("Spend $"); 
      var newContent2 = document.createTextNode((recdebt*~~debt).toString());
      var newContent3 = document.createTextNode(" on Debt instead.  Decrease your spending by "); 
        var newContent4 = document.createTextNode((((debtrate-recdebt)/assets)*100).toFixed(2)); 
        var newContent5 = document.createTextNode("%."); 
      // add the text node to the newly created div
      newDiv.appendChild(newContent);  
        newDiv.appendChild(newContent2);  
        newDiv.appendChild(newContent3);  
        newDiv.appendChild(newContent4);  
        newDiv.appendChild(newContent5); 
      // add the newly created element and its content into the DOM 
      var currentDiv = document.getElementById("moneyAna"); 
      document.body.insertBefore(newDiv, currentDiv); 
        
        } 
    
    
}


