pipeline {
    agent any
    stages {
        stage ('Checkout source') {
            steps {
                checkout scm
            }
        }
        stage ('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Run tests') {
            steps {
                sh 'npm run test'
           }
        }
        stage ('Clean dist folder') {
            steps {
                sh 'rm -r dist/'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy to server') {
            steps {
                sh 'sudo rsync -r /var/lib/jenkins/workspace/TayebatUI/dist/tayebat-ui/ /var/www/halaalbite.com/html/'
            }
         }
    }
}
