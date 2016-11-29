# treo-promise

A plugin for [Treo](https://github.com/treojs/treo) that promisifies all the functions
it provides. Treo provides a plugin for this internally, but it doesn't work, so I broke
out a fix into a separate module you can use.

## How to use

    import treo from 'treo';
    import treoPromise from 'treo-promise';

    const db = treo('test-database', schema)
        .use(treoPromise())