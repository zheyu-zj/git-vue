import Mock from 'mockjs';
let Random = Mock.Random;

export const allProject = [
    {
        'path': '/json/allProject.json',
        'data': {
            'data|4-24': [
                {
                    'img': Random.dataImage(),
                    'title': Random.ctitle(3, 4),
                    'plat': Random.natural(0,100),
                    'state': Random.natural(1,5),
                    'target': Random.natural(200,99999),
                    'href' : 'javascript:'
                }
            ]
        }
    }
]