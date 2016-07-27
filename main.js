
var storedNames = JSON.parse(localStorage.getItem("array")) || [];

storedNames.forEach(function (val, index, storedNames) {
    generateElement(val);
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
        // console.log(tempData);
        var array=JSON.parse(localStorage.getItem("array")) || [];
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