let utils = {
    china: provinceCode(),
    "云南": code_53(),
};

// 各省的行政区划代码和坐标
function provinceCode() {
    return [
        {name: '北京', code: 110000, coordinate: [116.405285, 39.904989]},
        {name: '天津', code: 120000, coordinate: [117.190182, 39.125596]},
        {name: '河北', code: 130000, coordinate: [114.502461, 38.045474]},
        {name: '山西', code: 140000, coordinate: [112.549248, 37.857014]},
        {name: '内蒙古', code: 150000, coordinate: [111.670801, 40.818311]},
        {name: '辽宁', code: 210000, coordinate: [123.429096, 41.796767]},
        {name: '吉林', code: 220000, coordinate: [125.3245, 43.886841]},
        {name: '黑龙江', code: 230000, coordinate: [126.642464, 45.756967]},
        {name: '上海', code: 310000, coordinate: [121.472644, 31.231706]},
        {name: '江苏', code: 320000, coordinate: [118.767413, 32.041544]},
        {name: '浙江', code: 330000, coordinate: [120.153576, 30.287459]},
        {name: '安徽', code: 340000, coordinate: [117.283042, 31.86119]},
        {name: '福建', code: 350000, coordinate: [119.306239, 26.075302]},
        {name: '江西', code: 360000, coordinate: [115.892151, 28.676493]},
        {name: '山东', code: 370000, coordinate: [117.000923, 36.675807]},
        {name: '河南', code: 410000, coordinate: [113.665412, 34.757975]},
        {name: '湖北', code: 420000, coordinate: [114.298572, 30.584355]},
        {name: '湖南', code: 430000, coordinate: [112.982279, 28.19409]},
        {name: '广东', code: 440000, coordinate: [113.280637, 23.125178]},
        {name: '广西', code: 450000, coordinate: [108.320004, 22.82402]},
        {name: '海南', code: 460000, coordinate: [110.33119, 20.031971]},
        {name: '重庆', code: 500000, coordinate: [106.504962, 29.533155]},
        {name: '四川', code: 510000, coordinate: [104.065735, 30.659462]},
        {name: '贵州', code: 520000, coordinate: [106.713478, 26.578343]},
        {name: '云南', code: 530000, coordinate: [102.712251, 25.040609]},
        {name: '西藏', code: 540000, coordinate: [91.132212, 29.660361]},
        {name: '陕西', code: 610000, coordinate: [108.948024, 34.263161]},
        {name: '甘肃', code: 620000, coordinate: [103.823557, 36.058039]},
        {name: '青海', code: 630000, coordinate: [101.778916, 36.623178]},
        {name: '宁夏', code: 640000, coordinate: [106.278179, 38.46637]},
        {name: '新疆', code: 650000, coordinate: [87.617733, 43.792818]},
        {name: '台湾', code: 710000, coordinate: [121.509062, 25.044332]},
        {name: '香港', code: 810000, coordinate: [114.173355, 22.320048]},
        {name: '澳门', code: 820000, coordinate: [113.54909, 22.198951]},
    ]

}

// 云南省各市和区县的行政区划代码和坐标
function code_53() {
    return [
        {name: '昆明市', code: 530100, coordinate: [102.712251, 25.040609]},
        {name: '曲靖市', code: 530300, coordinate: [103.797851, 26.001557]},
        {name: '玉溪市', code: 530400, coordinate: [102.543907, 24.050461]},
        {name: '保山市', code: 530500, coordinate: [99.167133, 24.711802]},
        {name: '昭通市', code: 530600, coordinate: [103.717216, 27.736999]},
        {name: '丽江市', code: 530700, coordinate: [100.833026, 26.872108]},
        {name: '普洱市', code: 530800, coordinate: [100.972344, 23.277321]},
        {name: '临沧市', code: 530900, coordinate: [99.48697, 23.886567]},
        {name: '楚雄彝族自治州', code: 532300, coordinate: [101.546046, 25.541988]},
        {name: '红河哈尼族彝族自治州', code: 532500, coordinate: [102.884182, 23.366775]},
        {name: '文山壮族苗族自治州', code: 532600, coordinate: [104.74401, 23.66951]},
        {name: '大理白族自治州', code: 532900, coordinate: [100.225668, 25.989449]},
        {name: '德宏傣族景颇族自治州', code: 533100, coordinate: [98.008363, 24.436694]},
        {name: '怒江傈僳族自治州', code: 533300, coordinate: [99.024304, 26.350949]},
        {name: '迪庆藏族自治州', code: 533400, coordinate: [99.206463, 27.826853]},
        {name: '西双版纳傣族自治州', code: 532800, coordinate: [100.997941, 22.201724]},
    ]
}