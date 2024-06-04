pipeline {
    agent any

    tools {
        nodejs "NodeJS-16.20.1"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                script {
                    docker.build('hello-world-nodejs')
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up post build...'
        }
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
