pipeline {
    agent any

    environment {
        // Define environment variables that can be used throughout the pipeline
        DOCKER_IMAGE = 'hello-world-nodejs'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the Git repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Building the Docker image
                script {
                    docker.build("${env.DOCKER_IMAGE}")
                }
            }
        }

        stage('Test') {
            steps {
                // Running tests using the Docker image
                script {
                    docker.image("${env.DOCKER_IMAGE}").inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deployment steps, customize based on your deployment method
                echo "Deploying Application..."
                // For example, pushing Docker image to a registry
                script {
                    docker.withRegistry('https://your-registry-url', 'your-registry-credentials-id') {
                        docker.image("${env.DOCKER_IMAGE}").push("latest")
                    }
                }
            }
        }
    }

    post {
        always {
            // Actions that always happen regardless of pipeline result
            echo 'This will always run'
        }
        success {
            // Actions to perform on successful completion of pipeline
            echo 'Build succeeded!'
        }
        failure {
            // Actions to take on failure of pipeline
            echo 'Build failed!'
        }
    }
}
