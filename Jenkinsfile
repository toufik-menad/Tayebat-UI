pipeline {
    agent any
    stages {
        stage ('Checkout source'){
           checkout scm
        }
        stage ('Checkout source'){
           sh 'npm install'
        }
        stage ('Checkout source'){
           sh 'npm run test'
        }
        stage ('Clean dist folder'){
            sh 'rm -r dist/'
        }
        stage('Build') {
            sh 'npm run build'
        }
        stage('Deploy to server'){
            sh 'sudo rsync -r /var/lib/jenkins/workspace/TayebatUI/dist/tayebat-ui/ /var/www/halaalbite.com/html/'
        }
    }
}