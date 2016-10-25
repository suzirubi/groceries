$(document).ready(function(){
  $("form#grocery-list").submit(function(event){
    $("ul").text("");

    var items = [];
    // var groceryList = [];

    for (var item = 0; item < items.length; item += 1) {
      var  item1 = $("input#item1").val();
      var  item2 = $("input#item2").val();
      var  item3 = $("input#item3").val();
      var  item4 = $("input#item4").val();
      items.push(item);
      console.log(items);
    }


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
