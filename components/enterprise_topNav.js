Vue.component("topnav",{
    template:
    `
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="navbar">
	    <div class="container">
			<a class="navbar-brand" href="javaScript:;"><strong>五仁银行</strong></a>
	        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent"
	                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
	        <div class="collapse navbar-collapse" id="navbarContent">
	            <ul class="navbar-nav ml-auto">
	                <li class="nav-item" style="margin-right: 10px">
						<a class="nav-link" @click.prevent="logout()" href="javaScript:;">登出</a>
					</li>
	                <li class="nav-item" style="margin-right: 10px">
						<a v-if="enterprise != null" class="nav-link" href="javaScript:;">{{enterprise.enterpriseName}}，欢迎您</a>
						<a v-else class="nav-link" href="javaScript:;">{{enterpriseName1}}，欢迎您</a>
					</li>
	                <li class="nav-item"><a class="nav-link" href="javaScript:;">消息</a></li>
	            </ul>
	        </div>
	    </div>
	</nav>
    `,
    data:function(){
        return{
			enterprise: JSON.parse(sessionStorage.getItem("enterprise")),
			enterpriseName1: "公司名"
        }
    },
    methods:{
        logout:function(){
            var enterpriseId = this.enterprise.enterpriseId;
			enterpriseLogout(enterpriseId).then(res => {
				var result = res.data.data;
				if (result.errno == 0) {
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("enterprise");
					location.href = "/enterprise_login.html"
				} else{
					alert(result.errmsg)
				}
			})
        }
    }
})
