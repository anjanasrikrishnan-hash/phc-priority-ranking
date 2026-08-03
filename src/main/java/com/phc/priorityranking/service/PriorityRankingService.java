package com.phc.priorityranking.service;

import com.phc.priorityranking.agent.ScoringAgent;
import com.phc.priorityranking.model.Phc;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Orchestrates the scoring agents and combines their sub-scores
 * into one final priority score per PHC, then ranks them.
 * Weights: Infra 35%, Patient Load 35%, Staffing 30%.
 */
@Service
public class PriorityRankingService {

    private final List<ScoringAgent> agents;

    public PriorityRankingService(List<ScoringAgent> agents) {
        this.agents = agents;
    }

    // Day 2: weighted aggregation, sorting, rank assignment
    // Day 4: critical-dimension + explanation logic
    // Day 6: sensitivity analysis across weight sets
}