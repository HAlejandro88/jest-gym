pipeline {
  agent any
  stages {
    stage('Checkout Repo') {
      steps {
        git(branch: 'master', url: 'https://github.com/HAlejandro88/jest-gym.git')
      }
    }

    stage('test') {
      steps {
        sh 'ls -la'
      }
    }

  }
}