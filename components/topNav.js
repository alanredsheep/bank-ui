Vue.component("topnav",{
    template:
    `
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="navbar">
	    <div class="container">
			<a class="navbar-brand" href="home.html"><strong>五仁银行</strong></a>
	        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent"
	                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
	        <div class="collapse navbar-collapse" id="navbarContent">
	            <ul class="navbar-nav ml-auto">
	                <li class="nav-item" style="margin-right: 10px"><a class="nav-link" @click.prevent="logout()" href="javaScript:;">登出</a></li>
	                <li class="nav-item" style="margin-right: 10px"><a class="nav-link" href="personal_center.html">{{userName}}，欢迎您</a></li>
	                <li class="nav-item"><a class="nav-link" href="message.html">消息 <span class="badge" style="font-size: 15px">112</span></a></li>
	            </ul>
	        </div>
	    </div>
	</nav>
    `,
    data:function(){
        return{
            //userName:localStorage.getItem("userName")
			userName:"pds",
			user: JSON.parse(sessionStorage.getItem("user"))
        }
    },
    methods:{
        logout:function(){
            var userId = 23;
			logout(23).then(res => {
				var result = res.data.data;
				if (result.errno == 0) {
					localStorage.removeItem("token");
					sessionStorage.removeItem("user");
					sessionStorage.removeItem("bankCards");
					sessionStorage.removeItem("otherBankCards");
					location.href = "login.html"
				} else{
					alert(result.errmsg)
				}
			})
        }
    }
})