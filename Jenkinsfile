pipeline {
    agent any

    tools {
        nodejs "NodeJS-16.20.1" // Specify the Node.js version to use
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm // Checkout code from the Git repository
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                script {
                    // Build the Docker image using the Dockerfile in the repository
                    docker.build('hello-world-nodejs')
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    // Run tests inside the Docker container
                    docker.image('hello-world-nodejs').inside('-w /usr/src/app') {
                        sh 'npm install' // Install dependencies
                        sh 'npm test' // Run tests
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up post build...'
        }
        success {
            echo 'Build and Test stages were successful!'
        }
        failure {
            echo 'Build or Test stage failed.'
        }
    }
}
