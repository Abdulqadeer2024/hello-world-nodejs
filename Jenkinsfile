pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image using no-cache to avoid any caching issues
                    bat "docker build --no-cache -t hello-world-nodejs ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using the Docker container
                    bat "docker run --rm -v \"${env.WORKSPACE}:/usr/src/app\" -w \"/usr/src/app\" hello-world-nodejs npm test"
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
            echo 'Build completed'
        }
    }
}
