'use strict';

let nock = require('nock');
let BaseMock = require('../baseMock');

class DiscoveryMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/discovery')
            .reply(200, {
                'entry': {
                    'repository': {
                        'edition': 'Enterprise',
                        'version': {
                            'major': '5',
                            'minor': '2',
                            'patch': '1',
                            'hotfix': '0',
                            'schema': 10052,
                            'label': 'r133188-b433',
                            'display': '5.2.1.0 (r133188-b433) schema 10052'
                        },
                        'license': {
                            'issuedAt': '2017-04-10T10:45:00.177+0000',
                            'expiresAt': '2017-05-10T00:00:00.000+0000',
                            'remainingDays': 16,
                            'holder': 'Trial User',
                            'mode': 'ENTERPRISE',
                            'entitlements': {'isClusterEnabled': false, 'isCryptodocEnabled': false}
                        },
                        'status': {
                            'isReadOnly': false,
                            'isAuditEnabled': true,
                            'isQuickShareEnabled': true,
                            'isThumbnailGenerationEnabled': true
                        },
                        'modules': [{
                            'id': 'alfresco-share-services',
                            'title': 'Alfresco Share Services AMP',
                            'description': 'Module to be applied to alfresco.war, containing APIs for Alfresco Share',
                            'version': '5.2.0',
                            'installDate': '2016-11-28T18:59:22.555+0000',
                            'installState': 'INSTALLED',
                            'versionMin': '5.1',
                            'versionMax': '999'
                        }, {
                            'id': 'alfresco-trashcan-cleaner',
                            'title': 'alfresco-trashcan-cleaner project',
                            'description': 'The Alfresco Trash Can Cleaner (Alfresco Module)',
                            'version': '2.2',
                            'installState': 'UNKNOWN',
                            'versionMin': '0',
                            'versionMax': '999'
                        }, {
                            'id': 'enablecors',
                            'title': 'Enable Cors support',
                            'description': 'Adds a web-fragment with the filter config for Cors support',
                            'version': '1.0-SNAPSHOT',
                            'installState': 'UNKNOWN',
                            'versionMin': '0',
                            'versionMax': '999'
                        }]
                    }
                }
            });
    }

}

module.exports = DiscoveryMock;
