import { Routes } from '@angular/router';
import { PageAggregation } from './pages/page-aggregation/page-aggregation'
import { PageJoins } from './pages/page-joins/page-joins';
import { PageDbRelationship } from './pages/page-db-relationship/page-db-relationship';

export const routes: Routes = [
    {component: PageAggregation, path:''},
    {component: PageJoins, path:'join'},
    {component: PageDbRelationship, path:'dbrelatn'}
];
