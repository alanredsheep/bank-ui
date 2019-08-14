//用于编写AJAX(更加利于路径的处理)
/* 所有ajax的代码写到这里 */
axios.defaults.baseURL = 'http://127.0.0.1:10010/v1'
// 设置AJAX超时时间
axios.defaults.timeout = 30000
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



//--------------------- login.html  start --------------------
//登录----发送验证码
function loginSms(params){
	return axios.post("/web-service/sendSms",params);
}
//登录----通过密码登录
function loginByPassword(params){
	return axios.post("/auth-service/login",params);
}
//登录----通过验证码登录
function loginByAuthCode(params){
	return axios.post("/auth-service/loginBySendSms",params);
}

//--------------------- login.html  end --------------------


//--------------------- chang_phone.html  start --------------------
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
//--------------------- chang_phone.html  end --------------------

//--------------------- chang_password.html  start --------------------
//修改密码----发送验证码
function updatePasswordSms(params) {
    return axios.post("/web-service/updatePasswordSms", params);
}
//修改密码----验证验证码是否正确
function updatePasswordVerify(params) {
    return axios.post("/web-service/updatePasswordVerify", params);
}
//修改密码----修改密码
function updateBankUserPassword(params) {
    return axios.post("/web-service/updateBankUserPassword", params);
}
//--------------------- chang_password.html  end --------------------

// -----------------transfer_record.html    start--------------
// 获取选定月份和银行卡的转账记录
function getTransferRecord(params) {
    return axios.get("/web-service/getTransferRecordList",{params:params});
}

function getBankCardsByUserId(params) {
    return axios.get("/web-service/getBankCardByUserId",{params:params});
}
// -----------------transfer_record.html    end--------------


//-----------------fund_collection.html    start----------------------
// 根据归集计划id，返回归集记录
function getFundCollectionRecordByInCardAndOutCard(params) {
    return axios.get("/web-service/getFundCollectionRecordByInCardAndOutCard", params);
}
//-----------------fund_collection.html    end----------------------


//----------------bank_card_manage.html   start---------------
function upgradeBankCard() {
    return axios.post("/web-service/upgradeBankCard", params);
}

function untiedBankCard() {
    return axios.post("",params);
}


//----------------transfer.html   start-------单次转账页面--------
//查询出所有所属银行的方法
function selectSubordinateBank(){
     return axios.get("/web-service/getAllSubordinateBank")
}
// selectBankCardAttribution



//----------------transfer.html   end---------------

//----------------transfer_cross_border.html   start-------跨境转账页面--------
//查询汇率
function getExchangeRate(params){
    return axios.post("/web-service/getExchangeRate",params)
}
//查询用户所持有的本行卡
function getBankCardByUser(params){
    return axios.post("/web-service/getBankCardByUser",params)
}
//转账
function CrossBorderTransfer(params){
    return axios.post("/web-service/CrossBorderTransfer",params)
}
//根据人民币查询外币
function getExchangeRatePrice(price,type){
    return axios.get("/web-service/getExchangeRatePrice/"+price+"/"+type)
}
//根据外币查询人民币getExchangeRateCNY
function getExchangeRateCNY(price,type){
    return axios.get("/web-service/getExchangeRateCNY/"+price+"/"+type)
}
//----------------transfer_cross_border.html   end---------------

//----------------bank_card_add_limit.html   start-------升级卡类型--------
//通过银行卡id查询银行卡信息
function getBankCardBybankCardId(bankCardId){
    return axios.get("/web-service/getBankCardBybankCardId/"+bankCardId)
}
//发短信
function sendUpgradeCard(bankCardId){
    return axios.get("/web-service/sendUpgradeCard/"+bankCardId)
}
//申请
function UpgradeCard(params){
    return axios.post("/web-service/UpgradeCard",params)
}

//----------------bank_card_add_limit.html   end---------------