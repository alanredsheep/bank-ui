function narnSuccess (type) {
		 
		naranja()[type]({

		  title: '新消息提示',
		  text: '您申请的升级卡操作已通过',
		  timeout: 'keep',
		  buttons: [{
			text: '接受',
			click: function (e) {
			  naranja().success({
				title: '通知',
				text: '通知被接受'
			  })
			}
		  },{
			text: '取消',
			click: function (e) {
			  e.closeNotification()
			}
		  }]
		})
	  }
	  function narnError (type) {
		 
		naranja()[type]({

		  title: '新消息提示',
		  text: '您申请的升级卡操作失败',
		  timeout: 'keep',
		  buttons: [{
			text: '接受',
			click: function (e) {
			  naranja().success({
				title: '通知',
				text: '通知被接受',
				
			  })
			}
		  },{
			text: '取消',
			click: function (e) {
			  e.closeNotification()
			 
			}
		  }]
		})
	  }