pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh('mkdir -p folder && cd folder && touch file')
                sh("echo 'Bonjour voici un test écriture dans le fichier' > file")
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh('cat file')
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}