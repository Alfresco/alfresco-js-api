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

    it('should return 200 while getting subcategories for category with categoryId if all is ok', (done) => {
        categoriesMock.get200ResponseSubcategories('-root-');
        categoriesApi.getSubcategories('-root-').then((response: CategoryPaging) => {
            expect(response.list.pagination.count).equal(2);
            expect(response.list.entries[0].entry.parentId).equal('-root-');
            expect(response.list.entries[0].entry.id).equal('testId1');
            done();
        });
    });

    it('should return 404 while getting subcategories for not existing category', (done) => {
        categoriesMock.get404SubcategoryNotExist('notExistingId');
        categoriesApi.getSubcategories('notExistingId').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 200 while getting category with categoryId if category exists', (done) => {
        categoriesMock.get200ResponseCategory('testId1');
        categoriesApi.getCategory('testId1').then((response: CategoryEntry) => {
            expect(response.entry.parentId).equal('-root-');
            expect(response.entry.id).equal('testId1');
            done();
        });
    });

    it('should return 404 while getting category with categoryId when category not exists', (done) => {
        categoriesMock.get404CategoryNotExist('notExistingId');
        categoriesApi.getCategory('notExistingId').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 200 while getting categories linked to node with nodeId if node has some categories assigned', (done) => {
        categoriesMock.get200ResponseNodeCategoryLinks('testNode');
        categoriesApi.getCategoryLinksForNode('testNode').then((response: CategoryPaging) => {
            expect(response.list.entries[0].entry.parentId).equal('testNode');
            expect(response.list.entries[0].entry.id).equal('testId1');
            done();
        });
    });

    it('should return 403 while getting categories linked to node with nodeId if user has no rights to get from node', (done) => {
        categoriesMock.get403NodeCategoryLinksPermissionDenied('testNode');
        categoriesApi.getCategoryLinksForNode('testNode').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(403);
                done();
            }
        );
    });

    it('should return 404 while getting categories linked to node with nodeId if node does not exist', (done) => {
        categoriesMock.get404NodeNotExist('testNode');
        categoriesApi.getCategoryLinksForNode('testNode').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 204 after unlinking category', (done) => {
        categoriesMock.get204CategoryUnlinked('testNode', 'testId1');
        categoriesApi.unlinkNodeFromCategory('testNode', 'testId1').then(
            (response: any) => {
                expect(response.noContent);
                done();
            }
        );
    });

    it('should return 404 while unlinking category if category with categoryId or node with nodeId does not exist', (done) => {
        categoriesMock.get404CategoryUnlinkNotFound('testNode', 'testId1');
        categoriesApi.unlinkNodeFromCategory('testNode', 'testId1').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 403 while unlinking category if user has no rights to unlink', (done) => {
        categoriesMock.get403CategoryUnlinkPermissionDenied('testNode', 'testId1');
        categoriesApi.unlinkNodeFromCategory('testNode', 'testId1').then(
            () => {},
            (error: any) => {
                expect(error.status).equal(403);
                done();
            }
        );
    });

    it('should return 200 while updating category if all is ok', (done) => {
        categoriesMock.get200ResponseCategoryUpdated('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then((response: CategoryEntry) => {
            expect(response.entry.id).equal('testId1');
            expect(response.entry.name).equal('testName1');
            done();
        });
    });

    it('should return 404 while updating category if category with categoryId does not exist', (done) => {
        categoriesMock.get404CategoryUpdateNotFound('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 403 while updating category if user has no rights to update', (done) => {
        categoriesMock.get403CategoryUpdatePermissionDenied('testId1');
        categoriesApi.updateCategory('testId1', { name: 'testName1' }).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(403);
                done();
            }
        );
    });

    it('should return 201 while creating category if all is ok', (done) => {
        categoriesMock.get201ResponseCategoryCreated('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then((response: CategoryEntry) => {
            expect(response.entry.parentId).equal('testId1');
            expect(response.entry.name).equal('testName10');
            done();
        });
    });

    it('should return 409 while creating subcategory if subcategory already exists', (done) => {
        categoriesMock.get409CategoryCreateAlreadyExists('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(409);
                done();
            }
        );
    });

    it('should return 403 while creating category if user has no rights to create', (done) => {
        categoriesMock.get403CategoryCreatedPermissionDenied('testId1');
        categoriesApi.createSubcategory('testId1', [{ name: 'testName10' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(403);
                done();
            }
        );
    });

    it('should return 201 while linking category if all is ok', (done) => {
        categoriesMock.get201ResponseCategoryLinked('testNode');
        categoriesApi.linkNodeToCategory('testNode', [{ categoryId: 'testId1' }]).then((response: CategoryEntry) => {
            expect(response.entry.id).equal('testId1');
            expect(response.entry.name).equal('testName1');
            done();
        });
    });

    it('should return 404 while linking category if node with nodeId or category with categoryId does not exist', (done) => {
        categoriesMock.get404CategoryLinkNotFound('testNode');
        categoriesApi.linkNodeToCategory('testNode', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(404);
                done();
            }
        );
    });

    it('should return 403 while linking category if user has no rights to link', (done) => {
        categoriesMock.get403CategoryLinkPermissionDenied('testNode');
        categoriesApi.linkNodeToCategory('testNode', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(403);
                done();
            }
        );
    });

    it('should return 405 while linking category if node of this type cannot be assigned to category', (done) => {
        categoriesMock.get405CategoryLinkCannotAssign('testNode');
        categoriesApi.linkNodeToCategory('testNode', [{ categoryId: 'testId1' }]).then(
            () => {},
            (error: any) => {
                expect(error.status).equal(405);
                done();
            }
        );
    });
});
