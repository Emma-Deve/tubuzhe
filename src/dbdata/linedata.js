import { fameStyle } from './fameStyle'
import { mountains } from './mountainline'

const list = [{
  "id": "ac6bc03a7245",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/52/FE/Cii-slsxqc2IM-6kADANk1GRq78AAJIMgAAAAAAMA2r359_w640_h480_c1_t0.jpg",
  "line_title": "峨眉山",
  "line_desc": "宿度假酒店，纯玩0推荐，赠火锅看川剧变脸，三环内包接送，轻松懒人游，登金顶看云海，品素斋",
  "price": "¥469",
  "happiness": "96%"
}, {
  "id": "d937g75g1bfa",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/09/38/Cii9EVZBYQeIA-29AAmB1fLWkacAAAJCALiyCoACYHt662_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "游5A都江堰景区，真纯玩0购物，2晚挂5星豪生酒店，体验藏家活动，2次酒店价值128自助早餐，1次豪生晚餐",
  "price": "¥1323",
  "happiness": "93%"
}, {
  "id": "h39jj9j63caga",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/93/42/Cii-s1qvNqyIOoJsAAfO2ICdz4gAAEb-ALUvw4AB87w648_w640_h480_c1_t0.jpg",
  "line_title": "峨眉山",
  "line_desc": "二进峨眉山，深度游玩峨眉一天半，全新体验游，峨眉特色餐，错峰游玩，睡醒再出发，夜栖峨眉",
  "price": "¥523",
  "happiness": "96%"
}, {
  "id": "7c99e9if98h67",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/42/16/Cii-TFe2od6IQhZ9AByEpltVIw0AABbAwA_SVsAHIS-893_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "纯玩0购/20人小团/本地人玩法/夜游都江堰/乐山进山游/晨观熊猫园/金顶观奇观",
  "price": "¥1250",
  "happiness": "98%"
}, {
  "id": "9e35gfh2h060g",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/76/B2/Cii-TljtwBCIVejUABSy9tUPb6gAAJJ0AMVuEIAFLMO445_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "全程0自费0推荐，精选3晚商务型酒店，随车配备矿泉水/红景天/抗高反药，成都三环内上门接",
  "price": "¥545",
  "happiness": "96%"
}, {
  "id": "f5da2h36gj8hb",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/A2/B5/Cii9EFjFAkqIcYQmABhBUnblG54AAIx6AKBAroAGEFq304_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "自营发团，0差评导游，7点/9点出发可选，真纯玩无购物无猫腻，网红川菜美食，上门接早集合",
  "price": "¥208",
  "happiness": "98%"
}, {
  "id": "0j304c571j755",
  "img_url": "https://s.tuniu.net/qn/image/f1/f8a2a09ccf49cd88209b12459720af91/15c1d8b8-4064-4847-8c65-b488ea798be4.jpeg?imageView2/1/w/640/h/480",
  "line_title": "成都大熊猫繁育基地",
  "line_desc": "8点出发，含古堰南韵剧场川剧演出和熊猫公仔，三环内包接，升级熊猫小吃套餐，无线耳麦讲解",
  "price": "¥239",
  "happiness": "97%"
}, {
  "id": "7gjch6gf028hg",
  "img_url": "https://s.tuniu.net/qn/image/f1/42b1675cbf66ac32ba31bf17691144ec/c6ec4e3c-848e-4edb-96da-61eca0837cea.jpeg?imageView2/1/w/640/h/480",
  "line_title": "圣诞]<青城山",
  "line_desc": "早中晚三种出发时段，可选18人小团或宽体头等舱，优选真纯玩，好评川味美食，三环内上门接早",
  "price": "¥207",
  "happiness": "95%"
}, {
  "id": "1heccj63f06ae",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/BD/D0/Cii9EVc1RduITeg_AAm_nmR0YaUAAFfPQDeibMACb-2253_w640_h480_c1_t0.JPG",
  "line_title": "海螺沟",
  "line_desc": "含价值188神汤温泉，指定入住明珠花园酒店（热水空调WIFI），赏冰川、游燕子沟、品特色餐，真纯玩，三环内包接",
  "price": "¥708",
  "happiness": "89%"
}, {
  "id": "fh521j41f9d",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/9D/22/Cii-s1tZLmSIbjI4AC3iU6bkxZEAAK2uQBCRwgALeJr145_w640_h480_c1_t0.jpg",
  "line_title": "西昌",
  "line_desc": "2晚泸沽湖、（女神山、女神湾、里格半岛）、划船至亲爱的客栈、火盆烧烤、摩挲风情餐",
  "price": "¥763",
  "happiness": "92%"
}, {
  "id": "2bb23i266cf9e",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/3D/7F/Cii-tFsjmpKIdFPNACFU_zgFG64AAIm9gKqQdkAIVUX325_w640_h480_c1_t0.jpg",
  "line_title": "成都",
  "line_desc": "纯玩0购物，赠送旅拍/精美相框，车进机出不走回头路，可升级保姆车，保证拼房（不含稻城返程机票）",
  "price": "¥959",
  "happiness": "92%"
}, {
  "id": "380563j444ie5",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/96/E8/Cii-s1vukayIXQKoABUhFFVtfkMAAQlRADVs-sAFSEs880_w640_h480_c1_t0.jpg",
  "line_title": "西昌",
  "line_desc": "手划猪槽船、360环湖游、旅拍相片、火盆烧烤、摩挲晚会、生活重在体验",
  "price": "¥456",
  "happiness": "93%"
}, {
  "id": "ibh1604eece39",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/9B/51/Cii-tFtYLTuIHkHsACaBitWl7FYAAK0nwL7yMoAJoGi224_w640_h480_c1_t0.jpg",
  "line_title": "四姑娘山",
  "line_desc": "畅游双桥沟长坪沟全景，住阿尔卑斯酒店，体验民俗文化，观云海，猫鼻梁观四姑娘山全景",
  "price": "¥369",
  "happiness": "92%"
}, {
  "id": "agjfii8hade0a",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/E5/B0/Cii-tFt8_QeIPCHVABlaNsODeUoAAMd0wN7pAIAGVpO978_w640_h480_c1_t0.jpg",
  "line_title": "海螺沟",
  "line_desc": "纯玩无购物，特色高原藏式土火锅，泡天然温泉、赏冰川，享受天然氧吧",
  "price": "¥433",
  "happiness": "86%"
}, {
  "id": "j8aaajgh1jg79",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/91/75/Cii-VVnexX6Iadx-ACkD9PAExLgAACFVgLZyYkAKQQM563_w640_h480_c1_t0.jpg",
  "line_title": "海螺沟",
  "line_desc": "三大景区360度全景慢嗨，宿三晚新海丽或乐天大酒店，纯玩无购物，享一餐特色餐",
  "price": "¥790",
  "happiness": "93%"
}, {
  "id": "f4e630h1ib29",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G3/M00/86/82/Cii_NlmRFHyIJ7aHAAf7JMPFHrUAAHQTgA91UkAB_s8617_w640_h480_c1_t0.jpg",
  "line_title": "泸沽湖",
  "line_desc": "宿1晚泸沽湖特色客栈，含篝火晚会，享摩梭风味餐，游摩梭古村落，猪槽船游湖，三环包接",
  "price": "¥487",
  "happiness": "91%"
}, {
  "id": "b66e9g0183a68",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/EC/25/Cii-slyTXQiIOv-YAJW9Y9baD48AAUkRAIfI8wAlb17939_w640_h480_c1_t0.jpg",
  "line_title": "小九寨松坪沟",
  "line_desc": "绝不进购物店/不推自费升级，住舒适酒店（空调/地暖），享土火锅/篝火锅庄，三环包接",
  "price": "¥474",
  "happiness": "86%"
}, {
  "id": "11355b43i410c",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/A9/59/Cii-TlkQO02IYd_ZAAvvZFUOD3sAAJsSgNoDhQAC-98231_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟双汽3日游",
  "line_desc": "增游5A黄龙景区，松潘古镇，入住5星豪生酒店，含走进藏民家访，藏羌风情晚会，三环内包接，2次酒店自助早餐，1次自助晚餐",
  "price": "¥850",
  "happiness": "95%"
}, {
  "id": "h06ed71h2f6dc",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G3/M00/4E/87/Cii_LllxtK2IWQ21AEGXW7FbHjAAAEiuQEBVuUAQZdz785_w640_h480_c1_t0.jpg",
  "line_title": "成都",
  "line_desc": "纯玩0购物工业革命的活化石、含蒸汽小火车、一年四季赏不同花期、穿越金黄油菜花田，下矿体验",
  "price": "¥526",
  "happiness": "96%"
}, {
  "id": "84d8791dc4e1",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/E5/CA/Cii-tFyPZfuICf4aAANKlAWJMU0AAUfxQP2d8wAA0qs693_w640_h480_c1_t0.jpg",
  "line_title": "成都",
  "line_desc": "2人起订，游蜀山之后，观东方的阿尔卑斯山，登达瓦更扎，览日出云海，川西小环线",
  "price": "¥3989",
  "happiness": "86%"
}, {
  "id": "fb13icj53718",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/69/CA/Cii-s1vNNeeIN4j7ACgfPjH8pVwAAPcmwE2jbkAKB9W704_w640_h480_c1_t0.jpg",
  "line_title": "成都",
  "line_desc": "越野车4人精品小包团，不足4人选升级方案",
  "price": "¥1370",
  "happiness": "86%"
}, {
  "id": "d68j1he845f55",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/26/0B/Cii-slsWSa2IAMt7ABU6tespzXQAAH9igJQ64UAFTrN958_w640_h480_c1_t0.jpg",
  "line_title": "色达3日游",
  "line_desc": "赠送150元小交通/摄影旅拍，升级1晚色达精选酒店（带空调或地暖）0购物观夜景，含氧气瓶，三环内包接",
  "price": "¥392",
  "happiness": "98%"
}, {
  "id": "hidf29490c6f5",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/E1/CA/Cii-VVya46-IRmzCABzEijvTqFAAAEyLwBG_hgAHMSi602_w640_h480_c1_t0.jpg",
  "line_title": "色达",
  "line_desc": "纯玩0购物，赠送精美旅拍，环线不走回头路，升级1晚新都桥酒店（带空调或地暖）配备氧气/U型靠枕，三环内包接",
  "price": "¥469",
  "happiness": "98%"
}, {
  "id": "f41183fff32g9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/02/3E/Cii-tFwl0RKIX63dABbxLV3YAYwAASSggPYN0sAFvFF395_w640_h480_c1_t0.jpg",
  "line_title": "色达3日游",
  "line_desc": "宿2晚标间独卫，色达县再升级一晚氧气房，享葡萄糖粉，佛学院拍夜景，观天葬，三环内包接",
  "price": "¥338",
  "happiness": "97%"
}, {
  "id": "ea7049iedbjjb",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/9D/24/Cii-sltZLxOIeBDZAA6JRNLSCnUAAK2uwGJCMQADolc550_w640_h480_c1_t0.jpg",
  "line_title": "色达3日游",
  "line_desc": "纯玩无购物，含观音庙50元/天葬台40元小交通，商务大巴皮座椅/USB接口，升级一晚宿圣城大酒店，三环内接，含氧气瓶",
  "price": "¥352",
  "happiness": "98%"
}, {
  "id": "11e7bcab8b163",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/02/3E/Cii-tFwl0RKIX63dABbxLV3YAYwAASSggPYN0sAFvFF395_w640_h480_c1_t0.jpg",
  "line_title": "色达2晚3日游",
  "line_desc": "首发（旅拍和含餐）团，免费用红围巾，摄影师佛学院带队，单反相机花式旅拍，宿一晚标间酒店和一晚佛学院，超长时间体验，三环内接",
  "price": "¥545",
  "happiness": "98%"
}, {
  "id": "9h02i26dj3d83",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/B7/48/Cii-T1gHH0CIekJXAE0q_5wFqkcAADhkQM0uZ4ATSsX632_w640_h480_c1_t0.jpg",
  "line_title": "剑门关",
  "line_desc": "探古城风水，登蜀道，望雄关，品剑门豆腐宴，住特色酒店，赏阆中夜景",
  "price": "¥371",
  "happiness": "94%"
}, {
  "id": "i1ijdh5dg8cba",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/92/D2/Cii-slzbyN-IR2g2ACMKQi9VDTcAAV0GAJWZCQAIwpa381_w640_h480_c1_t0.jpg",
  "line_title": "色达",
  "line_desc": "0购物3环接，新都桥国道318环宿，升级1晚空调热水，含150元必消小交通",
  "price": "¥630",
  "happiness": "98%"
}, {
  "id": "g87hf0e14745",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/FB/DA/Cii_J1y5N6mIWaYYAAceyhq6djkAAFWzwNLo3AABx7i545_w640_h480_c1_t0.jpg",
  "line_title": "色达3日游",
  "line_desc": "0购物，含150必消小交通，氧气瓶，夜景拍摄，观天葬，三环内接，色达县城精选酒店，标间独卫，商务大巴皮座椅/USB接口",
  "price": "¥382",
  "happiness": "97%"
}, {
  "id": "ja10217517a68",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/09/38/Cii9EVZBYQeIA-29AAmB1fLWkacAAAJCALiyCoACYHt662_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "游5A都江堰景区，真纯玩0购物，2晚挂5星豪生酒店，体验藏家活动，2次酒店价值128自助早餐，1次豪生晚餐",
  "price": "¥1323",
  "happiness": "93%"
}, {
  "id": "j93i4c5efb8hf",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/42/16/Cii-TFe2od6IQhZ9AByEpltVIw0AABbAwA_SVsAHIS-893_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "纯玩0购/20人小团/本地人玩法/夜游都江堰/乐山进山游/晨观熊猫园/金顶观奇观",
  "price": "¥1250",
  "happiness": "98%"
}, {
  "id": "17igd59hh75g9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/76/B2/Cii-TljtwBCIVejUABSy9tUPb6gAAJJ0AMVuEIAFLMO445_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "全程0自费0推荐，精选3晚商务型酒店，随车配备矿泉水/红景天/抗高反药，成都三环内上门接",
  "price": "¥545",
  "happiness": "96%"
}, {
  "id": "h0g1aj7a90ada",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/A2/B5/Cii9EFjFAkqIcYQmABhBUnblG54AAIx6AKBAroAGEFq304_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "自营发团，0差评导游，7点/9点出发可选，真纯玩无购物无猫腻，网红川菜美食，上门接早集合",
  "price": "¥208",
  "happiness": "98%"
}, {
  "id": "i84c82cd9005c",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/09/38/Cii9EVZBYQeIA-29AAmB1fLWkacAAAJCALiyCoACYHt662_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "真纯玩0购物，2晚挂5星豪生酒店，2次自助早餐，1次价值138元自助晚餐，三环内包接，可选头等舱保姆车",
  "price": "¥1254",
  "happiness": "93%"
}, {
  "id": "952acgd2b09fe",
  "img_url": "https://s.tuniu.net/qn/image/f1/f8a2a09ccf49cd88209b12459720af91/15c1d8b8-4064-4847-8c65-b488ea798be4.jpeg?imageView2/1/w/640/h/480",
  "line_title": "成都大熊猫繁育基地",
  "line_desc": "8点出发，含古堰南韵剧场川剧演出和熊猫公仔，三环内包接，升级熊猫小吃套餐，无线耳麦讲解",
  "price": "¥239",
  "happiness": "97%"
}, {
  "id": "59eehbg240e57",
  "img_url": "https://s.tuniu.net/qn/image/f1/42b1675cbf66ac32ba31bf17691144ec/c6ec4e3c-848e-4edb-96da-61eca0837cea.jpeg?imageView2/1/w/640/h/480",
  "line_title": "圣诞]<青城山",
  "line_desc": "早中晚三种出发时段，可选18人小团或宽体头等舱，优选真纯玩，好评川味美食，三环内上门接早",
  "price": "¥207",
  "happiness": "95%"
}, {
  "id": "183di85d0f5e8",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/1A/0A/Cii-s1z_X5WILkDwADwEijkASfQAAWxcQOWX-EAPASi894_w640_h480_c1_t0.jpg",
  "line_title": "成都大熊猫基地",
  "line_desc": "好评慢行程，萌宝探趣，特色川西家宴，人文亲子，无线耳麦，车载WIFI，上门接",
  "price": "¥209",
  "happiness": "99%"
}, {
  "id": "gcai7056ih04",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/9E/A4/Cii9EFjA9C2IFDyaACCI9eKPXCYAAIm0QPBiFoAIIkN361_w640_h480_c1_t0.jpg",
  "line_title": "四姑娘山",
  "line_desc": "全程含双景区门票，特色石板烧及农家菜，猫鼻梁观全景，自由选择酒店标准，绝无强制消费",
  "price": "¥359",
  "happiness": "93%"
}, {
  "id": "h0ci8d1120fac",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/EC/FD/Cii-tFrv-GGIfDTHACjFMn6wky0AAGgwACCsnYAKMVK491_w640_h480_c1_t0.jpg",
  "line_title": "毕棚沟2日游",
  "line_desc": "纯玩无购物，含烤羊鸡兔自助烧烤，含60元观光车，错峰游景区6小时，住高家庄大酒店空调房，泡娜姆湖温泉，三环内包接",
  "price": "¥435",
  "happiness": "95%"
}, {
  "id": "e76jb7j721g0f",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/1A/33/Cii-TFgz17OIfxEJAAVsxN7nZjkAAErcAI8HLcABWzc749_w640_h480_c1_t0.jpg",
  "line_title": "毕棚沟",
  "line_desc": "真纯玩无购物毕棚沟景区内6小时游览时间泡娜姆湖天然温泉含牦牛肉汤锅和特色藏式土火锅",
  "price": "¥239",
  "happiness": "99%"
}, {
  "id": "5i31eef01ecec",
  "img_url": "https://s.tuniu.net/qn/image/f1/21e75d9b12c5a03acfd0d00abc225e4f/91896e5e-46d3-4e69-b93a-4b1fb22c0384.jpeg?imageView2/1/w/640/h/480",
  "line_title": "毕棚沟温泉2日游",
  "line_desc": "纯玩0购物，含观光车60元，九点出发无需早起、泡娜姆湖温泉，保证毕棚沟6小时游览、品藏式土火锅、牛杂汤锅，篝火晚会",
  "price": "¥234",
  "happiness": "93%"
}, {
  "id": "ai981e5be3je",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/20/4F/Cii-TFee9euIRveHAD4L9nUkm9oAAAp2wOPpIMAPgwO115_w640_h480_c1_t0.PNG",
  "line_title": "毕棚沟",
  "line_desc": "入住2晚舒适型酒店（有地暖或空调），金秋赏红叶，泡娜姆湖景区温泉，环线不走回头路，三环内接",
  "price": "¥608",
  "happiness": "91%"
}, {
  "id": "i00cdd338fa2",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/E5/7F/Cii-s1t87cmIf5f0ACHjIy5IMPoAAMdgwOJdkEAIeM7549_w640_h480_c1_t0.jpg",
  "line_title": "毕棚沟甘堡臧寨1日游",
  "line_desc": "纯玩无购物，赏雪山冰川海子，观特色臧寨，体验浓郁文化，泡景区内天然温泉，三环内包接",
  "price": "¥185",
  "happiness": "96%"
}, {
  "id": "acchd2ha23gj",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/87/68/Cii-tFtNiGCIaCBvAAiF1ISVVHEAAKWSQMhUWsACIXs290_w640_h480_c1_t0.jpg",
  "line_title": "毕棚沟双汽2日游",
  "line_desc": "入住精选特色酒店（含60元景区观光车、特色牛杂汤锅、藏式土火锅、娜姆湖温泉）错峰闲游景区6小时",
  "price": "¥283",
  "happiness": "86%"
}, {
  "id": "3b8ge16g809h2",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/9B/51/Cii-tFtYLTuIHkHsACaBitWl7FYAAK0nwL7yMoAJoGi224_w640_h480_c1_t0.jpg",
  "line_title": "四姑娘山",
  "line_desc": "畅游双桥沟长坪沟全景，住阿尔卑斯酒店，体验民俗文化，观云海，猫鼻梁观四姑娘山全景",
  "price": "¥369",
  "happiness": "92%"
}, {
  "id": "j5cdh8401886d",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/52/FE/Cii-slsxqc2IM-6kADANk1GRq78AAJIMgAAAAAAMA2r359_w640_h480_c1_t0.jpg",
  "line_title": "峨眉山",
  "line_desc": "宿度假酒店，纯玩0推荐，赠火锅看川剧变脸，三环内包接送，轻松懒人游，登金顶看云海，品素斋",
  "price": "¥469",
  "happiness": "96%"
}, {
  "id": "6hif0b4dbj6a5",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/09/38/Cii9EVZBYQeIA-29AAmB1fLWkacAAAJCALiyCoACYHt662_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "游5A都江堰景区，真纯玩0购物，2晚挂5星豪生酒店，体验藏家活动，2次酒店价值128自助早餐，1次豪生晚餐",
  "price": "¥1323",
  "happiness": "93%"
}, {
  "id": "536908022325b",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/93/42/Cii-s1qvNqyIOoJsAAfO2ICdz4gAAEb-ALUvw4AB87w648_w640_h480_c1_t0.jpg",
  "line_title": "峨眉山",
  "line_desc": "二进峨眉山，深度游玩峨眉一天半，全新体验游，峨眉特色餐，错峰游玩，睡醒再出发，夜栖峨眉",
  "price": "¥523",
  "happiness": "96%"
}, {
  "id": "93d7681bd69fd",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/42/16/Cii-TFe2od6IQhZ9AByEpltVIw0AABbAwA_SVsAHIS-893_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "纯玩0购/20人小团/本地人玩法/夜游都江堰/乐山进山游/晨观熊猫园/金顶观奇观",
  "price": "¥1250",
  "happiness": "98%"
}, {
  "id": "a4faa3deci61",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/76/B2/Cii-TljtwBCIVejUABSy9tUPb6gAAJJ0AMVuEIAFLMO445_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "全程0自费0推荐，精选3晚商务型酒店，随车配备矿泉水/红景天/抗高反药，成都三环内上门接",
  "price": "¥545",
  "happiness": "96%"
}, {
  "id": "b2904i096e3f9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/A2/B5/Cii9EFjFAkqIcYQmABhBUnblG54AAIx6AKBAroAGEFq304_w640_h480_c1_t0.jpg",
  "line_title": "都江堰",
  "line_desc": "自营发团，0差评导游，7点/9点出发可选，真纯玩无购物无猫腻，网红川菜美食，上门接早集合",
  "price": "¥208",
  "happiness": "98%"
}, {
  "id": "fi2928h79df6",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/09/38/Cii9EVZBYQeIA-29AAmB1fLWkacAAAJCALiyCoACYHt662_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "真纯玩0购物，2晚挂5星豪生酒店，2次自助早餐，1次价值138元自助晚餐，三环内包接，可选头等舱保姆车",
  "price": "¥1254",
  "happiness": "93%"
}, {
  "id": "ec91c85d7615",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/C2/87/Cii-tFwKAHaICDsEABFtcC0PaskAARVMQFwezEAEW2I244_w640_h480_c1_t0.jpg",
  "line_title": "九寨沟",
  "line_desc": "升级住舒适酒店，体验藏家活动，品高原牦牛肉汤锅宴，成都市三环内上门接，每天限量5000人，可选头等舱和豪生酒店",
  "price": "¥385",
  "happiness": "89%"
}]

