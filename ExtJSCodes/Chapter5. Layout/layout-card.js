Ext.onReady(function(){
	// 항상 레이아웃 속성은 적용하고자 하는 부모패널한테 지정한다.
	// card
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'card',

			tbar: [{
		        text: 'Before',
		        handler: function(btn){
		        	if(btn.up("panel").getLayout().getPrev()) {
		        		btn.up("panel").setActiveItem(btn.up("panel").getLayout().getPrev());
	                }else {
	                	alert("첫번째 페이지");
	                }
		        }
		    },{
		        text: 'Next',
		        handler: function(btn){
		        	 if(btn.up("panel").getLayout().getNext()) {
		        		 btn.up("panel").setActiveItem(btn.up("panel").getLayout().getNext());
	                 }else {
	                	 alert("마지막 페이지");
	                 }
		        }
		    }],

			items : [{
				xtype : 'panel',
				title : '첫째 패널',
				html : '첫째입니다'
			},{
				xtype : 'panel',
				title : '둘째 패널',
				html : '둘째입니다'
			},{
				xtype : 'panel',
				title : '셋째 패널',
				html : '셋째입니다.'
			}]
		}]
	})
})
