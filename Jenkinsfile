pipeline {
    agent any

    environment {
        SONARQUBE_TOKEN = credentials('sonarqube-token') // It's safer to use credentials stored in Jenkins
    }

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

        stage('Code Quality Analysis') {
            steps {
                script {
                    // Ensure SonarQube scanner is called correctly
                    bat "C:\\Tools\\SonarScanner\\bin\\sonar-scanner.bat -Dsonar.projectKey=hello-world-nodejs -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=${SONARQUBE_TOKEN}"
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