// 浪漫海滨：Romantic beach
// 热门:海南
const hainan = [{
  "id": "jc58c48f390i7",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/0F/21/Cii_J11LjMOITxmXAAPle5aMGk0AAI0jAJYII8AA-WT424_w640_h480_c1_t0.JPG",
  "line_title": "三亚",
  "line_desc": "自营热销，精选海边住宿，可升洲际皇冠，限时亚特兰蒂斯水族馆(奇妙海洋世界）/蜈支洲/呀诺达/天涯海角/南山",
  "price": "¥2058",
  "happiness": "96%"
}, {
  "id": "ihc46agj24b9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/AB/FE/Cii_J10i6rKIcKNKAAT6lw3M9HUAAHwCgG8qyEABPqv209_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "限时VIP礼包+品牌度假酒店(维景/温德姆/洲际/JW万豪)+24小时专车接机+充足自由活动+2天跟团0购物+蜈支洲嗨玩一整天",
  "price": "¥1878",
  "happiness": "86%"
}, {
  "id": "0jc5eabfd6653",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/9D/09/Cii9EFcjHuOIc6AKABHgH-kH8wEAAFH-gF6GB8AEeA3090_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "20人精品小团0购物，爸妈放心游，国际品牌温德姆/洲际皇冠假日/国光豪生连住，丰富自助早餐+游乐设施，24小时接送机",
  "price": "¥2567",
  "happiness": "97%"
}, {
  "id": "7bh98ig8c1h3",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/AB/FE/Cii_J10i6rKIcKNKAAT6lw3M9HUAAHwCgG8qyEABPqv209_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "纯玩0购物半自助+限时VIP大礼包+品牌度假酒店(维景/温德姆/洲际/JW万豪)+24H专车接机+打卡网红玻璃栈道+嗨玩蜈支洲",
  "price": "¥2201",
  "happiness": "96%"
}, {
  "id": "318092gef0f3b",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/73/B3/Cii9EVcQ0LuICpg9AA6LkqpSuTMAADQhgOj9VwADouq780_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "20人精品团0购物,(国光/温德姆)国际品牌连住+牛人专线双品牌,丰富自助早+多房型可选+1天自由活动，蜈支洲天涯等",
  "price": "¥2823",
  "happiness": "97%"
}, {
  "id": "f5d66g5acia8",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/9D/09/Cii9EFcjHuOIbiOxAA5quENUCd8AAFH-gFrrU8ADmrQ554_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "0距离海边/五星酒店自选(天通/半山半岛洲际)，纯玩0购物，短假出游精选",
  "price": "¥2273",
  "happiness": "86%"
}, {
  "id": "d57bc252398f",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/B3/EA/Cii_J1ny0AqAQiy6AWY39SMTHE8403_w640_h480_c1_t0.jpg",
  "line_title": "三亚",
  "line_desc": "4晚连住三亚湾海边住宿，限时亚特水族馆+醉氧雨林+108米海上观音祈福+舌尖美食餐（当地游）",
  "price": "¥1168",
  "happiness": "97%"
}, {
  "id": "7cejh1f2190i6",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/CA/C7/Cii-VV0xNlGIV_mCAA9uuaqGtRMAAIDxQMV1KYAD27R27_w640_h480_c1_t0.jpeg",
  "line_title": "三亚",
  "line_desc": "限时199元全程升挂五海景房/26人纯玩团/连住近海酒店，亚特兰蒂斯水族馆/网红天堂玻璃栈道，帆船出海/蜈支洲岛",
  "price": "¥2298",
  "happiness": "95%"
}]


