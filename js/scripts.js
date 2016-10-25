$(document).ready(function(){
  $("form#grocery-list").submit(function(event){

    $("ul").text("");

    var  item1 = $("input#item1").val();
    var  item2 = $("input#item2").val();
    var  item3 = $("input#item3").val();
    var  item4 = $("input#item4").val();
    var items = [item1, item2, item3, item4];
    var groceryList = [];

    for ( var count = 0; count < items.length; count += 1) {

    groceryList.push(items[count]);

    }

    $("#display").text(groceryList);



    // items.forEach(function(item){
    //   var userInput = $("input#" + item).val();
    //   groceryList.push(userInput.toUpperCase());
    //   groceryList.sort();
    //
    // });

    // groceryList.forEach(function(grocery){
    //     $("ul").append("<li>" + grocery + "</li>");
    // });

    event.preventDefault();
  });
});
