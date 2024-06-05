pipeline {
    agent any

    environment {
        SONARQUBE_SCANNER_HOME = tool 'Default'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

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
                    bat "${env.SONARQUBE_SCANNER_HOME}\\bin\\sonar-scanner.bat " +
                        "-Dsonar.projectKey=hello-world-nodejs " +
                        "-Dsonar.sources=. " +
                        "-Dsonar.host.url=http://localhost:9000 " +
                        "-Dsonar.login=squ_f8b2a7f9fae9cc57adfcc05f1a7809db296cc111"
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
