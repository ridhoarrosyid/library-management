<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $name = fake()->unique()->randomElement(['Fiksi', 'Non-Fiksi', 'Ilmu Pengetahuan', 'Sejarah', 'Biografi', 'Anak-anak', 'Teknologi', 'Fantasi', 'Pengembangan diri', 'Misteri']),
            'slug' => str()->lower(str()->slug($name) . str()->random(4)),

        ];
    }
}
