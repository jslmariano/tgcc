<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;


/**
 * DummyProductsClient
 *
 * This class handles HTTP requests to the Dummy Products API.
 * It fetches the base URL from Laravel's configuration and extends the Guzzle Client
 * to provide a clean and scalable way to interact with the API.
 */
class DummyProductsClient extends Client
{
    public $allowedColumns = [
        'id',
        'name',
        'price',
        'rating',
        'images',
        'thumbnail',
        'title',
    ];

    /**
     * DummyProductsClient constructor.
     * Initializes the Guzzle client with the base URL.
     */
    public function __construct()
    {
        parent::__construct([
            'base_uri' => config('dummyapi.base_url'),
        ]);
    }

    /**
     * Fetch a list of products from the Dummy Products API with filters.
     * Cache the results for 60 seconds based on the filter parameters.
     *
     * @param array $filters
     * @return array
     */
    public function getProducts(array $filters = []): array
    {
        $filters = [
            ...$filters,
            'select' => $this->allowedColumns,
        ];

        // Generate a unique cache key based on the filters
        $cacheKey = $this->generateCacheKey($filters);

        return Cache::remember($cacheKey, 60, function () use ($filters) {
            $queryString = http_build_query($filters);
            $response = $this->get("/products?$queryString");
            return json_decode($response->getBody()->getContents(), true);
        });
    }

    /**
     * Generate a cache key based on the filter parameters.
     *
     * @param array $filters
     * @return string
     */
    protected function generateCacheKey(array $filters): string
    {
        ksort($filters);
        return 'dummy_products_' . md5(json_encode($filters));
    }

    /**
     * Search for products by query string
     *
     * @param string $query
     * @return array
     */
    public function searchProducts(string $query): array
    {
        return Cache::remember("search_products_{$query}", 60, function () use ($query) {
            $response = $this->get("/products/search?q={$query}");
            return json_decode($response->getBody()->getContents(), true);
        });
    }
}