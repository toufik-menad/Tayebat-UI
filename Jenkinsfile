pipeline {
    agent any
    stages {
        stage ('Checkout source'){
           step {
               checkout scm
        }
        stage ('Checkout source'){
           step {
               sh 'npm install'
        }
        stage ('Checkout source'){
           step {
               sh 'npm run test'
        }
        stage ('Clean dist folder'){
            step {
                sh 'rm -r dist/'
        }
        stage('Build') {
            step {
                sh 'npm run build'
        }
        stage('Deploy to server'){
            step {
                sh 'sudo rsync -r /var/lib/jenkins/workspace/TayebatUI/dist/tayebat-ui/ /var/www/halaalbite.com/html/'
        }
    }
}