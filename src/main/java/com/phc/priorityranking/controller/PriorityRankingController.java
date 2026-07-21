package com.phc.priorityranking.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST endpoints for the PHC ranking system.
 * Day 2 will add: GET /api/phcs/ranked (per the shared contract).
 */
@RestController
@CrossOrigin(origins = "*") // relax CORS for local dev with the HTML/JS frontend
public class PriorityRankingController {

    @GetMapping("/api/health")
    public String health() {
        return "PHC Priority Ranking backend is up";
    }
}