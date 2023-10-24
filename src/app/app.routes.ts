import { Routes } from '@angular/router';
import {NotLazyComponent} from "./components/not-lazy/not-lazy.component";
import {productsResolver} from "./resolvers/products.resolver";

export const routes: Routes = [
  {
    path: 'not-lazy',
    component: NotLazyComponent,
    title: 'A17 Not Lazy'
  },
  {
    path: 'lazy',
    // Where is the .then?
    loadComponent: () => import('./components/lazy/lazy.component'),
    canActivate: [() => true]
  },
  {
    path: 'lazy/:id',
    loadComponent: () => import('./components/lazy-route-inputs/lazy-route-inputs.component').then(m => m.LazyRouteInputsComponent),
    resolve: {
      list: productsResolver
    }
  },
  {
    path: 'typed-forms',
    loadComponent: () => import('./components/typed-forms/typed-forms.component').then(m => m.TypedFormsComponent)
  },
  {
    path: 'cdk-dialog',
    loadComponent: () => import('./components/cdk-dialog-overview-example/cdk-dialog-overview-example.component').then(m => m.CdkDialogOverviewExample)
  },
  {
    path: 'images',
    loadComponent: () => import('./components/image-directive/image-directive.component').then(m => m.ImageDirectiveComponent)
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./components/rxjs-interop/rxjs-interop.component').then(m => m.RxjsInteropComponent)
  },
  {
    path: 'control',
    loadComponent: () => import('./components/control-flow/control-flow.component')
  }
];
