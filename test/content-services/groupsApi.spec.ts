/*global describe, it, beforeEach */

import { AlfrescoApi } from '../../src/alfrescoApi';
import { GroupsApi } from '../../src/api/content-rest-api';

const AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
const GroupsMock = require('../../test/mockObjects/mockAlfrescoApi').GroupsApi;
const expect = require('chai').expect;

describe('Groups', () => {
    let authResponseMock: any;
    let groupsMock: any;
    let groupsApi: GroupsApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        groupsMock = new GroupsMock();

        authResponseMock.get201Response();
        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        groupsApi = new GroupsApi(alfrescoJsApi);
    });

    it('get groups', (done) => {
        groupsMock.get200GetGroups();

        groupsApi.listGroups().then(
            (data: any) => {
                expect(data.list.pagination.count).to.be.equal(2);
                expect(data.list.entries[0].entry.id).to.be.equal('GROUP_alfalfa');
                expect(data.list.entries[1].entry.id).to.be.equal('GROUP_CallCenterAA');
                done();
            }
        );
    });

    it('create group', (done) => {
        groupsMock.get200CreateGroupResponse();

        const groupBody = {
            id: 'SUB_TEST',
            displayName: 'SAMPLE'
        };

        groupsApi.createGroup(groupBody).then((data) => {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            done();
        });
    });

    it('delete group', (done) => {
        groupsMock.getDeleteGroupSuccessfulResponse('group_test');
        groupsApi.deleteGroup('group_test').then(() => {
            done();
        });
    });

    it('get single group', (done) => {
        groupsMock.get200GetSingleGroup();

        groupsApi.getGroup('GROUP_TEST').then((data) => {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            expect(data.entry.displayName).to.be.equal('SAMPLE');
            done();
        });
    });

    it('update group', (done) => {
        groupsMock.get200UpdateGroupResponse();

        const groupBody = {
            displayName: 'CHANGED'
        };

        groupsApi.updateGroup('GROUP_TEST', groupBody).then((data) => {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            expect(data.entry.displayName).to.be.equal('CHANGED');
            done();
        });
    });

    it('get group members', (done) => {
        groupsMock.get200GetGroupMemberships();

        groupsApi.listGroupMemberships('GROUP_TEST').then((data) => {
            expect(data.list.pagination.count).to.be.equal(1);
            expect(data.list.entries[0].entry.id).to.be.equal('GROUP_SUB_TEST');
            expect(data.list.entries[0].entry.displayName).to.be.equal('SAMPLE');
            done();
        });
    });

    it('add group member', (done) => {
        groupsMock.get200AddGroupMembershipResponse();

        const groupBody = {
            id: 'GROUP_SUB_TEST',
            memberType: 'GROUP'
          };

        groupsApi.createGroupMembership('GROUP_TEST', groupBody).then((data: any) => {
            expect(data.entry.id).to.be.equal('GROUP_SUB_TEST');
            expect(data.entry.displayName).to.be.equal('SAMPLE');
            done();
        });
    });

    it('delete group member', (done) => {
        groupsMock.getDeleteMemberForGroupSuccessfulResponse('GROUP_TEST', 'GROUP_SUB_TEST');
        groupsApi.deleteGroupMembership('GROUP_TEST', 'GROUP_SUB_TEST').then(() => {
            done();
        });
    });
});
