Ext.onReady(function(){
	// center
	Ext.create("Ext.container.Viewport",{
		//renderTo : Ext.getBody(),
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'center',
			items : [{
				xtype : 'panel',
				width : 300,
				height : 200,
				border : true,
				title : '첫째 패널',
				items : [{
					xtype : 'textfield'
				},{
					xtype : 'textfield'
				},{
					xtype : 'button',
					text : '로그인'
				}]
			}]
		}]
	})
})
