pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image using no-cache to ensure a clean build
                    bat "docker build --no-cache -t hello-world-nodejs ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using the Docker container
                    bat "docker run --rm hello-world-nodejs"
                }
            }
        }
    }

    post {
        always {
            echo 'This will always run'
            echo 'Build process completed'
        }
    }

    stage('Deploy to Staging') {
    steps {
        script {
            // Change directory if your docker-compose.yml is not in the root
            sh 'docker-compose up -d'
        }
    }
}

}
