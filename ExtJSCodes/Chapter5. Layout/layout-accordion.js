Ext.onReady(function(){
	// accordion
	Ext.create("Ext.container.Viewport",{
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'accordion',

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
