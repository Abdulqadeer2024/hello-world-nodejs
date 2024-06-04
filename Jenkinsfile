pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    docker.build("hello-world-nodejs")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Test using Docker
                    docker.image("hello-world-nodejs").inside("-u root -w /usr/src/app") {
                        bat "npm test"
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
