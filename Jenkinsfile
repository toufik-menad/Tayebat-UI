pipeline {
    agent any
    stages {
        stage('install build') {
            steps {
            sh 'echo "########## building for prod ###############"'
            sh 'npm install'
            sh 'npm run build'
            sh 'echo "########## building for prod finished ###############"'
            sh 'sudo rsync -r /var/lib/jenkins/workspace/TayebatUI/dist/tayebat-ui/ /var/www/halaalbite.com/html/'
            }
        }
    }
}