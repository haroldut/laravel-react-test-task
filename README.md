<p align="center">
  <a href="http://www.nicarao.agency">
    <img src="images/Nicarao-Agency-Horizontal-Logo-Full-Color.png" width="320" height="72">
  </a>

  <h1 align="center">Laravel React Test Task</h1>

  <p align="center">
    This task is designed to check abilities with Laravel, React, Docker and Git.
  </p>
</p>

# Getting Started

## Prerequisites

-   node ^16.11.1
-   yarn 1.22.17
-   docker ^20.10.7
-   docker-compose ^1.29.2

## Installation

1. Clone the repo
    ```
    sh
    git clone https://github.com/haroldut/laravel-react-test-task
    ```
2. Copy .env.example as .env (Don't rename it)
3. Install Composer Dependencies
    ```
    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
    ```
4. Run Laravel Sail
    ```
    ./vendor/bin/sail up
    ```
5. Go to react-app folder
6. Install react dependencies
    ```
    yarn install
    ```
7. Run React with yarn
    ```
   yarn start
    ```

<!-- CONTACT -->

# Contact

Developers Web Page: [haroldut.com](https://www.haroldut.com)

Project Link: [haroldut/laravel-react-test-task](https://github.com/haroldut/laravel-react-test-task)
