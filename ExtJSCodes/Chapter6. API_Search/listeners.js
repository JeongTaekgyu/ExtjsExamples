Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 600,
		height : 400,
		title : "6강 ExtJS 타이틀",
		renderTo : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west',
			split : true, // panel 간격 조절
			title : 'west입니다',
			collapsible : true, // panel 접을 수 있음
			html : '<b>안녕하세요</br>'
		},{
			xtype : 'panel',
			border : true,
			title : '센터',
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				border : true,
				flex : 2,
				title : '센터-센터',
				region : 'center',
				layout : 'center',
				items : [{
					xtype : 'button',
					text : '버튼입니다',
					// 아래도 마찬가지로 key, value 형식인데 value가 function으로 들어갈 수도 있다.
//					handler : function(btn){
//						alert("버튼 클릭!");
//					}
					// 위에 handler와 보여지는것 동일한 이벤트, 둘 중 하나만 써야하네
					listeners : {
						click : function(btn){
							alert(btn.getText());
						}
					}
				}]
			},{
				xtype : 'panel',
				border : true,
				flex : 1,
				title : 'south',
				region : 'south',
				collapsible : true,
				split : true // panel 간격조절
			}]
		}]
	})
})