const beihai = [{
  "id": "a01cahfgi6379",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/1B/46/Cii-VVmlNCeIYP1dAB7L93k-leQAAAjOALpvUQAHswP582_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "0自费游越南,境外国四/1晚海景房,海上天坑/水上木偶戏,河内莲花自助,送签证,仅1个店",
  "price": "¥2803",
  "happiness": "93%"
}, {
  "id": "6a8e896c1afjg",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/C7/E4/Cii-tFrYBs-IfyItAAV0b5M1rncAAFzswLuLG8ABXSH870_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "纯玩不进店，升级1晚花千骨拍摄地明仕山庄，竹筏明仕，北海休闲半自助，特色海鲜餐，自营品质保证",
  "price": "¥2777",
  "happiness": "97%"
}, {
  "id": "ih09jia72ib2",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/5C/A6/Cii-s1s1nuGIIne1AAXf_X6PfvYAAJUBAM-Qs8ABeAV293_w640_h480_c1_t0.jpg",
  "line_title": "北海",
  "line_desc": "MINI小团，2晚海岛民宿观日出日落/专车环岛，宝妈萌宝海滨优选，24H管家式服务/赠泡泡相机",
  "price": "¥2240",
  "happiness": "86%"
}, {
  "id": "eh61ajc925i0b",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/33/85/Cii-slw8LKCISRzFAAoOua2tH_sAATCjwGBSgIACg7R905_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "销量明星，纯玩0购，全年21度海滨，特色海鲜餐，1晚景区明仕山庄，赠赶海体验（当地游）",
  "price": "¥1709",
  "happiness": "98%"
}, {
  "id": "53189e9feje54",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/C2/D7/Cii-tFwKIZiIFSnFAAiFaNPDidcAARVqgKrHxcACIWA988_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "高端小团/升级1晚景区内明仕山庄/专车接送/落地不等待/海鲜自助任性吃/车次自选",
  "price": "¥3001",
  "happiness": "86%"
}, {
  "id": "7h93jg5fib7e3",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/17/47/Cii-tFyu60eIA8BnAAokVgaHU3sAAVATgPynIEACiRu443_w640_h480_c1_t0.jpg",
  "line_title": "北海",
  "line_desc": "纯玩/一单一团/管家式服务/涠洲岛1晚精选民宿/赠198元沙画表演/金秋大礼包/特产海鸭蛋/接送无忧",
  "price": "¥2093",
  "happiness": "94%"
}, {
  "id": "dfcej5d7fgf",
  "img_url": "https://m.tuniucdn.com/filebroker/cdn/olb/14/96/149631e4ff9eaeb09da14e7d553e1293_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "0购物，入住老木棉，2晚北海市中心酒店",
  "price": "¥2709",
  "happiness": "86%"
}, {
  "id": "83gi1342bgige",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/33/F8/Cii-slw8R1iIKHKrAAv1SAskvIwAATDAgKyo18AC_Vg019_w640_h480_c1_t0.jpg",
  "line_title": "南宁",
  "line_desc": "25人精致小团/0购物0自费/境外国际四星/北海指定希尔顿/168元海鲜自助/网红奥巴马米粉/可升涠洲岛/不散拼更放心",
  "price": "¥3388",
  "happiness": "94%"
}]
// 厦门
const xiamen = [{
  "id": "bc7c8c000j7c7",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/86/2F/Cii-sl0jCJaIDZOBABCz6XOVok8AAXfQgCIAyEAELQB361_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "3晚环岛路旁一线海景房+1晚鼓浪屿，登顶网红日光岩+土楼登楼体验+观世遗博物馆，南普陀寺+胡里山炮台，24H接送机",
  "price": "¥2663",
  "happiness": "97%"
}, {
  "id": "7ggg59cdge21b",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/BD/EB/Cii9EFc1T3OIYiVXABJ3vWkXL9gAAFfhQEndYYAEnfV032_w640_h480_c1_t0.jpg",
  "line_title": "鼓浪屿",
  "line_desc": "0购物五星喜来登/洲际/马哥帆船或游艇2选124H接送机可选土楼赶海捉蟹",
  "price": "¥2848",
  "happiness": "89%"
}, {
  "id": "4eg84dcc0f0a9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/63/22/Cii_J1nHT2aIavBCAE08cOwQu3UAABjAgKoApEATTyI233_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "1晚鼓浪屿近海酒店,2晚国际五星度假村艾美/悦华/维多利亚/会议中心/海悦山庄/温德姆至尊豪廷酒店,鼓浪屿跟团,24h接送机",
  "price": "¥1938",
  "happiness": "96%"
}, {
  "id": "ejfdg209673d9",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/51/84/Cii9EFZn2hCIMmieACPNYypUlwYAAA6nQHr_fIAI817626_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "厦门3晚五星1晚鼓浪屿，鼓浪屿1日游，九曲溪漂流，虎啸天游大红袍，福建全景游，厦门进出",
  "price": "¥3965",
  "happiness": "96%"
}, {
  "id": "gb90005d56cga",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/DC/42/Cii-s1rkMmKIROpoAFy1BGvXLocAAGN5QHIM_sAXLUc522_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "承诺4晚市区一线海景房+1晚鼓浪屿住宿，探秘云水谣土楼+登顶网红日光岩，南普陀寺+胡里山炮台，24小时接送机",
  "price": "¥2886",
  "happiness": "97%"
}, {
  "id": "49004ja84hbch",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/2C/5B/Cii-tFy61mOIc10rAAX-LyoTY3UAAVPigOOv9sABf5H030_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "15人VIP小团俯览日光岩美景邂逅网红转角观光万国建筑敬仰毓园林巧稚港仔后海滨撒欢",
  "price": "¥235",
  "happiness": "93%"
}, {
  "id": "307cgigi5577b",
  "img_url": "https://s.tuniu.net/qn/image/f2/b3fb1fe0803e819366b314d5268540a5/194a7095-d865-480c-9747-8581b9bc0cb1.jpeg?imageView2/1/w/640/h/480",
  "line_title": "厦门",
  "line_desc": "自营纯玩，骑行环岛路+深度鼓浪屿+24H接送，3晚国际五星+1晚鼓浪屿磐诺酒店，超长自由活动，赠266元网红门票",
  "price": "¥2683",
  "happiness": "96%"
}, {
  "id": "b8a7a7e5e2cad",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G2/M00/28/FE/Cii-T1i1HPiICTAcAAqn8Di1n2QAAHwMwIKMqEACqgI943_w640_h480_c1_t0.jpg",
  "line_title": "厦门",
  "line_desc": "1晚鼓浪屿近海旅馆,3晚五星度假村艾美/悦华/海悦山庄,一线海景房维多利亚/会议中心/温德姆至尊豪廷+接送机,可选云水谣",
  "price": "¥2239",
  "happiness": "96%"
}]

