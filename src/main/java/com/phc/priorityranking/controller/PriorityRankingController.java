package com.phc.priorityranking.controller;

import com.phc.priorityranking.model.PHC;
import com.phc.priorityranking.service.CsvDataLoaderService;
import com.phc.priorityranking.service.PriorityRankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Exposes the PHC ranking as a REST endpoint for the frontend to consume.
 */
@RestController
@CrossOrigin(origins = "*") // relax CORS for local dev with the HTML/JS frontend
public class PriorityRankingController {

    private final CsvDataLoaderService csvDataLoaderService;
    private final PriorityRankingService priorityRankingService;

    @Autowired
    public PriorityRankingController(CsvDataLoaderService csvDataLoaderService,
                                      PriorityRankingService priorityRankingService) {
        this.csvDataLoaderService = csvDataLoaderService;
        this.priorityRankingService = priorityRankingService;
    }

    @GetMapping("/api/phc/ranking")
    public List<PHC> getRanking() throws Exception {
        List<PHC> phcs = csvDataLoaderService.loadFromClasspath("phc_data.csv");
        return priorityRankingService.rankPHCs(phcs);
    }

    @GetMapping("/api/health")
    public String health() {
        return "PHC Priority Ranking backend is up";
    }
}
