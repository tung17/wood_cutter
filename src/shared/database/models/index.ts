import {adminModel} from './admin.model';
import {userModel} from './user.model';
import {deviceModel} from './device.model';
import {deviceGroupModel} from './device_group.model';
import {userCredentialModel} from './user_credentials.model';
import {dataLogModel} from './data_log.model';
import {lastLogModel} from './last_log.model';

function userFactory(role:string)
{
    if(role == 'ADMIN') return adminModel;
    else return userModel;
}


export const databaseService = {
    userFactory,
    adminModel,
    userModel,
    deviceModel,
    deviceGroupModel,
    userCredentialModel,
    dataLogModel,
    lastLogModel
}