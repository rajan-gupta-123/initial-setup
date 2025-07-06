pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                bat '''
                    npm install --legacy-peer-deps
                    echo "install phase ended"
                '''
            }
        }

        stage('Build') {
            steps {
                bat '''
                    npm run build
                    echo "build complete"
                    mkdir -p dist
                '''
            }
        }

        stage('Post Build') {
            steps {
                bat '''
                    echo "post phase started"
                    ls chunks/develop/*
                    echo "post phase Ended"
                '''
            }
        }
    }

    // post {
    //     success {
    //         archiveArtifacts artifacts: 'dist/*', fingerprint: true
    //     }
    // }
}
