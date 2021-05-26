Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		//renderTo : Ext.getBody(),
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'absolute', // 첫째 패널 도 둘째 패널도 위치를 선언안하면 둘다 0,0 위치에 있다.
			items : [{
				xtype : 'panel',
				width : 300,
				height : 200,
				x : 100,
				y: 150,
				border : true,
				title : '첫째 패널',
			},{
				xtype : 'panel',
				width : 300,
				height : 200,
				x : 300,
				y : 200,
				border : true,
				title : '둘째 패널',
			}]
		}]
	})
})
