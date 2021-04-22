/**
 * Created by Administrator on 2017-11-9.
 */

export const ERR_OK = '000000'

export const ERR_server = 'F000' //server error

export const ERR_PARMS = 'F001' //参数

// export const ERR_ERR = 'F002' //用户认证失败
export const ERR_ERR = '300000' //用户认证失败

export const ERR_TIMEOUT = 'F003' //用户信息已过期

export const ERR_CODE = 'F004' //验证码错误

export const ERR_ACC = 'F005' //无权访问

export const ERR_oldPass = 'F006' //用户旧密码错误

export const ERR_pro = 'F007' //业务错误

export const ERR_FAILSHOW = '9000001'

export const ERR_FAILTIP = '9000002'

export const ERR_FAILBACKSTAGE = 'system'

export const MESSAGE_DURATION = 2000

export const hosLv = {
  13: '一甲',
  12: '一乙',
  11: '一丙',
  23: '二甲',
  22: '二乙',
  21: '二丙',
  33: '三甲',
  32: '三乙',
  31: '三丙'
}

export const baseUrl = window.BASE_URL

export const baseImgUrl = window.IMG_URL

export const baseFileUrl = window.FILE_URL

export const coverPicUrl = window.coverPic_URL

export const phoneLength = 11

export const hosClass = [
  {label: '省级', value: 10},
  {label: '市级', value: 20},
  {label: '区/县级', value: 30},
  {label: '乡镇', value: 40}
]

export const statusCode = [
  {label: '未开始', value: 0},
  {label: '进行中', value: 1},
  {label: '已完成', value: 2},
  {label: '异常结束', value: 3}
]

export const hosImage = [
  {label: '影像', value: 0},
  {label: '报告', value: 1},

]
export const hosClassObj = {
  10: '省级',
  20: '市级',
  30: '区/县级',
  40: '乡镇'
}

export const commClass = [
  {label: '省级', value: 10},
  {label: '市级', value: 20},
  {label: '区县', value: 30}
]

export const commClassObj = {
  10: '省级',
  20: '市级',
  30: '区县'
}

export const unionClass = [
  {label: '省级', value: 10},
  {label: '市级', value: 20},
  {label: '区/县级', value: 30}
]

export const unionClassObj = {
  10: '省级',
  20: '市级',
  30: '区/县级'
}

export const hosCategory = [
  {label: '综合性医院', value: 1},
  {label: '专科医院', value: 2}
]

export const hosCategoryObj = {
  1: '综合性医院',
  2: '专科医院'
}

export const hosState = [
  {label: '启用', value: '0'},
  {label: '停用', value: '1'}
]

export const hosStateObj = {
  0: '启用',
  1: '停用'
}

export const commState = [
  {label: '正常', value: 0},
  {label: '禁用', value: 1}
]

export const commStateObj = {
  0: '正常',
  1: '禁用'
}

export const weApplyObj = {
  0: '待审核',
  1: '已签约',
  2: '已拒绝'
}

export const weApplyCOOPERATIONTYPE = {
  0: '远程报告',
  1: '远程会诊',
  2: '双向转诊',
  4: '胎心监测'
}

export const weApplyAutoFlag = {
  0: '手动申请',
  1: '自动托管'
}

export const accType = [
  {label: '管理员', value: 1},
  {label: '普通用户', value: 2}
]

export const gender = [
  {label: '男', value: 1},
  {label: '女', value: 0}
]

export const usergenderObj = {
  1: '男',
  0: '女'
}

export const usergendersex = {
  'F': '女',
  'M': '男'
}

export const disping = {
  1: '管理员',
  2: '普通用户'
}

export const privacy = [
  {label: '普通', value: 1},
  {label: '机密', value: 2}
]

export const privacyObj = {
  1: '普通',
  2: '机密'
}

