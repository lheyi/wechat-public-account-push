/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8237acfc25a65038',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2c7b1a5774345f9a680ca1c79ed93319',

  PROVINCE: '深圳',
  CITY: '云南',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oANw-5nb6CTPb6B6ob1N10hLo7cU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 	'7QbXcOUuuHBuWPodQQwFfFs-lyEHMqZ9SMY6Vu15vGA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '11-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '2001', date: '10-31',
        // },
        // {
        //   type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-11-11' },
      ],
    },
  ],
   SLEEP_TIME: 65000,
   TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '52fa2d8d4aabdb7036eb2bff4d223fac',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },




  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'qDxN1dvoQKd19CtuPmiAB6uXoA-eR3BBYEsvmmmI4io',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oANw-5lfOWFVbrz3SXPuPcuQAbtM',
    }
  ],

}

module.exports = USER_CONFIG

