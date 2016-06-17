'use strict';

var nock = require('nock');

class AuthResponseMock {

    get200Response() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children')
            .query({'include': 'path', 'relativePath': '%2FSites%2Fswsdp%2FdocumentLibrary'})
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 5,
                        'hasMoreItems': false,
                        'totalItems': 5,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [{
                        'entry': {
                            'createdAt': '2011-02-15T20:47:03.951+0000',
                            'path': {
                                'name': '/Company Home/Sites/swsdp/documentLibrary',
                                'isComplete': true,
                                'elements': [{
                                    'id': '816ed920-409e-4ba5-867a-edc21c52ab6f',
                                    'name': 'Company Home'
                                }, {
                                    'id': '26c06d51-06ea-4c4c-8df9-ee318b62ca2e',
                                    'name': 'Sites'
                                }, {
                                    'id': 'b4cff62a-664d-4d45-9302-98723eac1319',
                                    'name': 'swsdp'
                                }, {'id': '8f2105b4-daaf-4874-9e8a-2152569d109b', 'name': 'documentLibrary'}]
                            },
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T21:00:43.616+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'Agency Files',
                            'id': '8bb36efb-c26d-4d2b-9199-ab6922f53c28',
                            'nodeType': 'cm:folder',
                            'parentId': '8f2105b4-daaf-4874-9e8a-2152569d109b'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T20:50:25.839+0000',
                            'path': {
                                'name': '/Company Home/Sites/swsdp/documentLibrary',
                                'isComplete': true,
                                'elements': [{
                                    'id': '816ed920-409e-4ba5-867a-edc21c52ab6f',
                                    'name': 'Company Home'
                                }, {
                                    'id': '26c06d51-06ea-4c4c-8df9-ee318b62ca2e',
                                    'name': 'Sites'
                                }, {
                                    'id': 'b4cff62a-664d-4d45-9302-98723eac1319',
                                    'name': 'swsdp'
                                }, {'id': '8f2105b4-daaf-4874-9e8a-2152569d109b', 'name': 'documentLibrary'}]
                            },
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T21:08:20.590+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'Budget Files',
                            'id': '8ab12916-4897-47fb-94eb-1ab699822ecb',
                            'nodeType': 'cm:folder',
                            'parentId': '8f2105b4-daaf-4874-9e8a-2152569d109b'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T21:16:26.500+0000',
                            'path': {
                                'name': '/Company Home/Sites/swsdp/documentLibrary',
                                'isComplete': true,
                                'elements': [{
                                    'id': '816ed920-409e-4ba5-867a-edc21c52ab6f',
                                    'name': 'Company Home'
                                }, {
                                    'id': '26c06d51-06ea-4c4c-8df9-ee318b62ca2e',
                                    'name': 'Sites'
                                }, {
                                    'id': 'b4cff62a-664d-4d45-9302-98723eac1319',
                                    'name': 'swsdp'
                                }, {'id': '8f2105b4-daaf-4874-9e8a-2152569d109b', 'name': 'documentLibrary'}]
                            },
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T21:16:26.500+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'Meeting Notes',
                            'id': 'a211774d-ba6d-4a35-b97f-dacfaac7bde3',
                            'nodeType': 'cm:folder',
                            'parentId': '8f2105b4-daaf-4874-9e8a-2152569d109b'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2016-06-08T15:23:26.778+0000',
                            'path': {
                                'name': '/Company Home/Sites/swsdp/documentLibrary',
                                'isComplete': true,
                                'elements': [{
                                    'id': '816ed920-409e-4ba5-867a-edc21c52ab6f',
                                    'name': 'Company Home'
                                }, {
                                    'id': '26c06d51-06ea-4c4c-8df9-ee318b62ca2e',
                                    'name': 'Sites'
                                }, {
                                    'id': 'b4cff62a-664d-4d45-9302-98723eac1319',
                                    'name': 'swsdp'
                                }, {'id': '8f2105b4-daaf-4874-9e8a-2152569d109b', 'name': 'documentLibrary'}]
                            },
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'admin', 'displayName': 'Administrator'},
                            'modifiedAt': '2016-06-08T15:23:30.660+0000',
                            'modifiedByUser': {'id': 'admin', 'displayName': 'Administrator'},
                            'name': 'pdf.js-master',
                            'id': 'ee0aa043-0a83-4012-8ff6-101e2d52beae',
                            'nodeType': 'cm:folder',
                            'parentId': '8f2105b4-daaf-4874-9e8a-2152569d109b'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2011-02-15T21:18:38.144+0000',
                            'path': {
                                'name': '/Company Home/Sites/swsdp/documentLibrary',
                                'isComplete': true,
                                'elements': [{
                                    'id': '816ed920-409e-4ba5-867a-edc21c52ab6f',
                                    'name': 'Company Home'
                                }, {
                                    'id': '26c06d51-06ea-4c4c-8df9-ee318b62ca2e',
                                    'name': 'Sites'
                                }, {
                                    'id': 'b4cff62a-664d-4d45-9302-98723eac1319',
                                    'name': 'swsdp'
                                }, {'id': '8f2105b4-daaf-4874-9e8a-2152569d109b', 'name': 'documentLibrary'}]
                            },
                            'isFolder': true,
                            'isFile': false,
                            'createdByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'modifiedAt': '2011-02-15T21:18:38.144+0000',
                            'modifiedByUser': {'id': 'mjackson', 'displayName': 'Mike Jackson'},
                            'name': 'Presentations',
                            'id': '38745585-816a-403f-8005-0a55c0aec813',
                            'nodeType': 'cm:folder',
                            'parentId': '8f2105b4-daaf-4874-9e8a-2152569d109b'
                        }
                    }]
                }
            });
    }

    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }
}

module.exports = AuthResponseMock;
