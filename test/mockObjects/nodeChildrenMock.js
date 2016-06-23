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

    get200ResponseSingleFileFolder() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(200, {
                'entry': {
                    'isFile': true,
                    'createdByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                    'modifiedAt': '2011-03-03T10:34:52.139+0000',
                    'nodeType': 'cm:content',
                    'content': {
                        'mimeType': 'image/jpeg',
                        'mimeTypeName': 'JPEG Image',
                        'sizeInBytes': 145863,
                        'encoding': 'UTF-8'
                    },
                    'parentId': '880a0f47-31b1-4101-b20b-4d325e54e8b1',
                    'aspectNames': ['rn:renditioned', 'cm:ownable', 'cm:titled', 'cm:auditable', 'cm:author', 'exif:exif'],
                    'createdAt': '2011-03-03T10:34:52.139+0000',
                    'isFolder': false,
                    'modifiedByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                    'name': 'grass.jpg',
                    'id': '80a94ac8-3ece-47ad-864e-5d939424c47c',
                    'properties': {
                        'cm:title': 'grass.jpg',
                        'exif:orientation': 1,
                        'exif:xResolution': 72,
                        'exif:yResolution': 72,
                        'exif:focalLength': 23.42,
                        'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                        'exif:flash': true,
                        'exif:isoSpeedRatings': '100',
                        'exif:pixelXDimension': 1000,
                        'exif:model': 'HP PhotoSmart C850 (V05.27)',
                        'exif:fNumber': 3,
                        'exif:manufacturer': 'Hewlett-Packard',
                        'exif:exposureTime': 0.008,
                        'exif:pixelYDimension': 754,
                        'exif:resolutionUnit': 'Inch',
                        'exif:dateTimeOriginal': '2003-12-30T15:17:54.000+0000',
                        'exif:software': 'Adobe Photoshop CS5 Macintosh'
                    }
                }
            });
    }

    get404FileFolderNotExist() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac4-3ec4-47ad-864e-5d939424c47c')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05220073 The entity with id: 80a94ac4-3ec4-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get204SuccessfullyDeleted() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(204);
    }

    get403DeletePermissionDenied() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(403);
    }

    get404DeleteNotFound() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/nodes/80a94ac8-3ece-47ad-864e-5d939424c47c')
            .reply(404, {
                'error': {
                    'errorKey': 'framework.exception.EntityNotFound',
                    'statusCode': 404,
                    'briefSummary': '05230078 The entity with id: 80a94ac8-3ece-47ad-864e-5d939424c47c was not found',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
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
