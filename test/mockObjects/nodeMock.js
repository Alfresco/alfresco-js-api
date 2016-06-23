'use strict';

var nock = require('nock');

class AuthResponseMock {

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
