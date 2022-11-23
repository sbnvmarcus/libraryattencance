    function subForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/14DzmjfQTArHO2FmXFQNhxUUM51d95F66g004F39XtqY/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
        },
        error: function(){
			new Notify ({
		    	status: 'error',
		    	title: `在Google Sheets裡增加紀錄失敗！`,
		    	autoclose: true
	  		})
        }
    });
}
