
	
$(document).ready(function(){ 
	
	    

//   $('#dg').datagrid({
//        columns:[[
//            {field:'make',title:'Make',width:200},
//            {field:'model',title:'Model',width:200},
//            {field:'year',title:'Year',width:200,align:'right'}
//        ]]
//   });

    
//	$('#dg').datagrid({
//		data: [
//			{make:'easyui', model:'is', year:'awesome'},
//			{make:'easyui', model:'is', year:'awesome'},
//			{make:'easyui', model:'is', year:'awesome'},
//			{make:'easyui', model:'is', year:'awesome'},
//			{make:'easyui', model:'is', year:'awesome'},
//			{make:'easyui', model:'is', year:'awesome'}
//		]
//	});


    $('#dg').datagrid('reload');    // reload the current page data

    $('.nav-block').css("width","95%")
    $('.nav-block').css("max-width","300px")
    $('.nav-block').find('td').css("background-image","url(images/bevelledGrayBar.gif")
    $('.nav-block').find('td').css("background-size","contain")
    $('.nav-block').find('td').css("background-repeat","no-repeat")
    $('.nav-block').find('td').css("max-width","300px")
    $('.nav-block').find('td').css("min-width","130px")
   // $('.nav-block').find('td').css("position","absolute")
    //$('.nav-block').find('p').css("position","relative")
    $('.nav-block').find('p').css("width","100%")
    $('.nav-block').find('p').css("min-height","45px")
   	$('.nav-block').find('p').css("padding-top","5%")
    $('.nav-block').find('p').css("text-align","center")

   // console.log($.url().param('vehiclelist'));
   //table(id="dg" style="width:95%;max-height:600px;padding-top:50px;")
});
	

