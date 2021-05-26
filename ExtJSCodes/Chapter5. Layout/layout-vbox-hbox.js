Ext.onReady(function(){
	// vbox(vertical)/ hbox(horizontal)
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'hbox', // hbox는 horizontal, vbox는 vertical

			items : [{
				xtype : 'button',
				text: '등록'
			},{
				xtype : 'button',
				text : '목록'
			},{
				xtype : 'button',
				text : '감사'
			}]
		}]
	})
})
