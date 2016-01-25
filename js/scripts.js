function List(day) {
  this.day = day;
  this.todo = [];
}

$(document).ready(function(){
  $("form#new-list").submit(function(event){
    var inputtedDay = $("input#new-day").val();
    var inputtedTodo1 = $("input#new-todo1").val();
    var inputtedTodo2 = $("input#new-todo2").val();
    var newList = new List(inputtedDay);

    $("ul#list").append("<li><span class='days'>" + newList.day + "</span></li>");
    newList.todo.push(inputtedTodo1);
    newList.todo.push(inputtedTodo2);
    console.log(newList.todo);
    $(".days").last().click(function(){
      $("ol").empty();
      $("#show-list").show();
      $("#show-list h2").text(newList.day)
      newList.todo.forEach(function(todo){
        $("ol.thingstodo").append("<li>" + todo + "</li>");
      });
    });

    $("form#new-item").submit(function(event){
      var inputtedTodoItem = $("input#new-todo-item").val();
      this.todo.push(inputtedTodoItem);
      $("ol.thingstodo").append("<li>" + inputtedTodoItem + "</li>");
      event.preventDefault();
    });
  event.preventDefault();
  });
});
