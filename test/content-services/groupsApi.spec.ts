/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let GroupsMock = require('../../test/mockObjects/mockAlfrescoApi').GroupsApi;
let expect = require('chai').expect;

describe('Groups', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.groupsMock = new GroupsMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get groups', function (done) {
        this.groupsMock.get200GetGroups();

        this.alfrescoJsApi.core.groupsApi.getGroups().then(function (data) {
            expect(data.list.pagination.count).to.be.equal(2);
            expect(data.list.entries[0].entry.id).to.be.equal('GROUP_alfalfa');
            expect(data.list.entries[1].entry.id).to.be.equal('GROUP_CallCenterAA');
            done();
        },                                                 function () {
        });
    });

    it('create group', function (done) {
        this.groupsMock.get200CreateGroupResponse();

        const groupBody = {
            id: 'SUB_TEST',
            displayName: 'SAMPLE'
        };

        this.alfrescoJsApi.core.groupsApi.createGroup(groupBody).then(function (data) {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            done();
        },                                                            function () {
        });
    });

    it('delete group', function (done) {
        this.groupsMock.getDeleteGroupSuccessfulResponse('group_test');
        this.alfrescoJsApi.core.groupsApi.deleteGroup('group_test').then(function () {
            done();
        },                                                               function () {
        });
    });

    it('get single group', function (done) {
        this.groupsMock.get200GetSingleGroup();

        this.alfrescoJsApi.core.groupsApi.getGroup('GROUP_TEST').then(function (data) {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            expect(data.entry.displayName).to.be.equal('SAMPLE');
            done();
        },                                                            function () {
        });
    });

    it('update group', function (done) {
        this.groupsMock.get200UpdateGroupResponse();

        const groupBody = {
            displayName: 'CHANGED'
        };

        this.alfrescoJsApi.core.groupsApi.updateGroup('GROUP_TEST', groupBody).then(function (data) {
            expect(data.entry.id).to.be.equal('GROUP_TEST');
            expect(data.entry.displayName).to.be.equal('CHANGED');
            done();
        },                                                                          function () {
        });
    });

    it('get group members', function (done) {
        this.groupsMock.get200GetGroupMemberships();

        this.alfrescoJsApi.core.groupsApi.getGroupMembers('GROUP_TEST').then(function (data) {
            expect(data.list.pagination.count).to.be.equal(1);
            expect(data.list.entries[0].entry.id).to.be.equal('GROUP_SUB_TEST');
            expect(data.list.entries[0].entry.displayName).to.be.equal('SAMPLE');
            done();
        },                                                                   function () {
        });
    });

    it('add group member', function (done) {
        this.groupsMock.get200AddGroupMembershipResponse();

        const groupBody = {
            id: 'GROUP_SUB_TEST',
            memberType: 'GROUP'
          };

        this.alfrescoJsApi.core.groupsApi.addGroupMember('GROUP_TEST', groupBody).then(function (data) {
            expect(data.entry.id).to.be.equal('GROUP_SUB_TEST');
            expect(data.entry.displayName).to.be.equal('SAMPLE');
            done();
        },                                                                             function () {
        });
    });

    it('delete group member', function (done) {
        this.groupsMock.getDeleteMemberForGroupSuccessfulResponse('GROUP_TEST', 'GROUP_SUB_TEST');

        this.alfrescoJsApi.core.groupsApi.deleteGroupMember('GROUP_TEST', 'GROUP_SUB_TEST').then(function () {
            done();
        },                                                                                       function () {
        });
    });

});
