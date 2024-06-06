pipeline {
    agent any

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

        stage('Deploy to Production') {
            steps {
                script {
                    bat "docker-compose -f docker-compose.prod.yml up -d"
                }
            }
        }

        stage('Monitor with Datadog') {
            steps {
                script {
                    // Assuming you have curl available on your Jenkins server
                    bat "curl -X POST -H 'Content-type: application/json' -d '{\"title\": \"Deployment Notification\", \"text\": \"Deployment to Production completed successfully.\", \"priority\": \"normal\", \"tags\": [\"environment:production\", \"event:deployment\"], \"alert_type\": \"info\"}' 'https://api.datadoghq.com/api/v1/events?api_key=your_datadog_api_key'"
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
