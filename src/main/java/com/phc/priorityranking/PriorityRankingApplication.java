package com.phc.priorityranking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PriorityRankingApplication {

    public static void main(String[] args) {
        SpringApplication.run(PriorityRankingApplication.class, args);
        System.out.println("PHC Priority Ranking System is running on http://localhost:8081");
    }
}
