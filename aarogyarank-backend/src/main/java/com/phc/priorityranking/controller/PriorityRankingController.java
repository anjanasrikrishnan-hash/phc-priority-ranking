package com.phc.priorityranking.controller;

import com.opencsv.exceptions.CsvValidationException;
import com.phc.priorityranking.model.Phc;
import com.phc.priorityranking.model.RankedPhc;
import com.phc.priorityranking.service.CsvDataLoaderService;
import com.phc.priorityranking.service.PriorityRankingService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PriorityRankingController {

    private final CsvDataLoaderService csvDataLoaderService;
    private final PriorityRankingService priorityRankingService;

    public PriorityRankingController(
            CsvDataLoaderService csvDataLoaderService,
            PriorityRankingService priorityRankingService
    ) {
        this.csvDataLoaderService = csvDataLoaderService;
        this.priorityRankingService = priorityRankingService;
    }

    // Backend health check
    @GetMapping("/api/health")
    public String health() {
        return "PHC Priority Ranking backend is up";
    }

    // Get all PHCs from CSV
    @GetMapping("/api/phcs")
    public List<Phc> getAllPhcs()
            throws IOException, CsvValidationException {

        return csvDataLoaderService
                .loadFromClasspath("phcs.csv");
    }

    // Get all PHCs ranked by priority
    @GetMapping("/api/phcs/ranked")
    public List<RankedPhc> getRankedPhcs()
            throws IOException, CsvValidationException {

        return priorityRankingService.getRankedPhcs();
    }

    // Get calculated details of one PHC
    @GetMapping("/api/phcs/{id}")
    public RankedPhc getPhcById(@PathVariable String id)
            throws IOException, CsvValidationException {

        return priorityRankingService.getPhcById(id);
    }
    @GetMapping("/api/phcs/summary")
public String getSummary()
        throws IOException, CsvValidationException {

    int total = priorityRankingService.getTotalPhcs();

    long critical =
            priorityRankingService.countByPriorityLevel("CRITICAL");

    long high =
            priorityRankingService.countByPriorityLevel("HIGH");

    long medium =
            priorityRankingService.countByPriorityLevel("MEDIUM");

    long low =
            priorityRankingService.countByPriorityLevel("LOW");

    return String.format(
            "{\"total\":%d,\"critical\":%d,\"high\":%d,\"medium\":%d,\"low\":%d}",
            total,
            critical,
            high,
            medium,
            low
    );
}
@GetMapping("/api/filter/phcs")
public List<RankedPhc> filterByPriority(
        @RequestParam String priority)
        throws IOException, CsvValidationException {

    return priorityRankingService
            .filterByPriority(priority);
}
@GetMapping("/api/search/phcs")
public List<RankedPhc> searchPhcs(
        @RequestParam String query)
        throws IOException, CsvValidationException {

    return priorityRankingService.searchPhcs(query);
}
@GetMapping("/api/filter/search")
public List<RankedPhc> searchAndFilter(
        @RequestParam String query,
        @RequestParam String priority)
        throws IOException, CsvValidationException {

    return priorityRankingService.searchAndFilter(
            query,
            priority
    );
}
}