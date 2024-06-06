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

        stage('Release to Production') {
            steps {
                script {
                    // Ensure the path to Octo CLI is correct as configured in Jenkins
                    bat "octo create-release --project 'YourProjectName' --deployto 'Production' --server http://YourOctopusServer --apiKey 'API-YOURKEY'"
                }
            }
        }
    }

    post {
        always {
            echo 'Build process completed'
        }
    }
}
