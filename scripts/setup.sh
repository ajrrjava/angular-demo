echo "Preparing webserver installation"

sudo apt -y update

sudo snap install aws-cli --classic

aws ssm get-parameters \
    --region us-east-1 \
    --names pkey \
    --output text \
    --query Parameters[0].Value > ~/.ssh/ubuntu.pem

sudo chown ubuntu:ubuntu ~/.ssh/ubuntu.pem

sudo chmod 400 ~/.ssh/ubuntu.pem

echo "Verifying if Ansible is installed"

sudo apt -y install ansible-core

echo "Running Ansible"

rootDirectory="/opt/codedeploy-agent/deployment-root"

ansibleDirectory="$rootDirectory/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive/ansible"

ansible-playbook -i "$ansibleDirectory/production.yml" "$ansibleDirectory/webserver.yml"

sudo rm ~/.ssh/ubuntu.pem
