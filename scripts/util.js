//工具类js
//重复代码请提交此处
//当点击选择银行时调用，查询所有合作银行
function selectSubordinateBanks() {
    if (sessionStorage.getItem("subordinateBank") == null || sessionStorage.getItem("subordinateBank") == "") {
        selectSubordinateBank().then(res => {
            sessionStorage.removeItem("subordinateBank");
            // 讲查询出来的值放入
            sessionStorage.setItem("subordinateBank", res.data.data.data);
            //测试
            //页面查询时：     this.subordinateBank = JSON.parse(sessionStorage.getItem("subordinateBank"));
            // console.log(res.data.data.data);
            // console.log(_this.subordinateBank);
        })
    }
    //调用api.1.js中方法查询
}