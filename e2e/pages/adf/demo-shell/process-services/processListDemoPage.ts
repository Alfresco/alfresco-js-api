/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserVisibility } from '@alfresco/adf-testing';
import { DataTableComponentPage } from '@alfresco/adf-testing';
import { element, by, protractor } from 'protractor';

export class ProcessListDemoPage {

    appIdInput = element(by.css('input[data-automation-id="app-id"]'));
    resetButton = element(by.cssContainingText('button span', 'Reset'));
    emptyProcessContent = element(by.css('div[class="adf-empty-content"]'));
    processDefinitionInput = element(by.css('input[data-automation-id="process-definition-id"]'));
    processInstanceInput = element(by.css('input[data-automation-id="process-instance-id"]'));
    stateSelector = element(by.css('mat-select[data-automation-id="state"'));
    sortSelector = element(by.css('mat-select[data-automation-id="sort"'));

    dataTable = new DataTableComponentPage();

    getDisplayedProcessesNames() {
        return this.dataTable.getAllRowsColumnValues('Name');
    }

    selectSorting(sort) {
        BrowserVisibility.waitUntilElementIsVisible(this.stateSelector);
        this.sortSelector.click();
        const sortLocator = element(by.cssContainingText('mat-option span', sort));
        BrowserVisibility.waitUntilElementIsVisible(sortLocator);
        sortLocator.click();
        return this;
    }

    selectStateFilter(state) {
        BrowserVisibility.waitUntilElementIsVisible(this.stateSelector);
        this.stateSelector.click();
        const stateLocator = element(by.cssContainingText('mat-option span', state));
        BrowserVisibility.waitUntilElementIsVisible(stateLocator);
        stateLocator.click();
        return this;
    }

    addAppId(appId) {
        BrowserVisibility.waitUntilElementIsVisible(this.appIdInput);
        this.appIdInput.click();
        this.appIdInput.sendKeys(protractor.Key.ENTER);
        this.appIdInput.clear();
        return this.appIdInput.sendKeys(appId);
    }

    clickResetButton() {
        BrowserVisibility.waitUntilElementIsVisible(this.resetButton);
        return this.resetButton.click();
    }

    checkErrorMessageIsDisplayed(error) {
        const errorMessage = element(by.cssContainingText('mat-error', error));
        BrowserVisibility.waitUntilElementIsVisible(errorMessage);
    }

    checkNoProcessFoundIsDisplayed() {
        return BrowserVisibility.waitUntilElementIsVisible(this.emptyProcessContent);
    }

    checkProcessIsNotDisplayed(processName) {
        return this.dataTable.checkContentIsNotDisplayed('Name', processName);
    }

    checkProcessIsDisplayed(processName) {
        return this.dataTable.checkContentIsDisplayed('Name', processName);
    }

    checkAppIdFieldIsDisplayed() {
        BrowserVisibility.waitUntilElementIsVisible(this.appIdInput);
        return this;
    }

    checkProcessInstanceIdFieldIsDisplayed() {
        BrowserVisibility.waitUntilElementIsVisible(this.processInstanceInput);
        return this;
    }

    checkStateFieldIsDisplayed() {
        BrowserVisibility.waitUntilElementIsVisible(this.stateSelector);
        return this;
    }

    checkSortFieldIsDisplayed() {
        BrowserVisibility.waitUntilElementIsVisible(this.sortSelector);
        return this;
    }

    addProcessDefinitionId(procDefinitionId) {
        BrowserVisibility.waitUntilElementIsVisible(this.processDefinitionInput);
        this.processDefinitionInput.click();
        this.processDefinitionInput.clear();
        return this.processDefinitionInput.sendKeys(procDefinitionId);
    }

    addProcessInstanceId(procInstanceId) {
        BrowserVisibility.waitUntilElementIsVisible(this.processInstanceInput);
        this.processInstanceInput.click();
        this.processInstanceInput.clear();
        return this.processInstanceInput.sendKeys(procInstanceId);
    }
}