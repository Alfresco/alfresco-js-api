import nock from 'nock';
import { BaseMock } from '../base.mock';

export class UserFiltersMock extends BaseMock {

    constructor(host?: string) {
        super(host);
    }

    get200getUserTaskFilters() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/filters/tasks')
            .query({'appId': '1'})
            .reply(200, {
                'size': 4,
                'total': 4,
                'start': 0,
                'data': [{
                    'id': 2,
                    'name': 'Involved Tasks',
                    'appId': 1,
                    'recent': true,
                    'icon': 'glyphicon-align-left',
                    'filter': {'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'involved'}
                }, {
                    'id': 4,
                    'name': 'My Tasks',
                    'appId': 1,
                    'recent': false,
                    'icon': 'glyphicon-inbox',
                    'filter': {'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'assignee'}
                }, {
                    'id': 1,
                    'name': 'Queued Tasks',
                    'appId': 1,
                    'recent': false,
                    'icon': 'glyphicon-record',
                    'filter': {'sort': 'created-desc', 'name': '', 'state': 'open', 'assignment': 'candidate'}
                }, {
                    'id': 3,
                    'name': 'Completed Tasks',
                    'appId': 1,
                    'recent': false,
                    'icon': 'glyphicon-ok-sign',
                    'filter': {'sort': 'created-desc', 'name': '', 'state': 'completed', 'assignment': 'involved'}
                }]
            });
    }

}
