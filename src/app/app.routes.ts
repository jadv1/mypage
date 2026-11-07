import { Routes } from '@angular/router';
import { PageAggregation } from './pages/page-aggregation/page-aggregation'
import { PageJoins } from './pages/page-joins/page-joins';
import { PageDbRelationship } from './pages/page-db-relationship/page-db-relationship';
import { PageSubqueries } from './pages/page-subqueries/page-subqueries';
import { PageColsArithmetics } from './pages/page-cols-arithmetics/page-cols-arithmetics';
import { PageSets } from './pages/page-sets/page-sets';
import { DataBases } from './data-bases/data-bases';
import { Programming } from './programming/programming';
import { SwPt } from './sw-pt/sw-pt';
import { System } from './system/system';

export const routes: Routes = [    
    {
        path:'', 
        component: DataBases, 
        outlet: '',
        children: [
            {path:'', component: PageAggregation},
            {path:'join', component: PageJoins},
            {path:'nesq', component: PageSubqueries},
            {path:'colari', component: PageColsArithmetics},
            {path:'sets', component: PageSets},
            {path:'dbrelatn', component: PageDbRelationship},
        ]
    },
    {
        path:'', 
        component: Programming, 
        outlet: 'r-programming'
    },
    {
        path:'', 
        component: SwPt, 
        outlet: 'r-swpt'
    },
    {
        path:'', 
        component: System, 
        outlet: 'r-system'
    }
];
