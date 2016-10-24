$(document).ready(function(){
  $("form#grocery-list").submit(function(event){

    var items = ["item1", "item2", "item3", "item4"];
    var list = [];

    items.forEach(function(item){
      var userInput = $("input#" + item).val();
      list.push(userInput.toUpperCase());
    });

    list.sort();
    event.preventDefault();
  });
});
