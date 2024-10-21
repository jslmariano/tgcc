<?php
namespace App\Http\Controllers;

use App\Services\DummyProductsClient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * ProductController
 *
 * Handles product-related requests with support for search, pagination, and filtering.
 */
class ProductController extends Controller
{
    protected DummyProductsClient $dummyProductsClient;

    /**
     * ProductController constructor.
     *
     * @param DummyProductsClient $dummyProductsClient
     */
    public function __construct(DummyProductsClient $dummyProductsClient)
    {
        $this->dummyProductsClient = $dummyProductsClient;
    }

    /**
     * Fetches the list of products with dynamic filters and returns them as a JSON response.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function fetchProducts(Request $request): JsonResponse
    {
        $filters = $request->all();
        $products = $this->dummyProductsClient->getProducts($filters);
        return response()->json($products);
    }

    /**
     * Searches for products based on a query string and returns them as a JSON response.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function searchProducts(Request $request): JsonResponse
    {
        $query = $request->input('q');
        $products = $this->dummyProductsClient->searchProducts($query);
        return response()->json($products);
    }
}
