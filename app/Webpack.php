<?php

namespace App;

use Exception;
use Illuminate\Support\HtmlString;

class Webpack
{
    public const PUBLIC_DIRECTORY = 'react-app-static';

    /**
     * Get the path to a versioned Mix file.
     *
     * @param string $path
     *
     * @return HtmlString|string
     * @throws Exception
     */
    public function __invoke(string $path)
    {
        static $manifests = [];

        $manifestPath = public_path('react-app-static/asset-manifest.json');

        if (! isset($manifests[$manifestPath])) {
            if (! file_exists($manifestPath)) {
                throw new Exception('The Mix manifest does not exist.');
            }

            $manifests[$manifestPath] = json_decode(file_get_contents($manifestPath), true);
        }

        $manifest = $manifests[$manifestPath];

        if (! isset($manifest['files'][$path])) {
            $exception = new Exception("Unable to locate file: {$path}.");

            if (! app('config')->get('app.debug')) {
                report($exception);

                return $path;
            }

            throw $exception;
        }

        return asset($manifest['files'][$path]);
    }
}