export const docStateObj = {
  0: '正常',
  1: '待审核',
  2: '未通过',
  3: '未激活',
  4: '已注销',
  5: '注册待审核',
  9: '信息科医生',
  7: '已禁用'
}
export const docState = [
  {label: '正常', value: 0},
  {label: '待审核', value: 1},
  {label: '未通过', value: 2},
  {label: '未激活', value: 3},
  {label: '已注销', value: 4},
  {label: '注册待审核', value: 5},
  {label: '已禁用', value: 7},
  {label: '信息科医生', value: 9}
]
export const typeList = [
  {label: '本院', value: 1},
  {label: '所有', value: 2},
  {label: '指定机构', value: 4}
]
export const patientStatus = {
  '0': '正常',
  '1': '已激活(待审核)',
  '2': '审核未通过',
  '3': '审核通过(正常)',
  '4': '已注销 ',
  '5': '禁用 '
}
export const reportStatusList = {
  '10': '已书写',
  '50': '已审核',
  '60': '已修订',
  '81': '待会诊',
  '82': '已会诊'
}
export const clinicTypeList = {
  '99': '其他',
  '50': '门诊',
  '60': '急诊',
  '70': '体检',
  '80': 'VIP',
  '90': '预约',
  '10': '住院'
}
export const smsStatus = {
   0: '成功',
   1: '用户鉴权错误',
   2: 'IP鉴权错误',
   3: '手机号码在黑名单',
   4: '手机号码格式错误',
   5: '短信内容有误',
   7: '手机号数量超限',
   8: '账户已停用',
   9: '未知错误',
   10: '时间戳已过期',
   11: '发送频率过快',
   12: '当天发送次数超限默认10次',
   13: '内容包含敏感字',
   99: '账户余额不足'
}
export const callbackStatus = {
   0: '成功',
   1: '失败'
}
export const viewsTypeDesc = {
  '0': '-',
  '1': '已开通'
}
export const downloadStatus = {
  '0': '正在下载',
  '1': '已完成',
  '2': '下载失败'
}
export const oMapTable = {
  '北京': 'beijing',
  '黑龙江': 'heilongjiang',
  '吉林': 'jilin',
  '辽宁': 'liaoning',
  '内蒙古': 'neimenggu',
  '西藏': 'xizang',
  '新疆': 'xinjiang',
  '湖北': 'hubei',
  '湖南': 'hunan',
  '山东': 'shandong',
  '山西': 'shanxi',
  '河北': 'hebei',
  '河南': 'henan',
  '浙江': 'zhejiang',
  '安徽': 'anhui',
  '江苏': 'jiangsu',
  '陕西': 'shanxi1',
  '宁夏': 'ningxia',
  '四川': 'sichuan',
  '云南': 'yunnan',
  '贵州': 'guizhou',
  '江西': 'jiangxi',
  '上海': 'shanghai',
  '重庆': 'chongqing',
  '广西': 'guangxi',
  '广东': 'guangdong',
  '青海': 'qinghai',
  '甘肃': 'gansu',
  '福建': 'fujian',
  '台湾': 'taiwan',
  '香港': 'xianggang',
  '澳门': 'aomen',
}
export const docTitleList = {
  '00000001': '主任医师',
  '00000002': '副主任医师',
  '00000003': '主治医师',
  '00000004': '医师',
  '00000005': '医士',
  '00000006': '一级',
  '00000007': '二级',
  '00000008': '三级',
  '00000009': '未定级',
  '00000010': '高',
  '00000011': '中',
  '00000012': '低',
  '00000013': '执业助理医师',
  '00000014': '执业医师',
  '00000015': '临床',
  '00000016': '中医',
  '00000017': '口腔',
  '00000018': '公共卫生',
  '00000019': '药学',
  '00000020': '中药学',
  '00000021': '药学与中药学',
  '00000022': '药品生产',
  '00000023': '药品经营',
  '00000024': '药品使用',
}
export const oReportTypeName = {
  'RIS': '检查报告',
  'LIS': '检验报告',
  'ZYCOURSE': '出院记录'
}
export const testExplain= {
  'A1型': '下列每一道试题都有A、B、C、D、E 五个备选答案，请从中选择一个',
  'A2型': '每道试题以一个简要案例出现,其下面都有A、B、C、D、E 五个备选答案。请从中选择一个最佳答案。',
  'A3/A4型': '以下提供若干个案例，每个案例下设若干道试题。请根据案例所提供的信息，在每道试题下面的A、B、C、D、E五个备选答案中选择一个最佳答案。',
  'B1型': '以下提供若干组试题，每组试题共用在试题前列出的A、B、C、D、E五个备选答案，请从中选择一个与问题关系最密切的答案。',
  '名词解释题': '',
  '简述题': '简要回答下列各题',
  '填图题': '',
}
// 手机号正则
export const phoneReg = (/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/)
// 密码正则
export const pwdReg = (/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/)
// 身份证正则
export const idReg = (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/)
// 医院编码正则
export const hosIdReg = (/^\d{8}$/)
// 机构代码正则
export const hosCodeReg = (/^[a-zA-Z\d]{22}$/)
// 帐户名正则
export const accountReg = (/^[a-zA-Z\d]{40}$/)
// 医联体正则
export const mcReg = (/^[a-zA-Z\d]{10}$/)
// 名称正则匹配中英文和下划线
export const nameReg = (/^[a-zA-Z\u4e00-\u9fa5]+$/)
// 分类编码正则(限制数字10位数)
export const codeReg = (/^[\d]{0,10}$/)
// 邮箱正则
export const mailReg = (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/)
// url正则
export const urlReg = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/
// 只能输入数字
export const numReg = (/^[0-9]*$/)
// 科室编码正则
export const deptReg = (/^\w{1,12}$/)
// 检查类型
export const studyType = [{text: 'CT', value: 'CT'}, {text: 'DR', value: 'DR'}, {text: 'MR', value: 'MR'}, {text: 'CR', value: 'CR'}, {text: 'DX', value: 'DX'}, {text: 'SC', value: 'SC'}, {text: 'US', value: 'US'}, {text: 'MG', value: 'MG'}, {text: 'NM', value: 'NM'}, {text: 'PT', value: 'PT'}, {text: 'XA', value: 'XA'}, {text: 'RF', value: 'RF'}, {text: 'SR', value: 'SR'}, {text: 'OT', value: 'OT'}, {text: '其他', value: 'other'}]
export const medicalOrgan = {
  // 医疗机构备案管理
'medicalOrganTop': {
  'registrationNum': {
    table: 'SV_HOSPITAL',
    column: 'REGISTRATION_NUM',
    desc: '登记号',
    type: '1'
  },
  'hosName': {
    table: 'SV_HOSPITAL',
    aliases: 'hosName',
    column: 'HOS_NAME',
    desc: '机构',
    type: '1'
  },
  'hosArea': {
    table: 'SV_HOSPITAL',
    column: 'HOS_AREA',
    desc: '院区',
    type: '1'
  },
  'proviceName': {
    table: 'SV_HOSPITAL',
    column: 'PROVINCE_CODE',
    desc: '省',
    type: '1'
  },
  'cityName': {
    table: 'SV_HOSPITAL',
    column: 'CITY_CODE',
    desc: '市',
    type: '1'
  },
  'hosAddr': {
    table: 'SV_HOSPITAL',
    column: 'HOS_ADDR',
    desc: '详细地址',
    type: '1'
  },
  'hosLevel': {
    table: 'SV_HOSPITAL',
    column: 'HOS_LEVEL',
    desc: '级别',
    type: '1'
  },
  'legalPerson': {
    table: 'SV_HOSPITAL',
    column: 'LEGAL_PERSON',
    desc: '法人',
    type: '1'
  },
  'chargePerson': {
    table: 'SV_HOSPITAL',
    column: 'CHARGE_PERSON',
    desc: '负责人',
    type: '1'
  },
  'effectiveDate': {
    table: 'SV_HOSPITAL',
    column: 'EFFECTIVE_END_DATE',
    desc: '执业许可证有效期',
    type: '2'
  },
  'approvalOffice': {
    table: 'SV_HOSPITAL',
    column: 'APPROVAL_OFFICE',
    desc: '审批机关',
    type: '1'
  }
}
}
