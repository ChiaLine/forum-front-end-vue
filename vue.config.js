module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/forum-front-end-vue/'
    : '/'
}
// 在發布前，要注意檔案路徑位置會有不同的設定
// https://chialine.github.io/forum-front-end-vue/