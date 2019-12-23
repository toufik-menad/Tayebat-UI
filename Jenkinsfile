pipeline {
    agent any
    stages {
        stage('install build') {
            steps {
            sh 'echo "########## building for prod ###############"'
            sh 'npm install'
            sh 'npm run build'
            sh 'rsync -r /var/lib/jenkins/workspace/TayebatUI/dist/tayebat-ui/ /var/www/halaalbite.com/html/'
            sh 'chown -R $USER:$USER /var/www/halaalbite.com/html'
            sh 'echo "########## building for prod finished ###############"'
            }
        }
    }
}