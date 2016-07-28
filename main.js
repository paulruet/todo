
let storedNames = JSON.parse(localStorage.getItem("array"));
storedNames.forEach(function (val, index, storedNames) {
	if(val){generateElement(val);}
    
});

function generateElement(params){
        var parent = $('#sort');
       
        wrapper = $("<div />", {
            "class" : 'todo-task',
            "id" : params.id,
            "data" : params.id
        }).appendTo(parent);

        $("<div />", {
            "class" : "task-header",
            "text": params.title
        }).appendTo(wrapper);

        $("<div />", {
            "class" : "task-date",
            "text": params.date
        }).appendTo(wrapper);

        $("<div />", {
            "class" : "task-description",
            "text": params.description
        }).appendTo(wrapper);

        $("<div />", {
            "class" : "task-date",
            "text": params.tag
        }).appendTo(wrapper);

        $("<div />", {
            "class" : "btn btn-primary edit",
            "id" : params.id,
            "text": "Edit", 
            "onclick":"edit(this.id)"
        }).appendTo(wrapper);
        $("<div />", {
            "class" : "btn btn-danger del",
            'id':params.id,
            "text": "Delete",
            "onclick":"del(this.id)"
        }).appendTo(wrapper);


    };


$('#add_btn').click(function(){
var id = new Date().getTime();
var title=$('.title').val();
var des=$('.description').val();
var date=$('.date').val();
var tag=$('.tag').val();
tempData = {
            id : id,
            title: title,
            date: date,
            description: des,
            tag:tag
        };
        console.log(tempData);
        var array=JSON.parse(localStorage.getItem("array"));
        console.log(array);
        array.push(tempData);
        // var a= array.length;
        localStorage.setItem("array", JSON.stringify(array));
        generateElement(tempData);
        $("#todo-form")[0].reset();
	
});
// console.log(storedNames);
$('#clear_btn').click(function() {
	console.log('hi');

	array=[];
	localStorage.setItem("array", JSON.stringify(array));
	$("." +'todo-task').remove();
});

function edit(id){
	var storedNames=JSON.parse(localStorage.getItem("array"));
	var clickedtodoIndex;
	storedNames.forEach(function(todo, index, storedNames){
				if(todo){
      			if(todo.id==id){
      				return clickedtodoIndex = index;
      			}
      		}
          });
	var todo_item=storedNames[clickedtodoIndex];
		// console.log(todo_item.id,todo_item.title,todo_item.description,todo_item.date,todo_item.tag);
        var title=$('.title').val(todo_item.title);
        var id=$('.id').val(todo_item.id);
        var todoIndex=$('.clicked-index').val(clickedtodoIndex);
        var des=$('.description').val(todo_item.description);
        var date=$('.date').val(todo_item.date);
		var tag=$('.tag').val(todo_item.tag);

	
}

$('#edit_btn').click(function() {
	var array=JSON.parse(localStorage.getItem("array"));
	// console.log(array);
 //      /*  $('#add_btn').hide();
	// 	$('#edit_btn').show();*/
	
	// 	var todo_item=array[0];
		// console.log(todo_item.id,todo_item.title,todo_item.description,todo_item.date,todo_item.tag);
        var todoIndex=$('.clicked-index').val();
        var id=$('.id').val();
        var title=$('.title').val();
        var des=$('.description').val();
        var date=$('.date').val();
		var tag=$('.tag').val();

        editedData = {
            id :id,
            title: title,
            date: date,
            description: des,
            tag: tag
        }
        
        // var clickedTodo = array[todoIndex];

  // console.log(editedData);
        array[todoIndex] = editedData;
localStorage.setItem("array", JSON.stringify(array));

        //generateElement(editedData);
        $("#todo-form")[0].reset();

         var parent = $('#'+id);

         var wrapper = '<div class="task-header">'+title+'</div><div class="task-date">'+date+'</div><div class="task-description">'+des+'</div><div class="task-date">'+tag+'</div><div onclick="edit(this.id)" id="'+id+'" class="btn btn-primary edit">Edit</div><div onclick="del(this.id)" id="'+id+'" class="btn btn-danger del">Delete</div>'
       parent.html(wrapper);
     
       
});


function del(id){
	var storedNames=JSON.parse(localStorage.getItem("array"));
	console.log(storedNames);
	var clickedtodoIndex;
	storedNames.forEach(function(todo, index, storedNames){
      			if(todo.id==id){
      				return clickedtodoIndex = index;
      			}
          });
		 $("#" +id).remove();
        storedNames.splice(clickedtodoIndex, 1);
localStorage.setItem("array", JSON.stringify(storedNames));
}

,