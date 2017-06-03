function getProperties(ownerId) {
  var properties = [];
  if (ownerId == 'hori') {
    properties = [
      {
        name: 'コンフォート目黒',
        address: '東京都目黒区',
        build: '2017年7月〜',
        total_room_count: 8,
        active_room_count: 7,
        active_rate: "87.5",
        photo: "https://images-fe.ssl-images-amazon.com/images/G/09/gc/designs/livepreview/a_basic_noto_email_v2016_jp-main._CB529935611_.png",
      },
      {
        name: 'カーサヴェルデ大宮',
        address: '埼玉県さいたま市',
        build: '2016年10月〜',
        total_room_count: 10,
        active_room_count: 5,
        active_rate: "50.0",
        photo: "https://images-fe.ssl-images-amazon.com/images/G/09/gc/designs/livepreview/a_basic_noto_email_v2016_jp-main._CB529935611_.png",
      },
    ];
  } else {
    properties = [
      name: 'ちくしのまんしょんA',
      address: '東京都目黒区',
      build: '2017年7月〜',
      total_room_count: 8,
      active_room_count: 7,
      active_rate: 87.5,
    ];
  }
  return properties;
}

module.exports = {getProperties}