const shandong = [{
  "id": "cjeajh0ibaf4c",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G1/M00/CA/5A/Cii9EFc6iZuISYMaAA98f2RnkNUAAF0tgF3E_IAD3yX681_w640_h480_c1_t0.JPG",
  "line_title": "青岛",
  "line_desc": "超2w人出游，严选0购物，1晚海景1晚养生酒店，皇家骑士自助，5A刘公岛+海洋世界+八仙过海+金石滩，沙滩王国",
  "price": "¥2468",
  "happiness": "98%"
}, {
  "id": "63jg5ji21g41f",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/CC/17/Cii_J1x95NqIG-PhAAXAY4ytEZ8AAESugLcUk0ABcB728_w640_h480_c1_t0.jpeg",
  "line_title": "蓬莱阁",
  "line_desc": "【假期花样玩转山东全线】登泰山拜孔子醉青岛游仙境纯玩无购物(当地参团)",
  "price": "¥1798",
  "happiness": "86%"
}, {
  "id": "4acb3j68ic35",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/C0/B0/Cii-slwI0iGIY7MFAApoqM1xqaIAARTJQLOlwgACmjA357_w640_h480_c1_t0.jpg",
  "line_title": "青崂山",
  "line_desc": "一车一团、、纯玩无购物、行程自由随心、上门车接车送(当地参团)",
  "price": "¥500",
  "happiness": "86%"
}, {
  "id": "4e624c50bfg69",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/AE/E4/Cii-slx3PA6IWZDXAABpBQPfjM4AAUIgwL_nioAAGkd63_w640_h480_c1_t0.jpeg",
  "line_title": "青岛",
  "line_desc": "【赠游艇出海观光】(当地参团)",
  "price": "¥275",
  "happiness": "85%"
}, {
  "id": "ij5ch23eaf66",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/D4/03/Cii_J1yItA6If8I_AAXAY4ytEZ8AAEeaABbB-0ABcB781_w640_h480_c1_t0.jpeg",
  "line_title": "蓬莱",
  "line_desc": "含通票，无拘无束，不限次数玩耍，让您清凉一“夏”，享受放松愉快的旅途，烟台出发市区内酒店可接(当地参团)",
  "price": "¥225",
  "happiness": "86%"
}, {
  "id": "5a1a3c4id27e7",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/D2/C1/Cii-slyGBiqIYkNCAAXAY4ytEZ8AAUWqQEOikcABcB701_w640_h480_c1_t0.jpeg",
  "line_title": "烟台",
  "line_desc": "纯玩无购物包含刘公岛往返船票全面海滨旅游景点，一路看海，一路风光(当地参团)",
  "price": "¥558",
  "happiness": "86%"
}, {
  "id": "8f072j53a4798",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G5/M00/D3/0D/Cii-tFyGI_WIQ_9AAAXAY4ytEZ8AAUW2wGn8OwABcB791_w640_h480_c1_t0.jpeg",
  "line_title": "威海",
  "line_desc": "纯玩无购物，含往返船票，5A级旅游景点，烟台往返，市区内免费接(当地参团)",
  "price": "¥170",
  "happiness": "86%"
}, {
  "id": "e268cbd1dijg",
  "img_url": "https://m.tuniucdn.com/fb2/t1/G4/M00/D4/03/Cii_J1yItA6If8I_AAXAY4ytEZ8AAEeaABbB-0ABcB781_w640_h480_c1_t0.jpeg",
  "line_title": "烟台",
  "line_desc": "0购物真纯玩畅游双景区烟台往返烟台码头、汽车站、烟台山附近酒店可接(当地参团)",
  "price": "¥300",
  "happiness": "86%"
}]

const hotSealist = [beihai, xiamen, hainan, shandong]

export {
  list,
  hainan,
  beihai,
  shandong,
  xiamen,
  hotSealist,
  fameStyle,
  mountains,
}