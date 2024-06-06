pipeline {
    agent any

    tools {
        // This should match the name given in the Global Tool Configuration
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
                    // Now using the tool configured in Jenkins
                    bat "sonar-scanner.bat -Dsonar.projectKey=hello-world-nodejs -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=${env.SONARQUBE_TOKEN}"
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
