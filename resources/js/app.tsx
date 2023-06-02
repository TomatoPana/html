import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName( 'title' )[ 0 ]?.innerText || 'Laravel';

createInertiaApp( {
    title: ( title ) => `${ title } - ${ appName }`,
    resolve: ( name ) => resolvePageComponent( `./Pages/${ name }.tsx`, import.meta.glob( './Pages/**/*.tsx' ) ),
    setup ( { el, App, props } ) {
        const root = hydrateRoot( el, <App { ...props } /> );
    },
    progress: {
        color: '#4B5563',
    },
} );
