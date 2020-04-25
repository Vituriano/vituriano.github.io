---
date: 2020-04-25 12:56:27
title: Deploy application NodeJS in Amazon Web Service with Docker
description: "I will be objective in this article, the goal is to describe a
  process of deploy a application NodeJS in AWS with Docker, in Ubuntu 18 system
  or other compatible systems. "
category: infra
background: 
color: "#ea4335"
image: 
---
## Instalations

for it, you will need to install a some apps in your machine:

1 - First, install AWS CLI, run the command bellow:

```shell
$ sudo apt install curl unzip
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
$ unzip awscliv2.zip
$ sudo chmod +x ./aws/install
$ sudo ./aws/install
```

2 - After, install Docker Machine:

```shell
$ curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine &&
    chmod +x /tmp/docker-machine &&
    sudo cp /tmp/docker-machine /usr/local/bin/docker-machine
```

I understand that you have `Docker` and `Docker Compose` installed.

## Configure local terminal

Define you credentials in AWS with the command bellow:

```shell
$ aws configure 
```

now, you be completed with your credentials, like the example:

```shell
AWS Access Key ID [None]: accesskey
AWS Secret Access Key [None]: secretkey
Default region name [None]: us-west-1
Default output format [None]:
```

You can get the crendentials with this method:

1 - Access the console AWS and select the option `Users` in `IAM`;

2 - if not exists your user, you will create user and grant the permissions:

* `AmazonEC2FullAccess`;
* `AmazonEC2ContainerRegistryFullAccess`;
* `AdministratorAccess`;
* `AmazonEC2ContainerServiceFullAccess`;
* `AWSOpsWorksRegisterCLI_EC2`;

3 - Again, access the console AWS and select the option `Users` in IAM;

4 - Select your user, before, select security credentials;

5 - Now, just get it!

## Create a instace

with do Docker Machine you can create a virtual machine in AWS EC2. Run the command bellow, and wait a many minutes, because there is a delay to instance load in AWS:

```shell
$ docker-machine create --driver amazonec2 --amazonec2-region us-east-1a <machine name>
```

The Docker Machine have a many drivers, for this reason we are defined with amazonec2 in this command. Anyway, after to the success of command you can view the machines running with the command:

```shell
$ docker-machine ls
```

You also be remove a any machine with the command:

```shell
$ docker-machine rm <machine name>
```

## Up the system

You have to run the container in AWS virtual machine. For it, exists two ways:

### You can associate the docker with the virtual machine

1 - Configure Your Shell:

```shell
$ eval $(docker-machine env <machine name>
```

2 - To up the container, navigate to project folder and run the command bellow:

```shell
$ docker-container up -d
```

### You can connect with the virtual machine using ssh

1 - Run this command, to access the virtual machine:

```shell
$ docker-machine ssh <machine name>
```

2 - To up the container, clone an existing Git repository, navigate to project folder and run the command bellow:

```shell
$ docker-container up -d
```

## Configure ports in AWS

1 - Go to `security Groups`, before select the group `docker-machine`;

2 - Then, click in `inbound`, next in `edit`;

3 - Keep the type as `Custom TCP Rule`, edit the source to `anywhere` and set the `Port` to the port in use. you can define all ports you need.

## Open

Copy and paste the instance public IPV4 in browser and add the port in use. The link it's like:

> http://54.207.1.133:3000

Now you can see your system in web.

## After deploy

### conect with another machine

In the moment, you can connect to your instance only in machine where you created her. You have to copy the private key to you other machine you want to connect.

1 - First, run the command in machine where you create the instance:

```shell
$ docker-machine inspect <machine name>
```

2 - Navigated to directory describe in `SSHKeyPath` and copy the file id_rsa;

3 - In another machine run the command:

```shell
$ docker-machine create --driver generic \
 --generic-ip-address <public ipv4> \
 --generic-ssh-user ubuntu \
 --generic-ssh-key <id_rsa arquive path> \
 <machine name>-2
```

### Unassociate the Docker from the virtual machine

1 - Configure Your Shell:

```shell
$ eval $(docker-machine env -u)
```

## References

[docker-machine Examples](https://docs.docker.com/v17.09/machine/examples/aws/#step-4-use-machine-to-remove-the-instance)
