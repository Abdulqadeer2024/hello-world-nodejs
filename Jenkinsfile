pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'hello-world-nodejs'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Correctly format the Windows path for Docker volume
                    def windowsWorkspace = env.WORKSPACE.replace("\\", "/")
                    docker.image("${env.DOCKER_IMAGE}").inside("-u root -v ${windowsWorkspace}:/usr/src/app -w /usr/src/app") {
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
