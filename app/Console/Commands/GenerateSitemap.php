<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap for the website.';

    public function handle()
    {
        $path = public_path('sitemap.xml');
        SitemapGenerator::create('https://visible-schools.co.uk')->writeToFile($path);

        $this->info('Sitemap generated successfully!');
    }
}
