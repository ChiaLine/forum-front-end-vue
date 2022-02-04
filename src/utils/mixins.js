// 引入套件
import moment from "moment";
// 導出重複使用程式碼
export const fromNowFilter = {
  filters: {
    fromNow(datatime) {
      return datatime ? moment(datatime).fromNow() : '-'
    }
  }
}