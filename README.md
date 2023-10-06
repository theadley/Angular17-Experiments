# Angular 17-next.6 Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0-next.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Angular v14 - v17 Changes
- [v14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)
  - Strictly typed reactive forms
    - Be aware `ng update` will make your form groups into `UntypedFormGroup` instances - be sure to update them
  - Standalone + inject()
  - Router strong typing
  - Page title in route objects (declared in your routes array)
  - Better template errors
  - Bind protected objects to the template (not just public)
  - NgModel changes also trigger change detection within an onPush component - FYI https://angular.io/guide/change-detection
  - CDK (component dev kit) adds menu and dialog support (using WAI-ARIA design patterns for [Combobox](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox))
  - ESBuild!  opt-in: `"builder": "@angular-devkit/build-angular:browser-esbuild"`
- [v15](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8)
  - Standalone single file application 🤯
  - Tree-shakable standalone APIs for Router and HTTPClient
    - "Bundlers can remove unused features of the router at build-time."
  - Directive composition API
    - "add directives to a host element" and;
    - "only works with standalone directives"
  - Image directive
    - Automatic srcset generation with `sizes` attribute
    - Fill mode
    - Use: `imports [NgOptimizedImage]` and use `ngSrc` instead of `src` then mark as `priority` with the attribute of the same name
    - [Documentation](https://angular.io/guide/image-directive)
  - Functional router guards - can even be inline anonymous
  - Router unwraps default imports - no more `.then(m => m.component)`
    - `{ path: 'lazy',  loadComponent: () => import('./lazy-file') }`
  - Better stack traces
  - CDK listbox
  - Better esbuild support for Sass and `ng build --watch` (opt-in still)
- [v16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)
  - SIGNALS
    - Let's make zone.js optional
    - Computed (derived) properties
    - RxJS interoperability
      - toObservable(signal)
      - toSignal(observable$)
    - Effects - magic dependency watching
  - RxJS cleanup operator `takeUntilDestroyed()`
  - SSR & Hydration
    - Full app non-destructive hydration (no re-render)
    - Massive LCP performance uplift (of course)
    - Bootstrap your app with it in the providers
      - `providers: [provideClientHydration()]`
    - Standalone components are SSR compliant with Universal
  - Vite for dev servers and esbuild for builds (opt-in still)
  - TS 5.0 support
  - Required inputs
    - `@Input({ required: true }) title: string = '';`
  - Passing router data as component inputs
    - Route data — resolvers and data properties
    - Path parameters
    - Query parameters
    - Resolve
    - Enabled with `withComponentInputBinding` as part of the `provideRouter`
  - DestroyRef - inject your ngOnDestroy instead of implementing it
    - `destroyRef = inject(DestroyRef);` then;
    - `this.destroyRef.onDestroy(() => /* cleanup */ );`
  - Self-closing tags (OMG finally)
    - `<super-duper-long-component-name [prop]="someVar"/>`
    - This is like apple claiming widgets are a "new concept"
  -
- [v17](https://blog.angular.io/meet-angulars-new-control-flow-a02c6eee7843)
  - Signal components - input and output as signals, no zone.js
  - Control flow `@for item of list; trackBy: field {<p>{{item.field}}</p>} @empty{<p>Nothing in the list</p>}`
  - Deferred loading
  - Standalone by default
  - SSR by default
  - Partial hydration and router takeover (NextJS style)
  - New lifecycle hooks for SSR component control (ngOnInit fires on the server)
    - `afterNextRender` - after the first render
    - `afterRender` - every render
- Next
  - https://github.com/angular/angular/discussions/categories/rfcs
  - https://angular.io/guide/roadmap
  - Resumability (like Qwik)
