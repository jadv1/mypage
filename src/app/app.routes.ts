import { Routes } from '@angular/router';
import { PageAggregation } from './page-aggregation/page-aggregation';
import { PageJoins } from './page-joins/page-joins';

export const routes: Routes = [
    {component: PageAggregation, path:''},
    {component: PageJoins, path:'join'}
];
