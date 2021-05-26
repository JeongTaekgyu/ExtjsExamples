Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		renderTo: Ext.getBody(),
		layout : 'border',
		border : true,
		items : [{
			xtype : 'panel',
			flex : 2,
			border : true,
			region : 'north',
			title : '패널 north',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'west',
				title : '패널 north-west'
			},{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center',
				title : '패널 north-center'
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'south',
				title : '패널 north-south'
			}]
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'west',
			title : '패널 west'
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'center',
			title : '패널 center',
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'east',
			title : '패널 east',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : 'north',
				title : 'east-north'
			},{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center',
				title : 'east-center'
			}]
		},{
			xtype : 'panel',
			flex : 1,
			border : true,
			region : 'south',
			title : '패널 south'
		}]
	})
})
