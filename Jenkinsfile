pipeline {
    agent any

    environment {
        // Retrieve the SonarQube token stored in Jenkins credentials
        SONARQUBE_TOKEN = credentials('abc')
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    bat "docker build --no-cache -t hello-world-nodejs ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests inside the Docker container
                    bat "docker run --rm hello-world-nodejs"
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    // Run SonarQube analysis using the configured SonarQube scanner
                    bat "sonar-scanner -Dsonar.projectKey=hello-world-nodejs -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=${env.SONARQUBE_TOKEN}"
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
