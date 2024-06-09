# DevOps Challenge Project

Bu proje, bir frontend, backend ve veritabanından oluşan basit bir web uygulamasını içerir(NodeJS, HTML, SQLite3). 
Uygulama Dockerize edilmiştir ve Kubernetes cluster üzerinde çalıştırılabilir(Minikube).
CI/CD Jenkins tool

## Gereksinimler

- Docker
- Docker Compose
- Minikube
- kubectl
- Jenkins
- Prometheus
- Grafana

## Dikkat edilen kısımlar

- ConfigMap kullanımı
- Liveness ve Readiness Probes kullanımı
- Resource Limits 

## Kurulum Adımları

Projede Frontend, Backend için 2 adet Dockerfile bulunur. 
Database için SQLite3 kullanılmıştır.
Bu Image'ların çalışabilmesi için öncelikle docker-compose build komutu koşulmalıdır.
Ardından docker-compose up komutu ile ayağa kaldırılmalıdır.
Frontend için localhost:8081, Backend için localhost:3000 üzerinden erişim sağlanabilir.

Ardından minikube başlatmak ve Docker ortamı ayarlamak için : minikube start
eval $(minikube docker-env)
komutları koşulmalıdır.

Docker image'larını Minikube ortamında build etmek için : 
docker build -t devopschallenge_frontend ./frontend
docker build -t devopschallenge_backend ./backend
docker build -t nouchka/sqlite3 ./database
komutlarını çalıştırın.

YAML dosyalarını apply etmek ve Kubernetes Cluster'a deploy etmek için :
kubectl apply -f k8s/
komutunu çalıştırın.

Uygulamanın doğru bir şekilde çalıştığını ve doğru bir şekilde deploy edildiğini doğrulamak için :
kubectl get pods
kubectl get services
kubectl get ingress
komutunu çalıştırın.

Minikube ip adresini almak için :
minikube ip

Ardından host makinenizde tarayıcınızı açın ve 
http://myapp.local adresine gidin. 
"Welcome to the DevOps Challenge Frontend!" mesajını görmelisiniz.

Ardından Jenkins için localhost:8080 portundan giris yapilip pipeline build edilmistir.
Jenkinsfile proje kök dizininden ulasilabilir.

Prometheus için localhost:9090 portundan,
Grafana için localhost:5000 portundan ulasilabilir.





