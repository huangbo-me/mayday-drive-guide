export const beijingGrasslandTrip = {
  id: "beijing-grassland-mayday",
  branding: {
    eyebrow: "Scenic Road Trip Deck",
    modeLabel: "五一主线",
    badge: "家庭分享版"
  },
  hero: {
    title: "北京出发｜乌兰布统+达达线+玉龙沙湖 5天4晚自驾攻略",
    subtitle: "反向出游，不赶路，草原+公路+沙漠轻体验。路线核心是把风景、公路和家庭体力分配到舒服的节奏里。",
    tags: ["4月29日 - 5月3日", "2大1小 / 小孩6岁", "草原 + 公路 + 沙漠", "家庭分享版"],
    coverImage: "/covers/beijing-grassland.svg",
    coverAlt: "草原公路与沙漠主题封面插画",
    metrics: [
      { label: "总车程节奏", value: "不天天赶路" },
      { label: "最关键一天", value: "Day3 早出发" },
      { label: "住宿策略", value: "2晚草原 + 1晚林西 + 1晚翁牛特旗" }
    ]
  },
  summary: {
    totalDays: "5天4晚",
    audience: "家庭自驾",
    statement: "这趟路线不是景点密度最大，而是更适合带孩子慢慢走。乌兰布统留完整体验日，最长车程集中在 Day3，再用林西和翁牛特旗把后段强度缓下来。"
  },
  overview: [
    { label: "总天数", value: "5天4晚" },
    { label: "核心路线", value: "北京 → 乌兰布统 → 达达线 → 林西 → 玉龙沙湖 → 北京" },
    { label: "住宿策略", value: "乌兰布统2晚 + 林西1晚 + 翁牛特旗1晚" },
    { label: "适合人群", value: "家庭自驾、2大1小、不想特种兵" }
  ],
  stayStrategy: {
    title: "住宿策略：2晚草原 + 1晚林西 + 1晚翁牛特旗",
    subtitle: "把酒店节点放在最该恢复体力和补给的位置，而不是一味追求住在景区门口。",
    items: [
      "乌兰布统连住2晚，减少折腾，第二天草原慢玩最舒服。",
      "林西住1晚，承接达达线/热阿线整段长距离驾驶。",
      "翁牛特旗住1晚，替代玉龙沙湖高价景区酒店。",
      "全程不频繁换酒店，适合2大1小家庭自驾。"
    ]
  },
  storyBlocks: [
    {
      title: "路线节奏",
      text: "前两天留给草原，给家庭情绪和车程疲劳一个缓冲，再把真正长的风景公路压缩进单独一天。"
    },
    {
      title: "住哪里",
      text: "住宿围绕第二天怎么出发、晚上怎么补给来安排，不为所谓“最近”多付不必要的成本。"
    },
    {
      title: "这次怎么住",
      text: "乌兰布统连住两晚，林西承接最累的一天，翁牛特旗解决沙湖后的住宿成本和补给问题。"
    }
  ],
  actions: {
    rawLodgingUrl: "https://fg.asczxcefsv.com/app/trip/rx-journey-share/pages/journey-share-backflow?__password=%EF%BF%A5Odqm5QsKdUU%EF%BF%A5&disableNav=YES&shareId=weixin_friend_card&shareSpm=181.8127507&titleBarHidden=2&token=lzGVCnjheTchAMteQugwrjQkZrfhYNyZYoFlKDRq&sb_redirect_auto=1&push_flag=1&_projVer=1.7.2"
  },
  days: [
    {
      id: "day1",
      label: "Day1",
      date: "4月29日",
      color: "#2f6df6",
      route: "北京 → 乌兰布统",
      drive: "约 6.5–8 小时",
      play: "抵达草原后休整，傍晚简单拍照，不赶景点。",
      lodging: "喆啡酒店·赤峰市乌兰布统景区店，连住2晚",
      note: "第一天目标是稳稳到达，别把体力交代在高速上。",
      lodgingInfo: {
        location: "乌兰布统",
        hotel: "喆啡酒店·赤峰市乌兰布统景区店",
        address: "乌兰布统红山军马场贵宾街三号",
        reason: "抵达后直接入住，连住两晚，让第二天的草原体验不再夹杂收拾行李和赶出发时间。",
        next: "Day2 在乌兰布统周边慢玩，孩子状态和天气都能灵活调整。"
      },
      timeline: [
        { time: "07:00", title: "北京出发", text: "尽量早出城，午后前完成大部分高速路段。" },
        { time: "12:30", title: "服务区午餐", text: "选择停留条件更好的服务区，顺带补水和活动腿脚。" },
        { time: "16:30", title: "抵达乌兰布统", text: "先办理入住，孩子先休息，大人再慢慢收尾当天驾驶。" },
        { time: "18:00", title: "草原轻拍照", text: "傍晚只做轻量活动，给第二天留体力。 " }
      ],
      segments: [[[39.9042, 116.4074], [42.2637, 117.2022], [42.9417, 117.5318]]],
      points: [
        { name: "北京", type: "city", latlng: [39.9042, 116.4074], desc: "五一自驾出发点，建议尽量早上路。", gaode: "https://uri.amap.com/marker?position=116.4074,39.9042&name=%E5%8C%97%E4%BA%AC&src=trip-guide" },
        { name: "乌兰布统", type: "city", latlng: [42.9417, 117.5318], desc: "前两天草原体验核心区域。", gaode: "https://uri.amap.com/marker?position=117.5318,42.9417&name=%E4%B9%8C%E5%85%B0%E5%B8%83%E7%BB%9F&src=trip-guide" },
        { name: "喆啡酒店·赤峰市乌兰布统景区店", type: "hotel", latlng: [42.9448, 117.5365], checkIn: "4月29日 / 4月30日", hotelName: "喆啡酒店·赤峰市乌兰布统景区店", address: "乌兰布统红山军马场贵宾街三号", reason: "连住两晚，核心是减少折腾，把草原游变成真正放松的开始。", nextLink: "第二天继续在景区附近慢玩，不用为跨城路程早起。", gaode: "https://uri.amap.com/search?keyword=%E5%96%86%E5%95%A1%E9%85%92%E5%BA%97%20%E8%B5%A4%E5%B3%B0%E5%B8%82%E4%B9%8C%E5%85%B0%E5%B8%83%E7%BB%9F%E6%99%AF%E5%8C%BA%E5%BA%97&view=map&src=trip-guide" }
      ]
    },
    {
      id: "day2",
      label: "Day2",
      date: "4月30日",
      color: "#279764",
      route: "乌兰布统全天慢玩",
      drive: "景区内轻松游",
      play: "公主湖、影视基地、草原随停随拍。",
      lodging: "继续住喆啡酒店·赤峰市乌兰布统景区店",
      note: "这一天的意义就是不挪窝，给风景和孩子情绪都留松弛感。",
      lodgingInfo: {
        location: "乌兰布统",
        hotel: "继续住喆啡酒店·赤峰市乌兰布统景区店",
        address: "乌兰布统红山军马场贵宾街三号",
        reason: "不换酒店，减少频繁收拾，适合带孩子的真实旅行节奏。",
        next: "Day3 一早直接从乌兰布统出发去达里湖和达达线，衔接更利索。"
      },
      timeline: [
        { time: "09:00", title: "睡到自然醒", text: "前一天长途后，第二天不要强行早起抢景点。 " },
        { time: "10:30", title: "公主湖", text: "安排成当天第一个正式点位，轻松进入草原节奏。" },
        { time: "14:00", title: "影视基地", text: "看天气和现场状态决定停留时长，不做紧张打卡。 " },
        { time: "17:30", title: "草原随停随拍", text: "把这段时间留给最自由的草原体验。 " }
      ],
      segments: [[[42.9417, 117.5318], [42.979, 117.421], [42.915, 117.486], [42.9417, 117.5318]]],
      points: [
        { name: "公主湖", type: "sight", latlng: [42.979, 117.421], desc: "适合轻松拍照，不需要特种兵节奏。", gaode: "https://uri.amap.com/marker?position=117.421,42.979&name=%E5%85%AC%E4%B8%BB%E6%B9%96&src=trip-guide" },
        { name: "影视基地", type: "sight", latlng: [42.915, 117.486], desc: "可灵活停留的经典草原打卡点。", gaode: "https://uri.amap.com/marker?position=117.486,42.915&name=%E5%BD%B1%E8%A7%86%E5%9F%BA%E5%9C%B0&src=trip-guide" }
      ]
    },
    {
      id: "day3",
      label: "Day3",
      date: "5月1日",
      color: "#d74b45",
      route: "乌兰布统 → 达里湖 → 达达线 → 热阿线 → 林西",
      drive: "纯开约 6 小时，含游玩约 8–10 小时",
      play: "达里湖看湖景，达达线和热阿线重点看公路风景，沿途少量停车拍照。",
      lodging: "汉庭赤峰林西振兴楼酒店",
      note: "全程最累的一天，7:30 前出发，提前加满油，带路餐，不建议开夜路。",
      lodgingInfo: {
        location: "林西县",
        hotel: "汉庭赤峰林西振兴楼酒店",
        address: "林西县金城街21号，海川广场东侧",
        reason: "长距离驾驶后优先恢复体力。城市配套完整，第二天去沙湖压力更小。",
        next: "Day4 到玉龙沙湖只有 2–2.5 小时，可以把精力留给沙漠轻体验。"
      },
      timeline: [
        { time: "07:10", title: "早点出发", text: "把最累的一天尽量往白天前半段推进，避免后程压到天黑。" },
        { time: "10:00", title: "达里湖短停", text: "控制停留时长，主要看湖景和换换驾驶状态。" },
        { time: "13:30", title: "达达线 / 热阿线路餐", text: "午餐不追求正式餐厅，确保补能和不耽误路程。 " },
        { time: "18:00", title: "抵达林西入住", text: "这天结束后优先洗漱和吃顿热乎饭。 " }
      ],
      segments: [[[42.9417, 117.5318], [43.3543, 116.6718], [43.2716, 117.002], [43.1275, 117.411], [43.6064, 118.0556]]],
      points: [
        { name: "达里湖", type: "sight", latlng: [43.3543, 116.6718], desc: "Day3 的第一个重点停留点，时间不宜拖长。", gaode: "https://uri.amap.com/marker?position=116.6718,43.3543&name=%E8%BE%BE%E9%87%8C%E6%B9%96&src=trip-guide" },
        { name: "达达线观景点", type: "sight", latlng: [43.2716, 117.002], desc: "草原公路代表路段，适合短暂停车看线条感。", gaode: "https://uri.amap.com/marker?position=117.002,43.2716&name=%E8%BE%BE%E8%BE%BE%E7%BA%BF%E8%A7%82%E6%99%AF%E7%82%B9&src=trip-guide" },
        { name: "热阿线观景点", type: "sight", latlng: [43.1275, 117.411], desc: "起伏感强，尽量不要拖到天晚。", gaode: "https://uri.amap.com/marker?position=117.411,43.1275&name=%E7%83%AD%E9%98%BF%E7%BA%BF%E8%A7%82%E6%99%AF%E7%82%B9&src=trip-guide" },
        { name: "林西县", type: "city", latlng: [43.6064, 118.0556], desc: "Day3 补给与住宿节点。", gaode: "https://uri.amap.com/marker?position=118.0556,43.6064&name=%E6%9E%97%E8%A5%BF%E5%8E%BF&src=trip-guide" },
        { name: "汉庭赤峰林西振兴楼酒店", type: "hotel", latlng: [43.6087, 118.0501], checkIn: "5月1日", hotelName: "汉庭赤峰林西振兴楼酒店", address: "林西县金城街21号，海川广场东侧", reason: "承接整趟最辛苦的一天，先保证睡好、补给好。", nextLink: "次日去玉龙沙湖路程明显变轻，大人孩子都更舒服。", gaode: "https://uri.amap.com/search?keyword=%E6%B1%89%E5%BA%AD%E8%B5%A4%E5%B3%B0%E6%9E%97%E8%A5%BF%E6%8C%AF%E5%85%B4%E6%A5%BC%E9%85%92%E5%BA%97&city=%E8%B5%A4%E5%B3%B0&view=map&src=trip-guide" }
      ]
    },
    {
      id: "day4",
      label: "Day4",
      date: "5月2日",
      color: "#f08f2e",
      route: "林西 → 玉龙沙湖 → 翁牛特旗县城",
      drive: "约 2–2.5 小时",
      play: "沙漠徒步、滑沙、拍照、可选骑骆驼，不玩越野车。",
      lodging: "翁牛特旗天玺四合院酒店",
      note: "不住景区集装箱酒店，回县城住宿更划算，补给和吃饭也更方便。",
      lodgingInfo: {
        location: "翁牛特旗县城",
        hotel: "翁牛特旗天玺四合院酒店",
        address: "乌丹镇全宁旅游文化产业园区蒙古王城院内B12-B20、B35...",
        reason: "避免景区高价酒店，把预算留给真正要玩的内容，晚上补给条件也更好。",
        next: "Day5 返京前不需要再在景区里折腾，县城直接出发更稳妥。"
      },
      timeline: [
        { time: "08:30", title: "林西早餐后出发", text: "相较 Day3 可以明显放慢节奏，不用给自己太大压迫感。" },
        { time: "11:00", title: "玉龙沙湖入园", text: "优先沙漠徒步、滑沙和轻拍照，不安排越野车。 " },
        { time: "15:30", title: "离开景区", text: "保留足够时间回县城吃饭和休息。 " },
        { time: "18:00", title: "县城入住", text: "把返京前最后一晚放在补给便利的县城。 " }
      ],
      segments: [[[43.6064, 118.0556], [42.9758, 118.8794], [42.9368, 119.0068]]],
      points: [
        { name: "玉龙沙湖", type: "sight", latlng: [42.9758, 118.8794], desc: "以轻体验为主，徒步、滑沙和拍照优先。", gaode: "https://uri.amap.com/marker?position=118.8794,42.9758&name=%E7%8E%89%E9%BE%99%E6%B2%99%E6%B9%96&src=trip-guide" },
        { name: "翁牛特旗天玺四合院酒店", type: "hotel", latlng: [42.9368, 119.0068], checkIn: "5月2日", hotelName: "翁牛特旗天玺四合院酒店", address: "乌丹镇全宁旅游文化产业园区蒙古王城院内B12-B20、B35...", reason: "回到县城住，整体性价比和补给条件都更好。", nextLink: "第五天返京前直接在县城出发，节奏更稳。", gaode: "https://uri.amap.com/search?keyword=%E7%BF%81%E7%89%9B%E7%89%B9%E6%97%97%E5%A4%A9%E7%8E%BA%E5%9B%9B%E5%90%88%E9%99%A2%E9%85%92%E5%BA%97&city=%E8%B5%A4%E5%B3%B0&view=map&src=trip-guide" }
      ]
    },
    {
      id: "day5",
      label: "Day5",
      date: "5月3日",
      color: "#7b58da",
      route: "翁牛特旗 / 玉龙沙湖 → 北京",
      drive: "约 7–8 小时",
      play: "返程为主，建议中途服务区休息 2 次。",
      lodging: "不住宿，返程北京",
      note: "早点出发，返程不贪快，安全和舒适优先。",
      lodgingInfo: {
        location: "北京",
        hotel: "返程回家",
        reason: "最后一天不再加酒店节点，把精力完全放在返程驾驶和服务区休息上。",
        next: "返京后安排轻松晚餐和休息，让整趟行程完整收口。"
      },
      timeline: [
        { time: "07:30", title: "早餐后返京", text: "越早出发越容易把长途返程切分得更从容。 " },
        { time: "11:00", title: "第一次服务区休息", text: "下车活动、补水、给孩子一个缓冲。 " },
        { time: "14:30", title: "第二次服务区休息", text: "最后一段路前再补一次体力和精神状态。 " },
        { time: "18:00", title: "回到北京", text: "返程日不安排额外景点，稳定收尾。 " }
      ],
      segments: [[[42.9368, 119.0068], [42.2637, 117.2022], [39.9042, 116.4074]]],
      points: [
        { name: "北京返程", type: "city", latlng: [39.9042, 116.4074], desc: "旅程收尾点，返程依旧以稳定节奏为主。", gaode: "https://uri.amap.com/marker?position=116.4074,39.9042&name=%E5%8C%97%E4%BA%AC%E8%BF%94%E7%A8%8B&src=trip-guide" }
      ]
    }
  ],
  meals: [
    { dayId: "day1", label: "Day1", theme: "高速日", breakfast: "出发前在北京吃扎实一点，避免刚上高速就找早餐。", lunch: "服务区简餐即可，别把午饭拖太久。", dinner: "乌兰布统入住后在附近吃热乎主食和汤类。", supplies: "车上备水、儿童零食和纸巾，第一天重点是补能而不是找网红店。" },
    { dayId: "day2", label: "Day2", theme: "草原慢玩日", breakfast: "酒店或民宿吃完再出门，节奏轻松一点。", lunch: "景区周边家常菜即可，不刻意赶评价店。", dinner: "继续在乌兰布统解决，早点回去休息为 Day3 蓄力。", supplies: "可以补点水果、酸奶和次日路餐食材。" },
    { dayId: "day3", label: "Day3", theme: "长途公路日", breakfast: "必须早吃，出发前顺带把咖啡和热水准备好。", lunch: "建议路餐，减少等位和绕路。", dinner: "抵达林西后找正餐好好恢复体力。", supplies: "加满油，多带热水、面包、能量棒和孩子能接受的零食。" },
    { dayId: "day4", label: "Day4", theme: "沙湖轻体验日", breakfast: "林西吃完再走，避免进景区后才找吃的。", lunch: "景区内可简化处理，重点保证补水和轻食。", dinner: "回翁牛特旗县城再好好吃，选择更多。", supplies: "防晒、湿巾、补水电解质和备用鞋袜要随手可拿。" },
    { dayId: "day5", label: "Day5", theme: "返程日", breakfast: "县城吃完再上路，别空腹开长途。", lunch: "服务区简餐，结合休息一起完成。", dinner: "回北京后安排轻松一点的晚饭，不再折腾。", supplies: "返程重点是咖啡、饮水和能让孩子安稳坐车的小零食。" }
  ],
  packing: [
    { title: "穿衣", items: ["冲锋衣或薄羽绒", "草原防风帽", "舒适运动鞋", "防晒墨镜"] },
    { title: "车上", items: ["车载充电器", "纸巾湿巾", "保温杯和矿泉水", "路餐与儿童零食"] },
    { title: "孩子", items: ["备用外套", "薄毯或靠枕", "小玩具或绘本", "常用药和创可贴"] },
    { title: "拍照与户外", items: ["手机/相机充电线", "移动电源", "防晒霜", "沙地备用鞋袜"] }
  ],
  reminders: [
    { title: "达达线先加油", text: "达达线/热阿线加油站少，Day3 出发前必须加满油。" },
    { title: "草原控速", text: "牛羊随机上路，视野开阔不等于可以快开。" },
    { title: "早晚温差大", text: "4月底5月初早晚偏冷，冲锋衣或薄羽绒要带。" },
    { title: "Day3 最累", text: "务必 7:30 前出发，午餐建议直接做路餐处理。" },
    { title: "沙湖不用住景区", text: "住翁牛特旗县城更划算，晚饭和补给也更舒服。" }
  ],
  budget: [
    { label: "油费", value: "约400元/人" },
    { label: "住宿", value: "约600–900元/人" },
    { label: "门票", value: "约200元/人" },
    { label: "吃饭", value: "约400元/人" },
    { label: "沙湖轻体验", value: "约100–200元/人" },
    { label: "总计", value: "约1800–2200元/人", total: true }
  ]
};
