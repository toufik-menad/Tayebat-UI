pipeline {
    agent any
    stages {
        stage('install build') {
            steps {
            sh 'npm install'
            sh 'npm run build'
            }
        }
    }
}