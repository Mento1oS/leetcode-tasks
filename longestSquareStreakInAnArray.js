/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSquareStreak = function(nums) {
    const sorted = [...nums].sort((a,b)=>b-a);
    const map = new Map();
    for (let i = 0; i < sorted.length; i++) {
        const elem = sorted[i];
        if(map.has(elem*elem)){
            const largerElem = map.get(elem*elem);
            map.set(elem, largerElem+1);
        }else{
            map.set(elem, 1);
        }
    }
    const array = [...map.entries()].sort((a,b)=>b[1]-a[1]);
    if(array[0][1]===1){
        return -1
    }
    return array[0][1];
};

 console.log(longestSquareStreak([216,8161,1213,3133,2678,8790,7000,4436,3219,1115,2926,9660,5421,4542,61,7292,2376,6844,1311,5990,5791,2689,5498,2119,5107,9876,5937,6199,4234,7148,8817,8301,7703,6429,4662,1083,8157,7474,415,4901,5235,8936,3555,2173,7089,5196,6270,9455,2237,9245,6529,242,1462,7190,8614,8138,3223,8362,9470,6622,2575,9658,4516,485,5925,9447,7431,8333,6418,2743,2175,2702,495,7566,9975,2319,3525,5038,6012,2305,9749,2541,974,5769,455,476,6162,156,2788,9690,621,1021,4032,2766,3349,6679,9857,5132,7023,5830,3915,5131,9047,1839,977,3395,7289,1701,9802,8296,7809,1706,5100,1729,6770,8849,2565,6964,1252,1707,9804,1607,2012,7148,9645,9143,2000,7797,3939,8622,5360,8133,8029,2103,7183,8135,791,4460,2492,4643,822,9068,7693,6630,2684,3420,3157,7358,9386,1236,9850,2864,419,9049,1955,3215,3686,2480,6720,9949,3499,530,5654,4311,5210,400,7998,7398,1841,5473,5182,4900,3466,3742,2888,1297,8646,8740,7168,5559,1336,9615,3683,4611,8358,8879,5979,5280,6939,654,4943,9729,4450,7678,74,136,5585,5828,1579,6121,8469,2274,6412,2127,6112,8023,5737,2470,9902,7379,9086,9644,321,7766,9314,8691,7773,775,4041,6013,860,2539,3240,7675,8460,2403,2774,447,8440,8862,6177,6267,7795,7869,8324,9964,3259,6039,3742,8184,6671,2316,2865,821,6874,466,5669,5038,9552,6210,8119,8023,8365,8357,8527,4144,7610,6710,9797,9023,4440,1535,7716,6729,4308,5539,7321,4810,6533,8269,6729,1756,9535,7551,7615,3323,6649,7247,7128,8028,4238,8014,471,6985,7283,6276,4958,6516,7596,6542,4979,4239,4052,9348,3937,9538,4355,5615,2007,3445,8575,4266,1395,443,3805,2616,4436,27,537,6406,2011,4539,9440,2989,108,7971,3797,2097,6992,7750,9847,767,927,5076,3053,3758,7894,4991,2672,8148,3759,3341,6914,4659,7367,7043,366,9117,9743,7094,9922,1079,3810,3235,2921,6770,629,5487,2675,3759,9862,2275,6220,6959,3280,3247,5293,166,3887,473,7176,360,5795,5967,1047,6706,6494,4686,3411,3186,6023,5453,8238,4422,6779,8351,1703,8454,523,4370,5263,5324,9351,2646,8479,2006,6672,8041,9860,1849,6340,5672,8158,2708,2756,6466,8014,1060,4958,886,5693,6742,1326,3233,9507,3345,6305,5257,6010,6954,4643,4730,7456,3677,1734,4978,3825,7185,4427,7269,9702,8754,5319,572,184,2170,3617,4578,2640,4343,9738,8866,6022,987,8544,2982,4876,4399,6110,1407,8129,32,8768,7382,9659,1996,8481,5590,4805,9183,6102,3663,3071,9919,4394,9071,9664,3040,2678,2183,6221,5511,1030,3319,272,1045,2643,4607,3516,5806,8469,8626,630,9836,8707,2938,5097,8681,4772,1442,3723,1447,2185,9033,1004,8497,632,4088,5908,6818,7680,2689,7691,7870,2619,9899,1172,9993,5116,436,7518,6828,6991,8943,1671,9333,6585,9192,7397,1183,7910,8773,110,2279,1698,5000,3594,7714,7334,8740,5056,673,148,4778,718,5616,618,1014,4362,2606,454,9657,8476,4678,7309,2486,8643,6720,8503,8418,4708,1835,8176,3352,8281,1647,7246,4978,5373,8828,9081,1575,3898,4774,8820,635,1969,9722,962,4119,667,3106,4837,8202,8369,8313,2508,5691,9614,7750,7973,5303,3161,5908,9963,2725,5003,4038,953,2935,6357,9817,5053,1649,4374,2550,3137,1024,6708,4921,8406,77,4118,4483,330,7767,3125,5307,6619,6275,2321,8620,9227,3732,140,8263,6181,5219,4055,8812,665,8324,9090,8996,2702,4524,9274,1431,7827,4818,8418,616,3661,7677,8683,7185,8162,9646,9142,8753,4033,7954,811,6185,3729,1913,9433,8584,6713,6343,8932,400,4540,4513,6635,1240,9772,170,5465,7124,7685,2210,568,991,8253,4143,2113,1410,797,3909,9609,7847,4479,9879,3983,6070,2535,9634,5834,2399,5523,5286,8092,1732,1931,2397,5713,290,9947,550,7504,4084,5654,3861,3098,8114,7416,1529,8890,6687,301,1766,5461,1232,9861,2701,6742,912,4217,5230,243,4589,5688,8233,5954,5984,1895,4884,4487,1899,9268,254,4331,8413,3167,3086,8942,2021,1829,7490,9089,5084,4827,4876,4875,3451,4806,7751,5850,3478,2494,1227,8867,7962,667,1992,1438,4743,5286,8477,8800,2749,3306,2471,4392,4109,7885,9775,2191,2746,1212,3979,4205,4096,1910,694,7124,8234,9663,8933,3317,7709,4256,5437,500,4359,5072,3976,4827,4370,8907,290,197,4574,615,7817,4809,6906,3462,644,797,5039,3103,5273,8454,2531,4748,4161,3216,3087,9345,8180,2166,5318,7489,1031,4120,4813,2479,660,3972,1187,9916,9630,6542,4966,7262,7861,8518,523,225,4187,8132,1793,6454,1590,428,6131,4992,8314,4636,7332,5880,8870,8218,2130,3055,3215,6813,9442,4254,6472,4933,5571,2822,8619,8217,1879,8674,8358,2076,7187,9434,8626,4386,1325,1594,952,4571,3851,1913,3394,4163,3980,3381,6698,6840,9926,8979,8733,6170,3639,674,7453,271,3951,9123,6074,3348,3899,9468,5797,9180,6324,2902,477,8694,7884,552,1746,3743,9569,641,7227,7085,1312,5959,9345,3151,8362,2613,4314,5241,7840,8819,185,4908,8820,7707,2724,9834,5987,6806,9131,9842,1601,324,5592,3737,3374,1244,4220,7251,1933,762,5678,8140,3992,5267,3001,7125,3868,9714,7473,3429,3753,3927,8243,7735,1773,2701,1044,3270,9056,5153,3305,4297,7060,4320,3672,4333,4252,4960,3970,2245,5415,6469,7723,5125,2378,2791,9122,2089,9243,2348,7211,9629,1112,7982,4209,3989,8727,5837,2974,7343,153,6580,2654,7664,4644,1735,8523,5645,5657,5497,5183,3842,794,8048,4999,1371,3061,6550,3001,6587,6730,1869,6482,9815,830,8877,1610,6779,1455,1731,6894,3634,912,8464,1965,3715,8820,942,2641,6541,6800,5359,8701,6287,3025,7424,463,460,2026,8713,2604,4866,6920,4370,7130,4363,4613,4149,3915,4941,4543,3893,4101,1625,3412,4688,8505,6928,1779,5676,5399,7053,6728,4098,2106,1378,5546,4307,5187,8583,263,7550,9311,8053,1371,5557,5782,7189,4828,171,4405,9161,5334,3501,5936,3547,621,6306,9521,5573,1594,9442,8730,775,3287,9140,9550,4189,8451,2436,5801,2774,4896,6491,2468,4392,4902,6880,8606,1467,3348,6005,6685,3383,1593,7029,3944,6534,6768,2729,5445,1134,1981,1248,3878,3370,578,2409,7588,9127,4568,3091,6712,2899,6807,729,8999,3239,993,3425,3781,2402,9944,8602,1232,8336,2867,973,4096,3024,5744,100,6399,5567,9917,9149,2055,1563,4215,453,9717,7320,4718,633,3017,3063,6651,9207,5713,462,9773,7952,6750,6454,9996,5252,1142,8799,423,8342,1951,8352,6556,2420,7720,8421,6954,4931,941,9982,5430,5653,8882,2558,3814,8301,9273,2231,5277,8116,2522,2115,6386,5161,8142,7111,6281,4203,4668,8992,4126,8954,6874,6566,2275,3184,2496,6084,9565,8905,4238,5195,9632,3811,9389,9999,7704,819,7179,342,8660,4039,2346,9138,3107,7974,7636,7139,7094,9244,4326,8321,8411,4870,5965,4344,6486,1679,4827,8275,3042,1529,9476,2774,4504,32,730,5791,4110,8544,6739,9370,6048,1108,6310,3544,8658,3416,5401,4134,3025,982,9683,3823,529,1283,8479,167,2292,8477,3662,3116,8894,4664,1115,4695,190,3809,1421,9402,6649,3515,1363,2722,1943,1262,5519,9661,9421,4598,6390,4104,2325,2717,3916,3257,4935,3180,1816,6988,3828,2306,893,6247,5702,2401,5732,47,6280,6431,5039,381,2688,2600,324,5471,4173,1585,8035,1570,9444,2456,8594,6223,480,4695,2886,6655,7888,1787,8783,8373,1497,3198,7150,5271,1636,2500,7152,4915,7430,6049,7478,1033,2143,4091,3681,872,6160,6375,3362,9263,6378,5592,8478,7067,3597,5216,9669,6009,522,8927,3676,4413,3120,8134,8853,1592,9959,5167,9251,8754,5279,6662,6202,9964,7709,8584,155,9830,7795,6811,3018,2927,4227,9226,4775,9723,998,6530,6726,4550,7104,7786,2517,2505,8625,2419,9949,4083,6000,7174,5613,551,7720,9608,8276,6286,1206,2,8640,5843,9361,9045,7951,7763,8342,4116,9282,5531,5137,5574,7067,6900,7270,4790,1225,9894,9650,2754,2648,271,4260,4759,9283,6674,6277,85,7087,5287,5616,2006,6144,8093,8844,5600,6510,6809,3712,5683,4828,2730,6460,1331,9248,1246,3760,9582,1139,1096,1693,2691,8119,4748,8430,8962,8886,114,6196,7106,1261,3696,1018,7432,583,593,6361,9525,7892,5894,8036,4647,3483,2072,204,4175,3416,4320,310,9175,8603,8691,6482,387,6007,8895,7388,2154,8894,5767,2738,5069,473,4400,8620,7227,9799,9361,4584,2798,3615,2367,9312,6835,7770,2621,3708,6662,2847,8025,770,5019,3321,7845,9653,2788,2867,2370,6679,5383,295,5885,3942,8122,3001,1427,5628,1243,6506,7405,3743,6238,9028,6962,9346,8272,9107,2986,1269,1436,2504,6877,3419,1269,9002,5617,1215,6171,7649,534,3865,3217,3523,3935,589,7922,322,9593,2977,6041,7056,5070,4797,6630,7362,2535,8661,7239,5848,2092,2699,1393,1491,4530,7628,107,4381,9042,5392,4330,271,3630,6755,3433,559,3423,291,241,4909,1107,8151,221,1344,2752,6297,1349,5180,9801,5965,2580,2131,9459,2103,4478,3466,1311,3755,2532,5189,1907,2590,3603,1542,5288,45,8930,552,6964,4613,3767,9945,9008,6278,6268,4224,7940,1591,6846,7977,4598,160,9085,3640,434,6922,5079,3260,4842,4279,793,5508,261,7193,2632,3091,713,2735,2574,7964,4657,9534,2498,2050,6601,1542,6451,3632,9065,5105,1829,3097,1409,4013,3939,3222,2631,9735,8345,6579,1569,9327,4357,6427,2523,3986,8072,692,3448,8802,4308,1363,7587,5053,1194,828,5269,5281,363,3118,4419,3220,3365,5545,1728,5008,6996,8316,5955,9078,6784,3079,7460,6481,4023,4534,5454,1610,7681,6737,6534,2725,4630,6477,2263,7894,6399,8770,7640,8169,536,3251,9384,3218,1535,6486,2150,7969,7076,8732,8856,4192,9684,4586,2982,8194,8185,9732,21,7798,132,100,9496,5265,2791,1645,3796,3145,4972,6803,7124,3319,966,4698,6991,543,2552,1826,4958,7386,8528,1039,9111,1187,6651,9469,4313,7267,8599,4914,90,3698,8402,5355,4555,3813,5233,7289,3876,548,8104,5608,920,3768,3474,1746,1162,6645,3103,6053,2049,1672,6306,1676,8569,2217,7954,3504,3024,8958,3343,2821,7761,879,5413,4607,9408,628,3456,8200,6301,356,3064,2918,3684,3047,1933,9157,1597,5427,2449,5414,107,8691,1021,8662,3832,1651,3222,4949,6709,5366,1968,7896,554,9542,8302,7270,6025,1258,312,4710,2076,6590,2860,9945,5236,6759,3008,6672,2817,6021,1978,5601,7283,1462,5039,5483,4460,2667,3331,8171,260,7144,2455,7050,9011,9873,2433,9672,6780,6892,8400,7571,4097,7472,7430,328,7018,5338,664,9253,1566,344,142,7710,2004,6520,3149,6473,5367,1230,1149,4448,3325,1382,4308,7009,1047,4341,8728,912,7700,921,2769,2972,1793,9853,7454,6651,7703,8159,3557,3059,573,3403,17,5643,56,7783,9475,2760,801,3188,8329,5853,3043,9924,7577,9094,9278,2912,8792,8882,1673,2796,8110,9148,1055,8434,1698,2749,348,9438,770,81,947,5643,412,2555,6359,575,7432,5233,4171,4812,2097,108,5154,969,6642,6968,9346,2054,7513,2808,2225,3407,2393,2727,8467,1168,5759,6975,5561,5479,9180,9643,7990,7052,6590,2102,9645,60,2795,810,6236,270,4025,8316,2414,7461,9582,706,3087,5089,7821,8660,893,7207,8941,8916,9046,9202,7430,631,2838,6866,1970,448,3377,3074,8944,1138,5405,920,7521,819,8625,8110,2870,3046,2076,345,1905,3529,2217,1224,7434,7481,4123,5363,8962,9437,7669,1124,3443,8031,290,9998,7107,4286,6108,1718,1750,4284,9685,5474,5604,8158,1997,9196,5751,6392,8833,310,1544,3240,7970,8215,2022,9418,8196,2635,9460,8648,1702,2072,5557,5043,1486,6532,3472,851,523,5346,2273,701,3245,2448,3652,7091,3906,7051,923,1736,3770,3142,7125,1801,5497,5580,1163,1966,1919,3060,1768,694,8087,4506,7768,3926,3216,6462,4893,2545,1908,5431,6362,9429,5992,8042,7390,1455,3622,8869,1142,8908,639,2980,8949,4187,1895,6999,5276,3365,5162,6986,65,31,8169,2832,1519,163,628,9254,1388,476,4383,1248,3054,1669,6976,1728,3651,5176,3824,6471,8774,7167,3198,6577,6122,5024,5520,518,9457,397,7044,4382,2666,555,100,1695,1553,4336,3260,5380,818,5522,6327,6279,9882,268,307,1284,6104,7755,6105,2961,622,8876,5267,5776,3970,1732,1928,89,6823,1841,6285,9168,4999,1988,6598,4670,2806,882,2273,3755,102,6610,4464,5641,7632,910,6889,1794,3385,9900,8234,1654,7792,6970,5907,362,8990,4307,4119,8320,1390,3993,454,5471,873,3807,3004,2505,7758,3852,6963,7546,9326,8797,7872,9261,3207,2344,2248,1473,6743,2191,6432,4997,1779,2690,4992,711,9176,5508,3957,7312,7831,3782,5712,5327,8732,7416,1049,8075,9694,3114,8112,4605,4488,7673,4037,4967,2979,6750,9312,152,8701,8478,3459,2666,5776,2665,6319,1198,9881,4473,7271,6580,9143,1423,823,6547,8604,7434,2578,1724,5706,7123,2347,5712,8221,5040,9915,342,7441,8645,6050,4641,5122,3523,1927,9660,3746,1087,3872,8680,4120,6377,5790,4591,9412,8567,8280,2631,6737,5740,2666,1915,1962,1165,3514,6195,9270,2538,157,9354,5099,4846,7612,9380,4438,4026,384,2865,1094,2221,9940,6383,6045,1806,3422,6456,6742,5284,6980,7010,4556,2015,6392,5691,6034,5864,1100,5492,9915,3824,793,7721,4456,2508,208,1246,5979,3112,1831,5977,5464,5498,5850,6352,3356,7785,6452,789,8233,4481,9251,9323,8617,7666,3074,9707,1624,7108,5936,7515,5484,778,9484,7005,9615,42,6166,5978,3642,2771,1809,4519,5764,2698,1429,390,7288,1055,2049,6028,8329,6978,7081,9295,3321,2335,8840,318,8550,5147,3531,1114,6129,2111,3194,181,9547,2094,2064,9142,5059,5849,6868,4654,5950,2256,7653,8960,4762,4168,5947,6121,4366,9627,6594,3576,8082,5387,6822,2972,5640,565,2369,6096,6083,3538,50,877,5740,622,3189,2498,7882,5714,3502,1642,8108,3848,8918,7571,7815,7194,9255,1221,289,4802,9490,5512,46,4048,3639,970,7494,7283,4020,2327,468,3120,8319,7176,4381,7341,2162,2501,5097,7292,2431,2747,2060,1225,7868,1290,5460,7875,918,9679,496,9606,5449,9065,7739,7985,9278,6810,9980,5809,3449,4786,9298,4802,8452,48,124,3530,7077,3954,7448,395,6357,3492,1153,8049,4593,4889,2157,9795,4875,6907,7416,8386,9281,6683,4540,6546,6728,1260,2941,7655,7129,7174,429,6575,5354,5816,4117,8384,9592,3779,8430,6490,6928,1415,9437,3528,9555,3679,7228,1038,4246,1107,5423,6229,3869,3266,6322,9667,6799,4080,6219,3210,4235,2439,6788,4652,4360,5771,6846,8344,578,1901,6737,2685,926,7806,4654,8572,1797,9098,6258,7849,3674,9842,2346,5737,3753,5463,7486,8016,7888,7423,8578,2412,1478,492,5491,256,7701,3690,784,4273,4758,3046,2319,5094,5249,8288,1915,265,7632,1212,5873,845,1548,9125,1296,5221,2194,5152,6975,2534,8706,803,642,7892,3125,1267,1602,1921,8429,4064,7919,8011,2871,6875,3198,8683,2009,1017,798,6402,4411,5106,8088,7497,7957,358,1911,9465,1654,2389,4874,6528,6742,5412,2385,9455,5955,1307,4664,6847,5951,5949,8575,4570,6809,2867,9242,6097,9960,606,9873,6913,9886,2259,3779,8489,231,1448,7695,2396,1945,5017,2106,1930,9233,8394,8283,8027,7464,5492,7264,1586,1481,9002,3061,6819,2403,3709,7095,9328,3198,7530,5125,5811,5149,4242,6812,4166,9119,8630,9621,9683,7525,994,8889,5936,2383,1547,3226,7396,4110,3538,9780,722,4645,9760,8945,5045,3799,7734,1290,119,7879,2217,6967,6745,4751,5404,9373,5560,3335,8009,2290,595,4033,7054,8053,7268,8293,2517,3554,1940,5302,5337,2788,4193,7405,6383,6835,7629,9066,1018,8736,3138,5987,2790,9364,1243,1941,6033,5856,7522,1633,2452,240,1235,227,3190,3836,7065,558,3384,9482,3891,2374,7561,6714,780,2057,7967,7720,6663,8417,8400,6510,571,7283,2147,9069,8501,6347,716,3125,5668,2756,2308,8053,864,2846,8672,4736,5671,6529,2134,3332,7597,7672,6711,2638,3592,3764,2694,822,1235,5181,9513,6813,9831,272,5067,5070,2235,4630,7128,2396,7962,5639,7569,9003,4834,9648,7628,2897,9969,670,6180,1381,2403,9309,5530,9995,3915,4036,7807,9446,957,535,4853,5725,8030,5973,9946,2048,443,6305,8431,948,2851,6707,8103,1308,9503,8166,189,4369,600,4263,7476,4396,8296,8449,3489,5867,3332,7585,3918,5011,3523,8205,443,4893,954,1439,5526,1024,1876,990,5910,3125,6408,2018,1441,540,8001,8918,7373,9634,6911,4760,280,6852,820,1483,5706,3785,9397,7015,8755,271,8651,5795,4213,8078,996,2265,2423,9459,5879,5108,2785,9686,4457,3789,6731,2590,2645,6438,2920,105,8422,2789,460,195,620,5898,8690,5724,3700,897,1712,8029,7090,2811,2246,5387,2167,7982,4299,4851,1675,7015,890,387,2024,9515,9850,7518,3592,2815,8253,5140,2024,5870,8794,4514,3851,804,7209,8623,4409,2681,8409,7732,4005,8836,4768,9446,8254,2844,3508,4804,2563,1152,1490,6947,109,1925,94,9072,4844,7832,5475,5386,7675,5154,1831,9459,3301,5121,9366,8986,4244,2714,1400,9988,4582,6441,3918,1276,5833,1689,9337,4615,3331,2024,3171,9473,6236,8305,1258,1646,6498,230,7821,1584,8608,1603,900,9177,7452,2825,9157,2535,3018,543,4459,9139,4496,6754,6078,8209,3857,9021,8219,7016,2411,9977,6800,9978,8262,2544,206,2215,875,3075,2928,6268,1063,3049,6351,5704,8819,7263,3263,9042,3844,4991,6085,67,3269,3687,1674,931,1201,1648,1516,541,6518,726,9538,3223,9108,95,8625,7181,8960,2623,1334,9837,8981,1082,2251,4972,958,324,7299,4870,5177,1180,5459,1129,8195,7867,7741,8677,4270,5262,2098,7802,3238,2512,7424,5172,5237,7958,335,4132,9028,6246,4819,2775,6457,2231,1518,7248,6177,4754,8265,563,3575,14,7228,8330,9293,3474,5712,5256,6719,8449,357,7498,8723,4622,2756,7536,3512,2995,8764,851,276,1993,7853,8762,9418,5302,7304,7386,4656,697,8664,7982,5371,2871,1539,7463,5531,1469,1486,9179,489,8592,7043,9452,4279,8897,4683,1182,2229,8414,8693,9200,836,741,3198,5712,9037,3177,3289,7438,100,2623,2166,6772,1887,4215,583,8143,4726,6722,7567,2230,2301,8759,616,6709,7702,5503,6722,3442,7076,9989,6069,8080,1378,186,2265,4699,3343,2881,2710,3854,7261,9065,3533,975,8726,1606,8823,827,1378,3782,280,3088,7391,4366,8444,3175,7927,457,3053,9002,3667,3872,1336,5974,5901,2583,5083,3776,1271,6954,8499,3205,4614,6526,6439,8331,8155,9419,5056,1464,7108,7403,2421,819,3750,4343,3432,1375,8971,2697,7908,1040,9045,3959,3612,5120,1082,3910,9925,7464,8655,7004,837,2285,7210,3104,9102,326,1151,9200,7447,1290,8655,3471,5751,8616,5166,2196,4245,5568,3158,4205,9189,3234,8525,8367,6012,1289,6336,8542,6596,79,5011,4502,1530,9483,2749,1072,2277,6451,1995,995,1886,9038,7816,2875,8883,8010,8599,572,5753,413,3336,9749,6161,1869,5136,9452,7947,6423,74,2154,8658,8297,9877,7803,4899,861,6496,9211,3706,651,7691,9670,4625,9719,5630,2924,9573,7200,7345,6753,5521,1690,785,8793,3714,8571,3241,8005,3202,547,6128,2079,9029,8985,2783,294,9563,2929,6991,8160,5758,1562,6866,9183,7557,4313,9800,9674,3527,4866,2216,5534,7632,5095,1953,9390,2577,8434,1302,6916,3711,9020,7274,1087,2550,7488,6405,2108,6935,1736,7137,8132,8807,1077,7632,7754,7657,5038,7958,8998,9118,5148,4244,143,8901,2480,7029,1736,3167,5608,7048,8542,48,7869,4417,8017,151,4858,3667,3367,2818,9123,9218,7151,8285,7098,8462,860,2923,8990,9243,8632,9959,3558,1112,4122,5467,792,6991,965,9710,9952,2205,1109,2000,8950,9083,61,3213,3363,7615,8091,3144,4699,8572,8202,5472,4527,9556,3419,6380,4268,2649,7626,9024,6428,6246,3352,463,3060,2763,437,7323,3548,2462,1338,6300,6899,6694,3621,2141,7526,4374,4308,6489,4008,3871,7416,2251,899,9768,5328,1341,2045,6522,4360,3306,7810,3380,1067,1633,6286,1379,7019,3890,9107,7421,8001,8515,402,9516,1486,8008,7877,3322,8158,4302,3092,8616,7331,8627,114,9603,1632,6050,4195,1436,8764,1911,8384,6677,1382,7059,1295,2579,115,1637,9339,9421,3787,5015,2561,6581,433,6529,2300,5001,1490,1138,3075,3349,1182,5623,6334,1362,1689,3698,3348,6327,63,4744,9523,1735,2592,1379,5684,8704,6018,6499,6615,1191,9641,5413,4145,7132,3252,2740,9627,8949,4688,7567,7207,299,7574,6935,1271,8016,3222,877,914,7147,4773,8300,7800,4690,1748,6491,3605,6877,5470,851,6679,612,7348,4246,8398,8869,1249,7957,6907,1485,4348,5409,7944,5712,5810,8993,4695,6613,2221,1450,1170,1908,7227,8138,9147,2751,2452,678,6693,4374,9780,621,5278,4933,6516,2778,7339,2908,9490,7915,6744,6267,9237,8071,6542,7661,1361,3161,3181,9153,5090,3136,8667,1722,1420,1787,8202,4954,2536,658,2086,6462,9924,7441,1745,4439,416,3615,3814,1462,1407,9037,4954,8056,1034,9588,6167,9700,1856,8732,4167,5673,880,4950,620,3517,52,7390,3791,2188,9905,1740,1638,5830,9168,8368,5313,7886,2954,1841,7069,4883,1636,9102,5269,1226,2301,4406,225,6714,3282,448,8752,1585,3156,6993,2482,5615,8019,5599,6812,8801,2284,7044,7219,4155,3056,5962,4455,5967,6202,101,1669,8732,2843,1555,6531,6329,3764,2866,7257,5436,9035,95,9772,5878,9064,302,4965,874,2433,1894,814,4287,8248,6064,2836,1596,1396,7458,4196,3600,6483,4898,8009,7434,640,2533,1655,4263,2820,6089,1053,7578,9107,3822,1928,4707,6228,1206,5477,1071,2618,4511,8424,5134,3123,684,6618,5462,3598,8343,3759,605,7187,8093,6278,1633,1073,5639,8930,3783,8747,2448,959,5541,3489,2505,3524,3675,3716,536,5013,9726,1781,2258,8051,5374,3206,9587,7163,3460,9941,3842,4062,5031,7412,6017,7961,9806,874,9169,2807,7198,4883,9901,5522,1524,9470,3159,1451,7406,5574,6678,7421,2610,8356,2876,7753,8730,6111,775,9154,8673,6996,4429,3743,4991,4440,3122,9126,9969,1494,313,3050,5567,4987,846,187,815,232,3702,9321,4221,4902,5564,1404,9213,299,9409,9931,4951,6031,9106,8682,3224,8850,3663,949,4054,9341,2297,4682,8015,5465,9244,1394,8663,7788,2652,5441,4830,952,5351,542,463,4801,6603,196,6196,1410,3896,8022,5504,3663,6491,7521,6230,7284,2864,9537,9489,6123,9401,3112,2633,2115,6800,2512,8385,6261,4200,8637,8578,1718,6352,4190,6480,7463,4563,1072,3280,6394,514,6041,2603,3827,1773]));