pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Build Backend') {
            steps {
                sh 'docker build -f Backend/Dockerfile -t devopschallenge_backend:latest .'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'docker build -f Frontend/Dockerfile -t devopschallenge_frontend:latest .'
            }
        }
        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker-compose down'
        }
    }
}