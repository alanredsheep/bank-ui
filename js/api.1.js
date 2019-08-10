//用于编写AJAX(更加利于路径的处理)
/* 所有ajax的代码写到这里 */
axios.defaults.baseURL='http://localhost:10010/v1'
// 设置AJAX超时时间
axios.defaults.timeout = 3000
// 设置提交数据时的格式
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置前置拦截器->以后所有的AJAX都会自动添加上 Authorization:token 的协议头
axios.interceptors.request.use(function (config) {
    // 判断如果用户登录了就把 token 配置上 axios 的协议头中
    var token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    // 处理请求前代码
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


//---------------------chang_phone.html  start--------------------
//修改手机号----发送验证码
function updatePhoneSms(params){
	return axios.post("/web-service/updatePhoneSms",params);
}
//修改手机号----验证验证码是否正确
function updatePhoneVerify(params){
	return axios.post("/web-service/updatePhoneVerify",params);
}
//修改手机号----修改手机
function updatePhone(params){
	return axios.post("/web-service/updatePhone",params);
}
//---------------------chang_phone.html  end--------------------

//---------------------chang_password.html  start--------------------
//修改密码----发送验证码
function updatePasswordSms(params){
	return axios.post("/web-service/updatePasswordSms",params);
}

//修改密码----验证验证码是否正确
function updatePasswordVerify(params){
	return axios.post("/web-service/updatePasswordVerify",params);
}

//修改密码----修改密码
function updateBankUserPassword(params){
	return axios.post("/web-service/updateBankUserPassword",params);
}
//---------------------chang_password.html  end--------------------



//登录
function login(params){
    return axios.post("/web-service/query", params);
}
function findByphone(params){
    return axios.post("/web-service/findByphone",params);
}
//用于编写ajax（更加利于路径管理）
//注册
function regist(params){
    return axios.post("/web-service/regist", params );
}

//注册--发送验证码
function sms(phone){
    return axios.post("/web-service/sms",{"phone":phone});
}
//改密码--发送验证码
function sms2(phone){
    return axios.post("/web-service/sms2",{"phone":phone});
}

//改密码
function updatePassword(params){
    return axios.post("/web-service/updatePassword",params);
}
//查询分类
function findClassifications(){
    return axios.get("/web-service/findClassifications");
}

//查询商品
function searchCommoditys(commodity){
    return axios.post("/web-service/search",commodity);
}

//查询资源
function findAllResources(){
    return axios.get("/web-service/findAllResources");
}
//查询所有采购信息
function findAllPurchases(cur){

    return axios.get("/web-service/findAllPurchases/"+cur);
}
//查询采购信息详情
function findPurchasesByid(params){
    return axios.post("/web-service/findPurchasesByid",params);
}
//查询正在进行的采购信息
function findBystate(curr){
   
    return axios.get("/web-service/findBystate/"+curr);
}
//查询结束的采购信息
function findBystateEnd(endcur){
    return axios.get("/web-service/findBystateEnd/"+endcur);
}

//根据手机获取用户信息
function getUserByPhone(params){
    return axios.post("/web-service/getUserByPhone",params);
}

//修改用户基本信息
function changeUserInfo(params) {
    return axios.post("/web-service/changeUserInfo",params);
}
//绑定账户时获取验证码
function sendSms3(params){
    return axios.post("/web-service/sms3",params);
}
//保存银行账户信息
function saveBank(params){
    return axios.post("/web-service/saveBank",params);
}

//上传头像
function uploadImage(params,config) {
    return axios.post("/web-service/uploadImage",params,config);
}

//发布资源单
function releasePurchase(params) {
    return axios.post("/web-service/releasePurchase",params);
}

//采购页面的右侧热门采购清单
function findSortPurchases() {
    return axios.get("/web-service/findSortPurchases");
}

//查询自已的报价单
function searchQuotation(params) {
    return axios.post("/web-service/searchQuotation",params);
}

//提交报价单
function saveQuotation(params) {
    return axios.post("/web-service/saveQuitation",params);
}

//
function findCommoditityById(params) {
    return axios.post("/web-service/findCommoditityById",params);
}
