pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Building the Docker image directly using a bat command
                    bat "docker build -t hello-world-nodejs ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Testing by running the Docker container with mounted volume and set workdir using full control over Docker command
                    bat 'docker run --rm -v "%WORKSPACE%:/usr/src/app" -w "/usr/src/app" hello-world-nodejs npm test'
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
