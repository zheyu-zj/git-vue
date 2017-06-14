import Mock from 'mockjs'
let Random = Mock.Random;

export const allInformation = [
    {
        path: '/json/allInformation.json',
        data: {
            'data': [
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
                {
                    'coin': Random.dataImage(),
                    'name': Random.ctitle(3, 4),
                    'abbreviations': Random.string(2, 3),
                    'latestPrice': Random.float(0, 99, 0, 5),
                    'Hours24': Random.float(0, 100000000, 0, 5),
                    'Turnover24': Random.float(0, 100000000, 0, 5),
                    'RiseFall24': Random.float(-10, 10, 0, 2) ,
                    'RiseFall7D': Random.float(-100, 100, 0, 2)
                },
            ]
        }
    }
];