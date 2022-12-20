pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Build dependencies') {
            steps {
                dir('server'){
                    echo 'Building backend dependencies..'
                    sh 'npm install'
                }
                dir('client'){
                   echo 'Building frontend dependencies..'
                   sh 'npm install'
                }
            }
        }
        stage('Test and coverage'){
            steps{
                dir('server'){
                    echo 'Testing..'
                    writeFile file: '.env', text: 'CONNECTION_URI=mongodb+srv://user:user@cluster0.rjqaazc.mongodb.net/?retryWrites=true&w=majority'
                    sh 'npx jest --coverage'
                }
            }
        }
    }
}