pipeline {
    agent any

    tools {
        // Make sure the name matches the one configured in Jenkins Global Tool Configuration
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
                    // The scanner should now be available directly
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
