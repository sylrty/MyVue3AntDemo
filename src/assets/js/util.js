export function saveLocalStorage(data, dataName) {
    if (JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]') {
      return
    }
    localStorage.setItem(dataName, JSON.stringify(data))
  }
  
  export function getLocalStorage(dataName) {
    if (localStorage.getItem(dataName) == 'undefined') {
      return ''
    }
    return JSON.parse(localStorage.getItem(dataName))
  }
  
  export function clearLocalStorage(dataName) {
    localStorage.removeItem(dataName)
  }
  
  /**
 * Created by Administrator on 2017-11-27.
 */
export function nomalTime(date, hasHMS) {
    var time = new Date(date)
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    if (y.toString().includes('NaN')) {
      return ''
    }
    if (hasHMS) {
      return `${y}-${add0(m)}-${add0(d)} ${add0(h)}:${add0(mm)}:${add0(s)}`
    } else {
      return `${y}-${add0(m)}-${add0(d)}`
    }
  }
  
  export function add0(m) {
    return m < 10 ? '0' + m : m
  }
  
  export function gelinToNomalTime(time) {
    return [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('-')
  }
  
  /**
   * 时间格式化方法
   * @param time 时间戳
   * @param fmt 时间格式
   * @return 对于格式的时间
   */
  export function format(time, fmt) {
    if (!time) return ''
    let f = fmt || 'yyyy-MM-dd'
    let date = new Date(time)
    let obj = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    if (/(y+)/.test(f)) {
      f = f.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
    }
    for (let k in obj) {
      if (new RegExp(`(${k})`).test(f)) {
        let s = `00${obj[k]}`
        f = f.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[k] : s.substr(s.length - 2))
      }
    }
    return f
  }
  
  export const  getNewDateMinusMonth=(startTime,cutMonth)=>{
    if(!startTime){
      console.error("请出入开始日期")
    }else if( !startTime instanceof Date){
      console.error("传入日期错误")
    }  
    const startYear = startTime.getFullYear();     //年
    const startMonth = startTime.getMonth() + 1;    //月
    let startGetDate = startTime.getDate();        //日
  
    let afterMonth = Number(startMonth)-(Number(cutMonth)%12); //相减后的月份
    let cutYear =Math.floor(Number(cutMonth)/12);//向下取整 需要减去的年份
    if(afterMonth < 0 ){
      afterMonth = 12 +afterMonth ;
      cutYear = cutYear+1;//相减后的月份小于0  说明需要先前推一年;
    }else if(afterMonth == 0 ){
      afterMonth = 12;
      cutYear = cutYear+1;//相减后的月份等于0  说明需要先前推一年;
    }
    const afterYear = Number(startYear) - cutYear;
  
    //根据月份判断日期是否需要变化
    if(afterMonth === 2){//如果是2月份 需要查看日期是否超过28号
      startGetDate > 28 ?startGetDate = 28 : startGetDate;
    }else if([4,6,9,11].indexOf(afterMonth) !== -1){
      startGetDate > 30 ?startGetDate = 30 : startGetDate;
    }
  
    var afterDate = new Date(afterYear,afterMonth -1,startGetDate);
    return afterDate;
  }
  //获取cookie、
export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
   document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};
