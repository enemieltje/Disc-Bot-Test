docker stop -t 0 disc-bot-test
docker rm disc-bot-test
docker rmi disc-bot-test
docker build -t disc-bot-test .
docker run --name disc-bot-test -d disc-bot-test
