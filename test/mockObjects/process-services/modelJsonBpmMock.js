'use strict';

let nock = require('nock');
let BaseMock = require('../baseMock');

class ModelJsonBpmMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200EditorDisplayJsonClient() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/models/1/model-json')
            .reply(200, {
                'elements': [{
                    'id': 'startEvent1',
                    'name': null,
                    'x': 100,
                    'y': 163,
                    'width': 30,
                    'height': 30,
                    'type': 'StartEvent',
                    'properties': []
                }, {
                    'id': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'name': null,
                    'x': 175,
                    'y': 138,
                    'width': 100,
                    'height': 80,
                    'type': 'UserTask',
                    'properties': [{'name': 'Assignee', 'value': '$INITIATOR'}]
                }, {
                    'id': 'sid-8F6A225D-91AC-4FE3-8DDF-7DF034A37C44',
                    'name': null,
                    'x': 320,
                    'y': 164,
                    'width': 28,
                    'height': 28,
                    'type': 'EndEvent',
                    'properties': []
                }],
                'flows': [{
                    'id': 'sid-BC321EAF-BF83-4343-91C4-C0E7C4E10133',
                    'type': 'sequenceFlow',
                    'sourceRef': 'startEvent1',
                    'targetRef': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'waypoints': [{'x': 130, 'y': 178}, {'x': 175, 'y': 178}],
                    'properties': []
                }, {
                    'id': 'sid-CA38A1B7-1BFC-44C1-B20D-86748AE7AAA0',
                    'type': 'sequenceFlow',
                    'sourceRef': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'targetRef': 'sid-8F6A225D-91AC-4FE3-8DDF-7DF034A37C44',
                    'waypoints': [{'x': 275, 'y': 178}, {'x': 320, 'y': 178}],
                    'properties': []
                }],
                'diagramBeginX': 115,
                'diagramBeginY': 138,
                'diagramWidth': 348,
                'diagramHeight': 218
            });
    }

    get200HistoricEditorDisplayJsonClient() {
        nock('http://127.0.0.1:9999', {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/models/1/history/1/model-json')
            .reply(200, {
                'elements': [{
                    'id': 'startEvent1',
                    'name': null,
                    'x': 100,
                    'y': 163,
                    'width': 30,
                    'height': 30,
                    'type': 'StartEvent',
                    'properties': []
                }, {
                    'id': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'name': null,
                    'x': 175,
                    'y': 138,
                    'width': 100,
                    'height': 80,
                    'type': 'UserTask',
                    'properties': [{'name': 'Assignee', 'value': '$INITIATOR'}]
                }, {
                    'id': 'sid-8F6A225D-91AC-4FE3-8DDF-7DF034A37C44',
                    'name': null,
                    'x': 320,
                    'y': 164,
                    'width': 28,
                    'height': 28,
                    'type': 'EndEvent',
                    'properties': []
                }],
                'flows': [{
                    'id': 'sid-BC321EAF-BF83-4343-91C4-C0E7C4E10133',
                    'type': 'sequenceFlow',
                    'sourceRef': 'startEvent1',
                    'targetRef': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'waypoints': [{'x': 130, 'y': 178}, {'x': 175, 'y': 178}],
                    'properties': []
                }, {
                    'id': 'sid-CA38A1B7-1BFC-44C1-B20D-86748AE7AAA0',
                    'type': 'sequenceFlow',
                    'sourceRef': 'sid-8B04E151-6B46-4F48-B49E-F719057353AD',
                    'targetRef': 'sid-8F6A225D-91AC-4FE3-8DDF-7DF034A37C44',
                    'waypoints': [{'x': 275, 'y': 178}, {'x': 320, 'y': 178}],
                    'properties': []
                }],
                'diagramBeginX': 115,
                'diagramBeginY': 138,
                'diagramWidth': 348,
                'diagramHeight': 218
            });
    }
}

module.exports = ModelJsonBpmMock;
