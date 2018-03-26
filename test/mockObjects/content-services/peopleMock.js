'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class PeopleMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get201Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/people')
            .reply(201, {
                'entry': {
                    'firstName': 'chewbacca',
                    'lastName': 'Chewbe',
                    'emailNotificationsEnabled': true,
                    'company': {},
                    'id': 'chewbe',
                    'enabled': true,
                    'email': 'chewbe@millenniumfalcon.com'
                }
            });

    }

    get200GetGroupsResponse() {
        nock(this.host, { 'encodedQueryParams': true })
            .get('/alfresco/api/-default-/public/alfresco/versions/1/people/user/groups')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': true,
                        'totalItems': 107,
                        'skipCount': 0,
                        'maxItems': 2
                    },
                    'entries': [
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'ALFRESCO_ADMINISTRATORS',
                                'id': 'GROUP_ALFRESCO_ADMINISTRATORS'
                            }
                        },
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'ALFRESCO_MODEL_ADMINISTRATORS',
                                'id': 'GROUP_ALFRESCO_MODEL_ADMINISTRATORS'
                            }
                        }
                    ]
                }
            });
    }


    get200ResponsePersons() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/people')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 5,
                        'hasMoreItems': true,
                        'totalItems': 153,
                        'skipCount': 0,
                        'maxItems': 5
                    },
                    'entries': [{
                        'entry': {
                            'firstName': 'anSNSlXA',
                            'lastName': '3PhtPlBO',
                            'jobTitle': 'N/A',
                            'emailNotificationsEnabled': true,
                            'company': {},
                            'id': '0jl2FBTc',
                            'enabled': true,
                            'email': 'owAwLISy'
                        }
                    }, {
                        'entry': {
                            'firstName': '84N1jji3',
                            'lastName': '748zEwJV',
                            'jobTitle': 'N/A',
                            'emailNotificationsEnabled': true,
                            'company': {},
                            'id': '0kd3jA3b',
                            'enabled': true,
                            'email': 'm1ooPRIu'
                        }
                    }, {
                        'entry': {
                            'firstName': 'cPuvOYnb',
                            'lastName': 'GZK6IenG',
                            'jobTitle': 'N/A',
                            'emailNotificationsEnabled': true,
                            'company': {},
                            'id': '1BJSWj5u',
                            'enabled': true,
                            'email': 'UtKzKjje'
                        }
                    }, {
                        'entry': {
                            'firstName': '87vRSHzf',
                            'lastName': 'OiLjkq9z',
                            'jobTitle': 'N/A',
                            'emailNotificationsEnabled': true,
                            'company': {},
                            'id': '1pvBqbmT',
                            'enabled': true,
                            'email': '72GemSCB'
                        }
                    }, {
                        'entry': {
                            'firstName': 'QTxD4AWn',
                            'lastName': 'IHb5JiaR',
                            'jobTitle': 'N/A',
                            'emailNotificationsEnabled': true,
                            'company': {},
                            'id': '2fOamhbL',
                            'enabled': true,
                            'email': 'hhhQHpmZ'
                        }
                    }]
                }
            });
    }

    get200GroupMembershipResponse(user) {
        nock(this.host, { 'encodedQueryParams': true })
            .get('/alfresco/api/-default-/public/alfresco/versions/1/people/'+user+'/groups')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': true,
                        'totalItems': 107,
                        'skipCount': 0,
                        'maxItems': 2
                    },
                    'entries': [
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'ALFRESCO_ADMINISTRATORS',
                                'id': 'GROUP_ALFRESCO_ADMINISTRATORS'
                            }
                        },
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'ALFRESCO_MODEL_ADMINISTRATORS',
                                'id': 'GROUP_ALFRESCO_MODEL_ADMINISTRATORS'
                            }
                        }
                    ]
                }
            });
    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/tags')
            .reply(401, {});
    }
}

module.exports = PeopleMock;
