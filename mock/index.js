import Mock from 'mockjs';
import {allInformation} from './mock.allInformation';
import {allProject} from './mock.allProject';
import {information} from './mock.information';
import {dynamic} from './mock.dynamic';
import {announcement} from './mock.announcement';

function addToMock(list) {
    list.forEach(list => {
        Mock.mock(list.path, list.data)
    })
}

addToMock(allInformation);
addToMock(allProject);
addToMock(information);
addToMock(dynamic);
addToMock(announcement);

export default Mock;
