# Angular demo

This project showcases an Angular project that displays information about other projects and demos that I have created and developed.

In itself, the angular-demo project shows a simple Angular project that uses the [Clarity Design](https://clarity.design/) system.

Also, the angular-demo projects shows a [CI/CD pipeline](.github%2Fworkflows%2Faws.yml) to build the project in Github using GithubActions, deploy the artifacts to AWS S3 and finally deploy the Angular application into an EC2 instance.

## Github Actions and AWS pipeline

The deployment of the Angular demo is automated through a hybrid CI/CD pipeline that uses Github actions to build and package the Angular project.

The bundle is then uploaded to AWS S3 and CodeDeploy uses the bundle to deploy the Angular demo into an EC2 instance.

## Ansible

The project uses Ansible to install and configure nginx to run the Angular demo. 
