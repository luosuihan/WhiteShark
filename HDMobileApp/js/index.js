//mui初始化
<<<<<<< HEAD
mui.init({
	preloadPages: [{
		url: 'home_copy.html',
		id: 'home_copy.html',
		styles: {}, //窗口参数
		extras: {}, //自定义扩展参数
		subpages: [{}, {}] //预加载页面的子页面
	}],
	preloadLimit: 5 //预加载窗口数量限制(一旦超出,先进先出)默认不限制
});
var subpages = ['home_copy.html', 'trend.html', 'find.html', 'mine_new.html'];
var subpage_style = {
	top: '0px',
	bottom: '51px'
};
var aniShow = {};

//创建子页面，首个选项卡页面显示，其它均隐藏；
mui.plusReady(function() {
	document.addEventListener("plusready", function() {
		message = document.getElementById("message");
		// 监听点击消息事件
		plus.push.addEventListener("click", function(msg) {
			// 判断是从本地创建还是离线推送的消息
			switch(msg.payload) {
				case "LocalMSG":
					outSet("点击本地创建消息启动：");
					break;
				default:
					outSet("点击离线推送消息启动：");
					break;
			}
			// 提示点击的内容
			plus.ui.alert(msg.content);
			// 处理其它数据
			logoutPushMsg(msg);
		}, false);
		// 监听在线消息事件
		plus.push.addEventListener("receive", function(msg) {
			if(msg.aps) { // Apple APNS message
				alert('接收到在线APNS消息');
				outSet("接收到在线APNS消息：");
			} else {
				alert('接收到在线透传消息');
				outSet("接收到在线透传消息：");
			}
			logoutPushMsg(msg);
		}, false);
	}, false);

	var self = plus.webview.currentWebview();
	for(var i = 0; i < 4; i++) {
		var temp = {};
		var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
		if(i > 0) {
			sub.hide();
		} else {
			temp[subpages[i]] = "true";
			mui.extend(aniShow, temp);
		}
		self.append(sub);
	}
});
//当前激活选项
var activeTab = subpages[0];
//选项卡点击事件
mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var targetTab = this.getAttribute('href');
	if(targetTab == activeTab) {
		return;
	}
	//显示目标选项卡
	//若为iOS平台或非首次显示，则直接显示
	if(mui.os.ios || aniShow[targetTab]) {
		plus.webview.show(targetTab);
	} else {
		//否则，使用fade-in动画，且保存变量
		var temp = {};
		temp[targetTab] = "true";
		mui.extend(aniShow, temp);
		plus.webview.show(targetTab, "fade-in", 300);
	}
	//隐藏当前;
	plus.webview.hide(activeTab);
	//更改当前活跃的选项卡
	activeTab = targetTab;
});
//			 //自定义事件，模拟点击“首页选项卡”
//			document.addEventListener('gohome', function() {
//				var defaultTab = document.getElementById("defaultTab");
//				//模拟首页点击
//				mui.trigger(defaultTab, 'tap');
//				//切换选项卡高亮
//				var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
//				if (defaultTab !== current) {
//					current.classList.remove('mui-active');
//					defaultTab.classList.add('mui-active');
//				}
//			});
=======
			mui.init({
				preloadPages: [{
					url: 'home_copy.html',
					id: 'home_copy.html',
					styles: {}, //窗口参数
					extras: {}, //自定义扩展参数
					subpages: [{}, {}] //预加载页面的子页面
				}],
				preloadLimit: 5 //预加载窗口数量限制(一旦超出,先进先出)默认不限制
			});
			var subpages = ['home_copy.html', 'collection.html','mine_new.html'];
			var subpage_style = {
				top: '0px',
				bottom: '51px'
			};
			var aniShow = {};

			//创建子页面，首个选项卡页面显示，其它均隐藏；
			mui.plusReady(function() {
				var self = plus.webview.currentWebview();
				for(var i = 0; i < 5; i++) {
					var temp = {};
					var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
					if(i > 0) {
						sub.hide();
					} else {
						temp[subpages[i]] = "true";
						mui.extend(aniShow, temp);
					}
					self.append(sub);
				}
			});
			//当前激活选项
			var activeTab = subpages[0];
			//选项卡点击事件
			mui('.mui-bar-tab').on('tap', 'a', function(e) {
				var targetTab = this.getAttribute('href');
				if(targetTab == activeTab) {
					return;
				}
				//显示目标选项卡
				//若为iOS平台或非首次显示，则直接显示
				if(mui.os.ios || aniShow[targetTab]) {
					plus.webview.show(targetTab);
				} else {
					//否则，使用fade-in动画，且保存变量
					var temp = {};
					temp[targetTab] = "true";
					mui.extend(aniShow, temp);
					plus.webview.show(targetTab, "fade-in", 300);
				}
				//隐藏当前;
				plus.webview.hide(activeTab);
				//更改当前活跃的选项卡
				activeTab = targetTab;
			});
			//			 //自定义事件，模拟点击“首页选项卡”
			//			document.addEventListener('gohome', function() {
			//				var defaultTab = document.getElementById("defaultTab");
			//				//模拟首页点击
			//				mui.trigger(defaultTab, 'tap');
			//				//切换选项卡高亮
			//				var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
			//				if (defaultTab !== current) {
			//					current.classList.remove('mui-active');
			//					defaultTab.classList.add('mui-active');
			//				}
			//			});
>>>>>>> 69c9270b129a9242b4a49ae14ccc771b00d92b7b
