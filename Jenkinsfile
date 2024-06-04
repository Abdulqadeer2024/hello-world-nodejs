pipeline {
    agent any
    environment {
        CC_TEST_REPORTER_ID = 'your_code_climate_reporter_id'  // Replace with your actual Code Climate Reporter ID
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Abdulqadeer2024/hello-world-nodejs.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Code Quality Analysis') {
            steps {
                script {
                    sh 'docker run --rm -v "$(pwd):/code" codeclimate/codeclimate analyze'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'Build was a success!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
