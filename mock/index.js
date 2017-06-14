import Mock from 'mockjs';
import {allInformation} from './mock.addInformation';
import {allProject} from './mock.allProject';

function addToMock(list) {
    list.forEach(list => {
        Mock.mock(list.path, list.data)
    })
}

addToMock(allInformation);
addToMock(allProject);

export default Mock;
