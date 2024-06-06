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
                    bat "docker run --rm hello-world-nodejs npm test"
                }
            }
        }
        
        stage('Deploy to Localhost') {
            steps {
                script {
                    // Stop and remove the existing container (if any)
                    bat "docker stop hello-world-nodejs || true"
                    bat "docker rm hello-world-nodejs || true"
                    
                    // Run the Docker container on localhost:3000
                    bat "docker run -d --name hello-world-nodejs -p 3000:3000 hello-world-nodejs"
                }
            }
        }
        
        stage('Post-Deployment Test') {
            steps {
                script {
                    // Wait for the application to start (adjust the sleep duration if needed)
                    bat "timeout /t 5 /nobreak > nul"
                    
                    // Send a GET request to localhost:3000 and verify the response
                    bat 'curl -f http://localhost:3000 || exit 1'
                }
            }
        }
    }
    
    post {
        always {
            echo 'This will always run'
            echo 'Build process completed'
            
            // Clean up the Docker container
            bat "docker stop hello-world-nodejs || true"
            bat "docker rm hello-world-nodejs || true"
        }
    }
}
