pipeline {
    agent any

    environment {
        // Define environment variables if necessary
        NODE_VERSION = '16.20.1'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Abdulqadeer2024/hello-world-nodejs.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Assuming Docker is used to build the Node.js application
                    sh 'docker build --no-cache -t hello-world-nodejs .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using the Docker container
                    sh 'docker run --rm hello-world-nodejs npm test'
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }

        success {
            echo 'Build process completed successfully!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
