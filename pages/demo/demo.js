// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo1:"/image/3.jpg"
  },
  handts(e){
   
    this.startTime = e.timeStamp,
    console.log("startTime =" + e.timeStamp)
  },
  handend(e){
    this.endTime = e.timeStamp;
    console.log("endTime =" + e.timeStamp)
  },
  bindViewTap(){
    
      var timer = Math.round(this.endTime - this.startTime)/1000%9;
      console.log(timer)
      // var timer = timerr.substring(timerr.length - 4);
      switch(true){
        case timer < 2:
          this.setData({
            userInfo1:"/image/6.png"
          })
          break;
          case 2 < timer && timer < 4:
            this.setData({
              userInfo1:"/image/7.png"
            })
            break;
            case 4 < timer && timer < 6:
              this.setData({
                userInfo1:"/image/8.png"
              })
              break;
            case 7 < timer && timer < 9:
              this.setData({
                userInfo1:"/image/9.png"
              })
              break;
            default : break;
      }
      
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})