import { Routes } from '@angular/router';
import { PageAggregation } from './pages/page-aggregation/page-aggregation'
import { PageJoins } from './pages/page-joins/page-joins';
import { PageDbRelationship } from './pages/page-db-relationship/page-db-relationship';
import { PageSubqueries } from './pages/page-subqueries/page-subqueries';
import { PageColsArithmetics } from './pages/page-cols-arithmetics/page-cols-arithmetics';
import { PageSets } from './pages/page-sets/page-sets';

export const routes: Routes = [
    {component: PageAggregation, path:''},
    {component: PageJoins, path:'join'},
    {component: PageSubqueries, path:'subq'},
    {component: PageColsArithmetics, path:'colari'},
    {component: PageSets, path:'sets'},
    {component: PageDbRelationship, path:'dbrelatn'}
];
