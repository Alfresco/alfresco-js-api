import { expect } from 'chai';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { CategoriesApi } from '../../src/api/content-rest-api';
import { EcmAuthMock } from '../../test/mockObjects';
import { CategoriesMock } from '../mockObjects/content-services/categories.mock';
import { CategoryPaging } from '../../src/api/content-rest-api/model/categoryPaging';
import { CategoryEntry } from '../../src/api/content-rest-api/model/categoryEntry';

describe('Categories', () => {
    let authResponseMock: EcmAuthMock;
    let categoriesMock: CategoriesMock;
    let categoriesApi: CategoriesApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        categoriesMock = new CategoriesMock();

        authResponseMock.get201Response();
        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        } as AlfrescoApiConfig);

        alfrescoJsApi.login('admin', 'admin').then(() => done());
        categoriesApi = new CategoriesApi(alfrescoJsApi);
    });

    it('get subcategories for category with categoryId should return 200 if all if ok', (done) => {
        categoriesMock.get200ResponseSubcategories('-root-');
        categoriesApi.getSubcategories('-root-').then((response: CategoryPaging) => {
            expect(response.list.pagination.count).to.be.equal(2);
            expect(response.list.entries[0].entry.parentId).to.be.equal('-root-');
            expect(response.list.entries[0].entry.id).to.be.equal('testId1');
            done();
        });
    });

    it('get subcategories for not existing category should return 404', (done) => {
        categoriesMock.get404SubcategoryNotExist('notExistingId');
        categoriesApi.getSubcategories('notExistingId').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('get category with nodeId should return 200 if category exists', (done) => {
        categoriesMock.get200ResponseCategory('testId1');
        categoriesApi.getCategory('testId1').then((response: CategoryEntry) => {
            expect(response.entry.parentId).to.be.equal('-root-');
            expect(response.entry.id).to.be.equal('testId1');
            done();
        });
    });

    it('get category for not existing category should return 404', (done) => {
        categoriesMock.get404CategoryNotExist('notExistingId');
        categoriesApi.getCategory('notExistingId').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('get category linked to node with nodeId should return 200 if node has some categories assigned', (done) => {
        categoriesMock.get200ResponseNodeCategoryLinks('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.getCategoryLinksForNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then((response: CategoryPaging) => {
            expect(response.list.entries[0].entry.parentId).to.be.equal('80a94ac8-3ece-47ad-864e-5d939424c47c');
            expect(response.list.entries[0].entry.id).to.be.equal('testId1');
            done();
        });
    });

    it('getting categories linked to node should return 403 if current user does not have permission to get from node', (done) => {
        categoriesMock.get403NodeCategoryLinksPermissionDenied('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.getCategoryLinksForNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(403);
                done();
            }
        );
    });

    it('getting categories linked to node should return 404 if node with nodeId does not exist', (done) => {
        categoriesMock.get404NodeNotExist('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.getCategoryLinksForNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('should return 204 after unlinking category', (done) => {
        categoriesMock.get204CategoryUnlinked('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1');
        categoriesApi.unlinkNodeFromCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1').then(
            (response: any) => {
                expect(response.noContent);
                done();
            }
        );
    });

    it('unlinking category should return 404 if category with categoryId or node with nodeId does not exist', (done) => {
        categoriesMock.get404CategoryUnlinkNotFound('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1');
        categoriesApi.unlinkNodeFromCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('unlinking category should return 403 if user has no rights to unlink', (done) => {
        categoriesMock.get403CategoryUnlinkPermissionDenied('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1');
        categoriesApi.unlinkNodeFromCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', 'testId1').then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(403);
                done();
            }
        );
    });

    it('update category should return 200 if all is ok', (done) => {
        categoriesMock.get200ResponseCategoryUpdated('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then((response: CategoryEntry) => {
            expect(response.entry.id).to.be.equal('testId1');
            expect(response.entry.name).to.be.equal('testName1');
            done();
        });
    });

    it('updating category should return 404 if category with categoryId does not exist', (done) => {
        categoriesMock.get404CategoryUpdateNotFound('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('updating category should return 403 if user has no rights to update', (done) => {
        categoriesMock.get403CategoryUpdatePermissionDenied('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(403);
                done();
            }
        );
    });

    it('create category should return 201 if all is ok', (done) => {
        categoriesMock.get201ResponseCategoryCreated('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then((response: CategoryEntry) => {
            expect(response.entry.parentId).to.be.equal('testId1');
            expect(response.entry.name).to.be.equal('testName10');
            done();
        });
    });

    it('creating category should return 409 if subcategory already exists', (done) => {
        categoriesMock.get409CategoryCreateAlreadyExists('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(409);
                done();
            }
        );
    });

    it('creating category should return 403 if user has no rights to create', (done) => {
        categoriesMock.get403CategoryCreatedPermissionDenied('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(403);
                done();
            }
        );
    });

    it('category link should return 201 if all is ok', (done) => {
        categoriesMock.get201ResponseCategoryLinked('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.linkNodeToCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', [{ categoryId: 'testId1' }]).then((response: CategoryEntry) => {
            expect(response.entry.id).to.be.equal('testId1');
            expect(response.entry.name).to.be.equal('testName1');
            done();
        });
    });

    it('linking category should return 404 if node with nodeId or category with categoryId does not exist', (done) => {
        categoriesMock.get404CategoryLinkNotFound('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.linkNodeToCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('linking category should return 403 if user has no rights to link', (done) => {
        categoriesMock.get403CategoryLinkPermissionDenied('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.linkNodeToCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(403);
                done();
            }
        );
    });

    it('linking category should return 405 if node of this type cannot be assigned to category', (done) => {
        categoriesMock.get405CategoryLinkCannotAssign('80a94ac8-3ece-47ad-864e-5d939424c47c');
        categoriesApi.linkNodeToCategory('80a94ac8-3ece-47ad-864e-5d939424c47c', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).to.be.equal(405);
                done();
            }
        );
    });
});
