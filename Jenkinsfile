pipeline {
    agent any
    environment {
        SONARQUBE_TOKEN = 'your_sonarcloud_token'
    }
    stages {
        stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarCloud') {
                    script {
                        // Assuming your source code is in a standard directory
                        sh 'sonar-scanner -Dsonar.projectKey=your_project_key -Dsonar.organization=your_organization_key -Dsonar.sources=. -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=${env.SONARQUBE_TOKEN}'
                    }
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
