@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// Update `application.properties` in eureka-server

server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false


// application.properties (example for account-service)

spring.application.name=account-service
server.port=8081
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/

// application.properties for loan-service

spring.application.name=loan-service
server.port=8082
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/


//


