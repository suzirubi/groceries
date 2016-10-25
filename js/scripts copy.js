$(document).ready(function(){
  $("form#grocery-list").submit(function(event){
    $("ul").text("");
    var items = ["item1", "item2", "item3", "item4"];
    var groceryList = [];

    items.forEach(function(item){
      var userInput = $("input#" + item).val();
      groceryList.push(userInput.toUpperCase());
      groceryList.sort();

      //var addFood = groceryList.shift();
      //$("." + item).text(addFood);
    });

    groceryList.forEach(function(grocery){
        $("ul").append("<li>" + grocery + "</li>");
    });
    //$("form#grocery-list").hide();
    event.preventDefault();
  });
});
