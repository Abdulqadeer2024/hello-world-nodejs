pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    bat "docker build --no-cache -t hello-world-nodejs ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    bat "docker run --rm hello-world-nodejs"
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    bat "docker-compose up -d"
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    // Wait for a few seconds to ensure the container is up and running
                    bat "timeout 10"
                    // Verify if the application is accessible
                    bat "curl -I http://localhost:3000"
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
            echo 'Build process completed'
        }
    }
}
