pipeline {
    agent any

    tools {
        // Assuming "Default" is the name given to the SonarQube scanner in Jenkins configuration
        // and matches the tool configuration in Jenkins
        sonarQubeScanner 'Default'
    }

    environment {
        SONARQUBE_TOKEN = 'squ_f8b2a7f9fae9cc57adfcc05f1a7809db296cc111'
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
                    // Using the environment variable directly in the command
                    bat "sonar-scanner -Dsonar.projectKey=hello-world-nodejs -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=${SONARQUBE_TOKEN}"
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
